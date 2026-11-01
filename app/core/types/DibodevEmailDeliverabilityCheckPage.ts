import type {
  DibodevEmailDeliverabilityFindingKey,
  DibodevEmailDeliverabilityFindingSeverity,
  DibodevEmailDeliverabilityVerdict,
  DibodevEmailProviderGuideKey,
  DibodevEmailRecordKind,
} from '~/core/types/DibodevEmailDeliverabilityCheck'
import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevReferenceTableRow } from '~/core/types/DibodevReferenceTableSection'
import type { DibodevSectionHeadingContent } from '~/core/types/DibodevSectionHeading'
import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'

/** Texts of the three records block: `{spfRecord}`, `{dkimSelector}`, `{dmarcRecord}`… are filled by the checker. */
export type DibodevEmailRecordStatusWording = {
  spfFound: string
  spfMissing: string
  spfMultiple: string
  dkimFound: string
  dkimFoundSizeUnknown: string
  dkimMissing: string
  dmarcFound: string
  dmarcMissing: string
  dmarcMultiple: string
  dmarcMalformed: string
}

/** Texts of the checker in one language; templates use the `{placeholders}` filled by the checker. */
export type DibodevEmailDeliverabilityCheckerWording = {
  domainLabel: string
  domainPlaceholder: string
  domainHint: string
  submit: string
  checking: string
  resultLabel: string
  idleTitle: string
  idleText: string
  loadingTitle: string
  loadingText: string
  errorTitles: Record<DibodevSiteCheckErrorKind, string>
  errorTexts: Record<DibodevSiteCheckErrorKind, string>
  verdictTitles: Record<DibodevEmailDeliverabilityVerdict, string>
  verdictTexts: Record<DibodevEmailDeliverabilityVerdict, string>
  spfNoAllLabel: string
  recordsTitle: string
  recordLabels: Record<DibodevEmailRecordKind, string>
  recordStatusTexts: DibodevEmailRecordStatusWording
  providerLine: string
  providerUnknownLine: string
  providerNoMxLine: string
  sendingServicesLine: string
  findingsTitle: string
  severityLabels: Record<DibodevEmailDeliverabilityFindingSeverity, string>
  findingTexts: Record<DibodevEmailDeliverabilityFindingKey, string>
  fixesTitle: string
  nextStepsTitle: string
  fixTexts: Partial<Record<DibodevEmailDeliverabilityFindingKey, string>>
  verdictSteps: Partial<Record<DibodevEmailDeliverabilityVerdict, string[]>>
  guidesTitle: string
  guideLabels: Record<DibodevEmailProviderGuideKey, string>
  disclaimer: string
  idleCtaIntro: string
  idleCtaLabel: string
  ctaIntro: string
  ctaLabels: Record<DibodevEmailDeliverabilityVerdict, string>
}

/** Content of the e-mail deliverability check page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevEmailDeliverabilityCheckPageContent = {
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
  checker: DibodevEmailDeliverabilityCheckerWording
  offer: {
    emphasizedIntro: string
    text: string
    linkLabel: string
  }
  mobileContactBar: {
    text: string
    buttonLabel: string
  }
  facts: DibodevSectionHeadingContent & {
    anchorId: string
    facts: DibodevSourcedFact[]
    calloutEmphasizedIntro: string
    calloutText: string
  }
  checks: DibodevSectionHeadingContent & {
    anchorId: string
    items: DibodevGuarantee[]
  }
  providers: DibodevSectionHeadingContent & {
    anchorId: string
    providerColumnLabel: string
    detailColumnLabel: string
    guideColumnLabel: string
    rows: DibodevReferenceTableRow[]
    calloutEmphasizedIntro: string
    calloutText: string
  }
  method: DibodevSectionHeadingContent & {
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
