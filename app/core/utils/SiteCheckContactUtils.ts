import type { LocationQuery, LocationQueryRaw } from 'vue-router'
import type { DibodevSiteCheckContactPrefill } from '~/core/types/DibodevSiteCheck'

const HOST_REGEX: RegExp = /^[a-z0-9.-]{1,253}$/

/** Builds and reads the contact page query through which a site check tool prefills the message. */
export class SiteCheckContactUtils {
  /**
   * Builds the contact page query of a site check tool, with the check when the visitor ran one.
   * @param {string} topic - The `topic` value that opens the contact form on the message of the tool.
   * @param {string | null} site - The host checked, when the visitor ran the check.
   * @param {string | null} verdict - The verdict given, when the visitor ran the check.
   * @returns {LocationQueryRaw} The query of the contact page.
   */
  static buildContactQuery(topic: string, site: string | null, verdict: string | null): LocationQueryRaw {
    const query: LocationQueryRaw = { topic }

    if (site) {
      query.site = site
    }
    if (verdict) {
      query.verdict = verdict
    }
    return query
  }

  /**
   * Reads the prefill of a site check tool from the contact page query, keeping only a valid host and a known verdict.
   * @param {LocationQuery} query - The query of the contact page.
   * @param {string} topic - The `topic` value of the tool.
   * @param {TVerdict[]} verdicts - Every verdict of the tool.
   * @returns {DibodevSiteCheckContactPrefill<TVerdict> | null} The prefill, or null when the visitor does not come from the tool.
   */
  static readSitePrefill<TVerdict extends string>(
    query: LocationQuery,
    topic: string,
    verdicts: TVerdict[],
  ): DibodevSiteCheckContactPrefill<TVerdict> | null {
    if (String(query.topic ?? '') !== topic) {
      return null
    }
    const site: string = String(query.site ?? '')
      .trim()
      .toLowerCase()
    const verdict: string = String(query.verdict ?? '')

    return {
      site: HOST_REGEX.test(site) ? site : null,
      verdict: verdicts.find((known: TVerdict): boolean => known === verdict) ?? null,
    }
  }
}
