import type { H3Event } from 'h3'
import type { StoryblokAssetField } from '~~/server/types/dashboard/articles'
import { createError } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { StoryblokDeliveryService } from '~~/server/services/StoryblokDeliveryService'

const BLOG_FOLDER = 'blog/'
const SITE_URL = 'https://dibodev.fr'

type StoryItem = {
  content?: { title?: string; slug?: string; date?: string; excerpt?: string; coverImage?: StoryblokAssetField }
  full_slug?: string
}

export type DashboardArticleItem = {
  title: string
  slug: string
  fullSlug: string
  url: string
  date?: string
  excerpt?: string
  coverImageUrl?: string
}

/**
 * Reads the URL of a Storyblok asset field (object with a filename, or a plain string).
 *
 * @param {StoryblokAssetField | undefined} asset - The asset field.
 * @returns {string | undefined} The asset URL, or undefined when empty.
 */
function assetUrl(asset: StoryblokAssetField | undefined): string | undefined {
  if (!asset) return undefined
  if (typeof asset === 'string') return asset || undefined
  return asset.filename || undefined
}

/**
 * GET /api/dashboard/articles/list
 * Returns list of blog articles with title, slug and canonical URL for indexing / Search Console.
 */
export default defineEventHandler(async (event: H3Event): Promise<{ articles: DashboardArticleItem[] }> => {
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

  const articles: DashboardArticleItem[] = stories
    .filter((s) => s.content?.slug ?? s.full_slug)
    .map((s) => {
      const slug = (s.content?.slug ?? s.full_slug ?? '').replace(/^blog\/?/, '').trim() || 'article'
      const fullSlug = s.full_slug ?? `blog/${slug}`
      const canonicalPath = fullSlug.startsWith('blog/') ? fullSlug : `blog/${fullSlug}`
      return {
        title: s.content?.title ?? slug,
        slug,
        fullSlug: canonicalPath,
        url: `${SITE_URL}/${canonicalPath}`,
        date: s.content?.date,
        excerpt: s.content?.excerpt,
        coverImageUrl: assetUrl(s.content?.coverImage),
      }
    })

  return { articles }
})
