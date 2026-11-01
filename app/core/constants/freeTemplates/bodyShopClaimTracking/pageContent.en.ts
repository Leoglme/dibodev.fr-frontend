import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { BODY_SHOP_CLAIM_TRACKING_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/bodyShopClaimTracking/pageShared'
import {
  BODY_SHOP_TEMPLATE_PDF_PATH,
  BODY_SHOP_TEMPLATE_XLSX_PATH,
  CIRCULAR_ECONOMY_PARTS_SOURCE,
  FREE_CHOICE_OF_REPAIRER_SOURCE,
  GARAGE_RULES_SOURCE,
  VEHICLE_APPRAISAL_SOURCE,
} from '~/core/constants/tools/bodyShopSoftware/pageShared'

export const BODY_SHOP_CLAIM_TRACKING_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Body shop claim tracking sheet: free French template',
    description:
      'Body shop claim tracking sheet: free French template in Excel and PDF, with a body shop quote. Reused parts, insurer’s share, photo survey. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French claim tracking sheet and quote template for body shops',
  },
  breadcrumbLabel: 'Body shop claim tracking',
  shareImage: {
    titleLines: ['Claim tracking sheet', 'free French template'],
    highlight: 'Claim tracking sheet',
    subtitle:
      'Claim tracking sheet and quote in Excel and PDF, photo survey, reused parts, insurer’s share, French wording',
    badge: 'Free, no sign-up',
    icon: 'fileText',
    alt: 'Free French body shop claim tracking sheet: tracking sheet and quote with photo survey in Excel and PDF, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Body shop claim tracking sheet',
    titleAfter: ': free French template (+ quote)',
    reassurances: ['Claim tracking sheet + quote', 'Excel with calculated totals and delays', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'A body shop quote and a claim tracking sheet ready to fill in, written in French for the French market, for a sole body repairer or a small independent body and paint shop. The quote carries the panel and paint rates, the damage survey photo by photo, the nature of each part, the insurer’s share and the customer’s. The tracking sheet follows the job from the vehicle’s arrival to the insurer’s payment: appraiser, parts, paint booth, courtesy car, invoice, reminders.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the French rules on garages, reused parts, the free choice of repairer and vehicle appraisal so that the wording is up to date.',
    updatedAt: BODY_SHOP_CLAIM_TRACKING_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For body repairers and independent body and paint shops working in France. Two files in French, no form to fill in: the PDF prints, the Excel file calculates.',
    files: [
      {
        label: 'Download the PDF template',
        href: BODY_SHOP_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: BODY_SHOP_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, calculated totals and delays, in French',
      },
    ],
    footnote:
      'Free to use and adapt to your workshop. It replaces neither the standardised estimate the appraiser asks for nor the advice of your accountant.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A quote and a claim tracking sheet, as PDF and Excel',
    intro:
      'The PDF holds both documents on two A4 pages. The Excel file holds them on two sheets, with the totals, the insurer’s and customer’s shares, the quote / approval gap and the days off the road calculated, and adds a third sheet: the paint booth schedule and the courtesy car register.',
    documents: [
      {
        title: 'Body shop quote',
        format: 'Page 1 of the PDF, “Devis carrosserie” sheet of the Excel file',
        items: [
          'Body shop header (name, address, SIREN, VAT number or “VAT not applicable”), quote number, date, validity date, then the panel, paint and mechanics hourly rates posted including VAT with the calculation method; the Excel file takes the rates excl. VAT, VAT at 20% by default, and calculates the rates incl. VAT',
          'Customer and vehicle (name, phone, email, registration, VIN, make and model, mileage, first registration, paint code) and claim: date, insurer, policy number, claim number, excess announced, appraiser or firm, appraisal on site or remote, free choice of repairer reminded to the customer',
          'Damage survey in six rows: photo number, area, damage, repair or replace, reused part offered (yes, no or exception with its reason)',
          'Estimate lines: description, area, nature of the part (new, reused, equivalent quality, exchange), quantity, unit price excl. VAT, panel hours, paint hours, paint materials, total excl. VAT',
          'Totals: parts, panel and paint labour (hours × rate), paint materials and small supplies, total excl. VAT, 20% VAT, total incl. VAT, insurer’s share, customer’s share (excess, depreciation), assignment of claim yes / no',
          'Six customer agreements to tick (choice on reused parts recorded on, estimated time off the road, courtesy car and its cover, assignment of claim, call-back threshold for extra work, “Bon pour accord”), signatures and legal wording',
        ],
      },
      {
        title: 'Claim tracking sheet',
        format: 'Page 2 of the PDF, “Suivi des sinistres” sheet of the Excel file (one row per job)',
        items: [
          'Job number, vehicle arrival date, customer, registration, insurer, claim number, appraiser or firm, remote or on-site appraisal',
          'Key dates: photos sent, quote sent and its amount, appraiser’s approval and amount approved, quote / approval gap (amount approved − quote amount, in red in the Excel file when the appraiser approves less)',
          'Parts: reference, supplier, ordered on, received on, missing part with the announced date',
          'Workshop: panel work, paint booth, reassembly and check, planned and actual return, days off the road (actual return − arrival date, counted up to today in the Excel file while the vehicle is not back)',
          'Courtesy car (registration, dates, condition reports at hand-over and return), invoice, insurer’s share, customer’s share, insurer’s payment, reminders 1 and 2',
          'Job status in six states, from “waiting for approval” to “paid, job closed”; in the Excel file, a dashboard counts the open jobs, those waiting for approval or parts, the insurer receivables, the average time off the road and the booth occupancy',
        ],
      },
      {
        title: 'Paint booth schedule and courtesy car register',
        format: '“Cabine et véhicules de prêt” sheet of the Excel file only, not in the PDF',
        items: [
          'Paint booth schedule over one week, Monday to Saturday, morning and afternoon: vehicle, job number, painter, stage (primer, base, clear coat, drying, complete), remark',
          'Booth occupancy rate calculated (slots used ÷ 12 slots available), shown again in the dashboard of the “Suivi des sinistres” sheet',
          'Courtesy car register: registration, make and model, insurance (policy, cover), customer, job number, dates, mileage at hand-over and return',
          'Days lent calculated up to today while the return date is empty, condition reports at hand-over and return (done without reservation, done with reservations, to do)',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the quote and open the job in six steps',
    intro:
      'In the Excel file, only the white cells are typed in. The totals, the insurer’s and customer’s shares, the gaps and the delays are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Your details and your hourly rates',
        description:
          'Fill in the header (name, address, SIREN, VAT number) and your panel, paint and mechanics hourly rates, as posted at reception, then save the file as your template. In the Excel file, the rates are typed excl. VAT and the rates incl. VAT appear next to them.',
      },
      {
        label: 'Step 2',
        title: 'The customer, the vehicle and the claim',
        description:
          'Registration, VIN, mileage and paint code, then the insurer, the claim number, the excess announced, the appraiser and the appraisal method. Note the date on which the free choice of repairer was reminded to the customer.',
      },
      {
        label: 'Step 3',
        title: 'The damage survey, photo by photo',
        description:
          'One row per photo: the area, the damage, repair or replace, and whether a reused part is offered. When it is not for a part concerned, note the reason for the exception.',
      },
      {
        label: 'Step 4',
        title: 'The estimate: parts, hours, paint materials',
        description:
          'One row per part or operation, with the nature of the part, the quantity, the unit price excl. VAT, the panel and paint hours and the paint materials. The Excel file multiplies the hours by your rates and calculates the total excl. VAT of each row.',
      },
      {
        label: 'Step 5',
        title: 'The shares, the customer agreements and the signature',
        description:
          'Type the excess and the depreciation: the customer’s share and the insurer’s follow. Tick the agreements (reused parts, time off the road, courtesy car, assignment of claim, call-back threshold for extra work), then the customer signs with the words “Bon pour accord”.',
      },
      {
        label: 'Step 6',
        title: 'The tracking sheet, from the vehicle’s arrival',
        description:
          'Open the job with its number and the arrival date, then date each step as the job goes: photos and quote sent, appraiser’s approval, parts, booth, return, invoice and payment. In the Excel file, one row per job and the status picked from the list.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The wording the template already provides',
    intro:
      'Four French rules for body shops go through the quote and the tracking sheet. The template keeps a box, a column or a line for each of them.',
    facts: [
      {
        contextLabel: 'Order of 27 March 1987',
        title: 'A panel rate and a paint rate, each posted including VAT',
        text: 'When your hourly rates differ (mechanics, body, paint), each one is posted including VAT outside and at reception, with the calculation method (time spent or a schedule available for consultation). The quote carries the three rates and the calculation method at the top of the page.',
        sourceName: GARAGE_RULES_SOURCE.name,
        sourceUrl: GARAGE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Since 1 October 2024',
        title: 'The customer’s choice on reused parts, recorded and kept for 2 years',
        text: 'Removable body panels, non-bonded glazing, lights, interior trim: the customer chooses between a new part and a circular economy part, on a durable medium, before accepting the quote. A copy is kept for 2 years. The damage survey notes the reused part offered, and the customer agreements date their choice.',
        sourceName: CIRCULAR_ECONOMY_PARTS_SOURCE.name,
        sourceUrl: CIRCULAR_ECONOMY_PARTS_SOURCE.url,
      },
      {
        contextLabel: 'Insurance Code, art. L211-5-1',
        title: 'The free choice of repairer and the assignment of claim',
        text: 'The policyholder chooses their repairer, and the insurer reminds them of it at the first contact to declare the claim (order of 17 June 2016). Since December 2020, a clause forbidding them to assign their indemnity claim to you is void (art. L211-5-2). The quote has its “free choice of repairer reminded to the customer” box and its “assignment of claim” line.',
        sourceName: FREE_CHOICE_OF_REPAIRER_SOURCE.name,
        sourceUrl: FREE_CHOICE_OF_REPAIRER_SOURCE.url,
      },
      {
        contextLabel: 'No legal deadline for the report',
        title: 'The insurer chooses the appraiser “on average within 15 days”',
        text: 'The insurer chooses the appraiser, on average within 15 days of the declaration, and the appraiser intervenes on site or on photos for minor claims; no text sets a deadline for the report. Do not repair before the visit, except in an emergency. The tracking sheet dates the photos and quote sent, the appraiser’s approval and the reminder at a set date.',
        sourceName: VEHICLE_APPRAISAL_SOURCE.name,
        sourceUrl: VEHICLE_APPRAISAL_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Body shop quote template: your questions',
    questions: [
      {
        question: 'Is the body shop quote template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'How do I split the insurer’s share and the customer’s share?',
        answer:
          'The customer only pays their excess and any depreciation, the insurer pays the rest. In the Excel file, you type the excess and the depreciation: the customer’s share adds them up, and the insurer’s share is the total incl. VAT minus that share. If the customer assigns their indemnity claim to you (a policy clause forbidding it has been void since December 2020, art. L211-5-2 of the French Insurance Code), set “assignment of claim” to yes and invoice the insurer directly for its share.',
      },
      {
        question: 'Do I have to offer a reused part on every line?',
        answer:
          'No, only for the categories covered by the French Consumer Code: removable body panels, non-bonded glazing, lights, interior trim. You may skip them when the part is not available within a lead time compatible with the time off the road, when the service is free or under warranty, or when safety is at risk, noting the reason. The damage survey has its “yes / no / exception” column, and the customer agreements date their choice, a copy of which is kept for 2 years.',
      },
      {
        question: 'Does this quote replace the estimate the appraiser asks for?',
        answer:
          'No. When the job goes through an insurer, the appraiser expects a standardised estimate produced by an estimating tool (Sidexa, GT Estimate, DAT…) from manufacturer times and parts. This template is for the quote handed to the customer, the photo-by-photo survey and the job tracking, and its wording says so. For a customer paying for the repair themselves, it is enough.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'You type your hourly rates excl. VAT, then the quantity, the unit price excl. VAT, the panel and paint hours and the paint materials of each line: the line total excl. VAT, the totals, the VAT, the total incl. VAT and the insurer’s and customer’s shares are calculated on their own. The “Suivi des sinistres” sheet holds every job, one row each, and calculates the quote / approval gap, the days off the road (in red beyond 15 days on an open job) and the insurer receivables. The “Cabine et véhicules de prêt” sheet calculates the booth occupancy rate and the days lent.',
      },
      {
        question: 'And when the jobs pile up?',
        answer:
          'An Excel template is enough for a few jobs a week, up to about thirty jobs open at the same time. Beyond that, French workshop software (Gest’Garage, TDV Agent, AutoProGestion) chains quotes, repair orders and invoices from €19 incl. VAT per month, and dealer management systems with a body shop module (EBP MéCa PRO, Fiducial, Repair Soft), on quote, add the Darva exchanges and the insurer / customer split. If your organisation falls outside their frame, the test on the tool page tells you what to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When the quote, the tracking sheet, the booth schedule and the loan register get copied from one file to the next, a tool that chains them gives you hours back. Describe your workshop to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare body shop software',
  },
}
