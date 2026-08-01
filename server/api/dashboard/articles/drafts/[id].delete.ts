import type { H3Event } from 'h3'
import { createError, getRouterParam } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { ArticleService } from '~~/server/services/ArticleService'

/**
 * DELETE /api/dashboard/articles/drafts/:id
 * Deletes a stored article record (draft, scheduled or published history entry).
 */
export default defineEventHandler(async (event: H3Event): Promise<{ ok: true }> => {
  requireDashboardAuth(event)
  const id = getRouterParam(event, 'id')
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'id is required.' })
  }
  const deleted = await ArticleService.deleteRecord(id)
  if (!deleted) {
    throw createError({ statusCode: 404, statusMessage: 'Draft not found.' })
  }
  return { ok: true }
})
