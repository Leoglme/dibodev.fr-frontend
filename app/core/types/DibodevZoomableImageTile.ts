/**
 * Type definitions for the DibodevZoomableImageTile component props.
 * @type {DibodevZoomableImageTileProps}
 * @property {string} src - URL of the image.
 * @property {string} alt - Alternative text of the image, also used for the enlarged view.
 * @property {boolean} isSingleImage - Whether the image is alone in its gallery: its frame is then wider.
 */
export type DibodevZoomableImageTileProps = {
  src: string
  alt: string
  isSingleImage: boolean
}
