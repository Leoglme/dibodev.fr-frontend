import type { H3Event } from 'h3'
import type { ListArticleRecordsResponse } from '~~/server/types/dashboard/articles'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { ArticleService } from '~~/server/services/ArticleService'

/**
 * GET /api/dashboard/articles/drafts
 * Returns all locally stored article records (drafts, scheduled and published history).
 */
export default defineEventHandler(async (event: H3Event): Promise<ListArticleRecordsResponse> => {
  requireDashboardAuth(event)
  const records = await ArticleService.listRecords()
  return { records }
})
