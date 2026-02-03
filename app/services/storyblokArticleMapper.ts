import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type {
  StoryblokArticleContent,
  StoryblokAssetInput,
  StoryblokStringListInput,
} from '~/services/types/storyblokArticle'
import type { StoryblokStory } from '~/services/types/storyblok'

const WORDS_PER_MINUTE: number = 200

/**
 * Resolve a Storyblok asset field to a URL string.
 */
function resolveAssetUrl(value: StoryblokAssetInput | undefined): string {
  if (!value) {
    return ''
  }

  if (typeof value === 'string') {
    return value
  }

  return value.filename ?? ''
}

/**
 * Normalize Storyblok list input to a string array.
 */
function normalizeStringList(value: StoryblokStringListInput | undefined): string[] {
  if (!value) {
    return []
  }

  if (Array.isArray(value)) {
    return value.map((v: string): string => String(v).trim()).filter((v: string): boolean => v.length > 0)
  }

  return String(value)
    .split(/[\n,]+/g)
    .map((v: string): string => v.trim())
    .filter((v: string): boolean => v.length > 0)
}

/**
 * Estimate reading time in minutes from richtext JSON.
 */
function estimateReadingTime(content: StoryblokArticleContent['content']): number {
  if (!content) {
    return 0
  }

  let wordCount: number = 0

  function extractText(node: { type?: string; content?: unknown[]; text?: string }): void {
    if (node.text) {
      wordCount += node.text.split(/\s+/).filter(Boolean).length
    }
    if (node.content && Array.isArray(node.content)) {
      node.content.forEach((child: unknown): void => extractText(child as typeof node))
    }
  }

  extractText(content)
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE))
}

/**
 * Map a strongly-typed Storyblok article story to DibodevArticle.
 */
export function mapStoryblokArticleToDibodevArticle(story: StoryblokStory<StoryblokArticleContent>): DibodevArticle {
  const content: StoryblokArticleContent = story.content

  const fullSlug: string = story.full_slug.startsWith('/') ? story.full_slug : `/${story.full_slug}`
  const blogIndex: number = fullSlug.indexOf('/blog/')
  const route: string = blogIndex >= 0 ? fullSlug.slice(blogIndex) : fullSlug

  const coverImageUrl: string = resolveAssetUrl(content.coverImage)
  const tags: string[] = normalizeStringList(content.tags)
  const readingTimeMinutes: number = estimateReadingTime(content.content)

  const seoTitle: string = content.metaTitle ?? content.seo?.metaTitle ?? content.title
  const seoDescription: string = content.metaDescription ?? content.seo?.metaDescription ?? content.excerpt
  const ogImageUrl: string = resolveAssetUrl(content.ogImage) || resolveAssetUrl(content.seo?.ogImage) || coverImageUrl

  return {
    slug: content.slug,
    title: content.title,
    excerpt: content.excerpt,
    content: content.content,
    date: content.date,
    coverImageUrl,
    tags,
    readingTimeMinutes,
    metaTitle: seoTitle,
    metaDescription: seoDescription,
    ogImageUrl,
    route,
  }
}
