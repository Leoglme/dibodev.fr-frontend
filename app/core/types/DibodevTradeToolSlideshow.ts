/**
 * One slide of the trade and tool slideshow: a photo of a trade with the software built for it floating over it.
 * @type {DibodevTradeToolSlide}
 * @property {string} id - Key of the slide, reported in the navigation events.
 * @property {string} photoUrl - Smallest photo file.
 * @property {string} photoSrcset - Responsive sources of the photo.
 * @property {string} photoAlt - Description of the photo.
 * @property {string} screenshotUrl - Screenshot of the software shown in the window.
 * @property {string} screenshotAlt - Description of the screenshot.
 * @property {boolean} hasTransparentScreenshot - The screenshot is a device picture on a transparent background: shown whole on a tinted background instead of filling the window.
 * @property {string} tradeLabel - Short name of the trade, in the pill over the photo.
 * @property {string} need - What the software does, in bold under the picture.
 * @property {string} needSuffix - End of the caption after the need (", pour une auto-école.").
 */
export type DibodevTradeToolSlide = {
  id: string
  photoUrl: string
  photoSrcset: string
  photoAlt: string
  screenshotUrl: string
  screenshotAlt: string
  hasTransparentScreenshot: boolean
  tradeLabel: string
  need: string
  needSuffix: string
}

export type DibodevTradeToolSlideshowProps = {
  slides: DibodevTradeToolSlide[]
  accessibleName: string
}
