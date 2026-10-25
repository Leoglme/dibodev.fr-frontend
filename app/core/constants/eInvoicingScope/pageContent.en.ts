import type { DibodevEInvoicingScopePageContent } from '~/core/types/DibodevEInvoicingScopePage'
import { E_INVOICING_SCOPE_SOURCES } from '~/core/constants/eInvoicingScope/pageShared'

export const E_INVOICING_SCOPE_PAGE_EN: DibodevEInvoicingScopePageContent = {
  meta: {
    title: 'French e-invoicing: does it apply to me, and when?',
    description:
      'Micro-enterprise, VAT franchise, furnished rental, association: 5 questions to find out whether French e-invoicing applies to you, and from which date. Free.',
    inLanguage: 'en-GB',
    schemaAbout: 'Scope of the French e-invoicing reform: who is concerned and from which date',
  },
  breadcrumbLabel: 'E-invoicing: does it apply to me?',
  shareImage: {
    titleLines: ['French e-invoicing:', 'does it apply to me,', 'and when?'],
    highlight: 'apply',
    subtitle: 'Micro-enterprise, VAT franchise, furnished rental, association',
    badge: 'Free · 5 questions · 1 minute',
    alt: 'French e-invoicing: does it apply to me, and when? Free test on dibodev.fr',
  },
  hero: {
    titleBefore: 'French e-invoicing: does it ',
    titleHighlight: 'apply to you',
    titleAfter: ', and from when?',
    reassurances: ['Free, 5 questions, 1 minute', 'Result without e-mail', 'Official texts re-read on 25 October 2026'],
    description:
      'Since 1 September 2026, every business subject to VAT in France must be able to receive e-invoices; small businesses will have to issue them from 1 September 2027. But micro-entrepreneurs under the franchise, furnished-rental landlords, associations, exempt professions: everyone wonders whether they are in scope. This test crosses your status, your VAT regime, your size and your customers, and gives you your dates.',
    authorIntro: 'Test designed by',
    authorBio:
      'freelance developer near Rennes. I connect business software and in-house tools to accredited platforms, and automate quotes and invoices for small businesses, remotely.',
  },
  mobileContactBar: {
    text: 'A doubt about your case?',
    buttonLabel: 'Describe my case',
  },
  facts: {
    anchorId: 'rules',
    eyebrow: 'What the texts say',
    title: 'Who is concerned: six checked points',
    intro:
      'The rules re-read on 25 October 2026 on the official sources. impots.gouv.fr was under maintenance that day: the DGFiP’s guidance was read on its relays.',
    facts: [
      {
        contextLabel: 'Between taxable persons in France',
        title: 'The reform targets sales between businesses established in France and subject to VAT',
        text: 'E-invoicing applies to purchases and sales of goods or services between businesses established in France and subject to VAT. Every business concerned must be able to receive e-invoices since 1 September 2026; issuing has been mandatory since that date for large and mid-sized companies, and applies from 1 September 2027 to micro-enterprises and SMEs.',
        sourceName: 'Entreprendre.Service-Public.gouv.fr, news item of 2 September 2026',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.servicePublicNews,
      },
      {
        contextLabel: 'VAT franchise',
        title: 'The VAT franchise does not take you out of scope',
        text: 'The franchise exempts you from charging VAT, not from being a taxable person: a micro-entrepreneur or a small company under the franchise must be able to receive e-invoices since 1 September 2026, and issue those of its business customers through an accredited platform from 1 September 2027.',
        sourceName: 'Practical start-up guide to e-invoicing, DGFiP, July 2026',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.officialStarterGuide,
      },
      {
        contextLabel: 'Exempt: reception only',
        title: 'An exempt activity receives, but does not issue',
        text: 'A taxable person whose operations are all VAT-exempt (health, teaching, furnished rental without services…) remains a taxable person as a recipient: it must be able to receive the e-invoices of its suppliers since 1 September 2026, but has no e-invoice to issue and no e-reporting to send for those operations.',
        sourceName: 'Légifiscal, "Facturation électronique et loueur en meublé", after the DGFiP guidance',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.legifiscalLandlord,
      },
      {
        contextLabel: 'Private individuals and abroad',
        title: 'No e-invoice, but e-reporting',
        text: 'Sales to private individuals and operations with customers established abroad do not give rise to an e-invoice: their transaction data are sent to the tax administration through e-reporting, on the same timeline as issuing. A business may therefore fall under both obligations, depending on its customers.',
        sourceName: 'Entreprendre.Service-Public.gouv.fr, news item of 2 September 2026',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.servicePublicNews,
      },
      {
        contextLabel: 'Directory',
        title: 'Without an appointed platform, no reception address',
        text: 'The e-invoicing directory lists every taxable business, its accredited platform and its invoicing addresses. As long as you have not appointed a platform, your suppliers cannot send you an e-invoice: it is the first thing to do, whatever your issuing date.',
        sourceName: 'economie.gouv.fr, "Qu’est-ce que l’annuaire de la facturation électronique ?"',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.economieGouvDirectory,
      },
      {
        contextLabel: '2026 tolerance',
        title: 'No penalty in 2026, but neither postponement nor suspension',
        text: 'The government announced that no penalty would be applied in 2026 to businesses in real, documented difficulty followed by corrective actions. The DGFiP’s start-up guide states that this tolerance "is neither a postponement nor a suspension of the obligation".',
        sourceName: 'Compta Online, 5 October 2026, after the press release and the DGFiP guide',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.comptaOnlineTolerance,
      },
    ],
    calloutEmphasizedIntro: 'What I do for you:',
    calloutText:
      'I check your situation, I connect your business software or in-house tool to an accredited platform, and I automate the output of quotes and invoices. Remotely, first call free.',
  },
  cases: {
    anchorId: 'cases',
    eyebrow: 'Case by case',
    title: 'Micro-entrepreneur, landlord, association, liberal profession: what each one has to do',
    intro: 'The six situations that come up most in the questions I receive, with the rule that applies.',
    items: [
      {
        title: 'Micro-entrepreneur under the VAT franchise',
        description:
          'Receive through an accredited platform since 1 September 2026; issue the invoices of your business customers through a platform from 1 September 2027; e-reporting of sales to private individuals on the same date.',
      },
      {
        title: 'Company or sole trader under the real regime',
        description:
          'Same dates as the micro-enterprise as long as you stay under 250 employees and €50M of turnover. Above that, everything has been mandatory since 1 September 2026.',
      },
      {
        title: 'Liberal profession',
        description:
          'If your services are exempt (doctor, nurse, teacher…), reception only since 2026. If you charge VAT or are under the franchise (lawyer, consultant, architect…), reception since 2026 and issuing in 2027.',
      },
      {
        title: 'Furnished-rental landlord without services (LMNP, LMP)',
        description:
          'Exempt rental: you remain a taxable person as a recipient. Reception of your suppliers’ invoices since 1 September 2026, if you have a SIREN number; no issuing, no e-reporting.',
      },
      {
        title: 'Furnished-rental landlord with hotel-type services',
        description:
          'At least three services among breakfast, regular cleaning, linen and reception: the rental is taxable. Reception since 2026, issuing for business customers and e-reporting for private individuals from 1 September 2027.',
      },
      {
        title: 'Non-profit association',
        description:
          'Out of scope for its non-commercial activities: nothing to do. Concerned for a commercial activity subject to VAT (bar, shop, services invoiced to businesses), on the same dates as a small business.',
      },
    ],
  },
  timeline: {
    anchorId: 'timeline',
    eyebrow: 'The timeline',
    title: 'Three dates to remember',
    intro: 'Set by the French finance law for 2024, confirmed without postponement.',
    items: [
      {
        title: '1 September 2026: reception for all, issuing for large and mid-sized companies',
        description:
          'Every taxable business must be able to receive through an accredited platform; large and mid-sized companies issue and send their e-reporting.',
      },
      {
        title: 'Until the end of 2026: tolerance on penalties',
        description:
          'No penalty for a business in real difficulty that has started its compliance process. This is neither a postponement nor a suspension.',
      },
      {
        title: '1 September 2027: issuing and e-reporting for micro-enterprises and SMEs',
        description:
          'Invoices to business customers go through a platform; sales to private individuals and abroad are reported.',
      },
    ],
  },
  method: {
    eyebrow: 'What next',
    title: 'Four steps, in order',
    intro: 'What I do with my clients once the date is known.',
    steps: [
      {
        label: 'Know',
        title: 'Your date, with the test',
        description:
          'Status, VAT, size, customers: the test above tells you whether you only receive, or also issue, and when.',
      },
      {
        label: 'Appoint',
        title: 'An accredited platform to receive',
        description:
          'In your software if it is accredited or connected, otherwise on a free platform. With the legal representative’s account, then a check of the directory.',
      },
      {
        label: 'Check',
        title: 'Your invoicing software',
        description:
          'The software checker tells whether it is an accredited platform, connected, or whether something is missing before your issuing date.',
      },
      {
        label: 'Connect',
        title: 'Your in-house quotes and invoices',
        description:
          'If your invoices come out of trade software or a custom tool, I connect it to an accredited platform and automate the sending.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Does it apply to me? The questions I am asked',
    questions: [
      {
        question: 'I am a micro-entrepreneur under the VAT franchise: am I concerned?',
        answer:
          'Yes. The franchise exempts you from charging VAT, not from being a taxable person. You must be able to receive e-invoices since 1 September 2026 and, from 1 September 2027, issue those of your business customers through an accredited platform. Your sales to private individuals do not give rise to an e-invoice, but to e-reporting on the same date.',
      },
      {
        question: 'I only sell to private individuals: do I still have to do something?',
        answer:
          'Yes, two things. Receive: your French suppliers will send you e-invoices, so you need an accredited platform appointed in the directory, since 1 September 2026. Report: your sales to private individuals will be sent to the tax administration through e-reporting, from 1 September 2027 for a small business. You have no e-invoice to issue, though.',
      },
      {
        question: 'I am a non-professional furnished-rental landlord (LMNP): am I concerned?',
        answer:
          'For reception, yes, if you have a SIREN number: furnished rental without services is VAT-exempt, but you remain a taxable person as a recipient and must be able to receive your suppliers’ invoices through an accredited platform since 1 September 2026. You have nothing to issue or report. If you offer at least three hotel-type services (breakfast, regular cleaning, linen, reception), the rental becomes taxable and you follow a business’s timeline.',
      },
      {
        question: 'Is our association concerned?',
        answer:
          'Not for its non-commercial activities, which are outside the scope of VAT: no e-invoice to receive or issue, no e-reporting. It is concerned for a commercial activity subject to VAT, even under the franchise: bar, shop, services invoiced to businesses. In that case, reception since 1 September 2026 and issuing from 1 September 2027 for that activity.',
      },
      {
        question: 'I am a VAT-exempt doctor, nurse or trainer: what do I have to do?',
        answer:
          'Be able to receive, only. Your exempt services give rise neither to an e-invoice nor to e-reporting, but you remain a taxable person as a recipient: appoint an accredited platform (several have a free plan) to receive your suppliers’ invoices, since 1 September 2026. If part of your activity is taxable (product sales, ancillary services), it follows the issuing timeline.',
      },
      {
        question: 'I have no supplier in France: do I still have to appoint a platform?',
        answer:
          'The obligation is to be able to receive, not to have received: every taxable person established in France must be in the directory with an appointed platform. Without it, the first French supplier that invoices you (subscription, equipment, business rent) will not be able to send you its invoice. Choose a platform with a free plan: it takes half an hour.',
      },
      {
        question: 'How do I know whether my company is an SME or a mid-sized company?',
        answer:
          'An SME has fewer than 250 employees and at most €50 million of turnover or €43 million of balance sheet total; micro-enterprises are part of it. Above that, you are a mid-sized company (up to 4,999 employees) or a large company, and everything has been mandatory since 1 September 2026. The thresholds are assessed on the last closed financial year, at the level of the company itself, not the group.',
      },
      {
        question: 'I am starting my activity in 2027: which date applies?',
        answer:
          'The one of your category. From your registration, you must be able to receive; if you create a micro-enterprise or an SME after 1 September 2027, electronic issuing applies from your first invoices to businesses. You might as well choose accredited or connected software from the start.',
      },
      {
        question: 'My invoices come out of trade software or an in-house tool: what happens?',
        answer:
          'It will not become an accredited platform, and it does not need to: it is connected to a platform that receives and issues on its behalf, through an API or by dropping files in the Factur-X, UBL or CII format. That is the work I do for my clients: connection, invoice format, directory and automated sending, remotely.',
      },
      {
        question: 'What does a business that has done nothing risk?',
        answer:
          'For issuing: €50 per non-electronic invoice, capped at €15,000 per year. For reception outside an accredited platform: a formal notice, then €500 and €1,000 per new three-month period. For e-reporting not sent: €500 per transmission, capped at €15,000 per year. None of these penalties is applied in 2026 to a business in real difficulty that has started the process.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read next',
    intro: 'Three articles on invoicing for small businesses in France.',
  },
  contactCta: {
    title: 'A doubt about your case, or a tool to connect?',
    description:
      'Describe your situation: I reply within 24 hours with the steps to take, and a quote only if software needs to be connected.',
    button: 'Describe my case',
  },
}
