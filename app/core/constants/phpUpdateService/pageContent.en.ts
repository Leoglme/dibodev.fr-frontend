import type { DibodevPhpUpdateServicePageContent } from '~/core/types/DibodevPhpUpdateServicePage'

export const PHP_UPDATE_SERVICE_PAGE_EN: DibodevPhpUpdateServicePageContent = {
  meta: {
    title: 'PHP Update for Your Website or Software: Done Within 24 h',
    description:
      'I update PHP and your WordPress, PrestaShop site or business software remotely, after a backup. Free diagnosis, from €190, reply within 24 hours.',
    serviceName: 'PHP update for websites, online stores and business software',
  },
  breadcrumbLabel: 'PHP update',
  shareImage: {
    titleLines: ['PHP update', 'for your website or software'],
    highlight: 'From €190, reply within 24 h',
    subtitle: 'Backup, test on a copy, written report',
    badge: 'Remote work',
    alt: 'PHP update for your website or software: remote work from €190, reply within 24 hours',
  },
  hero: {
    titlePart1: 'PHP update for your website, store or software: ',
    titleHighlight1: 'remote work',
    titlePart2: ' within 24 h',
    description:
      'Your host says “no action required”, your provider does not answer, or your site is still on PHP 8.1 or older with no fix to receive. I handle it remotely: free diagnosis within 24 hours, backup, test on a copy, update, written report. Prices are announced up front.',
    ctaText: 'Send my address',
    secondaryCtaText: 'See the prices',
    reassurances: ['Reply within 24 h', 'Backup first', 'Fixed prices, announced up front'],
  },
  offers: {
    anchorId: 'prices',
    eyebrow: 'Offers and prices',
    title: 'Four packages, a price known before starting',
    intro:
      'The diagnosis is free and without commitment. Then a fixed price depending on what has to be updated, not an hourly rate that drifts.',
    cards: [
      {
        title: 'Diagnosis',
        price: 'Free',
        description:
          'You send me the address of the site. Within 24 hours I tell you in writing whether it is affected by the 21 October 2026 vulnerability, which PHP version it serves and what to do. No commitment.',
        isHighlighted: false,
      },
      {
        title: 'WordPress showcase site',
        price: '€190',
        description:
          'Backup outside the server, test on a copy, PHP version change at the host, WordPress, theme and plugin updates, fix check, test of the home page and the admin, written report.',
        isHighlighted: true,
      },
      {
        title: 'Online store or heavy site',
        price: '€390',
        description:
          'The whole showcase package, plus the many plugins, the payment and shipping modules, a test order and the forms, and the repair when a plugin breaks along the way.',
        isHighlighted: false,
      },
      {
        title: 'Business software, intranet, application',
        price: 'From €690',
        description:
          'Audit of the code and dependencies, PHP and framework upgrade (Laravel, Symfony or custom), tests on a copy, assisted release. Quote within 48 hours after a call.',
        isHighlighted: false,
      },
    ],
    notes: [
      'Follow-up: monthly updates and monitoring for €100 a month, no minimum term.',
      'Net prices, VAT not applicable (French art. 293 B). Remote work, anywhere in France and Europe.',
    ],
    ctaLabel: 'Send my address',
    highlightLabel: 'Most requested',
    toolLinkText: 'Check my site for free first',
  },
  included: {
    anchorId: 'included',
    eyebrow: 'In every job',
    title: 'What is included, whatever the package',
    intro: 'The same precautions for a showcase site and for a store, because that is where updates go wrong.',
    items: [
      {
        title: 'Backup outside the server',
        description: 'Files and database copied somewhere else than the hosting before anything is touched.',
      },
      {
        title: 'Test on a copy',
        description: 'The new PHP version is first tried on a copy of the site, never directly in production.',
      },
      {
        title: 'Rollback possible',
        description:
          'If a plugin breaks and cannot be replaced the same day, the site goes back to its previous state.',
      },
      {
        title: 'Fix verified',
        description: 'The version served is checked after the work: 8.2.35, 8.3.36, 8.4.27 or 8.5.12 at least.',
      },
      {
        title: 'Written report',
        description: 'What was done, what was updated, what remains to watch, in plain language.',
      },
      {
        title: 'No unannounced downtime',
        description: 'The site stays online during preparation. If a switch needs a minute of downtime, you are told.',
      },
    ],
  },
  audiences: {
    anchorId: 'for-whom',
    eyebrow: 'For whom',
    title: 'Sites, stores, software and hosts covered',
    intro: 'Everything that runs on PHP, at any host that lets you choose the version.',
    items: [
      {
        title: 'WordPress and WooCommerce',
        description: 'Themes and plugins updated along with PHP, and an old plugin replaced when it blocks.',
      },
      {
        title: 'PrestaShop, Magento, Joomla, Drupal',
        description: 'PHP upgrade compatible with the CMS version, payment modules tested.',
      },
      {
        title: 'Business software, intranet, extranet',
        description: 'Laravel, Symfony or custom-built applications, with a dependency audit before the upgrade.',
      },
      {
        title: 'Shared hosting or server',
        description: 'OVHcloud, o2switch, IONOS, Hostinger, Infomaniak, PlanetHoster, VPS or dedicated server.',
      },
    ],
  },
  method: {
    eyebrow: 'How it goes',
    title: 'Five steps, from your message to the report',
    intro:
      'Nothing to install on your side. Access to the hosting is enough, and you take it back at the end if you wish.',
    steps: [
      {
        label: 'Address',
        title: 'You send me the address of the site',
        description: 'Through the form, with your host if you know it. Otherwise I find it.',
      },
      {
        label: 'Diagnosis',
        title: 'Written answer within 24 h',
        description: 'PHP version served, platform, host, and the right package. Free, no commitment.',
      },
      {
        label: 'Preparation',
        title: 'Backup and copy of the site',
        description: 'Everything is copied outside the server, then the new version is tested on a copy.',
      },
      {
        label: 'Update',
        title: 'Version change and checks',
        description: 'PHP, the CMS, the theme and the plugins, then the fix and the key pages are verified.',
      },
      {
        label: 'Report',
        title: 'What was done, in writing',
        description: 'And what to keep an eye on. The invoice comes after, not before.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Before you write',
    questions: [
      {
        question: 'My host says no action is required. Why do anything?',
        answer:
          'Because that message holds for the PHP branches the PHP project still fixes, 8.2 to 8.5. A site left on PHP 8.1, 8.0 or 7.4 has no fixed version to receive, at any host, except Infomaniak which backports an in-house fix. The free diagnosis tells you within 24 hours which case you are in.',
      },
      {
        question: 'How long does the work take?',
        answer:
          'One to two hours for a showcase site, half a day for a store with many modules, and a quote after an audit for business software. Preparation happens without taking the site down.',
      },
      {
        question: 'Will my site go down?',
        answer:
          'Not during preparation and tests, which happen on a copy. The version change itself takes a few minutes at most hosts, and you are told the time.',
      },
      {
        question: 'What if a plugin or theme breaks?',
        answer:
          'That is exactly what the test on a copy reveals before production. A broken plugin is updated, replaced by an equivalent or, if nothing is possible the same day, the site goes back to its previous state and we decide together what comes next.',
      },
      {
        question: 'Which hosts do you work with?',
        answer:
          'Every host that lets you choose the PHP version: OVHcloud, o2switch, IONOS, Hostinger, Infomaniak, PlanetHoster, LWS, Gandi, and VPS or dedicated servers. Step-by-step guides for each are on this site if you prefer to do it yourself.',
      },
      {
        question: 'I do not know my PHP version or my host.',
        answer:
          'Not a problem. The free check tool reads the version when the server shows it and recognises the host, and the diagnosis does the rest. All you need is the address of the site.',
      },
      {
        question: 'Do you also update WordPress, the theme and the plugins?',
        answer:
          'Yes, it is included in the showcase and store packages. Changing PHP without updating the rest is the best way to break a site, and the opposite does not protect from the vulnerability.',
      },
      {
        question: 'How does payment work?',
        answer:
          'A free diagnosis, a price announced before the work, then an invoice afterwards, paid by bank transfer. Net prices, VAT not applicable. No subscription imposed: the monthly follow-up is an option you can cancel whenever you want.',
      },
    ],
  },
  relatedArticles: {
    title: 'To do it yourself, or understand what is going on',
    intro: 'The 21 October 2026 vulnerability explained, and the step by step at each host.',
  },
  contactCta: {
    title: 'Send me the address of your site',
    description: 'Free diagnosis within 24 hours, then a fixed price announced before any work.',
    button: 'Send my address',
  },
  mobileContactBar: {
    text: 'Need an update?',
    buttonLabel: 'Send my address',
  },
}
