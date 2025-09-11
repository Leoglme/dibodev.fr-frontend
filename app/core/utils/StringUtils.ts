/**
 * Utility class for string manipulations and formatting.
 * Provides methods to format strings for various use cases, such as URL routes.
 */
export class StringUtils {
  /**
   * Formats a string to be URL-friendly for route parameters.
   * Converts the input string to lowercase and replaces spaces with hyphens.
   * @param {string} input - The input string to format (e.g., 'My project').
   * @returns {string} The formatted string suitable for URL routes (e.g., 'my-project').
   * @throws {Error} If the input is not a valid string or is empty.
   */
  public static formatForRoute(input: string): string {
    if (input.trim().length === 0) {
      throw new Error('Input must be a non-empty string.')
    }
    return input
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
  }
}
