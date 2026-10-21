import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevPricingOffer } from '~/core/types/DibodevPricingSection'

export type DibodevPhpUpdateSectionHeading = {
  eyebrow: string
  title: string
  intro: string
}

/** Content of the PHP update service page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevPhpUpdateServicePageContent = {
  meta: {
    title: string
    description: string
    serviceName: string
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
    titlePart1: string
    titleHighlight1: string
    titlePart2: string
    description: string
    ctaText: string
    secondaryCtaText: string
    reassurances: string[]
  }
  offers: DibodevPhpUpdateSectionHeading & {
    anchorId: string
    cards: DibodevPricingOffer[]
    notes: string[]
    ctaLabel: string
    highlightLabel: string
    toolLinkText: string
  }
  included: DibodevPhpUpdateSectionHeading & {
    anchorId: string
    items: DibodevGuarantee[]
  }
  audiences: DibodevPhpUpdateSectionHeading & {
    anchorId: string
    items: DibodevGuarantee[]
  }
  method: DibodevPhpUpdateSectionHeading & {
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
  mobileContactBar: {
    text: string
    buttonLabel: string
  }
}
