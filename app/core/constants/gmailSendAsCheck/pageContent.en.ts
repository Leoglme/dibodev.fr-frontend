import type { DibodevGmailSendAsCheckPageContent } from '~/core/types/DibodevGmailSendAsCheckPage'
import { GMAIL_HELP_PAGE_URLS } from '~/core/constants/gmailSendAsCheck/pageShared'

const THIRD_PARTY_CHANGES_URL: string = `${GMAIL_HELP_PAGE_URLS.thirdPartyChanges}?hl=en`
const GMAILIFY_AND_POP_URL: string = `${GMAIL_HELP_PAGE_URLS.gmailifyAndPop}?hl=en`
const THIRD_PARTY_CHANGES_SOURCE_NAME: string = 'Gmail Help, third-party email accounts'
const GMAILIFY_AND_POP_SOURCE_NAME: string = 'Gmail Help, Gmailify and POP'

// Gmail labels and Google quotes are the wording of the English help pages (?hl=en), read on 19 November 2026.
export const GMAIL_SEND_AS_CHECK_PAGE_EN: DibodevGmailSendAsCheckPageContent = {
  meta: {
    title: 'Gmail “Send mail as” ends in 2027: free address check',
    description:
      'Free Gmail stops “Send mail as” and POP3 fetching for an address hosted elsewhere from January 2027. Enter your address: verdict and solutions.',
    inLanguage: 'en',
    schemaAbout: 'End of “Send mail as”, “Check mail from other accounts” and Gmailify in Gmail in January 2027',
  },
  breadcrumbLabel: 'Gmail, January 2027: is my address affected?',
  shareImage: {
    titleLines: ['Gmail 2027: is my', 'address affected?'],
    highlight: 'affected',
    subtitle: 'End of “Send mail as”: free check, verdict and solutions',
    badge: 'Free check',
    alt: 'Gmail, January 2027: is my address affected? Free check by Dibodev',
  },
  hero: {
    titleBefore: 'End of “Send mail as” in Gmail: is your address ',
    titleHighlight: 'affected',
    titleAfter: '?',
    reassurances: ['Free, no sign-up', 'Result in one minute', 'Google pages re-read on 19 November 2026'],
    description:
      'From January 2027, according to Google, a free Gmail account will no longer be able to send emails with an address hosted elsewhere (the “Send mail as” setting) or to fetch the mail of that address (the “Check mail from other accounts” setting). This affects business addresses on your own domain name hosted with OVHcloud, o2switch, IONOS or another host, as well as Orange, Free or SFR addresses (French internet providers) and Outlook or Yahoo addresses read in Gmail. Enter your address: the tool reads where it is hosted, asks you three questions, and tells you what stops for you and what to do.',
    authorIntro: 'Tool built by',
    authorBio:
      'freelance developer near Rennes, France. My own business address is hosted with o2switch and read in a free Gmail: I tested the solutions on 19 November 2026. I set up email for small businesses remotely and I reply within 24 hours.',
  },
  checker: {
    addressLabel: 'Your business email address',
    addressPlaceholder: 'contact@mycompany.com',
    addressHint:
      'Only the domain name (what follows the @) is sent to the tool, never the first part of the address. The tool reads the public mail servers of that domain: no email is sent, no password is asked for. Only the domain and its result are kept, for statistics.',
    submit: 'Test my address',
    checking: 'Reading the domain…',
    questionsTitle: 'Three questions to finish',
    questionsIntro:
      'Where your address is hosted does not say how you use it. Answer what you know: “I don’t know” is an answer.',
    questions: {
      reading: {
        label: 'Where do you read the emails of this address?',
        hint: '',
        options: {
          inGmail: 'In Gmail, with my @gmail.com account',
          elsewhere: 'Elsewhere (webmail, Outlook, Thunderbird…)',
        },
      },
      sending: {
        label: 'When you write from Gmail, which address do your recipients see?',
        hint: 'It is the address on the “From” line of a new message.',
        options: {
          domainAddress: 'My @{domain} address',
          gmailAddress: 'My @gmail.com address',
          unknown: 'I don’t know',
        },
      },
      receiving: {
        label: 'In Gmail, is your address on the “Check mail from other accounts” line?',
        hint: 'On a computer: gear icon, “See all settings”, “Accounts and Import” tab.',
        options: {
          listed: 'Yes, it is there',
          notListed: 'No, the line is empty',
          unknown: 'I have not looked',
        },
      },
    },
    resultLabel: 'Your result',
    idleTitle: 'Enter your address to start',
    idleText:
      'The tool says where your mail is hosted, with Google or elsewhere, then, after three questions, what stops for you from January 2027: sending, receiving, both, or nothing.',
    loadingTitle: 'Reading the domain…',
    loadingText: 'I read the mail servers of this domain name. A few seconds.',
    errorTitles: {
      invalid: 'Address to correct',
      unreachable: 'Domain unreachable',
      rateLimited: 'Too many checks',
      failed: 'Check impossible',
    },
    errorTexts: {
      invalid: 'Enter an email address, like contact@mycompany.com, or a domain name: only what follows the @ is used.',
      unreachable: 'The servers of {domain} did not answer: try again in a moment.',
      rateLimited: 'You ran many checks in a short time. Try again in a few minutes.',
      failed: 'Something went wrong on my side. Try again in a moment, or send me your address.',
    },
    hostingTitle: 'Where your mail is',
    hostingLines: {
      gmailAddress: '{domain} is a Gmail address: it is hosted by Google.',
      googleHosted: 'The mail of {domain} is hosted with Google (Google Workspace).',
      consumerMailbox: '{domain} is a mailbox service hosted outside Google.',
      thirdParty: 'The mail of {domain} is hosted with {host}, not with Google.',
      noMailSetup: '{domain} has no mail server: this domain receives no email.',
      invalidDomain: '',
    },
    unknownHostName: 'a host the tool does not recognise (server {mxHost})',
    pendingTitle: 'Address hosted outside Google',
    pendingText: 'It may be affected, depending on how you use it. Answer the three questions: the verdict shows here.',
    verdictTitles: {
      bothAffected: 'Affected: sending and receiving stop',
      sendingAffected: 'Affected: sending with this address stops',
      receivingAffected: 'Affected: receiving in Gmail stops',
      notAffected: 'Not affected, with your current settings',
      toCheck: 'To check in Gmail: one minute',
      notInGmail: 'Not affected: you do not use Gmail for this address',
      googleHosted: 'Not affected: address hosted with Google',
      gmailAddress: 'Not affected: it is a Gmail address',
      noMailSetup: 'No mail on this domain',
      invalidDomain: 'Domain not found',
    },
    verdictTexts: {
      bothAffected:
        'From January 2027, according to Google, your free Gmail will no longer be able to send with your @{domain} address (“Send mail as”) or to fetch its mail from {host} (“Check mail from other accounts”). Emails that have already arrived stay in Gmail. You need to choose a solution before then, so that no message is lost.',
      sendingAffected:
        'From January 2027, according to Google, your free Gmail will no longer be able to send with your @{domain} address: the “Send mail as” setting stops for addresses hosted outside Google. Receiving is not affected if your mail arrives through automatic forwarding.',
      receivingAffected:
        'From January 2027, according to Google, Gmail will no longer fetch the mail of your @{domain} address from {host}: the “Check mail from other accounts” setting stops. New emails will stay with {host}, without arriving in Gmail. Emails that have already arrived stay.',
      notAffected:
        'Your mail arrives in Gmail through automatic forwarding set up with {host}, and you write with your @gmail.com address: Google changes neither. Nothing to do, unless you want to write to your customers with your @{domain} address.',
      toCheck:
        'Your address is hosted with {host}: it is affected if it appears in the Gmail settings. Open Gmail on a computer, the gear icon, “See all settings”, “Accounts and Import” tab, and read the two lines below.',
      notInGmail:
        'The January 2027 change only affects Gmail. If you read and send your @{domain} mail in the webmail of your host, in Outlook, Thunderbird or Apple Mail, nothing changes for you.',
      googleHosted:
        'Google says so: the end of “Send mail as” affects neither addresses hosted by Google nor Google Workspace aliases. Nothing to do for {domain}.',
      gmailAddress:
        'Google says so: sending with another Gmail address remains possible. The January 2027 change affects addresses hosted elsewhere. If you also have an address on your own domain name, test that one.',
      noMailSetup:
        'No address at @{domain} can receive email. Check what follows the @ in your business address and run the test again.',
      invalidDomain:
        'No server answers for {domain}: the name is misspelt, expired, or not registered yet. Check what follows the @ in your address.',
    },
    checkSendingNote:
      'Sending to check: if your address is on the “Send mail as” line, sending with this address stops.',
    checkReceivingNote:
      'Receiving to check: if your address is on the “Check mail from other accounts” line, receiving stops. If it is not there and your mail still arrives, it is forwarding: it carries on.',
    stepsTitle: 'What to do, in order',
    verdictSteps: {
      bothAffected: [
        'Before January: set up automatic forwarding with {host}, from your address to your Gmail, to keep receiving.',
        'To keep writing with @{domain} from Gmail: move this Gmail to Google Workspace (€6.80 to €8.10 excl. VAT per month), or write from the webmail of {host} or an email program (free).',
        'After any change, send yourself a test email and check that it does not land in spam.',
      ],
      sendingAffected: [
        'To keep Gmail as it is: move it to Google Workspace (€6.80 to €8.10 excl. VAT per month and per mailbox), and the @{domain} address becomes a Google address.',
        'Or stay on free Gmail and write with @{domain} from the webmail of {host}, an email program or the Gmail app on your phone.',
        'Or write with your @gmail.com address: free, but your customers see a Gmail address.',
      ],
      receivingAffected: [
        'Set up automatic forwarding with {host}, from your @{domain} address to your Gmail address: Google confirms that forwarding keeps working.',
        'Send yourself a test email from another address, and look in the Gmail Spam folder too.',
        'Keep access to the webmail of {host}: that is where the mail stays if forwarding stops one day.',
      ],
      toCheck: [
        '“Send mail as” line: if your @{domain} address is listed there, sending stops.',
        '“Check mail from other accounts” line: if it is listed there, receiving stops.',
        'Come back here and change your two answers: the tool gives you the steps to follow.',
      ],
    },
    hostGuideTitle: 'The guide for your mail host',
    disclaimer:
      'The tool reads where the domain is hosted; it does not see the settings of your Gmail. The verdict rests on your answers and on the Google help pages read on 19 November 2026. Google has not given a precise day.',
    idleCtaIntro:
      'Would you rather I had a look? Send me your address: I tell you within 24 hours what is affected and which solution suits you.',
    idleCtaLabel: 'Ask for free advice',
    ctaIntro:
      'I can handle it remotely: forwarding, domain name settings, the move to Google Workspace, sending tests. First advice free within 24 hours, and if a free setting is enough for you, I tell you so.',
    ctaLabel: 'Send my result',
  },
  mobileContactBar: {
    text: 'Need help with your address?',
    buttonLabel: 'Ask for free advice',
  },
  summary: {
    eyebrow: 'In short',
    text: 'From January 2027, according to Google, a free Gmail account can no longer send emails with an address hosted outside Google (“Send mail as”), nor fetch the mail of another mailbox (“Check mail from other accounts”), and Gmailify stops. Automatic forwarding to Gmail, the Gmail app on a phone and Google Workspace keep working. A business address hosted with OVHcloud, o2switch or IONOS and read in a free Gmail is therefore affected; a Google Workspace address is not.',
    dateLabel: 'Google help pages re-read on 19 November 2026. Google gives no precise day.',
  },
  facts: {
    anchorId: 'what-stops',
    eyebrow: 'What Google says',
    title: 'What stops in Gmail from January 2027',
    intro: 'Six facts, each read on 19 November 2026 on a Google help page.',
    facts: [
      {
        contextLabel: 'January 2027',
        title: '“Send mail as” stops for addresses hosted elsewhere',
        text: 'Google writes: “You will no longer be able to send mail from third-party email accounts in Gmail on the web or in the Gmail mobile apps.” Google calls the feature “Send as”; in Gmail, the setting is named “Send mail as”, in the “Accounts and Import” tab.',
        sourceName: THIRD_PARTY_CHANGES_SOURCE_NAME,
        sourceUrl: THIRD_PARTY_CHANGES_URL,
      },
      {
        contextLabel: 'January 2027',
        title: '“Check mail from other accounts” (POP3 fetching) stops too',
        text: 'Gmail will no longer fetch the mail of another mailbox: “Fetching emails from third-party accounts into your Gmail account, with POP, will no longer be supported.” The option disappears from Gmail on a computer, and Gmailify stops at the same time.',
        sourceName: GMAILIFY_AND_POP_SOURCE_NAME,
        sourceUrl: GMAILIFY_AND_POP_URL,
      },
      {
        contextLabel: 'Since 2026',
        title: 'New set-ups are already closed',
        text: '“After the first quarter of 2026, this feature no longer supports new users. Existing users can still use the feature until January 2027.” So a setting that works today works until that date.',
        sourceName: GMAILIFY_AND_POP_SOURCE_NAME,
        sourceUrl: GMAILIFY_AND_POP_URL,
      },
      {
        contextLabel: 'Timeline',
        title: 'No precise day is announced',
        text: 'Google gives three stages: announcement and notification in Gmail in the third quarter of 2026, a transition period until the end of 2026, then full removal in “January 2027”. No page gives the day.',
        sourceName: THIRD_PARTY_CHANGES_SOURCE_NAME,
        sourceUrl: THIRD_PARTY_CHANGES_URL,
      },
      {
        contextLabel: 'Businesses',
        title: 'Google points businesses to three solutions',
        text: 'To the question “What if I rely on ‘Send as’ for my business?”, Google answers: a desktop mail client, your provider’s own interface, or “Google Workspace for a custom domain”.',
        sourceName: THIRD_PARTY_CHANGES_SOURCE_NAME,
        sourceUrl: THIRD_PARTY_CHANGES_URL,
      },
      {
        contextLabel: 'Warning',
        title: 'Google warns against tools that promise to recreate the feature',
        text: 'Third-party tools and browser extensions that offer to replicate the “Send mail as” feature “often require access to your email credentials”, Google writes, and it cannot guarantee their safety or reliability.',
        sourceName: THIRD_PARTY_CHANGES_SOURCE_NAME,
        sourceUrl: THIRD_PARTY_CHANGES_URL,
      },
    ],
    calloutEmphasizedIntro: 'What Google does not write.',
    calloutText:
      'Google’s examples are Yahoo and Hotmail addresses. An address on a domain name hosted with a web host is not named word for word. But Google writes that the discontinuation “only applies to third-party, non-Google email accounts” and answers “Google Workspace for a custom domain” to businesses: so I treat it as affected, and I will correct this page if Google clarifies.',
  },
  unchanged: {
    anchorId: 'what-continues',
    eyebrow: 'What carries on',
    title: 'What does not change in January 2027',
    intro: 'Written by Google on the same help pages, read on 19 November 2026.',
    items: [
      {
        title: 'Automatic forwarding to Gmail',
        description:
          'Forwarding set up with your host keeps bringing your mail into Gmail. Google: “You can configure your third-party provider to auto-forward messages to your Gmail address.”',
      },
      {
        title: 'Addresses hosted by Google',
        description:
          'A Google Workspace address, a Google Workspace alias or another Gmail address can still be used in “Send mail as”.',
      },
      {
        title: 'The Gmail app on your phone',
        description:
          'On Android, iPhone and iPad, you can still add the address of another provider as a separate account, read it and write with it. The app then connects directly to your host: it is not the “Send mail as” setting.',
      },
      {
        title: 'Emails that have already arrived',
        description:
          '“Any messages you’ve already imported from a third-party account into Gmail will remain in your mailbox.”',
      },
      {
        title: 'Gmail in Outlook, Thunderbird or Apple Mail',
        description: 'Reading your Gmail address in an email program remains possible, as it is today.',
      },
      {
        title: 'One-off import',
        description:
          '“Import mail and contacts” remains available to bring in old emails once, without continuous syncing.',
      },
    ],
  },
  gmailSteps: {
    eyebrow: 'Check it yourself',
    title: 'How to check in Gmail in one minute',
    intro: 'On a computer, not on a phone: these settings are not in the app.',
    steps: [
      {
        label: 'Settings',
        title: 'Open the Gmail settings',
        description: 'In Gmail on a computer, click the gear icon at the top right, then “See all settings”.',
      },
      {
        label: 'Tab',
        title: 'Go to “Accounts and Import”',
        description: 'The tab is called “Accounts” on some accounts.',
      },
      {
        label: 'Sending',
        title: 'Read the “Send mail as” line',
        description:
          'If your business address is listed there, under your Gmail address, sending with this address stops from January 2027.',
      },
      {
        label: 'Receiving',
        title: 'Read the “Check mail from other accounts” line',
        description:
          'If your address is listed there, Gmail fetches your mail from the host: this receiving stops. If the line is empty and your mail still arrives, it comes from forwarding, which carries on.',
      },
      {
        label: 'Result',
        title: 'Enter your answers in the test',
        description: 'The test at the top of this page then tells you what to do, and in which order.',
      },
    ],
  },
  solutions: {
    anchorId: 'solutions',
    eyebrow: 'The solutions',
    title: 'Five alternatives to “Send mail as”, from free to €8.10 a month',
    intro:
      'What each one keeps, what it costs, and who it suits. Google’s prices for France, read on 19 November 2026.',
    solutionColumnLabel: 'Solution',
    coverageColumnLabel: 'What you keep',
    costColumnLabel: 'Cost',
    rows: [
      {
        name: 'Automatic forwarding to Gmail',
        coverage:
          'You still receive in Gmail. You reply with your @gmail.com address: your customers no longer see your business address.',
        price: '€0',
        priceCondition: 'Set up with the host, receiving only',
      },
      {
        name: 'Forwarding and the host’s webmail',
        coverage:
          'You receive in Gmail and you write with your business address from the website of your host. Two places to open.',
        price: '€0',
        priceCondition: 'Included in your hosting',
      },
      {
        name: 'Email program',
        coverage:
          'Thunderbird, Outlook or Apple Mail read and send with your business address. You leave the Gmail screen for this address.',
        price: '€0',
        priceCondition: 'Thunderbird and Apple Mail are free',
      },
      {
        name: 'Gmail app on your phone',
        coverage: 'Your address added as a separate account: reading and sending, on the phone only.',
        price: '€0',
        priceCondition: 'Android, iPhone and iPad',
      },
      {
        name: 'Google Workspace',
        coverage:
          'Your Gmail becomes a business account: same screen, same emails, sending and receiving with your business address, on a computer and on a phone.',
        price: '€6.80 to €8.10 excl. VAT per month',
        priceCondition: 'Per mailbox: €6.80 with a one-year commitment, €8.10 without. 14-day trial',
      },
    ],
    calloutEmphasizedIntro: 'My opinion.',
    calloutText:
      'If your customers never see your address, because you mostly receive, free forwarding is enough. If you write to customers every day from Gmail with your business address, Google Workspace is the only solution that changes nothing in your habits, for €81.60 to €97.20 excl. VAT per year and per mailbox.',
  },
  hosts: {
    anchorId: 'hosts',
    eyebrow: 'With your host',
    title: 'Where to set up forwarding to Gmail, host by host',
    intro:
      'Forwarding is set up with whoever hosts the address, never in Gmail. Official pages of French hosts and internet providers, read on 19 November 2026; the labels are those of their French screens.',
    hostColumnLabel: 'Host',
    detailColumnLabel: 'Where to set it up',
    guideColumnLabel: 'Official page',
    rows: [
      {
        name: 'OVHcloud',
        detail:
          'Control panel, “Web Cloud”, “Emails”, “Redirections” tab, “Créer une redirection” (create a redirection) button, with the “Conserver une copie locale” (keep a local copy) box.',
        linkLabel: 'Redirections guide, OVHcloud (in French)',
        linkUrl:
          'https://docs.ovhcloud.com/fr/guides/web-cloud/email-and-collaborative-solutions/common-email-features/feature-redirections',
      },
      {
        name: 'o2switch',
        detail:
          'In cPanel, the “Redirecteurs” (forwarders) tool; a copy stays in the original mailbox. o2switch itself advises against forwarding to an outside address such as Gmail, because of the spam risk, and recommends an email program.',
        linkLabel: 'Email forwarders, o2switch (in French)',
        linkUrl: 'https://faq.o2switch.fr/cpanel/emails/redirecteur-email/',
      },
      {
        name: 'IONOS',
        detail:
          'Control panel, “Email” section, the address, “Redirection” line, “Ajouter une redirection” (add a redirection). The IONOS mailbox keeps the email and a copy goes to Gmail.',
        linkLabel: 'Set up a redirection, IONOS (in French)',
        linkUrl:
          'https://www.ionos.fr/assistance/email/mail-basic-setup-configuration-de-base-de-la-messagerie/configurer-une-redirection-de-mails/',
      },
      {
        name: 'Orange',
        detail:
          'In Mail Orange: settings, “généralités” (general), “transfert de mails” (mail forwarding), “Transférer tous les mails vers une autre boîte mail” (forward all mail to another mailbox).',
        linkLabel: 'Redirect your mail, Orange (in French)',
        linkUrl:
          'https://assistance.orange.fr/ordinateurs-peripheriques/installer-et-utiliser/l-utilisation-du-mail-et-services-associes/mail-orange/parametrer-la-boite-mail/mail-orange-rediriger-vos-emails-vers-une-autre-boite-mail_196861-741574',
      },
      {
        name: 'La Poste',
        detail:
          'No forwarding: the laposte.net help says that its mail service does not let you redirect your messages to another mailbox. What remains: its webmail, its app and the Gmail app on your phone.',
        linkLabel: 'laposte.net help (in French)',
        linkUrl:
          'https://aide.laposte.net/contents/comment-transferer-automatiquement-les-courriers-de-ma-boite-laposte-net-vers-une-autre-adresse-e-mail',
      },
      {
        name: 'Free',
        detail:
          'I did not find automatic forwarding in the official Free help. What remains: the Free webmail, an email program and the Gmail app on your phone.',
        linkLabel: 'Mail settings, Free (in French)',
        linkUrl: 'https://assistance.free.fr/articles/609',
      },
      {
        name: 'SFR',
        detail:
          'I did not find automatic forwarding in the official SFR help. What remains: SFR Mail, an email program and the Gmail app on your phone.',
        linkLabel: 'Set up your mail, SFR (in French)',
        linkUrl: 'https://assistance.sfr.fr/sfrmail-appli/sfrmail/configurer-messagerie-recevoir-email-sfr.html',
      },
    ],
    calloutEmphasizedIntro: 'Your host is not in the list?',
    calloutText:
      'The principle is the same everywhere: forwarding (“transfert”, “redirection” or “faire suivre” on French screens) is set up in the control panel of the host. The test at the top of the page also recognises Infomaniak, Gandi, Hostinger, LWS, Microsoft 365, Zoho and Proton.',
  },
  pitfalls: {
    anchorId: 'pitfalls',
    eyebrow: 'The pitfalls',
    title: 'Four pitfalls to avoid when you switch',
    intro: 'Met or checked on 19 November 2026, while making the move on a test account.',
    pitfallLabel: 'The common mistake',
    items: [
      {
        title: 'Your emails go to spam after the change',
        text: 'When an address changes sending server, the domain name must authorise it, with a line called SPF in its settings. Without it, my first email sent from Google Workspace landed in spam. Once the line was added, the next one arrived in the inbox.',
        pitfall: 'Testing one minute after the setting: you have to wait a few minutes for it to be read everywhere.',
      },
      {
        title: 'The other addresses of the domain',
        text: 'If you move to Google Workspace, all the mail of the domain goes to Google, which warns that you will need to include every email address already set up with your domain. Each existing address (contact@, quotes@, billing@) must be recreated before the switch, as a mailbox or as an alias.',
        pitfall:
          'Forgetting an address that is only used by the website forms or for invoices: its emails are lost without any error message.',
      },
      {
        title: 'Forwarding is not a mailbox',
        text: 'A forwarded email can be refused or filed as spam by Gmail. Google says so: “Forwarding email messages can affect email authentication.” Keep the mailbox with the host and its webmail close at hand.',
        pitfall: 'Deleting the mailbox with the host once forwarding is set up.',
      },
      {
        title: 'Tools that ask for your password',
        text: 'Extensions and services promise to recreate “Send mail as”. Google warns: they often ask for the login details of your mailbox. None of the five solutions on this page needs them.',
        pitfall: 'Giving the password of your mailbox to an unknown service to save ten minutes.',
      },
    ],
  },
  experience: {
    eyebrow: 'First-hand',
    title: 'What I tested on 19 November 2026',
    emphasizedIntro: 'I am affected too.',
    text: 'My business address is hosted with o2switch and I read it in a free Gmail, with the two settings that stop. So I made the move on a test Gmail account: the “Upgrade this account” option of Google Workspace (“Mettre à niveau ce compte” on the French sign-up page) kept the same mailbox, the same password and the 1,799 conversations, with the old address and the new one in the same mailbox. From the first screen to the one saying that Gmail is active, about 40 minutes, domain name settings included. What I did not check: going back.',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Gmail and your business address in 2027',
    questions: [
      {
        question: 'Is Gmail removing “Send mail as”?',
        answer:
          'Yes, for addresses hosted outside Google. According to the Google help page read on 19 November 2026, from January 2027 a Gmail account can no longer send mail from a third-party email account, either on the web or in the mobile apps. “Send mail as” remains possible with another Gmail address or a Google Workspace alias.',
      },
      {
        question: 'On what exact date does Gmail stop “Send mail as” and fetching mail from other accounts?',
        answer:
          'Google writes “Starting January 2027”, without giving a day. The published timeline plans a notification in Gmail in the third quarter of 2026, a transition period until the end of 2026, then full removal in January 2027. This page is updated if Google clarifies or moves the date.',
      },
      {
        question: 'Is Gmail ending POP3 in 2027?',
        answer:
          'Yes, for fetching: from January 2027, according to Google, Gmail no longer fetches by POP3 the mail of an address hosted elsewhere (the “Check mail from other accounts” setting). Reading your Gmail address in Outlook or Thunderbird does not change, and the Gmail app on a phone can still read another address, added as a separate account.',
      },
      {
        question: 'The end was announced for January 2026: why does my mail fetching still work?',
        answer:
          'Several articles had announced January 2026. The Google help page, read on 19 November 2026, says the feature no longer accepts new users after the first quarter of 2026 and that existing users keep it until January 2027. A fetch that is already set up therefore works until that date.',
      },
      {
        question: 'Is my business address at OVH, o2switch or IONOS affected?',
        answer:
          'Yes, if you read it or write with it in a free Gmail account. An address on your own domain name hosted with OVHcloud, o2switch, IONOS or another host is, for Gmail, a third-party email account. It is not affected if you use it in the webmail of the host, in Outlook or Thunderbird, or if the mail of the domain is with Google Workspace.',
      },
      {
        question: 'Will I lose the emails already received in Gmail?',
        answer:
          'No. Google writes that any messages already imported into Gmail from a third-party account will remain in the mailbox. What stops is the arrival of new emails through “Check mail from other accounts” and sending with the third-party address.',
      },
      {
        question: 'How do I keep receiving the mail of my business address in Gmail?',
        answer:
          'By setting up automatic forwarding with your host, from your business address to your Gmail address. Google confirms that this solution remains possible and that it does not depend on “Send mail as”. Keep the mailbox with the host: a forwarded email can be refused or filed as spam.',
      },
      {
        question: 'How do I keep sending with my business address from Gmail?',
        answer:
          'In Gmail on a computer, only one solution keeps your habits: moving the account to Google Workspace, where the address on your domain name becomes a Google address (€6.80 to €8.10 excl. VAT per month and per mailbox, prices read on 19 November 2026). For free, you can send from the webmail of your host, from a program such as Thunderbird, or from the Gmail app on your phone, where the address is added as a separate account.',
      },
      {
        question: 'Is the Gmail app on a phone affected?',
        answer:
          'The “Send mail as” setting also stops in the mobile apps. However, Google writes that access to third-party accounts from the Gmail app for Android, iPhone and iPad does not change: you can add the address of another provider there as a separate account, read it and write with it.',
      },
      {
        question: 'Is my Orange, Free, SFR or laposte.net address read in Gmail affected?',
        answer:
          'Yes, if Gmail fetches its mail through the “Check mail from other accounts” setting: this receiving stops in January 2027. Emails that have already arrived stay. For what comes next: automatic forwarding when the provider offers it (Orange does, laposte.net writes that it does not), its webmail, or the Gmail app on your phone.',
      },
      {
        question: 'What is Gmailify, and what changes?',
        answer:
          'Gmailify applies Gmail features (spam protection, categories, search) to a Yahoo, Outlook or other mailbox linked to Gmail. Google stops it at the same time as fetching mail from other accounts, in January 2027.',
      },
      {
        question: 'Is Gmail becoming a paid service in January 2027?',
        answer:
          'No. Free Gmail stays free: only “Send mail as” for addresses hosted elsewhere, “Check mail from other accounts” and Gmailify stop. Google Workspace (€6.80 excluding tax per month with a one-year commitment, the price read for France) is only one of the five solutions, and the other four are free.',
      },
      {
        question: 'How much does Google Workspace cost for a single address?',
        answer:
          'On Google’s price page for France, read on 19 November 2026: Business Starter at €6.80 excluding VAT per user per month with a one-year commitment, which is €81.60 excl. VAT per year. Without a commitment, I read €8.10 per month in the admin console, which is €97.20 excl. VAT per year. Free 14-day trial. One mailbox is enough for one person: the other addresses of the domain can be aliases of it.',
      },
      {
        question: 'Does moving to Google Workspace lose the old emails of the free Gmail?',
        answer:
          'No, in my test of 19 November 2026: with the “Upgrade this account” option (“Mettre à niveau ce compte” on the French sign-up page), the free Gmail account became a Google Workspace account while keeping the same mailbox, the same password and all the emails. The sign-in address becomes the one on the domain name, and Google Family, Google Fit and Google Nest are no longer available on this account. I did not check going back.',
      },
      {
        question: 'Can you do the set-up for me?',
        answer:
          'Yes, remotely: I look at what is in place with your host and in Gmail, I suggest the simplest solution, then I do the settings and the sending tests with you. The diagnosis is free, within 24 hours. Then from €90 to keep your free Gmail with forwarding, from €190 to upgrade it to Google Workspace, with the price given before I start. And if a free setting is enough for you, I tell you so.',
      },
    ],
  },
  relatedArticles: {
    title: 'The guides in this series',
    intro:
      'The step-by-step for each host, the troubleshooting if your emails already no longer go out, and the move to Google Workspace told step by step.',
  },
  nextTools: {
    eyebrow: 'Other checks',
    title: 'While you are here',
  },
  contactCta: {
    title: 'Send me your business address',
    description: 'I tell you within 24 hours what is affected and which solution suits you. First advice free.',
    button: 'Ask for free advice',
  },
}
