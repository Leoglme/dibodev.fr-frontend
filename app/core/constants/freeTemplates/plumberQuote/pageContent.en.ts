import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { PLUMBER_QUOTE_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/plumberQuote/pageShared'
import { HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import {
  BOILER_MAINTENANCE_SOURCE,
  DECENNIAL_INSURANCE_SOURCE,
  PLUMBING_HEATING_TEMPLATE_PDF_PATH,
  PLUMBING_HEATING_TEMPLATE_XLSX_PATH,
  REDUCED_VAT_WORKS_SOURCE,
} from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'

export const PLUMBER_QUOTE_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Plumber quote: free French template (Excel + PDF)',
    description:
      'Plumber and heating quote: free French template in Excel and PDF, with an intervention slip. 5.5, 10 or 20% VAT, deposit, up-to-date wording. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French quote and intervention slip template for plumbers and heating engineers',
  },
  breadcrumbLabel: 'Plumber quote',
  shareImage: {
    titleLines: ['Plumber quote', 'free French template'],
    highlight: 'Plumber quote',
    subtitle: 'Quote and intervention slip in Excel and PDF, 5.5, 10 or 20% VAT, up-to-date French wording',
    badge: 'Free, no sign-up',
    icon: 'fileText',
    alt: 'Free French plumber quote template: quote and intervention slip in Excel and PDF, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Plumber and heating quote',
    titleAfter: ': free French template, Excel and PDF (+ intervention slip)',
    reassurances: ['Quote + intervention slip', 'Excel with calculated totals', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'A plumbing and heating quote and an intervention slip ready to fill in, written in French for the French market, for a sole trader or a small team. The quote separates supplies from labour, applies VAT line by line and carries the customer’s statement for the reduced rate. The intervention slip is signed on site, with the yearly boiler maintenance checklist.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the French rules on quotes, invoices and boiler maintenance so that the wording is up to date.',
    updatedAt: PLUMBER_QUOTE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For plumbers, heating engineers and sanitary installers working in France. Two files in French, no form to fill in: the PDF prints, the Excel file calculates.',
    files: [
      {
        label: 'Download the PDF template',
        href: PLUMBING_HEATING_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: PLUMBING_HEATING_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 sheets, calculated totals, in French',
      },
    ],
    footnote: 'Free to use and adapt to your business. It does not replace the advice of your accountant.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A quote and an intervention slip, as PDF and Excel',
    intro:
      'The PDF holds both documents on two A4 pages. The Excel file holds them on two sheets, with the totals, the VAT per rate and the deposit calculated as soon as you type a quantity and a price.',
    documents: [
      {
        title: 'Quote',
        format: 'Page 1 of the PDF, “Devis” sheet of the Excel file',
        items: [
          'Company header (name, address, phone, SIRET, VAT number) and ten-year insurance (insurer, policy number, area covered)',
          'Quote number, date, validity date, free or paid quote',
          'Customer, address of the works, nature of the works, dwelling completed more than 2 years ago',
          'Service lines: description, unit, quantity, unit price excl. VAT, VAT rate, total excl. VAT, plus a labour line at the hourly rate and a travel costs line',
          'Totals: total excl. VAT, VAT at 5.5%, 10% and 20%, total incl. VAT, deposit on order (30% by default in the Excel file)',
          'Terms, customer’s statement for the reduced VAT rate, “Bon pour accord” signature and stamp, legal wording of home repair jobs',
        ],
      },
      {
        title: 'Intervention slip',
        format: 'Page 2 of the PDF, “Bon d’intervention” sheet of the Excel file',
        items: [
          'Intervention number, date, technician, maintenance contract number, arrival and departure times',
          'Customer and appliance (boiler, water heater, heat pump), make, model, serial number, energy, power, installation date',
          'Reason (breakdown, maintenance, commissioning), findings and work done',
          'Parts supplied and labour: description, quantity, unit price excl. VAT, VAT, total excl. VAT (the Excel file adds the total incl. VAT per line)',
          'Yearly boiler maintenance checklist in 6 boxes: cleaning, safety and regulation, carbon monoxide in ppm, efficiency, advice given, next visit',
          'Customer and technician signatures, reminder of the maintenance certificate within 15 days',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the quote in five steps',
    intro:
      'In the Excel file, only the white cells are typed in. The totals, the VAT per rate and the deposit are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Your details, once and for all',
        description:
          'Fill in the header (name, address, SIRET, VAT number) and your ten-year insurance, then save the file as your template. Every new quote starts from that copy.',
      },
      {
        label: 'Step 2',
        title: 'The customer and the dwelling',
        description:
          'Name, address of the works and nature of the works. Tick whether the dwelling was completed more than 2 years ago: that is what opens the 10% or 5.5% VAT rate.',
      },
      {
        label: 'Step 3',
        title: 'The lines, supplies and labour apart',
        description:
          'One line per supply with its quantity and unit price excl. VAT, then labour at the hourly rate and travel. The Excel file calculates the total excl. VAT of each line.',
      },
      {
        label: 'Step 4',
        title: 'The right VAT rate on each line',
        description:
          'The VAT column is at 10% by default. Switch to 5.5% for energy renovation works, to 20% for a new dwelling or business premises. The totals per rate follow.',
      },
      {
        label: 'Step 5',
        title: 'Validity, deposit, signature',
        description:
          'Give the validity date, whether the quote is free or paid, and the deposit rate. The customer signs with the words “Bon pour accord”, and ticks the statement when the reduced rate applies.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The wording the template already provides',
    intro:
      'Four French rules for plumbers and heating engineers go through the quote and the intervention slip. The template keeps a box or a line for each of them.',
    facts: [
      {
        contextLabel: 'Since 1 April 2017',
        title: 'A quote before any job at a private home',
        text: 'Breakdown, repair or maintenance of plumbing, sanitary or HVAC: a detailed quote is handed over before the work, whatever the amount, with the hourly rate, travel costs and its validity period.',
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: '10% or 5.5% VAT',
        title: 'The customer’s statement on the quote or invoice',
        text: 'For works in a dwelling completed more than 2 years ago, the customer certifies on the quote or invoice that the reduced-rate conditions are met. Each document is drawn up in two copies, theirs kept for 5 years.',
        sourceName: REDUCED_VAT_WORKS_SOURCE.name,
        sourceUrl: REDUCED_VAT_WORKS_SOURCE.url,
      },
      {
        contextLabel: 'Every calendar year',
        title: 'Maintenance of 4 to 400 kW boilers',
        text: 'Boilers, heat pumps and ventilated heating appliances: one visit per calendar year, and a maintenance certificate handed to the customer within 15 days, kept for 2 years. The intervention slip keeps the record of the visit.',
        sourceName: BOILER_MAINTENANCE_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_SOURCE.url,
      },
      {
        contextLabel: 'With every quote and invoice',
        title: 'The ten-year insurance certificate',
        text: 'As a building tradesperson or sole trader in France, you take out ten-year civil liability insurance, and its certificate goes with your quotes and invoices. The quote header carries its references.',
        sourceName: DECENNIAL_INSURANCE_SOURCE.name,
        sourceUrl: DECENNIAL_INSURANCE_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Plumber quote template: your questions',
    questions: [
      {
        question: 'Is the plumber quote template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Which VAT rate applies on a plumbing quote in France?',
        answer:
          '20% by default. In a dwelling completed more than 2 years ago, improvement and maintenance works go to 10%, and energy renovation works to 5.5%, provided the customer certifies these conditions on the quote or invoice. The template provides the three rates per line and the statement box.',
      },
      {
        question: 'Is a quote mandatory for a simple call-out?',
        answer:
          'At a private home in France, yes, since 1 April 2017: breakdown, repair or maintenance of plumbing, sanitary or heating, whatever the amount. The quote states the hourly rate, travel costs and its validity period. Signed away from your premises, the customer has 14 days to withdraw, except for urgent work they asked for.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'You type the quantity, the unit price excl. VAT and the VAT rate of each line. The line total excl. VAT, the quote total excl. VAT, the VAT per rate (5.5, 10 and 20%), the total incl. VAT and the deposit are calculated on their own. The “Bon d’intervention” sheet also calculates the total incl. VAT of each line. Both sheets print on one A4 page.',
      },
      {
        question: 'Does the intervention slip replace the boiler maintenance certificate?',
        answer:
          'No. The intervention slip keeps the record of the visit (points checked, carbon monoxide reading, advice given), but the maintenance certificate remains a separate document, handed to the customer within 15 days of the visit and kept for 2 years. The template reminds you of that deadline.',
      },
      {
        question: 'And when the quotes pile up?',
        answer:
          'An Excel template is enough for a few quotes a week. Beyond that, French building quote software (Tolteck, Obat, Batappli) takes over your works and supplier prices from €19 excl. VAT per month. If your organisation falls outside their frame (maintenance contracts, rounds, parts), the test on the tool page tells you what to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When quotes, intervention slips and maintenance contracts get copied from one file to the next, a tool that chains them gives you hours back. Describe your business to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare plumbing software',
  },
}
