import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

// Prices checked on the publishers' websites on 29 September 2026: check them twice a year and move `UPDATED_AT`.

export const AUTO_REPAIR_PAGE_UPDATED_AT: string = '2026-09-29'

export const AUTO_REPAIR_PAGE_PROJECT_SLUG: string = 'gestion-temps'

/** Gest-Time hours report, with a fictional employee name in place of the real one. */
export const AUTO_REPAIR_PAGE_SCREENSHOT_URL: string = '/images/tools/gest-time-time-report.webp'

/** Articles linked at the bottom of the page (not the B2B pricing one: its cover is the Gest-Time screen shown above). */
export const AUTO_REPAIR_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'garagiste-outil-sur-mesure-rendez-vous-devis-suivi-vehicules',
  'developpeur-application-metier-rennes-freelance-local',
]

export const AUTO_REPAIR_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS: number = 2

/** Garage rules (prices, quote, repair order, circular economy parts, invoice), updated on 31 July 2025. */
export const AUTO_REPAIR_RULES_SOURCE: DibodevSourceReference = {
  name: 'Institut national de la consommation',
  url: 'https://www.inc-conso.fr/content/les-garagistes-en-20-questions-reponses',
}
