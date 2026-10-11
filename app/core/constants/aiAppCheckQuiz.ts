import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type {
  DibodevAiAppCheckAdviceKey,
  DibodevAiAppCheckQuizWording,
  DibodevAiAppCheckVerdict,
  DibodevAiAppCheckVerdictWording,
} from '~/core/types/DibodevAiAppCheckQuiz'
import type { DibodevQuizAnswers, DibodevQuizDefinition, DibodevQuizResult } from '~/core/types/DibodevQuiz'
import { AI_APP_CHECK_QUIZ_WORDING_EN } from '~/core/constants/aiAppTakeover/quizWording.en'
import { AI_APP_CHECK_QUIZ_WORDING_ES } from '~/core/constants/aiAppTakeover/quizWording.es'
import { AI_APP_CHECK_QUIZ_WORDING_FR } from '~/core/constants/aiAppTakeover/quizWording.fr'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

/** Id of the test, sent to PostHog as `tunnel` and as `tool` by the teasers. */
export const AI_APP_CHECK_QUIZ_ID: string = 'ai-app-check'
const CONTACT_PROJECT_TYPE: string = 'software'
const PROGRESS_TRAVELLER_ICON: string = 'ShieldCheck'
const PRICING_SECTION_ANCHOR: string = '#pricing'
const MAXIMUM_ADVICE_POINTS: number = 4
const MAXIMUM_PAIN_POINTS: number = 3
/** Score from which the access rules, keys and backups must be checked before anything else. */
const SECURE_SCORE_THRESHOLD: number = 5
/** Score from which a takeover (secure, then stabilise) is recommended. */
const TAKEOVER_SCORE_THRESHOLD: number = 11
const NO_SAFEGUARD_SCORE: number = 2
const STAGE_SCORES: Record<string, number> = { prototype: 0, internal: 1, customers: 2, selling: 3 }
const USERS_SCORES: Record<string, number> = { '1-5': 0, '6-50': 1, '51-500': 2, '500+': 3 }
const DATA_SCORES: Record<string, number> = { customers: 2, payments: 2, documents: 1, keys: 2, none: 0 }
const CODE_SCORES: Record<string, number> = { github: 0, 'tool-only': 2, unknown: 1 }
const ADVICE_ORDER: DibodevAiAppCheckAdviceKey[] = ['rls', 'keys', 'payments', 'export', 'backup', 'tests', 'credits']
const FALLBACK_ADVICE_KEYS: DibodevAiAppCheckAdviceKey[] = ['export', 'backup']

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
 * Tells whether an option of a multiple-choice question was selected.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {string} questionId - The question.
 * @param {string} optionId - The option.
 * @returns {boolean} True when the option is selected.
 */
function hasAnswer(answers: DibodevQuizAnswers, questionId: string, optionId: string): boolean {
  return (answers[questionId] ?? []).includes(optionId)
}

/**
 * Adds up the risk: who uses the app, how many, which data, what goes wrong, where the code is and what protects it.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @returns {number} The risk score, 0 when nothing is exposed.
 */
function riskScoreOf(answers: DibodevQuizAnswers): number {
  const dataScore: number = (answers.data ?? []).reduce(
    (total: number, optionId: string): number => total + (DATA_SCORES[optionId] ?? 0),
    0,
  )
  const painScore: number = Math.min((answers.pains ?? []).length, MAXIMUM_PAIN_POINTS)
  const safeguardScore: number = hasAnswer(answers, 'checks', 'none')
    ? NO_SAFEGUARD_SCORE
    : -(answers.checks ?? []).length
  return (
    (STAGE_SCORES[singleAnswerOf(answers, 'stage')] ?? 0) +
    (USERS_SCORES[singleAnswerOf(answers, 'users')] ?? 0) +
    dataScore +
    painScore +
    (CODE_SCORES[singleAnswerOf(answers, 'code')] ?? 0) +
    safeguardScore
  )
}

/**
 * Picks the verdict: a wanted rebuild is a takeover, otherwise the score decides.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @returns {DibodevAiAppCheckVerdict} The verdict.
 */
function verdictOf(answers: DibodevQuizAnswers): DibodevAiAppCheckVerdict {
  if (singleAnswerOf(answers, 'goal') === 'rebuild') return 'takeover'
  const score: number = riskScoreOf(answers)
  if (score >= TAKEOVER_SCORE_THRESHOLD) return 'takeover'
  if (score >= SECURE_SCORE_THRESHOLD) return 'secure'
  return 'watch'
}

/**
 * Points to check first, deduced from the data, the code location, the safeguards and the problems.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @returns {DibodevAiAppCheckAdviceKey[]} At most four keys, in priority order.
 */
function adviceKeysOf(answers: DibodevQuizAnswers): DibodevAiAppCheckAdviceKey[] {
  const hasSensitiveData: boolean = ['customers', 'payments', 'documents'].some((optionId: string): boolean =>
    hasAnswer(answers, 'data', optionId),
  )
  const wanted: Record<DibodevAiAppCheckAdviceKey, boolean> = {
    rls: hasSensitiveData,
    keys: hasAnswer(answers, 'data', 'keys'),
    payments: hasAnswer(answers, 'data', 'payments') || singleAnswerOf(answers, 'stage') === 'selling',
    export: singleAnswerOf(answers, 'code') !== 'github',
    backup: !hasAnswer(answers, 'checks', 'backup'),
    tests:
      !hasAnswer(answers, 'checks', 'tests') &&
      (hasAnswer(answers, 'pains', 'regressions') || singleAnswerOf(answers, 'goal') === 'features'),
    credits: hasAnswer(answers, 'pains', 'credits'),
  }
  const keys: DibodevAiAppCheckAdviceKey[] = ADVICE_ORDER.filter(
    (key: DibodevAiAppCheckAdviceKey): boolean => wanted[key],
  )
  return (keys.length ? keys : FALLBACK_ADVICE_KEYS).slice(0, MAXIMUM_ADVICE_POINTS)
}

/**
 * One sentence recalling the answers ("Application faite avec Lovable, utilisée par vos clients, 6 à 50 personnes, fiches clients et paiements.").
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevAiAppCheckQuizWording} wording - Texts of the test.
 * @returns {string} The summary.
 */
function summaryOf(answers: DibodevQuizAnswers, wording: DibodevAiAppCheckQuizWording): string {
  const dataWords: string[] = (answers.data ?? []).flatMap((optionId: string): string[] =>
    wording.dataWords[optionId] ? [wording.dataWords[optionId]] : [],
  )
  return QuizTextUtils.fillTemplate(wording.summaryTemplate, {
    tool: wording.toolWords[singleAnswerOf(answers, 'tool')] ?? wording.toolWords.other ?? '',
    stage: wording.stageWords[singleAnswerOf(answers, 'stage')] ?? '',
    users: wording.usersWords[singleAnswerOf(answers, 'users')] ?? '',
    data: dataWords.length ? QuizTextUtils.joinWithConjunction(dataWords, wording.conjunction) : wording.dataNoneWord,
  })
}

/**
 * Builds the result of the AI application check: a verdict, the formula it leads to and the points to check first.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevAiAppCheckQuizWording} wording - Texts of the test.
 * @returns {DibodevQuizResult} The result.
 */
function computeAiAppCheckResult(
  answers: DibodevQuizAnswers,
  wording: DibodevAiAppCheckQuizWording,
): DibodevQuizResult {
  const verdict: DibodevAiAppCheckVerdict = verdictOf(answers)
  const verdictWording: DibodevAiAppCheckVerdictWording = wording.verdicts[verdict]
  return {
    verdict,
    title: verdictWording.title,
    explanation: verdictWording.explanation,
    answersSummary: summaryOf(answers, wording),
    priceCard: {
      eyebrow: wording.priceCardEyebrow,
      price: verdictWording.price,
      priceSuffix: verdictWording.priceSuffix,
      details: [
        { label: wording.firstStepLabel, value: wording.firstStepValue },
        { label: wording.firstOpinionLabel, value: wording.firstOpinionValue },
        { label: wording.nextStepLabel, value: verdictWording.nextStep },
      ],
      footnote: wording.priceFootnote,
      footnoteLink: { label: wording.priceFootnoteLinkLabel, href: PRICING_SECTION_ANCHOR },
    },
    adviceTitle: wording.adviceTitle,
    advicePoints: adviceKeysOf(answers).map((key: DibodevAiAppCheckAdviceKey): string => wording.advice[key]),
    disclaimer: wording.disclaimer,
    ctaLabel: wording.ctaLabel,
    leadFormTitle: wording.leadFormTitle,
    leadFormIntro: wording.leadFormIntro,
    leadBudget: verdictWording.leadBudget,
  }
}

/**
 * Builds the AI application check in one language.
 * @param {DibodevAiAppCheckQuizWording} wording - Texts of the test.
 * @returns {DibodevQuizDefinition} The test.
 */
function buildAiAppCheckQuiz(wording: DibodevAiAppCheckQuizWording): DibodevQuizDefinition {
  return {
    id: AI_APP_CHECK_QUIZ_ID,
    name: wording.quizName,
    contactProjectType: CONTACT_PROJECT_TYPE,
    progressTravellerIcon: PROGRESS_TRAVELLER_ICON,
    questions: wording.questions,
    computeResult: (answers: DibodevQuizAnswers): DibodevQuizResult => computeAiAppCheckResult(answers, wording),
  }
}

/** The AI application check in each language. */
export const AI_APP_CHECK_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildAiAppCheckQuiz(AI_APP_CHECK_QUIZ_WORDING_FR),
  en: buildAiAppCheckQuiz(AI_APP_CHECK_QUIZ_WORDING_EN),
  es: buildAiAppCheckQuiz(AI_APP_CHECK_QUIZ_WORDING_ES),
}
