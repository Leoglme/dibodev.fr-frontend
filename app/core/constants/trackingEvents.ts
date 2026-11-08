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
  /** Click on an article about Léo or Dibodev in the press (external). */
  pressArticleClicked: 'press_article_clicked',
  /** Click on a blog article card. */
  articleCardClicked: 'article_card_clicked',
  /** Click on an in-article CTA block (button or link) toward contact. */
  articleCtaClicked: 'article_cta_clicked',
  /** Click on a downloadable file link (PDF, Excel, CSV) in an article or a page, with the file path. */
  fileDownloadClicked: 'file_download_clicked',
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
  /** First answer given in the public aid simulator (sent once per page view). */
  publicAidSimulatorStarted: 'public_aid_simulator_started',
  /** Result of the public aid simulator displayed for a commune, with the outcome and the aid. */
  publicAidSimulated: 'public_aid_simulated',
  /** First address typed in the PHP vulnerability checker (sent once per page view). */
  phpVulnerabilityCheckStarted: 'php_vulnerability_check_started',
  /** A site checked by the PHP vulnerability checker, with the verdict (or the error), never the address. */
  phpVulnerabilityChecked: 'php_vulnerability_checked',
  /** A hosting guide opened from the result card of the PHP vulnerability checker. */
  phpVulnerabilityGuideClicked: 'php_vulnerability_guide_clicked',
  /** First address typed in the WordPress hack checker (sent once per page view). */
  wordpressHackCheckStarted: 'wordpress_hack_check_started',
  /** A site checked by the WordPress hack checker, with the verdict (or the error), never the address. */
  wordpressHackChecked: 'wordpress_hack_checked',
  /** A guide opened from the result card of the WordPress hack checker. */
  wordpressHackGuideClicked: 'wordpress_hack_guide_clicked',
  /** First name typed in the e-invoicing software checker (sent once per page view). */
  eInvoicingSoftwareCheckStarted: 'e_invoicing_software_check_started',
  /** A tool checked by the e-invoicing software checker, with the verdict and the tool matched, never the text typed. */
  eInvoicingSoftwareChecked: 'e_invoicing_software_checked',
  /** The live status of a hosting provider shown on its page (sent once per load, with the state read). */
  hostingStatusLoaded: 'hosting_status_loaded',
  /** A provider card opened from the hosting status hub. */
  hostingStatusProviderClicked: 'hosting_status_provider_clicked',
  /** The "refresh" button of a hosting status card pressed. */
  hostingStatusRefreshed: 'hosting_status_refreshed',
  /** An alert requested from a tool card (vulnerability or hosting outage), with the outcome, never the address. */
  securityAlertSubscribed: 'security_alert_subscribed',
  /** First domain typed in the e-mail deliverability checker (sent once per page view). */
  emailDeliverabilityCheckStarted: 'email_deliverability_check_started',
  /** A domain checked by the e-mail deliverability checker, with the verdict, the provider and the findings (or the error), never the domain. */
  emailDeliverabilityChecked: 'email_deliverability_checked',
  /** First address typed in the website health checker (sent once per page view). */
  websiteHealthCheckStarted: 'website_health_check_started',
  /** A site checked by the website health checker, with the overall verdict and the failing checks (or the error), never the address. */
  websiteHealthChecked: 'website_health_checked',
  /** First address typed in the GDPR cookie checker (sent once per page view). */
  gdprCookieCheckStarted: 'gdpr_cookie_check_started',
  /** A site checked by the GDPR cookie checker, with the verdict, the trackers and the consent tool found (or the error), never the address. */
  gdprCookieChecked: 'gdpr_cookie_checked',
  /** A demo asked from the site workshop of a trade page, with the choices made (never the e-mail nor the phone). */
  siteDemoRequested: 'site_demo_requested',
  /** The live demo of the site workshop opened in full screen over the page, with the visitor's choices. */
  siteDemoOpened: 'site_demo_opened',
  /** An example website of a trade page opened in a new tab, with the template shown. */
  siteExampleOpened: 'site_example_opened',
  /** First answer given in the specification generator (sent once per page view), with the project type. */
  projectSpecificationStarted: 'project_specification_started',
  /** A step of the specification generator completed, with its number and the project type. */
  projectSpecificationStepCompleted: 'project_specification_step_completed',
  /** The last step of the specification generator completed: the choices that shape the document, never the texts typed. */
  projectSpecificationCompleted: 'project_specification_completed',
  /** The specification saved from the generator, as a Word file or as a PDF (print window). */
  projectSpecificationDownloaded: 'project_specification_downloaded',
  /** A quote asked with the specification, with the outcome, never the contact details. */
  projectSpecificationQuoteRequested: 'project_specification_quote_requested',
  /** First answer given in the legal notice generator (sent once per page view). */
  legalNoticeGeneratorStarted: 'legal_notice_generator_started',
  /** A step of the legal notice generator completed, with its number. */
  legalNoticeGeneratorStepCompleted: 'legal_notice_generator_step_completed',
  /** The last step of the legal notice generator completed: the choices that shape the documents, never the identity typed. */
  legalNoticeGeneratorCompleted: 'legal_notice_generator_completed',
  /** A legal notice or privacy policy saved from the generator: Word file, PDF (print window) or copied text. */
  legalNoticeGeneratorDownloaded: 'legal_notice_generator_downloaded',
} as const

/** Tracking event name (value of the `TRACKING_EVENTS` catalog). */
export type TrackingEventName = (typeof TRACKING_EVENTS)[keyof typeof TRACKING_EVENTS]
