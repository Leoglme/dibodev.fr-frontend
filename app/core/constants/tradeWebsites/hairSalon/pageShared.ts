import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

export const HAIR_SALON_WEBSITE_PAGE_UPDATED_AT: string = '2026-11-02'

/** Articles shown under the FAQ; the untranslated ones are left out of /en and /es automatically. */
export const HAIR_SALON_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'site-web-commerce-proximite-2026',
  'site-web-artisans-attirer-clients-locaux',
]

/** Prices of a hair salon: at least 10 prices incl. VAT in the window (20 in a mixed salon), the same list where customers pay and the full price card at the till (order of 27 March 1987, articles 1 and 2). */
export const HAIR_SALON_PRICE_DISPLAY_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000495194',
}

/** Bill of any service from 25 € incl. VAT, given before payment, made in two copies, the copy kept two years (order no. 83-50/A of 3 October 1983, articles 1, 3 and 4). */
export const HAIR_SALON_BILL_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000494187',
}

/** Hairdressing in a salon: brevet professionnel, brevet de maîtrise or an equal or higher diploma, or work under the effective and permanent control of a holder (crafts code, articles L121-1 and R121-2, since 1 July 2023). */
export const HAIR_SALON_QUALIFICATION_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047724796',
}
