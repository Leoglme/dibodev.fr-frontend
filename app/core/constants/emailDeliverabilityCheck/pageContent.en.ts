import type { DibodevEmailDeliverabilityCheckPageContent } from '~/core/types/DibodevEmailDeliverabilityCheckPage'
import {
  EMAIL_DELIVERABILITY_SOURCES,
  EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS,
} from '~/core/constants/emailDeliverabilityCheck/pageShared'

export const EMAIL_DELIVERABILITY_CHECK_PAGE_EN: DibodevEmailDeliverabilityCheckPageContent = {
  meta: {
    title: 'Do my emails land in spam? Check SPF, DKIM and DMARC',
    description:
      'Enter your domain: the tool reads SPF, DKIM and DMARC, recognises your mail provider and says what to fix to reach Gmail, Outlook.com, Orange and laposte.net.',
    inLanguage: 'en',
    schemaAbout: 'Email authentication (SPF, DKIM, DMARC) and mailbox provider requirements in 2026',
  },
  breadcrumbLabel: 'Emails in spam: check SPF, DKIM, DMARC',
  shareImage: {
    titleLines: ['Do my emails', 'land in spam?'],
    highlight: 'spam',
    subtitle: 'SPF, DKIM and DMARC read from the DNS of your domain, verdict and fixes',
    badge: 'Free check',
    alt: 'Do my emails land in spam? Free SPF, DKIM and DMARC check by Dibodev',
  },
  hero: {
    titleBefore: 'Do my emails land in ',
    titleHighlight: 'spam',
    titleAfter: '?',
    reassurances: ['Free, no sign-up', 'Result in a few seconds', 'Sources re-read on 27 October 2026'],
    description:
      'Orange, the largest consumer mailbox provider in France, now requires SPF, DKIM and DMARC from every sender, whatever the volume (rules updated on 1 September 2026). laposte.net has asked for the three since September 2025, iCloud too, and Gmail has been rejecting more and more unauthenticated messages since November 2025. A small business that sends its quotes and invoices from its own domain name is concerned from the very first email. This tool reads the public DNS records of your domain, recognises your mailbox provider and your sending services, looks for the DKIM key under their selectors, and tells you what is missing and in which order to fix it.',
    authorIntro: 'Tool built by',
    authorBio:
      'freelance developer near Rennes, France. I set up the email sending of the websites, online stores and business software I deliver to small businesses, remotely, and I reply within 24 hours.',
  },
  checker: {
    domainLabel: 'Your domain name',
    domainPlaceholder: 'mycompany.com',
    domainHint:
      'A domain or an email address (only the domain after the @ is kept). The tool reads the public DNS records, as a recipient would: no email is sent, nothing is stored.',
    submit: 'Check',
    checking: 'Reading DNS…',
    resultLabel: 'Your result',
    idleTitle: 'Enter your domain to start',
    idleText:
      'The result says whether your domain publishes a valid SPF record, a DKIM key under the selectors of your provider and a DMARC policy, then lists the fixes in order and the guides of your provider.',
    loadingTitle: 'Reading the records…',
    loadingText:
      'I read the SPF record and its includes, the MX hosts, the DMARC policy, then probe about twenty DKIM selectors at once. A few seconds.',
    errorTitles: {
      invalid: 'Domain to correct',
      unreachable: 'DNS unreachable',
      rateLimited: 'Too many checks',
      failed: 'Check impossible',
    },
    errorTexts: {
      invalid: 'Enter a domain name, like mycompany.com, or an email address: only the domain after the @ is used.',
      unreachable: 'The DNS servers of {domain} did not answer: try again in a moment.',
      rateLimited: 'You ran many checks in a short time. Try again in a few minutes.',
      failed: 'Something went wrong on my side. Try again in a moment, or send me your domain name.',
    },
    verdictTitles: {
      consumerMailbox: 'Free webmail address: nothing to set on your side',
      allGood: 'SPF, DKIM and DMARC in place',
      dmarcMissing: 'DMARC missing: to publish',
      dmarcNone: 'DMARC at p=none: you only observe',
      dkimNotFound: 'DKIM: no usable key found',
      spfMissing: 'No valid SPF record',
      spfTooPermissive: 'SPF too permissive ({spfAll})',
      spfTooManyLookups: 'SPF: {spfLookups} DNS lookups, limit is 10',
      multipleSpf: 'Several SPF records',
      noMailSetup: 'No mail set up on this domain',
      invalidDomain: 'Domain not found',
    },
    verdictTexts: {
      consumerMailbox:
        '{domain} is a consumer mailbox service: it publishes and manages SPF, DKIM and DMARC itself, and you have access to none of these settings. If your quotes land in spam from this address, the cause lies elsewhere (content, links, attachments, volume). For a business, an address on your own domain name (contact@your-company.com) inspires more trust and can be fully set up: test that domain instead.',
      allGood:
        '{domain} publishes an SPF record ending with {spfAll}, a DKIM key under the selector {dkimSelector} and a DMARC policy {dmarcPolicy}. Your emails have what Orange, laposte.net, Gmail, Outlook.com and iCloud ask for. The points below, if any, are improvements, not emergencies.',
      dmarcMissing:
        '{domain} has no DMARC record. Orange now requires SPF, DKIM and DMARC; laposte.net and iCloud do too. A p=none policy with a reporting address is enough to start, and blocks nothing. The details below show where the SPF record and the DKIM key stand.',
      dmarcNone:
        '{domain} has what it takes to start: an SPF record, a DKIM key and a DMARC policy in observation mode. Your emails pass. What remains is to read the reports, then move to quarantine and reject so that nobody else can send in your name.',
      dkimNotFound:
        '{domain} has an SPF record, but no usable DKIM key under the {selectorsProbed} selectors probed. Without a DKIM signature, Orange may reject the email, and Gmail and Outlook.com file it as spam more easily. If your provider enabled DKIM under another selector, the key may still exist: the detail below says how to check.',
      spfMissing:
        '{domain} publishes no usable SPF record. It is the first of the three to set up: a TXT line listing the servers allowed to send in your name. Without it, Gmail may reject the email (error 5.7.26) and Orange returns error 519.',
      spfTooPermissive:
        'The SPF record of {domain} exists, but its ending ({spfAll}) forbids nothing: any server can send in your name without being refused. One word to change, and it becomes useful.',
      spfTooManyLookups:
        'The SPF record of {domain} needs {spfLookups} DNS lookups to be evaluated. Above 10, recipients return a permanent error (RFC 7208) and the SPF record no longer counts. It has to be trimmed.',
      multipleSpf:
        '{domain} publishes {spfCount} records starting with v=spf1. RFC 7208 allows only one: with several, recipients return a permanent error, as if there were none. They must be merged.',
      noMailSetup:
        '{domain} has neither a receiving server (MX) nor an SPF record. Either this domain sends no email, and there is nothing to do, or your emails leave from another domain: check the one after the @ in your sending address.',
      invalidDomain:
        'No DNS answers for {domain}: the name is misspelt, expired, or not registered yet. Check the spelling, or try the domain after the @ in your address.',
    },
    spfNoAllLabel: 'no all',
    recordsTitle: 'The three records read',
    recordLabels: {
      spf: 'SPF',
      dkim: 'DKIM',
      dmarc: 'DMARC',
    },
    recordStatusTexts: {
      spfFound: '{spfRecord}',
      spfMissing: 'No v=spf1 record',
      spfMultiple: '{spfCount} v=spf1 records on the same domain',
      dkimFound: 'Selector {dkimSelector}, {dkimKeyType} key of {dkimBits} bits',
      dkimFoundSizeUnknown: 'Selector {dkimSelector}, key could not be decoded',
      dkimMissing: 'No key under the {selectorsProbed} selectors probed',
      dmarcFound: '{dmarcRecord}',
      dmarcMissing: 'No v=DMARC1 record under _dmarc',
      dmarcMultiple: '{dmarcCount} v=DMARC1 records under _dmarc',
      dmarcMalformed: '{dmarcRecord}',
    },
    providerLine: 'Mailbox: {provider}.',
    providerUnknownLine: 'Mailbox provider not recognised (MX {mxHost}).',
    providerNoMxLine: 'No receiving server (MX).',
    sendingServicesLine: 'Sending allowed by SPF: {services}.',
    findingsTitle: 'What I read',
    severityLabels: {
      blocking: 'Blocking',
      warning: 'To watch',
      info: 'Information',
    },
    findingTexts: {
      mxMissing:
        'No MX record: {domain} receives no email. If you send from this domain anyway, your recipients cannot reply, and several filters distrust it.',
      spfMissing:
        'No TXT record starting with v=spf1 on {domain}: recipients have no way to know who is allowed to send in your name.',
      spfMultiple:
        '{value} SPF records on the same domain: RFC 7208 allows one, recipients return a permanent error, as if there were none.',
      spfIncludeUnresolved:
        'The include {value} publishes no SPF record: for recipients, the whole record is in permanent error.',
      spfTooManyLookups:
        '{value} DNS lookups to evaluate the SPF record, while the limit is 10 (RFC 7208): above it, recipients ignore it.',
      spfPlusAll:
        'The record ends with +all: any server in the world is allowed to send in your name, you might as well publish nothing.',
      spfNeutralAll:
        'The record ends with ?all (neutral): the SPF record says nothing about the servers it does not list. Gandi and Microsoft advise against this value in production.',
      spfNoAll:
        'The record has neither all nor redirect: unlisted servers get a neutral result, which amounts to ?all.',
      spfSoftFail:
        'The record ends with ~all (soft fail), which Google recommends. Once DKIM and DMARC are in place, -all is stricter.',
      spfHardFail:
        'The record ends with -all (hard fail): any unlisted server is refused. Make sure every service that sends in your name is listed.',
      spfProviderMissing:
        'Your MX hosts are at {value}, but the SPF record does not contain its include. If you send from this mailbox, those emails fail SPF.',
      spfPtrMechanism:
        'The SPF record uses a ptr mechanism, directly or through an include: RFC 7208 asks not to publish it any more, as it is slow and unreliable. OVH clients inherit it from include:mx.ovh.com.',
      spfSendingServices:
        'Sending services allowed by SPF: {value}. Each of them must also sign your emails with DKIM.',
      dkimNotFound:
        'No DKIM key under the {value} selectors probed. It may exist under another name (OVH, Amazon SES and Zoho generate the selector or let you choose it): open the full header of an email you sent, the s= value of the DKIM-Signature line is the selector.',
      dkimKeyRevoked:
        'The key published under the selector {value} has an empty p= value: it is revoked (RFC 6376), the signatures that use it are invalid.',
      dkimKeyTooShort:
        'DKIM key of {value} bits: Gmail requires at least 1,024 bits and RFC 8301 forbids validating anything below.',
      dkimKeyUnreadable:
        'The key under the selector {value} could not be decoded: often a record longer than 255 characters split wrongly, or truncated, by the DNS zone editor.',
      dkimTestMode:
        'The key of the selector {value} carries t=y (test mode): recipients treat your emails as if they were not signed.',
      dmarcMissing:
        'No v=DMARC1 record under _dmarc.{domain}: Orange, laposte.net and iCloud require it, and without it nobody warns you when someone spoofs your domain.',
      dmarcMultiple:
        '{value} DMARC records under _dmarc.{domain}: RFC 7489 asks recipients to apply none of them in that case.',
      dmarcMalformed:
        'The DMARC record is malformed: v=DMARC1 must come first, followed by a policy p=none, p=quarantine or p=reject. Translated values are not recognised.',
      dmarcPolicyNone:
        'Policy p=none: you observe, but nothing stops a spoofed email. Accepted by Gmail and Outlook.com, it is the starting point, not the destination.',
      dmarcPolicyQuarantine:
        'Policy p=quarantine: an email that fails alignment goes to the spam folder of the recipient.',
      dmarcPolicyReject:
        'Policy p=reject: an email that fails alignment is refused. It is the target, provided all your sending passes SPF or DKIM.',
      dmarcNoReporting:
        'No rua= address: you receive no report, so you will know neither who sends in your name, nor whether your own sending fails.',
      dmarcExternalReportingUnauthorized:
        'Reports are requested to {value}, which does not publish the authorisation {domain}._report._dmarc: recipients will send nothing (RFC 7489).',
      dmarcPartialPercentage: '{value}: the policy applies to part of the emails only, the rest is treated as p=none.',
      dmarcStrictWithoutAuthentication:
        'Policy {value} while DKIM cannot be found and the SPF record does not cover your mailbox: your own emails risk being filed as spam or refused.',
    },
    fixesTitle: 'To fix, in order',
    nextStepsTitle: 'What next',
    fixTexts: {
      mxMissing: 'If this domain must receive email, add the MX records of your mailbox provider.',
      spfMissing:
        'Publish a TXT record at the root of {domain}: v=spf1, the include of your mailbox provider, one include per sending service, then ~all.',
      spfMultiple: 'Merge your SPF records into one: a single v=spf1, all the includes in a row, a single all.',
      spfIncludeUnresolved:
        'Remove or correct the include {value} in your SPF record: check the exact name in the documentation of the service.',
      spfTooManyLookups:
        'Bring the SPF record under 10 lookups: remove the services you no longer use, replace a and mx with ip4, or send from a dedicated subdomain for a piece of software.',
      spfPlusAll: 'Replace +all with ~all (or -all once DKIM and DMARC are in place).',
      spfNeutralAll: 'Replace ?all with ~all.',
      spfNoAll: 'Add ~all at the end of the record.',
      spfProviderMissing:
        'Add the include of {value} to your SPF record if you send from this mailbox (see its guide below).',
      dkimNotFound:
        'Enable DKIM at your provider and publish the key it gives you under <selector>._domainkey.{domain}. If it already exists under another selector, nothing to do.',
      dkimKeyRevoked:
        'Generate a new DKIM key at your provider and publish it under the selector {value}, or delete this selector if it is no longer used.',
      dkimKeyTooShort: 'Generate a 2,048-bit DKIM key at your provider and replace the record.',
      dkimKeyUnreadable:
        'Publish the key of the selector {value} again, split into 255-character strings, without added spaces.',
      dkimTestMode: 'Remove t=y from the record of the selector {value} once your tests are over.',
      dmarcMissing:
        'Publish a TXT record under _dmarc.{domain}: v=DMARC1; p=none; rua=mailto:dmarc@{domain}, 48 hours after SPF and DKIM.',
      dmarcMultiple: 'Keep a single record under _dmarc.{domain} and delete the others.',
      dmarcMalformed: 'Rewrite the record: v=DMARC1; p=none; rua=mailto:dmarc@{domain}, then raise the policy later.',
      dmarcPolicyNone:
        'After a few weeks of reports without failures on your legitimate sending, move to p=quarantine (first with pct=10), then to p=reject.',
      dmarcNoReporting: 'Add rua=mailto:dmarc@{domain} (a dedicated mailbox, not yours) to receive the reports.',
      dmarcExternalReportingUnauthorized:
        'Ask the service that receives your reports to publish {domain}._report._dmarc.{value} (TXT v=DMARC1), or use an address of your own domain.',
      dmarcStrictWithoutAuthentication:
        'Go back to p=none while you fix SPF and DKIM, then raise the policy once the reports are clean.',
    },
    verdictSteps: {
      consumerMailbox: [
        'If you have a domain name, test it here: it is the one that counts for your quotes and invoices.',
        'No domain name yet? An address on your own name costs a few euros a month with most hosts, SPF, DKIM and DMARC included.',
      ],
      allGood: [
        'Send an email to a Gmail mailbox and open “Show original”: SPF, DKIM and DMARC must show PASS.',
        'If the policy is still quarantine, move to reject after a few weeks of clean reports.',
        'Every new piece of software that sends in your name (quotes, CRM, newsletter) goes into the SPF record and signs with DKIM: run this check again after each addition.',
      ],
      noMailSetup: [
        'If you do send from this domain, add the MX and SPF records of your mailbox provider, then run the check again.',
        'If your emails leave from another domain, check that one.',
      ],
      invalidDomain: [
        'Check the spelling of the domain, without spaces or accents.',
        'If the domain was just bought, its DNS can take a few hours to answer.',
      ],
    },
    guidesTitle: 'Official guides of your providers',
    guideLabels: {
      spf: 'Set up SPF at {provider}',
      dkim: 'Set up DKIM at {provider}',
      dmarc: 'Set up DMARC at {provider}',
      general: '{provider} documentation',
    },
    disclaimer:
      'Indicative reading of the public DNS, without sending any email. The DKIM key is only looked for under known selectors: a key published under another name does not show here. Alignment, IP reputation, the PTR record and the content of the messages are not tested: an email can still end up in spam for other reasons.',
    idleCtaIntro:
      'In doubt? Send me your domain name and your host, and I tell you within 24 hours what is missing and what to do. Free, no commitment.',
    idleCtaLabel: 'Send my domain name',
    ctaIntro:
      'Rather delegate? I set up SPF, DKIM and DMARC in your DNS zone, check by sending test emails and write down what was done. Free diagnosis, quote before any work.',
    ctaLabels: {
      consumerMailbox: 'Move to an address on my domain',
      allGood: 'Have my sending checked',
      dmarcMissing: 'Have DMARC set up',
      dmarcNone: 'Have my DMARC policy hardened',
      dkimNotFound: 'Have DKIM enabled',
      spfMissing: 'Have my SPF set up',
      spfTooPermissive: 'Have my SPF fixed',
      spfTooManyLookups: 'Have my SPF trimmed',
      multipleSpf: 'Have my SPF records merged',
      noMailSetup: 'Ask the question',
      invalidDomain: 'Ask the question',
    },
  },
  offer: {
    emphasizedIntro: 'Rather have me handle it?',
    text: 'SPF, DKIM and DMARC set up in your DNS zone (OVH, o2switch, IONOS, Gandi, Infomaniak…), existing SPF record merged, DKIM enabled at each sending service, test emails and a written report. Free diagnosis, set-up on quote, reply within 24 hours.',
    linkLabel: 'Request a quote',
  },
  mobileContactBar: {
    text: 'Your emails land in spam?',
    buttonLabel: 'Send my domain',
  },
  facts: {
    anchorId: 'facts',
    eyebrow: 'What mailbox providers require',
    title: 'Orange, laposte.net, Gmail, Outlook.com, iCloud: the requirements, dated',
    intro:
      'Every major mailbox provider has published its rules. Here they are as written, with the date and the official page, without drama. For a small business in France, the first two lines matter more than the next ones.',
    facts: [
      {
        contextLabel: '1 September 2026',
        title: 'Orange requires SPF, DKIM and DMARC from every sender',
        text: 'The postmaster page of Orange, updated on 1 September 2026, asks that all three mechanisms pass: SPF required, DKIM required (an unsigned message may be rejected), DMARC required. No volume threshold: the rules apply to everyone. Error codes 515 (DMARC), 519 (SPF) and 535 (DKIM) point to these settings.',
        sourceName: 'postmaster.orange.fr, update of 1 September 2026',
        sourceUrl: EMAIL_DELIVERABILITY_SOURCES.orangePostmaster,
      },
      {
        contextLabel: '9 September 2025',
        title: 'laposte.net asks for all three, individuals included',
        text: 'The postmaster of laposte.net announced on 22 August 2025 that every sender to laposte.net, “individuals, businesses or senders of transactional or marketing messages”, must implement SPF, DKIM and DMARC, with no volume threshold. Emails that fail “will be considered spam”. There is no official page: the source is the announcement relayed by dmarcian.',
        sourceName: 'dmarcian (FR), 3 September 2025, updated 11 November 2025',
        sourceUrl: EMAIL_DELIVERABILITY_SOURCES.laposteDmarcian,
      },
      {
        contextLabel: '1 February 2024',
        title: 'Gmail: SPF or DKIM for all, all three above 5,000 emails a day',
        text: 'Since 1 February 2024, every sender to Gmail must set up SPF or DKIM, publish a valid PTR record, encrypt with TLS, stay under a 0.3% spam rate and sign with a DKIM key of at least 1,024 bits. From 5,000 messages a day to personal Gmail accounts: SPF and DKIM, DMARC (p=none accepted), alignment and one-click unsubscribe. Since November 2025, non-compliant messages are progressively rejected.',
        sourceName: 'Google, email sender guidelines and requirements FAQ',
        sourceUrl: EMAIL_DELIVERABILITY_SOURCES.googleSenderGuidelines,
      },
      {
        contextLabel: '5 May 2025',
        title: 'Outlook.com: all three mandatory above 5,000 emails a day',
        text: '“Effective May 5th, 2025”, domains sending more than 5,000 messages a day to Outlook.com, Hotmail and Live must pass SPF, DKIM and DMARC (at least p=none, reject recommended), aligned. Non-compliant messages go to the junk folder first, then are refused with error 550 5.7.515. Below the threshold, Microsoft “strongly recommends” all three to every sender.',
        sourceName: 'Outlook.com Postmaster, Policies, Practices and Guidelines',
        sourceUrl: EMAIL_DELIVERABILITY_SOURCES.microsoftPostmasterPolicies,
      },
      {
        contextLabel: '25 February 2025',
        title: 'iCloud Mail: SPF, DKIM and a published DMARC, no threshold',
        text: 'The Apple page for senders asks for SPF, DKIM, a DMARC policy published by the sending domain, reverse DNS and an unsubscribe link, with no volume threshold or complaint rate figure. Key sentence: “All requirements must be met in order to send a bulk email. If not, the email will be rejected.”',
        sourceName: 'Apple, iCloud Mail – Best practices for senders',
        sourceUrl: EMAIL_DELIVERABILITY_SOURCES.appleIcloudSenders,
      },
      {
        contextLabel: '7.8%',
        title: 'Fewer than one .fr domain in ten publishes a DMARC record',
        text: 'Among .fr domains with a receiving server, 57.8% publish an SPF record, 23.1% at least one DKIM key and 7.8% a DMARC record. Among those DMARC records, 73.6% are at p=none: only 1.3% of the .fr zone is at p=reject. Technical SPF errors are rare: fewer than 2.3% of policies too permissive, 0.005% above 10 lookups.',
        sourceName: 'AFNIC, study of 21 March 2023',
        sourceUrl: EMAIL_DELIVERABILITY_SOURCES.afnicStudy,
      },
    ],
    calloutEmphasizedIntro: 'For a small business sending 50 emails a day:',
    calloutText:
      'in France, your customers have @orange.fr, @wanadoo.fr, @laposte.net or @icloud.com addresses. For them, “SPF or DKIM” is not enough, all three are needed, from the first email. The 5,000-messages-a-day threshold of Google and Microsoft only concerns their own mailboxes: it does not protect you. The verdict of the tool therefore targets SPF, DKIM and DMARC, with at least p=none and a reporting address.',
  },
  checks: {
    anchorId: 'what-the-tool-checks',
    eyebrow: 'What the tool checks',
    title: 'Three DNS records, read as a recipient reads them',
    intro:
      'Nothing is sent: the tool queries the public DNS servers of your domain, follows the includes of the SPF record, probes the known DKIM selectors and decodes the key found. It also recognises your mailbox provider from the MX hosts and your sending services from the SPF record, to give you the right guides.',
    items: [
      {
        title: 'SPF (RFC 7208)',
        description:
          'A single TXT record starting with v=spf1, the servers allowed to send in your name, at most 10 DNS lookups counting the includes, an ending in ~all or -all, no include that fails to resolve, and the include of your mailbox provider.',
      },
      {
        title: 'DKIM (RFC 6376 and 8301)',
        description:
          'The public key under <selector>._domainkey, looked for under the selectors documented by your provider (google, selector1, default, gm1, s1-ionos, protonmail…) and the most common ones, then decoded: at least 1,024 bits, no revoked key (empty p=), no test mode (t=y).',
      },
      {
        title: 'DMARC (RFC 7489)',
        description:
          'The TXT record under _dmarc: a single record, v=DMARC1 first, a policy p=none, quarantine or reject, the pct percentage, the rua reporting address and, when it is on another domain, the _report._dmarc authorisation that lets recipients send the reports.',
      },
    ],
  },
  providers: {
    anchorId: 'providers',
    eyebrow: 'By provider',
    title: 'The providers recognised, their DKIM selectors and their official guide',
    intro:
      'The tool recognises your mailbox provider from the MX hosts of your domain and your sending services from the includes of your SPF record, then probes the selectors each one documents. When the selector is generated per account (OVH, Amazon SES) or chosen by you (Zoho), it cannot be guessed: read it in the DKIM-Signature header of a sent email.',
    providerColumnLabel: 'Provider',
    detailColumnLabel: 'How it is recognised, DKIM selectors',
    guideColumnLabel: 'Official guide',
    rows: [
      {
        name: 'Google Workspace',
        detail:
          'MX smtp.google.com or aspmx.l.google.com, include:_spf.google.com. Selector google (2,048-bit key recommended).',
        linkLabel: 'Set up DKIM at Google',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.google,
      },
      {
        name: 'Microsoft 365',
        detail:
          'MX in .mail.protection.outlook.com, include:spf.protection.outlook.com. Selectors selector1 and selector2, as CNAME.',
        linkLabel: 'Set up DKIM at Microsoft',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.microsoft,
      },
      {
        name: 'OVHcloud',
        detail:
          'MX mx0 to mx4.mail.ovh.net, include:mx.ovh.com. Selectors ovhmo<id>-selector1 and 2, specific to the account: not guessable, enabled automatically.',
        linkLabel: 'Set up DKIM at OVHcloud',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.ovh,
      },
      {
        name: 'o2switch',
        detail:
          'MX in your own domain, recognised from include:spf.jabatus.fr. Selector default, 2,048-bit key generated by cPanel.',
        linkLabel: 'SPF, DKIM and DMARC at o2switch',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.o2switch,
      },
      {
        name: 'IONOS',
        detail:
          'MX mx00 and mx01.ionos.com or .ionos.fr, include:_spf-eu.ionos.com. Selectors s1-ionos, s2-ionos, s42582890, automatic with the IONOS name servers.',
        linkLabel: 'Set up DKIM at IONOS',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.ionos,
      },
      {
        name: 'Gandi',
        detail: 'MX spool and fb.mail.gandi.net, include:_mailcust.gandi.net. Selectors gm1, gm2 and gm3, as CNAME.',
        linkLabel: 'Anti-spoofing at Gandi',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.gandi,
      },
      {
        name: 'Infomaniak',
        detail:
          'MX mta-gw.infomaniak.ch, include:spf.infomaniak.ch. Selector not documented, generated in the Manager (Global security, DKIM).',
        linkLabel: 'DKIM records at Infomaniak',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.infomaniak,
      },
      {
        name: 'Proton Mail',
        detail:
          'MX mail and mailsec.protonmail.ch, include:_spf.protonmail.ch. Selectors protonmail, protonmail2 and protonmail3, as CNAME.',
        linkLabel: 'Anti-spoofing at Proton',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.proton,
      },
      {
        name: 'Zoho Mail',
        detail:
          'MX mx, mx2 and mx3.zoho.eu or .zoho.com, include:zoho.com or one.zoho.eu. Selector chosen by the administrator (zoho, zmail…).',
        linkLabel: 'Set up DKIM at Zoho',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.zoho,
      },
      {
        name: 'Hostinger',
        detail:
          'MX mx1 and mx2.hostinger.com, include:_spf.mail.hostinger.com. Selectors hostingermail-a, -b and -c, as CNAME.',
        linkLabel: 'Set up a domain at Hostinger',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.hostinger,
      },
      {
        name: 'LWS',
        detail:
          'include:_spf.lws.fr, MX in .lws.fr or .lwspanel.com (not documented). Selector default, key generated by cPanel.',
        linkLabel: 'SPF, DKIM and DMARC at LWS',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.lws,
      },
      {
        name: 'Orange Pro',
        detail:
          'MX in .orange.fr or .orange-business.com (values depend on the plan, not published). No documented selector: ask support.',
        linkLabel: 'Orange postmaster rules',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.orange,
      },
      {
        name: 'Brevo',
        detail:
          'include:spf.brevo.com or spf.sendinblue.com. Selectors brevo1 and brevo2 as CNAME, old format mail._domainkey as TXT.',
        linkLabel: 'Authenticate a domain at Brevo',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.brevo,
      },
      {
        name: 'Mailjet',
        detail: 'include:spf.mailjet.com. Selector mailjet, as TXT.',
        linkLabel: 'SPF and DKIM at Mailjet',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.mailjet,
      },
      {
        name: 'Mailchimp',
        detail:
          'include:servers.mcsv.net. Selectors k2 and k3 as CNAME (k1 for the old format); Mandrill: mte1 and mte2.',
        linkLabel: 'Authenticate a domain at Mailchimp',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.mailchimp,
      },
      {
        name: 'SendGrid',
        detail: 'include:sendgrid.net. Selectors s1 and s2, as CNAME to sendgrid.net.',
        linkLabel: 'Authenticate a domain at SendGrid',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.sendgrid,
      },
      {
        name: 'Amazon SES',
        detail:
          'include:amazonses.com (with a custom MAIL FROM domain). Three randomly generated selectors: not guessable, read them in the header of a sent email.',
        linkLabel: 'Easy DKIM at Amazon SES',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.amazonSes,
      },
    ],
    calloutEmphasizedIntro: 'Your provider is not in the list?',
    calloutText:
      'The tool still probes about twenty common selectors (default, google, selector1, mail, dkim, s1, k1…). If it finds nothing, search for “DKIM” in the help of your provider, or send me its name with your domain: I look within 24 hours.',
  },
  method: {
    eyebrow: 'In order',
    title: 'Setting up SPF, DKIM and DMARC, in four steps',
    intro:
      'The same path at OVH, o2switch, IONOS, Gandi or Infomaniak: everything happens in the DNS zone of the domain and in the admin area of each service that sends in your name. Count an hour, then a few weeks of reports before hardening DMARC.',
    steps: [
      {
        label: 'SPF',
        title: 'A single record, all your services',
        description:
          'List everything that sends in your name: the mailbox, the quoting and invoicing software, the newsletter, the website form. A single TXT record at the root of the domain, v=spf1, the include of each service, then ~all. Check that the whole stays under 10 DNS lookups, includes counted.',
      },
      {
        label: 'DKIM',
        title: 'Enable at each service, publish the key',
        description:
          'Every service that sends must sign: enable DKIM in its admin area (at Google Workspace, wait 24 to 72 hours after Gmail is enabled to get the key), then publish the TXT or CNAME given under <selector>._domainkey.yourdomain. Prefer a 2,048-bit key, split into 255-character strings if your zone editor requires it.',
      },
      {
        label: 'DMARC',
        title: 'p=none with a reporting address, 48 hours later',
        description:
          'Google asks to wait 48 hours after SPF and DKIM. Then publish under _dmarc.yourdomain: v=DMARC1; p=none; rua=mailto:dmarc@yourdomain, to a dedicated mailbox (Microsoft advises a shared mailbox, not yours). This policy stops nothing: it sends you the reports.',
      },
      {
        label: 'Check, then harden',
        title: 'A test email, the reports, then quarantine and reject',
        description:
          'Run this tool again, send an email to a Gmail mailbox and open “Show original”: SPF, DKIM and DMARC must show PASS. Read the reports for several weeks (OVH advises it), move to p=quarantine with pct=10 then 100, and finally to p=reject when no legitimate sending fails any more.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Your questions about emails that land in spam',
    questions: [
      {
        question: 'I send 50 emails a day, am I concerned?',
        answer:
          'Yes. The 5,000-messages-a-day threshold only exists at Google and Microsoft, and only concerns their mailboxes. Orange now requires SPF, DKIM and DMARC from every sender (rules updated on 1 September 2026), laposte.net since September 2025, iCloud with no threshold. And even at Gmail, an email without SPF or DKIM can be refused with error 5.7.26 from the first sending. A tradesperson writing to customers at @orange.fr is concerned from the first quote.',
      },
      {
        question: 'Is DMARC at p=none enough?',
        answer:
          'To be accepted, often yes: Gmail and Outlook.com accept p=none for bulk senders, and Orange asks for a DMARC record without specifying the policy. But p=none stops nothing: a spoofed email passes like yours. It is the starting point, with a rua= address to receive the reports. After a few weeks without failures on your legitimate sending, move to p=quarantine (pct=10 first), then to p=reject.',
      },
      {
        question: 'My host already set up SPF, why do my emails still land in spam?',
        answer:
          'Because SPF alone is no longer enough: Orange, laposte.net and iCloud also want DKIM and DMARC. And the SPF record set by the host only covers its mailbox: the quoting software, the newsletter or the website form that send in your name are not in it, and their emails fail. Finally, authentication is only part of the filtering: IP reputation, content and complaints count too.',
      },
      {
        question: 'The tool does not find my DKIM key: is it really missing?',
        answer:
          'Not necessarily. The tool probes the selectors documented by your provider and about twenty common selectors. OVH (ovhmo<id>-selector1), Amazon SES (random selectors) and Zoho (selector chosen by you) cannot be guessed. To check: send yourself an email, open the full header, look for the DKIM-Signature line; the s= value is your selector, and d= the signing domain. If that line does not exist, the service has not enabled DKIM.',
      },
      {
        question: 'Gmail has been putting my quotes in spam since this morning, what should I do?',
        answer:
          'This check first: a broken SPF record, a revoked DKIM key or a malformed DMARC record explain a sudden change. Then send an email to a Gmail mailbox and open “Show original”: the SPF, DKIM and DMARC lines say which one fails. If everything passes, look at the content (shortened link, unusual attachment, new sending software) and register the domain in Google Postmaster Tools to read its reputation. Since November 2025, Gmail progressively rejects non-compliant messages.',
      },
      {
        question: 'mail-tester gives me 10/10, why do my emails still land in spam?',
        answer:
          'mail-tester scores one precise sending, from the tool you used to write to it. It says nothing about the other services that send in your name, nor about the history of your domain at each mailbox provider, nor about how recipients react. A 10/10 with your mailbox does not vouch for the invoicing software. This tool, for its part, reads the configuration of the domain for every service listed in your SPF record. The two complement each other.',
      },
      {
        question: 'What is a DKIM selector?',
        answer:
          'The name under which the public key is published in your DNS: <selector>._domainkey.yourdomain. It lets a domain have several keys, one per sending service, and rotate them. Google uses google, Microsoft selector1 and selector2, o2switch and LWS default, Gandi gm1 to gm3, Mailjet mailjet, Brevo brevo1 and brevo2. Every signed email names its selector in the DKIM-Signature header (s=).',
      },
      {
        question: 'How much does it cost to have SPF, DKIM and DMARC set up?',
        answer:
          'The diagnosis is free: this tool, then my reading within 24 hours if you send me your domain. The set-up is quoted according to your host, the number of services that send in your name and the state of the existing SPF record: usually a few hours of work, then one or two appointments several weeks apart to move DMARC to quarantine then reject after reading the reports.',
      },
    ],
  },
  relatedArticles: {
    title: 'To go further',
    intro:
      'The PHP vulnerability of October 2026, the checks for a hacked WordPress site, and what e-invoicing changes for a tradesperson in France: three reads for the same small businesses.',
  },
  contactCta: {
    title: 'Need someone to handle it?',
    description:
      'Send me your domain name and your host. I set up SPF, DKIM and DMARC in your DNS zone, check by sending test emails and write down what was done. Free diagnosis within 24 hours, quote before any work.',
    button: 'Have my emails set up',
  },
}
