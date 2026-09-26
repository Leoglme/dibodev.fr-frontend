import type { SchemaEntityReference } from '~/config/schema'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'

export type SchemaProfilePage = {
  '@context': 'https://schema.org'
  '@type': 'ProfilePage'
  url: string
  inLanguage: string
  mainEntity: SchemaEntityReference
  about: SchemaEntityReference
}

/**
 * Builds the ProfilePage JSON-LD of the about page, pointing to the site-wide Person and Organization.
 *
 * @param {string} pageUrl - The absolute URL of the about page.
 * @param {string} locale - The locale code of the page (fr, en, es).
 * @returns {string} The serialized JSON-LD.
 */
export function buildProfilePageSchemaJson(pageUrl: string, locale: string): string {
  const profilePageSchema: SchemaProfilePage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: pageUrl,
    inLanguage: locale,
    mainEntity: { '@id': PERSON_ID },
    about: { '@id': ORGANIZATION_ID },
  }
  return JSON.stringify(profilePageSchema)
}
