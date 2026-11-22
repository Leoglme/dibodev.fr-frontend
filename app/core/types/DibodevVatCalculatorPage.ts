import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevSectionHeadingContent } from '~/core/types/DibodevSectionHeading'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'
import type {
  DibodevVatCalculatorMode,
  DibodevVatDirection,
  DibodevVatFormulaTemplates,
  DibodevVatSummaryWording,
} from '~/core/types/DibodevVat'

/** Texts of the calculator in one language; templates use `{rate}`, `{amount}`, `{base}` and `{number}`. */
export type DibodevVatCalculatorWording = {
  modeGroupLabel: string
  modeLabels: Record<DibodevVatCalculatorMode, string>
  directionLabel: string
  directionLabels: Record<DibodevVatDirection, string>
  amountLabels: Record<DibodevVatDirection, string>
  amountPlaceholder: string
  amountHint: string
  rateLabel: string
  rateTemplate: string
  customRateButton: string
  customRateLabel: string
  customRateHint: string
  lineNameLabel: string
  lineNamePlaceholder: string
  quantityLabel: string
  unitPriceLabel: string
  lineRateLabel: string
  lineTotalLabel: string
  lineNumberTemplate: string
  removeLineTemplate: string
  addLineButton: string
  clearButton: string
  roundingNote: string
  singleResultLabels: Record<DibodevVatDirection, string>
  quoteResultLabel: string
  emptyResultTexts: Record<DibodevVatCalculatorMode, string>
  singleVatLineTemplate: string
  quoteVatLineTemplate: string
  amountExcludingTaxLabel: string
  vatAmountTemplate: string
  amountIncludingTaxLabel: string
  totalExcludingTaxLabel: string
  vatOnBaseTemplate: string
  totalVatLabel: string
  totalIncludingTaxLabel: string
  formulaLabel: string
  formulaTemplates: DibodevVatFormulaTemplates
  copySummaryButton: string
  copiedStatus: string
  copyFailedStatus: string
  privacyNote: string
  summary: DibodevVatSummaryWording
}

export type DibodevVatTemplateLink = {
  routeName: string
  title: string
  description: string
  linkLabel: string
}

/** Content of the VAT calculator page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevVatCalculatorPageContent = {
  meta: {
    title: string
    description: string
    inLanguage: string
    schemaAbout: string
  }
  breadcrumbLabel: string
  numberLocale: string
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
  calculator: DibodevVatCalculatorWording
  summary: {
    eyebrow: string
    text: string
    dateLabel: string
  }
  method: DibodevSectionHeadingContent & {
    steps: DibodevMethodStep[]
  }
  rules: DibodevSectionHeadingContent & {
    anchorId: string
    facts: DibodevSourcedFact[]
    calloutEmphasizedIntro: string
    calloutText: string
  }
  faq: {
    eyebrow: string
    title: string
    questions: DibodevFaqQuestion[]
  }
  templates: DibodevSectionHeadingContent & {
    links: DibodevVatTemplateLink[]
  }
  contactCta: {
    title: string
    description: string
    button: string
  }
}
