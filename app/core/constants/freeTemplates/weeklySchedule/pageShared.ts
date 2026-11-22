import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the template and the labour rules were last checked: move it when the files or the facts change. */
export const WEEKLY_SCHEDULE_TEMPLATE_UPDATED_AT: string = '2026-11-22'

export const WEEKLY_SCHEDULE_TEMPLATE_ROUTE_NAME: string = 'tools-free-templates-weekly-schedule'

/** Free weekly team schedule and one-person weekly planner, in French only (French Labour Code rules). */
export const WEEKLY_SCHEDULE_TEMPLATE_PDF_PATH: string = '/modeles/planning-hebdomadaire-equipe-semainier.pdf'

/** Excel version: team schedule with daily and weekly hours and checks, weekly planner filled from it, summary. */
export const WEEKLY_SCHEDULE_TEMPLATE_XLSX_PATH: string = '/modeles/planning-hebdomadaire-equipe-semainier.xlsx'

/** Word version: the same two pages as the PDF, editable. */
export const WEEKLY_SCHEDULE_TEMPLATE_DOCX_PATH: string = '/modeles/planning-hebdomadaire-equipe-semainier.docx'

/** Labour Code, art. D3171-1 to D3171-8: collective schedule dated, signed and posted, changes posted beforehand, copy to the inspectorate, team rosters. */
export const COLLECTIVE_SCHEDULE_POSTING_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000018487068/',
}

/** Service-Public, full-time working hours: 10 hours a day, 48 hours in one week, 44 hours on average over 12 weeks. */
export const MAXIMUM_WORKING_HOURS_SOURCE: DibodevSourceReference = {
  name: 'Service-Public',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F1911',
}

/** Service-Public, daily rest: at least 11 consecutive hours between two working days, never under 9 hours with a waiver. */
export const DAILY_REST_SOURCE: DibodevSourceReference = {
  name: 'Service-Public',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F990',
}

/** Labour Code, art. L3123-31: without an agreement, a part-time schedule change is notified at least seven working days ahead. */
export const PART_TIME_CHANGE_NOTICE_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033019939',
}

/** Labour Code, art. L3123-24: an agreement may shorten the notice, never under three working days, with compensation under seven. */
export const PART_TIME_NOTICE_AGREEMENT_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000033004671/',
}

/** Service-Public, part-time work: the contract sets how each working day's hours are given in writing, and when a refusal is not misconduct. */
export const PART_TIME_WORK_SOURCE: DibodevSourceReference = {
  name: 'Service-Public',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F32428',
}
