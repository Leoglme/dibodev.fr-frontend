import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the template and the trade rules were last checked: move it when the files or the facts change. */
export const DELIVERY_NOTE_TEMPLATE_UPDATED_AT: string = '2026-11-16'

export const DELIVERY_NOTE_TEMPLATE_ROUTE_NAME: string = 'tools-free-templates-delivery-note'

/** Free delivery note and delivery reservations sheet, in French only (French Civil, Consumer and Commercial Code rules). */
export const DELIVERY_NOTE_TEMPLATE_PDF_PATH: string = '/modeles/bon-de-livraison-reserves-a-la-livraison.pdf'

/** Excel version: delivery note with quantities left to deliver, delivery log with reservations, partial deliveries per order. */
export const DELIVERY_NOTE_TEMPLATE_XLSX_PATH: string = '/modeles/bon-de-livraison-reserves-a-la-livraison.xlsx'

/** Word version: the same two pages as the PDF, editable. */
export const DELIVERY_NOTE_TEMPLATE_DOCX_PATH: string = '/modeles/bon-de-livraison-reserves-a-la-livraison.docx'

/** Civil Code, art. 1604: delivery is the transfer of the thing sold into the power and possession of the buyer. */
export const DELIVERY_OBLIGATION_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006441557',
}

/** Consumer Code, art. L216-5: written document on taking possession stating the right to make reservations; no reservation keeps the conformity guarantee. */
export const CONSUMER_DELIVERY_RESERVATIONS_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044142476',
}

/** Consumer Code, art. L216-2: risk of loss or damage passes to the consumer when they physically take possession of the goods. */
export const CONSUMER_RISK_TRANSFER_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044142491',
}

/** Commercial Code, art. L133-3: reasoned protest to the carrier within three days, holidays excluded, by registered letter or extrajudicial act. */
export const CARRIER_PROTEST_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000021486442',
}

/** Consumer Code, art. L224-65: ten days when the consumer took delivery and the carrier cannot show it let them check the goods. */
export const CONSUMER_CARRIER_PROTEST_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032226573',
}

/** Invoice issued at delivery, or a summary invoice by the end of the month for several deliveries to the same client. */
export const INVOICE_TIMING_SOURCE: DibodevSourceReference = {
  name: 'Entreprendre.Service-Public.fr',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F23208',
}
