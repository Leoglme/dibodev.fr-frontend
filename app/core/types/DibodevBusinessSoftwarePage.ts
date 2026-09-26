import type { WhyWorkWithMeNumber } from '~/components/sections/DibodevWhyWorkWithMeItem.vue'
import type { DibodevServiceIconName } from '~/core/types/DibodevServiceIcon'

export type DibodevBusinessSoftwareTool = {
  title: string
  description: string
  color: string
  icon: DibodevServiceIconName
}

export type DibodevBusinessSoftwareStep = {
  number: WhyWorkWithMeNumber
  label: string
  title: string
  description: string
}

export type DibodevBusinessSoftwarePricingOffer = {
  title: string
  price: string
  description: string
  isHighlighted: boolean
}
