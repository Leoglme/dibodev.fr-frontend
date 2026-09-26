import type { DibodevArticle, DibodevArticleTranslation } from '~/core/types/DibodevArticle'
import type { StoryblokArticleContent } from '~/services/types/storyblokArticle'
import type { StoryblokStoriesResponse, StoryblokStoryResponse, StoryblokVersion } from '~/services/types/storyblok'
import { StoryblokService } from '~/services/storyblokService'
import { mapStoryblokArticleToDibodevArticle } from '~/services/storyblokArticleMapper'

const BLOG_FOLDER: string = 'blog/'
const ARTICLES_PER_PAGE: number = 12

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
   * Fetches an article (always FR in Storyblok) and overlays its EN/ES translation from the dashboard JSON.
   *
   * @param {string} slug - Article slug, without the blog folder prefix.
   * @param {StoryblokVersion} version - "published", or "draft" inside the Storyblok visual editor.
   * @param {string} locale - Active i18n locale.
   * @param {string} [language] - Storyblok language code, omitted for the default language.
   * @returns {Promise<DibodevArticle | null>} The article in the requested locale, or null when Storyblok cannot return it.
   */
  public static async getLocalizedArticle(
    slug: string,
    version: StoryblokVersion,
    locale: string,
    language?: string,
  ): Promise<DibodevArticle | null> {
    try {
      const storyResponse: StoryblokStoryResponse<StoryblokArticleContent> = await this.getArticleBySlug(
        slug,
        version,
        language,
      )
      const article: DibodevArticle = mapStoryblokArticleToDibodevArticle(storyResponse.story)
      if (locale !== 'en' && locale !== 'es') return article

      const translations: Record<string, DibodevArticleTranslation> = await $fetch<
        Record<string, DibodevArticleTranslation>
      >(`/api/translations/articles/${locale}`).catch(() => ({}))
      const translation: DibodevArticleTranslation | undefined = translations[`${BLOG_FOLDER}${slug}`]
      if (!translation) return article

      return {
        ...article,
        title: translation.title,
        excerpt: translation.excerpt,
        content: translation.content,
        metaTitle: translation.metaTitle,
        metaDescription: translation.metaDescription,
        tags: translation.tags,
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
