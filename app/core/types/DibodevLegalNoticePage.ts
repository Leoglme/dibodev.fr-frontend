import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevIconCard } from '~/core/types/DibodevIconCardsSection'
import type { DibodevLegalNoticeGeneratorWording } from '~/core/types/DibodevLegalNoticeGenerator'
import type { DibodevNumberedGuideItem } from '~/core/types/DibodevNumberedGuideSection'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'

export type DibodevLegalNoticeSectionHeading = {
  anchorId: string
  eyebrow: string
  title: string
  intro: string
}

/** Content of the legal notice generator page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevLegalNoticePageContent = {
  meta: {
    title: string
    description: string
    inLanguage: string
    schemaAbout: string
  }
  applicationName: string
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
    aboutTitle: string
    description: string
    authorIntro: string
    authorBio: string
  }
  generator: DibodevLegalNoticeGeneratorWording
  rules: DibodevLegalNoticeSectionHeading & {
    facts: DibodevSourcedFact[]
    calloutEmphasizedIntro: string
    calloutText: string
  }
  statuses: DibodevLegalNoticeSectionHeading & {
    cards: DibodevIconCard[]
  }
  privacyGuide: DibodevLegalNoticeSectionHeading & {
    pitfallLabel: string
    items: DibodevNumberedGuideItem[]
  }
  mistakes: DibodevLegalNoticeSectionHeading & {
    cards: DibodevIconCard[]
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
    gdprCheckLabel: string
  }
  mobileBar: {
    text: string
    button: string
  }
}
