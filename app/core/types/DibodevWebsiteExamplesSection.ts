import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

export type DibodevWebsiteExample = {
  key: string
  name: string
  description: string
  imageSrc: string
  imageAlt: string
  liveUrl: string
}

/**
 * Type definitions for the DibodevWebsiteExamplesSection component props.
 * @type {DibodevWebsiteExamplesSectionProps}
 * @property {string} anchorId - Id of the section, for in-page links.
 * @property {string} eyebrow - Small uppercase line displayed above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Optional paragraph displayed under the title.
 * @property {DibodevWebsiteExample[]} examples - The example websites, in display order.
 * @property {string} liveLinkLabel - Label of the link that opens an example in a new tab.
 * @property {string} ctaLabel - Label of the button under the examples.
 * @property {string} ctaTo - Where the button leads.
 * @property {DibodevSectionTone} tone - Background tone of the section.
 * @property {string} trackingLocation - `location` sent with the clicks of the section.
 */
export type DibodevWebsiteExamplesSectionProps = {
  anchorId: string
  eyebrow: string
  title: string
  intro: string
  examples: DibodevWebsiteExample[]
  liveLinkLabel: string
  ctaLabel: string
  ctaTo: string
  tone: DibodevSectionTone
  trackingLocation: string
}
