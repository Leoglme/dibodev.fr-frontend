import type { StoryblokArticleContent } from '~/services/types/storyblokArticle'
import type { StoryblokStoriesResponse, StoryblokStoryResponse, StoryblokVersion } from '~/services/types/storyblok'
import { StoryblokService } from '~/services/storyblokService'

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
