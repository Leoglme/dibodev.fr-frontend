import type { DibodevProject } from '~/core/types/DibodevProject'
import type { StoryblokProjectContent } from '~/services/types/storyblokProject'
import type { StoryblokStory } from '~/services/types/storyblok'

/**
 * Resolve a Storyblok asset field to a URL string.
 */
function resolveAssetUrl(value: StoryblokProjectContent['logoUrl']): string {
  if (!value) {
    return ''
  }

  if (typeof value === 'string') {
    return value
  }

  return value.filename || ''
}

/**
 * Normalize Storyblok list input to a string array.
 */
function normalizeStringList(value: StoryblokProjectContent['tags']): string[] {
  if (Array.isArray(value)) {
    return value.map((v: string): string => String(v).trim()).filter((v: string): boolean => v.length > 0)
  }

  return String(value)
    .split(/[\n,]+/g)
    .map((v: string): string => v.trim())
    .filter((v: string): boolean => v.length > 0)
}

/**
 * Map a strongly-typed Storyblok project story to a DibodevProject.
 *
 * @param {StoryblokStory<StoryblokProjectContent>} story - Storyblok story representing a project.
 * @returns {DibodevProject} Project mapped into Dibodev domain model.
 */
export function mapStoryblokProjectToDibodevProject(story: StoryblokStory<StoryblokProjectContent>): DibodevProject {
  const content: StoryblokProjectContent = story.content

  const route: string = story.full_slug.startsWith('/') ? `/${story.full_slug}` : `/${story.full_slug}`

  return {
    name: content.name,
    primaryColor: content.primaryColor,
    secondaryColor: content.secondaryColor,
    logoUrl: resolveAssetUrl(content.logoUrl),
    categories: normalizeStringList(content.categories),
    date: content.date,
    shortDescription: content.shortDescription,
    longDescription: content.longDescription,
    siteUrl: content.siteUrl,
    stack: normalizeStringList(content.stack),
    repoUrl: content.repoUrl,
    media1: resolveAssetUrl(content.media1 ?? null),
    media2: resolveAssetUrl(content.media2 ?? null),
    route,
    tags: normalizeStringList(content.tags),
    metaTitle: content.metaTitle,
    metaDescription: content.metaDescription,
    isFavorite: content.isFavorite,
  }
}
