import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the template and the labour rules were last checked: move it when the files or the facts change. */
export const TIME_CLOCK_SHEET_TEMPLATE_UPDATED_AT: string = '2026-11-16'

export const TIME_CLOCK_SHEET_TEMPLATE_ROUTE_NAME: string = 'tools-free-templates-time-clock-sheet'

/** Free weekly time clock sheet and monthly summary, in French only (French Labour Code rules). */
export const TIME_CLOCK_SHEET_TEMPLATE_PDF_PATH: string = '/modeles/fiche-de-pointage-heures-de-travail.pdf'

/** Excel version: daily hours calculated from the clock times, weekly total and overtime, monthly summary, settings. */
export const TIME_CLOCK_SHEET_TEMPLATE_XLSX_PATH: string = '/modeles/fiche-de-pointage-heures-de-travail.xlsx'

/** Word version: the same two pages as the PDF, editable. */
export const TIME_CLOCK_SHEET_TEMPLATE_DOCX_PATH: string = '/modeles/fiche-de-pointage-heures-de-travail.docx'

/** Labour Code, art. D3171-8: daily record of start and end times (or hours worked) and weekly summary, outside a shared posted schedule. */
export const WORKING_TIME_DAILY_RECORD_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000018533970',
}

/** Labour Code, art. D3171-16: documents counting each employee's hours kept for the labour inspectorate for one year. */
export const WORKING_TIME_RECORDS_RETENTION_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033515983',
}

/** Labour Code, art. L3121-36: without an agreement, +25 % for the first eight overtime hours, +50 % after. */
export const OVERTIME_RATE_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033020341',
}

/** Labour Code, art. L3121-29: overtime is counted week by week. */
export const OVERTIME_WEEKLY_COUNT_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033020370',
}

/** Labour Code, art. L3121-16: a break of at least twenty consecutive minutes once daily work reaches six hours. */
export const WORK_BREAK_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033020444',
}

/** Labour Code, art. L3121-18: ten hours of actual work per day at most, save for a waiver or an emergency. */
export const DAILY_MAXIMUM_WORK_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033020428',
}

/** Labour Code, art. L3171-4: in a dispute on hours, the employer gives the judge the evidence of the hours actually worked. */
export const WORKING_HOURS_DISPUTE_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006902808',
}

/** CNIL: time clocks allowed if proportionate, biometrics or a photo at each clock-in excessive, data kept up to 5 years. */
export const TIME_CLOCK_PRIVACY_SOURCE: DibodevSourceReference = {
  name: 'CNIL',
  url: 'https://www.cnil.fr/fr/lacces-aux-locaux-et-le-controle-des-horaires-sur-le-lieu-de-travail',
}
