import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  ASSOCIATION_BODIES_SOURCE,
  SARL_DECISIONS_SOURCE,
} from '~/core/constants/freeTemplates/attendanceList/pageShared'
import {
  CO_OWNERSHIP_MEETING_NOTICE_SOURCE,
  CSE_AGENDA_NOTICE_SOURCE,
  CSE_AGENDA_SETTING_SOURCE,
  MEETING_AGENDA_TEMPLATE_DOCX_PATH,
  MEETING_AGENDA_TEMPLATE_PDF_PATH,
  MEETING_AGENDA_TEMPLATE_UPDATED_AT,
  MEETING_AGENDA_TEMPLATE_XLSX_PATH,
  SMALL_CSE_WRITTEN_REQUESTS_SOURCE,
} from '~/core/constants/freeTemplates/meetingAgenda/pageShared'

export const MEETING_AGENDA_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Meeting agenda: free French template (PDF, Word, Excel)',
    description:
      'Timed meeting agenda and meeting notice: free French template in PDF, Word and Excel, each item’s time calculated, invitees’ replies tracked.',
    inLanguage: 'en',
    schemaAbout: 'French timed meeting agenda and meeting notice template',
  },
  breadcrumbLabel: 'Meeting agenda',
  shareImage: {
    titleLines: ['Meeting agenda', 'free French template'],
    highlight: 'Meeting agenda',
    subtitle: 'Timed agenda and meeting notice, in PDF, Word and Excel, times calculated',
    badge: 'Free, no sign-up',
    icon: 'clipboard',
    alt: 'Free French meeting agenda template: timed agenda and meeting notice in PDF, Word and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Meeting agenda',
    titleAfter: ': free French template, PDF, Word and Excel (+ meeting notice)',
    reassurances: ['Timed items, times calculated', 'Notice with a reply slip', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'An agenda (ordre du jour) that fits on one page, written in French for organisations in France, and the meeting notice (convocation) that goes with it. Each item has its time, its length, the person leading it and what is expected from the room: information, discussion or a decision. The notice says where, when, what for, with which documents, and asks for a reply by a given date. In the Excel file, you type the start time and the lengths: each item’s time and the end time are calculated.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. Before writing this template, I read on Légifrance and Service-Public the French notice rules for a limited company (SARL) partners’ meeting, a works council (CSE) and a co-owners’ meeting, so that the notice tells you which deadline to check.',
    updatedAt: MEETING_AGENDA_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For company managers, project leads, works council and association secretaries and volunteer co-ownership managers in France. Three files in French, no form to fill in: the PDF prints, the Excel file calculates the times and tracks replies, the Word file can be edited freely.',
    files: [
      {
        label: 'Download the PDF template',
        href: MEETING_AGENDA_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: MEETING_AGENDA_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, times calculated, in French',
      },
      {
        label: 'Download the Word version',
        href: MEETING_AGENDA_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 pages, editable, in French',
      },
    ],
    footnote:
      'Free to use and adapt to your statutes and your organisation. It does not replace a lawyer’s advice when the validity of a general meeting or a works council meeting is at stake.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A timed agenda, a meeting notice and invitee tracking',
    intro:
      'The PDF holds two A4 pages: the agenda, then the notice that goes with it. The Excel file holds the agenda with calculated times, adds the list of invitees and a summary that tells you whether everything is ready.',
    documents: [
      {
        title: 'Timed agenda',
        format: 'Page 1 of the PDF, “Ordre du jour” sheet of the Excel file',
        items: [
          'Meeting type in 6 boxes: team meeting, project or client meeting, management committee, board or council, works council (CSE), general meeting',
          'Purpose, date, start time and planned end time, place or video link, facilitator, secretary who takes the notes',
          'An “objective” line: what the meeting must have produced when it ends',
          '10 items (15 in the Excel file): time, subject, who leads it, length in minutes, and a box saying whether the item is for information, discussion or decision',
          'A “read before” column for the document everyone should have opened, with the opening and any other business already placed first and last',
          'Total length, end time and a “postponed items” box for what does not fit in the time',
        ],
      },
      {
        title: 'Meeting notice',
        format: 'Page 2 of the PDF',
        items: [
          'Sender, recipient, place and date of sending, sending method to tick (email, ordinary letter, registered letter with acknowledgement of receipt, electronic registered letter, hand delivery against signature)',
          'Subject line and notice text to complete: meeting type, date, time, place or link',
          '8 lines to copy the agenda, each marked information or decision',
          'Attachments to tick: detailed agenda, draft resolutions, accounts or reports, quotes, proxy form, postal voting form',
          'Reply deadline, signature, and a reply slip to cut out: present, represented by, apologies',
          'A table of notice periods: SARL partners’ meeting, works council with 50 employees or more, works council with fewer than 50, co-ownership, association',
        ],
      },
      {
        title: 'Invitee tracking and summary',
        format: '“Convoqués” and “Synthèse” sheets of the Excel file, not in the PDF',
        items: [
          'Minimum notice period in a yellow cell, and the last day to send that follows from it',
          '30 invitees: name, role, address or email, sending method, date sent, reply (present, represented, apologies, no reply), proxy holder',
          'Per row, the number of days between sending and the meeting, and a warning if the notice went out too late or the reply is missing',
          'Summary of the meeting and of the notices sent, with the share of time spent on decisions and the notices sent late',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Prepare the agenda and the notice in four steps',
    intro:
      'The PDF is filled in by hand or copied into an email. In the Excel file, only the white and yellow cells are typed in: times, totals and warnings are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Start from what the meeting must produce',
        description:
          'Write the objective first, in one sentence: “by the end, we will have chosen the supplier and set the schedule”. Then list the items that lead there. I put decisions early, while everyone is still there and focused; a subject that does not serve the objective goes into postponed items.',
      },
      {
        label: 'Step 2',
        title: 'A length and a name for each item',
        description:
          'For each item, write who leads it, how many minutes it needs and what is expected from the room: information, discussion or decision. In the Excel file, each item’s time follows, and the sheet warns you if the end goes past the time you set.',
      },
      {
        label: 'Step 3',
        title: 'Check the notice period, then send',
        description:
          'Find the notice period that applies: your statutes, your rules, or French law for an SARL, a works council or a co-ownership. Type it into the invitees sheet, attach the documents to read, and send before the deadline shown. Note each person’s sending date and method: that is your proof.',
      },
      {
        label: 'Step 4',
        title: 'Track replies until the day',
        description:
          'Record replies as they come: present, represented, apologies. The Excel file flags those who have not replied. During the meeting, the agenda is the thread: the facilitator announces the item and its time, and moves on when the planned time is reached.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'Who sets the agenda in France, and how much notice to give',
    intro:
      'For a team or project meeting, I found no French text requiring an agenda or a notice period. For an SARL partners’ meeting, a works council or a co-ownership, French law sets them; in an association, the statutes do. Six reference points, to check against your own statutes: this template is not legal advice.',
    facts: [
      {
        contextLabel: 'SARL (French limited company)',
        title: 'Partners’ meeting: 15 days, the agenda in the letter',
        text: 'Partners are called by registered letter at least 15 days before the meeting, unless the statutes set a longer period, and the letter states the agenda. Email is possible for partners who agreed to it at least 20 days before the next meeting, with the same 15-day period. The text of the resolutions and the manager’s report are sent to them within that period, plus the annual accounts for the meeting that approves them.',
        sourceName: SARL_DECISIONS_SOURCE.name,
        sourceUrl: SARL_DECISIONS_SOURCE.url,
      },
      {
        contextLabel: 'Works council (CSE), 50 employees or more, French Labour Code, L2315-29',
        title: 'The agenda is written by two people',
        text: 'The agenda of each works council meeting is set by the chair and the secretary. Consultations made mandatory by law, regulation or a collective agreement go on it as of right, added by the chair or the secretary. The template’s “led by” column also keeps track of who asked for each item.',
        sourceName: CSE_AGENDA_SETTING_SOURCE.name,
        sourceUrl: CSE_AGENDA_SETTING_SOURCE.url,
      },
      {
        contextLabel: 'Works council (CSE), 50 employees or more, French Labour Code, L2315-30',
        title: 'At least three days before the meeting',
        text: 'The chair sends the agenda to the committee members at least three days before the meeting, and within the same period to the labour inspection officer and to the prevention officer of the social security bodies. Add these two recipients to the invitees list in the Excel file: the sending date stays next to their name.',
        sourceName: CSE_AGENDA_NOTICE_SOURCE.name,
        sourceUrl: CSE_AGENDA_NOTICE_SOURCE.url,
      },
      {
        contextLabel: 'Works council (CSE), fewer than 50 employees, French Labour Code, L2315-22',
        title: 'Staff representatives’ requests, in writing, two working days before',
        text: 'Barring exceptional circumstances, the members of the staff delegation give the employer a written note setting out their requests two working days before the meeting. The employer answers in writing no later than six working days after the meeting. Write that deadline on the notice so that requests arrive in time.',
        sourceName: SMALL_CSE_WRITTEN_REQUESTS_SOURCE.name,
        sourceUrl: SMALL_CSE_WRITTEN_REQUESTS_SOURCE.url,
      },
      {
        contextLabel: 'Co-ownership',
        title: '21 calendar days, one question per vote',
        text: 'The notice goes out at least 21 calendar days before the meeting, unless the co-ownership rules set a longer period or there is an emergency. It gives the place, date and time, and an agenda where each question is clearly worded, put to a separate vote, with the majority required. A subject missing from the agenda may be discussed, not voted on; a question requested too late moves to the next meeting.',
        sourceName: CO_OWNERSHIP_MEETING_NOTICE_SOURCE.name,
        sourceUrl: CO_OWNERSHIP_MEETING_NOTICE_SOURCE.url,
      },
      {
        contextLabel: 'French association (loi 1901)',
        title: 'The statutes set the notice',
        text: 'For an association, Service-Public points to the statutes or the internal rules: they set the conditions of notice, voting and quorum for the general meeting. Reread the relevant article of your statutes before sending (period, form, who calls the meeting, documents to attach), then type that period into the Excel file to get the last day to send.',
        sourceName: ASSOCIATION_BODIES_SOURCE.name,
        sourceUrl: ASSOCIATION_BODIES_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Meeting agenda: your questions',
    questions: [
      {
        question: 'Is the meeting agenda template really free?',
        answer:
          'Yes. The PDF, the Excel file and the Word file download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Agenda and meeting notice: what is the difference?',
        answer:
          'The agenda is the list of subjects, in the order they will be dealt with. The notice is the invitation: it says who is expected, where, when, and it carries the agenda. For an SARL or co-ownership meeting in France, the notice must contain the agenda; that is why the template puts one after the other.',
      },
      {
        question: 'How many items should go on the agenda?',
        answer:
          'No text sets a number. The real limit is time: add up the lengths, compare with the end time, and take out what goes over. One item equals one question, worded so that everyone knows what is expected from the room. What does not fit goes into postponed items, with a date.',
      },
      {
        question: 'Can an item added under “any other business” be voted on?',
        answer:
          'In a French co-ownership, no: Service-Public says it plainly, a subject missing from the agenda may be discussed, not voted on. For another kind of general meeting, check your statutes; when in doubt, put the item on the agenda with the decision expected rather than relying on any other business. In a team meeting, it is a matter of habit.',
      },
      {
        question: 'How much notice should a meeting notice give in France?',
        answer:
          'At least 15 days for an SARL partners’ meeting, at least 21 calendar days for a co-owners’ meeting, at least three days for the agenda of a works council with 50 employees or more. In an association, the statutes decide. Statutes and rules may lengthen these periods. For a team meeting, no text applies: give everyone time to read the documents.',
      },
      {
        question: 'Must the notice be sent by registered letter?',
        answer:
          'For an SARL, yes, except for partners who agreed to email. In a co-ownership, the notice goes out electronically, unless the co-owner asked for a registered letter with acknowledgement of receipt, or by hand against signature. For a works council, the article on the agenda that I read does not set the form. In every case, keep each person’s sending date and method: the invitees sheet is made for that.',
      },
      {
        question: 'Agenda, attendance sheet, minutes: in what order?',
        answer:
          'The agenda and the notice go out before the meeting. The attendance sheet is signed on arrival. The minutes are written afterwards, taking the items in the same order, with what was decided. All three are in the site’s free templates: our attendance sheet template (feuille de présence) and our meeting minutes template (compte rendu de réunion) complete this one.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'Three sheets. “Ordre du jour”: you type the start time in the yellow cell, then a length per item, and each item’s start and end times are calculated, with a warning if the meeting goes past the end time you want. “Convoqués”: you type the notice period, each person’s sending date and reply, and the sheet flags late notices and missing replies. “Synthèse” sums up both. The “Exemple” lines show the calculation: delete them.',
      },
      {
        question: 'And when meetings follow one another?',
        answer:
          'A paper agenda and an Excel file are enough for a few meetings a month. Beyond that, copying items from one meeting to the next, chasing invitees and finding who replied takes time: a tool that keeps everything in one place does it for you. If your meetings are for training sessions or classes, the test on the tool page tells you which software to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When meetings follow one another, notices go out to thirty people and replies arrive by email, by text and in the corridor, a tool that keeps agendas, invitees and replies in one place gives you hours back. Describe your organisation to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare training centre software',
  },
}
