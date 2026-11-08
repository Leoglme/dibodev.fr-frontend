import type { MailLocale } from '~~/server/types/mail/contact'
import type {
  SiteCheckLeadRecord,
  SiteCheckReport,
  SiteCheckReportMailTexts,
  SiteCheckReportRateLimitWindow,
  SiteCheckReportRequest,
  SiteCheckToolKey,
} from '~~/server/types/tools/siteCheckReport'
import { randomUUID } from 'node:crypto'
import { createError } from 'h3'
import { SITE_CHECK_TOOL_KEYS } from '~~/server/constants/siteCheckTools'
import { EmailDeliverabilityCheckService } from '~~/server/services/EmailDeliverabilityCheckService'
import { GdprCookieCheckService } from '~~/server/services/GdprCookieCheckService'
import { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'
import { WebsiteHealthCheckService } from '~~/server/services/WebsiteHealthCheckService'
import { WordPressHackCheckService } from '~~/server/services/WordPressHackCheckService'
import { resolveMailLocale } from '~~/server/services/mail/contactMailTexts'
import { SiteCheckReportMailService } from '~~/server/services/mail/SiteCheckReportMailService'
import { SITE_CHECK_REPORT_MAIL_TEXTS } from '~~/server/services/mail/siteCheckReportMailTexts'
import { EmailDeliverabilityReportService } from '~~/server/services/siteCheckReport/EmailDeliverabilityReportService'
import { GdprCookieReportService } from '~~/server/services/siteCheckReport/GdprCookieReportService'
import { PhpVulnerabilityReportService } from '~~/server/services/siteCheckReport/PhpVulnerabilityReportService'
import { WebsiteHealthReportService } from '~~/server/services/siteCheckReport/WebsiteHealthReportService'
import { WordPressHackReportService } from '~~/server/services/siteCheckReport/WordPressHackReportService'
import { PagePathUtils } from '~~/server/utils/PagePathUtils'

const LEAD_STORAGE_KEY_PREFIX: string = 'site-check-leads:'
const LEAD_RETENTION_MS: number = 365 * 24 * 60 * 60 * 1000
const ADDRESS_LIMIT_WINDOW_MS: number = 60 * 60 * 1000
const ADDRESS_LIMIT_MAX_REQUESTS: number = 3
const RECIPIENT_LIMIT_WINDOW_MS: number = 24 * 60 * 60 * 1000
const RECIPIENT_LIMIT_MAX_REQUESTS: number = 3
const RATE_ENTRIES_MAX: number = 2000
const EMAIL_MAX_LENGTH: number = 254
const SITE_MAX_LENGTH: number = 300
const HONEYPOT_MAX_LENGTH: number = 300
const EMAIL_REGEX: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const CONTROL_CHARACTERS_REGEX: RegExp = /\p{Cc}+/gu

const requestsByAddress: Map<string, SiteCheckReportRateLimitWindow> = new Map()
const requestsByRecipient: Map<string, SiteCheckReportRateLimitWindow> = new Map()

/** The result of a free check e-mailed on request: the server runs the check again and writes the mail itself. */
export class SiteCheckReportService {
  /**
   * Tells whether the honeypot field, hidden from visitors, was filled by a robot.
   * @param {Record<string, unknown>} body - The raw request body.
   * @returns {boolean} True for a robot.
   */
  static isRobot(body: Record<string, unknown>): boolean {
    return this.readTextField(body.website, HONEYPOT_MAX_LENGTH) !== ''
  }

  /**
   * Checks a request: a known checker, a usable public site or domain, an e-mail address and the consent as a boolean.
   * @param {Record<string, unknown>} body - The raw request body.
   * @returns {SiteCheckReportRequest} The request, ready to be run.
   * @throws {H3Error} 400 when a field is missing or not usable.
   */
  static parse(body: Record<string, unknown>): SiteCheckReportRequest {
    const tool: SiteCheckToolKey | undefined = SITE_CHECK_TOOL_KEYS.find(
      (candidate: SiteCheckToolKey): boolean => candidate === body.tool,
    )
    if (!tool) {
      throw createError({ statusCode: 400, statusMessage: 'Invalid payload: unknown tool.' })
    }
    const site: string | null = this.normalizeSite(tool, this.readTextField(body.site, SITE_MAX_LENGTH))
    if (!site) {
      throw createError({ statusCode: 400, statusMessage: 'Invalid payload: site is not a public site address.' })
    }
    const email: string = this.readTextField(body.email, EMAIL_MAX_LENGTH).toLowerCase()
    if (!EMAIL_REGEX.test(email)) {
      throw createError({ statusCode: 400, statusMessage: 'Invalid payload: email is not an e-mail address.' })
    }
    const locale: MailLocale = resolveMailLocale(this.readTextField(body.locale, 5))

    return {
      id: randomUUID(),
      tool,
      site,
      email,
      locale,
      contactConsent: body.contactConsent === true,
      pagePath: PagePathUtils.normalize(body.pagePath),
      receivedAt: new Date().toISOString(),
    }
  }

  /**
   * Refuses a request beyond three per hour from one address, or three per day to one recipient.
   * @param {string} address - The visitor's IP address, or an empty string when unknown.
   * @param {string} email - The recipient of the report.
   * @returns {void}
   * @throws {H3Error} 429 when one of the two windows is exhausted.
   */
  static assertRateLimit(address: string, email: string): void {
    const isAddressAllowed: boolean = this.countRequest(
      requestsByAddress,
      address || 'unknown',
      ADDRESS_LIMIT_WINDOW_MS,
      ADDRESS_LIMIT_MAX_REQUESTS,
    )
    const isRecipientAllowed: boolean = this.countRequest(
      requestsByRecipient,
      email,
      RECIPIENT_LIMIT_WINDOW_MS,
      RECIPIENT_LIMIT_MAX_REQUESTS,
    )
    if (!isAddressAllowed || !isRecipientAllowed) {
      throw createError({ statusCode: 429, statusMessage: 'Too many reports requested. Try again later.' })
    }
  }

  /**
   * Sends the report, then, with the contact consent only, keeps the contact and tells the owner at once.
   * @param {SiteCheckReportRequest} request - The checked request.
   * @returns {Promise<void>} Resolves once the report is sent.
   * @throws {H3Error} 400 or 502 from the check, 500 when the report cannot be sent.
   */
  static async submit(request: SiteCheckReportRequest): Promise<void> {
    const report: SiteCheckReport = await this.buildReport(request)
    try {
      await SiteCheckReportMailService.sendReportMail(request, report)
    } catch (error: unknown) {
      console.error('SiteCheckReportService:submit:report', { id: request.id, tool: request.tool, error })
      throw createError({ statusCode: 500, statusMessage: 'Failed to send the report.' })
    }
    if (!request.contactConsent) {
      return
    }
    await this.storeLead(request, report)
    try {
      const frenchReport: SiteCheckReport =
        request.locale === 'fr' ? report : await this.buildReport({ ...request, locale: 'fr' })
      await SiteCheckReportMailService.sendLeadMail(request, frenchReport)
    } catch (error: unknown) {
      console.error('SiteCheckReportService:submit:lead', { id: request.id, tool: request.tool, error })
    }
  }

  /**
   * Runs the checker of the request (its cache answers when the visitor has just checked) and writes its report.
   * @param {SiteCheckReportRequest} request - The checked request.
   * @returns {Promise<SiteCheckReport>} The report, in the visitor's language.
   * @throws {H3Error} 400 for a private host, 502 when the site cannot be read.
   */
  static async buildReport(request: SiteCheckReportRequest): Promise<SiteCheckReport> {
    const texts: SiteCheckReportMailTexts = SITE_CHECK_REPORT_MAIL_TEXTS[request.locale]
    switch (request.tool) {
      case 'phpVulnerability':
        return PhpVulnerabilityReportService.build(
          await PhpVulnerabilityCheckService.checkHost(request.site),
          request.locale,
          texts,
        )
      case 'wordpressHack':
        return WordPressHackReportService.build(
          await WordPressHackCheckService.checkHost(request.site),
          request.locale,
          texts,
        )
      case 'emailDeliverability':
        return EmailDeliverabilityReportService.build(
          await EmailDeliverabilityCheckService.checkDomain(request.site),
          request.locale,
          texts,
        )
      case 'websiteHealth':
        return WebsiteHealthReportService.build(
          await WebsiteHealthCheckService.checkHost(request.site),
          request.locale,
          texts,
        )
      case 'gdprCookie':
        return GdprCookieReportService.build(await GdprCookieCheckService.checkHost(request.site), request.locale)
    }
  }

  /**
   * Keeps the contact of a visitor who agreed to be contacted about the site; a storage failure is logged only.
   * @param {SiteCheckReportRequest} request - The checked request.
   * @param {SiteCheckReport} report - The report sent.
   * @returns {Promise<void>}
   */
  private static async storeLead(request: SiteCheckReportRequest, report: SiteCheckReport): Promise<void> {
    const lead: SiteCheckLeadRecord = {
      id: request.id,
      tool: request.tool,
      host: report.host,
      verdict: report.verdict,
      email: request.email,
      locale: request.locale,
      pagePath: request.pagePath,
      receivedAt: request.receivedAt,
    }
    try {
      const storage: ReturnType<typeof useStorage> = useStorage('data')
      await storage.setItem(`${LEAD_STORAGE_KEY_PREFIX}${lead.id}`, lead)
      await this.forgetOldLeads(storage)
    } catch (error: unknown) {
      console.error('SiteCheckReportService:storeLead', { id: request.id, error })
    }
  }

  /**
   * Erases the contacts kept for more than a year, as the privacy page says.
   * @param {ReturnType<typeof useStorage>} storage - The data storage of the server.
   * @returns {Promise<void>}
   */
  private static async forgetOldLeads(storage: ReturnType<typeof useStorage>): Promise<void> {
    const oldestKeptReceivedAt: number = Date.now() - LEAD_RETENTION_MS
    const keys: string[] = await storage.getKeys(LEAD_STORAGE_KEY_PREFIX)
    for (const key of keys) {
      const lead: SiteCheckLeadRecord | null = await storage.getItem<SiteCheckLeadRecord>(key)
      if (!lead || Date.parse(lead.receivedAt) < oldestKeptReceivedAt) {
        await storage.removeItem(key)
      }
    }
  }

  /**
   * Turns what the visitor checked into the host or domain its checker reads.
   * @param {SiteCheckToolKey} tool - The checker.
   * @param {string} site - The site or domain sent by the page.
   * @returns {string | null} The host or domain, or null when it is not usable.
   */
  private static normalizeSite(tool: SiteCheckToolKey, site: string): string | null {
    return tool === 'emailDeliverability'
      ? EmailDeliverabilityCheckService.normalizeDomain(site)
      : PhpVulnerabilityCheckService.normalizeHost(site)
  }

  /**
   * Counts a request in a window and tells whether it stays within the limit.
   * @param {Map<string, SiteCheckReportRateLimitWindow>} windows - The windows of one limit.
   * @param {string} key - The address or the recipient.
   * @param {number} windowMs - Length of the window.
   * @param {number} maxRequests - Requests allowed in the window.
   * @returns {boolean} True when the request is allowed.
   */
  private static countRequest(
    windows: Map<string, SiteCheckReportRateLimitWindow>,
    key: string,
    windowMs: number,
    maxRequests: number,
  ): boolean {
    const now: number = Date.now()
    const entry: SiteCheckReportRateLimitWindow | undefined = windows.get(key)

    if (!entry || entry.resetAt <= now) {
      windows.set(key, { count: 1, resetAt: now + windowMs })
      if (windows.size > RATE_ENTRIES_MAX) {
        for (const [candidate, candidateEntry] of windows) {
          if (candidateEntry.resetAt <= now) {
            windows.delete(candidate)
          }
        }
      }
      return true
    }
    entry.count += 1
    return entry.count <= maxRequests
  }

  /**
   * One line of text, trimmed and cut to a length.
   * @param {unknown} value - The raw value.
   * @param {number} maxLength - Longest text kept.
   * @returns {string} The text, empty when the value is not a string.
   */
  private static readTextField(value: unknown, maxLength: number): string {
    if (typeof value !== 'string') {
      return ''
    }
    return value.replace(CONTROL_CHARACTERS_REGEX, ' ').trim().slice(0, maxLength).trim()
  }
}
