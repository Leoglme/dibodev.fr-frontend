import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevTradeWebsiteKey } from '~/core/types/DibodevTradeWebsite'

export type DibodevTradeWebsiteHubCardContent = {
  key: DibodevTradeWebsiteKey
  title: string
  description: string
}

/** Content of the "websites by trade" hub in one language. */
export type DibodevTradeWebsiteHubPageContent = {
  meta: {
    title: string
    description: string
    inLanguage: string
  }
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
    cta: string
    reassurances: string[]
    tradesCountLabel: string
    templatesCountLabel: string
    priceValue: string
    priceLabel: string
  }
  catalog: {
    anchorId: string
    eyebrow: string
    title: string
    intro: string
    cards: DibodevTradeWebsiteHubCardContent[]
    stylesCountOne: string
    stylesCountMany: string
    linkLabel: string
    otherTrade: {
      title: string
      description: string
      linkLabel: string
    }
  }
  pricing: {
    intro: string
    templateOfferDescription: string
    customOfferDescription: string
  }
  faq: {
    title: string
    questions: DibodevFaqQuestion[]
  }
  contactCta: {
    title: string
    description: string
    button: string
  }
}
