import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  CARRIER_PROTEST_SOURCE,
  CONSUMER_CARRIER_PROTEST_SOURCE,
  CONSUMER_DELIVERY_RESERVATIONS_SOURCE,
  CONSUMER_RISK_TRANSFER_SOURCE,
  DELIVERY_NOTE_TEMPLATE_DOCX_PATH,
  DELIVERY_NOTE_TEMPLATE_PDF_PATH,
  DELIVERY_NOTE_TEMPLATE_UPDATED_AT,
  DELIVERY_NOTE_TEMPLATE_XLSX_PATH,
  DELIVERY_OBLIGATION_SOURCE,
  INVOICE_TIMING_SOURCE,
} from '~/core/constants/freeTemplates/deliveryNote/pageShared'

export const DELIVERY_NOTE_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Delivery note: free French template (PDF, Word, Excel)',
    description:
      'Delivery note: free French template in PDF, Word and Excel, quantity left to deliver, received in good order or with reservations, carrier claim sheet.',
    inLanguage: 'en',
    schemaAbout: 'French delivery note and delivery reservations sheet template',
  },
  breadcrumbLabel: 'Delivery note',
  shareImage: {
    titleLines: ['Delivery note', 'free French template'],
    highlight: 'Delivery note',
    subtitle: 'Delivery note with quantity left to deliver and delivery reservations sheet, in PDF, Word and Excel',
    badge: 'Free, no sign-up',
    icon: 'truck',
    alt: 'Free French delivery note template: delivery note and delivery reservations sheet in PDF, Word and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Delivery note',
    titleAfter: ': free French template, PDF, Word and Excel (+ reservations sheet)',
    reassurances: [
      'Delivery note + reservations sheet',
      'Excel with the quantity left calculated',
      'No sign-up, no email',
    ],
    aboutTitle: 'About the template',
    description:
      'A delivery note (bon de livraison) and a reservations sheet ready to fill in, written in French for businesses delivering in France: wholesale, supplies, furniture, building materials, equipment rental, sales to private customers. The note says what leaves, what is still to deliver and in how many parcels; the customer then ticks “received in good order” or “received with reservations” and signs in front of the driver. When a parcel arrives damaged, missing or wrong, the reservations sheet keeps the description, the photos and the date of the letter to the carrier.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the French Civil Code articles on delivery, the French Consumer Code articles on delivery to private customers and the French Commercial Code article on reservations to the carrier, so that the wording and the deadlines are accurate.',
    updatedAt: DELIVERY_NOTE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For businesses in France that deliver their customers, with their own van or through a carrier. Three files in French, no form to fill in: the PDF prints in two copies, the Excel file calculates the quantity left to deliver and keeps the log, the Word file can be edited freely. Receiving goods from a supplier? Take our inventory sheet and goods receipt note template instead.',
    files: [
      {
        label: 'Download the PDF template',
        href: DELIVERY_NOTE_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: DELIVERY_NOTE_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, quantities calculated, in French',
      },
      {
        label: 'Download the Word version',
        href: DELIVERY_NOTE_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 pages, editable, in French',
      },
    ],
    footnote: 'Free to use and adapt to your products and deliveries. It does not replace the advice of a lawyer.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A delivery note, a reservations sheet and a delivery log',
    intro:
      'The PDF fits on two A4 pages: the delivery note on the front, the reservations sheet on the back. The Excel file extends them over three sheets: the note with its quantity left to deliver, the log of all your deliveries, and the follow-up of partial deliveries, order by order.',
    documents: [
      {
        title: 'Delivery note',
        format: 'Page 1 of the PDF, “Bon de livraison” sheet of the Excel file',
        items: [
          'Sender header (name, address, SIREN or SIRET), note number, delivery date, customer order number, delivery “2 of 3” when it goes out in several parts',
          'Recipient and billing address, delivery address if different, contact on site, time slot and access code',
          '12 lines (14 in the Excel file): reference, description, unit, quantity ordered, already delivered, delivered today, left to deliver, parcel number; the Excel file calculates the quantity left and the status of each line (complete, partial, too many)',
          'Number of parcels, pallets, weight, box “completes the order” or “partial” with the date of the next delivery',
          'Transport (own delivery, carrier and tracking number, collected by the customer) and documents handed over with the goods (manual, warranty, returnable packaging)',
          'Receipt: received in good order, received with reservations or refused, written reservations, name, date, time and signature of the recipient, driver’s signature',
        ],
      },
      {
        title: 'Delivery reservations sheet',
        format: 'Page 2 of the PDF, “Réception” and “Réserves” columns of the Excel log',
        items: [
          'Reminder of the delivery note, the order, the delivery date and time, the carrier and the tracking number',
          'Nine tick boxes: crushed or wet parcel, reopened packaging, leaning pallet, missing parcel (received out of announced), lower quantity, broken product, wrong reference, missing manual, wrong address',
          '7 reservation lines: parcel or reference, precise description, quantity concerned, photo numbers, remedy requested (replacement, top-up, return, credit note)',
          'List of photos to take before throwing the packaging away, and the text of the reservations written on the carrier’s document, copied word for word',
          'The deadlines to write to the carrier (3 days, 10 days for a private customer who could not check) and the follow-up of the letter: date, registered mail number, seller informed, solution',
        ],
      },
      {
        title: 'Log and partial deliveries',
        format: '“Registre des livraisons” and “Livraisons partielles” sheets of the Excel file',
        items: [
          'Log, one line per note: date, note number, customer, order, delivered by, parcels, complete or partial delivery, private customer or not, receipt, reservations',
          'For each delivery with reservations, the Excel file shows the deadline to protest and what is left to do: protest to send, claim to follow up',
          'At the top of the log, the number of deliveries, partial deliveries, receipts with reservations and open cases',
          'Follow-up per order: for each item, the quantity ordered and up to three notes with their quantity; total delivered, quantity left, status and last note are calculated',
          'You type an order number in the yellow cell: the Excel file tells you how many lines are complete and what is left to deliver',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the delivery note in four steps',
    intro:
      'In the Excel file, only the white and yellow cells are typed in. The quantity left to deliver, the status of the lines and what is left to do are calculated on their own. The sample lines are there to be replaced.',
    steps: [
      {
        label: 'Step 1',
        title: 'Before leaving, the order and the parcels',
        description:
          'Copy the customer’s order number, then one line per item with the quantity ordered, what has already been delivered and what leaves today: the quantity left is calculated. Number the parcels and write how many there are. Print two copies.',
      },
      {
        label: 'Step 2',
        title: 'On delivery, the customer checks in front of the driver',
        description:
          'They count the parcels, look at their condition and, when possible, open the damaged ones. Then they tick “received in good order”, “received with reservations” or “refused”, and write what they see: which parcel, what damage, how many items are missing.',
      },
      {
        label: 'Step 3',
        title: 'One reservation, one line of the sheet and photos',
        description:
          'On the back, one line per problem, with the quantity and the photo numbers. Photograph the closed parcel with its label, then the contents. When a carrier delivered, the protest goes out by registered letter within 3 days: write down the date and the registered mail number.',
      },
      {
        label: 'Step 4',
        title: 'Afterwards, the log and the invoice',
        description:
          'Copy the note into the log, and each delivered quantity into the partial deliveries sheet. The invoice is a separate document: at delivery, or a single one at the end of the month for all the month’s deliveries to the same customer.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The rules the template already follows',
    intro:
      'The French Civil Code, Consumer Code and Commercial Code, and the French invoicing rules, frame delivery, risk and reservations. The template keeps a box, a date or a line for each of them; it does not replace a lawyer’s advice in a dispute.',
    facts: [
      {
        contextLabel: 'French Civil Code, art. 1604',
        title: 'The signed note proves delivery',
        text: 'The seller must deliver the thing sold, that is, put it “into the power and possession of the buyer”, in the quantity set by the contract (art. 1616). The dated delivery note, with the quantities delivered and the recipient’s signature, keeps a written record of it, delivery after delivery.',
        sourceName: DELIVERY_OBLIGATION_SOURCE.name,
        sourceUrl: DELIVERY_OBLIGATION_SOURCE.url,
      },
      {
        contextLabel: 'Private customer, art. L216-5',
        title: 'A written document on delivery that mentions the right to reservations',
        text: 'When the customer is a consumer, the seller hands them, when they take possession, a written document stating their right to make reservations, for instance if the goods are damaged or delivered without their manual. And making no reservations does not release the seller from the conformity guarantee. Hence the “received with reservations” box and the lines to write them.',
        sourceName: CONSUMER_DELIVERY_RESERVATIONS_SOURCE.name,
        sourceUrl: CONSUMER_DELIVERY_RESERVATIONS_SOURCE.url,
      },
      {
        contextLabel: 'Private customer, art. L216-2',
        title: 'The risk passes to the customer when they take the goods in hand',
        text: 'With a consumer, the risk of loss or damage passes to them when they, or a person they named, physically take possession of the goods. If they chose a carrier other than the one offered by the seller, the risk passes as soon as the goods are handed to that carrier (art. L216-3). The date and time of receipt on the note mark that moment.',
        sourceName: CONSUMER_RISK_TRANSFER_SOURCE.name,
        sourceUrl: CONSUMER_RISK_TRANSFER_SOURCE.url,
      },
      {
        contextLabel: '3 days, French Commercial Code, art. L133-3',
        title: 'Reservations to the carrier are confirmed in writing',
        text: 'When a carrier transports the goods, receipt ends any claim against it for damage or partial loss, unless the recipient sends it a reasoned protest within three days, public holidays not counted, by registered letter or extrajudicial act. The reservations sheet records the date of that letter and the registered mail number.',
        sourceName: CARRIER_PROTEST_SOURCE.name,
        sourceUrl: CARRIER_PROTEST_SOURCE.url,
      },
      {
        contextLabel: '10 days, French Consumer Code, art. L224-65',
        title: 'A longer deadline for a private customer who could not check',
        text: 'When a consumer takes delivery of the parcel personally and the carrier cannot show it let them actually check its condition, the three-day deadline becomes ten days. The box “the driver refused to let me check the contents” on the sheet records it on the day.',
        sourceName: CONSUMER_CARRIER_PROTEST_SOURCE.name,
        sourceUrl: CONSUMER_CARRIER_PROTEST_SOURCE.url,
      },
      {
        contextLabel: 'Invoice at delivery or at month end',
        title: 'The delivery note does not replace the invoice',
        text: 'The invoice for a sale is in principle issued at the time of delivery. When several separate deliveries go to the same customer in a month, a summary invoice can be issued at the latest at the end of the month. So the note carries no prices, and the invoice can quote the numbers of the notes it groups.',
        sourceName: INVOICE_TIMING_SOURCE.name,
        sourceUrl: INVOICE_TIMING_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Delivery note: your questions',
    questions: [
      {
        question: 'Is the delivery note template really free?',
        answer:
          'Yes. All three files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Is a delivery note mandatory in France?',
        answer:
          'Between businesses, the texts I read set neither its form nor its content, but it is the written proof that you delivered what the order says, in the quantity agreed (French Civil Code, art. 1604 and 1616). With a private customer, the seller must hand over on delivery a written document stating their right to make reservations (French Consumer Code, art. L216-5): the note in this template has the box for it.',
      },
      {
        question: 'Delivery note or delivery slip: what is the difference?',
        answer:
          'In everyday French use, “bon de livraison” and “bordereau de livraison” often mean the same paper: the list of what is delivered, signed by the customer. When a carrier delivers, it also has its own document, on paper or on its handheld device, that it gets signed. Write your reservations on both, and copy the carrier’s word for word onto the reservations sheet.',
      },
      {
        question: 'What is the difference between a delivery note and an invoice?',
        answer:
          'The note says what was handed over, without prices; the invoice says what the customer must pay. The invoice is in principle issued at delivery, or as a single one at the latest at the end of the month for several deliveries to the same customer. With e-invoicing, the delivery address becomes an invoice mention when it differs from the customer’s: Entreprendre.Service-Public.fr announces it for SMEs and micro-businesses from 1 September 2027.',
      },
      {
        question: 'What should I do if a parcel arrives damaged or one is missing?',
        answer:
          'In front of the driver, tick “received with reservations” and write exactly what you see: which parcel, what damage, how many are missing. Photograph the closed parcel with its label, then the contents, and keep the packaging. If a carrier delivered, send it a reasoned protest by registered letter within 3 days, public holidays not counted, and tell the seller.',
      },
      {
        question: 'How long do I have to complain to the carrier?',
        answer:
          'Three days after receipt, public holidays not counted, by registered letter or extrajudicial act (French Commercial Code, art. L133-3); without it, no more claim against the carrier for damage or partial loss. For a private customer who received the parcel personally without the carrier letting them check its condition, the deadline becomes ten days (French Consumer Code, art. L224-65). A private customer who noted nothing keeps the seller’s conformity guarantee.',
      },
      {
        question: 'How do I handle a partial delivery?',
        answer:
          'One note per shipment, with the same order number and “delivery 2 of 3” at the top. Each line carries the quantity ordered, what has already left and what leaves today: the quantity left is calculated. The “Livraisons partielles” sheet of the Excel file follows each item over three notes and tells you when the order is complete.',
      },
      {
        question: 'How long should delivery notes be kept?',
        answer:
          'Ten years from the end of the financial year: Entreprendre.Service-Public.fr lists purchase orders, delivery notes and goods receipt notes among the supporting documents of the accounts. Keep each signed note together with its reservations sheet, the photos and the copy of the registered letter sent to the carrier.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'Three sheets, with sample lines to replace. “Bon de livraison”: you type the quantities ordered, already delivered and delivered today; the quantity left and the status of each line are calculated, and a warning asks for the reservations when the receipt is not in good order. “Registre des livraisons” gives, for each delivery with reservations, the deadline to protest and what is left to do. “Livraisons partielles” adds up to three notes per item and tells you where an order stands. Each sheet prints on one A4 page.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When notes get copied from the order, quantities left are tracked from memory and reservations sleep in a binder, a tool that links order, notes and invoice gives you hours back. If you rent out equipment, check-outs and returns have their own template: the rental agreement with condition report. Describe your deliveries to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare equipment rental software',
  },
}
