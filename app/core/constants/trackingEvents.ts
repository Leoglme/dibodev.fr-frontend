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
  /** First interaction with the contact form (sent once per page view), with the field touched. */
  contactFormStarted: 'contact_form_started',
  /** Contact form submit attempt blocked by validation, with the fields in error. */
  contactFormInvalid: 'contact_form_invalid',
  /** Click on the online booking link (Cal.com: Google Meet or phone call). */
  bookingLinkClicked: 'booking_link_clicked',
  /** Click on a project card (to the detail page). */
  projectCardClicked: 'project_card_clicked',
  /** Click on a project "view site" link (external). */
  projectSiteVisited: 'project_site_visited',
  /** Click on a project GitHub repository. */
  projectRepoVisited: 'project_repo_visited',
  /** Click on one of Léo's external profiles (Malt, LinkedIn, GitHub…). */
  externalProfileClicked: 'external_profile_clicked',
  /** Click on a blog article card. */
  articleCardClicked: 'article_card_clicked',
  /** Click on an in-article CTA block (button or link) toward contact. */
  articleCtaClicked: 'article_cta_clicked',
  /** Language change via the switcher. */
  localeSwitched: 'locale_switched',
  /** Quote requested from the budget estimator, with the estimated range. */
  budgetEstimated: 'budget_estimated',
  /** First choice made in the budget estimator (sent once per page view). */
  budgetEstimatorStarted: 'budget_estimator_started',
  /** Detailed comparison opened on tablets and phones. */
  comparisonDetailsOpened: 'comparison_details_opened',
  /** First answer given in a trade test (sent once per page view), to compare with the page views. */
  tunnelStarted: 'tunnel_started',
  /** Step of a trade test answered (single choice picked, or several confirmed). */
  tunnelStepAnswered: 'tunnel_step_answered',
  /** Result of a trade test displayed, with the recommendation. */
  tunnelCompleted: 'tunnel_completed',
  /** Short lead form opened under a trade test result. */
  tunnelLeadFormOpened: 'tunnel_lead_form_opened',
  /** Lead sent from a trade test (success or failure via the `status` property). */
  tunnelLeadSubmitted: 'tunnel_lead_submitted',
  /** Click on a teaser linking to a trade test (from an article, a project or a service page). */
  toolTeaserClicked: 'tool_teaser_clicked',
  /** Slide changed by the visitor in a photo slideshow (click on the photo, swipe or progress marker). */
  photoSlideshowNavigated: 'photo_slideshow_navigated',
} as const

/** Tracking event name (value of the `TRACKING_EVENTS` catalog). */
export type TrackingEventName = (typeof TRACKING_EVENTS)[keyof typeof TRACKING_EVENTS]
