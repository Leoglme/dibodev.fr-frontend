import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Official calendar of e-invoicing: every business receives from 1 September 2026, small businesses issue from 1 September 2027. */
export const E_INVOICING_SOURCE: DibodevSourceReference = {
  name: 'impots.gouv.fr',
  url: 'https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/guide_pratique_facturation_electronique.pdf',
}

/** Quote before any repair, maintenance or breakdown job at a private home, and invoice from 25 € incl. VAT (order of 24 January 2017). */
export const HOME_REPAIR_QUOTE_RULES_SOURCE: DibodevSourceReference = {
  name: 'Institut national de la consommation',
  url: 'https://www.inc-conso.fr/content/prestations-de-depannage-de-reparation-et-dentretien-une-meilleure-information-sur-les-prix',
}
