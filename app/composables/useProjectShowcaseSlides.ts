import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevHeroShowcaseSlide, DibodevShowcaseProjectEntry } from '~/core/types/DibodevHeroShowcase'
import type { DibodevProject } from '~/core/types/DibodevProject'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'
import { StoryblokImageUtils } from '~/core/utils/StoryblokImageUtils'

const IMAGE_WIDTHS: number[] = [600, 900, 1200]
const FALLBACK_IMAGE_WIDTH: number = 1200
/** Separates the short project name from its tagline in the Storyblok name ("Gest-Time — Logiciel de…"). */
const PROJECT_NAME_SEPARATOR_REGEX: RegExp = /\s[—–-]\s/

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
    return (storyblokProjectsData.value ?? []).find((project: DibodevProject): boolean =>
      project.route.endsWith(`/${slug}`),
    )
  }

  /**
   * Turns a project and one of its screenshots into a slide.
   * @param {DibodevProject} project - The project.
   * @param {string} screenshotUrl - Storyblok URL of the screenshot.
   * @returns {DibodevHeroShowcaseSlide} The slide.
   */
  function toSlide(project: DibodevProject, screenshotUrl: string): DibodevHeroShowcaseSlide {
    const [name = project.name, tagline = ''] = project.name.split(PROJECT_NAME_SEPARATOR_REGEX)
    return {
      name,
      tagline,
      route: project.route,
      imageUrl: StoryblokImageUtils.getResizedUrl(screenshotUrl, FALLBACK_IMAGE_WIDTH),
      imageSrcset: StoryblokImageUtils.getSrcset(screenshotUrl, IMAGE_WIDTHS),
    }
  }

  return computed((): DibodevHeroShowcaseSlide[] =>
    entries.flatMap((entry: DibodevShowcaseProjectEntry): DibodevHeroShowcaseSlide[] => {
      const project: DibodevProject | undefined = findProjectBySlug(entry.slug)
      const screenshotUrl: string | undefined = project?.[entry.media]
      return project && screenshotUrl ? [toSlide(project, screenshotUrl)] : []
    }),
  )
}
