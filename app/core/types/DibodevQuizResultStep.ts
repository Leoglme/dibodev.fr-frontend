import type { DibodevQuizConversionView, DibodevQuizResult } from '~/core/types/DibodevQuiz'

/** Result heading and contact block, which must both be on screen once the test is finished. */
export type DibodevQuizResultRevealTargets = {
  heading: HTMLElement | null
  contactBlock: HTMLElement | null
}

export type DibodevQuizResultStepProps = {
  result: DibodevQuizResult
  conversionView: DibodevQuizConversionView
  quizId: string
  projectTypeLabel: string
  leadMessage: string
}
