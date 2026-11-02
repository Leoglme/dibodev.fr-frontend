import type {
  DibodevSiteAtelierDevice,
  DibodevSiteAtelierPreviewMessage,
  DibodevSiteAtelierWording,
} from '~/core/types/DibodevSiteAtelier'
import type { DibodevTradeWebsiteTemplate } from '~/core/types/DibodevTradeWebsite'

export type DibodevSiteAtelierFullScreenPreviewProps = {
  wording: DibodevSiteAtelierWording
  template: DibodevTradeWebsiteTemplate
  previewMessage: DibodevSiteAtelierPreviewMessage
  device: DibodevSiteAtelierDevice
  isOpen: boolean
}
