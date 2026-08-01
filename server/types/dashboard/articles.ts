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

/** Lifecycle status of a locally stored article (draft, queue or history). */
export type ArticleRecordStatus = 'draft' | 'scheduled' | 'publishing' | 'published' | 'failed'

/** How the article body was produced. */
export type ArticleRecordOrigin = 'manual' | 'ai'

/**
 * A locally persisted article (draft, queued or published).
 * Source of truth for the editor and the drip queue; stored via useStorage('data').
 */
export type ArticleRecord = {
  id: string
  status: ArticleRecordStatus
  origin: ArticleRecordOrigin
  title: string
  slug: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  tags: string[]
  /** Markdown source of the article body (source of truth for editing). */
  content: string
  /** Optional cover image URL (Unsplash, Lummi, etc.). Uploaded to Storyblok on publish. */
  coverImageUrl?: string
  /** Displayed publication date in Storyblok (YYYY-MM-DD). Falls back to the publish day when empty. */
  publishDate?: string
  /** When the drip queue should auto-publish this article (ISO datetime). Set when status is 'scheduled'. */
  scheduledAt?: string
  /** Also generate EN + ES translations right after publishing. */
  autoTranslate: boolean
  /** Trigger a site rebuild after publishing (the blog is static). */
  autoRebuild: boolean
  /** Internal quality score 0-100 (dashboard indicator only). */
  qualityScore?: number
  storyblokId?: number
  fullSlug?: string
  publishedAt?: string
  /** Last error message when status is 'failed'. */
  error?: string
  createdAt: string
  updatedAt: string
}

/** Editable fields of an article, shared by the draft save payload and the editor. */
export type ArticleDraftFields = {
  title: string
  slug: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  tags: string[]
  content: string
  coverImageUrl?: string
  publishDate?: string
  qualityScore?: number
}

/** Payload to create (no id) or update (with id) a draft. */
export type SaveArticleDraftBody = ArticleDraftFields & {
  id?: string
  status?: ArticleRecordStatus
  origin?: ArticleRecordOrigin
  scheduledAt?: string
  autoTranslate?: boolean
  autoRebuild?: boolean
}

export type SaveArticleDraftResponse = {
  record: ArticleRecord
}

export type ListArticleRecordsResponse = {
  records: ArticleRecord[]
}

/** Publish an existing draft by id, or a full inline article. */
export type PublishArticleBody = {
  id?: string
  article?: ArticleDraftFields
  autoTranslate?: boolean
  autoRebuild?: boolean
}

export type PublishArticleResponse = {
  storyId: number
  fullSlug: string
  message: string
  translated: boolean
  rebuildTriggered: boolean
}

export type ProcessQueueResponse = {
  processed: number
  publishedIds: string[]
  failedIds: string[]
  message: string
}

/** Minimal article shape needed to create a Storyblok blog story. */
export type StoryblokArticleInput = {
  title: string
  slug: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  tags: string[]
  content: string
  coverImageUrl?: string
}

/** Options controlling how a Storyblok story is created. */
export type CreateArticleStoryOptions = {
  /** Displayed publication date (YYYY-MM-DD). Defaults to today when missing or malformed. */
  date?: string
  /** Publish the story immediately (default true). */
  publish?: boolean
}

/** Parameters for a full "publish to Storyblok (+ optional rebuild)" operation. */
export type PublishToStoryblokParams = {
  spaceId: string
  managementToken: string
  article: StoryblokArticleInput
  /** Displayed publication date (YYYY-MM-DD). Defaults to today when missing. */
  date?: string
  /** Trigger a site rebuild after publishing (requires githubToken + githubRepo). */
  rebuild: boolean
  githubToken?: string
  githubRepo?: string
}

export type PublishToStoryblokResult = {
  storyId: number
  fullSlug: string
  rebuildTriggered: boolean
  /** Set when a rebuild was requested but could not be triggered (publish still succeeded). */
  rebuildError?: string
}

/** Result of dispatching the deploy workflow (site rebuild). */
export type TriggerRebuildResult = { ok: true } | { ok: false; statusCode: number; message: string }
