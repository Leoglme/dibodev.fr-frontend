import { ORGANIZATION_ID } from '~/config/schema'

const SITE_URL: string = 'https://dibodev.fr'
const CONTACT_PAGE_URL: string = 'https://dibodev.fr/contact'
/** Places the services are offered in, from the closest to the widest. */
const SERVICE_AREAS: string[] = ['Rennes', 'Ille-et-Vilaine', 'Bretagne', 'France']
const AVAILABLE_LANGUAGES: string[] = ['fr', 'en', 'es']

/** A priced offer of a service page, in euros; a zero price declares a free offer. */
export type SchemaServiceOfferDefinition = {
  name: string
  price: number
}

/** What a service page declares: its French path (the `@id` of the service), its texts in the page language and its priced offers when it shows prices. */
export type SchemaServiceDefinition = {
  pagePath: string
  name: string
  description: string
  serviceType: string[]
  offers?: SchemaServiceOfferDefinition[]
}

export type SchemaServiceOffer = {
  '@type': 'Offer'
  name: string
  price: number
  priceCurrency: 'EUR'
  url: string
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
  offers?: SchemaServiceOffer[]
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

  if (definition.offers && definition.offers.length > 0) {
    serviceSchema.offers = definition.offers.map(
      (offer: SchemaServiceOfferDefinition): SchemaServiceOffer => ({
        '@type': 'Offer',
        name: offer.name,
        price: offer.price,
        priceCurrency: 'EUR',
        url: pageUrl,
      }),
    )
  }
  return JSON.stringify(serviceSchema)
}
