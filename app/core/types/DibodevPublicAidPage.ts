import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type {
  DibodevPublicAidProjectEligibility,
  DibodevPublicAidProjectType,
  DibodevPublicAidStatus,
} from '~/core/types/DibodevPublicAid'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'

export type DibodevPublicAidSectionHeading = {
  eyebrow: string
  title: string
  intro: string
}

/**
 * Texts of the simulator in one language. Templates use `{commune}`, `{postcode}`, `{epci}`, `{population}`,
 * `{territory}`, `{rate}`, `{floor}`, `{ceiling}`, `{maxAid}`, `{aid}`, `{remaining}` and `{source}`.
 */
export type DibodevPublicAidSimulatorWording = {
  communeLabel: string
  communePlaceholder: string
  communeHint: string
  noMatch: string
  searchingLabel: string
  searchErrorLabel: string
  outsideBrittanyTag: string
  selectedTemplate: string
  selectedOutsideTemplate: string
  changeCommune: string
  projectLabel: string
  projectOptions: Record<DibodevPublicAidProjectType, string>
  amountLabel: string
  amountHint: string
  employeesLabel: string
  employeesHint: string
  turnoverLabel: string
  businessLabel: string
  businessHint: string
  yes: string
  no: string
  resultLabel: string
  statusTitles: Record<DibodevPublicAidStatus, string>
  statusTexts: Record<DibodevPublicAidStatus, string>
  aidLabel: string
  remainingLabel: string
  rateTemplate: string
  reasonsTitle: string
  reasons: Record<string, string>
  checksTitle: string
  checks: Record<string, string>
  notes: Record<string, string>
  nationalPoints: string[]
  stepsTitle: string
  steps: string[]
  contactTitle: string
  contactFallback: string
  sourceTemplate: string
  cta: string
  ctaNational: string
  disclaimer: string
}

/** Content of the public aid simulator page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevPublicAidPageContent = {
  meta: {
    title: string
    description: string
    inLanguage: string
    schemaAbout: string
  }
  breadcrumbLabel: string
  numberLocale: string
  hero: {
    titleBefore: string
    titleHighlight: string
    titleAfter: string
    reassurances: string[]
    description: string
    authorIntro: string
    authorBio: string
  }
  simulator: DibodevPublicAidSimulatorWording
  rules: DibodevPublicAidSectionHeading & {
    anchorId: string
    facts: DibodevSourcedFact[]
    calloutEmphasizedIntro: string
    calloutText: string
  }
  territories: DibodevPublicAidSectionHeading & {
    anchorId: string
    territoryColumnLabel: string
    coverageColumnLabel: string
    aidColumnLabel: string
    coverageTemplate: string
    eligibilityLabels: Record<DibodevPublicAidProjectEligibility, string>
    aidTemplate: string
    conditionTemplate: string
    floorUnknownCondition: string
    partialSuffix: string
    calloutEmphasizedIntro: string
    calloutText: string
    calloutFootnote: string
  }
  beyond: DibodevPublicAidSectionHeading & {
    anchorId: string
    items: DibodevGuarantee[]
  }
  method: DibodevPublicAidSectionHeading & {
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
