import type { DibodevProject } from '~/core/types/DibodevProject'

/**
 * Ordering helpers for project listings.
 */
export class ProjectOrderUtils {
  /**
   * Puts the projects flagged as favourites in Storyblok first, keeping the original order inside each group.
   * @param {DibodevProject[]} projects - Projects to order (usually sorted by date, newest first).
   * @returns {DibodevProject[]} A new array: favourites first, then the other projects.
   */
  public static favoritesFirst(projects: DibodevProject[]): DibodevProject[] {
    return [
      ...projects.filter((project: DibodevProject): boolean => project.isFavorite),
      ...projects.filter((project: DibodevProject): boolean => !project.isFavorite),
    ]
  }
}
