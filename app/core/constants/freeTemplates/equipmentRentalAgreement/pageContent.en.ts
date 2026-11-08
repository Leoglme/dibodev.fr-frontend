import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  EQUIPMENT_RENTAL_AGREEMENT_CONDITION_REPORT_SOURCE,
  EQUIPMENT_RENTAL_AGREEMENT_DEPOSIT_VAT_SOURCE,
  EQUIPMENT_RENTAL_AGREEMENT_LESSOR_DUTIES_SOURCE,
  EQUIPMENT_RENTAL_AGREEMENT_RENTER_DUTIES_SOURCE,
  EQUIPMENT_RENTAL_AGREEMENT_RENTER_LIABILITY_SOURCE,
  EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_UPDATED_AT,
} from '~/core/constants/freeTemplates/equipmentRentalAgreement/pageShared'
import {
  EVENT_RENTAL_TEMPLATE_PDF_PATH,
  EVENT_RENTAL_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/eventRentalSoftware/pageShared'
import { INVOICE_MENTIONS_SOURCE } from '~/core/constants/tools/fieldServiceSoftware/pageShared'

export const EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Equipment rental agreement: free French PDF + Excel template',
    description:
      'Equipment rental agreement: free French template in PDF and Excel, with a check-out and return condition report. Deposit, damage, late return. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French equipment rental agreement and check-out and return condition report template',
  },
  breadcrumbLabel: 'Equipment rental agreement',
  shareImage: {
    titleLines: ['Free equipment', 'rental agreement'],
    highlight: 'rental agreement',
    subtitle:
      'Rental agreement and check-out and return condition report in PDF and Excel, deposit, calculated totals, French wording',
    badge: 'Free, no sign-up',
    icon: 'fileText',
    alt: 'Free French equipment rental agreement template: agreement and check-out and return condition report in PDF and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Equipment rental agreement',
    titleAfter: ': free French template, PDF and Excel (+ condition report)',
    reassurances: ['Agreement + condition report', 'Excel with calculated totals', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'An equipment rental agreement and a check-out and return condition report ready to fill in, written in French for the French market, for a company renting out event equipment, reception furniture, sound and lighting or tools. The agreement sets the equipment rented and its replacement value, the check-out and return dates and times, the price excl. and incl. VAT, the deposit, and what happens in case of breakage, loss, theft, late return or cancellation. The condition report is filled in item by item, at check-out and then at return, in front of the customer.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the French civil code rules on hiring out goods, the invoice wording and the VAT treatment of deposits so that the clauses and the wording are up to date.',
    updatedAt: EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For companies renting out event equipment, furniture, sound and lighting or tools in France. Two files in French, no form to fill in: the PDF prints, the Excel file calculates.',
    files: [
      {
        label: 'Download the PDF template',
        href: EVENT_RENTAL_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: EVENT_RENTAL_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, calculated totals and gaps, in French',
      },
    ],
    footnote:
      'Free to use and adapt to your business and your rental terms. It does not replace the advice of your accountant.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A rental agreement and a condition report, as PDF and Excel',
    intro:
      'The PDF holds both documents on two A4 pages. The Excel file holds them on two sheets, with the totals excl. and incl. VAT, the down payment, the value of missing items, the days late and the deposit to return calculated, and adds a third sheet: the log of all your rentals.',
    documents: [
      {
        title: 'Equipment rental agreement',
        format: 'Page 1 of the PDF, “Matériel et montants” sheet of the Excel file',
        items: [
          'Lessor header (name, address, phone, SIRET, VAT number), agreement number, date, quote or order number, event',
          'Renter: name or company name, private or business customer (SIREN), address, phone, email, representative, on-site contact on the day of the event',
          'Dates, place and use: check-out and return (date and time), pick-up at the depot or delivery, return to the depot or collection on site, address of use, intended use, access, days charged',
          'Equipment rented: reference, description (model, serial number, accessories), quantity, unit price excl. VAT, days, total excl. VAT, replacement value, plus the delivery and collection, set-up and dismantling lines (the Excel file goes from 8 to 15 items and adds a cleaning line)',
          'Totals and deposit: total excl. VAT, VAT, total incl. VAT, down payment, balance due; the deposit kept apart, with no VAT as long as it is returned, with its return deadline (the Excel file compares it with the total replacement value)',
          'Terms: transport and set-up, use and subletting, insurance, breakage, loss and theft, late return, cleaning, cancellation, penalties for a business customer, “Lu et approuvé” signatures and stamp',
        ],
      },
      {
        title: 'Check-out and return condition report',
        format: 'Page 2 of the PDF, “État des lieux” sheet of the Excel file',
        items: [
          'Agreement number, renter, date, time and name of the person checking, at check-out and then at return',
          'Condition codes: new, good, normal wear, damaged, out of order (drop-down lists in the Excel file)',
          'One line per item: at check-out, quantity, condition and accessories supplied; at return, quantity, condition, accessories complete, cleanliness, photo numbers, remarks',
          'Gaps at return: missing items, breakage, cleaning, late return, excl. then incl. VAT (the Excel file calculates the gap on each line, the value of missing items and the days late)',
          'Deposit: amount paid, amount kept on proof, amount returned and date, balance to invoice',
          'Renter’s reservations and four signatures, renter and lessor, at check-out and then at return',
        ],
      },
      {
        title: 'Rental log',
        format: '“Suivi des locations” sheet of the Excel file only, not in the PDF',
        items: [
          'One line per agreement: agreement number, renter, event, check-out date, planned return and actual return',
          'Days late counted up to today as long as the equipment is not back',
          'Amount incl. VAT, amount paid, balance due, deposit received, deposit returned and amount kept from the deposit',
          'Calculated status: booked, out, late, returned with a deposit to settle or a balance to collect, closed',
          'At a glance: rentals in progress, late rentals, deposits to settle, balance due, deposits held, turnover incl. VAT',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the agreement and the condition report in four steps',
    intro:
      'In the Excel file, only the white cells are typed in. The totals, the down payment, the gaps at return and the deposit to return are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Your details and your terms, once and for all',
        description:
          'Fill in the lessor header (name, address, SIRET, VAT number), then your usual terms: price of a day late, cleaning fee, deposit return deadline, cancellation, penalties for business customers. Save the file as your template: every new rental starts from that copy.',
      },
      {
        label: 'Step 2',
        title: 'The agreement, at booking',
        description:
          'The renter, the event, the check-out and return dates and times, then one line per item with its quantity, its unit price excl. VAT and its replacement value. The Excel file calculates the days, the totals excl. and incl. VAT, the down payment and the total replacement value, next to the deposit you ask for. The customer signs “Lu et approuvé”.',
      },
      {
        label: 'Step 3',
        title: 'The condition report, at check-out',
        description:
          'In front of the customer, check each item: quantity, condition, accessories supplied. Photograph the defects already there, write down the number of each photo, then both sign the “À la sortie” part. In the Excel file, the lines repeat the equipment of the agreement.',
      },
      {
        label: 'Step 4',
        title: 'The return, the gaps and the deposit',
        description:
          'At return, the same check: quantity returned, condition, accessories, cleanliness. The Excel file counts missing items at their replacement value, the days late, the breakage you type in and the cleaning, then gives the deposit to return or the balance to invoice. The customer writes down any reservations, you both sign, and the line of the log turns to “Clôturé” once the deposit is returned and the balance paid.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'What the French civil code and VAT rules already provide',
    intro:
      'The French civil code governs the hire of all kinds of goods, movable goods included (art. 1713), and the deposit has its own VAT treatment. The template carries each of these rules in a clause or a box. These are pointers, not legal advice.',
    facts: [
      {
        contextLabel: 'Civil code, art. 1719 and 1720',
        title: 'Equipment delivered in good condition',
        text: 'The lessor delivers the equipment in good repair, keeps it fit for the intended use and ensures its peaceful enjoyment during the rental. The check-out condition report keeps the proof, item by item, with the accessories supplied.',
        sourceName: EQUIPMENT_RENTAL_AGREEMENT_LESSOR_DUTIES_SOURCE.name,
        sourceUrl: EQUIPMENT_RENTAL_AGREEMENT_LESSOR_DUTIES_SOURCE.url,
      },
      {
        contextLabel: 'Civil code, art. 1728',
        title: 'Reasonable use, the one set in the agreement',
        text: 'The renter uses the equipment reasonably, for the use set in the agreement, and pays the price on the agreed dates. The agreement therefore states the use and the place of use; it also bans subletting without your written consent, which the civil code allows (art. 1717).',
        sourceName: EQUIPMENT_RENTAL_AGREEMENT_RENTER_DUTIES_SOURCE.name,
        sourceUrl: EQUIPMENT_RENTAL_AGREEMENT_RENTER_DUTIES_SOURCE.url,
      },
      {
        contextLabel: 'Civil code, art. 1730 and 1731',
        title: 'Returned as it was received',
        text: 'If a condition report was made, the renter returns the equipment as received according to that report, except what has perished or deteriorated through age or force majeure. Without a condition report, the renter is presumed to have received it in good condition, unless proven otherwise. Page 2 of the template is filled in at check-out and at return, with both parties present.',
        sourceName: EQUIPMENT_RENTAL_AGREEMENT_CONDITION_REPORT_SOURCE.name,
        sourceUrl: EQUIPMENT_RENTAL_AGREEMENT_CONDITION_REPORT_SOURCE.url,
      },
      {
        contextLabel: 'Civil code, art. 1732',
        title: 'Breakage and losses during the rental',
        text: 'The renter answers for damage and losses that occur during the rental, unless they prove these happened through no fault of theirs. The agreement states the replacement value of each item, what is charged (repair on quote or replacement) and what the renter does in case of theft.',
        sourceName: EQUIPMENT_RENTAL_AGREEMENT_RENTER_LIABILITY_SOURCE.name,
        sourceUrl: EQUIPMENT_RENTAL_AGREEMENT_RENTER_LIABILITY_SOURCE.url,
      },
      {
        contextLabel: 'No VAT as long as it is returned',
        title: 'The deposit, kept apart from the price',
        text: 'The deposit only becomes the lessor’s if the renter fails the obligations on which the agreement makes its refund depend: it is subject to VAT only then, for the part kept. A deposit that is excessive compared with the real risk can be taxed as soon as it is received, for the excess. The template keeps it out of the total incl. VAT and compares it with the replacement value of the equipment.',
        sourceName: EQUIPMENT_RENTAL_AGREEMENT_DEPOSIT_VAT_SOURCE.name,
        sourceUrl: EQUIPMENT_RENTAL_AGREEMENT_DEPOSIT_VAT_SOURCE.url,
      },
      {
        contextLabel: 'On every invoice',
        title: 'The rental invoice and its wording',
        text: 'It carries in particular a unique number, the date, the lessor’s identity with its SIREN, the customer’s name and address, the description and quantity, the unit price excl. VAT, the VAT rate, the totals excl. and incl. VAT and the due date; for a business customer, the late-payment penalty rate and the €40 fixed recovery fee. From 1 September 2027, small and medium-sized businesses and micro-businesses add the customer’s SIREN, the delivery address if different and the nature of the transaction. The agreement already gathers most of this information.',
        sourceName: INVOICE_MENTIONS_SOURCE.name,
        sourceUrl: INVOICE_MENTIONS_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Equipment rental agreement template: your questions',
    questions: [
      {
        question: 'Is the equipment rental agreement template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Is a condition report mandatory when renting out equipment in France?',
        answer:
          'The French civil code does not make it compulsory, but it draws the consequences. With a condition report, the renter returns the equipment as received, except what has deteriorated through age or force majeure; without one, the renter is presumed to have received it in good condition, unless proven otherwise (art. 1730 and 1731). The check-out report therefore protects your customer too: a scratch noted at check-out cannot be blamed on them at return.',
      },
      {
        question: 'How do I set the amount of the deposit?',
        answer:
          'From what you risk losing: the Excel file adds up the replacement value excl. VAT of each item rented and shows the deposit as a percentage of that total. For the French tax authorities, a deposit that is excessive compared with the real risks can be subject to VAT as soon as it is received, for the excess. The agreement also states when it is returned and what can be kept from it.',
      },
      {
        question: 'Is the deposit subject to VAT?',
        answer:
          'Not as long as it is returned. It only becomes taxable for the part you keep because the renter did not meet their obligations, for unpaid rental fees or repairs to the equipment for instance. That is why the template keeps it apart from the total incl. VAT and calculates the amounts kept excl. VAT, then with VAT at your rate (0% if your business is exempt from VAT under the French small business scheme).',
      },
      {
        question: 'Who pays if the equipment is broken, lost or stolen?',
        answer:
          'The renter answers for damage and losses during the rental, unless they prove these happened through no fault of theirs (French civil code, art. 1732). The agreement sets what follows: repair charged on quote up to the replacement value, an item lost, stolen or beyond repair charged at its replacement value, and the receipt of the police report to hand over in case of theft. A box shows whether the renter insured the equipment.',
      },
      {
        question: 'Can my customer sublet or lend the equipment?',
        answer:
          'The French civil code allows it, unless the agreement bans it (art. 1717). The template bans it without your written consent: you know who has the equipment in hand, and at which address.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'On the “Matériel et montants” sheet, you type the dates, then the quantity, unit price excl. VAT and replacement value of each item: the days, the totals excl. and incl. VAT, the down payment and the total replacement value are calculated on their own. The “État des lieux” sheet repeats the equipment of the agreement; at return, the quantity returned is enough to get the gap, the value of missing items, the days late and the deposit to return. The “Suivi des locations” sheet gives the status of each agreement and the deposits you hold.',
      },
      {
        question: 'And when the rentals pile up?',
        answer:
          'An Excel template is enough for a few rentals a week. Beyond that, rental software sold in France (Unipresta, LoKisi, Rentman, Booqable) tracks your stock and availability: Unipresta has a free version, LoKisi starts at €29 per month. If your organisation falls outside their frame (kits, several depots, bookings on your website), the test on the tool page tells you what to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When agreements, condition reports and deposits get copied from one file to the next, and the same item has to go out to two events on the same weekend, a tool that tracks your availability gives you hours back. Describe your business to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare equipment rental software',
  },
}
