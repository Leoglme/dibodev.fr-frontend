import type { H3Event } from 'h3'

const POSTHOG_API_HOST: string = 'eu.i.posthog.com'
const POSTHOG_ASSETS_HOST: string = 'eu-assets.i.posthog.com'

const EXCLUDED_REQUEST_HEADERS: string[] = [
  'host',
  'connection',
  'content-length',
  'transfer-encoding',
  'accept-encoding',
]

const EXCLUDED_RESPONSE_HEADERS: string[] = ['content-encoding', 'content-length', 'transfer-encoding']

/**
 * First-party reverse proxy to PostHog EU, served from `/api/dibodev/events/*` to dodge adblock domain lists.
 * Mounted under `/api/` so Nginx routes it to the Nitro server (the SPA static fallback owns other paths).
 * @see https://posthog.com/docs/advanced/proxy/nuxt
 */
export default defineEventHandler(async (event: H3Event) => {
  const rawPath: string | string[] | undefined = event.context.params?.path
  const path: string = Array.isArray(rawPath) ? rawPath.join('/') : (rawPath ?? '')
  const url: URL = getRequestURL(event)
  const search: string = url.search || ''

  const useAssetHost: boolean = path.startsWith('static/') || path.startsWith('array/')
  const hostname: string = useAssetHost ? POSTHOG_ASSETS_HOST : POSTHOG_API_HOST
  const targetUrl: string = `https://${hostname}/${path}${search}`

  const headers: Headers = new Headers()
  const requestHeaders: ReturnType<typeof getRequestHeaders> = getRequestHeaders(event)

  for (const [key, value] of Object.entries(requestHeaders)) {
    if (value && !EXCLUDED_REQUEST_HEADERS.includes(key.toLowerCase())) {
      headers.set(key, value)
    }
  }

  headers.set('host', hostname)

  const clientIp: string | undefined =
    getHeader(event, 'x-forwarded-for') ?? getRequestIP(event, { xForwardedFor: true }) ?? undefined
  if (clientIp) {
    headers.set('x-forwarded-for', clientIp)
  }

  const rawBody: Buffer | undefined =
    event.method !== 'GET' && event.method !== 'HEAD' ? await readRawBody(event, false) : undefined
  const body: Uint8Array | undefined = rawBody ? new Uint8Array(rawBody) : undefined

  const response: Response = await fetch(targetUrl, {
    method: event.method,
    headers,
    body,
  })

  for (const [key, value] of response.headers.entries()) {
    if (!EXCLUDED_RESPONSE_HEADERS.includes(key.toLowerCase())) {
      setResponseHeader(event, key, value)
    }
  }

  setResponseStatus(event, response.status)

  const arrayBuffer: ArrayBuffer = await response.arrayBuffer()
  return Buffer.from(arrayBuffer)
})
