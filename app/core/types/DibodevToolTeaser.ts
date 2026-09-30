import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevCalloutTone } from '~/core/types/DibodevCallout'

/** Texts of a tool teaser in one language; `listLabel` is the short link used when several tests are listed together. */
export type DibodevToolTeaserWording = {
  emphasizedIntro: string
  text: string
  linkLabel: string
  listLabel: string
}

/** `routeName` is the page of the tool; the teaser only shows in the languages that have a `wording`. */
export type DibodevToolTeaserContent = {
  toolId: string
  routeName: string
  icon: string
  wording: Partial<Record<SupportedLocale, DibodevToolTeaserWording>>
}

export type DibodevToolTeaserProps = {
  teaser: DibodevToolTeaserContent
  trackingLocation: string
  tone: DibodevCalloutTone
}
