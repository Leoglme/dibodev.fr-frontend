import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { GARAGE_REPAIR_ORDER_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/garageRepairOrder/pageShared'
import {
  AUTO_REPAIR_RULES_SOURCE,
  AUTO_REPAIR_TEMPLATE_PDF_PATH,
  AUTO_REPAIR_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/autoRepairShopSoftware/pageShared'

export const GARAGE_REPAIR_ORDER_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Garage repair order: free French template (PDF + Excel)',
    description:
      'Garage repair order: free French template in PDF and Excel, with a quote. Mileage, reused parts, estimate incl. VAT, totals calculated. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French repair order and quote template for auto repair shops',
  },
  breadcrumbLabel: 'Garage repair order',
  shareImage: {
    titleLines: ['Garage repair order', 'free French template'],
    highlight: 'repair order',
    subtitle: 'Repair order and quote in PDF and Excel, mileage, reused parts, calculated totals, French wording',
    badge: 'Free, no sign-up',
    icon: 'fileText',
    alt: 'Free French garage repair order template: repair order and quote in PDF and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Garage repair order',
    titleAfter: ': free French template, PDF and Excel (+ quote)',
    reassurances: ['Repair order + quote', 'Excel with calculated totals', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'A repair order and a garage quote ready to fill in, written in French for the French market, for an independent mechanic, a garage or an auto centre. The repair order is signed when the vehicle comes in, in two copies, with the mileage, the condition of the vehicle, the estimate incl. VAT and the customer’s agreements. The quote details parts and labour, applies VAT and carries the “Bon pour accord” acceptance.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the French rules on garage quotes, repair orders and invoices so that the wording is up to date.',
    updatedAt: GARAGE_REPAIR_ORDER_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For garages, independent mechanics and auto centres working in France. Two files in French, no form to fill in: the PDF prints, the Excel file calculates.',
    files: [
      {
        label: 'Download the PDF template',
        href: AUTO_REPAIR_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: AUTO_REPAIR_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 sheets, calculated totals, in French',
      },
    ],
    footnote: 'Free to use and adapt to your workshop. It does not replace the advice of your accountant.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A repair order and a quote, as PDF and Excel',
    intro:
      'The PDF holds both documents on two A4 pages. The Excel file holds them on two sheets, with the estimate of each line, the probable cost of the job and the quote totals calculated as soon as you type a price.',
    documents: [
      {
        title: 'Repair order',
        format: 'Page 1 of the PDF, “Ordre de réparation” sheet of the Excel file',
        items: [
          'Garage header (name, address, phone, SIRET), order number, check-in date, planned return date, service advisor',
          'Customer (name, phone, address, email) and vehicle: registration number, mileage on arrival, make, model, engine, VIN, first registration date, fuel level',
          'Requested work and estimate: description (symptom observed, work to carry out), quantity, labour hours, estimate incl. VAT, probable cost of the job, hourly rate incl. VAT applied (hourly rate and parts incl. VAT columns in the Excel file)',
          'Condition of the vehicle on arrival: bodywork, interior, items left in the vehicle, warning lights on',
          'Customer agreements in 3 boxes: reused parts accepted, call before exceeding a given amount incl. VAT, replaced parts to be returned',
          '“Bon pour accord” signature and garage stamp, legal wording: mileage on every document, circular economy parts, receipt from €25 incl. VAT, prices displayed',
        ],
      },
      {
        title: 'Quote',
        format: 'Page 2 of the PDF, “Devis” sheet of the Excel file',
        items: [
          'Garage header with VAT number, quote number, date, valid until, paid quote yes / no',
          'Customer (name, address), phone / email, vehicle (registration number, model), mileage',
          'Service lines: description (part or labour), quantity, unit price excl. VAT, VAT, total excl. VAT (the Excel file adds the total incl. VAT per line and goes from 8 to 12 lines)',
          'Totals: total excl. VAT, VAT at 20% by default, total incl. VAT (calculated in the Excel file, VAT rate editable line by line)',
          'Terms: planned time off the road, possible deposit, payment terms, reused parts offered, warranty on parts and labour',
          'Acceptance in 2 boxes (bon pour accord, quote amount deducted from the final invoice when the quote is paid), signatures, legal wording: quote cannot be refused, free pricing, customer’s agreement for any unplanned work, mileage on the invoice',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the repair order in five steps',
    intro:
      'In the Excel file, only the white cells are typed in. The estimate of each line, the probable cost of the job and the quote totals are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Your details, once and for all',
        description:
          'Fill in the garage header (name, address, SIRET, VAT number) on both documents, then save the file as your template. Every new repair order starts from that copy.',
      },
      {
        label: 'Step 2',
        title: 'The customer and the vehicle on arrival',
        description:
          'In front of the customer, write down the registration number, the mileage, the VIN and the fuel level, then the condition of the vehicle: scratches, dents, items left inside, warning lights on. That is what avoids disputes when the vehicle is returned.',
      },
      {
        label: 'Step 3',
        title: 'The requested work and the estimate',
        description:
          'One line per symptom or job to carry out, with the labour hours, your hourly rate incl. VAT and the price of the parts. The Excel file calculates the estimate of each line and the probable cost of the job. Give the planned return date.',
      },
      {
        label: 'Step 4',
        title: 'The customer’s agreements and the signature',
        description:
          'The customer ticks whether they accept reused parts, the amount above which you call them before any extra work, and whether they want the replaced parts back. They sign “Bon pour accord”, you sign and stamp, one copy each.',
      },
      {
        label: 'Step 5',
        title: 'The quote when the customer asks for one',
        description:
          'On the “Devis” sheet, one line per part or labour item with its quantity and unit price excl. VAT. VAT is at 20% by default, the totals follow. Give the validity date, whether the quote is paid, and the terms: time off the road, deposit, warranty.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The wording the template already provides',
    intro:
      'Four French garage rules go through the repair order and the quote. The template keeps a box or a line for each of them.',
    facts: [
      {
        contextLabel: 'Strongly recommended',
        title: 'The repair order, in two copies',
        text: 'Signed by you and the customer: date, identity, vehicle and mileage, repairs, probable cost and time off the road. Page 1 of the template carries each of these details, with the planned return date.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'If the customer asks',
        title: 'A quote, free or paid',
        text: 'A quote is not mandatory, but you cannot refuse one to a customer who asks. It can be charged if the customer knows beforehand; once signed, it binds you. The template provides the “paid quote: yes / no” box and the deduction of its amount from the final invoice.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Since 1 January 2017',
        title: 'Reused parts to offer',
        text: 'For some repairs (removable body parts, trim, lights, non-bonded glazing, some mechanical parts), excluding suspension and braking. The repair order carries the customer’s agreement box, the quote the “reused parts offered” line.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'From €25 incl. VAT',
        title: 'A detailed invoice, the mileage everywhere',
        text: 'Date, garage name and address, customer, date and place of the job, detailed breakdown, totals excl. and incl. VAT; the mileage appears on all your documents. The template asks for it when the vehicle comes in and repeats it on the quote.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Repair order template: your questions',
    questions: [
      {
        question: 'Is the repair order template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Is a repair order mandatory in France?',
        answer:
          'It is strongly recommended, not required. In two signed copies, it protects both the garage and the customer: date, identity, vehicle and mileage, planned repairs, probable cost and time off the road. The template adds the condition of the vehicle on arrival and the fuel level, frequent sources of dispute when the vehicle is returned.',
      },
      {
        question: 'Can a garage charge for the quote?',
        answer:
          'Yes, if it tells the customer beforehand. A quote is not mandatory, but the garage cannot refuse one if the customer asks. Once signed, it binds both parties. The template provides the “paid quote: yes / no” wording and the box that deducts its amount from the final invoice.',
      },
      {
        question: 'What if extra work shows up during the repair?',
        answer:
          'Any unplanned work needs the customer’s agreement. The repair order in the template sets in advance the amount incl. VAT above which you call them before going on: the customer fills it in when the vehicle comes in, and you keep a written record of their agreement.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'On the “Ordre de réparation” sheet, you type the labour hours, the hourly rate incl. VAT and the price of the parts: the estimate of each line and the probable cost of the job are calculated on their own. On the “Devis” sheet, you type the quantity and the unit price excl. VAT; VAT, at 20% by default, is edited line by line, and the total excl. VAT, the VAT and the total incl. VAT follow. Both sheets print on one A4 page.',
      },
      {
        question: 'And when the repair orders pile up?',
        answer:
          'An Excel template is enough for a few vehicles a week. Beyond that, French garage software (Gest’Garage, TDV, AutoProGestion, Kwixéo) chains quote, repair order and invoice with the history of each vehicle, from €19 per month. If your organisation falls outside their frame (service packages, several workshops, bookings on your website), the test on the tool page tells you what to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When repair orders, quotes and invoices get copied from one file to the next and the history of each vehicle gets lost, a tool that chains them gives you hours back. Describe your workshop to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare garage software',
  },
}
