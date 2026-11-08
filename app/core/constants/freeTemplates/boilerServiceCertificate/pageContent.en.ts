import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  BOILER_MAINTENANCE_DECREE_SOURCE,
  BOILER_MAINTENANCE_ORDER_SOURCE,
  BOILER_SERVICE_CERTIFICATE_TEMPLATE_PDF_PATH,
  BOILER_SERVICE_CERTIFICATE_TEMPLATE_UPDATED_AT,
  BOILER_SERVICE_CERTIFICATE_TEMPLATE_XLSX_PATH,
} from '~/core/constants/freeTemplates/boilerServiceCertificate/pageShared'
import { BOILER_MAINTENANCE_SOURCE } from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'

export const BOILER_SERVICE_CERTIFICATE_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Boiler service certificate: free French PDF + Excel template',
    description:
      'Boiler service certificate for France: free template in PDF and Excel with every item of the 2009 order, the CO statement and a visit log. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French boiler service certificate and visit log template',
  },
  breadcrumbLabel: 'Boiler service certificate',
  shareImage: {
    titleLines: ['Boiler service certificate', 'free French template'],
    highlight: 'service certificate',
    subtitle: 'Certificate and visit log in PDF and Excel, CO reading, efficiency, advice, reminders, French wording',
    badge: 'Free, no sign-up',
    icon: 'flame',
    alt: 'Free French boiler service certificate template: certificate and visit log in PDF and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Boiler service certificate',
    titleAfter: ': free French template, PDF and Excel (+ visit log)',
    reassurances: ['Certificate + visit log', 'Excel with CO statement and reminders', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'A yearly boiler service certificate ready to fill in, written in French for the French market, for a heating engineer, a plumbing and heating business or a maintenance company. It follows, item by item, the French order of 15 September 2009: boiler, points checked, carbon monoxide reading, efficiency, emissions, energy class and advice. The log keeps track of each visit, year after year, and the Excel file lists the customers to remind on the anniversary date.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the French decree and order on boiler servicing, annex by annex, so that the certificate carries every required item.',
    updatedAt: BOILER_SERVICE_CERTIFICATE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For heating engineers, plumbing and heating businesses and maintenance companies working in France. Two files in French, no form to fill in: the PDF prints, the Excel file calculates and keeps your reminders.',
    files: [
      {
        label: 'Download the PDF template',
        href: BOILER_SERVICE_CERTIFICATE_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: BOILER_SERVICE_CERTIFICATE_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, CO statement and reminders calculated, in French',
      },
    ],
    footnote:
      'Free to use and adapt to your business. It does not replace the manufacturer’s instructions or the servicing standards cited by the order.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A certificate, a visit log and a reminder list',
    intro:
      'The PDF holds the certificate on one A4 page and the visit log on the second. The Excel file holds both and adds the list of customers to remind. It writes for you the carbon monoxide statement, the hand-over deadline and the date of the next service.',
    documents: [
      {
        title: 'Service certificate',
        format: 'Page 1 of the PDF, “Attestation” sheet of the Excel file',
        items: [
          'Business header, certificate number, visit date, technician, date the certificate is drawn up',
          'Customer who ordered the service, installation address, boiler room, maintenance contract number',
          'Boiler: energy (gas, fuel oil, wood, coal, multi-fuel), make, model, type, serial number, commissioning date, power, flue, burner, last service and last chimney sweep',
          'Points checked under annex 1 of the order, as tick boxes (boiler, water circuit, controls), measuring instruments used',
          'CO reading with the three statements of the order, efficiency and emissions against the reference values, energy class and table of replacement options',
          'Advice under three headings, technician’s signature, stamp, reminder of the 15-day hand-over and 2-year retention',
        ],
      },
      {
        title: 'Visit log',
        format: 'Page 2 of the PDF, “Carnet des visites” sheet of the Excel file',
        items: [
          'The customer and the boiler at the top, once and for all (taken from the certificate in the Excel file)',
          'One line per calendar year: visit date, technician, CO in ppm, situation, efficiency, class, chimney sweep, certificate handed over on, work to plan',
          'Repairs and work between two visits, with the job sheet or invoice number',
          'Reminders: deadlines, CO measurement method, table 12 of the order for the energy class',
          'In the Excel file: hand-over delay calculated and flagged beyond 15 days, next service by 31 December of the following year at the latest',
        ],
      },
      {
        title: 'Customers to remind',
        format: '“Clients à relancer” sheet of the Excel file',
        items: [
          'One line per customer, 60 lines: name, phone, email, address, boiler, last service',
          'Anniversary date and reminder date calculated, 30 days before by default, delay editable',
          'Service due by 31 December of the following calendar year, counted from commissioning for a new boiler',
          'Calculated status: to remind, late, deadline passed, reminded, appointment set; counters at the top of the sheet and a filter by status',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the certificate in four steps',
    intro:
      'In the Excel file, only the white cells are typed in. The grey cells are calculated on their own, and drop-down lists avoid typos on the energy, the type and the flue.',
    steps: [
      {
        label: 'Step 1',
        title: 'Your details and the boiler, once per customer',
        description:
          'Fill in the business header, the customer and the boiler sheet (energy, type, year of manufacture, power), then save one copy of the file per customer. The following year, only the visit and the readings change.',
      },
      {
        label: 'Step 2',
        title: 'The points checked and the CO reading',
        description:
          'Tick the operations carried out according to the boiler’s energy, then write down the make and reference of your measuring instruments. Type the carbon monoxide reading in ppm: the Excel file writes the statement the order requires on the certificate.',
      },
      {
        label: 'Step 3',
        title: 'Efficiency, emissions and advice',
        description:
          'Copy the efficiency and the emissions read from the tables of the order. The emission references fill in from the energy, and the energy class is suggested from table 12, to be checked. Write your advice under the three headings.',
      },
      {
        label: 'Step 4',
        title: 'Sign, hand over within 15 days, log the visit',
        description:
          'Sign, stamp and hand the certificate to the customer within 15 days, on paper or by email. Add the visit to the log and update the last service date in the list of customers to remind.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The wording the template already provides',
    intro:
      'Six French rules on boiler servicing go through the certificate. The template keeps a box, a line or a formula for each of them. This summary is not legal advice: the linked texts prevail.',
    facts: [
      {
        contextLabel: 'From 4 to 400 kW',
        title: 'One service every calendar year',
        text: 'Gas, fuel oil or solid fuel boilers from 4 to 400 kW: one service per calendar year, by a qualified professional. After an installation or a replacement, the first one takes place during the following calendar year at the latest. The log and the reminder list follow that deadline.',
        sourceName: BOILER_MAINTENANCE_DECREE_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_DECREE_SOURCE.url,
      },
      {
        contextLabel: 'Within 15 days',
        title: 'The certificate handed over, kept 2 years',
        text: 'The person who serviced the boiler draws up the certificate within 15 days of the visit and hands it to the customer who ordered the service, who keeps it for at least 2 years. The Excel file calculates the hand-over deadline, the log keeps the hand-over date.',
        sourceName: BOILER_MAINTENANCE_DECREE_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_DECREE_SOURCE.url,
      },
      {
        contextLabel: 'Tenant or owner',
        title: 'Who orders the service',
        text: 'Rented home with its own boiler: the tenant calls the qualified heating engineer of their choice, unless the lease puts the landlord in charge. Shared boiler: the owner or the co-owners’ association. That is the “commanditaire” named on the certificate.',
        sourceName: BOILER_MAINTENANCE_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_SOURCE.url,
      },
      {
        contextLabel: 'Annex 5 of the order',
        title: 'The minimum content of the certificate',
        text: 'Customer, installation address, boiler (make, model, energy, flue, serial number, commissioning date, power), last service and chimney sweep, points checked, measuring instruments, results, advice. One certificate per boiler, and the original may be digital.',
        sourceName: BOILER_MAINTENANCE_ORDER_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_ORDER_SOURCE.url,
      },
      {
        contextLabel: '10 and 50 ppm thresholds',
        title: 'The carbon monoxide reading',
        text: 'Measured in the boiler room, after the adjustments. Below 10 ppm: “La situation est normale”. From 10 to under 50 ppm: abnormal, the flue draught and the room ventilation must be examined. 50 ppm or more: serious danger, boiler kept off. The Excel file writes the exact statement.',
        sourceName: BOILER_MAINTENANCE_ORDER_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_ORDER_SOURCE.url,
      },
      {
        contextLabel: 'Efficiency, emissions, advice',
        title: 'A comparison with the reference',
        text: 'Efficiency and emissions are read from the tables of the order, then compared with a reference: for gas and fuel oil, a condensing boiler of the same power and 35 or 90 mg/kWh of nitrogen oxides. Below 70 kW, the energy class appears too. The advice stays indicative.',
        sourceName: BOILER_MAINTENANCE_ORDER_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_ORDER_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Boiler service certificate: your questions',
    questions: [
      {
        question: 'Is the boiler service certificate template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Who must provide the boiler service certificate in France?',
        answer:
          'The professional who serviced the boiler. They draw it up within 15 days of the visit and hand it to whoever ordered the service: the occupant for an individual boiler, unless the lease puts the landlord in charge, the owner or the co-owners’ association for a shared boiler. It can be sent by email.',
      },
      {
        question: 'How long should the certificate be kept?',
        answer:
          'At least 2 years for whoever received it, who keeps it available to the inspection officers. On your side, the order lets you keep a copy for two years, on paper or as a file. The visit log of the template keeps every year.',
      },
      {
        question: 'What if the CO reading is above 10 ppm?',
        answer:
          'From 10 to under 50 ppm, the situation is abnormal: you tell the user that the flue draught and the room ventilation must be examined, during the visit or as a separate job. At 50 ppm or more, it is a serious and immediate danger: you instruct them to keep the boiler off until it is put back into service. The matching statement appears on the certificate.',
      },
      {
        question: 'How do I fill in the efficiency and the emissions?',
        answer:
          'The order provides an evaluation with its tables: the efficiency according to the energy, the age and the power or type of the boiler (annex 2), the emissions in annex 3. You then compare them with the references, for example a condensing boiler of the same power for the efficiency of a gas or fuel oil boiler. In the Excel file, the emission references fill in from the energy chosen.',
      },
      {
        question: 'Is one certificate needed per boiler?',
        answer:
          'Yes. In a home or premises with several boilers, the order requires a certificate for each boiler serviced. Keep a visit log per boiler too, to find its readings from one year to the next.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'On the “Attestation” sheet, you pick the energy, the type and the flue from lists, then type the CO reading: the statement of the order writes itself, as do the hand-over deadline, the next service date, the emission references and the suggested energy class. The log calculates the hand-over delay of each certificate. The “Clients à relancer” sheet calculates the anniversary date, the reminder date and the status of each customer.',
      },
      {
        question: 'And when the maintenance contracts pile up?',
        answer:
          'One file per customer and a reminder list are enough while the contracts stay few. Beyond that, French software for plumbing and heating businesses brings together maintenance contracts, visits, certificates and reminders, with the history of each appliance. The test on the tool page tells you which one to choose, with the 2026 prices of the software on the market.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When the certificates, the logs and the reminders of your maintenance contracts get copied from one file to the next, a tool that chains them gives you hours back. Describe your business to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare software for heating engineers',
  },
}
