import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the publishers' prices and the rules were read: check them twice a year and move this date. */
export const TRAINING_CENTER_PAGE_UPDATED_AT: string = '2026-11-01'

/** Driving School: lesson planning and hours left per student, the same core as a tutoring or training centre. */
export const TRAINING_CENTER_PAGE_PROJECT_SLUG: string = 'driving-school'

/** The planning screen only: the students screen of the project shows real email addresses. */
export const TRAINING_CENTER_PAGE_SCREENSHOT_URL: string =
  'https://a.storyblok.com/f/290162729601023/1919x1078/c4ee5bd6df/capture-d-ecran-2026-03-31-002135.png'

/** Articles linked at the bottom of the page; the untranslated ones are left out of /en and /es automatically. */
export const TRAINING_CENTER_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'logiciel-gestion-auto-ecole-planning-eleves-heures',
  'application-metier-sur-mesure-guide-tpe-pme',
  'logiciel-metier-saas-etagere-ou-sur-mesure',
  'developpement-logiciel-b2b-sur-mesure-prix',
  'facture-electronique-artisan-ce-qui-change',
]

export const TRAINING_CENTER_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS: number = 2

/** Free half-day attendance sheet and weekly class register, in French only (French funders' practice). */
export const TRAINING_CENTER_TEMPLATE_PDF_PATH: string = '/modeles/feuille-emargement-suivi-heures-formation.pdf'

/** Excel version of the free template: class schedule, hours left per student and hours per trainee calculated. */
export const TRAINING_CENTER_TEMPLATE_XLSX_PATH: string = '/modeles/feuille-emargement-suivi-heures-formation.xlsx'

/** Activity declaration within 3 months of the first agreement, its number on every document, a yearly BPF to keep it. */
export const TRAINING_ACTIVITY_DECLARATION_SOURCE: DibodevSourceReference = {
  name: 'Entreprendre.Service-Public.fr',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F19087',
}

/** Decree 2026-728 of 1 August 2026: national quality framework of 7 criteria and 33 indicators from 1 November 2026. */
export const QUALITY_FRAMEWORK_DECREE_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054608509',
}

/** Self-funded trainee: contract before any payment, 10-day withdrawal, then 30 % at most (Labour Code, L6353-3 to L6353-6). */
export const SELF_FUNDED_TRAINING_CONTRACT_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000006189927',
}

/** Immediate tax credit advance: personal services declaration, obligations met and software compatible with the Urssaf API. */
export const IMMEDIATE_ADVANCE_PROVIDER_SOURCE: DibodevSourceReference = {
  name: 'Sénat',
  url: 'https://www.senat.fr/questions/base/2024/qSEQ241001248.html',
}

/** VAT-exempt operations (CGI, art. 261 to 261 E) are not concerned by e-invoicing issuance; receiving still applies. */
export const VAT_EXEMPT_E_INVOICING_SOURCE: DibodevSourceReference = {
  name: 'impots.gouv.fr',
  url: 'https://www.impots.gouv.fr/professionnel/questions/je-nemets-pas-de-facture-ou-je-facture-sans-tva-suis-je-concerne-par-la',
}
