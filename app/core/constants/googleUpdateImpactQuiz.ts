import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type {
  DibodevQuizAnswers,
  DibodevQuizDefinition,
  DibodevQuizOption,
  DibodevQuizQuestion,
  DibodevQuizResult,
} from '~/core/types/DibodevQuiz'
import type {
  DibodevGoogleUpdateQuizAdviceKey,
  DibodevGoogleUpdateQuizVerdict,
  DibodevGoogleUpdateQuizVerdictWording,
  DibodevGoogleUpdateQuizWording,
} from '~/core/types/DibodevGoogleUpdateImpactQuiz'
import { GOOGLE_UPDATE_IMPACT_QUIZ_ID } from '~/core/constants/googleUpdateImpactCheck/pageShared'
import { GOOGLE_UPDATE_QUIZ_WORDING_EN } from '~/core/constants/googleUpdateImpactCheck/quizWording.en'
import { GOOGLE_UPDATE_QUIZ_WORDING_ES } from '~/core/constants/googleUpdateImpactCheck/quizWording.es'
import { GOOGLE_UPDATE_QUIZ_WORDING_FR } from '~/core/constants/googleUpdateImpactCheck/quizWording.fr'
import { GOOGLE_SEARCH_UPDATES_READ_AT, LATEST_GOOGLE_SEARCH_UPDATE } from '~/core/constants/googleSearchUpdates'
import { GoogleUpdateImpactUtils, GOOGLE_UPDATE_DAYS_TO_WAIT_AFTER_END } from '~/core/utils/GoogleUpdateImpactUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

const CONTACT_PROJECT_TYPE: string = 'website'
const PROGRESS_TRAVELLER_ICON: string = 'Search'
const MAXIMUM_ADVICE_POINTS: number = 4
/** Answers of the second question that point to a change on the site rather than to Google. */
const SITE_CHANGE_OPTION_IDS: string[] = ['redesign', 'links', 'outage']
const UNCERTAIN_TIMING_OPTION_IDS: string[] = ['fewDays', 'unknown']

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
 * Picks the verdict: a change on the site, a site missing on its own name, a drop that started before or a drop of requests only point elsewhere; a recent or undated drop is too early to read.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @returns {DibodevGoogleUpdateQuizVerdict} The verdict.
 */
function verdictOf(answers: DibodevQuizAnswers): DibodevGoogleUpdateQuizVerdict {
  const timing: string = singleAnswerOf(answers, 'timing')

  if (
    SITE_CHANGE_OPTION_IDS.includes(singleAnswerOf(answers, 'changes')) ||
    singleAnswerOf(answers, 'brand') === 'missing' ||
    singleAnswerOf(answers, 'impact') === 'requests' ||
    timing === 'beforeStart'
  ) {
    return 'otherCauseLikely'
  }
  return UNCERTAIN_TIMING_OPTION_IDS.includes(timing) ? 'tooEarlyToTell' : 'updateLikely'
}

/**
 * Points to do first: what the verdict calls for, then what the answers add.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevGoogleUpdateQuizVerdict} verdict - The verdict.
 * @returns {DibodevGoogleUpdateQuizAdviceKey[]} At most four keys, in display order.
 */
function adviceKeysOf(
  answers: DibodevQuizAnswers,
  verdict: DibodevGoogleUpdateQuizVerdict,
): DibodevGoogleUpdateQuizAdviceKey[] {
  const change: string = singleAnswerOf(answers, 'changes')
  const keys: DibodevGoogleUpdateQuizAdviceKey[] = []

  if (verdict === 'updateLikely') {
    keys.push('dontTouch', 'waitWeekAfterEnd', 'compareWithExport')
    keys.push(singleAnswerOf(answers, 'scope') === 'somePages' ? 'somePagesOnly' : 'noteDates')
  } else if (verdict === 'tooEarlyToTell') {
    keys.push('noteDates', 'dontTouch', 'waitWeekAfterEnd', 'compareWithExport')
  } else {
    if (singleAnswerOf(answers, 'brand') === 'missing') {
      keys.push('brandMissing')
    }
    if (change === 'redesign' || change === 'links') {
      keys.push('checkRecentChanges')
    }
    if (singleAnswerOf(answers, 'impact') === 'requests') {
      keys.push('checkContactForm')
    }
    keys.push('checkTechnical')
    if (singleAnswerOf(answers, 'timing') === 'beforeStart') {
      keys.push('season')
    }
    keys.push('noteDates')
  }
  return [...new Set(keys)].slice(0, MAXIMUM_ADVICE_POINTS)
}

/**
 * Builds the result of the test: the verdict, the card of the update and the points to do first.
 * @param {DibodevQuizAnswers} answers - All the answers.
 * @param {DibodevGoogleUpdateQuizWording} wording - Texts of the test, dates already filled.
 * @param {Record<string, string>} dateValues - The dates of the newest update, in words.
 * @returns {DibodevQuizResult} The result.
 */
function computeGoogleUpdateQuizResult(
  answers: DibodevQuizAnswers,
  wording: DibodevGoogleUpdateQuizWording,
  dateValues: Record<string, string>,
): DibodevQuizResult {
  const verdict: DibodevGoogleUpdateQuizVerdict = verdictOf(answers)
  const verdictWording: DibodevGoogleUpdateQuizVerdictWording = wording.verdicts[verdict]
  const isRolloutFinished: boolean = LATEST_GOOGLE_SEARCH_UPDATE.endDate !== null
  const fill: (template: string) => string = (template: string): string =>
    QuizTextUtils.fillTemplate(template, dateValues)

  return {
    verdict,
    title: verdictWording.title,
    explanation: fill(verdictWording.explanation),
    answersSummary: fill(
      QuizTextUtils.fillTemplate(wording.summaryTemplate, {
        timing: wording.timingWords[singleAnswerOf(answers, 'timing')] ?? '',
        change: wording.changeWords[singleAnswerOf(answers, 'changes')] ?? '',
        brand: wording.brandWords[singleAnswerOf(answers, 'brand')] ?? '',
        scope: wording.scopeWords[singleAnswerOf(answers, 'scope')] ?? '',
        impact: wording.impactWords[singleAnswerOf(answers, 'impact')] ?? '',
      }),
    ),
    priceCard: {
      eyebrow: wording.cardEyebrow,
      price: verdictWording.headline,
      priceSuffix: verdictWording.headlineSuffix,
      details: [
        { label: wording.startLabel, value: dateValues.startDate ?? '' },
        {
          label: wording.rolloutLabel,
          value: fill(isRolloutFinished ? wording.rolloutFinishedTemplate : wording.rolloutOngoingValue),
        },
        {
          label: wording.reliableFromLabel,
          value: fill(isRolloutFinished ? wording.reliableFromTemplate : wording.reliableFromOngoingValue),
        },
        { label: wording.nextStepLabel, value: verdictWording.nextStepValue },
      ],
      footnote: fill(wording.cardFootnote),
      footnoteLink: { label: wording.cardFootnoteLinkLabel, href: wording.cardFootnoteLinkHref },
    },
    adviceTitle: wording.adviceTitle,
    advicePoints: adviceKeysOf(answers, verdict).map((key: DibodevGoogleUpdateQuizAdviceKey): string =>
      fill(wording.advice[key]),
    ),
    disclaimer: wording.disclaimer,
    ctaLabel: verdictWording.ctaLabel,
    leadFormTitle: wording.leadFormTitle,
    leadFormIntro: wording.leadFormIntro,
    leadBudget: verdictWording.leadBudget,
  }
}

/**
 * Builds the test without Search Console in one language, with the dates of the newest update written in.
 * @param {DibodevGoogleUpdateQuizWording} wording - Texts of the test.
 * @param {SupportedLocale} locale - The language, for the dates in words.
 * @returns {DibodevQuizDefinition} The test.
 */
function buildGoogleUpdateQuiz(
  wording: DibodevGoogleUpdateQuizWording,
  locale: SupportedLocale,
): DibodevQuizDefinition {
  const endDate: string | null = LATEST_GOOGLE_SEARCH_UPDATE.endDate
  const dateValues: Record<string, string> = {
    name: LATEST_GOOGLE_SEARCH_UPDATE.name,
    startDate: GoogleUpdateImpactUtils.formatDate(LATEST_GOOGLE_SEARCH_UPDATE.startDate, locale),
    endDate: endDate ? GoogleUpdateImpactUtils.formatDate(endDate, locale) : '',
    waitUntil: endDate
      ? GoogleUpdateImpactUtils.formatDate(
          GoogleUpdateImpactUtils.addDays(endDate, GOOGLE_UPDATE_DAYS_TO_WAIT_AFTER_END),
          locale,
        )
      : '',
    readAt: GoogleUpdateImpactUtils.formatDate(GOOGLE_SEARCH_UPDATES_READ_AT, locale),
  }
  const fill: (template: string) => string = (template: string): string =>
    QuizTextUtils.fillTemplate(template, dateValues)
  const questions: DibodevQuizQuestion[] = wording.questions.map(
    (question: DibodevQuizQuestion): DibodevQuizQuestion => ({
      ...question,
      title: fill(question.title),
      helpText: fill(question.helpText),
      options: question.options.map(
        (option: DibodevQuizOption): DibodevQuizOption => ({
          ...option,
          label: fill(option.label),
        }),
      ),
    }),
  )
  const filledWording: DibodevGoogleUpdateQuizWording = {
    ...wording,
    timingWords: Object.fromEntries(
      Object.entries(wording.timingWords).map(([key, word]: [string, string]): [string, string] => [key, fill(word)]),
    ),
  }

  return {
    id: GOOGLE_UPDATE_IMPACT_QUIZ_ID,
    name: wording.quizName,
    contactProjectType: CONTACT_PROJECT_TYPE,
    progressTravellerIcon: PROGRESS_TRAVELLER_ICON,
    questions,
    computeResult: (answers: DibodevQuizAnswers): DibodevQuizResult =>
      computeGoogleUpdateQuizResult(answers, filledWording, dateValues),
  }
}

export const GOOGLE_UPDATE_QUIZZES: Record<SupportedLocale, DibodevQuizDefinition> = {
  fr: buildGoogleUpdateQuiz(GOOGLE_UPDATE_QUIZ_WORDING_FR, 'fr'),
  en: buildGoogleUpdateQuiz(GOOGLE_UPDATE_QUIZ_WORDING_EN, 'en'),
  es: buildGoogleUpdateQuiz(GOOGLE_UPDATE_QUIZ_WORDING_ES, 'es'),
}
