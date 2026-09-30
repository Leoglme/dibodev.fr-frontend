import type { H3Event } from 'h3'
import { getGitHubRawFile, type GetRawFileResult } from '~~/server/utils/githubContent'
import type { ArticlesTranslationFile, CachedArticlesTranslationFile } from '~~/server/types/dashboard/translations'

const TRANSLATIONS_PATH: string = 'content/translations'
/** A build prerenders every article page and each one asks for these files: a successful read is kept one minute. */
const CACHE_DURATION_MS: number = 60_000
const cachedFiles: Map<string, CachedArticlesTranslationFile> = new Map<string, CachedArticlesTranslationFile>()

/**
 * GET /api/translations/articles/[locale]
 * Returns articles.{locale}.json from GitHub (en | es). Public, no auth.
 */
export default defineEventHandler(async (event: H3Event): Promise<ArticlesTranslationFile> => {
  const locale: string = String(getRouterParam(event, 'locale') ?? '').toLowerCase()
  if (locale !== 'en' && locale !== 'es') {
    return {}
  }

  const cached: CachedArticlesTranslationFile | undefined = cachedFiles.get(locale)
  if (cached && Date.now() - cached.readAt < CACHE_DURATION_MS) {
    return cached.translations
  }

  const config = useRuntimeConfig()
  const githubToken: string = String(config.githubToken ?? '')
  const githubRepo: string = String(config.githubRepo ?? '')
  if (!githubToken || !githubRepo) {
    return {}
  }

  const filePath: string = `${TRANSLATIONS_PATH}/articles.${locale}.json`
  const result: GetRawFileResult = await getGitHubRawFile(githubToken, githubRepo, filePath)
  if (!result.ok) {
    return {}
  }

  try {
    const translations: ArticlesTranslationFile = JSON.parse(result.content)
    cachedFiles.set(locale, { readAt: Date.now(), translations })
    return translations
  } catch {
    return {}
  }
})
