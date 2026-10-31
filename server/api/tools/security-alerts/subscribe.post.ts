import type { H3Event } from 'h3'
import { createError, getRequestIP, readBody, setResponseHeader } from 'h3'
import type { MailLocale } from '~~/server/types/mail/contact'
import type {
  SecurityAlertSubscribePayload,
  SecurityAlertSubscribeResult,
  SecurityAlertTopic,
} from '~~/server/types/tools/securityAlerts'
import { EmailCaptureDigestService } from '~~/server/services/EmailCaptureDigestService'
import { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'
import { SecurityAlertService } from '~~/server/services/SecurityAlertService'
import { resolveMailLocale } from '~~/server/services/mail/contactMailTexts'
import { PagePathUtils } from '~~/server/utils/PagePathUtils'

/**
 * POST /api/tools/security-alerts/subscribe : records an alert request, sends the confirmation mail, adds it to the daily recap.
 * @param {H3Event} event - The request, with `{ email, site?, topic, locale?, source?, pagePath? }` as body.
 * @returns {Promise<SecurityAlertSubscribeResult>} Whether a confirmation was sent, without echoing the address.
 * @throws {H3Error} 400 for an unusable address or topic, 429 when the visitor asks too often.
 */
export default defineEventHandler(async (event: H3Event): Promise<SecurityAlertSubscribeResult> => {
  const body: SecurityAlertSubscribePayload = (await readBody<SecurityAlertSubscribePayload>(event)) ?? {}
  const email: string | null = SecurityAlertService.normalizeEmail(body.email)
  const topic: SecurityAlertTopic | null = SecurityAlertService.parseTopic(body.topic)

  if (!email) {
    throw createError({ statusCode: 400, statusMessage: 'Enter a valid e-mail address.' })
  }
  if (!topic) {
    throw createError({ statusCode: 400, statusMessage: 'Unknown alert topic.' })
  }
  SecurityAlertService.assertRateLimit(getRequestIP(event, { xForwardedFor: true }) ?? '')
  setResponseHeader(event, 'cache-control', 'no-store')
  const locale: MailLocale = resolveMailLocale(String(body.locale ?? ''))
  const site: string | null = PhpVulnerabilityCheckService.normalizeHost(String(body.site ?? ''))
  const result: SecurityAlertSubscribeResult = await SecurityAlertService.subscribe({
    email,
    site,
    topic,
    locale,
    source: SecurityAlertService.parseSource(body.source),
  })

  if (result.outcome === 'confirmationSent') {
    await EmailCaptureDigestService.record({
      kind: 'alert',
      email,
      site,
      alertTopic: topic,
      projectType: null,
      pagePath: PagePathUtils.normalize(body.pagePath),
      landingPagePath: null,
      locale,
      acquisitionSource: null,
    })
  }
  return result
})
