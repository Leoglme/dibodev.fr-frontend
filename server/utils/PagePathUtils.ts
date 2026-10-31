/** Paths of the site's pages sent by the forms, checked before they reach an e-mail or the storage. */
export class PagePathUtils {
  private static readonly SITE_ORIGIN: string = 'https://dibodev.fr'
  private static readonly MAX_LENGTH: number = 300
  private static readonly PATH_REGEX: RegExp = /^\/[a-z0-9/_.%-]*$/i

  /**
   * Keeps the path of a page of the site, without its query string or hash.
   *
   * @param {unknown} value - The raw value sent by a form.
   * @returns {string | null} The path, or null when it does not look like one.
   */
  public static normalize(value: unknown): string | null {
    if (typeof value !== 'string') {
      return null
    }
    const path: string = value.split(/[?#]/)[0]?.trim() ?? ''

    if (path.length > PagePathUtils.MAX_LENGTH || path.startsWith('//') || !PagePathUtils.PATH_REGEX.test(path)) {
      return null
    }
    return path
  }

  /**
   * Builds the full address of a page of the site.
   *
   * @param {string} path - The path of the page.
   * @returns {string} The address, on dibodev.fr.
   */
  public static buildSiteUrl(path: string): string {
    return `${PagePathUtils.SITE_ORIGIN}${path}`
  }
}
