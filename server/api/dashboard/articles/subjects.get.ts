import type { H3Event } from 'h3'
import { createError } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { StoryblokDeliveryService } from '~~/server/services/StoryblokDeliveryService'

const BLOG_FOLDER = 'blog/'

type StoryItem = {
  content?: { title?: string; slug?: string }
  full_slug?: string
}

/**
 * GET /api/dashboard/articles/subjects
 * Returns list of existing article titles (and slugs) for the blog, to avoid duplicates when suggesting subjects.
 */
export default defineEventHandler(async (event: H3Event) => {
  requireDashboardAuth(event)
  const config = useRuntimeConfig()
  const token = config.storyblokDeliveryApiToken as string
  if (!token) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Storyblok delivery token not configured.',
    })
  }

  const spaceVersion: number = await StoryblokDeliveryService.fetchSpaceVersion(token)
  const stories: StoryItem[] = await StoryblokDeliveryService.listAllStories(
    token,
    BLOG_FOLDER,
    spaceVersion,
    'content.date:desc',
  )
  const existingSubjects: string[] = stories.map((s) => s.content?.title ?? s.content?.slug ?? '').filter(Boolean)

  return { existingSubjects }
})
