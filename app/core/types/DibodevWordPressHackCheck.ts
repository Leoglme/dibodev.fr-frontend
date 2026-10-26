import type { DibodevPhpVulnerabilityPlatformKey } from '~/core/types/DibodevPhpVulnerabilityCheck'

/** Mirror of `server/types/tools/wordpressHackCheck.ts` (result of GET /api/tools/wordpress-hack-check). */

export type DibodevWordPressHackVerdict =
  | 'suspiciousSignals'
  | 'vulnerablePlugin'
  | 'outdatedCore'
  | 'cleanSurface'
  | 'notWordPress'
  | 'unknown'

export type DibodevWordPressHackSignalKey =
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

export type DibodevWordPressPluginStatus = 'vulnerable' | 'fixed' | 'unknownVersion'

export type DibodevWordPressPluginResult = {
  slug: string
  name: string
  versionFound: string | null
  fixedVersion: string
  advisoryUrl: string
  advisoryDate: string
  status: DibodevWordPressPluginStatus
}

export type DibodevWordPressHackCheckResult = {
  host: string
  finalUrl: string
  verdict: DibodevWordPressHackVerdict
  isWordPress: boolean
  coreVersion: string | null
  latestCoreVersion: string
  platforms: DibodevPhpVulnerabilityPlatformKey[]
  plugins: DibodevWordPressPluginResult[]
  pluginsSeen: string[]
  externalScriptDomains: string[]
  usernamesExposed: number
  signals: DibodevWordPressHackSignalKey[]
  checkedAt: string
}

export type DibodevWordPressHackGuideKey = 'checks' | 'updraftplus' | 'restore'

export type DibodevWordPressHackSourceKey =
  | 'teamUpdraftIncident'
  | 'patchstackUpdraftCentral'
  | 'nethembaAnalysis'
  | 'bleepingComputerUpdraftCentral'
  | 'itConnect'
  | 'cnil'
