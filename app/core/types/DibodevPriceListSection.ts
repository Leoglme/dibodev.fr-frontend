import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

export type DibodevPricedProduct = {
  name: string
  coverage: string
  price: string
  priceCondition: string
}

export type DibodevPriceListSectionProps = {
  anchorId: string
  eyebrow: string
  title: string
  intro: string
  productColumnLabel: string
  coverageColumnLabel: string
  priceColumnLabel: string
  products: DibodevPricedProduct[]
  tone: DibodevSectionTone
}
