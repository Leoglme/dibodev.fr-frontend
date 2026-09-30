import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { CategoryKey, SectorKey } from '~/core/constants/projectEnums'

/**
 * Type definitions for the DibodevProjectLandingSection component props.
 * @type {DibodevProjectLandingSectionProps}
 * @property {DibodevBreadcrumbItem[]} breadcrumbs - Trail displayed above the project header.
 * @property {string} title - Project name (H1).
 * @property {string} primaryColor - Project brand colour.
 * @property {string} secondaryColor - Background of the logo tile.
 * @property {string} logoUrl - Project logo.
 * @property {string} description - Short description.
 * @property {CategoryKey[]} categories - Category keys, linked to their listing pages.
 * @property {SectorKey[]} sectors - Sector keys, linked to their listing pages.
 * @property {string} date - Project date already formatted for display.
 * @property {string | null} siteUrl - Public site URL, when the project is online.
 */
export type DibodevProjectLandingSectionProps = {
  breadcrumbs: DibodevBreadcrumbItem[]
  title: string
  primaryColor: string
  secondaryColor: string
  logoUrl: string
  description: string
  categories: CategoryKey[]
  sectors: SectorKey[]
  date: string
  siteUrl: string | null
}
