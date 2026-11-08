import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

/** Day the template and the trade rules were last checked: move it when the files or the facts change. */
export const BOILER_SERVICE_CERTIFICATE_TEMPLATE_UPDATED_AT: string = '2026-11-08'

export const BOILER_SERVICE_CERTIFICATE_TEMPLATE_ROUTE_NAME: string = 'tools-free-templates-boiler-service-certificate'

/** Free boiler service certificate, visit log and reminder list, in French only (French order of 15 September 2009). */
export const BOILER_SERVICE_CERTIFICATE_TEMPLATE_PDF_PATH: string = '/modeles/attestation-entretien-chaudiere.pdf'
export const BOILER_SERVICE_CERTIFICATE_TEMPLATE_XLSX_PATH: string = '/modeles/attestation-entretien-chaudiere.xlsx'

/** Environment code, articles R. 224-41-4 to R. 224-41-9 (decree of 9 June 2009): 4-400 kW boilers, one service per calendar year, certificate within 15 days kept at least 2 years. */
export const BOILER_MAINTENANCE_DECREE_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074220/LEGISCTA000020726540/',
}

/** Order of 15 September 2009: service operations, carbon monoxide reading, efficiency, emissions, energy class, advice and content of the certificate (annex 5). */
export const BOILER_MAINTENANCE_ORDER_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000021217854',
}
