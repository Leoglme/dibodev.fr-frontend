export type DibodevCareerStep = {
  period: string
  title: string
  organization: string
  context: string
  description: string
  highlights: string[]
  technologies: string[]
  monogram: string
  /** Logo of the organisation, shown instead of the monogram when set. */
  logoSrc: string | null
  isCurrent: boolean
}

export type DibodevCareerStepCardProps = {
  step: DibodevCareerStep
  currentStepLabel: string
}
