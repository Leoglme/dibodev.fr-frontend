import type { H3Event } from 'h3'
import { createError, readBody } from 'h3'
import type {
  ArticleRecord,
  PublishArticleBody,
  PublishArticleResponse,
  StoryblokArticleInput,
} from '~~/server/types/dashboard/articles'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { ArticleService } from '~~/server/services/ArticleService'

/**
 * POST /api/dashboard/articles/publish
 * Publishes a draft (by id) or an inline article to Storyblok now, with the chosen date,
 * and optionally triggers a site rebuild. Translations are handled separately by the client.
 */
export default defineEventHandler(async (event: H3Event): Promise<PublishArticleResponse> => {
  requireDashboardAuth(event)
  if (event.method !== 'POST') {
    throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' })
  }

  const config = useRuntimeConfig()
  const spaceId = config.storyblokSpaceId as string
  const managementToken = config.storyblokManagementToken as string
  if (!spaceId || !managementToken) {
    throw createError({ statusCode: 500, statusMessage: 'Storyblok space ID or management token not configured.' })
  }

  const body = (await readBody(event)) as PublishArticleBody

  let record: ArticleRecord | null = null
  let article: StoryblokArticleInput
  let date: string | undefined
  let rebuild: boolean

  if (body.id) {
    record = await ArticleService.getRecord(body.id)
    if (!record) {
      throw createError({ statusCode: 404, statusMessage: 'Draft not found.' })
    }
    if (record.status === 'published') {
      throw createError({ statusCode: 409, statusMessage: 'Cet article est déjà publié.' })
    }
    article = {
      title: record.title,
      slug: record.slug,
      excerpt: record.excerpt,
      metaTitle: record.metaTitle,
      metaDescription: record.metaDescription,
      tags: record.tags,
      content: record.content,
      coverImageUrl: record.coverImageUrl,
    }
    date = record.publishDate
    rebuild = body.autoRebuild ?? record.autoRebuild
  } else if (body.article && typeof body.article.title === 'string' && typeof body.article.slug === 'string') {
    const inline = body.article
    article = {
      title: inline.title,
      slug: inline.slug,
      excerpt: inline.excerpt,
      metaTitle: inline.metaTitle,
      metaDescription: inline.metaDescription,
      tags: Array.isArray(inline.tags) ? inline.tags : [],
      content: inline.content,
      coverImageUrl: inline.coverImageUrl,
    }
    date = inline.publishDate
    rebuild = body.autoRebuild ?? true
  } else {
    throw createError({ statusCode: 400, statusMessage: 'id or article (with title and slug) is required.' })
  }

  if (record) {
    await ArticleService.saveRecord({ ...record, status: 'publishing', updatedAt: new Date().toISOString() })
  }

  try {
    const result = await ArticleService.publishToStoryblok({
      spaceId,
      managementToken,
      article,
      date,
      rebuild,
      githubToken: config.githubToken as string,
      githubRepo: config.githubRepo as string,
    })

    if (record) {
      const now = new Date().toISOString()
      await ArticleService.saveRecord({
        ...record,
        status: 'published',
        storyblokId: result.storyId,
        fullSlug: result.fullSlug,
        publishedAt: now,
        updatedAt: now,
        error: result.rebuildError,
      })
    }

    return {
      storyId: result.storyId,
      fullSlug: result.fullSlug,
      message: result.rebuildError
        ? `Article publié dans Storyblok. ${result.rebuildError}`
        : 'Article publié dans Storyblok.',
      translated: false,
      rebuildTriggered: result.rebuildTriggered,
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    if (record) {
      await ArticleService.saveRecord({
        ...record,
        status: 'failed',
        error: message,
        updatedAt: new Date().toISOString(),
      })
    }
    throw createError({ statusCode: 502, statusMessage: message })
  }
})
