import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/landscaperMaintenanceContract/pageShared'
import {
  BIOWASTE_SORTING_SOURCE,
  GARDENING_HOME_SERVICES_SOURCE,
  HOME_SERVICES_TAX_CREDIT_SOURCE,
  LANDSCAPING_TEMPLATE_PDF_PATH,
  LANDSCAPING_TEMPLATE_XLSX_PATH,
  LANDSCAPING_VAT_SOURCE,
} from '~/core/constants/tools/landscapingSoftware/pageShared'

export const LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Garden maintenance contract: free French template (+ quote)',
    description:
      'Garden maintenance contract: free French template in Excel and PDF, with a landscaping quote. 10 or 20% VAT, deposit, home services scheme. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French garden maintenance contract and landscaping quote template',
  },
  breadcrumbLabel: 'Garden maintenance contract',
  shareImage: {
    titleLines: ['Maintenance contract', 'free French template'],
    highlight: 'Maintenance contract',
    subtitle: 'Garden maintenance contract and landscaping quote in Excel and PDF, 10 or 20% VAT, home services scheme',
    badge: 'Free, no sign-up',
    icon: 'fileText',
    alt: 'Free French garden maintenance contract: contract and landscaping quote in Excel and PDF, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Garden maintenance contract',
    titleAfter: ': free French template (+ landscaping quote)',
    reassurances: ['Maintenance contract + quote', 'Excel with calculated totals', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'A landscaping quote and a garden maintenance contract ready to fill in, written in French for the French market, for a sole landscaper or a small green-space team. The quote details structures, plants and labour, applies 10% or 20% VAT line by line and carries the customer’s statement for the reduced rate. The contract sets the services, the year’s visits, the price and its review, with a column for home-service jobs.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I read the French rules on VAT for garden works, home services and green waste so that the wording is up to date.',
    updatedAt: LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For landscapers, gardeners and green-space businesses working in France. Two files in French, no form to fill in: the PDF prints, the Excel file calculates.',
    files: [
      {
        label: 'Download the PDF template',
        href: LANDSCAPING_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: LANDSCAPING_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 sheets, calculated totals, in French',
      },
    ],
    footnote:
      'Free to use and adapt to your business. It does not replace the advice of your accountant, nor checking that you are eligible for home services.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A quote and a maintenance contract, as PDF and Excel',
    intro:
      'The PDF holds both documents on two A4 pages. The Excel file holds them on two sheets, with each line total, the VAT per rate, the deposit, the contract’s yearly amount and its monthly instalment calculated as soon as you type a quantity and a price.',
    documents: [
      {
        title: 'Landscaping quote',
        format: 'Page 1 of the PDF, “Devis” sheet of the Excel file',
        items: [
          'Company header (name, address, phone, SIRET, VAT number) and insurance (professional liability, ten-year insurance where required, insurer, policy number)',
          'Quote number, date, “valid until” date, planned start of the works',
          'Customer, job-site address if different, nature of the works (garden build, planting, fence…), dwelling completed more than 2 years ago: yes / no',
          'Structure and plant lines: description, unit, quantity, unit price excl. VAT, VAT rate, total excl. VAT, plus three pre-filled lines for labour at the hourly rate, green waste removal per m³ and travel costs',
          'Totals: total excl. VAT, VAT at 10% (eligible structures next to a dwelling over 2 years old) and at 20% (planting, maintenance and other structures), total incl. VAT, deposit on order (30% by default in the Excel file)',
          'Terms (access, water and electricity, payment, plant replacement guarantee), customer’s statement box for 10% VAT (art. 279-0 bis of the French tax code), “Bon pour accord” signature and stamp, VAT rate reminder in the footer',
        ],
      },
      {
        title: 'Garden maintenance contract',
        format: 'Page 2 of the PDF, “Contrat d’entretien” sheet of the Excel file',
        items: [
          'Company header (name, address, phone, SIRET) and home-service declaration number, when the company is declared',
          'Contract number, date, start and end of the contract, private or business customer, garden address, areas (lawn in m², hedges in metres), access (gate, key, water, electricity)',
          'Seven pre-filled services (mowing and grass collection, hedge trimming, shrub and rose pruning, hand weeding, leaf collection, brush clearing, green waste removal) with period and frequency, visits per year, price excl. VAT per visit, home service yes / no, yearly total excl. VAT',
          'Yearly amount excl. VAT, 20% VAT, yearly amount incl. VAT, payment to tick: 12 monthly instalments, after each visit or in one go (the Excel file calculates the monthly instalment and the home-service share)',
          'One-year term, price review on the anniversary date, written termination with notice, visit postponed in bad weather, not included (garden build, tree surgery, felling, supplies) on a separate quote',
          'Home-service box (50% tax credit, €5,000 cap, tax certificate before 31 March), pesticide and green waste clauses (included or charged extra), “Lu et approuvé” signature and stamp',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the quote and the contract in six steps',
    intro:
      'In the Excel file, only the white cells are typed in. The totals, the VAT per rate, the deposit and the contract’s monthly instalment are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Your details, once and for all',
        description:
          'Fill in the header (name, address, SIRET, VAT number), your insurance and, if you are declared for home services, your declaration number on the contract. Save the file as your template: every new quote starts from that copy.',
      },
      {
        label: 'Step 2',
        title: 'The customer and the job site',
        description:
          'Name, job-site address if it differs from the customer’s, nature of the works (garden build, planting, fence…). State whether the dwelling was completed more than 2 years ago: that is the condition for 10% VAT on eligible structures.',
      },
      {
        label: 'Step 3',
        title: 'The lines, structures and plants apart',
        description:
          'One line per structure or plant with its unit, quantity and unit price excl. VAT, then labour at the hourly rate, green waste removal per m³ and travel. The Excel file calculates the total excl. VAT of each line.',
      },
      {
        label: 'Step 4',
        title: 'The right VAT rate on each line',
        description:
          'The VAT column is at 20% by default. Switch to 10% only for an eligible structure next to a dwelling over 2 years old (fence wall, gate, masonry terrace…); the Excel file rejects any other rate and the customer ticks the statement.',
      },
      {
        label: 'Step 5',
        title: 'Validity, deposit, signing the quote',
        description:
          'Give the validity date, the planned start of the works and the deposit rate (30% by default). Write your terms (access, water and electricity, replacement guarantee), then the customer signs with the words “Bon pour accord”.',
      },
      {
        label: 'Step 6',
        title: 'The maintenance contract and its visits',
        description:
          'For each service, the period, the number of visits per year, the price excl. VAT per visit and yes / no for home services. The Excel file calculates the yearly amount, the VAT, the monthly instalment and the home-service share; fill in term, review and termination, and tick the payment method.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The wording the template already provides',
    intro:
      'Four French rules for landscapers go through the quote and the maintenance contract. The template keeps a column, a box or a line for each of them.',
    facts: [
      {
        contextLabel: '10% or 20% VAT',
        title: 'The right VAT rate, structure by structure',
        text: 'Creating or maintaining a garden is invoiced at 20%. Some structures next to a home completed more than 2 years ago go down to 10%: fence wall (not hedges), gate, renovation of a masonry terrace, protective low wall, main access path. The quote provides the rate per line, the total per rate and the customer’s statement.',
        sourceName: LANDSCAPING_VAT_SOURCE.name,
        sourceUrl: LANDSCAPING_VAT_SOURCE.url,
      },
      {
        contextLabel: 'Home services',
        title: 'Small gardening jobs: a declaration and a tax certificate',
        text: 'Routine garden maintenance, hedge and tree trimming and brush clearing at a private home can count as home services (services à la personne), on a simple declaration (NOVA), with no approval needed. Each customer then gets a tax certificate before 31 March of the following year. The contract carries your declaration number and marks each service yes / no.',
        sourceName: GARDENING_HOME_SERVICES_SOURCE.name,
        sourceUrl: GARDENING_HOME_SERVICES_SOURCE.url,
      },
      {
        contextLabel: 'Up to €5,000 of expenses a year',
        title: 'A 50% tax credit for your customers',
        text: 'Small gardening jobs paid to a company declared for home services give the customer a tax credit of 50% of their expenses, up to €5,000 a year per household. The contract’s box reminds them of it, without guaranteeing that each service is eligible.',
        sourceName: HOME_SERVICES_TAX_CREDIT_SOURCE.name,
        sourceUrl: HOME_SERVICES_TAX_CREDIT_SOURCE.url,
      },
      {
        contextLabel: 'Since 1 January 2024',
        title: 'Green waste sorted at source',
        text: 'Every professional sorts biowaste at source, green waste included, and burning green waste is banned (€750 fine). The quote and the contract provide a removal line to a sorting channel, included or charged extra.',
        sourceName: BIOWASTE_SORTING_SOURCE.name,
        sourceUrl: BIOWASTE_SORTING_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Landscaper quote template: your questions',
    questions: [
      {
        question: 'Is the landscaper quote template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Which VAT rate applies on a landscaping quote in France?',
        answer:
          '20% for creating and maintaining gardens, planting and small gardening jobs. 10% for some structures next to a dwelling completed more than 2 years ago (fence wall not hedges, gate, renovation of a masonry terrace, low wall, main access path), provided the customer certifies these conditions on the quote. Sheds, greenhouses, pergolas, ponds, lighting and pools stay at 20%. The template provides both rates per line, the total per rate and the statement box.',
      },
      {
        question: 'Does the maintenance contract give the customer the 50% tax credit?',
        answer:
          'Only if your company is declared for home services in France, and for eligible services: routine maintenance, hedge and tree trimming, brush clearing. Garden build, tree surgery and earthworks are not included. The contract carries your declaration number, marks each service yes / no and reminds you of the tax certificate due before 31 March; for home services, a quote is also mandatory and free from €100 incl. VAT per month.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'On the “Devis” sheet, you type the quantity, the unit price excl. VAT and the VAT rate of each line (10 or 20%, the Excel file rejects any other). The line total excl. VAT, the total excl. VAT, the VAT per rate, the total incl. VAT and the deposit are calculated on their own. On the “Contrat d’entretien” sheet, the number of visits and the price per visit give the yearly total of each service, the yearly amount excl. and incl. VAT, the monthly instalment over 12 months and the share of services marked “oui” for home services. Both sheets print on one A4 page.',
      },
      {
        question: 'Can pesticides be planned in the contract?',
        answer:
          'Not at a private home in France: since 1 July 2022, plant protection products are banned in private homes and their outdoor areas, except biocontrol products, low-risk products and those allowed in organic farming. Where they remain allowed, professional use requires the Certiphyto certificate. The contract contains this clause, and weeding is planned by hand.',
      },
      {
        question: 'And when the quotes and contracts pile up?',
        answer:
          'An Excel template is enough for a few quotes and contracts a month. Beyond that, French landscaping software (Robbin, Extrabat Paysage, Paysagio) takes over your structures, plants and contract visits from €19 excl. VAT per month. If your organisation falls outside their frame (several teams, hours per job site, tax certificates), the test on the tool page tells you what to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When quotes, maintenance contracts and the year’s visits get copied from one file to the next, a tool that chains them gives you hours back. Describe your business to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare landscaping software',
  },
}
