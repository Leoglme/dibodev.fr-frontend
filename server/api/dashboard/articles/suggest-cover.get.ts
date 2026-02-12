import type { H3Event } from 'h3'
import { createError } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'

const UNSPLASH_SEARCH = 'https://api.unsplash.com/search/photos'

type UnsplashPhoto = {
  id: string
  urls: { raw?: string; full?: string; regular: string; small?: string; thumb?: string }
  user: { name: string; username?: string }
  links?: { download_location?: string }
}

type UnsplashSearchResponse = {
  total?: number
  total_pages?: number
  results?: UnsplashPhoto[]
}

const STOP_WORDS = new Set([
  'de', 'du', 'des', 'le', 'la', 'les', 'un', 'une', 'pour', 'en', 'et', 'ou', 'sur', 'au', 'aux',
  'que', 'qui', 'quoi', 'dans', 'par', 'avec', 'sans', 'sous', 'vers', 'chez', 'donc', 'or', 'ni',
  'ne', 'pas', 'plus', 'moins', 'très', 'tout', 'tous', 'toute', 'toutes', 'autre', 'autres',
])

/**
 * Build a shorter Unsplash-friendly query from a long title (e.g. "Logiciel de Gestion pour Plombiers en 2026..."
 * -> "logiciel plombier" or "plombier"). Prefer métier keywords (plombier, artisan, etc.) + one context word.
 */
function buildFallbackQuery(fullQuery: string): string {
  const normalized = fullQuery
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  const words = normalized.split(' ').filter((w) => w.length > 1 && !STOP_WORDS.has(w) && !/^\d+$/.test(w))

  const metier = words.find((w) =>
    ['plombier', 'plombiers', 'electricien', 'electriciens', 'artisan', 'artisans', 'restaurant', 'restaurants', 'commerce', 'commerces', 'pme', 'chantier', 'construction'].includes(w),
  )
  const context = words.find((w) =>
    ['logiciel', 'gestion', 'site', 'web', 'application', 'outil', 'devis', 'intervention', 'saas', 'logiciels'].includes(w),
  )

  if (metier && context) {
    const m = metier.replace(/s$/, '') // plombiers -> plombier
    return `${context} ${m}`
  }
  if (metier) return metier.replace(/s$/, '')
  if (context) return context
  return words.slice(0, 2).join(' ') || fullQuery.slice(0, 30)
}

async function searchUnsplash(accessKey: string, searchQuery: string): Promise<UnsplashSearchResponse> {
  const url = `${UNSPLASH_SEARCH}?query=${encodeURIComponent(searchQuery)}&per_page=10&orientation=landscape`
  const res = await fetch(url, {
    headers: { Authorization: `Client-ID ${accessKey}`, Accept: 'application/json' },
  })
  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`Unsplash API error: ${res.status} ${errText}`)
  }
  return (await res.json()) as UnsplashSearchResponse
}

/**
 * GET /api/dashboard/articles/suggest-cover?query=...
 * Returns one suggested photo from Unsplash for the given search query.
 * If the full query returns no results, tries a shorter fallback (e.g. "logiciel plombier", "plombier").
 */
export default defineEventHandler(async (event: H3Event) => {
  requireDashboardAuth(event)
  const query = getQuery(event).query
  const q = typeof query === 'string' ? query.trim() : ''
  if (!q) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Query parameter "query" is required.',
    })
  }

  const config = useRuntimeConfig()
  const accessKey = config.unsplashAccessKey as string
  if (!accessKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Unsplash access key not configured.',
    })
  }

  let data: UnsplashSearchResponse
  try {
    data = await searchUnsplash(accessKey, q)
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unsplash request failed'
    throw createError({ statusCode: 502, statusMessage: msg })
  }

  let results = data.results ?? []
  if (results.length === 0) {
    const fallbackQuery = buildFallbackQuery(q)
    if (fallbackQuery !== q) {
      try {
        data = await searchUnsplash(accessKey, fallbackQuery)
        results = data.results ?? []
      } catch {
        results = []
      }
    }
  }

  if (results.length === 0) {
    return {
      url: null,
      attribution: null,
      downloadLocation: null,
    }
  }

  const index = Math.floor(Math.random() * results.length)
  const photo = results[index] as UnsplashPhoto
  const imageUrl = photo.urls?.regular ?? photo.urls?.full ?? photo.urls?.raw ?? ''
  const attribution = photo.user?.name ? `Photo by ${photo.user.name} on Unsplash` : 'Unsplash'
  const downloadLocation = photo.links?.download_location

  if (downloadLocation) {
    try {
      await fetch(`${downloadLocation}?client_id=${accessKey}`, { method: 'GET' })
    } catch {
      // Non-blocking: trigger for Unsplash guidelines
    }
  }

  return {
    url: imageUrl,
    attribution,
    downloadLocation: downloadLocation ?? null,
  }
})
