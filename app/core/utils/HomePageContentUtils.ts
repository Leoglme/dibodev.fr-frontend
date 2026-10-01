import type { HomePageContent } from '~~/server/types/dashboard/homePage'

/**
 * Validates the home page content stored in content/cms/home-page.json.
 */
export class HomePageContentUtils {
  /** Most projects the home page section accepts (three rows of four cards). */
  public static readonly MAXIMUM_FEATURED_PROJECTS_COUNT: number = 12
  /** Storyblok slug of a project: the last segment of its route ("/project/stockpme" gives "stockpme"). */
  private static readonly PROJECT_SLUG_REGEX: RegExp = /^[a-z0-9][a-z0-9_-]{0,119}$/

  /**
   * Tells whether a value is a well-formed project slug.
   * @param {unknown} value - The value to check.
   * @returns {boolean} True for a lowercase slug of at most 120 characters.
   */
  public static isProjectSlug(value: unknown): value is string {
    return typeof value === 'string' && this.PROJECT_SLUG_REGEX.test(value)
  }

  /**
   * Tells whether two selections hold the same project slugs in the same order.
   * @param {string[]} projectSlugs - A selection.
   * @param {string[]} otherProjectSlugs - The selection to compare it with.
   * @returns {boolean} True when both selections are identical.
   */
  public static hasSameProjectSlugs(projectSlugs: string[], otherProjectSlugs: string[]): boolean {
    return (
      projectSlugs.length === otherProjectSlugs.length &&
      projectSlugs.every((slug: string, index: number): boolean => slug === otherProjectSlugs[index])
    )
  }

  /**
   * Builds a safe content object from a parsed JSON file: malformed or duplicated slugs are dropped, the list is capped.
   * @param {unknown} rawContent - The parsed JSON file, whatever its shape.
   * @returns {HomePageContent} The content, with an empty selection when the file has none.
   */
  public static normalize(rawContent: unknown): HomePageContent {
    const rawSlugs: unknown =
      rawContent !== null && typeof rawContent === 'object'
        ? (rawContent as Record<string, unknown>).featuredProjectSlugs
        : undefined
    const slugs: string[] = Array.isArray(rawSlugs)
      ? rawSlugs.filter((slug: unknown): slug is string => this.isProjectSlug(slug))
      : []
    return {
      featuredProjectSlugs: [...new Set(slugs)].slice(0, this.MAXIMUM_FEATURED_PROJECTS_COUNT),
    }
  }
}
