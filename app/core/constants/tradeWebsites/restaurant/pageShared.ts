import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

export const RESTAURANT_WEBSITE_PAGE_UPDATED_AT: string = '2026-11-02'

/** Articles shown under the FAQ; the untranslated ones are left out of /en and /es automatically. */
export const RESTAURANT_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'optimiser-site-web-restaurant-reservations-directes',
  'site-web-commerce-proximite-2026',
]

/** Restaurant prices: menus and five wines posted outside during service, taxes and service included, never through a QR code alone (order of 27 March 1987). */
export const RESTAURANT_PRICE_DISPLAY_SOURCE: DibodevSourceReference = {
  name: 'DGCCRF',
  url: 'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/restaurants-droits-et-obligations-des-professionnels',
}

/** Allergens where meals are eaten on site: the 14 allergens of EU regulation 1169/2011, given in writing (consumer code, article R. 412-14). */
export const RESTAURANT_ALLERGENS_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032807854',
}

/** Origin of the beef, pork, sheep and poultry meat served in restaurants (decree of 17 December 2002, as amended on 13 February 2025). */
export const RESTAURANT_MEAT_ORIGIN_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000411003',
}

/** "Fait maison" dishes: cooked on site from raw products, marked dish by dish on the menu and online (consumer code, articles D. 122-1 to D. 122-3). */
export const HOMEMADE_DISH_MENTION_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000033176080',
}
