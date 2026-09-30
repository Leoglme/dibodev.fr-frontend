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

/** Locales whose article text comes from the translation files (French is the source, in Storyblok). */
export type ArticleTranslationLocale = 'en' | 'es'

/** An article in the requested locale, with the locales where its translation is known to be missing. */
export type DibodevLocalizedArticle = {
  article: DibodevArticle
  localesWithoutTranslation: ArticleTranslationLocale[]
}

export type DibodevArticleTranslation = {
  title: string
  excerpt: string
  content: { type: string; content?: unknown[] }
  metaTitle: string
  metaDescription: string
  tags: string[]
}
