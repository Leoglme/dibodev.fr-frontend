import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the template and the rules were last checked: move it when the files or the facts change. */
export const MEETING_AGENDA_TEMPLATE_UPDATED_AT: string = '2026-11-22'

export const MEETING_AGENDA_TEMPLATE_ROUTE_NAME: string = 'tools-free-templates-meeting-agenda'

/** Free timed meeting agenda and meeting notice, in French only. */
export const MEETING_AGENDA_TEMPLATE_PDF_PATH: string = '/modeles/ordre-du-jour-convocation-reunion.pdf'

/** Excel version: agenda with times calculated from the start time, invitee tracking, summary. */
export const MEETING_AGENDA_TEMPLATE_XLSX_PATH: string = '/modeles/ordre-du-jour-convocation-reunion.xlsx'

/** Word version: the same two pages as the PDF, editable. */
export const MEETING_AGENDA_TEMPLATE_DOCX_PATH: string = '/modeles/ordre-du-jour-convocation-reunion.docx'

/** Labour Code, art. L2315-29: the CSE agenda is set by the chair and the secretary; mandatory consultations go on it as of right. */
export const CSE_AGENDA_SETTING_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035624861',
}

/** Labour Code, art. L2315-30: the CSE agenda is sent to members, labour inspector and social security prevention officer at least three days ahead. */
export const CSE_AGENDA_NOTICE_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035624863',
}

/** Labour Code, art. L2315-22: under 50 employees, CSE members hand in a written note two working days before the meeting. */
export const SMALL_CSE_WRITTEN_REQUESTS_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035624430',
}

/** Service-Public, co-ownership meeting notice: 21 calendar days, place, date, time, one question per separate vote. */
export const CO_OWNERSHIP_MEETING_NOTICE_SOURCE: DibodevSourceReference = {
  name: 'Service-Public',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2615',
}
