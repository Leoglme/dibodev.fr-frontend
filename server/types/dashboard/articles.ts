/**
 * Types for dashboard article generation and Storyblok creation.
 */

export type SuggestSubjectBody = {
  existingSubjects: string[]
  optionalSentence?: string
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

export type GenerateArticleResponse = GeneratedArticleContent & {
  contentRichtext: RichtextDoc
}

export type CreateInStoryblokBody = {
  article: GeneratedArticleContent
}

export type CreateInStoryblokResponse = {
  storyId: number
  fullSlug: string
  message: string
}
