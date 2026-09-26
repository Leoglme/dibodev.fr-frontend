/**
 * Utility class building optimized image URLs with the Storyblok image service.
 */
export class StoryblokImageUtils {
  private static readonly ASSET_HOST: string = 'https://a.storyblok.com/'
  private static readonly NOT_RESIZABLE_EXTENSION_REGEX: RegExp = /\.(gif|svg)$/i

  /**
   * Returns the URL of a Storyblok asset resized to the given width and converted to WebP.
   * @param {string} assetUrl - The original Storyblok asset URL.
   * @param {number} width - The target width in pixels.
   * @returns {string} The resized asset URL, or the original URL when the asset cannot be resized.
   */
  public static getResizedUrl(assetUrl: string, width: number): string {
    if (!this.isResizable(assetUrl)) {
      return assetUrl
    }
    return `${assetUrl}/m/${width}x0/filters:format(webp):quality(75)`
  }

  /**
   * Builds a srcset attribute value with one resized URL per width.
   * @param {string} assetUrl - The original Storyblok asset URL.
   * @param {number[]} widths - The widths in pixels to include.
   * @returns {string} The srcset value, or an empty string when the asset cannot be resized.
   */
  public static getSrcset(assetUrl: string, widths: number[]): string {
    if (!this.isResizable(assetUrl)) {
      return ''
    }
    return widths.map((width: number): string => `${this.getResizedUrl(assetUrl, width)} ${width}w`).join(', ')
  }

  /**
   * Tells whether an asset is hosted on Storyblok in a format its image service can resize.
   * @param {string} assetUrl - The asset URL to check.
   * @returns {boolean} True when the Storyblok image service can resize the asset.
   */
  private static isResizable(assetUrl: string): boolean {
    return assetUrl.startsWith(this.ASSET_HOST) && !this.NOT_RESIZABLE_EXTENSION_REGEX.test(assetUrl)
  }
}
