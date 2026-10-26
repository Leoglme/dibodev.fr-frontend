import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the publishers' prices and the rules were read: check them twice a year and move this date. */
export const CLEANING_BUSINESS_PAGE_UPDATED_AT: string = '2026-10-26'

export const CLEANING_BUSINESS_PAGE_PROJECT_SLUG: string = 'gestion-temps'

/** Gest-Time hours report, with a fictional employee name in place of the real one. */
export const CLEANING_BUSINESS_PAGE_SCREENSHOT_URL: string = '/images/tools/gest-time-time-report.webp'

/** Articles linked at the bottom of the page; the untranslated ones are left out of /en and /es automatically. */
export const CLEANING_BUSINESS_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'logiciel-gestion-des-temps-feuilles-heures-excel',
  'logiciel-metier-saas-etagere-ou-sur-mesure',
  'logiciel-gestion-interventions-techniciens-hors-ligne',
  'alternative-organilog-logiciel-gestion-interventions',
  'facture-electronique-artisan-ce-qui-change',
]

export const CLEANING_BUSINESS_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS: number = 2

/** Free weekly visit schedule and quality inspection sheet, in French only (French collective agreement). */
export const CLEANING_BUSINESS_TEMPLATE_PDF_PATH: string = '/modeles/planning-passages-controle-qualite-nettoyage.pdf'

/** Excel version of the free template: hours per agent and conformity rate calculated. */
export const CLEANING_BUSINESS_TEMPLATE_XLSX_PATH: string = '/modeles/planning-passages-controle-qualite-nettoyage.xlsx'

/** Collective agreement of cleaning companies (IDCC 3043): part-time work (art. 6.2.4.1) and staff transfer (art. 7). */
export const CLEANING_COLLECTIVE_AGREEMENT_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/conv_coll/id/KALIARTI000027172415/?idConteneur=3043',
}

/** Prevention plan at the client's premises, written from 400 hours over 12 months (Labour Code, R4512-6 to R4512-12). */
export const PREVENTION_PLAN_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000018491568/',
}

/** Time clocks: employees informed before the system starts, works council consulted from 50 employees. */
export const WORKING_TIME_MONITORING_SOURCE: DibodevSourceReference = {
  name: 'CNIL',
  url: 'https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees',
}

/** 10 % VAT on cleaning at private homes (personal services) when the business works only there, 20 % otherwise. */
export const HOME_SERVICES_VAT_SOURCE: DibodevSourceReference = {
  name: 'Entreprendre.Service-Public.fr',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F31596',
}
