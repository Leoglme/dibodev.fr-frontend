import type { HostingProviderConfig, HostingProviderKey } from '~~/server/types/tools/hostingStatus'

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

/** Where each provider publishes its status; o2switch and PlanetHoster have no readable status page, so their link leads to their announcements on X. */
export const HOSTING_PROVIDERS: Record<HostingProviderKey, HostingProviderConfig> = {
  o2switch: {
    key: 'o2switch',
    name: 'o2switch',
    statusPageUrl: 'https://x.com/o2switch',
    source: { kind: 'none' },
  },
  ovh: {
    key: 'ovh',
    name: 'OVHcloud',
    statusPageUrl: 'https://web-cloud.status-ovhcloud.com/',
    source: {
      kind: 'statuspage',
      baseUrl: 'https://web-cloud.status-ovhcloud.com',
      includePattern: OVH_WEBSITE_SERVICES_PATTERN,
      excludePattern: '',
      ignoreImpactNone: true,
      excludeMaintenancePattern: '',
    },
  },
  infomaniak: {
    key: 'infomaniak',
    name: 'Infomaniak',
    statusPageUrl: 'https://infomaniakstatus.com/fr/',
    source: { kind: 'infomaniak', url: 'https://infomaniakstatus.com/fr/' },
  },
  ionos: {
    key: 'ionos',
    name: 'IONOS',
    statusPageUrl: 'https://www.ionos-status.fr/',
    source: {
      kind: 'statuspage',
      baseUrl: 'https://www.ionos-status.fr',
      includePattern: '',
      excludePattern: '',
      ignoreImpactNone: true,
      excludeMaintenancePattern: '',
    },
  },
  hostinger: {
    key: 'hostinger',
    name: 'Hostinger',
    statusPageUrl: 'https://statuspage.hostinger.com/',
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
    source: { kind: 'none' },
  },
  gandi: {
    key: 'gandi',
    name: 'Gandi',
    statusPageUrl: 'https://status.gandi.net/',
    source: {
      kind: 'statuspage',
      baseUrl: 'https://status.gandi.net',
      includePattern: '',
      excludePattern: '',
      ignoreImpactNone: true,
      excludeMaintenancePattern: GANDI_REGISTRY_MAINTENANCE_PATTERN,
    },
  },
  lws: {
    key: 'lws',
    name: 'LWS',
    statusPageUrl: 'https://aide.lws.fr/service-status',
    source: { kind: 'lws', url: 'https://aide.lws.fr/service-status' },
  },
}
