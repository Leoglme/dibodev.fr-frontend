import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  STAFF_DATA_PRINCIPLES_SOURCE,
  STAFF_REGISTER_DIGITAL_SOURCE,
  STAFF_REGISTER_ENTRIES_SOURCE,
  STAFF_REGISTER_KEEPING_SOURCE,
  STAFF_REGISTER_PENALTY_SOURCE,
  STAFF_REGISTER_RETENTION_SOURCE,
  STAFF_REGISTER_TEMPLATE_DOCX_PATH,
  STAFF_REGISTER_TEMPLATE_PDF_PATH,
  STAFF_REGISTER_TEMPLATE_UPDATED_AT,
  STAFF_REGISTER_TEMPLATE_XLSX_PATH,
} from '~/core/constants/freeTemplates/staffRegister/pageShared'

export const STAFF_REGISTER_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Staff register: free French template (PDF, Word, Excel)',
    description:
      'French single staff register, free in PDF, Word and Excel: every entry the Labour Code requires, trainees, civic service volunteers, headcount calculated.',
    inLanguage: 'en',
    schemaAbout: 'French single staff register template with the part for trainees and civic service volunteers',
  },
  breadcrumbLabel: 'Staff register',
  shareImage: {
    titleLines: ['Staff register', 'free French template'],
    highlight: 'Staff register',
    subtitle: 'Employees, trainees and civic service volunteers, in PDF, Word and Excel, French Labour Code entries',
    badge: 'Free, no sign-up',
    icon: 'fileText',
    alt: 'Free French single staff register template: employees, trainees and civic service volunteers in PDF, Word and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Staff register',
    titleAfter: ': free French template, PDF, Word and Excel (+ trainees and civic service)',
    reassurances: ['Every entry of the French Labour Code', 'Trainees and civic service apart', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'The single staff register (registre unique du personnel) is the list, kept in hiring order, of everyone who works in an establishment in France, with the entries set by the French Labour Code. It is neither an attendance sheet nor a time sheet: it does not say who was there or for how many hours, it says who is on the staff, since when and under which contract. Each column of the template matches a required entry, and nothing more. The files are in French.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read one by one the articles of the French Labour Code on the register, the Service-Public page on mandatory registers and the retention guide of the CNIL, the French data protection authority, so that each column points to a text.',
    updatedAt: STAFF_REGISTER_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For craftspeople, shopkeepers, associations and small businesses in France hiring their first employee, and for those catching up on a register left behind. Three files in French, no form to fill in: the PDF prints and is filled in with ink, the Excel file checks the lines and counts the headcount, the Word file can be edited freely.',
    files: [
      {
        label: 'Download the PDF template',
        href: STAFF_REGISTER_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: STAFF_REGISTER_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, headcount calculated, in French',
      },
      {
        label: 'Download the Word version',
        href: STAFF_REGISTER_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 pages, editable, in French',
      },
    ],
    footnote:
      'Free to use, built from the French texts in force on the day of its update. It is not legal advice: for a specific case, ask your payroll provider or a lawyer.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'The employee register, the part for trainees and volunteers, and a summary',
    intro:
      'The PDF holds two A4 pages in landscape, to fit every column: employees on the first, trainees, civic service volunteers and a notice on the second. The Excel file holds both with more lines, checks each entry and adds a yearly summary.',
    documents: [
      {
        title: 'Employee register',
        format: 'Page 1 of the PDF, “Registre du personnel” sheet of the Excel file',
        items: [
          'Header of the establishment (company name, address, SIRET number), opening date of the register and sheet number, to keep track of paper pages',
          '10 employee lines (60 in the Excel file), numbered in hiring order: last name and first names, nationality, date of birth, sex, job, qualification, start and leaving dates',
          'A column for contract entries, with the exact French wording: fixed-term contract, part-time employee, apprentice, professionalisation contract, temporary worker, placed by an employers’ group; drop-down lists in the Excel file',
          'For a foreign worker, the type and serial number of the permit that allows them to work, and the date of the hiring or dismissal authorisation when one is required, or failing that the date of the request',
          'A box for temporary and placed workers, next to their serial number: name and address of the temporary work agency or of the employers’ group',
          'In the Excel file, present or not on the chosen date, end of the retention period, and a “Contrôle” column: missing start date, leaving before starting, hire entered out of order, temporary work agency without a name, work permit to check',
        ],
      },
      {
        title: 'Trainees, civic service volunteers and notice',
        format: 'Page 2 of the PDF, “Stagiaires et volontaires” sheet of the Excel file',
        items: [
          '8 trainee lines (30 in the Excel file), in order of arrival: last name and first names, start and end dates of the internship or work placement, tutor’s names, place where the trainee works',
          '5 lines for civic service volunteers (20 in the Excel file): last name and first names, the only entry required, and an arrival date that shows the order',
          'In the Excel file, internship ongoing or over on the chosen date, and end of the retention period of each line',
          'A notice in one box: who keeps the register, the order of entries, entries to add during the contract, the copy of work permits, the digital register, retention and the penalty, with the article behind each rule',
          'An information box for employees: what the data is for, who keeps it, for how long, who to contact',
        ],
      },
      {
        title: 'Yearly summary',
        format: '“Synthèse” sheet of the Excel file, not in the PDF',
        items: [
          'Year in a yellow cell, people registered and present on 1 January and on 31 December, starters and leavers of the year',
          'A month-by-month table: starters, leavers and people present at month end',
          'People present on the chosen date, by contract entry (fixed-term, part-time, apprentices, professionalisation contracts, temporary workers, employers’ group)',
          'Trainees and volunteers who arrived in the year, and the number of lines whose five-year retention is over',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Keep the staff register in four steps',
    intro:
      'The PDF is filled in with ink, line after line. In the Excel file, only the white and yellow cells are typed in: numbers, presence, retention, checks and summary are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'At the first hire, the header',
        description:
          'Write the company name, the address and the SIRET number of the establishment, and the opening date of the register. A company with several establishments keeps a register in each: one file or one book per address.',
      },
      {
        label: 'Step 2',
        title: 'At each hire, one line after the last',
        description:
          'On the day of hiring, enter the employee after the last one, with all their entries. Do not leave an empty line and never renumber: the serial number follows hiring order. For a foreign worker, attach a copy of their work permit to the register.',
      },
      {
        label: 'Step 3',
        title: 'When something happens, the entry that day',
        description:
          'What happens after hiring is written when it happens: the leaving date on the day of departure, an authorisation received, a new work permit. The employee’s line stays in the register after they leave; only the leaving date closes it.',
      },
      {
        label: 'Step 4',
        title: 'For a trainee or a volunteer, page 2',
        description:
          'A trainee or a civic service volunteer does not go in the employee list, but in the part kept for them, in order of arrival. For a trainee, also write the internship dates, the tutor and the place where they work; for a volunteer, the names are enough.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'Six rules from the French Labour Code and the CNIL',
    intro:
      'In France, the single staff register is a Labour Code obligation, not a habit. Six rules say who keeps it, what goes in it, how and for how long; they sum up the texts read on the day of the update and do not replace a lawyer’s advice.',
    facts: [
      {
        contextLabel: 'Labour Code, L1221-13',
        title: 'One register per establishment, in hiring order',
        text: 'A single staff register is kept in every establishment where employees work. The last names and first names of all employees are entered in hiring order, at the time of hiring and indelibly. Trainees and civic service volunteers go in a separate part, in order of arrival.',
        sourceName: STAFF_REGISTER_KEEPING_SOURCE.name,
        sourceUrl: STAFF_REGISTER_KEEPING_SOURCE.url,
      },
      {
        contextLabel: 'Labour Code, D1221-23',
        title: 'The entries for each employee',
        text: 'Nationality, date of birth, sex, job, qualification, start and leaving dates; the date of the hiring or dismissal authorisation when one is required; for a foreign worker, the type and serial number of the work permit. Then, depending on the case, “contrat à durée déterminée” (fixed-term), “salarié à temps partiel” (part-time), “apprenti” or “contrat de professionnalisation”, “salarié temporaire” with the name and address of the temporary work agency, or placement by an employers’ group with its name and address.',
        sourceName: STAFF_REGISTER_ENTRIES_SOURCE.name,
        sourceUrl: STAFF_REGISTER_ENTRIES_SOURCE.url,
      },
      {
        contextLabel: 'Labour Code, R1221-26',
        title: 'Five years after leaving',
        text: 'The register entries are kept for five years from the day the employee or trainee left the establishment. The CNIL retention guide for human resources data lists this period as an obligation. A line is therefore not erased when someone leaves: the Excel file calculates the end of retention for each one.',
        sourceName: STAFF_REGISTER_RETENTION_SOURCE.name,
        sourceUrl: STAFF_REGISTER_RETENTION_SOURCE.url,
      },
      {
        contextLabel: 'Labour Code, D1221-27, D8113-2 and L2315-5',
        title: 'On a computer, under three conditions',
        text: 'The register may be kept on a substitute medium, a computer for instance. That medium must hold every entry, with no difficulty of use and no risk of alteration, be presented like the paper register and be kept as long. The social and economic committee (CSE), if there is one, is consulted beforehand, and its opinion is sent to the labour inspectorate.',
        sourceName: STAFF_REGISTER_DIGITAL_SOURCE.name,
        sourceUrl: STAFF_REGISTER_DIGITAL_SOURCE.url,
      },
      {
        contextLabel: 'Labour Code, R1227-7',
        title: 'One fine per employee concerned',
        text: 'Not keeping the register, or keeping it without the required entries, is punished by the fine for fourth-class offences, that is 750 euros at most (Criminal Code, article 131-13). It applies as many times as there are employees concerned. The register is kept available to the CSE and to inspection officers (article L1221-15).',
        sourceName: STAFF_REGISTER_PENALTY_SOURCE.name,
        sourceUrl: STAFF_REGISTER_PENALTY_SOURCE.url,
      },
      {
        contextLabel: 'Personal data',
        title: 'The required entries, and nothing more',
        text: 'For the CNIL, you only collect the data strictly needed for the purpose of the file, and only authorised people may access it. The list of article D1221-23 includes no home address, no social security number and no salary: that data belongs in the employee file or the payroll, not in the register. The template has no column for it.',
        sourceName: STAFF_DATA_PRINCIPLES_SOURCE.name,
        sourceUrl: STAFF_DATA_PRINCIPLES_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Staff register: your questions',
    questions: [
      {
        question: 'Is the staff register template really free?',
        answer:
          'Yes. The PDF, the Excel file and the Word file download without sign-up or email address, and you can edit, print and reuse them as much as you like. The only thing in return: a “modèle proposé par Dibodev” line in the footer, which you can remove.',
      },
      {
        question: 'Who must keep a single staff register in France?',
        answer:
          'Every employer, from the hiring of the first employee, whatever the size of the business: Service-Public lists it among the mandatory registers. The Labour Code requires it in each establishment where employees work, so one register per establishment. A business with no employee does not keep one; if it takes on a trainee, the trainee’s entries are then tracked in another document (article D1221-23-1).',
      },
      {
        question: 'What are the mandatory entries?',
        answer:
          'For each employee: last name and first names, nationality, date of birth, sex, job, qualification, start and leaving dates, and depending on the case the contract entry (fixed-term, part-time, apprentice, professionalisation contract, temporary worker, employers’ group), a foreign worker’s work permit and the date of a hiring or dismissal authorisation. Each has its column in the template. For a trainee and a volunteer, the entries are shorter: that is page 2.',
      },
      {
        question: 'Do temporary workers, trainees and volunteers go in it?',
        answer:
          'Yes, each in its place. A temporary worker is entered in the employee list of the company where they work, with the entry “salarié temporaire” and the name and address of the temporary work agency; so is an employee placed by an employers’ group, with the group’s name and address. Trainees and civic service volunteers go in the separate part, in order of arrival.',
      },
      {
        question: 'Can the register be kept in Excel?',
        answer:
          'The register may be kept on a computer, provided it holds every entry with no risk of alteration, is presented like the paper register and is kept as long; the CSE, if there is one, is consulted beforehand and its opinion is sent to the labour inspectorate. An Excel file that can be rewritten without leaving a trace meets the alteration condition poorly. The simplest way with this template: prepare and check in Excel, then print the sheets and keep them.',
      },
      {
        question: 'How long must the register be kept?',
        answer:
          'Entries are kept for five years from the departure of the employee or trainee (article R1221-26 of the Labour Code). A former employee’s line therefore stays in the register during that time, with its leaving date. The Excel file calculates the end of retention for each line, and the summary counts those past it.',
      },
      {
        question: 'Who can see the staff register?',
        answer:
          'The register is kept available to the CSE and to the officers in charge of enforcing the Labour Code and the Social Security Code, such as the labour inspectorate. The copy of foreign employees’ work permits, attached to the register, is accessible to them in the same way. Beyond them, only the people who need it for their work should have access.',
      },
      {
        question: 'What is the risk without an up-to-date register?',
        answer:
          'Having no register, or a register without the required entries, is punished by the fine for fourth-class offences, 750 euros at most, applied as many times as there are employees concerned (article R1227-7 of the Labour Code and 131-13 of the Criminal Code). Service-Public gives the same amount. A register filled in on the day of each hire avoids this risk for a few minutes per employee.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'Three sheets. “Registre du personnel”: one line per employee, contract entries in drop-down lists, and for each line presence on the date chosen in the yellow cell, end of retention and checks. “Stagiaires et volontaires” does the same for the separate part. “Synthèse” counts, for the chosen year, starters, leavers and people present month by month. The “Exemple” lines show the calculation: delete them.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When the team grows, technicians change contracts or sites, and the register, the schedules and the job sheets live in separate files, a tool that keeps each person’s history saves you from copying everything again. Describe your organisation to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare field service software',
  },
}
