import type { DibodevQuizQuestion } from '~/core/types/DibodevQuiz'

/** Level of risk of an AI-built application, from the lightest to the heaviest recommendation. */
export type DibodevAiAppCheckVerdict = 'watch' | 'secure' | 'takeover'

/** Points to check first, in the order they are listed in a result. */
export type DibodevAiAppCheckAdviceKey = 'rls' | 'keys' | 'payments' | 'export' | 'backup' | 'tests' | 'credits'

/** Texts of one verdict: `price` is the formula recommended after the free audit, `nextStep` what it covers. */
export type DibodevAiAppCheckVerdictWording = {
  title: string
  explanation: string
  price: string
  priceSuffix: string
  nextStep: string
  leadBudget: string
}

/** Texts of the AI application check in one language; the `*Words` records turn answer ids into sentence fragments. */
export type DibodevAiAppCheckQuizWording = {
  quizName: string
  questions: DibodevQuizQuestion[]
  verdicts: Record<DibodevAiAppCheckVerdict, DibodevAiAppCheckVerdictWording>
  priceCardEyebrow: string
  firstStepLabel: string
  firstStepValue: string
  firstOpinionLabel: string
  firstOpinionValue: string
  nextStepLabel: string
  priceFootnote: string
  priceFootnoteLinkLabel: string
  adviceTitle: string
  advice: Record<DibodevAiAppCheckAdviceKey, string>
  summaryTemplate: string
  toolWords: Record<string, string>
  stageWords: Record<string, string>
  usersWords: Record<string, string>
  dataWords: Record<string, string>
  dataNoneWord: string
  conjunction: string
  disclaimer: string
  ctaLabel: string
  leadFormTitle: string
  leadFormIntro: string
}
