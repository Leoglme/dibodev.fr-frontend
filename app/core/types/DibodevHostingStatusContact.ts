import type { DibodevHostingProviderKey, DibodevHostingStatusState } from '~/core/types/DibodevHostingStatus'

/** What the contact form reads from `?topic=site-down`: the provider and the state its page showed, when known. */
export type DibodevHostingStatusContactPrefill = {
  provider: DibodevHostingProviderKey | null
  providerName: string | null
  state: DibodevHostingStatusState | null
}
