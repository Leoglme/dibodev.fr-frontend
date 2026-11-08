import type { DibodevWebsiteHealthCheckPageContent } from '~/core/types/DibodevWebsiteHealthCheckPage'

export const WEBSITE_HEALTH_CHECK_PAGE_EN: DibodevWebsiteHealthCheckPageContent = {
  meta: {
    title: 'Test my website: 8 free checks in ten seconds',
    description:
      'Enter your website address: HTTPS, PHP, WordPress, e-mails, phone display, title, legal notice and signs of age checked in ten seconds, with what to do.',
    inLanguage: 'en-US',
    schemaAbout: 'Website health check: security, updates, phone display and French legal obligations',
  },
  breadcrumbLabel: 'Test my website',
  shareImage: {
    titleLines: ['Test my website:', '8 free checks'],
    highlight: '8 free checks',
    subtitle: 'HTTPS, PHP, WordPress, e-mails, phone, title, legal notice, signs of age',
    badge: 'Free, no sign-up',
    alt: 'Test my website: 8 free checks by Dibodev',
  },
  hero: {
    titleBefore: 'Test my website: ',
    titleHighlight: '8 free checks',
    titleAfter: ', in ten seconds',
    reassurances: ['Free, no sign-up', 'Nothing to install', 'Result in ten seconds'],
    description:
      'A showcase website ages without warning: a missing certificate, a PHP version without its fix, a closed WordPress extension, e-mails landing in spam, a page that displays badly on a phone, a footer still saying 2019. This tool reads the home page of your website as a visitor would and answers eight questions, each with a verdict, what it means and what to do. The three most technical points (PHP, WordPress, e-mails) link to a detailed checker. Built for French businesses, it works on any public website.',
    authorIntro: 'Tool built by',
    authorBio:
      'freelance developer near Rennes, France. I update, secure and rebuild showcase websites for small businesses, remotely, and I reply within 24 hours.',
  },
  checker: {
    siteLabel: 'Your website address',
    sitePlaceholder: 'mybusiness.fr',
    siteHint:
      'A domain name is enough. One page is read, as a browser would, plus a few public files for WordPress and the DNS records of the domain for e-mails: nothing is scanned. Only the website address and its result are kept, for statistics.',
    submit: 'Test my website',
    checking: 'Checking…',
    resultLabel: 'Your result',
    idleTitle: 'Enter your website address to start',
    idleText:
      'Eight verdicts in ten seconds: HTTPS, PHP, WordPress, e-mails, phone display, title and description, legal notice, signs of an ageing website.',
    loadingTitle: 'Reading the home page…',
    loadingText:
      'I read the page, the server headers and the DNS records of the domain, then run the PHP, WordPress and e-mail checkers. Ten to twenty seconds.',
    errorTitles: {
      invalid: 'Address to correct',
      unreachable: 'Website unreachable',
      rateLimited: 'Too many checks',
      failed: 'Check impossible',
    },
    errorTexts: {
      invalid: 'Enter a public domain name, like mybusiness.fr, without spaces or an internal address.',
      unreachable:
        'I could not read the home page of {host}: wrong address, website offline, or a server that refuses robots. Try with www in front, or without.',
      rateLimited: 'You have run many checks in a short time. Try again in a few minutes.',
      failed: 'Something went wrong on my side. Try again in a moment, or write to me with the website address.',
    },
    overallTitles: {
      healthy: '{host}: nothing urgent',
      needsAttention: '{host}: points to review',
      atRisk: '{host}: at least one critical point',
    },
    overallTexts: {
      healthy:
        'The eight points read from outside are fine or not applicable. This is not a full audit, but your website shows none of the most common signs of a site left behind.',
      needsAttention:
        'Nothing endangers the website today, but one or several points deserve a fix within the month. The details and the steps are below.',
      atRisk:
        'At least one point exposes the website, its visitors or your reputation. Start with the lines marked "to fix"; each one says what to do.',
    },
    checksTitle: 'The eight checks',
    checkLabels: {
      https: 'HTTPS',
      php: 'PHP',
      wordpress: 'WordPress',
      email: 'Domain e-mails',
      mobile: 'Phone display',
      seoTags: 'Title and description',
      legalNotice: 'Legal notice',
      aging: 'Signs of an ageing website',
    },
    verdictLabels: {
      ok: 'OK',
      warning: 'To watch',
      critical: 'To fix',
      unknown: 'Not verifiable',
    },
    detailTexts: {
      httpsRedirects: 'The website is served over HTTPS and the http address redirects to the secure version.',
      httpsNoRedirect:
        'The website is served over HTTPS, but the http address still shows a page in clear: a visitor who types the address without "https" is not redirected.',
      httpsNoHttpAnswer:
        'The website is served over HTTPS; the http address does not answer, browsers go straight to the secure version.',
      httpOnly: 'The website is not served over HTTPS: browsers show it as "not secure" and Google ranks it lower.',
      phpUnpatched:
        'The website announces PHP {phpVersion}, a version without the fix for the vulnerabilities of 21 October 2026 (fixed in {fixedVersion}).',
      phpEndOfLife: 'The website announces PHP {phpVersion}, a branch that no longer receives any security fix.',
      phpPatched:
        'The website announces a PHP version that received the fix for the vulnerabilities of 21 October 2026.',
      phpHidden:
        'The website runs on PHP, but the server does not say which version: the fix cannot be confirmed from outside.',
      phpNotPhp: 'The website does not run on PHP: the PHP vulnerabilities do not apply.',
      phpUnknown: 'I could not read what the server announces.',
      wordpressClean:
        'The website is a WordPress: core up to date as far as can be seen from outside, no vulnerable extension nor sign of injection.',
      wordpressOutdatedCore:
        'The website is a WordPress in version {coreVersion}, while the current version is {latestCoreVersion}.',
      wordpressVulnerablePlugin:
        'The website is a WordPress with an extension known for an unfixed vulnerability: {plugin}.',
      wordpressClosedPlugin:
        'The website is a WordPress with an extension closed by WordPress.org for a security issue: {plugin}.',
      wordpressSuspicious:
        'The website is a WordPress and its home page shows signs of hacking (hidden links, redirection, injected content).',
      wordpressNotWordPress: 'The website is not a WordPress: nothing to check here.',
      wordpressUnknown: 'The website is a WordPress, but its public files could not be read.',
      emailAllGood:
        'The domain {domain} has an SPF record, a DKIM key and a DMARC policy that protects the e-mails sent in its name.',
      emailDmarcMissing:
        'The domain {domain} has an SPF record and a DKIM key, but no DMARC policy: Orange, Gmail and Outlook now require it.',
      emailDmarcNone: 'The domain {domain} has a DMARC policy in "none" mode: it observes but protects nothing.',
      emailDkimNotFound: 'The domain {domain} has an SPF record, but no DKIM key was found on the usual selectors.',
      emailSpfMissing:
        'The domain {domain} has no SPF record: anyone can send e-mails in its name, and yours land in spam.',
      emailSpfTooPermissive: 'The SPF record of {domain} allows everyone ("+all"): it protects nothing.',
      emailSpfTooManyLookups:
        'The SPF record of {domain} exceeds the ten allowed lookups: receiving servers ignore it.',
      emailMultipleSpf: 'The domain {domain} has several SPF records: receiving servers reject them all.',
      emailNoMailSetup: 'No receiving server is declared for {domain}: this domain neither sends nor receives e-mails.',
      emailUnknown: 'The DNS records of the domain could not be read.',
      viewportPresent: 'The page declares the viewport tag, the one that fits the display to the width of a phone.',
      viewportMissing:
        'The page does not declare the viewport tag: on a phone, it displays like a shrunken desktop screen, unreadable without zooming.',
      seoTagsGood:
        'The home page has a title of {titleLength} characters and a description of {descriptionLength} characters, lengths Google shows whole.',
      titleMissing: "The home page has no title: that is Google's blue line, and the name of the tab.",
      titleTooShort:
        'The title of the home page is {titleLength} characters long: too short to say what you do and where.',
      titleTooLong: 'The title of the home page is {titleLength} characters long: Google cuts it around 60.',
      descriptionMissing: 'The home page has no meta description: Google makes one up from the text of the page.',
      descriptionTooShort:
        'The description of the home page is {descriptionLength} characters long: too short to make anyone click.',
      descriptionTooLong:
        'The description of the home page is {descriptionLength} characters long: Google cuts it around 160.',
      legalNoticeLinkFound: 'The home page has a link to the legal notice.',
      legalNoticeLinkMissing:
        'No link to a legal notice on the home page: the French law on confidence in the digital economy requires one on every business website.',
      agingNone: 'None of the common signs of a website left behind was seen on the home page.',
      agingOldCopyright: 'The footer shows a {year} copyright: the most visible sign of a website nobody touches.',
      agingOldJquery:
        'The page loads jQuery {jqueryVersion}: branches 1 and 2 have known vulnerabilities and have not been fixed since 2016.',
      agingFlash: 'The page still loads Flash: no browser has displayed it since 2021.',
      agingOldGenerator: 'The page was produced by "{generator}", a tool or a version nobody maintains any more.',
    },
    adviceLabel: 'What to do:',
    adviceTexts: {
      httpsNoRedirect:
        'ask your host or your provider for a permanent redirection from http to https (one line in the server configuration).',
      httpOnly:
        "enable an SSL certificate at your host (free at most of them, Let's Encrypt), then force the redirection to https.",
      phpUnpatched: "change the PHP version in the host's client area, today, after a backup.",
      phpEndOfLife:
        'move to a branch still maintained (8.2 at least, 8.3 or 8.4 preferably), after a test on a copy of the site.',
      phpHidden: 'ask your host in writing for the PHP version served and the date of the fix.',
      phpUnknown: "try again in a moment, or check the version in the host's client area.",
      wordpressOutdatedCore: 'update WordPress from the dashboard, after a full backup.',
      wordpressVulnerablePlugin: 'update or deactivate the extension today, then check the administrator accounts.',
      wordpressClosedPlugin: 'deactivate and delete the extension, replace it with a maintained one.',
      wordpressSuspicious: 'restore a clean backup or have the site cleaned, change every password, then update.',
      wordpressUnknown:
        'run the detailed WordPress check again, or check from the dashboard that the core and the extensions are up to date.',
      emailDmarcMissing: 'add a DMARC record at your registrar, starting with "p=none" and a reporting address.',
      emailDmarcNone: 'move the DMARC policy to "quarantine" then "reject" once the reports are clean.',
      emailDkimNotFound: 'enable DKIM signing at your mail provider and publish its key in the DNS.',
      emailSpfMissing: 'publish an SPF record that allows your mail provider, and it alone.',
      emailSpfTooPermissive: 'replace "+all" with "~all" or "-all" at the end of the SPF record.',
      emailSpfTooManyLookups: 'simplify the SPF record: remove the services you no longer use.',
      emailMultipleSpf: 'merge the SPF records into one.',
      emailNoMailSetup: 'nothing, if you send no e-mail from this domain; otherwise, declare your mail provider.',
      emailUnknown: 'try again in a moment, or run the detailed e-mail checker.',
      viewportMissing: 'add the viewport tag in the head of every page, or rebuild the site on a phone-friendly base.',
      titleMissing: 'write a title of 30 to 60 characters with your trade and your town.',
      titleTooShort: 'complete the title with your trade and your town, within 60 characters.',
      titleTooLong: 'shorten the title to 60 characters, the essential first.',
      descriptionMissing: 'write a description of 120 to 160 characters that says what you do, for whom and where.',
      descriptionTooShort: 'lengthen the description to at least 120 characters.',
      descriptionTooLong: 'shorten the description to 160 characters.',
      legalNoticeLinkMissing:
        'publish a legal notice page (identity, address, registration number, host) and link it from the footer.',
      agingOldCopyright: 'update the year, then check that the rest of the site (texts, hours, prices) is still true.',
      agingOldJquery: 'move the site to jQuery 3, or rebuild it on a modern base.',
      agingFlash: 'remove the Flash content and replace it with a standard video or animation.',
      agingOldGenerator: 'migrate the site to a maintained tool, or rebuild it.',
    },
    detailedToolLabels: {
      php: 'Open the detailed PHP checker',
      wordpress: 'Open the detailed WordPress checker',
      email: 'Open the e-mail checker (SPF, DKIM, DMARC)',
    },
    disclaimer:
      'Read from outside, on the home page and the domain. An "OK" point does not guarantee the absence of a problem elsewhere on the site; a "to fix" point deserves confirmation before changing anything.',
    idleCtaIntro: 'Would you rather I look myself, for free, within 24 hours?',
    idleCtaLabel: 'Get my written opinion',
    ctaIntro: 'Need help to fix, update or rebuild the website?',
    ctaLabels: {
      healthy: 'Talk about my website',
      needsAttention: 'Have these points fixed',
      atRisk: 'Have my website secured',
    },
    gdprCookieCheckLinkLabel: 'Also check the cookies and trackers: is my website GDPR compliant?',
  },
  checks: {
    anchorId: 'checks',
    eyebrow: 'What the tool checks',
    title: 'Eight points, read as a visitor would see them',
    intro:
      'Nothing is scanned: one page, a few public files for WordPress and the DNS records of the domain. Here is what each point looks at, and why it matters.',
    items: [
      {
        title: '1. HTTPS',
        description:
          'Is the website served over HTTPS, and does the http address redirect to the secure version? Without that, browsers show "not secure" and Google ranks the page lower.',
      },
      {
        title: '2. PHP',
        description:
          'Did the PHP version announced by the server receive the fix for the vulnerabilities of 21 October 2026? Same verdict as the PHP checker, with a link to it.',
      },
      {
        title: '3. WordPress',
        description:
          'If the website is a WordPress: core up to date, closed or vulnerable extensions, signs of injection. Otherwise, the point does not apply.',
      },
      {
        title: '4. Domain e-mails',
        description:
          'SPF record, DKIM key and DMARC policy of the domain, read in the DNS. Without the three, e-mails sent in your name land in spam at Orange, Gmail and Outlook.',
      },
      {
        title: '5. Phone display',
        description:
          'Is the viewport tag declared? Without it, a phone displays the page like a shrunken desktop screen.',
      },
      {
        title: '6. Title and description',
        description:
          'Does the home page have a title and a description, of reasonable length? They are the two lines of your Google result.',
      },
      {
        title: '7. Legal notice',
        description:
          'Is a link to a legal notice page present? The French law on confidence in the digital economy requires one on every business website.',
      },
      {
        title: '8. Signs of an ageing website',
        description:
          'Copyright year before 2024, jQuery 1 or 2, Flash, abandoned generator: the signs a visitor and Google read as "nobody looks after this any more".',
      },
    ],
  },
  priceTeaser: {
    emphasizedIntro: 'Your website has aged and you wonder what a new one costs?',
    text: 'The barometer compiles the prices displayed by twenty French freelancers, agencies, website builders and price guides, recorded the same day, with the medians by website size.',
    linkLabel: 'See website prices in France in 2026',
  },
  method: {
    eyebrow: 'Method',
    title: 'How the test is made',
    intro:
      'The same gesture as a visitor, plus three checkers I had already written for the PHP vulnerabilities, hacked WordPress sites and e-mails in spam.',
    steps: [
      {
        label: 'Reading',
        title: 'One page, like a browser',
        description:
          'The server reads the home page over HTTPS then http, follows redirections to public addresses and stops at the first 400 KB. Internal and private addresses are refused.',
      },
      {
        label: 'Tags',
        title: 'What the page says about itself',
        description:
          'Viewport, title, description, footer links, copyright year, loaded libraries, generator tag: everything comes from the code of the page, nothing is guessed.',
      },
      {
        label: 'Checkers',
        title: 'PHP, WordPress and e-mails in parallel',
        description:
          'The three existing checkers run with their own rules; their verdict is brought back to four levels. The WordPress point only runs when the page shows WordPress markers.',
      },
      {
        label: 'Verdict',
        title: 'Three levels, then what to do',
        description:
          'A critical point puts the website "at risk", a point to watch puts it "to review", otherwise "nothing urgent". Each line says what it means and what to do. The result is cached for ten minutes, nothing else is stored.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Testing your website: your questions',
    questions: [
      {
        question: 'How do I know whether my website is up to date?',
        answer:
          'Three signs can be read from outside: the PHP version announced by the server, the version of WordPress and its extensions, and the libraries loaded by the page (jQuery, for instance). The tool reads them in ten seconds. For the rest (theme, extensions not visible), log in to the dashboard of your site: pending updates are listed there.',
      },
      {
        question: 'Is my website secure?',
        answer:
          'From outside, one can check HTTPS, the PHP fix, the WordPress extensions known for a vulnerability and the signs of hacking on the home page. That is what the tool does. It does not replace an audit: it says whether your website shows the vulnerabilities most exploited in 2026, the ones that took French government websites offline in October.',
      },
      {
        question: 'Why does my website not show up on Google?',
        answer:
          'The most frequent causes are in the test: no HTTPS, no title or a title that says neither the trade nor the town, no description, a page unreadable on a phone, a website Google reads as abandoned. If everything is green, the cause is elsewhere: too few pages, no Google Business listing, or a website too recent.',
      },
      {
        question: 'What exactly does the tool check?',
        answer:
          'Eight points: HTTPS and redirection, PHP version and the October 2026 fix, WordPress up to date and closed extensions, SPF, DKIM and DMARC of the domain, viewport tag, title and description of the home page, link to the legal notice, and signs of an ageing website (copyright before 2024, jQuery 1 or 2, Flash, abandoned generator).',
      },
      {
        question: 'My website has no HTTPS, is it serious?',
        answer:
          'Yes, and it is the simplest point to fix. Without HTTPS, Chrome and Safari show "not secure" next to your address, which your visitors read as "dubious site", and Google has favoured secure sites since 2014. The certificate is free at almost every host (Let\'s Encrypt) and takes a few clicks to enable.',
      },
      {
        question: 'Is a legal notice mandatory on a small website in France?',
        answer:
          'Yes. The French law on confidence in the digital economy (2004) requires every business website to show the identity of the publisher, its address, its registration number and the name of the host. The fine can reach €75,000 for an individual. One page and a link in the footer are enough.',
      },
      {
        question: 'Does the tool store my website or my data?',
        answer:
          'Yes, for statistics only: the address of the website tested and its verdicts are kept for twelve months, to measure for example the share of websites without HTTPS. They are never used to prospect and never published website by website. The address is not sent to PostHog, the analytics tool of the site. Your e-mail is only asked if you want to receive the result; it is only kept if you agree to be contacted.',
      },
      {
        question: 'My website has aged: fix it or rebuild it?',
        answer:
          "One or two red points are fixed in an hour at the host. When the website piles up several signs of age (no viewport, jQuery 1, 2018 copyright, PHP without its fix), rebuilding it often costs less than patching it: a custom showcase website starts at €1,500 with me, and this page's barometer gives the market prices in France.",
      },
    ],
  },
  relatedArticles: {
    title: 'To go further',
    intro:
      'The guides that detail the PHP update, the checks of a WordPress site and what a website must do for a tradesperson.',
  },
  contactCta: {
    title: 'Would you rather I look at your website myself?',
    description:
      'Send me the address. I reply within 24 hours with a written, free opinion: what is urgent, what can wait, and a firm price if you want me to take care of it.',
    button: 'Send my website',
  },
}
