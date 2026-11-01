import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/** One template card of the hub: a link to the template page and a link to the trade test (`toolId` is sent with the click). */
export type DibodevFreeTemplateCatalogCard = {
  key: string
  tradeLabel: string
  title: string
  description: string
  formats: string
  icon: string
  templateRouteName: string
  templateLinkLabel: string
  toolId: string
  toolRouteName: string
  testLinkLabel: string
}

export type DibodevFreeTemplateCatalogSectionProps = {
  anchorId: string
  eyebrow: string
  title: string
  intro: string
  templates: DibodevFreeTemplateCatalogCard[]
  tone: DibodevSectionTone
  trackingLocation: string
}
