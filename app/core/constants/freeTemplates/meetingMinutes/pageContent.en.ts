import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  ASSOCIATION_POST_MEETING_DECLARATION_SOURCE,
  ASSOCIATION_STATUTES_SOURCE,
  CO_OWNERSHIP_MINUTES_SOURCE,
  CSE_MINUTES_SOURCE,
  MEETING_MINUTES_TEMPLATE_DOCX_PATH,
  MEETING_MINUTES_TEMPLATE_PDF_PATH,
  MEETING_MINUTES_TEMPLATE_UPDATED_AT,
  MEETING_MINUTES_TEMPLATE_XLSX_PATH,
  SARL_MINUTES_CONTENT_SOURCE,
  SARL_MINUTES_OBLIGATION_SOURCE,
} from '~/core/constants/freeTemplates/meetingMinutes/pageShared'

export const MEETING_MINUTES_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Meeting minutes: free French template (PDF, Word, Excel)',
    description:
      'Free French meeting minutes template in PDF, Word and Excel: points discussed, decision log, action plan and delays calculated, for organisations in France.',
    inLanguage: 'en',
    schemaAbout: 'French meeting minutes template with a decision log and an action plan',
  },
  breadcrumbLabel: 'Meeting minutes',
  shareImage: {
    titleLines: ['Meeting minutes', 'free French template'],
    highlight: 'Meeting minutes',
    subtitle: 'Points discussed, decision log and action plan, in PDF, Word and Excel, delays calculated',
    badge: 'Free, no sign-up',
    icon: 'fileText',
    alt: 'Free French meeting minutes template: points discussed, decision log and action plan in PDF, Word and Excel, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Meeting minutes',
    titleAfter: ': free French template, PDF, Word and Excel (+ decision log and action plan)',
    reassurances: [
      'Team, site or board meeting',
      'Actions followed from one meeting to the next',
      'No sign-up, no email',
    ],
    aboutTitle: 'About the template',
    description:
      'A meeting is judged by what is left of it the next day. This template, written in French for organisations in France, keeps three things: what was said on each point, what was decided, and who does what by when. The first page is the minutes (compte rendu) you send to the participants. The second is the decision log and the action plan, the page you read again at the start of the next meeting to see what has moved. The Excel file calculates the delays.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the French Commercial Code on limited companies (SARL), the French Labour Code on the works council (CSE), the 1967 decree on co-ownership and the Service-Public pages on associations, to know when minutes are enough and when French law requires formal minutes (procès-verbal).',
    updatedAt: MEETING_MINUTES_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For company managers, team leaders, site managers, project managers and association secretaries in France. Three files in French, no form to fill in: the PDF prints to take notes during the meeting, the Word file is filled in and sent, the Excel file tracks the actions and flags what has slipped.',
    files: [
      {
        label: 'Download the PDF template',
        href: MEETING_MINUTES_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: MEETING_MINUTES_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 sheets, delays calculated, in French',
      },
      {
        label: 'Download the Word version',
        href: MEETING_MINUTES_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 pages, editable, in French',
      },
    ],
    footnote:
      'Free to use and adapt to your organisation. It does not replace formal minutes where a text requires them, nor a lawyer’s advice.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'Minutes, a decision log and a tracked action plan',
    intro:
      'The PDF and the Word file hold two A4 pages: the minutes of the meeting, then the decision log and the action plan. The Excel file holds the minutes, keeps every action from one meeting to the next in a single list, and adds a summary.',
    documents: [
      {
        title: 'Meeting minutes',
        format: 'Page 1 of the PDF and Word file, “Compte rendu” sheet of the Excel file',
        items: [
          'Organisation and type of meeting in 6 boxes: team meeting, site meeting, client or partner, steering committee, board or committee, other',
          'Purpose, date, start and end times, place or video call, who chairs, who writes the minutes',
          'Those present with their role (8 lines), those excused or absent, and the distribution list: people who receive the minutes without having attended; in the Excel file, a status to pick for 15 people',
          'Points discussed, one per line: subject, what was said (information, opinions, figures), decision or follow-up; in the Excel file, 12 points and a follow-up to pick, decision, for information or postponed',
          'Next meeting (date, time, place, points already planned), date the minutes were sent and deadline for comments',
          'Signatures of the writer and the proofreader, and a reminder of the cases where formal minutes are required',
        ],
      },
      {
        title: 'Decision log and action plan',
        format: 'Page 2 of the PDF and Word file, “Suivi des actions” sheet of the Excel file',
        items: [
          'Meeting concerned, log number, person in charge of following up the actions',
          'Decisions numbered D1 to D5: exact wording, point it comes from, how it was taken (agreement, vote, arbitration), effective date',
          'Action plan on 10 lines (40 in the Excel file): action, a single owner, due date, related decision, status, comment',
          'Five statuses carried from one meeting to the next: to do, in progress, done, postponed, dropped',
          'In the Excel file, a reference date (today by default) and, for each action, the delay in days and its situation: on time, due within 7 days, late, done on time or done late',
          'Postponed points or open questions, to put back on the next agenda, and sign-off of the log',
        ],
      },
      {
        title: 'Summary',
        format: '“Synthèse” sheet of the Excel file, not in the PDF',
        items: [
          'The meeting in figures: length, present, excused, absent, points discussed, points with a decision, postponed points, date of the next one',
          'The actions: open, late, due within 7 days, average delay, done, share done on time, dropped',
          'For each participant, their open, late, soon-due, done and done-late actions',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Write meeting minutes in four steps',
    intro:
      'Minutes are written in two goes: quick notes during the meeting, the clean version right after. In the Excel file, only the white cells and the yellow cell are typed in: counts, delays and the summary are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Before starting, the header and the writer',
        description:
          'Write the purpose, date, time and place, and choose who takes the minutes: not the person chairing, or one of the two roles gets neglected. Open page 2 with the actions still open from the previous meeting, and go through them first.',
      },
      {
        label: 'Step 2',
        title: 'During the meeting, one point per line',
        description:
          'For each subject, write the gist of what was said, the figures and opinions that mattered, not the exchanges word for word. As soon as a decision is made, read it aloud and write it down as it was accepted: that is what goes into the log.',
      },
      {
        label: 'Step 3',
        title: 'Before leaving, who does what by when',
        description:
          'Each action gets a verb, a single owner and a date. “Check with the supplier” is not an action; “Sarah asks for a third quote before the 4th” is one. What could not be covered goes into the postponed points, and the date of the next meeting is set while everyone is in the room.',
      },
      {
        label: 'Step 4',
        title: 'After the meeting, sending and follow-up',
        description:
          'Tidy up the minutes, have them proofread, then send them to those present, those excused and the distribution list, with a deadline for comments. In the Excel file, copy the actions into the follow-up sheet: at the next meeting, the “Situation” column shows what is late before the discussion even starts.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'Minutes or formal minutes: when French law sets the form',
    intro:
      'For a team meeting, a site meeting or a meeting with a client, I found no French text that sets the form of minutes. Some bodies, on the other hand, must keep formal minutes (procès-verbal), whose content, signatories and sometimes deadline are written in the law; the template does not replace a lawyer’s advice in those cases.',
    facts: [
      {
        contextLabel: 'Minutes or formal minutes',
        title: 'Minutes are free, formal minutes are required',
        text: 'None of the texts I read defines minutes (compte rendu): they are a working document, organised as each team sees fit. Formal minutes (procès-verbal) are required by law for some bodies. The Service-Public page on SARL decisions only uses that word: formal minutes after every partners’ meeting and every written consultation, signed by the manager(s), then filed in the company’s minutes register.',
        sourceName: SARL_MINUTES_OBLIGATION_SOURCE.name,
        sourceUrl: SARL_MINUTES_OBLIGATION_SOURCE.url,
      },
      {
        contextLabel: 'SARL, French Commercial Code, R223-24 and R221-3',
        title: 'The partners’ meeting minutes have a set content',
        text: 'They state the date and place, the chair, the partners present or represented with their shares, the documents submitted, a summary of the debate, the text of the resolutions and the voting results. The managers draw them up and sign them, with the chair if there is one. They go into a special register kept at the registered office, numbered and initialled by a judge or the mayor, or kept electronically with an advanced electronic signature.',
        sourceName: SARL_MINUTES_CONTENT_SOURCE.name,
        sourceUrl: SARL_MINUTES_CONTENT_SOURCE.url,
      },
      {
        contextLabel: 'CSE, French Labour Code, L2315-34 and D2315-26',
        title: 'The works council secretary writes, the employer answers at the next meeting',
        text: 'The deliberations of the works council (comité social et économique) are recorded in formal minutes drawn up by its secretary, and statements are written into them. The deadline and the procedure are set by agreement. Without an agreement, the minutes go to the employer within 15 days of the meeting and contain at least a summary of the deliberations and the employer’s reasoned decision on the proposals of the previous meeting.',
        sourceName: CSE_MINUTES_SOURCE.name,
        sourceUrl: CSE_MINUTES_SOURCE.url,
      },
      {
        contextLabel: 'Co-ownership, decree of 17 March 1967, art. 17',
        title: 'The result of every vote, opponents named',
        text: 'The minutes of the general meeting give, under each agenda item, the result of the vote, the names and votes of those who voted against or abstained, and any reservations on the validity of the decisions. They are signed by the chair, the secretary and the scrutineers, at the end of the meeting or at the latest within 8 days, then entered in the register. The managing agent notifies the decisions within one month, and those who voted against or were absent have 2 months to challenge them.',
        sourceName: CO_OWNERSHIP_MINUTES_SOURCE.name,
        sourceUrl: CO_OWNERSHIP_MINUTES_SOURCE.url,
      },
      {
        contextLabel: 'French association (loi 1901)',
        title: 'The statutes decide how records are kept',
        text: 'The statutes freely set the composition and powers of the general meeting, and how the board and the executive committee work; internal rules may add to them. If your statutes call for formal minutes signed by the president and the secretary, follow them to the letter. Otherwise, clear minutes with a decision log are enough for ordinary meetings.',
        sourceName: ASSOCIATION_STATUTES_SOURCE.name,
        sourceUrl: ASSOCIATION_STATUTES_SOURCE.url,
      },
      {
        contextLabel: 'Association, after the general meeting',
        title: 'Some decisions are declared within 3 months',
        text: 'In principle, nothing has to be declared to the prefecture after each general meeting. But a change of name or purpose, of registered address, of managers or of statutes, the opening or closing of a place of activity, the purchase or sale of property are declared within the following 3 months. The decision log then works as a checklist: what has to be declared, by whom, before which date.',
        sourceName: ASSOCIATION_POST_MEETING_DECLARATION_SOURCE.name,
        sourceUrl: ASSOCIATION_POST_MEETING_DECLARATION_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Meeting minutes: your questions',
    questions: [
      {
        question: 'Is the meeting minutes template really free?',
        answer:
          'Yes. The PDF, the Word file and the Excel file download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Minutes or formal minutes: what is the difference?',
        answer:
          'Minutes (compte rendu) are a working document: no French text I read sets their form, they are there to inform and to follow up decisions. Formal minutes (procès-verbal) are required by law for some bodies, with a set content, signatories and sometimes a register and a deadline. In an SARL, for example, they give the partners present or represented, a summary of the debate, the text of the resolutions and the voting results, and the manager signs them.',
      },
      {
        question: 'When are formal minutes mandatory in France?',
        answer:
          'Among the cases I checked: the partners’ meeting of an SARL and its written consultations, works council (CSE) meetings, the co-owners’ general meeting. In an association, the statutes say so. For a team meeting, a site meeting or a meeting with a client, I found no obligation: minutes are a good habit, not a formality. If in doubt for a specific body, read its statutes or ask a lawyer.',
      },
      {
        question: 'What should go into meeting minutes?',
        answer:
          'The header (purpose, date, place, those present, those excused), then for each point what useful things were said and what was decided. Not the exchanges word for word, nor who was right: facts, figures, decisions. And above all, at the end, the actions with an owner and a date, otherwise the minutes are read once and forgotten.',
      },
      {
        question: 'What about site meeting minutes?',
        answer:
          'The same template works: tick “Réunion de chantier” (site meeting), write each person’s company next to their name, and cover one trade or one area per line. The action plan becomes the list of what each company must do before the next meeting, with its due date. Photos and plans are attached as appendices, numbered in the “what was said” column.',
      },
      {
        question: 'How soon should the minutes be sent?',
        answer:
          'For an ordinary meeting, I found no deadline set by a French text: send them while everyone still remembers the meeting, within the following days, so that the actions get started. For required formal minutes, the deadline is written down: for the works council (CSE), without an agreement, they go to the employer within 15 days; in a co-ownership, they are signed at the end of the meeting or within 8 days, then the decisions are notified within the month.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'Three sheets. “Compte rendu”: the header, participants with a status and points with their follow-up (decision, for information, postponed). “Suivi des actions”: one line per action, an owner picked from the participants, a due date and a status; the delay and the situation are calculated against the reference date, today by default. “Synthèse” counts those present, the decisions, the open and late actions, and each person’s workload. The “Exemple” lines show the calculation: delete them.',
      },
      {
        question: 'Do the minutes have to be signed?',
        answer:
          'For an ordinary meeting, I found no French text that requires it. Proofreading by a second participant and a deadline for comments are usually enough: after that date, the version sent becomes the team’s reference. The template’s signature boxes are there when you want a firmer record. For required formal minutes, the signatories are set by the text: the manager in an SARL, the chair, secretary and scrutineers in a co-ownership.',
      },
      {
        question: 'And when the minutes pile up?',
        answer:
          'An Excel file is enough for one team and one meeting a month. Beyond that, finding a decision in twenty files, chasing everyone on their actions and copying open actions from one set of minutes to the next takes time: a tool that keeps meetings, decisions and actions in one place does it for you. If your meetings revolve around training sessions or classes, the test on the tool page tells you which software to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When minutes get lost in inboxes, the same actions come back “in progress” from one meeting to the next and nobody knows any more which decision was made when, a tool that keeps everything in one place gives you hours back. Describe your organisation to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare training centre software',
  },
}
