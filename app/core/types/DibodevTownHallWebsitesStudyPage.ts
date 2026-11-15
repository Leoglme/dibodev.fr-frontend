import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevFeatureCard } from '~/core/types/DibodevFeatureCardsSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevPricedProduct } from '~/core/types/DibodevPriceListSection'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'

/** A department of the study: counts from the official directory and the read websites, whole percentages as printed in stats.md. */
export type DibodevTownHallWebsitesStudyDepartmentRow = {
  code: string
  name: string
  townHallCount: number
  withoutDeclaredWebsiteCount: number
  declaredWebsiteCount: number
  readWebsiteCount: number
  wordpressWebsiteCount: number
  wordpressSharePercent: number | null
  joomlaWebsiteCount: number
  joomlaSharePercent: number | null
  phpVisibleWebsiteCount: number
  phpWithoutSecurityFixesCount: number
  phpWithoutSecurityFixesSharePercent: number | null
}

/** The pages a town hall can open from the "what to do" section: two free checkers, then the two update pages. */
export type DibodevTownHallWebsitesStudyActionKey =
  | 'phpVersionCheck'
  | 'joomlaVersionCheck'
  | 'phpUpdate'
  | 'joomlaUpdate'

/** Texts of one step of the "what to do" section; its link target comes from `TOWN_HALL_WEBSITES_STUDY_ACTION_ROUTE_NAMES`. */
export type DibodevTownHallWebsitesStudyAction = {
  title: string
  description: string
  linkLabel: string
}

/** Heading of a section of the page. */
export type DibodevTownHallWebsitesStudySectionHeading = {
  eyebrow: string
  title: string
  intro: string
}

/** Content of the town hall websites study page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevTownHallWebsitesStudyPageContent = {
  meta: {
    title: string
    description: string
    datasetName: string
    datasetDescription: string
  }
  breadcrumbLabel: string
  numberLocale: string
  percentTemplate: string
  hero: {
    titlePart1: string
    titleHighlight: string
    titlePart2: string
    description: string
    cta: string
    ctaSecondary: string
    reassurances: string[]
    stats: DibodevStatItemProps[]
  }
  keyFigures: DibodevTownHallWebsitesStudySectionHeading & {
    indicatorColumnLabel: string
    basisColumnLabel: string
    resultColumnLabel: string
    items: DibodevPricedProduct[]
    calloutEmphasizedIntro: string
    calloutText: string
    calloutFootnote: string
  }
  departments: DibodevTownHallWebsitesStudySectionHeading & {
    departmentColumnLabel: string
    countsColumnLabel: string
    phpColumnLabel: string
    nameTemplate: string
    countsTemplate: string
    phpConditionTemplate: string
    noShareLabel: string
    csvEmphasizedIntro: string
    csvText: string
    csvLinkLabel: string
    csvFootnote: string
  }
  limits: DibodevTownHallWebsitesStudySectionHeading & {
    items: DibodevFeatureCard[]
  }
  actions: DibodevTownHallWebsitesStudySectionHeading & {
    items: Record<DibodevTownHallWebsitesStudyActionKey, DibodevTownHallWebsitesStudyAction>
  }
  sources: DibodevTownHallWebsitesStudySectionHeading & {
    facts: DibodevSourcedFact[]
    authorEmphasizedIntro: string
    authorText: string
    authorFootnote: string
  }
  method: DibodevTownHallWebsitesStudySectionHeading & {
    steps: DibodevMethodStep[]
  }
  faq: {
    eyebrow: string
    title: string
    questions: DibodevFaqQuestion[]
  }
  relatedArticles: {
    title: string
    intro: string
  }
  contactCta: {
    title: string
    description: string
    button: string
  }
}
