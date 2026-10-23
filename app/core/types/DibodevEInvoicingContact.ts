import type { DibodevEInvoicingVerdict } from '~/core/types/DibodevEInvoicingCheck'

/**
 * What the e-invoicing checker carries to the contact page, so the message arrives already written.
 * @type {DibodevEInvoicingContactPrefill}
 * @property {string | null} softwareName - The tool checked, when one was matched.
 * @property {DibodevEInvoicingVerdict | null} verdict - The verdict given, when a check was run.
 */
export type DibodevEInvoicingContactPrefill = {
  softwareName: string | null
  verdict: DibodevEInvoicingVerdict | null
}
