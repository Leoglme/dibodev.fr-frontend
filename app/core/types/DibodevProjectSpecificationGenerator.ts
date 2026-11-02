import type { DibodevProjectSpecificationWording } from '~/core/types/DibodevProjectSpecification'

/** What the visitor looks at on a small screen, which sets the text and the target of the bar at the bottom. */
export type DibodevProjectSpecificationMobileBarMode = 'preview' | 'questions' | 'ready'

/**
 * Props of the specification generator.
 * @type {DibodevProjectSpecificationGeneratorProps}
 * @property {DibodevProjectSpecificationWording} wording - Questions, options and document texts of the page language.
 * @property {string} anchorId - Id of the generator, targeted by the buttons that lead to it.
 * @property {string} languageTag - BCP 47 tag of the page language, for the date and the Word file.
 * @property {string} trackingLocation - `location` sent with the PostHog events of the generator.
 */
export type DibodevProjectSpecificationGeneratorProps = {
  wording: DibodevProjectSpecificationWording
  anchorId: string
  languageTag: string
  trackingLocation: string
}
