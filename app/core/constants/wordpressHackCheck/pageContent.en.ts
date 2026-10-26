import type { DibodevWordPressHackCheckPageContent } from '~/core/types/DibodevWordPressHackCheckPage'
import { WORDPRESS_HACK_SOURCES } from '~/core/constants/wordpressHackCheck/pageShared'

export const WORDPRESS_HACK_CHECK_PAGE_EN: DibodevWordPressHackCheckPageContent = {
  meta: {
    title: 'Hacked WordPress site? Check my site for free',
    description:
      'Enter your WordPress site address: the tool spots a vulnerable plugin (UpdraftPlus…), an outdated WordPress or signs of injection.',
    inLanguage: 'en',
    schemaAbout: 'Hacked WordPress sites and stolen UpdraftCentral keys (October 2026)',
  },
  breadcrumbLabel: 'Hacked WordPress site: check',
  shareImage: {
    titleLines: ['Has my WordPress site', 'been hacked?'],
    highlight: 'hacked',
    subtitle: 'Vulnerable plugin, version and signs of injection read from outside',
    badge: 'Free check',
    alt: 'Has my WordPress site been hacked? Free check by Dibodev',
  },
  hero: {
    titleBefore: 'Has my WordPress site been ',
    titleHighlight: 'hacked',
    titleAfter: '?',
    reassurances: ['Free, no sign-up', 'Result in a few seconds', 'Sources re-read on 26 October 2026'],
    description:
      'Over the weekend of 17 and 18 October 2026, connection keys for UpdraftCentral, the remote management tool of the UpdraftPlus backup plugin, leaked from its publisher. From 18 October, they were used to install fake plugins and hidden accounts on WordPress sites, including up-to-date ones. A hacked site does not always show it: it redirects some visitors, adds hidden links, or waits. This tool reads your home page and a few public files, spots a plugin still below its fixed version, an outdated WordPress or signs of injection, and tells you what to do: nothing, check, or act today.',
    authorIntro: 'Tool built by',
    authorBio:
      'freelance developer near Rennes, France. I clean up, update and secure WordPress sites, online stores and business software for small businesses, remotely, and I reply within 24 hours.',
  },
  checker: {
    siteLabel: 'Address of your WordPress site',
    sitePlaceholder: 'mycompany.com',
    siteHint:
      'A domain name is enough. The home page and at most seven small public files are read, as a browser would: nothing is scanned, nothing is stored.',
    submit: 'Check',
    checking: 'Checking…',
    resultLabel: 'Your result',
    idleTitle: 'Enter your site address to start',
    idleText:
      'The result says whether the site runs on WordPress, which version it shows, whether a watched plugin is still vulnerable, and what a visitor can see that looks wrong.',
    loadingTitle: 'Reading the site…',
    loadingText:
      'I read the home page, then the RSS feed, the watched plugins and the public list of authors. A few seconds.',
    errorTitles: {
      invalid: 'Address to correct',
      unreachable: 'Site unreachable',
      rateLimited: 'Too many checks',
      failed: 'Check impossible',
    },
    errorTexts: {
      invalid: 'Enter a public domain name, such as mycompany.com, with no space and no internal address.',
      unreachable:
        'I could not read the home page of {host}: wrong address, site offline, or a server that refuses robots. Try with or without www.',
      rateLimited: 'You ran many checks in a short time. Try again in a few minutes.',
      failed: 'Something went wrong on my side. Try again in a moment, or send me the site address.',
    },
    verdictTitles: {
      suspiciousSignals: 'Suspicious signs: check today',
      vulnerablePlugin: '{plugin} {pluginVersion}: vulnerable plugin',
      outdatedCore: 'WordPress {coreVersion}: not up to date',
      cleanSurface: 'Nothing wrong visible from outside',
      notWordPress: 'This site does not run on WordPress',
      unknown: 'No sign readable from outside',
    },
    verdictTexts: {
      suspiciousSignals:
        'The home page of {host} shows one or more signs found on hacked sites. It does not prove a hack, but it needs a close look, now.',
      vulnerablePlugin:
        '{host} runs {plugin} version {pluginVersion}, while the known vulnerability is fixed from {fixedVersion}. Until the plugin is updated, the door stays open.',
      outdatedCore:
        '{host} shows WordPress {coreVersion}, while the latest version is {latestCoreVersion}. Older branches still get fixes "as a courtesy", but only the latest version is officially supported.',
      cleanSurface:
        '{host} runs on WordPress and nothing visible from outside points to a hack or a vulnerable watched plugin. This is a surface reading: the fake plugins of October 2026 usually leave no trace on the home page, and only a check from the inside sees them.',
      notWordPress:
        '{host} runs on {platform}, not on WordPress. WordPress plugin vulnerabilities do not apply to this site.',
      unknown:
        'Nothing on the home page of {host} points to WordPress or a known platform. A well-configured custom site shows nothing: that does not prove WordPress is absent.',
    },
    detailsTitle: 'What I read',
    signalTexts: {
      generatorMeta: 'The page shows its WordPress version in a meta tag ({coreVersion}).',
      assetVersion: 'The core files carry version number {coreVersion}.',
      feedVersion: 'The RSS feed of the site shows its WordPress version ({coreVersion}).',
      usersExposed:
        'The public list of authors shows {users} account(s) with their username, often the same as the login. This is the WordPress default, not a hack: unique passwords and two-factor authentication neutralise the risk.',
      pluginsSeen: 'Plugins can be recognised in the code of the page.',
      externalScripts:
        'The page loads scripts from domains I do not know: {domains}. Worth checking: a service you chose, or not.',
      hiddenLinks:
        'Several links to other sites are hidden in the page (invisible or off-screen block): the classic signature of injected SEO spam.',
      redirectScript:
        'The page sends visitors to another domain (refresh tag, or a script that changes the address depending on where the visitor comes from or their device): the usual shape of redirections left by a hack.',
      obfuscatedScript:
        'A script on the page runs encoded text (eval of decoded content): a common injection technique, rare on a healthy site.',
      spamKeywords:
        'The page title or description contains spam words (pharmacy, online casino…) or a language foreign to the site: a frequent sign of an SEO hack.',
      phpInUploads:
        'The page calls a .php file in the uploads folder: that folder should only hold images and documents.',
      knownBackdoorPlugin:
        'The page loads a plugin whose name is on the list of fake plugins installed with the stolen UpdraftCentral keys: treat it as a backdoor, and do not edit it.',
      criticalError:
        'The page shows a WordPress critical error. It often has a mundane cause (a PHP update, an incompatible plugin), but the first variant of the fake plugins of October 2026 caused one too: look at the list of plugins before fixing anything.',
      coreOutdated: 'The version shown ({coreVersion}) is older than the latest release ({latestCoreVersion}).',
      cloudflare:
        'Cloudflare sits in front of the site: its firewall filters part of the attacks, without replacing updates.',
    },
    coreVersionHiddenLine:
      'WordPress version hidden: that is good practice, and it does not say whether the site is up to date.',
    pluginsTitle: 'Watched plugins read on the site',
    pluginStatusTexts: {
      vulnerable: '{plugin} {pluginVersion}: vulnerable, fixed from {fixedVersion}',
      fixed: '{plugin} {pluginVersion}: up to date (fix {fixedVersion} or later)',
      unknownVersion: '{plugin}: present, version not readable from outside',
    },
    stepsTitle: 'To do',
    steps: {
      suspiciousSignals: [
        'Before touching anything, make a full copy of the site and the database, off the server: it is evidence, not a restore point.',
        'Look at the accounts that can install plugins (not only administrators), the plugins including the "Must-Use" tab, and the recent files.',
        'Change the passwords (WordPress, FTP, database, hosting) and the secret keys in wp-config.php, which log everyone out.',
        'Follow the "checks to do today" guide below, or send me the address: I look within 24 hours.',
      ],
      vulnerablePlugin: [
        'Log in directly to the site admin and update {plugin} to {fixedVersion} or later, after a backup.',
        'If it is UpdraftPlus: also delete the key in Settings, UpdraftPlus, Advanced Tools tab, UpdraftCentral. The update does not remove a fake plugin already installed.',
        'Check the accounts, the plugins and the recent files with the guide below.',
        'Turn on automatic plugin updates, or plan a monthly slot to do them.',
      ],
      outdatedCore: [
        'Update WordPress from Dashboard, Updates, after a full backup off the server.',
        'Update the theme and every plugin too: most of the vulnerabilities exploited this autumn were in plugins.',
        'Delete the deactivated plugins and themes, which can still be attacked.',
        'Check the PHP version at your host: an old WordPress often runs on an old PHP.',
      ],
      cleanSurface: [
        'Do the check from the inside, which sees what this page cannot: accounts, installed plugins, recent files (guide below).',
        'If you use UpdraftPlus, update it to 1.26.13 (2.26.13 for Premium) and delete the UpdraftCentral key, even if the site looks healthy.',
        'Keep a backup off the server and a monthly update: that is what makes the difference the day something breaks.',
      ],
      notWordPress: [
        'WordPress plugin vulnerabilities do not concern {platform}. Nothing to do on this site.',
        'If you have another site, a store or a blog on WordPress, check it here.',
        'A custom site is checked differently: language version, dependencies, logs. I can look at it with you.',
      ],
      unknown: [
        'From outside, nothing says whether this site uses WordPress: ask the person who built it.',
        'If it is a WordPress site, check it from the inside with the guide below.',
        'If nobody answers, send me the address: I look within 24 hours.',
      ],
    },
    disclaimer:
      'Indicative reading from outside, based on the home page and a few public files. A fake plugin that loads nothing on the page, a plugin whose readme is blocked or a hack that only targets some visitors cannot be seen from here: only a check from the inside is conclusive.',
    guidesTitle: 'The three guides, in order',
    guideLabels: {
      checks: 'Hacked WordPress site: the checks to do today',
      updraftplus: 'UpdraftPlus: revoke UpdraftCentral, change the keys, check your backups',
      restore: 'Restore a WordPress site after a hack, without bringing the problem back',
    },
    idleCtaIntro:
      'Not sure? Send me your site address, and within 24 hours I tell you what I see and what to do. Free, no commitment.',
    idleCtaLabel: 'Send my site address',
    ctaIntro:
      'Rather delegate? I check from the inside, clean up, change the keys and passwords, update everything, and send you a written report. Free diagnosis, quote before any work.',
    ctaLabels: {
      suspiciousSignals: 'Have my site checked and cleaned',
      vulnerablePlugin: 'Have my site secured',
      outdatedCore: 'Have my site updated',
      cleanSurface: 'Have my site checked from the inside',
      notWordPress: 'Check my other tools',
      unknown: 'Have my site checked',
    },
    serviceLinkLabel: 'How the remote work goes, and its prices',
  },
  mobileContactBar: {
    text: 'Unsure about your WordPress?',
    buttonLabel: 'Send my site address',
  },
  facts: {
    anchorId: 'facts',
    eyebrow: 'What happened',
    title: 'UpdraftPlus, UpdraftCentral and the WordPress sites hacked in October 2026, in six facts',
    intro:
      'UpdraftPlus is the most widely used backup plugin for WordPress. In October 2026, its remote management tool became the way in. Here is what the publisher and the security teams say, without drama.',
    facts: [
      {
        contextLabel: '17-18 October 2026',
        title: 'UpdraftCentral keys leaked from the publisher',
        text: 'TeamUpdraft, the publisher of UpdraftPlus, suffered an intrusion over the weekend of 17 and 18 October 2026. The connection keys of UpdraftCentral, its remote site management tool, were part of it. It is not a flaw in the plugin code: the commands sent to the sites were signed with real keys.',
        sourceName: 'TeamUpdraft, post of 19 October 2026',
        sourceUrl: WORDPRESS_HACK_SOURCES.teamUpdraftIncident,
      },
      {
        contextLabel: 'From 18 October',
        title: 'Fake plugins and hidden accounts',
        text: 'Patchstack saw the first attack on 18 October at 15:32 UTC. The command installs a fake plugin ("Small maintenance toolkit", "Site Health Cache"…), which creates an account able to install plugins and a login through a secret link, with no password and no two-factor authentication. Patchstack recorded 99 different plugin names.',
        sourceName: 'Patchstack, analysis of 19 October 2026',
        sourceUrl: WORDPRESS_HACK_SOURCES.patchstackUpdraftCentral,
      },
      {
        contextLabel: 'Up-to-date sites too',
        title: 'Being up to date was not enough',
        text: 'The IT-Connect site, on UpdraftPlus Premium 2.26.11, received the command on 19 October at 7:17 am. The way in was a valid key, not an old version: any site linked to UpdraftCentral was exposed, whatever its version.',
        sourceName: 'IT-Connect, 19 October 2026',
        sourceUrl: WORDPRESS_HACK_SOURCES.itConnect,
      },
      {
        contextLabel: 'Ticked by default',
        title: 'A key can exist without you knowing',
        text: 'When you link a site to your TeamUpdraft account, the box that adds it to UpdraftCentral is ticked by default, and these keys do not expire. Nethemba, which discovered the attack, advises deleting the key even after a clean-up, and moving a fake plugin off the site rather than deleting it from the admin, which would wipe its traces.',
        sourceName: 'Nethemba, analysis of 19 October 2026',
        sourceUrl: WORDPRESS_HACK_SOURCES.nethembaAnalysis,
      },
      {
        contextLabel: '1.26.13 and 2.26.13',
        title: 'The fixed version, and what it does not do',
        text: 'UpdraftPlus 1.26.13 (2.26.13 for Premium), released on 19 October, revokes the keys created before the incident; 1.26.12, released the same day, did not revoke them because of a bug. Updating stops a new command, but removes neither a fake plugin, nor an account, nor a session already open.',
        sourceName: 'BleepingComputer, 20 October 2026',
        sourceUrl: WORDPRESS_HACK_SOURCES.bleepingComputerUpdraftCentral,
      },
      {
        contextLabel: '72 hours',
        title: 'A hack that touches personal data must be reported',
        text: 'If the site holds customer accounts, orders or a form that stores data, an intrusion is a data breach. In France and the rest of the EU, it is reported to the data protection authority (the CNIL in France) within 72 hours when it creates a risk for people, and the people are told when the risk is high.',
        sourceName: 'CNIL, reporting a personal data breach',
        sourceUrl: WORDPRESS_HACK_SOURCES.cnil,
      },
    ],
    calloutEmphasizedIntro: 'What I do for you:',
    calloutText:
      'I read the site from the inside, remove what does not belong there, change the keys and passwords, restore a clean backup if needed, update WordPress, the theme, the plugins and PHP, and write down what was done. Remotely, free diagnosis, quote before any work.',
  },
  signs: {
    anchorId: 'signs',
    eyebrow: 'The signs',
    title: 'What a hacked WordPress site looks like',
    intro:
      'A hack does not aim to break your site: it wants to use it, for as long as possible. Here is what a visitor, the tool or you can notice.',
    items: [
      {
        title: 'Hidden links or pages that do not exist',
        description:
          'Invisible links to betting, pharmacy or counterfeit sites, or hundreds of pages in Japanese in Google under your domain name. This is SEO spam, the most common kind.',
      },
      {
        title: 'A redirection for some visitors',
        description:
          'The site looks normal to you, but a visitor coming from Google on a phone lands somewhere else. The tool spots a redirection in the page code; on the inside, it often hides in the .htaccess file or a plugin.',
      },
      {
        title: 'A warning from Google or the host',
        description:
          '"Deceptive site ahead" in Chrome, a Search Console message, or a host that suspends the site for sending spam: the hack is already old.',
      },
      {
        title: '.php files where there should be none',
        description:
          'The wp-content/uploads folder only holds images and documents. A .php file inside it, or an unknown folder in wp-content/mu-plugins or wp-content/upgrade, is a backdoor until proven otherwise.',
      },
      {
        title: 'An account you did not create',
        description:
          'The fake plugins of October 2026 create an Editor account and give it the right to install plugins, with a name like data-ops43, displayed as "Site Tools", and an @example.org address. Look at the rights of every account, not only the administrators.',
      },
      {
        title: 'A critical error on some pages',
        description:
          'The first variant of these fake plugins caused an "Undefined constant" error on uncached pages. Do not fix that code: repairing it would wake the backdoor up. Move the plugin folder off the site instead.',
      },
    ],
  },
  watchedPlugins: {
    anchorId: 'watched-plugins',
    eyebrow: 'Watch list',
    title: 'The plugins the tool checks, and the version that fixes them',
    intro:
      'For each plugin on the list, the tool reads the public readme.txt file and compares the installed version with the fixed one. UpdraftPlus and Ninja Forms are always checked, the others when the home page shows them. Paid plugins do not always have a public readme: the result then says "version not readable".',
    pluginColumnLabel: 'Plugin',
    issueColumnLabel: 'The problem',
    fixedVersionColumnLabel: 'Fixed version',
    rows: [
      {
        name: 'UpdraftPlus',
        coverage:
          'UpdraftCentral keys stolen from the publisher, fake plugins installed from 18 October 2026, up-to-date sites included',
        price: '1.26.13 or later',
        priceCondition: '2.26.13 for Premium, then delete the UpdraftCentral key',
      },
      {
        name: 'Ninja Forms',
        coverage:
          'Unauthenticated XSS (CVE-2026-94504), exploited since 4 October 2026 by a campaign that hides its own admin account',
        price: '3.15.4 or later',
        priceCondition: 'Current version: 3.15.6',
      },
      {
        name: 'WPC Product Bundles for WooCommerce',
        coverage: 'Unauthenticated XSS (CVE-2026-93836), same campaign as Ninja Forms',
        price: '8.6.7 or later',
        priceCondition: 'WooCommerce stores',
      },
      {
        name: 'Bricksforge',
        coverage: 'Unauthenticated file upload (CVE-2026-85097), exploited since 7 October 2026',
        price: '3.1.8.10 or later',
        priceCondition: 'Paid add-on for Bricks',
      },
      {
        name: 'Elementor Pro',
        coverage: 'PHP file upload through forms (CVE-2026-32475), exploited since 19 August 2026',
        price: '4.2.2 or later',
        priceCondition: 'Paid plugin: read the version in the admin',
      },
      {
        name: 'Super Forms',
        coverage: 'Unauthenticated file upload (CVE-2026-14894), exploited since 14 July 2026',
        price: '6.3.314 or later',
        priceCondition: 'Paid plugin',
      },
      {
        name: 'All-in-One WP Migration',
        coverage: 'SQL injection (CVE-2026-19949), fixed on 20 August 2026, no exploitation reported',
        price: '7.110 or later',
        priceCondition: 'More than 5 million sites',
      },
    ],
    calloutEmphasizedIntro: 'Your plugin is not on the list?',
    calloutText:
      'The tool only checks plugins whose vulnerabilities were exploited or widely reported in recent months. For the others, the WordPress admin flags every plugin that has an update: install them all, and delete the ones you no longer use.',
  },
  method: {
    eyebrow: 'In order',
    title: 'What to do today, in four steps',
    intro:
      'The same path for a showcase site, a blog or a WooCommerce store. Allow an hour if the site is healthy, more if it has been hacked.',
    steps: [
      {
        label: 'Back up',
        title: 'A full copy, off the server, before anything else',
        description:
          'Files and database, downloaded to your computer or sent to external storage. Even hacked, this copy is evidence and helps find what was changed. Restore nothing before you have finished looking.',
      },
      {
        label: 'Check',
        title: 'Accounts, plugins, files, UpdraftCentral key',
        description:
          'The accounts that can install plugins, not only administrators. The plugins including the "Must-Use" tab, and the wp-content/mu-plugins and wp-content/upgrade folders. The .php files in wp-content/uploads. The UpdraftCentral key and Search Console. The "checks to do today" guide gives the order and the places.',
      },
      {
        label: 'Clean',
        title: 'Remove, change, restore',
        description:
          'Move the fake plugins off the site rather than deleting them from the admin, delete the unknown accounts, change every password and the secret keys, delete the UpdraftCentral key. If doubt remains, restore a backup from before 17 October, then repeat these steps: that is the restore guide.',
      },
      {
        label: 'Close the door',
        title: 'Updates, PHP, and a monthly routine',
        description:
          'WordPress, theme and plugins up to date, unused plugins deleted, a fixed PHP version at the host, one off-server backup a week. Only reconnect UpdraftCentral once the publisher has finished its investigation. And if personal data may have leaked, report it within 72 hours.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Your questions about a hacked WordPress site',
    questions: [
      {
        question: 'How do I know if my WordPress site has been hacked?',
        answer:
          'From outside: this tool, a "site:yourdomain.com" search in Google to spot pages you did not write, and a visit from a phone in private browsing to catch a redirection. From the inside: the accounts that can install plugins, the list of plugins with the "Must-Use" tab, the recently modified files and the access logs of your host. The "checks to do today" guide details each point.',
      },
      {
        question: 'My site is up to date, and so is UpdraftPlus: am I still affected?',
        answer:
          'Yes, if the site had an active UpdraftCentral key. The way in was a valid key, not an old version, and the box that creates this key is ticked by default when you link a site to your TeamUpdraft account. Update to 1.26.13 (2.26.13 for Premium), delete the key in the UpdraftPlus advanced tools, then check the accounts, plugins and files: the update alone removes nothing that was already installed.',
      },
      {
        question: 'What should I do first if my site has been hacked?',
        answer:
          'A full copy off the server, then a change of every password (WordPress, FTP, database, hosting account, linked email) and of the secret keys in wp-config.php. Only then the clean-up: unknown accounts and plugins, recent files, redirections. If you cannot do it yourself, put the site in maintenance at your host and write to me.',
      },
      {
        question: 'Do I need to change my passwords?',
        answer:
          'Yes, all of them, as soon as there is a doubt, and a second time after the clean-up: WordPress (every administrator), FTP or SFTP, database, hosting account, TeamUpdraft account, and the email address that receives password resets. Change the secret keys in wp-config.php too: they close every open session, the attacker’s included.',
      },
      {
        question: 'My site has shown a critical error for a few days: is it related?',
        answer:
          'Maybe. A critical error often has a mundane cause, such as a PHP update or an incompatible plugin. But the first variant of the fake plugins of October 2026 caused an "Undefined constant" error on uncached pages. If the message names a plugin you do not know, do not fix its code: move its folder off the site and follow the checks guide.',
      },
      {
        question: 'My host says the site sends spam, or has suspended it: what should I do?',
        answer:
          'It is almost always a hack. Ask the host for the files or scripts involved and the logs, make the copy, then clean up or restore an earlier version. The site should only come back online once the passwords are changed and the updates done, or it may be suspended again.',
      },
      {
        question: 'Is restoring a backup enough?',
        answer:
          'Only if the backup predates the intrusion, so before 17 October for UpdraftCentral, and if you close the door right after. A backup from that date may still hold the old UpdraftCentral key: delete it again, change the passwords and secret keys, and update everything. The restore guide explains how to pick the right backup.',
      },
      {
        question: 'Would Wordfence, Sucuri or a security plugin have prevented this?',
        answer:
          'They help detect (modified files, suspicious logins) and block part of the attacks, but a command signed with a real key looks legitimate. They replace neither updates, nor deleting unused plugins, nor unique passwords with two-factor authentication.',
      },
      {
        question: 'Does my host take care of this?',
        answer:
          'The host maintains the server and the PHP version, not your WordPress, your plugins or your accounts. It can suspend a site that sends spam and give you the logs. The clean-up stays with you or your provider.',
      },
      {
        question: 'Do I need to tell my customers or the data protection authority?',
        answer:
          'If the site keeps personal data (accounts, orders, stored forms) and an intrusion may have reached it, it is a data breach: in the EU, it is reported to the authority within 72 hours as soon as there is a risk for people, the people are told if the risk is high, and it is recorded in writing in all cases. A showcase site that stores no data has nothing to report.',
      },
      {
        question: 'What exactly does this tool do, and what can it not see?',
        answer:
          'It reads the home page once, as a browser would, then at most seven small public files: the RSS feed when the page hides its version, the readme.txt of the watched plugins, and the public list of authors. It recognises WordPress, its version when shown, a listed plugin below its fixed version, hidden links, a redirection, an encoded script, spam words, .php files in the uploads and a critical error. It scans nothing, sends no payload and keeps the result ten minutes in cache, no more. It cannot see a fake plugin that loads nothing on the page, nor a hack that only targets some visitors: only a check from the inside settles it.',
      },
    ],
  },
  relatedArticles: {
    title: 'Going further',
    intro:
      'The three guides of this page, the article on the October 2026 PHP vulnerability, and a read to take back control of a site nobody looks after anymore.',
  },
  contactCta: {
    title: 'Need someone to take care of it?',
    description:
      'Send me the site address. I check from the inside, clean up, change the keys, update everything and write down what was done. Free diagnosis within 24 hours, quote before any work.',
    button: 'Have my site checked',
  },
}
