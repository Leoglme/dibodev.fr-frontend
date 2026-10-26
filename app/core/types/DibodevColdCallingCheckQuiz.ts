import type { DibodevQuizPriceDetail, DibodevQuizQuestion } from '~/core/types/DibodevQuiz'

export type DibodevColdCallingCheckVerdict = 'sectorBanned' | 'consentRequired' | 'allowedWithRules' | 'businessAllowed'

export type DibodevColdCallingCheckAdviceKey =
  | 'housingCallback'
  | 'housingMessages'
  | 'cpfNoCallback'
  | 'consentUnsure'
  | 'consentNotProven'
  | 'formerCustomers'
  | 'collectConsent'
  | 'quoteRequests'
  | 'purchasedList'
  | 'directoryNumbers'
  | 'contractScope'
  | 'sectorContractOnly'
  | 'consentLimits'
  | 'duringTheCall'
  | 'sectorConsumersOnly'
  | 'businessRelevance'
  | 'personalPhoneGreyArea'
  | 'businessEmail'
  | 'businessCallsAlso'
  | 'attractRequests'

/** Texts of one verdict: `headline` goes large on the violet card, `details` are its rows (short label, short value). */
export type DibodevColdCallingCheckVerdictWording = {
  title: string
  explanation: string
  headline: string
  headlineSuffix: string
  details: DibodevQuizPriceDetail[]
  cardFootnote: string
  ctaLabel: string
  leadBudget: string
}

/** Texts of the cold calling test in one language; the `*Words` records turn answer ids into sentence fragments. */
export type DibodevColdCallingCheckQuizWording = {
  quizName: string
  questions: DibodevQuizQuestion[]
  verdicts: Record<DibodevColdCallingCheckVerdict, DibodevColdCallingCheckVerdictWording>
  cardEyebrow: string
  cardFootnoteLinkLabel: string
  cardFootnoteLinkHref: string
  adviceTitle: string
  advice: Record<DibodevColdCallingCheckAdviceKey, string>
  summaryTemplate: string
  targetWords: Record<string, string>
  sectorWords: Record<string, string>
  relationshipWords: Record<string, string>
  consentWords: Record<string, string>
  numberSourceWords: Record<string, string>
  numberSourcesNoneWord: string
  conjunction: string
  disclaimer: string
  leadFormTitle: string
  leadFormIntro: string
}
