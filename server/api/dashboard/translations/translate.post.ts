import type { H3Event } from 'h3'
import { createError, readBody } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import {
  getGitHubFile,
  putGitHubFile,
  putGitHubFiles,
  type GetFileResult,
  type PutFileResult,
  type PutGitHubFilesItem,
} from '~~/server/utils/githubContent'
import { mistralGenerate } from '~~/server/utils/mistral'
import { extractRichtextTexts, injectRichtextTranslations } from '~~/server/utils/translationsRichtext'
import { richtextToMarkdown } from '~~/server/utils/richtextToMarkdown'
import type {
  TranslatableEntityType,
  TranslateBody,
  TranslateResponse,
  TranslationTargetLocale,
  TranslatedProjectFields,
  TranslatedArticleFields,
  ProjectsTranslationFile,
  ArticlesTranslationFile,
  StoryblokRichtextNode,
} from '~~/server/types/dashboard/translations'

const STORYBLOK_CDN_BASE: string = 'https://api.storyblok.com/v2/cdn'
const TRANSLATIONS_PATH: string = 'content/translations'

type StoryblokStoryResponse<T> = {
  story?: { content?: T; full_slug?: string }
  rels?: Array<{ uuid?: string; full_slug?: string }>
}

function lastSegment(path: string): string | null {
  const trimmed = String(path)
    .replace(/^\/+|\/+$/g, '')
    .trim()
  if (!trimmed) return null
  const parts = trimmed.split('/')
  const last = parts[parts.length - 1]?.trim()
  return last || null
}

function buildRelsSlugMap(rels: StoryblokStoryResponse<unknown>['rels']): Record<string, string> {
  const map: Record<string, string> = {}
  if (!Array.isArray(rels)) return map
  for (const s of rels) {
    if (s?.uuid && typeof s.full_slug === 'string') map[s.uuid] = s.full_slug
  }
  return map
}

function normalizeStringList(value: string[] | string | undefined): string[] {
  if (Array.isArray(value)) {
    return value.map((v: string): string => String(v).trim()).filter((v: string): boolean => v.length > 0)
  }
  if (typeof value === 'string') {
    return value
      .split(/[\n,]+/g)
      .map((v: string): string => v.trim())
      .filter((v: string): boolean => v.length > 0)
  }
  return []
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

async function fetchStoryBySlug(
  token: string,
  fullSlug: string,
  resolveRelations?: string,
): Promise<{ content: Record<string, unknown>; relsSlugMap: Record<string, string> }> {
  let url: string = `${STORYBLOK_CDN_BASE}/stories/${encodeURIComponent(fullSlug)}?token=${token}&version=published`
  if (resolveRelations) {
    url += `&resolve_relations=${encodeURIComponent(resolveRelations)}`
  }
  const res: Response = await fetch(url)
  if (!res.ok) {
    throw createError({
      statusCode: 502,
      statusMessage: `Storyblok story not found: ${fullSlug}`,
    })
  }
  const data: StoryblokStoryResponse<Record<string, unknown>> = (await res.json()) as StoryblokStoryResponse<
    Record<string, unknown>
  >
  const content: Record<string, unknown> | undefined = data.story?.content as Record<string, unknown> | undefined
  if (!content || typeof content !== 'object') {
    throw createError({
      statusCode: 502,
      statusMessage: 'Invalid story content',
    })
  }
  const relsSlugMap: Record<string, string> = buildRelsSlugMap(data.rels)
  return { content, relsSlugMap }
}

const PROJECT_SYSTEM_EN: string = `You are a professional translator. Translate the following French project fields to English. 
Return ONLY a valid JSON object with these exact keys: name, shortDescription, longDescription, metaTitle, metaDescription, categories, sectors, stack, tags.
- longDescription is a Markdown-like formatted string: keep headings as plain lines, preserve blank lines, keep bullet list markers (* ), ordered list markers (1. 2. 3.), and blockquote markers (> ).
- Do NOT wrap longDescription in JSON or additional quotes; keep it as a plain string value.
- categories and sectors must be JSON arrays of slug keys (e.g. site-web, logiciel, gaming). Keep the exact same keys as in the source; do not translate them.
- stack and tags must be JSON arrays of translated strings. Preserve tone and terminology (tech, marketing).`

const PROJECT_SYSTEM_ES: string = `You are a professional translator. Translate the following French project fields to Spanish. 
Return ONLY a valid JSON object with these exact keys: name, shortDescription, longDescription, metaTitle, metaDescription, categories, sectors, stack, tags.
- longDescription is a Markdown-like formatted string: keep headings as plain lines, preserve blank lines, keep bullet list markers (* ), ordered list markers (1. 2. 3.), and blockquote markers (> ).
- Do NOT wrap longDescription in JSON or additional quotes; keep it as a plain string value.
- categories and sectors must be JSON arrays of slug keys (e.g. site-web, logiciel, gaming). Keep the exact same keys as in the source; do not translate them.
- stack and tags must be JSON arrays of translated strings. Preserve tone and terminology (tech, marketing).`

const ARTICLE_META_SYSTEM_EN: string = `You are a professional translator. Translate the following French article metadata to English. 
Return ONLY a valid JSON object with these exact keys: title, excerpt, metaTitle, metaDescription, tags.
tags must be a JSON array of strings. Preserve tone.`

const ARTICLE_META_SYSTEM_ES: string = `You are a professional translator. Translate the following French article metadata to Spanish. 
Return ONLY a valid JSON object with these exact keys: title, excerpt, metaTitle, metaDescription, tags.
tags must be a JSON array of strings. Preserve tone.`

const ARTICLE_CONTENT_SYSTEM_EN: string = `You are a professional translator. You will receive a JSON object with one key "texts": an array of French text segments from a blog article (in order). 
Translate each segment to English. Return ONLY a valid JSON object with one key "texts": an array of the same length, each element the English translation of the corresponding segment. Preserve paragraph order.`

const ARTICLE_CONTENT_SYSTEM_ES: string = `You are a professional translator. You will receive a JSON object with one key "texts": an array of French text segments from a blog article (in order). 
Translate each segment to Spanish. Return ONLY a valid JSON object with one key "texts": an array of the same length, each element the Spanish translation of the corresponding segment. Preserve paragraph order.`

function getProjectSystemInstruction(locale: TranslationTargetLocale): string {
  return locale === 'en' ? PROJECT_SYSTEM_EN : PROJECT_SYSTEM_ES
}

function getArticleMetaSystemInstruction(locale: TranslationTargetLocale): string {
  return locale === 'en' ? ARTICLE_META_SYSTEM_EN : ARTICLE_META_SYSTEM_ES
}

function getArticleContentSystemInstruction(locale: TranslationTargetLocale): string {
  return locale === 'en' ? ARTICLE_CONTENT_SYSTEM_EN : ARTICLE_CONTENT_SYSTEM_ES
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

  if (!entityType || !fullSlug || locales.length === 0 || (entityType !== 'project' && entityType !== 'article')) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid body: entityType, slug and targetLocale (en|es) or targetLocales required.',
    })
  }

  if (entityType === 'project') {
    const { content, relsSlugMap } = await fetchStoryBySlug(
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
    const rawCategories: string[] = normalizeStringList(effective.categories as string[] | string)
    const categories: string[] = rawCategories
      .map((uuidOrKey: string) => {
        const fullSlugFromRels = relsSlugMap[uuidOrKey]
        if (fullSlugFromRels) return lastSegment(fullSlugFromRels) ?? uuidOrKey
        return uuidOrKey
      })
      .filter(Boolean)
    const rawSectors: string[] = normalizeStringList(effective.sectors as string[] | string)
    const sectors: string[] = rawSectors
      .map((uuidOrKey: string) => {
        const fullSlugFromRels = relsSlugMap[uuidOrKey]
        if (fullSlugFromRels) return lastSegment(fullSlugFromRels) ?? uuidOrKey
        return uuidOrKey
      })
      .filter(Boolean)
    const stack: string[] = normalizeStringList(effective.stack as string[] | string)
    const tags: string[] = normalizeStringList(effective.tags as string[] | string)
    const userMessage: string = JSON.stringify({
      name,
      shortDescription,
      longDescription,
      metaTitle,
      metaDescription,
      categories,
      sectors,
      stack,
      tags,
    })

    const filesToPush: PutGitHubFilesItem[] = []
    for (const locale of locales) {
      const { content: raw }: { content: string } = await mistralGenerate({
        apiKey: mistralApiKey,
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
          longDescription: String(parsed.longDescription ?? ''),
          metaTitle: String(parsed.metaTitle ?? ''),
          metaDescription: String(parsed.metaDescription ?? ''),
          categories: Array.isArray(parsed.categories) ? (parsed.categories as string[]).map(String) : [],
          sectors: Array.isArray(parsed.sectors) ? (parsed.sectors as string[]).map(String) : [],
          stack: Array.isArray(parsed.stack) ? (parsed.stack as string[]).map(String) : [],
          tags: Array.isArray(parsed.tags) ? (parsed.tags as string[]).map(String) : [],
        }
      } catch {
        throw createError({
          statusCode: 502,
          statusMessage: `Mistral returned invalid JSON for project translation (${locale}).`,
        })
      }
      const filePath: string = `${TRANSLATIONS_PATH}/projects.${locale}.json`
      const existing: GetFileResult = await getGitHubFile(githubToken, githubRepo, filePath)
      const current: ProjectsTranslationFile = existing.ok
        ? (JSON.parse(existing.content) as ProjectsTranslationFile)
        : {}
      const updated: ProjectsTranslationFile = { ...current, [fullSlug]: translated }
      filesToPush.push({ path: filePath, content: JSON.stringify(updated, null, 2) })
    }

    if (filesToPush.length === 1) {
      const existing: GetFileResult = await getGitHubFile(githubToken, githubRepo, filesToPush[0]!.path)
      const putRes: PutFileResult = await putGitHubFile({
        token: githubToken,
        repo: githubRepo,
        path: filesToPush[0]!.path,
        content: filesToPush[0]!.content,
        message: `chore(translations): update project ${fullSlug} → ${locales[0]}`,
        sha: existing.ok ? existing.sha : undefined,
      })
      if (!putRes.ok) {
        throw createError({ statusCode: 502, statusMessage: putRes.message || 'Failed to push to GitHub' })
      }
    } else {
      const putRes: Awaited<ReturnType<typeof putGitHubFiles>> = await putGitHubFiles({
        token: githubToken,
        repo: githubRepo,
        message: `chore(translations): update project ${fullSlug} → EN + ES`,
        files: filesToPush,
      })
      if (!putRes.ok) {
        throw createError({ statusCode: 502, statusMessage: putRes.message || 'Failed to push to GitHub' })
      }
    }
    const localeLabel: string = locales.length === 2 ? 'EN et ES' : locales[0] === 'en' ? 'EN' : 'ES'
    return { ok: true, message: `Projet ${fullSlug} traduit en ${localeLabel}.` }
  }

  // entityType === 'article'
  const { content } = await fetchStoryBySlug(storyblokToken, fullSlug)
  const seo: { metaTitle?: string; metaDescription?: string } | undefined = content.seo as
    | { metaTitle?: string; metaDescription?: string }
    | undefined
  const title: string = String(content.title ?? '')
  const excerpt: string = String(content.excerpt ?? '')
  const metaTitle: string = String(content.metaTitle ?? seo?.metaTitle ?? '')
  const metaDescription: string = String(content.metaDescription ?? seo?.metaDescription ?? '')
  const tags: string[] = normalizeStringList(content.tags as string[] | string)
  const richtext: { type: string; content?: StoryblokRichtextNode[] } | undefined = content.content as
    | { type: string; content?: StoryblokRichtextNode[] }
    | undefined
  const contentTexts: string[] = richtext ? extractRichtextTexts(richtext as StoryblokRichtextNode) : []
  const metaUserMessage: string = JSON.stringify({ title, excerpt, metaTitle, metaDescription, tags })

  type TranslatedArticleMeta = {
    title: string
    excerpt: string
    metaTitle: string
    metaDescription: string
    tags: string[]
  }

  const articleFilesToPush: PutGitHubFilesItem[] = []
  for (const locale of locales) {
    const { content: metaRaw }: { content: string } = await mistralGenerate({
      apiKey: mistralApiKey,
      systemInstruction: getArticleMetaSystemInstruction(locale),
      userMessage: metaUserMessage,
      temperature: 0.3,
      maxTokens: 2000,
    })
    let translatedMeta: TranslatedArticleMeta
    try {
      const parsed: Record<string, unknown> = JSON.parse(metaRaw) as Record<string, unknown>
      translatedMeta = {
        title: String(parsed.title ?? ''),
        excerpt: String(parsed.excerpt ?? ''),
        metaTitle: String(parsed.metaTitle ?? ''),
        metaDescription: String(parsed.metaDescription ?? ''),
        tags: Array.isArray(parsed.tags) ? (parsed.tags as string[]).map(String) : [],
      }
    } catch {
      throw createError({
        statusCode: 502,
        statusMessage: `Mistral returned invalid JSON for article metadata (${locale}).`,
      })
    }

    let translatedContentTexts: string[] = []
    if (contentTexts.length > 0) {
      const contentUserMessage: string = JSON.stringify({ texts: contentTexts })
      const { content: contentRaw }: { content: string } = await mistralGenerate({
        apiKey: mistralApiKey,
        systemInstruction: getArticleContentSystemInstruction(locale),
        userMessage: contentUserMessage,
        temperature: 0.3,
        maxTokens: 8000,
      })
      try {
        const parsed: { texts?: string[] } = JSON.parse(contentRaw) as { texts?: string[] }
        translatedContentTexts = Array.isArray(parsed.texts) ? parsed.texts.map(String) : []
      } catch {
        throw createError({
          statusCode: 502,
          statusMessage: `Mistral returned invalid JSON for article content (${locale}).`,
        })
      }
    }

    let translatedRichtext: { type: string; content?: StoryblokRichtextNode[] }
    if (richtext) {
      const clone: StoryblokRichtextNode = JSON.parse(JSON.stringify(richtext)) as StoryblokRichtextNode
      injectRichtextTranslations(clone, translatedContentTexts)
      translatedRichtext = { type: clone.type, content: clone.content }
    } else {
      translatedRichtext = { type: 'doc', content: [] }
    }

    const translatedArticle: TranslatedArticleFields = { ...translatedMeta, content: translatedRichtext }
    const filePath: string = `${TRANSLATIONS_PATH}/articles.${locale}.json`
    const existing: GetFileResult = await getGitHubFile(githubToken, githubRepo, filePath)
    const current: ArticlesTranslationFile = existing.ok
      ? (JSON.parse(existing.content) as ArticlesTranslationFile)
      : {}
    const updated: ArticlesTranslationFile = { ...current, [fullSlug]: translatedArticle }
    articleFilesToPush.push({ path: filePath, content: JSON.stringify(updated, null, 2) })
  }

  if (articleFilesToPush.length === 1) {
    const existing: GetFileResult = await getGitHubFile(githubToken, githubRepo, articleFilesToPush[0]!.path)
    const putRes: PutFileResult = await putGitHubFile({
      token: githubToken,
      repo: githubRepo,
      path: articleFilesToPush[0]!.path,
      content: articleFilesToPush[0]!.content,
      message: `chore(translations): update article ${fullSlug} → ${locales[0]}`,
      sha: existing.ok ? existing.sha : undefined,
    })
    if (!putRes.ok) {
      throw createError({ statusCode: 502, statusMessage: putRes.message || 'Failed to push to GitHub' })
    }
  } else {
    const putRes: Awaited<ReturnType<typeof putGitHubFiles>> = await putGitHubFiles({
      token: githubToken,
      repo: githubRepo,
      message: `chore(translations): update article ${fullSlug} → EN + ES`,
      files: articleFilesToPush,
    })
    if (!putRes.ok) {
      throw createError({ statusCode: 502, statusMessage: putRes.message || 'Failed to push to GitHub' })
    }
  }
  const localeLabel: string = locales.length === 2 ? 'EN et ES' : locales[0] === 'en' ? 'EN' : 'ES'
  return { ok: true, message: `Article ${fullSlug} traduit en ${localeLabel}.` }
})
