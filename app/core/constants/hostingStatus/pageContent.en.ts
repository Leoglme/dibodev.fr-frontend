import type { DibodevHostingProviderKey } from '~/core/types/DibodevHostingStatus'
import type {
  DibodevHostingProviderPageContent,
  DibodevHostingProviderPageSpecifics,
  DibodevHostingStatusCardWording,
  DibodevHostingStatusPageContent,
  DibodevHostingStatusPageSections,
} from '~/core/types/DibodevHostingStatusPage'
import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'
import { NBSP } from '~/core/constants/typography'
import { HostingStatusUtils } from '~/core/utils/HostingStatusUtils'

const AUTHOR_INTRO: string = 'Page maintained by'
const AUTHOR_BIO: string =
  'freelance developer near Rennes, France, who has been bringing websites and software hosted with these providers back online since 2019.'

/** What the visitor can do while the host is down, the same on every page. */
const COMMON_CHECKS: DibodevGuarantee[] = [
  {
    title: 'Test another site with the same host',
    description:
      'If another site hosted in the same place responds, the outage does not come from the host but from your site, your domain name or your cache.',
  },
  {
    title: 'Look at the error message',
    description:
      '“This site can’t be reached” or a timeout point to the server or the DNS; a 500 error or a blank page point to the site itself (PHP, plugin, database).',
  },
  {
    title: 'Check the domain name',
    description:
      'An expired domain or DNS records changed the day before give the same symptoms as an outage. The host’s customer area or the registrar shows the expiry date.',
  },
]

const COMMON_METHOD_STEPS: DibodevMethodStep[] = [
  {
    label: 'Minute 1',
    title: 'Make sure it is not just you',
    description:
      'Open your site from another network (4G rather than your router) and in private browsing. If it works elsewhere, the problem is local: cache, router DNS, firewall.',
  },
  {
    label: 'Minute 5',
    title: 'Read the host’s status on this page',
    description:
      'An incident announced by the host gets fixed without you: no need to touch the site. Note the start time for your own communication.',
  },
  {
    label: 'Minute 10',
    title: 'Tell your customers before they tell you',
    description:
      'A word on your Google listing, your social networks or your voicemail avoids the phone calls. Give the return time announced by the host rather than a promise.',
  },
  {
    label: 'Afterwards',
    title: 'Decide with a cool head',
    description:
      'One isolated outage is no reason to change host. Three outages in a quarter, or a support team that stays silent, are: a migration takes a week to prepare.',
  },
]

const CARD_WORDING: DibodevHostingStatusCardWording = {
  resultLabel: 'Live status',
  stateLabels: {
    operational: 'Everything is working',
    degraded: 'Service disrupted',
    incident: 'Ongoing incident',
    maintenance: 'Maintenance in progress',
    unknown: 'Status unknown',
  },
  stateTitles: {
    operational: '{provider}: no incident reported',
    degraded: '{provider}: a disruption is reported',
    incident: '{provider}: an incident is ongoing',
    maintenance: '{provider}: maintenance is in progress',
    unknown: '{provider}: status could not be read',
  },
  stateTexts: {
    operational:
      'Nothing is reported on the status page. If your site does not respond, the cause is probably your site, your domain or your cache: follow the checks below.',
    degraded:
      'The host reports a disruption on part of its services. Your site may be slow or unreachable at times; wait for the end of the incident before changing anything.',
    incident:
      'The host acknowledges an outage. Do not touch your site: it will come back with the service. Details and updates are on its status page.',
    maintenance: 'A planned operation is in progress. Short interruptions are possible until the announced end time.',
    unknown:
      'The status page could not be read just now. That does not mean everything is fine: open it directly with the link below.',
  },
  loadingTitle: 'Reading the status page…',
  loadingText: 'A few seconds: the status is read the moment you open this page.',
  errorTitle: 'Unable to read the status for now',
  errorText: 'Try again in a minute or open the host’s status page with the link below.',
  checkedAtText: 'Checked at {time} (Paris time), status unchanged since {since}.',
  activeIncidentsTitle: 'Ongoing',
  recentIncidentsTitle: 'Latest events',
  noRecentIncidentsText: 'No recent event on the status page.',
  ongoingLabel: 'ongoing',
  resolvedLabel: 'resolved',
  maintenanceLabel: 'maintenance',
  incidentLinkLabel: 'See the details on the host’s page',
  sourceTexts: {
    statuspage: `Read every 5${NBSP}minutes from the official status page of {provider}.`,
    infomaniak: `Read every 5${NBSP}minutes from the official status page of {provider}.`,
    lws: `Read every 5${NBSP}minutes from the service status page of {provider}.`,
    none: '{provider} publishes no readable status page.',
  },
  staleText: 'The last read failed: this status is the one from the previous read.',
  statusPageLinkLabel: 'Open the status page',
  noStatusPageResultLabel: 'Where to look',
  noStatusPageTitle: '{provider}: no public status page',
  noStatusPageText:
    '{provider} publishes no status page this page can read: its status is therefore not shown rather than guessed. Its maintenance and incident announcements go through its X account; for an outage of your own server, its support remains the only reliable source.',
  noStatusPageLinkLabel: 'See its announcements on X',
  refreshLabel: 'Read again now',
  refreshingLabel: 'Reading…',
  ctaIntros: {
    operational:
      'The host reports nothing and your site is still unreachable? Send me its link: I find out where the outage comes from and reply within 24 hours, for free.',
    degraded:
      'Is your site affected by this disruption, or are you not sure it is the cause? Send me its link, I check within 24 hours.',
    incident:
      'Your site does not come back once the incident is closed? Send me its link, I look at what is blocking it and reply within 24 hours.',
    maintenance:
      'Your site does not come back at the end of the maintenance? Send me its link, I check within 24 hours.',
    unknown:
      'Your site is unreachable and you do not know where it comes from? Send me its link, I take a look and reply within 24 hours.',
  },
  ctaLabel: 'Send the link to my site',
}

const HUB_FAQ: DibodevFaqQuestion[] = [
  {
    question: 'My host says everything is working, but my site is unreachable. Why?',
    answer:
      'Nine times out of ten, the outage is on the site itself and not on the server: a WordPress plugin broken after an update, a PHP file in error, a saturated database, an expired HTTPS certificate or a domain name that has lapsed. The host only sees its machines; your site also depends on your code and your domain. The three checks on this page tell the difference in five minutes.',
  },
  {
    question: 'How does this page know the status of the hosts?',
    answer:
      'A program reads the official status pages of OVHcloud, IONOS, Hostinger, Gandi, Infomaniak and LWS every five minutes and keeps the time of each change of state. o2switch and PlanetHoster have no readable status page: their card says so and points to their announcements on X and their support, without guessing anything. Nothing is guessed from the response code of a page: a status page answers “200 OK” even in the middle of an outage.',
  },
  {
    question: 'How long does a hosting outage last?',
    answer:
      'Most incidents published on status pages last from twenty minutes to three hours. Long outages, from several hours to several days, are rare and usually involve failing hardware (a file server, a cluster) or a whole data centre. Hosts rarely give a return time before they have identified the cause: rely on the updates of their page rather than on an estimate.',
  },
  {
    question: 'Can I get a refund for an outage?',
    answer:
      'It depends on the specific terms of your plan. The shared hosting plans of the big hosts usually include an availability commitment and a goodwill gesture on request, rarely an automatic refund. Keep the start and end time of the incident as shown on the status page: that is the evidence you will be asked for.',
  },
  {
    question: 'Should I change host after an outage?',
    answer:
      'Not for an isolated outage: every host on this page had incidents in 2026. Change if the outages repeat, if support does not answer during the incident, or if your site has become too important for shared hosting at a few euros a month. A well-prepared migration takes a week, with no visible downtime, changing the DNS last.',
  },
  {
    question: 'Are you the host?',
    answer:
      'No. Dibodev is an independent developer who puts websites and software online with these hosts, and maintains them, for small and medium businesses. This page exists because the first question of a client whose site stops responding is always the same: “is it me or the host?”. For an incident on your account, your host’s support remains the only contact.',
  },
]

const HUB_FACTS: DibodevSourcedFact[] = [
  {
    contextLabel: '6 hosts out of 8',
    title: 'Six hosts publish an official status page',
    text: 'OVHcloud, IONOS, Hostinger and Gandi use the Statuspage service; Infomaniak and LWS run their own page. That is where an incident is acknowledged, dated, then closed, and that is what this page reads.',
    sourceName: 'OVHcloud, Web Cloud status page',
    sourceUrl: 'https://web-cloud.status-ovhcloud.com/',
  },
  {
    contextLabel: 'o2switch and PlanetHoster',
    title: 'Two hosts have no public status page',
    text: 'o2switch publishes its maintenance and incident announcements on its X account; PlanetHoster closed the forum that served as a status page, and its links now lead to a contact form. For those two, this page shows no status: it points to their public announcements and their support rather than guessing.',
    sourceName: 'o2switch on X',
    sourceUrl: 'https://x.com/o2switch',
  },
  {
    contextLabel: '21 to 23 October 2026',
    title: 'The PHP vulnerability showed the value of these pages',
    text: 'For three days, the hosts rolled out the PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35 fixes server by server, with short interruptions announced on their status pages and X accounts. The sites that showed a blank page that morning were not hacked: they were waiting for their server.',
    sourceName: 'IONOS, status page',
    sourceUrl: 'https://www.ionos-status.fr/',
  },
  {
    contextLabel: 'Code 200',
    title: 'A status page answers “OK” even in the middle of an outage',
    text: 'The response code of a status page says nothing about the hosting: only its content matters. This page therefore reads the declared incidents and the affected components, never the mere fact that the page loads. And when the read fails, it says so instead of showing “all good”.',
    sourceName: 'Statuspage, public API',
    sourceUrl: 'https://statuspage.hostinger.com/api/v2/summary.json',
  },
]

const HUB: DibodevHostingStatusPageSections = {
  meta: {
    title: 'Is your web host down? Live status of OVH, IONOS, Hostinger…',
    description:
      'Website down? Live status of OVHcloud, IONOS, Hostinger, Infomaniak, Gandi and LWS, where to look for o2switch and PlanetHoster, and what to do meanwhile.',
    inLanguage: 'en-GB',
    schemaAbout: 'Status of French web hosting providers',
  },
  breadcrumbLabel: 'Is your web host down?',
  shareImage: {
    titleLines: ['Is your web host', 'down?'],
    highlight: 'down',
    subtitle: 'OVHcloud, o2switch, IONOS, Hostinger, Infomaniak, PlanetHoster, Gandi, LWS',
    badge: 'Live',
    alt: 'Is your web host down? The live status of French web hosts on dibodev.fr',
  },
  hero: {
    titleBefore: 'Is your web host ',
    titleHighlight: 'down',
    titleAfter: '?',
    description:
      'Website not responding? Before looking for a security breach or calling your developer, check whether the outage comes from the host. The status of six web hosts of the French market is read every five minutes from their official status pages; for o2switch and PlanetHoster, which have none, the page says where to look.',
    reassurances: [`Read every 5${NBSP}minutes`, 'Official sources', 'What to do during the outage'],
    authorIntro: AUTHOR_INTRO,
    authorBio: AUTHOR_BIO,
  },
  mobileContactBar: {
    text: 'Your site is unreachable and it is not the host?',
    buttonLabel: 'Send the link to my site',
  },
  checks: {
    anchorId: 'verifications',
    eyebrow: 'You or the host?',
    title: 'Three checks before calling anyone',
    intro:
      'When the host reports nothing, the outage is almost always on the site, the domain or the cache. Five minutes are enough to find out.',
    items: COMMON_CHECKS,
  },
  facts: {
    anchorId: 'faits',
    eyebrow: 'What you need to know',
    title: 'How hosts announce their outages',
    intro: 'Facts re-read on 27 October 2026 on the pages of each host.',
    facts: HUB_FACTS,
    calloutEmphasizedIntro: 'A reading, not a diagnosis:',
    calloutText:
      'this page says what the host announces. It does not test your site. To find out why your site does not respond, send me its link: I take a look and reply within 24 hours.',
  },
  method: {
    eyebrow: 'During the outage',
    title: 'What to do in the first ten minutes',
    intro: 'In order, without breaking anything.',
    steps: COMMON_METHOD_STEPS,
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Hosting outages: the answers',
    questions: HUB_FAQ,
  },
  relatedArticles: {
    title: 'Also worth reading',
    intro: 'When the outage comes from the site and not from the host.',
  },
  contactCta: {
    title: 'Your site is unreachable and the host reports nothing?',
    description:
      'Send me the link to your site: I find out where the outage comes from (domain, certificate, PHP, plugin, database) and tell you what to do within 24 hours. Free, no commitment.',
    button: 'Send the link to my site',
  },
}

/**
 * Builds the page of one provider from what differs between them; the checks, the method and the CTA are shared.
 * @param {DibodevHostingProviderKey} key - The provider.
 * @param {DibodevHostingProviderPageSpecifics} specifics - Its own texts and facts.
 * @returns {DibodevHostingProviderPageContent} The page content.
 */
function buildProviderPage(
  key: DibodevHostingProviderKey,
  specifics: DibodevHostingProviderPageSpecifics,
): DibodevHostingProviderPageContent {
  const hasReadableStatusPage: boolean = HostingStatusUtils.hasReadableStatusPage(key)

  return {
    key,
    name: specifics.name,
    supportUrl: specifics.supportUrl,
    supportLabel: specifics.supportLabel,
    meta: {
      title: specifics.metaTitle,
      description: specifics.metaDescription,
      inLanguage: 'en-GB',
      schemaAbout: `Status of ${specifics.name} services`,
    },
    breadcrumbLabel: specifics.name,
    shareImage: {
      titleLines: [`Is ${specifics.name}`, 'down?'],
      highlight: 'down',
      subtitle: specifics.shareSubtitle,
      badge: hasReadableStatusPage ? 'Live' : 'What to do',
      alt: hasReadableStatusPage
        ? `Is ${specifics.name} down? The live status on dibodev.fr`
        : `Is ${specifics.name} down? Where to look and what to do, on dibodev.fr`,
    },
    hero: {
      titleBefore: `Is ${specifics.name} `,
      titleHighlight: 'down',
      titleAfter: '?',
      description: specifics.heroDescription,
      reassurances: hasReadableStatusPage
        ? [`Read every 5${NBSP}minutes`, 'Recent incidents', 'What to do during the outage']
        : ['Official channels', 'Three checks', 'What to do during the outage'],
      authorIntro: AUTHOR_INTRO,
      authorBio: AUTHOR_BIO,
    },
    mobileContactBar: {
      text: `Your site at ${specifics.name} is unreachable?`,
      buttonLabel: 'Send the link to my site',
    },
    checks: {
      anchorId: 'verifications',
      eyebrow: 'You or the host?',
      title: `Three checks when ${specifics.name} reports nothing`,
      intro: 'When the status page is green, the outage is almost always on the site, the domain or the cache.',
      items: COMMON_CHECKS,
    },
    facts: {
      anchorId: 'faits',
      eyebrow: 'What you need to know',
      title: `${specifics.name} and outages: the facts`,
      intro: 'Re-read on 27 October 2026 on the host’s official pages.',
      facts: specifics.facts,
      calloutEmphasizedIntro: 'Official support:',
      calloutText: specifics.factsCalloutText,
    },
    method: {
      eyebrow: 'During the outage',
      title: 'What to do in the first ten minutes',
      intro: 'In order, without breaking anything.',
      steps: COMMON_METHOD_STEPS,
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      title: `${specifics.name} outages: the answers`,
      questions: specifics.faq,
    },
    relatedArticles: {
      title: 'Also worth reading',
      intro: `The guides written for sites hosted at ${specifics.name}, and what breaks a site without the host being at fault.`,
    },
    contactCta: {
      title: `Your site at ${specifics.name} is unreachable and the host reports nothing?`,
      description:
        'Send me the link to your site: I find out where the outage comes from (domain, certificate, PHP, plugin, database) and tell you what to do within 24 hours. Free, no commitment.',
      button: 'Send the link to my site',
    },
  }
}

const PROVIDERS: Record<DibodevHostingProviderKey, DibodevHostingProviderPageContent> = {
  ovh: buildProviderPage('ovh', {
    name: 'OVHcloud',
    supportUrl: 'https://docs.ovhcloud.com/fr/guides/web-cloud/web-hosting/diagnostic-website-not-accessible',
    supportLabel: 'What to do if my site is unreachable? (OVHcloud guide)',
    metaTitle: 'Is OVH down? Live status of OVHcloud web hosting',
    metaDescription:
      'Is OVHcloud down today? The status of web hosting, domains and DNS read every 5 minutes on the official status page, recent incidents and what to do.',
    heroDescription:
      'Your site hosted at OVHcloud is not responding? Here is what the host’s Web Cloud status page says (shared hosting, domains, DNS, databases), read every five minutes, and how to tell whether the outage comes from the host or from your site.',
    shareSubtitle: 'Web hosting, domains, DNS: the live status',
    facts: [
      {
        contextLabel: 'Status page',
        title: 'OVHcloud publishes six status pages, including one for web hosting',
        text: 'The status-ovhcloud.com portal groups six pages; the one that matters for a showcase site or an online store is “Web Cloud”: shared hosting in the Gravelines (GRA) and Beauharnois (BHS) data centres, domains, DNS, databases, CDN. That is the one read here.',
        sourceName: 'OVHcloud, Web Cloud status',
        sourceUrl: 'https://web-cloud.status-ovhcloud.com/',
      },
      {
        contextLabel: '27 October 2026',
        title: 'An incident on a file server cut off sites of cluster 129',
        text: 'The “Filerz 956 Cluster129” incident was opened at 09:36 UTC with a major impact: “customers were temporarily unable to access their sites hosted on the affected filerz”. The same day, an incident on cluster 121 (10:28 to 13:59 UTC) did not affect access to the sites.',
        sourceName: 'OVHcloud, Web Cloud incident history',
        sourceUrl: 'https://web-cloud.status-ovhcloud.com/history',
      },
      {
        contextLabel: 'Cluster',
        title: 'Your shared hosting plan has a cluster number',
        text: 'Each OVHcloud web hosting plan is attached to a cluster (cluster021, cluster121…) shown in the customer area, under Hosting plans. Incidents are announced per cluster: if yours is not mentioned, the outage is probably not that one.',
        sourceName: 'OVHcloud, diagnosing an unreachable site',
        sourceUrl: 'https://docs.ovhcloud.com/fr/guides/web-cloud/web-hosting/diagnostic-website-not-accessible',
      },
      {
        contextLabel: 'Permanent maintenance',
        title: 'Several clusters are under maintenance without the sites being cut off',
        text: 'On the Web Cloud page, around ten clusters appear “under maintenance” continuously: these are background operations, not outages. This page does not count them as incidents; only the incidents declared by OVHcloud are.',
        sourceName: 'OVHcloud, Web Cloud status',
        sourceUrl: 'https://web-cloud.status-ovhcloud.com/',
      },
    ],
    factsCalloutText:
      'the OVHcloud guide “What to do if my site is unreachable?” details the checks on the customer side (DNS, .htaccess, PHP, quotas) and how to open a ticket from the customer area. Phone support can be reached on 1007 from France.',
    faq: [
      {
        question: 'How do I know whether the outage comes from OVHcloud or from my site?',
        answer:
          'Look at the status above first: an ongoing Web Cloud incident on your cluster explains everything, and all you can do is wait. If nothing is announced, open your customer area, under Hosting plans: an expired hosting plan, a domain that was not renewed or a quota alert are shown there. Then, a 500 error or a blank page point to your site (PHP, plugin, database); a timeout rather points to the DNS or the server.',
      },
      {
        question: 'My OVH site shows a blank page since the PHP update of October 2026',
        answer:
          'From 21 to 23 October 2026, OVHcloud rolled out the PHP fixes on all its shared clusters. A site left on an old PHP version, or whose plugin is no longer compatible, may show a blank page or a 500 error after this change. The blog guide “changing the PHP version at OVH” explains where to read and change the version in the customer area.',
      },
      {
        question: 'How long do OVHcloud incidents on web hosting last?',
        answer:
          'The cluster incidents published in October 2026 lasted from a few minutes to a few hours: three and a half hours for cluster 121 on 27 October, a little over five hours for clusters 120, 126 and 131 on 26 October. File server (filerz) incidents can last longer, as they sometimes require a restore.',
      },
      {
        question: 'Does OVHcloud refund an outage?',
        answer:
          'The specific terms of OVHcloud web hosting include an availability commitment and penalties in the form of a credit note, to be requested from support with the incident references. Nothing is automatic: keep the start and end time shown on the status page.',
      },
    ],
  }),
  o2switch: buildProviderPage('o2switch', {
    name: 'o2switch',
    supportUrl: 'https://faq.o2switch.fr/guides/webmastering/debuguer-page-blanche-erreur-500/',
    supportLabel: 'Fixing a blank page or a 500 error (o2switch FAQ)',
    metaTitle: 'Is o2switch down? Where to look and what to do',
    metaDescription:
      'Is o2switch down today? It has no status page: where to read its announcements, how to tell whether the outage is on its side, and what to do.',
    heroDescription:
      'Your site hosted at o2switch is not responding? o2switch has no public status page: its maintenance and incident announcements go through its X account. Here is where to look, and how to tell in five minutes whether the outage comes from the host or from your site.',
    shareSubtitle: 'Shared hosting: what the host announces',
    facts: [
      {
        contextLabel: 'No status page',
        title: 'o2switch has no official status page',
        text: 'No “status” or “service status” address exists at o2switch. The website points to support and to the X account, where maintenance announcements and incidents are published. An o2switch page on Statuspage exists, but it is a draft that was never put into service, frozen in January 2024: it always shows “everything is working”.',
        sourceName: 'o2switch, support page',
        sourceUrl: 'https://www.o2switch.fr/support-hebergeur/',
      },
      {
        contextLabel: '21 to 23 October 2026',
        title: 'The PHP fixes were announced on X, server by server',
        text: 'On 21 October at 22:44 UTC, o2switch announced the rollout of the PHP fixes “on all our servers”; on the 22nd at 07:21, the end of the rollout; on the 23rd, a clarification about the version number displayed. During that period, some sites showed a blank page while the server restarted.',
        sourceName: 'o2switch on X',
        sourceUrl: 'https://x.com/o2switch',
      },
      {
        contextLabel: 'Single plan',
        title: 'One server per customer, in Clermont-Ferrand',
        text: 'o2switch offers a single shared hosting plan, hosted in its own data centre in Clermont-Ferrand, with cPanel. An outage therefore affects one server and all its sites, rarely the whole host: check whether another site hosted on the same server as yours responds.',
        sourceName: 'o2switch, the single plan',
        sourceUrl: 'https://www.o2switch.fr/',
      },
      {
        contextLabel: '500 error',
        title: 'The FAQ explains how to read Apache errors from cPanel',
        text: 'When the server responds but the site shows a blank page or a 500 error, the cause is in the site: o2switch documents how to read the Apache error log from cPanel and the most common fixes (plugin, .htaccess, PHP version).',
        sourceName: 'o2switch, Apache errors FAQ',
        sourceUrl: 'https://faq.o2switch.fr/cpanel/mesures/erreurs-apache/',
      },
    ],
    factsCalloutText:
      'o2switch support answers by ticket from the customer area and by phone, 7 days a week. In case of a server outage, it is the one giving the return time.',
    faq: [
      {
        question: 'How do I know whether the outage comes from o2switch or from my site?',
        answer:
          'Without a status page, the safest way is to test another site hosted at o2switch, ideally on the same server as yours (the server name is in your customer area). If it responds, the outage is on your site: a 500 error or a blank page can be read in the cPanel error log. If it does not respond either, open a ticket: o2switch support confirms the incident, or not.',
      },
      {
        question: 'Has o2switch announced an outage today?',
        answer:
          'This page cannot tell: o2switch has no readable status page, and guessing a status from its posts would be misleading. Its maintenance and incident announcements go through its X account (x.com/o2switch); an outage of an isolated server is not always announced there. To be sure, open a ticket from the customer area: support confirms the incident, or not.',
      },
      {
        question: 'My o2switch site shows a blank page since the PHP update',
        answer:
          'The PHP fixes of 21 to 23 October 2026 were installed on every server. A site that used a very old PHP version, or a plugin incompatible with the version chosen in cPanel, may show a blank page since then. The guide “changing the PHP version at o2switch” explains where to set the version in cPanel, extension by extension.',
      },
      {
        question: 'Does o2switch refund an outage?',
        answer:
          'The general terms of o2switch include an availability guarantee and a goodwill gesture on request, not an automatic refund. Note the start and end time of the downtime as you observed it, and attach it to your ticket.',
      },
    ],
  }),
  infomaniak: buildProviderPage('infomaniak', {
    name: 'Infomaniak',
    supportUrl: 'https://www.infomaniak.com/fr/support/faq/978/resoudre-un-probleme-de-site-inaccessible',
    supportLabel: 'Solving an unreachable website problem (Infomaniak FAQ)',
    metaTitle: 'Is Infomaniak down? Live service status',
    metaDescription:
      'Is Infomaniak down today? Hosting, domain and email status read every 5 minutes on infomaniakstatus.com, ongoing events and what to do if your site is down.',
    heroDescription:
      'Your site hosted at Infomaniak is not responding? Here is what the service status page of the Swiss host says, read every five minutes, with the ongoing events and the history of the last few days, and how to tell whether the outage comes from the host or from your site.',
    shareSubtitle: 'Hosting, domains, email: the live status',
    facts: [
      {
        contextLabel: 'Status page',
        title: 'Infomaniak runs its own status page, in five languages',
        text: 'infomaniakstatus.com lists the ongoing events (maintenance, incidents, disruptions) with their start time and estimated end time, then the history of the last sixty days with the duration of each event. Each event has its own page with time-stamped updates.',
        sourceName: 'Infomaniak, service status',
        sourceUrl: 'https://infomaniakstatus.com/fr/',
      },
      {
        contextLabel: '27 October 2026',
        title: 'A nine-hour incident on the Cloud VPS',
        text: 'The event “VPS Cloud: ongoing event” lasted from 01:00 to 10:40 on 27 October 2026. On 23 October, the S3 authentication of the Public Cloud was disrupted for seven hours; on the 22nd, migrations to the new infrastructure were suspended for eight hours.',
        sourceName: 'Infomaniak, history of the last 60 days',
        sourceUrl: 'https://infomaniakstatus.com/fr/',
      },
      {
        contextLabel: '21 October 2026',
        title: 'The PHP fixes were the subject of a two-day event',
        text: 'The event “Critical PHP vulnerabilities: security measures and recommendations” was opened on 21 October and kept up to date for two days, while the fixes were rolled out on the hosting plans and customers were advised to check their PHP version.',
        sourceName: 'Infomaniak, history of the last 60 days',
        sourceUrl: 'https://infomaniakstatus.com/fr/',
      },
      {
        contextLabel: 'Switzerland',
        title: 'Data centres in Switzerland, the same time as Paris',
        text: 'Infomaniak’s servers are in Switzerland (Geneva area) and the status page is on Swiss time, the same as Paris. The dates shown here are therefore those of the page, without conversion.',
        sourceName: 'Infomaniak, unreachable website FAQ',
        sourceUrl: 'https://www.infomaniak.com/fr/support/faq/978/resoudre-un-probleme-de-site-inaccessible',
      },
    ],
    factsCalloutText:
      'the Infomaniak FAQ “Solving an unreachable website problem” goes through the causes on the customer side (domain, DNS, certificate, PHP, quotas). Support can be reached by ticket from the Manager and by phone, 7 days a week.',
    faq: [
      {
        question: 'How do I know whether the outage comes from Infomaniak or from my site?',
        answer:
          'The status above tells maintenance (announced in advance, with an end time) apart from incidents and disruptions. If nothing concerns web hosting, open the Infomaniak Manager: an expired domain, a suspended hosting plan or an alert are shown there. The host’s FAQ 978 then goes through the causes on the site side, from the most frequent to the rarest.',
      },
      {
        question: 'Do Infomaniak maintenance operations cut off the sites?',
        answer:
          'Most of the time, no: the Public Cloud, Cloud Server or Node.js maintenance operations announced on the status page concern specific products and, at worst, involve short interruptions. The event’s label and its tag (hosting, email, cloud) say which product is concerned.',
      },
      {
        question: 'How long do Infomaniak incidents last?',
        answer:
          'The events in the history of the last sixty days range from a few dozen minutes to a few hours: nine hours for the Cloud VPS on 27 October 2026, seven hours for the S3 authentication on 23 October. Each event’s page gives the updates to the minute.',
      },
      {
        question: 'Does Infomaniak refund an outage?',
        answer:
          'Infomaniak’s specific terms include an availability commitment depending on the product; a request is made from the Manager with the event references. Nothing is automatic: keep the start and end time shown on the event’s page.',
      },
    ],
  }),
  ionos: buildProviderPage('ionos', {
    name: 'IONOS',
    supportUrl: 'https://www.ionos.fr/digitalguide/hebergement/aspects-techniques/err-connection-refused/',
    supportLabel: 'This site can’t be reached: the solutions (IONOS guide)',
    metaTitle: 'Is IONOS down? Live web hosting status',
    metaDescription:
      'Is IONOS down today? Hosting, domain and email status read every 5 minutes on ionos-status.fr, recent incidents and what to do if your site is down.',
    heroDescription:
      'Your site hosted at IONOS is not responding? Here is what the host’s French status page says (web hosting, WordPress, domains, email, customer area), read every five minutes, and how to tell whether the outage comes from the host or from your site.',
    shareSubtitle: 'Hosting, domains, email: the live status',
    facts: [
      {
        contextLabel: 'Status page',
        title: 'IONOS has a French status page, separate from the American one',
        text: 'ionos-status.fr covers the French offer: web hosting, WordPress hosting, domains, email, servers, website builder, customer area. Incidents are written in French, in Paris time. The ionos-status.com page, for its part, covers the American offer.',
        sourceName: 'IONOS, status page',
        sourceUrl: 'https://www.ionos-status.fr/',
      },
      {
        contextLabel: '22 October 2026',
        title: 'Two incidents on the control panel on the same day',
        text: 'On 22 October 2026, “some functions of the control panel” were unavailable from 12:30 to 13:08, then from 16:06 to 18:14. The sites themselves stayed online: only the administration was affected.',
        sourceName: 'IONOS, incident history',
        sourceUrl: 'https://www.ionos-status.fr/history',
      },
      {
        contextLabel: '21 and 22 October 2026',
        title: 'The PHP security maintenance lasted one night',
        text: 'The incident “Security maintenance: short interruptions possible on PHP-based services” was opened on 21 October at 18:11 and closed on the 22nd at 13:07, while the PHP fixes were rolled out on the hosting plans. Sites may have been briefly unavailable during the restarts.',
        sourceName: 'IONOS, incident history',
        sourceUrl: 'https://www.ionos-status.fr/history',
      },
      {
        contextLabel: 'Customer area',
        title: 'An outage of the customer area is not an outage of your site',
        text: 'IONOS declares incidents of the customer area, the login and the AI tools separately. When only the “IONOS” group (customer area) is affected, your site stays reachable for visitors; you simply cannot administer it during the incident.',
        sourceName: 'IONOS, monitored components',
        sourceUrl: 'https://www.ionos-status.fr/',
      },
    ],
    factsCalloutText:
      'the IONOS guide “This site can’t be reached” explains the causes on the browser side and on the site side. IONOS support can be reached by phone and by chat from the customer area, 24 hours a day.',
    faq: [
      {
        question: 'How do I know whether the outage comes from IONOS or from my site?',
        answer:
          'Read the status above first: an incident in the “Hosting” or “Domains” group concerns you, an incident in the “IONOS” group (customer area) does not. If nothing is announced, test another site hosted at IONOS. If it responds, the outage is on your site: expired contract, domain not renewed, PHP error, plugin. The IONOS guide “ERR_CONNECTION_REFUSED” lists the checks on the browser side.',
      },
      {
        question: 'My IONOS site shows a 503 error or a blank page',
        answer:
          'A 503 error at IONOS most often comes from a resource limit of the hosting plan or from a PHP script that no longer responds; a blank page comes from a PHP error, often after a version change or a plugin update. The IONOS guide “HTTP 503” and the blog guide “changing the PHP version at IONOS” detail both cases.',
      },
      {
        question: 'How long do IONOS incidents last?',
        answer:
          'The incidents of October 2026 lasted from forty minutes (control panel, on 22 October at noon) to two hours (the same day in the late afternoon); the PHP security maintenance stayed open for nineteen hours. Incidents are updated in French on the status page until they are closed.',
      },
      {
        question: 'Does IONOS refund an outage?',
        answer:
          'IONOS’s specific terms include an availability commitment for web hosting; the request is made to support with the incident references. Nothing is automatic: keep the start and end times shown on the status page.',
      },
    ],
  }),
  hostinger: buildProviderPage('hostinger', {
    name: 'Hostinger',
    supportUrl:
      'https://www.hostinger.com/fr/support/1583286-que-faire-si-vous-ne-pouvez-pas-acceder-a-votre-site-web-chez-hostinger/',
    supportLabel: 'What to do if you cannot access your website (Hostinger help)',
    metaTitle: 'Is Hostinger down? Live hosting status',
    metaDescription:
      'Is Hostinger down today? Shared, cloud and email hosting status read every 5 minutes on its status page, recent incidents and what to do if your site is down.',
    heroDescription:
      'Your site hosted at Hostinger is not responding? Here is what the host’s status page says (shared hosting, cloud, cPanel, email, data centres), read every five minutes, and how to tell whether the outage comes from the host or from your site.',
    shareSubtitle: 'Shared hosting, cloud, email: the live status',
    facts: [
      {
        contextLabel: 'Status page',
        title: 'Hostinger publishes the status of 85 components, in English',
        text: 'statuspage.hostinger.com tracks shared hosting, cloud, cPanel, email and thirteen data centres, including the European ones. Incidents are written in English and time-stamped in universal time; this page shows them in Paris time.',
        sourceName: 'Hostinger, status page',
        sourceUrl: 'https://statuspage.hostinger.com/',
      },
      {
        contextLabel: 'Several times a day',
        title: '“Emergency Server Maintenance” events are not general outages',
        text: 'Hostinger declares each emergency intervention on an isolated server (“Emergency Server fr-1231 Maintenance”, a few minutes) as an incident with no impact. This page sets them aside to keep only the incidents that affect a whole service; if your server is mentioned, it is on the official page that you will see it.',
        sourceName: 'Hostinger, incident history',
        sourceUrl: 'https://statuspage.hostinger.com/history',
      },
      {
        contextLabel: '27 October 2026',
        title: 'Two open incidents on tools, not on the sites',
        text: 'On 27 October 2026, Hostinger was tracking an incident on its analytics (“Analytics Temporarily Unavailable”) and another on its web page recovery tools; the hosting itself was not declared down.',
        sourceName: 'Hostinger, ongoing incidents',
        sourceUrl: 'https://statuspage.hostinger.com/',
      },
      {
        contextLabel: 'hPanel',
        title: 'The hPanel panel can be slowed down without the sites being',
        text: 'The “Hostinger hPanel Backend” component regularly appears with degraded performance. That slows down the administration of the hosting, not the visitors’ sites.',
        sourceName: 'Hostinger, monitored components',
        sourceUrl: 'https://statuspage.hostinger.com/',
      },
    ],
    factsCalloutText:
      'the article “What to do if you cannot access your website at Hostinger” lists the checks on the customer side. Hostinger support is by chat from hPanel, 24 hours a day; there is no phone support.',
    faq: [
      {
        question: 'How do I know whether the outage comes from Hostinger or from my site?',
        answer:
          'Read the status above: an incident on “Hostinger Shared Hosting”, “Cloud Hosting” or a data centre concerns you; an incident on hPanel, analytics or AI does not. If nothing is announced, test another site hosted at Hostinger; if it responds, the cause is on your site or your domain. Hostinger’s help article goes through the checks in order.',
      },
      {
        question: 'My Hostinger server is in “Emergency Maintenance”, what should I do?',
        answer:
          'Nothing: these interventions last a few minutes and are carried out by Hostinger. If your server (its name is in hPanel) is mentioned, wait for the end announced on the official page. These interventions are not counted here as general outages, so as not to show an incident permanently.',
      },
      {
        question: 'My Hostinger site shows a blank page since the PHP update',
        answer:
          'Hostinger rolled out the PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35 fixes on 21 October 2026. A site left on an older version, or an incompatible plugin, may show a blank page since then. The blog guide “changing the PHP version at Hostinger” explains the setting in hPanel.',
      },
      {
        question: 'Does Hostinger refund an outage?',
        answer:
          'Hostinger advertises a 99.9% uptime guarantee in its terms; compensation is requested from support by chat with the incident references. Nothing is automatic: keep the start and end time shown on the status page.',
      },
    ],
  }),
  planethoster: buildProviderPage('planethoster', {
    name: 'PlanetHoster',
    supportUrl: 'https://kb.planethoster.com/guide/astuces-techniques/codes-d-erreur-http/',
    supportLabel: 'Understanding HTTP error codes (PlanetHoster knowledge base)',
    metaTitle: 'Is PlanetHoster down? Where to look and what to do',
    metaDescription:
      'Is PlanetHoster down today? No status page any more: where to read its announcements, how to tell if the outage is on its side, and what to do.',
    heroDescription:
      'Your site hosted at PlanetHoster is not responding? PlanetHoster no longer has a public status page: its announcements go through its X account and its blog. Here is where to look, and how to tell in five minutes whether the outage comes from the host or from your site.',
    shareSubtitle: 'World, HybridCloud, N0C: what the host announces',
    facts: [
      {
        contextLabel: 'No status page',
        title: 'The forum that served as a status page has closed',
        text: 'The “Service status” and “Work in progress” links on the PlanetHoster website point to a closed forum, which redirects to a contact form. The “Work and maintenance” category of the blog has not been updated since January 2019. There is no status.planethoster address.',
        sourceName: 'PlanetHoster, official website',
        sourceUrl: 'https://www.planethoster.com/fr/',
      },
      {
        contextLabel: '21 to 23 October 2026',
        title: 'The PHP fixes were announced on X, then on the blog',
        text: 'On 21 October at 23:39 UTC, PlanetHoster announced the rollout of the PHP fixes “on all our servers”, with updates on 22 and 23 October, then a post-mortem “PHP2Shell: a look back at our intervention” published on the blog on 23 October.',
        sourceName: 'PlanetHoster, blog',
        sourceUrl: 'https://blog.planethoster.com/',
      },
      {
        contextLabel: 'France and Canada',
        title: 'Data centres in two countries',
        text: 'PlanetHoster’s World and HybridCloud hosting plans are spread between France and Canada (Montreal). Public announcements often give both Montreal and Paris time; this page shows the times in Paris time.',
        sourceName: 'PlanetHoster, official website',
        sourceUrl: 'https://www.planethoster.com/fr/',
      },
      {
        contextLabel: 'HTTP codes',
        title: 'The knowledge base explains the error codes',
        text: 'When the server responds but the site shows an error, PlanetHoster documents how to read the HTTP codes (403, 404, 500, 503) and the common fixes from its N0C panel.',
        sourceName: 'PlanetHoster, knowledge base',
        sourceUrl: 'https://kb.planethoster.com/guide/astuces-techniques/codes-d-erreur-http/',
      },
    ],
    factsCalloutText:
      'PlanetHoster support answers by ticket from the customer area and by phone. In case of an outage, it is the one confirming the incident and giving the return time.',
    faq: [
      {
        question: 'How do I know whether the outage comes from PlanetHoster or from my site?',
        answer:
          'Without a status page, test another site hosted at PlanetHoster, on the same platform as yours (World or HybridCloud, shown in the customer area). If it responds, the outage is on your site: the HTTP error codes can be read from N0C. If it does not respond either, open a ticket: support confirms the incident, or not.',
      },
      {
        question: 'Has PlanetHoster announced an outage today?',
        answer:
          'This page cannot tell: PlanetHoster no longer has a readable status page, and guessing a status from its posts would be misleading. Its announcements go through its X account (x.com/planethoster) and its blog. To be sure, open a ticket from the customer area: support confirms the incident, or not.',
      },
      {
        question: 'My PlanetHoster site shows a blank page since the PHP update',
        answer:
          'The PHP fixes were rolled out on every server from 21 to 23 October 2026. A site that used a very old PHP version, or an incompatible plugin, may show a blank page since then. The blog guide “changing the PHP version at PlanetHoster” explains the setting in N0C.',
      },
      {
        question: 'Does PlanetHoster refund an outage?',
        answer:
          'PlanetHoster’s general terms include an availability guarantee and a goodwill gesture on request, not an automatic refund. Note the start and end time of the downtime as you observed it, and attach it to your ticket.',
      },
    ],
  }),
  gandi: buildProviderPage('gandi', {
    name: 'Gandi',
    supportUrl: 'https://docs.gandi.net/fr/hebergement_web/erreurs_courantes/index.html',
    supportLabel: 'Common errors on a web hosting plan (Gandi documentation)',
    metaTitle: 'Is Gandi down? Live hosting and DNS status',
    metaDescription:
      'Is Gandi down today? Web hosting, DNS, email and domain status read every 5 minutes on status.gandi.net, recent incidents and what to do if your site is down.',
    heroDescription:
      'Your site or your domain name at Gandi is not responding? Here is what Gandi’s status page says (web hosting, DNS, email, portal), read every five minutes, and how to tell whether the outage comes from the host or from your site.',
    shareSubtitle: 'Hosting, DNS, domains, email: the live status',
    facts: [
      {
        contextLabel: 'Status page',
        title: 'Gandi tracks 30 components: hosting, DNS, email, portal, API',
        text: 'status.gandi.net separates hosting (Simple Hosting, PaaS, cloud), DNS, email, the customer portal and the APIs. For a site, the groups that matter are “Hosting” and “DNS”; an incident on the portal does not cut off the sites.',
        sourceName: 'Gandi, status page',
        sourceUrl: 'https://status.gandi.net/',
      },
      {
        contextLabel: '23 October 2026',
        title: 'A three-hour incident on the webmail',
        text: 'The “Webmail incident” lasted from 09:03 to 12:12 UTC on 23 October 2026, with a major impact on reading emails online; the sites were not concerned.',
        sourceName: 'Gandi, incident history',
        sourceUrl: 'https://status.gandi.net/history',
      },
      {
        contextLabel: '9 September 2026',
        title: '503 errors on part of the web hosting plans',
        text: 'The incident “503 error on some webhosting instances” lasted from 16:59 to 20:44 UTC on 9 September 2026, with a major impact: some hosted sites returned a 503 error for nearly four hours.',
        sourceName: 'Gandi, incident history',
        sourceUrl: 'https://status.gandi.net/history',
      },
      {
        contextLabel: 'Registries',
        title: 'Registry maintenance does not affect the sites',
        text: 'Around ten domain name registry maintenance operations are permanently scheduled on the status page. They can delay a domain registration or transfer, never the display of a site: this page does not count them as incidents.',
        sourceName: 'Gandi, scheduled maintenance',
        sourceUrl: 'https://status.gandi.net/',
      },
    ],
    factsCalloutText:
      'Gandi’s “Common errors” documentation explains HTTP errors and the causes on the site side. Gandi support answers by ticket from the customer portal.',
    faq: [
      {
        question: 'How do I know whether the outage comes from Gandi or from my site?',
        answer:
          'Look at the status above: a “Hosting” or “DNS” incident concerns you, a “Portal” or “Email” incident does not. If nothing is announced, check in the Gandi portal that the domain and the hosting plan are renewed, then read the error displayed: a 503 error or a blank page point to the site, a timeout rather points to the DNS.',
      },
      {
        question: 'My domain is at Gandi but my site is hosted elsewhere',
        answer:
          'In that case, only the “DNS” and “Domains” groups of the status page concern you. A DNS incident at Gandi makes your site unreachable even if the site’s host is working, because visitors can no longer find the server’s address. Also check the status of the site’s host on its own page.',
      },
      {
        question: 'How long do Gandi incidents last?',
        answer:
          'The incidents published in 2026 lasted from twenty minutes (PaaS operations on 6 October) to nearly four hours (503 errors on hosting plans on 9 September). Maintenance announced in advance can last a whole day, with no visible downtime in most cases.',
      },
      {
        question: 'Does Gandi refund an outage?',
        answer:
          'The specific terms of Gandi web hosting include an availability commitment and compensation on request, with the incident references. Nothing is automatic: keep the start and end time shown on the status page.',
      },
    ],
  }),
  lws: buildProviderPage('lws', {
    name: 'LWS',
    supportUrl: 'https://aide.lws.fr/base/Hebergement-web-mutualise/Depannage-des-erreurs-HTTP/Codes-derreurs-HTTP',
    supportLabel: 'Troubleshooting HTTP errors (LWS help)',
    metaTitle: 'Is LWS down? Live service status',
    metaDescription:
      'Is LWS down today? Web, mail, SQL, DNS and cPanel status read every 5 minutes on its status page, 72 hours of events and what to do if your site is down.',
    heroDescription:
      'Your site hosted at LWS is not responding? Here is what the host’s service status page says (web, mail, SQL, DNS, cPanel, Plesk, VPS), read every five minutes, with the events of the last seventy-two hours, and how to tell whether the outage comes from the host or from your site.',
    shareSubtitle: 'Web, mail, SQL, DNS, cPanel: the live status',
    facts: [
      {
        contextLabel: 'Status page',
        title: 'LWS runs a status page per service, with four levels',
        text: 'The “Service status” page of the LWS help centre shows a global status and a status per service (network, web, mail, SQL, VPS, DNS, data centre, cPanel, Plesk, backups) with four levels: all good, scheduled maintenance, ongoing disruption, ongoing incident. It only keeps the events of the last 72 hours: this page keeps the ones it has seen.',
        sourceName: 'LWS, service status',
        sourceUrl: 'https://aide.lws.fr/service-status',
      },
      {
        contextLabel: '27 October 2026',
        title: 'A Plesk maintenance and a mail service improvement in the morning',
        text: 'On 27 October 2026, LWS carried out a maintenance on the Plesk service from 08:00 to 11:35 and an improvement of the mail service from 08:00 to 08:32, both announced then closed on the status page.',
        sourceName: 'LWS, service status',
        sourceUrl: 'https://aide.lws.fr/service-status',
      },
      {
        contextLabel: 'Since 23 October 2026',
        title: 'A Node.js security fix on the cPanel servers',
        text: 'On 23 October 2026 at 18:09, LWS applied a Node.js security fix on its cPanel servers, closed on 27 October at 17:10. The same week, the page reported support response delays, classified as a “disruption”.',
        sourceName: 'LWS, service status',
        sourceUrl: 'https://aide.lws.fr/service-status',
      },
      {
        contextLabel: 'HTTP errors',
        title: 'The LWS help centre documents 500 errors on cPanel',
        text: 'When the server responds but the site shows an error, LWS documents the troubleshooting of HTTP codes and the diagnosis of a 500 error on a cPanel hosting plan: error log, .htaccess, PHP version, extensions.',
        sourceName: 'LWS, diagnosing a 500 error',
        sourceUrl: 'https://aide.lws.fr/base/cPanel/Hebergement-web-mutualise-cPanel/diagnostic-erreur-500-cpanel',
      },
    ],
    factsCalloutText:
      'the LWS help centre details the troubleshooting of HTTP errors and 500 errors on cPanel. LWS support answers by ticket from the customer area and by phone during business hours.',
    faq: [
      {
        question: 'How do I know whether the outage comes from LWS or from my site?',
        answer:
          'Read the status above: “ongoing incident” or “ongoing disruption” on the web, SQL or DNS service concerns you; a scheduled maintenance is announced in advance with its end time. If all is well on the LWS side, the outage is on your site: the LWS help centre explains how to read the error log from cPanel.',
      },
      {
        question: 'The LWS status page only shows 72 hours, where is the history?',
        answer:
          'LWS only shows the events of the last three days. This page keeps in memory the events it has read and the changes of state it has observed, so that you can find the date and duration of a past outage.',
      },
      {
        question: 'My LWS site shows a blank page since the PHP update',
        answer:
          'The PHP fixes of October 2026 were rolled out on the shared servers. A site left on an old PHP version, or a plugin incompatible with the version chosen in cPanel, may show a blank page since then. The version is set from the “Select PHP Version” tool in cPanel.',
      },
      {
        question: 'Does LWS refund an outage?',
        answer:
          'LWS’s general terms include an availability guarantee and a goodwill gesture on request, not an automatic refund. Note the start and end time of the downtime as it appears on the status page, and attach it to your ticket.',
      },
    ],
  }),
}

export const HOSTING_STATUS_PAGE_EN: DibodevHostingStatusPageContent = {
  cardWording: CARD_WORDING,
  boardWording: {
    stateLabels: CARD_WORDING.stateLabels,
    checkedAtText: 'Checked at {time}, Paris time. Hosts with an incident move to the top.',
    loadingText: 'Reading the status pages…',
    errorText: 'Unable to read the statuses for now. Try again in a minute.',
    lastIncidentText: '{title} · {date}',
    noIncidentText: 'No recent event',
    noStatusPageLabel: 'No status page',
    noStatusPageText: 'Announcements on X and support',
    cardLinkLabel: 'See details',
  },
  hub: HUB,
  providers: PROVIDERS,
}
