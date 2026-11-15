import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the template and the expense rules were last checked: move it when the files or the facts change. */
export const EXPENSE_REPORT_TEMPLATE_UPDATED_AT: string = '2026-11-16'

export const EXPENSE_REPORT_TEMPLATE_ROUTE_NAME: string = 'tools-free-templates-expense-report'

/** Free monthly expense report and personal vehicle mileage log, in French only (French Urssaf and VAT rules). */
export const EXPENSE_REPORT_TEMPLATE_PDF_PATH: string = '/modeles/note-de-frais-indemnites-kilometriques.pdf'

/** Excel version: expense report with sub-totals by type, mileage log with a user-typed rate per km, yearly summary by month. */
export const EXPENSE_REPORT_TEMPLATE_XLSX_PATH: string = '/modeles/note-de-frais-indemnites-kilometriques.xlsx'

/** Word version: the same two pages as the PDF, editable. */
export const EXPENSE_REPORT_TEMPLATE_DOCX_PATH: string = '/modeles/note-de-frais-indemnites-kilometriques.docx'

/** Urssaf: expenses refunded on receipts or by flat allowances, limits revised every year, company officers refunded at actual cost, mileage proofs. */
export const PROFESSIONAL_EXPENSES_SOURCE: DibodevSourceReference = {
  name: 'Urssaf',
  url: 'https://www.urssaf.fr/accueil/employeur/beneficier-exonerations/frais-professionnels.html',
}

/** Urssaf: the tax mileage scale of the year, by vehicle type and tax horsepower, with its own table for electric vehicles. */
export const MILEAGE_ALLOWANCE_SCALE_SOURCE: DibodevSourceReference = {
  name: 'Urssaf',
  url: 'https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/indemnites-kilometriques.html',
}

/** Entreprendre.Service-Public: only an invoice justifies the deduction; lodging of the manager and passenger transport (taxis, ride-hailing) excluded. */
export const BUSINESS_PURCHASES_VAT_SOURCE: DibodevSourceReference = {
  name: 'Entreprendre.Service-Public.fr',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F23569',
}
