import type { H3Event } from 'h3'
import type { SiteCheckStatsSummary } from '~~/server/types/tools/siteCheckStats'
import { setResponseHeader } from 'h3'
import { SiteCheckStatsService } from '~~/server/services/SiteCheckStatsService'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'

/**
 * GET /api/dashboard/site-checks/stats : twelve months of free checks, counted per tool, month and verdict, never sites.
 * @param {H3Event} event - The request, with the dashboard session cookie.
 * @returns {Promise<SiteCheckStatsSummary>} The figures.
 */
export default defineEventHandler(async (event: H3Event): Promise<SiteCheckStatsSummary> => {
  requireDashboardAuth(event)
  setResponseHeader(event, 'cache-control', 'no-store')
  return SiteCheckStatsService.buildSummary()
})
