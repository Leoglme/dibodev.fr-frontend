import type { DibodevQuizQuestion } from '~/core/types/DibodevQuiz'

export type DibodevQuizQuestionStepProps = {
  question: DibodevQuizQuestion
  selectedOptionIds: string[]
}
