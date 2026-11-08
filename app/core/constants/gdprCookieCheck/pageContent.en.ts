import type { DibodevGdprCookieCheckPageContent } from '~/core/types/DibodevGdprCookieCheckPage'
import {
  GDPR_ARTICLE_82_SOURCE,
  GDPR_CNIL_AUDIENCE_SOURCE,
  GDPR_CNIL_FAQ_SOURCE,
  GDPR_CNIL_GUIDELINES_SOURCE,
  GDPR_CNIL_RECOMMENDATION_SOURCE,
  GDPR_CNIL_SANCTIONS_SOURCE,
  GDPR_CNIL_SESSION_REPLAY_SOURCE,
  GDPR_LEGAL_NOTICE_SOURCE,
} from '~/core/constants/gdprCookieCheck/pageShared'
import { NBSP } from '~/core/constants/typography'

export const GDPR_COOKIE_CHECK_PAGE_EN: DibodevGdprCookieCheckPageContent = {
  meta: {
    title: 'GDPR compliant website? Free cookie and tracker check',
    description:
      'Enter your website address: trackers loaded without consent (Google Analytics, Meta, Hotjar…), cookie banner and legal links checked against French rules.',
    inLanguage: 'en-GB',
    schemaAbout:
      'Compliance of a website with the French rules on cookies and other trackers (GDPR, article 82 of the French Data Protection Act)',
  },
  applicationName: 'GDPR cookie and tracker check for a website',
  breadcrumbLabel: 'GDPR compliant website: check the cookies',
  shareImage: {
    titleLines: ['Is my website', 'GDPR compliant?'],
    highlight: 'GDPR compliant',
    subtitle: 'Trackers, cookie banner and mandatory links read in the HTML',
    badge: 'Free test, no sign-up',
    alt: 'Is my website GDPR compliant? Free cookie and tracker check by Dibodev',
  },
  hero: {
    titleBefore: 'Is my website ',
    titleHighlight: 'GDPR compliant',
    titleAfter: '? Free cookie and tracker check',
    reassurances: ['Free, no sign-up', 'Nothing to install', `Rules re-read on 8${NBSP}November 2026`],
    description:
      'A cookie banner proves nothing: what counts is what the page loads before the visitor has chosen. A website can show a nice banner while Google Analytics, the Facebook pixel or a YouTube video have already gone out. This tool reads the HTML of your home page, like a robot, without running the JavaScript: it spots the known trackers and says whether they wait for consent, recognises the consent tool (Axeptio, tarteaucitron, Cookiebot, Didomi…) and looks for the three mandatory links. For each point: what it saw, what it means, what to do. Built for French businesses and the French rules (CNIL), it works with any public website.',
    authorIntro: 'Tool built by',
    authorBio:
      'freelance developer near Rennes (France). I build, redesign and bring into line showcase websites for small and medium businesses, remotely, and I reply within 24 hours.',
  },
  checker: {
    siteLabel: 'Your website address',
    sitePlaceholder: 'mycompany.fr',
    siteHint:
      'A domain name is enough. Only the home page is read, as a robot would, without running the JavaScript: nothing is scanned. Only the website address and its result are kept, for statistics.',
    submit: 'Test my website',
    checking: 'Reading…',
    resultLabel: 'Your result',
    idleTitle: 'Enter your website address to start',
    idleText:
      'The result lists the trackers seen in the HTML (Google Analytics, Meta, Hotjar, YouTube…), says whether they wait for consent, names the consent tool and checks the mandatory links.',
    loadingTitle: 'Reading the home page…',
    loadingText:
      'I read the HTML of the page, then spot the trackers, the consent tool and the footer links. A few seconds.',
    errorTitles: {
      invalid: 'Address to fix',
      unreachable: 'Website unreachable',
      rateLimited: 'Too many checks',
      failed: 'Check impossible',
    },
    errorTexts: {
      invalid: 'Enter a public domain name, like mycompany.fr, without spaces or internal addresses.',
      unreachable:
        'I could not read the home page of {host}: wrong address, website offline, or a server that turns robots away. Try with www in front, or without.',
      rateLimited: 'You have run many checks in a short time. Try again in a few minutes.',
      failed: 'Something went wrong on my side. Try again in a moment, or send me the website address.',
    },
    verdictTitles: {
      compliantLikely: '{host}: nothing risky seen in the HTML',
      needsCheck: '{host}: points to check',
      atRisk: '{host}: trackers leave without consent',
      unknown: '{host}: page unreadable from outside',
    },
    verdictTexts: {
      compliantLikely:
        'No known tracker leaves before the visitor’s choice, and the mandatory links are there. This is not a compliance certificate: the test reads the home page without running the JavaScript.',
      needsCheck:
        'Nothing glaring, but at least one point needs a look: a tracker loaded despite the consent tool (which may block it itself when the page loads, to check in the browser), a tracker to configure, or a missing link.',
      atRisk:
        'The page loads trackers that require the visitor’s consent, and no consent tool appears in the HTML. This is what the CNIL, the French data protection authority, fines, small businesses included.',
      unknown:
        'The page received is protected against robots, built by JavaScript or too long to be read down to the footer: I cannot judge the links. Check in your browser, or send me the address.',
    },
    trackersTitle: 'Trackers seen in the HTML',
    noTracker: {
      label: 'No known tracker',
      badge: 'None seen',
      seenText:
        'No Google Analytics, Google Tag Manager, advertising pixel, Hotjar, Clarity, Matomo, YouTube video, Google Maps map or reCAPTCHA in the HTML of the home page.',
      meaningText:
        'Nothing leaves before the visitor’s choice, as far as the HTML shows. A tracker added later by a script, or present on another page, cannot be seen from here.',
    },
    trackerLabels: {
      googleAnalytics: 'Google Analytics',
      googleAds: 'Google Ads or AdSense',
      googleTagManager: 'Google Tag Manager',
      metaPixel: 'Meta pixel (Facebook, Instagram)',
      hotjar: 'Hotjar',
      microsoftClarity: 'Microsoft Clarity',
      linkedInInsight: 'LinkedIn Insight Tag',
      tiktokPixel: 'TikTok pixel',
      pinterestTag: 'Pinterest tag',
      matomo: 'Matomo',
      youtube: 'YouTube video',
      youtubeNoCookie: 'YouTube video (privacy-enhanced mode)',
      googleMaps: 'Google Maps map',
      recaptcha: 'Google reCAPTCHA',
    },
    trackerMeaningTexts: {
      googleAnalytics:
        'Google’s audience measurement. It escapes consent only if it is limited to your anonymous statistics, for your account alone; the CNIL rules out the offers whose provider states it reuses the data for its own account.',
      googleAds:
        'Google advertising (conversion tracking, retargeting or AdSense ads): advertising trackers require the visitor’s prior consent.',
      googleTagManager:
        'Google’s tag manager: it loads other scripts (statistics, pixels, sometimes the consent tool itself) that the HTML of the page does not show.',
      metaPixel: 'Meta’s advertising pixel: it follows visitors for targeted ads, which requires their prior consent.',
      hotjar:
        'Hotjar records the visitors’ journeys. The CNIL makes these session replay tools subject to prior consent (recommendation of 8 October 2026).',
      microsoftClarity:
        'Clarity records the visitors’ sessions to replay them. The CNIL makes these session replay tools subject to prior consent (recommendation of 8 October 2026).',
      linkedInInsight:
        'LinkedIn’s advertising tag (conversions, retargeting): it requires the visitor’s prior consent.',
      tiktokPixel: 'TikTok’s advertising pixel: it requires the visitor’s prior consent.',
      pinterestTag: 'Pinterest’s advertising tag: it requires the visitor’s prior consent.',
      matomo:
        'Matomo audience measurement. It can do without consent if it is configured as the CNIL describes (anonymous statistics for your account alone, trackers of 13 months at most, data kept 25 months at most): the HTML does not show these settings.',
      youtube:
        'The YouTube player loads with the page. The CNIL asks that embedded content place no tracker subject to consent before the visitor agrees.',
      youtubeNoCookie:
        'According to Google, this mode prevents the videos watched from personalising YouTube and the ads, but Google does not say that nothing is stored on the visitor’s device.',
      googleMaps:
        'Google content loaded into your page. The CNIL asks that embedded content place no tracker subject to consent before the visitor agrees.',
      recaptcha:
        'A CAPTCHA is exempt if it only secures the website, but the CNIL cites reCAPTCHA among the solutions whose provider states it reuses the data for its own account: consent is then required.',
    },
    trackerAdviceTexts: {
      googleAnalytics:
        'load it only after the visitor agrees (blocked by the consent tool, or Google’s “basic” consent mode), or switch to an audience measurement configured for the exemption.',
      googleAds: 'block it until the visitor chooses in the consent tool, or remove it if it is no longer used.',
      googleTagManager:
        'check in Google Tag Manager that every tag waits for consent (consent mode for Google tags, a trigger after consent for the others).',
      metaPixel:
        'block it until the visitor chooses, or remove it if you no longer advertise on Facebook or Instagram.',
      hotjar: 'load it after consent, mask the form fields, or remove it if nobody watches the recordings.',
      microsoftClarity: 'load it after consent, mask the form fields, or remove it if nobody watches the recordings.',
      linkedInInsight: 'block it until the visitor chooses, or remove it if you no longer advertise on LinkedIn.',
      tiktokPixel: 'block it until the visitor chooses, or remove it if you no longer advertise on TikTok.',
      pinterestTag: 'block it until the visitor chooses, or remove it if you no longer advertise on Pinterest.',
      matomo:
        'check its settings against the exemption guide published on the CNIL’s website and mention it in your privacy policy, or put it behind the consent tool.',
      youtube:
        'show an image with a “Play the video” button that asks for consent before loading the player (most consent tools do it), or a simple link to YouTube.',
      youtubeNoCookie: 'the safest remains to load the video only after the visitor agrees.',
      googleMaps: 'show an image of the map with a link to Google Maps, or load the map after consent.',
      recaptcha:
        'check Google’s terms, load it only on the form page and after consent, or switch to a protection that needs no consent.',
    },
    loadingLabels: {
      loadedDirectly: 'Loaded without consent',
      loadedOnClick: 'Loaded on click',
      waitingForConsent: 'Waits for consent',
      googleConsentModeDenied: 'Consent mode',
    },
    loadingSeenTexts: {
      loadedDirectly:
        'Loaded as soon as the page opens (or at the visitor’s first move), before any choice about cookies.',
      loadedOnClick:
        'An image takes its place: the content loads when the visitor clicks it, without asking for consent.',
      waitingForConsent: 'Present in the HTML but switched off: it waits for the visitor’s choice in the consent tool.',
      googleConsentModeDenied:
        'Loaded with the page, Google’s consent mode set to “denied” by default: according to Google, no cookie is read or written before consent, but cookieless measurements are still sent.',
    },
    loadingAdviceTexts: {
      waitingForConsent: 'nothing, if the banner offers “Reject all” at the same level as “Accept all”.',
      googleConsentModeDenied:
        'to send nothing before the choice, Google describes the “basic” mode, which blocks its tags until the banner is clicked.',
    },
    consentToolTitle: 'Consent tool',
    consentToolLabel: 'Cookie banner',
    consentToolStatusLabels: {
      found: 'Found',
      notFound: 'Missing',
      notNeeded: 'Not needed',
    },
    consentToolSeenTexts: {
      found: '{tools} loads on the page.',
      notFound: 'No known consent tool in the HTML (Axeptio, tarteaucitron, Cookiebot, Didomi, CookieYes, Complianz…).',
      notNeeded: 'No consent tool, and no known tracker either.',
    },
    consentToolAutoBlockingText:
      'It is set to automatic blocking: it may block, when the page loads, scripts that the HTML shows as loaded.',
    consentToolMeaningTexts: {
      found:
        'It shows the banner, keeps the visitor’s choice and must block the trackers as long as the visitor has not agreed.',
      notFound:
        'Without it, the visitor can neither accept nor refuse: the trackers that require consent leave anyway.',
      notNeeded: 'A banner is only needed if the website places trackers that require the visitor’s consent.',
    },
    consentToolAdviceTexts: {
      found:
        'check that “Reject all” sits at the same level as “Accept all”, and that every tracker of the list does wait for the choice.',
      notFound:
        'install a consent tool that blocks the trackers until the choice, with “Accept all” and “Reject all” at the same level; if Google Tag Manager loads it, check that it runs before the other tags.',
      notNeeded: 'nothing, as long as no tracker is added (Google statistics, advertising pixel, YouTube video).',
    },
    linksTitle: 'Mandatory links',
    linkLabels: {
      legalNotice: 'Legal notice',
      privacyPolicy: 'Privacy policy',
      cookieSettings: 'Cookie settings',
    },
    linkStatusLabels: {
      found: 'Found',
      missing: 'Missing',
      providedByConsentTool: 'Tool’s button',
      notNeeded: 'Not needed',
      notReadable: 'Unreadable',
    },
    linkDetailTexts: {
      legalNoticeFound: 'The home page links to the legal notice.',
      legalNoticeMissing: 'No link to a legal notice on the home page.',
      privacyPolicyFound: 'The home page links to a privacy or data protection policy.',
      privacyPolicyMissing: 'No link to a privacy policy on the home page.',
      cookieSettingsFound: 'A link or a button lets visitors change their cookie choices.',
      cookieSettingsMissing: 'No “Manage my cookies” link on the home page.',
      cookieSettingsByConsentTool:
        'No link in the HTML: the consent tool usually shows its own button to change one’s choice.',
      cookieSettingsNotNeeded: 'No link, but no tracker requires consent: there is nothing to manage.',
      linkNotReadable: 'Unreadable: the page is built by JavaScript, or too long to be read down to the footer.',
    },
    linkMeaningTexts: {
      legalNotice:
        'The company’s identity, address, registration and host are mandatory on a business website in France: up to €75,000 fine for a sole proprietorship, €375,000 for a company.',
      privacyPolicy:
        'As soon as the website collects data (form, cookies), it must say which data, why, for how long and what people’s rights are, in a policy reachable from every page.',
      cookieSettings:
        'Withdrawing consent must be as easy as giving it, at any time: a “Manage my cookies” link or an icon on every page.',
    },
    linkAdviceTexts: {
      legalNoticeMissing:
        'publish a legal notice page (identity, address, SIRET number, host) and link it from the footer of every page.',
      privacyPolicyMissing:
        'publish the policy and link it in the footer with a clear title, such as “Personal data” or “Privacy”; if it sits in your legal notice, say so in the link.',
      cookieSettingsMissing: 'add a “Manage my cookies” link in the footer, connected to the consent tool.',
      cookieSettingsByConsentTool:
        'close the banner and check that a button or a link to change one’s mind stays visible on every page.',
      linkNotReadable: 'check your website’s footer by eye.',
    },
    meaningLabel: 'What it means:',
    adviceLabel: 'What to do:',
    disclaimer:
      'Read in the HTML of the home page, without running the JavaScript: a tracker added by a script, by Google Tag Manager or on another page cannot be seen from here. This test does not replace an audit or legal advice.',
    idleCtaIntro: 'Would you rather I looked myself, free of charge, within 24 hours?',
    idleCtaLabel: 'Get my free opinion',
    ctaIntro: 'Need help installing the banner, setting the trackers or writing the legal pages?',
    ctaLabels: {
      compliantLikely: 'Talk about my website',
      needsCheck: 'Have these points checked',
      atRisk: 'Bring my website into line',
      unknown: 'Have my website checked',
    },
  },
  checks: {
    anchorId: 'what-the-test-reads',
    eyebrow: 'What the test reads',
    title: 'Six points, read in the HTML of the home page',
    intro:
      'The test reads the HTML like a robot, without running the JavaScript. That is its limit: a tracker added afterwards by a script or by Google Tag Manager cannot be seen from here. What it sees, it says plainly.',
    items: [
      {
        title: '1. Trackers loaded straight away',
        description:
          'Google Analytics, Google Tag Manager, Google Ads, Meta pixel, Hotjar, Microsoft Clarity, LinkedIn, TikTok, Pinterest, Matomo, YouTube videos, Google Maps maps, reCAPTCHA: for each one, the test says whether it leaves as soon as the page opens.',
      },
      {
        title: '2. Trackers put on hold',
        description:
          'A script switched off until the choice (type “text/plain” with a category, consent tool setting) or Google’s consent mode set to “denied”: those ones wait for the visitor.',
      },
      {
        title: '3. The consent tool',
        description:
          'Axeptio, Didomi, tarteaucitron, Cookiebot, CookieYes, Complianz, OneTrust, Iubenda, Usercentrics, Sirdata, AppConsent and a dozen others, recognised by their code.',
      },
      {
        title: '4. The legal notice',
        description:
          'A link to the page that says who publishes the website, its address, its registration and its host.',
      },
      {
        title: '5. The privacy policy',
        description:
          'A link to the page that says which data the website collects, why, for how long, and how to exercise one’s rights.',
      },
      {
        title: '6. The “Manage my cookies” link',
        description: 'A link or a button to change one’s choice, when the website places trackers subject to consent.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the texts say',
    title: 'Cookies, banner and legal pages: the French rules, with sources',
    intro:
      'Nine rules, read on 8 November 2026 on Légifrance, the CNIL’s website and service-public.fr, the official French sources. Each one links to the text.',
    facts: [
      {
        contextLabel: 'Article 82, French Data Protection Act',
        title: 'Consent first, except for what is essential',
        text: 'Reading or placing information on a visitor’s device requires their consent, after informing them of the purpose and of the means to object. Only the operations that serve solely the communication, or that are strictly necessary to the service they asked for, escape this rule.',
        sourceName: GDPR_ARTICLE_82_SOURCE.name,
        sourceUrl: GDPR_ARTICLE_82_SOURCE.url,
      },
      {
        contextLabel: 'CNIL guidelines, 17 September 2020',
        title: 'Browsing on is not accepting',
        text: 'Going on browsing, using the app or scrolling the page is not consent. Refusing must be possible without any step, or with an action as simple as accepting, and withdrawing consent as simple as giving it.',
        sourceName: GDPR_CNIL_GUIDELINES_SOURCE.name,
        sourceUrl: GDPR_CNIL_GUIDELINES_SOURCE.url,
      },
      {
        contextLabel: 'CNIL guidelines, article 3',
        title: 'Other people’s trackers are your business too',
        text: 'A website that lets third parties (Google, Meta, an ad network) place trackers from its pages must make sure that a mechanism does collect its visitors’ consent.',
        sourceName: GDPR_CNIL_GUIDELINES_SOURCE.name,
        sourceUrl: GDPR_CNIL_GUIDELINES_SOURCE.url,
      },
      {
        contextLabel: 'CNIL recommendation, 17 September 2020',
        title: '“Accept all” and “Reject all” at the same level',
        text: 'The CNIL recommends two buttons of the same level and format, keeping the visitor’s choice (consent as well as refusal) for six months, and letting them withdraw it at any time through a “Manage my cookies” link or an icon on every page.',
        sourceName: GDPR_CNIL_RECOMMENDATION_SOURCE.name,
        sourceUrl: GDPR_CNIL_RECOMMENDATION_SOURCE.url,
      },
      {
        contextLabel: 'Audience measurement, CNIL page of 4 July 2025',
        title: 'Statistics without a banner, under conditions',
        text: 'An audience measurement tool can do without consent if it only measures the audience for the website’s exclusive account and produces anonymous statistics, without cross-referencing or passing them on to third parties. The CNIL recommends trackers of 13 months at most and a retention of 25 months at most, and rules out the offers whose provider states it reuses the data for its own account.',
        sourceName: GDPR_CNIL_AUDIENCE_SOURCE.name,
        sourceUrl: GDPR_CNIL_AUDIENCE_SOURCE.url,
      },
      {
        contextLabel: 'CNIL questions and answers, 29 April 2026',
        title: 'Videos, share buttons, reCAPTCHA',
        text: 'A video or a share button that places trackers must place nothing before the visitor agrees; the click on the video can be used to ask. A CAPTCHA is exempt if it only secures the website, but the CNIL cites reCAPTCHA among the solutions whose provider states it reuses the data.',
        sourceName: GDPR_CNIL_FAQ_SOURCE.name,
        sourceUrl: GDPR_CNIL_FAQ_SOURCE.url,
      },
      {
        contextLabel: 'CNIL decision of 8 October 2026',
        title: 'Session replay requires consent',
        text: 'Tools that record a visitor’s full journey to replay it, as Hotjar and Microsoft Clarity offer, are subject to their prior consent. The CNIL also recommends masking forms and blocking the collection of passwords and bank details. Published in the French Official Journal of 5 November 2026.',
        sourceName: GDPR_CNIL_SESSION_REPLAY_SOURCE.name,
        sourceUrl: GDPR_CNIL_SESSION_REPLAY_SOURCE.url,
      },
      {
        contextLabel: 'Sanctions published by the CNIL',
        title: 'Fines for small businesses too',
        text: 'On 4 November 2025, €4,000 for a consultancy serving underwater sports clubs; on 18 December 2025, €2,000 and an injunction for a travel agency: two simplified procedures over cookies, information and consent. On 1 September 2025, €325 million for an online services company.',
        sourceName: GDPR_CNIL_SANCTIONS_SOURCE.name,
        sourceUrl: GDPR_CNIL_SANCTIONS_SOURCE.url,
      },
      {
        contextLabel: 'Checked on 13 October 2026',
        title: 'Legal notice and privacy policy',
        text: 'A business website in France, sole traders included, must say who publishes it, its address, its registration and its host, or face a fine of €75,000 for a sole proprietorship and €375,000 for a company. The privacy policy must be reachable from every page through a clearly visible link.',
        sourceName: GDPR_LEGAL_NOTICE_SOURCE.name,
        sourceUrl: GDPR_LEGAL_NOTICE_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'This test does not replace an audit or legal advice:',
    calloutText:
      'it says what the HTML of the home page shows, without running the JavaScript. For a website that sells online, stores customer accounts or advertises, a full check in the browser, page by page, remains necessary.',
  },
  remediation: {
    anchorId: 'what-to-do',
    eyebrow: 'Your website is at risk',
    title: 'What to do, in order',
    intro:
      'The same path for a showcase website, a WordPress site or an online shop, from the most urgent to the simplest.',
    pitfallLabel: 'The trap',
    items: [
      {
        title: 'Install a consent tool that really blocks',
        text: 'Axeptio, tarteaucitron, Cookiebot, Didomi, or a WordPress plugin such as Complianz or CookieYes: the tool must block every tracker until the choice, and offer “Accept all” and “Reject all” at the same level.',
        pitfall:
          'A banner that informs without blocking anything: the trackers leave before the click, and the banner is useless.',
      },
      {
        title: 'Put every tracker in a category',
        text: 'Statistics, advertising, videos, maps: every script goes under the tool’s control, including those added by the theme and the plugins (Site Kit, MonsterInsights, the reCAPTCHA of the contact form).',
        pitfall:
          'Optimisers such as WP Rocket or LiteSpeed Cache delay scripts until the visitor’s first move: the page is faster, but nobody gave consent.',
      },
      {
        title: 'Set up Google Analytics',
        text: 'Either it waits for consent (blocked by the consent tool, or Google’s “basic” mode), or you switch to an audience measurement configured for the exemption, such as Matomo set up following the guide published on the CNIL’s website.',
        pitfall:
          'Google’s “advanced” consent mode loads Google tags on arrival: according to Google, they send cookieless measurements before the choice.',
      },
      {
        title: 'Replace YouTube videos and maps',
        text: 'An image with a “Play the video” button that asks for consent before loading the player; for the map, a screenshot with a link to Google Maps. Most consent tools can do it.',
        pitfall:
          'Switching to youtube-nocookie.com: according to Google, the videos watched no longer personalise YouTube, but Google does not say that nothing is stored.',
      },
      {
        title: 'Add the three footer links',
        text: 'Legal notice, privacy policy and “Manage my cookies”, on every page. The policy says which data you collect, why, for how long, and how to exercise one’s rights.',
        pitfall: 'A single “Legal notice” page that hides the privacy policy without saying so in the link.',
      },
      {
        title: 'Clean up, then check in the browser',
        text: 'Remove the pixels of finished campaigns and forgotten trials, then open the website in a private window: before any click on the banner, the developer tools (F12, “Application” tab, “Cookies”) must show no measurement or advertising cookie.',
        pitfall: 'Testing in a browser where you already accepted: your old choice hides the problem.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Cookies and GDPR on your website: your questions',
    questions: [
      {
        question: 'Is a cookie banner mandatory?',
        answer:
          'Not always. You need one as soon as the website places or reads trackers that require consent: advertising, social network buttons and videos, session recording, statistics that do not meet the exemption conditions. A website that only uses essential trackers (cart, login, language choice, memory of the cookie choice) or an exempt audience measurement does not need one; for audience measurement, the CNIL still recommends informing visitors, for example in the privacy policy.',
      },
      {
        question: 'Can I use Google Analytics without a banner?',
        answer:
          'Only if it meets every condition of the exemption: audience measurement for your account alone, anonymous statistics, no cross-referencing or passing on to third parties. The CNIL states that the offers whose provider says it reuses the data for its own account do not benefit from it, unless that reuse can be switched off. Until you have checked it in Google’s terms, the safest is to load Google Analytics after the visitor agrees, or to switch to a tool configured for the exemption.',
      },
      {
        question: 'Can Matomo do without consent?',
        answer:
          'Yes, if it is set up for it. The CNIL publishes on its website a configuration guide of Matomo Analytics for the exemption: data exports switched off, a way for visitors to refuse being tracked, anonymised IP addresses, no third-party cookies or cross-domain tracking, no User ID, heatmaps and session recordings switched off, no personal data collected. The test sees Matomo, not its settings: it therefore rates it “to check”.',
      },
      {
        question: 'What fines for cookies placed without consent?',
        answer:
          'The CNIL publishes its sanctions. The best known target large groups (€325 million on 1 September 2025 for an online services company, €150 million the same day for a clothing retailer), but it also fines small organisations through a simplified procedure: €4,000 on 4 November 2025 for a consultancy serving underwater sports clubs, €2,000 and an injunction on 18 December 2025 for a travel agency, €15,000 and an injunction on 26 March 2026 for a ticketing company (with other breaches).',
      },
      {
        question: 'Are a legal notice and a privacy policy mandatory?',
        answer:
          'Yes, in France. A business website, sole traders included, must show its identity, its address, its registration and its host: up to €75,000 fine for a sole proprietorship and €375,000 for a company. As soon as it collects data, it must also say which data, why, for how long and how to exercise one’s rights, in a privacy policy reachable from every page through a clearly visible link.',
      },
      {
        question: 'My WordPress site has a cookie plugin: am I compliant?',
        answer:
          'Not necessarily. The plugin (Complianz, CookieYes, Cookiebot, tarteaucitron…) must block the scripts until the choice, including those placed by the theme or other plugins: Site Kit or MonsterInsights for Google Analytics, the reCAPTCHA of a contact form, a YouTube video in a page builder. Optimisers such as WP Rocket or LiteSpeed Cache delay some scripts until the visitor’s first move, which is not consent. The test shows what leaves before the choice.',
      },
      {
        question: 'Is a YouTube video or a Google Maps map a problem?',
        answer:
          'Yes, if it loads with the page. The CNIL asks that embedded content place no tracker subject to consent before the visitor agrees; the click on the video can be used to ask for that consent. YouTube’s privacy-enhanced mode (youtube-nocookie.com) prevents, according to Google, the videos watched from personalising YouTube and the ads, but Google does not say that nothing is stored: the test rates it “to check”.',
      },
      {
        question: 'Is a “Reject all” button mandatory?',
        answer:
          'The rule is that refusing must be as easy as accepting. To get there, the CNIL recommends a “Reject all” button at the same level and with the same look as “Accept all”. Going on browsing or scrolling the page is never consent. On 31 December 2021, the CNIL fined two large platforms (€150 million and €60 million) over the way they let users refuse cookies.',
      },
      {
        question: 'What exactly does this test check, and what can it not see?',
        answer:
          'It reads the HTML of the home page once, like a robot, without running the JavaScript. It recognises the most common trackers (Google Analytics, Google Tag Manager, Google Ads, Meta pixel, Hotjar, Microsoft Clarity, LinkedIn, TikTok, Pinterest, Matomo, YouTube, Google Maps, reCAPTCHA), the most widespread consent tools, and looks for three links: legal notice, privacy, cookie settings. It cannot see what Google Tag Manager or a script loads afterwards, nor the other pages of the website, nor the content of your legal pages. It does not replace an audit or legal advice.',
      },
      {
        question: 'Does the test store my website address?',
        answer:
          'Yes, for statistics only: the address of the website tested, the verdict, the trackers recognised and the consent tool found are kept for twelve months, to measure for example the share of websites that load Google Analytics without consent. They are never used to prospect and never published website by website. The address is not sent to PostHog, this website’s analytics tool. Your e-mail is only asked if you want to receive the result; it is only kept if you agree to be contacted.',
      },
    ],
  },
  contactCta: {
    title: 'Would you rather I brought your website into line?',
    description:
      'Send me the address. I reply within 24 hours with what I see: the trackers to block, the consent tool to install or set up, the legal pages to complete, and a firm price if you want me to handle it.',
    button: 'Send my website',
    healthCheckLabel: 'Test my website: 8 checks',
  },
}
