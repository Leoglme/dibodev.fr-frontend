/** Single catalog of PostHog conversion events for dibodev.fr. snake_case values, frozen once set; no product prefix (dedicated PostHog project). */
export const TRACKING_EVENTS = {
  /** Click on the main "Discuter de mon projet" CTA. */
  ctaProjectDiscussion: 'cta_project_discussion_clicked',
  /** Click on a phone number (tel: link). */
  contactPhone: 'contact_phone_clicked',
  /** Click on an email address (mailto: link). */
  contactEmail: 'contact_email_clicked',
  /** Contact form submission (success or failure via the `status` property). */
  contactFormSubmitted: 'contact_form_submitted',
  /** Quick contact-intent submission (email blur on the contact form). */
  contactIntentSubmitted: 'contact_intent_submitted',
  /** Click on a project card (to the detail page). */
  projectCardClicked: 'project_card_clicked',
  /** Click on a project "view site" link (external). */
  projectSiteVisited: 'project_site_visited',
  /** Click on a project GitHub repository. */
  projectRepoVisited: 'project_repo_visited',
  /** Click on a blog article card. */
  articleCardClicked: 'article_card_clicked',
  /** Click on an in-article CTA block (button or link) toward contact. */
  articleCtaClicked: 'article_cta_clicked',
  /** Language change via the switcher. */
  localeSwitched: 'locale_switched',
} as const

/** Tracking event name (value of the `TRACKING_EVENTS` catalog). */
export type TrackingEventName = (typeof TRACKING_EVENTS)[keyof typeof TRACKING_EVENTS]
