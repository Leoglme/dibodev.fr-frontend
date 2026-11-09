import type { PhpVulnerabilityPlatformKey } from '~~/server/types/tools/phpVulnerabilityCheck'
import type { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'

export type JoomlaVersionVerdict =
  | 'joomla6Latest'
  | 'joomla6Outdated'
  | 'joomla5'
  | 'joomla4'
  | 'joomla3OrOlder'
  | 'versionHidden'
  | 'notJoomla'
  | 'unknown'

export type JoomlaTemplateKind = 'core' | 'framework' | 'custom'

export type JoomlaTemplateFramework = 'helixUltimate' | 'yoothemePro'

/** `name` is the folder of the template, read in the paths of the page. */
export type JoomlaTemplateResult = {
  name: string
  kind: JoomlaTemplateKind
  framework: JoomlaTemplateFramework | null
}

/** `label` is our own name of a known extension, null for one we do not know (then only `element` is shown). */
export type JoomlaExtensionSeen = {
  element: string
  label: string | null
}

export type JoomlaVersionSignalKey =
  | 'versionFromCoreFile'
  | 'joomla3Files'
  | 'joomla4PlusFiles'
  | 'behindLatestOfBranch'
  | 'extendedSupportBuild'
  | 'phpTooOldForJoomla6'
  | 'phpReadyForJoomla6'
  | 'phpHidden'
  | 'cassiopeiaTemplate'
  | 'cassiopeiaChildTemplate'
  | 'joomla3CoreTemplate'
  | 'frameworkTemplate'
  | 'customTemplate'
  | 'joomla3CustomTemplate'
  | 'extensionsSeen'

export type JoomlaVersionCheckResult = {
  host: string
  finalUrl: string
  verdict: JoomlaVersionVerdict
  isJoomla: boolean
  version: string | null
  majorVersion: number | null
  isExtendedSupportBuild: boolean
  latestVersionOfBranch: string | null
  latestVersion: string
  phpVersion: string | null
  template: JoomlaTemplateResult | null
  extensions: JoomlaExtensionSeen[]
  platforms: PhpVulnerabilityPlatformKey[]
  signals: JoomlaVersionSignalKey[]
  checkedAt: string
}

/** An extension path found in the page, with its position so the list keeps the order of the page. */
export type JoomlaExtensionPathFound = {
  index: number
  element: string
  name: string
  label: string | null
}

export type JoomlaVersionCheckQuery = {
  site?: string
}

export type JoomlaVersionCacheEntry = {
  result: JoomlaVersionCheckResult
  expiresAt: number
}

export type JoomlaProbeOutcome = {
  status: number
  body: string
  poweredBy: string
}

export type JoomlaFetchedPage = Awaited<ReturnType<typeof PhpVulnerabilityCheckService.fetchHomePage>>

/** `suffix` is the label after the dash (`elts` in `3.10.20-elts`). */
export type JoomlaVersionParts = {
  major: number
  minor: number
  patch: number
  suffix: string | null
}

/** `patch` is null when the header only names the branch (`PHP/8.4`). */
export type JoomlaPhpVersion = {
  major: number
  minor: number
  patch: number | null
}

/** What a Joomla check found, from which the lines of the result are written; `versionParts` is null when every version file is blocked. */
export type JoomlaVersionClues = {
  verdict: JoomlaVersionVerdict
  versionParts: JoomlaVersionParts | null
  hasJoomla3Files: boolean
  hasJoomla4PlusFiles: boolean
  latestVersionOfBranch: string | null
  phpVersion: JoomlaPhpVersion | null
  template: JoomlaTemplateResult | null
  extensions: JoomlaExtensionSeen[]
}
