import type { DibodevVatCalculatorPageContent } from '~/core/types/DibodevVatCalculatorPage'
import { PAYMENT_RECEIPT_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/paymentReceipt/pageShared'
import { PLUMBER_QUOTE_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/plumberQuote/pageShared'
import {
  INVOICE_MENTIONS_SOURCE,
  PRICE_EXCLUDING_TAX_FORMULA_SOURCE,
  RENOVATION_WORKS_CLIENT_MENTION_SOURCE,
  RENOVATION_WORKS_VAT_SOURCE,
  VAT_FRANCHISE_SOURCE,
  VAT_RATES_SOURCE,
} from '~/core/constants/vatCalculator/pageShared'

export const VAT_CALCULATOR_PAGE_EN: DibodevVatCalculatorPageContent = {
  meta: {
    title: 'French VAT calculator: add or remove VAT (HT to TTC)',
    description:
      'Free French VAT calculator: go from a price excluding VAT (HT) to including VAT (TTC) or back at 20%, 10%, 5.5% or 2.1%, or total a multi-rate quote.',
    inLanguage: 'en-GB',
    schemaAbout:
      'Calculation of French VAT, conversion between a price excluding VAT (HT) and including VAT (TTC), total of a quote at several rates',
  },
  breadcrumbLabel: 'French VAT calculator',
  numberLocale: 'en-GB',
  shareImage: {
    titleLines: ['French VAT', 'calculator, free'],
    highlight: 'French VAT',
    subtitle: 'Add or remove French VAT at 20%, 10%, 5.5% or 2.1%, and total a quote at several rates',
    badge: 'Free, no sign-up',
    alt: 'Free French VAT calculator: price excluding VAT, VAT and price including VAT, formula shown and total of a quote at several rates, on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'French VAT calculator',
    titleAfter: ', HT to TTC and back',
    reassurances: ['Price, VAT and total with the formula', 'Quotes at several rates', 'Nothing is saved'],
    aboutTitle: 'About the calculator',
    description:
      'A calculator for French VAT (TVA), made to prepare a quote or an invoice: you type an amount, you say whether it excludes VAT (HT, hors taxes) or includes it (TTC, toutes taxes comprises), you pick the rate, and you read the price excluding VAT, the VAT and the price including VAT with the formula applied. The "Several lines" mode adds up the lines of a quote, each with its own rate, and splits the VAT by rate.',
    authorIntro: 'Calculator prepared by',
    authorBio:
      'a business software developer near Rennes, France. I write my own quotes and invoices under the French VAT exemption for small businesses (franchise en base). For this calculator, I read the Service-Public and impots.gouv.fr pages on VAT rates, works in homes and the small-business exemption.',
  },
  calculator: {
    modeGroupLabel: 'Type of calculation',
    modeLabels: {
      single: 'One amount',
      lines: 'Several lines',
    },
    directionLabel: 'Which amount do you have?',
    directionLabels: {
      fromExcludingTax: 'Excl. VAT (HT)',
      fromIncludingTax: 'Incl. VAT (TTC)',
    },
    amountLabels: {
      fromExcludingTax: 'Amount excluding VAT, in euros',
      fromIncludingTax: 'Amount including VAT, in euros',
    },
    amountPlaceholder: '0.00',
    amountHint: 'Comma or dot, as you like. The result is calculated as you type.',
    rateLabel: 'French VAT rate',
    rateTemplate: '{rate}%',
    customRateButton: 'Other rate',
    customRateLabel: 'Custom rate in %',
    customRateHint: 'For a rate of Corsica or the French overseas departments, for example.',
    lineNameLabel: 'Description (optional)',
    lineNamePlaceholder: 'Labour, supplies, travel…',
    quantityLabel: 'Quantity',
    unitPriceLabel: 'Unit price excl. VAT',
    lineRateLabel: 'VAT',
    lineTotalLabel: 'Line total excl. VAT',
    lineNumberTemplate: 'Line {number}',
    removeLineTemplate: 'Remove line {number}',
    addLineButton: 'Add a line',
    clearButton: 'Clear all',
    roundingNote:
      'Each line is rounded to the cent. VAT is calculated rate by rate, on the total excluding VAT of the lines at that rate, then rounded to the cent.',
    singleResultLabels: {
      fromExcludingTax: 'Price including VAT',
      fromIncludingTax: 'Price excluding VAT',
    },
    quoteResultLabel: 'Total including VAT',
    emptyResultTexts: {
      single:
        'Type an amount: the price excluding VAT, the VAT and the price including VAT are calculated as you type.',
      lines:
        'Type a quantity and a unit price excluding VAT on at least one line: the totals are calculated as you type.',
    },
    singleVatLineTemplate: 'of which VAT at {rate}: {amount}',
    quoteVatLineTemplate: 'of which VAT: {amount}',
    amountExcludingTaxLabel: 'Price excl. VAT (HT)',
    vatAmountTemplate: 'VAT at {rate}',
    amountIncludingTaxLabel: 'Price incl. VAT (TTC)',
    totalExcludingTaxLabel: 'Total excl. VAT (HT)',
    vatOnBaseTemplate: 'VAT at {rate} on {base}',
    totalVatLabel: 'Total VAT',
    totalIncludingTaxLabel: 'Total incl. VAT (TTC)',
    formulaLabel: 'Formula applied',
    formulaTemplates: {
      fromExcludingTax: '{amountExcludingTax} × {coefficient} = €{amountIncludingTax} incl. VAT',
      fromIncludingTax: '{amountIncludingTax} ÷ {coefficient} = €{amountExcludingTax} excl. VAT',
    },
    copySummaryButton: 'Copy the summary',
    copiedStatus: 'Summary copied: paste it into an email or a quote.',
    copyFailedStatus: 'Copying did not work in this browser: write the result down by hand.',
    privacyNote: 'Everything is calculated in your browser: no amount is sent or saved.',
    summary: {
      singleTitle: 'French VAT calculation',
      quoteTitle: 'Quote summary',
      quoteLineTemplate: '{label}: {quantity} × {unitPrice} = {amount} excl. VAT (VAT {rate})',
      unnamedLineTemplate: 'Line {number}',
      resultRowTemplate: '{label}: {amount}',
      formulaTemplate: 'Formula: {formula}',
      footer: 'Calculated with the French VAT calculator of dibodev.fr. Check which rate applies to your business.',
    },
  },
  summary: {
    eyebrow: 'In short',
    text: 'Price including VAT (TTC) = price excluding VAT (HT) × (1 + rate). Price excluding VAT = price including VAT ÷ (1 + rate). At 20%, you multiply or divide by 1.20: €1,000 excluding VAT is €1,200 including VAT, and €1,200 including VAT is €1,000 excluding VAT. Never take 20% off the price including VAT: you would get €960. In mainland France, the rates are 20%, 10%, 5.5% and 2.1%. A business under the small-business exemption (franchise en base) charges no VAT.',
    dateLabel: 'Rules read on 22 November 2026 on Service-Public and impots.gouv.fr.',
  },
  method: {
    eyebrow: 'How to calculate',
    title: 'Calculate French VAT without getting it wrong',
    intro:
      'Four points make the difference between a right quote and a wrong one: the direction of the calculation, the mistake of taking 20% off the total, mixed rates and rounding.',
    steps: [
      {
        label: 'Adding VAT',
        title: 'Multiply the price excluding VAT by 1 + the rate',
        description:
          'To go from HT to TTC, multiply by 1.20 at 20%, by 1.10 at 10%, by 1.055 at 5.5% and by 1.021 at 2.1%. €1,000 excluding VAT at 20%: 1,000 × 1.20 = €1,200 including VAT. The VAT alone is 1,000 × 0.20 = €200.',
      },
      {
        label: 'Removing VAT',
        title: 'Divide the total, do not take 20% off',
        description:
          'To go back to the price excluding VAT, divide the price including VAT by the same number: 1,200 ÷ 1.20 = €1,000. The classic mistake is to take 20% off the total: 1,200 − 20% = €960, which is €40 less than the real price excluding VAT. VAT is calculated on the price excluding VAT, not on the total: in a price including 20% VAT, it is only 16.67% of the total.',
      },
      {
        label: 'Several rates',
        title: 'A quote with two rates',
        description:
          'When a quote mixes rates, calculate the VAT rate by rate, never with an average rate. €800 excluding VAT at 10% and €300 at 20%: total excluding VAT €1,100, VAT 80 + 60 = €140, total including VAT €1,240. This is what the "Several lines" mode does, with the VAT split by rate.',
      },
      {
        label: 'Rounding',
        title: 'Round to the cent, once per rate',
        description:
          'An amount is rounded to the cent: up when the third decimal is 5 or more, down otherwise. The calculator rounds each line, then calculates the VAT on the total excluding VAT of each rate. Three lines of €33.33 at 20% give €99.99 excluding VAT and €20.00 of VAT. Rounded line by line, the VAT would be €20.01: a one-cent gap is possible with software that counts differently.',
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'What the official pages say',
    title: 'Six French rules on rates, building works and the VAT exemption',
    intro:
      'Read on 22 November 2026 on Service-Public and impots.gouv.fr, for mainland France. The rates and what they cover change regularly: check the rate of each sale before writing it on a quote.',
    facts: [
      {
        contextLabel: 'Mainland France',
        title: 'Four rates: 20%, 10%, 5.5% and 2.1%',
        text: 'According to impots.gouv.fr, the standard rate of 20% applies to most goods and services. The 10% rate covers, among others, restaurants, passenger transport, home improvement works and hotel accommodation. The 5.5% rate covers, among others, basic food products, books and energy renovation works. The 2.1% rate covers, among others, press publications and reimbursable medicines.',
        sourceName: VAT_RATES_SOURCE.name,
        sourceUrl: VAT_RATES_SOURCE.url,
      },
      {
        contextLabel: 'Works in a home',
        title: '10% or 5.5% in a home more than 2 years old',
        text: 'In a home finished for more than 2 years, improvement, conversion, fitting-out or maintenance works are at 10%, and energy renovation works, such as thermal insulation, at 5.5%. The 20% rate still applies to excluded works, for example in premises that are not used as a home or for the upkeep of green spaces, and to equipment the individual buys directly.',
        sourceName: RENOVATION_WORKS_VAT_SOURCE.name,
        sourceUrl: RENOVATION_WORKS_VAT_SOURCE.url,
      },
      {
        contextLabel: 'Since 1 March 2025',
        title: 'The client certifies the reduced rate on the quote or the invoice',
        text: 'To apply 10% or 5.5%, the client must certify, by a statement on the quote or the invoice, that the works meet the conditions. According to impots.gouv.fr, a separate certificate is no longer required since 1 March 2025. The reduced rates apply to a main or second home, whether the client is the owner, a tenant or a rent-free occupant.',
        sourceName: RENOVATION_WORKS_CLIENT_MENTION_SOURCE.name,
        sourceUrl: RENOVATION_WORKS_CLIENT_MENTION_SOURCE.url,
      },
      {
        contextLabel: 'Small-business exemption, 2026 thresholds',
        title: 'Under €37,500 or €85,000, no VAT to charge',
        text: 'A business under the exemption called "franchise en base" does not charge VAT and does not deduct it from its purchases. For 2026, Service-Public states that the thresholds are unchanged: €85,000 of turnover for the sale of goods and accommodation, €37,500 for services and the liberal professions, lawyers excepted. Each invoice carries the statement "TVA non applicable, article 293 B du CGI".',
        sourceName: VAT_FRANCHISE_SOURCE.name,
        sourceUrl: VAT_FRANCHISE_SOURCE.url,
      },
      {
        contextLabel: 'Removing VAT',
        title: 'Price excluding VAT = price including VAT ÷ (1 + VAT rate)',
        text: 'This is the formula given by Service-Public, with an example: €50 including VAT is €41.67 excluding VAT at 20%, €45.45 at 10% and €47.39 at 5.5%. The price excluding VAT is rounded up to the cent when the third decimal is 5 or more, down otherwise: €41.669 becomes €41.67.',
        sourceName: PRICE_EXCLUDING_TAX_FORMULA_SOURCE.name,
        sourceUrl: PRICE_EXCLUDING_TAX_FORMULA_SOURCE.url,
      },
      {
        contextLabel: 'On an invoice',
        title: 'Unit price excluding VAT and rate on each line',
        text: 'For each product or service, a French invoice states the quantity, the precise description, the unit price excluding VAT and the VAT rate that applies. It then gives the total excluding VAT and the total including VAT to pay. The "Several lines" mode of the calculator follows the same order.',
        sourceName: INVOICE_MENTIONS_SOURCE.name,
        sourceUrl: INVOICE_MENTIONS_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'The calculator does not choose the rate for you.',
    calloutText:
      'It applies the rate you give it. The four buttons are the rates of mainland France: Corsica and the overseas departments have other rates for some sales, to type under "Other rate". If you are unsure about a rate, ask your accountant or your French tax office.',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'French VAT calculation: your questions',
    questions: [
      {
        question: 'How do you calculate French VAT?',
        answer:
          'Multiply the price excluding VAT by the rate: €1,000 at 20% gives 1,000 × 0.20 = €200 of VAT. Add it to the price excluding VAT to get the price including VAT: €1,200. If you start from the price including VAT, first work out the price excluding VAT (total ÷ 1.20), then take the difference: 1,200 − 1,000 = €200 of VAT.',
      },
      {
        question: 'How do you go from TTC to HT (remove French VAT)?',
        answer:
          'Divide the price including VAT by 1 + the VAT rate: by 1.20 at 20%, 1.10 at 10%, 1.055 at 5.5% and 1.021 at 2.1%. €500 including VAT at 10% is 500 ÷ 1.10 = €454.55 excluding VAT, so €45.45 of VAT. In the calculator, choose "Incl. VAT (TTC)".',
      },
      {
        question: 'How do you go from HT to TTC (add French VAT)?',
        answer:
          'Multiply the price excluding VAT by 1 + the VAT rate. €100 excluding VAT is €120 including VAT at 20%, €110 at 10%, €105.50 at 5.5% and €102.10 at 2.1%. In the calculator, choose "Excl. VAT (HT)".',
      },
      {
        question: 'Why should you not take 20% off the price including VAT?',
        answer:
          'Because the 20% of VAT is calculated on the price excluding VAT, not on the price including VAT. On €1,200 including VAT, taking 20% off gives €960, while the real price excluding VAT is €1,000. The VAT contained in a price including 20% VAT is only 16.67% of that price. You have to divide by 1.20.',
      },
      {
        question: 'Which French VAT rate applies to building works?',
        answer:
          'In a home finished for more than 2 years: 10% for improvement, conversion, fitting-out or maintenance works, and 5.5% for energy renovation works, such as thermal insulation. The 20% rate applies to the rest: premises not used as a home, upkeep of green spaces, equipment the client buys directly. The client must certify on the quote or the invoice that the conditions are met.',
      },
      {
        question: 'Does a French micro-entrepreneur (auto-entrepreneur) charge VAT?',
        answer:
          'Not as long as the business stays under the small-business exemption (franchise en base). For 2026, the thresholds are €37,500 of turnover for services and €85,000 for the sale of goods and accommodation. The business then invoices without VAT, with the statement "TVA non applicable, article 293 B du CGI", and does not recover the VAT on its purchases. Above the higher threshold (€41,250 for services, €93,500 for sales), VAT applies from the first day the threshold is exceeded. Between the two thresholds, it applies from 1 January of the following year.',
      },
      {
        question: 'What are the VAT rates in France?',
        answer:
          'In mainland France, four rates: 20% for most goods and services, 10% notably for restaurants, passenger transport and home improvement works, 5.5% notably for basic food products, books and energy renovation, 2.1% notably for the press and reimbursable medicines. Corsica and the overseas departments have other rates for some sales.',
      },
      {
        question: 'How do you calculate the VAT of a quote with several rates?',
        answer:
          'First add up the amounts excluding VAT of the lines that share the same rate, then calculate the VAT of each group. €800 at 10% gives €80 of VAT, €300 at 20% gives €60: the quote comes to €1,100 excluding VAT, €140 of VAT and €1,240 including VAT. The "Several lines" mode does this calculation and shows the VAT of each rate.',
      },
      {
        question: 'How do you round VAT?',
        answer:
          'To the cent: up when the third decimal is 5 or more, down otherwise. €41.669 becomes €41.67. The calculator rounds each line, then the VAT of each rate on the total excluding VAT of that rate. Software that rounds the VAT line by line can end up one cent apart.',
      },
      {
        question: 'Does the calculator keep my amounts?',
        answer:
          'No. Everything is calculated in your browser: no amount is sent or saved, and everything is cleared when you close the page. To keep a record, copy the summary and paste it into an email or into your quote.',
      },
    ],
  },
  templates: {
    eyebrow: 'Free templates',
    title: 'Put these amounts on a quote or a receipt',
    intro:
      'The calculator keeps nothing. To hand a clean document to your client, two free templates to download, no sign-up.',
    links: [
      {
        routeName: PLUMBER_QUOTE_TEMPLATE_ROUTE_NAME,
        title: 'Plumbing and heating quote',
        description: 'Quote and job sheet in Excel and PDF, with a French VAT rate of 5.5%, 10% or 20% on each line.',
        linkLabel: 'See the quote template',
      },
      {
        routeName: PAYMENT_RECEIPT_TEMPLATE_ROUTE_NAME,
        title: 'Payment and deposit receipt',
        description:
          'Receipt book with stubs and deposit receipt in PDF, Word and Excel, with the balance due calculated.',
        linkLabel: 'See the payment receipt',
      },
    ],
  },
  contactCta: {
    title: 'Are your quotes and invoices still done by hand?',
    description:
      'When each quote is typed again in a spreadsheet, rates are picked line by line and the invoice is then keyed in once more, a tool that links quotes, invoices and payment tracking gives you time back. Tell me how you work: I answer within 24 h, and if a market software is enough, I tell you.',
    button: 'Discuss my project',
  },
}
