import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type {
  DibodevGdprConsentToolStatus,
  DibodevGdprCookieCheckVerdict,
  DibodevGdprLinkDetailKey,
  DibodevGdprLinkKey,
  DibodevGdprLinkStatus,
  DibodevGdprTrackerKey,
  DibodevGdprTrackerLoading,
} from '~/core/types/DibodevGdprCookieCheck'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevNumberedGuideItem } from '~/core/types/DibodevNumberedGuideSection'
import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'

export type DibodevGdprCookieSectionHeading = {
  eyebrow: string
  title: string
  intro: string
}

export type DibodevGdprNoTrackerWording = {
  label: string
  badge: string
  seenText: string
  meaningText: string
}

/** Texts of the checker in one language: the card title and the errors use `{host}`, the consent tool line `{tools}`. */
export type DibodevGdprCookieCheckerWording = {
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
  verdictTitles: Record<DibodevGdprCookieCheckVerdict, string>
  verdictTexts: Record<DibodevGdprCookieCheckVerdict, string>
  trackersTitle: string
  noTracker: DibodevGdprNoTrackerWording
  trackerLabels: Record<DibodevGdprTrackerKey, string>
  trackerMeaningTexts: Record<DibodevGdprTrackerKey, string>
  trackerAdviceTexts: Record<DibodevGdprTrackerKey, string>
  loadingLabels: Record<DibodevGdprTrackerLoading, string>
  loadingSeenTexts: Record<DibodevGdprTrackerLoading, string>
  loadingAdviceTexts: Partial<Record<DibodevGdprTrackerLoading, string>>
  consentToolTitle: string
  consentToolLabel: string
  consentToolStatusLabels: Record<DibodevGdprConsentToolStatus, string>
  consentToolSeenTexts: Record<DibodevGdprConsentToolStatus, string>
  consentToolAutoBlockingText: string
  consentToolMeaningTexts: Record<DibodevGdprConsentToolStatus, string>
  consentToolAdviceTexts: Record<DibodevGdprConsentToolStatus, string>
  linksTitle: string
  linkLabels: Record<DibodevGdprLinkKey, string>
  linkStatusLabels: Record<DibodevGdprLinkStatus, string>
  linkDetailTexts: Record<DibodevGdprLinkDetailKey, string>
  linkMeaningTexts: Record<DibodevGdprLinkKey, string>
  linkAdviceTexts: Partial<Record<DibodevGdprLinkDetailKey, string>>
  meaningLabel: string
  adviceLabel: string
  disclaimer: string
  idleCtaIntro: string
  idleCtaLabel: string
  ctaIntro: string
  ctaLabels: Record<DibodevGdprCookieCheckVerdict, string>
}

/** Content of the GDPR cookie check page in one language, kept out of the i18n files because only this page loads it. */
export type DibodevGdprCookieCheckPageContent = {
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
  checker: DibodevGdprCookieCheckerWording
  checks: DibodevGdprCookieSectionHeading & {
    anchorId: string
    items: DibodevGuarantee[]
  }
  rules: DibodevGdprCookieSectionHeading & {
    anchorId: string
    facts: DibodevSourcedFact[]
    calloutEmphasizedIntro: string
    calloutText: string
  }
  remediation: DibodevGdprCookieSectionHeading & {
    anchorId: string
    pitfallLabel: string
    items: DibodevNumberedGuideItem[]
  }
  faq: {
    eyebrow: string
    title: string
    questions: DibodevFaqQuestion[]
  }
  contactCta: {
    title: string
    description: string
    button: string
    healthCheckLabel: string
  }
}
