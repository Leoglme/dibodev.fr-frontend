import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevFreeTemplateDocument } from '~/core/types/DibodevFreeTemplatePage'
import type { DibodevIconCard } from '~/core/types/DibodevIconCardsSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevNumberedGuideItem } from '~/core/types/DibodevNumberedGuideSection'
import type { DibodevPricingOffer } from '~/core/types/DibodevPricingSection'
import type {
  DibodevProjectSpecificationAnswers,
  DibodevProjectSpecificationProjectType,
} from '~/core/types/DibodevProjectSpecification'
import type { DibodevSitemapTreeBranch, DibodevSitemapTreeNote } from '~/core/types/DibodevSitemapTreeSection'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'

export type DibodevProjectSpecificationTemplateFiles = {
  docxPath: string
  pdfPath: string
}

/** Head of a page: `schemaAbout` names what the WebPage JSON-LD is about. */
export type DibodevProjectSpecificationPageMeta = {
  title: string
  description: string
  inLanguage: string
  schemaAbout: string
}

/** Texts of the share image: `highlight` is drawn in violet wherever it appears in `titleLines`. */
export type DibodevProjectSpecificationShareImage = {
  titleLines: string[]
  highlight: string
  subtitle: string
  badge: string
  alt: string
}

/** The title comes in three pieces, the middle one drawn in violet. */
export type DibodevProjectSpecificationHero = {
  titleBefore: string
  titleHighlight: string
  titleAfter: string
  reassurances: string[]
  aboutTitle: string
  description: string
  authorIntro: string
  authorBio: string
}

export type DibodevProjectSpecificationTemplateCard = {
  projectType: DibodevProjectSpecificationProjectType
  eyebrow: string
  title: string
  text: string
  note: string
}

export type DibodevProjectSpecificationRelatedLink = {
  key: string
  routeName: string
  icon: string
  eyebrow: string
  title: string
  text: string
}

/** Kept out of the i18n files because only this page loads it; `applicationName` names the tool in the JSON-LD. */
export type DibodevProjectSpecificationGeneratorPageContent = {
  meta: DibodevProjectSpecificationPageMeta
  applicationName: string
  breadcrumbLabel: string
  shareImage: DibodevProjectSpecificationShareImage
  hero: DibodevProjectSpecificationHero
  guide: {
    eyebrow: string
    title: string
    intro: string
    pitfallLabel: string
    items: DibodevNumberedGuideItem[]
  }
  templates: {
    eyebrow: string
    title: string
    intro: string
    linkLabel: string
    cards: DibodevProjectSpecificationTemplateCard[]
  }
  pitfalls: {
    eyebrow: string
    title: string
    intro: string
    cards: DibodevIconCard[]
  }
  pricing: {
    eyebrow: string
    title: string
    intro: string
    offers: DibodevPricingOffer[]
    notes: string[]
    ctaLabel: string
    secondaryLinkLabel: string
  }
  faq: {
    eyebrow: string
    title: string
    questions: DibodevFaqQuestion[]
  }
  related: {
    eyebrow: string
    title: string
    linkLabel: string
    links: DibodevProjectSpecificationRelatedLink[]
  }
  contactCta: {
    title: string
    description: string
    button: string
  }
  mobileBar: {
    text: string
    button: string
  }
}

export type DibodevProjectSpecificationTemplatePageContent = {
  projectType: DibodevProjectSpecificationProjectType
  meta: DibodevProjectSpecificationPageMeta
  breadcrumbLabel: string
  shareImage: DibodevProjectSpecificationShareImage
  hero: DibodevProjectSpecificationHero
  downloads: {
    eyebrow: string
    lead: string
    templateLabel: string
    templateMeta: string
    exampleLabel: string
    exampleMeta: string
    generatorText: string
    generatorLinkLabel: string
    footnote: string
  }
  contents: {
    anchorId: string
    eyebrow: string
    title: string
    intro: string
    documents: DibodevFreeTemplateDocument[]
  }
  example: {
    eyebrow: string
    title: string
    intro: string
    expandLabel: string
    collapseLabel: string
    generatorLinkLabel: string
    answers: DibodevProjectSpecificationAnswers
  }
  sitemap: {
    eyebrow: string
    title: string
    intro: string
    ariaLabel: string
    rootLabel: string
    branches: DibodevSitemapTreeBranch[]
    footerNote: string
    notes: DibodevSitemapTreeNote[]
  }
  howToFill: {
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
  otherTemplates: {
    eyebrow: string
    title: string
    generatorCard: DibodevProjectSpecificationTemplateCard
    generatorLinkLabel: string
  }
  contactCta: {
    title: string
    description: string
    button: string
    generatorLinkLabel: string
  }
  mobileBar: {
    text: string
    button: string
  }
}
