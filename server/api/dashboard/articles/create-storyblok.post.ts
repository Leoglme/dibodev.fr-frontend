import type { H3Event } from 'h3'
import { createError } from 'h3'
import type { CreateInStoryblokBody, CreateInStoryblokResponse } from '~~/server/types/dashboard/articles'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { ArticleService } from '~~/server/services/ArticleService'

/**
 * POST /api/dashboard/articles/create-storyblok
 * Creates the given article in Storyblok (blog folder) and publishes it immediately (today's date).
 */
export default defineEventHandler(async (event: H3Event): Promise<CreateInStoryblokResponse> => {
  requireDashboardAuth(event)
  if (event.method !== 'POST') {
    throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' })
  }

  const config = useRuntimeConfig()
  const spaceId = config.storyblokSpaceId as string
  const token = config.storyblokManagementToken as string

  if (!spaceId || !token) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Storyblok space ID or management token not configured.',
    })
  }

  const { article } = (await readBody(event)) as CreateInStoryblokBody
  if (!article || typeof article.title !== 'string' || typeof article.slug !== 'string') {
    throw createError({
      statusCode: 400,
      statusMessage: 'article with title and slug is required.',
    })
  }

  try {
    const blogFolderId = await ArticleService.getBlogFolderId(spaceId, token)
    const { id: storyId, full_slug: fullSlug } = await ArticleService.createStory(spaceId, token, blogFolderId, article)
    return {
      storyId,
      fullSlug,
      message: 'Article créé et publié dans Storyblok.',
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    throw createError({
      statusCode: 502,
      statusMessage: message,
    })
  }
})
