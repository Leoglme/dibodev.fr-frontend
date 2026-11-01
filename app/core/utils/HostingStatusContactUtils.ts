import type { LocationQuery, LocationQueryRaw } from 'vue-router'
import type { DibodevHostingProviderKey, DibodevHostingStatusState } from '~/core/types/DibodevHostingStatus'
import type { DibodevHostingStatusContactPrefill } from '~/core/types/DibodevHostingStatusContact'
import {
  HOSTING_PROVIDER_KEYS,
  HOSTING_PROVIDER_NAMES,
  HOSTING_STATUS_CONTACT_TOPIC,
} from '~/core/constants/hostingStatus/pageShared'

const HOSTING_STATUS_STATES: DibodevHostingStatusState[] = [
  'operational',
  'degraded',
  'incident',
  'maintenance',
  'unknown',
]

/** Builds and reads the contact page query through which the hosting status pages prefill the message. */
export class HostingStatusContactUtils {
  /**
   * Builds the contact page query of the hosting status pages, with the provider and the state shown when known.
   * @param {DibodevHostingProviderKey | null} provider - The provider of the page, null on the hub.
   * @param {DibodevHostingStatusState | null} state - The state shown on the card, null before it is read.
   * @returns {LocationQueryRaw} The query of the contact page.
   */
  static buildContactQuery(
    provider: DibodevHostingProviderKey | null,
    state: DibodevHostingStatusState | null,
  ): LocationQueryRaw {
    const query: LocationQueryRaw = { topic: HOSTING_STATUS_CONTACT_TOPIC }

    if (provider) {
      query.provider = provider
    }
    if (state) {
      query.state = state
    }
    return query
  }

  /**
   * Reads the prefill of the hosting status pages from the contact page query, keeping only a known provider and state.
   * @param {LocationQuery} query - The query of the contact page.
   * @returns {DibodevHostingStatusContactPrefill | null} The prefill, or null when the visitor does not come from these pages.
   */
  static readPrefill(query: LocationQuery): DibodevHostingStatusContactPrefill | null {
    if (String(query.topic ?? '') !== HOSTING_STATUS_CONTACT_TOPIC) {
      return null
    }
    const providerValue: string = String(query.provider ?? '').toLowerCase()
    const stateValue: string = String(query.state ?? '').toLowerCase()
    const provider: DibodevHostingProviderKey | null =
      HOSTING_PROVIDER_KEYS.find((key: DibodevHostingProviderKey): boolean => key === providerValue) ?? null
    const state: DibodevHostingStatusState | null =
      HOSTING_STATUS_STATES.find((known: DibodevHostingStatusState): boolean => known === stateValue) ?? null

    return {
      provider,
      providerName: provider ? HOSTING_PROVIDER_NAMES[provider] : null,
      state,
    }
  }
}
