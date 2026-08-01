import type { H3Event } from 'h3'
import { createError, getRouterParam } from 'h3'
import type { ArticleRecord } from '~~/server/types/dashboard/articles'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { ArticleService } from '~~/server/services/ArticleService'

/**
 * GET /api/dashboard/articles/drafts/:id
 * Returns a single stored article record by id.
 */
export default defineEventHandler(async (event: H3Event): Promise<{ record: ArticleRecord }> => {
  requireDashboardAuth(event)
  const id = getRouterParam(event, 'id')
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'id is required.' })
  }
  const record = await ArticleService.getRecord(id)
  if (!record) {
    throw createError({ statusCode: 404, statusMessage: 'Draft not found.' })
  }
  return { record }
})
