/**
 * Type definitions for DibodevArticle (domain model).
 *
 * Représente un article de blog après mapping depuis Storyblok.
 */
export type DibodevArticle = {
  slug: string
  title: string
  excerpt: string
  content: unknown
  date: string
  coverImageUrl: string
  tags: string[]
  readingTimeMinutes: number
  metaTitle: string
  metaDescription: string
  ogImageUrl: string
  route: string
}

export type DibodevArticleTranslation = {
  title: string
  excerpt: string
  content: { type: string; content?: unknown[] }
  metaTitle: string
  metaDescription: string
  tags: string[]
}
