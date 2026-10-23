import type { LocationQuery, LocationQueryRaw } from 'vue-router'
import type { DibodevEInvoicingVerdict } from '~/core/types/DibodevEInvoicingCheck'
import type { DibodevEInvoicingContactPrefill } from '~/core/types/DibodevEInvoicingContact'
import { E_INVOICING_CONTACT_TOPIC, E_INVOICING_VERDICTS } from '~/core/constants/eInvoicingCheck/pageShared'

const SOFTWARE_NAME_REGEX: RegExp = /^[\p{L}\p{N} .'’-]{1,60}$/u

/** Builds and reads the contact page address used by the e-invoicing checker to prefill the message. */
export class EInvoicingContactUtils {
  /**
   * Builds the query of the contact page for a visitor of the checker.
   * @param {string | null} softwareName - The tool checked, when one was matched.
   * @param {DibodevEInvoicingVerdict | null} verdict - The verdict given, when a check was run.
   * @returns {LocationQueryRaw} The query, with the topic and the check when there is one.
   */
  public static buildContactQuery(
    softwareName: string | null,
    verdict: DibodevEInvoicingVerdict | null,
  ): LocationQueryRaw {
    const query: LocationQueryRaw = { topic: E_INVOICING_CONTACT_TOPIC }

    if (softwareName) {
      query.software = softwareName
    }
    if (verdict) {
      query.verdict = verdict
    }
    return query
  }

  /**
   * Reads the e-invoicing prefill from the contact page query, ignoring anything that is not a plain name or a verdict.
   * @param {LocationQuery} query - The query of the contact page.
   * @returns {DibodevEInvoicingContactPrefill | null} The prefill, or null when the visitor does not come from the checker.
   */
  public static readPrefill(query: LocationQuery): DibodevEInvoicingContactPrefill | null {
    if (String(query.topic ?? '') !== E_INVOICING_CONTACT_TOPIC) {
      return null
    }
    const softwareName: string = String(query.software ?? '').trim()
    const verdict: string = String(query.verdict ?? '')

    return {
      softwareName: SOFTWARE_NAME_REGEX.test(softwareName) ? softwareName : null,
      verdict: E_INVOICING_VERDICTS.find((known: DibodevEInvoicingVerdict): boolean => known === verdict) ?? null,
    }
  }
}
