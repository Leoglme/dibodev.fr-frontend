import type {
  DibodevEInvoicingDataset,
  DibodevEInvoicingSoftwareStatus,
  DibodevEInvoicingVerdict,
} from '~/core/types/DibodevEInvoicingCheck'
import rawDataset from '~~/content/data/e-invoicing-software-2026.json'

/** The official DGFiP list of 13 October 2026 and the publishers' pages read on 23 October 2026 (see `content/data/e-invoicing-software-2026.json`). */
export const E_INVOICING_DATASET: DibodevEInvoicingDataset = rawDataset as unknown as DibodevEInvoicingDataset

/** Day the facts, the official list and the publishers' pages were last re-read: move it at each re-read. */
export const E_INVOICING_CHECK_PAGE_UPDATED_AT: string = '2026-10-23'

export const E_INVOICING_CHECK_ROUTE_NAME: string = 'tools-e-invoicing-software-check'

export const E_INVOICING_CHECKER_ANCHOR_ID: string = 'verification'

/** `?topic=` value of the contact page for a visitor of the checker. */
export const E_INVOICING_CONTACT_TOPIC: string = 'e-invoicing'

export const E_INVOICING_VERDICTS: DibodevEInvoicingVerdict[] = [
  'accredited',
  'pending',
  'connected',
  'compatibleUnnamed',
  'announced',
  'none',
  'publicSector',
  'ppf',
  'unknown',
]

export const E_INVOICING_SOFTWARE_STATUSES: DibodevEInvoicingSoftwareStatus[] = [
  'accredited',
  'connected',
  'compatibleUnnamed',
  'announced',
  'none',
  'publicSector',
  'ppf',
]

/** Tools shown in the status table, in display order: the ones small businesses ask about first. */
export const E_INVOICING_TABLE_SOFTWARE_IDS: string[] = [
  'pennylane',
  'qonto',
  'tiime',
  'abby',
  'indy',
  'shine',
  'sellsy',
  'axonaut',
  'sage',
  'cegid',
  'ebp',
  'evoliz',
  'henrri',
  'facture-net',
  'vosfactures',
  'dougs',
  'macompta',
  'odoo',
  'zervant',
  'tolteck',
  'obat',
  'batappli',
  'organilog',
  'kwixeo',
]

/** Tools that get a guide tile: compatible solutions first (the visitor has something to check), then the accredited ones. */
export const E_INVOICING_GUIDE_SOFTWARE_IDS: string[] = [
  'ebp',
  'evoliz',
  'henrri',
  'tolteck',
  'obat',
  'batappli',
  'organilog',
  'kwixeo',
  'facture-net',
  'zervant',
  'pennylane',
  'qonto',
  'tiime',
  'abby',
  'indy',
  'sellsy',
  'axonaut',
  'odoo',
]

/** Articles listed under the page, by Storyblok slug. */
export const E_INVOICING_CHECK_RELATED_ARTICLE_SLUGS: string[] = [
  'facture-electronique-artisan-ce-qui-change',
  'logiciel-facturation-garage-devis-ordre-de-reparation-facture',
  'logiciel-metier-b2b-quitter-excel-signes',
]

export const E_INVOICING_SOURCES = {
  officialList: E_INVOICING_DATASET.officialList.url,
  officialBusinessPage: 'https://www.impots.gouv.fr/professionnel/je-passe-la-facturation-electronique',
  officialStarterGuide:
    'https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/guide_pratique_facturation_electronique.pdf',
  officialLabels:
    'https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/fe_presentation-des-labels.pdf',
  servicePublicNews: 'https://entreprendre.service-public.gouv.fr/actualites/A18953',
  economieGouvDirectory:
    'https://www.economie.gouv.fr/entreprises/gerer-son-entreprise-au-quotidien/gerer-sa-comptabilite-et-ses-demarches/quest-ce-que-lannuaire-de-la-facturation-electronique',
  comptaOnlineTolerance: 'https://www.compta-online.com/facturation-electronique-ao5562',
} as const
