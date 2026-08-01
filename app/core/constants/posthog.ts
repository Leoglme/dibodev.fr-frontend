/** PostHog EU ingestion host (server / posthog-node). */
export const POSTHOG_EU_API_HOST: string = 'https://eu.i.posthog.com'

/** PostHog EU app host (toolbar, replays). */
export const POSTHOG_EU_UI_HOST: string = 'https://eu.posthog.com'

/**
 * First-party PostHog proxy path (anti-adblock). Nitro route: `server/routes/dibodev/events/[...path].ts`.
 * Avoid `/ingest`, `/analytics`, `/posthog` (uBlock / EasyPrivacy lists).
 */
export const POSTHOG_PROXY_PATH: string = '/dibodev/events'

/** Typed subset of the posthog-js options used on the browser. */
export type DibodevPostHogClientConfig = {
  api_host: string
  ui_host: string
  persistence: 'memory' | 'localStorage' | 'cookie' | 'localStorage+cookie' | 'sessionStorage'
  person_profiles: 'always' | 'identified_only' | 'never'
  capture_pageview: boolean
  capture_pageleave: boolean
  autocapture: boolean
  disable_session_recording: boolean
}

/** Browser posthog-js options: cookieless (memory), first-party proxy, no session recording. */
export const POSTHOG_CLIENT_CONFIG: DibodevPostHogClientConfig = {
  api_host: POSTHOG_PROXY_PATH,
  ui_host: POSTHOG_EU_UI_HOST,
  persistence: 'memory',
  person_profiles: 'identified_only',
  capture_pageview: true,
  capture_pageleave: true,
  autocapture: true,
  disable_session_recording: true,
}
