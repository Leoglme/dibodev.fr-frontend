/** Turns a business name into the address slug of its demo (`Plomberie Martin & Fils` → `plomberie-martin-fils`). */
export class SlugUtils {
  private static readonly MAX_LENGTH: number = 60

  /**
   * Slugifies a text: lower case, accents removed, anything else than letters and digits replaced by a hyphen.
   * @param {string} text - The text, a business name for instance.
   * @returns {string} The slug, empty when the text has no letter nor digit.
   */
  public static slugify(text: string): string {
    return text
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, SlugUtils.MAX_LENGTH)
      .replace(/-+$/g, '')
  }
}
