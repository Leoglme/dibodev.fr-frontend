import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevFeatureCard } from '~/core/types/DibodevFeatureCardsSection'
import type { DibodevResourceCard } from '~/core/types/DibodevResourceCardsSection'
import type { DibodevSiteAtelierTradeWording } from '~/core/types/DibodevSiteAtelier'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'
import type { DibodevTradeWebsiteKey } from '~/core/types/DibodevTradeWebsite'

/** Content of a "website for <trade>" page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevTradeWebsitePageContent = {
  meta: {
    title: string
    description: string
    inLanguage: string
    serviceName: string
    serviceDescription: string
    serviceType: string
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
    intro: string
    reassurances: string[]
  }
  summary: {
    text: string
    authorBio: string
  }
  atelier: DibodevSiteAtelierTradeWording
  examples: {
    title: string
    imageAlt: string
  }
  contents: {
    eyebrow: string
    title: string
    intro: string
    cards: DibodevFeatureCard[]
  }
  rules: {
    eyebrow: string
    title: string
    intro: string
    facts: DibodevSourcedFact[]
    footnote: string
  }
  pricing: {
    intro: string
    templateOfferDescription: string
    customOfferDescription: string
  }
  resources: {
    title: string
    toolCard: DibodevResourceCard | null
    freeTemplateCard: DibodevResourceCard | null
  }
  faq: {
    title: string
    questions: DibodevFaqQuestion[]
  }
  contactCta: {
    title: string
    description: string
  }
  mobileBarText: string
}

/** Texts shared by every trade page and by the hub, in one language. */
export type DibodevTradeWebsiteSharedWording = {
  hubBreadcrumbLabel: string
  summaryTitle: string
  authorIntro: string
  tradeLabels: Record<DibodevTradeWebsiteKey, string>
  pricing: {
    eyebrow: string
    title: string
    highlightLabel: string
    templateOfferTitle: string
    templateOfferPrice: string
    customOfferTitle: string
    customOfferPrice: string
    notes: string[]
    demoButtonLabel: string
    quoteLinkLabel: string
  }
  resourcesEyebrow: string
  fallbackResourceCards: {
    websiteHealthCheck: DibodevResourceCard
    websitePriceBarometer: DibodevResourceCard
  }
  examples: {
    eyebrow: string
    introOne: string
    introMany: string
    nameTemplate: string
    liveLinkLabel: string
    ctaLabel: string
    hubImageAlt: string
  }
  otherTradesTitle: string
  allTradesLabel: string
  faqEyebrow: string
  relatedArticlesTitle: string
  contactCtaButton: string
  mobileBarButton: string
}
