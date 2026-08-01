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

/** How the article body was produced (matches the editor mode). */
export type ArticleEditorMode = 'manual' | 'ai'

/** Lifecycle status of a stored article (draft, queue or published history). */
export type ArticleRecordStatus = 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed'

/** Label + badge colors for an article status (colors map to DibodevBadge props). */
export type ArticleStatusBadge = {
  label: string
  backgroundColor: string
  textColor: string
}

/** Client-side mirror of a stored article record (server: ArticleRecord). */
export type ArticleRecord = {
  id: string
  status: ArticleRecordStatus
  origin: ArticleEditorMode
  title: string
  slug: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  tags: string[]
  content: string
  coverImageUrl?: string
  publishDate?: string
  scheduledAt?: string
  autoTranslate: boolean
  autoRebuild: boolean
  qualityScore?: number
  storyblokId?: number
  fullSlug?: string
  publishedAt?: string
  error?: string
  createdAt: string
  updatedAt: string
}
