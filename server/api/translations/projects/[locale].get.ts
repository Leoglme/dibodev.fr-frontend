import type { H3Event } from 'h3'
import { getGitHubFile } from '~~/server/utils/githubContent'
import type { ProjectsTranslationFile } from '~~/server/types/dashboard/translations'

const TRANSLATIONS_PATH: string = 'content/translations'

/**
 * GET /api/translations/projects/[locale]
 * Returns projects.{locale}.json from GitHub (en | es). Public, no auth.
 */
export default defineEventHandler(async (event: H3Event): Promise<ProjectsTranslationFile> => {
  const locale: string = String(getRouterParam(event, 'locale') ?? '').toLowerCase()
  if (locale !== 'en' && locale !== 'es') {
    return {}
  }

  const config = useRuntimeConfig()
  const githubToken: string = String(config.githubToken ?? '')
  const githubRepo: string = String(config.githubRepo ?? '')
  if (!githubToken || !githubRepo) {
    return {}
  }

  const filePath: string = `${TRANSLATIONS_PATH}/projects.${locale}.json`
  const result = await getGitHubFile(githubToken, githubRepo, filePath)
  if (!result.ok) {
    return {}
  }

  try {
    return JSON.parse(result.content) as ProjectsTranslationFile
  } catch {
    return {}
  }
})
