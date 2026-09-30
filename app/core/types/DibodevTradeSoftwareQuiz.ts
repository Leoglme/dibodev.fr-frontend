import type { DibodevQuizPriceDetail, DibodevQuizPriceLink, DibodevQuizQuestion } from '~/core/types/DibodevQuiz'

export type DibodevTradeSize = 'solo' | 'small' | 'medium' | 'large'

export type DibodevTradeVerdict = 'market' | 'complement' | 'custom'

/** An answer that adds an entry (a feature or a check) to the result: `entryKey` is a key of `features` or `checks`. */
export type DibodevTradeAnswerRule = {
  questionId: string
  optionId: string
  entryKey: string
}

/**
 * What a trade test does with the answers, the same in every language. The questions always use the ids `team`,
 * `sites`, `scope`, `pains`, `current` and `priority`.
 */
export type DibodevTradeQuizConfig = {
  id: string
  progressTravellerIcon: string
  leadingFeatureKey: string
  fallbackFeatureKeys: string[]
  featureRules: DibodevTradeAnswerRule[]
  checkRules: DibodevTradeAnswerRule[]
}

export type DibodevTradeResultWording = {
  title: string
  explanation: string
}

/** Texts of the result that follow the price card: advice list, small print and lead form. */
export type DibodevTradeResultFollowUp = {
  adviceTitle: string
  disclaimer: string
  ctaLabel: string
  leadFormTitle: string
  leadFormIntro: string
}

/**
 * Every text of a trade test in one language. `features` and `checks` also hold the `multiSite`, `primary` and
 * `export` entries; templates hold `{min}`, `{max}`, `{items}`, `{list}`, `{pains}`, `{range}` or `{kind}` placeholders.
 */
export type DibodevTradeQuizWording = {
  numberLocale: string
  quizName: string
  questions: DibodevQuizQuestion[]
  conjunction: string
  priceRangeTemplate: string
  weeksRangeTemplate: string
  recapTeamWords: Record<string, string>
  recapSitesWords: Record<string, string>
  recapScopeWords: Record<string, string>
  recapScopeTemplate: string
  complementPainWords: Record<string, string>
  features: Record<string, string>
  checks: Record<string, string>
  market: DibodevTradeResultFollowUp & {
    eyebrow: string
    priceRange: string
    priceSuffix: string
    priceExamples: DibodevQuizPriceDetail[]
    footnote: string
    footnoteLink: DibodevQuizPriceLink
    leadBudget: string
  }
  project: DibodevTradeResultFollowUp & {
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
    custom: DibodevTradeResultWording
    complement: DibodevTradeResultWording & { painsTemplate: string }
    solo: DibodevTradeResultWording & { keepCurrentSentence: string }
    market: DibodevTradeResultWording & { unfitSentence: string }
  }
}
