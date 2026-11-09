import type {
  DibodevJoomlaTemplateFramework,
  DibodevJoomlaVersionGuideKey,
  DibodevJoomlaVersionSourceKey,
  DibodevJoomlaVersionVerdict,
} from '~/core/types/DibodevJoomlaVersionCheck'

/** Day the versions, dates and texts were last re-read: move it at each re-read. */
export const JOOMLA_VERSION_CHECK_PAGE_UPDATED_AT: string = '2026-11-09'

export const JOOMLA_VERSION_CHECK_API_PATH: string = '/api/tools/joomla-version-check'

export const JOOMLA_VERSION_CHECKER_ANCHOR_ID: string = 'verification'

export const JOOMLA_VERSION_CHECK_ROUTE_NAME: string = 'tools-joomla-version-check'

export const JOOMLA_VERSION_CONTACT_TOPIC: string = 'joomla-version'

export const JOOMLA_VERSION_VERDICTS: DibodevJoomlaVersionVerdict[] = [
  'joomla6Latest',
  'joomla6Outdated',
  'joomla5',
  'joomla4',
  'joomla3OrOlder',
  'versionHidden',
  'notJoomla',
  'unknown',
]

export const JOOMLA_VERSION_VERDICTS_WITH_GUIDES: DibodevJoomlaVersionVerdict[] = [
  'joomla5',
  'joomla4',
  'joomla3OrOlder',
  'versionHidden',
]

export const JOOMLA_VERSION_GUIDE_KEYS: DibodevJoomlaVersionGuideKey[] = ['joomla6Upgrade', 'php82EndOfLife']

export const JOOMLA_VERSION_GUIDE_SLUGS: Record<DibodevJoomlaVersionGuideKey, string> = {
  joomla6Upgrade: 'mettre-a-jour-site-joomla-vers-joomla-6',
  php82EndOfLife: 'php-82-fin-de-vie-31-decembre-2026-que-faire',
}

/** Articles listed at the bottom of the page; the untranslated or unpublished ones are left out automatically. */
export const JOOMLA_VERSION_CHECK_RELATED_ARTICLE_SLUGS: string[] = [
  JOOMLA_VERSION_GUIDE_SLUGS.joomla6Upgrade,
  JOOMLA_VERSION_GUIDE_SLUGS.php82EndOfLife,
  'hebergeur-arrete-anciennes-versions-php-que-faire',
  'faille-php-octobre-2026-site-boutique-logiciel-que-faire',
]

/** Names of the template frameworks recognised by the checker, the same in every language. */
export const JOOMLA_TEMPLATE_FRAMEWORK_LABELS: Record<DibodevJoomlaTemplateFramework, string> = {
  helixUltimate: 'Helix Ultimate',
  yoothemePro: 'YOOtheme Pro',
}

export const JOOMLA_VERSION_SOURCES: Record<DibodevJoomlaVersionSourceKey, string> = {
  joomlaRoadmap: 'https://developer.joomla.org/roadmap',
  joomla62Release: 'https://www.joomla.org/announcements/release-news/joomla-6-2-is-here.html',
  joomla60Release: 'https://www.joomla.org/announcements/release-news/5939-joomla-6-0-and-joomla-5-4-are-here.html',
  joomla4EndOfSupport: 'https://www.joomla.org/announcements/release-news/joomla-5-3-4-security-bugfix-release.html',
  joomla3ExtendedSupport: 'https://magazine.joomla.org/all-issues/july-2023/extended-security-support-for-joomla-3x',
  joomla6Requirements: 'https://manual.joomla.org/docs/get-started/technical-requirements',
  joomla5To6Guide: 'https://guide.joomla.org/user-manual/migration/joomla-5-to-6-planning-and-upgrade-step-by-step',
  phpSupportedVersions: 'https://www.php.net/supported-versions.php',
}
