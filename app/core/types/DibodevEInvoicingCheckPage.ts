import type { DibodevEInvoicingSoftwareStatus, DibodevEInvoicingVerdict } from '~/core/types/DibodevEInvoicingCheck'
import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'

export type DibodevEInvoicingSectionHeading = {
  eyebrow: string
  title: string
  intro: string
}

/**
 * Texts of the checker in one language. Templates use `{name}`, `{query}`, `{editor}`, `{date}`, `{platform}`,
 * `{platformDate}`, `{listDate}`, `{registeredCount}`, `{pendingCount}` and `{sourceDate}`.
 */
export type DibodevEInvoicingCheckerWording = {
  softwareLabel: string
  softwarePlaceholder: string
  softwareHint: string
  submit: string
  suggestionsLabel: string
  suggestionPlatformDetail: string
  suggestionPendingDetail: string
  resultLabel: string
  idleTitle: string
  idleText: string
  verdictTitles: Record<DibodevEInvoicingVerdict, string>
  verdictTexts: Record<DibodevEInvoicingVerdict, string>
  detailsTitle: string
  registrationDateLine: string
  registrationDateUnknownLine: string
  pendingLine: string
  partnerPlatformLine: string
  partnerPlatformDateUnknownLine: string
  includedLine: string
  notIncludedLine: string
  publisherSourceLabel: string
  publisherSourceDatedLabel: string
  officialSourceLabel: string
  stepsTitle: string
  steps: Record<DibodevEInvoicingVerdict, string[]>
  disclaimer: string
  idleCtaIntro: string
  idleCtaLabel: string
  ctaIntro: string
  ctaLabels: Record<DibodevEInvoicingVerdict, string>
  serviceLinkLabel: string
}

/** Content of the e-invoicing software check page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevEInvoicingCheckPageContent = {
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
  checker: DibodevEInvoicingCheckerWording
  mobileContactBar: {
    text: string
    buttonLabel: string
  }
  facts: DibodevEInvoicingSectionHeading & {
    anchorId: string
    facts: DibodevSourcedFact[]
    calloutEmphasizedIntro: string
    calloutText: string
  }
  timeline: DibodevEInvoicingSectionHeading & {
    anchorId: string
    items: DibodevGuarantee[]
  }
  concerned: DibodevEInvoicingSectionHeading & {
    anchorId: string
    items: DibodevGuarantee[]
  }
  /** The table of common tools is built from the dataset: only its labels live here. */
  softwareTable: DibodevEInvoicingSectionHeading & {
    anchorId: string
    softwareColumnLabel: string
    statusColumnLabel: string
    platformColumnLabel: string
    statusLabels: Record<DibodevEInvoicingSoftwareStatus, string>
    noPlatformLabel: string
    officialSourceTemplate: string
    publisherSourceTemplate: string
    calloutEmphasizedIntro: string
    calloutText: string
  }
  /** One tile per tool: the publisher's note for compatible solutions, a template for accredited platforms. */
  guides: DibodevEInvoicingSectionHeading & {
    anchorId: string
    accreditedTemplate: string
    accreditedDateUnknownTemplate: string
    connectedPlatformTemplate: string
  }
  /** Accredited platforms with a free plan, listed for visitors who have no tool yet. */
  freePlatforms: DibodevEInvoicingSectionHeading & {
    anchorId: string
    itemTemplate: string
    itemDateUnknownTemplate: string
  }
  method: DibodevEInvoicingSectionHeading & {
    steps: DibodevMethodStep[]
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
  contactCta: {
    title: string
    description: string
    button: string
  }
}
