import type { ISbStoryData } from '@storyblok/js'

/**
 * Supported Storyblok API versions.
 */
export type StoryblokVersion = 'draft' | 'published'

/**
 * Storyblok "space" response (minimal shape used for cache-busting).
 */
export type StoryblokSpaceResponse = {
  space: {
    id: number
    name: string
    domain: string
    version: number
    language_codes: string[]
  }
}

/**
 * Single Storyblok link entry (from `/cdn/links`).
 */
export type StoryblokLink = {
  id: number
  uuid: string
  slug: string
  path: string | null
  parent_id: number | null
  name: string
  is_folder: boolean
  published: boolean
  is_startpage: boolean
  position: number
  real_path: string
}

/**
 * Storyblok links response (from `/cdn/links`).
 */
export type StoryblokLinksResponse = {
  links: Record<string, StoryblokLink>
}

/**
 * Strongly typed Storyblok story wrapper.
 *
 * Storyblok SDK types expose `content` as `any`. We tighten it by replacing it
 * with a generic `TContent`.
 */
export type StoryblokStory<TContent> = Omit<ISbStoryData, 'content'> & {
  content: TContent
}

/**
 * Story response returned by Storyblok CDN API.
 */
export type StoryblokStoryResponse<TContent> = {
  story: StoryblokStory<TContent>
}

/**
 * Stories listing response returned by Storyblok CDN API.
 */
export type StoryblokStoriesResponse<TContent> = {
  stories: Array<StoryblokStory<TContent>>
  cv: number
}

/**
 * Minimal HTTP error shape used across the app.
 */
export type HttpError = Error & {
  statusCode?: number
}
