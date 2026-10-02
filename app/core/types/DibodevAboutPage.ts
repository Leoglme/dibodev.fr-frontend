import type { DibodevAccentPalette } from '~/core/types/DibodevAccentPalette'
import type { DibodevBrandLogo } from '~/core/types/DibodevBrandGlyph'
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
 * @property {string} brandColor - Brand colour shown around the link on hover.
 * @property {string} tileColor - Background of the tile behind the logo.
 * @property {string} logoColor - Colour of a single-colour logo or of the monogram on the tile.
 * @property {DibodevBrandLogo | null} logo - The brand logo, or null for a brand shown by its monogram.
 * @property {string | null} monogram - Initials shown when the brand has no logo.
 */
export type DibodevAboutProfileLink = {
  label: string
  href: string
  brandColor: string
  tileColor: string
  logoColor: string
  logo: DibodevBrandLogo | null
  monogram: string | null
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
