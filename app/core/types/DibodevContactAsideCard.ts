/**
 * Type definitions for the DibodevContactAsideCard component props.
 * @type {DibodevContactAsideCardProps}
 * @property {string} title - The card title (a question, e.g. "Un projet similaire ?").
 * @property {string} description - One or two reassuring sentences.
 * @property {string} buttonLabel - The button label.
 * @property {string} trackingLocation - PostHog `location` property sent when the button is clicked.
 */
export type DibodevContactAsideCardProps = {
  title: string
  description: string
  buttonLabel: string
  trackingLocation: string
}
