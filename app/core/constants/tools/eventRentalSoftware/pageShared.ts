import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

// Prices checked on the publishers' websites on 29 September 2026: check them twice a year and move `UPDATED_AT`.

export const EVENT_RENTAL_PAGE_UPDATED_AT: string = '2026-09-29'

export const EVENT_RENTAL_PAGE_PROJECT_SLUG: string = 'stockpme'

/** A still of the public StockPME demo: stock per warehouse, serial numbers and transfers. */
export const EVENT_RENTAL_PAGE_SCREENSHOT_URL: string = '/images/tools/stockpme-product-sheet.webp'

/** Articles linked at the bottom of the page; the untranslated ones are left out of /en and /es automatically. */
export const EVENT_RENTAL_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'developpement-logiciel-b2b-sur-mesure-prix',
  'developpeur-application-metier-rennes-freelance-local',
]

export const EVENT_RENTAL_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS: number = 2

/** Rules for marquees, tents and temporary structures (CTS), from the French State in the Drôme department. */
export const EVENT_RENTAL_MARQUEE_RULES_SOURCE: DibodevSourceReference = {
  name: 'Services de l’État dans la Drôme',
  url: 'https://www.drome.gouv.fr/Actions-de-l-Etat/Securite-et-protection-des-personnes/Securite-des-lieux-recevant-du-public/Chapiteaux-Tentes-Structures-CTS',
}
