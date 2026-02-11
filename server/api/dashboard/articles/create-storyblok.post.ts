import type { H3Event } from 'h3'
import { createError } from 'h3'
import type {
  CreateInStoryblokBody,
  CreateInStoryblokResponse,
  GeneratedArticleContent,
} from '~~/server/types/dashboard/articles'
import { markdownToRichtext } from '~~/server/utils/markdownToRichtext'
import { uploadImageToStoryblok } from '~~/server/utils/uploadImageToStoryblok'

const STORYBLOK_MAPI_BASE = 'https://mapi.storyblok.com/v1/spaces'

/**
 * Fetch blog folder id from Storyblok Management API.
 */
async function getBlogFolderId(spaceId: string, token: string): Promise<number> {
  const url = `${STORYBLOK_MAPI_BASE}/${spaceId}/stories?per_page=100`
  const res = await fetch(url, {
    headers: { Authorization: token, Accept: 'application/json' },
  })
  if (!res.ok) {
    throw new Error(`Storyblok Management API error: ${res.status}`)
  }
  const data = (await res.json()) as { stories?: Array<{ id: number; slug: string; is_folder: boolean }> }
  const folder = data.stories?.find((s) => s.is_folder && (s.slug === 'blog' || s.slug === 'blog/'))
  if (!folder) {
    throw new Error('Blog folder not found in Storyblok.')
  }
  return folder.id
}

/**
 * Create a story in Storyblok (blog article).
 */
async function createStory(
  spaceId: string,
  token: string,
  parentId: number,
  article: GeneratedArticleContent,
): Promise<{ id: number; full_slug: string }> {
  const richtext = markdownToRichtext(article.content)
  const date = new Date().toISOString().slice(0, 10)
  const tagsValue = article.tags.length > 0 ? article.tags.join(', ') : ''

  let coverAsset: { id: number; filename: string } | null = null
  if (article.coverImageUrl?.trim()) {
    try {
      coverAsset = await uploadImageToStoryblok(spaceId, token, article.coverImageUrl.trim(), article.slug)
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Upload failed'
      throw new Error(`Cover image upload failed: ${msg}`)
    }
  }

  const content: Record<string, unknown> = {
    component: 'article',
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    content: richtext,
    date,
    tags: tagsValue,
    metaTitle: article.metaTitle,
    metaDescription: article.metaDescription,
  }
  if (coverAsset) {
    content.coverImage = { id: coverAsset.id, filename: coverAsset.filename }
  }

  const body = {
    story: {
      name: article.title,
      slug: article.slug,
      parent_id: parentId,
      content,
    },
    publish: 1,
  }

  const url = `${STORYBLOK_MAPI_BASE}/${spaceId}/stories/`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`Storyblok create story failed: ${res.status} ${errText}`)
  }

  const data = (await res.json()) as { story?: { id: number; full_slug?: string } }
  const story = data.story
  if (!story) {
    throw new Error('Storyblok did not return the created story.')
  }

  return { id: story.id, full_slug: story.full_slug ?? `blog/${article.slug}` }
}

/**
 * POST /api/dashboard/articles/create-storyblok
 * Creates the given article in Storyblok (blog folder) and publishes it.
 */
export default defineEventHandler(async (event: H3Event): Promise<CreateInStoryblokResponse> => {
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
    const blogFolderId = await getBlogFolderId(spaceId, token)
    const { id: storyId, full_slug: fullSlug } = await createStory(spaceId, token, blogFolderId, article)
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
