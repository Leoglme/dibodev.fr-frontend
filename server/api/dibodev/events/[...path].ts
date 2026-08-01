import type { H3Event } from 'h3'

const POSTHOG_API_HOST: string = 'eu.i.posthog.com'
const POSTHOG_ASSETS_HOST: string = 'eu-assets.i.posthog.com'

/**
 * First-party reverse proxy to PostHog EU, served from `/api/dibodev/events/*` to dodge adblock domain lists.
 * Uses h3 `proxyRequest` so the method, headers, query and raw request body are forwarded intact (binary-safe).
 * Mounted under `/api/` so Nginx routes it to the Nitro server (the SPA static fallback owns other paths).
 * @see https://posthog.com/docs/advanced/proxy/nuxt
 */
export default defineEventHandler((event: H3Event) => {
  const rawPath: string | string[] | undefined = event.context.params?.path
  const path: string = Array.isArray(rawPath) ? rawPath.join('/') : (rawPath ?? '')
  const search: string = getRequestURL(event).search || ''
  const useAssetHost: boolean = path.startsWith('static/') || path.startsWith('array/')
  const hostname: string = useAssetHost ? POSTHOG_ASSETS_HOST : POSTHOG_API_HOST

  return proxyRequest(event, `https://${hostname}/${path}${search}`, {
    headers: { host: hostname },
  })
})
