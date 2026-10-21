import type { RouteLocationRaw } from 'vue-router'

/**
 * Props of the contact bar fixed at the bottom of small screens.
 * @type {DibodevMobileContactBarProps}
 * @property {string} text - The short question shown next to the button.
 * @property {string} buttonLabel - The button text.
 * @property {RouteLocationRaw} to - Where the button leads, usually the contact page with a prefill query.
 * @property {string} trackingLocation - `location` property of the PostHog click event.
 * @property {string} hiddenWhileVisibleId - Id of an element that replaces the bar while it is on screen (the tool itself), empty for none.
 */
export type DibodevMobileContactBarProps = {
  text: string
  buttonLabel: string
  to: RouteLocationRaw
  trackingLocation: string
  hiddenWhileVisibleId: string
}
