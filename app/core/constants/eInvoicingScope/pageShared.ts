import { E_INVOICING_SOURCES } from '~/core/constants/eInvoicingCheck/pageShared'

/** Day the rules and their sources were last re-read: move it at each re-read. */
export const E_INVOICING_SCOPE_PAGE_UPDATED_AT: string = '2026-10-25'

export const E_INVOICING_SCOPE_ROUTE_NAME: string = 'tools-e-invoicing-scope-check'

export const E_INVOICING_SCOPE_QUIZ_ANCHOR_ID: string = 'test'

/** Articles listed under the page, by Storyblok slug. */
export const E_INVOICING_SCOPE_RELATED_ARTICLE_SLUGS: string[] = [
  'facture-electronique-artisan-ce-qui-change',
  'logiciel-facturation-garage-devis-ordre-de-reparation-facture',
  'logiciel-metier-b2b-quitter-excel-signes',
]

export const E_INVOICING_SCOPE_SOURCES = {
  servicePublicNews: E_INVOICING_SOURCES.servicePublicNews,
  officialStarterGuide: E_INVOICING_SOURCES.officialStarterGuide,
  economieGouvDirectory: E_INVOICING_SOURCES.economieGouvDirectory,
  comptaOnlineTolerance: E_INVOICING_SOURCES.comptaOnlineTolerance,
  legifiscalLandlord:
    'https://www.legifiscal.fr/patrimoine-placements/investissement-immobilier/facturation-electronique-loueur-meuble.html',
} as const
