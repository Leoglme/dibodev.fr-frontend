/**
 * Utility class for color transformations.
 * Provides methods to convert hex colors to HSL, adjust lightness, and convert back to hex.
 */
export class ColorUtils {
  /**
   * Converts a hex color to HSL format.
   * @param {string} hex - The hex color string (e.g., '#D6D0FB').
   * @returns {string} The HSL representation of the color (e.g., 'hsl(248, 84%, 90%)').
   */
  public static hexToHSL(hex: string): string {
    const { r, g, b }: { r: number; g: number; b: number } = this.hexToRGB(hex)
    const { h, s, l }: { h: number; s: number; l: number } = this.rgbToHSL(r, g, b)
    return `hsl(${h}, ${s}%, ${l}%)`
  }

  /**
   * Adjusts the lightness of an HSL color.
   * @param {string} hsl - The HSL color string (e.g., 'hsl(248, 84%, 90%)').
   * @param {number} lightnessAdjustment - The value to subtract from the lightness (default: 50).
   * @returns {string} The adjusted HSL color (e.g., 'hsl(248, 84%, 40%)').
   */
  public static adjustLightness(hsl: string, lightnessAdjustment: number = 50): string {
    const hslRegex: RegExp = /hsl\((\d+),\s*(\d+)%?,\s*(\d+)%?\)/
    const match: RegExpMatchArray | null = hsl.match(hslRegex)

    if (!match) {
      throw new Error('Invalid HSL color format.')
    }

    const h: number = parseInt(match[1] || '', 10)
    const s: number = parseInt(match[2] || '', 10)
    let l: number = parseInt(match[3] || '', 10)

    l = Math.max(0, l - lightnessAdjustment) // Ensure lightness is not negative
    return `hsl(${h}, ${s}%, ${l}%)`
  }

  /**
   * Converts an HSL color to hex format.
   * @param {string} hsl - The HSL color string (e.g., 'hsl(248, 84%, 40%)').
   * @returns {string} The hex representation of the color (e.g., '#2711BB').
   */
  public static hslToHex(hsl: string): string {
    const hslRegex: RegExp = /hsl\((\d+),\s*(\d+)%?,\s*(\d+)%?\)/
    const match: RegExpMatchArray | null = hsl.match(hslRegex)

    if (!match) {
      throw new Error('Invalid HSL color format.')
    }

    const h: number = parseInt(match[1] || '', 10)
    const s: number = parseInt(match[2] || '', 10) / 100
    const l: number = parseInt(match[3] || '', 10) / 100

    const rgb: { r: number; g: number; b: number } = this.hslToRGB(h, s, l)
    return this.rgbToHex(rgb.r, rgb.g, rgb.b)
  }

  /**
   * Determines the text color based on the background color.
   * If no `textColor` is provided, it calculates the text color by reducing the lightness.
   * @param {string} backgroundColor - The background color in hex format (e.g., '#D6D0FB').
   * @param {number} lightnessAdjustment - The value to subtract from the lightness (default: 50).
   * @returns {string} The calculated text color in hex format.
   */
  public static getTextColor(backgroundColor: string, lightnessAdjustment: number = 50): string {
    const hsl: string = this.hexToHSL(backgroundColor)
    const adjustedHSL: string = this.adjustLightness(hsl, lightnessAdjustment)
    return this.hslToHex(adjustedHSL)
  }

  /**
   * Converts a hex color string to RGB values.
   * @param {string} hex - The hex color string.
   * @returns {{ r: number, g: number, b: number }} The RGB values.
   */
  private static hexToRGB(hex: string): { r: number; g: number; b: number } {
    const validHex: string = hex.replace('#', '')

    if (validHex.length !== 6) {
      throw new Error('Invalid hex color format.')
    }

    const r: number = parseInt(validHex.substring(0, 2), 16)
    const g: number = parseInt(validHex.substring(2, 4), 16)
    const b: number = parseInt(validHex.substring(4, 6), 16)

    return { r, g, b }
  }

  /**
   * Converts RGB values to HSL format.
   * @param {number} r - The red value (0-255).
   * @param {number} g - The green value (0-255).
   * @param {number} b - The blue value (0-255).
   * @returns {{ h: number, s: number, l: number }} The HSL values.
   */
  private static rgbToHSL(r: number, g: number, b: number): { h: number; s: number; l: number } {
    r /= 255
    g /= 255
    b /= 255

    const max: number = Math.max(r, g, b)
    const min: number = Math.min(r, g, b)
    let h: number = 0
    let s: number = 0
    const l: number = (max + min) / 2

    if (max !== min) {
      const d: number = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }

      h *= 60
    }

    return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) }
  }

  /**
   * Converts HSL values to RGB format.
   * @param {number} h - The hue value (0-360).
   * @param {number} s - The saturation value (0-1).
   * @param {number} l - The lightness value (0-1).
   * @returns {{ r: number, g: number, b: number }} The RGB values.
   */
  private static hslToRGB(h: number, s: number, l: number): { r: number; g: number; b: number } {
    /**
     *
     * @param {number} p - The p value.
     * @param {number} q - The q value.
     * @param {number} t - The t value.
     * @returns {number} The hue to RGB value.
     */
    const hueToRGB: (p: number, q: number, t: number) => number = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    let r: number
    let g: number
    let b: number
    if (s === 0) {
      r = g = b = l // achromatic
    } else {
      const q: number = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p: number = 2 * l - q

      r = hueToRGB(p, q, h / 360 + 1 / 3)
      g = hueToRGB(p, q, h / 360)
      b = hueToRGB(p, q, h / 360 - 1 / 3)
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
    }
  }

  /**
   * Converts RGB values to a hex color string.
   * @param {number} r - The red value (0-255).
   * @param {number} g - The green value (0-255).
   * @param {number} b - The blue value (0-255).
   * @returns {string} The hex color string.
   */
  private static rgbToHex(r: number, g: number, b: number): string {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`
  }
}
