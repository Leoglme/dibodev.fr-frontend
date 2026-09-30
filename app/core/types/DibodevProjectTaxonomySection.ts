import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/**
 * Small logo tile of a project shown on a listing card.
 * @type {DibodevProjectTaxonomyLogo}
 * @property {string} name - Project name (accessible label).
 * @property {string} url - Logo URL.
 * @property {string} backgroundColor - Tile background, the project's secondary colour.
 */
export type DibodevProjectTaxonomyLogo = {
  name: string
  url: string
  backgroundColor: string
}

/**
 * Link to a project category or sector listing page, with the number of projects it holds.
 * @type {DibodevProjectTaxonomyLink}
 * @property {string} key - Category or sector key (stable identifier).
 * @property {string} label - Translated name.
 * @property {string} description - Short translated description (cards only, may be empty).
 * @property {number} count - Number of published projects in the listing.
 * @property {string} to - Localized route of the listing page.
 * @property {DibodevProjectTaxonomyLogo[]} logos - Up to three project logos of the listing (favourites first).
 */
export type DibodevProjectTaxonomyLink = {
  key: string
  label: string
  description: string
  count: number
  to: string
  logos: DibodevProjectTaxonomyLogo[]
}

/**
 * Type definitions for the DibodevProjectTaxonomySection component props.
 * @type {DibodevProjectTaxonomySectionProps}
 * @property {string} eyebrow - Small uppercase line displayed above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Optional paragraph displayed under the title.
 * @property {DibodevProjectTaxonomyLink[]} links - The listing pages to link to.
 * @property {'cards' | 'chips'} variant - Cards (icon, label, description, logos, count) or compact chips (label, count).
 * @property {boolean} hideEmpty - Whether listings without projects are left out.
 * @property {DibodevSectionTone} tone - Background tone of the section.
 */
export type DibodevProjectTaxonomySectionProps = {
  eyebrow: string
  title: string
  intro: string
  links: DibodevProjectTaxonomyLink[]
  variant: 'cards' | 'chips'
  hideEmpty: boolean
  tone: DibodevSectionTone
}
