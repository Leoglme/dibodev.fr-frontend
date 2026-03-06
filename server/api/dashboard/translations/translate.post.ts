import type { H3Event } from 'h3'
import { createError, readBody } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { getGitHubFile, putGitHubFile, type GetFileResult, type PutFileResult } from '~~/server/utils/githubContent'
import { mistralGenerate } from '~~/server/utils/mistral'
import { extractRichtextTexts, injectRichtextTranslations } from '~~/server/utils/translationsRichtext'
import type {
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

type StoryblokStoryResponse<T> = { story?: { content?: T; full_slug?: string } }

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

async function fetchStoryBySlug(token: string, fullSlug: string): Promise<Record<string, unknown>> {
  const url: string = `${STORYBLOK_CDN_BASE}/stories/${encodeURIComponent(fullSlug)}?token=${token}&version=published`
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
  return content
}

const PROJECT_SYSTEM_EN: string = `You are a professional translator. Translate the following French project fields to English. 
Return ONLY a valid JSON object with these exact keys: name, shortDescription, longDescription, metaTitle, metaDescription, categories, stack, tags.
Each of categories, stack, tags must be a JSON array of strings. Preserve tone and terminology (tech, marketing).`

const PROJECT_SYSTEM_ES: string = `You are a professional translator. Translate the following French project fields to Spanish. 
Return ONLY a valid JSON object with these exact keys: name, shortDescription, longDescription, metaTitle, metaDescription, categories, stack, tags.
Each of categories, stack, tags must be a JSON array of strings. Preserve tone and terminology (tech, marketing).`

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
      statusMessage: 'GITHUB_TOKEN and GITHUB_REPO must be set.',
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
  const { entityType, slug: fullSlug, targetLocale }: TranslateBody = body as TranslateBody
  if (
    !entityType ||
    !fullSlug ||
    !targetLocale ||
    (entityType !== 'project' && entityType !== 'article') ||
    (targetLocale !== 'en' && targetLocale !== 'es')
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid body: entityType, slug and targetLocale (en|es) required.',
    })
  }

  const content: Record<string, unknown> = await fetchStoryBySlug(storyblokToken, fullSlug)

  if (entityType === 'project') {
    const effective: Record<string, unknown> = getEffectiveProjectContent(content)
    const name: string = String(effective.name ?? '')
    const shortDescription: string = String(effective.shortDescription ?? '')
    const longDescription: string = String(effective.longDescription ?? '')
    const metaTitle: string = String(effective.metaTitle ?? '')
    const metaDescription: string = String(effective.metaDescription ?? '')
    const categories: string[] = normalizeStringList(effective.categories as string[] | string)
    const stack: string[] = normalizeStringList(effective.stack as string[] | string)
    const tags: string[] = normalizeStringList(effective.tags as string[] | string)

    const userMessage: string = JSON.stringify({
      name,
      shortDescription,
      longDescription,
      metaTitle,
      metaDescription,
      categories,
      stack,
      tags,
    })

    const { content: raw }: { content: string } = await mistralGenerate({
      apiKey: mistralApiKey,
      systemInstruction: getProjectSystemInstruction(targetLocale),
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
        stack: Array.isArray(parsed.stack) ? (parsed.stack as string[]).map(String) : [],
        tags: Array.isArray(parsed.tags) ? (parsed.tags as string[]).map(String) : [],
      }
    } catch {
      throw createError({
        statusCode: 502,
        statusMessage: 'Mistral returned invalid JSON for project translation.',
      })
    }

    const filePath: string = `${TRANSLATIONS_PATH}/projects.${targetLocale}.json`
    const existing: import('~~/server/utils/githubContent').GetFileResult = await getGitHubFile(
      githubToken,
      githubRepo,
      filePath,
    )
    const current: ProjectsTranslationFile = existing.ok
      ? (JSON.parse(existing.content) as ProjectsTranslationFile)
      : {}
    const updated: ProjectsTranslationFile = { ...current, [fullSlug]: translated }
    const contentStr: string = JSON.stringify(updated, null, 2)
    const putRes: PutFileResult = await putGitHubFile({
      token: githubToken,
      repo: githubRepo,
      path: filePath,
      content: contentStr,
      message: `chore(translations): update project ${fullSlug} → ${targetLocale}`,
      sha: existing.ok ? existing.sha : undefined,
    })
    if (!putRes.ok) {
      throw createError({
        statusCode: 502,
        statusMessage: putRes.message || 'Failed to push to GitHub',
      })
    }
    return { ok: true, message: `Projet ${fullSlug} traduit en ${targetLocale}.` }
  }

  // entityType === 'article'
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

  const metaUserMessage: string = JSON.stringify({
    title,
    excerpt,
    metaTitle,
    metaDescription,
    tags,
  })
  const { content: metaRaw } = await mistralGenerate({
    apiKey: mistralApiKey,
    systemInstruction: getArticleMetaSystemInstruction(targetLocale),
    userMessage: metaUserMessage,
    temperature: 0.3,
    maxTokens: 2000,
  })

  type TranslatedArticleMeta = {
    title: string
    excerpt: string
    metaTitle: string
    metaDescription: string
    tags: string[]
  }
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
      statusMessage: 'Mistral returned invalid JSON for article metadata.',
    })
  }

  let translatedContentTexts: string[] = []
  if (contentTexts.length > 0) {
    const contentUserMessage = JSON.stringify({ texts: contentTexts })
    const { content: contentRaw } = await mistralGenerate({
      apiKey: mistralApiKey,
      systemInstruction: getArticleContentSystemInstruction(targetLocale),
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
        statusMessage: 'Mistral returned invalid JSON for article content.',
      })
    }
  }

  let translatedRichtext: { type: string; content?: StoryblokRichtextNode[] }
  if (richtext) {
    const clone = JSON.parse(JSON.stringify(richtext)) as StoryblokRichtextNode
    injectRichtextTranslations(clone, translatedContentTexts)
    translatedRichtext = { type: clone.type, content: clone.content }
  } else {
    translatedRichtext = { type: 'doc', content: [] }
  }

  const translatedArticle: TranslatedArticleFields = {
    ...translatedMeta,
    content: translatedRichtext,
  }

  const filePath: string = `${TRANSLATIONS_PATH}/articles.${targetLocale}.json`
  const existing: GetFileResult = await getGitHubFile(githubToken, githubRepo, filePath)
  const current: ArticlesTranslationFile = existing.ok ? (JSON.parse(existing.content) as ArticlesTranslationFile) : {}
  const updated: ArticlesTranslationFile = { ...current, [fullSlug]: translatedArticle }
  const contentStr: string = JSON.stringify(updated, null, 2)
  const putRes: PutFileResult = await putGitHubFile({
    token: githubToken,
    repo: githubRepo,
    path: filePath,
    content: contentStr,
    message: `chore(translations): update article ${fullSlug} → ${targetLocale}`,
    sha: existing.ok ? existing.sha : undefined,
  })
  if (!putRes.ok) {
    throw createError({
      statusCode: 502,
      statusMessage: putRes.message || 'Failed to push to GitHub',
    })
  }
  return { ok: true, message: `Article ${fullSlug} traduit en ${targetLocale}.` }
})
