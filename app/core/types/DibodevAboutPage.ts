import type { DibodevAccentPalette } from '~/core/types/DibodevAccentPalette'
import type { DibodevCareerStep } from '~/core/types/DibodevCareerStepCard'
import type { DibodevServiceIconName } from '~/core/types/DibodevServiceIcon'

export type DibodevAboutFact = {
  label: string
  value: string
}

export type DibodevAboutProfileLink = {
  label: string
  href: string
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
