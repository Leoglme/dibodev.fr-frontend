import { FRANCE_NUM_PROFILE_URL, GOOGLE_BUSINESS_URL, GOOGLE_KNOWLEDGE_GRAPH_URL } from '~/config/contact'

/**
 * Schema.org structured data (JSON-LD) for the site: a Person (Léo Guillaume)
 * and an Organization (Dibodev, also typed ProfessionalService with its service
 * catalog) linked in a single @graph (Person.worksFor ↔ Organization.founder),
 * injected globally from the default layout via useHead.
 *
 * The @id values must stay stable: project and article pages reference
 * PERSON_ID as their author and ORGANIZATION_ID as their publisher.
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

export type SchemaEducationalOrganization = {
  '@type': 'CollegeOrUniversity'
  name: string
  url: string
}

export type SchemaPerson = {
  '@type': 'Person'
  '@id': string
  name: string
  givenName: string
  familyName: string
  jobTitle: string
  description: string
  disambiguatingDescription: string
  email: string
  telephone: string
  url: string
  image: string
  sameAs: string[]
  address: SchemaPostalAddress
  worksFor: SchemaEntityReference
  alumniOf: SchemaEducationalOrganization
  knowsAbout: string[]
  knowsLanguage: string[]
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

export type SchemaGeoCoordinates = {
  '@type': 'GeoCoordinates'
  latitude: number
  longitude: number
}

export type SchemaOpeningHoursSpecification = {
  '@type': 'OpeningHoursSpecification'
  dayOfWeek: string[]
  opens: string
  closes: string
}

export type SchemaGovernmentOrganization = {
  '@type': 'GovernmentOrganization'
  name: string
  url: string
}

export type SchemaProgramMembership = {
  '@type': 'ProgramMembership'
  programName: string
  url: string
  hostingOrganization: SchemaGovernmentOrganization
}

export type SchemaOrganization = {
  '@type': ['Organization', 'ProfessionalService']
  '@id': string
  name: string
  alternateName: string[]
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
  memberOf: SchemaProgramMembership[]
  areaServed: string[]
  address: SchemaPostalAddress
  geo: SchemaGeoCoordinates
  openingHoursSpecification: SchemaOpeningHoursSpecification[]
  priceRange: string
  vatID: string
  duns: string
  identifier: SchemaPropertyValue
  hasOfferCatalog: SchemaOfferCatalog
}

export type SchemaGraph = {
  '@context': 'https://schema.org'
  '@graph': (SchemaPerson | SchemaOrganization)[]
}

const SITE_URL: string = 'https://dibodev.fr'
export const PERSON_ID: string = 'https://dibodev.fr/#person'
export const ORGANIZATION_ID: string = 'https://dibodev.fr/#organization'

export const PERSON_GIVEN_NAME: string = 'Léo'
export const PERSON_FAMILY_NAME: string = 'Guillaume'
export const PERSON_NAME: string = `${PERSON_GIVEN_NAME} ${PERSON_FAMILY_NAME}`
const JOB_TITLE: string = 'Développeur freelance full-stack et IA'
const PERSON_DESCRIPTION: string =
  "Développeur freelance full-stack et IA près de Rennes, fondateur de Dibodev : applications métier, logiciels de gestion, sites web et automatisations avec l'IA pour les TPE et PME."
/** Same wording as the Wikidata description, to keep Léo apart from his namesakes (an actor among them). */
const PERSON_DISAMBIGUATING_DESCRIPTION: string =
  'Développeur logiciel français, fondateur de Dibodev, à Saint-Erblon près de Rennes.'
/** The About page is Léo's own page, as declared on Wikidata (official website of Q141592129). */
const PERSON_URL: string = `${SITE_URL}/a-propos`
const PERSON_IMAGE: string = `${SITE_URL}/images/about/leo-guillaume-portrait-800.webp`
const PERSON_LANGUAGES: string[] = ['fr', 'en']
const EMAIL: string = 'contact@dibodev.fr'
const TELEPHONE: string = '+33642193812'

const ADDRESS_LOCALITY: string = 'Saint-Erblon'
const ADDRESS_POSTAL_CODE: string = '35230'
const ADDRESS_REGION: string = 'Bretagne'
const ADDRESS_COUNTRY: string = 'FR'

const ORGANIZATION_NAME: string = 'Dibodev'
/** Name used by the directories that follow the business register (Europages, Kompass, France Num contact). */
const ORGANIZATION_ALTERNATE_NAMES: string[] = ['Léo Guillaume (Dibodev)']
const ORGANIZATION_LEGAL_NAME: string = 'EI - GUILLAUME LEO'
const ORGANIZATION_DESCRIPTION: string =
  'Studio de développement web, mobile et IA de Léo Guillaume : sites web, applications mobiles, SaaS et outils métier sur mesure pour TPE et PME.'
const ORGANIZATION_FOUNDING_DATE: string = '2025-06-20'
const ORGANIZATION_LOGO: string = `${SITE_URL}/android-chrome-512x512.png`
const ORGANIZATION_VAT_ID: string = 'FR02988307906'
const ORGANIZATION_SIRET: string = '98830790600020'
const ORGANIZATION_DUNS: string = '284774546'

const AREA_SERVED: string[] = ['Rennes', 'Ille-et-Vilaine', 'Bretagne', 'France']

const PERSON_ALUMNI_OF: SchemaEducationalOrganization = {
  '@type': 'CollegeOrUniversity',
  name: 'Epitech',
  url: 'https://www.epitech.eu',
}

const PERSON_KNOWS_ABOUT: string[] = [
  'Applications métier sur mesure',
  'Logiciels de gestion',
  'SaaS',
  'Développement web',
  'Nuxt',
  'Vue.js',
  'TypeScript',
  'Node.js',
  'Python',
  'Intelligence artificielle',
  'IA conversationnelle',
]

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
  'https://www.lesbonsfreelances.com/freelance/leog4',
  'https://dev.to/dibodev',
  'https://dibodev.hashnode.dev/',
  'https://zestedesavoir.com/@dibodevcode',
  'https://www.wikidata.org/wiki/Q141592129',
  'https://www.crunchbase.com/person/l%C3%A9o-guillaume',
  'https://www.data.gouv.fr/users/leo-guillaume-1',
  'https://claudepartners.fr/prestataires/leo-guillaume-dibodev-4cd67/',
]

const ORGANIZATION_SAME_AS: string[] = [
  GOOGLE_BUSINESS_URL,
  'https://www.linkedin.com/company/dibodev/',
  'https://x.com/dibodev',
  'https://www.pagesjaunes.fr/pros/64381216',
  'https://www.wikidata.org/wiki/Q141592139',
  'https://www.crunchbase.com/organization/dibodev',
  'https://fr.kompass.com/c/m-leo-guillaume/fra0ddqgz/',
  'https://www.europages.fr/fr/company/leo-guillaume-22424130',
  FRANCE_NUM_PROFILE_URL,
  'https://www.data.gouv.fr/organizations/dibodev',
  'https://annuaire-entreprises.data.gouv.fr/entreprise/leo-guillaume-988307906',
  'https://www.pappers.fr/entreprise/guillaume-leo-988307906',
  'https://fr.mappy.com/poi/69003bc22464ff66b9b84b30',
  GOOGLE_KNOWLEDGE_GRAPH_URL,
]

/** Listing in the France Num directory, the State programme run by the DGE for the digital shift of small businesses. */
const ORGANIZATION_MEMBER_OF: SchemaProgramMembership[] = [
  {
    '@type': 'ProgramMembership',
    programName: 'Activateurs France Num',
    url: FRANCE_NUM_PROFILE_URL,
    hostingOrganization: {
      '@type': 'GovernmentOrganization',
      name: 'France Num (Direction générale des entreprises)',
      url: 'https://www.francenum.gouv.fr',
    },
  },
]

/** Centre of the commune (geo.api.gouv.fr): the street address is not public. */
const GEO_LATITUDE: number = 48.02
const GEO_LONGITUDE: number = -1.6465
/** Same hours as the Google Business profile and the Cal.com booking page. */
const OPENING_DAYS: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const OPENING_TIME: string = '09:00'
const CLOSING_TIME: string = '19:00'
/** Fixed prices published on the site, from a showcase website to a business application. */
const PRICE_RANGE: string = '1 500 € - 15 000 €'

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
  givenName: PERSON_GIVEN_NAME,
  familyName: PERSON_FAMILY_NAME,
  jobTitle: JOB_TITLE,
  description: PERSON_DESCRIPTION,
  disambiguatingDescription: PERSON_DISAMBIGUATING_DESCRIPTION,
  email: EMAIL,
  telephone: TELEPHONE,
  url: PERSON_URL,
  image: PERSON_IMAGE,
  sameAs: PERSON_SAME_AS,
  address: schemaAddress,
  worksFor: { '@id': ORGANIZATION_ID },
  alumniOf: PERSON_ALUMNI_OF,
  knowsAbout: PERSON_KNOWS_ABOUT,
  knowsLanguage: PERSON_LANGUAGES,
}

export const organizationSchema: SchemaOrganization = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': ORGANIZATION_ID,
  name: ORGANIZATION_NAME,
  alternateName: ORGANIZATION_ALTERNATE_NAMES,
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
  memberOf: ORGANIZATION_MEMBER_OF,
  areaServed: AREA_SERVED,
  address: schemaAddress,
  geo: { '@type': 'GeoCoordinates', latitude: GEO_LATITUDE, longitude: GEO_LONGITUDE },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: OPENING_DAYS, opens: OPENING_TIME, closes: CLOSING_TIME },
  ],
  priceRange: PRICE_RANGE,
  vatID: ORGANIZATION_VAT_ID,
  duns: ORGANIZATION_DUNS,
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'SIRET',
    value: ORGANIZATION_SIRET,
  },
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
