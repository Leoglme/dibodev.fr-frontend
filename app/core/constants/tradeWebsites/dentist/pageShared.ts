import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

export const DENTIST_WEBSITE_PAGE_UPDATED_AT: string = '2026-11-02'

/** Articles shown under the FAQ; no article is about dentists yet, so the list stays empty until one is written. */
export const DENTIST_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS: string[] = []

/** What a dentist may publish, website included: fair and honest information, no third-party testimonials, no comparison, no unnecessary care (public health code, article R. 4127-215-1). */
export const DENTIST_COMMUNICATION_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042743767',
}

/** Guidance of the French dental council on professional communication: no ratings, no before-and-after photos, no priority listing, paid or not (version of 19 June 2026). */
export const DENTIST_COMMUNICATION_GUIDANCE_SOURCE: DibodevSourceReference = {
  name: 'Ordre national des chirurgiens-dentistes',
  url: 'https://www.ordre-chirurgiens-dentistes.fr/download/109355/',
}

/** A dentist presenting his practice on a website shows his fees, the payment methods accepted and the rules on access to care without discrimination (public health code, article R. 4127-240). */
export const DENTIST_FEES_ON_WEBSITE_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042795939',
}

/** Standard quote before any custom-made prosthesis or once extra fees reach 70 €, with the place of manufacture and a "100 % Santé" option (order of 30 May 2018). */
export const DENTIST_QUOTE_RULES_SOURCE: DibodevSourceReference = {
  name: 'DGCCRF',
  url: 'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/dentiste-soins-dentaires-comment-choisir-son-praticien-avec-soin',
}
