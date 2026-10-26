import type { PhpVulnerabilityPlatformKey } from '~~/server/types/tools/phpVulnerabilityCheck'
import type { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'

export type WordPressHackVerdict =
  | 'suspiciousSignals'
  | 'vulnerablePlugin'
  | 'outdatedCore'
  | 'cleanSurface'
  | 'notWordPress'
  | 'unknown'

export type WordPressHackSignalKey =
  | 'generatorMeta'
  | 'assetVersion'
  | 'feedVersion'
  | 'usersExposed'
  | 'pluginsSeen'
  | 'externalScripts'
  | 'hiddenLinks'
  | 'redirectScript'
  | 'obfuscatedScript'
  | 'spamKeywords'
  | 'phpInUploads'
  | 'knownBackdoorPlugin'
  | 'criticalError'
  | 'coreOutdated'
  | 'cloudflare'

export type WordPressPluginStatus = 'vulnerable' | 'fixed' | 'unknownVersion'

export type WordPressPluginResult = {
  slug: string
  name: string
  versionFound: string | null
  fixedVersion: string
  advisoryUrl: string
  advisoryDate: string
  status: WordPressPluginStatus
}

export type WordPressPluginCheck = {
  slug: string
  name: string
  fixedVersionPerMajorLine: string[]
  advisoryUrl: string
  advisoryDate: string
  isCheckedOnEverySite: boolean
}

export type WordPressHackCheckResult = {
  host: string
  finalUrl: string
  verdict: WordPressHackVerdict
  isWordPress: boolean
  coreVersion: string | null
  latestCoreVersion: string
  platforms: PhpVulnerabilityPlatformKey[]
  plugins: WordPressPluginResult[]
  pluginsSeen: string[]
  externalScriptDomains: string[]
  usernamesExposed: number
  signals: WordPressHackSignalKey[]
  checkedAt: string
}

export type WordPressHackCheckQuery = {
  site?: string
}

export type WordPressHackCacheEntry = {
  result: WordPressHackCheckResult
  expiresAt: number
}

export type WordPressProbeOutcome = {
  ok: boolean
  status: number
  body: string
}

export type WordPressFetchedPage = Awaited<ReturnType<typeof PhpVulnerabilityCheckService.fetchHomePage>>
