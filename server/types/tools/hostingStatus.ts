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

export type HostingStatusSourceKind = 'statuspage' | 'infomaniak' | 'lws' | 'none'

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

export type HostingInfomaniakSource = {
  kind: 'infomaniak'
  url: string
}

export type HostingLwsSource = {
  kind: 'lws'
  url: string
}

export type HostingNoStatusPageSource = {
  kind: 'none'
}

export type HostingStatusSource =
  | HostingStatuspageSource
  | HostingInfomaniakSource
  | HostingLwsSource
  | HostingNoStatusPageSource

export type HostingProviderConfig = {
  key: HostingProviderKey
  name: string
  statusPageUrl: string
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

export type StatuspageSummary = {
  status?: StatuspageGlobalStatus
  incidents?: StatuspageIncident[]
  scheduled_maintenances?: StatuspageMaintenance[]
}

/** Overall indicator the provider sets on its whole page (`none`, `minor`, `major`, `critical`, `maintenance`). */
export type StatuspageGlobalStatus = {
  indicator?: string
  description?: string
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

export type HostingStatusQuery = {
  provider?: string
}
