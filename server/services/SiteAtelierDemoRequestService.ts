import type { LeadSource, MailLocale } from '~~/server/types/mail/contact'
import type {
  SiteAtelierDecodedAttachment,
  SiteAtelierDemoRequest,
  SiteAtelierDemoRequestGooglePlace,
  SiteAtelierDemoRequestRecord,
  SiteAtelierRateLimitWindow,
} from '~~/server/types/tools/siteAtelier'
import type { DibodevTradeWebsiteDefinition, DibodevTradeWebsiteTemplate } from '~~/app/core/types/DibodevTradeWebsite'
import { randomUUID } from 'node:crypto'
import { createError } from 'h3'
import { TRADE_WEBSITE_CATALOG } from '~~/app/core/constants/tradeWebsites/tradeWebsiteCatalog'
import { TRADE_WEBSITE_WORDING_FR } from '~~/app/core/constants/tradeWebsites/tradeWebsiteWording.fr'
import { SlugUtils } from '~~/app/core/utils/SlugUtils'
import { resolveMailLocale } from '~~/server/services/mail/contactMailTexts'
import {
  sendSiteAtelierAcknowledgementMail,
  sendSiteAtelierOwnerMail,
} from '~~/server/services/mail/sendSiteAtelierDemoRequestMails'
import { PagePathUtils } from '~~/server/utils/PagePathUtils'

const REQUEST_STORAGE_KEY_PREFIX: string = 'site-atelier:requests:'
const REQUEST_RETENTION_MS: number = 365 * 24 * 60 * 60 * 1000
const RATE_LIMIT_WINDOW_MS: number = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS: number = 5
const RATE_ENTRIES_MAX: number = 2000
const EMAIL_MAX_LENGTH: number = 254
const EMAIL_REGEX: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const HEX_COLOR_REGEX: RegExp = /^#[0-9a-f]{6}$/i
const BUSINESS_NAME_MAX_LENGTH: number = 120
const CITY_MAX_LENGTH: number = 80
const PHONE_MAX_LENGTH: number = 32
const TEMPLATE_NAME_MAX_LENGTH: number = 60
const SERVICE_LABEL_MAX_LENGTH: number = 120
const SERVICES_MAX: number = 12
const PHOTO_COUNT_MAX: number = 6
const GOOGLE_PLACE_NAME_MAX_LENGTH: number = 200
const GOOGLE_PHOTO_URLS_MAX: number = 3
const URL_MAX_LENGTH: number = 2000
const SOURCE_TEXT_MAX_LENGTH: number = 300
const ATTACHMENTS_MAX: number = 3
const ATTACHMENT_MAX_BYTES: number = 1_500_000
const ATTACHMENT_FILE_NAME_MAX_LENGTH: number = 80
const IMAGE_DATA_URL_REGEX: RegExp = /^data:(image\/(?:jpeg|png|webp|gif|svg\+xml));base64,([A-Za-z0-9+/]+={0,2})$/
const CONTROL_CHARACTERS_REGEX: RegExp = /\p{Cc}+/gu
const UNSAFE_FILE_NAME_CHARACTERS_REGEX: RegExp = /[^\w.-]+/g
const EXTENSION_BY_CONTENT_TYPE: Record<string, string> = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'image/gif': '.gif',
  'image/svg+xml': '.svg',
}

const rateByAddress: Map<string, SiteAtelierRateLimitWindow> = new Map()

/** Demo requests sent from the site workshop of the trade pages: checks, keeps and forwards them to the owner. */
export class SiteAtelierDemoRequestService {
  /**
   * Refuses an address that has already sent its share of requests in the current window.
   * @param {string} address - The visitor's IP address, or an empty string when unknown.
   * @returns {void}
   * @throws {H3Error} 429 when the window is exhausted.
   */
  static assertRateLimit(address: string): void {
    const key: string = address || 'unknown'
    const now: number = Date.now()
    const entry: SiteAtelierRateLimitWindow | undefined = rateByAddress.get(key)

    if (!entry || entry.resetAt <= now) {
      rateByAddress.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
      if (rateByAddress.size > RATE_ENTRIES_MAX) {
        for (const [candidate, candidateEntry] of rateByAddress) {
          if (candidateEntry.resetAt <= now) {
            rateByAddress.delete(candidate)
          }
        }
      }
      return
    }
    entry.count += 1
    if (entry.count > RATE_LIMIT_MAX_REQUESTS) {
      throw createError({ statusCode: 429, statusMessage: 'Too many requests from this address. Try again later.' })
    }
  }

  /**
   * Tells whether the honeypot field, hidden from visitors, was filled by a robot.
   * @param {Record<string, unknown>} body - The raw request body.
   * @returns {boolean} True for a robot.
   */
  static isRobot(body: Record<string, unknown>): boolean {
    return this.text(body.websiteUrl, URL_MAX_LENGTH) !== ''
  }

  /**
   * Checks a demo request and decodes its pictures.
   * @param {Record<string, unknown>} body - The raw request body.
   * @returns {SiteAtelierDemoRequest} The request, ready to be kept and sent.
   * @throws {H3Error} 400 when a required field is missing or a field is not usable.
   */
  static parse(body: Record<string, unknown>): SiteAtelierDemoRequest {
    const trade: DibodevTradeWebsiteDefinition = this.parseTrade(body.trade)
    const templateId: string = this.parseTemplateId(trade, body.templateId)
    const businessName: string = this.text(body.businessName, BUSINESS_NAME_MAX_LENGTH)
    const visitorEmail: string = this.text(body.visitorEmail, EMAIL_MAX_LENGTH).toLowerCase()

    if (!businessName) {
      throw createError({ statusCode: 400, statusMessage: 'Invalid payload: businessName is required.' })
    }
    if (!EMAIL_REGEX.test(visitorEmail)) {
      throw createError({ statusCode: 400, statusMessage: 'Invalid payload: visitorEmail is not an e-mail address.' })
    }
    const color: string = this.text(body.color, 7)
    const locale: MailLocale = resolveMailLocale(this.text(body.locale, 5))
    const photoCount: number = Number(body.photoCount)

    return {
      id: randomUUID(),
      trade: trade.key,
      tradeLabel: TRADE_WEBSITE_WORDING_FR.tradeLabels[trade.key],
      templateId,
      templateName: this.text(body.templateName, TEMPLATE_NAME_MAX_LENGTH) || templateId,
      color: HEX_COLOR_REGEX.test(color) ? color.toLowerCase() : null,
      businessName,
      city: this.text(body.city, CITY_MAX_LENGTH),
      phone: this.text(body.phone, PHONE_MAX_LENGTH),
      suggestedSlug: SlugUtils.slugify(businessName),
      services: this.parseServices(body.services),
      hasEmergencyService: trade.hasEmergencyService && body.hasEmergencyService === true,
      googlePlace: this.parseGooglePlace(body.googlePlace),
      visitorEmail,
      visitorPhone: this.text(body.visitorPhone, PHONE_MAX_LENGTH) || null,
      attachments: this.parseAttachments(body.attachments),
      hasLogo: body.hasLogo === true,
      photoCount: Number.isInteger(photoCount) ? Math.min(Math.max(photoCount, 0), PHOTO_COUNT_MAX) : 0,
      locale,
      pagePath: PagePathUtils.normalize(body.pagePath),
      source: this.parseLeadSource(body.source),
      receivedAt: new Date().toISOString(),
    }
  }

  /**
   * Keeps the request for the dashboard, then sends it to the owner with its pictures and confirms it to the visitor.
   * @param {SiteAtelierDemoRequest} request - The checked request.
   * @returns {Promise<void>} Resolves once both e-mails are sent.
   * @throws {H3Error} 500 when the e-mail to the owner cannot be sent.
   */
  static async submit(request: SiteAtelierDemoRequest): Promise<void> {
    await this.store(request)
    try {
      await sendSiteAtelierOwnerMail(request)
    } catch (error: unknown) {
      console.error('SiteAtelierDemoRequestService:submit:owner', { id: request.id, error })
      throw createError({ statusCode: 500, statusMessage: 'Failed to send the demo request.' })
    }
    try {
      await sendSiteAtelierAcknowledgementMail(request)
    } catch (error: unknown) {
      console.error('SiteAtelierDemoRequestService:submit:acknowledgement', { id: request.id, error })
    }
  }

  /**
   * Keeps a request without its pictures; a storage failure is logged and never reaches the visitor.
   * @param {SiteAtelierDemoRequest} request - The checked request.
   * @returns {Promise<void>}
   */
  private static async store(request: SiteAtelierDemoRequest): Promise<void> {
    const { attachments, ...requestWithoutPictures }: SiteAtelierDemoRequest = request
    const record: SiteAtelierDemoRequestRecord = {
      ...requestWithoutPictures,
      attachmentNames: attachments.map((attachment: SiteAtelierDecodedAttachment): string => attachment.fileName),
    }
    try {
      const storage: ReturnType<typeof useStorage> = useStorage('data')
      await storage.setItem(`${REQUEST_STORAGE_KEY_PREFIX}${request.id}`, record)
      await this.forgetOldRequests(storage)
    } catch (error: unknown) {
      console.error('SiteAtelierDemoRequestService:store', { id: request.id, error })
    }
  }

  /**
   * Erases the requests kept for more than a year, as the privacy page says.
   * @param {ReturnType<typeof useStorage>} storage - The data storage of the server.
   * @returns {Promise<void>}
   */
  private static async forgetOldRequests(storage: ReturnType<typeof useStorage>): Promise<void> {
    const oldestKeptReceivedAt: number = Date.now() - REQUEST_RETENTION_MS
    const keys: string[] = await storage.getKeys(REQUEST_STORAGE_KEY_PREFIX)
    for (const key of keys) {
      const storedRequest: SiteAtelierDemoRequestRecord | null =
        await storage.getItem<SiteAtelierDemoRequestRecord>(key)
      if (!storedRequest || Date.parse(storedRequest.receivedAt) < oldestKeptReceivedAt) {
        await storage.removeItem(key)
      }
    }
  }

  /**
   * One line of text, trimmed and cut to a length.
   * @param {unknown} value - The raw value.
   * @param {number} maxLength - Longest text kept.
   * @returns {string} The text, empty when the value is not a string.
   */
  private static text(value: unknown, maxLength: number): string {
    if (typeof value !== 'string') {
      return ''
    }
    return value.replace(CONTROL_CHARACTERS_REGEX, ' ').trim().slice(0, maxLength).trim()
  }

  /**
   * Finds the trade of the request.
   * @param {unknown} value - The raw trade key.
   * @returns {DibodevTradeWebsiteDefinition} The trade.
   * @throws {H3Error} 400 for an unknown trade.
   */
  private static parseTrade(value: unknown): DibodevTradeWebsiteDefinition {
    const trade: DibodevTradeWebsiteDefinition | undefined = TRADE_WEBSITE_CATALOG.find(
      (candidate: DibodevTradeWebsiteDefinition): boolean => candidate.key === value,
    )
    if (!trade) {
      throw createError({ statusCode: 400, statusMessage: 'Invalid payload: unknown trade.' })
    }
    return trade
  }

  /**
   * Checks that the template belongs to the trade.
   * @param {DibodevTradeWebsiteDefinition} trade - The trade of the request.
   * @param {unknown} value - The raw template id.
   * @returns {string} The template id.
   * @throws {H3Error} 400 for a template of another trade.
   */
  private static parseTemplateId(trade: DibodevTradeWebsiteDefinition, value: unknown): string {
    const template: DibodevTradeWebsiteTemplate | undefined = trade.templates.find(
      (candidate: DibodevTradeWebsiteTemplate): boolean => candidate.id === value,
    )
    if (!template) {
      throw createError({ statusCode: 400, statusMessage: 'Invalid payload: unknown template.' })
    }
    return template.id
  }

  /**
   * Keeps the service labels picked by the visitor.
   * @param {unknown} value - The raw list.
   * @returns {string[]} Twelve labels at most.
   */
  private static parseServices(value: unknown): string[] {
    if (!Array.isArray(value)) {
      return []
    }
    return value
      .map((service: unknown): string => this.text(service, SERVICE_LABEL_MAX_LENGTH))
      .filter((service: string): boolean => service !== '')
      .slice(0, SERVICES_MAX)
  }

  /**
   * Keeps an https address.
   * @param {unknown} value - The raw value.
   * @returns {string | null} The address, or null.
   */
  private static httpsUrl(value: unknown): string | null {
    const url: string = this.text(value, URL_MAX_LENGTH)
    return url.startsWith('https://') ? url : null
  }

  /**
   * Keeps the Google Business profile picked by the visitor.
   * @param {unknown} value - The raw profile.
   * @returns {SiteAtelierDemoRequestGooglePlace | null} The profile, or null.
   */
  private static parseGooglePlace(value: unknown): SiteAtelierDemoRequestGooglePlace | null {
    if (typeof value !== 'object' || value === null) {
      return null
    }
    const name: string = this.text(Reflect.get(value, 'name'), GOOGLE_PLACE_NAME_MAX_LENGTH)
    if (!name) {
      return null
    }
    const rating: unknown = Reflect.get(value, 'rating')
    const reviewCount: unknown = Reflect.get(value, 'reviewCount')
    const rawPhotoUrls: unknown = Reflect.get(value, 'photoUrls')
    const photoUrls: string[] = Array.isArray(rawPhotoUrls)
      ? rawPhotoUrls
          .map((photoUrl: unknown): string | null => this.httpsUrl(photoUrl))
          .filter((photoUrl: string | null): photoUrl is string => photoUrl !== null)
          .slice(0, GOOGLE_PHOTO_URLS_MAX)
      : []
    return {
      name,
      rating: typeof rating === 'number' && Number.isFinite(rating) ? rating : null,
      reviewCount: typeof reviewCount === 'number' && Number.isInteger(reviewCount) ? reviewCount : null,
      mapsUrl: this.httpsUrl(Reflect.get(value, 'mapsUrl')),
      photoUrls,
    }
  }

  /**
   * Keeps the first-touch source of the visitor.
   * @param {unknown} value - The raw source.
   * @returns {LeadSource | null} The source, or null.
   */
  private static parseLeadSource(value: unknown): LeadSource | null {
    if (typeof value !== 'object' || value === null) {
      return null
    }
    return {
      referrer: this.sourceField(value, 'referrer'),
      landingPage: this.sourceField(value, 'landingPage'),
      utmSource: this.sourceField(value, 'utmSource'),
      utmMedium: this.sourceField(value, 'utmMedium'),
      utmCampaign: this.sourceField(value, 'utmCampaign'),
    }
  }

  /**
   * One field of the first-touch source.
   * @param {object} source - The raw source.
   * @param {string} field - The field to read.
   * @returns {string | null} Its text, or null when empty.
   */
  private static sourceField(source: object, field: string): string | null {
    return this.text(Reflect.get(source, field), SOURCE_TEXT_MAX_LENGTH) || null
  }

  /**
   * Decodes the pictures sent with the request.
   * @param {unknown} value - The raw list of `{ fileName, dataUrl }`.
   * @returns {SiteAtelierDecodedAttachment[]} Three pictures at most.
   * @throws {H3Error} 400 when a picture is not an image or is too heavy.
   */
  private static parseAttachments(value: unknown): SiteAtelierDecodedAttachment[] {
    if (!Array.isArray(value)) {
      return []
    }
    if (value.length > ATTACHMENTS_MAX) {
      throw createError({ statusCode: 400, statusMessage: 'Invalid payload: three pictures at most.' })
    }
    return value.map((attachment: unknown, index: number): SiteAtelierDecodedAttachment => {
      const dataUrl: string =
        typeof attachment === 'object' && attachment !== null ? String(Reflect.get(attachment, 'dataUrl') ?? '') : ''
      const match: RegExpExecArray | null = IMAGE_DATA_URL_REGEX.exec(dataUrl)
      const contentType: string | undefined = match?.[1]
      const base64Content: string | undefined = match?.[2]
      if (!contentType || !base64Content) {
        throw createError({ statusCode: 400, statusMessage: 'Invalid payload: a picture is not an image.' })
      }
      if (Buffer.byteLength(base64Content, 'base64') > ATTACHMENT_MAX_BYTES) {
        throw createError({ statusCode: 400, statusMessage: 'Invalid payload: a picture is too heavy.' })
      }
      const rawFileName: unknown =
        typeof attachment === 'object' && attachment !== null ? Reflect.get(attachment, 'fileName') : ''
      return {
        fileName: this.fileNameOf(rawFileName, contentType, index),
        contentType,
        base64Content,
      }
    })
  }

  /**
   * A safe file name for an attachment, ending with the extension of its content type.
   * @param {unknown} rawFileName - The name of the visitor's file.
   * @param {string} contentType - The content type of the picture.
   * @param {number} index - Its position, used when the name is empty.
   * @returns {string} The file name.
   */
  private static fileNameOf(rawFileName: unknown, contentType: string, index: number): string {
    const extension: string = EXTENSION_BY_CONTENT_TYPE[contentType] ?? ''
    const baseName: string = this.text(rawFileName, ATTACHMENT_FILE_NAME_MAX_LENGTH)
      .replace(/\.[^.]*$/, '')
      .replace(UNSAFE_FILE_NAME_CHARACTERS_REGEX, '-')
      .replace(/^-+|-+$/g, '')
    return `${baseName || `image-${index + 1}`}${extension}`
  }
}
