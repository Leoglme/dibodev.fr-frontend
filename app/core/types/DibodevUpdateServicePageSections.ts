import type { LocationQueryRaw } from 'vue-router'
import type { DibodevToolShareImageIcon } from '~/core/types/DibodevToolShareImage'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import type { DibodevUpdateServicePageContent } from '~/core/types/DibodevUpdateServicePage'

/**
 * Type definitions for the DibodevUpdateServicePageSections component props.
 * @type {DibodevUpdateServicePageSectionsProps}
 * @property {DibodevUpdateServicePageContent} page - Its texts in the page language.
 * @property {string} servicePagePath - French path of the page, the `@id` of its Service JSON-LD.
 * @property {string[]} serviceTypes - Kinds of service declared in the JSON-LD, in English as schema.org readers expect.
 * @property {number[]} offerPricesInEuros - Price of each offer card in euros, in the order of the cards (0 = free).
 * @property {string[]} relatedArticleSlugs - Articles shown under the FAQ; the untranslated ones are left out of /en and /es.
 * @property {LocationQueryRaw} contactQuery - Query of the contact page, which writes the message of the visitor.
 * @property {DibodevToolTeaserContent} checkerTeaser - Free checker offered under the prices.
 * @property {string} trackingLocation - PostHog `location` prefix of the buttons of the page.
 * @property {DibodevToolShareImageIcon} shareImageIcon - Icon drawn on the share image.
 */
export type DibodevUpdateServicePageSectionsProps = {
  page: DibodevUpdateServicePageContent
  servicePagePath: string
  serviceTypes: string[]
  offerPricesInEuros: number[]
  relatedArticleSlugs: string[]
  contactQuery: LocationQueryRaw
  checkerTeaser: DibodevToolTeaserContent
  trackingLocation: string
  shareImageIcon: DibodevToolShareImageIcon
}
