import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/** `contextLabel` is the date, figure or legal reference shown above the title. */
export type DibodevSourcedFact = {
  contextLabel: string
  title: string
  text: string
  sourceName: string
  sourceUrl: string
}

export type DibodevSourcedFactsSectionProps = {
  anchorId: string
  eyebrow: string
  title: string
  intro: string
  facts: DibodevSourcedFact[]
  tone: DibodevSectionTone
}
