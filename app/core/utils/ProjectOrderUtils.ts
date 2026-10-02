import type { DibodevProject } from '~/core/types/DibodevProject'
import { HOME_PAGE_CONTENT } from '~/core/constants/homePageContent'
import { ProjectUtils } from '~/core/utils/ProjectUtils'

/**
 * Ordering helpers for project listings.
 */
export class ProjectOrderUtils {
  /**
   * Puts the projects chosen for the home page first, in their saved order, keeping the original order for the others.
   * @param {DibodevProject[]} projects - Projects to order (usually sorted by date, newest first).
   * @param {string[]} homePageProjectSlugs - Slugs chosen for the home page, in display order.
   * @returns {DibodevProject[]} A new array: the home page selection first, then the other projects.
   */
  public static homePageSelectionFirst(
    projects: DibodevProject[],
    homePageProjectSlugs: string[] = HOME_PAGE_CONTENT.featuredProjectSlugs,
  ): DibodevProject[] {
    const selectedProjects: DibodevProject[] = ProjectUtils.pickBySlugs(projects, homePageProjectSlugs)
    return [
      ...selectedProjects,
      ...projects.filter((project: DibodevProject): boolean => !selectedProjects.includes(project)),
    ]
  }
}
