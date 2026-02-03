/**
 * Type definitions for Storyblok article/blog content.
 *
 * Structure attendue dans Storyblok :
 * - slug (Text)
 * - title (Text)
 * - excerpt (Textarea)
 * - content (Richtext)
 * - date (Date)
 * - coverImage (Asset, optionnel)
 * - tags (Multi-Options ou Text, optionnel)
 * - seo (Block, optionnel : metaTitle, metaDescription, ogImage)
 */
export type StoryblokSeoFields = {
  metaTitle?: string
  metaDescription?: string
  ogImage?: StoryblokAssetInput
}

export type StoryblokArticleContent = {
  slug: string
  title: string
  excerpt: string
  content: StoryblokRichtextDocument
  date: string
  coverImage?: StoryblokAssetInput
  tags?: StoryblokStringListInput
  metaTitle?: string
  metaDescription?: string
  ogImage?: StoryblokAssetInput
  seo?: StoryblokSeoFields
}

/**
 * Storyblok Richtext document (JSON structure from Storyblok).
 */
export type StoryblokRichtextDocument = {
  type: string
  content?: Array<{
    type: string
    content?: unknown[]
    attrs?: Record<string, unknown>
    text?: string
  }>
}

/**
 * Storyblok Asset field value (minimal shape we need).
 */
export type StoryblokArticleAsset = {
  filename?: string
  alt?: string
  name?: string
  title?: string
}

/**
 * Some Storyblok setups can store either an asset object or a plain string URL.
 */
export type StoryblokAssetInput = StoryblokArticleAsset | string | null

/**
 * Multi-value string input used by Storyblok fields.
 */
export type StoryblokStringListInput = string[] | string
