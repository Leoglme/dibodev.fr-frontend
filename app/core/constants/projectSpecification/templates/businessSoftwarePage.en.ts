import type { DibodevProjectSpecificationTemplatePageContent } from '~/core/types/DibodevProjectSpecificationPage'

export const PROJECT_SPECIFICATION_BUSINESS_SOFTWARE_PAGE_EN: DibodevProjectSpecificationTemplatePageContent = {
  projectType: 'businessSoftware',
  meta: {
    title: 'Business software project brief: free Word template',
    description:
      'Free project brief template for business or management software, in Word, with a filled-in PDF example: screens, roles, data to import. No sign-up, no email.',
    inLanguage: 'en-US',
    schemaAbout: 'Project brief for custom business or management software',
  },
  breadcrumbLabel: 'Business software',
  shareImage: {
    titleLines: ['Project brief', 'business software'],
    highlight: 'business software',
    subtitle: 'Word template and filled-in PDF example',
    badge: 'Free · no email',
    alt: 'Free project brief template for business software, in Word, with a filled-in PDF example',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Business software project brief',
    titleAfter: ': free Word and PDF template, with a filled-in example',
    reassurances: ['Template + filled-in example', 'Editable Word file', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'A business software project brief in nine parts, ready to fill in, and the same document filled in for a cleaning company in Cesson-Sévigné, near Rennes, France. It is meant for small and mid-sized businesses that want to replace their Excel files, or their current management software, with custom software. The screens, the user roles, the data to import, the budget and the ownership of the code are already planned.',
    authorIntro: 'Template prepared by',
    authorBio:
      'independent developer near Rennes, France. These are the questions I ask before pricing business software.',
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For a small or mid-sized business that wants to replace its Excel files or its management software. The Word file is ready to fill in and edit; the PDF shows the same document filled in from start to finish.',
    templateLabel: 'Download the Word template',
    templateMeta: 'Word, 9 parts to fill in',
    exampleLabel: 'Download the filled-in example',
    exampleMeta: 'PDF, a cleaning company',
    generatorText: 'Faster: answer five questions and the document writes itself, under your name.',
    generatorLinkLabel: 'Complete it in 5 minutes with the generator',
    footnote: 'Free to use: adapt it to your project and send it to any provider.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A template to fill in and a complete example',
    intro:
      'The Word file holds the nine parts with, under each heading, an instruction in grey to replace with your own text. The PDF is the same document filled in, to show the level of detail expected.',
    documents: [
      {
        title: 'The template to fill in',
        format: 'Word, editable in Word, LibreOffice, Google Docs or Pages',
        items: [
          'Business and project overview: new project or redesign, tools used today',
          'Goals, each with its measure, and target users',
          'The six usual screens of business software, to cross out or complete',
          'Ten features to sort as essential or nice to have',
          'The data to import (Excel files or other software), technical and legal requirements',
          'Budget, timeline, maintenance and what each quote must include',
        ],
      },
      {
        title: 'The filled-in example',
        format: 'PDF, Propreté Bernard in Cesson-Sévigné, France (fictional company)',
        items: [
          'A cleaning company of 11 to 50 people, creating a tool for the office and the field teams',
          'Three goals, each with its measure: replace the Excel files, schedule the teams, have reliable figures',
          'Five screens: login, dashboard, customers, schedule, settings and users',
          'Seven features sorted as essential or nice to have, including offline mode and signature on a phone',
          'The current Excel files to import, a budget of €5,000 to €15,000 and a launch within six months',
          'The source code and the data in the company’s name, to be confirmed in every quote',
        ],
      },
    ],
  },
  example: {
    eyebrow: 'Project brief example',
    title: 'The filled-in example, to read here',
    intro:
      'The management software of a cleaning company in Cesson-Sévigné, France, as the generator writes it from five answers.',
    expandLabel: 'Read the whole example',
    collapseLabel: 'Collapse the example',
    generatorLinkLabel: 'Make one under my name',
    answers: {
      projectType: 'businessSoftware',
      kind: 'creation',
      companyName: 'Propreté Bernard',
      activity: 'cleaning company: offices, residential buildings and window cleaning',
      city: 'Cesson-Sévigné',
      companySize: 'medium',
      goals: ['planning', 'spreadsheets', 'figures'],
      audience: 'both',
      features: ['roles', 'dashboard', 'spreadsheetImport', 'exports', 'planning', 'offline', 'signature'],
      contentSource: 'client',
      budget: 'from5000to15000',
      launchDate: 'sixMonths',
    },
  },
  sitemap: {
    eyebrow: 'Screen map',
    title: 'The screens of business software',
    intro:
      'This is the part that sets the price. Start from this plan, cross out what does not apply, and add a screen for each task the software must handle.',
    ariaLabel:
      'Plan of business software: the dashboard, then the schedule by team and by site, customers and sites with their contracts, jobs with the visit sheet and the customer’s signature, teams, and settings and users; behind every screen, one account per person, with rights based on their role.',
    rootLabel: 'Dashboard',
    branches: [
      { label: 'Schedule', children: ['By team', 'By site'] },
      { label: 'Customers and sites', children: ['Contracts'] },
      { label: 'Jobs', children: ['Visit sheet', 'Customer signature'] },
      { label: 'Teams', children: [] },
      { label: 'Settings and users', children: [] },
    ],
    footerNote: 'Behind every screen: one account per person, with rights based on their role',
    notes: [
      {
        title: 'One screen per real task',
        text: 'Start from what your teams do every week: the schedule, the visit to a customer, the signature. One screen per task, in the words of your trade.',
      },
      {
        title: 'Roles: who sees what',
        text: 'The office manages customers and the schedule; a field team sees its jobs for the day. Write these roles into the brief: they set the access rights.',
      },
      {
        title: 'What to bring over from Excel',
        text: 'List the files to import (customers, sites, contracts) and their useful columns. A column that nobody fills in does not need to be imported.',
      },
    ],
  },
  howToFill: {
    eyebrow: 'How to fill it in',
    title: 'Fill in the template in four steps',
    intro:
      'Replace each grey instruction with your own text, and delete what does not apply. Fill it in with the people who will use the software: they know the real tasks.',
    steps: [
      {
        label: 'Step 1',
        title: 'Start with the business and the goals',
        description:
          'Five lines about you, what you use today (Excel files, software), three goals with their measure.',
      },
      {
        label: 'Step 2',
        title: 'List the screens, then sort the features',
        description:
          'Keep the usual screens and add one screen per real task. Then sort each feature, essential from day one or nice to have later, and add the roles: who sees what, who changes what.',
      },
      {
        label: 'Step 3',
        title: 'Describe the data to import',
        description: 'Which Excel files or which software, roughly how many rows, and who provides them.',
      },
      {
        label: 'Step 4',
        title: 'Give a budget and a date',
        description: 'A range and a launch date, then the same document to two or three providers.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What French law requires',
    title: 'Four obligations to write into the project brief',
    intro:
      'Business software holds customer and employee data, and sometimes invoices. The template already covers account access and backups: add the rest to the “requirements” part, so that it is priced from the first quote.',
    facts: [
      {
        contextLabel: 'Customers and employees',
        title: 'Data protection (GDPR)',
        text: 'Names, addresses, phone numbers, employee schedules: these are personal data, and the GDPR sets obligations for the business that keeps them. The brief says which data the software records, and who can see it.',
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F24270',
      },
      {
        contextLabel: 'Each data processing activity',
        title: 'The record of processing activities',
        text: 'Customer file, employee schedules: what the software does with this data goes into the business’s record of processing activities. The list of data written in the brief helps keep it up to date.',
        sourceName: 'CNIL',
        sourceUrl: 'https://www.cnil.fr/fr/RGPD-le-registre-des-activites-de-traitement',
      },
      {
        contextLabel: 'Access and backups',
        title: 'Data security',
        text: 'Access by account, rights based on the role, a backup every day: the template already writes these points into the requirements. Keep them, so that every quote prices them.',
        sourceName: 'CNIL',
        sourceUrl: 'https://www.cnil.fr/fr/cybersecurite/securite-des-donnees',
      },
      {
        contextLabel: 'Since 1 September 2026',
        title: 'E-invoicing',
        text: 'Electronic invoicing has been in effect in France since 1 September 2026. If the software must issue invoices, say so in the project brief, so that every quote takes it into account.',
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/actualites/A18953',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Business software project brief: your questions',
    questions: [
      {
        question: 'What should a business software project brief contain?',
        answer:
          'Nine parts: the business, the project, the goals and the users, the screens, the features, the data to import, the technical and legal requirements, the budget with the timeline and maintenance, then what each quote must include. What helps a provider most: the list of screens, each person’s role and the files to import. The template follows that order.',
      },
      {
        question: 'Custom software or off-the-shelf software?',
        answer:
          'Off-the-shelf software is enough when it fits the way you work: it is ready straight away and is usually paid by subscription. Custom software makes sense when none fits, and your teams end up redoing everything in Excel files. The project brief helps in both cases: send it to software publishers too, to compare. If off-the-shelf software is enough for you, I will tell you in our first conversation.',
      },
      {
        question: 'How much does custom business software cost?',
        answer:
          'At Dibodev, €5,000 to €15,000 at a fixed price, set in the quote after a free first conversation. The price depends on the number of screens, users and connections to your other software. Maintenance is priced separately. The custom software price barometer compares the rates published by other French providers.',
      },
      {
        question: 'Should I import my Excel files?',
        answer:
          'Yes, if they are still in use: customers, sites, contracts or rates are imported into the software, so that nobody starts from scratch. In the generator, importing the Excel files is ticked by default and marked essential. Say in the project brief which files to import and which to leave aside.',
      },
      {
        question: 'Who owns the code of the software?',
        answer:
          'Your business, if the project brief and the quote say so. The template writes it twice: in the requirements, then in what each quote must confirm. At Dibodev, the source code and the data belong to you.',
      },
      {
        question: 'Is the template really free?',
        answer:
          'Yes, with no sign-up and no email. You can send it to any provider or software publisher, not just to me.',
      },
    ],
  },
  otherTemplates: {
    eyebrow: 'The other templates',
    title: 'A project other than business software?',
    generatorCard: {
      projectType: 'businessSoftware',
      eyebrow: 'Free generator',
      title: 'Yours in 5 minutes',
      text: 'Five questions, and the document writes itself under your name as you answer. Word or PDF, no email.',
      note: 'Showcase website, online store, business software or mobile app',
    },
    generatorLinkLabel: 'Open the generator',
  },
  contactCta: {
    title: 'Is your project brief filled in?',
    description:
      'Send it to me: I reply within 24 hours, with a price or with my questions. If off-the-shelf software meets your needs, I will tell you.',
    button: 'Ask for a quote',
    generatorLinkLabel: 'Fill it in with the generator',
  },
  mobileBar: {
    text: 'Free template, no email',
    button: 'Download the Word template',
  },
}
