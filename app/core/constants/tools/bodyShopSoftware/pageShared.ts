import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the publishers' prices and the rules were read: check them twice a year and move this date. */
export const BODY_SHOP_PAGE_UPDATED_AT: string = '2026-11-01'

export const BODY_SHOP_PAGE_PROJECT_SLUG: string = 'gestion-temps'

/** Gest-Time hours report, with a fictional employee name in place of the real one. */
export const BODY_SHOP_PAGE_SCREENSHOT_URL: string = '/images/tools/gest-time-time-report.webp'

/** Articles linked at the bottom of the page; the untranslated ones are left out of /en and /es automatically. */
export const BODY_SHOP_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'logiciel-facturation-garage-devis-ordre-de-reparation-facture',
  'meilleur-logiciel-garage-automobile-comparatif-2026',
  'alternative-gad-garage-logiciel-garage',
  'alternative-gestgarage-logiciel-garage',
  'facture-electronique-artisan-ce-qui-change',
]

export const BODY_SHOP_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS: number = 2

/** Free body shop quote with photo survey and claim tracking sheet, in French only (French consumer and insurance rules). */
export const BODY_SHOP_TEMPLATE_PDF_PATH: string = '/modeles/devis-carrosserie-suivi-sinistre.pdf'

/** Excel version of the free template: quote totals, insurer and customer shares, days off the road and insurer receivables calculated. */
export const BODY_SHOP_TEMPLATE_XLSX_PATH: string = '/modeles/devis-carrosserie-suivi-sinistre.xlsx'

/** Garage rules (hourly rates posted per workshop, repair order, invoice, circular economy parts), checked on 21 February 2026. */
export const GARAGE_RULES_SOURCE: DibodevSourceReference = {
  name: 'Entreprendre.Service-Public.fr',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F39056',
}

/** Circular economy parts (Consumer Code, R224-22 to D224-25-5), in force since 1 October 2024. */
export const CIRCULAR_ECONOMY_PARTS_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000033728707/',
}

/** Order of 17 June 2016: the insurer reminds the policyholder of the free choice of repairer at the first contact after a claim. */
export const FREE_CHOICE_OF_REPAIRER_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000032753608',
}

/** Appraisal of a damaged vehicle: no legal deadline for the report, VE and VEI procedures, checked on 22 April 2026. */
export const VEHICLE_APPRAISAL_SOURCE: DibodevSourceReference = {
  name: 'Service-Public.fr',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F31268',
}

/** Courtesy car: the garage informs the customer about the insurance cover (Cass. 1re civ., 25 November 2003), INC question 15. */
export const COURTESY_CAR_SOURCE: DibodevSourceReference = {
  name: 'Institut national de la consommation',
  url: 'https://www.inc-conso.fr/content/les-garagistes-en-20-questions-reponses',
}

/** ICPE heading 2930: paint, varnish or primer application declared above 10 kg of products a day, registered above 100 kg. */
export const PAINT_BOOTH_ICPE_SOURCE: DibodevSourceReference = {
  name: 'AIDA (Ineris)',
  url: 'https://aida.ineris.fr/node/37589',
}
