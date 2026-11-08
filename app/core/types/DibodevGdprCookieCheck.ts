import type { DibodevWebsiteHealthVerdict } from '~/core/types/DibodevWebsiteHealthCheck'

/** Mirror of `server/types/tools/gdprCookieCheck.ts` (result of GET /api/tools/gdpr-cookie-check). */

export type DibodevGdprTrackerKey =
  | 'googleAnalytics'
  | 'googleAds'
  | 'googleTagManager'
  | 'metaPixel'
  | 'hotjar'
  | 'microsoftClarity'
  | 'linkedInInsight'
  | 'tiktokPixel'
  | 'pinterestTag'
  | 'matomo'
  | 'youtube'
  | 'youtubeNoCookie'
  | 'googleMaps'
  | 'recaptcha'

export type DibodevGdprTrackerLoading =
  | 'loadedDirectly'
  | 'loadedOnClick'
  | 'waitingForConsent'
  | 'googleConsentModeDenied'

export type DibodevGdprCookieCheckVerdict = 'compliantLikely' | 'needsCheck' | 'atRisk' | 'unknown'

export type DibodevGdprConsentToolKey =
  | 'axeptio'
  | 'didomi'
  | 'tarteaucitron'
  | 'cookiebot'
  | 'cookieyes'
  | 'complianz'
  | 'oneTrust'
  | 'iubenda'
  | 'usercentrics'
  | 'sirdata'
  | 'appConsent'
  | 'klaro'
  | 'cookieFirst'
  | 'termly'
  | 'borlabs'
  | 'realCookieBanner'
  | 'commandersAct'
  | 'consentManager'
  | 'quantcast'
  | 'cookieScript'
  | 'gdprCookieCompliance'
  | 'cookieNotice'
  | 'googleConsentMessages'
  | 'cookieConsentLibrary'

export type DibodevGdprConsentToolStatus = 'found' | 'notFound' | 'notNeeded'

export type DibodevGdprLinkKey = 'legalNotice' | 'privacyPolicy' | 'cookieSettings'

export type DibodevGdprLinkStatus = 'found' | 'missing' | 'providedByConsentTool' | 'notNeeded' | 'notReadable'

export type DibodevGdprLinkDetailKey =
  | 'legalNoticeFound'
  | 'legalNoticeMissing'
  | 'privacyPolicyFound'
  | 'privacyPolicyMissing'
  | 'cookieSettingsFound'
  | 'cookieSettingsMissing'
  | 'cookieSettingsByConsentTool'
  | 'cookieSettingsNotNeeded'
  | 'linkNotReadable'

export type DibodevGdprTrackerFinding = {
  key: DibodevGdprTrackerKey
  loading: DibodevGdprTrackerLoading
  level: DibodevWebsiteHealthVerdict
}

export type DibodevGdprConsentToolFinding = {
  status: DibodevGdprConsentToolStatus
  level: DibodevWebsiteHealthVerdict
  tools: DibodevGdprConsentToolKey[]
  hasAutoBlocking: boolean
}

export type DibodevGdprLinkFinding = {
  key: DibodevGdprLinkKey
  status: DibodevGdprLinkStatus
  level: DibodevWebsiteHealthVerdict
  detailKey: DibodevGdprLinkDetailKey
}

export type DibodevGdprCookieCheckResult = {
  host: string
  finalUrl: string
  verdict: DibodevGdprCookieCheckVerdict
  trackers: DibodevGdprTrackerFinding[]
  consentTool: DibodevGdprConsentToolFinding
  links: DibodevGdprLinkFinding[]
  isPageReadable: boolean
  checkedAt: string
}
