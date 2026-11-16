import type {
  DibodevAiBotFetchStatus,
  DibodevAiContentStatus,
  DibodevAiCrawlerKey,
  DibodevAiCrawlerRole,
  DibodevAiDirectiveSource,
  DibodevAiLlmsTxtStatus,
  DibodevAiReadabilityVerdict,
  DibodevAiRobotsTxtStatus,
} from '~/core/types/DibodevAiReadabilityCheck'
import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevNumberedGuideItem } from '~/core/types/DibodevNumberedGuideSection'
import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'

export type DibodevAiReadabilitySectionHeading = {
  eyebrow: string
  title: string
  intro: string
}

/** Texts of a line of the card whose status decides the badge, the sentence seen, the meaning and the advice. */
export type DibodevAiReadabilityPointWording<TStatus extends string> = {
  label: string
  statusLabels: Record<TStatus, string>
  seenTexts: Record<TStatus, string>
  meaningTexts: Record<TStatus, string>
  adviceTexts: Partial<Record<TStatus, string>>
}

export type DibodevAiTitleStatus = 'complete' | 'titleOnly' | 'descriptionOnly' | 'missing' | 'notReadable'

export type DibodevAiStructuredDataStatus = 'knownTypes' | 'otherTypes' | 'missing' | 'notReadable'

export type DibodevAiSitemapStatus = 'declared' | 'notDeclared'

export type DibodevAiDirectivesStatus = 'none' | 'restrictive' | 'noindex'

/** Texts of the checker in one language. Placeholders: `{host}` in the card title and the errors, `{robot}`, `{operator}` and `{role}` in the robot lines, `{robots}`, `{count}` and `{total}` in the allowed robots line, `{status}` in the robot reading, `{words}` and `{framework}` in the text line, `{directives}` and `{sources}` in the interdictions, `{types}` in the structured data, `{count}` in the sitemap. */
export type DibodevAiReadabilityCheckerWording = {
  siteLabel: string
  sitePlaceholder: string
  siteHint: string
  submit: string
  checking: string
  resultLabel: string
  idleTitle: string
  idleText: string
  loadingTitle: string
  loadingText: string
  errorTitles: Record<DibodevSiteCheckErrorKind, string>
  errorTexts: Record<DibodevSiteCheckErrorKind, string>
  verdictTitles: Record<DibodevAiReadabilityVerdict, string>
  verdictTexts: Record<DibodevAiReadabilityVerdict, string>
  robotsTitle: string
  robotsFile: DibodevAiReadabilityPointWording<DibodevAiRobotsTxtStatus>
  crawlersAllowedLabel: string
  crawlersAllowedBadge: string
  crawlersAllowedSeenText: string
  crawlersAllowedMeaningText: string
  crawlerLabel: string
  crawlerRoleLabels: Record<DibodevAiCrawlerRole, string>
  crawlerBlockedLabel: string
  crawlerBlockedSpecificSeenText: string
  crawlerBlockedWildcardSeenText: string
  crawlerBlockedMeaningTexts: Record<DibodevAiCrawlerRole, string>
  crawlerBlockedAdviceTexts: Record<DibodevAiCrawlerRole, string>
  crawlerMayIgnoreRobotsTxtText: string
  botFetchTitle: string
  botFetch: DibodevAiReadabilityPointWording<DibodevAiBotFetchStatus>
  contentTitle: string
  content: DibodevAiReadabilityPointWording<DibodevAiContentStatus>
  contentFrameworkText: string
  directivesTitle: string
  directives: DibodevAiReadabilityPointWording<DibodevAiDirectivesStatus>
  directiveSourceLabels: Record<DibodevAiDirectiveSource, string>
  understandingTitle: string
  titleAndDescription: DibodevAiReadabilityPointWording<DibodevAiTitleStatus>
  structuredData: DibodevAiReadabilityPointWording<DibodevAiStructuredDataStatus>
  sitemap: DibodevAiReadabilityPointWording<DibodevAiSitemapStatus>
  llmsTxt: DibodevAiReadabilityPointWording<DibodevAiLlmsTxtStatus>
  listSeparator: string
  meaningLabel: string
  adviceLabel: string
  disclaimer: string
  idleCtaIntro: string
  idleCtaLabel: string
  ctaIntro: string
  ctaLabels: Record<DibodevAiReadabilityVerdict, string>
}

/** Content of the AI readability check page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevAiReadabilityCheckPageContent = {
  meta: {
    title: string
    description: string
    inLanguage: string
    schemaAbout: string
  }
  applicationName: string
  breadcrumbLabel: string
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
    description: string
    authorIntro: string
    authorBio: string
  }
  checker: DibodevAiReadabilityCheckerWording
  summary: {
    eyebrow: string
    dateLabel: string
    text: string
  }
  steps: DibodevAiReadabilitySectionHeading & {
    steps: DibodevMethodStep[]
  }
  crawlers: DibodevAiReadabilitySectionHeading & {
    anchorId: string
    nameColumnLabel: string
    detailColumnLabel: string
    linkColumnLabel: string
    roleLabels: Record<DibodevAiCrawlerRole, string>
    descriptions: Record<DibodevAiCrawlerKey, string>
    linkLabel: string
    calloutEmphasizedIntro: string
    calloutText: string
  }
  sources: DibodevAiReadabilitySectionHeading & {
    anchorId: string
    facts: DibodevSourcedFact[]
  }
  reasons: DibodevAiReadabilitySectionHeading & {
    anchorId: string
    items: DibodevGuarantee[]
  }
  remediation: DibodevAiReadabilitySectionHeading & {
    anchorId: string
    pitfallLabel: string
    items: DibodevNumberedGuideItem[]
  }
  experience: {
    eyebrow: string
    title: string
    emphasizedIntro: string
    text: string
  }
  method: DibodevAiReadabilitySectionHeading & {
    anchorId: string
    items: DibodevGuarantee[]
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
  nextTools: {
    eyebrow: string
    title: string
  }
  contactCta: {
    title: string
    description: string
    button: string
    healthCheckLabel: string
  }
  mobileContactBar: {
    text: string
    buttonLabel: string
  }
}
