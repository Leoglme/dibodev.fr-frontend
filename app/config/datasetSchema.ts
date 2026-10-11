import { ORGANIZATION_ID } from '~/config/schema'

const SITE_URL: string = 'https://dibodev.fr'
const CSV_ENCODING_FORMAT: string = 'text/csv'
const CC_BY_LICENSE_URL: string = 'https://creativecommons.org/licenses/by/4.0/'
const OPEN_DATA_CATALOG_NAME: string = 'data.gouv.fr'
const OPEN_DATA_CATALOG_URL: string = 'https://www.data.gouv.fr'

/** What a page publishing a dataset declares: its French path (the `@id` of the dataset), its texts, its CSV and, when it has one, its data.gouv.fr record. */
export type SchemaDatasetDefinition = {
  pagePath: string
  name: string
  description: string
  csvPath: string
  openDataUrl?: string
  dateModified: string
  spatialCoverage: string
  keywords: string[]
}

export type SchemaDataset = {
  '@context': 'https://schema.org'
  '@type': 'Dataset'
  '@id': string
  name: string
  description: string
  url: string
  license: string
  isAccessibleForFree: boolean
  dateModified: string
  spatialCoverage: string
  keywords: string[]
  creator: { '@id': string }
  publisher: { '@id': string }
  distribution: { '@type': 'DataDownload'; encodingFormat: string; contentUrl: string }[]
  sameAs?: string[]
  includedInDataCatalog?: { '@type': 'DataCatalog'; name: string; url: string }
}

/**
 * Builds the Dataset JSON-LD of a page that publishes recorded data with a downloadable CSV, under CC BY 4.0.
 * @param {SchemaDatasetDefinition} definition - Path, texts and CSV of the dataset.
 * @returns {string} The serialized JSON-LD.
 */
export function buildDatasetSchemaJson(definition: SchemaDatasetDefinition): string {
  const pageUrl: string = `${SITE_URL}${definition.pagePath}`
  const datasetSchema: SchemaDataset = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': `${pageUrl}#dataset`,
    name: definition.name,
    description: definition.description,
    url: pageUrl,
    license: CC_BY_LICENSE_URL,
    isAccessibleForFree: true,
    dateModified: definition.dateModified,
    spatialCoverage: definition.spatialCoverage,
    keywords: definition.keywords,
    creator: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    distribution: [
      { '@type': 'DataDownload', encodingFormat: CSV_ENCODING_FORMAT, contentUrl: `${SITE_URL}${definition.csvPath}` },
    ],
  }
  if (definition.openDataUrl) {
    datasetSchema.sameAs = [definition.openDataUrl]
    datasetSchema.includedInDataCatalog = {
      '@type': 'DataCatalog',
      name: OPEN_DATA_CATALOG_NAME,
      url: OPEN_DATA_CATALOG_URL,
    }
  }
  return JSON.stringify(datasetSchema)
}
