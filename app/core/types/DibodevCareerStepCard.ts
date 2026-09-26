export type DibodevCareerStep = {
  period: string
  title: string
  organization: string
  context: string
  description: string
  highlights: string[]
  technologies: string[]
  monogram: string
  isCurrent: boolean
}

export type DibodevCareerStepCardProps = {
  step: DibodevCareerStep
  currentStepLabel: string
}
