import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

export const GARAGE_WEBSITE_PAGE_UPDATED_AT: string = '2026-11-02'

/** Articles shown under the FAQ; the untranslated ones are left out of /en and /es automatically. */
export const GARAGE_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'garagiste-outil-sur-mesure-rendez-vous-devis-suivi-vehicules',
  'meilleur-logiciel-garage-automobile-comparatif-2026',
  'logiciel-facturation-garage-devis-ordre-de-reparation-facture',
]

/** Garage prices incl. VAT posted at the entrance and the reception (order of 27 March 1987), and the repair order, in the DGCCRF fact sheet. */
export const GARAGE_PRICE_DISPLAY_SOURCE: DibodevSourceReference = {
  name: 'DGCCRF',
  url: 'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques-et-les-faq/vehicule-automobile-lordre-de-reparation-decrit-la-nature',
}
