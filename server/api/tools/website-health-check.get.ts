import type { H3Event } from 'h3'
import type { WebsiteHealthCheckQuery, WebsiteHealthCheckResult } from '~~/server/types/tools/websiteHealthCheck'
import { createError, getQuery, getRequestIP, setResponseHeader } from 'h3'
import { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'
import { WebsiteHealthCheckService } from '~~/server/services/WebsiteHealthCheckService'
import { SiteCheckStatsService } from '~~/server/services/SiteCheckStatsService'

/**
 * GET /api/tools/website-health-check?site=<host> : reads the home page of a public site and answers eight questions
 * (HTTPS, PHP, WordPress, e-mails, phone display, title and description, legal notice, signs of age). The PHP,
 * WordPress and e-mail parts reuse the existing checkers. The site and its verdicts are kept twelve months for
 * statistics only.
 *
 * @param {H3Event} event - The request.
 * @returns {Promise<WebsiteHealthCheckResult>} The eight verdicts and the overall one.
 * @throws {H3Error} 400 for an unusable host, 429 when the visitor checks too often, 502 when the site cannot be read.
 */
export default defineEventHandler(async (event: H3Event): Promise<WebsiteHealthCheckResult> => {
  const query: WebsiteHealthCheckQuery = getQuery(event)
  const host: string | null = PhpVulnerabilityCheckService.normalizeHost(String(query.site ?? ''))

  if (!host) {
    throw createError({ statusCode: 400, statusMessage: 'Enter a public site address, like monentreprise.fr.' })
  }
  PhpVulnerabilityCheckService.assertRateLimit(getRequestIP(event, { xForwardedFor: true }) ?? '')
  setResponseHeader(event, 'cache-control', 'no-store')
  const result: WebsiteHealthCheckResult = await WebsiteHealthCheckService.checkHost(host)
  await SiteCheckStatsService.recordWebsiteHealthCheck(result)
  return result
})
