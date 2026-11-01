import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/personalTrainerClientReview/pageShared'
import {
  GYM_MEMBERSHIP_RULES_SOURCE,
  HEALTH_DATA_SOURCE,
  PERSONAL_TRAINER_TEMPLATE_PDF_PATH,
  PERSONAL_TRAINER_TEMPLATE_XLSX_PATH,
  SPORTS_EDUCATOR_DECLARATION_SOURCE,
} from '~/core/constants/tools/personalTrainerSoftware/pageShared'

export const PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Personal trainer client assessment: free French template',
    description:
      'Personal trainer client assessment: free French template in PDF and Excel, with a training log. Measurements, tests, tonnage calculated. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French client assessment and training log template for personal trainers',
  },
  breadcrumbLabel: 'Personal trainer client assessment',
  shareImage: {
    titleLines: ['Client assessment', 'free French template'],
    highlight: 'Client assessment',
    subtitle:
      'French initial assessment and training log in PDF and Excel, measurements, baseline tests, calculated tonnage',
    badge: 'Free, no sign-up',
    icon: 'dumbbell',
    alt: 'Free French personal trainer client assessment template: initial assessment and training log in PDF and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Personal trainer client assessment',
    titleAfter: ': free French template (+ training log)',
    reassurances: ['Initial assessment + training log', 'Excel with calculated tonnage', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'An initial client assessment and a strength training log ready to fill in, written in French for the French market, for an independent personal trainer or a small gym. The assessment records the client’s goals, history, baseline measurements and tests, and collects their consent for health data. The log follows every session: sets, reps, loads, RPE and tonnage.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the French rules on the sports educator card, the medical certificate and health data so that the wording is up to date.',
    updatedAt: PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For independent personal trainers, coaches and small gyms working in France. Two files in French, no form to fill in: the PDF prints, the Excel file calculates.',
    files: [
      {
        label: 'Download the PDF template',
        href: PERSONAL_TRAINER_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: PERSONAL_TRAINER_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 sheets, calculated tonnage, in French',
      },
    ],
    footnote: 'Free to use and adapt to your practice. It does not replace medical advice.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'An initial assessment and a training log, as PDF and Excel',
    intro:
      'The PDF holds both documents on two A4 pages, to fill in by hand. The Excel file holds them on two sheets: the first calculates the gap between the latest measurement and the baseline, the second the tonnage of every exercise and every session.',
    documents: [
      {
        title: 'Initial assessment',
        format: 'Page 1 of the PDF, “Bilan client” sheet of the Excel file',
        items: [
          'Coach or gym header (name, phone, sports educator professional card number), diploma (BPJEPS, DEUST, STAPS…) and professional liability insurance',
          'Client, assessment date, date of birth, phone or email',
          'Goals and current practice: main goal, target date, sport practised, possible sessions per week, place and equipment, sleep and diet',
          'History and pain: injuries and surgery, current pain and movements to avoid, ongoing medical care, medical certificate (optional) provided on…',
          'Baseline measurements (weight, height, waist, hips, chest, arm, thigh) and baseline tests (squat, push-ups, pull-ups, plank, flexibility, cardio, mobility), repeated at + 1 and + 3 months (+ 2 months and calculated gap in the Excel file)',
          'Proposed plan, two consent boxes for health data, client and coach signatures',
        ],
      },
      {
        title: 'Training log',
        format: 'Page 2 of the PDF, “Carnet de séances” sheet of the Excel file',
        items: [
          'Date, session type (A, B, push, pull, legs…), duration, weight of the day',
          'In the PDF, before the session: energy and sleep from 1 to 5, pain from 0 to 4, warm-up; then 12 exercise lines with 4 sets (reps × kg), RPE and tonnage, and the tonnage of the previous session of the same type',
          'In the PDF, after the session: how it felt in 4 boxes (easy, right, hard, new pain), coach notes, next session',
          'In the Excel file, one line per exercise (60 lines): sets, reps, load, RPE, calculated tonnage, notes',
          'In the Excel file, a per-session summary: date, type, weight of the day, energy and sleep, coach notes, tonnage, sets, change in % and gap in kg calculated',
          'Reminder of RPE from 1 to 10 and of the tonnage definition, note that the log does not replace medical advice',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the assessment in five steps',
    intro:
      'In the Excel file, only the white cells are typed in. The gaps, the tonnage and the change from one session to the next are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Your references, once and for all',
        description:
          'Fill in the header: name or gym, phone, sports educator card number, diploma and professional liability insurance, then save the file as your template. Every new client starts from that copy.',
      },
      {
        label: 'Step 2',
        title: 'The first-session assessment',
        description:
          'Client, main goal and target date, current practice, possible sessions, place and equipment. Take your time on history and pain: that is what sets the movements to avoid and the plan’s points of attention.',
      },
      {
        label: 'Step 3',
        title: 'Baseline measurements and tests',
        description:
          'Fill in the “Départ” column of both tables: weight and waist, then squat, push-ups, plank, cardio. At the next check-ups, you fill the same lines at + 1 and + 3 months, and the Excel file, which adds + 2 months, shows the gap from the baseline.',
      },
      {
        label: 'Step 4',
        title: 'Consent, signatures, the client’s copy',
        description:
          'Read both boxes with the client: the agreement to record their injuries, pain, measurements and progress photos, and the reminder that the assessment does not replace medical advice. They tick, date and sign; you sign, and they leave with a copy.',
      },
      {
        label: 'Step 5',
        title: 'The log, session after session',
        description:
          'In the PDF, one page per session: date, type, energy, sleep and pain before starting, then reps × kg of each set, RPE and tonnage. In the Excel file, one line per exercise: the tonnage is calculated and the summary compares the session with the previous one.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The wording the template already provides',
    intro:
      'Three French rules for personal trainers go through the client assessment. The template keeps a box or a line for each of them.',
    facts: [
      {
        contextLabel: 'Before the first paid session',
        title: 'The sports educator professional card',
        text: 'Teaching, leading or supervising a physical activity for pay in France requires a declaration to the administration, which checks the qualification and the absence of a ban on coaching, then issues the professional card. The assessment header carries its number, your diploma and your liability insurance.',
        sourceName: SPORTS_EDUCATOR_DECLARATION_SOURCE.name,
        sourceUrl: SPORTS_EDUCATOR_DECLARATION_SOURCE.url,
      },
      {
        contextLabel: 'Medical certificate',
        title: 'Not a legal obligation, often requested',
        text: 'Providing a medical certificate is not a legal obligation to join; the gym may ask for one, as it is tied to its insurance. The assessment records it as optional, with the date the client provided it.',
        sourceName: GYM_MEMBERSHIP_RULES_SOURCE.name,
        sourceUrl: GYM_MEMBERSHIP_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Sensitive data',
        title: 'Injuries, inabilities and combined measurements',
        text: 'Being unfit for a sport is health data, as is weight combined with other measurements: a special regime applies (confidentiality, security, no commercial use). The assessment collects the client’s consent in two boxes and reminds them of their rights to access, correct and delete.',
        sourceName: HEALTH_DATA_SOURCE.name,
        sourceUrl: HEALTH_DATA_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Personal trainer client assessment template: your questions',
    questions: [
      {
        question: 'Is the client assessment template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them for every client. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'What should a personal training client assessment contain?',
        answer:
          'The goal and its deadline, current practice and available slots, history and pain, baseline measurements and tests repeated at set dates, the proposed plan and the client’s consent for health data. The template follows that order on one A4 page, with a copy for the client.',
      },
      {
        question: 'Can I record my clients’ injuries and weight?',
        answer:
          'Yes, with care: being unfit for a sport is health data according to the CNIL, the French data protection authority, and weight combined with other measurements can become health data. The assessment collects the client’s consent in two boxes; it is up to you to restrict access to these records and avoid consumer messaging apps to exchange them.',
      },
      {
        question: 'Is a medical certificate needed before the first session?',
        answer:
          'It is not a legal obligation to join in France, but a gym may ask for one, as it is tied to its insurance. The template provides the “certificat médical (facultatif) : fourni le” box and reminds the client that the assessment does not replace medical advice.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'In the “Bilan client” sheet, you type the measurements and tests at baseline, then at 1, 2 and 3 months; the “Écart” column shows the difference between the latest value typed and the baseline. In the “Carnet de séances” sheet, one line per exercise with sets, reps and load: the tonnage is calculated, and the summary adds it up per date, then shows the change in % and the gap in kg from the previous session. Both sheets are set up for A4 printing.',
      },
      {
        question: 'And when the clients pile up?',
        answer:
          'A template is enough while you follow your clients one by one. Beyond that, French-market coaching apps put the assessment, programmes and follow-up on the client’s phone, Harbiz from €19 per month and Hexfit from $19. If your method, your plans or your gym fall outside their frame, the test on the tool page tells you what to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When assessments, logs and programmes get copied from one file to the next, a tool that links them to your calendar and your memberships gives you hours back. Describe your activity to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare personal trainer software',
  },
}
