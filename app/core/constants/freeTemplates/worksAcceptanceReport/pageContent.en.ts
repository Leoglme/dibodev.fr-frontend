import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  GOOD_WORKING_WARRANTY_SOURCE,
  RETENTION_MONEY_SOURCE,
  TEN_YEAR_LIABILITY_SOURCE,
  WORKS_ACCEPTANCE_REPORT_TEMPLATE_PDF_PATH,
  WORKS_ACCEPTANCE_REPORT_TEMPLATE_UPDATED_AT,
  WORKS_ACCEPTANCE_REPORT_TEMPLATE_XLSX_PATH,
  WORKS_ACCEPTANCE_SOURCE,
} from '~/core/constants/freeTemplates/worksAcceptanceReport/pageShared'
import { BUILDER_WARRANTIES_SOURCE } from '~/core/constants/tools/carpentrySoftware/pageShared'

export const WORKS_ACCEPTANCE_REPORT_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Works acceptance report: free French template (PDF + Excel)',
    description:
      'Works acceptance report: free French template in PDF and Excel, with or without reservations, plus their clearance report and warranty dates. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French works acceptance report and reservation clearance report template',
  },
  breadcrumbLabel: 'Works acceptance report',
  shareImage: {
    titleLines: ['Works acceptance report', 'free French template'],
    highlight: 'acceptance report',
    subtitle: 'Acceptance report with or without reservations and clearance report, in PDF and Excel, dated warranties',
    badge: 'Free, no sign-up',
    icon: 'clipboard',
    alt: 'Free French works acceptance report template: acceptance report and reservation clearance report in PDF and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Works acceptance report',
    titleAfter: ': free French template, PDF and Excel (+ clearance of reservations)',
    reassurances: ['Acceptance report + clearance report', 'Excel with dated warranties', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'A works acceptance report (procès-verbal de réception) and a reservation clearance report ready to fill in, written in French for the French market, for every building trade: mason, plumber, electrician, joiner, painter, roofer… The acceptance report is signed at the end of the job, after a site visit with the client, with or without reservations (snags). The clearance report then records, by mutual agreement, that each defect noted has been put right. The acceptance date starts the French builder’s warranties: the Excel file calculates their end dates.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the French Civil Code articles on acceptance and warranties, and the French law on retention money, so that the wording is accurate.',
    updatedAt: WORKS_ACCEPTANCE_REPORT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For builders and tradespeople working in France, and for homeowners taking over their works. Two files in French, no form to fill in: the PDF prints, the Excel file tracks the reservations and calculates the dates.',
    files: [
      {
        label: 'Download the PDF template',
        href: WORKS_ACCEPTANCE_REPORT_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: WORKS_ACCEPTANCE_REPORT_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, calculated dates, in French',
      },
    ],
    footnote: 'Free to use and adapt to your job. It does not replace the advice of a lawyer or of your insurer.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'An acceptance report, a clearance report and a warranty calendar',
    intro:
      'The PDF holds both reports on two A4 pages, to fill in by hand during the visit. The Excel file holds them on three sheets: the report and its reservations, the clearance follow-up with the date and status of each reservation, and the warranty calendar calculated from the acceptance date.',
    documents: [
      {
        title: 'Works acceptance report',
        format: 'Page 1 of the PDF, “PV et réserves” sheet of the Excel file',
        items: [
          'Company header (name, address, SIREN or SIRET) and ten-year liability insurance (insurer, policy number), report number, date of the joint visit, acceptance date, reference quote or contract',
          'The parties: project owner (the client) and their representative, contractor, project manager or architect if there is one, people present at the visit',
          'The site and the contract: address, work package or trade, nature of the works, acceptance date and amount incl. VAT of the quote, amendments, start and end of the works',
          'Project owner’s decision in 3 boxes: acceptance without reservations, with the listed reservations, or postponed with the date of a new visit; in the Excel file, a warning flags a decision that does not match the list',
          '10 reservation lines (12 in the Excel file): number, location, reservation noted, photo number, company in charge of the repair, agreed clearance date; the Excel file calculates the date from a number of days',
          'Retention money if the contract provides for it (5% at most, amount, release date), the three dated warranties, documents handed over, signatures of the client, the contractor and the project manager, French Civil Code wording',
        ],
      },
      {
        title: 'Reservation clearance report',
        format: 'Page 2 of the PDF, “Levée des réserves” sheet of the Excel file',
        items: [
          'Reminder of the acceptance report (number, acceptance date), date of the clearance visit, project owner, contractor, site address, people present',
          'One line per reservation, with its number from the acceptance report: reservation, work done, agreed clearance date, actual clearance date, client’s agreement; the Excel file brings in the reservations of the first sheet on its own',
          'Status calculated in the Excel file (cleared, to clear, late) and days late, at the date of the clearance visit or, failing that, at today’s date',
          'Conclusion: all reservations cleared on a given date, or reservations still to clear with a new agreed deadline; the Excel file counts the cleared, open and late reservations',
          'Defects reported after acceptance, during the one-year completion warranty: date of the registered letter, defect, expected and actual repair; the Excel file checks that the report falls within the year',
          'Signatures of the client and the contractor, reminder of article 1792-6 of the French Civil Code on repairs recorded by mutual agreement',
        ],
      },
      {
        title: 'Warranty calendar',
        format: '“Calendrier des garanties” sheet of the Excel file, dates to copy on page 1 of the PDF',
        items: [
          'Acceptance date taken from the report, length of the good-working warranty in a yellow cell (2 years at least, more if the contract says so)',
          'For each warranty, what it covers, its length, its start and its end date: completion (1 year), good working order (2 years or more), ten-year liability (10 years)',
          'Release date of the retention money, one year after acceptance, when the contract provides for it',
          'Days left and status of each warranty (running or over) at today’s date',
          'A defect shows up: you type its date, and the Excel file tells you which warranties were still running that day',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the acceptance report in four steps',
    intro:
      'In the Excel file, only the white and yellow cells are typed in. The clearance dates, the status of each reservation and the end dates of the warranties are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Before the visit, the site and the contract',
        description:
          'Fill in the company header, the parties, the site address, the work package and the accepted quote, with its date and amount. Book the visit with the client, and with the project manager if there is one: acceptance is done together.',
      },
      {
        label: 'Step 2',
        title: 'During the visit, one reservation per line',
        description:
          'Walk through room by room, outside walls included. Each visible defect gets its line: where it is, what is wrong, the photo number, the company that will fix it and the agreed deadline. Whatever is not noted that day will be considered accepted.',
      },
      {
        label: 'Step 3',
        title: 'The decision, the date, the signatures',
        description:
          'The client ticks without reservations, with reservations or acceptance postponed. Type the acceptance date in the yellow cell of the Excel file: the clearance dates, the warranty end dates and the retention release date follow. Each party signs both copies and keeps one.',
      },
      {
        label: 'Step 4',
        title: 'Clearing the reservations, one by one',
        description:
          'After each repair, write on the “Levée des réserves” sheet the work done, the date and the client’s agreement: the status turns to “Levée” (cleared). When everything is fixed, print page 2, tick “all reservations are cleared” and have it signed.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The rules the template already follows',
    intro:
      'Six rules of the French Civil Code and of French law go through acceptance and the clearance of reservations. The template keeps a box, a date or a line for each of them; it does not replace a lawyer’s advice in a dispute.',
    facts: [
      {
        contextLabel: 'French Civil Code, art. 1792-6',
        title: 'Acceptance is declared together, with or without reservations',
        text: 'It is the act by which the project owner accepts the works, with or without reservations. It is done amicably or, failing that, in court, and always jointly, with the contractor and the client. The report dates the visit, names those present and records the client’s decision.',
        sourceName: WORKS_ACCEPTANCE_SOURCE.name,
        sourceUrl: WORKS_ACCEPTANCE_SOURCE.url,
      },
      {
        contextLabel: 'On the day of the visit',
        title: 'A visible defect that is not noted is accepted',
        text: 'If a defect is not reported in the acceptance report, it is considered accepted: the client can no longer ask for its repair under the warranties. A defect that was not visible that day may fall under a warranty depending on its nature. Hence the ten reservation lines of the template, with the photo and the company in charge of the repair.',
        sourceName: BUILDER_WARRANTIES_SOURCE.name,
        sourceUrl: BUILDER_WARRANTIES_SOURCE.url,
      },
      {
        contextLabel: '1 year from acceptance',
        title: 'Reservations are cleared within a deadline agreed together',
        text: 'The completion warranty requires the contractor to repair the reservations of the report and the defects reported in writing during the year, normal wear and tear or use excluded. The repair deadline is set by mutual agreement, and the repair is recorded the same way, or failing that in court. Without agreement or without repair in time, the client may, after a formal notice left unanswered, have the work done at the contractor’s cost and risk.',
        sourceName: WORKS_ACCEPTANCE_SOURCE.name,
        sourceUrl: WORKS_ACCEPTANCE_SOURCE.url,
      },
      {
        contextLabel: '2 years at least',
        title: 'The good-working warranty, known as the two-year warranty',
        text: 'The equipment of the building that can be removed without damaging the structure has a good-working warranty of at least two years from acceptance. The Excel calendar counts 2 years by default, and the longer length your contract provides for if you type it in.',
        sourceName: GOOD_WORKING_WARRANTY_SOURCE.name,
        sourceUrl: GOOD_WORKING_WARRANTY_SOURCE.url,
      },
      {
        contextLabel: '10 years from acceptance',
        title: 'The ten-year liability also runs from acceptance',
        text: 'Damage that compromises the soundness of the building, or makes it unfit for its purpose, engages the contractor for ten years from the acceptance of the works. The report sets that date in writing, and the Excel file calculates the end of the ten years.',
        sourceName: TEN_YEAR_LIABILITY_SOURCE.name,
        sourceUrl: TEN_YEAR_LIABILITY_SOURCE.url,
      },
      {
        contextLabel: 'If the contract provides for it',
        title: 'Retention money: 5% at most, released after one year',
        text: 'The client may withhold up to 5% of the payments to secure the repair of the reservations. The sum is deposited with a third party accepted by both sides, unless the contractor provides a guarantee from a financial institution. One year after acceptance, with or without reservations, it goes back to the contractor, unless a reasoned objection is sent by registered letter. The template calculates the amount and the release date.',
        sourceName: RETENTION_MONEY_SOURCE.name,
        sourceUrl: RETENTION_MONEY_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Works acceptance report: your questions',
    questions: [
      {
        question: 'Is the works acceptance report template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Is an acceptance report mandatory in France?',
        answer:
          'The French Civil Code sets no form, but it makes acceptance the starting point of the warranties and requires it to be declared jointly, amicably or, failing that, in court. A report dated and signed by the client and the contractor, in two copies, keeps the proof: the date, those present, the decision and the reservations. Its date starts the one-year completion warranty and the other warranties.',
      },
      {
        question: 'What happens if a defect is not noted in the report?',
        answer:
          'If it was visible on the day of acceptance, it is considered accepted: the client can no longer ask for its repair under the warranties. A defect that was not visible may fall under a warranty depending on its nature: completion within the year, good working order or ten-year liability. Hence the point of doing the visit together, room by room, and photographing each reservation.',
      },
      {
        question: 'How long does the contractor have to clear the reservations?',
        answer:
          'French law sets no length: the deadline is agreed between the client and the contractor, and the template keeps a date for each reservation. Without agreement, or if the repair is not done in time, the client may, after a formal notice left unanswered, have the work done at the contractor’s cost and risk. If it has to go to court, Service-Public points out that this is within the year of the completion warranty.',
      },
      {
        question: 'What is the reservation clearance report for?',
        answer:
          'It records, by mutual agreement, that the reservations have been put right: that is what article 1792-6 of the French Civil Code provides for the work under the completion warranty. It carries the numbers of the acceptance report, the clearance date and the client’s agreement, and states whether everything is cleared or what is left, with a new deadline. For the contractor, it is the proof that the repairs are done; for the client, the written list of what is still to fix.',
      },
      {
        question: 'What is the 5% retention money?',
        answer:
          'A sum the client may withhold from the payments, if the contract provides for it, to secure the repair of the reservations made at acceptance: 5% at most (French law of 16 July 1971). It is deposited with a third party accepted by both sides, unless the contractor provides a guarantee from a financial institution instead. One year after acceptance, with or without reservations, it goes back to the contractor, unless a reasoned objection is sent by registered letter.',
      },
      {
        question: 'Completion, two-year and ten-year warranties: what is the difference?',
        answer:
          'All three start on the acceptance date. The completion warranty (1 year) covers the reservations of the report and the defects reported in writing during the year. The good-working warranty, known as the two-year warranty (at least 2 years), covers the equipment that can be removed without damaging the structure, such as a hot water tank. The ten-year liability (10 years) covers what compromises the soundness of the building or makes it unfit for its purpose; Service-Public lists foundations, pipes, door and window frames or built-in wiring.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'Three sheets. In “PV et réserves”, you type the acceptance date in the yellow cell, the client’s decision and the reservations with their deadline in days: the clearance date is calculated, and a warning flags a decision that does not match the list. “Levée des réserves” brings in each reservation; you note the clearance date and the client’s agreement, and the status (cleared, to clear, late) and the days late are calculated. “Calendrier des garanties” gives the end date and days left of each warranty, the retention release date, and tells you which warranties were still running on the date of a defect. Each sheet prints on one A4 page.',
      },
      {
        question: 'And when jobs and reservations pile up?',
        answer:
          'An Excel template is enough for a few handovers a month. Beyond that, you have to find the right photo, warn the right subcontractor and chase at the right date, job after job: that is where software that keeps each reservation with its photo, its company and its deadline saves time. If you run a joinery business, the test on the tool page tells you which software to choose, reservations after fitting included.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When reservations get written in a notebook, sent as photos by text message and chased from memory, job after job, a tool that keeps them with their photo, their company and their deadline gives you hours back. Describe your jobs to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare joinery software',
  },
}
