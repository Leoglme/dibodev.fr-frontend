import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/electricianCommissioningReport/pageShared'
import {
  CHARGING_POINT_QUALIFICATION_SOURCE,
  CONSUEL_SOURCE,
  ELECTRICIAN_TEMPLATE_PDF_PATH,
  ELECTRICIAN_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/electricianSoftware/pageShared'
import { HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import { REDUCED_VAT_WORKS_SOURCE } from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'

export const ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Electrician commissioning report: free French template',
    description:
      'Electrician commissioning report: free French template in Excel and PDF, with a quote. 5.5, 10 or 20% VAT, tests, Consuel certificate. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French commissioning report and quote template for electricians',
  },
  breadcrumbLabel: 'Electrician commissioning report',
  shareImage: {
    titleLines: ['Commissioning report', 'free French template'],
    highlight: 'Commissioning report',
    subtitle: 'Commissioning report and quote in Excel and PDF, Consuel, 5.5, 10 or 20% VAT, up-to-date French wording',
    badge: 'Free, no sign-up',
    icon: 'fileText',
    alt: 'Free French electrician commissioning report: report and quote in Excel and PDF, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Electrician commissioning report',
    titleAfter: ': free French template (+ quote)',
    reassurances: ['Commissioning report + quote', 'Excel with calculated totals', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'An electrician’s quote and a commissioning report ready to fill in, written in French for the French market, for a sole trader or a small team. The quote separates supplies from labour, applies VAT line by line and carries the customer’s statement for the reduced rate. The report is signed on site at the end of the job: panel checks, earthing, measurements per circuit, Consuel certificate.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the French rules on quotes, reduced VAT, Consuel and charging points so that the wording is up to date.',
    updatedAt: ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For electricians, installers and building-trade sole traders working in France. Two files in French, no form to fill in: the PDF prints, the Excel file calculates.',
    files: [
      {
        label: 'Download the PDF template',
        href: ELECTRICIAN_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: ELECTRICIAN_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 sheets, calculated totals, in French',
      },
    ],
    footnote:
      'Free to use and adapt to your business. It does not replace the advice of your accountant nor the official Consuel forms.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A quote and a commissioning report, as PDF and Excel',
    intro:
      'The PDF holds both documents on two A4 pages. The Excel file holds them on two sheets; the “Devis” sheet calculates the totals, the VAT per rate and the deposit as soon as you type a quantity and a price.',
    documents: [
      {
        title: 'Quote',
        format: 'Page 1 of the PDF, “Devis” sheet of the Excel file',
        items: [
          'Company header (name, address, phone, SIRET, VAT number), ten-year insurance (insurer, policy number, area covered) and qualifications (Qualifelec, IRVE…)',
          'Quote number, date, validity date, free or paid quote',
          'Customer, address of the works, nature of the works (panel, renovation, charging point, call-out), dwelling completed more than 2 years ago',
          'Service lines: description, unit, quantity, unit price excl. VAT, VAT rate, total excl. VAT, plus a labour line at the hourly rate and a travel costs line',
          'Totals: total excl. VAT, VAT at 5.5%, 10% and 20%, total incl. VAT, deposit on order (30% by default in the Excel file)',
          'Terms (power cut, payment, warranty, Consuel certificate included or extra), customer’s statement for the reduced VAT rate, “Bon pour accord” signature and stamp, legal wording of home repair jobs and charging points',
        ],
      },
      {
        title: 'Commissioning report',
        format: 'Page 2 of the PDF, “PV de mise en service” sheet of the Excel file',
        items: [
          'Job or quote number, date, electrician, arrival and departure times',
          'Customer and installation: nature (new, renovation, panel, charging point, extension), single- or three-phase supply, subscribed power, service breaker, meter number',
          'Panel checks in 6 boxes: 30 mA RCDs (number, type A, AC or F), test button of each RCD, breaker ratings, circuit labelling, tightening, surge protector and 20% spare capacity',
          'Earthing and bonding: earth resistance in Ω, main equipotential bonding, bathroom bonding',
          'Measurements per circuit: cross-section, protection, insulation in MΩ, PE continuity in Ω, test (6 rows in the PDF, 8 in the Excel file)',
          'Tests and charging point (power, dedicated circuit, type A or F RCD, test charge), Consuel certificate (type, number and sending date, stamp received), remarks and signatures',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the quote and the report in six steps',
    intro:
      'In the Excel file, only the white cells are typed in. The totals, the VAT per rate and the deposit of the quote are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Your details and qualifications, once and for all',
        description:
          'Fill in the header (name, address, SIRET, VAT number), your ten-year insurance and your qualifications (Qualifelec, IRVE), then save the file as your template. Every new quote starts from that copy.',
      },
      {
        label: 'Step 2',
        title: 'The customer, the site and the nature of the works',
        description:
          'Name, address of the works and nature of the works: panel, renovation, charging point or call-out. State whether the dwelling was completed more than 2 years ago: that is what opens the 10% or 5.5% VAT rate.',
      },
      {
        label: 'Step 3',
        title: 'The lines, supplies and labour apart',
        description:
          'One line per supply with its unit, quantity and unit price excl. VAT, then labour at the hourly rate and travel as a flat fee. The Excel file calculates the total excl. VAT of each line.',
      },
      {
        label: 'Step 4',
        title: 'The right VAT rate on each line',
        description:
          'The VAT column is at 10% by default. Switch to 5.5% for energy renovation works, to 20% for a new dwelling or business premises. The totals per rate follow.',
      },
      {
        label: 'Step 5',
        title: 'Terms, deposit, signature',
        description:
          'Note the start date, the power cut to plan, whether the Consuel certificate is included or extra, the validity and the deposit rate. The customer signs “Bon pour accord” and ticks the statement when the reduced rate applies.',
      },
      {
        label: 'Step 6',
        title: 'The report, signed at commissioning',
        description:
          'On site, tick the panel checks, record the earth resistance and the measurements of each circuit, note the number and sending date of the Consuel certificate. The customer signs for receipt of the installation.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The wording the template already provides',
    intro:
      'Four French rules for electricians go through the quote and the commissioning report. The template keeps a box or a line for each of them.',
    facts: [
      {
        contextLabel: 'Since 1 April 2017',
        title: 'A quote before any call-out at a private home',
        text: 'Breakdown, repair or maintenance at a private home: a detailed quote handed over before the work, whatever the amount, with the hourly rate, travel costs and its validity period; an invoice from €25 incl. VAT. The template provides these three items.',
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Before power-on',
        title: 'The Consuel certificate of conformity',
        text: 'Every new installation connected to the public grid gets a certificate of conformity, sent to Consuel when the work is finished and at least 20 days before commissioning; since 1 January 2025, Consuel forwards it to the grid operator itself. The report keeps its type, number and sending date.',
        sourceName: CONSUEL_SOURCE.name,
        sourceUrl: CONSUEL_SOURCE.url,
      },
      {
        contextLabel: 'Decree of 12 January 2017',
        title: 'An IRVE qualification for charging points',
        text: 'Except charging points of 3.7 kW or less in a private home, charging points are installed by professionals qualified by an approved body; the administrative fine can reach €300 per charging point. The quote header carries your qualifications.',
        sourceName: CHARGING_POINT_QUALIFICATION_SOURCE.name,
        sourceUrl: CHARGING_POINT_QUALIFICATION_SOURCE.url,
      },
      {
        contextLabel: '10% or 5.5% VAT',
        title: 'The customer’s statement on the quote or invoice',
        text: 'For works in a dwelling completed more than 2 years ago, the customer certifies on the quote or invoice that the reduced-rate conditions are met. Each document is drawn up in two copies, theirs kept for 5 years. The quote provides the tick box.',
        sourceName: REDUCED_VAT_WORKS_SOURCE.name,
        sourceUrl: REDUCED_VAT_WORKS_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Electrician quote template: your questions',
    questions: [
      {
        question: 'Is the electrician quote template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Which VAT rate applies on an electrical quote in France?',
        answer:
          '20% by default. In a dwelling completed more than 2 years ago, improvement and maintenance works go to 10%, and energy renovation to 5.5%, provided the customer certifies these conditions on the quote or invoice. The template provides the three rates per line and the statement box; the Excel file is at 10% by default.',
      },
      {
        question: 'Is a quote mandatory for an electrical call-out?',
        answer:
          'At a private home in France, yes, since 1 April 2017: breakdown, repair or maintenance, whatever the amount, even in an emergency. The quote states the hourly rate, travel costs, its validity period and whether it is free or charged. Signed at the customer’s home, it opens a 14-day withdrawal right, except for urgent work they asked for. The template recalls this wording in the footer.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'In the “Devis” sheet, you type the quantity, the unit price excl. VAT and the VAT rate of each line (12 lines, including labour and travel). The line total excl. VAT, the quote total excl. VAT, the VAT per rate (5.5, 10 and 20%), the total incl. VAT and the deposit are calculated on their own. The “PV de mise en service” sheet calculates nothing: it holds the tick boxes and the measurement table for 8 circuits. Both sheets print on one A4 page.',
      },
      {
        question: 'Does the commissioning report replace the Consuel certificate?',
        answer:
          'No. The certificate of conformity remains Consuel’s official form, sent when the work is finished and at least 20 days before commissioning. The report keeps the record of your checks (RCDs, earthing, insulation, continuity, tests), the certificate type, number and sending date, then the receipt of the stamp. It is the document the customer signs when receiving the installation.',
      },
      {
        question: 'And when the quotes pile up?',
        answer:
          'An Excel template is enough for a few quotes a week. Beyond that, French building quote software (Tolteck, Obat, Batappli) takes over your works and supplier prices from €19 excl. VAT per month, and Organilog or Kizeo Forms have the report filled in on the phone, from €15 to €59 per user per month. If your organisation falls outside their frame (several electricians, Consuel certificates to track), the test on the tool page tells you what to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When quotes, commissioning reports and Consuel certificates get copied from one file to the next, a tool that chains them gives you hours back. Describe your business to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare electrician software',
  },
}
