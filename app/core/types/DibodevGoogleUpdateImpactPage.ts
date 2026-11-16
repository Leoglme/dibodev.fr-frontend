import type { DibodevGoogleSearchUpdateKind } from '~/core/types/DibodevGoogleUpdateImpact'
import type { DibodevGoogleUpdateImpactCheckerWording } from '~/core/types/DibodevGoogleUpdateImpactChecker'
import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevNumberedGuideItem } from '~/core/types/DibodevNumberedGuideSection'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'

export type DibodevGoogleUpdateImpactSectionHeading = {
  eyebrow: string
  title: string
  intro: string
}

/** Content of the Google update page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevGoogleUpdateImpactPageContent = {
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
    briefTitle: string
    brief: string
    authorIntro: string
    authorBio: string
  }
  checker: DibodevGoogleUpdateImpactCheckerWording
  mobileContactBar: {
    text: string
    buttonLabel: string
  }
  definition: DibodevGoogleUpdateImpactSectionHeading & {
    anchorId: string
    facts: DibodevSourcedFact[]
  }
  calendar: DibodevGoogleUpdateImpactSectionHeading & {
    anchorId: string
    nameColumnLabel: string
    detailColumnLabel: string
    linkColumnLabel: string
    linkLabel: string
    finishedTemplate: string
    ongoingTemplate: string
    kindLabels: Record<DibodevGoogleSearchUpdateKind, string>
  }
  reading: DibodevGoogleUpdateImpactSectionHeading & {
    anchorId: string
    items: DibodevGuarantee[]
  }
  doAndDont: DibodevGoogleUpdateImpactSectionHeading & {
    anchorId: string
    pitfallLabel: string
    items: DibodevNumberedGuideItem[]
  }
  ownSite: {
    anchorId: string
    eyebrow: string
    title: string
    emphasizedIntro: string
    text: string
    footnote: string
  }
  method: DibodevGoogleUpdateImpactSectionHeading & {
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
