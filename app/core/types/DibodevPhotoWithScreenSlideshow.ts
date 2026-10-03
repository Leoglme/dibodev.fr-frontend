/**
 * One slide of the photo and screen slideshow: a photo with a software screen floating over its corner.
 * @type {DibodevPhotoWithScreenSlide}
 * @property {string} id - Key of the slide, reported in the navigation events.
 * @property {string} name - Name of the slide, read by screen readers on its progress marker.
 * @property {string} photoUrl - Smallest photo file.
 * @property {string} photoSrcset - Responsive sources of the photo.
 * @property {string} photoAlt - Description of the photo.
 * @property {string} screenshotUrl - Screenshot of the software shown in the window.
 * @property {string} screenshotSrcset - Responsive sources of the screenshot, empty when there is a single file.
 * @property {string} screenshotAlt - Description of the screenshot.
 * @property {boolean} hasTransparentScreenshot - The screenshot is a device picture on a transparent background: shown whole on a tinted background instead of filling the window.
 * @property {string} label - Short name in the pill over the photo (a trade, a sector).
 * @property {string} captionTitle - Bold start of the caption under the picture.
 * @property {string} captionText - Rest of the caption, after the title.
 * @property {string | null} captionLink - Page opened by the caption title, or null when the title is plain text.
 */
export type DibodevPhotoWithScreenSlide = {
  id: string
  name: string
  photoUrl: string
  photoSrcset: string
  photoAlt: string
  screenshotUrl: string
  screenshotSrcset: string
  screenshotAlt: string
  hasTransparentScreenshot: boolean
  label: string
  captionTitle: string
  captionText: string
  captionLink: string | null
}

/** Caption under the picture: title and text on one line of text, or the title on its own line above the text. */
export type DibodevPhotoWithScreenCaptionLayout = 'inline' | 'stacked'

/**
 * Type definitions for the DibodevPhotoWithScreenSlideshow component props.
 * @type {DibodevPhotoWithScreenSlideshowProps}
 * @property {DibodevPhotoWithScreenSlide[]} slides - Slides, in display order.
 * @property {string} accessibleName - Name of the slideshow read by screen readers.
 * @property {DibodevPhotoWithScreenCaptionLayout} captionLayout - How the caption title and text are laid out.
 */
export type DibodevPhotoWithScreenSlideshowProps = {
  slides: DibodevPhotoWithScreenSlide[]
  accessibleName: string
  captionLayout: DibodevPhotoWithScreenCaptionLayout
}
