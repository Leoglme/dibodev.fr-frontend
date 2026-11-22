import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the template and the rules were last checked: move it when the files or the facts change. */
export const PAYMENT_RECEIPT_TEMPLATE_UPDATED_AT: string = '2026-11-22'

export const PAYMENT_RECEIPT_TEMPLATE_ROUTE_NAME: string = 'tools-free-templates-payment-receipt'

/** Free receipt book (three receipts with stubs) and detailed deposit receipt, in French only. */
export const PAYMENT_RECEIPT_TEMPLATE_PDF_PATH: string = '/modeles/recu-de-paiement-recu-acompte.pdf'

/** Excel version: numbered receipt register with what is left to pay, printable receipt, summary by month and payment method. */
export const PAYMENT_RECEIPT_TEMPLATE_XLSX_PATH: string = '/modeles/recu-de-paiement-recu-acompte.xlsx'

/** Word version: the same two pages as the PDF, editable. */
export const PAYMENT_RECEIPT_TEMPLATE_DOCX_PATH: string = '/modeles/recu-de-paiement-recu-acompte.docx'

/** Civil Code, art. 1342-8: payment may be proved by any means. */
export const PAYMENT_PROOF_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032035251',
}

/** Order 83-50/A of 3 October 1983, art. 1, 3 and 4: a note for any service from 25 € incl. VAT, before payment, its contents, two copies, the provider's kept two years. */
export const SERVICE_NOTE_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000494187/',
}

/** Entreprendre.Service-Public, invoicing: an invoice for every sale or service between businesses, a note or invoice for consumers only in listed cases (checked 7 August 2026). */
export const INVOICING_OBLIGATION_SOURCE: DibodevSourceReference = {
  name: 'Entreprendre.Service-Public.fr',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F23208',
}

/** Service-Public, cash payment: 1,000 € ceiling to a business or between businesses, higher abroad, fine up to 5 % shared by both sides (checked 26 June 2026). */
export const CASH_PAYMENT_CEILING_SOURCE: DibodevSourceReference = {
  name: 'Service-Public.fr',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F10999',
}
