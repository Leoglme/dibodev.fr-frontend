import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { CARPENTRY_CUTTING_LIST_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/carpentryCuttingList/pageShared'
import { HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import {
  BUILDER_WARRANTIES_SOURCE,
  CARPENTRY_TEMPLATE_PDF_PATH,
  CARPENTRY_TEMPLATE_XLSX_PATH,
  CUSTOM_WINDOW_WITHDRAWAL_SOURCE,
  REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE,
} from '~/core/constants/tools/carpentrySoftware/pageShared'

export const CARPENTRY_CUTTING_LIST_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Joinery cutting list: free French Excel template (+ quote)',
    description:
      'Joinery cutting list: free French Excel template, with measured quote, cutting plan and handover report. Cutting sizes and material cost calculated. No sign-up.',
    inLanguage: 'en',
    schemaAbout:
      'French cutting list, quote with measurements, cutting plan and handover report template for joiners and carpenters',
  },
  breadcrumbLabel: 'Joinery cutting list',
  shareImage: {
    titleLines: ['Joinery cutting list', 'free French template'],
    highlight: 'cutting list',
    subtitle:
      'Quote with measurements, cutting list, cutting plan and handover report, material cost and totals calculated',
    badge: 'Free, no sign-up',
    icon: 'hammer',
    alt: 'Free French joinery cutting list Excel template: quote with measurements, cutting list, cutting plan and handover report, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Joinery cutting list',
    titleAfter: ': free French Excel template (+ quote with measurements)',
    reassurances: [
      'Quote, cutting list, cutting plan, report',
      'Excel with calculated material cost',
      'No sign-up, no email',
    ],
    aboutTitle: 'About the template',
    description:
      'A cutting list that goes from finished sizes to cutting sizes and sends the material cost back into the quote, a joinery quote with the measurements of each item, a simple panel cutting plan and a handover report, written in French for the French market, for a sole joiner, a shopfitter or a small team of fitters. The PDF (quote and report) prints; the Excel file calculates.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the French rules on quotes, reduced VAT, withdrawal and warranties so that the wording is up to date.',
    updatedAt: CARPENTRY_CUTTING_LIST_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For joiners, carpenters, shopfitters, cabinetmakers and fitters working in France. Two files in French, no form to fill in: the PDF (quote and handover report) prints, the Excel file (quote, cutting list, cutting plan) calculates.',
    files: [
      {
        label: 'Download the PDF template',
        href: CARPENTRY_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, quote and handover report, in French',
      },
      {
        label: 'Download the Excel version',
        href: CARPENTRY_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, calculated totals and cutting list, in French',
      },
    ],
    footnote:
      'Free to use and adapt to your business. It replaces neither your CAD software nor the advice of your accountant.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A quote with measurements, a cutting list, a cutting plan and a handover report',
    intro:
      'The PDF holds the quote and the handover report on two A4 pages. The Excel file holds the quote and adds two calculation sheets, the cutting list and the cutting plan: the material cost of each reference flows back into the quote on its own.',
    documents: [
      {
        title: 'Quote with measurements',
        format: 'Page 1 of the PDF, “Devis” sheet of the Excel file',
        items: [
          'Company header (name, address, phone, SIREN or SIRET, VAT number) and ten-year insurance (insurer, policy number, geographical cover)',
          'Quote number, date, validity, place of signature (on your premises or off premises), customer, address of the job site, measurements taken on and by, dwelling completed more than 2 years ago',
          'Items and measurements: reference, item (description, finish, hardware), material (wood, PVC, aluminium…), sizes L × H × thickness in mm, quantity, unit (each, m², linear m, lump sum), supply excl. VAT, workshop and fitting hours, VAT, total excl. VAT, plus a line for removing and disposing of the old items',
          'Variants and options outside the total (material, glazing, finish, motorisation…); in the Excel file, a “Base, variante ou option” column keeps them out of the totals',
          'Totals: total excl. VAT, VAT at 5.5%, 10% and 20%, total incl. VAT, deposit on order; in the Excel file, workshop and fitting hourly rates and deposit rate in yellow cells, VAT at 10% by default on each line',
          'Withdrawal box for a contract signed off premises (14 days, no payment within 7 days, dates of signature and of the deposit call), customer’s VAT statement on the BOFiP model with its two boxes (10% or 5.5%), “Bon pour accord” signature and stamp',
        ],
      },
      {
        title: 'Cutting list',
        format: '“Fiche de débit” sheet of the Excel file, no page in the PDF',
        items: [
          'Parameters in yellow cells: extra length (100 mm) and extra width (10 mm) for solid wood, waste factor (1.3 by default), copied onto each line and editable line by line',
          '25 piece lines: reference of the quote item (F1, P2…), piece (stile, shelf…), species or panel (oak, melamine…), solid wood or panel, finished length and width, thickness, quantity',
          'Calculated: cutting length and width (finished sizes + allowances for solid wood), rough volume in m³ for solid wood or area in m² for panels, quantity to buy with the waste factor, unit',
          'Purchase price excl. VAT per m³ or per m² to type in; material cost excl. VAT of each line and totals (volume, area, cost)',
          'The material cost of each reference flows back on its own into the “Matière HT” column of the quote, for the same reference',
        ],
      },
      {
        title: 'Cutting plan',
        format: '“Plan de coupe” sheet of the Excel file, no page in the PDF',
        items: [
          'Panel in yellow cells: length and width in mm, saw kerf, width from which an offcut is kept, price of one panel excl. VAT, material and thickness',
          '15 piece lines: reference, piece, length, width, quantity, grain direction imposed (yes by default; “no” allows the piece to be turned)',
          'Calculated per piece: pieces per panel with the saw kerf, cutting direction (along the grain or turned piece), panels if the piece is cut on its own (“Trop grande” when it does not fit), area, offcuts at the end and along the edge, offcut to keep (yes or no)',
          'Result: total area of the pieces, area of one panel, minimum panels (area only) and panels if each piece is cut on its own (the real need lies between the two), material yield, cost of the panels excl. VAT',
          'Table of offcuts to keep (length, width, material, where stored, job) for the workshop stock',
        ],
      },
      {
        title: 'Handover report',
        format: 'Page 2 of the PDF, no sheet in the Excel file',
        items: [
          'Company header and ten-year insurance, quote or job number, end of the works, date and place of the handover',
          'Customer (project owner), address of the job site, quote accepted on, items handed over (quote references), people present at the handover',
          'Customer’s decision: handover without reservations, or with the reservations listed',
          '10 snag lines: number, reference, snag found (defect, finish, adjustment, missing element), photo number, clearance planned on, clearance recorded on with the customer’s initials, then “all snags cleared on” with both sets of initials',
          'Three warranties dated from the handover: completion (1 year), two-year (2 years), ten-year (10 years)',
          'Documents handed over and remarks (manuals, ten-year insurance certificate, adjustments explained), customer and company signatures, reminder of the two copies',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the template in six steps',
    intro:
      'In the Excel file, only the white cells and the yellow cells (parameters) are typed in. Cutting sizes, material cost, totals and VAT per rate are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Your details and your rates, once and for all',
        description:
          'Fill in the header (name, address, SIREN or SIRET, VAT number) and your ten-year insurance, then your workshop and fitting hourly rates and your deposit rate in the yellow cells. Save the file as your template.',
      },
      {
        label: 'Step 2',
        title: 'The customer, the job site and the measurements',
        description:
          'Name, addresses, measurements taken on and by, dwelling completed more than 2 years ago. Then one line per item with a reference (F1, P2…), the material, the L × H × thickness sizes, the quantity, the unit and the workshop and fitting hours.',
      },
      {
        label: 'Step 3',
        title: 'The cutting list, reference by reference',
        description:
          'One line per piece with the reference of its item, solid wood or panel, the finished sizes, the thickness, the quantity and the purchase price per m³ or per m². The cutting sizes and the material cost are calculated and flow back into the “Matière HT” column of the quote.',
      },
      {
        label: 'Step 4',
        title: 'The panel cutting plan',
        description:
          'Give the panel dimensions, the saw kerf, the offcut width to keep and the panel price, then your panel pieces with the grain direction imposed or not. Read the number of panels to buy and the offcuts to keep.',
      },
      {
        label: 'Step 5',
        title: 'VAT, variants, withdrawal, signature',
        description:
          'Pick the VAT of each line (10% by default, 5.5% or 20%) and have the customer tick the BOFiP statement. Mark the variants and options. If the quote is signed at the customer’s home, date the signature and the deposit call 7 days later, then have “Bon pour accord” signed.',
      },
      {
        label: 'Step 6',
        title: 'The handover report at the end of the job',
        description:
          'Print page 2, tick the handover without or with reservations, list them with their planned clearance date, and date the three warranties from the handover. One signed copy each.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The wording the template already provides',
    intro:
      'Four French rules for joiners go through the quote and the handover report. The template keeps a box or a line for each of them.',
    facts: [
      {
        contextLabel: 'Order of 24 January 2017',
        title: 'A quote before any repair job at a private home',
        text: 'Repairs, fixes or maintenance in joinery, garage doors and electric gates included: the detailed quote is handed over before the work, whatever the amount, with prices excluding and including VAT and its validity period. Quotes and invoices also state your professional insurance (name and address of the insurer, geographical cover): the template header carries its references.',
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: '10% and 5.5% VAT',
        title: 'No more certificate, a statement by the customer on the quote',
        text: 'The VAT certificate, simplified or not, is gone: for works in a home completed more than two years ago, the customer certifies the conditions of the reduced rate with a statement on the quote or the invoice, for which the French tax doctrine (BOFiP) publishes the models. The quote carries the BOI-LETTRE-000280 statement, with one box for 10% and one for 5.5%.',
        sourceName: REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE.name,
        sourceUrl: REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE.url,
      },
      {
        contextLabel: 'Contract signed at the customer’s home',
        title: 'Made-to-measure windows fitted: 14 days to withdraw',
        text: 'For the sale and fitting of made-to-measure windows, shutters or doors signed away from your premises, the DGCCRF (French consumer authority) rules out the exception for custom-made goods: the customer has 14 days to withdraw, counted from receipt of the goods (and can do so from signature), and you cannot receive any payment within 7 days. The quote carries this box, with the date of signature and that of the deposit call.',
        sourceName: CUSTOM_WINDOW_WITHDRAWAL_SOURCE.name,
        sourceUrl: CUSTOM_WINDOW_WITHDRAWAL_SOURCE.url,
      },
      {
        contextLabel: 'At the handover of the works',
        title: 'The handover report starts the warranties',
        text: 'Completion warranty (1 year, snags in the report included), two-year warranty (detachable equipment) and ten-year warranty (soundness of the structure and of its non-detachable elements, such as door and window frames): all three start at the handover (réception). Page 2 of the template dates each of them and keeps the record of the snag clearance.',
        sourceName: BUILDER_WARRANTIES_SOURCE.name,
        sourceUrl: BUILDER_WARRANTIES_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Joinery cutting list template: your questions',
    questions: [
      {
        question: 'Is the cutting list template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'How does the cutting list calculate the cutting sizes and the material cost?',
        answer:
          'For a solid wood piece, the cutting length and width add the allowances to the finished sizes (10 cm in length and 10 mm in width by default), the rough volume is calculated with the thickness of the board you buy and the quantity, then multiplied by the waste factor (1.3 by default) and by your purchase price per m³. For a panel, it is the area at finished sizes, multiplied by the factor and by the price per m². The three default values change in the yellow cells, and the factor also changes line by line.',
      },
      {
        question: 'Does the cutting plan replace a cutting optimiser?',
        answer:
          'No. The “Plan de coupe” sheet does a simple calculation: each piece is laid out in a grid on its own panels, with a saw kerf between two pieces, and the real need lies between the minimum by area and the total if each piece is cut on its own. An optimiser such as CutList Optimizer (free with a calculation limit, then €15 or €25 per month), MaxCut (free in its Community version) or OptiCoupe mixes the pieces on the same panel and works out the tightest plan.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'Three sheets. In “Devis”, you type the items, the workshop and fitting hours and the other supplies; the total excl. VAT of each line, the total excl. VAT, the VAT per rate (5.5, 10 and 20%), the total incl. VAT, the deposit and the amount of the variants and options are calculated on their own. In “Fiche de débit”, the cutting sizes, the volume or area, the quantity to buy and the material cost are calculated, and the material cost flows back into the quote for the same reference. In “Plan de coupe”, the pieces per panel, the number of panels and the offcuts are calculated. Drop-down lists guide the material, the unit, the VAT, solid wood or panel and the grain direction. Each sheet prints on one A4 page.',
      },
      {
        question: 'Which VAT rate applies on a joinery quote in France, and is a certificate still needed?',
        answer:
          'The VAT certificate, simplified or not, no longer exists. To apply 10% (article 279-0 bis of the French tax code) or 5.5% for energy renovation works (article 278-0 bis A), the customer certifies the conditions with a statement on the quote or the invoice, for which the BOFiP publishes models (BOI-LETTRE-000280). Otherwise, the standard 20% rate applies. The template provides the three rates per line and the statement, ready to tick and sign.',
      },
      {
        question: 'And when the quotes and cutting lists pile up?',
        answer:
          'An Excel template is enough for a few jobs a month. Beyond that, French construction quoting software (Obat from €49 to €129 excl. VAT per month, Batappli €39 or €79 excl. VAT) takes over your work items, joinery specialists price from manufacturers’ price lists (ProDevis START €75 excl. VAT per month, Anodos €19 or €49 per month) and CAD such as Aléker produces the cutting lists from the 3D drawing (€3,590 excl. VAT licence, then €79 to €169 excl. VAT per month). If your organisation falls outside their frame (from measurements to margin, workshop and fitting hours, snags after fitting), the test on the tool page tells you what to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When the measurements, the cutting list, the workshop and fitting hours and the invoice get copied from one file to the next, a tool that chains them, from measurements to the margin of the job, gives you hours back. Describe your workshop to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare joinery software',
  },
}
