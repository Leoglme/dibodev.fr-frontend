/**
 * Utility class for URL manipulation.
 * Provides methods to process and transform URLs.
 * @class UrlUtils
 */
export class UrlUtils {
  /**
   * Extracts the base URL (protocol and domain, including subdomain if present) from a full URL.
   * Removes path, query parameters, and fragments.
   * @param {string} url - The full URL to process (e.g., 'https://github.com/vuejs/art/blob/a1c78b74569b70a25300925b4eacfefcc143b8f6/logo.svg').
   * @returns {string} The base URL (e.g., 'https://github.com/vuejs').
   * @throws {Error} If the URL is invalid or cannot be parsed.
   */
  public static getBaseUrl(url: string): string {
    const trimmedUrl: string = url.trim()

    if (!trimmedUrl) {
      throw new Error('Invalid or empty URL.')
    }

    try {
      const parsedUrl: URL = new URL(trimmedUrl)
      return `${parsedUrl.protocol}//${parsedUrl.host}`
    } catch (error) {
      throw new Error(
        `Failed to parse URL "${trimmedUrl}": ${error instanceof Error ? error.message : 'Unknown error'}`,
      )
    }
  }
}
