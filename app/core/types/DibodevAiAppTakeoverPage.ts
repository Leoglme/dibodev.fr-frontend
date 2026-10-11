import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevPricingOffer } from '~/core/types/DibodevPricingSection'
import type { DibodevProjectCaseStudyColumn } from '~/core/types/DibodevProjectCaseStudy'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'

/** Heading of a section of the page. */
export type DibodevAiAppTakeoverSectionHeading = {
  eyebrow: string
  title: string
  intro: string
}

/** A section made of tiles (symptoms, deliverables, sample report findings). */
export type DibodevAiAppTakeoverTilesSection = DibodevAiAppTakeoverSectionHeading & {
  items: DibodevGuarantee[]
}

/** Content of the AI application takeover page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevAiAppTakeoverPageContent = {
  meta: {
    title: string
    description: string
    serviceName: string
  }
  breadcrumbLabel: string
  hero: {
    titlePart1: string
    titleHighlight: string
    titlePart2: string
    description: string
    cta: string
    ctaSecondary: string
    reassurances: string[]
    portraitAlt: string
    portraitCaption: string
  }
  symptoms: DibodevAiAppTakeoverTilesSection
  risks: DibodevAiAppTakeoverSectionHeading & {
    facts: DibodevSourcedFact[]
  }
  test: DibodevAiAppTakeoverSectionHeading
  method: DibodevAiAppTakeoverSectionHeading & {
    steps: DibodevMethodStep[]
  }
  pricing: DibodevAiAppTakeoverSectionHeading & {
    offers: DibodevPricingOffer[]
    notes: string[]
    highlightLabel: string
    cta: string
    secondaryLink: string
  }
  deliverables: DibodevAiAppTakeoverTilesSection
  caseStudy: DibodevAiAppTakeoverSectionHeading & {
    columns: DibodevProjectCaseStudyColumn[]
  }
  sampleReport: DibodevAiAppTakeoverTilesSection
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
