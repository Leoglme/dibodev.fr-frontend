import type { DibodevQuizPriceDetail, DibodevQuizPriceLink, DibodevQuizQuestion } from '~/core/types/DibodevQuiz'

export type DibodevDrivingSchoolSize = 'solo' | 'small' | 'medium' | 'large'

export type DibodevDrivingSchoolVerdict = 'market' | 'complement' | 'custom'

export type DibodevDrivingSchoolResultWording = {
  title: string
  explanation: string
}

/** Texts of the result that follows the price card: advice list, small print and lead form. */
export type DibodevDrivingSchoolResultFollowUp = {
  adviceTitle: string
  disclaimer: string
  ctaLabel: string
  leadFormTitle: string
  leadFormIntro: string
}

/**
 * Every text of the driving school test in one language. Templates hold `{min}`, `{max}`, `{channels}`, `{list}`,
 * `{pains}`, `{range}` or `{kind}` placeholders.
 */
export type DibodevDrivingSchoolQuizWording = {
  numberLocale: string
  quizName: string
  questions: DibodevQuizQuestion[]
  conjunction: string
  priceRangeTemplate: string
  weeksRangeTemplate: string
  recapInstructorWords: Record<string, string>
  recapAgencyWords: Record<string, string>
  recapBookingWords: Record<string, string>
  recapBookingTemplate: string
  complementPainWords: Record<string, string>
  featuresByPain: Record<string, string>
  checksByPain: Record<string, string>
  logbookCheck: string
  dataExportCheck: string
  onlineBookingFeature: string
  singlePlanningFeature: string
  agenciesFeature: string
  market: DibodevDrivingSchoolResultFollowUp & {
    eyebrow: string
    priceRange: string
    priceSuffix: string
    priceExamples: DibodevQuizPriceDetail[]
    footnote: string
    footnoteLink: DibodevQuizPriceLink
    leadBudget: string
  }
  project: DibodevDrivingSchoolResultFollowUp & {
    eyebrow: string
    durationLabel: string
    maintenanceLabel: string
    maintenanceValue: string
    complementFootnote: string
    customFootnote: string
    leadBudgetTemplate: string
    complementKind: string
    customKind: string
  }
  results: {
    custom: DibodevDrivingSchoolResultWording
    complement: DibodevDrivingSchoolResultWording & { painsTemplate: string }
    solo: DibodevDrivingSchoolResultWording & { keepCurrentSentence: string }
    market: DibodevDrivingSchoolResultWording & { unfitSentence: string }
  }
}
