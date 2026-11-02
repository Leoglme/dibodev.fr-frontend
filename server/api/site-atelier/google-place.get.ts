import type { H3Event } from 'h3'
import type { SiteAtelierGooglePlace, SiteAtelierGooglePlaceResponse } from '~~/server/types/tools/siteAtelier'
import { getQuery, getRequestIP, setResponseHeader } from 'h3'
import { SiteAtelierGooglePlaceService } from '~~/server/services/SiteAtelierGooglePlaceService'

/**
 * GET /api/site-atelier/google-place?q=<search> or ?placeId=<id> : the matching Google Business profiles, or one profile with its photos.
 * @param {H3Event} event - The request, with `?q=` or `?placeId=`.
 * @returns {Promise<SiteAtelierGooglePlaceResponse>} Whether the search is available, and the profiles found.
 * @throws {H3Error} 429 when the visitor searches too often, 502 when Google does not answer.
 */
export default defineEventHandler(async (event: H3Event): Promise<SiteAtelierGooglePlaceResponse> => {
  const apiKey: string = String(useRuntimeConfig().googlePlacesApiKey ?? '')
  setResponseHeader(event, 'cache-control', 'no-store')
  if (!SiteAtelierGooglePlaceService.isConfigured(apiKey)) {
    return { configured: false, places: [] }
  }
  const query: Record<string, unknown> = getQuery(event)
  const placeId: string | null = SiteAtelierGooglePlaceService.parsePlaceId(query.placeId)
  const searchText: string | null = SiteAtelierGooglePlaceService.parseQuery(query.q)
  if (!placeId && !searchText) {
    return { configured: true, places: [] }
  }
  SiteAtelierGooglePlaceService.assertRateLimit(getRequestIP(event, { xForwardedFor: true }) ?? '')
  const places: SiteAtelierGooglePlace[] = placeId
    ? await SiteAtelierGooglePlaceService.details(placeId, apiKey)
    : await SiteAtelierGooglePlaceService.search(searchText ?? '', apiKey)
  return { configured: true, places }
})
