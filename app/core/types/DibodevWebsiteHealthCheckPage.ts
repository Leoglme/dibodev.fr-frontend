import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'
import type {
  DibodevWebsiteHealthCheckKey,
  DibodevWebsiteHealthDetailedToolKey,
  DibodevWebsiteHealthDetailKey,
  DibodevWebsiteHealthOverallVerdict,
  DibodevWebsiteHealthVerdict,
} from '~/core/types/DibodevWebsiteHealthCheck'

export type DibodevWebsiteHealthSectionHeading = {
  eyebrow: string
  title: string
  intro: string
}

/**
 * Texts of the checker in one language. Templates use `{host}` and the values of each check (`{phpVersion}`,
 * `{fixedVersion}`, `{coreVersion}`, `{latestCoreVersion}`, `{plugin}`, `{domain}`, `{provider}`, `{titleLength}`,
 * `{descriptionLength}`, `{year}`, `{jqueryVersion}`, `{generator}`).
 */
export type DibodevWebsiteHealthCheckerWording = {
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
  overallTitles: Record<DibodevWebsiteHealthOverallVerdict, string>
  overallTexts: Record<DibodevWebsiteHealthOverallVerdict, string>
  checksTitle: string
  checkLabels: Record<DibodevWebsiteHealthCheckKey, string>
  verdictLabels: Record<DibodevWebsiteHealthVerdict, string>
  detailTexts: Record<DibodevWebsiteHealthDetailKey, string>
  adviceLabel: string
  adviceTexts: Partial<Record<DibodevWebsiteHealthDetailKey, string>>
  detailedToolLabels: Record<DibodevWebsiteHealthDetailedToolKey, string>
  disclaimer: string
  idleCtaIntro: string
  idleCtaLabel: string
  ctaIntro: string
  ctaLabels: Record<DibodevWebsiteHealthOverallVerdict, string>
  gdprCookieCheckLinkLabel: string
}

/** Content of the website health check page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevWebsiteHealthCheckPageContent = {
  meta: {
    title: string
    description: string
    inLanguage: string
    schemaAbout: string
  }
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
  checker: DibodevWebsiteHealthCheckerWording
  checks: DibodevWebsiteHealthSectionHeading & {
    anchorId: string
    items: DibodevGuarantee[]
  }
  priceTeaser: {
    emphasizedIntro: string
    text: string
    linkLabel: string
  }
  method: DibodevWebsiteHealthSectionHeading & {
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
