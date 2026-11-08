import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  BIKE_IDENTIFICATION_RULES_SOURCE,
  BIKE_REPAIR_TICKET_TEMPLATE_UPDATED_AT,
  SERVICE_PRICE_DISPLAY_SOURCE,
  SERVICE_QUOTE_SOURCE,
} from '~/core/constants/freeTemplates/bikeRepairTicket/pageShared'
import {
  BIKE_SHOP_TEMPLATE_PDF_PATH,
  BIKE_SHOP_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/bikeShopSoftware/pageShared'
import { INVOICE_MENTIONS_SOURCE } from '~/core/constants/tools/fieldServiceSoftware/pageShared'
import { HAIR_SALON_BILL_SOURCE } from '~/core/constants/tradeWebsites/hairSalon/pageShared'

export const BIKE_REPAIR_TICKET_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Bike repair ticket: free French template (PDF + Excel)',
    description:
      'Bike repair ticket and drop-off form: free French template in PDF and Excel, with quote, parts and labour, items left, workshop tracking. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French bike drop-off and repair ticket template for bike workshops',
  },
  breadcrumbLabel: 'Bike repair ticket',
  shareImage: {
    titleLines: ['Bike repair ticket', 'free French template'],
    highlight: 'Bike repair ticket',
    subtitle: 'Drop-off form, quote, parts and labour in PDF and Excel, workshop bike tracking, French wording',
    badge: 'Free, no sign-up',
    icon: 'fileText',
    alt: 'Free French bike repair ticket template: drop-off form, quote and workshop tracking in PDF and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Bike repair ticket',
    titleAfter: ': free French template, PDF and Excel (+ drop-off form and quote)',
    reassurances: [
      'Drop-off form + quote + workshop tracking',
      'Excel with calculated totals and delays',
      'No sign-up, no email',
    ],
    aboutTitle: 'About the template',
    description:
      'A drop-off and repair ticket ready to fill in, written in French for the French market, for a bike workshop, a bike shop or an independent mechanic. It is filled in at the counter, in front of the customer: the bike and its marking number, what stays with it (battery, charger, lock), its condition on arrival, then the diagnosis, the quote accepted or not, parts and labour, and the signatures at drop-off and pick-up. A second page tracks every bike in the workshop.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the French texts on bike marking, quotes, price display and invoices so that the wording is up to date.',
    updatedAt: BIKE_REPAIR_TICKET_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For bike workshops, bike shops and independent mechanics working in France. Two files in French, no form to fill in: the PDF prints, the Excel file calculates.',
    files: [
      {
        label: 'Download the PDF template',
        href: BIKE_SHOP_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: BIKE_SHOP_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, calculated totals and delays, in French',
      },
    ],
    footnote: 'Free to use and adapt to your workshop. It does not replace the advice of your accountant.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A drop-off and repair ticket, and the workshop tracking',
    intro:
      'The PDF fits on two A4 pages: the ticket that follows the bike from drop-off to pick-up, then the register of bikes and ordered parts. The Excel file holds them on three sheets, with the quote totals, the gap with the accepted amount, the days in the workshop and the parts on order calculated.',
    documents: [
      {
        title: 'Drop-off and repair ticket',
        format: 'Page 1 of the PDF, “Fiche et chiffrage” sheet of the Excel file',
        items: [
          'Workshop header (name, address, phone, SIREN, VAT number or “TVA non applicable”), ticket number, drop-off date and time, planned pick-up date, received by, then your hourly rate and the price of the diagnosis, free or paid',
          'Customer (name, phone, email, company and SIREN for a business customer) and how to reach them: text message, call or email',
          'Bike: type (city, mountain, road, gravel, children’s, cargo, folding, e-bike), make, model, colour, size, frame number, marking number; for an e-bike, the motor, the battery number and the mileage on the display',
          'What stays with the bike, as tick boxes (battery, charger, battery key, lock and its key, bike computer, lights, panniers, child seat), and the condition on arrival: scratches, dents, broken parts, photos taken',
          'Customer request, workshop diagnosis, then the quote line by line: new or reused part, quantity or hours, unit price excl. VAT, VAT, total excl. VAT; totals excl. VAT, VAT and incl. VAT, repair bonus deducted, deposit, balance due, receipt or invoice number',
          'Customer agreement (quote accepted or refused, and how, amount not to exceed without calling them, circular economy parts, replaced parts to return, storage fees), signatures of the workshop and of the customer at drop-off and pick-up, legal wording',
        ],
      },
      {
        title: 'Workshop bike tracking',
        format: 'Page 2 of the PDF, “Suivi atelier” sheet of the Excel file (one line per bike)',
        items: [
          'Ticket number, drop-off date, customer and phone, bike (type, make, colour), marking number in the Excel file, requested work',
          'Quote incl. VAT and agreement date, parts received on, planned pick-up, customer notified on, picked up and paid on',
          'Status in seven steps, from “à diagnostiquer” (to diagnose) to “retiré” (picked up), or “refusé” (refused) when the bike leaves unrepaired',
          'In the Excel file: days in the workshop calculated, delays on the promised date and ready bikes not picked up flagged, dashboard of the bikes in the workshop, waiting for agreement or parts, ready, and of the cash collected',
        ],
      },
      {
        title: 'Ordered parts',
        format: 'Bottom of page 2 of the PDF, “Pièces” sheet of the Excel file',
        items: [
          'One line per part: ticket number (the Excel file shows the customer on its own), part and reference, supplier, new or reused, quantity',
          'Purchase price excl. VAT and selling price incl. VAT, calculated margin excl. VAT',
          'Ordered on, announced delivery, received on, customer notified on; waiting days and status calculated (to order, ordered, late, received)',
          'Parts not yet received show up in the workshop tracking, bike by bike',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the bike repair ticket in four steps',
    intro:
      'In the Excel file, only the white cells are typed in. The quote totals, the gap with the accepted amount, the days in the workshop and the status of the parts are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Your details and prices, once and for all',
        description:
          'Fill in the workshop header (name, address, SIREN, VAT number), your hourly rate and the price of the diagnosis, as on the price list displayed at the counter, then save the file as your template. Every new ticket starts from that copy.',
      },
      {
        label: 'Step 2',
        title: 'At the counter, the bike and what it leaves',
        description:
          'In front of the customer, write down the bike (make, colour, frame and marking numbers) and tick what stays with it: an e-bike’s battery and charger, the lock key. Describe the condition on arrival and take a photo. The customer signs at drop-off and leaves with their copy.',
      },
      {
        label: 'Step 3',
        title: 'The diagnosis and the quote',
        description:
          'One line per part, labour time or flat-rate job. For the parts concerned, offer reuse and write down the customer’s choice, then the amount above which you call them. An agreement by phone is written down with its date; the Excel file flags any overrun.',
      },
      {
        label: 'Step 4',
        title: 'The tracking until pick-up',
        description:
          'Copy each bike into the tracking: quote, ordered parts, customer notified. At pick-up, the customer checks their bike and signs, you hand over the receipt or invoice. The Excel file counts the days and flags the ready bikes nobody comes to collect.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The wording the template already provides',
    intro:
      'Five French rules go through the drop-off and repair ticket. The template keeps a box, a line or a mention for each of them. This summary, checked on 8 November 2026, is not legal advice.',
    facts: [
      {
        contextLabel: 'Since 1 January 2021',
        title: 'The marking number of bikes sold',
        text: 'In France, every bike, electric or not, sold by a trader carries an identifier: since 1 January 2021 for a new bike, 1 July 2021 for a used one. Children’s bikes with wheels of 16 inches or less are exempt. The ticket has its “marking number” box, next to the frame number.',
        sourceName: BIKE_IDENTIFICATION_RULES_SOURCE.name,
        sourceUrl: BIKE_IDENTIFICATION_RULES_SOURCE.url,
      },
      {
        contextLabel: 'At the workshop’s reception',
        title: 'Your price list, on display',
        text: 'The list of your services and the price of each are displayed in euros incl. VAT on a single document, readable from where you receive customers. A paid diagnosis or quote is on it too. The ticket repeats your hourly rate and the price of the diagnosis.',
        sourceName: SERVICE_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: SERVICE_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'If the customer asks',
        title: 'A detailed quote, free unless announced',
        text: 'When the price cannot be set in advance, you give a sufficiently detailed quote to the customer who asks for one. It is free in principle; if paid, its price is announced beforehand, and it can be deducted from the repair. It binds you on the work, the price and the lead time; the customer is only bound once they agree.',
        sourceName: SERVICE_QUOTE_SOURCE.name,
        sourceUrl: SERVICE_QUOTE_SOURCE.url,
      },
      {
        contextLabel: 'From €25 incl. VAT',
        title: 'A detailed receipt before payment',
        text: 'For any service of €25 incl. VAT or more, you hand over a receipt (a “note”) before payment: date, workshop name and address, customer name unless they object, date and place of the repair, breakdown of parts and labour, totals excl. and incl. VAT. You keep the copy for 2 years.',
        sourceName: HAIR_SALON_BILL_SOURCE.name,
        sourceUrl: HAIR_SALON_BILL_SOURCE.url,
      },
      {
        contextLabel: 'On every invoice',
        title: 'The wording of the invoice',
        text: 'Unique sequential number, date, name, address and SIREN of the workshop, with “EI” for a sole trader, description of each part and of the labour with quantity, unit price excl. VAT and VAT rate, totals excl. and incl. VAT. Under the VAT exemption scheme, the wording “TVA non applicable, art. 293 B du code général des impôts”.',
        sourceName: INVOICE_MENTIONS_SOURCE.name,
        sourceUrl: INVOICE_MENTIONS_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Bike repair ticket template: your questions',
    questions: [
      {
        question: 'Is the bike repair ticket template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Does a bike workshop in France have to give a quote?',
        answer:
          'Not for everything. Displaying your prices is enough in most cases, for a puncture or a brake adjustment at the displayed price for example. But when the price cannot be set in advance, an e-bike assistance that cuts out or a wheel to rebuild, you give a sufficiently detailed quote to the customer who asks for one. It binds you on the work, the price and the lead time; the customer is only bound once they agree.',
      },
      {
        question: 'Can you charge for the diagnosis or the quote?',
        answer:
          'Yes, if you announce its price to the customer before doing it, and it is on the price list displayed in the workshop. A quote is free in principle, but nothing forbids charging for it, especially when it requires an in-depth study. You can offer to deduct its amount if the customer accepts the repair: the ticket has the “paid diagnosis” box and the amount deducted.',
      },
      {
        question: 'Should you write down the bike’s marking number?',
        answer:
          'It is not an obligation of the workshop that repairs: in France, marking applies when a bike is sold. But it is the surest way not to mix up two black bikes of the same make. Every bike sold by a trader has carried an identifier since 2021, new (1 January) or used (1 July); an older bike or one bought from a private seller may have none. Then write “non marqué” (not marked) and the frame number.',
      },
      {
        question: 'What else should you write down for an e-bike?',
        answer:
          'What comes apart from the bike: the battery, the charger and the battery key. The ticket has them as tick boxes, with the battery number, the motor make and the mileage on the display, useful for a warranty or the service history. At pick-up, the customer checks they leave with everything they dropped off.',
      },
      {
        question: 'Do you have to give the customer an invoice?',
        answer:
          'From €25 incl. VAT, yes: a detailed receipt (a “note”), handed over before payment, of which you keep the copy for 2 years; below that, if the customer asks. The breakdown of parts and labour can be left out if a detailed quote, accepted by the customer, matches the work done. For a business customer, an invoice is mandatory whatever the amount.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'On the “Fiche et chiffrage” sheet, you type your hourly rate excl. VAT, then one line per part, labour time or flat-rate job: for labour, the hours are enough, the rate applies. The totals excl. VAT, VAT (20% by default, editable line by line) and incl. VAT, the balance due and the gap with the accepted quote are calculated, and an alert shows up above the amount the customer authorised. The “Suivi atelier” sheet counts the days in the workshop and flags delays and ready bikes not picked up; the “Pièces” sheet calculates lead times and margins.',
      },
      {
        question: 'And when the bikes pile up in the workshop?',
        answer:
          'An Excel template is enough as long as the tickets fit on the workbench. Beyond that, French bike shop software (Epsylon, Atelier Vélo+, CycleSoftware, Shifter) chains repair ticket, quote, parts stock and till, from €9 per month at Epsylon (prices checked on 29 September 2026). If your organisation falls outside their frame, the test on the tool page tells you what to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When tickets, quotes and bike tracking get copied from one file to the next, and you have to call every customer to tell them their bike is ready, a tool that chains them gives you hours back. Describe your workshop to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare bike shop software',
  },
}
