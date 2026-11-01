import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  IMMEDIATE_ADVANCE_PROVIDER_SOURCE,
  QUALITY_FRAMEWORK_DECREE_SOURCE,
  SELF_FUNDED_TRAINING_CONTRACT_SOURCE,
  TRAINING_ACTIVITY_DECLARATION_SOURCE,
  TRAINING_CENTER_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  TRAINING_CENTER_PAGE_PROJECT_SLUG,
  TRAINING_CENTER_PAGE_RELATED_ARTICLE_SLUGS,
  TRAINING_CENTER_PAGE_SCREENSHOT_URL,
  TRAINING_CENTER_PAGE_UPDATED_AT,
  TRAINING_CENTER_TEMPLATE_PDF_PATH,
  TRAINING_CENTER_TEMPLATE_XLSX_PATH,
  VAT_EXEMPT_E_INVOICING_SOURCE,
} from '~/core/constants/tools/trainingCenterSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { TRAINING_ATTENDANCE_SHEET_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/trainingAttendanceSheet/pageShared'

export const TRAINING_CENTER_PAGE_CONTENT_EN: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Training centre and tutoring software in France: 2026 prices',
    description:
      'Tutoring, private lessons, music schools in France: 2026 prices of Digiforma, Dendreo, Platformeasy, a free 6-question test and an attendance sheet.',
    inLanguage: 'en',
    schemaAbout: 'Management software for training organisations, tutoring centres and music schools in France',
  },
  breadcrumbLabel: 'Training centre software',
  shareImage: {
    titleLines: ['Which software for', 'a training centre?'],
    highlight: 'training centre',
    subtitle:
      'Six questions, 2026 prices of the training and tutoring software sold in France and a free attendance sheet',
    badge: 'Free test, in 2 minutes',
    icon: 'graduation',
    alt: 'Which software for your training organisation or teaching centre? Free 6-question test, 2026 prices of the software sold in France and an attendance sheet to download, on dibodev.fr',
  },
  hero: {
    titleBefore: 'Which software for your ',
    titleHighlight: 'training organisation',
    titleAfter: ' or teaching centre?',
    description:
      'Answer six questions about your trainers or teachers, your teaching places and above all who pays you: the CPF (France’s personal training account), an OPCO (a skills operator funding employee training), families using a tax credit, or members. Qualiopi-certified training (France’s quality certification for training providers), tutoring, private lessons, a music or dance school: based on the French market, the test tells you which family of software to choose, which rules apply to you and how much to budget.',
    reassurances: ['2 minutes', 'No sign-up, no email', 'Instant result'],
    authorIntro: 'Test designed by',
    authorBio:
      'a business software developer near Rennes, France. During my studies at Epitech, I designed a driving school management app: lesson planning, students, instructors and hours left.',
    updatedAt: TRAINING_CENTER_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'software',
    eyebrow: '2026 public prices',
    title: 'Training, tutoring and music school software sold in France, with their prices',
    intro:
      'Three worlds that do not overlap: software for training organisations (Qualiopi; the BPF, France’s yearly teaching and financial report; the CPF), software for tutoring and private lessons (immediate tax credit advance, tax certificates), and software for music, dance or language schools (enrolments, family rates). Here are the prices the publishers show; they rise with the number of learners, trainee hours, users or signatures.',
    productColumnLabel: 'Software',
    coverageColumnLabel: 'What it handles',
    priceColumnLabel: 'Public price',
    products: [
      {
        name: 'Digiforma',
        coverage:
          'Training organisations: sessions, digital attendance, BPF, quality compliance, quotes, invoices and e-invoicing; CPF and EDOF not described on the pricing page',
        price: 'From €49 excl. VAT per month',
        priceCondition:
          'Indep €49 with a yearly commitment or €59 without (200 learners a year, 1 user), up to Leader from €699 or €839; options from €29 per month; 15 days free',
      },
      {
        name: 'Dendreo',
        coverage:
          'Training organisations: unlimited attendance, automatic BPF, Qualiopi guide, EDOF export (connector through an extra Wedof subscription), e-invoicing',
        price: '€225 to €992 excl. VAT per month',
        priceCondition:
          'Starter: 10,000 trainee hours a year, 2 users; set-up fee from €1,490 to €3,990 excl. VAT; Platine on quote; 14-day trial, no commitment',
      },
      {
        name: 'Edusign',
        coverage:
          'Online attendance only: unlimited learners and surveys, 200 to 1,000 signatures a month depending on the plan; Qualiopi mentioned in the Organisme Pro plan',
        price: '€29 to €119 per month',
        priceCondition:
          'Excl. or incl. VAT not specified; Indépendant €29 paid yearly or €39 monthly, Organisme €59 or €75, Organisme Pro €99 or €119, then €0.25 to €0.50 per signature above the quota; free trial',
      },
      {
        name: 'Platformeasy (formerly Ogustine)',
        coverage:
          'Tutoring and home lessons: schedule, invoices from the schedule, immediate tax credit advance (Urssaf interface) and tax certificates from the Solo plan, e-invoicing',
        price: '€39 to €109 excl. VAT per month',
        priceCondition:
          'Solo €39, Standard €69 (+€29 per account), Pro €109 (+€39 per account); mobile app €1,750 plus €35 excl. VAT per month; 30 days for €1, no commitment',
      },
      {
        name: 'Kadrella',
        coverage:
          'Private lessons: unlimited students and teachers, recurring lessons, tax certificate; invoices in the Complet plan; immediate advance not mentioned',
        price: 'Free, then €29 or €49 per month',
        priceCondition:
          'Excl. or incl. VAT not specified; Essentiel €29 (€319 a year), Complet €49 (€539 a year); 14-day trial, no commitment',
      },
      {
        name: 'MyScol',
        coverage:
          'Tutoring, music and dance: schedule per student, attendance and absences, parents’ invoices and payments, homework log',
        price: '€84 to €360 excl. VAT per month',
        priceCondition:
          'From 50 to 500 students; yearly, €504 to €2,160 excl. VAT; no trial, one month with no commitment on the monthly plan',
      },
      {
        name: 'Viviarto',
        coverage: 'Music and dance schools: schedule, online enrolment, family rates, attendance, QR code',
        price: 'From €19 per month',
        priceCondition:
          'Excl. or incl. VAT not specified; Autonomie from €19, Sérénité from €38, Tout compris from €52, price adapted to the school’s size, subscription per season',
      },
      {
        name: 'Alcuin, Belami, Accès SAP, Ogust',
        coverage:
          'Session planning and BPF (Alcuin), family invoices and SEPA direct debits (Belami), immediate advance for tutoring (Accès SAP, Ogust)',
        price: 'On quote',
        priceCondition:
          'Prices not published; at Accès SAP, software included in the cooperative membership; at Ogust, Standard and Entreprise on quote, Essentiel from €50 per month (excl. or incl. VAT not specified)',
      },
    ],
    calloutEmphasizedIntro: 'Before signing:',
    calloutText:
      'run a real week through the software. A teacher off sick replaced the same morning, a session where each half-day is signed online, the certificate of completion sent to the funder, a family invoiced with the immediate advance, then the hours total ready for the BPF. And look at what drives the bill up: learners, trainee hours, users or signatures.',
    calloutFootnote: 'Prices checked on 1 November 2026 on the publishers’ pricing pages. Non-exhaustive list.',
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'France in 2026',
    title: 'Qualiopi, BPF, immediate advance: the French rules depending on who pays you',
    intro:
      'In France, everything depends on who pays for your courses. For the CPF, an OPCO or an employer, you are a training organisation: activity declaration, a BPF every year, Qualiopi for the CPF. For families, home tutoring falls under personal services (services à la personne): 10% VAT if these are your only services, and a 50% tax credit for them. A music, dance or language school giving leisure classes has no activity declaration to make.',
    facts: [
      {
        contextLabel: 'Within 3 months, then every year',
        title: 'The activity declaration and the yearly BPF',
        text: 'Declare your activity within 3 months of the first training agreement or contract signed; its number (NDA) then appears on your agreements, quotes, invoices and contracts. Every year, the teaching and financial report (BPF) keeps it valid: without it, the declaration lapses. Leisure classes given to individuals are not concerned.',
        sourceName: TRAINING_ACTIVITY_DECLARATION_SOURCE.name,
        sourceUrl: TRAINING_ACTIVITY_DECLARATION_SOURCE.url,
      },
      {
        contextLabel: 'Since 1 November 2026',
        title: 'Qualiopi: a framework with 33 indicators',
        text: 'The decree of 1 August 2026 sets 7 criteria and 33 indicators, up from 32. Several deal with follow-up: assessment on entry, adapted follow-up, dropouts and, for distance modules, proof that they are actually followed (indicator 19). The text does not mention attendance sheets: they are the proof of completion that funders ask for.',
        sourceName: QUALITY_FRAMEWORK_DECREE_SOURCE.name,
        sourceUrl: QUALITY_FRAMEWORK_DECREE_SOURCE.url,
      },
      {
        contextLabel: 'Articles L6353-3 to L6353-6',
        title: 'Self-funded trainees: 10 days to withdraw',
        text: 'The contract is signed before final enrolment and before any payment. The trainee has 10 days to withdraw by registered letter; nothing is collected before that period ends, then 30% of the price at most, with the rest spread out.',
        sourceName: SELF_FUNDED_TRAINING_CONTRACT_SOURCE.name,
        sourceUrl: SELF_FUNDED_TRAINING_CONTRACT_SOURCE.url,
      },
      {
        contextLabel: 'Home tutoring',
        title: 'The immediate advance needs compatible software',
        text: 'To offer families the immediate advance of their tax credit, your business must be declared or approved for personal services, up to date with its social and tax obligations, free of any undeclared-work offence for 5 years, and use software compatible with the API Tiers de prestation of the Urssaf (the French social contributions agency).',
        sourceName: IMMEDIATE_ADVANCE_PROVIDER_SOURCE.name,
        sourceUrl: IMMEDIATE_ADVANCE_PROVIDER_SOURCE.url,
      },
      {
        contextLabel: 'E-invoicing',
        title: 'VAT-exempt training: receive, not issue',
        text: 'For VAT-exempt operations (articles 261 to 261 E of the French tax code, which include vocational training), impots.gouv.fr states that you are “not concerned on the issuing side”. Your organisation must, however, receive its suppliers’ e-invoices. Some publishers say the opposite: have your accountant confirm it.',
        sourceName: VAT_EXEMPT_E_INVOICING_SOURCE.name,
        sourceUrl: VAT_EXEMPT_E_INVOICING_SOURCE.url,
      },
      {
        contextLabel: '1 September 2027',
        title: 'The e-invoicing timetable',
        text: 'Every French company covered by the reform must be able to receive e-invoices since 1 September 2026; small and mid-sized companies will have to issue them from 1 September 2027, for the operations within its scope.',
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'What a custom tool does not replace:',
    calloutText:
      'Qualiopi certification, nor your filings on Mon activité formation, on EDOF or with the Urssaf. Your organisation is the one audited and the one that declares; the tool files the evidence, prepares the BPF figures and plugs into your accounts.',
  },
  freeTemplate: {
    anchorId: 'template',
    eyebrow: 'Free template',
    title: 'A training attendance sheet and hours tracking, as PDF and Excel',
    description:
      'A half-day attendance sheet for your training sessions, with the activity declaration number and the trainee’s and trainer’s signatures; its weekly version for regular tutoring, music or language classes. In French, as a PDF to print or an Excel file where the class schedule, each student’s remaining hours and the total hours per trainee are calculated.',
    items: [
      'Half-day attendance sheet: title, dates, times, on-site or remote, place, NDA, trainee’s and trainer’s signatures, absence or late arrival',
      'Weekly register: one student per line, one box per class, the package and the hours left, for tutoring, music or languages',
      'Excel version: schedule of classes, teachers and rooms with a double-booking alert, hours left per student with an alert below 2 hours, total per trainee for the certificate of completion and the BPF',
      'Useful benchmarks: signing per half-day is a practice most French funders ask for, not a written obligation; the certificate of completion follows the French Ministry of Labour template',
    ],
    downloads: [
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
    footnote: 'Free to use, to adapt to your organisation and your funders.',
    pageLinkLabel: 'See the template page',
    pageLinkRouteName: TRAINING_ATTENDANCE_SHEET_TEMPLATE_ROUTE_NAME,
  },
  comparison: {
    eyebrow: 'The three options',
    title: 'Off-the-shelf software, an extension or a custom tool?',
    intro:
      'Each one has its place. The test points you in a direction; this table shows what you gain and what you accept with each one.',
    criterionLabel: 'Criterion',
    columns: ['Off-the-shelf software', 'Off-the-shelf software + extension', 'Custom tool'],
    rows: [
      {
        label: 'Price',
        cells: [
          { state: 'yes', text: 'Entry plans from €39 to €225 excl. VAT per month, then by volume' },
          { state: 'partial', text: 'Your subscription, plus €2,500 to €7,000 paid once' },
          { state: 'partial', text: '€5,000 to €25,000 paid once, plus €100 to €300 per month for maintenance' },
        ],
      },
      {
        label: 'Attendance, BPF, immediate advance',
        cells: [
          {
            state: 'partial',
            text: 'Depending on the publisher: the BPF in training software, the immediate advance in tutoring software, not both in the plans checked',
          },
          { state: 'yes', text: 'Stay in your current software' },
          {
            state: 'yes',
            text: 'Together in one tool; the immediate advance goes through the Urssaf API, once authorised',
          },
        ],
      },
      {
        label: 'Your rules: packages, funders, several activities',
        cells: [
          { state: 'partial', text: 'Within the settings the publisher provides' },
          { state: 'yes', text: 'For the points the extension adds' },
          { state: 'yes', text: 'Designed around the way you work' },
        ],
      },
      {
        label: 'A space for students, families or trainees',
        cells: [
          { state: 'partial', text: 'Often a publisher extranet, in its colours' },
          { state: 'yes', text: 'On your website, in your colours' },
          { state: 'yes', text: 'On your website, in your colours' },
        ],
      },
      {
        label: 'Getting started',
        cells: [
          { state: 'yes', text: 'A few days; longer for highly configurable software' },
          { state: 'partial', text: '2 to 6 weeks' },
          { state: 'partial', text: '5 to 20 weeks, in stages' },
        ],
      },
      {
        label: 'Your data',
        cells: [
          { state: 'partial', text: 'With the publisher, export depending on the software' },
          { state: 'partial', text: 'Split between the two tools' },
          { state: 'yes', text: 'Yours, code included' },
        ],
      },
    ],
    rowsShownOnSmallScreens: TRAINING_CENTER_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: TRAINING_CENTER_PAGE_PROJECT_SLUG,
    screenshotUrl: TRAINING_CENTER_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Already built',
    title: 'A class schedule with each student’s remaining hours, already built',
    description:
      'Driving School is a driving school management web app I designed during my studies at Epitech. A driving lesson and a tutoring class share the same skeleton: a student, a teacher, a time slot, a package of hours that runs down. That is the core I reuse for a tutoring centre or a training organisation, with your rooms, your funders and your attendance sheets on top.',
    highlights: [
      'A schedule to view by day, week or month',
      'A record for each student and instructor, with each one’s access rights',
      'Each student’s balance: hours done, hours left',
    ],
    linkLabel: 'See the Driving School project',
    imageAlt: 'Driving School: the month’s schedule, with the student’s first name on each lesson',
    browserBarCaption: 'Driving School · lesson schedule',
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Training, tutoring or school software: your questions',
    questions: [
      {
        question: 'How much does training organisation software cost in France?',
        answer:
          'Digiforma starts at €49 excl. VAT per month with a yearly commitment (€59 without) for 200 learners a year, Dendreo at €225 excl. VAT per month plus a set-up fee from €1,490 excl. VAT, hop3team at €39 excl. VAT per month paid yearly (€49 with no commitment), Qualiobee at €49 excl. VAT per month for 100 learners a year and SmartOF at €75 excl. VAT per month. For attendance only, Edusign costs €29 per month paid yearly (excl. or incl. VAT not specified). Prices rise with learners, trainee hours, users or signatures (prices checked on 1 November 2026). A custom extension costs €2,500 to €7,000 paid once, a complete tool €5,000 to €25,000, then €100 to €300 per month for maintenance.',
      },
      {
        question: 'What is the most widely used training management software?',
        answer:
          'I found no reliable public figure on the number of users of each software. On 1 November 2026, Google’s first page in France for “logiciel organisme de formation” showed Digiforma, Wedof, Qualiobee, SmartOF and Dendreo; for “logiciel soutien scolaire” (tutoring software), Platformeasy, MyScol, Ogust, Accès SAP and Gestio. These are two different families of tools: first pick yours depending on who pays you, which is what the test at the top of this page does.',
      },
      {
        question: 'Which software for tutoring or private lessons in France?',
        answer:
          'Look at the immediate advance first: with it, the family only pays 50% of the cost (within the tax credit ceiling), and you can only offer it if you are declared or approved for personal services, with software compatible with the Urssaf API Tiers de prestation. Platformeasy includes it from its Solo plan at €39 excl. VAT per month, Ogust offers it too (Essentiel plan from €50 per month, excl. or incl. VAT not specified) and Accès SAP includes its software in its cooperative membership. Kadrella (free, then €29 or €49 per month) issues tax certificates without mentioning the immediate advance, and MyScol (€84 excl. VAT per month for 50 students) handles the schedule, attendance and parents’ invoices. Prices checked on 1 November 2026.',
      },
      {
        question: 'Which management software for a music or dance school?',
        answer:
          'Leisure school tools handle enrolments, family rates and attendance: Viviarto starts at €19 per month (excl. or incl. VAT not specified, subscription per season), Liberfit at €79 excl. VAT per month with a commitment (€99 without, plus set-up fees), AssoConnect is free then €23 to €109 incl. VAT per month for associations, MyScol starts at €84 excl. VAT per month and Belami is on quote (prices checked on 1 November 2026). In France, a school giving leisure classes to individuals has no training activity declaration to make. In classical, contemporary or jazz dance, a paid teacher must hold the state diploma, an equivalence or an exemption, and each student provides a medical certificate every year (French education code, articles L362-1 and R362-2).',
      },
      {
        question: 'Is there free software for a training organisation or private lessons?',
        answer:
          'Yes, to get started: Kadrella has a free plan for private lessons, AssoConnect a free plan for associations, and Teachizy a free Découverte plan to sell online courses (9% commission, 3 courses, 70 learners). The training organisation software checked is paid, but can be tried for free: hop3team opens a full free account with no bank card, Digiforma offers 15 days, Dendreo and Qualiobee 14 days. The free template on this page (attendance sheet as PDF, hours tracking in Excel) gets a small organisation by, without online signatures or an automatic BPF.',
      },
      {
        question: 'Training attendance sheet: per half-day, on paper or online?',
        answer:
          'The Qualiopi framework does not mention attendance sheets: they are the proof of completion that funders ask for, along with the certificate of completion whose template the French Ministry of Labour publishes. Signing per half-day, morning and afternoon, is a practice most funders ask for, not an obligation written in a text. Online, Edusign starts at €29 per month paid yearly (200 signatures a month, then €0.50 per signature), hop3team charges €0.15 excl. VAT per signature and Dendreo includes unlimited attendance. On paper, the free sheet on this page has both half-days, the activity declaration number and the trainee’s and trainer’s signatures.',
      },
      {
        question: 'Qualiopi: what has changed since 1 November 2026?',
        answer:
          'Since 1 November 2026, the French national quality framework has 7 criteria and 33 indicators, up from 32 (decree no. 2026-728 of 1 August 2026). Several indicators deal with learner follow-up: assessment of skills on entry (8), adapted follow-up (10), achievement of objectives (11), engagement, dropouts, violence and harassment (12), and whether distance modules are actually followed (19). Check that your software has moved to the 33 indicators: on 1 November 2026, at least one publisher’s pricing page still mentioned 32. Software does not certify you: your organisation is the one audited.',
      },
      {
        question: 'When must the teaching and financial report (BPF) be sent?',
        answer:
          'Every year, on Mon activité formation, by the date set by the French Ministry of Labour: in 2026, the campaign ran from 1 April to 31 May (Centre Inffo). Every declared organisation sends it, independent trainers included; without a BPF, the activity declaration lapses. Software that keeps attendance and hours per trainee saves you from recounting everything when you fill it in.',
      },
      {
        question: 'An individual pays for their own training: what must the contract include?',
        answer:
          'The contract is signed before final enrolment and before any payment (article L6353-3 of the French Labour Code). The trainee can withdraw within 10 days by registered letter; no money can be required before that period ends, then 30% of the price at most, with the rest spread out (articles L6353-5 and L6353-6). These rules cover a person who undertakes training individually and at their own expense.',
      },
      {
        question: 'Which VAT rate for training, tutoring or home lessons in France?',
        answer:
          'Vocational training is only VAT-exempt with the certificate from the Dreets (the regional labour administration), and the invoice carries the mention “article 261-4-4° du CGI” (Centre Inffo). Home tutoring is at 10% if you only provide personal services; other home lessons are at 20% (Entreprendre.Service-Public.fr). Families then get 50% of their spending back as a tax credit, up to €12,000 a year plus €1,500 per dependent child (€15,000 at most), and a quote is mandatory from €100 incl. VAT per month.',
      },
      {
        question: 'My centre does training and tutoring: is one software enough?',
        answer:
          'Not with the plans I checked: on 1 November 2026, no page I read from training organisation software mentioned the immediate advance, and no page I read from personal services software mentioned the BPF or Qualiopi. You then often pay for two subscriptions, for example Digiforma from €49 excl. VAT and Platformeasy from €39 excl. VAT per month, and retype from one to the other. That is where a custom tool makes sense: one schedule and one hours tracker, with attendance and the BPF on one side, the immediate advance and the tax certificate on the other. AI can be added if it helps you: BPF pre-filled from attendance, agreements and certificates drafted, progress summaries for parents.',
      },
      {
        question: 'Can my data be moved from my current software?',
        answer:
          'If your software exports your students or trainees, sessions, attendance and invoices to Excel or CSV, I import them into the new tool; it is planned in the quote. Check this export option before signing with a publisher, and keep your signed attendance sheets: they are your proof of completion for funders.',
      },
    ],
  },
  relatedArticles: {
    title: 'Read next',
    slugs: TRAINING_CENTER_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: 'Not sure which tool suits your training courses or classes?',
    description:
      'Tell me in a few lines who pays you, your teaching places and your teachers. I reply within 24 hours, and if off-the-shelf software is enough for you, I will tell you.',
    button: 'Discuss my project',
  },
}
