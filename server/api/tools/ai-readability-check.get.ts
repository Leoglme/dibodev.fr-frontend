import type { H3Event } from 'h3'
import type { AiReadabilityCheckQuery, AiReadabilityCheckResult } from '~~/server/types/tools/aiReadabilityCheck'
import { createError, getQuery, getRequestIP, setResponseHeader } from 'h3'
import { AiReadabilityCheckService } from '~~/server/services/AiReadabilityCheckService'
import { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'
import { SiteCheckStatsService } from '~~/server/services/SiteCheckStatsService'

/**
 * GET /api/tools/ai-readability-check?site=<host>: reads a public site as an AI robot does (robots.txt, home page, llms.txt).
 * @param {H3Event} event - The request.
 * @returns {Promise<AiReadabilityCheckResult>} The findings and the verdict.
 * @throws {H3Error} 400 for an unusable host, 429 when the visitor checks too often, 502 when the site cannot be read.
 */
export default defineEventHandler(async (event: H3Event): Promise<AiReadabilityCheckResult> => {
  const query: AiReadabilityCheckQuery = getQuery(event)
  const host: string | null = PhpVulnerabilityCheckService.normalizeHost(String(query.site ?? ''))

  if (!host) {
    throw createError({ statusCode: 400, statusMessage: 'Enter a public site address, like monentreprise.fr.' })
  }
  PhpVulnerabilityCheckService.assertRateLimit(getRequestIP(event, { xForwardedFor: true }) ?? '')
  setResponseHeader(event, 'cache-control', 'no-store')
  const result: AiReadabilityCheckResult = await AiReadabilityCheckService.checkHost(host)
  await SiteCheckStatsService.recordAiReadabilityCheck(result)
  return result
})
