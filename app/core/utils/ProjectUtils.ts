import type { DibodevProject, DibodevProjectNameParts } from '~/core/types/DibodevProject'
import type {
  DibodevProjectCardScreenshot,
  DibodevProjectCardScreenshotOverride,
  DibodevProjectScreenshotMediaKey,
} from '~/core/types/DibodevProjectCardScreenshot'
import { PROJECT_CARD_SCREENSHOT_OVERRIDES } from '~/core/constants/projectCardScreenshots'
import { PROJECT_WORDMARK_LOGO_SLUGS } from '~/core/constants/projectLogos'
import { StoryblokImageUtils } from '~/core/utils/StoryblokImageUtils'

/**
 * Helpers shared by the project cards and showcases: slug, name split and card screenshot.
 */
export class ProjectUtils {
  /** Separates the short project name from its tagline in the Storyblok name ("Gest-Time — Logiciel de…"). */
  private static readonly NAME_SEPARATOR_REGEX: RegExp = /\s[—–-]\s/
  private static readonly SCREENSHOT_SRCSET_WIDTHS: number[] = [480, 800, 1200]
  private static readonly SCREENSHOT_FALLBACK_WIDTH: number = 800
  private static readonly DEFAULT_SCREENSHOT_MEDIA_KEY: DibodevProjectScreenshotMediaKey = 'media1'
  /** Animated GIFs are never used as screenshots: too heavy, and the image service cannot resize them. */
  private static readonly ANIMATED_EXTENSION_REGEX: RegExp = /\.gif$/i

  /**
   * Last segment of the project route ("/project/stockpme" gives "stockpme").
   * @param {DibodevProject} project - The project.
   * @returns {string} The slug, or an empty string when the route is empty.
   */
  public static getSlug(project: DibodevProject): string {
    return this.getSlugFromRoute(project.route)
  }

  /**
   * Last segment of a project route ("/project/stockpme" gives "stockpme").
   * @param {string} route - The project route.
   * @returns {string} The slug, or an empty string when the route is empty.
   */
  public static getSlugFromRoute(route: string): string {
    return route.split('/').filter(Boolean).pop() ?? ''
  }

  /**
   * Splits a Storyblok project name into its short name and its tagline (empty when the name has no separator).
   * @param {string} name - The full project name.
   * @returns {DibodevProjectNameParts} The short name and the tagline.
   */
  public static splitNameAndTagline(name: string): DibodevProjectNameParts {
    const [shortName = name, tagline = '']: string[] = name.split(this.NAME_SEPARATOR_REGEX)
    return { shortName, tagline }
  }

  /**
   * Tells whether the logo of a project is a wordmark (the name written as a logo) rather than an icon.
   * @param {string} route - The project route.
   * @returns {boolean} True when the project is listed among the wordmark logos.
   */
  public static isWordmarkLogo(route: string): boolean {
    return PROJECT_WORDMARK_LOGO_SLUGS.includes(this.getSlugFromRoute(route))
  }

  /**
   * Screenshot shown on a project card: the override of the slug when there is one, otherwise the first media.
   * @param {DibodevProject} project - The project displayed on the card.
   * @returns {DibodevProjectCardScreenshot | null} The screenshot, or null when the project has no usable one.
   */
  public static resolveCardScreenshot(project: DibodevProject): DibodevProjectCardScreenshot | null {
    const override: DibodevProjectCardScreenshotOverride | undefined =
      PROJECT_CARD_SCREENSHOT_OVERRIDES[this.getSlug(project)]

    if (override?.staticPath) {
      return { url: override.staticPath, srcset: '' }
    }

    const mediaKey: DibodevProjectScreenshotMediaKey = override?.media ?? this.DEFAULT_SCREENSHOT_MEDIA_KEY
    const mediaUrl: string | undefined = project[mediaKey]
    if (!mediaUrl || this.ANIMATED_EXTENSION_REGEX.test(mediaUrl)) {
      return null
    }

    return {
      url: StoryblokImageUtils.getResizedUrl(mediaUrl, this.SCREENSHOT_FALLBACK_WIDTH),
      srcset: StoryblokImageUtils.getSrcset(mediaUrl, this.SCREENSHOT_SRCSET_WIDTHS),
    }
  }
}
