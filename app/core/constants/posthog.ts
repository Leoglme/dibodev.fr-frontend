/** PostHog EU ingestion host (server / posthog-node). */
export const POSTHOG_EU_API_HOST: string = 'https://eu.i.posthog.com'

/** PostHog EU app host (toolbar, replays). */
export const POSTHOG_EU_UI_HOST: string = 'https://eu.posthog.com'

/** Typed subset of the posthog-js options used on the browser. */
export type DibodevPostHogClientConfig = {
  ui_host: string
  persistence: 'memory' | 'localStorage' | 'cookie' | 'localStorage+cookie' | 'sessionStorage'
  person_profiles: 'always' | 'identified_only' | 'never'
  capture_pageview: boolean
  capture_pageleave: boolean
  autocapture: boolean
  disable_session_recording: boolean
}

/** Browser posthog-js options: cookieless (memory), no session recording. Ingestion host comes from `posthogConfig.host`. */
export const POSTHOG_CLIENT_CONFIG: DibodevPostHogClientConfig = {
  ui_host: POSTHOG_EU_UI_HOST,
  persistence: 'memory',
  person_profiles: 'identified_only',
  // Pageviews are captured manually (see posthog-pageview.client.ts) — the module does not emit them.
  capture_pageview: false,
  capture_pageleave: true,
  autocapture: true,
  disable_session_recording: true,
}
