import type { HostingProviderConfig, HostingProviderKey } from '~~/server/types/tools/hostingStatus'

const X_MIN_READ_INTERVAL_MS: number = 15 * 60 * 1000

const X_INCIDENT_MARKERS: string[] = [
  'incident',
  'panne',
  'perturbation',
  'indisponib',
  'dégrad',
  'degrad',
  'inaccessible',
  'coupure',
  'ralentissement',
  'outage',
  'down',
]
const X_RESOLVED_MARKERS: string[] = [
  'rétabli',
  'retabli',
  'résolu',
  'resolu',
  'terminé',
  'termine',
  'retour à la normale',
  'resolved',
  'back to normal',
]
const X_MAINTENANCE_MARKERS: string[] = [
  'maintenance',
  'mise à jour',
  'mises à jour',
  'déploiement',
  'correctif',
  'patch',
]

const OVH_WEBSITE_SERVICES_PATTERN: string = 'web hosting|managed hosting|web paas|dns|databases|clouddb|ssl'
const HOSTINGER_WEBSITE_SERVICES_PATTERN: string = 'hosting|datacenter|cpanel|ssl|dns|domain|server'
const HOSTINGER_SINGLE_SERVER_MAINTENANCE_PATTERN: string = '^emergency server'
const GANDI_REGISTRY_MAINTENANCE_PATTERN: string = 'registry'

export const HOSTING_PROVIDER_KEYS: HostingProviderKey[] = [
  'o2switch',
  'ovh',
  'infomaniak',
  'ionos',
  'hostinger',
  'planethoster',
  'gandi',
  'lws',
]

export const HOSTING_PROVIDERS: Record<HostingProviderKey, HostingProviderConfig> = {
  o2switch: {
    key: 'o2switch',
    name: 'o2switch',
    statusPageUrl: 'https://x.com/o2switch',
    minIntervalMs: X_MIN_READ_INTERVAL_MS,
    source: {
      kind: 'x',
      screenName: 'o2switch',
      incidentMarkers: X_INCIDENT_MARKERS,
      resolvedMarkers: X_RESOLVED_MARKERS,
      maintenanceMarkers: X_MAINTENANCE_MARKERS,
    },
  },
  ovh: {
    key: 'ovh',
    name: 'OVHcloud',
    statusPageUrl: 'https://web-cloud.status-ovhcloud.com/',
    minIntervalMs: 0,
    source: {
      kind: 'statuspage',
      baseUrl: 'https://web-cloud.status-ovhcloud.com',
      includePattern: OVH_WEBSITE_SERVICES_PATTERN,
      excludePattern: '',
      ignoreImpactNone: false,
      excludeMaintenancePattern: '',
    },
  },
  infomaniak: {
    key: 'infomaniak',
    name: 'Infomaniak',
    statusPageUrl: 'https://infomaniakstatus.com/fr/',
    minIntervalMs: 0,
    source: { kind: 'infomaniak', url: 'https://infomaniakstatus.com/fr/' },
  },
  ionos: {
    key: 'ionos',
    name: 'IONOS',
    statusPageUrl: 'https://www.ionos-status.fr/',
    minIntervalMs: 0,
    source: {
      kind: 'statuspage',
      baseUrl: 'https://www.ionos-status.fr',
      includePattern: '',
      excludePattern: '',
      ignoreImpactNone: false,
      excludeMaintenancePattern: '',
    },
  },
  hostinger: {
    key: 'hostinger',
    name: 'Hostinger',
    statusPageUrl: 'https://statuspage.hostinger.com/',
    minIntervalMs: 0,
    source: {
      kind: 'statuspage',
      baseUrl: 'https://statuspage.hostinger.com',
      includePattern: HOSTINGER_WEBSITE_SERVICES_PATTERN,
      excludePattern: HOSTINGER_SINGLE_SERVER_MAINTENANCE_PATTERN,
      ignoreImpactNone: true,
      excludeMaintenancePattern: HOSTINGER_SINGLE_SERVER_MAINTENANCE_PATTERN,
    },
  },
  planethoster: {
    key: 'planethoster',
    name: 'PlanetHoster',
    statusPageUrl: 'https://x.com/planethoster',
    minIntervalMs: X_MIN_READ_INTERVAL_MS,
    source: {
      kind: 'x',
      screenName: 'planethoster',
      incidentMarkers: X_INCIDENT_MARKERS,
      resolvedMarkers: X_RESOLVED_MARKERS,
      maintenanceMarkers: X_MAINTENANCE_MARKERS,
    },
  },
  gandi: {
    key: 'gandi',
    name: 'Gandi',
    statusPageUrl: 'https://status.gandi.net/',
    minIntervalMs: 0,
    source: {
      kind: 'statuspage',
      baseUrl: 'https://status.gandi.net',
      includePattern: '',
      excludePattern: '',
      ignoreImpactNone: false,
      excludeMaintenancePattern: GANDI_REGISTRY_MAINTENANCE_PATTERN,
    },
  },
  lws: {
    key: 'lws',
    name: 'LWS',
    statusPageUrl: 'https://aide.lws.fr/service-status',
    minIntervalMs: 0,
    source: { kind: 'lws', url: 'https://aide.lws.fr/service-status' },
  },
}
