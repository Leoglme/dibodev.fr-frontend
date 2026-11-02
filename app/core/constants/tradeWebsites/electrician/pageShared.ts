import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

export const ELECTRICIAN_WEBSITE_PAGE_UPDATED_AT: string = '2026-11-02'

/** Articles shown under the FAQ; the untranslated ones are left out of /en and /es automatically. */
export const ELECTRICIAN_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'site-web-artisans-attirer-clients-locaux',
  'electricien-outil-sur-mesure-devis-interventions-factures',
  'facture-electronique-artisan-ce-qui-change',
]

/** Charging points are installed by professionals qualified by an approved body, except those of 3.7 kW or less in a private home (energy code, article D353-2, in force since 1 July 2024). */
export const CHARGING_POINT_INSTALLER_QUALIFICATION_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049851527',
}
