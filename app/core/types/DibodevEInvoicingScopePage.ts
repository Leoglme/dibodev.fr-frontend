import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'

export type DibodevEInvoicingScopeSectionHeading = {
  eyebrow: string
  title: string
  intro: string
}

/** Content of the e-invoicing scope test page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevEInvoicingScopePageContent = {
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
  mobileContactBar: {
    text: string
    buttonLabel: string
  }
  facts: DibodevEInvoicingScopeSectionHeading & {
    anchorId: string
    facts: DibodevSourcedFact[]
    calloutEmphasizedIntro: string
    calloutText: string
  }
  cases: DibodevEInvoicingScopeSectionHeading & {
    anchorId: string
    items: DibodevGuarantee[]
  }
  timeline: DibodevEInvoicingScopeSectionHeading & {
    anchorId: string
    items: DibodevGuarantee[]
  }
  method: DibodevEInvoicingScopeSectionHeading & {
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
