import type { DibodevHostingProviderKey } from '~/core/types/DibodevHostingStatus'
import type { DibodevHostingStatusBoardWording } from '~/core/types/DibodevHostingStatusPage'

/** One card of the hub board. */
export type DibodevHostingStatusBoardItem = {
  key: DibodevHostingProviderKey
  name: string
  to: string
}

/** Props of the hub board. */
export type DibodevHostingStatusBoardProps = {
  anchorId: string
  items: DibodevHostingStatusBoardItem[]
  wording: DibodevHostingStatusBoardWording
  trackingLocation: string
}
