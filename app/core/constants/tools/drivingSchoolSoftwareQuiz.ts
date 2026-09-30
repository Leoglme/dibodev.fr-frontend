import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevEstimatorBaseRange } from '~/core/types/DibodevBudgetEstimator'
import type {
  DibodevDrivingSchoolQuizWording,
  DibodevDrivingSchoolResultWording,
  DibodevDrivingSchoolSize,
  DibodevDrivingSchoolVerdict,
} from '~/core/types/DibodevDrivingSchoolSoftwareQuiz'
import type {
  DibodevQuizAnswers,
  DibodevQuizDefinition,
  DibodevQuizPriceCard,
  DibodevQuizResult,
} from '~/core/types/DibodevQuiz'
import { ESTIMATOR_BASE_RANGES } from '~/core/constants/budgetEstimator'
import { DRIVING_SCHOOL_QUIZ_WORDING_EN } from '~/core/constants/tools/drivingSchoolSoftware/quizWording.en'
import { DRIVING_SCHOOL_QUIZ_WORDING_ES } from '~/core/constants/tools/drivingSchoolSoftware/quizWording.es'
import { DRIVING_SCHOOL_QUIZ_WORDING_FR } from '~/core/constants/tools/drivingSchoolSoftware/quizWording.fr'

const QUIZ_ID: string = 'driving-school-software'
const MAXIMUM_ADVICE_POINTS: number = 4
const MAXIMUM_PAIN_CHECKS: number = 2
/** Score from which a custom tool is recommended rather than a market software. */
const CUSTOM_TOOL_SCORE_THRESHOLD: number = 3
const CUSTOM_TOOL_SIZE_SCORES: Record<Exclude<DibodevDrivingSchoolSize, 'solo'>, number> = {
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
 * Translates selected option ids into words, skipping unknown ids.
 * @param {string[]} optionIds - The selected option ids.
 * @param {Record<string, string>} wordsByOptionId - The words of each option.
 * @returns {string[]} The words, in the order of the ids.
 */
function wordsOf(optionIds: string[], wordsByOptionId: Record<string, string>): string[] {
  return optionIds.flatMap((optionId: string): string[] =>
    wordsByOptionId[optionId] ? [wordsByOptionId[optionId]] : [],
  )
}

/**
 * Formats a price range in the language of the test ("5 000 à 8 000 €", "€5,000 to €8,000").
 * @param {DibodevEstimatorBaseRange} range - The range.
 * @param {DibodevDrivingSchoolQuizWording} wording - Texts of the test.
 * @returns {string} The formatted range.
 */
function formatPriceRange(range: DibodevEstimatorBaseRange, wording: DibodevDrivingSchoolQuizWording): string {
  const numberFormat: Intl.NumberFormat = new Intl.NumberFormat(wording.numberLocale, { maximumFractionDigits: 0 })
  return fillTemplate(wording.priceRangeTemplate, {
    min: numberFormat.format(range.minPrice),
    max: numberFormat.format(range.maxPrice),
  })
}

/**
 * Deduces the size of the driving school from the largest of its instructors and agencies.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @returns {DibodevDrivingSchoolSize} The size.
 */
function schoolSizeOf(answers: DibodevQuizAnswers): DibodevDrivingSchoolSize {
  const instructors: string = singleAnswerOf(answers, 'instructors')
  const agencies: string = singleAnswerOf(answers, 'agencies')
  if (agencies === '4+' || instructors === '10+') return 'large'
  if (agencies === '2-3' || instructors === '5-10') return 'medium'
  if (instructors === '2-4') return 'small'
  return 'solo'
}

/**
 * Picks the recommendation: market software for a lone instructor, a complement for a happy user, otherwise a score.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevDrivingSchoolSize} size - Size of the school.
 * @returns {DibodevDrivingSchoolVerdict} The recommendation.
 */
function verdictOf(answers: DibodevQuizAnswers, size: DibodevDrivingSchoolSize): DibodevDrivingSchoolVerdict {
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
 * @param {DibodevDrivingSchoolVerdict} verdict - The recommendation (complement or custom).
 * @param {DibodevDrivingSchoolSize} size - Size of the school.
 * @returns {DibodevEstimatorBaseRange} The range.
 */
function projectRangeOf(
  verdict: DibodevDrivingSchoolVerdict,
  size: DibodevDrivingSchoolSize,
): DibodevEstimatorBaseRange {
  if (verdict === 'complement') {
    return size === 'small' ? ESTIMATOR_BASE_RANGES.tool.small : ESTIMATOR_BASE_RANGES.tool.medium
  }
  if (size === 'large') return ESTIMATOR_BASE_RANGES.software.large
  return size === 'medium' ? ESTIMATOR_BASE_RANGES.software.medium : ESTIMATOR_BASE_RANGES.software.small
}

/**
 * Price card of a market software result: public prices of the publishers.
 * @param {DibodevDrivingSchoolQuizWording} wording - Texts of the test.
 * @returns {DibodevQuizPriceCard} The card.
 */
function marketPriceCard(wording: DibodevDrivingSchoolQuizWording): DibodevQuizPriceCard {
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
 * @param {DibodevDrivingSchoolVerdict} verdict - The recommendation (complement or custom).
 * @param {DibodevEstimatorBaseRange} range - The price and duration range.
 * @param {DibodevDrivingSchoolQuizWording} wording - Texts of the test.
 * @returns {DibodevQuizPriceCard} The card.
 */
function projectPriceCard(
  verdict: DibodevDrivingSchoolVerdict,
  range: DibodevEstimatorBaseRange,
  wording: DibodevDrivingSchoolQuizWording,
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
 * Features to plan in a complement or a custom tool, most useful first.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevDrivingSchoolQuizWording} wording - Texts of the test.
 * @returns {string[]} At most four features.
 */
function featuresToPlanOf(answers: DibodevQuizAnswers, wording: DibodevDrivingSchoolQuizWording): string[] {
  const bookingChannels: string[] = answers.booking ?? []
  const features: string[] = wordsOf(answers.pains ?? [], wording.featuresByPain)
  if (!bookingChannels.includes('online')) features.unshift(wording.onlineBookingFeature)
  else if (bookingChannels.length > 1) features.unshift(wording.singlePlanningFeature)
  if (singleAnswerOf(answers, 'agencies') !== '1') features.push(wording.agenciesFeature)
  return features.slice(0, MAXIMUM_ADVICE_POINTS)
}

/**
 * Points to check before signing with a publisher: the logbook first, data export last.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevDrivingSchoolQuizWording} wording - Texts of the test.
 * @returns {string[]} At most four questions.
 */
function checksBeforeSigningOf(answers: DibodevQuizAnswers, wording: DibodevDrivingSchoolQuizWording): string[] {
  const painChecks: string[] = wordsOf(answers.pains ?? [], wording.checksByPain).slice(0, MAXIMUM_PAIN_CHECKS)
  return [wording.logbookCheck, ...painChecks, wording.dataExportCheck]
}

/**
 * The school in one sentence ("5 à 10 moniteurs, 2 ou 3 agences, réservations par téléphone et en ligne.").
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevDrivingSchoolQuizWording} wording - Texts of the test.
 * @returns {string} The summary.
 */
function answersSummaryOf(answers: DibodevQuizAnswers, wording: DibodevDrivingSchoolQuizWording): string {
  const bookingWords: string[] = wordsOf(answers.booking ?? [], wording.recapBookingWords)
  const parts: string[] = [
    wording.recapInstructorWords[singleAnswerOf(answers, 'instructors')] ?? '',
    wording.recapAgencyWords[singleAnswerOf(answers, 'agencies')] ?? '',
    bookingWords.length
      ? fillTemplate(wording.recapBookingTemplate, { channels: joinWithConjunction(bookingWords, wording.conjunction) })
      : '',
  ]
  return `${parts.filter((part: string): boolean => part !== '').join(', ')}.`
}

/**
 * Headline and explanation of the result.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevDrivingSchoolVerdict} verdict - The recommendation.
 * @param {DibodevDrivingSchoolSize} size - Size of the school.
 * @param {DibodevDrivingSchoolQuizWording} wording - Texts of the test.
 * @returns {DibodevDrivingSchoolResultWording} The texts.
 */
function resultWordingOf(
  answers: DibodevQuizAnswers,
  verdict: DibodevDrivingSchoolVerdict,
  size: DibodevDrivingSchoolSize,
  wording: DibodevDrivingSchoolQuizWording,
): DibodevDrivingSchoolResultWording {
  const current: string = singleAnswerOf(answers, 'current')
  const { custom, complement, solo, market } = wording.results
  if (verdict === 'custom') return { title: custom.title, explanation: custom.explanation }
  if (verdict === 'complement') {
    const painWords: string[] = wordsOf(answers.pains ?? [], wording.complementPainWords)
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
 * Builds the test in one language: the questions and the rule that turns the answers into a recommendation.
 * @param {DibodevDrivingSchoolQuizWording} wording - Texts of the test.
 * @returns {DibodevQuizDefinition} The test.
 */
function buildDrivingSchoolSoftwareQuiz(wording: DibodevDrivingSchoolQuizWording): DibodevQuizDefinition {
  return {
    id: QUIZ_ID,
    name: wording.quizName,
    contactProjectType: 'software',
    progressTravellerIcon: 'Car',
    questions: wording.questions,
    computeResult: (answers: DibodevQuizAnswers): DibodevQuizResult => {
      const size: DibodevDrivingSchoolSize = schoolSizeOf(answers)
      const verdict: DibodevDrivingSchoolVerdict = verdictOf(answers, size)
      const { title, explanation }: DibodevDrivingSchoolResultWording = resultWordingOf(answers, verdict, size, wording)
      const answersSummary: string = answersSummaryOf(answers, wording)

      if (verdict === 'market') {
        return {
          verdict,
          title,
          explanation,
          answersSummary,
          priceCard: marketPriceCard(wording),
          adviceTitle: wording.market.adviceTitle,
          advicePoints: checksBeforeSigningOf(answers, wording),
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
        advicePoints: featuresToPlanOf(answers, wording),
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

export const DRIVING_SCHOOL_SOFTWARE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildDrivingSchoolSoftwareQuiz(DRIVING_SCHOOL_QUIZ_WORDING_FR),
  en: buildDrivingSchoolSoftwareQuiz(DRIVING_SCHOOL_QUIZ_WORDING_EN),
  es: buildDrivingSchoolSoftwareQuiz(DRIVING_SCHOOL_QUIZ_WORDING_ES),
}
