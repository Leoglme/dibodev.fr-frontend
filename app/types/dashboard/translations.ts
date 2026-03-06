/**
 * Client-side types for dashboard translations.
 * Mirrors server types for type-safe API calls.
 */

export type TranslatableEntityType = 'project' | 'article'

export type TranslationTargetLocale = 'en' | 'es'

export type TranslatableItem = {
  type: TranslatableEntityType
  slug: string
  name: string
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

export type TranslateBody = {
  entityType: TranslatableEntityType
  slug: string
  targetLocale: TranslationTargetLocale
}

export type TranslateResponse = {
  ok: boolean
  message: string
}
