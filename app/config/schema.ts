/**
 * Schema.org structured data (JSON-LD) for the site: a Person (Léo Guillaume)
 * and an Organization (Dibodev, also typed ProfessionalService with its service
 * catalog) linked in a single @graph (Person.worksFor ↔ Organization.founder),
 * injected globally from the default layout via useHead.
 *
 * The @id values must stay stable: app/config/projectSchema.ts references
 * PERSON_ID as the `author` of every project page.
 */

export type SchemaPostalAddress = {
  '@type': 'PostalAddress'
  addressLocality: string
  postalCode: string
  addressRegion: string
  addressCountry: string
}

export type SchemaEntityReference = {
  '@id': string
}

export type SchemaPropertyValue = {
  '@type': 'PropertyValue'
  propertyID: string
  value: string
}

export type SchemaPerson = {
  '@type': 'Person'
  '@id': string
  name: string
  jobTitle: string
  email: string
  telephone: string
  url: string
  sameAs: string[]
  address: SchemaPostalAddress
  worksFor: SchemaEntityReference
}

export type SchemaService = {
  '@type': 'Service'
  name: string
  description: string
}

export type SchemaOffer = {
  '@type': 'Offer'
  itemOffered: SchemaService
}

export type SchemaOfferCatalog = {
  '@type': 'OfferCatalog'
  name: string
  itemListElement: SchemaOffer[]
}

export type SchemaOrganization = {
  '@type': ['Organization', 'ProfessionalService']
  '@id': string
  name: string
  legalName: string
  description: string
  url: string
  logo: string
  image: string
  email: string
  telephone: string
  foundingDate: string
  founder: SchemaEntityReference
  sameAs: string[]
  areaServed: string[]
  address: SchemaPostalAddress
  vatID: string
  identifier: SchemaPropertyValue
  priceRange: string
  hasOfferCatalog: SchemaOfferCatalog
}

export type SchemaGraph = {
  '@context': 'https://schema.org'
  '@graph': (SchemaPerson | SchemaOrganization)[]
}

const SITE_URL: string = 'https://dibodev.fr'
const PERSON_ID: string = 'https://dibodev.fr/#person'
const ORGANIZATION_ID: string = 'https://dibodev.fr/#organization'

const PERSON_NAME: string = 'Léo Guillaume'
const JOB_TITLE: string = 'Développeur web & mobile freelance'
const EMAIL: string = 'contact@dibodev.fr'
const TELEPHONE: string = '+33642193812'

const ADDRESS_LOCALITY: string = 'Saint-Erblon'
const ADDRESS_POSTAL_CODE: string = '35230'
const ADDRESS_REGION: string = 'Bretagne'
const ADDRESS_COUNTRY: string = 'FR'

const ORGANIZATION_NAME: string = 'Dibodev'
const ORGANIZATION_LEGAL_NAME: string = 'EI - GUILLAUME LEO'
const ORGANIZATION_DESCRIPTION: string =
  'Studio de développement web, mobile et IA de Léo Guillaume : sites web, applications mobiles, SaaS et outils métier sur mesure pour TPE et PME.'
const ORGANIZATION_FOUNDING_DATE: string = '2025-06-20'
const ORGANIZATION_LOGO: string = `${SITE_URL}/android-chrome-512x512.png`
const ORGANIZATION_VAT_ID: string = 'FR02988307906'
const ORGANIZATION_SIRET: string = '98830790600020'
const ORGANIZATION_PRICE_RANGE: string = '350 € TTC / jour'

const AREA_SERVED: string[] = ['Rennes', 'Ille-et-Vilaine', 'Bretagne', 'France']

const ORGANIZATION_SERVICES: SchemaService[] = [
  {
    '@type': 'Service',
    name: 'Création de sites web',
    description: 'Site vitrine, landing page, refonte et SEO technique.',
  },
  {
    '@type': 'Service',
    name: "Développement d'applications et de logiciels",
    description: 'Applications web et mobile, back-office et API.',
  },
  {
    '@type': 'Service',
    name: 'SaaS et outils métier sur mesure',
    description: "Création d'outils et automatisation de tâches pour simplifier votre activité.",
  },
  {
    '@type': 'Service',
    name: "Intégration de l'IA et automatisation",
    description: "Intégration d'IA, analyse de données et automatisation intelligente.",
  },
  {
    '@type': 'Service',
    name: 'Référencement SEO',
    description: 'Amélioration de la visibilité sur Google pour attirer plus de visiteurs qualifiés.',
  },
]

const PERSON_SAME_AS: string[] = [
  'https://www.linkedin.com/in/dibodev/',
  'https://github.com/Leoglme',
  'https://www.codeur.com/-leoglme',
  'https://www.malt.fr/profile/leoguillaume2',
  'https://dev.to/dibodev',
  'https://zestedesavoir.com/@dibodevcode',
]

const ORGANIZATION_SAME_AS: string[] = [
  'https://www.google.com/maps?cid=6567115254526097431',
  'https://www.linkedin.com/company/dibodev/',
  'https://x.com/dibodev',
  'https://www.pagesjaunes.fr/pros/64381216',
]

const schemaAddress: SchemaPostalAddress = {
  '@type': 'PostalAddress',
  addressLocality: ADDRESS_LOCALITY,
  postalCode: ADDRESS_POSTAL_CODE,
  addressRegion: ADDRESS_REGION,
  addressCountry: ADDRESS_COUNTRY,
}

export const personSchema: SchemaPerson = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: PERSON_NAME,
  jobTitle: JOB_TITLE,
  email: EMAIL,
  telephone: TELEPHONE,
  url: SITE_URL,
  sameAs: PERSON_SAME_AS,
  address: schemaAddress,
  worksFor: { '@id': ORGANIZATION_ID },
}

export const organizationSchema: SchemaOrganization = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': ORGANIZATION_ID,
  name: ORGANIZATION_NAME,
  legalName: ORGANIZATION_LEGAL_NAME,
  description: ORGANIZATION_DESCRIPTION,
  url: SITE_URL,
  logo: ORGANIZATION_LOGO,
  image: ORGANIZATION_LOGO,
  email: EMAIL,
  telephone: TELEPHONE,
  foundingDate: ORGANIZATION_FOUNDING_DATE,
  founder: { '@id': PERSON_ID },
  sameAs: ORGANIZATION_SAME_AS,
  areaServed: AREA_SERVED,
  address: schemaAddress,
  vatID: ORGANIZATION_VAT_ID,
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'SIRET',
    value: ORGANIZATION_SIRET,
  },
  priceRange: ORGANIZATION_PRICE_RANGE,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de Dibodev',
    itemListElement: ORGANIZATION_SERVICES.map(
      (service: SchemaService): SchemaOffer => ({ '@type': 'Offer', itemOffered: service }),
    ),
  },
}

export const siteEntityGraph: SchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [personSchema, organizationSchema],
}

export const siteEntityGraphJson: string = JSON.stringify(siteEntityGraph)
