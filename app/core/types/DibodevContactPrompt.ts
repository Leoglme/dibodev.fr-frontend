import type { RouteLocationRaw } from 'vue-router'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevCalloutTone } from '~/core/types/DibodevCallout'

/** Texts of a contact prompt in one language: the callout in the article, and the bar at the bottom of small screens. */
export type DibodevContactPromptWording = {
  emphasizedIntro: string
  text: string
  linkLabel: string
  barText: string
  barButtonLabel: string
}

/** A contact prompt attached to articles on one subject; `contactQuery` prefills the contact form. */
export type DibodevContactPromptContent = {
  icon: string
  contactQuery: Record<string, string>
  wording: Record<SupportedLocale, DibodevContactPromptWording>
}

/**
 * Props of the contact callout placed inside an article.
 * @type {DibodevContactPromptProps}
 * @property {string} icon - Name of the icon in the badge.
 * @property {string} emphasizedIntro - Bold opening of the sentence.
 * @property {string} text - Rest of the sentence.
 * @property {string} linkLabel - Text of the link to the contact page.
 * @property {RouteLocationRaw} to - The contact page, with its prefill query.
 * @property {string} trackingLocation - `location` property of the PostHog click event.
 * @property {DibodevCalloutTone} tone - Background of the callout.
 */
export type DibodevContactPromptProps = {
  icon: string
  emphasizedIntro: string
  text: string
  linkLabel: string
  to: RouteLocationRaw
  trackingLocation: string
  tone: DibodevCalloutTone
}
