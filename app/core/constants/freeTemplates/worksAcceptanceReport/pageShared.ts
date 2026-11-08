import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the template and the trade rules were last checked: move it when the files or the facts change. */
export const WORKS_ACCEPTANCE_REPORT_TEMPLATE_UPDATED_AT: string = '2026-11-08'

export const WORKS_ACCEPTANCE_REPORT_TEMPLATE_ROUTE_NAME: string = 'tools-free-templates-works-acceptance-report'

/** Free works acceptance report and reservation clearance report, in French only (French Civil Code rules). */
export const WORKS_ACCEPTANCE_REPORT_TEMPLATE_PDF_PATH: string = '/modeles/pv-reception-travaux-levee-reserves.pdf'

/** Excel version: report and reservations, clearance follow-up with statuses, warranty calendar from the acceptance date. */
export const WORKS_ACCEPTANCE_REPORT_TEMPLATE_XLSX_PATH: string = '/modeles/pv-reception-travaux-levee-reserves.xlsx'

/** Civil Code, art. 1792-6: acceptance with or without reservations, one-year completion warranty, repair deadlines agreed together. */
export const WORKS_ACCEPTANCE_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006443552',
}

/** Civil Code, art. 1792-3: good-working warranty of at least two years on the other equipment items, from acceptance. */
export const GOOD_WORKING_WARRANTY_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006443534',
}

/** Civil Code, art. 1792-4-1: builders are released from their ten-year liability ten years after the acceptance of the works. */
export const TEN_YEAR_LIABILITY_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000019017055',
}

/** Law of 16 July 1971: retention of at most 5% of payments, released one year after acceptance unless a reasoned objection is sent. */
export const RETENTION_MONEY_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006068417',
}
