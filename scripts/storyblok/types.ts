/**
 * Types used by Storyblok scripts (Management API).
 * Kept in sync with Storyblok project component schema.
 */

/** Storyblok story object (minimal for Management API responses). */
export type StoryblokStorySummary = {
  id: number
  name: string
  slug: string
  full_slug: string
  parent_id: number | null
  is_folder: boolean
}

/** Response of GET spaces/:id/stories (folders or list). */
export type StoryblokStoriesResponse = {
  stories?: StoryblokStorySummary[]
}

/** Payload for POST spaces/:id/stories (create story). */
export type StoryblokCreateStoryPayload = {
  story: {
    name: string
    slug: string
    parent_id: number
    content: StoryblokProjectContent
  }
}

/** Content of the "project" component for Management API. */
export type StoryblokProjectContent = {
  _uid?: string
  component: 'project'
  name: string
  primaryColor: string
  secondaryColor?: string
  logoUrl?: StoryblokAssetValue
  categories: string[]
  date: string
  shortDescription: string
  longDescription: string
  siteUrl?: string
  stack: string[]
  repoUrl?: string | null
  media1?: StoryblokAssetValue | null
  media2?: StoryblokAssetValue | null
  tags: string
  metaTitle: string
  metaDescription: string
  isFavorite: boolean
}

/** Asset field value for Management API (id + filename for library assets; filename only for external URL). */
export type StoryblokAssetValue = {
  fieldtype: 'asset'
  id?: number
  filename: string
}
