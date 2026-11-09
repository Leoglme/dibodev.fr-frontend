import type { DibodevPhpVulnerabilityPlatformKey } from '~/core/types/DibodevPhpVulnerabilityCheck'

/** Mirror of `server/types/tools/joomlaVersionCheck.ts` (result of GET /api/tools/joomla-version-check). */

export type DibodevJoomlaVersionVerdict =
  | 'joomla6Latest'
  | 'joomla6Outdated'
  | 'joomla5'
  | 'joomla4'
  | 'joomla3OrOlder'
  | 'versionHidden'
  | 'notJoomla'
  | 'unknown'

export type DibodevJoomlaTemplateKind = 'core' | 'framework' | 'custom'

export type DibodevJoomlaTemplateFramework = 'helixUltimate' | 'yoothemePro'

export type DibodevJoomlaTemplateResult = {
  name: string
  kind: DibodevJoomlaTemplateKind
  framework: DibodevJoomlaTemplateFramework | null
}

export type DibodevJoomlaExtensionSeen = {
  element: string
  label: string | null
}

export type DibodevJoomlaVersionSignalKey =
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

export type DibodevJoomlaVersionCheckResult = {
  host: string
  finalUrl: string
  verdict: DibodevJoomlaVersionVerdict
  isJoomla: boolean
  version: string | null
  majorVersion: number | null
  isExtendedSupportBuild: boolean
  latestVersionOfBranch: string | null
  latestVersion: string
  phpVersion: string | null
  template: DibodevJoomlaTemplateResult | null
  extensions: DibodevJoomlaExtensionSeen[]
  platforms: DibodevPhpVulnerabilityPlatformKey[]
  signals: DibodevJoomlaVersionSignalKey[]
  checkedAt: string
}

export type DibodevJoomlaVersionSourceKey =
  | 'joomlaRoadmap'
  | 'joomla62Release'
  | 'joomla60Release'
  | 'joomla4EndOfSupport'
  | 'joomla3ExtendedSupport'
  | 'joomla6Requirements'
  | 'joomla5To6Guide'
  | 'phpSupportedVersions'

export type DibodevJoomlaVersionGuideKey = 'joomla6Upgrade' | 'php82EndOfLife'
