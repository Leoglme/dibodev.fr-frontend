import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  DRIVING_SCHOOL_CONTRACT_LAW_SOURCE,
  DRIVING_SCHOOL_CONTRACT_TEMPLATE_UPDATED_AT,
  DRIVING_SCHOOL_TRAINING_HOURS_SOURCE,
  DRIVING_SCHOOL_TRAINING_RECORD_SOURCE,
} from '~/core/constants/freeTemplates/drivingSchoolContract/pageShared'
import {
  DRIVING_SCHOOL_RULE_SOURCES,
  DRIVING_SCHOOL_TEMPLATE_PDF_PATH,
  DRIVING_SCHOOL_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/drivingSchoolSoftware/pageShared'

export const DRIVING_SCHOOL_CONTRACT_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Driving school contract: free French template (PDF + Excel)',
    description:
      'Driving school contract: free French template in PDF and Excel, based on the standard contract in force since 2025. Initial assessment, prices, student record.',
    inLanguage: 'en',
    schemaAbout: 'French driving school training contract and student record template',
  },
  breadcrumbLabel: 'Driving school contract',
  shareImage: {
    titleLines: ['Driving school contract', 'free French template'],
    highlight: 'Driving school contract',
    subtitle:
      'Training contract and student record in PDF and Excel, initial assessment, prices, payment schedule, hours',
    badge: 'Free, no sign-up',
    icon: 'fileText',
    alt: 'Free French driving school contract template: training contract and student record in PDF and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Driving school contract',
    titleAfter: ': free French template, PDF and Excel (+ student record)',
    reassurances: ['Contract + student record', 'Excel with hours and schedule calculated', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'A driving school training contract and a student record ready to fill in, written in French for driving schools in France, for a local school or an instructor opening their own. The contract follows the headings of the French standard contract for the B licence: initial assessment, planned hours, prices incl. VAT, payment, cancellation and termination. The student record keeps track of lessons, hours, skills worked on and tests.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I have already built driving school management software, and I read the French Highway Code and the standard contract so that the wording is up to date.',
    updatedAt: DRIVING_SCHOOL_CONTRACT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For driving schools and driving instructors in France. Two files in French, no form to fill in: the PDF prints, the Excel file calculates.',
    files: [
      {
        label: 'Download the PDF template',
        href: DRIVING_SCHOOL_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: DRIVING_SCHOOL_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, hours and schedule calculated, in French',
      },
    ],
    footnote:
      'Free to use and adapt to your school. It replaces neither the standard contract published in the French Official Journal nor the digital learner’s logbook.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A training contract and a student record, as PDF and Excel',
    intro:
      'The PDF fits on two A4 pages: the contract to sign in two copies, then the student record to fill in lesson after lesson. The Excel file holds them on three sheets: the contract amount, the payment schedule, the hours done and remaining and the tests are calculated as you type.',
    documents: [
      {
        title: 'Training contract (B licence)',
        format: 'Page 1 of the PDF, “Contrat et échéancier” sheet of the Excel file',
        items: [
          'Driving school: company name, address, trade register number, VAT number, approval number and prefecture; contract number, signing date, duration in months and end date (calculated in the Excel file)',
          'Student, legal representative if the student is a minor, internal rules attached or not, and the chosen training: manual or automatic gearbox, early learning, supervised driving, adapted vehicle',
          'Initial assessment: date, instructor and their teaching authorisation number, method used, planned number of driving hours, theory training, assessment sheet attached',
          'Price table incl. VAT, fixed for the whole contract: assessment, file and ANTS mandate fees, logbook, €30 theory test fee, lessons, package, skills review, test accompaniment, termination fee',
          'Payment (deposit, cash, per lesson, interest-free instalments, “permis à 1 € par jour” scheme), lessons cancelled within 48 working hours, termination by the student or the school, file returned free of charge',
          'Insurance, financial guarantee, quality label, consumer mediator, signatures of the student, the legal representative and the school; the Excel file adds the payment schedule, the balance due and a check of the accompaniment cap',
        ],
      },
      {
        title: 'Student record',
        format: 'Page 2 of the PDF, “Suivi des leçons” and “Examens” sheets of the Excel file',
        items: [
          'File or NEPH number, enrolment date, hours planned in the contract, gearbox, lead instructor, formula (standard, early learning, supervised)',
          'Driving lessons: date, time, duration, type (road, simulator, track, group), instructor, skills worked on, comments, student’s initials (20 lines on the PDF, 30 in the Excel file)',
          'Totals: hours done, planned and remaining, including road and simulator, with the 20-hour minimum (13 with an automatic gearbox) calculated in the Excel file',
          'The four skills of the learner’s logbook, with the lessons where each one was worked on and what is left to review (hours per skill in the Excel file)',
          'Tests and reviews: theory test (code), skills reviews, end-of-training certificate, practical test, accompaniment charged',
          'Extra hours agreed in writing, reminder that the record is kept for three years, and of the digital learner’s logbook',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the contract and the student record in four steps',
    intro:
      'In the Excel file, only the white cells are typed in. The contract amount, the payment schedule, the remaining hours and the total per skill are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Your school, once and for all',
        description:
          'Fill in the header (company name, address, trade register number, approval number), your insurance, your consumer mediator and your prices incl. VAT, then save the file as your template. Every new student starts from that copy.',
      },
      {
        label: 'Step 2',
        title: 'The initial assessment, before signing',
        description:
          'Carry out the initial assessment, then write down its date, the instructor and their teaching authorisation number, the method used and the planned number of driving hours. Attach the assessment sheet: the contract is only signed afterwards.',
      },
      {
        label: 'Step 3',
        title: 'Prices, payment and signature',
        description:
          'Give the number of lessons or hours on each line: the Excel file calculates the contract amount. For instalments, type the deposit, the number of instalments and the date of the first one: the schedule fills itself in. Two signed copies, one for the student.',
      },
      {
        label: 'Step 4',
        title: 'The student record, lesson after lesson',
        description:
          'After each lesson, write down the time, the type of lesson, the instructor and the skill worked on: hours done, hours remaining and the total per skill follow. On the “Examens” sheet, write down the dates, the results and the accompaniment charged.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The wording the template already provides',
    intro:
      'Six French rules on driving lessons go through the contract and the student record. The template keeps a box, a line or a clause for each of them.',
    facts: [
      {
        contextLabel: 'French Highway Code, art. L213-2',
        title: 'A written contract, after an initial assessment',
        text: 'Paid driving lessons require a written contract, signed at the school or remotely, and only after an initial assessment of the student. Presenting the student at the test cannot be charged, and returning or transferring the file is free. The template has the assessment box and the file clause.',
        sourceName: DRIVING_SCHOOL_CONTRACT_LAW_SOURCE.name,
        sourceUrl: DRIVING_SCHOOL_CONTRACT_LAW_SOURCE.url,
      },
      {
        contextLabel: 'Since 1 January 2025',
        title: 'The standard contract, in its 2024 version',
        text: 'New contracts follow the model set by the order of 11 October 2024: duration in months, hours set by the assessment, prices incl. VAT fixed for the contract, payment, insurance and mediator; test accompaniment cannot exceed the price of one lesson hour. Page 1 follows these headings; the official text prevails.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.standardContract.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.standardContract.url,
      },
      {
        contextLabel: '20 hours minimum',
        title: 'The volume of practical training',
        text: 'For a first B licence, practical training lasts at least 20 hours, at least 15 of them on the road (10 with a simulator); 13 hours with an automatic gearbox. The contract states the hours planned by the assessment, and the Excel file compares the hours done with this minimum.',
        sourceName: DRIVING_SCHOOL_TRAINING_HOURS_SOURCE.name,
        sourceUrl: DRIVING_SCHOOL_TRAINING_HOURS_SOURCE.url,
      },
      {
        contextLabel: '48 working hours',
        title: 'Lessons cancelled too late',
        text: 'A lesson the student does not cancel at least 48 working hours ahead is not refunded, except for force majeure or a legitimate reason; the school cannot cancel within that time either (same exceptions) and reschedules or refunds a paid lesson. The clause is written out in full in the template’s contract.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.standardContract.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.standardContract.url,
      },
      {
        contextLabel: 'Effective after 15 days',
        title: 'Termination by the student',
        text: 'The student can terminate at any time (after 14 days if the contract was signed remotely), by registered letter or email: it takes effect 15 days later, at once for a legitimate reason. They pay for the services provided and get their file back free of charge; a termination fee is only possible without a legitimate reason, before practical training.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.standardContract.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.standardContract.url,
      },
      {
        contextLabel: 'Kept for three years',
        title: 'The training record',
        text: 'Before training starts, the school opens a training record in the student’s name and keeps it for three years; a copy follows the student if they change school. The text does not set its content: page 2 of the template offers one, alongside the digital learner’s logbook.',
        sourceName: DRIVING_SCHOOL_TRAINING_RECORD_SOURCE.name,
        sourceUrl: DRIVING_SCHOOL_TRAINING_RECORD_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Driving school contract: your questions',
    questions: [
      {
        question: 'Is the driving school contract template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Does this template replace the official standard contract?',
        answer:
          'No. Since 1 June 2020, a French driving school’s contract must comply with the standard contract for the B licence, and its version set by the order of 11 October 2024 applies to contracts offered since 1 January 2025. The template puts its headings and key clauses on one page, with the payment schedule and the student record. Read it next to the text published in the French Official Journal, which prevails: this template is not legal advice.',
      },
      {
        question: 'Is the initial assessment mandatory in France?',
        answer:
          'Yes. The contract can only be signed after an initial assessment of the student (article L213-2 of the French Highway Code). The contract notes its date, the instructor responsible and their teaching authorisation number, the method used (vehicle, simulator…) and the planned number of driving hours; the assessment sheet is attached. It comes first in the price table: the school sets its price.',
      },
      {
        question: 'How many driving hours should the contract plan?',
        answer:
          'The number given by the initial assessment. The legal minimum remains 20 hours of practical training for a first B licence, at least 15 of them on the road (10 with a simulator), and 13 hours with an automatic gearbox. If the planned hours are not enough, the school can offer extra hours: their number and price are agreed in writing, and the student record keeps track of them.',
      },
      {
        question: 'What if the student cancels a lesson at the last minute?',
        answer:
          'A lesson the student does not cancel at least 48 working hours ahead is not refunded, or remains due if it was not paid, except for force majeure or a legitimate reason. The other way round, the school cannot cancel less than 48 working hours ahead, with the same exceptions, and must reschedule or refund a paid lesson. The template’s contract spells it out.',
      },
      {
        question: 'How does a student terminate a driving school contract?',
        answer:
          'By registered letter or email to the school, at any time if the contract was signed at the school, after 14 days if it was signed remotely. Termination takes effect 15 days later, or at once with a legitimate reason. The student pays for the services already provided, pro rata for a package, and gets their file back free of charge. A termination fee is only possible without a legitimate reason and before practical training starts.',
      },
      {
        question: 'Does the student record replace the learner’s logbook?',
        answer:
          'No. The digital learner’s logbook has been mandatory in France since 1 January 2024: it sets the training objectives and records the driving hours and the training given. The student record is your internal document: the order of 22 December 2009 asks you to keep one in each student’s name for three years. The template uses the four skills of the logbook to note what was worked on in each lesson.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'On the “Contrat et échéancier” sheet, you type the price and the quantity of each service: the contract amount is calculated, then the payment schedule from the deposit, the number of instalments and the date of the first one. On “Suivi des leçons”, the start and end times give each lesson’s duration, the hours done and remaining, the total per skill and the 20-hour benchmark. “Examens” keeps dates and results, and flags an accompaniment charged above one lesson hour.',
      },
      {
        question: 'And when the students pile up?',
        answer:
          'An Excel template is enough for a few students at a time. Beyond that, French driving school software keeps the schedule, hours and payments of each student, and several also handle the digital logbook: Drivea is free, Ma Gestion Zen costs €39 excl. VAT per month (prices checked at the end of September 2026). If your organisation falls outside their frame (several branches, booking and payment on your website), the test on the tool page tells you what to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When contracts, each student’s hours and payments get copied from one file to the next, and the instructors’ schedule lives on a whiteboard, a tool that links them gives you hours back. Describe your driving school to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare driving school software',
  },
}
