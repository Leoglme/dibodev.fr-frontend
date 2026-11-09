import type { DibodevUpdateServicePageContent } from '~/core/types/DibodevUpdateServicePage'

export const JOOMLA_UPDATE_SERVICE_PAGE_EN: DibodevUpdateServicePageContent = {
  meta: {
    title: 'Joomla 6 and PHP 8.3 Update for Your Website: From €190',
    description:
      'I move your Joomla 3, 4 or 5 website to Joomla 6 and PHP 8.3, remotely, with the same design and working forms. Free diagnosis within 24 hours, from €190.',
    serviceName: 'Joomla website updates to Joomla 6 and PHP 8.3',
  },
  breadcrumbLabel: 'Joomla update',
  shareImage: {
    titleLines: ['Joomla 6 and PHP 8.3', 'update for your website'],
    highlight: 'From €190, free diagnosis',
    subtitle: 'Backup, test on a copy, same design',
    badge: 'Remote work',
    alt: 'Joomla 6 and PHP 8.3 update for your website: remote work from €190, free diagnosis',
  },
  hero: {
    titlePart1: 'Joomla update: your website moves to Joomla 6 and PHP 8.3, ',
    titleHighlight1: 'with the same design',
    titlePart2: '',
    description:
      'Joomla 3 and 4 no longer receive fixes, Joomla 5 ends in October 2027 and PHP 8.2 on 31 December 2026. I update your website remotely: backup, test on a copy, Joomla 6 and PHP 8.3, then a written report. Your website keeps its design, its content and its forms.',
    ctaText: 'Send my website link',
    secondaryCtaText: 'See the prices',
    reassurances: ['Free diagnosis within 24 h', 'Same design', 'Price announced before any work'],
  },
  offers: {
    anchorId: 'prices',
    eyebrow: 'Offers and prices',
    title: 'A price announced before any work',
    intro:
      'The diagnosis is free and without commitment. A simple version upgrade is billed at the base package; the price only goes up when the template has to be adapted, extensions replaced or a security problem fixed, and you know it before I touch the site.',
    cards: [
      {
        title: 'Diagnosis',
        price: 'Free',
        description:
          'You send me the link to the site. Within 24 hours I tell you in writing which Joomla and PHP versions it runs, what may block the move to Joomla 6 and the right package. No commitment.',
        isHighlighted: false,
      },
      {
        title: 'Simple version upgrade',
        price: '€190',
        description:
          'A Joomla 4 or 5 website whose template and extensions support Joomla 6: backup outside the server, test on a copy, latest Joomla 5 release, PHP 8.3 then Joomla 6, extensions updated, pages and forms checked, written report.',
        isHighlighted: true,
      },
      {
        title: 'Template, extensions or security to rework',
        price: '€390',
        description:
          'The whole base package, plus the adaptation of a custom-made template, the replacement of the extensions that block (form, gallery, editor) or the clean-up after a known vulnerability: suspicious accounts removed, patched version.',
        isHighlighted: false,
      },
    ],
    notes: [
      'Joomla 3 or a website to rebuild: the move takes several steps (3.10, 4.4, 5.4, then 6) or a transfer of the content into a fresh Joomla 6. The price is announced after the free diagnosis, before any work.',
      'Maintenance: monthly updates and monitoring for €100 a month, with no minimum term.',
      'Net prices, VAT not applicable (art. 293 B of the French tax code). Remote work, anywhere in France and Europe.',
    ],
    ctaLabel: 'Send my website link',
    highlightLabel: 'Base package',
    toolLinkText: 'First check the Joomla version of my site',
  },
  included: {
    anchorId: 'included',
    eyebrow: 'In every job',
    title: 'What is included, whatever the package',
    intro:
      'The precautions that keep a Joomla update from going wrong, for a ten-page website as well as for a thousand-page one.',
    items: [
      {
        title: 'Full backup first',
        description: 'Files and database, in a backup that can be restored, kept outside the server.',
      },
      {
        title: 'Test on a copy',
        description: 'Joomla 6 and PHP 8.3 are first installed on a copy of the site, never directly on the live site.',
      },
      {
        title: 'Same design',
        description: 'Same template, same menus, same content, same page addresses.',
      },
      {
        title: 'Forms checked',
        description: 'Contact, appointment booking, sign-up: every form displays and sends after the update.',
      },
      {
        title: 'Rollback possible',
        description:
          'If an extension blocks and cannot be replaced the same day, the site goes back to how it was before.',
      },
      {
        title: 'Written report',
        description: 'Versions before and after, what was changed, where the backups are, in plain language.',
      },
    ],
  },
  audiences: {
    anchorId: 'websites-concerned',
    eyebrow: 'Websites concerned',
    title: 'Joomla 3, 4 or 5, at any host',
    intro: 'From the simplest to the longest, depending on the starting version.',
    items: [
      {
        title: 'Joomla 5',
        description:
          'Security fixes until 12 October 2027. The move to Joomla 6 is made with PHP 8.3, in the same job.',
      },
      {
        title: 'Joomla 4',
        description:
          'No fixes at all since 14 October 2025. The site goes through Joomla 5.4, then Joomla 6, on the same test copy.',
      },
      {
        title: 'Joomla 3',
        description:
          'No fixes at all since 17 August 2023. An update in several steps, or a transfer of the content into a fresh Joomla 6 when that is shorter.',
      },
      {
        title: 'Custom-made template',
        description:
          'A template designed for Joomla 2.5 or 3 is checked on the copy, then adapted without touching the look of the site.',
      },
      {
        title: 'Forms and extensions',
        description:
          'ChronoForms, JCE, Akeeba Backup, AcyMailing, 4SEF: updated one by one, or replaced when their publisher has disappeared.',
      },
      {
        title: 'Shared hosting or server',
        description: 'OVHcloud, o2switch, IONOS, Hostinger, Infomaniak, PlanetHoster, Plesk or cPanel servers.',
      },
    ],
  },
  method: {
    eyebrow: 'How it goes',
    title: 'Five steps, from your message to the report',
    intro:
      'Nothing to install on your side. A Joomla administrator account and access to the hosting are enough, and you remove them at the end.',
    steps: [
      {
        label: 'Link',
        title: 'You send me the link to the site',
        description:
          'Through the form, with your Joomla version and your host if you know them. Otherwise I find them.',
      },
      {
        label: 'Diagnosis',
        title: 'Written answer within 24 h',
        description:
          'Joomla and PHP versions, template, extensions that may block, and the right package. Free, no commitment.',
      },
      {
        label: 'Preparation',
        title: 'Backup and test copy',
        description: 'Everything is backed up, then the update is made and checked on a copy of the site.',
      },
      {
        label: 'Update',
        title: 'Joomla 6 and PHP 8.3 live',
        description:
          'The same sequence of operations on the live site, at the agreed time, with a fresh backup just before.',
      },
      {
        label: 'Report',
        title: 'What was done, in writing',
        description: 'Versions before and after, what was changed, and what to keep an eye on.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Before you write',
    questions: [
      {
        question: 'How much does it cost to update a Joomla website to Joomla 6?',
        answer:
          '€190 for a simple version upgrade: a Joomla 4 or 5 website whose template and extensions support Joomla 6, with backup, test on a copy and report. €390 when a custom-made template also has to be adapted, extensions replaced or the site cleaned up after a known vulnerability. For a Joomla 3 website, the price depends on the shortest path, and you get it after the free diagnosis, before any work.',
      },
      {
        question: 'Can I go straight from Joomla 3 or 4 to Joomla 6?',
        answer:
          'No. The official path goes through the latest release of each branch: 3.10, then 4.4, then 5.4, then 6, each with its pre-update check. On a test copy, these steps follow one another in the same job, and the live site only changes once everything is validated.',
      },
      {
        question: 'Is Joomla 5 still safe?',
        answer:
          'Yes, until 12 October 2027, as long as it runs the latest 5.4 release on a patched PHP. But PHP 8.2 ends on 31 December 2026 and Joomla 6 requires PHP 8.3: making both changes in the same job avoids paying twice.',
      },
      {
        question: 'Will my website keep the same look?',
        answer:
          'Yes. The template is kept and, if it was designed for an older Joomla version, adapted without changing the look: same colours, same menus, same content, same page addresses. The main pages and the forms are checked before and after.',
      },
      {
        question: 'Will my contact or appointment form still work?',
        answer:
          'That is the first thing I check. ChronoForms 7, for example, is only announced by its publisher up to Joomla 5, but it works on Joomla 6 with a one-line fix, tested in November 2026. When a form extension really does not follow, I replace it with the same fields and the same recipients.',
      },
      {
        question: 'Should the website be updated or rebuilt?',
        answer:
          'I update when the template can be adapted and the important extensions exist for Joomla 6. For an old Joomla 3 website with abandoned extensions, moving the content into a fresh Joomla 6 can cost less. The diagnosis tells you which one, before any commitment.',
      },
      {
        question: 'Which access do you need?',
        answer:
          'A Joomla administrator account (Super Users group) and access to the hosting, for the PHP version and the backup. If your webmaster or agency holds them, they can create them for me. You remove them at the end.',
      },
      {
        question: 'Will my website go offline?',
        answer:
          'Not during the preparation, which happens on a copy. On the live site, the switch takes a few minutes, at the time agreed with you.',
      },
      {
        question: 'How long does it take?',
        answer:
          'A few hours for a Joomla 5 website with no surprises, one to two days when the template or the extensions need work. The diagnosis arrives within 24 hours.',
      },
      {
        question: 'How does payment work?',
        answer:
          'The diagnosis is free, the price is announced in writing before the work, and the invoice is paid by bank transfer. Net prices, VAT not applicable. No subscription required: monthly maintenance is an option you can cancel whenever you want.',
      },
    ],
  },
  relatedArticles: {
    title: 'To understand before deciding',
    intro: 'The Joomla and PHP versions still supported, and the story of an update to Joomla 6.',
  },
  contactCta: {
    title: 'Send me the link to your Joomla website',
    description: 'Free diagnosis within 24 hours, then a price announced before any work.',
    button: 'Send my website link',
  },
  mobileContactBar: {
    text: 'Joomla website to update?',
    buttonLabel: 'Send my website link',
  },
}
