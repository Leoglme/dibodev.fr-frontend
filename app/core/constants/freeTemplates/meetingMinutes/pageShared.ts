import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the template and the rules were last checked: move it when the files or the facts change. */
export const MEETING_MINUTES_TEMPLATE_UPDATED_AT: string = '2026-11-22'

export const MEETING_MINUTES_TEMPLATE_ROUTE_NAME: string = 'tools-free-templates-meeting-minutes'

/** Free meeting minutes, decision log and action plan, in French only. */
export const MEETING_MINUTES_TEMPLATE_PDF_PATH: string = '/modeles/compte-rendu-de-reunion-releve-de-decisions.pdf'

/** Excel version: minutes with participant counts, action follow-up with delays calculated, summary. */
export const MEETING_MINUTES_TEMPLATE_XLSX_PATH: string = '/modeles/compte-rendu-de-reunion-releve-de-decisions.xlsx'

/** Word version: the same two pages as the PDF, editable. */
export const MEETING_MINUTES_TEMPLATE_DOCX_PATH: string = '/modeles/compte-rendu-de-reunion-releve-de-decisions.docx'

/** Service-Public, SARL decisions: minutes after every partners' meeting and written consultation, signed by the manager, filed in the minutes register. */
export const SARL_MINUTES_OBLIGATION_SOURCE: DibodevSourceReference = {
  name: 'Service-Public Entreprendre',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F36714',
}

/** Commercial Code, art. R223-24: what the SARL minutes state, signed by the managers and the chair of the meeting. */
export const SARL_MINUTES_CONTENT_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000020316738',
}

/** Commercial Code, art. R221-3: special register numbered and initialled by a judge or the mayor, loose numbered sheets, or electronic form. */
export const COMPANY_MINUTES_REGISTER_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039412365',
}

/** Labour Code, art. L2315-34: CSE deliberations recorded in minutes by the secretary, reasoned answer of the employer at the next meeting. */
export const CSE_MINUTES_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036262447',
}

/** Labour Code, art. D2315-26: without an agreement, CSE minutes sent within 15 days, with at least a summary and the employer's reasoned decision. */
export const CSE_MINUTES_DEADLINE_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036433681',
}

/** Service-Public, co-owners' general meeting minutes: content, signatures within 8 days, notice within 1 month, 2 months to challenge. */
export const CO_OWNERSHIP_MINUTES_SOURCE: DibodevSourceReference = {
  name: 'Service-Public',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2636',
}

/** Decree of 17 March 1967, art. 17: minutes of each co-owners' meeting, vote under each question, opponents named, register. */
export const CO_OWNERSHIP_MINUTES_DECREE_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000042078689',
}

/** Service-Public, governing bodies of an association: the statutes freely set how the general meeting and the board work. */
export const ASSOCIATION_STATUTES_SOURCE: DibodevSourceReference = {
  name: 'Service-Public',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F1121',
}

/** Service-Public, association after a general meeting: no filing in principle, but some changes are declared within 3 months. */
export const ASSOCIATION_POST_MEETING_DECLARATION_SOURCE: DibodevSourceReference = {
  name: 'Service-Public',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F34728',
}
