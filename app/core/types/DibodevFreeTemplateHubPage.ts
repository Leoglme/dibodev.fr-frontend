import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevToolShareImageIcon } from '~/core/types/DibodevToolShareImage'

/** Texts of one template card of the hub in one language, matched to the catalog entry by `key`. */
export type DibodevFreeTemplateHubCardContent = {
  key: string
  tradeLabel: string
  title: string
  description: string
  formats: string
}

/** Content of the free templates hub in one language. */
export type DibodevFreeTemplateHubPageContent = {
  meta: {
    title: string
    description: string
    inLanguage: string
  }
  breadcrumbLabel: string
  shareImage: {
    titleLines: string[]
    highlight: string
    subtitle: string
    badge: string
    icon: DibodevToolShareImageIcon
    alt: string
  }
  hero: {
    titlePart1: string
    titleHighlight1: string
    titlePart2: string
    description: string
    cta: string
    templatesCountLabel: string
    formatsValue: string
    formatsLabel: string
    reassurances: string[]
  }
  catalog: {
    anchorId: string
    eyebrow: string
    title: string
    intro: string
    templateLinkLabel: string
    testLinkLabel: string
    cards: DibodevFreeTemplateHubCardContent[]
  }
  faq: {
    eyebrow: string
    title: string
    questions: DibodevFaqQuestion[]
  }
  contactCta: {
    title: string
    description: string
    button: string
  }
}
