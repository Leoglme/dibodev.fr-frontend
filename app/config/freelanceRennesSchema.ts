import { ORGANIZATION_ID } from '~/config/schema'

/** Places the freelance service is offered in, from the closest to the widest. */
const SERVICE_AREAS: string[] = ['Rennes', 'Ille-et-Vilaine', 'Bretagne', 'France']
const SERVICE_PAGE_URL: string = 'https://dibodev.fr/developpeur-web-freelance-rennes'

export type SchemaFreelanceService = {
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
 * Builds the Service JSON-LD of the freelance web developer page, linked to the site's person and organization.
 * @param {string} name - Name of the service in the page language.
 * @param {string} description - Short description of the service in the page language.
 * @returns {string} The serialized JSON-LD.
 */
export function buildFreelanceRennesServiceSchemaJson(name: string, description: string): string {
  const serviceSchema: SchemaFreelanceService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SERVICE_PAGE_URL}#service`,
    name,
    description,
    serviceType: ['Web development', 'Custom software development', 'Mobile app development', 'AI integration'],
    url: SERVICE_PAGE_URL,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: SERVICE_AREAS,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://dibodev.fr/contact',
      availableLanguage: ['fr', 'en', 'es'],
    },
  }
  return JSON.stringify(serviceSchema)
}
