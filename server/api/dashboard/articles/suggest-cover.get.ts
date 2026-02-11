import type { H3Event } from 'h3'
import { createError } from 'h3'

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

/**
 * GET /api/dashboard/articles/suggest-cover?query=...
 * Returns one suggested photo from Unsplash for the given search query.
 * Optionally triggers Unsplash download_location for API compliance.
 */
export default defineEventHandler(async (event: H3Event) => {
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

  const url = `${UNSPLASH_SEARCH}?query=${encodeURIComponent(q)}&per_page=10&orientation=landscape`
  const res = await fetch(url, {
    headers: { Authorization: `Client-ID ${accessKey}`, Accept: 'application/json' },
  })
  if (!res.ok) {
    const errText = await res.text()
    throw createError({
      statusCode: 502,
      statusMessage: `Unsplash API error: ${res.status} ${errText}`,
    })
  }

  const data = (await res.json()) as UnsplashSearchResponse
  const results = data.results ?? []
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
