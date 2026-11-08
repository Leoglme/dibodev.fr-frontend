import type { H3Event } from 'h3'
import type { GdprCookieCheckQuery, GdprCookieCheckResult } from '~~/server/types/tools/gdprCookieCheck'
import { createError, getQuery, getRequestIP, setResponseHeader } from 'h3'
import { GdprCookieCheckService } from '~~/server/services/GdprCookieCheckService'
import { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'

/**
 * GET /api/tools/gdpr-cookie-check?site=<host>: reads a public home page and lists its trackers, consent tool and legal links.
 * @param {H3Event} event - The request.
 * @returns {Promise<GdprCookieCheckResult>} The trackers, the consent tool, the links and the verdict.
 * @throws {H3Error} 400 for an unusable host, 429 when the visitor checks too often, 502 when the site cannot be read.
 */
export default defineEventHandler(async (event: H3Event): Promise<GdprCookieCheckResult> => {
  const query: GdprCookieCheckQuery = getQuery(event)
  const host: string | null = PhpVulnerabilityCheckService.normalizeHost(String(query.site ?? ''))

  if (!host) {
    throw createError({ statusCode: 400, statusMessage: 'Enter a public site address, like monentreprise.fr.' })
  }
  PhpVulnerabilityCheckService.assertRateLimit(getRequestIP(event, { xForwardedFor: true }) ?? '')
  setResponseHeader(event, 'cache-control', 'no-store')
  return GdprCookieCheckService.checkHost(host)
})
