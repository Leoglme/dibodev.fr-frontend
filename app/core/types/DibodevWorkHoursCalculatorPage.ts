import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevSectionHeadingContent } from '~/core/types/DibodevSectionHeading'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'
import type { DibodevWorkHoursDayKey, DibodevWorkHoursSummaryWording } from '~/core/types/DibodevWorkHours'

/** Texts of the calculator in one language; templates use `{hours}` and `{minutes}` (duration), `{decimal}`, `{reference}` and `{days}`. */
export type DibodevWorkHoursCalculatorWording = {
  dayLabels: Record<DibodevWorkHoursDayKey, string>
  dayColumnLabel: string
  arrivalLabel: string
  departureLabel: string
  breakLabel: string
  dayTotalLabel: string
  nextDayTag: string
  breakTooLongTag: string
  referenceLabel: string
  referenceHint: string
  hourlyRateLabel: string
  hourlyRateHint: string
  copyMondayButton: string
  clearButton: string
  copySummaryButton: string
  copiedStatus: string
  copyFailedStatus: string
  durationTemplate: string
  resultLabel: string
  emptyResultText: string
  decimalTemplate: string
  regularLabel: string
  beyondReferenceTemplate: string
  firstTierLabel: string
  nextTierLabel: string
  payTitle: string
  payRegularLabel: string
  payFirstTierLabel: string
  payNextTierLabel: string
  payTotalLabel: string
  payNote: string
  payUnavailableNote: string
  alertsTitle: string
  dailyMaximumAlertTemplate: string
  shortBreakAlertTemplate: string
  weeklyMaximumAlert: string
  listConjunction: string
  privacyNote: string
  summary: DibodevWorkHoursSummaryWording
}

export type DibodevWorkHoursTemplateLink = {
  routeName: string
  title: string
  description: string
  linkLabel: string
}

/** Content of the work hours calculator page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevWorkHoursCalculatorPageContent = {
  meta: {
    title: string
    description: string
    inLanguage: string
    schemaAbout: string
  }
  breadcrumbLabel: string
  numberLocale: string
  shareImage: {
    titleLines: string[]
    highlight: string
    subtitle: string
    badge: string
    alt: string
  }
  hero: {
    titleBefore: string
    titleHighlight: string
    titleAfter: string
    reassurances: string[]
    aboutTitle: string
    description: string
    authorIntro: string
    authorBio: string
  }
  calculator: DibodevWorkHoursCalculatorWording
  summary: {
    eyebrow: string
    text: string
    dateLabel: string
  }
  howToCount: DibodevSectionHeadingContent & {
    steps: DibodevMethodStep[]
  }
  rules: DibodevSectionHeadingContent & {
    anchorId: string
    facts: DibodevSourcedFact[]
    calloutEmphasizedIntro: string
    calloutText: string
  }
  faq: {
    eyebrow: string
    title: string
    questions: DibodevFaqQuestion[]
  }
  templates: DibodevSectionHeadingContent & {
    links: DibodevWorkHoursTemplateLink[]
  }
  contactCta: {
    title: string
    description: string
    button: string
  }
}
