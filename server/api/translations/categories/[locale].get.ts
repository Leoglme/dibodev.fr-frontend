import type { H3Event } from 'h3'
import fs from 'node:fs'
import path from 'node:path'
import { getGitHubFile } from '~~/server/utils/githubContent'
import type { CategoriesTranslationFile } from '~~/server/types/dashboard/translations'

const TRANSLATIONS_PATH: string = 'content/translations'

/**
 * GET /api/translations/categories/[locale]
 * Returns categories.{locale}.json. In dev: read from content/translations first; otherwise GitHub.
 */
export default defineEventHandler(async (event: H3Event): Promise<CategoriesTranslationFile> => {
  const locale: string = String(getRouterParam(event, 'locale') ?? '').toLowerCase()
  if (locale !== 'en' && locale !== 'es') {
    return {}
  }

  const localPath = path.join(process.cwd(), TRANSLATIONS_PATH, `categories.${locale}.json`)
  try {
    const localContent = fs.readFileSync(localPath, 'utf-8')
    return JSON.parse(localContent) as CategoriesTranslationFile
  } catch {
    // Fichier local absent ou invalide → fallback GitHub
  }

  const config = useRuntimeConfig()
  const githubToken: string = String(config.githubToken ?? '')
  const githubRepo: string = String(config.githubRepo ?? '')
  if (!githubToken || !githubRepo) {
    return {}
  }

  const filePath: string = `${TRANSLATIONS_PATH}/categories.${locale}.json`
  const result = await getGitHubFile(githubToken, githubRepo, filePath)
  if (!result.ok) {
    return {}
  }

  try {
    return JSON.parse(result.content) as CategoriesTranslationFile
  } catch {
    return {}
  }
})
