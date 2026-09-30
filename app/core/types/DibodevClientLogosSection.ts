/**
 * Client or employer logo displayed in the trust strip under the hero.
 * @type {DibodevClientLogo}
 * @property {string} name - Company name (alt text, and displayed next to icon-only logos).
 * @property {string} src - Public path of the logo image.
 * @property {number} width - Intrinsic width of the rendered logo, in pixels, at the strip height.
 * @property {number} height - Rendered height of the logo, in pixels.
 * @property {boolean} showName - Whether the company name is displayed next to the logo (icon-only marks).
 * @property {string | null} projectRoute - Route of the project made for this client, null when the site has no page for it.
 */
export type DibodevClientLogo = {
  name: string
  src: string
  width: number
  height: number
  showName: boolean
  projectRoute: string | null
}
