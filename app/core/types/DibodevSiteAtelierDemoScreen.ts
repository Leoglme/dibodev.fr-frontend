import type { DibodevSiteAtelierDevice, DibodevSiteAtelierPreviewMessage } from '~/core/types/DibodevSiteAtelier'
import type { DibodevTradeWebsiteTemplate } from '~/core/types/DibodevTradeWebsite'

export type DibodevSiteAtelierDemoScreenProps = {
  template: DibodevTradeWebsiteTemplate
  previewMessage: DibodevSiteAtelierPreviewMessage
  device: DibodevSiteAtelierDevice
  isFullScreen: boolean
  frameTitle: string
  captureAlt: string
  loadingLabel: string
}
