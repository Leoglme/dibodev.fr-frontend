import { ORGANIZATION_ID } from '~/config/schema'

const SITE_URL: string = 'https://dibodev.fr'
const CONTACT_PAGE_URL: string = 'https://dibodev.fr/contact'
/** Places the services are offered in, from the closest to the widest. */
const SERVICE_AREAS: string[] = ['Rennes', 'Ille-et-Vilaine', 'Bretagne', 'France']
const AVAILABLE_LANGUAGES: string[] = ['fr', 'en', 'es']

/** What a service page declares: its French path (the `@id` of the service) and its texts in the page language. */
export type SchemaServiceDefinition = {
  pagePath: string
  name: string
  description: string
  serviceType: string[]
}

export type SchemaService = {
  '@context': 'https://schema.org'
  '@type': 'Service'
  '@id': string
  name: string
  description: string
  serviceType: string[]
  url: string
  provider: { '@id': string }
  areaServed: string[]
  availableChannel: { '@type': 'ServiceChannel'; serviceUrl: string; availableLanguage: string[] }
}

/**
 * Builds the Service JSON-LD of a service page, provided by the site's organization.
 * @param {SchemaServiceDefinition} definition - Path and texts of the service.
 * @returns {string} The serialized JSON-LD.
 */
export function buildServiceSchemaJson(definition: SchemaServiceDefinition): string {
  const pageUrl: string = `${SITE_URL}${definition.pagePath}`
  const serviceSchema: SchemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: definition.name,
    description: definition.description,
    serviceType: definition.serviceType,
    url: pageUrl,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: SERVICE_AREAS,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: CONTACT_PAGE_URL,
      availableLanguage: AVAILABLE_LANGUAGES,
    },
  }
  return JSON.stringify(serviceSchema)
}
