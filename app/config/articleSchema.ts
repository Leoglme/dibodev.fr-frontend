import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { SchemaEntityReference } from '~/config/schema'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'

export type SchemaBlogPosting = {
  '@context': 'https://schema.org'
  '@type': 'BlogPosting'
  headline: string
  description: string
  image: string
  datePublished: string
  inLanguage: string
  url: string
  mainEntityOfPage: string
  keywords: string[]
  author: SchemaEntityReference
  publisher: SchemaEntityReference
}

/**
 * Builds the BlogPosting JSON-LD of an article page, serialized for a script tag.
 *
 * @param {DibodevArticle} article - The article shown on the page.
 * @param {string} canonicalUrl - The canonical URL of the page.
 * @param {string} imageUrl - The image shared for the article.
 * @param {string} locale - The page locale (fr, en or es).
 * @returns {string} The serialized JSON-LD.
 */
export function buildArticleSchemaJson(
  article: DibodevArticle,
  canonicalUrl: string,
  imageUrl: string,
  locale: string,
): string {
  const articleSchema: SchemaBlogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription || article.excerpt,
    image: imageUrl,
    datePublished: article.date,
    inLanguage: locale,
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
    keywords: article.tags,
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORGANIZATION_ID },
  }
  return JSON.stringify(articleSchema)
}
