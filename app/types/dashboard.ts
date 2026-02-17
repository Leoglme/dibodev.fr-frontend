/**
 * Types used by the dashboard (article generation).
 * Mirrors server types for client-safe usage.
 */

export type GeneratedArticleForPreview = {
  suggestedTopic: string
  title: string
  slug: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  tags: string[]
  content: string
  contentRichtext: {
    type: string
    content?: unknown[]
  }
  coverImageUrl?: string
  /** Score de qualité 0-100 (indicateur interne). */
  qualityScore?: number
}
