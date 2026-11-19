import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type {
  DibodevGmailSendAsHosting,
  DibodevGmailSendAsReadingAnswer,
  DibodevGmailSendAsReceivingAnswer,
  DibodevGmailSendAsSendingAnswer,
  DibodevGmailSendAsVerdict,
} from '~/core/types/DibodevGmailSendAsCheck'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevNumberedGuideItem } from '~/core/types/DibodevNumberedGuideSection'
import type { DibodevPricedProduct } from '~/core/types/DibodevPriceListSection'
import type { DibodevReferenceTableRow } from '~/core/types/DibodevReferenceTableSection'
import type { DibodevSectionHeadingContent } from '~/core/types/DibodevSectionHeading'
import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'

/** One question of the checker: `hint` says where to look in Gmail, empty when the question needs none. */
export type DibodevGmailSendAsQuestionWording<TAnswer extends string> = {
  label: string
  hint: string
  options: Record<TAnswer, string>
}

/** Texts of the checker in one language; templates use `{domain}`, `{host}` and `{mxHost}`, filled by the checker. */
export type DibodevGmailSendAsCheckerWording = {
  addressLabel: string
  addressPlaceholder: string
  addressHint: string
  submit: string
  checking: string
  questionsTitle: string
  questionsIntro: string
  questions: {
    reading: DibodevGmailSendAsQuestionWording<DibodevGmailSendAsReadingAnswer>
    sending: DibodevGmailSendAsQuestionWording<DibodevGmailSendAsSendingAnswer>
    receiving: DibodevGmailSendAsQuestionWording<DibodevGmailSendAsReceivingAnswer>
  }
  resultLabel: string
  idleTitle: string
  idleText: string
  loadingTitle: string
  loadingText: string
  errorTitles: Record<DibodevSiteCheckErrorKind, string>
  errorTexts: Record<DibodevSiteCheckErrorKind, string>
  hostingTitle: string
  hostingLines: Record<DibodevGmailSendAsHosting, string>
  unknownHostName: string
  pendingTitle: string
  pendingText: string
  verdictTitles: Record<DibodevGmailSendAsVerdict, string>
  verdictTexts: Record<DibodevGmailSendAsVerdict, string>
  checkSendingNote: string
  checkReceivingNote: string
  stepsTitle: string
  verdictSteps: Partial<Record<DibodevGmailSendAsVerdict, string[]>>
  hostGuideTitle: string
  disclaimer: string
  idleCtaIntro: string
  idleCtaLabel: string
  ctaIntro: string
  ctaLabel: string
}

/** Content of the Gmail "Send mail as" check page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevGmailSendAsCheckPageContent = {
  meta: {
    title: string
    description: string
    inLanguage: string
    schemaAbout: string
  }
  breadcrumbLabel: string
  shareImage: {
    titleLines: string[]
    highlight: string
    subtitle: string
    badge: string
    alt: string
  }
  hero: {
    titleBefore: string
    titleHighlight: string
    titleAfter: string
    reassurances: string[]
    description: string
    authorIntro: string
    authorBio: string
  }
  checker: DibodevGmailSendAsCheckerWording
  mobileContactBar: {
    text: string
    buttonLabel: string
  }
  summary: {
    eyebrow: string
    text: string
    dateLabel: string
  }
  facts: DibodevSectionHeadingContent & {
    anchorId: string
    facts: DibodevSourcedFact[]
    calloutEmphasizedIntro: string
    calloutText: string
  }
  unchanged: DibodevSectionHeadingContent & {
    anchorId: string
    items: DibodevGuarantee[]
  }
  gmailSteps: DibodevSectionHeadingContent & {
    steps: DibodevMethodStep[]
  }
  solutions: DibodevSectionHeadingContent & {
    anchorId: string
    solutionColumnLabel: string
    coverageColumnLabel: string
    costColumnLabel: string
    rows: DibodevPricedProduct[]
    calloutEmphasizedIntro: string
    calloutText: string
  }
  hosts: DibodevSectionHeadingContent & {
    anchorId: string
    hostColumnLabel: string
    detailColumnLabel: string
    guideColumnLabel: string
    rows: DibodevReferenceTableRow[]
    calloutEmphasizedIntro: string
    calloutText: string
  }
  pitfalls: DibodevSectionHeadingContent & {
    anchorId: string
    pitfallLabel: string
    items: DibodevNumberedGuideItem[]
  }
  experience: {
    eyebrow: string
    title: string
    emphasizedIntro: string
    text: string
  }
  faq: {
    eyebrow: string
    title: string
    questions: DibodevFaqQuestion[]
  }
  relatedArticles: {
    title: string
    intro: string
  }
  nextTools: {
    eyebrow: string
    title: string
  }
  contactCta: {
    title: string
    description: string
    button: string
  }
}
