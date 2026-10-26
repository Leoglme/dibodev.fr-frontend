import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevSectionHeadingContent } from '~/core/types/DibodevSectionHeading'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'

/** Content of the cold calling test page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevColdCallingCheckPageContent = {
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
  facts: DibodevSectionHeadingContent & {
    anchorId: string
    facts: DibodevSourcedFact[]
    calloutEmphasizedIntro: string
    calloutText: string
  }
  cases: DibodevSectionHeadingContent & {
    anchorId: string
    items: DibodevGuarantee[]
  }
  timeline: DibodevSectionHeadingContent & {
    anchorId: string
    items: DibodevGuarantee[]
  }
  findingClientsWithoutCalling: DibodevSectionHeadingContent & {
    anchorId: string
    ways: DibodevSourcedFact[]
    calloutEmphasizedIntro: string
    calloutText: string
    calloutFootnote: string
    freelanceRennesLinkLabel: string
    homeLinkLabel: string
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
