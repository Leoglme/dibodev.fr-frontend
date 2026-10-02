/**
 * One shape of a brand logo.
 * @type {DibodevBrandLogoPath}
 * @property {string} path - Path of the shape.
 * @property {string | null} color - Brand colour of the shape, or null to follow the text colour.
 */
export type DibodevBrandLogoPath = {
  path: string
  color: string | null
}

/**
 * A brand logo as vector shapes.
 * @type {DibodevBrandLogo}
 * @property {string} viewBox - Box the paths are drawn in.
 * @property {DibodevBrandLogoPath[]} paths - Shapes of the logo.
 */
export type DibodevBrandLogo = {
  viewBox: string
  paths: DibodevBrandLogoPath[]
}

/**
 * Type definitions for the DibodevBrandGlyph component props.
 * @type {DibodevBrandGlyphProps}
 * @property {DibodevBrandLogo} logo - The logo to draw.
 * @property {number} size - Width and height of the logo in pixels.
 */
export type DibodevBrandGlyphProps = {
  logo: DibodevBrandLogo
  size: number
}
