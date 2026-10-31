export type HostingProviderKey =
  | 'o2switch'
  | 'ovh'
  | 'infomaniak'
  | 'ionos'
  | 'hostinger'
  | 'planethoster'
  | 'gandi'
  | 'lws'

export type HostingStatusState = 'operational' | 'degraded' | 'incident' | 'maintenance' | 'unknown'

export type HostingStatusSourceKind = 'statuspage' | 'rss' | 'atom' | 'infomaniak' | 'lws' | 'x'

export type HostingIncidentImpact = 'none' | 'minor' | 'major' | 'critical' | 'maintenance' | 'unknown'

export type HostingIncident = {
  id: string
  title: string
  startedAt: string
  resolvedAt: string | null
  url: string | null
  impact: HostingIncidentImpact
  isResolved: boolean
}

/** Mirrored in `app/core/types/DibodevHostingStatus.ts`: keep both in step. */
export type HostingProviderStatus = {
  provider: HostingProviderKey
  state: HostingStatusState
  checkedAt: string
  attemptedAt: string
  sourceKind: HostingStatusSourceKind
  sourceUrl: string
  statusPageUrl: string
  isOfficial: boolean
  isStale: boolean
  activeIncidents: HostingIncident[]
  recentIncidents: HostingIncident[]
  stateSince: string | null
  error: string | null
}

export type HostingStatusSnapshot = {
  checkedAt: string
  providers: Record<HostingProviderKey, HostingProviderStatus>
}

export type HostingStateChange = {
  state: HostingStatusState
  at: string
  incidentTitle: string | null
}

export type HostingStatuspageSource = {
  kind: 'statuspage'
  baseUrl: string
  includePattern: string
  excludePattern: string
  ignoreImpactNone: boolean
  excludeMaintenancePattern: string
}

export type HostingFeedSource = {
  kind: 'rss' | 'atom'
  url: string
  resolvedMarkers: string[]
  maintenanceMarkers: string[]
}

export type HostingInfomaniakSource = {
  kind: 'infomaniak'
  url: string
}

export type HostingLwsSource = {
  kind: 'lws'
  url: string
}

export type HostingXSource = {
  kind: 'x'
  screenName: string
  incidentMarkers: string[]
  resolvedMarkers: string[]
  maintenanceMarkers: string[]
}

export type HostingStatusSource =
  | HostingStatuspageSource
  | HostingFeedSource
  | HostingInfomaniakSource
  | HostingLwsSource
  | HostingXSource

export type HostingProviderConfig = {
  key: HostingProviderKey
  name: string
  statusPageUrl: string
  minIntervalMs: number
  source: HostingStatusSource
}

export type HostingSourceReadResult = {
  state: HostingStatusState
  activeIncidents: HostingIncident[]
  recentIncidents: HostingIncident[]
  sourceUrl: string
}

export type HostingStatuspageCurrentState = {
  state: HostingStatusState
  activeIncidents: HostingIncident[]
}

export type HostingFeedItem = {
  title: string
  link: string | null
  publishedAt: string | null
  body: string
}

export type StatuspageSummary = {
  incidents?: StatuspageIncident[]
  scheduled_maintenances?: StatuspageMaintenance[]
}

export type StatuspageAffectedComponent = {
  name?: string
}

export type StatuspageIncidentUpdate = {
  affected_components?: StatuspageAffectedComponent[] | null
}

export type StatuspageIncident = {
  id?: string
  name?: string
  status?: string
  impact?: string
  created_at?: string
  started_at?: string
  resolved_at?: string | null
  shortlink?: string
  incident_updates?: StatuspageIncidentUpdate[]
}

export type StatuspageMaintenance = {
  id?: string
  name?: string
  status?: string
  impact?: string
  scheduled_for?: string
  scheduled_until?: string
  shortlink?: string
}

export type StatuspageIncidentsPayload = {
  incidents?: StatuspageIncident[]
}

export type XSyndicationPagePayload = {
  props?: {
    pageProps?: {
      timeline?: {
        entries?: XSyndicationEntry[]
      }
    }
  }
}

export type XSyndicationEntry = {
  content?: {
    tweet?: XSyndicationTweet
  }
}

export type XSyndicationTweet = {
  id_str?: string
  created_at?: string
  full_text?: string
}

export type HostingStatusQuery = {
  provider?: string
}
