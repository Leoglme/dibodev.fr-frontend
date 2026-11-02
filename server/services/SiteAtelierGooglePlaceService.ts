import type {
  SiteAtelierGooglePlace,
  SiteAtelierGooglePlaceCacheEntry,
  SiteAtelierRateLimitWindow,
} from '~~/server/types/tools/siteAtelier'
import { createError } from 'h3'

const PLACES_SEARCH_URL: string = 'https://places.googleapis.com/v1/places:searchText'
const PLACES_DETAILS_URL_PREFIX: string = 'https://places.googleapis.com/v1/places/'
const PLACES_PHOTO_URL_PREFIX: string = 'https://places.googleapis.com/v1/'
const SUGGESTION_FIELD_MASK: string =
  'places.id,places.displayName,places.addressComponents,places.nationalPhoneNumber,places.rating,places.userRatingCount,places.googleMapsUri'
const DETAILS_FIELD_MASK: string =
  'id,displayName,addressComponents,nationalPhoneNumber,rating,userRatingCount,googleMapsUri,photos'
const SEARCH_LANGUAGE_CODE: string = 'fr'
const SEARCH_REGION_CODE: string = 'FR'
const SEARCH_RESULT_COUNT: number = 5
const PHOTO_COUNT: number = 3
const PHOTO_MAX_WIDTH_PX: number = 1600
const REQUEST_TIMEOUT_MS: number = 8_000
const CACHE_TTL_MS: number = 24 * 60 * 60 * 1000
const CACHE_ENTRIES_MAX: number = 500
const RATE_LIMIT_WINDOW_MS: number = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS: number = 30
const RATE_ENTRIES_MAX: number = 2000
const QUERY_MIN_LENGTH: number = 3
const QUERY_MAX_LENGTH: number = 120
const PLACE_ID_REGEX: RegExp = /^[A-Za-z0-9_-]{10,300}$/
const CITY_COMPONENT_TYPES_BY_PRECISION: string[] = ['locality', 'postal_town', 'administrative_area_level_3']

type GooglePlaceAddressComponent = {
  longText?: string
  types?: string[]
}

type GooglePlacePhoto = {
  name?: string
}

type GooglePlaceResult = {
  id?: string
  displayName?: { text?: string }
  addressComponents?: GooglePlaceAddressComponent[]
  nationalPhoneNumber?: string
  rating?: number
  userRatingCount?: number
  googleMapsUri?: string
  photos?: GooglePlacePhoto[]
}

const cacheByKey: Map<string, SiteAtelierGooglePlaceCacheEntry> = new Map()
const rateByAddress: Map<string, SiteAtelierRateLimitWindow> = new Map()

/** Finds the Google Business profile of a visitor of the site workshop, with a server key that never reaches the browser. */
export class SiteAtelierGooglePlaceService {
  /**
   * Tells whether a Places key is configured.
   * @param {string} apiKey - The key of the runtime config.
   * @returns {boolean} True when the search can run.
   */
  static isConfigured(apiKey: string): boolean {
    return apiKey.trim().length > 0
  }

  /**
   * Keeps a search text when its length is usable.
   * @param {unknown} value - The raw `q` query parameter.
   * @returns {string | null} The trimmed text, or null.
   */
  static parseQuery(value: unknown): string | null {
    const query: string = String(value ?? '')
      .replace(/\s+/g, ' ')
      .trim()
    return query.length >= QUERY_MIN_LENGTH && query.length <= QUERY_MAX_LENGTH ? query : null
  }

  /**
   * Keeps a place id when it has the shape Google gives.
   * @param {unknown} value - The raw `placeId` query parameter.
   * @returns {string | null} The id, or null.
   */
  static parsePlaceId(value: unknown): string | null {
    const placeId: string = String(value ?? '').trim()
    return PLACE_ID_REGEX.test(placeId) ? placeId : null
  }

  /**
   * Refuses an address that has already sent its share of searches in the current window.
   * @param {string} address - The visitor's IP address, or an empty string when unknown.
   * @returns {void}
   * @throws {H3Error} 429 when the window is exhausted.
   */
  static assertRateLimit(address: string): void {
    const key: string = address || 'unknown'
    const now: number = Date.now()
    const entry: SiteAtelierRateLimitWindow | undefined = rateByAddress.get(key)

    if (!entry || entry.resetAt <= now) {
      rateByAddress.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
      if (rateByAddress.size > RATE_ENTRIES_MAX) {
        for (const [candidate, candidateEntry] of rateByAddress) {
          if (candidateEntry.resetAt <= now) {
            rateByAddress.delete(candidate)
          }
        }
      }
      return
    }
    entry.count += 1
    if (entry.count > RATE_LIMIT_MAX_REQUESTS) {
      throw createError({ statusCode: 429, statusMessage: 'Too many searches from this address. Try again later.' })
    }
  }

  /**
   * Searches the profiles matching a text, without their photos.
   * @param {string} query - The text typed by the visitor.
   * @param {string} apiKey - The Places key.
   * @returns {Promise<SiteAtelierGooglePlace[]>} Five profiles at most.
   * @throws {H3Error} 502 when Google does not answer.
   */
  static async search(query: string, apiKey: string): Promise<SiteAtelierGooglePlace[]> {
    const cacheKey: string = `search:${query.toLocaleLowerCase('fr')}`
    const cachedPlaces: SiteAtelierGooglePlace[] | null = this.readCache(cacheKey)
    if (cachedPlaces) {
      return cachedPlaces
    }
    const answer: { places?: GooglePlaceResult[] } = await this.callPlaces<{ places?: GooglePlaceResult[] }>(
      PLACES_SEARCH_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': SUGGESTION_FIELD_MASK,
        },
        body: JSON.stringify({
          textQuery: query,
          languageCode: SEARCH_LANGUAGE_CODE,
          regionCode: SEARCH_REGION_CODE,
          pageSize: SEARCH_RESULT_COUNT,
        }),
      },
    )
    const places: SiteAtelierGooglePlace[] = (answer.places ?? [])
      .map((result: GooglePlaceResult): SiteAtelierGooglePlace | null => this.toPlace(result, []))
      .filter((place: SiteAtelierGooglePlace | null): place is SiteAtelierGooglePlace => place !== null)
      .slice(0, SEARCH_RESULT_COUNT)
    this.writeCache(cacheKey, places)
    return places
  }

  /**
   * Reads one profile with up to three photo addresses that carry no key.
   * @param {string} placeId - The profile picked by the visitor.
   * @param {string} apiKey - The Places key.
   * @returns {Promise<SiteAtelierGooglePlace[]>} The profile, or an empty list when Google does not know it.
   * @throws {H3Error} 502 when Google does not answer.
   */
  static async details(placeId: string, apiKey: string): Promise<SiteAtelierGooglePlace[]> {
    const cacheKey: string = `place:${placeId}`
    const cachedPlaces: SiteAtelierGooglePlace[] | null = this.readCache(cacheKey)
    if (cachedPlaces) {
      return cachedPlaces
    }
    const result: GooglePlaceResult = await this.callPlaces<GooglePlaceResult>(
      `${PLACES_DETAILS_URL_PREFIX}${encodeURIComponent(placeId)}?languageCode=${SEARCH_LANGUAGE_CODE}`,
      { method: 'GET', headers: { 'X-Goog-Api-Key': apiKey, 'X-Goog-FieldMask': DETAILS_FIELD_MASK } },
    )
    const photoNames: string[] = (result.photos ?? [])
      .map((photo: GooglePlacePhoto): string => photo.name ?? '')
      .filter((photoName: string): boolean => photoName !== '')
      .slice(0, PHOTO_COUNT)
    const photoUrls: string[] = await this.resolvePhotoUrls(photoNames, apiKey)
    const place: SiteAtelierGooglePlace | null = this.toPlace(result, photoUrls)
    const places: SiteAtelierGooglePlace[] = place ? [place] : []
    this.writeCache(cacheKey, places)
    return places
  }

  /**
   * Turns photo references into public addresses, so the browser never sees the key; a photo Google refuses is left out.
   * @param {string[]} photoNames - The photo references of the profile.
   * @param {string} apiKey - The Places key.
   * @returns {Promise<string[]>} The https addresses of the photos.
   */
  private static async resolvePhotoUrls(photoNames: string[], apiKey: string): Promise<string[]> {
    const photoUrls: string[] = []
    for (const photoName of photoNames) {
      try {
        const media: { photoUri?: string } = await this.callPlaces<{ photoUri?: string }>(
          `${PLACES_PHOTO_URL_PREFIX}${photoName}/media?maxWidthPx=${PHOTO_MAX_WIDTH_PX}&skipHttpRedirect=true`,
          { method: 'GET', headers: { 'X-Goog-Api-Key': apiKey } },
        )
        if (media.photoUri?.startsWith('https://')) {
          photoUrls.push(media.photoUri)
        }
      } catch (error: unknown) {
        console.error('SiteAtelierGooglePlaceService:resolvePhotoUrls', { photoName, error })
      }
    }
    return photoUrls
  }

  /**
   * Calls the Places API and reads its JSON answer.
   * @param {string} url - The endpoint.
   * @param {RequestInit} init - Method, headers and body.
   * @returns {Promise<T>} The answer.
   * @throws {H3Error} 502 when Google answers an error or does not answer in time.
   */
  private static async callPlaces<T>(url: string, init: RequestInit): Promise<T> {
    try {
      const response: Response = await fetch(url, { ...init, signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) })
      if (!response.ok) {
        console.error('SiteAtelierGooglePlaceService:callPlaces', {
          status: response.status,
          body: await response.text(),
        })
        throw new Error(`Places answered ${response.status}`)
      }
      return (await response.json()) as T
    } catch (error: unknown) {
      console.error('SiteAtelierGooglePlaceService:callPlaces', error)
      throw createError({ statusCode: 502, statusMessage: 'The Google profile search is not answering.' })
    }
  }

  /**
   * Turns a Places answer into the profile the workshop shows.
   * @param {GooglePlaceResult} result - The answer.
   * @param {string[]} photoUrls - The photo addresses already resolved.
   * @returns {SiteAtelierGooglePlace | null} The profile, or null when it has no id or name.
   */
  private static toPlace(result: GooglePlaceResult, photoUrls: string[]): SiteAtelierGooglePlace | null {
    const placeId: string = result.id ?? ''
    const name: string = result.displayName?.text?.trim() ?? ''
    if (!placeId || !name) {
      return null
    }
    return {
      placeId,
      name,
      city: this.cityOf(result.addressComponents ?? []),
      phone: result.nationalPhoneNumber?.trim() || null,
      rating: typeof result.rating === 'number' ? result.rating : null,
      reviewCount: typeof result.userRatingCount === 'number' ? result.userRatingCount : null,
      mapsUrl: result.googleMapsUri?.startsWith('https://') ? result.googleMapsUri : null,
      photoUrls,
    }
  }

  /**
   * Finds the town in the address parts of a profile.
   * @param {GooglePlaceAddressComponent[]} components - The address parts.
   * @returns {string | null} The town, or null.
   */
  private static cityOf(components: GooglePlaceAddressComponent[]): string | null {
    for (const componentType of CITY_COMPONENT_TYPES_BY_PRECISION) {
      const component: GooglePlaceAddressComponent | undefined = components.find(
        (candidate: GooglePlaceAddressComponent): boolean => candidate.types?.includes(componentType) ?? false,
      )
      if (component?.longText) {
        return component.longText
      }
    }
    return null
  }

  /**
   * Reads a cached answer that has not expired.
   * @param {string} cacheKey - The search or place key.
   * @returns {SiteAtelierGooglePlace[] | null} The cached profiles, or null.
   */
  private static readCache(cacheKey: string): SiteAtelierGooglePlace[] | null {
    const entry: SiteAtelierGooglePlaceCacheEntry | undefined = cacheByKey.get(cacheKey)
    if (!entry || entry.expiresAt <= Date.now()) {
      cacheByKey.delete(cacheKey)
      return null
    }
    return entry.places
  }

  /**
   * Keeps an answer for a day, forgetting the oldest one past the cache size.
   * @param {string} cacheKey - The search or place key.
   * @param {SiteAtelierGooglePlace[]} places - The profiles.
   * @returns {void}
   */
  private static writeCache(cacheKey: string, places: SiteAtelierGooglePlace[]): void {
    if (cacheByKey.size >= CACHE_ENTRIES_MAX) {
      const oldestKey: string | undefined = cacheByKey.keys().next().value
      if (oldestKey !== undefined) {
        cacheByKey.delete(oldestKey)
      }
    }
    cacheByKey.set(cacheKey, { places, expiresAt: Date.now() + CACHE_TTL_MS })
  }
}
