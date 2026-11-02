import type {
  DibodevSiteAtelierRequestStatus,
  DibodevSiteAtelierTradeWording,
  DibodevSiteAtelierWording,
} from '~/core/types/DibodevSiteAtelier'

export type DibodevSiteAtelierRequestStepProps = {
  wording: DibodevSiteAtelierWording
  tradeWording: DibodevSiteAtelierTradeWording
  status: DibodevSiteAtelierRequestStatus
  errorMessage: string
  wereAttachmentsDropped: boolean
  pricingAnchorId: string
  businessName: string
}
