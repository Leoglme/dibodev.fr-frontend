import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the publisher prices and the rules of the page were last checked, shown under the test and sent as dateModified. */
export const LANDSCAPING_PAGE_UPDATED_AT: string = '2026-10-26'

export const LANDSCAPING_PAGE_PROJECT_SLUG: string = 'gestion-temps'

/** Gest-Time hours report, with a fictional employee name in place of the real one. */
export const LANDSCAPING_PAGE_SCREENSHOT_URL: string = '/images/tools/gest-time-time-report.webp'

/** Articles linked at the bottom of the page; the unpublished or untranslated ones are left out automatically. */
export const LANDSCAPING_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'paysagiste-outil-metier-devis-chantiers-plannings',
  'facture-electronique-artisan-ce-qui-change',
  'artisan-btp-gerer-ses-chantiers-sans-excel-avec-un-outil-dedie',
  'alternative-obat-logiciel-devis-batiment',
  'logiciel-gestion-interventions-techniciens-hors-ligne',
]

export const LANDSCAPING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS: number = 2

/** Free landscaping quote and garden maintenance contract to print, in French only (French VAT and home service rules). */
export const LANDSCAPING_TEMPLATE_PDF_PATH: string = '/modeles/devis-contrat-entretien-paysagiste.pdf'

/** Same template as an Excel workbook with calculated totals, in French only. */
export const LANDSCAPING_TEMPLATE_XLSX_PATH: string = '/modeles/devis-contrat-entretien-paysagiste.xlsx'

/** 10 % VAT for some structures next to a dwelling over 2 years old (fence wall, gate, masonry terrace…), 20 % for sheds, ponds or lighting. */
export const LANDSCAPING_VAT_SOURCE: DibodevSourceReference = {
  name: 'BOFiP',
  url: 'https://bofip.impots.gouv.fr/bofip/1735-PGP.html/identifiant=BOI-ANNX-000208-20240731',
}

/** Small gardening jobs as a home service: declaration without approval, activities covered and excluded, yearly tax certificate. */
export const GARDENING_HOME_SERVICES_SOURCE: DibodevSourceReference = {
  name: 'servicesalapersonne.gouv.fr',
  url: 'https://www.servicesalapersonne.gouv.fr/beneficier-des-sap/quelles-sont-activites-de-services-la-personne/petits-travaux-de-jardinage',
}

/** 50 % tax credit on home services, small gardening jobs capped at 5 000 € of expenses a year per household. */
export const HOME_SERVICES_TAX_CREDIT_SOURCE: DibodevSourceReference = {
  name: 'Service-Public.fr',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F12',
}

/** Plant protection products banned in private homes and their outdoor areas since 1 July 2022 (order of 15 January 2021). */
export const PESTICIDE_BAN_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043023130',
}

/** Biowaste, green waste included, sorted at source by every professional since 1 January 2024. */
export const BIOWASTE_SORTING_SOURCE: DibodevSourceReference = {
  name: 'ecologie.gouv.fr',
  url: 'https://www.ecologie.gouv.fr/politiques-publiques/biodechets',
}
