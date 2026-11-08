import type { WebsiteHealthVerdict } from '~~/server/types/tools/websiteHealthCheck'

/** Trackers recognised in the home page markup, in the order the result card lists them. */
export type GdprTrackerKey =
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

export type GdprTrackerConcern = 'consentRequired' | 'toCheck'

export type GdprTrackerLoading = 'loadedDirectly' | 'loadedOnClick' | 'waitingForConsent' | 'googleConsentModeDenied'

export type GdprCookieCheckVerdict = 'compliantLikely' | 'needsCheck' | 'atRisk' | 'unknown'

export type GdprConsentToolKey =
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

export type GdprConsentToolStatus = 'found' | 'notFound' | 'notNeeded'

export type GdprLinkKey = 'legalNotice' | 'privacyPolicy' | 'cookieSettings'

export type GdprLinkStatus = 'found' | 'missing' | 'providedByConsentTool' | 'notNeeded' | 'notReadable'

/** The sentence shown under a link line; each key has a text in the page language. */
export type GdprLinkDetailKey =
  | 'legalNoticeFound'
  | 'legalNoticeMissing'
  | 'privacyPolicyFound'
  | 'privacyPolicyMissing'
  | 'cookieSettingsFound'
  | 'cookieSettingsMissing'
  | 'cookieSettingsByConsentTool'
  | 'cookieSettingsNotNeeded'
  | 'linkNotReadable'

export type GdprTrackerFinding = {
  key: GdprTrackerKey
  loading: GdprTrackerLoading
  level: WebsiteHealthVerdict
}

export type GdprConsentToolFinding = {
  status: GdprConsentToolStatus
  level: WebsiteHealthVerdict
  tools: GdprConsentToolKey[]
  hasAutoBlocking: boolean
}

export type GdprLinkFinding = {
  key: GdprLinkKey
  status: GdprLinkStatus
  level: WebsiteHealthVerdict
  detailKey: GdprLinkDetailKey
}

/** Mirrored in `app/core/types/DibodevGdprCookieCheck.ts`: keep both in step. */
export type GdprCookieCheckResult = {
  host: string
  finalUrl: string
  verdict: GdprCookieCheckVerdict
  trackers: GdprTrackerFinding[]
  consentTool: GdprConsentToolFinding
  links: GdprLinkFinding[]
  isPageReadable: boolean
  checkedAt: string
}

export type GdprCookieCheckQuery = {
  site?: string
}

export type GdprCookieCacheEntry = {
  result: GdprCookieCheckResult
  expiresAt: number
}

/** A `<script>` element of the page: its raw attributes, its `type`, and its code (inline, or decoded from a `data:` address). */
export type GdprScriptElement = {
  attributes: string
  type: string
  code: string
}

export type GdprLinkElement = {
  attributes: string
  text: string
}

export type GdprGoogleConsentDefaults = {
  isAnalyticsDenied: boolean
  isAdsDenied: boolean
}

export type GdprTrackerSignature = {
  key: GdprTrackerKey
  concern: GdprTrackerConcern
  patterns: RegExp[]
}

export type GdprConsentToolSignature = {
  key: GdprConsentToolKey
  patterns: RegExp[]
}
