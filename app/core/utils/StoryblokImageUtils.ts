import { SHARE_IMAGE_BACKGROUND_COLOR, SHARE_IMAGE_HEIGHT, SHARE_IMAGE_WIDTH } from '~/core/constants/shareImage'

/**
 * Utility class building optimized image URLs with the Storyblok image service.
 */
export class StoryblokImageUtils {
  private static readonly ASSET_HOST: string = 'https://a.storyblok.com/'
  private static readonly NOT_RESIZABLE_EXTENSION_REGEX: RegExp = /\.(gif|svg)$/i
  private static readonly DIMENSIONS_IN_URL_REGEX: RegExp = /\/f\/\d+\/(\d+)x(\d+)\//

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
   * Returns the URL of a Storyblok asset resized to the given width and converted to PNG, transparency included.
   * @param {string | undefined} assetUrl - The original Storyblok asset URL.
   * @param {number} width - The target width in pixels.
   * @returns {string} The PNG URL, or an empty string for a missing, animated or vector asset.
   */
  public static getPngUrl(assetUrl: string | undefined, width: number): string {
    if (!assetUrl || !this.isResizable(assetUrl)) {
      return ''
    }
    return `${assetUrl}/m/${width}x0/filters:format(png)`
  }

  /**
   * Returns a Storyblok asset as a share image JPEG: cropped when landscape, framed on the site background when portrait.
   * @param {string | undefined} assetUrl - The original Storyblok asset URL.
   * @returns {string} The share image URL, or an empty string for a missing, animated or vector asset.
   */
  public static getShareImageUrl(assetUrl: string | undefined): string {
    if (!assetUrl || !this.isResizable(assetUrl)) {
      return ''
    }
    const shareImageSize: string = `${SHARE_IMAGE_WIDTH}x${SHARE_IMAGE_HEIGHT}`
    if (this.isPortrait(assetUrl)) {
      return `${assetUrl}/m/fit-in/${shareImageSize}/filters:fill(${SHARE_IMAGE_BACKGROUND_COLOR}):format(jpeg):quality(82)`
    }
    return `${assetUrl}/m/${shareImageSize}/filters:format(jpeg):quality(82)`
  }

  /**
   * Tells whether a Storyblok asset is taller than wide, from the dimensions Storyblok writes in its URL.
   * @param {string} assetUrl - The Storyblok asset URL.
   * @returns {boolean} True for a portrait asset, false for a landscape one or when the URL has no dimensions.
   */
  private static isPortrait(assetUrl: string): boolean {
    const dimensions: RegExpMatchArray | null = assetUrl.match(this.DIMENSIONS_IN_URL_REGEX)
    return dimensions !== null && Number(dimensions[2]) > Number(dimensions[1])
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
