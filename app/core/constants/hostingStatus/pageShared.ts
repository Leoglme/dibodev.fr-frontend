import type {
  DibodevHostingProviderKey,
  DibodevHostingProviderStatusSource,
  DibodevHostingStatusState,
} from '~/core/types/DibodevHostingStatus'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { NBSP } from '~/core/constants/typography'

/** Day the provider facts (support channels, status pages, help pages) were read: move it when they change. */
export const HOSTING_STATUS_PAGE_UPDATED_AT: string = '2026-11-01'

export const HOSTING_STATUS_API_PATH: string = '/api/tools/hosting-status'

export const HOSTING_STATUS_HUB_ROUTE_NAME: string = 'tools-web-host-status'

export const HOSTING_STATUS_PROVIDER_ROUTE_NAME: string = 'tools-web-host-status-provider'

export const HOSTING_STATUS_BOARD_ANCHOR_ID: string = 'etat'

export const HOSTING_STATUS_CARD_ANCHOR_ID: string = 'etat'

/** `?topic=site-down` opens the contact form on the message of a site down, with the provider when known. */
export const HOSTING_STATUS_CONTACT_TOPIC: string = 'site-down'

/** Display order of the providers on the hub when every state is equal: the most used by French small businesses first. */
export const HOSTING_PROVIDER_KEYS: DibodevHostingProviderKey[] = [
  'ovh',
  'o2switch',
  'ionos',
  'hostinger',
  'infomaniak',
  'planethoster',
  'gandi',
  'lws',
]

/** Display name of each provider, the same in every language. */
export const HOSTING_PROVIDER_NAMES: Record<DibodevHostingProviderKey, string> = {
  o2switch: 'o2switch',
  ovh: 'OVHcloud',
  infomaniak: 'Infomaniak',
  ionos: 'IONOS',
  hostinger: 'Hostinger',
  planethoster: 'PlanetHoster',
  gandi: 'Gandi',
  lws: 'LWS',
}

/** Where each provider publishes its status, shown until the live read arrives or when it fails: same values as the server config. */
export const HOSTING_PROVIDER_STATUS_SOURCES: Record<DibodevHostingProviderKey, DibodevHostingProviderStatusSource> = {
  o2switch: { sourceKind: 'none', statusPageUrl: 'https://x.com/o2switch' },
  ovh: { sourceKind: 'statuspage', statusPageUrl: 'https://web-cloud.status-ovhcloud.com/' },
  infomaniak: { sourceKind: 'infomaniak', statusPageUrl: 'https://infomaniakstatus.com/fr/' },
  ionos: { sourceKind: 'statuspage', statusPageUrl: 'https://www.ionos-status.fr/' },
  hostinger: { sourceKind: 'statuspage', statusPageUrl: 'https://statuspage.hostinger.com/' },
  planethoster: { sourceKind: 'none', statusPageUrl: 'https://x.com/planethoster' },
  gandi: { sourceKind: 'statuspage', statusPageUrl: 'https://status.gandi.net/' },
  lws: { sourceKind: 'lws', statusPageUrl: 'https://aide.lws.fr/service-status' },
}

export const HOSTING_STATUS_STATE_DOT_CLASSES: Record<DibodevHostingStatusState, string> = {
  operational: 'bg-emerald-500',
  degraded: 'bg-amber-500',
  incident: 'bg-red-500',
  maintenance: 'bg-sky-500',
  unknown: 'bg-gray-400',
}

/** The PHP guide of the blog written for each provider, when there is one, linked from its page. */
export const HOSTING_PROVIDER_GUIDE_SLUGS: Partial<Record<DibodevHostingProviderKey, string>> = {
  ovh: 'changer-version-php-ovh-faille-octobre-2026',
  o2switch: 'changer-version-php-o2switch-faille-octobre-2026',
  ionos: 'changer-version-php-ionos-faille-octobre-2026',
  hostinger: 'changer-version-php-hostinger-faille-octobre-2026',
  infomaniak: 'changer-version-php-infomaniak-faille-octobre-2026',
  planethoster: 'changer-version-php-planethoster-faille-octobre-2026',
}

/** Articles listed at the bottom of the hub; the untranslated ones are left out of /en and /es automatically. */
export const HOSTING_STATUS_RELATED_ARTICLE_SLUGS: string[] = [
  'faille-php-octobre-2026-site-boutique-logiciel-que-faire',
  'site-wordpress-pirate-verifications-a-faire-aujourd-hui',
  'restaurer-site-wordpress-apres-piratage',
  'changer-version-php-ovh-faille-octobre-2026',
  'changer-version-php-o2switch-faille-octobre-2026',
]

export const HOSTING_STATUS_TEASER: DibodevToolTeaserContent = {
  toolId: 'web-host-status',
  routeName: HOSTING_STATUS_HUB_ROUTE_NAME,
  icon: 'Server',
  wording: {
    fr: {
      emphasizedIntro: `Votre site ne répond plus${NBSP}?`,
      text: 'Avant de chercher une faille, regardez si votre hébergeur est en panne : l’état d’OVHcloud, IONOS, Hostinger, Infomaniak, Gandi et LWS, lu toutes les 5 minutes sur leurs pages de statut, et où regarder pour o2switch et PlanetHoster.',
      linkLabel: `Voir l’état des hébergeurs`,
      listLabel: `Mon hébergeur est-il en panne${NBSP}?`,
      hubDescription: `L’état en direct de 6 hébergeurs, où regarder pour o2switch et PlanetHoster, les incidents en cours et quoi faire pendant la panne.`,
      hubMeta: 'En direct',
    },
    en: {
      emphasizedIntro: 'Is your site not responding?',
      text: 'Before looking for a bug, check whether your web host is down: the live status of OVHcloud, IONOS, Hostinger, Infomaniak, Gandi and LWS, read every 5 minutes from their status pages, and where to look for o2switch and PlanetHoster.',
      linkLabel: 'See the status of the hosts',
      listLabel: 'Is my web host down?',
      hubDescription:
        'The live status of 6 web hosts, where to look for o2switch and PlanetHoster, the open incidents and what to do during an outage.',
      hubMeta: 'Live',
    },
    es: {
      emphasizedIntro: '¿Tu web no responde?',
      text: 'Antes de buscar un fallo, mira si tu hosting está caído: el estado de OVHcloud, IONOS, Hostinger, Infomaniak, Gandi y LWS, leído cada 5 minutos en sus páginas de estado, y dónde mirar para o2switch y PlanetHoster.',
      linkLabel: 'Ver el estado de los hostings',
      listLabel: '¿Mi hosting está caído?',
      hubDescription:
        'El estado en directo de 6 hostings, dónde mirar para o2switch y PlanetHoster, las incidencias abiertas y qué hacer durante la caída.',
      hubMeta: 'En directo',
    },
  },
}
