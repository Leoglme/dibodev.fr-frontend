import type { DibodevJoomlaVersionCheckPageContent } from '~/core/types/DibodevJoomlaVersionCheckPage'
import { JOOMLA_VERSION_SOURCES } from '~/core/constants/joomlaVersionCheck/pageShared'

export const JOOMLA_VERSION_CHECK_PAGE_EN: DibodevJoomlaVersionCheckPageContent = {
  meta: {
    title: 'Joomla version check: is your site ready for Joomla 6? Free test',
    description:
      'Enter your Joomla site address: the tool reads its Joomla version, its PHP version, its template and extensions, and gives the path to Joomla 6.',
    inLanguage: 'en',
    schemaAbout: 'Joomla version of a website and upgrade to Joomla 6',
  },
  breadcrumbLabel: 'Joomla version: check my site',
  shareImage: {
    titleLines: ['Is my Joomla site', 'ready for Joomla 6?'],
    highlight: 'Joomla 6',
    subtitle: 'Joomla version, PHP, template and extensions read from outside',
    badge: 'Free check',
    alt: 'Is my Joomla site ready for Joomla 6? Free check by Dibodev',
  },
  hero: {
    titleBefore: 'Is my Joomla site ready for ',
    titleHighlight: 'Joomla 6',
    titleAfter: '?',
    reassurances: ['Free, no sign-up', 'Result in a few seconds', 'Versions re-read on 9 November 2026'],
    description:
      'Joomla 3 has had no fixes since 2023, Joomla 4 since 14 October 2025, and Joomla 5 stops on 12 October 2027. Joomla 6 requires PHP 8.3, and PHP 8.2 stops on 31 December 2026. Enter your site address: the tool reads the Joomla version in the public files of the core, the PHP version when the server shows it, the template and the extensions visible on the home page, then tells you where you stand and in what order to move forward.',
    authorIntro: 'Tool built by',
    authorBio:
      'freelance developer near Rennes, France. I update Joomla and WordPress sites and business software for small businesses, freelancers and non-profits, remotely, and I reply within 24 hours.',
  },
  checker: {
    siteLabel: 'Your Joomla site address',
    sitePlaceholder: 'mybusiness.com',
    siteHint:
      'A domain name is enough. The home page and at most five small public files are read, as a browser would: nothing is scanned. Only the site address and its result are kept, for statistics.',
    submit: 'Check',
    checking: 'Checking…',
    resultLabel: 'Your result',
    idleTitle: 'Enter your site address to start',
    idleText:
      'The result says whether the site runs on Joomla, which version it uses, whether its PHP version is enough for Joomla 6, what the template and extensions need, and where to start.',
    loadingTitle: 'Reading the site…',
    loadingText:
      'I read the home page, then the public files that carry the Joomla version, and the PHP version when the server shows it. A few seconds.',
    errorTitles: {
      invalid: 'Address to fix',
      unreachable: 'Site unreachable',
      rateLimited: 'Too many checks',
      failed: 'Check failed',
    },
    errorTexts: {
      invalid: 'Enter a public domain name, like mybusiness.com, without spaces or internal addresses.',
      unreachable:
        'I could not read the home page of {host}: wrong address, site offline, or a server that refuses robots. Try with www in front, or without.',
      rateLimited: 'You ran many checks in a short time. Try again in a few minutes.',
      failed: 'Something went wrong on my side. Try again in a moment, or send me the site address.',
    },
    verdictTitles: {
      joomla6Latest: 'Joomla {version}: your site is up to date',
      joomla6Outdated: 'Joomla {version}: one update to do',
      joomla5: 'Joomla {version}: one step before Joomla 6',
      joomla4: 'Joomla {version}: no fixes since October 2025',
      joomla3OrOlder: 'Joomla {version}: no security fixes anymore',
      versionHidden: 'Joomla, version hidden',
      notJoomla: 'This site does not run on Joomla',
      unknown: 'No readable sign from outside',
    },
    verdictTexts: {
      joomla6Latest:
        '{host} runs Joomla {version}, the latest release. Joomla 6 gets security fixes until 16 October 2029: what is left is to install each update when it comes out, and to keep a backup off the server.',
      joomla6Outdated:
        '{host} is already on Joomla 6, but on {version}, while the latest release is {latestVersion}. The releases in between also fix security flaws: the update is done from the administration, after a backup.',
      joomla5:
        '{host} runs Joomla {version}. Joomla 5 gets security fixes until 12 October 2027: no rush, but the move to Joomla 6 needs preparing. From 5.4, it is an update, not a migration; the time it takes depends mostly on the template and the extensions.',
      joomla4:
        '{host} runs Joomla {version}. Joomla 4 has had no fixes at all since 14 October 2025: a flaw found today would stay open on it. The path goes through 4.4, then Joomla 5.4, then Joomla 6, one major version at a time.',
      joomla3OrOlder:
        '{host} runs Joomla {version}. Joomla 3 has had no fixes since 17 August 2023 (17 February 2025 with the paid extended support), and it usually runs on a PHP version that has no fixes either. Moving to Joomla 6 takes three steps, and rebuilding the site on Joomla 6 is sometimes less work.',
      versionHidden:
        '{host} runs Joomla, but the site blocks the public files that carry the version number, which is good practice. The version takes two clicks to read in the site administration (see below).',
      notJoomla: '{host} runs on {platform}, not on Joomla. Nothing to do on that side for Joomla 6.',
      unknown:
        'Nothing on the home page of {host} points to Joomla or to a known platform. A well-protected site can hide everything: this does not prove there is no Joomla.',
    },
    detailsTitle: 'What I read',
    signalTexts: {
      versionFromCoreFile: 'Version read in a public file of the Joomla core: {version}.',
      joomla3Files:
        'The page loads files from the Joomla 3 era (Bootstrap 2, MooTools): either the site still runs Joomla 3, or its template dates from that time.',
      joomla4PlusFiles:
        'The page loads files of Joomla 4 or later: from outside, there is no telling whether it is Joomla 4, 5 or 6.',
      behindLatestOfBranch:
        'The latest release of Joomla {major} is {latestVersionOfBranch}: your site is missing fixes.',
      extendedSupportBuild:
        'The “elts” label marks a release of the paid extended support of Joomla 3, which ended on 17 February 2025.',
      phpTooOldForJoomla6:
        'PHP {phpVersion}: Joomla 6 requires PHP 8.3 at least. The switch is made at your host, at the right point of the path (see “To do”).',
      phpReadyForJoomla6: 'PHP {phpVersion}: enough for Joomla 6, which requires PHP 8.3 at least (8.4 recommended).',
      phpHidden:
        'The server does not show its PHP version: you can read it in the Joomla administration (System, System Information) or in your host’s client area. Joomla 6 requires PHP 8.3 at least.',
      cassiopeiaTemplate: 'Cassiopeia template, shipped with Joomla: it follows the updates, nothing to redo there.',
      cassiopeiaChildTemplate:
        'Template {template}, a child template of Cassiopeia, the one shipped with Joomla: Cassiopeia follows the updates, only your changes need checking.',
      joomla3CoreTemplate:
        'Template {template}, shipped with Joomla 3: it no longer exists in Joomla 4, so the site will change template along the way.',
      frameworkTemplate:
        'Template {template}, built on {framework}: its publisher keeps it updated, and sites already run it on Joomla 6. Install its latest version before the move, then check on a copy.',
      customTemplate:
        'Template {template}, custom-made or bought separately: it is the first piece to try on a copy of the site under Joomla 6, before any update.',
      joomla3CustomTemplate:
        'Template {template}, used on Joomla 3: a template made for Joomla 3 usually has to be adapted or replaced for Joomla 4 and later.',
      extensionsSeen:
        'Extensions visible on the home page: {extensions}. Each one needs a Joomla 6 version, to check with its publisher; the ones no longer in use get uninstalled first.',
    },
    stepsTitle: 'To do, in order',
    steps: {
      joomla6Latest: [
        'Install each Joomla and extension update when it comes out, after a backup: the administration dashboard announces them.',
        'Keep a full backup off the server, and check from time to time that it restores.',
        'Keep an eye on the PHP version: PHP 8.3 gets fixes until 31 December 2027, PHP 8.4 until 31 December 2028.',
      ],
      joomla6Outdated: [
        'Make a full backup, files and database, off the server.',
        'In the administration, open System, Update, Joomla, and install {latestVersion}.',
        'Update the extensions too, then check the forms and the main pages.',
      ],
      joomla5: [
        'Make a full backup off the server, then a test copy of the site, at another address.',
        'On the copy, check that Joomla is on {latestVersionOfBranch}, the latest Joomla 5, or install it: the move to Joomla 6 starts from an up-to-date 5.4.',
        'Switch PHP to 8.3 at your host: Joomla 6 requires it, and Joomla 5.4 already runs on it.',
        'Run the pre-update check (System, Update, Joomla), enable the “Behaviour - Backward Compatibility 6” plugin, then move the copy to Joomla 6.',
        'Test everything on the copy (forms, pages, e-mail sending), then repeat the same steps on the live site, with a fresh backup.',
      ],
      joomla4: [
        'Make a full backup off the server, then a test copy of the site, at another address.',
        'On the copy, check that Joomla is on {latestVersionOfBranch}, the latest Joomla 4, or install it.',
        'Run the pre-update check (System, Update, Joomla, “Joomla Next” channel), replace the extensions that have no Joomla 5 version, then move to Joomla 5.4.',
        'Switch PHP to 8.3 at your host, then the copy to Joomla 6, with the “Behaviour - Backward Compatibility 6” plugin enabled.',
        'Test everything on the copy, then repeat the same steps on the live site, with a fresh backup.',
      ],
      joomla3OrOlder: [
        'Make a full backup off the server, then a test copy of the site, at another address.',
        'On the copy, check that Joomla is on 3.10 (3.10.12 is the latest Joomla 3), or install it, then list the template and extensions: Protostar and templates made for Joomla 3 have to be replaced or adapted for Joomla 4.',
        'Choose between updating (3.10, then 4.4, then 5.4, then 6) and rebuilding the site on Joomla 6 while keeping your texts and addresses: the official documentation itself says rebuilding is sometimes less work.',
        'Change PHP along the way, not before: Joomla 3 is not meant for PHP 8.3, which Joomla 6 requires.',
        'Test everything on the copy, then switch the live site, with a fresh backup.',
      ],
      versionHidden: [
        'Log in to the site administration (its address ends with /administrator) and open System, then System Information: the Joomla, PHP and database versions are there.',
        'Joomla 6: the site is already on the right version. Joomla 5.4 up to date and PHP 8.3: it is ready for the move to Joomla 6, on a copy first. Joomla 4 or older: it no longer gets fixes, and the move takes several steps.',
        'If you do not have the access, send me the address: within 24 hours I tell you where the site stands and where to start.',
      ],
      notJoomla: [
        'Joomla 6 does not concern {platform}. If you have another site on Joomla, check it here.',
        'For any site, “Test my website” also checks the PHP version, HTTPS and e-mails (link below).',
      ],
      unknown: [
        'From outside, nothing tells whether this site uses Joomla: ask the person who built it, or check whether its administration address ends with /administrator.',
        'If it is a Joomla site, the version is in the administration, System, then System Information.',
        'If nobody answers, send me the address: I take a look within 24 hours.',
      ],
    },
    disclaimer:
      'An indicative reading from outside, based on the home page and a few public files. An extension that loads nothing on the home page, changes made to a template or an outdated database cannot be seen from here: only a check from the inside, on a copy, is final.',
    guidesTitle: 'The guides, to go further',
    guideLabels: {
      joomla6Upgrade: 'Moving a Joomla 3, 4 or 5 site to Joomla 6: the order, what breaks, the cost',
      php82EndOfLife: 'PHP 8.2 stops on 31 December 2026: what to do',
    },
    idleCtaIntro:
      'Not sure? Send me your site address, and within 24 hours I tell you which version it uses, what blocks it and where to start. Free, no commitment.',
    idleCtaLabel: 'Send my site address',
    ctaIntro:
      'Rather hand it over? I make the backup, the test copy and every step up to Joomla 6 and PHP 8.3, without changing how the site looks, and I send you a written report. Free diagnosis, price given before any work.',
    ctaLabels: {
      joomla6Latest: 'Have my site checked from the inside',
      joomla6Outdated: 'Have my site updated',
      joomla5: 'Have my site moved to Joomla 6',
      joomla4: 'Have my site moved to Joomla 6',
      joomla3OrOlder: 'Get a price for Joomla 6',
      versionHidden: 'Have my Joomla version checked',
      notJoomla: 'Have my site checked',
      unknown: 'Have my site checked',
    },
    serviceLinkLabel: 'How the Joomla update goes, and its prices',
    healthCheckLinkLabel: 'Also check HTTPS, mobile, e-mails and legal notice: test my website',
  },
  mobileContactBar: {
    text: 'Is your Joomla ready?',
    buttonLabel: 'Send my site address',
  },
  facts: {
    anchorId: 'facts',
    eyebrow: 'Dates to know',
    title: 'Joomla and PHP in November 2026: the dates, in six facts',
    intro:
      'The dates come from the Joomla project and php.net, re-read on 9 November 2026. A version “without fixes” still displays normally: it simply no longer gets repaired when a flaw is found.',
    facts: [
      {
        contextLabel: '13 October 2026',
        title: 'Joomla 6.2.0, the current release',
        text: 'Joomla 6 came out on 14 October 2025. Version 6.2.0, published on 13 October 2026, is its latest release: the target of any update.',
        sourceName: 'Joomla, Joomla 6.2 announcement',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomla62Release,
      },
      {
        contextLabel: 'Until 16 October 2029',
        title: 'The official schedule of supported versions',
        text: 'Joomla 6 gets bug fixes until 17 October 2028 and security fixes until 16 October 2029. Joomla 5.4 gets security fixes until 12 October 2027, then nothing.',
        sourceName: 'Joomla, version roadmap',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomlaRoadmap,
      },
      {
        contextLabel: '14 October 2025',
        title: 'Joomla 4 is no longer supported',
        text: 'Version 4.4.14, from 30 September 2025, is the last Joomla 4 release; its support ended on 14 October 2025. A flaw found since then stays open on a Joomla 4 site.',
        sourceName: 'Joomla, releases 5.3.4 and 4.4.14',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomla4EndOfSupport,
      },
      {
        contextLabel: '17 August 2023',
        title: 'Joomla 3, stopped for more than three years',
        text: 'Joomla 3 got its last release, 3.10.12, in July 2023, and its support ended on 17 August 2023. The project then sold eighteen months of security fixes, until 17 February 2025. Nothing since.',
        sourceName: 'Joomla Magazine, July 2023',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomla3ExtendedSupport,
      },
      {
        contextLabel: 'PHP 8.3 minimum',
        title: 'What Joomla 6 asks of the server',
        text: 'Joomla 6 requires PHP 8.3 at least (8.4 recommended) and a MySQL 8.0.13 or MariaDB 10.4 database at least. Joomla 5 requires PHP 8.1 at least. On old hosting, the database can block the update: check with your host.',
        sourceName: 'Joomla, technical requirements',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomla6Requirements,
      },
      {
        contextLabel: '31 December 2026',
        title: 'PHP 8.2 stops at the end of the year',
        text: 'PHP 8.2 gets no fixes after 31 December 2026, PHP 8.3 after 31 December 2027 and PHP 8.4 after 31 December 2028. PHP 8.1 and older versions already get none.',
        sourceName: 'php.net, supported versions',
        sourceUrl: JOOMLA_VERSION_SOURCES.phpSupportedVersions,
      },
    ],
    calloutEmphasizedIntro: 'What I do for you:',
    calloutText:
      'I back up the site off the server, copy it to another address, take every step up to Joomla 6 and PHP 8.3 on the copy and fix what breaks without touching the look. Then I do the same on the live site and write down what was done. Remotely, free diagnosis, price given before any work.',
  },
  versions: {
    anchorId: 'versions',
    eyebrow: 'The schedule',
    title: 'Joomla versions, and how long they are supported',
    intro:
      'Each major version is supported for a few years, then stops. Here is where each one stands on 9 November 2026, with its latest release.',
    versionColumnLabel: 'Version',
    supportColumnLabel: 'Support on 9 November 2026',
    latestReleaseColumnLabel: 'Latest release',
    rows: [
      {
        name: 'Joomla 6',
        coverage: 'Bug fixes until 17 October 2028, security fixes until 16 October 2029',
        price: '6.2.0',
        priceCondition: 'Published on 13 October 2026',
      },
      {
        name: 'Joomla 5',
        coverage: 'Security fixes until 12 October 2027',
        price: '5.4.10',
        priceCondition: 'Published on 13 October 2026',
      },
      {
        name: 'Joomla 4',
        coverage: 'No fixes at all since 14 October 2025',
        price: '4.4.14',
        priceCondition: 'Published on 30 September 2025',
      },
      {
        name: 'Joomla 3',
        coverage: 'No fixes at all since 17 August 2023 (17 February 2025 with the paid extended support)',
        price: '3.10.12',
        priceCondition: 'Published in July 2023',
      },
    ],
    calloutEmphasizedIntro: 'And PHP?',
    calloutText:
      'Joomla 6 requires PHP 8.3 at least, and PHP 8.2 gets no fixes after 31 December 2026. A Joomla 5 site on PHP 8.2 therefore has two updates ahead: doing them together saves going back over it twice.',
  },
  blockers: {
    anchorId: 'what-blocks',
    eyebrow: 'Before updating',
    title: 'What takes work on a Joomla site',
    intro:
      'Updating the core takes a few minutes. The time goes elsewhere: here is what I look at first, on a copy of the site.',
    items: [
      {
        title: 'The template',
        description:
          'A template custom-made years ago has nobody left to update it: it gets adapted by hand, or replaced while keeping the look. Cassiopeia, the template shipped with Joomla 4 and later, follows the updates.',
      },
      {
        title: 'Abandoned extensions',
        description:
          'A form, a gallery or a module installed ten years ago by a publisher that is gone blocks or breaks the update. The ones no longer in use get uninstalled, the others replaced.',
      },
      {
        title: 'The PHP version',
        description:
          'Joomla 6 requires PHP 8.3. A template or an extension written ten years ago produces warnings, then errors, with recent PHP versions: they get fixed one by one, with no difference for visitors.',
      },
      {
        title: 'The database',
        description:
          'Joomla 6 requires MySQL 8.0.13 or MariaDB 10.4 at least. On old hosting, the host updates it, or the plan has to change.',
      },
      {
        title: 'Backups',
        description:
          'Backups scheduled years ago, stored on the same server and never tested, protect nothing. Before touching the site: a full backup, restored once, stored elsewhere.',
      },
      {
        title: 'Forms and e-mails',
        description:
          'They bring in the requests, and they are the ones people forget to test. After each step, I send a real message through each form and check that it arrives.',
      },
    ],
  },
  method: {
    eyebrow: 'In order',
    title: 'Moving to Joomla 6 in four steps',
    intro:
      'The same order whatever the starting point, according to the official Joomla guides: one major version at a time, never two at once.',
    steps: [
      {
        label: 'Back up',
        title: 'A full backup, off the server',
        description:
          'Files and database, downloaded to a computer or sent to external storage, and restored once to check that they work.',
      },
      {
        label: 'Copy',
        title: 'A test copy, at another address',
        description:
          'The same site, at a separate address, where anything can break without any visitor seeing it. Every next step happens there first.',
      },
      {
        label: 'Step up',
        title: 'One major version at a time',
        description:
          'The latest release of the branch first (3.10, 4.4 or 5.4), then the pre-update check in the administration, then the next version. PHP follows along the way, at 8.3 before Joomla 6. From 5.4 to 6, the official guides speak of an update, not a migration.',
      },
      {
        label: 'Switch',
        title: 'Test, then repeat on the live site',
        description:
          'Forms, pages, addresses, e-mail sending: everything is checked on the copy. Only then the same steps on the live site, with a fresh backup, and a written report.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Your questions about the Joomla version',
    questions: [
      {
        question: 'How do I find the Joomla version of my site?',
        answer:
          'In the site administration, whose address ends with /administrator. On Joomla 3, the version shows at the bottom of the page; on Joomla 4, 5 and 6, open System, then System Information, which also gives the PHP and database versions. Without access, this tool reads it in the public files of the site, when they are not blocked.',
      },
      {
        question: 'Why does the tool say “version hidden”?',
        answer:
          'Because the site blocks the public files that carry the version number, with a security extension or a server rule. It is good practice: the version is then read in the administration, System, then System Information.',
      },
      {
        question: 'Can I go straight from Joomla 3 to Joomla 6?',
        answer:
          'No. The official path goes through 3.10, then 4.4, then 5.4, then Joomla 6, with the pre-update check each time. On a test copy, the steps can follow one another in the same day. When the template and extensions are too old, rebuilding the site on Joomla 6 while keeping its texts and addresses is sometimes less work.',
      },
      {
        question: 'Is Joomla 5 still safe?',
        answer:
          'Yes, until 12 October 2027, provided you are on the latest 5.4 and on a PHP version that still gets fixes. As Joomla 6 requires PHP 8.3 and PHP 8.2 stops on 31 December 2026, doing both updates together makes sense.',
      },
      {
        question: 'My Joomla 3 site works, why touch it?',
        answer:
          'Because it has had no security fixes since 17 August 2023, or since 17 February 2025 with the paid extended support, and it usually runs on a PHP version that has no fixes either. A site that displays is not a protected site: a flaw found today will never be fixed.',
      },
      {
        question: 'Will my template survive the move to Joomla 6?',
        answer:
          'Cassiopeia, the template shipped with Joomla, follows the updates. A bought template (Helix Ultimate, YOOtheme Pro…) moves over if its publisher has released a Joomla 6 version: install it first. A custom-made template gets tried on a copy: it may need some fixes, sometimes a full rework, without changing how the site looks.',
      },
      {
        question: 'Can my host take care of it?',
        answer:
          'For PHP and the database, yes: the switch is made in their client area. For Joomla, the template and the extensions, no: that is up to you, the agency that built the site, or a developer who knows Joomla.',
      },
      {
        question: 'How much does the move to Joomla 6 cost?',
        answer:
          'It depends mostly on the template and the extensions. With me, a simple version upgrade costs €190 (backup, test on a copy, Joomla 6 and PHP 8.3, written report), and €390 when a custom-made template also has to be adapted or extensions replaced. For a Joomla 3 site, the price is given after a free diagnosis.',
      },
      {
        question: 'What exactly does this tool do, and what can it not see?',
        answer:
          'It reads the home page once, as a browser would, then at most five small public files: the version file of the Joomla core, three language files when that one is blocked, and the administration login page for the PHP version, when the server shows it. It recognises Joomla, its version, the template and the extensions loaded by the home page. It logs in to nothing, tries no password and keeps the result ten minutes in cache. It cannot see extensions that load nothing on the home page, nor the database version, nor changes made to the template: only a check from the inside settles it.',
      },
    ],
  },
  relatedArticles: {
    title: 'To go further',
    intro:
      'The full guide to moving to Joomla 6, the end of PHP 8.2 on 31 December 2026, and what hosts do with old PHP versions.',
  },
  contactCta: {
    title: 'Need someone to take care of it?',
    description:
      'Send me the site address. Within 24 hours I tell you which version it uses, what blocks it and what the move to Joomla 6 costs. Free diagnosis, price given before any work.',
    button: 'Have my site checked',
  },
}
