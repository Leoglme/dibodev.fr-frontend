import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevQuizAnswers, DibodevQuizDefinition, DibodevQuizResult } from '~/core/types/DibodevQuiz'
import type {
  DibodevWebAccessibilityScopeAdviceKey,
  DibodevWebAccessibilityScopeQuizWording,
  DibodevWebAccessibilityScopeVerdict,
  DibodevWebAccessibilityScopeVerdictWording,
} from '~/core/types/DibodevWebAccessibilityScopeQuiz'
import { WEB_ACCESSIBILITY_SCOPE_QUIZ_WORDING_EN } from '~/core/constants/webAccessibilityScope/quizWording.en'
import { WEB_ACCESSIBILITY_SCOPE_QUIZ_WORDING_ES } from '~/core/constants/webAccessibilityScope/quizWording.es'
import { WEB_ACCESSIBILITY_SCOPE_QUIZ_WORDING_FR } from '~/core/constants/webAccessibilityScope/quizWording.fr'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

/** Id of the test, sent to PostHog as `tunnel` and as `tool` by the teasers. */
export const WEB_ACCESSIBILITY_SCOPE_QUIZ_ID: string = 'web-accessibility-scope'
const CONTACT_PROJECT_TYPE: string = 'website'
const PROGRESS_TRAVELLER_ICON: string = 'Eye'
const MAXIMUM_ADVICE_POINTS: number = 4
const CONSUMER_CUSTOMER_OPTION_IDS: string[] = ['consumers', 'both']
const NEW_WEBSITE_OPTION_IDS: string[] = ['new', 'planned']
const MICRO_EXEMPTION_WEBSITE_OPTION_IDS: string[] = ['ecommerce', 'regulated', 'service']
const RECOMMENDED_REASON_ADVICE_KEYS: Record<string, DibodevWebAccessibilityScopeAdviceKey> = {
  ecommerce: 'businessCustomersOnly',
  service: 'businessCustomersOnly',
  showcase: 'showcaseRecommended',
  internal: 'internalTools',
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
 * Whether the website addresses consumers, alone or with professionals.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @returns {boolean} True when consumers are among the customers.
 */
function hasConsumerCustomers(answers: DibodevQuizAnswers): boolean {
  return CONSUMER_CUSTOMER_OPTION_IDS.includes(singleAnswerOf(answers, 'customers'))
}

/**
 * Picks the verdict: article 47 first (public bodies, companies above 250 M€), then the European Accessibility Act.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @returns {DibodevWebAccessibilityScopeVerdict} The verdict.
 */
function verdictOf(answers: DibodevQuizAnswers): DibodevWebAccessibilityScopeVerdict {
  const organization: string = singleAnswerOf(answers, 'organization')
  const size: string = singleAnswerOf(answers, 'size')
  const website: string = singleAnswerOf(answers, 'website')

  if (organization === 'public') {
    return 'publicSector'
  }
  if (size === 'large250' && organization !== 'association') {
    return 'largeCompany'
  }
  if (organization === 'association' && website === 'service') {
    return 'checkNeeded'
  }
  if (size === 'micro') {
    return 'recommended'
  }
  if (website === 'regulated') {
    return 'checkNeeded'
  }
  if (website === 'ecommerce' && hasConsumerCustomers(answers)) {
    return 'eaaInScope'
  }
  if (website === 'service' && hasConsumerCustomers(answers)) {
    return 'checkNeeded'
  }
  return 'recommended'
}

/**
 * The advice that explains why no legal obligation was identified.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @returns {DibodevWebAccessibilityScopeAdviceKey} The advice key.
 */
function recommendedReasonOf(answers: DibodevQuizAnswers): DibodevWebAccessibilityScopeAdviceKey {
  const website: string = singleAnswerOf(answers, 'website')

  if (singleAnswerOf(answers, 'size') === 'micro' && MICRO_EXEMPTION_WEBSITE_OPTION_IDS.includes(website)) {
    return 'microExemption'
  }
  return RECOMMENDED_REASON_ADVICE_KEYS[website] ?? 'showcaseRecommended'
}

/**
 * The advice that names what the test cannot settle.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @returns {DibodevWebAccessibilityScopeAdviceKey} The advice key.
 */
function checkNeededReasonOf(answers: DibodevQuizAnswers): DibodevWebAccessibilityScopeAdviceKey {
  if (singleAnswerOf(answers, 'organization') === 'association') {
    return 'associationEssentialServices'
  }
  return singleAnswerOf(answers, 'website') === 'regulated' ? 'regulatedSector' : 'customerAreaCommerce'
}

/**
 * Points to do first: what the verdict calls for, then what the age of the website and its customers add.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevWebAccessibilityScopeVerdict} verdict - The verdict.
 * @returns {DibodevWebAccessibilityScopeAdviceKey[]} At most four keys, in display order.
 */
function adviceKeysOf(
  answers: DibodevQuizAnswers,
  verdict: DibodevWebAccessibilityScopeVerdict,
): DibodevWebAccessibilityScopeAdviceKey[] {
  const isNewWebsite: boolean = NEW_WEBSITE_OPTION_IDS.includes(singleAnswerOf(answers, 'timing'))
  const website: string = singleAnswerOf(answers, 'website')
  const keys: DibodevWebAccessibilityScopeAdviceKey[] = []

  if (verdict === 'publicSector') {
    keys.push('publicDeclaration', 'rgaaAudit', isNewWebsite ? 'accessibleFromSpecification' : 'subtitles')
  } else if (verdict === 'largeCompany') {
    keys.push('largeCompanyDeclaration', 'rgaaAudit')
    if (hasConsumerCustomers(answers) && (website === 'ecommerce' || website === 'regulated')) {
      keys.push('alsoEuropeanLaw')
    }
    keys.push(isNewWebsite ? 'accessibleFromSpecification' : 'disproportionateBurden')
  } else if (verdict === 'eaaInScope') {
    keys.push('accessibilityInformation', 'rgaaAudit')
    keys.push(isNewWebsite ? 'accessibleFromSpecification' : 'noTransitionForWebsites')
    keys.push(isNewWebsite ? 'disproportionateBurden' : 'contractsTransition')
  } else if (verdict === 'checkNeeded') {
    keys.push(checkNeededReasonOf(answers), 'sixGestures')
    if (website === 'regulated') {
      keys.push('subtitles')
    }
    if (isNewWebsite) {
      keys.push('accessibleFromSpecification')
    }
  } else {
    keys.push(recommendedReasonOf(answers), 'sixGestures')
    if (isNewWebsite) {
      keys.push('accessibleFromSpecification')
    }
  }
  return [...new Set(keys)].slice(0, MAXIMUM_ADVICE_POINTS)
}

/**
 * One sentence recalling the answers ("Entreprise, 10 à 249 salariés, vente en ligne, clients : des particuliers ; site en ligne avant le 28 juin 2025.").
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevWebAccessibilityScopeQuizWording} wording - Texts of the test.
 * @returns {string} The summary.
 */
function summaryOf(answers: DibodevQuizAnswers, wording: DibodevWebAccessibilityScopeQuizWording): string {
  return QuizTextUtils.fillTemplate(wording.summaryTemplate, {
    organization: wording.organizationWords[singleAnswerOf(answers, 'organization')] ?? '',
    size: wording.sizeWords[singleAnswerOf(answers, 'size')] ?? '',
    website: wording.websiteWords[singleAnswerOf(answers, 'website')] ?? '',
    customers: wording.customerWords[singleAnswerOf(answers, 'customers')] ?? '',
    timing: wording.timingWords[singleAnswerOf(answers, 'timing')] ?? '',
  })
}

/**
 * Builds the result of the scope test: the verdict, the obligations card and the points to do first.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevWebAccessibilityScopeQuizWording} wording - Texts of the test.
 * @returns {DibodevQuizResult} The result.
 */
function computeWebAccessibilityScopeResult(
  answers: DibodevQuizAnswers,
  wording: DibodevWebAccessibilityScopeQuizWording,
): DibodevQuizResult {
  const verdict: DibodevWebAccessibilityScopeVerdict = verdictOf(answers)
  const verdictWording: DibodevWebAccessibilityScopeVerdictWording = wording.verdicts[verdict]
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
        { label: wording.lawLabel, value: verdictWording.lawValue },
        { label: wording.standardLabel, value: verdictWording.standardValue },
        { label: wording.publicationLabel, value: verdictWording.publicationValue },
        { label: wording.controlLabel, value: verdictWording.controlValue },
      ],
      footnote: wording.cardFootnote,
      footnoteLink: { label: wording.cardFootnoteLinkLabel, href: wording.cardFootnoteLinkHref },
    },
    adviceTitle: wording.adviceTitle,
    advicePoints: adviceKeysOf(answers, verdict).map(
      (key: DibodevWebAccessibilityScopeAdviceKey): string => wording.advice[key],
    ),
    disclaimer: wording.disclaimer,
    ctaLabel: verdictWording.ctaLabel,
    leadFormTitle: wording.leadFormTitle,
    leadFormIntro: wording.leadFormIntro,
    leadBudget: verdictWording.leadBudget,
  }
}

/**
 * Builds the web accessibility scope test in one language.
 * @param {DibodevWebAccessibilityScopeQuizWording} wording - Texts of the test.
 * @returns {DibodevQuizDefinition} The test.
 */
function buildWebAccessibilityScopeQuiz(wording: DibodevWebAccessibilityScopeQuizWording): DibodevQuizDefinition {
  return {
    id: WEB_ACCESSIBILITY_SCOPE_QUIZ_ID,
    name: wording.quizName,
    contactProjectType: CONTACT_PROJECT_TYPE,
    progressTravellerIcon: PROGRESS_TRAVELLER_ICON,
    questions: wording.questions,
    computeResult: (answers: DibodevQuizAnswers): DibodevQuizResult =>
      computeWebAccessibilityScopeResult(answers, wording),
  }
}

export const WEB_ACCESSIBILITY_SCOPE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildWebAccessibilityScopeQuiz(WEB_ACCESSIBILITY_SCOPE_QUIZ_WORDING_FR),
  en: buildWebAccessibilityScopeQuiz(WEB_ACCESSIBILITY_SCOPE_QUIZ_WORDING_EN),
  es: buildWebAccessibilityScopeQuiz(WEB_ACCESSIBILITY_SCOPE_QUIZ_WORDING_ES),
}
