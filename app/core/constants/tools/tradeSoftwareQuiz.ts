import type { DibodevEstimatorBaseRange } from '~/core/types/DibodevBudgetEstimator'
import type {
  DibodevQuizAnswers,
  DibodevQuizDefinition,
  DibodevQuizPriceCard,
  DibodevQuizResult,
} from '~/core/types/DibodevQuiz'
import type {
  DibodevTradeAnswerRule,
  DibodevTradeQuizConfig,
  DibodevTradeQuizWording,
  DibodevTradeResultWording,
  DibodevTradeSize,
  DibodevTradeVerdict,
} from '~/core/types/DibodevTradeSoftwareQuiz'
import { ESTIMATOR_BASE_RANGES } from '~/core/constants/budgetEstimator'

const MAXIMUM_ADVICE_POINTS: number = 4
const MINIMUM_FEATURES: number = 3
const MAXIMUM_CHECKS_BEFORE_EXPORT: number = 3
/** Score from which a custom tool is recommended rather than a market software. */
const CUSTOM_TOOL_SCORE_THRESHOLD: number = 3
const CUSTOM_TOOL_SIZE_SCORES: Record<Exclude<DibodevTradeSize, 'solo'>, number> = {
  small: 0,
  medium: 1,
  large: 2,
}

/**
 * Replaces the `{name}` placeholders of a template.
 * @param {string} template - The template.
 * @param {Record<string, string>} values - The value of each placeholder.
 * @returns {string} The filled text.
 */
function fillTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (placeholder: string, name: string): string => values[name] ?? placeholder)
}

/**
 * Joins words with commas and the language's conjunction ("a, b et c").
 * @param {string[]} words - The words.
 * @param {string} conjunction - "et", "and" or "y".
 * @returns {string} The sentence fragment.
 */
function joinWithConjunction(words: string[], conjunction: string): string {
  if (words.length <= 1) return words.join('')
  return `${words.slice(0, -1).join(', ')} ${conjunction} ${words[words.length - 1]}`
}

/**
 * Reads the answer of a single-choice question.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {string} questionId - The question.
 * @returns {string} The selected option id, or an empty string.
 */
function singleAnswerOf(answers: DibodevQuizAnswers, questionId: string): string {
  return answers[questionId]?.[0] ?? ''
}

/**
 * Translates keys into texts, skipping the unknown ones.
 * @param {string[]} keys - The keys.
 * @param {Record<string, string>} textsByKey - The text of each key.
 * @returns {string[]} The texts, in the order of the keys.
 */
function textsOf(keys: string[], textsByKey: Record<string, string>): string[] {
  return keys.flatMap((key: string): string[] => (textsByKey[key] ? [textsByKey[key]] : []))
}

/**
 * Keys of the rules that match the answers.
 * @param {DibodevTradeAnswerRule[]} rules - The rules.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @returns {string[]} The entry keys, in the order of the rules.
 */
function matchingRuleKeys(rules: DibodevTradeAnswerRule[], answers: DibodevQuizAnswers): string[] {
  return rules
    .filter((rule: DibodevTradeAnswerRule): boolean => (answers[rule.questionId] ?? []).includes(rule.optionId))
    .map((rule: DibodevTradeAnswerRule): string => rule.entryKey)
}

/**
 * Formats a price range in the language of the test ("5 000 à 8 000 €", "€5,000 to €8,000").
 * @param {DibodevEstimatorBaseRange} range - The range.
 * @param {DibodevTradeQuizWording} wording - Texts of the test.
 * @returns {string} The formatted range.
 */
function formatPriceRange(range: DibodevEstimatorBaseRange, wording: DibodevTradeQuizWording): string {
  const numberFormat: Intl.NumberFormat = new Intl.NumberFormat(wording.numberLocale, { maximumFractionDigits: 0 })
  return fillTemplate(wording.priceRangeTemplate, {
    min: numberFormat.format(range.minPrice),
    max: numberFormat.format(range.maxPrice),
  })
}

/**
 * Deduces the size of the business from the largest of its team and its sites.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @returns {DibodevTradeSize} The size.
 */
function tradeSizeOf(answers: DibodevQuizAnswers): DibodevTradeSize {
  const team: string = singleAnswerOf(answers, 'team')
  const sites: string = singleAnswerOf(answers, 'sites')
  if (sites === '4+' || team === '10+') return 'large'
  if (sites === '2-3' || team === '5-10') return 'medium'
  if (team === '2-4') return 'small'
  return 'solo'
}

/**
 * Picks the recommendation: market software when working alone, a complement for a happy user, otherwise a score.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevTradeSize} size - Size of the business.
 * @returns {DibodevTradeVerdict} The recommendation.
 */
function verdictOf(answers: DibodevQuizAnswers, size: DibodevTradeSize): DibodevTradeVerdict {
  if (size === 'solo') return 'market'
  const current: string = singleAnswerOf(answers, 'current')
  if (current === 'fit') return 'complement'
  const priority: string = singleAnswerOf(answers, 'priority')
  let score: number = CUSTOM_TOOL_SIZE_SCORES[size]
  if (current === 'unfit') score += 2
  if (priority === 'rules') score += 2
  if (priority === 'ownership') score += 1
  if (priority === 'budget') score -= 2
  return score >= CUSTOM_TOOL_SCORE_THRESHOLD ? 'custom' : 'market'
}

/**
 * Price range of a complement or a custom tool, taken from the budget estimator of the business software page.
 * @param {DibodevTradeVerdict} verdict - The recommendation (complement or custom).
 * @param {DibodevTradeSize} size - Size of the business.
 * @returns {DibodevEstimatorBaseRange} The range.
 */
function projectRangeOf(verdict: DibodevTradeVerdict, size: DibodevTradeSize): DibodevEstimatorBaseRange {
  if (verdict === 'complement') {
    return size === 'small' ? ESTIMATOR_BASE_RANGES.tool.small : ESTIMATOR_BASE_RANGES.tool.medium
  }
  if (size === 'large') return ESTIMATOR_BASE_RANGES.software.large
  return size === 'medium' ? ESTIMATOR_BASE_RANGES.software.medium : ESTIMATOR_BASE_RANGES.software.small
}

/**
 * Price card of a market software result: public prices of the publishers.
 * @param {DibodevTradeQuizWording} wording - Texts of the test.
 * @returns {DibodevQuizPriceCard} The card.
 */
function marketPriceCard(wording: DibodevTradeQuizWording): DibodevQuizPriceCard {
  return {
    eyebrow: wording.market.eyebrow,
    price: wording.market.priceRange,
    priceSuffix: wording.market.priceSuffix,
    details: wording.market.priceExamples,
    footnote: wording.market.footnote,
    footnoteLink: wording.market.footnoteLink,
  }
}

/**
 * Price card of a complement or custom tool result: fixed price, duration and maintenance.
 * @param {DibodevTradeVerdict} verdict - The recommendation (complement or custom).
 * @param {DibodevEstimatorBaseRange} range - The price and duration range.
 * @param {DibodevTradeQuizWording} wording - Texts of the test.
 * @returns {DibodevQuizPriceCard} The card.
 */
function projectPriceCard(
  verdict: DibodevTradeVerdict,
  range: DibodevEstimatorBaseRange,
  wording: DibodevTradeQuizWording,
): DibodevQuizPriceCard {
  return {
    eyebrow: wording.project.eyebrow,
    price: formatPriceRange(range, wording),
    priceSuffix: '',
    details: [
      {
        label: wording.project.durationLabel,
        value: fillTemplate(wording.weeksRangeTemplate, { min: String(range.minWeeks), max: String(range.maxWeeks) }),
      },
      { label: wording.project.maintenanceLabel, value: wording.project.maintenanceValue },
    ],
    footnote: verdict === 'complement' ? wording.project.complementFootnote : wording.project.customFootnote,
    footnoteLink: null,
  }
}

/**
 * Features to plan in a complement or a custom tool: the leading one first, then the answers, filled up to three.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevTradeQuizConfig} config - What the test does with the answers.
 * @param {DibodevTradeQuizWording} wording - Texts of the test.
 * @returns {string[]} At most four features.
 */
function featuresToPlanOf(
  answers: DibodevQuizAnswers,
  config: DibodevTradeQuizConfig,
  wording: DibodevTradeQuizWording,
): string[] {
  const pains: string[] = answers.pains ?? []
  const keys: string[] = [...pains]
  if (!keys.includes(config.leadingFeatureKey)) keys.unshift(config.leadingFeatureKey)
  keys.push(...matchingRuleKeys(config.featureRules, answers))
  if (singleAnswerOf(answers, 'sites') !== '1') keys.push('multiSite')
  config.fallbackFeatureKeys.forEach((key: string): void => {
    if (keys.length < MINIMUM_FEATURES) keys.push(key)
  })
  return textsOf([...new Set(keys)], wording.features).slice(0, MAXIMUM_ADVICE_POINTS)
}

/**
 * Points to check before signing: the main one, then those of the answers, filled up from the fallbacks, export last.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevTradeQuizConfig} config - What the test does with the answers.
 * @param {DibodevTradeQuizWording} wording - Texts of the test.
 * @returns {string[]} At most four questions.
 */
function checksBeforeSigningOf(
  answers: DibodevQuizAnswers,
  config: DibodevTradeQuizConfig,
  wording: DibodevTradeQuizWording,
): string[] {
  const keys: string[] = [
    ...new Set([
      'primary',
      ...matchingRuleKeys(config.checkRules, answers),
      ...(answers.pains ?? []),
      ...config.fallbackFeatureKeys,
    ]),
  ]
  const checks: string[] = textsOf(keys, wording.checks).slice(0, MAXIMUM_CHECKS_BEFORE_EXPORT)
  return [...checks, ...textsOf(['export'], wording.checks)]
}

/**
 * The business in one sentence ("5 à 10 personnes, 2 ou 3 dépôts, location de mobilier et chapiteaux.").
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevTradeQuizWording} wording - Texts of the test.
 * @returns {string} The summary.
 */
function answersSummaryOf(answers: DibodevQuizAnswers, wording: DibodevTradeQuizWording): string {
  const scopeWords: string[] = textsOf(answers.scope ?? [], wording.recapScopeWords)
  const parts: string[] = [
    wording.recapTeamWords[singleAnswerOf(answers, 'team')] ?? '',
    wording.recapSitesWords[singleAnswerOf(answers, 'sites')] ?? '',
    scopeWords.length
      ? fillTemplate(wording.recapScopeTemplate, { items: joinWithConjunction(scopeWords, wording.conjunction) })
      : '',
  ]
  return `${parts.filter((part: string): boolean => part !== '').join(', ')}.`
}

/**
 * Headline and explanation of the result.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevTradeVerdict} verdict - The recommendation.
 * @param {DibodevTradeSize} size - Size of the business.
 * @param {DibodevTradeQuizWording} wording - Texts of the test.
 * @returns {DibodevTradeResultWording} The texts.
 */
function resultWordingOf(
  answers: DibodevQuizAnswers,
  verdict: DibodevTradeVerdict,
  size: DibodevTradeSize,
  wording: DibodevTradeQuizWording,
): DibodevTradeResultWording {
  const current: string = singleAnswerOf(answers, 'current')
  const { custom, complement, solo, market } = wording.results
  if (verdict === 'custom') return { title: custom.title, explanation: custom.explanation }
  if (verdict === 'complement') {
    const painWords: string[] = textsOf(answers.pains ?? [], wording.complementPainWords)
    const painsText: string = painWords.length
      ? fillTemplate(complement.painsTemplate, { list: joinWithConjunction(painWords, wording.conjunction) })
      : ''
    return { title: complement.title, explanation: fillTemplate(complement.explanation, { pains: painsText }) }
  }
  if (size === 'solo') {
    return { title: solo.title, explanation: solo.explanation + (current === 'fit' ? solo.keepCurrentSentence : '') }
  }
  return { title: market.title, explanation: market.explanation + (current === 'unfit' ? market.unfitSentence : '') }
}

/**
 * Builds a trade test in one language: the questions and the rule that turns the answers into a recommendation.
 * @param {DibodevTradeQuizConfig} config - What the test does with the answers.
 * @param {DibodevTradeQuizWording} wording - Texts of the test.
 * @returns {DibodevQuizDefinition} The test.
 */
export function buildTradeSoftwareQuiz(
  config: DibodevTradeQuizConfig,
  wording: DibodevTradeQuizWording,
): DibodevQuizDefinition {
  return {
    id: config.id,
    name: wording.quizName,
    contactProjectType: 'software',
    progressTravellerIcon: config.progressTravellerIcon,
    questions: wording.questions,
    computeResult: (answers: DibodevQuizAnswers): DibodevQuizResult => {
      const size: DibodevTradeSize = tradeSizeOf(answers)
      const verdict: DibodevTradeVerdict = verdictOf(answers, size)
      const { title, explanation }: DibodevTradeResultWording = resultWordingOf(answers, verdict, size, wording)
      const answersSummary: string = answersSummaryOf(answers, wording)

      if (verdict === 'market') {
        return {
          verdict,
          title,
          explanation,
          answersSummary,
          priceCard: marketPriceCard(wording),
          adviceTitle: wording.market.adviceTitle,
          advicePoints: checksBeforeSigningOf(answers, config, wording),
          disclaimer: wording.market.disclaimer,
          ctaLabel: wording.market.ctaLabel,
          leadFormTitle: wording.market.leadFormTitle,
          leadFormIntro: wording.market.leadFormIntro,
          leadBudget: wording.market.leadBudget,
        }
      }

      const range: DibodevEstimatorBaseRange = projectRangeOf(verdict, size)
      return {
        verdict,
        title,
        explanation,
        answersSummary,
        priceCard: projectPriceCard(verdict, range, wording),
        adviceTitle: wording.project.adviceTitle,
        advicePoints: featuresToPlanOf(answers, config, wording),
        disclaimer: wording.project.disclaimer,
        ctaLabel: wording.project.ctaLabel,
        leadFormTitle: wording.project.leadFormTitle,
        leadFormIntro: wording.project.leadFormIntro,
        leadBudget: fillTemplate(wording.project.leadBudgetTemplate, {
          range: formatPriceRange(range, wording),
          kind: verdict === 'complement' ? wording.project.complementKind : wording.project.customKind,
        }),
      }
    },
  }
}
