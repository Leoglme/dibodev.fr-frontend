import type { PhpVulnerabilityPlatformKey } from '~~/server/types/tools/phpVulnerabilityCheck'
import type { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'

export type WordPressHackVerdict =
  | 'suspiciousSignals'
  | 'vulnerablePlugin'
  | 'closedPlugin'
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
  | 'injectedContent'
  | 'closedPlugin'

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

export type WordPressClosedPlugin = {
  slug: string
  name: string
  closedDate: string
}

export type WordPressInjectedContentReason = 'spamLinks' | 'foreignLanguage' | 'backdated' | 'emptyShortPost'

export type WordPressPublicEntryKind = 'page' | 'post'

export type WordPressForeignScript = {
  language: string
  regex: RegExp
}

export type WordPressInjectedContentItem = {
  kind: WordPressPublicEntryKind
  title: string
  path: string
  reasons: WordPressInjectedContentReason[]
  spamDomains: string[]
  language: string | null
  displayedDate: string
}

/** Fields of a page or post in the REST answer, all optional until checked (`_fields` lists them). */
export type WordPressRestEntryFields = {
  id?: unknown
  date_gmt?: unknown
  link?: unknown
  title?: { rendered?: unknown }
  excerpt?: { rendered?: unknown }
  content?: { rendered?: unknown }
}

/** Fields of the WordPress.org extension API used to spot a closure, all optional until checked. */
export type WordPressPluginDirectoryAnswer = {
  closed?: unknown
  reason?: unknown
  name?: unknown
  closed_date?: unknown
}

export type WordPressPublicEntry = {
  id: number
  kind: WordPressPublicEntryKind
  publishedAt: number
  title: string
  path: string
  excerptText: string
  contentHtml: string | null
}

/** `completeFromId`: below this id, entries of this type exist that the list did not return. */
export type WordPressPublicEntryList = {
  entries: WordPressPublicEntry[]
  completeFromId: number
}

/** Closure of an extension on WordPress.org, cached a day; `closure` is null when the extension is open or unknown. */
export type WordPressClosureCacheEntry = {
  closure: WordPressClosedPlugin | null
  expiresAt: number
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
  closedPlugins: WordPressClosedPlugin[]
  injectedContent: WordPressInjectedContentItem[]
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
