import type { DibodevComparisonRow } from '~/core/types/DibodevComparisonTableSection'
import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type {
  DibodevWebsitePriceBarometerCategory,
  DibodevWebsitePriceBarometerSourceKind,
  DibodevWebsitePriceBarometerTaxLabel,
} from '~/core/types/DibodevWebsitePriceBarometer'

/** Heading of a section of the page. */
export type DibodevWebsitePriceBarometerSectionHeading = {
  eyebrow: string
  title: string
  intro: string
}

/** A row of the key figures table: a website size or the monthly maintenance. */
export type DibodevWebsitePriceBarometerRowKey = DibodevWebsitePriceBarometerCategory | 'maintenance'

/** Sentence fragments used to describe a source in the page language; `{min}`, `{max}`, `{label}`, `{value}` are filled from the data. */
export type DibodevWebsitePriceBarometerSourceWording = {
  kindLabels: Record<DibodevWebsitePriceBarometerSourceKind, string>
  rangeLabels: Record<DibodevWebsitePriceBarometerCategory, string>
  maintenanceLabel: string
  taxLabels: Record<DibodevWebsitePriceBarometerTaxLabel, string>
  rangeTemplate: string
  openRangeTemplate: string
  fixedPriceTemplate: string
  publishedTemplate: string
  notes: Partial<Record<string, string>>
}

/** Content of the website price barometer page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevWebsitePriceBarometerPageContent = {
  meta: {
    title: string
    description: string
    datasetName: string
    datasetDescription: string
  }
  breadcrumbLabel: string
  numberLocale: string
  rangeTemplate: string
  monthlyRangeTemplate: string
  hero: {
    titlePart1: string
    titleHighlight: string
    titlePart2: string
    description: string
    cta: string
    ctaSecondary: string
    reassurances: string[]
    statLabels: {
      showcaseRange: string
      sources: string
      checkedAt: string
    }
  }
  categories: DibodevWebsitePriceBarometerSectionHeading & {
    categoryColumnLabel: string
    coverageColumnLabel: string
    priceColumnLabel: string
    items: Record<DibodevWebsitePriceBarometerRowKey, { name: string; coverage: string }>
    conditionTemplate: string
    maintenanceConditionTemplate: string
    calloutEmphasizedIntro: string
    calloutText: string
    calloutFootnote: string
  }
  sources: DibodevWebsitePriceBarometerSectionHeading & {
    wording: DibodevWebsitePriceBarometerSourceWording
    csvEmphasizedIntro: string
    csvText: string
    csvLinkLabel: string
    csvFootnote: string
  }
  threeYears: DibodevWebsitePriceBarometerSectionHeading & {
    criterionLabel: string
    columns: string[]
    rows: DibodevComparisonRow[]
    rowsShownOnSmallScreens: number
  }
  factors: DibodevWebsitePriceBarometerSectionHeading & {
    items: DibodevGuarantee[]
  }
  method: DibodevWebsitePriceBarometerSectionHeading & {
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
