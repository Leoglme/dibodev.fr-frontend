import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

// Prices checked on the publishers' websites on 19 October 2026: check them twice a year and move `UPDATED_AT`.

export const FIELD_SERVICE_PAGE_UPDATED_AT: string = '2026-10-19'

export const FIELD_SERVICE_PAGE_PROJECT_SLUG: string = 'gestion-temps'

/** Gest-Time hours report, with a fictional employee name in place of the real one. */
export const FIELD_SERVICE_PAGE_SCREENSHOT_URL: string = '/images/tools/gest-time-time-report.webp'

/** Articles linked at the bottom of the page; the untranslated ones are left out of /en and /es automatically. */
export const FIELD_SERVICE_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'logiciel-gestion-interventions-techniciens-hors-ligne',
  'alternative-organilog-logiciel-gestion-interventions',
  'alternative-praxedo-logiciel-gestion-interventions',
  'chauffagiste-contrats-entretien-outil-sur-mesure',
  'logiciel-gestion-plombiers-saas-sur-mesure-2026',
]

export const FIELD_SERVICE_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS: number = 2

/** Free intervention slip and daily round sheet, in French only (French working-time and invoicing rules). */
export const FIELD_SERVICE_TEMPLATE_PDF_PATH: string = '/modeles/bon-intervention-feuille-de-tournee.pdf'
export const FIELD_SERVICE_TEMPLATE_XLSX_PATH: string = '/modeles/bon-intervention-feuille-de-tournee.xlsx'

/** Mandatory mentions of an invoice between businesses: due date, late-payment penalties, 40 € recovery fee. */
export const INVOICE_MENTIONS_SOURCE: DibodevSourceReference = {
  name: 'Entreprendre.Service-Public.fr',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F31808',
}

/** Geolocation of employees' vehicles: purposes, bans, information and retention (CNIL). */
export const VEHICLE_GEOLOCATION_SOURCE: DibodevSourceReference = {
  name: 'CNIL',
  url: 'https://www.cnil.fr/fr/la-geolocalisation-des-vehicules-des-salaries',
}

/** Travel time of itinerant employees between home and the first or last customer counts as working time (Cass. soc., 23 November 2022). */
export const ITINERANT_TRAVEL_TIME_SOURCE: DibodevSourceReference = {
  name: 'Entreprendre.Service-Public.fr',
  url: 'https://entreprendre.service-public.gouv.fr/actualites/A16379',
}

/** Retention of business documents: invoices, delivery and order slips kept 10 years. */
export const DOCUMENT_RETENTION_SOURCE: DibodevSourceReference = {
  name: 'Entreprendre.Service-Public.fr',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F10029',
}
