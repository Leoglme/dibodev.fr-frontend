import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the publishers' prices and the rules were read: check them twice a year and move this date. */
export const LEISURE_BOOKING_PAGE_UPDATED_AT: string = '2026-11-01'

export const LEISURE_BOOKING_PAGE_PROJECT_SLUG: string = 'izidoor'

/** Transparent laptop and phone mockup of the Izidoor planning: shown without the browser frame. */
export const LEISURE_BOOKING_PAGE_SCREENSHOT_URL: string = '/images/tools/izidoor-booking-mockup.webp'

/** Articles linked at the bottom of the page; the untranslated or not yet published ones are left out automatically. */
export const LEISURE_BOOKING_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'logiciel-reservation-en-ligne-sur-mesure-loisirs',
  'coach-sportif-limiter-les-annulations-avec-un-outil-de-reservation-en-ligne',
  'alternative-eversports-manager-logiciel-salle-de-sport',
  'logiciel-metier-saas-etagere-ou-sur-mesure',
  'developpement-logiciel-b2b-sur-mesure-prix',
]

export const LEISURE_BOOKING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS: number = 2

/** Free registration and briefing form with the emergency chart to display, in French only (French rules). */
export const LEISURE_BOOKING_TEMPLATE_PDF_PATH: string = '/modeles/planning-reservations-fiche-inscription-loisirs.pdf'

/** Excel version of the free template: places left, fill rate, balances, instructor hours and overdue checks calculated. */
export const LEISURE_BOOKING_TEMPLATE_XLSX_PATH: string =
  '/modeles/planning-reservations-fiche-inscription-loisirs.xlsx'

/** VAT on leisure activities: 10 % for admission fees, 20 % for sports facilities and hire, 5.5 % for some equestrian activities. */
export const LEISURE_ACTIVITY_VAT_RATES_SOURCE: DibodevSourceReference = {
  name: 'BOFiP-Impôts',
  url: 'https://bofip.impots.gouv.fr/bofip/250-PGP.html/identifiant=BOI-TVA-LIQ-30-20-50-20251203',
}

/** No right of withdrawal for leisure activities booked for a set date (Consumer Code, L221-28, 12°). */
export const LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000032221365/',
}

/** Paid instructors: diploma, declaration and professional card renewed every 5 years, copies displayed on site. */
export const PAID_SPORTS_INSTRUCTOR_SOURCE: DibodevSourceReference = {
  name: 'sports.gouv.fr',
  url: 'https://www.sports.gouv.fr/educateurs-sportifs',
}

/** Canoeing, kayaking and rafting: the operator adapts or cancels when the weather or the water puts people at risk (Sports Code, A322-42 and following). */
export const CANOE_KAYAK_SAFETY_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006071318/LEGISCTA000018751549/',
}

/** First-aid kit, emergency chart and mandatory notices in a sports facility (Sports Code, R322-4 to R322-6). */
export const SPORTS_FACILITY_DISPLAY_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006071318/LEGISCTA000006151553/',
}
