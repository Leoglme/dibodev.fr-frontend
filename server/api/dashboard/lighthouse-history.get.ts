import type { H3Event } from 'h3'
import type { LighthouseHistoryResponse } from '~~/server/types/lighthouse'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { LighthouseService } from '~~/server/services/LighthouseService'

/**
 * GET /api/dashboard/lighthouse-history
 * Returns the last audit summary (scores + key metrics) of every page audited from the dashboard.
 */
export default defineEventHandler(async (event: H3Event): Promise<LighthouseHistoryResponse> => {
  requireDashboardAuth(event)
  return { summaries: await LighthouseService.getSummaries() }
})
