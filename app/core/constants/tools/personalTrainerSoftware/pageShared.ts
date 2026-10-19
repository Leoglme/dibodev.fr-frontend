import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

export const PERSONAL_TRAINER_PAGE_UPDATED_AT: string = '2026-10-20'

export const PERSONAL_TRAINER_PAGE_PROJECT_SLUG: string = 'izidoor'

/** Transparent laptop and phone mockup of the Izidoor planning: shown without the browser frame. */
export const PERSONAL_TRAINER_PAGE_SCREENSHOT_URL: string = '/images/tools/izidoor-booking-mockup.webp'

/** Articles linked at the bottom of the page; the untranslated ones are left out of /en and /es automatically. */
export const PERSONAL_TRAINER_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'coach-sportif-limiter-les-annulations-avec-un-outil-de-reservation-en-ligne',
  'site-vitrine-ou-outil-metier-sur-mesure-que-choisir',
  'developpement-logiciel-b2b-sur-mesure-prix',
]

export const PERSONAL_TRAINER_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS: number = 2

/** Free client assessment and training log template, in French only. */
export const PERSONAL_TRAINER_TEMPLATE_PDF_PATH: string = '/modeles/bilan-client-carnet-de-seances-coach-sportif.pdf'
export const PERSONAL_TRAINER_TEMPLATE_XLSX_PATH: string = '/modeles/bilan-client-carnet-de-seances-coach-sportif.xlsx'

/** Coaching for pay requires a declaration and a professional card (code du sport). */
export const SPORTS_EDUCATOR_DECLARATION_SOURCE: DibodevSourceReference = {
  name: 'sports.gouv.fr',
  url: 'https://www.sports.gouv.fr/se-declarer-educateur-sportif',
}

/** Gym memberships: information before signing, 14-day withdrawal at a distance, displayed diplomas and cards, medical certificate. */
export const GYM_MEMBERSHIP_RULES_SOURCE: DibodevSourceReference = {
  name: 'Institut national de la consommation',
  url: 'https://www.inc-conso.fr/content/les-salles-de-sport-et-centres-de-remise-en-forme-vous-souhaitez-vous-inscrire',
}

/** What counts as health data (inability to practise a sport, weight combined with other measures) and the special regime that follows. */
export const HEALTH_DATA_SOURCE: DibodevSourceReference = {
  name: 'CNIL',
  url: 'https://www.cnil.fr/fr/quest-ce-ce-quune-donnee-de-sante',
}
