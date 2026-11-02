/** Resizes a picture chosen by the visitor in the browser, so the frame and the request never carry a full-size photo. */
export class ImageResizeUtils {
  private static readonly JPEG_MIME_TYPE: string = 'image/jpeg'
  private static readonly PNG_MIME_TYPE: string = 'image/png'
  private static readonly SVG_MIME_TYPE: string = 'image/svg+xml'
  private static readonly TRANSPARENT_DATA_URL_PREFIXES: string[] = ['data:image/png', 'data:image/svg+xml']
  private static readonly JPEG_BACKGROUND_COLOR: string = '#ffffff'
  private static readonly JPEG_QUALITIES: number[] = [0.86, 0.78, 0.7, 0.6, 0.5]
  private static readonly BYTES_PER_BASE64_CHARACTER: number = 0.75

  /**
   * Reads a file as a data URL.
   * @param {File} file - The file chosen by the visitor.
   * @returns {Promise<string>} The data URL.
   */
  public static readAsDataUrl(file: File): Promise<string> {
    return new Promise((resolve: (dataUrl: string) => void, reject: (reason: Error) => void): void => {
      const reader: FileReader = new FileReader()
      reader.onload = (): void => resolve(String(reader.result ?? ''))
      reader.onerror = (): void => reject(new Error('The file could not be read.'))
      reader.readAsDataURL(file)
    })
  }

  /**
   * Bytes carried by a data URL, without decoding it.
   * @param {string} dataUrl - The data URL.
   * @returns {number} The approximate size of the file it carries.
   */
  public static byteLengthOf(dataUrl: string): number {
    const commaIndex: number = dataUrl.indexOf(',')
    return Math.round((dataUrl.length - commaIndex - 1) * ImageResizeUtils.BYTES_PER_BASE64_CHARACTER)
  }

  /**
   * Resizes a picture chosen in a file field so its longest edge and its weight stay under the caps; a small SVG or PNG logo is kept as it is.
   * @param {File} file - The picture chosen by the visitor.
   * @param {number} maxEdgePx - Longest edge kept, in pixels.
   * @param {number} maxBytes - Heaviest result accepted.
   * @returns {Promise<string | null>} The resized picture as a data URL, or null when it cannot fit the caps.
   */
  public static async resizeToDataUrl(file: File, maxEdgePx: number, maxBytes: number): Promise<string | null> {
    const originalDataUrl: string = await ImageResizeUtils.readAsDataUrl(file)
    const isVectorOrLosslessLogo: boolean =
      file.type === ImageResizeUtils.SVG_MIME_TYPE || file.type === ImageResizeUtils.PNG_MIME_TYPE
    if (isVectorOrLosslessLogo && file.size <= maxBytes) {
      const image: HTMLImageElement | null = await ImageResizeUtils.loadImage(originalDataUrl)
      if (!image || Math.max(image.naturalWidth, image.naturalHeight) <= maxEdgePx) {
        return originalDataUrl
      }
    }
    return ImageResizeUtils.fitDataUrl(originalDataUrl, maxEdgePx, maxBytes)
  }

  /**
   * Re-encodes a picture already in memory so it fits the caps; a picture already light enough is returned as it is.
   * @param {string} dataUrl - The picture as a data URL.
   * @param {number} maxEdgePx - Longest edge kept, in pixels.
   * @param {number} maxBytes - Heaviest result accepted.
   * @returns {Promise<string | null>} The picture within the caps, or null when it cannot fit them.
   */
  public static async shrinkDataUrl(dataUrl: string, maxEdgePx: number, maxBytes: number): Promise<string | null> {
    if (ImageResizeUtils.byteLengthOf(dataUrl) <= maxBytes) {
      return dataUrl
    }
    return ImageResizeUtils.fitDataUrl(dataUrl, maxEdgePx, maxBytes)
  }

  /**
   * Draws a picture at its capped size and saves it as PNG when it may hold transparency and fits, as JPEG otherwise.
   * @param {string} dataUrl - The picture as a data URL.
   * @param {number} maxEdgePx - Longest edge kept, in pixels.
   * @param {number} maxBytes - Heaviest result accepted.
   * @returns {Promise<string | null>} The re-encoded picture, or null when the browser cannot decode it or it cannot fit.
   */
  private static async fitDataUrl(dataUrl: string, maxEdgePx: number, maxBytes: number): Promise<string | null> {
    const image: HTMLImageElement | null = await ImageResizeUtils.loadImage(dataUrl)
    if (!image) {
      return null
    }
    const scale: number = Math.min(1, maxEdgePx / Math.max(image.naturalWidth, image.naturalHeight, 1))
    const width: number = Math.max(1, Math.round(image.naturalWidth * scale))
    const height: number = Math.max(1, Math.round(image.naturalHeight * scale))
    const mayHoldTransparency: boolean = ImageResizeUtils.TRANSPARENT_DATA_URL_PREFIXES.some(
      (prefix: string): boolean => dataUrl.startsWith(prefix),
    )

    if (mayHoldTransparency) {
      const transparentCanvas: HTMLCanvasElement | null = ImageResizeUtils.drawOnCanvas(image, width, height, null)
      const pngDataUrl: string | null = transparentCanvas?.toDataURL(ImageResizeUtils.PNG_MIME_TYPE) ?? null
      if (pngDataUrl && ImageResizeUtils.byteLengthOf(pngDataUrl) <= maxBytes) {
        return pngDataUrl
      }
    }

    const opaqueCanvas: HTMLCanvasElement | null = ImageResizeUtils.drawOnCanvas(
      image,
      width,
      height,
      ImageResizeUtils.JPEG_BACKGROUND_COLOR,
    )
    if (!opaqueCanvas) {
      return null
    }
    for (const quality of ImageResizeUtils.JPEG_QUALITIES) {
      const jpegDataUrl: string = opaqueCanvas.toDataURL(ImageResizeUtils.JPEG_MIME_TYPE, quality)
      if (ImageResizeUtils.byteLengthOf(jpegDataUrl) <= maxBytes) {
        return jpegDataUrl
      }
    }
    return null
  }

  /**
   * Draws a picture on a new canvas of the given size.
   * @param {HTMLImageElement} image - The loaded picture.
   * @param {number} width - Width of the canvas, in pixels.
   * @param {number} height - Height of the canvas, in pixels.
   * @param {string | null} backgroundColor - Colour painted under the picture, or null to keep transparency.
   * @returns {HTMLCanvasElement | null} The canvas, or null when the browser gives no 2D context.
   */
  private static drawOnCanvas(
    image: HTMLImageElement,
    width: number,
    height: number,
    backgroundColor: string | null,
  ): HTMLCanvasElement | null {
    const canvas: HTMLCanvasElement = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const context: CanvasRenderingContext2D | null = canvas.getContext('2d')
    if (!context) {
      return null
    }
    if (backgroundColor) {
      context.fillStyle = backgroundColor
      context.fillRect(0, 0, width, height)
    }
    context.drawImage(image, 0, 0, width, height)
    return canvas
  }

  /**
   * Loads a picture so it can be drawn on a canvas.
   * @param {string} dataUrl - The picture as a data URL.
   * @returns {Promise<HTMLImageElement | null>} The loaded picture, or null when the browser cannot decode it.
   */
  private static loadImage(dataUrl: string): Promise<HTMLImageElement | null> {
    return new Promise((resolve: (image: HTMLImageElement | null) => void): void => {
      const image: HTMLImageElement = new Image()
      image.onload = (): void => resolve(image)
      image.onerror = (): void => resolve(null)
      image.src = dataUrl
    })
  }
}
