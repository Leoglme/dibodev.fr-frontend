import type { DibodevQuizQuestion } from '~/core/types/DibodevQuiz'

export type DibodevWebAccessibilityScopeVerdict =
  | 'publicSector'
  | 'largeCompany'
  | 'eaaInScope'
  | 'recommended'
  | 'checkNeeded'

export type DibodevWebAccessibilityScopeAdviceKey =
  | 'publicDeclaration'
  | 'largeCompanyDeclaration'
  | 'rgaaAudit'
  | 'accessibilityInformation'
  | 'noTransitionForWebsites'
  | 'contractsTransition'
  | 'disproportionateBurden'
  | 'alsoEuropeanLaw'
  | 'subtitles'
  | 'microExemption'
  | 'businessCustomersOnly'
  | 'showcaseRecommended'
  | 'internalTools'
  | 'associationEssentialServices'
  | 'regulatedSector'
  | 'customerAreaCommerce'
  | 'accessibleFromSpecification'
  | 'sixGestures'

/** Texts of one verdict: `headline` goes large on the card, the four values fill its rows, `leadBudget` names the case in a lead. */
export type DibodevWebAccessibilityScopeVerdictWording = {
  title: string
  explanation: string
  headline: string
  headlineSuffix: string
  lawValue: string
  standardValue: string
  publicationValue: string
  controlValue: string
  ctaLabel: string
  leadBudget: string
}

/** Texts of the web accessibility scope test in one language; the `*Words` records turn answer ids into sentence fragments. */
export type DibodevWebAccessibilityScopeQuizWording = {
  quizName: string
  questions: DibodevQuizQuestion[]
  verdicts: Record<DibodevWebAccessibilityScopeVerdict, DibodevWebAccessibilityScopeVerdictWording>
  cardEyebrow: string
  lawLabel: string
  standardLabel: string
  publicationLabel: string
  controlLabel: string
  cardFootnote: string
  cardFootnoteLinkLabel: string
  cardFootnoteLinkHref: string
  adviceTitle: string
  advice: Record<DibodevWebAccessibilityScopeAdviceKey, string>
  summaryTemplate: string
  organizationWords: Record<string, string>
  sizeWords: Record<string, string>
  websiteWords: Record<string, string>
  customerWords: Record<string, string>
  timingWords: Record<string, string>
  disclaimer: string
  leadFormTitle: string
  leadFormIntro: string
}
