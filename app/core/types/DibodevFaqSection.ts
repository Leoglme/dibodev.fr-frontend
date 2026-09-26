export type DibodevFaqQuestion = {
  question: string
  answer: string
}

export type DibodevFaqSectionProps = {
  title: string
  questions: DibodevFaqQuestion[]
}
