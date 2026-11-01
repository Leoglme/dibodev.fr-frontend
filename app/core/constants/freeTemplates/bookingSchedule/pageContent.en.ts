import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { BOOKING_SCHEDULE_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/bookingSchedule/pageShared'
import {
  CANOE_KAYAK_SAFETY_SOURCE,
  LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE,
  LEISURE_BOOKING_TEMPLATE_PDF_PATH,
  LEISURE_BOOKING_TEMPLATE_XLSX_PATH,
  PAID_SPORTS_INSTRUCTOR_SOURCE,
  SPORTS_FACILITY_DISPLAY_SOURCE,
} from '~/core/constants/tools/leisureBookingSoftware/pageShared'

export const BOOKING_SCHEDULE_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Leisure booking schedule: free French Excel template',
    description:
      'Leisure booking schedule: free French Excel template, places and balances calculated, with a registration form and an emergency chart in PDF. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French booking schedule, registration form and emergency chart template for leisure activities',
  },
  breadcrumbLabel: 'Booking schedule',
  shareImage: {
    titleLines: ['Booking schedule', 'free French template'],
    highlight: 'Booking schedule',
    subtitle: 'Slots and deposits planner in Excel, registration form and emergency chart in PDF, written in French',
    badge: 'Free, no sign-up',
    icon: 'tent',
    alt: 'Free French booking schedule template for leisure activities: slots and deposits planner in Excel, registration form and emergency chart in PDF, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Leisure booking schedule',
    titleAfter: ': free French Excel template (+ registration form)',
    reassurances: [
      'Schedule + registration form + emergency chart',
      'Excel with places and balances calculated',
      'No sign-up, no email',
    ],
    aboutTitle: 'About the template',
    description:
      'A season booking schedule, a registration form and an emergency chart ready to fill in, written in French for leisure businesses in France: treetop adventure, escape game, water sports centre, riding school, karting or leisure equipment hire. The Excel file tracks time slots, bookings and advance payments, instructors and equipment checks. The PDF is signed at reception, with the “can swim” certificate and a parent’s permission for a minor, and the emergency chart is displayed on the premises.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. During my work-study years at Izidoor, from 2023 to 2025, I built the booking platform of around thirty sports and leisure businesses, and I read the French rules on arrhes, instructors and first aid so that the template’s benchmarks are up to date.',
    updatedAt: BOOKING_SCHEDULE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For treetop adventure parks, escape games, water sports centres, riding schools, karting tracks and leisure equipment hire working in France. Two files in French, no form to fill in: the PDF prints, the Excel file calculates places left, balances and alerts.',
    files: [
      {
        label: 'Download the PDF template',
        href: LEISURE_BOOKING_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: LEISURE_BOOKING_TEMPLATE_XLSX_PATH,
        format: 'Excel, 4 sheets, places, balances and alerts calculated, in French',
      },
    ],
    footnote:
      'Free to use, to adapt with your sports federation and your insurer. It does not replace a lawyer’s review of your terms of sale.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'Four tracking sheets in Excel, two pages to sign or display in PDF',
    intro:
      'The Excel file holds the season on four linked sheets: time slots, bookings and deposits, instructors and equipment checks. The slot number and the instructor’s name make the link, and places left, balances, hours and alerts are calculated as soon as you type a line. The PDF does not repeat these sheets: it holds on two A4 pages what gets signed or displayed, the registration and briefing form, then the emergency organisation chart.',
    documents: [
      {
        title: 'Time slot schedule',
        format: 'Sheet “Créneaux” of the Excel file (1 of 4), no page in the PDF',
        items: [
          'Season or week, site or centre, manager, then one slot per line over 60 lines: number (C01, C02…), date, activity, start and end in hh:mm, duration calculated',
          'Capacity in places, participants calculated from the “Réservations et acomptes” sheet (adults and children, cancelled bookings left out), places left in red when they drop below zero, fill rate',
          'Instructor picked from the list of the “Moniteurs” sheet, equipment assigned, weather of the slot: OK, to watch or cancelled, with the matching colour',
          'Total for the period (places, participants, places left, fill rate) and number of slots cancelled for the weather',
        ],
      },
      {
        title: 'Bookings and deposits',
        format: 'Sheet “Réservations et acomptes” of the Excel file (2 of 4), no page in the PDF',
        items: [
          'Table of the three French VAT rates of leisure at the top of the sheet, 5.5, 10 and 20% with the activities of each (BOFiP), reused in the list of the VAT column',
          'One line per booking over 150 lines: booked on, customer, phone, slot number (the activity and the date fill in on their own), adults, children',
          'Price incl. VAT, VAT rate, amount excl. VAT and VAT calculated, paid in advance, nature (blank or “Arrhes”, otherwise “Acompte”), balance to collect calculated, payment method (card online, card on site, cash, cheque, transfer, gift voucher)',
          'Channel (website, phone, on site, platform), commission in % then in euros calculated, status (confirmed, cancelled by the customer, cancelled for the weather, postponed), amount paid back to the customer and form of the refund (refund or credit note)',
          'Summary of the period: turnover incl. VAT of the bookings not cancelled, arrhes and deposits collected, balances to collect on site, channel commissions, bookings cancelled for the weather and amounts paid back',
        ],
      },
      {
        title: 'Instructors',
        format: 'Sheet “Moniteurs” of the Excel file (3 of 4), no page in the PDF',
        items: [
          '15 lines: instructor (exact name), diploma or qualification, professional card number, date issued or renewed, phone',
          'Expiry date calculated 5 years after issue, and alert “À jour” (up to date), “À renouveler” (to renew) 90 days before expiry or “Carte expirée” (card expired), in orange or red',
          'Slots and hours counted from the “Créneaux” sheet, fees per hour typed in, fees due calculated, totals at the bottom',
          'The name written here feeds the instructor list of the schedule: one spelling, and the hours count on their own',
        ],
      },
      {
        title: 'Equipment checks',
        format: 'Sheet “Contrôles du matériel” of the Excel file (4 of 4), no page in the PDF',
        items: [
          '40 lines: equipment or PPE (harness, lanyard, helmet, buoyancy aid, kayak, kart…), serial or batch number, commissioning date, inspection body or inspector, remarks',
          'Last check, interval in months (1 to 120, the one from the manual or your inspection body), next check calculated',
          'Result (compliant, to repair, withdrawn) and alert calculated: up to date, within 30 days, overdue; a withdrawn item is struck through',
          'Count of overdue checks, and reminder of the buoyancy aid of at least 50 newtons for canoeing and kayaking',
        ],
      },
      {
        title: 'Registration and briefing form',
        format: 'Page 1 of the PDF, one form per participant, no sheet in the Excel file',
        items: [
          'Business, activity date, slot, booking number, instructor, then the participant: name, date of birth, phone, email, person to contact in case of accident, group or accompanying adult',
          'Activity to tick (treetop adventure, escape game, canoeing and kayaking, horse riding, karting or hire, other), level (beginner, has practised, experienced), course or route, points to report to the instructor',
          'Booking and payment: price incl. VAT, paid in advance, nature (arrhes by default or deposit), balance to pay on site, payment method or gift voucher number, booked through (website, phone, platform)',
          'Briefing in 6 boxes: safety instructions, equipment handed over and checked, course and limits, alarm signal, conditions of the day, site rules',
          '“Can swim 25 metres and go under water” certificate for canoeing, kayaking and sailing, legal guardian’s permission for a minor, signatures of the participant, the parent and the instructor with their professional card number',
        ],
      },
      {
        title: 'Emergency organisation chart',
        format: 'Page 2 of the PDF, to display on the premises, no sheet in the Excel file',
        items: [
          'French emergency numbers in large type (15, 18, 112), facility (name, address)',
          'On-site organisation: first-aid lead and substitute, location of the first-aid kit, the means of raising the alarm and the defibrillator, exact address and access point for the emergency services, landmark for an outdoor site, nearest hospital',
          'What to do in 4 steps: protect, alert, give first aid, inform (a serious accident is reported to the prefect)',
          'The 6 mandatory notices with a “displayed” box and an update date: diplomas and professional cards, safety texts, insurance certificate, information on reporting violence, emergency chart, prices incl. VAT of the services',
          'Documents to keep available (public accessibility register, terms of sale, consumer mediator, equipment check register), display date and manager’s signature',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the schedule in six steps',
    intro:
      'In the Excel file, only the white cells are typed in. Places left, balances, instructor hours and alerts are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Your business and the season',
        description:
          'Fill in the header of each sheet (name, address, phone), the season or week, the site and the manager, then save the file as your template. Every season starts from that copy.',
      },
      {
        label: 'Step 2',
        title: 'Instructors first, then time slots',
        description:
          'In “Moniteurs”, write each instructor with their professional card and its issue date: the expiry date and the alert appear. In “Créneaux”, one line per slot with the date, activity, start, end and capacity, and the instructor picked from the list.',
      },
      {
        label: 'Step 3',
        title: 'One line per booking',
        description:
          'Customer, phone, slot number (the activity and the date fill in on their own), adults and children, price incl. VAT and VAT rate. The participants and places left of the slot update at once.',
      },
      {
        label: 'Step 4',
        title: 'The advance, the channel and the status',
        description:
          'Write the amount paid in advance and its nature (blank = arrhes), the payment method, the channel and its commission in %: the balance to collect and the commission in euros are calculated. A booking set to “Annulée météo” leaves the participants, its balance drops to zero, and you write the amount paid back.',
      },
      {
        label: 'Step 5',
        title: 'Equipment checks',
        description:
          'For each harness, buoyancy aid, kayak or kart, type the last check, its interval in months and its result. The next check is calculated, and the alert turns orange 30 days before, red when overdue.',
      },
      {
        label: 'Step 6',
        title: 'The form signed, the chart displayed',
        description:
          'Print one form per participant: activity, level, briefing boxes ticked as you go, “can swim” certificate for canoeing, kayaking and sailing, parent’s signature for a minor. Fill in the emergency chart once, display it and tick the mandatory notices.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The benchmarks the template already provides',
    intro:
      'Four French rules for a leisure business go through its bookings, its forms and its notices. The template keeps a column, a box or a page for each of them.',
    facts: [
      {
        contextLabel: 'Consumer Code, L221-28 and L214-1',
        title: 'No withdrawal period, and an advance that counts as arrhes',
        text: 'A leisure activity booked for a set date gives no right of withdrawal. Unless the contract says otherwise, an advance payment counts as arrhes: a customer who cancels loses it, a business that backs out pays back twice the amount. The form and the Excel file record the nature of each amount, arrhes by default.',
        sourceName: LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE.name,
        sourceUrl: LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE.url,
      },
      {
        contextLabel: 'Sports Code, L212-1 and L212-11',
        title: 'Qualified, declared instructors with a valid card',
        text: 'Coaching for pay requires a diploma and a declaration to the authorities, which issue the professional card, to be renewed every 5 years. A copy of each instructor’s card and diploma is displayed on the premises. The “Moniteurs” sheet calculates the expiry date and warns 90 days ahead.',
        sourceName: PAID_SPORTS_INSTRUCTOR_SOURCE.name,
        sourceUrl: PAID_SPORTS_INSTRUCTOR_SOURCE.url,
      },
      {
        contextLabel: 'Sports Code, A322-44 and A322-3-1',
        title: 'Canoeing: cancel when the water or the weather requires it',
        text: 'The operator adapts or cancels the trip if the weather or the state of the water puts participants at risk. In canoeing, kayaking and sailing, each participant certifies they can swim 25 metres and go under water (for a minor, their legal guardian signs), otherwise they take the Pass-nautique test. The form carries the certificate, the schedule has its weather column.',
        sourceName: CANOE_KAYAK_SAFETY_SOURCE.name,
        sourceUrl: CANOE_KAYAK_SAFETY_SOURCE.url,
      },
      {
        contextLabel: 'Sports Code, R322-4 and R322-5',
        title: 'An emergency chart and mandatory notices',
        text: 'The facility has a first-aid kit, a means of raising the alarm and an emergency organisation chart on display. It also displays copies of diplomas and cards, safety texts, the insurance certificate and, since 2025, information on how to report violence. Any serious accident is reported to the prefect. Page 2 of the PDF is that chart, with the list of notices to tick.',
        sourceName: SPORTS_FACILITY_DISPLAY_SOURCE.name,
        sourceUrl: SPORTS_FACILITY_DISPLAY_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Booking schedule template: your questions',
    questions: [
      {
        question: 'Is the booking schedule template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Deposit or arrhes: what should the form and the Excel file record?',
        answer:
          'Unless the contract says otherwise, an advance payment counts as arrhes in France: a customer who cancels loses it, a business that backs out pays back twice the amount (Consumer Code, L214-1). An activity booked for a set date gives no right of withdrawal (L221-28). The template therefore leaves the nature blank for arrhes and has you tick “Acompte” only when your terms of sale say so; the Excel summary keeps the two apart. When you are the one cancelling for the weather, what you pay back depends on your terms of sale: have them reviewed by a lawyer.',
      },
      {
        question: 'Which VAT rate applies to a leisure activity booking in France?',
        answer:
          'It depends on the activity (BOFiP, BOI-TVA-LIQ-30-20-50): 10% for admission fees (treetop adventure, zip lines, escape games, laser games, paintball, leisure parks), 20% for karting, climbing, water sports, equipment hire and a lesson sold on its own, 5.5% for some equestrian activities. A package that mixes several activities follows a single rate, that of the main activity. The “Réservations et acomptes” sheet carries these three rates and calculates the amount excl. VAT and the VAT from the price incl. VAT.',
      },
      {
        question: 'What must a leisure facility display in France?',
        answer:
          'The emergency organisation chart, copies of the instructors’ diplomas and professional cards, the safety texts of your activities, the civil liability insurance certificate and, since the decree of 16 May 2025, information on how to report violence (Sports Code, R322-4 and R322-5), plus the prices incl. VAT of the services on a single document at reception. Page 2 of the PDF lists them with a “displayed” box and an update date for each document.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'You create your time slots (60 lines) and your instructors (15 lines), then one line per booking (150 lines) with its slot number, its participants, its price incl. VAT, its VAT rate and the amount paid in advance. The participants and places left of each slot, the amount excl. VAT, the balance to collect, the channel commission, the hours and fees of each instructor are calculated on their own, cancelled bookings left out. The “Contrôles du matériel” sheet (40 lines) calculates the next check and flags overdue ones. Each sheet prints on A4 landscape.',
      },
      {
        question: 'And when the bookings pile up?',
        answer:
          'An Excel file is enough as long as bookings come in by phone and at reception. Once your customers book online, leisure booking software sold in France takes over: Bookeo from €29.95 to €89.95 per month with no commission, Activiteez from €19 excl. VAT per month plus 2% online, Yoplanning at €0 plus 5% or €19 to €59 plus 2.5%, Booky from €49 to €149 excl. VAT per month. If your organisation falls outside their frame (instructors, equipment, weather, several sites), the test on the tool page tells you what to choose, commissions included.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When bookings come from the website, the phone and the platforms at the same time, and a storm forces you to postpone a whole slot and warn everyone booked, a tool that holds the schedule, the payments and the messages gives you hours back. Describe your business to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare booking software',
  },
}
