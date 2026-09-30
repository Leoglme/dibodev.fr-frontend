import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'

const SITE_URL: string = 'https://dibodev.fr'

export type SchemaBreadcrumbListItem = {
  '@type': 'ListItem'
  position: number
  name: string
  item?: string
}

export type SchemaBreadcrumbList = {
  '@context': 'https://schema.org'
  '@type': 'BreadcrumbList'
  itemListElement: SchemaBreadcrumbListItem[]
}

/**
 * Builds the BreadcrumbList JSON-LD of a trail, serialized for a script tag.
 * The current page (no route) is listed without an `item` URL, as Google recommends.
 * @param {DibodevBreadcrumbItem[]} items - The trail, from the home page to the current page.
 * @returns {string} The serialized JSON-LD.
 */
export function buildBreadcrumbSchemaJson(items: DibodevBreadcrumbItem[]): string {
  const breadcrumbSchema: SchemaBreadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item: DibodevBreadcrumbItem, index: number): SchemaBreadcrumbListItem => {
      const listItem: SchemaBreadcrumbListItem = { '@type': 'ListItem', position: index + 1, name: item.label }
      if (item.to) {
        listItem.item = `${SITE_URL}${item.to === '/' ? '' : item.to}`
      }
      return listItem
    }),
  }
  return JSON.stringify(breadcrumbSchema)
}
