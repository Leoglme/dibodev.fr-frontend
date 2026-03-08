import type { H3Event } from 'h3'
import fs from 'node:fs'
import path from 'node:path'
import { getGitHubFile } from '~~/server/utils/githubContent'
import type { ProjectsTranslationFile } from '~~/server/types/dashboard/translations'

const TRANSLATIONS_PATH: string = 'content/translations'

/**
 * GET /api/translations/projects/[locale]
 * Returns projects.{locale}.json. En dev : lit d'abord le fichier local (content/translations) pour que les modifs avec listes * s'affichent. Sinon GitHub.
 */
export default defineEventHandler(async (event: H3Event): Promise<ProjectsTranslationFile> => {
  const locale: string = String(getRouterParam(event, 'locale') ?? '').toLowerCase()
  if (locale !== 'en' && locale !== 'es') {
    return {}
  }

  const localPath = path.join(process.cwd(), TRANSLATIONS_PATH, `projects.${locale}.json`)
  try {
    const localContent = fs.readFileSync(localPath, 'utf-8')
    return JSON.parse(localContent) as ProjectsTranslationFile
  } catch {
    // Fichier local absent ou invalide → fallback GitHub
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
