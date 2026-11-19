import type { H3Event } from 'h3'
import type { GmailSendAsCheckQuery, GmailSendAsCheckResult } from '~~/server/types/tools/gmailSendAsCheck'
import { createError, getQuery, getRequestIP, setResponseHeader } from 'h3'
import { EmailDeliverabilityCheckService } from '~~/server/services/EmailDeliverabilityCheckService'
import { GmailSendAsCheckService } from '~~/server/services/GmailSendAsCheckService'
import { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'
import { SiteCheckStatsService } from '~~/server/services/SiteCheckStatsService'

/**
 * GET /api/tools/gmail-send-as-check?domain=<domain or e-mail address>: tells where the mail of the domain is hosted.
 * @param {H3Event} event - The request.
 * @returns {Promise<GmailSendAsCheckResult>} The hosting of the mail and the host recognized.
 * @throws {H3Error} 400 for an unusable domain, 429 when the visitor checks too often, 502 when the DNS cannot be read.
 */
export default defineEventHandler(async (event: H3Event): Promise<GmailSendAsCheckResult> => {
  const query: GmailSendAsCheckQuery = getQuery(event)
  const domain: string | null = EmailDeliverabilityCheckService.normalizeDomain(String(query.domain ?? ''))

  if (!domain) {
    throw createError({ statusCode: 400, statusMessage: 'Enter an e-mail address or a domain, like monentreprise.fr.' })
  }
  PhpVulnerabilityCheckService.assertRateLimit(getRequestIP(event, { xForwardedFor: true }) ?? '')
  setResponseHeader(event, 'cache-control', 'no-store')
  const result: GmailSendAsCheckResult = await GmailSendAsCheckService.checkDomain(domain)
  await SiteCheckStatsService.recordGmailSendAsCheck(result)
  return result
})
