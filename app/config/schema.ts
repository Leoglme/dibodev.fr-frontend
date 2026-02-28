/**
 * Données structurées Schema.org (JSON-LD) pour le site.
 * Utilisé dans le layout pour injection via useHead (script type="application/ld+json").
 * Typage strict pour éviter les erreurs et assurer la cohérence.
 */

export interface SchemaPostalAddress {
  '@type': 'PostalAddress'
  addressLocality: string
  addressRegion: string
  addressCountry: string
}

export interface SchemaPerson {
  '@context': 'https://schema.org'
  '@id': string
  '@type': 'Person'
  name: string
  jobTitle: string
  email: string
  telephone: string
  url: string
  sameAs: string[]
  address: SchemaPostalAddress
}

const SITE_URL = 'https://dibodev.fr'
const PERSON_ID = 'https://dibodev.fr/#person'
const PERSON_NAME = 'Léo Guillaume'
const JOB_TITLE = 'Développeur web & mobile freelance'
const EMAIL = 'contact@dibodev.fr'
const TELEPHONE = '+33642193812'
const ADDRESS_LOCALITY = 'Rennes'
const ADDRESS_REGION = 'Bretagne'
const ADDRESS_COUNTRY = 'FR'

const SAME_AS: string[] = ['https://www.linkedin.com/in/dibodev/', 'https://github.com/Leoglme/']

const schemaAddress: SchemaPostalAddress = {
  '@type': 'PostalAddress',
  addressLocality: ADDRESS_LOCALITY,
  addressRegion: ADDRESS_REGION,
  addressCountry: ADDRESS_COUNTRY,
}

export const personSchema: SchemaPerson = {
  '@context': 'https://schema.org',
  '@id': PERSON_ID,
  '@type': 'Person',
  name: PERSON_NAME,
  jobTitle: JOB_TITLE,
  email: EMAIL,
  telephone: TELEPHONE,
  url: SITE_URL,
  sameAs: SAME_AS,
  address: schemaAddress,
}

/** JSON stringifié une seule fois pour injection dans le head (évite hydration / recalcul). */
export const personSchemaJson: string = JSON.stringify(personSchema)
