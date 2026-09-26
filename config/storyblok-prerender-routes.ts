/** Published articles and projects to prerender: crawling misses unlinked pages, which then drop out of the sitemap. */

const STORYBLOK_CDN_BASE_URL: string = 'https://api.storyblok.com/v2/cdn'
const STORIES_PER_PAGE: number = 100
const LOCALE_PREFIXES: readonly string[] = ['', '/en', '/es']
const PRERENDERED_FOLDERS: readonly string[] = ['blog/', 'project/']

type StoryblokStoryReference = {
  full_slug: string
  is_startpage?: boolean
}

type StoryblokStoriesPage = {
  stories?: StoryblokStoryReference[]
}

/**
 * Fetches the full slugs of every published story of a folder, following pagination.
 *
 * @param {string} token - Storyblok public access token.
 * @param {string} folder - Folder prefix, e.g. "blog/".
 * @returns {Promise<string[]>} Full slugs such as "blog/my-article".
 * @throws {Error} When the Storyblok CDN answers with an error status.
 */
async function fetchPublishedFullSlugs(token: string, folder: string): Promise<string[]> {
  const fullSlugs: string[] = []
  for (let page: number = 1; ; page++) {
    const searchParams: URLSearchParams = new URLSearchParams({
      token,
      version: 'published',
      starts_with: folder,
      per_page: String(STORIES_PER_PAGE),
      page: String(page),
      excluding_fields: 'content,longDescription,body',
    })
    const response: Response = await fetch(`${STORYBLOK_CDN_BASE_URL}/stories?${searchParams.toString()}`)
    if (!response.ok) {
      throw new Error(`Storyblok stories request failed for "${folder}": ${response.status}`)
    }
    const data: StoryblokStoriesPage = (await response.json()) as StoryblokStoriesPage
    const stories: StoryblokStoryReference[] = data.stories ?? []
    for (const story of stories) {
      if (!story.is_startpage && story.full_slug.length > folder.length) {
        fullSlugs.push(story.full_slug)
      }
    }
    if (stories.length < STORIES_PER_PAGE) {
      return fullSlugs
    }
  }
}

/**
 * Builds the FR/EN/ES routes of every published article and project (empty without a token, e.g. local builds).
 *
 * @param {string | undefined} token - Storyblok public access token.
 * @returns {Promise<string[]>} Routes such as "/blog/my-article" and "/en/project/my-project".
 * @throws {Error} When Storyblok cannot list the stories: the build must fail rather than deploy without them.
 */
export async function getStoryblokPrerenderRoutes(token: string | undefined): Promise<string[]> {
  if (!token) {
    console.warn('[prerender] NUXT_PUBLIC_STORYBLOK_ACCESS_TOKEN is missing: articles and projects rely on crawling.')
    return []
  }
  const fullSlugsByFolder: string[][] = await Promise.all(
    PRERENDERED_FOLDERS.map((folder: string): Promise<string[]> => fetchPublishedFullSlugs(token, folder)),
  )
  return fullSlugsByFolder
    .flat()
    .flatMap((fullSlug: string): string[] => LOCALE_PREFIXES.map((prefix: string): string => `${prefix}/${fullSlug}`))
}
