import type {
  ArticleTranslationLocale,
  DibodevArticle,
  DibodevArticleTranslation,
  DibodevLocalizedArticle,
} from '~/core/types/DibodevArticle'
import type { StoryblokArticleContent } from '~/services/types/storyblokArticle'
import type { StoryblokStoriesResponse, StoryblokStoryResponse, StoryblokVersion } from '~/services/types/storyblok'
import { StoryblokService } from '~/services/storyblokService'
import { mapStoryblokArticleToDibodevArticle } from '~/services/storyblokArticleMapper'

const BLOG_FOLDER: string = 'blog/'
const ARTICLES_PER_PAGE: number = 12
const ARTICLE_TRANSLATION_LOCALES: ArticleTranslationLocale[] = ['en', 'es']

export type StoryblokArticleListParams = {
  page?: number
  perPage?: number
  language?: string
}

/**
 * Service for fetching blog articles from Storyblok.
 *
 * Uses StoryblokService under the hood with blog-specific parameters.
 * Supports draft/published via Storyblok editor bridge (_storyblok query).
 */
export class StoryblokArticleService {
  /**
   * Fetch a single article by slug.
   */
  public static async getArticleBySlug(
    slug: string,
    version: StoryblokVersion = 'published',
    language?: string,
  ): Promise<StoryblokStoryResponse<StoryblokArticleContent>> {
    const storyblokSlug: string = slug.startsWith(BLOG_FOLDER) ? slug : `${BLOG_FOLDER}${slug}`
    return StoryblokService.getStoryBySlug<StoryblokArticleContent>(storyblokSlug, version, language)
  }

  /**
   * Loads the EN or ES translations of every article, or null when they cannot be trusted (unreadable or empty file).
   *
   * @param {ArticleTranslationLocale} locale - Target locale.
   * @returns {Promise<Record<string, DibodevArticleTranslation> | null>} Translations keyed by full slug, or null when unknown.
   */
  public static async getArticleTranslations(
    locale: ArticleTranslationLocale,
  ): Promise<Record<string, DibodevArticleTranslation> | null> {
    const translations: Record<string, DibodevArticleTranslation> | null = await $fetch<
      Record<string, DibodevArticleTranslation>
    >(`/api/translations/articles/${locale}`).catch((): null => null)
    // The endpoint answers {} when GitHub cannot be read: an empty file means "unknown", never "nothing is translated".
    return translations && Object.keys(translations).length > 0 ? translations : null
  }

  /**
   * Fetches an article (always FR in Storyblok), overlays its EN/ES translation and lists the locales still missing one.
   *
   * @param {string} slug - Article slug, without the blog folder prefix.
   * @param {StoryblokVersion} version - "published", or "draft" inside the Storyblok visual editor.
   * @param {string} locale - Active i18n locale.
   * @param {string} [language] - Storyblok language code, omitted for the default language.
   * @returns {Promise<DibodevLocalizedArticle | null>} The article in the requested locale, or null when Storyblok cannot return it.
   */
  public static async getLocalizedArticle(
    slug: string,
    version: StoryblokVersion,
    locale: string,
    language?: string,
  ): Promise<DibodevLocalizedArticle | null> {
    try {
      const storyResponse: StoryblokStoryResponse<StoryblokArticleContent> = await this.getArticleBySlug(
        slug,
        version,
        language,
      )
      const article: DibodevArticle = mapStoryblokArticleToDibodevArticle(storyResponse.story)
      const fullSlug: string = `${BLOG_FOLDER}${slug}`
      const [englishTranslations, spanishTranslations]: [
        Record<string, DibodevArticleTranslation> | null,
        Record<string, DibodevArticleTranslation> | null,
      ] = await Promise.all([this.getArticleTranslations('en'), this.getArticleTranslations('es')])
      const translationsByLocale: Record<ArticleTranslationLocale, Record<string, DibodevArticleTranslation> | null> = {
        en: englishTranslations,
        es: spanishTranslations,
      }
      const localesWithoutTranslation: ArticleTranslationLocale[] = ARTICLE_TRANSLATION_LOCALES.filter(
        (translationLocale: ArticleTranslationLocale): boolean => {
          const translations: Record<string, DibodevArticleTranslation> | null = translationsByLocale[translationLocale]
          return translations !== null && !(fullSlug in translations)
        },
      )
      const translation: DibodevArticleTranslation | undefined =
        locale === 'en' || locale === 'es' ? translationsByLocale[locale]?.[fullSlug] : undefined
      if (!translation) return { article, localesWithoutTranslation }

      return {
        article: {
          ...article,
          title: translation.title,
          excerpt: translation.excerpt,
          content: translation.content,
          metaTitle: translation.metaTitle,
          metaDescription: translation.metaDescription,
          tags: translation.tags,
        },
        localesWithoutTranslation,
      }
    } catch {
      return null
    }
  }

  /**
   * Fetch a paginated list of articles, sorted by date (newest first).
   */
  public static async getArticles(
    params: StoryblokArticleListParams = {},
  ): Promise<StoryblokStoriesResponse<StoryblokArticleContent>> {
    const { page = 1, perPage = ARTICLES_PER_PAGE, language } = params

    const queryParams: Record<string, string | number> = {
      starts_with: BLOG_FOLDER,
      per_page: perPage,
      page,
      sort_by: 'content.date:desc',
    }

    return StoryblokService.getStories<StoryblokArticleContent>(queryParams, language)
  }
}
