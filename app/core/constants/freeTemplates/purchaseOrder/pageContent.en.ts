import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  B2B_PAYMENT_TERMS_SOURCE,
  COMMERCIAL_DOCUMENTS_SOURCE,
  CONSUMER_DELIVERY_DATE_SOURCE,
  CONSUMER_DEPOSIT_SOURCE,
  PURCHASE_ORDER_TEMPLATE_PDF_PATH,
  PURCHASE_ORDER_TEMPLATE_UPDATED_AT,
  PURCHASE_ORDER_TEMPLATE_XLSX_PATH,
  SALE_AGREEMENT_SOURCE,
  TERMS_OF_SALE_SOURCE,
} from '~/core/constants/freeTemplates/purchaseOrder/pageShared'

export const PURCHASE_ORDER_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Purchase order: free French template (PDF + Excel)',
    description:
      'Purchase order: free French template in PDF and Excel, for suppliers or customers, VAT totals calculated, deposit wording and an order register. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French purchase order (bon de commande) and order register template',
  },
  breadcrumbLabel: 'Purchase order',
  shareImage: {
    titleLines: ['Purchase order', 'free French template'],
    highlight: 'Purchase order',
    subtitle: 'Purchase order and order follow-up in PDF and Excel, totals excl. VAT, VAT and incl. VAT calculated',
    badge: 'Free, no sign-up',
    icon: 'receipt',
    alt: 'Free French purchase order template: purchase order and order follow-up in PDF and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Purchase order',
    titleAfter: ': free French template, PDF and Excel (+ order follow-up)',
    reassurances: ['Supplier or customer, one single form', 'Excel with VAT totals calculated', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'A purchase order (bon de commande) ready to fill in, written in French for the French market, that works both ways: when you order from a supplier, and when a customer orders from you. One box says who the buyer is. The form carries both parties’ identifiers, the lines with their unit price excl. VAT, discount and VAT rate, the sum paid with the order marked as a firm down payment (acompte) or a forfeitable deposit (arrhes), the delivery date and the payment term, then two signatures. Page 2 tracks every order of the period: ordered, received, left to deliver, left to pay.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I built StockPME, inventory management software still used by small businesses, and read the articles of the French Civil, Consumer and Commercial Codes that apply to orders, so that the wording is accurate.',
    updatedAt: PURCHASE_ORDER_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For tradespeople, shops and small businesses in France that place or take orders. Two files in French, no form to fill in: the PDF prints and gets signed, the Excel file calculates the totals and tracks the orders.',
    files: [
      {
        label: 'Download the PDF template',
        href: PURCHASE_ORDER_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: PURCHASE_ORDER_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, calculated totals, in French',
      },
    ],
    footnote:
      'Free to use and adapt to your business. It does not replace the advice of a lawyer or of your accountant.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A purchase order, an order follow-up and a list of suppliers and customers',
    intro:
      'The PDF fits on two A4 pages: the purchase order, then the follow-up of the orders of the period. The Excel file adds a third sheet, the list of your suppliers and customers, which fills in the form and calculates the payment due dates.',
    documents: [
      {
        title: 'Purchase order',
        format: 'Page 1 of the PDF, “Bon de commande” sheet of the Excel file',
        items: [
          'Direction of the order in two boxes: I order from a supplier (I am the buyer) or my customer orders from me (I am the seller)',
          'Order number, order date, number of the accepted quote or offer, person following the order',
          'Buyer and seller: name or company name, address, SIREN or SIRET number, EU VAT number, contact, and a “the buyer is a consumer” box',
          '12 lines (15 in the Excel file): reference, description, quantity, unit, unit price excl. VAT, discount, VAT rate, total excl. VAT',
          'Totals: total excl. VAT, overall discount, delivery costs, VAT by rate, total incl. VAT, sum paid with the order with the acompte or arrhes box, balance due',
          'Delivery (address, agreed date or period, method, costs), payment (method, due date, late payment penalties, terms of sale attached), the buyer’s “Bon pour commande” signature and the seller’s acceptance',
        ],
      },
      {
        title: 'Order follow-up',
        format: 'Page 2 of the PDF, “Registre des commandes” sheet of the Excel file',
        items: [
          'One line per order: number, date, direction (purchase or sale), supplier or customer, subject, amount incl. VAT, sum paid in advance',
          'Expected delivery date, quantity ordered, quantity received and quantity left to deliver',
          'In the Excel file, delivery status calculated at today’s date: waiting, partial, late, delivered, with the days late',
          'Invoice number and date, due date calculated with the supplier’s or customer’s payment term, payment date, balance due and status (not invoiced, to pay, late, paid)',
          'At the top of the Excel sheet: orders to deliver, late deliveries, balance due on purchases, balance to collect on sales',
          'On the PDF, the checklist before signing an order and what to do when the goods arrive',
        ],
      },
      {
        title: 'Suppliers and customers',
        format: '“Fournisseurs et clients” sheet of the Excel file',
        items: [
          'Name, role (supplier, customer or both), SIREN or SIRET number, EU VAT number, address, contact',
          'Agreed payment term in days, in red when it exceeds 60 days between businesses',
          'A “consumer” box that, on the purchase order, brings up the French Consumer Code reminders',
          'Pick a name in the purchase order or in the register: address, SIRET, contact and due date follow',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the purchase order in four steps',
    intro:
      'In the Excel file, yellow cells are picked or typed in, white cells are free text. The totals, VAT by rate, balance due, latest delivery date and register statuses are calculated on their own. The example lines are there to be deleted.',
    steps: [
      {
        label: 'Step 1',
        title: 'The direction of the order and both parties',
        description:
          'Tick whether you order from a supplier or your customer orders from you: that is what says who the buyer is. Fill in both blocks with the SIREN or SIRET and VAT numbers. If the buyer is a consumer, tick the box: other rules apply.',
      },
      {
        label: 'Step 2',
        title: 'One line per reference',
        description:
          'Copy the number of the quote or offer the order accepts, then its lines at the same prices: reference, precise description (model, size, colour), quantity, unit, unit price excl. VAT, discount and VAT rate. The Excel file calculates each total, the VAT by rate and the total incl. VAT.',
      },
      {
        label: 'Step 3',
        title: 'Delivery, payment and the sum paid',
        description:
          'Write a delivery date or period, the payment term and the payment method. If a sum is paid with the order, tick “acompte” (firm down payment) or “arrhes” (forfeitable deposit): the word changes what happens if one side backs out.',
      },
      {
        label: 'Step 4',
        title: 'Two signatures, then the follow-up',
        description:
          'The buyer signs “Bon pour commande”, the seller dates their acceptance, each keeps a copy. Copy the order into the register. When the goods arrive, check them on a goods receipt note, write down the quantity received, then the invoice and its payment.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The rules the purchase order already follows',
    intro:
      'Six rules of the French Civil, Consumer and Commercial Codes go through a purchase order. The template keeps a box, a line or a mention for each of them; it does not replace a lawyer’s advice in a dispute.',
    facts: [
      {
        contextLabel: 'French Civil Code, art. 1583',
        title: 'Agreed on the item and the price, the sale is made',
        text: 'A sale is complete between the parties as soon as they agree on the item and the price, even if nothing has been delivered or paid yet. An order signed by the buyer and accepted by the seller keeps the proof: hence the references, quantities, unit prices and the two dated signatures.',
        sourceName: SALE_AGREEMENT_SOURCE.name,
        sourceUrl: SALE_AGREEMENT_SOURCE.url,
      },
      {
        contextLabel: 'Consumer buyer, art. L214-1',
        title: 'Without the word “acompte”, the sum paid is a forfeitable deposit',
        text: 'Between a business and a consumer, unless the contract says otherwise, sums paid in advance are arrhes: either side may back out, the customer by losing them, the business by paying back twice the amount. A firm down payment (acompte), on the other hand, makes the order binding. The form has both boxes next to the amount paid.',
        sourceName: CONSUMER_DEPOSIT_SOURCE.name,
        sourceUrl: CONSUMER_DEPOSIT_SOURCE.url,
      },
      {
        contextLabel: 'Consumer buyer, art. L216-1',
        title: '30 days at most when no date is written',
        text: 'The business delivers on the date or within the period given to the consumer. Failing that, it delivers without undue delay and at the latest thirty days after the contract is made. The form has an “agreed delivery date or period” line, and the Excel file calculates the latest date.',
        sourceName: CONSUMER_DELIVERY_DATE_SOURCE.name,
        sourceUrl: CONSUMER_DELIVERY_DATE_SOURCE.url,
      },
      {
        contextLabel: 'Between businesses, art. L441-10',
        title: '30 days by default, 60 days at most after the invoice',
        text: 'Without an agreement, payment is due at the latest 30 days after the goods are received. The agreed term cannot exceed 60 days after the invoice date, or 45 days end of month if written into the contract. Late payment penalties cannot be lower than three times the French legal interest rate.',
        sourceName: B2B_PAYMENT_TERMS_SOURCE.name,
        sourceUrl: B2B_PAYMENT_TERMS_SOURCE.url,
      },
      {
        contextLabel: 'Terms of sale',
        title: 'Mandatory towards consumers, sent to a business that asks',
        text: 'Between businesses, terms of sale (CGV) are not mandatory, but existing ones must be sent to a business customer who asks for them; they include the 40 € fixed recovery fee for late payment. Towards a consumer, they are handed over before the contract. The form has a “terms of sale handed over and accepted” box.',
        sourceName: TERMS_OF_SALE_SOURCE.name,
        sourceUrl: TERMS_OF_SALE_SOURCE.url,
      },
      {
        contextLabel: 'Neither a quote nor an invoice',
        title: 'The invoice carries the purchase order number',
        text: 'The quote is the document handed over before the contract; the invoice comes after and carries the purchase order number when the buyer issued it first. A purchase order is kept 5 years, or 10 years when it serves as an accounting record. Hence the accepted quote number at the top of the form, and the invoice noted in the register.',
        sourceName: COMMERCIAL_DOCUMENTS_SOURCE.name,
        sourceUrl: COMMERCIAL_DOCUMENTS_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Purchase order: your questions',
    questions: [
      {
        question: 'Is the purchase order template free, and is there a Word version?',
        answer:
          'Yes, it is free: both files download without sign-up or email address, and you can edit, print and reuse them. There is no Word version: the PDF prints and is filled in by hand, the Excel file is filled in on screen and calculates the totals. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Does a signed purchase order bind the buyer in France?',
        answer:
          'Yes, as soon as the buyer and the seller agree on the items and the price: the French Civil Code (art. 1583) then treats the sale as made, even before delivery and payment. A contract is formed when an offer and an acceptance meet (art. 1113); an order signed on both sides is the simplest proof. If the seller does not sign it, keep a written trace of their agreement.',
      },
      {
        question: 'What is the difference between a purchase order, a quote and an invoice?',
        answer:
          'The quote is the seller’s offer, handed over before the contract. The purchase order is the buyer’s commitment, often quoting the number of the quote. The invoice comes after the delivery or the service and asks for payment; it carries the purchase order number when the buyer issued it first. All three are filed together.',
      },
      {
        question: 'Acompte or arrhes: what should the form say?',
        answer:
          'An acompte (down payment) makes the order firm: neither the buyer nor the seller can back out. Arrhes (a deposit) let either side withdraw, the buyer by losing them, the seller by paying back twice the amount. When the buyer is a consumer, a sum paid in advance without any wording counts as arrhes (French Consumer Code, art. L214-1): so always tick one of the two boxes.',
      },
      {
        question: 'Do you have to write a delivery date?',
        answer:
          'For a consumer, yes: the seller must give them a date or a period, and without one the French Consumer Code sets 30 days at most after the order (art. L216-1). If delivery is late, Service-Public explains that the customer may ask for delivery within a new reasonable period, then cancel the order and get a refund. Between businesses, the date is freely agreed, but writing it on the form avoids arguments.',
      },
      {
        question: 'What payment terms apply between businesses in France?',
        answer:
          'Without an agreement, 30 days after the goods are received or the service is performed. The agreed term cannot exceed 60 days after the invoice date, or 45 days end of month if written into the contract (French Commercial Code, art. L441-10). In case of late payment, penalties are at least three times the legal interest rate, plus the 40 € fixed recovery fee.',
      },
      {
        question: 'How long should purchase orders be kept?',
        answer:
          'Entreprendre.Service-Public gives 5 years for a purchase order used for commercial purposes, and 10 years when it serves as an accounting record. The simplest is to file it with the invoice that carries its number, and to keep the order register alongside.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'Three sheets. In “Bon de commande”, you pick the direction and the supplier or customer from the list, and their address and SIRET fill in; the totals excl. VAT, VAT by rate, total incl. VAT, sum paid and balance due are calculated, and warnings recall the rules when the buyer is a consumer. “Registre des commandes” calculates what is left to deliver, the delays, the due date and the balance due. “Fournisseurs et clients” holds the list. Each sheet prints on one A4 page.',
      },
      {
        question: 'And to check the goods when they arrive?',
        answer:
          'The purchase order says what you expect; the delivery is checked line by line on a goods receipt note (quantities ordered, delivered and accepted, reservations, photos). The “inventory sheet + goods receipt note” template on dibodev.fr includes one, next to this form. Then copy the quantity received into the register: the quantity left to deliver updates itself.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When purchase orders get copied by hand into the stock, back orders are tracked from memory and invoices are matched one by one, a tool that links order, receipt and stock gives you hours back. Describe your purchases and sales to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare inventory management software',
  },
}
