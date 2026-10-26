import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type {
  DibodevColdCallingCheckAdviceKey,
  DibodevColdCallingCheckQuizWording,
  DibodevColdCallingCheckVerdict,
  DibodevColdCallingCheckVerdictWording,
} from '~/core/types/DibodevColdCallingCheckQuiz'
import type { DibodevQuizAnswers, DibodevQuizDefinition, DibodevQuizResult } from '~/core/types/DibodevQuiz'
import { COLD_CALLING_CHECK_CONTACT_PROJECT_TYPE } from '~/core/constants/coldCallingCheck/pageShared'
import { COLD_CALLING_CHECK_QUIZ_WORDING_EN } from '~/core/constants/coldCallingCheck/quizWording.en'
import { COLD_CALLING_CHECK_QUIZ_WORDING_ES } from '~/core/constants/coldCallingCheck/quizWording.es'
import { COLD_CALLING_CHECK_QUIZ_WORDING_FR } from '~/core/constants/coldCallingCheck/quizWording.fr'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

/** Id of the test, sent to PostHog as `tunnel` and as `tool` by the teasers. */
export const COLD_CALLING_CHECK_QUIZ_ID: string = 'cold-calling-check'
const PROGRESS_TRAVELLER_ICON: string = 'Phone'
const MAXIMUM_ADVICE_POINTS: number = 4
const BUSINESSES_TARGET_OPTION_ID: string = 'businesses'
const BOTH_TARGETS_OPTION_ID: string = 'both'
const HOUSING_WORKS_OPTION_ID: string = 'housingWorks'
const CPF_TRAINING_OPTION_ID: string = 'cpfTraining'
const ACTIVE_CONTRACT_OPTION_ID: string = 'activeContract'
const FORMER_CONTRACT_OPTION_ID: string = 'formerContract'
const DOCUMENTED_CONSENT_OPTION_ID: string = 'documented'
const PURCHASED_LIST_OPTION_ID: string = 'purchasedList'
const BANNED_SECTOR_OPTION_IDS: string[] = [HOUSING_WORKS_OPTION_ID, CPF_TRAINING_OPTION_ID]
const CONSENT_DOUBT_ADVICE_KEYS: Record<string, DibodevColdCallingCheckAdviceKey> = {
  notDocumented: 'consentNotProven',
  unsure: 'consentUnsure',
}
const NUMBER_SOURCE_ADVICE_KEYS: Record<string, DibodevColdCallingCheckAdviceKey> = {
  purchasedList: 'purchasedList',
  inboundRequests: 'quoteRequests',
  directories: 'directoryNumbers',
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
 * Tells whether the activity is one of the sectors banned even with consent (energy renovation, home adaptation, CPF).
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @returns {boolean} True for a banned sector.
 */
function isBannedSector(answers: DibodevQuizAnswers): boolean {
  return BANNED_SECTOR_OPTION_IDS.includes(singleAnswerOf(answers, 'sector'))
}

/**
 * Picks the verdict: businesses only, then the sector ban, then the contract or proven consent (calling both follows the private individuals rule).
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @returns {DibodevColdCallingCheckVerdict} The verdict.
 */
function verdictOf(answers: DibodevQuizAnswers): DibodevColdCallingCheckVerdict {
  if (singleAnswerOf(answers, 'targets') === BUSINESSES_TARGET_OPTION_ID) {
    return 'businessAllowed'
  }
  const hasActiveContract: boolean = singleAnswerOf(answers, 'relationship') === ACTIVE_CONTRACT_OPTION_ID

  if (isBannedSector(answers) && !hasActiveContract) {
    return 'sectorBanned'
  }
  if (hasActiveContract || singleAnswerOf(answers, 'consent') === DOCUMENTED_CONSENT_OPTION_ID) {
    return 'allowedWithRules'
  }
  return 'consentRequired'
}

/**
 * Advice on where the numbers come from, in the order the visitor ticked them.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @returns {DibodevColdCallingCheckAdviceKey[]} The keys, possibly empty.
 */
function numberSourceAdviceKeysOf(answers: DibodevQuizAnswers): DibodevColdCallingCheckAdviceKey[] {
  return (answers.numberSources ?? []).flatMap((optionId: string): DibodevColdCallingCheckAdviceKey[] =>
    NUMBER_SOURCE_ADVICE_KEYS[optionId] ? [NUMBER_SOURCE_ADVICE_KEYS[optionId]] : [],
  )
}

/**
 * Points to check first for calls that are allowed: the frame of the contract or of the consent, then the call itself.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @returns {DibodevColdCallingCheckAdviceKey[]} The keys, in display order.
 */
function allowedCallAdviceKeysOf(answers: DibodevQuizAnswers): DibodevColdCallingCheckAdviceKey[] {
  if (singleAnswerOf(answers, 'relationship') === ACTIVE_CONTRACT_OPTION_ID) {
    return [isBannedSector(answers) ? 'sectorContractOnly' : 'contractScope', 'duringTheCall']
  }
  const hasBoughtNumbers: boolean = (answers.numberSources ?? []).includes(PURCHASED_LIST_OPTION_ID)
  return hasBoughtNumbers ? ['consentLimits', 'duringTheCall', 'purchasedList'] : ['consentLimits', 'duringTheCall']
}

/**
 * Points to check first: what the verdict calls for, the B2B rule when the visitor also calls businesses, then the way to get requests.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevColdCallingCheckVerdict} verdict - The verdict.
 * @returns {DibodevColdCallingCheckAdviceKey[]} At most four keys, in display order.
 */
function adviceKeysOf(
  answers: DibodevQuizAnswers,
  verdict: DibodevColdCallingCheckVerdict,
): DibodevColdCallingCheckAdviceKey[] {
  const businessCallKeys: DibodevColdCallingCheckAdviceKey[] =
    singleAnswerOf(answers, 'targets') === BOTH_TARGETS_OPTION_ID ? ['businessCallsAlso'] : []
  const keys: DibodevColdCallingCheckAdviceKey[] = []

  if (verdict === 'businessAllowed') {
    if (isBannedSector(answers)) {
      keys.push('sectorConsumersOnly')
    }
    keys.push('businessRelevance', 'personalPhoneGreyArea', 'businessEmail', 'attractRequests')
  } else if (verdict === 'sectorBanned') {
    const sectorKeys: DibodevColdCallingCheckAdviceKey[] =
      singleAnswerOf(answers, 'sector') === CPF_TRAINING_OPTION_ID
        ? ['cpfNoCallback']
        : ['housingCallback', 'housingMessages']
    keys.push(...sectorKeys, ...businessCallKeys, 'attractRequests')
  } else if (verdict === 'consentRequired') {
    const consentDoubtKey: DibodevColdCallingCheckAdviceKey | undefined =
      CONSENT_DOUBT_ADVICE_KEYS[singleAnswerOf(answers, 'consent')]

    if (consentDoubtKey) {
      keys.push(consentDoubtKey)
    }
    if (singleAnswerOf(answers, 'relationship') === FORMER_CONTRACT_OPTION_ID) {
      keys.push('formerCustomers')
    }
    keys.push('collectConsent', ...businessCallKeys, ...numberSourceAdviceKeysOf(answers), 'attractRequests')
  } else {
    keys.push(...allowedCallAdviceKeysOf(answers), ...businessCallKeys, 'attractRequests')
  }
  return [...new Set(keys)].slice(0, MAXIMUM_ADVICE_POINTS)
}

/**
 * One sentence recalling the answers ("Appels à des particuliers, autre activité, anciens clients, sans accord ; numéros : un fichier acheté.").
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevColdCallingCheckQuizWording} wording - Texts of the test.
 * @returns {string} The summary.
 */
function summaryOf(answers: DibodevQuizAnswers, wording: DibodevColdCallingCheckQuizWording): string {
  const numberSourceWords: string[] = (answers.numberSources ?? []).flatMap((optionId: string): string[] =>
    wording.numberSourceWords[optionId] ? [wording.numberSourceWords[optionId]] : [],
  )
  return QuizTextUtils.fillTemplate(wording.summaryTemplate, {
    targets: wording.targetWords[singleAnswerOf(answers, 'targets')] ?? '',
    sector: wording.sectorWords[singleAnswerOf(answers, 'sector')] ?? '',
    relationship: wording.relationshipWords[singleAnswerOf(answers, 'relationship')] ?? '',
    consent: wording.consentWords[singleAnswerOf(answers, 'consent')] ?? '',
    numberSources: numberSourceWords.length
      ? QuizTextUtils.joinWithConjunction(numberSourceWords, wording.conjunction)
      : wording.numberSourcesNoneWord,
  })
}

/**
 * Builds the result of the cold calling test: the verdict, the rules card and the points to check first.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevColdCallingCheckQuizWording} wording - Texts of the test.
 * @returns {DibodevQuizResult} The result.
 */
function computeColdCallingCheckResult(
  answers: DibodevQuizAnswers,
  wording: DibodevColdCallingCheckQuizWording,
): DibodevQuizResult {
  const verdict: DibodevColdCallingCheckVerdict = verdictOf(answers)
  const verdictWording: DibodevColdCallingCheckVerdictWording = wording.verdicts[verdict]
  return {
    verdict,
    title: verdictWording.title,
    explanation: verdictWording.explanation,
    answersSummary: summaryOf(answers, wording),
    priceCard: {
      eyebrow: wording.cardEyebrow,
      price: verdictWording.headline,
      priceSuffix: verdictWording.headlineSuffix,
      details: [...verdictWording.details],
      footnote: verdictWording.cardFootnote,
      footnoteLink: { label: wording.cardFootnoteLinkLabel, href: wording.cardFootnoteLinkHref },
    },
    adviceTitle: wording.adviceTitle,
    advicePoints: adviceKeysOf(answers, verdict).map(
      (key: DibodevColdCallingCheckAdviceKey): string => wording.advice[key],
    ),
    disclaimer: wording.disclaimer,
    ctaLabel: verdictWording.ctaLabel,
    leadFormTitle: wording.leadFormTitle,
    leadFormIntro: wording.leadFormIntro,
    leadBudget: verdictWording.leadBudget,
  }
}

/**
 * Builds the cold calling test in one language.
 * @param {DibodevColdCallingCheckQuizWording} wording - Texts of the test.
 * @returns {DibodevQuizDefinition} The test.
 */
function buildColdCallingCheckQuiz(wording: DibodevColdCallingCheckQuizWording): DibodevQuizDefinition {
  return {
    id: COLD_CALLING_CHECK_QUIZ_ID,
    name: wording.quizName,
    contactProjectType: COLD_CALLING_CHECK_CONTACT_PROJECT_TYPE,
    progressTravellerIcon: PROGRESS_TRAVELLER_ICON,
    questions: wording.questions,
    computeResult: (answers: DibodevQuizAnswers): DibodevQuizResult => computeColdCallingCheckResult(answers, wording),
  }
}

export const COLD_CALLING_CHECK_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildColdCallingCheckQuiz(COLD_CALLING_CHECK_QUIZ_WORDING_FR),
  en: buildColdCallingCheckQuiz(COLD_CALLING_CHECK_QUIZ_WORDING_EN),
  es: buildColdCallingCheckQuiz(COLD_CALLING_CHECK_QUIZ_WORDING_ES),
}
