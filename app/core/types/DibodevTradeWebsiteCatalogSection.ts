import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import type { DibodevTradeWebsiteKey } from '~/core/types/DibodevTradeWebsite'

/** One trade card of the hub: the capture of its first template, its texts and the page it opens. */
export type DibodevTradeWebsiteCatalogCard = {
  key: DibodevTradeWebsiteKey
  icon: string
  tradeLabel: string
  title: string
  description: string
  stylesCountLabel: string
  thumbnailSrc: string
  routeName: string
}

/**
 * Type definitions for the DibodevTradeWebsiteCatalogSection component props.
 * @type {DibodevTradeWebsiteCatalogSectionProps}
 * @property {string} anchorId - Id of the section, for in-page links.
 * @property {string} eyebrow - Small uppercase line displayed above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Optional paragraph displayed under the title.
 * @property {DibodevTradeWebsiteCatalogCard[]} cards - One card per trade, in display order.
 * @property {string} linkLabel - Label of the link of each trade card.
 * @property {string} otherTradeTitle - Title of the last card, for a trade not listed.
 * @property {string} otherTradeDescription - Text of that card.
 * @property {string} otherTradeLinkLabel - Label of its link towards the contact page.
 * @property {DibodevSectionTone} tone - Background tone of the section.
 * @property {string} trackingLocation - `location` sent with the clicks of the section.
 */
export type DibodevTradeWebsiteCatalogSectionProps = {
  anchorId: string
  eyebrow: string
  title: string
  intro: string
  cards: DibodevTradeWebsiteCatalogCard[]
  linkLabel: string
  otherTradeTitle: string
  otherTradeDescription: string
  otherTradeLinkLabel: string
  tone: DibodevSectionTone
  trackingLocation: string
}
