import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type {
  DibodevEInvoicingScopeAdviceKey,
  DibodevEInvoicingScopeQuizWording,
  DibodevEInvoicingScopeVerdict,
  DibodevEInvoicingScopeVerdictWording,
} from '~/core/types/DibodevEInvoicingScopeQuiz'
import type { DibodevQuizAnswers, DibodevQuizDefinition, DibodevQuizResult } from '~/core/types/DibodevQuiz'
import { E_INVOICING_SCOPE_QUIZ_WORDING_EN } from '~/core/constants/eInvoicingScope/quizWording.en'
import { E_INVOICING_SCOPE_QUIZ_WORDING_ES } from '~/core/constants/eInvoicingScope/quizWording.es'
import { E_INVOICING_SCOPE_QUIZ_WORDING_FR } from '~/core/constants/eInvoicingScope/quizWording.fr'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

/** Id of the test, sent to PostHog as `tunnel` and as `tool` by the teasers. */
export const E_INVOICING_SCOPE_QUIZ_ID: string = 'e-invoicing-scope'
const CONTACT_PROJECT_TYPE: string = 'automation'
const PROGRESS_TRAVELLER_ICON: string = 'CalendarCheck'
const MAXIMUM_ADVICE_POINTS: number = 4
const MAXIMUM_CUSTOMER_ADVICE_POINTS: number = 2
const LARGE_SIZE_OPTION_ID: string = 'large'
const UNSURE_VAT_OPTION_ID: string = 'unsure'
const FALLBACK_VAT_OPTION_ID: string = 'collects'
const DEFAULT_VAT_BY_STATUS: Record<string, string> = {
  micro: 'franchise',
  company: 'collects',
  liberal: 'collects',
  landlord: 'exempt',
  landlordHotel: 'collects',
  association: 'outOfScope',
}
const CUSTOMER_ADVICE_KEYS: Record<string, DibodevEInvoicingScopeAdviceKey> = {
  businesses: 'businessCustomers',
  consumers: 'consumerCustomers',
  abroad: 'abroadCustomers',
  public: 'publicCustomers',
  none: 'noInvoices',
}
const ISSUER_TOOL_ADVICE_KEYS: Record<string, DibodevEInvoicingScopeAdviceKey> = {
  software: 'softwareTool',
  trade: 'tradeTool',
  office: 'officeTool',
  none: 'noTool',
}
const RECEIVER_TOOL_ADVICE_KEYS: Record<string, DibodevEInvoicingScopeAdviceKey> = {
  software: 'softwareTool',
  trade: 'tradeTool',
  office: 'officeToolReceive',
  none: 'noTool',
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
 * The VAT regime the result is computed with: the one given, or the most common one for the status when unknown.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @returns {string} The VAT option id.
 */
function effectiveVatOf(answers: DibodevQuizAnswers): string {
  const vat: string = singleAnswerOf(answers, 'vat')

  if (vat && vat !== UNSURE_VAT_OPTION_ID) {
    return vat
  }
  return DEFAULT_VAT_BY_STATUS[singleAnswerOf(answers, 'status')] ?? FALLBACK_VAT_OPTION_ID
}

/**
 * Picks the verdict: out of the scope of VAT, exempt (reception only), or in scope by size.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @returns {DibodevEInvoicingScopeVerdict} The verdict.
 */
function verdictOf(answers: DibodevQuizAnswers): DibodevEInvoicingScopeVerdict {
  const vat: string = effectiveVatOf(answers)

  if (vat === 'outOfScope') {
    return 'outOfScope'
  }
  if (vat === 'exempt') {
    return 'receiveOnly'
  }
  return singleAnswerOf(answers, 'size') === LARGE_SIZE_OPTION_ID ? 'largeBusiness' : 'smallBusiness'
}

/**
 * Points to check first: the VAT doubt, then what the verdict, the invoicing tool and the customers call for.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevEInvoicingScopeVerdict} verdict - The verdict.
 * @returns {DibodevEInvoicingScopeAdviceKey[]} At most four keys, in display order.
 */
function adviceKeysOf(
  answers: DibodevQuizAnswers,
  verdict: DibodevEInvoicingScopeVerdict,
): DibodevEInvoicingScopeAdviceKey[] {
  const status: string = singleAnswerOf(answers, 'status')
  const tool: string = singleAnswerOf(answers, 'tool')
  const keys: DibodevEInvoicingScopeAdviceKey[] = []

  if (singleAnswerOf(answers, 'vat') === UNSURE_VAT_OPTION_ID) {
    keys.push('vatUnsure')
  }
  if (verdict === 'outOfScope') {
    keys.push(status === 'association' ? 'associationActivity' : 'outOfScopeDoubt')
  } else if (verdict === 'receiveOnly') {
    keys.push(status === 'landlord' ? 'landlordServices' : 'exemptMixed')
    keys.push(RECEIVER_TOOL_ADVICE_KEYS[tool] ?? 'noTool', 'directory')
  } else {
    const customerKeys: DibodevEInvoicingScopeAdviceKey[] = (answers.customers ?? [])
      .flatMap((optionId: string): DibodevEInvoicingScopeAdviceKey[] =>
        CUSTOMER_ADVICE_KEYS[optionId] ? [CUSTOMER_ADVICE_KEYS[optionId]] : [],
      )
      .slice(0, MAXIMUM_CUSTOMER_ADVICE_POINTS)
    keys.push(ISSUER_TOOL_ADVICE_KEYS[tool] ?? 'noTool', ...customerKeys, 'directory')
  }
  return [...new Set(keys)].slice(0, MAXIMUM_ADVICE_POINTS)
}

/**
 * One sentence recalling the answers ("Micro-entrepreneur, en franchise de TVA, moins de 250 salariés, clients : des particuliers ; factures : Excel, Word ou du papier.").
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevEInvoicingScopeQuizWording} wording - Texts of the test.
 * @returns {string} The summary.
 */
function summaryOf(answers: DibodevQuizAnswers, wording: DibodevEInvoicingScopeQuizWording): string {
  const customerWords: string[] = (answers.customers ?? []).flatMap((optionId: string): string[] =>
    wording.customerWords[optionId] ? [wording.customerWords[optionId]] : [],
  )
  return QuizTextUtils.fillTemplate(wording.summaryTemplate, {
    status: wording.statusWords[singleAnswerOf(answers, 'status')] ?? '',
    vat: wording.vatWords[singleAnswerOf(answers, 'vat')] ?? '',
    size: wording.sizeWords[singleAnswerOf(answers, 'size')] ?? '',
    customers: customerWords.length
      ? QuizTextUtils.joinWithConjunction(customerWords, wording.conjunction)
      : wording.customersNoneWord,
    tool: wording.toolWords[singleAnswerOf(answers, 'tool')] ?? '',
  })
}

/**
 * Builds the result of the scope test: the verdict, the deadlines card and the points to check first.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevEInvoicingScopeQuizWording} wording - Texts of the test.
 * @returns {DibodevQuizResult} The result.
 */
function computeEInvoicingScopeResult(
  answers: DibodevQuizAnswers,
  wording: DibodevEInvoicingScopeQuizWording,
): DibodevQuizResult {
  const verdict: DibodevEInvoicingScopeVerdict = verdictOf(answers)
  const verdictWording: DibodevEInvoicingScopeVerdictWording = wording.verdicts[verdict]
  const adviceValues: Record<string, string> = { issuingDate: verdictWording.issuingDateWords }
  return {
    verdict,
    title: verdictWording.title,
    explanation: verdictWording.explanation,
    answersSummary: summaryOf(answers, wording),
    priceCard: {
      eyebrow: wording.cardEyebrow,
      price: verdictWording.headline,
      priceSuffix: verdictWording.headlineSuffix,
      details: [
        { label: wording.receptionLabel, value: verdictWording.receptionValue },
        { label: wording.issuingLabel, value: verdictWording.issuingValue },
        { label: wording.reportingLabel, value: verdictWording.reportingValue },
        { label: wording.platformLabel, value: verdictWording.platformValue },
      ],
      footnote: wording.cardFootnote,
      footnoteLink: { label: wording.cardFootnoteLinkLabel, href: wording.cardFootnoteLinkHref },
    },
    adviceTitle: wording.adviceTitle,
    advicePoints: adviceKeysOf(answers, verdict).map((key: DibodevEInvoicingScopeAdviceKey): string =>
      QuizTextUtils.fillTemplate(wording.advice[key], adviceValues),
    ),
    disclaimer: wording.disclaimer,
    ctaLabel: verdictWording.ctaLabel,
    leadFormTitle: wording.leadFormTitle,
    leadFormIntro: wording.leadFormIntro,
    leadBudget: verdictWording.leadBudget,
  }
}

/**
 * Builds the e-invoicing scope test in one language.
 * @param {DibodevEInvoicingScopeQuizWording} wording - Texts of the test.
 * @returns {DibodevQuizDefinition} The test.
 */
function buildEInvoicingScopeQuiz(wording: DibodevEInvoicingScopeQuizWording): DibodevQuizDefinition {
  return {
    id: E_INVOICING_SCOPE_QUIZ_ID,
    name: wording.quizName,
    contactProjectType: CONTACT_PROJECT_TYPE,
    progressTravellerIcon: PROGRESS_TRAVELLER_ICON,
    questions: wording.questions,
    computeResult: (answers: DibodevQuizAnswers): DibodevQuizResult => computeEInvoicingScopeResult(answers, wording),
  }
}

export const E_INVOICING_SCOPE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildEInvoicingScopeQuiz(E_INVOICING_SCOPE_QUIZ_WORDING_FR),
  en: buildEInvoicingScopeQuiz(E_INVOICING_SCOPE_QUIZ_WORDING_EN),
  es: buildEInvoicingScopeQuiz(E_INVOICING_SCOPE_QUIZ_WORDING_ES),
}
