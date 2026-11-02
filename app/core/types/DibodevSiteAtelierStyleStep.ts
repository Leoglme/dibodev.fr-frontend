import type { DibodevSiteAtelierTradeWording, DibodevSiteAtelierWording } from '~/core/types/DibodevSiteAtelier'
import type { DibodevTradeWebsiteTemplate } from '~/core/types/DibodevTradeWebsite'

export type DibodevSiteAtelierStyleStepProps = {
  wording: DibodevSiteAtelierWording
  tradeWording: DibodevSiteAtelierTradeWording
  templates: DibodevTradeWebsiteTemplate[]
  templateId: string
}
