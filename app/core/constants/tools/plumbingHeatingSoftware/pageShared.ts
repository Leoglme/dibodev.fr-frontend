import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

// Prices checked on the publishers' websites on 19 October 2026: check them twice a year and move `UPDATED_AT`.

export const PLUMBING_HEATING_PAGE_UPDATED_AT: string = '2026-10-19'

export const PLUMBING_HEATING_PAGE_PROJECT_SLUG: string = 'gestion-temps'

/** Gest-Time hours report, with a fictional employee name in place of the real one. */
export const PLUMBING_HEATING_PAGE_SCREENSHOT_URL: string = '/images/tools/gest-time-time-report.webp'

/** Articles linked at the bottom of the page; the untranslated ones are left out of /en and /es automatically. */
export const PLUMBING_HEATING_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'logiciel-gestion-plombiers-saas-sur-mesure-2026',
  'chauffagiste-contrats-entretien-outil-sur-mesure',
  'logiciel-gestion-interventions-techniciens-hors-ligne',
  'facture-electronique-artisan-ce-qui-change',
]

export const PLUMBING_HEATING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS: number = 2

/** Free quote and intervention slip template, in French only (French VAT, boiler and quote rules). */
export const PLUMBING_HEATING_TEMPLATE_PDF_PATH: string = '/modeles/devis-bon-intervention-plombier-chauffagiste.pdf'
export const PLUMBING_HEATING_TEMPLATE_XLSX_PATH: string = '/modeles/devis-bon-intervention-plombier-chauffagiste.xlsx'

/** Yearly maintenance of 4-400 kW boilers and heat pumps, certificate handed over within 15 days and kept 2 years. */
export const BOILER_MAINTENANCE_SOURCE: DibodevSourceReference = {
  name: 'Service-Public.fr',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F20760',
}

/** Reduced VAT on works in dwellings over 2 years old: the customer certifies the conditions on the quote or invoice. */
export const REDUCED_VAT_WORKS_SOURCE: DibodevSourceReference = {
  name: 'Entreprendre.Service-Public.fr',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F23568',
}

/** Ten-year liability insurance of building trades: the certificate goes with quotes and invoices. */
export const DECENNIAL_INSURANCE_SOURCE: DibodevSourceReference = {
  name: 'Entreprendre.Service-Public.fr',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F2034',
}
