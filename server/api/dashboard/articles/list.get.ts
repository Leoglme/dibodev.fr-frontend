import type { H3Event } from 'h3'
import { createError } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'

const STORYBLOK_CDN_BASE = 'https://api.storyblok.com/v2/cdn'
const BLOG_FOLDER = 'blog/'
const SITE_URL = 'https://dibodev.fr'

type StoryItem = {
  content?: { title?: string; slug?: string; date?: string }
  full_slug?: string
}

type StoriesResponse = {
  stories?: StoryItem[]
}

export type DashboardArticleItem = {
  title: string
  slug: string
  fullSlug: string
  url: string
  date?: string
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

  const spaceRes = await fetch(`${STORYBLOK_CDN_BASE}/spaces/me?token=${token}`)
  if (!spaceRes.ok) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Failed to fetch Storyblok space.',
    })
  }
  const spaceData = (await spaceRes.json()) as { space?: { version?: number } }
  const cv = spaceData.space?.version ?? 0

  const url = `${STORYBLOK_CDN_BASE}/stories?token=${token}&starts_with=${encodeURIComponent(BLOG_FOLDER)}&per_page=100&sort_by=content.date:desc&cv=${cv}`
  const res = await fetch(url)
  if (!res.ok) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Failed to fetch Storyblok stories.',
    })
  }

  const data = (await res.json()) as StoriesResponse
  const stories = data.stories ?? []

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
      }
    })

  return { articles }
})
