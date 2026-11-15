import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  BUSINESS_PURCHASES_VAT_SOURCE,
  EXPENSE_REPORT_TEMPLATE_PDF_PATH,
  EXPENSE_REPORT_TEMPLATE_UPDATED_AT,
  EXPENSE_REPORT_TEMPLATE_XLSX_PATH,
  MILEAGE_ALLOWANCE_SCALE_SOURCE,
  PROFESSIONAL_EXPENSES_SOURCE,
} from '~/core/constants/freeTemplates/expenseReport/pageShared'
import { DOCUMENT_RETENTION_SOURCE } from '~/core/constants/tools/fieldServiceSoftware/pageShared'

export const EXPENSE_REPORT_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Expense report: free French template (PDF + Excel)',
    description:
      'Expense report: free French template in PDF and Excel, sub-totals for meals, hotel and travel, mileage allowance log and yearly summary. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French monthly expense report and mileage allowance log template',
  },
  breadcrumbLabel: 'Expense report',
  shareImage: {
    titleLines: ['Expense report', 'free French template'],
    highlight: 'Expense report',
    subtitle: 'Monthly expense report and personal vehicle mileage log, in PDF and Excel, calculated totals',
    badge: 'Free, no sign-up',
    icon: 'receipt',
    alt: 'Free French expense report template: monthly expense report and mileage allowance log in PDF and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Expense report',
    titleAfter: ': free French template, PDF and Excel (+ mileage allowance log)',
    reassurances: ['Monthly report + mileage log', 'Excel with sub-totals by type', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'A monthly expense report (note de frais) and a log of trips made with a personal vehicle, ready to fill in, written in French for businesses in France, for an employee or a company officer who pays expenses on behalf of the business: lunch on the way to a job site, a hotel night before a trade fair, a train ticket, a motorway toll, the kilometres driven in their own car. Each line points to a numbered receipt, totals are made by type, and any advance already received is deducted. No rate is hard-coded: you type in the rate per kilometre of the year, and this page tells you where to find it.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the Urssaf pages on business expenses and mileage allowances, and the French tax administration pages on recoverable VAT, so that the headings and the wording are accurate.',
    updatedAt: EXPENSE_REPORT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For employees and company officers in France who pay expenses up front, and for the person who approves and refunds them. Two files in French, no form to fill in: the PDF prints and is filled in by hand, the Excel file does the totals and the yearly summary.',
    files: [
      {
        label: 'Download the PDF template',
        href: EXPENSE_REPORT_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: EXPENSE_REPORT_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, calculated totals, in French',
      },
    ],
    footnote: 'Free to use and adapt to your business. It does not replace the advice of your accountant.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'An expense report, a mileage log and a yearly summary',
    intro:
      'The PDF fits on two A4 pages: the expense report of the month, then the log of trips made with a personal vehicle and the list of attached receipts. The Excel file holds both on two sheets and adds a third, the yearly summary month by month, with the end-of-year mileage allowance calculation.',
    documents: [
      {
        title: 'Monthly expense report',
        format: 'Page 1 of the PDF, “Note de frais” sheet of the Excel file',
        items: [
          'Company header (name, address, SIREN or SIRET), department or job site charged, report number, month, period covered, date handed in',
          'The claimant: name, job title, and status in three boxes (employee, company officer treated as an employee, self-employed company officer), because the refund rules are not the same',
          '16 expense lines (20 in the Excel file): receipt number, date, type (meals, lodging, travel, other), supplier, business purpose, amount excl. VAT, VAT, amount incl. VAT',
          'Sub-totals incl. VAT by type, plus the mileage allowance line carried over from page 2; in the Excel file, VAT and the amount excl. VAT are also totalled by type',
          'Payment: total of the report, advance received, balance to refund or overpayment to give back, date and method of payment',
          'Signatures of the claimant, who certifies the expenses, and of the approver, with the words “bon pour remboursement” (approved for refund); in the Excel file, a “Contrôle” column flags a line with no purpose, no date or a date outside the month',
        ],
      },
      {
        title: 'Personal vehicle mileage log',
        format: 'Page 2 of the PDF, “Trajets véhicule perso” sheet of the Excel file',
        items: [
          'The vehicle: make and model, registration, tax horsepower, holder of the registration certificate, type (petrol, diesel or hybrid car, electric car, motorbike, moped)',
          '14 trip lines (25 in the Excel file): date, from, to, business purpose, return trip, kilometres; the Excel file doubles the kilometres of a return trip on its own',
          'Total kilometres of the month and running total since 1 January, because the French tax scale is read on the distance of the whole year',
          'Rate per kilometre that you type in yourself, from the scale of the year: the allowance of the month is calculated and carried into the report',
          'List of attached receipts (type, item, amount incl. VAT, invoice in the company’s name or not, original or digital copy) and a “copy of the registration certificate attached” box',
        ],
      },
      {
        title: 'Yearly summary',
        format: '“Récap annuel” sheet of the Excel file',
        items: [
          'One line per month: meals, lodging, travel, other, VAT, business kilometres, mileage allowances paid, total refunded',
          'A reminder of the totals of the current report, to copy into the right month once the report is approved',
          'Year total for each column, useful at year-end closing and to follow what travel costs the business',
          'End-of-year calculation: you type the coefficient and the fixed amount of the scale band that matches your kilometres of the year, and the Excel file gives the gap with the allowances already paid',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the expense report in four steps',
    intro:
      'In the Excel file, only the white and yellow cells are typed in. The amount excl. VAT, the sub-totals, the mileage allowance and the balance to refund are calculated on their own. Delete the example lines before you start.',
    steps: [
      {
        label: 'Step 1',
        title: 'Number every receipt',
        description:
          'During the month, keep every receipt and every invoice, and write a number on it: 1, 2, 3… The report line carries that number. An expense with no receipt has no place here, unless the business pays flat-rate allowances.',
      },
      {
        label: 'Step 2',
        title: 'One line per expense, with its purpose',
        description:
          'Date, type, supplier, then the business purpose spelled out: “lunch, Le Goff job site in Vannes”, not “meal”. Copy the amount incl. VAT and the VAT as printed on the receipt. Tolls and parking go under travel.',
      },
      {
        label: 'Step 3',
        title: 'Trips in your own vehicle',
        description:
          'Write down each business trip on the day, with its kilometres. At the end of the month, type in the yellow cell the rate per kilometre of the year’s scale, read on the Urssaf “Indemnités kilométriques” page for your type of vehicle and its tax horsepower.',
      },
      {
        label: 'Step 4',
        title: 'Sign, approve, refund',
        description:
          'Enter the advance received, sign and hand in the report with its receipts. The approver checks, signs “bon pour remboursement” and pays the balance due. Then copy the month’s totals into the yearly summary.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The rules the template already follows',
    intro:
      'Six rules of the Urssaf (the French social contributions body) and of the French tax administration go through an expense report. The template keeps a column, a box or a line for each of them; amounts and ceilings change every year, so this page sends you to the source instead of copying them. For a special case, ask your accountant.',
    facts: [
      {
        contextLabel: 'Urssaf, business expenses',
        title: 'On receipts, or as a flat-rate allowance',
        text: 'The business refunds expenses either at their actual amount, on receipts, or as a flat-rate allowance. At actual cost there is no ceiling, but the business must prove that the work required the expense and produce the receipt. With a flat rate, the amount is compared with limits revised every year by the Urssaf: below them, no receipt is needed, only the business nature of the expense must be shown.',
        sourceName: PROFESSIONAL_EXPENSES_SOURCE.name,
        sourceUrl: PROFESSIONAL_EXPENSES_SOURCE.url,
      },
      {
        contextLabel: 'Company officers',
        title: 'No flat rate for most company officers',
        text: 'Flat-rate allowances do not apply to self-employed company officers, to minority or equal managers of a SARL, to chairmen and CEOs of an SA, or to presidents and officers of an SAS. Their expenses are assessed at actual cost: hence the status box at the top of the report, and a receipt for every line.',
        sourceName: PROFESSIONAL_EXPENSES_SOURCE.name,
        sourceUrl: PROFESSIONAL_EXPENSES_SOURCE.url,
      },
      {
        contextLabel: 'Personal vehicle',
        title: 'Mileage allowances follow the French tax scale',
        text: 'An employee who has to use their own vehicle for a business trip may receive mileage allowances, exempt from contributions up to the tax scale published every year. The scale depends on the type of vehicle, its tax horsepower and the business kilometres of the year, with a separate table for electric vehicles. The Urssaf repeats it on its “Indemnités kilométriques” page: that is where you read the rate to type in.',
        sourceName: MILEAGE_ALLOWANCE_SCALE_SOURCE.name,
        sourceUrl: MILEAGE_ALLOWANCE_SCALE_SOURCE.url,
      },
      {
        contextLabel: 'Proof of the kilometres',
        title: 'A day-by-day log and the registration certificate',
        text: 'To justify mileage allowances, the business must prove each business trip and the number of kilometres driven, and produce the vehicle’s registration certificate. The Urssaf mentions a record of kilometres per day. Without these documents, the allowances are subject to contributions: that is the role of page 2 of the template.',
        sourceName: PROFESSIONAL_EXPENSES_SOURCE.name,
        sourceUrl: PROFESSIONAL_EXPENSES_SOURCE.url,
      },
      {
        contextLabel: 'VAT',
        title: 'Recoverable VAT: an invoice, and not on everything',
        text: 'A business liable for VAT recovers it only with an invoice that shows the VAT rate and amount. VAT on lodging for company officers and staff cannot be recovered, nor can VAT on passenger transport (Service-Public lists taxis and ride-hailing). A business under the VAT franchise, like many micro-entrepreneurs, recovers no VAT at all.',
        sourceName: BUSINESS_PURCHASES_VAT_SOURCE.name,
        sourceUrl: BUSINESS_PURCHASES_VAT_SOURCE.url,
      },
      {
        contextLabel: '10 years',
        title: 'Receipts are kept for ten years',
        text: 'Invoices and other supporting documents are kept for 10 years from the end of the financial year; the tax administration can audit for 6 years. Keep the signed report with its receipts, or their digital copies, filed by month. The list of receipts on page 2 lets you check that none is missing.',
        sourceName: DOCUMENT_RETENTION_SOURCE.name,
        sourceUrl: DOCUMENT_RETENTION_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Expense report: your questions',
    questions: [
      {
        question: 'Is the expense report template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'What should an expense report contain in France?',
        answer:
          'No official page I read imposes a form. What the Urssaf asks for is the ability to prove that each expense was for business and to produce its receipt. The report does exactly that: who spent, when, with whom, for which client or job site, how much excl. VAT, VAT and incl. VAT, and the number of the attached receipt or invoice. The claimant’s status, the advance received and the two signatures complete it.',
      },
      {
        question: 'Till receipt or invoice: which one to keep?',
        answer:
          'For the refund, the Urssaf talks about supporting documents: the till receipt proves the expense. To recover VAT, the French tax administration is stricter: only an invoice, showing the VAT rate and amount, justifies the deduction. At a restaurant or a hotel, ask for an invoice in the company’s name; the “invoice in the company’s name” column on page 2 is there to check it.',
      },
      {
        question: 'How are mileage allowances calculated in France?',
        answer:
          'Add up the business kilometres driven with your own vehicle, then apply the French tax mileage scale of the year, according to the type of vehicle and its tax horsepower. The Urssaf publishes it on its “Indemnités kilométriques” page, and impots.gouv.fr offers a simulator. The scale is read on the distance of the whole year, in three bands, one of which adds a fixed amount: a single rate applied each month is an advance, which the yearly summary of the Excel file lets you adjust at year end.',
      },
      {
        question: 'Why does the Excel file contain no rate per kilometre?',
        answer:
          'Because the scale changes with the year and depends on your vehicle: a hard-coded rate would be wrong for some users, or as soon as the next year. You type it in a yellow cell, and while it is empty the Excel file reminds you instead of calculating an invented amount. Same for meals: the limits of flat-rate allowances are revised every year, read them on urssaf.fr.',
      },
      {
        question: 'Can the VAT on an expense report be recovered?',
        answer:
          'Yes for a business liable for VAT, on two conditions: the expense is made for the business, and an invoice shows the VAT. Some expenses are excluded: lodging for company officers and staff, and passenger transport whatever the means (train, plane, taxi, ride-hailing). For fuel, impots.gouv.fr states that VAT is recoverable at 80% for a passenger car and at 100% for a commercial vehicle. Under the VAT franchise, nothing is recovered.',
      },
      {
        question: 'Can a SARL manager or an SAS president file an expense report?',
        answer:
          'Yes, but at actual cost. The Urssaf excludes from flat-rate allowances self-employed company officers, minority or equal SARL managers, CEOs of an SA and presidents and officers of an SAS: their expenses are assessed at their actual value. In practice, every line of their report has its receipt, and the status box at the top of the template reminds the approver.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'Three sheets. “Note de frais”: you choose the month and type the expenses with their amount incl. VAT and their VAT; the amount excl. VAT, the sub-totals by type and the balance to refund are calculated, and the “Contrôle” column flags an incomplete line or a date outside the month. “Trajets véhicule perso”: the trips, the total kilometres and, once the rate is typed in, the allowance of the month, carried into the report. “Récap annuel”: one month per line, the year total and the gap with the yearly scale. Each sheet prints on one A4 page.',
      },
      {
        question: 'And when expense reports pile up?',
        answer:
          'An Excel template is enough for a few reports a month. With several technicians on the road, receipts get lost in the vans, kilometres are rebuilt from memory and reports all arrive on the last day: that is where a tool in which the technician photographs the receipt and logs the trip from the job saves time. If your teams work at customers’ sites, the test on the tool page tells you which field service software to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When receipts arrive crumpled at the end of the month, kilometres get recounted on Google Maps and each report needs three back-and-forths before approval, a tool that keeps the photo of the receipt and the trip with the job gives you hours back. Describe your organisation to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare field service software',
  },
}
