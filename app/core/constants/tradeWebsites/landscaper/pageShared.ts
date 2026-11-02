import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

export const LANDSCAPER_WEBSITE_PAGE_UPDATED_AT: string = '2026-11-02'

/** Articles shown under the FAQ; the untranslated ones are left out of /en and /es automatically. */
export const LANDSCAPER_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'site-web-artisans-attirer-clients-locaux',
  'paysagiste-outil-metier-devis-chantiers-plannings',
  'alternative-extrabat-logiciel-paysagiste',
]

/** Home services, small gardening jobs included: services and their mode listed on the website, prices excl. and incl. VAT with their extra fees, tax advantage apart from the price, free quote from 100 € incl. VAT a month (order of 17 March 2015, articles 2 to 7). */
export const HOME_SERVICES_PRICE_INFORMATION_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000030395494',
}
