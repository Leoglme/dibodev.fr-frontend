/** Width of the markers: 'regular' keeps one width on every screen, 'compact' is narrower on phones. */
export type DibodevSlideshowMarkersSize = 'regular' | 'compact'

/**
 * Type definitions for the DibodevSlideshowMarkers component props.
 * @type {DibodevSlideshowMarkersProps}
 * @property {string[]} slideNames - Name of each slide, read by screen readers on its marker.
 * @property {number} activeIndex - Index of the slide on screen.
 * @property {boolean} isAutoplayRunning - Whether the active marker fills up until the next slide comes.
 * @property {DibodevSlideshowMarkersSize} size - Width of the markers.
 */
export type DibodevSlideshowMarkersProps = {
  slideNames: string[]
  activeIndex: number
  isAutoplayRunning: boolean
  size: DibodevSlideshowMarkersSize
}
