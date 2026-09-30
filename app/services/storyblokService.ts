import type {
  HttpError,
  StoryblokSpaceResponse,
  StoryblokStoriesResponse,
  StoryblokStoryResponse,
  StoryblokVersion,
} from '~/services/types/storyblok'

/**
 * Storyblok CDN API base URL.
 */
const STORYBLOK_CDN_BASE_URL: string = 'https://api.storyblok.com/v2/cdn'

/** How long a published response is reused (server renders and prerender bursts hit the same URLs many times). */
const RESPONSE_CACHE_TTL_MS: number = 60_000

/** Delays before each retry of a failed request (network error, timeout, 429 or 5xx). */
const RETRY_DELAYS_MS: number[] = [400, 1200, 3000]

type CachedResponse = {
  expiresAt: number
  promise: Promise<unknown>
}

/**
 * Service to interact with Storyblok CDN API.
 *
 * Notes:
 * - Server-side requests should use the private delivery token.
 * - Client-side requests use the public token (required for the visual editor bridge).
 */
export class StoryblokService {
  private static _apiToken: string | undefined = process.env.NUXT_STORYBLOK_DELIVERY_API_TOKEN

  /** Published responses (and in-flight requests) keyed by URL, so concurrent identical requests share one call. */
  private static readonly responseCache: Map<string, CachedResponse> = new Map()

  /**
   * Fetches a JSON document from the CDN API with retries, sharing published responses for a short time.
   * Draft requests (visual editor) are never cached.
   * @template TResponse - Shape of the JSON document.
   * @param {string} url - Full request URL (token included).
   * @param {string} description - Human description used in error messages.
   * @returns {Promise<TResponse>} The parsed document.
   * @throws {HttpError} When every attempt failed (status code of the last HTTP failure when there was one).
   */
  private static fetchJson<TResponse>(url: string, description: string): Promise<TResponse> {
    const isCacheable: boolean = !url.includes('version=draft')
    const now: number = Date.now()
    const cached: CachedResponse | undefined = isCacheable ? this.responseCache.get(url) : undefined
    if (cached && cached.expiresAt > now) {
      return cached.promise as Promise<TResponse>
    }

    const promise: Promise<TResponse> = this.fetchJsonWithRetries<TResponse>(url, description)
    if (isCacheable) {
      this.responseCache.set(url, { expiresAt: now + RESPONSE_CACHE_TTL_MS, promise })
      promise.catch((): void => {
        this.responseCache.delete(url)
      })
    }
    return promise
  }

  /**
   * Performs the request, retrying on network errors, timeouts, rate limiting and server errors.
   * @template TResponse - Shape of the JSON document.
   * @param {string} url - Full request URL.
   * @param {string} description - Human description used in error messages.
   * @returns {Promise<TResponse>} The parsed document.
   * @throws {HttpError} The last error when every attempt failed.
   */
  private static async fetchJsonWithRetries<TResponse>(url: string, description: string): Promise<TResponse> {
    let lastError: HttpError = new Error(`Failed to fetch ${description}`)
    for (let attempt: number = 0; attempt <= RETRY_DELAYS_MS.length; attempt++) {
      if (attempt > 0) {
        await new Promise<void>((resolve: () => void): void => {
          setTimeout(resolve, RETRY_DELAYS_MS[attempt - 1])
        })
      }
      try {
        const response: Response = await fetch(url)
        if (response.ok) {
          return (await response.json()) as TResponse
        }
        const error: HttpError = new Error(`Failed to fetch ${description}: ${response.status} ${response.statusText}`)
        error.statusCode = response.status
        const isRetryable: boolean = response.status === 429 || response.status >= 500
        if (!isRetryable) {
          throw error
        }
        lastError = error
      } catch (error) {
        const httpError: HttpError = error instanceof Error ? (error as HttpError) : new Error(String(error))
        if (httpError.statusCode && httpError.statusCode !== 429 && httpError.statusCode < 500) {
          throw httpError
        }
        lastError = httpError
      }
    }
    throw lastError
  }

  /**
   * Resolve Storyblok token from Nuxt runtime config.
   */
  private static get apiToken(): string {
    if (this._apiToken) {
      return this._apiToken
    }

    const config = useRuntimeConfig()
    const token: string = import.meta.client
      ? config.public.storyblok.accessToken || ''
      : config.storyblokDeliveryApiToken || ''

    if (!token) {
      throw new Error('Storyblok API token is not defined in runtime config.')
    }

    this._apiToken = token
    return token
  }

  /**
   * Fetch Storyblok space metadata to retrieve the cache version (cv).
   */
  private static async getSpace(): Promise<StoryblokSpaceResponse> {
    const url: string = `${STORYBLOK_CDN_BASE_URL}/spaces/me?token=${this.apiToken}`
    return this.fetchJson<StoryblokSpaceResponse>(url, 'Storyblok space')
  }

  /**
   * Fetch a single story by slug from Storyblok CDN API.
   *
   * @template TContent - Strongly typed Storyblok content object.
   * @param {string} slug - Example: "pages/home" or "blog/my-post".
   * @param {StoryblokVersion} [version='published'] - "published" or "draft".
   * @param {string} [language] - Storyblok language code (e.g. "en-us") for field-level translation. Omit for default language.
   * @param {{ resolve_relations?: string }} [options] - Optional resolve_relations (e.g. "project.sectors,project.categories") to get rels in response.
   */
  public static async getStoryBySlug<TContent>(
    slug: string,
    version: StoryblokVersion = 'published',
    language?: string,
    options?: { resolve_relations?: string },
  ): Promise<StoryblokStoryResponse<TContent>> {
    const baseUrl: string = `${STORYBLOK_CDN_BASE_URL}/stories/${encodeURIComponent(slug)}`
    const url: string = await this.buildStoryUrl(baseUrl, version, language, options)

    return this.fetchJson<StoryblokStoryResponse<TContent>>(url, `Storyblok story "${slug}"`)
  }

  /**
   * Fetch a list of stories from Storyblok with optional query parameters.
   *
   * @template TContent - Strongly typed story content object.
   * @param {Record<string, string | number>} [params={}] - Storyblok query params (e.g. folder, content_type, page).
   * @param {string} [language] - Storyblok language code (e.g. "en-us") for field-level translation. Omit for default language.
   */
  public static async getStories<TContent>(
    params: Record<string, string | number> = {},
    language?: string,
  ): Promise<StoryblokStoriesResponse<TContent>> {
    const space: StoryblokSpaceResponse = await this.getSpace()
    const cv: number = space.space.version

    const searchParams: URLSearchParams = new URLSearchParams({
      token: this.apiToken,
      version: 'published',
      cv: String(cv),
      ...Object.fromEntries(Object.entries(params).map(([key, value]) => [key, String(value)])),
      ...(language ? { language } : {}),
    })

    const url: string = `${STORYBLOK_CDN_BASE_URL}/stories?${searchParams.toString()}`
    return this.fetchJson<StoryblokStoriesResponse<TContent>>(url, 'Storyblok stories')
  }

  /**
   * Build a Storyblok story URL (adds token + version + optional cv cache buster + optional language + optional resolve_relations).
   */
  private static async buildStoryUrl(
    baseUrl: string,
    version: StoryblokVersion,
    language?: string,
    options?: { resolve_relations?: string },
  ): Promise<string> {
    const params: Record<string, string> = {
      token: this.apiToken,
      version: version === 'draft' ? 'draft' : 'published',
    }
    if (version !== 'draft') {
      const space: StoryblokSpaceResponse = await this.getSpace()
      params.cv = String(space.space.version)
    }
    if (language) {
      params.language = language
    }
    if (options?.resolve_relations) {
      params.resolve_relations = options.resolve_relations
    }
    const query: string = new URLSearchParams(params).toString()
    return `${baseUrl}?${query}`
  }
}
