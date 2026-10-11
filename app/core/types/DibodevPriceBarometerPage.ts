import type { DibodevComparisonRow } from '~/core/types/DibodevComparisonTableSection'
import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type {
  DibodevPriceBarometerRangeKey,
  DibodevPriceBarometerSourceKind,
  DibodevPriceBarometerTier,
} from '~/core/types/DibodevPriceBarometer'

/** Heading of a section of the page. */
export type DibodevPriceBarometerSectionHeading = {
  eyebrow: string
  title: string
  intro: string
}

/** Sentence fragments used to describe a source in the page language; `{min}`, `{max}`, `{label}`, `{value}` are filled from the data. */
export type DibodevPriceBarometerSourceWording = {
  kindLabels: Record<DibodevPriceBarometerSourceKind, string>
  rangeLabels: Record<DibodevPriceBarometerRangeKey, string>
  rangeTemplate: string
  openRangeTemplate: string
  fixedPriceTemplate: string
  dayRateTemplate: string
  singleDayRateTemplate: string
  maintenanceTemplate: string
  publishedTemplate: string
  notes: Partial<Record<string, string>>
}

/** Content of the custom software price barometer page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevPriceBarometerPageContent = {
  meta: {
    title: string
    description: string
    datasetName: string
    datasetDescription: string
  }
  breadcrumbLabel: string
  numberLocale: string
  rangeTemplate: string
  hero: {
    titlePart1: string
    titleHighlight: string
    titlePart2: string
    description: string
    cta: string
    ctaSecondary: string
    reassurances: string[]
    statLabels: {
      businessAppRange: string
      sources: string
      checkedAt: string
    }
  }
  tiers: DibodevPriceBarometerSectionHeading & {
    tierColumnLabel: string
    coverageColumnLabel: string
    priceColumnLabel: string
    items: Record<DibodevPriceBarometerTier, { name: string; coverage: string }>
    conditionTemplate: string
    calloutEmphasizedIntro: string
    calloutText: string
    calloutFootnote: string
  }
  sources: DibodevPriceBarometerSectionHeading & {
    wording: DibodevPriceBarometerSourceWording
    csvEmphasizedIntro: string
    csvText: string
    csvLinkLabel: string
    csvFootnote: string
  }
  fiveYears: DibodevPriceBarometerSectionHeading & {
    criterionLabel: string
    columns: string[]
    rows: DibodevComparisonRow[]
    rowsShownOnSmallScreens: number
  }
  factors: DibodevPriceBarometerSectionHeading & {
    items: DibodevGuarantee[]
  }
  method: DibodevPriceBarometerSectionHeading & {
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
