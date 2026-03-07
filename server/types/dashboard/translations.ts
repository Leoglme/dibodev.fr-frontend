/**
 * Types for dashboard translations (Storyblok FR → EN/ES via Mistral, push to GitHub).
 */

export type TranslatableEntityType = 'project' | 'article'

export type TranslationTargetLocale = 'en' | 'es'

/** One translatable item in the list (project or article). */
export type TranslatableItem = {
  type: TranslatableEntityType
  slug: string
  /** Display name (project name or article title). */
  name: string
  /** Full slug in Storyblok (e.g. project/foo, blog/bar). */
  fullSlug: string
  hasEn: boolean
  hasEs: boolean
}

export type ListTranslatablesResponse = {
  projects: TranslatableItem[]
  articles: TranslatableItem[]
  /** True si le site déployé est à jour avec le dépôt (même commit). */
  deploySynced: boolean
}

/** Payload for POST translate. Use targetLocales for EN+ES in one commit. */
export type TranslateBody = {
  entityType: TranslatableEntityType
  slug: string
  /** Single locale (one commit). */
  targetLocale?: TranslationTargetLocale
  /** Multiple locales (one commit, one deployment). */
  targetLocales?: TranslationTargetLocale[]
}

export type TranslateResponse = {
  ok: boolean
  message: string
}

/** Shape of projects.en.json / projects.es.json: slug → translated fields. */
export type TranslatedProjectFields = {
  name: string
  shortDescription: string
  longDescription: string
  metaTitle: string
  metaDescription: string
  categories: string[]
  sectors?: string[]
  stack: string[]
  tags: string[]
}

export type ProjectsTranslationFile = Record<string, TranslatedProjectFields>

/** One node in Storyblok richtext (for article content). */
export type StoryblokRichtextNode = {
  type: string
  content?: StoryblokRichtextNode[]
  attrs?: Record<string, unknown>
  text?: string
}

/** Shape of articles.en.json / articles.es.json: slug → translated article fields. */
export type TranslatedArticleFields = {
  title: string
  excerpt: string
  /** Richtext document with same structure as Storyblok, only text nodes translated. */
  content: {
    type: string
    content?: StoryblokRichtextNode[]
  }
  metaTitle: string
  metaDescription: string
  tags: string[]
}

export type ArticlesTranslationFile = Record<string, TranslatedArticleFields>
