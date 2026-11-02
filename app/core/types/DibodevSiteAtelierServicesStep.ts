import type {
  DibodevSiteAtelierState,
  DibodevSiteAtelierTradeWording,
  DibodevSiteAtelierWording,
} from '~/core/types/DibodevSiteAtelier'

export type DibodevSiteAtelierServicesStepProps = {
  wording: DibodevSiteAtelierWording
  tradeWording: DibodevSiteAtelierTradeWording
  state: DibodevSiteAtelierState
  hasEmergencyOption: boolean
}
