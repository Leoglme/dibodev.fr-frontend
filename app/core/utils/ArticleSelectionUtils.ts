import type { DibodevArticle } from '~/core/types/DibodevArticle'
import {
  DEFAULT_PROJECT_RELATED_ARTICLE_SLUGS,
  PROJECT_RELATED_ARTICLES_COUNT,
  RELATED_ARTICLE_SLUGS_BY_PROJECT_SLUG,
} from '~/core/constants/projectRelatedArticles'

/**
 * Picks hand-chosen blog articles for a page from a list of slugs.
 */
export class ArticleSelectionUtils {
  /**
   * Articles whose slug is in the list, in the order of the list; a slug without a published article in this locale is skipped.
   * @param {DibodevArticle[]} articles - Published articles in the current locale.
   * @param {string[]} slugs - Slugs of the wanted articles, in display order.
   * @param {number} limit - Maximum number of articles returned.
   * @returns {DibodevArticle[]} The articles found, empty when none is published.
   */
  public static selectBySlugs(
    articles: DibodevArticle[],
    slugs: string[],
    limit: number = slugs.length,
  ): DibodevArticle[] {
    return slugs
      .map((slug: string): DibodevArticle | undefined =>
        articles.find((article: DibodevArticle): boolean => article.slug === slug),
      )
      .filter((article: DibodevArticle | undefined): article is DibodevArticle => article !== undefined)
      .slice(0, limit)
  }

  /**
   * Articles listed under a project page: the ones chosen for the project, or the default ones for a project without a list.
   * @param {DibodevArticle[]} articles - Published articles in the current locale.
   * @param {string} projectSlug - Route slug of the project (e.g. "driving-school").
   * @returns {DibodevArticle[]} The articles to list.
   */
  public static selectForProject(articles: DibodevArticle[], projectSlug: string): DibodevArticle[] {
    const slugs: string[] = RELATED_ARTICLE_SLUGS_BY_PROJECT_SLUG[projectSlug] ?? DEFAULT_PROJECT_RELATED_ARTICLE_SLUGS
    return this.selectBySlugs(articles, slugs, PROJECT_RELATED_ARTICLES_COUNT)
  }
}
