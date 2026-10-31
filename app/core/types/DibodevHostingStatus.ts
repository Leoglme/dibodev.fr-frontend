/** The hosting providers watched by the status pages; the keys are the URL segments of the provider pages. */
export type DibodevHostingProviderKey =
  | 'o2switch'
  | 'ovh'
  | 'infomaniak'
  | 'ionos'
  | 'hostinger'
  | 'planethoster'
  | 'gandi'
  | 'lws'

export type DibodevHostingStatusState = 'operational' | 'degraded' | 'incident' | 'maintenance' | 'unknown'

export type DibodevHostingStatusSourceKind = 'statuspage' | 'rss' | 'atom' | 'infomaniak' | 'lws' | 'x'

export type DibodevHostingIncidentImpact = 'none' | 'minor' | 'major' | 'critical' | 'maintenance' | 'unknown'

/** One incident as the API returns it; `isResolved` is false while the provider still works on it. */
export type DibodevHostingIncident = {
  id: string
  title: string
  startedAt: string
  resolvedAt: string | null
  url: string | null
  impact: DibodevHostingIncidentImpact
  isResolved: boolean
}

/** The status of one provider as the API returns it; `isOfficial` is false when it is read from X. */
export type DibodevHostingProviderStatus = {
  provider: DibodevHostingProviderKey
  state: DibodevHostingStatusState
  checkedAt: string
  sourceKind: DibodevHostingStatusSourceKind
  sourceUrl: string
  statusPageUrl: string
  isOfficial: boolean
  isStale: boolean
  activeIncidents: DibodevHostingIncident[]
  recentIncidents: DibodevHostingIncident[]
  stateSince: string | null
  error: string | null
}

export type DibodevHostingProviderStatusSource = {
  sourceKind: DibodevHostingStatusSourceKind
  statusPageUrl: string
}

/** Every provider, from one pass of the checker. */
export type DibodevHostingStatusSnapshot = {
  checkedAt: string
  providers: Record<DibodevHostingProviderKey, DibodevHostingProviderStatus>
}
