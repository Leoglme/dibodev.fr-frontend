import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the template and the rules were last checked: move it when the files or the facts change. */
export const ATTENDANCE_LIST_TEMPLATE_UPDATED_AT: string = '2026-11-16'

export const ATTENDANCE_LIST_TEMPLATE_ROUTE_NAME: string = 'tools-free-templates-attendance-list'

/** Free meeting attendance sheet and monthly attendance list, in French only. */
export const ATTENDANCE_LIST_TEMPLATE_PDF_PATH: string = '/modeles/feuille-de-presence-liste-de-presence.pdf'

/** Excel version: monthly list with totals per code, meeting sheet with proxies and quorum, summary. */
export const ATTENDANCE_LIST_TEMPLATE_XLSX_PATH: string = '/modeles/feuille-de-presence-liste-de-presence.xlsx'

/** Word version: the same two pages as the PDF, editable. */
export const ATTENDANCE_LIST_TEMPLATE_DOCX_PATH: string = '/modeles/feuille-de-presence-liste-de-presence.docx'

/** Commercial Code, art. L225-114: an attendance sheet at every shareholders' meeting of an SA, proxies attached, or the resolutions may be annulled. */
export const SHAREHOLDERS_MEETING_ATTENDANCE_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000025576545',
}

/** Commercial Code, art. R225-95: what the SA attendance sheet states, signed by those present and proxies, certified by the meeting's officers. */
export const SHAREHOLDERS_ATTENDANCE_CONTENT_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000036665438',
}

/** Service-Public, SARL decisions: the minutes name the partners present or represented with their number of shares. */
export const SARL_DECISIONS_SOURCE: DibodevSourceReference = {
  name: 'Service-Public Entreprendre',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F36714',
}

/** Service-Public, co-ownership general meeting: attendance sheet mandatory, signed, certified by the chair, attached to the minutes. */
export const CO_OWNERSHIP_MEETING_SOURCE: DibodevSourceReference = {
  name: 'Service-Public',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2619',
}

/** Service-Public, governing bodies of an association: the statutes set the general meeting's composition, vote and quorum. */
export const ASSOCIATION_BODIES_SOURCE: DibodevSourceReference = {
  name: 'Service-Public',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F1121',
}

/** CNIL: purpose, strictly necessary data, limited retention, security of the file. */
export const DATA_PROTECTION_PRINCIPLES_SOURCE: DibodevSourceReference = {
  name: 'CNIL',
  url: 'https://www.cnil.fr/fr/cnil-direct/question/quels-sont-les-grands-principes-des-regles-de-protection-des-donnees',
}

/** CNIL: the employer may not hold medical information on staff, except a work accident or occupational disease. */
export const EMPLOYEE_HEALTH_DATA_SOURCE: DibodevSourceReference = {
  name: 'CNIL',
  url: 'https://www.cnil.fr/fr/cnil-direct/question/donnees-sur-la-sante-un-employeur-peut-il-les-connaitre',
}

/** Labour Code, art. D3171-8: without a common posted schedule, daily start and end times (or hours) and a weekly total per employee. */
export const WORKING_HOURS_COUNT_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000018533970',
}
