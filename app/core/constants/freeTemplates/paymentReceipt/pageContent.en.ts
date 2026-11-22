import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  CASH_PAYMENT_CEILING_SOURCE,
  INVOICING_OBLIGATION_SOURCE,
  PAYMENT_PROOF_SOURCE,
  PAYMENT_RECEIPT_TEMPLATE_DOCX_PATH,
  PAYMENT_RECEIPT_TEMPLATE_PDF_PATH,
  PAYMENT_RECEIPT_TEMPLATE_UPDATED_AT,
  PAYMENT_RECEIPT_TEMPLATE_XLSX_PATH,
  SERVICE_NOTE_SOURCE,
} from '~/core/constants/freeTemplates/paymentReceipt/pageShared'
import { CONSUMER_DEPOSIT_SOURCE } from '~/core/constants/freeTemplates/purchaseOrder/pageShared'

export const PAYMENT_RECEIPT_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Payment receipt: free French template (PDF, Word, Excel)',
    description:
      'Free French payment receipt in PDF, Word and Excel: book of 3 receipts with stubs, deposit receipt, balance due calculated, cash, deposit or arrhes.',
    inLanguage: 'en',
    schemaAbout: 'French payment receipt, receipt book with stubs and deposit receipt template',
  },
  breadcrumbLabel: 'Payment receipt',
  shareImage: {
    titleLines: ['Payment receipt', 'free French template'],
    highlight: 'Payment receipt',
    subtitle: 'Receipt book with stubs and deposit receipt in PDF, Word and Excel, balance due calculated',
    badge: 'Free, no sign-up',
    icon: 'receipt',
    alt: 'Free French payment receipt template: receipt book with stubs and deposit receipt in PDF, Word and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Payment receipt',
    titleAfter: ': free French template, PDF, Word and Excel (+ deposit receipt)',
    reassurances: ['Book of 3 receipts with stubs', 'Deposit receipt with the balance due', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'Written in French for businesses and individuals in France. A receipt (reçu) says one simple thing: this amount was handed over, on this day, by this person, for this reason. The first page is a book of three receipts to cut out, each with a stub that stays with you, for everyday payments in cash, by cheque or by transfer. The second is a detailed deposit receipt (reçu d’acompte), for when a customer pays part of the price before the work or the delivery: it repeats the quote, the payments already made and the balance due. The Excel file numbers, adds up and checks each line.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the French Civil Code on proof of payment, the 1983 order on service notes, the Monetary and Financial Code on cash and the Service-Public pages on deposits and invoices, so that the receipt says what it proves, and nothing more.',
    updatedAt: PAYMENT_RECEIPT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For tradespeople, shopkeepers, freelancers, associations and individuals in France who receive money and want to keep a record of it. Three files in French, no form to fill in: the PDF prints and cuts out, the Excel file keeps the register and calculates the balance due, the Word file can be edited freely.',
    files: [
      {
        label: 'Download the PDF template',
        href: PAYMENT_RECEIPT_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: PAYMENT_RECEIPT_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, totals calculated, in French',
      },
      {
        label: 'Download the Word version',
        href: PAYMENT_RECEIPT_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 pages, editable, in French',
      },
    ],
    footnote: 'Free to use and adapt to your business. It replaces neither an invoice nor your accountant’s advice.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A receipt book, a deposit receipt and a register that does the sums',
    intro:
      'The PDF holds two A4 pages: three receipts to cut out with their stubs, then a deposit receipt. The Excel file swaps them for a numbered register, a receipt that fills itself in from the register, and a monthly summary.',
    documents: [
      {
        title: 'Book of three receipts with stubs',
        format: 'Page 1 of the PDF and the Word file, “Reçu à imprimer” sheet of the Excel file',
        items: [
          'At the top, the book: numbers of the first and last receipts, person who keeps it',
          'One stub per receipt, on the left, which stays with you: number, date, received from, amount, method, purpose, balance due',
          'The receipt, on the right, past a dotted line: number, date, who receives (name, address, SIRET number), who pays, the amount in figures in a frame and in words, the purpose with the quote or invoice number',
          'Payment method in five boxes: cash, cheque with its number, transfer, card, other',
          'Nature of the payment in four boxes: full payment, deposit (acompte), arrhes or balance, and the balance due',
          'Place, date and signature frame for the person who receives the money',
        ],
      },
      {
        title: 'Deposit receipt',
        format:
          'Page 2 of the PDF and the Word file, “Registre des reçus” and “Reçu à imprimer” sheets of the Excel file',
        items: [
          'Who receives (name, address, SIREN or SIRET, VAT number) and who pays, with three boxes: individual, business or association',
          'The quote or order: number, date accepted, total excluding VAT, VAT, total due including VAT, purpose, planned date or lead time',
          'Table of payments already made on this quote (date, receipt number, nature, method, amount), the amount received today, the total received and the balance due',
          'Two boxes, deposit or arrhes, each with what it commits you to, and a reminder of what an unlabelled payment counts as',
          'Payment method with the cash ceiling, and a “This receipt is not an invoice” box saying when an invoice or a note is still due',
          'Two signatures: the business acknowledging receipt of the money, and the customer',
        ],
      },
      {
        title: 'Register and summary',
        format: '“Registre des reçus” and “Synthèse” sheets of the Excel file, not in the PDF',
        items: [
          '60 numbered receipts: date, payer and payer type, purpose, quote or invoice number, nature and method picked from a list, amount',
          'For each receipt, the amount already received on the same quote and the balance due, worked out by adding up the previous lines',
          'A warning column: duplicate number, cash above the ceiling, more received than the total due, money from an individual without the word deposit or arrhes, business customer without an invoice number',
          'Summary of the year in a yellow cell: each month’s takings by payment method, totals by nature, and three points to check',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in a payment receipt in four steps',
    intro:
      'The PDF is filled in by hand, stub first. In the Excel file, everything starts from the register: the printable receipt and the summary update on their own. The “exemple” lines are to be deleted.',
    steps: [
      {
        label: 'Step 1',
        title: 'Number the book before the first receipt',
        description:
          'Write the first and last numbers of the book, then a number on each stub and each receipt, in sequence. A spoiled receipt is not thrown away: cross it out and keep it with its stub, so that no number goes missing.',
      },
      {
        label: 'Step 2',
        title: 'The stub, then the receipt',
        description:
          'Fill in the stub before tearing off the receipt: it is your only record. On the receipt, write the amount in figures and in words, the purpose with the quote or invoice number, and tick the payment method. For a cheque, write down its number.',
      },
      {
        label: 'Step 3',
        title: 'An advance on a quote: the deposit receipt',
        description:
          'If the money covers only part of the price, use page 2. Copy the total of the quote and the payments already made, tick deposit or arrhes as on the signed quote, and work out the balance due. In the Excel file, the same quote number on each line is enough for the balance due to be calculated.',
      },
      {
        label: 'Step 4',
        title: 'Sign, hand over, file',
        description:
          'Sign the receipt and give it to the person who paid. The deposit receipt is made in two copies, one each. At the end of the month, the Excel summary gives your takings by payment method, to check against your bank statement.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'What a receipt proves in France, and the documents it does not replace',
    intro:
      'No French text requires a receipt for every payment. But five rules say what it is worth, what goes on it and when something else is needed; the template does not replace your accountant’s advice.',
    facts: [
      {
        contextLabel: 'French Civil Code, art. 1342-8',
        title: 'Payment may be proved by any means',
        text: 'A bank statement, a cheque stub, a message: anything can prove that an amount was paid. A receipt signed by the person who receives the money is the simplest proof, above all for cash, which leaves no other trace. Hence the number, the date, the amount in words and the signature.',
        sourceName: PAYMENT_PROOF_SOURCE.name,
        sourceUrl: PAYMENT_PROOF_SOURCE.url,
      },
      {
        contextLabel: 'Services, order of 3 October 1983',
        title: 'A note from 25 € including VAT, handed over before payment',
        text: 'A service priced at 25 € or more including VAT calls for a note (note), handed over once the service is done and in any case before payment; below that, to a customer who asks for it. It gives the date, the provider’s name and address, the customer’s name, the date and place of the service, the detail in quantities and prices, and the total excluding and including VAT. It is made in two copies, and the provider keeps theirs for two years.',
        sourceName: SERVICE_NOTE_SOURCE.name,
        sourceUrl: SERVICE_NOTE_SOURCE.url,
      },
      {
        contextLabel: 'Between businesses',
        title: 'A receipt does not replace the invoice',
        text: 'Between businesses in France, an invoice is mandatory for every sale of goods or supply of services. A receipt can come on top for a cash payment, never instead. For a sale of goods to an individual, an invoice or note is only due when they ask, for a distance sale or for an exempt intra-EU delivery.',
        sourceName: INVOICING_OBLIGATION_SOURCE.name,
        sourceUrl: INVOICING_OBLIGATION_SOURCE.url,
      },
      {
        contextLabel: 'French Monetary and Financial Code, D112-3',
        title: 'Cash: 1,000 € at most to a business',
        text: 'An individual whose tax home is in France may pay a business in cash up to 1,000 €, as may one business paying another. The ceiling is higher for an individual whose tax home is abroad. Above it, the fine reaches up to 5% of the sums, split equally between the one who pays and the one who accepts. Between individuals there is no ceiling, but written proof is needed above 1,500 €.',
        sourceName: CASH_PAYMENT_CEILING_SOURCE.name,
        sourceUrl: CASH_PAYMENT_CEILING_SOURCE.url,
      },
      {
        contextLabel: 'Deposit (acompte) or arrhes',
        title: 'The word on the receipt decides what is given back',
        text: 'After a deposit (acompte), both sides must see the deal through. With arrhes, the customer may withdraw by losing them, and the business by paying back double. When nothing is specified, money paid in advance counts as arrhes. The receipt repeats the word on the signed quote: if the two disagree, that is a dispute waiting to happen.',
        sourceName: CONSUMER_DEPOSIT_SOURCE.name,
        sourceUrl: CONSUMER_DEPOSIT_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Payment receipt: your questions',
    questions: [
      {
        question: 'Is the payment receipt template free, and is there a Word version?',
        answer:
          'Yes to both. The PDF, Excel and Word files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Receipt, note or invoice: what is the difference?',
        answer:
          'A receipt states that an amount was handed over; it does not detail what was sold. An invoice or a note details the sale or service, the quantities, the prices and the totals excluding and including VAT. Between businesses in France, an invoice is mandatory for every sale or service; for a service to an individual, a note is mandatory from 25 € including VAT. The receipt comes on top and replaces neither.',
      },
      {
        question: 'Is a payment receipt mandatory in France?',
        answer:
          'I found no text that requires one for every payment. The Civil Code says payment may be proved by any means: transfers and cheques leave a trace at the bank, cash leaves none. That is where a receipt matters most, along with an advance paid on a quote. Whoever pays has every reason to ask for one.',
      },
      {
        question: 'What should a payment receipt state?',
        answer:
          'A number, the date, the names of whoever receives and whoever pays, the amount in figures and in words, the purpose of the payment, the payment method, and the signature of whoever receives it. The book adds the nature (full payment, deposit, arrhes or balance) and the balance due. For a business, the name, address and SIRET number remove any doubt about who received the money.',
      },
      {
        question: 'How do I make a deposit receipt?',
        answer:
          'Use page 2: copy the number and total of the quote including VAT, the payments already made, then the amount received today. Tick deposit or arrhes, the same word as on the quote, because it decides what each side loses or pays back if the order is cancelled. The balance due is the total minus everything received. Make it in two copies and sign it.',
      },
      {
        question: 'Can I be paid in cash without a limit in France?',
        answer:
          'No, as soon as a business is involved. Service-Public sets the limit at 1,000 € for an individual living in France who pays a business, and between businesses, with a fine of up to 5% of the sums shared between the two. Between individuals there is no ceiling, but written proof is required above 1,500 €. The Excel file flags every cash receipt above 1,000 €.',
      },
      {
        question: 'Should receipts be numbered and kept?',
        answer:
          'For a receipt, I found no specific numbering rule or retention period; a service note, for its part, is kept for two years. Numbering in sequence, without gaps, is still the best way to show that no takings went missing, and the stub records every receipt handed out. For how long to keep your sales records, follow your accountant’s advice.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'Three sheets. “Registre des reçus”: one line per receipt, nature and method picked from a list; the amount already received and the balance due are calculated per quote number, and a warning column checks each line. “Reçu à imprimer”: pick a number in the yellow cell and the receipt fills itself in, leaving only the amount in words and the signature. “Synthèse”: your takings for each month by payment method, for the chosen year.',
      },
      {
        question: 'Does French e-invoicing change anything?',
        answer:
          'The e-invoicing reform is about invoices, and a receipt is not one: it remains proof of payment, on paper or as a PDF. It is your invoices that change form, if you invoice businesses. The test on the tool page tells you, in five questions, whether it applies to you and from which date.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When receipts, quotes and invoices get copied from one file to the next and deposits are tracked by hand, a tool that links each payment to its quote and its invoice gives you hours back. Describe your business to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Take the test: does French e-invoicing apply to me?',
  },
}
