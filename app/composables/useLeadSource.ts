import type { LeadSource } from '~~/server/types/mail/contact'

/** localStorage key holding the first-touch acquisition source. */
const LEAD_SOURCE_STORAGE_KEY: string = 'dibodev_lead_source'

/**
 * Provides first-touch acquisition source capture and retrieval, persisted in localStorage.
 * @returns {{ captureLeadSourceOnce: () => void; getLeadSource: () => LeadSource | null }} The capture and read helpers.
 */
export function useLeadSource(): {
  captureLeadSourceOnce: () => void
  getLeadSource: () => LeadSource | null
} {
  /**
   * Captures the acquisition source on the first visit only (no-op if already stored or storage is unavailable).
   * @returns {void}
   */
  function captureLeadSourceOnce(): void {
    if (typeof window === 'undefined') {
      return
    }

    try {
      if (window.localStorage.getItem(LEAD_SOURCE_STORAGE_KEY)) {
        return
      }

      const params: URLSearchParams = new URLSearchParams(window.location.search)
      const rawReferrer: string = document.referrer
      const isExternalReferrer: boolean = rawReferrer !== '' && !rawReferrer.startsWith(window.location.origin)

      const source: LeadSource = {
        referrer: isExternalReferrer ? rawReferrer : null,
        landingPage: window.location.pathname || null,
        utmSource: params.get('utm_source'),
        utmMedium: params.get('utm_medium'),
        utmCampaign: params.get('utm_campaign'),
      }

      window.localStorage.setItem(LEAD_SOURCE_STORAGE_KEY, JSON.stringify(source))
    } catch {
      // localStorage may be unavailable (private mode, blocked cookies): ignore silently.
    }
  }

  /**
   * Reads the stored first-touch acquisition source.
   * @returns {LeadSource | null} The stored source, or null when absent or storage is unavailable.
   */
  function getLeadSource(): LeadSource | null {
    if (typeof window === 'undefined') {
      return null
    }

    try {
      const raw: string | null = window.localStorage.getItem(LEAD_SOURCE_STORAGE_KEY)
      if (!raw) {
        return null
      }
      return JSON.parse(raw) as LeadSource
    } catch {
      return null
    }
  }

  return { captureLeadSourceOnce, getLeadSource }
}
