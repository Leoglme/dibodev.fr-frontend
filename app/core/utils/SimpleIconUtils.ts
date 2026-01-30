import * as icons from 'simple-icons'
import { UrlUtils } from '~/core/utils/UrlUtils'

/**
 * Interface defining the structure of a Simple Icon object as returned by the simple-icons package.
 * @type SimpleIcon
 */
export type SimpleIcon = {
  /** The title of the icon. */
  title: string
  /** The slug of the icon. */
  slug: string
  /** The hex color code of the icon. */
  hex: string
  /** The source URL of the icon. */
  source: string
  /** The SVG string of the icon. */
  svg: string
  /** The SVG path data of the icon. */
  path: string
  /** The usage guidelines URL for the icon, if available. */
  guidelines?: string
  /** The license information for the icon, if available. */
  license?: {
    /** The type of license. */
    type: string
    /** The URL of the license. */
    url: string
  }
}

/**
 * Utility class for working with Simple Icons (npm package: simple-icons).
 * Provides methods to retrieve and validate icon data.
 * @class SimpleIconUtils
 */
/** Aliases: normalized input (e.g. from stack names) -> simple-icons slug. */
const SLUG_ALIASES: Record<string, string> = {
  nuxtdotjs: 'nuxt',
}

export class SimpleIconUtils {
  /**
   * Retrieves a Simple Icon by its slug using the simple-icons package.
   * @param {string} slug - The slug of the icon to retrieve (e.g., 'GitHub', 'simpleicons').
   * @returns {SimpleIcon | null} The Simple Icon object corresponding to the slug.
   * @throws {Error} If the slug is invalid or the icon is not found.
   */
  public static getIconBySlug(slug: string): SimpleIcon | null {
    let normalizedSlug: string = this.normalizeSlug(slug)
    normalizedSlug = SLUG_ALIASES[normalizedSlug] ?? normalizedSlug

    if (!normalizedSlug) {
      console.warn('Invalid or missing icon slug.')
      return null
    }

    let foundIcon: SimpleIcon | undefined

    // Iterate over all icons to find the matching slug
    for (const key in icons) {
      const icon: SimpleIcon = icons[key as keyof typeof icons] as SimpleIcon

      // Validate required properties
      const requiredProps: (keyof SimpleIcon)[] = ['title', 'slug', 'hex', 'source', 'svg', 'path']
      const isValidIcon: boolean = requiredProps.every(
        (prop: keyof SimpleIcon): boolean => typeof icon[prop] === 'string' && !!icon[prop],
      )

      if (!isValidIcon) {
        continue // Skip invalid icons
      }

      if (icon.slug.toLowerCase() === normalizedSlug) {
        foundIcon = icon
        break
      }
    }

    if (!foundIcon) {
      console.warn(`Icon with slug "${slug}" not found in simple-icons package.`)
      return null
    }

    if (foundIcon.source === 'https://github.com') {
      foundIcon.source += `/${this.normalizeTitle(foundIcon.title)}`
    } else {
      foundIcon.source = UrlUtils.getBaseUrl(foundIcon.source)
    }

    return foundIcon
  }

  /**
   * Normalizes a slug by trimming whitespace, converting to lowercase, and replace "." with "dot"
   * @param {string} slug - The slug to normalize.
   * @returns {string} The normalized slug.
   */
  private static normalizeSlug(slug: string): string {
    return slug.trim().toLowerCase().replace(/\./g, 'dot')
  }

  /**
   * Normalizes a title by trimming whitespace, converting to lowercase, and remove special characters
   * @param {string} title - The title to normalize.
   * @returns {string} The normalized title.
   */
  public static normalizeTitle(title: string): string {
    return title
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')
  }
}
