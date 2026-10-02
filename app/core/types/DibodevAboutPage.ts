import type { DibodevAccentPalette } from '~/core/types/DibodevAccentPalette'
import type { DibodevCareerStep } from '~/core/types/DibodevCareerStepCard'
import type { DibodevServiceIconName } from '~/core/types/DibodevServiceIcon'

export type DibodevAboutFact = {
  label: string
  value: string
}

/** A fact of the "in short" list of the About page, shown with a line icon. */
export type DibodevAboutKeyFact = DibodevAboutFact & {
  icon: string
}

/**
 * One of Léo's profiles on another site, shown with the colours of its brand.
 * @type {DibodevAboutProfileLink}
 * @property {string} label - Name of the site.
 * @property {string} href - URL of the profile.
 * @property {string} brandColor - Brand colour of the tile behind the logo.
 * @property {string} logoColor - Colour of the logo or of the monogram on the tile.
 * @property {string | null} logoPath - Path of the brand logo (24 × 24 box), or null for a brand shown by its monogram.
 * @property {string | null} monogram - Initials shown when the brand has no logo path.
 */
export type DibodevAboutProfileLink = {
  label: string
  href: string
  brandColor: string
  logoColor: string
  logoPath: string | null
  monogram: string | null
}

export type DibodevAboutCareerStepConfig = {
  key: string
  monogram: string
  /** Logo of the organisation, shown instead of the monogram when set. */
  logoSrc: string | null
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
