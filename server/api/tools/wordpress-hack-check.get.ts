import type { H3Event } from 'h3'
import { createError, getQuery, getRequestIP, setResponseHeader } from 'h3'
import type { WordPressHackCheckQuery, WordPressHackCheckResult } from '~~/server/types/tools/wordpressHackCheck'
import { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'
import { WordPressHackCheckService } from '~~/server/services/WordPressHackCheckService'

/**
 * GET /api/tools/wordpress-hack-check?site=<host> : reads the home page, RSS feed, watched readme.txt and users route.
 * @param {H3Event} event - The request.
 * @returns {Promise<WordPressHackCheckResult>} The verdict and the clues behind it.
 * @throws {H3Error} 400 for an unusable host, 429 when the visitor checks too often, 502 when the site cannot be read.
 */
export default defineEventHandler(async (event: H3Event): Promise<WordPressHackCheckResult> => {
  const query: WordPressHackCheckQuery = getQuery(event)
  const host: string | null = PhpVulnerabilityCheckService.normalizeHost(String(query.site ?? ''))

  if (!host) {
    throw createError({ statusCode: 400, statusMessage: 'Enter a public site address, like monentreprise.fr.' })
  }
  PhpVulnerabilityCheckService.assertRateLimit(getRequestIP(event, { xForwardedFor: true }) ?? '')
  setResponseHeader(event, 'cache-control', 'no-store')
  return WordPressHackCheckService.checkHost(host)
})
