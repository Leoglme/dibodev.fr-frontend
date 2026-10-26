import type { DibodevPhpVulnerabilityPlatformKey } from '~/core/types/DibodevPhpVulnerabilityCheck'
import type { DibodevWordPressHackGuideKey } from '~/core/types/DibodevWordPressHackCheck'
import type { DibodevWordPressHackCheckerWording } from '~/core/types/DibodevWordPressHackCheckPage'

/**
 * Props of the WordPress hack checker: the address field, the call to the API and the result card.
 * @type {DibodevWordPressHackCheckerProps}
 * @property {string} anchorId - Id of the block, for in-page links.
 * @property {DibodevWordPressHackCheckerWording} wording - Every text of the checker in the page language.
 * @property {Record<DibodevPhpVulnerabilityPlatformKey, string>} platformLabels - Display name of each platform.
 * @property {string} trackingLocation - `location` property of the PostHog events.
 */
export type DibodevWordPressHackCheckerProps = {
  anchorId: string
  wording: DibodevWordPressHackCheckerWording
  platformLabels: Record<DibodevPhpVulnerabilityPlatformKey, string>
  trackingLocation: string
}

/**
 * A link to a guide of the blog shown under a result.
 * @type {DibodevWordPressHackGuideLink}
 * @property {DibodevWordPressHackGuideKey} key - The subject of the guide.
 * @property {string} label - The link text in the page language.
 * @property {string} to - The localized route of the guide.
 */
export type DibodevWordPressHackGuideLink = {
  key: DibodevWordPressHackGuideKey
  label: string
  to: string
}
