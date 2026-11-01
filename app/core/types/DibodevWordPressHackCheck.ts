import type { DibodevPhpVulnerabilityPlatformKey } from '~/core/types/DibodevPhpVulnerabilityCheck'

/** Mirror of `server/types/tools/wordpressHackCheck.ts` (result of GET /api/tools/wordpress-hack-check). */

export type DibodevWordPressHackVerdict =
  | 'suspiciousSignals'
  | 'vulnerablePlugin'
  | 'closedPlugin'
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
  | 'injectedContent'
  | 'closedPlugin'

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

export type DibodevWordPressClosedPlugin = {
  slug: string
  name: string
  closedDate: string
}

export type DibodevWordPressInjectedContentReason = 'spamLinks' | 'foreignLanguage' | 'backdated' | 'emptyShortPost'

export type DibodevWordPressPublicEntryKind = 'page' | 'post'

export type DibodevWordPressInjectedContentItem = {
  kind: DibodevWordPressPublicEntryKind
  title: string
  path: string
  reasons: DibodevWordPressInjectedContentReason[]
  spamDomains: string[]
  language: string | null
  displayedDate: string
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
  closedPlugins: DibodevWordPressClosedPlugin[]
  injectedContent: DibodevWordPressInjectedContentItem[]
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
