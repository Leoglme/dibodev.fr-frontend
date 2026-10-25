import type { DibodevQuizQuestion } from '~/core/types/DibodevQuiz'

export type DibodevEInvoicingScopeVerdict = 'outOfScope' | 'receiveOnly' | 'smallBusiness' | 'largeBusiness'

export type DibodevEInvoicingScopeAdviceKey =
  | 'vatUnsure'
  | 'outOfScopeDoubt'
  | 'associationActivity'
  | 'landlordServices'
  | 'exemptMixed'
  | 'businessCustomers'
  | 'consumerCustomers'
  | 'abroadCustomers'
  | 'publicCustomers'
  | 'noInvoices'
  | 'softwareTool'
  | 'tradeTool'
  | 'officeTool'
  | 'officeToolReceive'
  | 'noTool'
  | 'directory'

/** Texts of one verdict: `headline` goes large on the card, `issuingDateWords` replaces `{issuingDate}` in the advice. */
export type DibodevEInvoicingScopeVerdictWording = {
  title: string
  explanation: string
  headline: string
  headlineSuffix: string
  receptionValue: string
  issuingValue: string
  reportingValue: string
  platformValue: string
  issuingDateWords: string
  ctaLabel: string
  leadBudget: string
}

/** Texts of the e-invoicing scope test in one language; the `*Words` records turn answer ids into sentence fragments. */
export type DibodevEInvoicingScopeQuizWording = {
  quizName: string
  questions: DibodevQuizQuestion[]
  verdicts: Record<DibodevEInvoicingScopeVerdict, DibodevEInvoicingScopeVerdictWording>
  cardEyebrow: string
  receptionLabel: string
  issuingLabel: string
  reportingLabel: string
  platformLabel: string
  cardFootnote: string
  cardFootnoteLinkLabel: string
  cardFootnoteLinkHref: string
  adviceTitle: string
  advice: Record<DibodevEInvoicingScopeAdviceKey, string>
  summaryTemplate: string
  statusWords: Record<string, string>
  vatWords: Record<string, string>
  sizeWords: Record<string, string>
  customerWords: Record<string, string>
  customersNoneWord: string
  toolWords: Record<string, string>
  conjunction: string
  disclaimer: string
  leadFormTitle: string
  leadFormIntro: string
}
