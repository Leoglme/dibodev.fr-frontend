import type { DibodevQuizQuestion } from '~/core/types/DibodevQuiz'

/** Verdicts of the test without Search Console: never certain, always « likely ». */
export type DibodevGoogleUpdateQuizVerdict = 'updateLikely' | 'otherCauseLikely' | 'tooEarlyToTell'

export type DibodevGoogleUpdateQuizAdviceKey =
  | 'dontTouch'
  | 'waitWeekAfterEnd'
  | 'compareWithExport'
  | 'checkTechnical'
  | 'checkRecentChanges'
  | 'checkContactForm'
  | 'brandMissing'
  | 'season'
  | 'somePagesOnly'
  | 'noteDates'

/** Texts of one verdict: `headline` goes large on the card, `nextStepValue` fills its last row, `leadBudget` names the case in a lead. */
export type DibodevGoogleUpdateQuizVerdictWording = {
  title: string
  explanation: string
  headline: string
  headlineSuffix: string
  nextStepValue: string
  ctaLabel: string
  leadBudget: string
}

/** Texts of the test in one language: `{startDate}`, `{endDate}` and `{name}` are filled from the newest update. */
export type DibodevGoogleUpdateQuizWording = {
  quizName: string
  questions: DibodevQuizQuestion[]
  verdicts: Record<DibodevGoogleUpdateQuizVerdict, DibodevGoogleUpdateQuizVerdictWording>
  cardEyebrow: string
  startLabel: string
  rolloutLabel: string
  rolloutOngoingValue: string
  rolloutFinishedTemplate: string
  reliableFromLabel: string
  reliableFromOngoingValue: string
  reliableFromTemplate: string
  nextStepLabel: string
  cardFootnote: string
  cardFootnoteLinkLabel: string
  cardFootnoteLinkHref: string
  adviceTitle: string
  advice: Record<DibodevGoogleUpdateQuizAdviceKey, string>
  summaryTemplate: string
  timingWords: Record<string, string>
  changeWords: Record<string, string>
  brandWords: Record<string, string>
  scopeWords: Record<string, string>
  impactWords: Record<string, string>
  disclaimer: string
  leadFormTitle: string
  leadFormIntro: string
}
