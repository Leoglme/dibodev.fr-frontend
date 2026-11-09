import type { DibodevPhpVulnerabilityPlatformKey } from '~/core/types/DibodevPhpVulnerabilityCheck'
import type { DibodevJoomlaVersionGuideKey } from '~/core/types/DibodevJoomlaVersionCheck'
import type { DibodevJoomlaVersionCheckerWording } from '~/core/types/DibodevJoomlaVersionCheckPage'

/**
 * Props of the Joomla version checker: the address field, the call to the API and the result card.
 * @type {DibodevJoomlaVersionCheckerProps}
 * @property {string} anchorId - Id of the block, for in-page links.
 * @property {DibodevJoomlaVersionCheckerWording} wording - Every text of the checker in the page language.
 * @property {Record<DibodevPhpVulnerabilityPlatformKey, string>} platformLabels - Display name of each platform.
 * @property {string} trackingLocation - `location` property of the PostHog events.
 */
export type DibodevJoomlaVersionCheckerProps = {
  anchorId: string
  wording: DibodevJoomlaVersionCheckerWording
  platformLabels: Record<DibodevPhpVulnerabilityPlatformKey, string>
  trackingLocation: string
}

/**
 * A link to a guide of the blog shown under a result.
 * @type {DibodevJoomlaVersionGuideLink}
 * @property {DibodevJoomlaVersionGuideKey} key - The subject of the guide.
 * @property {string} label - The link text in the page language.
 * @property {string} to - The localized route of the guide.
 */
export type DibodevJoomlaVersionGuideLink = {
  key: DibodevJoomlaVersionGuideKey
  label: string
  to: string
}
