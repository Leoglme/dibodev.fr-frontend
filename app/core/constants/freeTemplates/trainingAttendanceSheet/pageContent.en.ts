import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { TRAINING_ATTENDANCE_SHEET_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/trainingAttendanceSheet/pageShared'
import {
  IMMEDIATE_ADVANCE_PROVIDER_SOURCE,
  QUALITY_FRAMEWORK_DECREE_SOURCE,
  SELF_FUNDED_TRAINING_CONTRACT_SOURCE,
  TRAINING_ACTIVITY_DECLARATION_SOURCE,
  TRAINING_CENTER_TEMPLATE_PDF_PATH,
  TRAINING_CENTER_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/trainingCenterSoftware/pageShared'

export const TRAINING_ATTENDANCE_SHEET_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Training attendance sheet: free French template PDF + Excel',
    description:
      'Training attendance sheet: free French template in PDF and Excel. Signature per half-day, weekly register, hours and balances calculated. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French attendance sheet and hours tracking template for training organisations and teaching centres',
  },
  breadcrumbLabel: 'Training attendance sheet',
  shareImage: {
    titleLines: ['Attendance sheet', 'free French template'],
    highlight: 'Attendance sheet',
    subtitle: 'Half-day attendance sheet and weekly register as PDF, hours and balances calculated in Excel, in French',
    badge: 'Free, no sign-up',
    icon: 'clipboard',
    alt: 'Free French training attendance sheet template: half-day attendance sheet and weekly register as PDF, hours tracking in Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Training attendance sheet',
    titleAfter: ': free French template (+ hour tracking)',
    reassurances: [
      'Attendance sheet + weekly register',
      'Excel with hours and balances calculated',
      'No sign-up, no email',
    ],
    aboutTitle: 'About the template',
    description:
      'An attendance sheet signed per half-day, for a training organisation or an independent trainer, and a weekly register for the regular classes of a tutoring centre, a music or language school, written in French for the French market. The PDF carries the activity declaration number (NDA), the morning and afternoon boxes and the trainer’s countersignature. The Excel file counts the hours: class schedule, each student’s remaining package hours, hours completed per trainee for the certificate of completion and the BPF, France’s yearly teaching and financial report.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the 2026 Qualiopi framework and the French rules on the activity declaration so that the sheet’s benchmarks are up to date.',
    updatedAt: TRAINING_ATTENDANCE_SHEET_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For training organisations, independent trainers, tutoring centres and music schools working in France. Two files in French, no form to fill in: the PDF gets signed, the Excel file counts the hours.',
    files: [
      {
        label: 'Download the PDF template',
        href: TRAINING_CENTER_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: TRAINING_CENTER_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, hours and balances calculated, in French',
      },
    ],
    footnote:
      'Free to use and adapt to your organisation and your funders. It does not replace the French Ministry of Labour’s certificate of completion.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'Two sheets to sign as PDF, three tracking sheets in Excel',
    intro:
      'The PDF holds two A4 pages: the half-day attendance sheet, then the weekly register for regular classes. The Excel file does not repeat those pages: it adds three tracking sheets where durations, balances and hours per trainee are calculated as soon as you type a class.',
    documents: [
      {
        title: 'Attendance sheet',
        format: 'Page 1 of the PDF; its hours are carried over to the “Heures par stagiaire” sheet of the Excel file',
        items: [
          'Training organisation (name, address), activity declaration number and regional prefect, with the wording “Cet enregistrement ne vaut pas agrément de l’État” (registration is not state approval)',
          'Course title, session or group, trainer, dates, place (address, or tool used remotely), morning and afternoon times, on-site, remote or blended delivery',
          'Table of 12 lines: trainee (surname, first name), one morning and one afternoon box for day 1 and day 2, with each day’s date, and hours attended',
          'In each box, two marks to tick: A (absent) and R (late arrival or early departure); at the bottom, the trainer’s name and signature for each half-day',
          'Observations (late arrivals, early departures, remote connection, incidents) and benchmarks: funders’ practice, Qualiopi framework, Ministry of Labour certificate of completion',
        ],
      },
      {
        title: 'Weekly register',
        format:
          'Page 2 of the PDF, for regular classes; its hours are carried over to the “Heures par élève” sheet of the Excel file',
        items: [
          'Organisation (name, address, phone), week starting, class, level or group, teacher, room or place',
          'Table of 14 lines: student (surname, first name), one box per day from Monday to Saturday, hours of the week, package balance; teacher’s initials under each column',
          'In each day box: the class duration at the top (e.g. 1 h 30), then P (present), A (notified absence) or N (unnotified absence)',
          'Two boxes, cancelled or rescheduled classes (date, student, reason, new date) and messages to families (progress, homework, appointments, documents to provide)',
          'Teacher’s sign-off (week checked), date carried over to the hours tracking, benchmarks on the 50% personal services tax credit and the immediate advance',
        ],
      },
      {
        title: 'Week schedule',
        format: '“Planning de la semaine”, sheet 1 of the Excel file, with no equivalent in the PDF',
        items: [
          'Week starting, teaching place, person in charge, then 24 class lines: day (list from Monday to Sunday), start and end in hh:mm, class, teacher, room, enrolled',
          'Duration of each class calculated from its start and end, correct even for a class running past midnight, and total teaching hours of the week',
          '“Alerte” column in red, “Salle déjà occupée” (room already taken) or “Prof déjà en cours” (teacher already teaching), when two classes overlap on the same day',
          'Hours per teacher (number of classes, hours of the week) and room occupancy (hours taken), 8 lines each',
        ],
      },
      {
        title: 'Hours per student',
        format: '“Heures par élève”, sheet 2 of the Excel file',
        items: [
          'Two settings: the balance alert threshold (2 hours by default) and whether unnotified absences are deducted from the package (Oui or Non)',
          'Class log of 60 lines: date, student, class or subject, teacher, duration in decimal hours (1.5 for 1 h 30), status “Présent”, “Absent prévenu” or “Absent non prévenu”, remark',
          'Packages and balances on 15 lines: student, plan or package, hours bought, then hours done, absences, absence hours deducted and balance calculated from the log',
          'Alert per student: “Forfait dépassé : à facturer” (package exceeded, to invoice) when the balance is negative, “Moins de 2 h : prévenir la famille” (under 2 hours, tell the family) below the threshold, with the line in red',
        ],
      },
      {
        title: 'Hours per trainee',
        format: '“Heures par stagiaire”, sheet 3 of the Excel file, in landscape',
        items: [
          'Course title, trainer, dates, activity declaration number, funder(s), and adjustable planned hours per half-day (3.5 hours by default)',
          'Table of 12 lines: trainee, company or funder, then morning and afternoon of days 1 to 5 with each day’s date; 0 = absent (box in red), empty = no class planned',
          'Per trainee: hours completed, hours planned, attendance rate in % and half-days of absence calculated; at the bottom, those present per half-day',
          '“Pour le certificat de réalisation et le BPF” block: trainees in the session, hours completed and hours planned, all trainees',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the attendance sheet in five steps',
    intro:
      'The PDF is filled in by hand and signed on the spot. In the Excel file, only the white cells are typed in: durations, balances and totals are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Your organisation and its declaration number',
        description:
          'Fill in the organisation’s name and address, the activity declaration number and the regional prefect who registered it; the wording “ne vaut pas agrément de l’État” is already printed. Save that copy as your template.',
      },
      {
        label: 'Step 2',
        title: 'The session',
        description:
          'Course title, session or group, trainer, dates, place (or the tool used remotely), morning and afternoon times. Tick the delivery mode: on-site, remote or blended.',
      },
      {
        label: 'Step 3',
        title: 'The trainees and the dates',
        description:
          'One line per trainee, surname and first name, up to 12 per sheet. Write each day’s date at the top of the columns; for a longer session, print one sheet per two days.',
      },
      {
        label: 'Step 4',
        title: 'One signature per half-day',
        description:
          'Each trainee signs the morning box and the afternoon box, not at the end of the session. Tick A when absent, R for a late arrival or early departure, and note the time in the observations. The trainer countersigns at the bottom of each column.',
      },
      {
        label: 'Step 5',
        title: 'Carrying the hours over to Excel',
        description:
          'Carry each trainee’s hours over to the “Heures par stagiaire” sheet (0 for an absence, empty cell when no class): hours completed, hours planned, attendance rate and the totals for the certificate of completion and the BPF are calculated on their own. For regular classes, the log of the “Heures par élève” sheet plays the same role.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The benchmarks the template already provides',
    intro:
      'Four French rules for training and classes go through the attendance sheet and the hours tracking. The template keeps a box or a line for each of them.',
    facts: [
      {
        contextLabel: 'Within 3 months, then every year',
        title: 'The activity declaration number and the yearly BPF',
        text: 'Declare your activity within 3 months of the first training agreement or contract signed; its number (NDA) then appears on your agreements, quotes, invoices and contracts. Every year, the teaching and financial report (BPF) keeps it valid. The attendance sheet carries that number, and the Excel file adds up the hours per trainee for the BPF.',
        sourceName: TRAINING_ACTIVITY_DECLARATION_SOURCE.name,
        sourceUrl: TRAINING_ACTIVITY_DECLARATION_SOURCE.url,
      },
      {
        contextLabel: 'Since 1 November 2026',
        title: 'Qualiopi does not mention attendance sheets: funders do',
        text: 'The decree of 1 August 2026 sets 7 criteria and 33 indicators for Qualiopi, France’s quality certification for training providers. The text does not mention attendance sheets: they are the proof of completion that funders ask for, and signing per half-day is their practice, not a written obligation. For distance modules, indicator 19 asks for proof that they are actually followed: the sheet provides the “À distance” box and the connection observations.',
        sourceName: QUALITY_FRAMEWORK_DECREE_SOURCE.name,
        sourceUrl: QUALITY_FRAMEWORK_DECREE_SOURCE.url,
      },
      {
        contextLabel: 'Articles L6353-3 to L6353-6',
        title: 'Self-funded trainees: 10 days to withdraw',
        text: 'The contract is signed before final enrolment and before any payment. The trainee has 10 days to withdraw by registered letter; nothing is collected before that period ends, then 30% of the price at most, with the rest spread out. The attendance sheet keeps the record of the hours actually attended that you then invoice.',
        sourceName: SELF_FUNDED_TRAINING_CONTRACT_SOURCE.name,
        sourceUrl: SELF_FUNDED_TRAINING_CONTRACT_SOURCE.url,
      },
      {
        contextLabel: 'Home tutoring',
        title: 'The immediate advance needs compatible software',
        text: 'To offer families the immediate advance of their tax credit, your business must be declared or approved for personal services, up to date with its social and tax obligations, free of any undeclared-work offence for 5 years, and use software compatible with the API Tiers de prestation of the Urssaf, the French social contributions agency. The weekly register does not make the advance, but its hours are used to invoice the month and prepare the yearly tax certificate.',
        sourceName: IMMEDIATE_ADVANCE_PROVIDER_SOURCE.name,
        sourceUrl: IMMEDIATE_ADVANCE_PROVIDER_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Training attendance sheet: your questions',
    questions: [
      {
        question: 'Is the attendance sheet template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Is signing per half-day mandatory in France?',
        answer:
          'No, no text says so. The Qualiopi framework in force since 1 November 2026 does not mention attendance sheets: they are the proof of completion that funders ask for, and most expect one signature in the morning and one in the afternoon. The certificate of completion, for its part, follows the template published by the French Ministry of Labour: the sheet helps you fill it in, it does not replace it.',
      },
      {
        question: 'Does the sheet suit tutoring or a music school?',
        answer:
          'Yes, that is page 2 of the PDF: one student per line, one box per class from Monday to Saturday, the hours of the week and the package balance, with the teacher’s initials. In the Excel file, the schedule flags double bookings of a room or a teacher, and the tracking per student alerts you when fewer than 2 hours are left. In France, a school giving leisure classes to individuals has no activity declaration to make.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'Three sheets. “Planning de la semaine”: you type the day, the start and end times, the teacher and the room; the duration, the week’s total, the hours per teacher and the overlap alerts are calculated. “Heures par élève”: you keep the class log (duration, status “Présent”, “Absent prévenu” or “Absent non prévenu”) and each package balance updates. “Heures par stagiaire”: you type the hours of each half-day, and the sheet gives the hours completed, the attendance rate and the totals for the certificate of completion and the BPF.',
      },
      {
        question: 'And when the sessions pile up?',
        answer:
          'A paper sheet is enough for a few sessions a month. Beyond that, Edusign’s online attendance starts at €29 per month paid yearly, Digiforma handles sessions, digital attendance and the BPF from €49 excl. VAT per month, and Platformeasy invoices tutoring with the immediate advance from €39 excl. VAT per month. If your organisation falls outside their frame (training and tutoring in the same organisation, several funders), the test on the tool page tells you what to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When signed sheets, the schedule and each trainee’s hours get copied from one file to the next, a tool that chains them gives you hours back. Describe your business to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare training centre software',
  },
}
