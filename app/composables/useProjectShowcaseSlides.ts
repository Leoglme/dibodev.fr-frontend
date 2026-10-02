import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevHeroShowcaseSlide, DibodevShowcaseProjectEntry } from '~/core/types/DibodevHeroShowcase'
import type { DibodevProject, DibodevProjectNameParts } from '~/core/types/DibodevProject'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'
import { ProjectUtils } from '~/core/utils/ProjectUtils'
import { StoryblokImageUtils } from '~/core/utils/StoryblokImageUtils'

const IMAGE_WIDTHS: number[] = [600, 900, 1200]
const FALLBACK_IMAGE_WIDTH: number = 1200

/**
 * Builds the slides of a screenshot showcase from Storyblok projects, in the order of the entries.
 * Projects without the requested screenshot are skipped, so the carousel never shows an empty frame.
 * @param {DibodevShowcaseProjectEntry[]} entries - The projects to show and the media field of their screenshot.
 * @returns {Promise<ComputedRef<DibodevHeroShowcaseSlide[]>>} The slides, translated in the current locale.
 */
export async function useProjectShowcaseSlides(
  entries: DibodevShowcaseProjectEntry[],
): Promise<ComputedRef<DibodevHeroShowcaseSlide[]>> {
  const { data: storyblokProjectsData } = await useProjectsWithTranslations()

  /**
   * Finds a project by the last segment of its route.
   * @param {string} slug - Project slug.
   * @returns {DibodevProject | undefined} The project when it exists.
   */
  function findProjectBySlug(slug: string): DibodevProject | undefined {
    return (storyblokProjectsData.value ?? []).find(
      (project: DibodevProject): boolean => ProjectUtils.getSlug(project) === slug,
    )
  }

  /**
   * Turns a project and one of its screenshots into a slide.
   * @param {DibodevProject} project - The project.
   * @param {DibodevShowcaseProjectEntry} entry - Where the screenshot of the project comes from.
   * @returns {DibodevHeroShowcaseSlide | null} The slide, or null when the project has no such screenshot.
   */
  function toSlide(project: DibodevProject, entry: DibodevShowcaseProjectEntry): DibodevHeroShowcaseSlide | null {
    const { shortName, tagline }: DibodevProjectNameParts = ProjectUtils.splitNameAndTagline(project.name)
    if (entry.staticPath) {
      return { name: shortName, tagline, route: project.route, imageUrl: entry.staticPath, imageSrcset: '' }
    }
    const screenshotUrl: string | undefined = entry.media ? project[entry.media] : undefined
    if (!screenshotUrl) return null
    return {
      name: shortName,
      tagline,
      route: project.route,
      imageUrl: StoryblokImageUtils.getResizedUrl(screenshotUrl, FALLBACK_IMAGE_WIDTH),
      imageSrcset: StoryblokImageUtils.getSrcset(screenshotUrl, IMAGE_WIDTHS),
    }
  }

  return computed((): DibodevHeroShowcaseSlide[] =>
    entries.flatMap((entry: DibodevShowcaseProjectEntry): DibodevHeroShowcaseSlide[] => {
      const project: DibodevProject | undefined = findProjectBySlug(entry.slug)
      const slide: DibodevHeroShowcaseSlide | null = project ? toSlide(project, entry) : null
      return slide ? [slide] : []
    }),
  )
}
