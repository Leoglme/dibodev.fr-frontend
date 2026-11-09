import type { H3Event } from 'h3'
import { createError, getQuery, getRequestIP, setResponseHeader } from 'h3'
import type { JoomlaVersionCheckQuery, JoomlaVersionCheckResult } from '~~/server/types/tools/joomlaVersionCheck'
import { JoomlaVersionCheckService } from '~~/server/services/JoomlaVersionCheckService'
import { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'
import { SiteCheckStatsService } from '~~/server/services/SiteCheckStatsService'

/**
 * GET /api/tools/joomla-version-check?site=<host> : reads the home page, the public version files of the core and the PHP header.
 * @param {H3Event} event - The request.
 * @returns {Promise<JoomlaVersionCheckResult>} The verdict and the clues behind it.
 * @throws {H3Error} 400 for an unusable host, 429 when the visitor checks too often, 502 when the site cannot be read.
 */
export default defineEventHandler(async (event: H3Event): Promise<JoomlaVersionCheckResult> => {
  const query: JoomlaVersionCheckQuery = getQuery(event)
  const host: string | null = PhpVulnerabilityCheckService.normalizeHost(String(query.site ?? ''))

  if (!host) {
    throw createError({ statusCode: 400, statusMessage: 'Enter a public site address, like monentreprise.fr.' })
  }
  PhpVulnerabilityCheckService.assertRateLimit(getRequestIP(event, { xForwardedFor: true }) ?? '')
  setResponseHeader(event, 'cache-control', 'no-store')
  const result: JoomlaVersionCheckResult = await JoomlaVersionCheckService.checkHost(host)
  await SiteCheckStatsService.recordJoomlaVersionCheck(result)
  return result
})
