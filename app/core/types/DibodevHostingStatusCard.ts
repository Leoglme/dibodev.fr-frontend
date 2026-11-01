import type { DibodevHostingProviderKey } from '~/core/types/DibodevHostingStatus'
import type { DibodevHostingStatusCardWording } from '~/core/types/DibodevHostingStatusPage'

/** Props of the live status card of one provider. */
export type DibodevHostingStatusCardProps = {
  anchorId: string
  provider: DibodevHostingProviderKey
  providerName: string
  wording: DibodevHostingStatusCardWording
  trackingLocation: string
}
