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

/**
 * Service to interact with Storyblok CDN API.
 *
 * Notes:
 * - Server-side requests should use the private delivery token.
 * - Client-side requests use the public token (required for the visual editor bridge).
 */
export class StoryblokService {
  private static _apiToken: string | undefined = process.env.NUXT_STORYBLOK_DELIVERY_API_TOKEN

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
    const response: Response = await fetch(url)

    if (!response.ok) {
      const error: HttpError = new Error(`Failed to fetch Storyblok space: ${response.status} ${response.statusText}`)
      error.statusCode = response.status
      throw error
    }

    const data: StoryblokSpaceResponse = (await response.json()) as StoryblokSpaceResponse
    return data
  }

  /**
   * Fetch a single story by slug from Storyblok CDN API.
   *
   * @template TContent - Strongly typed Storyblok content object.
   * @param {string} slug - Example: "pages/home" or "blog/my-post".
   * @param {StoryblokVersion} [version='published'] - "published" or "draft".
   */
  public static async getStoryBySlug<TContent>(
    slug: string,
    version: StoryblokVersion = 'published',
  ): Promise<StoryblokStoryResponse<TContent>> {
    const baseUrl: string = `${STORYBLOK_CDN_BASE_URL}/stories/${encodeURIComponent(slug)}`
    const url: string = await this.buildStoryUrl(baseUrl, version)

    const response: Response = await fetch(url)
    if (!response.ok) {
      const error: HttpError = new Error(
        `Failed to fetch Storyblok story "${slug}": ${response.status} ${response.statusText}`,
      )
      error.statusCode = response.status
      throw error
    }

    const data: StoryblokStoryResponse<TContent> = (await response.json()) as StoryblokStoryResponse<TContent>
    return data
  }

  /**
   * Fetch a list of stories from Storyblok with optional query parameters.
   *
   * @template TContent - Strongly typed story content object.
   * @param {Record<string, string | number>} [params={}] - Storyblok query params (e.g. folder, content_type, page).
   */
  public static async getStories<TContent>(
    params: Record<string, string | number> = {},
  ): Promise<StoryblokStoriesResponse<TContent>> {
    const space: StoryblokSpaceResponse = await this.getSpace()
    const cv: number = space.space.version

    const searchParams: URLSearchParams = new URLSearchParams({
      token: this.apiToken,
      version: 'published',
      cv: String(cv),
      ...Object.fromEntries(Object.entries(params).map(([key, value]) => [key, String(value)])),
    })

    const url: string = `${STORYBLOK_CDN_BASE_URL}/stories?${searchParams.toString()}`
    const response: Response = await fetch(url)

    if (!response.ok) {
      const error: HttpError = new Error(`Failed to fetch Storyblok stories: ${response.status} ${response.statusText}`)
      error.statusCode = response.status
      throw error
    }

    const data: StoryblokStoriesResponse<TContent> = (await response.json()) as StoryblokStoriesResponse<TContent>
    return data
  }

  /**
   * Build a Storyblok story URL (adds token + version + optional cv cache buster).
   */
  private static async buildStoryUrl(baseUrl: string, version: StoryblokVersion): Promise<string> {
    if (version === 'draft') {
      return `${baseUrl}?token=${this.apiToken}&version=draft`
    }

    const space: StoryblokSpaceResponse = await this.getSpace()
    const cv: number = space.space.version
    return `${baseUrl}?token=${this.apiToken}&version=published&cv=${cv}`
  }
}
