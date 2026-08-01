import type { H3Event } from 'h3'
import { createError } from 'h3'
import type { ProcessQueueResponse } from '~~/server/types/dashboard/articles'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { ArticleService } from '~~/server/services/ArticleService'

/**
 * POST /api/dashboard/articles/process-queue
 * Manually processes the drip queue (publishes due scheduled articles) — the same work
 * the scheduled nitro task runs automatically.
 */
export default defineEventHandler(async (event: H3Event): Promise<ProcessQueueResponse> => {
  requireDashboardAuth(event)
  if (event.method !== 'POST') {
    throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' })
  }
  return ArticleService.processDueQueue()
})
