import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the publishers' prices and the rules were read: check them twice a year and move this date. */
export const CARPENTRY_PAGE_UPDATED_AT: string = '2026-11-01'

export const CARPENTRY_PAGE_PROJECT_SLUG: string = 'gestion-temps'

/** Gest-Time on two phones: the day view (tasks, absences) and the keypad that enters hours by the quarter hour. */
export const CARPENTRY_PAGE_SCREENSHOT_URL: string = '/images/tools/gest-time-day-view-phone.webp'

/** Articles linked at the bottom of the page; the untranslated or unpublished ones are left out automatically. */
export const CARPENTRY_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'site-web-sur-mesure-menuiserie-2026',
  'artisan-btp-gerer-ses-chantiers-sans-excel-avec-un-outil-dedie',
  'alternative-obat-logiciel-devis-batiment',
  'alternative-tolteck-logiciel-devis-artisan',
  'alternative-batappli-logiciel-batiment',
]

export const CARPENTRY_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS: number = 2

/** Free joinery quote with measurements and handover report, in French only (French VAT, withdrawal and warranty rules). */
export const CARPENTRY_TEMPLATE_PDF_PATH: string = '/modeles/devis-metre-fiche-de-debit-menuiserie.pdf'

/** Excel version of the free template: quote totals by VAT rate, cutting list with material cost and a simple cutting plan. */
export const CARPENTRY_TEMPLATE_XLSX_PATH: string = '/modeles/devis-metre-fiche-de-debit-menuiserie.xlsx'

/** Reduced VAT at 10% or 5.5%: no more certificate, the customer certifies with a statement on the quote or invoice. */
export const REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE: DibodevSourceReference = {
  name: 'BOFiP-Impôts',
  url: 'https://bofip.impots.gouv.fr/bofip/14834-PGP.html',
}

/** Made-to-measure windows, shutters or doors sold and fitted off premises: 14-day withdrawal, no payment within 7 days. */
export const CUSTOM_WINDOW_WITHDRAWAL_SOURCE: DibodevSourceReference = {
  name: 'DGCCRF',
  url: 'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/vente-sans-pose-dune-fenetre-sur-mesure-dans-le-cas-dun-contrat-conclu-hors-etablissement-le-droit-de-retractation-de-14',
}

/** Builder's warranties of 1, 2 and 10 years, all starting from the handover (réception) of the works. */
export const BUILDER_WARRANTIES_SOURCE: DibodevSourceReference = {
  name: 'Service-Public.fr',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2958',
}

/** MaPrimeRénov': window replacement left out of the single-measure route in mainland France, RGE professional required. */
export const MAPRIMERENOV_SOURCE: DibodevSourceReference = {
  name: 'Service-Public.fr',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F35083',
}
