import type { H3Event } from 'h3'
import { createError, readBody } from 'h3'
import type { RichtextDoc } from '~~/server/utils/markdownToRichtext'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { markdownToRichtext } from '~~/server/utils/markdownToRichtext'

/**
 * POST /api/dashboard/articles/preview
 * Converts article markdown to a Storyblok richtext document, so the editor preview
 * renders exactly like the published blog page.
 */
export default defineEventHandler(async (event: H3Event): Promise<{ contentRichtext: RichtextDoc }> => {
  requireDashboardAuth(event)
  if (event.method !== 'POST') {
    throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' })
  }
  const body = (await readBody(event)) as { content?: string }
  const markdown = typeof body.content === 'string' ? body.content : ''
  return { contentRichtext: markdownToRichtext(markdown) }
})
