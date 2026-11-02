/** Reads the main colour of a logo on a small canvas, leaving out the transparent, white and grey pixels. */
export class DominantColorUtils {
  private static readonly SAMPLE_SIZE: number = 24
  private static readonly OPAQUE_PIXEL_MIN_ALPHA: number = 128
  private static readonly WHITE_PIXEL_MIN_CHANNEL: number = 235
  private static readonly COLORED_PIXEL_MIN_CHANNEL_SPREAD: number = 25

  /**
   * Computes the dominant colour of an image.
   * @param {string} imageSrc - A data URL or an URL the browser may draw on a canvas.
   * @returns {Promise<string | null>} The colour as `#rrggbb`, or null when the image has no colour or cannot be read.
   */
  public static async fromImage(imageSrc: string): Promise<string | null> {
    try {
      const image: HTMLImageElement = await DominantColorUtils.loadImage(imageSrc)
      const canvas: HTMLCanvasElement = document.createElement('canvas')
      canvas.width = DominantColorUtils.SAMPLE_SIZE
      canvas.height = DominantColorUtils.SAMPLE_SIZE
      const context: CanvasRenderingContext2D | null = canvas.getContext('2d')
      if (!context) {
        return null
      }
      context.drawImage(image, 0, 0, DominantColorUtils.SAMPLE_SIZE, DominantColorUtils.SAMPLE_SIZE)
      const pixels: Uint8ClampedArray = context.getImageData(
        0,
        0,
        DominantColorUtils.SAMPLE_SIZE,
        DominantColorUtils.SAMPLE_SIZE,
      ).data
      return DominantColorUtils.averageColoredPixels(pixels)
    } catch {
      return null
    }
  }

  /**
   * Averages the pixels that carry a colour.
   * @param {Uint8ClampedArray} pixels - RGBA bytes of the sampled image.
   * @returns {string | null} The average as `#rrggbb`, or null when no pixel is coloured.
   */
  private static averageColoredPixels(pixels: Uint8ClampedArray): string | null {
    let redTotal: number = 0
    let greenTotal: number = 0
    let blueTotal: number = 0
    let coloredPixelCount: number = 0

    for (let index: number = 0; index < pixels.length; index += 4) {
      const red: number = pixels[index] ?? 0
      const green: number = pixels[index + 1] ?? 0
      const blue: number = pixels[index + 2] ?? 0
      const alpha: number = pixels[index + 3] ?? 0
      const highestChannel: number = Math.max(red, green, blue)
      const lowestChannel: number = Math.min(red, green, blue)
      const isTransparent: boolean = alpha < DominantColorUtils.OPAQUE_PIXEL_MIN_ALPHA
      const isWhite: boolean = lowestChannel > DominantColorUtils.WHITE_PIXEL_MIN_CHANNEL
      const isGrey: boolean = highestChannel - lowestChannel < DominantColorUtils.COLORED_PIXEL_MIN_CHANNEL_SPREAD
      if (isTransparent || isWhite || isGrey) {
        continue
      }
      redTotal += red
      greenTotal += green
      blueTotal += blue
      coloredPixelCount += 1
    }
    if (coloredPixelCount === 0) {
      return null
    }
    return `#${[redTotal, greenTotal, blueTotal]
      .map((channelTotal: number): string =>
        Math.round(channelTotal / coloredPixelCount)
          .toString(16)
          .padStart(2, '0'),
      )
      .join('')}`
  }

  /**
   * Loads an image so it can be drawn on a canvas.
   * @param {string} imageSrc - A data URL or an URL.
   * @returns {Promise<HTMLImageElement>} The loaded image.
   */
  private static loadImage(imageSrc: string): Promise<HTMLImageElement> {
    return new Promise((resolve: (image: HTMLImageElement) => void, reject: (reason: Error) => void): void => {
      const image: HTMLImageElement = new Image()
      image.onload = (): void => resolve(image)
      image.onerror = (): void => reject(new Error('The image could not be loaded.'))
      image.src = imageSrc
    })
  }
}
