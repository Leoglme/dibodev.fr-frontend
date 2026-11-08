import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the template and the trade rules were last checked: move it when the files or the facts change. */
export const BIKE_REPAIR_TICKET_TEMPLATE_UPDATED_AT: string = '2026-11-08'

export const BIKE_REPAIR_TICKET_TEMPLATE_ROUTE_NAME: string = 'tools-free-templates-bike-repair-ticket'

/** Bike marking: every bike, electric or not, sold by a trader carries an identifier, new ones since 1 January 2021, used ones since 1 July 2021, children's bikes with wheels up to 16 inches exempt (transport code, articles R1271-1 to R1271-5). */
export const BIKE_IDENTIFICATION_RULES_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000023086525/LEGISCTA000042563021/',
}

/** Prices of services: the list of services and the price of each, incl. VAT, on a single document readable where customers are received, a paid quote included (DGCCRF, 21 May 2026). */
export const SERVICE_PRICE_DISPLAY_SOURCE: DibodevSourceReference = {
  name: 'economie.gouv.fr (DGCCRF)',
  url: 'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/linformation-sur-les-prix',
}

/** Quote: sufficiently detailed for the consumer who asks when the price cannot be set in advance, free in principle, paid if its price is announced, binding on the business (DGCCRF, 20 January 2023). */
export const SERVICE_QUOTE_SOURCE: DibodevSourceReference = {
  name: 'economie.gouv.fr (DGCCRF)',
  url: 'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/devis',
}
