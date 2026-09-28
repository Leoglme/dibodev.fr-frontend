import type { H3Event } from 'h3'
import { createError, readBody } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { putGitHubFiles, type PutGitHubFilesItem, type PutGitHubFilesResult } from '~~/server/utils/githubContent'
import { mistralGenerate } from '~~/server/utils/mistral'
import { extractRichtextTexts, injectRichtextTranslations } from '~~/server/utils/translationsRichtext'
import { translateTextSegments } from '~~/server/utils/translateTextSegments'
import { richtextToMarkdown } from '~~/server/utils/richtextToMarkdown'
import { TranslationService } from '~~/server/services/TranslationService'
import type {
  TranslatableEntityType,
  TranslateBody,
  TranslateResponse,
  TranslationTargetLocale,
  TranslatedProjectFields,
  TranslatedSectorFields,
  TranslatedCategoryFields,
  ProjectsTranslationFile,
  SectorsTranslationFile,
  CategoriesTranslationFile,
  StoryblokRichtextNode,
} from '~~/server/types/dashboard/translations'

function lastSegment(path: string): string | null {
  const trimmed = String(path)
    .replace(/^\/+|\/+$/g, '')
    .trim()
  if (!trimmed) return null
  const parts = trimmed.split('/')
  const last = parts[parts.length - 1]?.trim()
  return last || null
}

function getEffectiveProjectContent(content: Record<string, unknown>): Record<string, unknown> {
  const body: unknown = content.body
  if (Array.isArray(body) && body.length > 0 && body[0] != null && typeof body[0] === 'object') {
    const block: Record<string, unknown> = body[0] as Record<string, unknown>
    if (block.name != null || block.shortDescription != null || block.metaTitle != null) {
      return { ...content, ...block }
    }
  }
  return content
}

const PROJECT_SYSTEM_EN: string = `You are a professional translator. Translate the following French project fields to English.
Return ONLY a valid JSON object with these exact keys: name, shortDescription, longDescription, metaTitle, metaDescription, categories, sectors, tags.
- longDescription is a Markdown-like formatted string: keep headings as plain lines, preserve blank lines, keep bullet list markers (* ), ordered list markers (1. 2. 3.), and blockquote markers (> ).
- Translate the section headings exactly as: Context, Problem, Solution, Key features, Results.
- Do NOT add links or any Markdown that is not in the source.
- Do NOT wrap longDescription in JSON or additional quotes; keep it as a plain string value.
- categories and sectors must be JSON arrays of slug keys (e.g. site-web, logiciel, gaming). Keep the exact same keys as in the source; do not translate them.
- tags must be a JSON array of translated strings, with as many items as the source. Preserve tone and terminology (tech, marketing).`

const PROJECT_SYSTEM_ES: string = `You are a professional translator. Translate the following French project fields to Spanish.
Return ONLY a valid JSON object with these exact keys: name, shortDescription, longDescription, metaTitle, metaDescription, categories, sectors, tags.
- longDescription is a Markdown-like formatted string: keep headings as plain lines, preserve blank lines, keep bullet list markers (* ), ordered list markers (1. 2. 3.), and blockquote markers (> ).
- Translate the section headings exactly as: Contexto, Problema, Solución, Funcionalidades principales, Resultados.
- Do NOT add links or any Markdown that is not in the source.
- Do NOT wrap longDescription in JSON or additional quotes; keep it as a plain string value.
- categories and sectors must be JSON arrays of slug keys (e.g. site-web, logiciel, gaming). Keep the exact same keys as in the source; do not translate them.
- tags must be a JSON array of translated strings, with as many items as the source. Preserve tone and terminology (tech, marketing).`

/** Markdown link syntax: the source text never contains links, so any link in a translation is invented. */
const MARKDOWN_LINK_REGEX: RegExp = /\[([^\]]+)\]\([^)]+\)/g

const SECTOR_PAGE_SYSTEM_EN: string = `You are a professional translator. Translate the following French sector page fields to English. 
Return ONLY a valid JSON object with these exact keys: title, description, metaTitle, metaDescription.
Preserve tone and terminology (professional, SEO).`

const SECTOR_PAGE_SYSTEM_ES: string = `You are a professional translator. Translate the following French sector page fields to Spanish. 
Return ONLY a valid JSON object with these exact keys: title, description, metaTitle, metaDescription.
Preserve tone and terminology (professional, SEO).`

const CATEGORY_PAGE_SYSTEM_EN: string = `You are a professional translator. Translate the following French category page fields to English. 
Return ONLY a valid JSON object with these exact keys: title, description, metaTitle, metaDescription.
Preserve tone and terminology (professional, SEO).`

const CATEGORY_PAGE_SYSTEM_ES: string = `You are a professional translator. Translate the following French category page fields to Spanish. 
Return ONLY a valid JSON object with these exact keys: title, description, metaTitle, metaDescription.
Preserve tone and terminology (professional, SEO).`

function getProjectSystemInstruction(locale: TranslationTargetLocale): string {
  return locale === 'en' ? PROJECT_SYSTEM_EN : PROJECT_SYSTEM_ES
}

function getSectorPageSystemInstruction(locale: TranslationTargetLocale): string {
  return locale === 'en' ? SECTOR_PAGE_SYSTEM_EN : SECTOR_PAGE_SYSTEM_ES
}

function getCategoryPageSystemInstruction(locale: TranslationTargetLocale): string {
  return locale === 'en' ? CATEGORY_PAGE_SYSTEM_EN : CATEGORY_PAGE_SYSTEM_ES
}

function getEffectiveSectorOrCategoryContent(content: Record<string, unknown>): Record<string, unknown> {
  const body: unknown = content.body
  if (Array.isArray(body) && body.length > 0 && body[0] != null && typeof body[0] === 'object') {
    const block: Record<string, unknown> = body[0] as Record<string, unknown>
    if (block.title != null || block.description != null) {
      return { ...content, ...block }
    }
  }
  return content
}

export default defineEventHandler(async (event: H3Event): Promise<TranslateResponse> => {
  requireDashboardAuth(event)
  const config: ReturnType<typeof useRuntimeConfig> = useRuntimeConfig()
  const githubToken: string = config.githubToken as string
  const githubRepo: string = config.githubRepo as string
  const storyblokToken: string = config.storyblokDeliveryApiToken as string
  const mistralApiKey: string = config.mistralApiKey as string

  if (!githubToken || !githubRepo) {
    throw createError({
      statusCode: 500,
      statusMessage: 'REPO_ACCESS_TOKEN and REPO_SLUG must be set.',
    })
  }
  if (!storyblokToken) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Storyblok delivery token not configured.',
    })
  }
  if (!mistralApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'MISTRAL_API_KEY not configured.',
    })
  }

  const body: unknown = await readBody(event)
  const rawBody: TranslateBody = body as TranslateBody
  const entityType: TranslatableEntityType | undefined = rawBody.entityType
  const fullSlug: string | undefined = rawBody.slug
  const targetLocaleSingle: TranslationTargetLocale | undefined = rawBody.targetLocale
  const targetLocalesArray: TranslationTargetLocale[] | undefined = rawBody.targetLocales

  const locales: TranslationTargetLocale[] =
    Array.isArray(targetLocalesArray) && targetLocalesArray.length > 0
      ? [...new Set(targetLocalesArray)].filter((l: TranslationTargetLocale): boolean => l === 'en' || l === 'es')
      : targetLocaleSingle === 'en' || targetLocaleSingle === 'es'
        ? [targetLocaleSingle]
        : []

  const allowedTypes: TranslatableEntityType[] = ['project', 'article', 'sector', 'category']
  if (!entityType || !fullSlug || locales.length === 0 || !allowedTypes.includes(entityType)) {
    throw createError({
      statusCode: 400,
      statusMessage:
        'Invalid body: entityType (project|article|sector|category), slug and targetLocale (en|es) or targetLocales required.',
    })
  }

  if (entityType === 'project') {
    const { content, relsSlugMap } = await TranslationService.fetchPublishedStory(
      storyblokToken,
      fullSlug,
      'project.sectors,project.categories',
    )
    const effective: Record<string, unknown> = getEffectiveProjectContent(content)
    const name: string = String(effective.name ?? '')
    const shortDescription: string = String(effective.shortDescription ?? '')

    const rawLongDescription: unknown = effective.longDescription
    let longDescription: string
    if (
      rawLongDescription &&
      typeof rawLongDescription === 'object' &&
      'type' in (rawLongDescription as Record<string, unknown>)
    ) {
      longDescription = richtextToMarkdown(rawLongDescription as StoryblokRichtextNode)
    } else {
      longDescription = String(rawLongDescription ?? '')
    }
    const metaTitle: string = String(effective.metaTitle ?? '')
    const metaDescription: string = String(effective.metaDescription ?? '')
    const rawCategories: string[] = TranslationService.normalizeStringList(effective.categories as string[] | string)
    const categories: string[] = rawCategories
      .map((uuidOrKey: string) => {
        const fullSlugFromRels = relsSlugMap[uuidOrKey]
        if (fullSlugFromRels) return lastSegment(fullSlugFromRels) ?? uuidOrKey
        return uuidOrKey
      })
      .filter(Boolean)
    const rawSectors: string[] = TranslationService.normalizeStringList(effective.sectors as string[] | string)
    const sectors: string[] = rawSectors
      .map((uuidOrKey: string) => {
        const fullSlugFromRels = relsSlugMap[uuidOrKey]
        if (fullSlugFromRels) return lastSegment(fullSlugFromRels) ?? uuidOrKey
        return uuidOrKey
      })
      .filter(Boolean)
    const stack: string[] = TranslationService.normalizeStringList(effective.stack as string[] | string)
    const tags: string[] = TranslationService.normalizeStringList(effective.tags as string[] | string)
    // Stack names are technology names: they are never translated (translating them broke the stack icons).
    const userMessage: string = JSON.stringify({
      name,
      shortDescription,
      longDescription,
      metaTitle,
      metaDescription,
      categories,
      sectors,
      tags,
    })

    const filesToPush: PutGitHubFilesItem[] = []
    for (const locale of locales) {
      const { content: raw }: { content: string } = await mistralGenerate({
        apiKey: mistralApiKey,
        model: TranslationService.MODEL,
        systemInstruction: getProjectSystemInstruction(locale),
        userMessage,
        temperature: 0.3,
        maxTokens: 4000,
      })
      let translated: TranslatedProjectFields
      try {
        const parsed: Record<string, unknown> = JSON.parse(raw) as Record<string, unknown>
        translated = {
          name: String(parsed.name ?? ''),
          shortDescription: String(parsed.shortDescription ?? ''),
          longDescription: String(parsed.longDescription ?? '').replace(MARKDOWN_LINK_REGEX, '$1'),
          metaTitle: String(parsed.metaTitle ?? ''),
          metaDescription: String(parsed.metaDescription ?? ''),
          categories: Array.isArray(parsed.categories) ? (parsed.categories as string[]).map(String) : [],
          sectors: Array.isArray(parsed.sectors) ? (parsed.sectors as string[]).map(String) : [],
          stack,
          tags: Array.isArray(parsed.tags) ? (parsed.tags as string[]).map(String) : [],
        }
      } catch {
        throw createError({
          statusCode: 502,
          statusMessage: `Mistral returned invalid JSON for project translation (${locale}).`,
        })
      }
      const filePath: string = `${TranslationService.FILES_PATH}/projects.${locale}.json`
      const current: ProjectsTranslationFile = await TranslationService.readTranslationFile<TranslatedProjectFields>(
        githubToken,
        githubRepo,
        filePath,
      )
      const updated: ProjectsTranslationFile = { ...current, [fullSlug]: translated }
      filesToPush.push({ path: filePath, content: JSON.stringify(updated, null, 2) })
    }

    const putRes: PutGitHubFilesResult = await putGitHubFiles({
      token: githubToken,
      repo: githubRepo,
      message: `chore(translations): update project ${fullSlug} → ${locales.join(' + ').toUpperCase()}`,
      files: filesToPush,
    })
    if (!putRes.ok) {
      throw createError({ statusCode: 502, statusMessage: putRes.message || 'Failed to push to GitHub' })
    }
    const localeLabel: string = locales.length === 2 ? 'EN et ES' : locales[0] === 'en' ? 'EN' : 'ES'
    return { ok: true, message: `Projet ${fullSlug} traduit en ${localeLabel}.` }
  }

  if (entityType === 'article') {
    await TranslationService.translateArticles({
      fullSlugs: [fullSlug],
      locales,
      storyblokToken,
      mistralApiKey,
      githubToken,
      githubRepo,
    })
    const localeLabel: string = locales.length === 2 ? 'EN et ES' : locales[0] === 'en' ? 'EN' : 'ES'
    return { ok: true, message: `Article ${fullSlug} traduit en ${localeLabel}.` }
  }

  // ——— sector ———
  if (entityType === 'sector') {
    const { content } = await TranslationService.fetchPublishedStory(storyblokToken, fullSlug)
    const effective: Record<string, unknown> = getEffectiveSectorOrCategoryContent(content)
    const title: string = String(effective.title ?? '')
    const description: string = String(effective.description ?? '')
    const metaTitle: string = String(effective.metaTitle ?? effective.meta_title ?? '')
    const metaDescription: string = String(effective.metaDescription ?? effective.meta_description ?? '')
    const introRaw: unknown = effective.intro

    let introDoc: StoryblokRichtextNode | null = null
    if (introRaw != null && typeof introRaw === 'object' && 'type' in (introRaw as Record<string, unknown>)) {
      const intro = introRaw as StoryblokRichtextNode
      introDoc = intro.type === 'doc' ? intro : ({ type: 'doc', content: [intro] } as StoryblokRichtextNode)
    }
    const introTexts: string[] = introDoc ? extractRichtextTexts(introDoc) : []
    const metaUserMessage: string = JSON.stringify({ title, description, metaTitle, metaDescription })

    const sectorFilesToPush: PutGitHubFilesItem[] = []
    for (const locale of locales) {
      const { content: metaRaw }: { content: string } = await mistralGenerate({
        apiKey: mistralApiKey,
        model: TranslationService.MODEL,
        systemInstruction: getSectorPageSystemInstruction(locale),
        userMessage: metaUserMessage,
        temperature: 0.3,
        maxTokens: 2000,
      })
      let translatedMeta: { title: string; description: string; metaTitle: string; metaDescription: string }
      try {
        const parsed: Record<string, unknown> = JSON.parse(metaRaw) as Record<string, unknown>
        translatedMeta = {
          title: String(parsed.title ?? ''),
          description: String(parsed.description ?? ''),
          metaTitle: String(parsed.metaTitle ?? ''),
          metaDescription: String(parsed.metaDescription ?? ''),
        }
      } catch {
        throw createError({
          statusCode: 502,
          statusMessage: `Mistral returned invalid JSON for sector translation (${locale}).`,
        })
      }

      let translatedIntro: TranslatedSectorFields['intro'] | undefined
      if (introDoc && introTexts.length > 0) {
        const translatedIntroTexts: string[] = await translateTextSegments({
          apiKey: mistralApiKey,
          model: TranslationService.MODEL,
          targetLanguage: TranslationService.getTargetLanguage(locale),
          texts: introTexts,
          errorLabel: `sector intro (${locale})`,
        })
        const clone: StoryblokRichtextNode = JSON.parse(JSON.stringify(introDoc)) as StoryblokRichtextNode
        injectRichtextTranslations(clone, translatedIntroTexts)
        translatedIntro = { type: clone.type, content: clone.content }
      }

      const translated: TranslatedSectorFields = { ...translatedMeta, intro: translatedIntro }
      const filePath: string = `${TranslationService.FILES_PATH}/sectors.${locale}.json`
      const current: SectorsTranslationFile = await TranslationService.readTranslationFile<TranslatedSectorFields>(
        githubToken,
        githubRepo,
        filePath,
      )
      const updated: SectorsTranslationFile = { ...current, [fullSlug]: translated }
      sectorFilesToPush.push({ path: filePath, content: JSON.stringify(updated, null, 2) })
    }

    const sectorPutRes: PutGitHubFilesResult = await putGitHubFiles({
      token: githubToken,
      repo: githubRepo,
      message: `chore(translations): update sector ${fullSlug} → ${locales.join(' + ').toUpperCase()}`,
      files: sectorFilesToPush,
    })
    if (!sectorPutRes.ok) {
      throw createError({ statusCode: 502, statusMessage: sectorPutRes.message || 'Failed to push to GitHub' })
    }
    const sectorLocaleLabel: string = locales.length === 2 ? 'EN et ES' : locales[0] === 'en' ? 'EN' : 'ES'
    return { ok: true, message: `Secteur ${fullSlug} traduit en ${sectorLocaleLabel}.` }
  }

  // ——— category ———
  if (entityType === 'category') {
    const { content } = await TranslationService.fetchPublishedStory(storyblokToken, fullSlug)
    const effective: Record<string, unknown> = getEffectiveSectorOrCategoryContent(content)
    const title: string = String(effective.title ?? '')
    const description: string = String(effective.description ?? '')
    const metaTitle: string = String(effective.metaTitle ?? effective.meta_title ?? '')
    const metaDescription: string = String(effective.metaDescription ?? effective.meta_description ?? '')
    const introRaw: unknown = effective.intro

    let introDoc: StoryblokRichtextNode | null = null
    if (introRaw != null && typeof introRaw === 'object' && 'type' in (introRaw as Record<string, unknown>)) {
      const intro = introRaw as StoryblokRichtextNode
      introDoc = intro.type === 'doc' ? intro : ({ type: 'doc', content: [intro] } as StoryblokRichtextNode)
    }
    const introTexts: string[] = introDoc ? extractRichtextTexts(introDoc) : []
    const metaUserMessage: string = JSON.stringify({ title, description, metaTitle, metaDescription })

    const categoryFilesToPush: PutGitHubFilesItem[] = []
    for (const locale of locales) {
      const { content: metaRaw }: { content: string } = await mistralGenerate({
        apiKey: mistralApiKey,
        model: TranslationService.MODEL,
        systemInstruction: getCategoryPageSystemInstruction(locale),
        userMessage: metaUserMessage,
        temperature: 0.3,
        maxTokens: 2000,
      })
      let translatedMeta: { title: string; description: string; metaTitle: string; metaDescription: string }
      try {
        const parsed: Record<string, unknown> = JSON.parse(metaRaw) as Record<string, unknown>
        translatedMeta = {
          title: String(parsed.title ?? ''),
          description: String(parsed.description ?? ''),
          metaTitle: String(parsed.metaTitle ?? ''),
          metaDescription: String(parsed.metaDescription ?? ''),
        }
      } catch {
        throw createError({
          statusCode: 502,
          statusMessage: `Mistral returned invalid JSON for category translation (${locale}).`,
        })
      }

      let translatedIntro: TranslatedCategoryFields['intro'] | undefined
      if (introDoc && introTexts.length > 0) {
        const translatedIntroTexts: string[] = await translateTextSegments({
          apiKey: mistralApiKey,
          model: TranslationService.MODEL,
          targetLanguage: TranslationService.getTargetLanguage(locale),
          texts: introTexts,
          errorLabel: `category intro (${locale})`,
        })
        const clone: StoryblokRichtextNode = JSON.parse(JSON.stringify(introDoc)) as StoryblokRichtextNode
        injectRichtextTranslations(clone, translatedIntroTexts)
        translatedIntro = { type: clone.type, content: clone.content }
      }

      const translated: TranslatedCategoryFields = { ...translatedMeta, intro: translatedIntro }
      const filePath: string = `${TranslationService.FILES_PATH}/categories.${locale}.json`
      const current: CategoriesTranslationFile = await TranslationService.readTranslationFile<TranslatedCategoryFields>(
        githubToken,
        githubRepo,
        filePath,
      )
      const updated: CategoriesTranslationFile = { ...current, [fullSlug]: translated }
      categoryFilesToPush.push({ path: filePath, content: JSON.stringify(updated, null, 2) })
    }

    const categoryPutRes: PutGitHubFilesResult = await putGitHubFiles({
      token: githubToken,
      repo: githubRepo,
      message: `chore(translations): update category ${fullSlug} → ${locales.join(' + ').toUpperCase()}`,
      files: categoryFilesToPush,
    })
    if (!categoryPutRes.ok) {
      throw createError({ statusCode: 502, statusMessage: categoryPutRes.message || 'Failed to push to GitHub' })
    }
    const categoryLocaleLabel: string = locales.length === 2 ? 'EN et ES' : locales[0] === 'en' ? 'EN' : 'ES'
    return { ok: true, message: `Catégorie ${fullSlug} traduite en ${categoryLocaleLabel}.` }
  }

  throw createError({ statusCode: 400, statusMessage: 'Unsupported entityType.' })
})
