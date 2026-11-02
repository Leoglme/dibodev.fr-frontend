import type { DibodevEmailDeliverabilityVerdict } from '~/core/types/DibodevEmailDeliverabilityCheck'
import type {
  DibodevPhpVulnerabilityPlatformKey,
  DibodevPhpVulnerabilityVerdict,
} from '~/core/types/DibodevPhpVulnerabilityCheck'
import type { DibodevWordPressHackVerdict } from '~/core/types/DibodevWordPressHackCheck'

/** Mirror of `server/types/tools/websiteHealthCheck.ts` (result of GET /api/tools/website-health-check). */

export type DibodevWebsiteHealthCheckKey =
  | 'https'
  | 'php'
  | 'wordpress'
  | 'email'
  | 'mobile'
  | 'seoTags'
  | 'legalNotice'
  | 'aging'

export type DibodevWebsiteHealthVerdict = 'ok' | 'warning' | 'critical' | 'unknown'

export type DibodevWebsiteHealthOverallVerdict = 'healthy' | 'needsAttention' | 'atRisk'

export type DibodevWebsiteHealthDetailKey =
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

export type DibodevWebsiteHealthCheckItem = {
  key: DibodevWebsiteHealthCheckKey
  verdict: DibodevWebsiteHealthVerdict
  detailKey: DibodevWebsiteHealthDetailKey
  values: Record<string, string>
}

export type DibodevWebsiteHealthCheckResult = {
  host: string
  finalUrl: string
  overall: DibodevWebsiteHealthOverallVerdict
  checks: DibodevWebsiteHealthCheckItem[]
  platforms: DibodevPhpVulnerabilityPlatformKey[]
  isWordPress: boolean
  phpVerdict: DibodevPhpVulnerabilityVerdict | null
  wordpressVerdict: DibodevWordPressHackVerdict | null
  emailVerdict: DibodevEmailDeliverabilityVerdict | null
  checkedAt: string
}

/** The detailed tools linked under a check that is not fine: the PHP, WordPress and e-mail checkers. */
export type DibodevWebsiteHealthDetailedToolKey = 'php' | 'wordpress' | 'email'
