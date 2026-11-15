import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  ASSOCIATION_BODIES_SOURCE,
  ATTENDANCE_LIST_TEMPLATE_DOCX_PATH,
  ATTENDANCE_LIST_TEMPLATE_PDF_PATH,
  ATTENDANCE_LIST_TEMPLATE_UPDATED_AT,
  ATTENDANCE_LIST_TEMPLATE_XLSX_PATH,
  CO_OWNERSHIP_MEETING_SOURCE,
  DATA_PROTECTION_PRINCIPLES_SOURCE,
  SARL_DECISIONS_SOURCE,
  SHAREHOLDERS_MEETING_ATTENDANCE_SOURCE,
  WORKING_HOURS_COUNT_SOURCE,
} from '~/core/constants/freeTemplates/attendanceList/pageShared'

export const ATTENDANCE_LIST_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Attendance sheet: free French template (PDF, Word, Excel)',
    description:
      'Attendance sheet for a meeting or general meeting (proxies, quorum) and monthly attendance list: free French template in PDF, Word and Excel, totals calculated.',
    inLanguage: 'en',
    schemaAbout: 'French meeting attendance sheet and monthly attendance list template',
  },
  breadcrumbLabel: 'Attendance sheet',
  shareImage: {
    titleLines: ['Attendance sheet', 'free French template'],
    highlight: 'Attendance sheet',
    subtitle: 'Meeting or general meeting sheet and monthly attendance list, in PDF, Word and Excel, totals calculated',
    badge: 'Free, no sign-up',
    icon: 'clipboard',
    alt: 'Free French attendance sheet template: meeting or general meeting sheet and monthly attendance list in PDF, Word and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Attendance sheet',
    titleAfter: ': free French template, PDF, Word and Excel (+ monthly attendance list)',
    reassurances: ['Meeting, general meeting or event', 'Monthly list with totals per code', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'Two documents, written in French for organisations in France, for two uses. The attendance sheet (feuille de présence) covers one day: a meeting, a general meeting, a board or an event, with one signature per participant, the proxies of the members represented and the total that tells you whether the quorum is reached. The attendance list (liste de présence) covers a period: a team, a club or a group over a month, one code per day (present, absent, leave, sick) and each person’s totals. The Excel file does the counting.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the French Commercial Code on shareholders’ meetings, the Service-Public pages on limited companies, co-ownership and associations, and the principles of the CNIL, the French data protection authority, so that each box has a reason to be there.',
    updatedAt: ATTENDANCE_LIST_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For company managers, association secretaries, volunteer co-ownership managers, team leaders and club organisers in France. Three files in French, no form to fill in: the PDF prints, the Excel file counts those present, the proxies and the days, the Word file can be edited freely.',
    files: [
      {
        label: 'Download the PDF template',
        href: ATTENDANCE_LIST_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: ATTENDANCE_LIST_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, totals calculated, in French',
      },
      {
        label: 'Download the Word version',
        href: ATTENDANCE_LIST_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 pages, editable, in French',
      },
    ],
    footnote:
      'Free to use and adapt to your statutes and your organisation. It does not replace a lawyer’s advice if a general meeting is challenged.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'An attendance sheet, a monthly attendance list and a summary',
    intro:
      'The PDF holds two A4 pages: the attendance sheet of a meeting or general meeting, in portrait, then the monthly attendance list, in landscape to fit the 31 days. The Excel file holds both, with more lines, and adds a summary of the month and of the last meeting.',
    documents: [
      {
        title: 'Attendance sheet of a meeting or general meeting',
        format: 'Page 1 of the PDF, “Feuille de réunion” sheet of the Excel file',
        items: [
          'Organisation (company, association, co-ownership…) and type in 6 boxes: team meeting, meeting with partners, ordinary or extraordinary general meeting, board, committee, event',
          'Purpose or agenda, date, start time, place or video link, organiser, chair of the meeting',
          '14 participant lines (30 in the Excel file): last name, first name, organisation or role, arrival time, votes, signature; the Excel file adds a status to pick, present, represented, excused or absent',
          'Members represented: member, proxy holder present, votes, “proxy attached” box; the Excel file flags a proxy without a holder, a holder who is not on the list of those present, or one holding more proxies than your statutes allow',
          'Totals: present, represented, votes present and represented, quorum reached or not; in the Excel file, your statutes’ quorum goes in a yellow cell and the answer shows up',
          'Sheet closed at a given time and certified by the chair and the secretary of the meeting, information box for participants (who keeps the sheet, until when, who to contact)',
        ],
      },
      {
        title: 'Monthly attendance list',
        format: 'Page 2 of the PDF in landscape, “Liste du mois” sheet of the Excel file',
        items: [
          'Month, year, team, department or group, person in charge of the list',
          '16 people in rows (20 in the Excel file), the 31 days in columns; in the Excel file, the first day of the month in a yellow cell drives the dates, the day initials and the greyed-out weekends',
          'One code per box: P present, A absent, C leave, M sick, / day not worked; drop-down list and a colour per code in the Excel file',
          'At the end of the row, each person’s total of P, A, C and M, and in the Excel file their attendance rate: P days divided by P + A + M, leave not counted',
          'At the bottom, those present each day, and in the Excel file those absent each day (A + M)',
          'Notes (replacements, team changes), sign-off by the person in charge, reminder on working hours and on sickness',
        ],
      },
      {
        title: 'Summary',
        format: '“Récapitulatif” sheet of the Excel file, not in the PDF',
        items: [
          'Month shown, Monday-to-Friday days of the month, alert threshold in a yellow cell (3 days of absence by default)',
          'Per person: P, A, C, M, attendance rate, days of absence (A + M) and an “À suivre” (to follow up) flag once the threshold is reached',
          'For the team, the totals per code, the average attendance rate and the number of people to follow up',
          'The last meeting at a glance, taken from the meeting sheet: purpose, date, present, represented, votes and quorum',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the attendance sheet in four steps',
    intro:
      'The PDF is filled in by hand and goes round the room. In the Excel file, only the white and yellow cells are typed in: totals, votes, quorum and attendance rates are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Before the meeting, the header and the information box',
        description:
          'Tick the type, write the purpose, the date, the place and the chair. For a general meeting, type in the Excel file the number of votes, the quorum and the number of proxies your statutes set, then the list of those invited. Fill in the information box once and for all: who keeps the sheet, until when, who to contact.',
      },
      {
        label: 'Step 2',
        title: 'On arrival, one line and one signature',
        description:
          'Everyone writes their name, organisation or role, arrival time, and signs. An absent member who gave a proxy goes in the table of those represented, with the name of the proxy holder present; for a general meeting, staple the signed proxy to the sheet.',
      },
      {
        label: 'Step 3',
        title: 'Before the first vote, the totals',
        description:
          'Count those present, those represented and the votes, and tick whether the quorum is reached. Close the sheet at the stated time, cross out the empty lines, and have the chair and the secretary sign: the sheet is filed with the minutes.',
      },
      {
        label: 'Step 4',
        title: 'Each day of the month, one code per person',
        description:
          'On the monthly list, the person in charge writes P, A, C or M in the day’s box, and / on days not worked. For sickness, M is enough, without the reason. At the end of the month, each row’s totals are already done in the Excel file, and the summary flags who is building up absences.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'When the attendance sheet is mandatory in France, and what it does not replace',
    intro:
      'French law requires an attendance sheet for some general meetings, not for a team meeting. Six rules say when it matters and what goes on it; the template does not replace a lawyer’s advice if a general meeting is challenged.',
    facts: [
      {
        contextLabel: 'SA, French Commercial Code, L225-114 and R225-95',
        title: 'Public limited company: a sheet at every meeting, proxies attached',
        text: 'Each shareholders’ meeting has its attendance sheet, with the proxies given to each proxy holder attached, otherwise the resolutions may be annulled. It lists the shareholders present, represented or voting remotely, with their address, shares and votes; those present and the proxy holders sign it, and the meeting’s officers certify it. A meeting held entirely remotely needs no signatures.',
        sourceName: SHAREHOLDERS_MEETING_ATTENDANCE_SOURCE.name,
        sourceUrl: SHAREHOLDERS_MEETING_ATTENDANCE_SOURCE.url,
      },
      {
        contextLabel: 'SARL and SAS',
        title: 'The minutes name the partners present or represented',
        text: 'The Service-Public pages on SARL and SAS decisions say nothing about an attendance sheet, but the minutes must give the names of the partners present or represented and each one’s number of shares. The sheet, signed on arrival, is the simple way to fill in that part without missing anyone. In an SAS, the statutes set the rest.',
        sourceName: SARL_DECISIONS_SOURCE.name,
        sourceUrl: SARL_DECISIONS_SOURCE.url,
      },
      {
        contextLabel: 'Co-ownership',
        title: 'Mandatory at every co-owners’ general meeting',
        text: 'An attendance sheet must be kept at every meeting. It gives the name and address of each co-owner and each proxy holder, whether they are present, represented, remote or voted by post, and each one’s number of votes. It is signed by hand or electronically, the chair certifies it, and it is attached to the minutes.',
        sourceName: CO_OWNERSHIP_MEETING_SOURCE.name,
        sourceUrl: CO_OWNERSHIP_MEETING_SOURCE.url,
      },
      {
        contextLabel: 'French association (loi 1901)',
        title: 'The statutes decide',
        text: 'The statutes freely set the composition of the general meeting, which members vote, and the conditions of notice, voting and quorum. If your statutes provide for a quorum or limit proxies, the attendance sheet is the proof they were respected: the template counts those present, those represented and the proxies per holder.',
        sourceName: ASSOCIATION_BODIES_SOURCE.name,
        sourceUrl: ASSOCIATION_BODIES_SOURCE.url,
      },
      {
        contextLabel: 'Personal data',
        title: 'Little data, a set retention period, people informed',
        text: 'For the CNIL, you collect only the data strictly needed for the purpose of the file, you set a retention period, and only authorised people have access. An attendance sheet needs neither a date of birth nor a home address, unless a text requires it as in an SA or a co-ownership. Article 13 of the GDPR requires people to be informed when the data is collected: that is the template’s information box.',
        sourceName: DATA_PROTECTION_PRINCIPLES_SOURCE.name,
        sourceUrl: DATA_PROTECTION_PRINCIPLES_SOURCE.url,
      },
      {
        contextLabel: 'French Labour Code, D3171-8',
        title: 'An attendance list does not count working hours',
        text: 'When the employees of a team do not share the same posted collective schedule, the employer records each day their start and end times, or the number of hours worked, and totals each person’s hours every week. A P in a box says none of that: for hours, use our time sheet template (fiche de pointage), and keep the attendance list as an organisation tool.',
        sourceName: WORKING_HOURS_COUNT_SOURCE.name,
        sourceUrl: WORKING_HOURS_COUNT_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Attendance sheet: your questions',
    questions: [
      {
        question: 'Is the attendance sheet template really free?',
        answer:
          'Yes. The PDF and the Excel file download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Attendance sheet or attendance list: what is the difference?',
        answer:
          'The attendance sheet covers a single moment, a meeting or a general meeting: everyone signs on arrival, and it proves who was there that day. The attendance list follows a group over time, here over a month: no signature, one code per day and totals. In French, “fiche de présence” is used for either.',
      },
      {
        question: 'Is an attendance sheet mandatory in France?',
        answer:
          'For a shareholders’ meeting of an SA and for a co-owners’ meeting, yes, every time. In an SARL or an SAS, the minutes must name the partners present or represented, and the sheet helps fill them in. In an association, it depends on the statutes. For a team meeting or an event, I found no text that requires it: it is useful proof, not a formality.',
      },
      {
        question: 'How do I count proxies and the quorum?',
        answer:
          'A represented member does not sign: their proxy holder, who is present, is written next to them, and the signed proxy is attached to the sheet. The quorum and the number of proxies per person are set by your statutes or by the rules of your legal form. In the Excel file, you type them in yellow cells: the sheet compares the votes present and represented with the quorum, and flags a proxy holder going over the allowed number. If your statutes count only those present, compare with the total present.',
      },
      {
        question: 'Attendance sheet and time sheet: what is the difference?',
        answer:
          'The attendance sheet says who was there; the time sheet says for how long. When employees do not share the same posted collective schedule, the French Labour Code requires the employer to record each day their start and end times, then total them each week (article D3171-8): an attendance list is not enough. For hours and overtime, use our time sheet template (fiche de pointage).',
      },
      {
        question: 'What about a training session?',
        answer:
          'Use our training attendance sheet template instead (feuille d’émargement formation), in the free templates: it is made for training organisations in France, with a signature per half-day, the activity declaration number and the hours per trainee. The attendance sheet on this page is for meetings, general meetings and events, and the monthly list for teams and groups.',
      },
      {
        question: 'What should I write down, and how long should I keep it?',
        answer:
          'Only what is needed: last name, first name, organisation or role, arrival time and signature are enough for a meeting, plus the address and votes for an SA or co-ownership meeting. For a sick day, write M, never the nature of the illness: the CNIL points out that an employer may not hold medical information on staff. Set a retention period, write it in the information box, then destroy the sheet; a general meeting’s sheet follows the minutes.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'Three sheets. “Liste du mois”: you type the first day of the month in the yellow cell and one code per day, and the totals per code, the attendance rate and those present each day are calculated. “Feuille de réunion”: you give each participant a status, and those present, those represented, the votes and the quorum are calculated, with warnings on proxies. “Récapitulatif” sums up the month per person, flags who is building up absences and summarises the last meeting. The “Exemple” lines show the calculation: delete them.',
      },
      {
        question: 'And when the lists pile up?',
        answer:
          'A paper sheet and an Excel file are enough for a few meetings and one team. Beyond that, copying signatures, chasing proxies and adding up months takes time: a tool that keeps every attendance in one place does it for you. If your lists are for training sessions or classes, the test on the tool page tells you which software to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When signed sheets pile up, proxies arrive by email and monthly lists get copied from one file to the next, a tool that keeps every attendance in one place gives you hours back. Describe your organisation to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare training centre software',
  },
}
