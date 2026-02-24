import type { H3Event } from 'h3'
import { createError } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { getAccessTokenFromRefreshToken } from '~~/server/utils/gscAuth'

const STORYBLOK_CDN_BASE = 'https://api.storyblok.com/v2/cdn'
const BLOG_FOLDER = 'blog/'
const SITE_URL = 'https://dibodev.fr'
const GSC_INSPECT_URL = 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect'
const GSC_SITES_LIST_URL = 'https://www.googleapis.com/webmasters/v3/sites'
const GSC_SITE_URL_PREFIX = 'https://dibodev.fr/'
const GSC_SITE_DOMAIN = 'sc-domain:dibodev.fr'
const GSC_DOMAIN_MATCH = 'dibodev.fr'

type StoryItem = {
  content?: { title?: string; slug?: string; date?: string }
  full_slug?: string
}

type StoriesResponse = { stories?: StoryItem[] }

export type ArticleWithIndexStatus = {
  title: string
  slug: string
  fullSlug: string
  url: string
  date?: string
  /** Index status from GSC: 'indexed' | 'not_indexed' | 'excluded' | 'unknown' | null if GSC not connected */
  indexStatus: 'indexed' | 'not_indexed' | 'excluded' | 'unknown' | null
}

/** Détecte si coverageState ou indexingState indique une page indexée (EN ou FR). */
function isCoverageIndexed(coverageState: string | undefined, indexingState: string | undefined): boolean {
  if (typeof coverageState === 'string') {
    const c = coverageState.toLowerCase()
    if (c.includes('indexed') || c.includes('indexé') || c.includes('indexée')) return true
  }
  return indexingState === 'INDEXING_ALLOWED'
}

/**
 * Déduit le statut d'indexation à partir du verdict, coverageState et indexingState.
 * L'API peut renvoyer NEUTRAL pour des pages indexées ; coverageState peut être "Indexed" ou "Indexé" (fr-FR).
 */
function mapVerdictToStatus(
  verdict: string | undefined,
  coverageState: string | undefined,
  indexingState: string | undefined,
): ArticleWithIndexStatus['indexStatus'] {
  const coverageIndexed = isCoverageIndexed(coverageState, indexingState)
  switch (verdict) {
    case 'PASS':
      return 'indexed'
    case 'FAIL':
      return 'not_indexed'
    case 'NEUTRAL':
      return coverageIndexed ? 'indexed' : 'excluded'
    case 'PARTIAL':
    case 'VERDICT_UNSPECIFIED':
    default:
      return coverageIndexed ? 'indexed' : 'unknown'
  }
}

const GSC_REQUEST_TIMEOUT_MS = 12_000
const STORYBLOK_REQUEST_TIMEOUT_MS = 15_000
const HANDLER_TIMEOUT_MS = 90_000

async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  timeoutMs: number = GSC_REQUEST_TIMEOUT_MS,
): Promise<Response> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(url, { ...options, signal: controller.signal })
    return res
  } finally {
    clearTimeout(timeoutId)
  }
}

/**
 * GET /api/dashboard/articles/indexing-status
 * Returns list of blog articles with Google Search Console index status (if GSC_REFRESH_TOKEN is set).
 */
export default defineEventHandler(
  async (event: H3Event): Promise<{ articles: ArticleWithIndexStatus[]; gscConnected: boolean }> => {
    requireDashboardAuth(event)
    let handlerTimeoutId: ReturnType<typeof setTimeout>
    const handlerTimeoutPromise = new Promise<never>((_, reject) => {
      handlerTimeoutId = setTimeout(
        () => reject(createError({ statusCode: 504, statusMessage: 'Indexing status request timed out.' })),
        HANDLER_TIMEOUT_MS,
      )
    })
    try {
      return await Promise.race([
        (async (): Promise<{ articles: ArticleWithIndexStatus[]; gscConnected: boolean }> => {
          const config = useRuntimeConfig()
          const token = config.storyblokDeliveryApiToken as string
          if (!token) {
            throw createError({
              statusCode: 500,
              statusMessage: 'Storyblok delivery token not configured.',
            })
          }

          const spaceRes = await fetchWithTimeout(
            `${STORYBLOK_CDN_BASE}/spaces/me?token=${token}`,
            {},
            STORYBLOK_REQUEST_TIMEOUT_MS,
          )
          if (!spaceRes.ok) {
            throw createError({
              statusCode: 502,
              statusMessage: 'Failed to fetch Storyblok space.',
            })
          }
          const spaceData = (await spaceRes.json()) as { space?: { version?: number } }
          const cv = spaceData.space?.version ?? 0

          const url = `${STORYBLOK_CDN_BASE}/stories?token=${token}&starts_with=${encodeURIComponent(BLOG_FOLDER)}&per_page=100&sort_by=content.date:desc&cv=${cv}`
          const res = await fetchWithTimeout(url, {}, STORYBLOK_REQUEST_TIMEOUT_MS)
          if (!res.ok) {
            throw createError({
              statusCode: 502,
              statusMessage: 'Failed to fetch Storyblok stories.',
            })
          }

          const data = (await res.json()) as StoriesResponse
          const stories = data.stories ?? []

          const articles: ArticleWithIndexStatus[] = stories
            .filter((s) => s.content?.slug ?? s.full_slug)
            .map((s) => {
              const slug = (s.content?.slug ?? s.full_slug ?? '').replace(/^blog\/?/, '').trim() || 'article'
              const fullSlug = s.full_slug ?? `blog/${slug}`
              const canonicalPath = fullSlug.startsWith('blog/') ? fullSlug : `blog/${fullSlug}`
              return {
                title: s.content?.title ?? slug,
                slug,
                fullSlug: canonicalPath,
                url: `${SITE_URL}/${canonicalPath}`,
                date: s.content?.date,
                indexStatus: null as ArticleWithIndexStatus['indexStatus'],
              }
            })

          const clientId = config.googleClientId as string
          const clientSecret = config.googleClientSecret as string
          const refreshToken = config.gscRefreshToken as string

          if (!refreshToken || !clientId || !clientSecret || articles.length === 0) {
            return { articles, gscConnected: !!refreshToken }
          }

          let accessToken: string
          try {
            accessToken = await getAccessTokenFromRefreshToken(clientId, clientSecret, refreshToken)
          } catch {
            return { articles, gscConnected: true }
          }

          let siteUrlToUse: string | null = null
          try {
            const listRes = await fetchWithTimeout(GSC_SITES_LIST_URL, {
              headers: { Authorization: `Bearer ${accessToken}` },
            })
            if (listRes.ok) {
              const listData = (await listRes.json()) as {
                siteEntry?: Array<{ siteUrl?: string; permissionLevel?: string }>
              }
              const entries = listData.siteEntry ?? []
              const found = entries.find((e) => {
                const u = e.siteUrl?.trim()
                if (!u) return false
                if (u === 'sc-domain:dibodev.fr') return true
                if (u === 'https://dibodev.fr/' || u === 'https://www.dibodev.fr/') return true
                const domainOnly = u
                  .replace(/^sc-domain:/i, '')
                  .replace(/^https?:\/\//, '')
                  .replace(/\/$/, '')
                  .replace(/^www\./, '')
                return domainOnly === 'dibodev.fr'
              })
              if (found?.siteUrl) {
                siteUrlToUse = found.siteUrl
              }
            }
          } catch {
            // sites list timeout or error: fallback to hardcoded siteUrl
          }

          const siteUrlsToTry: string[] = siteUrlToUse != null ? [siteUrlToUse] : [GSC_SITE_DOMAIN, GSC_SITE_URL_PREFIX]
          const debug = getQuery(event).debug === '1' || getQuery(event).debug === 'true'
          let firstGscError: { status: number; body: string; siteUrl: string } | null = null

          for (let i = 0; i < articles.length; i++) {
            const article = articles[i]!
            let attempt = 0
            try {
              while (attempt < siteUrlsToTry.length) {
                const currentSiteUrl = siteUrlsToTry[attempt]!
                const inspectRes = await fetchWithTimeout(
                  GSC_INSPECT_URL,
                  {
                    method: 'POST',
                    headers: {
                      Authorization: `Bearer ${accessToken}`,
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      inspectionUrl: article.url,
                      siteUrl: currentSiteUrl,
                      languageCode: 'fr-FR',
                    }),
                  },
                  10_000,
                )
                if (inspectRes.ok) {
                  const inspectData = (await inspectRes.json()) as {
                    inspectionResult?: {
                      indexStatusResult?: { verdict?: string; coverageState?: string }
                    }
                  }
                  const indexStatus = inspectData.inspectionResult?.indexStatusResult
                  const verdict = indexStatus?.verdict
                  const coverageState = indexStatus?.coverageState
                  article.indexStatus = mapVerdictToStatus(verdict, coverageState)
                  break
                }
                const errBody = await inspectRes.text()
                if (!firstGscError) {
                  firstGscError = { status: inspectRes.status, body: errBody, siteUrl: currentSiteUrl }
                  console.error('[GSC indexing-status]', inspectRes.status, currentSiteUrl, errBody.slice(0, 400))
                }
                attempt++
              }
              if (article.indexStatus === null) {
                article.indexStatus = 'unknown'
              }
            } catch (err) {
              if (!firstGscError) {
                const msg = err instanceof Error ? err.message : String(err)
                firstGscError = { status: 0, body: msg, siteUrl: siteUrlsToTry[0] ?? '' }
                console.error('[GSC indexing-status]', msg)
              }
              article.indexStatus = 'unknown'
            }
          }

          const payload: {
            articles: ArticleWithIndexStatus[]
            gscConnected: boolean
            gscDebug?: typeof firstGscError
          } = {
            articles,
            gscConnected: true,
          }
          if (debug && firstGscError) {
            payload.gscDebug = firstGscError
          }
          return payload
        })(),
        handlerTimeoutPromise,
      ])
    } finally {
      clearTimeout(handlerTimeoutId!)
    }
  },
)
