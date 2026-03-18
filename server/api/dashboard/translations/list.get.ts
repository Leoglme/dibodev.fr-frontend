import type { H3Event } from 'h3'
import { createError } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { getGitHubFile, type GetFileResult } from '~~/server/utils/githubContent'
import type {
  TranslatableItem,
  ListTranslatablesResponse,
  ProjectsTranslationFile,
  ArticlesTranslationFile,
  SectorsTranslationFile,
  CategoriesTranslationFile,
} from '~~/server/types/dashboard/translations'

const STORYBLOK_CDN_BASE: string = 'https://api.storyblok.com/v2/cdn'
const BLOG_FOLDER: string = 'blog/'
const PROJECT_PREFIX: string = 'project/'
const SECTORS_PREFIX: string = 'sectors/'
const CATEGORIES_PREFIX: string = 'categories/'
const TRANSLATIONS_PATH: string = 'content/translations'

type StoryblokStoryListItem = {
  content?: { title?: string; name?: string; slug?: string }
  full_slug?: string
}

type StoriesResponse = { stories?: StoryblokStoryListItem[] }

async function fetchStoryblokSpaceVersion(token: string): Promise<number> {
  const spaceRes: Response = await fetch(`${STORYBLOK_CDN_BASE}/spaces/me?token=${token}`)
  if (!spaceRes.ok) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Failed to fetch Storyblok space.',
    })
  }
  const spaceData: { space?: { version?: number } } = (await spaceRes.json()) as {
    space?: { version?: number }
  }
  const version: number = spaceData.space?.version ?? 0
  return version
}

async function fetchStoryblokStories(token: string, startsWith: string, cv: number): Promise<StoryblokStoryListItem[]> {
  const url: string = `${STORYBLOK_CDN_BASE}/stories?token=${token}&starts_with=${encodeURIComponent(startsWith)}&per_page=100&cv=${cv}`
  const res: Response = await fetch(url)
  if (!res.ok) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Failed to fetch Storyblok stories.',
    })
  }
  const data: StoriesResponse = (await res.json()) as StoriesResponse
  const stories: StoryblokStoryListItem[] = data.stories ?? []
  return stories
}

function parseJsonFile<T>(content: string): T {
  try {
    return JSON.parse(content) as T
  } catch {
    return {} as T
  }
}

/** Fetch GitHub default branch HEAD commit SHA. Returns null on error. */
async function fetchGitHubHeadCommit(token: string, repo: string): Promise<string | null> {
  const url: string = `https://api.github.com/repos/${repo}/commits/HEAD`
  const res: Response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `Bearer ${token}`,
    },
  })
  if (!res.ok) return null
  const data: { sha?: string } = (await res.json()) as { sha?: string }
  return typeof data.sha === 'string' ? data.sha : null
}

/**
 * GET /api/dashboard/translations/list
 * Returns projects and articles with EN/ES translation status (from GitHub files).
 */
export default defineEventHandler(async (event: H3Event): Promise<ListTranslatablesResponse> => {
  requireDashboardAuth(event)
  const config: ReturnType<typeof useRuntimeConfig> = useRuntimeConfig()
  const token: string = config.storyblokDeliveryApiToken as string
  const githubToken: string = config.githubToken as string
  const githubRepo: string = config.githubRepo as string

  if (!token) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Storyblok delivery token not configured.',
    })
  }

  if (!githubToken || !githubRepo) {
    throw createError({
      statusCode: 500,
      statusMessage: 'REPO_ACCESS_TOKEN and REPO_SLUG must be set for translations.',
    })
  }

  const cv: number = await fetchStoryblokSpaceVersion(token)
  const [projectStories, articleStories, sectorStories, categoryStories]: [
    StoryblokStoryListItem[],
    StoryblokStoryListItem[],
    StoryblokStoryListItem[],
    StoryblokStoryListItem[],
  ] = await Promise.all([
    fetchStoryblokStories(token, PROJECT_PREFIX, cv),
    fetchStoryblokStories(token, BLOG_FOLDER, cv),
    fetchStoryblokStories(token, SECTORS_PREFIX, cv),
    fetchStoryblokStories(token, CATEGORIES_PREFIX, cv),
  ])

  const [
    projectsEnRes,
    projectsEsRes,
    articlesEnRes,
    articlesEsRes,
    sectorsEnRes,
    sectorsEsRes,
    categoriesEnRes,
    categoriesEsRes,
  ]: GetFileResult[] = await Promise.all([
    getGitHubFile(githubToken, githubRepo, `${TRANSLATIONS_PATH}/projects.en.json`),
    getGitHubFile(githubToken, githubRepo, `${TRANSLATIONS_PATH}/projects.es.json`),
    getGitHubFile(githubToken, githubRepo, `${TRANSLATIONS_PATH}/articles.en.json`),
    getGitHubFile(githubToken, githubRepo, `${TRANSLATIONS_PATH}/articles.es.json`),
    getGitHubFile(githubToken, githubRepo, `${TRANSLATIONS_PATH}/sectors.en.json`),
    getGitHubFile(githubToken, githubRepo, `${TRANSLATIONS_PATH}/sectors.es.json`),
    getGitHubFile(githubToken, githubRepo, `${TRANSLATIONS_PATH}/categories.en.json`),
    getGitHubFile(githubToken, githubRepo, `${TRANSLATIONS_PATH}/categories.es.json`),
  ])

  const projectsEn: ProjectsTranslationFile = projectsEnRes.ok
    ? parseJsonFile<ProjectsTranslationFile>(projectsEnRes.content)
    : {}
  const projectsEs: ProjectsTranslationFile = projectsEsRes.ok
    ? parseJsonFile<ProjectsTranslationFile>(projectsEsRes.content)
    : {}
  const articlesEn: ArticlesTranslationFile = articlesEnRes.ok
    ? parseJsonFile<ArticlesTranslationFile>(articlesEnRes.content)
    : {}
  const articlesEs: ArticlesTranslationFile = articlesEsRes.ok
    ? parseJsonFile<ArticlesTranslationFile>(articlesEsRes.content)
    : {}
  const sectorsEn: SectorsTranslationFile = sectorsEnRes.ok
    ? parseJsonFile<SectorsTranslationFile>(sectorsEnRes.content)
    : {}
  const sectorsEs: SectorsTranslationFile = sectorsEsRes.ok
    ? parseJsonFile<SectorsTranslationFile>(sectorsEsRes.content)
    : {}
  const categoriesEn: CategoriesTranslationFile = categoriesEnRes.ok
    ? parseJsonFile<CategoriesTranslationFile>(categoriesEnRes.content)
    : {}
  const categoriesEs: CategoriesTranslationFile = categoriesEsRes.ok
    ? parseJsonFile<CategoriesTranslationFile>(categoriesEsRes.content)
    : {}

  const normalizeFullSlug = (raw: string): string => raw.trim().replace(/^\/+/, '')

  const projects: TranslatableItem[] = projectStories
    .filter((s): s is StoryblokStoryListItem & { full_slug: string } => Boolean(s.full_slug?.trim()))
    .map((s): TranslatableItem => {
      const fullSlug: string = normalizeFullSlug(s.full_slug ?? '')
      const name: string = (s.content?.name ?? s.content?.title ?? fullSlug).toString()
      return {
        type: 'project',
        slug: fullSlug.replace(/^project\/?/, '') || 'project',
        name,
        fullSlug,
        hasEn: fullSlug in projectsEn,
        hasEs: fullSlug in projectsEs,
      }
    })

  const articles: TranslatableItem[] = articleStories
    .filter((s): s is StoryblokStoryListItem & { full_slug: string } => Boolean(s.full_slug?.trim()))
    .map((s): TranslatableItem => {
      const fullSlug: string = normalizeFullSlug(s.full_slug ?? '')
      const slug: string = (s.content?.slug ?? (fullSlug.replace(/^blog\/?/, '') || 'article')).trim()
      const name: string = (s.content?.title ?? slug).toString()
      return {
        type: 'article',
        slug,
        name,
        fullSlug,
        hasEn: fullSlug in articlesEn,
        hasEs: fullSlug in articlesEs,
      }
    })

  const sectors: TranslatableItem[] = sectorStories
    .filter((s): s is StoryblokStoryListItem & { full_slug: string } => Boolean(s.full_slug?.trim()))
    .map((s): TranslatableItem => {
      const fullSlug: string = normalizeFullSlug(s.full_slug ?? '')
      const slug: string = fullSlug.replace(/^sectors\/?/, '') || 'sector'
      const name: string = (s.content?.title ?? s.content?.name ?? slug).toString()
      return {
        type: 'sector',
        slug,
        name,
        fullSlug,
        hasEn: fullSlug in sectorsEn,
        hasEs: fullSlug in sectorsEs,
      }
    })

  const categories: TranslatableItem[] = categoryStories
    .filter((s): s is StoryblokStoryListItem & { full_slug: string } => Boolean(s.full_slug?.trim()))
    .map((s): TranslatableItem => {
      const fullSlug: string = normalizeFullSlug(s.full_slug ?? '')
      const slug: string = fullSlug.replace(/^categories\/?/, '') || 'category'
      const name: string = (s.content?.title ?? s.content?.name ?? slug).toString()
      return {
        type: 'category',
        slug,
        name,
        fullSlug,
        hasEn: fullSlug in categoriesEn,
        hasEs: fullSlug in categoriesEs,
      }
    })

  const buildCommit: string = (config.buildCommit as string) ?? ''
  const headCommit: string | null = await fetchGitHubHeadCommit(githubToken, githubRepo)
  const deploySynced: boolean = Boolean(buildCommit) && Boolean(headCommit) && buildCommit.trim() === headCommit.trim()

  return { projects, articles, sectors, categories, deploySynced }
})
