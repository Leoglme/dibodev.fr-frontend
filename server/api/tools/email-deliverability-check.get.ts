import type { H3Event } from 'h3'
import type {
  EmailDeliverabilityCheckQuery,
  EmailDeliverabilityCheckResult,
} from '~~/server/types/tools/emailDeliverabilityCheck'
import { createError, getQuery, getRequestIP, setResponseHeader } from 'h3'
import { EmailDeliverabilityCheckService } from '~~/server/services/EmailDeliverabilityCheckService'
import { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'

/**
 * GET /api/tools/email-deliverability-check?domain=<domain or e-mail address> : reads the SPF, DKIM, DMARC and MX.
 * @param {H3Event} event - The request.
 * @returns {Promise<EmailDeliverabilityCheckResult>} The verdict, the records read and the findings behind it.
 * @throws {H3Error} 400 for an unusable domain, 429 when the visitor checks too often, 502 when the DNS cannot be read.
 */
export default defineEventHandler(async (event: H3Event): Promise<EmailDeliverabilityCheckResult> => {
  const query: EmailDeliverabilityCheckQuery = getQuery(event)
  const domain: string | null = EmailDeliverabilityCheckService.normalizeDomain(String(query.domain ?? ''))

  if (!domain) {
    throw createError({ statusCode: 400, statusMessage: 'Enter a domain name, like monentreprise.fr.' })
  }
  PhpVulnerabilityCheckService.assertRateLimit(getRequestIP(event, { xForwardedFor: true }) ?? '')
  setResponseHeader(event, 'cache-control', 'no-store')
  return EmailDeliverabilityCheckService.checkDomain(domain)
})
