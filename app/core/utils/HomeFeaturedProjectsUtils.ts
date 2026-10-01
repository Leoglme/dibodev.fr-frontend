import type { DibodevProject } from '~/core/types/DibodevProject'
import type { HomeFeaturedProjectsGridLayout, HomeFeaturedProjectsGridLayouts } from '~/core/types/HomeFeaturedProjects'
import { ProjectUtils } from '~/core/utils/ProjectUtils'

/**
 * Projects of the home page section: which ones are shown, and how the grid lays them out on each screen.
 */
export class HomeFeaturedProjectsUtils {
  /** Favourites shown while no selection has been saved from the dashboard (one row of four cards). */
  private static readonly FAVORITE_PROJECTS_COUNT: number = 4
  /** Stacked cards on phones: capped so the section stays short. */
  private static readonly PHONE_VISIBLE_COUNT: number = 3
  private static readonly TABLET_COLUMNS_COUNT: number = 2
  private static readonly LAPTOP_COLUMNS_COUNT: number = 3
  private static readonly DESKTOP_COLUMNS_COUNT: number = 4

  /**
   * Projects shown in the home page section: the selection saved from the dashboard, or the Storyblok favourites without one.
   * @param {DibodevProject[]} projects - Every published project, most recent first.
   * @param {string[]} projectSlugs - Slugs saved from the dashboard (empty when nothing was saved).
   * @returns {DibodevProject[]} The projects to display, in order.
   */
  public static resolveDisplayedProjects(projects: DibodevProject[], projectSlugs: string[]): DibodevProject[] {
    const selectedProjects: DibodevProject[] = ProjectUtils.pickBySlugs(projects, projectSlugs)
    if (selectedProjects.length > 0) {
      return selectedProjects
    }
    return projects
      .filter((project: DibodevProject): boolean => project.isFavorite)
      .slice(0, this.FAVORITE_PROJECTS_COUNT)
  }

  /**
   * Grid of the section on each screen range: cards that would leave an incomplete row are hidden, so no card sits alone.
   * @param {number} projectsCount - Number of projects in the section.
   * @returns {HomeFeaturedProjectsGridLayouts} Columns and visible cards per screen range.
   */
  public static getGridLayouts(projectsCount: number): HomeFeaturedProjectsGridLayouts {
    return {
      phone: { columnsCount: 1, visibleCount: Math.min(projectsCount, this.PHONE_VISIBLE_COUNT) },
      tablet: this.getFullRowsLayout(projectsCount, this.TABLET_COLUMNS_COUNT),
      laptop: this.getFullRowsLayout(projectsCount, this.LAPTOP_COLUMNS_COUNT),
      desktop: this.getDesktopLayout(projectsCount),
    }
  }

  /**
   * Layout on large screens: four columns, or three when three show more cards (six projects fill two rows of three).
   * @param {number} projectsCount - Number of projects in the section.
   * @returns {HomeFeaturedProjectsGridLayout} Columns and visible cards on large screens.
   */
  private static getDesktopLayout(projectsCount: number): HomeFeaturedProjectsGridLayout {
    const threeColumnsLayout: HomeFeaturedProjectsGridLayout = this.getFullRowsLayout(
      projectsCount,
      this.LAPTOP_COLUMNS_COUNT,
    )
    const fourColumnsLayout: HomeFeaturedProjectsGridLayout = this.getFullRowsLayout(
      projectsCount,
      this.DESKTOP_COLUMNS_COUNT,
    )
    const hasEnoughProjectsForFourColumns: boolean = projectsCount >= this.DESKTOP_COLUMNS_COUNT
    return hasEnoughProjectsForFourColumns && fourColumnsLayout.visibleCount >= threeColumnsLayout.visibleCount
      ? fourColumnsLayout
      : threeColumnsLayout
  }

  /**
   * Layout keeping full rows only; a single incomplete row is shown as it is.
   * @param {number} projectsCount - Number of projects in the section.
   * @param {number} columnsCount - Columns of the grid.
   * @returns {HomeFeaturedProjectsGridLayout} Columns and visible cards.
   */
  private static getFullRowsLayout(projectsCount: number, columnsCount: number): HomeFeaturedProjectsGridLayout {
    const fullRowsCardsCount: number = Math.floor(projectsCount / columnsCount) * columnsCount
    return { columnsCount, visibleCount: fullRowsCardsCount > 0 ? fullRowsCardsCount : projectsCount }
  }
}
