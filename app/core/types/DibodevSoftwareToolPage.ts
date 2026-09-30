import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type { DibodevComparisonRow } from '~/core/types/DibodevComparisonTableSection'
import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevPricedProduct } from '~/core/types/DibodevPriceListSection'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'
import type { DibodevToolShareImageIcon } from '~/core/types/DibodevToolShareImage'

export type DibodevSourceReference = {
  name: string
  url: string
}

export type DibodevDrivingSchoolRuleSourceKey =
  | 'logbook'
  | 'testSlots'
  | 'standardContract'
  | 'trainingAccount'
  | 'payments'
  | 'accompaniedDriving'

/** Content of a trade tool page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevSoftwareToolPageContent = {
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
    description: string
    reassurances: string[]
    authorIntro: string
    authorBio: string
    updatedAt: string
  }
  marketSoftware: {
    anchorId: string
    eyebrow: string
    title: string
    intro: string
    productColumnLabel: string
    coverageColumnLabel: string
    priceColumnLabel: string
    products: DibodevPricedProduct[]
    calloutEmphasizedIntro: string
    calloutText: string
    calloutFootnote: string
  }
  rules: {
    anchorId: string
    eyebrow: string
    title: string
    intro: string
    facts: DibodevSourcedFact[]
    calloutEmphasizedIntro: string
    calloutText: string
  }
  comparison: {
    eyebrow: string
    title: string
    intro: string
    criterionLabel: string
    columns: string[]
    rows: DibodevComparisonRow[]
    rowsShownOnSmallScreens: number
  }
  project: {
    slug: string
    screenshotUrl: string
    eyebrow: string
    title: string
    description: string
    highlights: string[]
    linkLabel: string
    imageAlt: string
    browserBarCaption: string
    showBrowserFrame: boolean
  }
  faq: {
    eyebrow: string
    title: string
    questions: DibodevFaqQuestion[]
  }
  relatedArticles: {
    title: string
    slugs: string[]
  }
  contactCta: {
    title: string
    description: string
    button: string
  }
}

export type DibodevSoftwareToolPageSectionsProps = {
  page: DibodevSoftwareToolPageContent
  quiz: DibodevQuizDefinition
  trackingLocation: string
}
