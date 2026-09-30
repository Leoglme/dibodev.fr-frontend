/**
 * One slide of the hero showcase: a real screenshot of a project.
 * @type {DibodevHeroShowcaseSlide}
 * @property {string} name - Short project name displayed under the frame.
 * @property {string} tagline - What the project is (from the project name after the dash).
 * @property {string} route - Localized route of the project page.
 * @property {string} imageUrl - Screenshot URL resized for the frame.
 * @property {string} imageSrcset - Responsive sources of the screenshot.
 */
export type DibodevHeroShowcaseSlide = {
  name: string
  tagline: string
  route: string
  imageUrl: string
  imageSrcset: string
}

/**
 * A project to show in a showcase and which of its two media assets is the clean screenshot to use.
 * @type {DibodevShowcaseProjectEntry}
 * @property {string} slug - Last segment of the project route (e.g. "gestion-temps").
 * @property {'media1' | 'media2'} media - The media field holding a real screenshot (not a device mockup).
 */
export type DibodevShowcaseProjectEntry = {
  slug: string
  media: 'media1' | 'media2'
}

/**
 * Type definitions for the DibodevHeroShowcase component props.
 * @type {DibodevHeroShowcaseProps}
 * @property {DibodevHeroShowcaseSlide[]} slides - The slides, first one rendered on the server.
 */
export type DibodevHeroShowcaseProps = {
  slides: DibodevHeroShowcaseSlide[]
}
