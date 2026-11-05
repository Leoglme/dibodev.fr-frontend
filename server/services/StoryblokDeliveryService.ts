import { createError } from 'h3'
import type { StoryblokSpaceResponse, StoryblokStoriesPage } from '~~/server/types/storyblokDelivery'

const STORYBLOK_CDN_BASE: string = 'https://api.storyblok.com/v2/cdn'
const MAX_STORIES_PER_PAGE: number = 100

/**
 * Reads of the published content through the Storyblok Content Delivery API.
 */
export class StoryblokDeliveryService {
  /**
   * Fetches the current version of the space, passed as `cv` so the CDN answers with fresh content.
   * @param {string} token - Storyblok delivery token.
   * @returns {Promise<number>} The space version, 0 when the answer has none.
   * @throws {H3Error} 502 when the space cannot be read.
   */
  static async fetchSpaceVersion(token: string): Promise<number> {
    const response: Response = await fetch(`${STORYBLOK_CDN_BASE}/spaces/me?token=${token}`)
    if (!response.ok) {
      throw createError({ statusCode: 502, statusMessage: 'Failed to fetch Storyblok space.' })
    }
    const data: StoryblokSpaceResponse = (await response.json()) as StoryblokSpaceResponse
    return data.space?.version ?? 0
  }

  /**
   * Lists every story whose full slug starts with the given prefix, reading the pages one after another.
   * @param {string} token - Storyblok delivery token.
   * @param {string} startsWith - Full slug prefix (e.g. blog/).
   * @param {number} spaceVersion - Space version returned by fetchSpaceVersion.
   * @param {string} [sortBy] - Storyblok sort order (e.g. content.date:desc).
   * @returns {Promise<T[]>} All the matching stories.
   * @throws {H3Error} 502 when a page cannot be read.
   */
  static async listAllStories<T>(
    token: string,
    startsWith: string,
    spaceVersion: number,
    sortBy?: string,
  ): Promise<T[]> {
    const stories: T[] = []
    let page: number = 1
    let pageStories: T[] = []
    do {
      const searchParams: URLSearchParams = new URLSearchParams({
        token,
        starts_with: startsWith,
        per_page: String(MAX_STORIES_PER_PAGE),
        page: String(page),
        cv: String(spaceVersion),
      })
      if (sortBy) {
        searchParams.set('sort_by', sortBy)
      }
      const response: Response = await fetch(`${STORYBLOK_CDN_BASE}/stories?${searchParams.toString()}`)
      if (!response.ok) {
        throw createError({ statusCode: 502, statusMessage: 'Failed to fetch Storyblok stories.' })
      }
      const data: StoryblokStoriesPage<T> = (await response.json()) as StoryblokStoriesPage<T>
      pageStories = data.stories ?? []
      stories.push(...pageStories)
      page++
    } while (pageStories.length === MAX_STORIES_PER_PAGE)
    return stories
  }
}
