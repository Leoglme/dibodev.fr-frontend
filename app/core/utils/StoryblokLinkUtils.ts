/** Minimal shape of a Storyblok Link field (multilink). */
export type StoryblokLinkField = {
  url?: string
  cached_url?: string
  linktype?: string
}

/**
 * Utilities to turn a Storyblok Link field into a usable href.
 */
export class StoryblokLinkUtils {
  /**
   * Resolves a Storyblok Link field into an href string.
   *
   * @param {StoryblokLinkField | undefined} link - The Storyblok link field.
   * @returns {string} The resolved href, or '#' when the link is empty.
   */
  static resolveHref(link: StoryblokLinkField | undefined): string {
    if (!link) return '#'
    const url = link.url?.trim()
    if (url) return url
    const cached = link.cached_url?.trim()
    if (cached) return cached.startsWith('/') ? cached : `/${cached}`
    return '#'
  }

  /**
   * Tells whether an href points to an external (absolute http) destination.
   *
   * @param {string} href - The href to test.
   * @returns {boolean} True when the href is an absolute http(s) URL.
   */
  static isExternal(href: string): boolean {
    return /^https?:\/\//i.test(href)
  }
}
