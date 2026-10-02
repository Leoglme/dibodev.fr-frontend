import type { DibodevAccentPalette } from '~/core/types/DibodevAccentPalette'
import type { DibodevCareerStep } from '~/core/types/DibodevCareerStepCard'
import type { DibodevServiceIconName } from '~/core/types/DibodevServiceIcon'

export type DibodevAboutFact = {
  label: string
  value: string
}

export type DibodevAboutStoryBlock = {
  title: string
  text: string
}

/** A fact of the "in short" list of the About page, shown with a line icon. */
export type DibodevAboutKeyFact = DibodevAboutFact & {
  icon: string
}

/**
 * One of Léo's profiles on another site, shown with the logo of its brand.
 * @type {DibodevAboutProfileLink}
 * @property {string} label - Name of the site.
 * @property {string} href - URL of the profile.
 * @property {string} logoSrc - Path of the brand logo file.
 */
export type DibodevAboutProfileLink = {
  label: string
  href: string
  logoSrc: string
}

export type DibodevAboutCareerStepConfig = {
  key: string
  monogram: string
  /** Logo of the organisation, shown instead of the monogram when set. */
  logoSrc: string | null
  /** The logo is a full square image that fills the tile, instead of a mark centred on white. */
  hasFullTileLogo: boolean
  highlightKeys: string[]
  technologies: string[]
  isCurrent: boolean
}

export type DibodevAboutTimeline = {
  title: string
  steps: DibodevCareerStep[]
}

export type DibodevAboutSkillGroupConfig = {
  key: string
  serviceIconName: DibodevServiceIconName
  technologies: string[]
  isHighlighted: boolean
}

export type DibodevAboutSkillGroup = DibodevAboutSkillGroupConfig & {
  title: string
  description: string
  palette: DibodevAccentPalette
}
