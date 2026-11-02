import type {
  DibodevSiteAtelierDevice,
  DibodevSiteAtelierPreviewMessage,
  DibodevSiteAtelierWording,
} from '~/core/types/DibodevSiteAtelier'
import type { DibodevTradeWebsiteTemplate } from '~/core/types/DibodevTradeWebsite'

export type DibodevSiteAtelierPreviewProps = {
  wording: DibodevSiteAtelierWording
  template: DibodevTradeWebsiteTemplate
  previewMessage: DibodevSiteAtelierPreviewMessage
  device: DibodevSiteAtelierDevice
}

export type DibodevSiteAtelierPreviewMode = 'checking' | 'live' | 'capture'
