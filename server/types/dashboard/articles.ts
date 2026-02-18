/**
 * Types for dashboard article generation and Storyblok creation.
 */

export type SuggestSubjectBody = {
  existingSubjects: string[]
  optionalSentence?: string
  /** Sujets déjà proposés et refusés par l'utilisateur (éviter de les reproposer). */
  rejectedSubjects?: string[]
}

export type SuggestSubjectResponse = {
  suggestedTopic: string
}

export type GenerateArticleBody = {
  suggestedTopic: string
  existingSubjects: string[]
}

export type RichtextDoc = {
  type: 'doc'
  content: Array<{
    type: string
    attrs?: Record<string, unknown>
    content?: Array<{ type: string; text?: string }>
  }>
}

export type GeneratedArticleContent = {
  suggestedTopic: string
  title: string
  slug: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  tags: string[]
  content: string
  /** Optional cover image URL (Unsplash, Lummi, etc.). Uploaded to Storyblok when creating the story. */
  coverImageUrl?: string
}

export type ArticleQualityBreakdown = {
  concision: number
  repetition: number
  metierEnrichment: number
  ctaConversion: number
  cleanliness: number
}

export type GenerateArticleResponse = GeneratedArticleContent & {
  contentRichtext: RichtextDoc
  /** Score de qualité 0-100 (indicateur interne, dashboard uniquement). */
  qualityScore?: number
  /** Détail du score (si ?debug=1). */
  meta?: { qualityBreakdown: ArticleQualityBreakdown }
}

export type CreateInStoryblokBody = {
  article: GeneratedArticleContent
}

export type CreateInStoryblokResponse = {
  storyId: number
  fullSlug: string
  message: string
}
