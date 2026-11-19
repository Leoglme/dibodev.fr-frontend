import type { DibodevUpdateServicePageContent } from '~/core/types/DibodevUpdateServicePage'

// Gmail labels are the wording of the English Google help pages, as in `gmailSendAsCheck/pageContent.en.ts`.
export const GMAIL_BUSINESS_EMAIL_SERVICE_PAGE_EN: DibodevUpdateServicePageContent = {
  meta: {
    title: 'Business email address in Gmail: remote set-up from €90',
    description:
      'Free Gmail stops “Send mail as” in January 2027. I set up your business address remotely: free diagnosis, from €90.',
    serviceName: 'Business email address set-up in Gmail and move to Google Workspace',
  },
  breadcrumbLabel: 'Business email address in Gmail',
  shareImage: {
    titleLines: ['Your business address in Gmail', 'after January 2027'],
    highlight: 'after January 2027',
    subtitle: 'Forwarding to Gmail or move to Google Workspace, remotely',
    badge: 'From €90, free diagnosis',
    alt: 'Your business email address in Gmail after January 2027: remote set-up from €90, free diagnosis',
  },
  hero: {
    titlePart1: 'Your business email address in Gmail after January 2027: ',
    titleHighlight1: 'I do the set-up',
    titlePart2: ' remotely',
    description:
      'From January 2027, according to Google, a free Gmail account will no longer be able to send with an address hosted elsewhere (“Send mail as”) or to fetch its mail (“Check mail from other accounts”). If you read your business address in Gmail, there is a setting to change before then. I handle it remotely: free diagnosis within 24 hours, then either forwarding to your Gmail or moving your Gmail to Google Workspace, with sending and receiving tests. The price is announced before starting.',
    ctaText: 'Send my address',
    secondaryCtaText: 'See the prices',
    reassurances: ['Reply within 24 h', 'No email lost', 'Price announced before starting'],
  },
  offers: {
    anchorId: 'prices',
    eyebrow: 'Offers and prices',
    title: 'Two solutions, a price known before starting',
    intro:
      'The diagnosis is free and without commitment. Then, two different jobs: the first keeps your Gmail free, the second makes it a business account. I tell you which one suits you.',
    cards: [
      {
        title: 'Diagnosis',
        price: 'Free',
        description:
          'You send me your business address. Within 24 hours I tell you in writing where it is hosted, what stops for you in January 2027, which solution suits you and its price. No commitment.',
        isHighlighted: false,
      },
      {
        title: 'Keep your free Gmail',
        price: 'From €90',
        description:
          'I set up, with your host, the forwarding of your business address to your Gmail, I check that emails arrive and do not go to spam, and I show you where to write with your business address. No subscription. You receive as before; from Gmail, you write with your @gmail.com address.',
        isHighlighted: false,
      },
      {
        title: 'Move your Gmail to Google Workspace',
        price: 'From €190',
        description:
          'Your Gmail becomes a business account: same mailbox, same emails, and you keep writing with your business address. I verify your domain name, I recreate your addresses, I switch receiving over to Google, I set up sending authentication and I test. The Google subscription (€6.80 to €8.10 excl. VAT per month and per mailbox) is paid to Google, in your name.',
        isHighlighted: true,
      },
    ],
    notes: [
      '“From”: the starting price is for one address, on a domain name you have access to. It goes up with the number of addresses, the emails sent by your website (forms, online store) and the settings to fix. The final price is announced after the diagnosis, before any change.',
      'Prices net, VAT not applicable (art. 293 B of the French tax code). Remote work, anywhere in France.',
    ],
    ctaLabel: 'Send my address',
    highlightLabel: 'To keep your habits as they are',
    toolLinkText: 'Test my address for free first',
  },
  included: {
    anchorId: 'included',
    eyebrow: 'In every job',
    title: 'What is included, whichever solution you choose',
    intro: 'A mailbox that stops means customers who get no answer. Hence these precautions.',
    items: [
      {
        title: 'Nothing is changed before you agree',
        description:
          'The diagnosis only reads what is in place. The settings start once you have said yes to the price.',
      },
      {
        title: 'No email lost',
        description:
          'Every existing address of the domain is listed and recreated before the switch, and the mailbox with your host is kept.',
      },
      {
        title: 'Sending and receiving tested',
        description: 'Test emails in both directions, to several mail services, with a look at the Spam folder.',
      },
      {
        title: 'Sending authentication checked',
        description:
          'The SPF, DKIM and DMARC lines of your domain name are checked: without them, a properly sent email lands in spam.',
      },
      {
        title: 'You stay in control of your account',
        description:
          'I do not ask for your Gmail password: the steps on the Google side are done with you, on a video call or step by step in writing.',
      },
      {
        title: 'Written report',
        description: 'What was done, where the settings are and what to keep an eye on, in plain language.',
      },
    ],
  },
  audiences: {
    anchorId: 'for-whom',
    eyebrow: 'For whom',
    title: 'Addresses, hosts and situations covered',
    intro: 'Any address hosted elsewhere than with Google and used in a free Gmail.',
    items: [
      {
        title: 'Tradespeople, freelancers, self-employed professionals',
        description:
          'A contact@your-company.fr address read in your personal Gmail, set up one day by you or by your webmaster.',
      },
      {
        title: 'OVHcloud, o2switch, IONOS and the others',
        description:
          'Infomaniak, Gandi, Hostinger, LWS, Plesk or cPanel at a small host: the principle is the same everywhere.',
      },
      {
        title: 'Several addresses on the same domain name',
        description:
          'contact@, quotes@, billing@: each one is carried over, as a mailbox or as an alias, so that nothing is lost at the switch.',
      },
      {
        title: 'Website emails that go to spam',
        description:
          'Contact forms, order confirmations, appointment reminders: I also set up the sending of the emails from your website.',
        link: { label: 'Test whether your emails go to spam', to: '/en/tools/email-spam-check-spf-dkim-dmarc' },
      },
      {
        title: 'Orange, Free, SFR or laposte.net address',
        description:
          'An address from a French internet provider: the right time to move to one on your own domain name, which follows you if you change provider.',
      },
      {
        title: 'Webmasters and agencies',
        description:
          'You installed this set-up for your clients: you can send them to me for the technical side, and I deal with them directly.',
      },
    ],
  },
  method: {
    eyebrow: 'How it goes',
    title: 'Five steps, from your message to the report',
    intro: 'Nothing to install on your side. Access to your host is enough, and you take it back at the end.',
    steps: [
      {
        label: 'Address',
        title: 'You send me your business address',
        description: 'Through the form, with your host if you know it. Otherwise I find it.',
      },
      {
        label: 'Diagnosis',
        title: 'Written answer within 24 h',
        description:
          'Where your address is hosted, what stops for you, the solution that suits you and its price. Free, no commitment.',
      },
      {
        label: 'Preparation',
        title: 'List of addresses and settings',
        description: 'All the addresses of the domain, the emails sent by your website, the access needed.',
      },
      {
        label: 'Set-up',
        title: 'Forwarding or switch, at an agreed time',
        description: 'Your emails keep arriving during the set-up. The steps on the Google side are done with you.',
      },
      {
        label: 'Report',
        title: 'Tests, then what was done, in writing',
        description: 'And what to keep an eye on. The invoice comes after, not before.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Before you write',
    questions: [
      {
        question: 'Who can set up my business email address in Gmail before January 2027?',
        answer:
          'Three people can: you, with your host’s guide (the guides for OVHcloud, o2switch and IONOS are on this site); the webmaster who set up your address; or a developer like me, who looks at what is in place, suggests the simplest solution, does the settings with the host and tests sending and receiving. The diagnosis is free, and you know the price before the work starts: from €90 to keep your free Gmail, from €190 to move it to Google Workspace.',
      },
      {
        question: 'Why two prices?',
        answer:
          'Because they are two different jobs. From €90, your Gmail stays free: I set up forwarding from your business address to Gmail, you receive as before, but from Gmail you write with your @gmail.com address. From €190, your Gmail becomes a Google Workspace account: you keep receiving and writing with your business address, as you do today, and you pay Google a subscription of €6.80 to €8.10 excl. VAT per month and per mailbox (prices read on 19 November 2026).',
      },
      {
        question: 'Why “from”?',
        answer:
          'Because the work depends on what is in place on your side. The starting price is for one address, on a domain name you have access to. Several addresses, emails sent by your website, authentication settings to fix or a host you have no access to take more time. The free diagnosis says so, and the final price is announced before any change.',
      },
      {
        question: 'Do I have to pay Google as well?',
        answer:
          'Only if you choose Google Workspace. On Google’s price page for France, read on 19 November 2026: Business Starter at €6.80 excluding VAT per user per month with a one-year commitment, €8.10 without a commitment, with a free 14-day trial. One mailbox is enough for one person: the other addresses of the domain can be aliases of it. The subscription is in your name and is paid to Google, not to me. With forwarding to a free Gmail, there is no subscription at all.',
      },
      {
        question: 'Does it have to be done before January 2027?',
        answer:
          'It is more comfortable. Google writes that the current settings work until January 2027 and gives no precise day. Making the change before then means doing it at a chosen time, with tests, rather than on a morning when emails no longer go out. If that has already happened, nothing is lost: the emails are waiting with your host, and that is where I start.',
      },
      {
        question: 'Will I lose emails during the change?',
        answer:
          'No, that is the whole point of the preparation. Before a move to Google Workspace, every address of the domain is listed and recreated with Google, then receiving is switched over; the mailbox with your host is kept. The emails already in your Gmail stay there, as Google itself writes. With forwarding, emails keep arriving in the mailbox with your host as well as in Gmail.',
      },
      {
        question: 'How long does the work take?',
        answer:
          'Forwarding is set up in one short session. For a move to Google Workspace, it took me about 40 minutes on a test account on 19 November 2026, for one address; allow more with several addresses and the emails of the website. Google warns that new emails can take up to 24 hours to arrive after the switch.',
      },
      {
        question: 'Which hosts do you work with?',
        answer:
          'Every host that gives access to the addresses and to the settings of the domain name: OVHcloud, o2switch, IONOS, Infomaniak, Gandi, Hostinger, LWS, and hosting under Plesk or cPanel. My own business address is hosted with o2switch.',
      },
      {
        question: 'What if a free setting is enough for me?',
        answer:
          'I tell you so at the diagnosis. If you mostly receive and your customers never see your address, forwarding that you can set up yourself with your host is enough, and the guides on this site show where to click.',
      },
      {
        question: 'Do you work with webmasters and agencies?',
        answer:
          'Yes. If you have set up business addresses in your clients’ Gmail, you can send them to me: I deal with them directly, for email only. The website, the design and the content of course stay with you.',
      },
      {
        question: 'How does payment work?',
        answer:
          'A free diagnosis, a price announced before the work, then an invoice afterwards, paid by bank transfer. Prices net, VAT not applicable. The Google Workspace subscription, if you take it, is in your name and is paid directly to Google.',
      },
    ],
  },
  relatedArticles: {
    title: 'To do it yourself, or understand what is changing',
    intro: 'The step-by-step for each host, the troubleshooting, and the move to Google Workspace told step by step.',
  },
  contactCta: {
    title: 'Send me your business address',
    description: 'Free diagnosis within 24 hours, then a price announced before any work.',
    button: 'Send my address',
  },
  mobileContactBar: {
    text: 'Your business address in Gmail?',
    buttonLabel: 'Send my address',
  },
}
