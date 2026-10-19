import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

export const ELECTRICIAN_PAGE_UPDATED_AT: string = '2026-10-20'

export const ELECTRICIAN_PAGE_PROJECT_SLUG: string = 'gestion-temps'

/** Gest-Time hours report, with a fictional employee name in place of the real one. */
export const ELECTRICIAN_PAGE_SCREENSHOT_URL: string = '/images/tools/gest-time-time-report.webp'

/** Articles linked at the bottom of the page; the untranslated ones are left out of /en and /es automatically. */
export const ELECTRICIAN_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'electricien-outil-sur-mesure-devis-interventions-factures',
  'facture-electronique-artisan-ce-qui-change',
  'artisan-btp-gerer-ses-chantiers-sans-excel-avec-un-outil-dedie',
  'logiciel-gestion-plombiers-saas-sur-mesure-2026',
]

export const ELECTRICIAN_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS: number = 2

/** Free quote and commissioning report template, in French only (French VAT, Consuel and quote rules). */
export const ELECTRICIAN_TEMPLATE_PDF_PATH: string = '/modeles/devis-pv-mise-en-service-electricien.pdf'
export const ELECTRICIAN_TEMPLATE_XLSX_PATH: string = '/modeles/devis-pv-mise-en-service-electricien.xlsx'

/** Certificate of conformity before any new installation is connected: sent at least 20 days before commissioning. */
export const CONSUEL_SOURCE: DibodevSourceReference = {
  name: 'Consuel',
  url: 'https://www.consuel.com/',
}

/** Charging points above 3.7 kW must be installed by professionals holding an IRVE qualification (decree 2017-26, article 22). */
export const CHARGING_POINT_QUALIFICATION_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000043476424/2026-10-06',
}
