/**
 * Schema.org structured data (JSON-LD) for the site: a Person (Léo Guillaume)
 * and an Organization (Dibodev) linked in a single @graph
 * (Person.worksFor ↔ Organization.founder), injected globally from the default
 * layout via useHead.
 *
 * The @id values must stay stable: app/config/projectSchema.ts references
 * PERSON_ID as the `author` of every project page.
 */

export type SchemaPostalAddress = {
  '@type': 'PostalAddress'
  addressLocality: string
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

export type SchemaOrganization = {
  '@type': 'Organization'
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
  areaServed: string[]
  address: SchemaPostalAddress
  vatID: string
  identifier: SchemaPropertyValue
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

const ADDRESS_LOCALITY: string = 'Rennes'
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

const AREA_SERVED: string[] = ['Rennes', 'Bretagne', 'France']

const PERSON_SAME_AS: string[] = [
  'https://www.linkedin.com/in/dibodev/',
  'https://github.com/Leoglme',
  'https://www.codeur.com/-leoglme',
  'https://zestedesavoir.com/@dibodevcode',
]

const schemaAddress: SchemaPostalAddress = {
  '@type': 'PostalAddress',
  addressLocality: ADDRESS_LOCALITY,
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
  '@type': 'Organization',
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
  areaServed: AREA_SERVED,
  address: schemaAddress,
  vatID: ORGANIZATION_VAT_ID,
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'SIRET',
    value: ORGANIZATION_SIRET,
  },
}

export const siteEntityGraph: SchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [personSchema, organizationSchema],
}

export const siteEntityGraphJson: string = JSON.stringify(siteEntityGraph)
