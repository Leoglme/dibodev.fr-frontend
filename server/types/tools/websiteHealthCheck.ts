import type { EmailDeliverabilityVerdict } from '~~/server/types/tools/emailDeliverabilityCheck'
import type { PhpVulnerabilityPlatformKey, PhpVulnerabilityVerdict } from '~~/server/types/tools/phpVulnerabilityCheck'
import type { WordPressHackVerdict } from '~~/server/types/tools/wordpressHackCheck'

/** The eight points read on a site, in the order the result card lists them. */
export type WebsiteHealthCheckKey =
  | 'https'
  | 'php'
  | 'wordpress'
  | 'email'
  | 'mobile'
  | 'seoTags'
  | 'legalNotice'
  | 'aging'

export type WebsiteHealthVerdict = 'ok' | 'warning' | 'critical' | 'unknown'

/** Worst verdict of the eight checks: a critical one puts the site at risk, a warning one asks for attention. */
export type WebsiteHealthOverallVerdict = 'healthy' | 'needsAttention' | 'atRisk'

/** The sentence shown under a check; each key has a text in the page language, filled with `values`. */
export type WebsiteHealthDetailKey =
  | 'httpsRedirects'
  | 'httpsNoRedirect'
  | 'httpsNoHttpAnswer'
  | 'httpOnly'
  | 'phpUnpatched'
  | 'phpEndOfLife'
  | 'phpPatched'
  | 'phpHidden'
  | 'phpNotPhp'
  | 'phpUnknown'
  | 'wordpressClean'
  | 'wordpressOutdatedCore'
  | 'wordpressVulnerablePlugin'
  | 'wordpressClosedPlugin'
  | 'wordpressSuspicious'
  | 'wordpressNotWordPress'
  | 'wordpressUnknown'
  | 'emailAllGood'
  | 'emailDmarcMissing'
  | 'emailDmarcNone'
  | 'emailDkimNotFound'
  | 'emailSpfMissing'
  | 'emailSpfTooPermissive'
  | 'emailSpfTooManyLookups'
  | 'emailMultipleSpf'
  | 'emailNoMailSetup'
  | 'emailUnknown'
  | 'viewportPresent'
  | 'viewportMissing'
  | 'seoTagsGood'
  | 'titleMissing'
  | 'titleTooShort'
  | 'titleTooLong'
  | 'descriptionMissing'
  | 'descriptionTooShort'
  | 'descriptionTooLong'
  | 'legalNoticeLinkFound'
  | 'legalNoticeLinkMissing'
  | 'agingNone'
  | 'agingOldCopyright'
  | 'agingOldJquery'
  | 'agingFlash'
  | 'agingOldGenerator'

/** One of the eight checks: its verdict, the sentence to show and the figures it quotes (never the page content itself). */
export type WebsiteHealthCheckItem = {
  key: WebsiteHealthCheckKey
  verdict: WebsiteHealthVerdict
  detailKey: WebsiteHealthDetailKey
  values: Record<string, string>
}

/** Mirrored in `app/core/types/DibodevWebsiteHealthCheck.ts`: keep both in step. */
export type WebsiteHealthCheckResult = {
  host: string
  finalUrl: string
  overall: WebsiteHealthOverallVerdict
  checks: WebsiteHealthCheckItem[]
  platforms: PhpVulnerabilityPlatformKey[]
  isWordPress: boolean
  phpVerdict: PhpVulnerabilityVerdict | null
  wordpressVerdict: WordPressHackVerdict | null
  emailVerdict: EmailDeliverabilityVerdict | null
  checkedAt: string
}

export type WebsiteHealthCheckQuery = {
  site?: string
}

export type WebsiteHealthCacheEntry = {
  result: WebsiteHealthCheckResult
  expiresAt: number
}

/** What the plain HTTP address answered: a redirection to HTTPS, a page, or nothing. */
export type WebsiteHttpProbeOutcome = 'redirectsToHttps' | 'servesPage' | 'noAnswer'

/** What the home page markup says, read once for the mobile, tags, legal notice and aging checks. */
export type WebsiteHomePageFacts = {
  hasViewport: boolean
  titleLength: number | null
  descriptionLength: number | null
  hasLegalNoticeLink: boolean
  latestCopyrightYear: number | null
  oldJqueryVersion: string | null
  hasFlash: boolean
  oldGenerator: string | null
}
