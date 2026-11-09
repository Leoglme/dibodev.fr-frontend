import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevPricedProduct } from '~/core/types/DibodevPriceListSection'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'
import type { DibodevSectionHeadingContent } from '~/core/types/DibodevSectionHeading'
import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'
import type {
  DibodevJoomlaVersionGuideKey,
  DibodevJoomlaVersionSignalKey,
  DibodevJoomlaVersionVerdict,
} from '~/core/types/DibodevJoomlaVersionCheck'

/** Texts of the checker in one language; templates use the `{placeholders}` filled by the checker. */
export type DibodevJoomlaVersionCheckerWording = {
  siteLabel: string
  sitePlaceholder: string
  siteHint: string
  submit: string
  checking: string
  resultLabel: string
  idleTitle: string
  idleText: string
  loadingTitle: string
  loadingText: string
  errorTitles: Record<DibodevSiteCheckErrorKind, string>
  errorTexts: Record<DibodevSiteCheckErrorKind, string>
  verdictTitles: Record<DibodevJoomlaVersionVerdict, string>
  verdictTexts: Record<DibodevJoomlaVersionVerdict, string>
  detailsTitle: string
  signalTexts: Record<DibodevJoomlaVersionSignalKey, string>
  stepsTitle: string
  steps: Record<DibodevJoomlaVersionVerdict, string[]>
  disclaimer: string
  guidesTitle: string
  guideLabels: Record<DibodevJoomlaVersionGuideKey, string>
  idleCtaIntro: string
  idleCtaLabel: string
  ctaIntro: string
  ctaLabels: Record<DibodevJoomlaVersionVerdict, string>
  serviceLinkLabel: string
  healthCheckLinkLabel: string
}

/** Content of the Joomla version check page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevJoomlaVersionCheckPageContent = {
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
  checker: DibodevJoomlaVersionCheckerWording
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
  versions: DibodevSectionHeadingContent & {
    anchorId: string
    versionColumnLabel: string
    supportColumnLabel: string
    latestReleaseColumnLabel: string
    rows: DibodevPricedProduct[]
    calloutEmphasizedIntro: string
    calloutText: string
  }
  blockers: DibodevSectionHeadingContent & {
    anchorId: string
    items: DibodevGuarantee[]
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
