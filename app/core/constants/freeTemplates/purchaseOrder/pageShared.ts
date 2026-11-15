import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the template and the trade rules were last checked: move it when the files or the facts change. */
export const PURCHASE_ORDER_TEMPLATE_UPDATED_AT: string = '2026-11-16'

export const PURCHASE_ORDER_TEMPLATE_ROUTE_NAME: string = 'tools-free-templates-purchase-order'

/** Free purchase order and order follow-up sheet, in French only (French Civil, Consumer and Commercial Code rules). */
export const PURCHASE_ORDER_TEMPLATE_PDF_PATH: string = '/modeles/bon-de-commande-suivi-des-commandes.pdf'

/** Excel version: purchase order with calculated totals, order register with what is left to deliver and to pay, suppliers and customers list. */
export const PURCHASE_ORDER_TEMPLATE_XLSX_PATH: string = '/modeles/bon-de-commande-suivi-des-commandes.xlsx'

/** Word version: the same two pages as the PDF, editable. */
export const PURCHASE_ORDER_TEMPLATE_DOCX_PATH: string = '/modeles/bon-de-commande-suivi-des-commandes.docx'

/** Civil Code, art. 1583: a sale is complete between the parties once they agree on the item and the price, even before delivery and payment. */
export const SALE_AGREEMENT_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006441308',
}

/** Service-Public: a deposit (acompte) binds both parties, arrhes let each one withdraw, and sums paid in advance are arrhes when nothing is written (Consumer Code, art. L214-1; page checked 5 August 2025). */
export const CONSUMER_DEPOSIT_SOURCE: DibodevSourceReference = {
  name: 'Service-Public.fr',
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F31187',
}

/** Consumer Code, art. L216-1: delivery on the date given to the consumer, or at the latest 30 days after the contract without one. */
export const CONSUMER_DELIVERY_DATE_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044142498',
}

/** Commercial Code, art. L441-10: 30 days by default, 60 days after the invoice at most (45 days end of month if written), penalties of at least three times the legal interest rate. */
export const B2B_PAYMENT_TERMS_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038414392',
}

/** Entreprendre.Service-Public: terms of sale optional between businesses but sent on request, mandatory towards consumers, 40 € fixed recovery fee (checked 1 July 2026). */
export const TERMS_OF_SALE_SOURCE: DibodevSourceReference = {
  name: 'Entreprendre.Service-Public.fr',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F33527',
}

/** Entreprendre.Service-Public: quote before the contract, purchase order number on the invoice when the buyer issued it, order kept 5 years or 10 as an accounting record (checked 8 December 2025). */
export const COMMERCIAL_DOCUMENTS_SOURCE: DibodevSourceReference = {
  name: 'Entreprendre.Service-Public.fr',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F37371',
}
