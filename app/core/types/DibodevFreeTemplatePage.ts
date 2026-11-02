import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevFreeTemplateDownload } from '~/core/types/DibodevFreeTemplateSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'
import type { DibodevToolShareImageIcon } from '~/core/types/DibodevToolShareImage'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'

/** One document of a free template (a PDF page or an Excel sheet): `format` says where it is ("Page 1 du PDF, feuille 1 de l'Excel"). */
export type DibodevFreeTemplateDocument = {
  title: string
  format: string
  items: string[]
}

/** Content of a free template page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevFreeTemplatePageContent = {
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
    icon: DibodevToolShareImageIcon
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
    updatedAt: string
  }
  downloads: {
    eyebrow: string
    lead: string
    files: DibodevFreeTemplateDownload[]
    footnote: string
  }
  contents: {
    anchorId: string
    eyebrow: string
    title: string
    intro: string
    documents: DibodevFreeTemplateDocument[]
  }
  howToFill: {
    anchorId: string
    eyebrow: string
    title: string
    intro: string
    steps: DibodevMethodStep[]
  }
  rules: {
    anchorId: string
    eyebrow: string
    title: string
    intro: string
    facts: DibodevSourcedFact[]
  }
  faq: {
    eyebrow: string
    title: string
    questions: DibodevFaqQuestion[]
  }
  excelLimits: {
    title: string
    description: string
    button: string
    toolPageLinkLabel: string
  }
}

/** `teaser` is the trade test linked under the rules and from the closing call to action (its route is the trade tool page); `tradeWebsiteTeaser` the website page of the trade, under the rules too. */
export type DibodevFreeTemplatePageSectionsProps = {
  page: DibodevFreeTemplatePageContent
  teaser: DibodevToolTeaserContent
  trackingLocation: string
  tradeWebsiteTeaser: DibodevToolTeaserContent | null
}
