import type { H3Event } from 'h3'
import { createError } from 'h3'

const STORYBLOK_CDN_BASE = 'https://api.storyblok.com/v2/cdn'
const BLOG_FOLDER = 'blog/'

type StoryItem = {
  content?: { title?: string; slug?: string }
  full_slug?: string
}

type StoriesResponse = {
  stories?: StoryItem[]
}

/**
 * GET /api/dashboard/articles/subjects
 * Returns list of existing article titles (and slugs) for the blog, to avoid duplicates when suggesting subjects.
 */
export default defineEventHandler(async (event: H3Event) => {
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
  const existingSubjects: string[] = stories.map((s) => s.content?.title ?? s.content?.slug ?? '').filter(Boolean)

  return { existingSubjects }
})
