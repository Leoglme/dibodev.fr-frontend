import { createError } from 'h3'
import { putGitHubFiles, readGitHubJsonFile } from '~~/server/utils/githubContent'
import type { PutGitHubFilesItem, PutGitHubFilesResult } from '~~/server/utils/githubContent'
import { mistralGenerate } from '~~/server/utils/mistral'
import { extractRichtextTexts, injectRichtextTranslations } from '~~/server/utils/translationsRichtext'
import { translateTextSegments } from '~~/server/utils/translateTextSegments'
import type { TranslationTargetLanguage } from '~~/server/utils/translateTextSegments'
import type {
  ArticlesTranslationFile,
  PublishedStory,
  StoryblokRichtextNode,
  StoryblokStoryResponse,
  TranslateArticlesParams,
  TranslatedArticleFields,
  TranslatedArticleMeta,
  TranslationTargetLocale,
} from '~~/server/types/dashboard/translations'

const STORYBLOK_CDN_BASE: string = 'https://api.storyblok.com/v2/cdn'
/** A story published a few seconds ago can be missing from the CDN for a short while. */
const STORY_FETCH_ATTEMPTS: number = 3
const STORY_FETCH_RETRY_DELAY_MS: number = 3000

const ARTICLE_META_SYSTEM_INSTRUCTIONS: Record<TranslationTargetLocale, string> = {
  en: `You are a professional translator. Translate the following French article metadata to English.
Return ONLY a valid JSON object with these exact keys: title, excerpt, metaTitle, metaDescription, tags.
tags must be a JSON array of strings. Preserve tone.`,
  es: `You are a professional translator. Translate the following French article metadata to Spanish.
Return ONLY a valid JSON object with these exact keys: title, excerpt, metaTitle, metaDescription, tags.
tags must be a JSON array of strings. Preserve tone.`,
}

const TARGET_LANGUAGES: Record<TranslationTargetLocale, TranslationTargetLanguage> = {
  en: 'English',
  es: 'Spanish',
}

/**
 * Translation of the French Storyblok content to English and Spanish with Mistral, stored in content/translations on GitHub.
 */
export class TranslationService {
  /** Free-tier model with a high token-per-minute allowance (937k), well above mistral-small's throttled 20k. */
  static readonly MODEL: string = 'ministral-14b-latest'

  static readonly FILES_PATH: string = 'content/translations'

  /**
   * Returns the language name the segment translator expects for a target locale.
   * @param {TranslationTargetLocale} locale - The target locale (en or es).
   * @returns {TranslationTargetLanguage} The language name.
   */
  static getTargetLanguage(locale: TranslationTargetLocale): TranslationTargetLanguage {
    return TARGET_LANGUAGES[locale]
  }

  /**
   * Turns a Storyblok list field (array, or comma / line separated text) into a clean list of strings.
   * @param {string[] | string | undefined} value - The raw field value.
   * @returns {string[]} The trimmed, non-empty values.
   */
  static normalizeStringList(value: string[] | string | undefined): string[] {
    if (Array.isArray(value)) {
      return value.map((item: string): string => String(item).trim()).filter((item: string): boolean => item.length > 0)
    }
    if (typeof value === 'string') {
      return value
        .split(/[\n,]+/g)
        .map((item: string): string => item.trim())
        .filter((item: string): boolean => item.length > 0)
    }
    return []
  }

  /**
   * Fetches the published version of a story from the Storyblok CDN, retrying while a fresh story is not there yet.
   * @param {string} token - Storyblok delivery token.
   * @param {string} fullSlug - Full slug of the story (e.g. blog/my-article).
   * @param {string} [resolveRelations] - Relations to resolve (Storyblok `resolve_relations` value).
   * @returns {Promise<PublishedStory>} The story content and the full slug of each resolved relation.
   * @throws {H3Error} 502 when the story stays unavailable or has no content.
   */
  static async fetchPublishedStory(
    token: string,
    fullSlug: string,
    resolveRelations?: string,
  ): Promise<PublishedStory> {
    let url: string = `${STORYBLOK_CDN_BASE}/stories/${encodeURIComponent(fullSlug)}?token=${token}&version=published`
    if (resolveRelations) {
      url += `&resolve_relations=${encodeURIComponent(resolveRelations)}`
    }

    let response: Response = await fetch(url)
    for (let attempt: number = 1; !response.ok && attempt < STORY_FETCH_ATTEMPTS; attempt++) {
      await this.wait(STORY_FETCH_RETRY_DELAY_MS)
      response = await fetch(url)
    }
    if (!response.ok) {
      throw createError({ statusCode: 502, statusMessage: `Storyblok story not found: ${fullSlug}` })
    }

    const data: StoryblokStoryResponse<Record<string, unknown>> = (await response.json()) as StoryblokStoryResponse<
      Record<string, unknown>
    >
    const content: Record<string, unknown> | undefined = data.story?.content
    if (!content || typeof content !== 'object') {
      throw createError({ statusCode: 502, statusMessage: 'Invalid story content' })
    }
    return { content, relsSlugMap: this.buildRelsSlugMap(data.rels) }
  }

  /**
   * Translates published articles into the given locales and pushes the translation files in a single commit.
   * @param {TranslateArticlesParams} params - Article full slugs, target locales and the Storyblok, Mistral and GitHub credentials.
   * @returns {Promise<void>} Resolves once the translation files are pushed.
   * @throws {H3Error} 502 when Storyblok, Mistral or GitHub fails: nothing is pushed then.
   */
  static async translateArticles(params: TranslateArticlesParams): Promise<void> {
    const translationsByLocale: Partial<Record<TranslationTargetLocale, ArticlesTranslationFile>> = {}
    for (const fullSlug of params.fullSlugs) {
      const { content }: PublishedStory = await this.fetchPublishedStory(params.storyblokToken, fullSlug)
      for (const locale of params.locales) {
        const translatedArticle: TranslatedArticleFields = await this.translateArticle(
          content,
          locale,
          params.mistralApiKey,
        )
        translationsByLocale[locale] = { ...translationsByLocale[locale], [fullSlug]: translatedArticle }
      }
    }

    const files: PutGitHubFilesItem[] = []
    for (const locale of params.locales) {
      const path: string = `${this.FILES_PATH}/articles.${locale}.json`
      const current: ArticlesTranslationFile = await readGitHubJsonFile<TranslatedArticleFields>(
        params.githubToken,
        params.githubRepo,
        path,
      )
      const updated: ArticlesTranslationFile = { ...current, ...translationsByLocale[locale] }
      files.push({ path, content: JSON.stringify(updated, null, 2) })
    }

    const articlesLabel: string =
      params.fullSlugs.length === 1 ? `article ${params.fullSlugs[0]}` : `articles ${params.fullSlugs.join(', ')}`
    const message: string = `chore(translations): update ${articlesLabel} → ${params.locales.join(' + ').toUpperCase()}`

    const pushResult: PutGitHubFilesResult = await putGitHubFiles({
      token: params.githubToken,
      repo: params.githubRepo,
      message,
      files,
    })
    if (!pushResult.ok) {
      throw createError({ statusCode: 502, statusMessage: pushResult.message || 'Failed to push to GitHub' })
    }
  }

  /**
   * Translates one article (metadata and richtext body) into a locale.
   * @param {Record<string, unknown>} content - The French story content.
   * @param {TranslationTargetLocale} locale - The target locale.
   * @param {string} mistralApiKey - Mistral API key.
   * @returns {Promise<TranslatedArticleFields>} The translated article, with the same richtext structure as the source.
   * @throws {H3Error} 502 when Mistral returns invalid metadata or leaves a text segment untranslated.
   */
  private static async translateArticle(
    content: Record<string, unknown>,
    locale: TranslationTargetLocale,
    mistralApiKey: string,
  ): Promise<TranslatedArticleFields> {
    const richtext: StoryblokRichtextNode | undefined = content.content as StoryblokRichtextNode | undefined
    const meta: TranslatedArticleMeta = await this.translateArticleMeta(content, locale, mistralApiKey)

    const translatedTexts: string[] = await translateTextSegments({
      apiKey: mistralApiKey,
      model: this.MODEL,
      targetLanguage: this.getTargetLanguage(locale),
      texts: richtext ? extractRichtextTexts(richtext) : [],
      errorLabel: `article content (${locale})`,
    })

    if (!richtext) {
      return { ...meta, content: { type: 'doc', content: [] } }
    }
    const translatedRichtext: StoryblokRichtextNode = JSON.parse(JSON.stringify(richtext)) as StoryblokRichtextNode
    injectRichtextTranslations(translatedRichtext, translatedTexts)
    return { ...meta, content: { type: translatedRichtext.type, content: translatedRichtext.content } }
  }

  /**
   * Translates the title, excerpt, meta tags and tags of an article into a locale.
   * @param {Record<string, unknown>} content - The French story content.
   * @param {TranslationTargetLocale} locale - The target locale.
   * @param {string} mistralApiKey - Mistral API key.
   * @returns {Promise<TranslatedArticleMeta>} The translated metadata.
   * @throws {H3Error} 502 when Mistral does not return valid JSON.
   */
  private static async translateArticleMeta(
    content: Record<string, unknown>,
    locale: TranslationTargetLocale,
    mistralApiKey: string,
  ): Promise<TranslatedArticleMeta> {
    const seo: { metaTitle?: string; metaDescription?: string } | undefined = content.seo as
      | { metaTitle?: string; metaDescription?: string }
      | undefined
    const source: TranslatedArticleMeta = {
      title: String(content.title ?? ''),
      excerpt: String(content.excerpt ?? ''),
      metaTitle: String(content.metaTitle ?? seo?.metaTitle ?? ''),
      metaDescription: String(content.metaDescription ?? seo?.metaDescription ?? ''),
      tags: this.normalizeStringList(content.tags as string[] | string),
    }

    const { content: answer }: { content: string } = await mistralGenerate({
      apiKey: mistralApiKey,
      model: this.MODEL,
      systemInstruction: ARTICLE_META_SYSTEM_INSTRUCTIONS[locale],
      userMessage: JSON.stringify(source),
      temperature: 0.3,
      maxTokens: 2000,
    })
    try {
      const parsed: Record<string, unknown> = JSON.parse(answer) as Record<string, unknown>
      return {
        title: String(parsed.title ?? ''),
        excerpt: String(parsed.excerpt ?? ''),
        metaTitle: String(parsed.metaTitle ?? ''),
        metaDescription: String(parsed.metaDescription ?? ''),
        tags: Array.isArray(parsed.tags) ? (parsed.tags as unknown[]).map(String) : [],
      }
    } catch {
      throw createError({
        statusCode: 502,
        statusMessage: `Mistral returned invalid JSON for article metadata (${locale}).`,
      })
    }
  }

  /**
   * Waits for the given number of milliseconds.
   * @param {number} milliseconds - How long to wait.
   * @returns {Promise<void>} Resolves once the delay has elapsed.
   */
  private static wait(milliseconds: number): Promise<void> {
    return new Promise((resolve: (value: void) => void): void => {
      setTimeout(resolve, milliseconds)
    })
  }

  /**
   * Maps each resolved relation uuid to its full slug.
   * @param {StoryblokStoryResponse<unknown>['rels']} rels - Relations returned by the CDN.
   * @returns {Record<string, string>} Full slug by uuid.
   */
  private static buildRelsSlugMap(rels: StoryblokStoryResponse<unknown>['rels']): Record<string, string> {
    const map: Record<string, string> = {}
    for (const relation of rels ?? []) {
      if (relation?.uuid && typeof relation.full_slug === 'string') {
        map[relation.uuid] = relation.full_slug
      }
    }
    return map
  }
}
