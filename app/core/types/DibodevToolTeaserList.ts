import type { DibodevCalloutTone } from '~/core/types/DibodevCallout'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'

export type DibodevToolTeaserListProps = {
  teasers: DibodevToolTeaserContent[]
  trackingLocation: string
  tone: DibodevCalloutTone
}
