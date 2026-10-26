import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevPricedProduct } from '~/core/types/DibodevPriceListSection'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'
import type { DibodevSectionHeadingContent } from '~/core/types/DibodevSectionHeading'
import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'
import type {
  DibodevWordPressHackGuideKey,
  DibodevWordPressHackSignalKey,
  DibodevWordPressHackVerdict,
  DibodevWordPressPluginStatus,
} from '~/core/types/DibodevWordPressHackCheck'

/** Texts of the checker in one language; templates use the `{placeholders}` filled by the checker. */
export type DibodevWordPressHackCheckerWording = {
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
  verdictTitles: Record<DibodevWordPressHackVerdict, string>
  verdictTexts: Record<DibodevWordPressHackVerdict, string>
  detailsTitle: string
  signalTexts: Record<DibodevWordPressHackSignalKey, string>
  coreVersionHiddenLine: string
  pluginsTitle: string
  pluginStatusTexts: Record<DibodevWordPressPluginStatus, string>
  stepsTitle: string
  steps: Record<DibodevWordPressHackVerdict, string[]>
  disclaimer: string
  guidesTitle: string
  guideLabels: Record<DibodevWordPressHackGuideKey, string>
  idleCtaIntro: string
  idleCtaLabel: string
  ctaIntro: string
  ctaLabels: Record<DibodevWordPressHackVerdict, string>
  serviceLinkLabel: string
}

/** Content of the WordPress hack check page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevWordPressHackCheckPageContent = {
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
  checker: DibodevWordPressHackCheckerWording
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
  signs: DibodevSectionHeadingContent & {
    anchorId: string
    items: DibodevGuarantee[]
  }
  watchedPlugins: DibodevSectionHeadingContent & {
    anchorId: string
    pluginColumnLabel: string
    issueColumnLabel: string
    fixedVersionColumnLabel: string
    rows: DibodevPricedProduct[]
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
