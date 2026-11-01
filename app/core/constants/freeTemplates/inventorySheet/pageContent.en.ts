import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { INVENTORY_SHEET_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/inventorySheet/pageShared'
import {
  ANNUAL_INVENTORY_SOURCE,
  DOCUMENT_RETENTION_SOURCE,
  INVENTORY_MANAGEMENT_TEMPLATE_PDF_PATH,
  INVENTORY_MANAGEMENT_TEMPLATE_XLSX_PATH,
  STOCK_WITHDRAWAL_VAT_SOURCE,
  USE_BY_DATE_SOURCE,
} from '~/core/constants/tools/inventoryManagementSoftware/pageShared'

export const INVENTORY_SHEET_TEMPLATE_CONTENT_EN: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Inventory sheet: free French Excel template (+ receipt note)',
    description:
      'Inventory sheet: free French template in Excel and PDF, with a supplier goods receipt note. Differences, accuracy rate and totals calculated. No sign-up.',
    inLanguage: 'en',
    schemaAbout: 'French cycle count sheet and supplier goods receipt note template for inventory management',
  },
  breadcrumbLabel: 'Inventory sheet',
  shareImage: {
    titleLines: ['Inventory sheet', 'free French template'],
    highlight: 'Inventory sheet',
    subtitle: 'Cycle count sheet and goods receipt note in Excel and PDF, differences and accuracy rate calculated',
    badge: 'Free, no sign-up',
    icon: 'clipboard',
    alt: 'Free French inventory sheet template: cycle count sheet and supplier goods receipt note in Excel and PDF, downloaded without sign-up on dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Inventory sheet',
    titleAfter: ': free French Excel template (+ goods receipt note)',
    reassurances: ['Count sheet + goods receipt note', 'Excel with calculated differences', 'No sign-up, no email'],
    aboutTitle: 'About the template',
    description:
      'A cycle count sheet and a supplier goods receipt note ready to fill in, written in French for small businesses in France that hold stock: workshop, trading, warehouse, shop. The count sheet covers one area at a time and records the difference, its value and its likely cause, item by item. The receipt note checks a delivery line by line, then is matched with the supplier’s invoice.',
    authorIntro: 'Template prepared by',
    authorBio:
      'a business software developer near Rennes, France. I built StockPME from scratch, an inventory management and stock count software still used by small businesses, and read the French rules on stock counts, records to keep and use-by dates so that the benchmarks are up to date.',
    updatedAt: INVENTORY_SHEET_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Free download',
    lead: 'For small businesses in France that hold stock, and for shops. Two files in French, no form to fill in: the PDF prints, the Excel file calculates the differences and the totals.',
    files: [
      {
        label: 'Download the PDF template',
        href: INVENTORY_MANAGEMENT_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, in French',
      },
      {
        label: 'Download the Excel version',
        href: INVENTORY_MANAGEMENT_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 sheets, calculated differences and totals, in French',
      },
    ],
    footnote:
      'Free to use and adapt to your business and your products. It does not replace the advice of your accountant.',
  },
  contents: {
    anchorId: 'contents',
    eyebrow: 'What the template contains',
    title: 'A count sheet and a goods receipt note, as PDF and Excel',
    intro:
      'The PDF holds both documents on two landscape A4 pages. The Excel file holds them on two sheets, with the differences, the accuracy rate and the totals calculated as soon as you type the quantities.',
    documents: [
      {
        title: 'Cycle count sheet',
        format: 'Page 1 of the PDF, “Inventaire tournant” sheet of the Excel file',
        items: [
          'Company header, warehouse or area counted, count date, counted by, approved by',
          'ABC class and frequency, with the usual benchmark: A items every month, B every quarter, C every half-year',
          'Count lines: item, description, location, lot or serial number, use-by or best-before date, unit, book stock, counted quantity, difference, unit value excl. VAT, value of the difference, likely cause, correction recorded (12 lines in the PDF, 20 in the Excel file)',
          'Likely causes: breakage, theft, typing error, return, transfer or withdrawal not recorded, other (drop-down list in the Excel file)',
          'Count result: area total, lines counted, lines with a difference, accuracy rate, sum of the differences in absolute value, next area to count',
          'Signatures of the counter and the approver, date the corrections were recorded, reminder of the yearly stock count (French Commercial Code, art. L123-12) and of goods taken for personal use to record as a separate issue',
        ],
      },
      {
        title: 'Supplier goods receipt note',
        format: 'Page 2 of the PDF, “Bon de réception” sheet of the Excel file',
        items: [
          'Receipt number, date and time, supplier, purchase order number, supplier delivery note number, storage warehouse, received by',
          'Lines received: item, description, quantities ordered, delivered and accepted, difference, condition (compliant, damaged, missing, surplus), lot or serial number, use-by or best-before date, storage location, unit price excl. VAT, photo, invoice matched (11 lines in the PDF, 18 in the Excel file)',
          'Receipt totals, and in the Excel file the accepted amount excl. VAT of each line and the number of lines with a reservation',
          'Written reservations (missing items, breakage, errors) and follow-up: item, quantity, nature of the problem, photo taken, supplier notified on',
          'Supplier invoice: received on, invoice number, matched on, entries recorded in stock on',
          'Signatures of the receiver and the carrier, benchmarks: kept 10 years (art. L123-22), “L” lot mark and use-by date of foodstuffs, periodic inspection report (VGP) of rented equipment',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'how-to-fill',
    eyebrow: 'How to fill it in',
    title: 'Fill in the sheet and the note in five steps',
    intro:
      'In the Excel file, only the white cells are typed in. The differences, their value, the accuracy rate and the totals are calculated on their own.',
    steps: [
      {
        label: 'Step 1',
        title: 'Your details and the area to count',
        description:
          'Fill in the header, then the warehouse or area counted, the date and the counter’s name. One sheet per area: that is the principle of cycle counting.',
      },
      {
        label: 'Step 2',
        title: 'Count blind',
        description:
          'Fill in “Quantité comptée” before looking at the book stock, item by item, with the location, the lot and the use-by date when your products have one. Then copy the book stock from your file or your software.',
      },
      {
        label: 'Step 3',
        title: 'Read the difference and look for the cause',
        description:
          'The Excel file calculates the difference (counted quantity − book stock) and its value at the average purchase cost excl. VAT, and turns it red. Pick the likely cause from the list, then “Oui” once the correction is recorded in your stock.',
      },
      {
        label: 'Step 4',
        title: 'The result and the next area',
        description:
          'Lines counted, lines with a difference, accuracy rate and sum of the differences are calculated on their own. Write down the next area to count, then have the counter and the approver sign.',
      },
      {
        label: 'Step 5',
        title: 'On delivery, the goods receipt note',
        description:
          'Copy the purchase order number and the supplier’s delivery note number, then the quantities ordered, delivered and accepted of each line. The Excel file calculates the difference and the condition; pick “Abîmé” by hand, write the reservation, and match the invoice when it arrives.',
      },
    ],
  },
  rules: {
    anchorId: 'rules',
    eyebrow: 'What the French rules require',
    title: 'The benchmarks the template already provides',
    intro:
      'Four French stock rules go through the count sheet and the goods receipt note. The template keeps a column or a footer reminder for each of them.',
    facts: [
      {
        contextLabel: 'French Commercial Code, art. L123-12',
        title: 'A stock count at least once every twelve months',
        text: 'Every company that keeps accounts checks the existence and value of its stock by a physical count at least once every twelve months. Cycle counting spreads this count over the year without exempting you from counting every item: the sheet reminds you of it in its footer.',
        sourceName: ANNUAL_INVENTORY_SOURCE.name,
        sourceUrl: ANNUAL_INVENTORY_SOURCE.url,
      },
      {
        contextLabel: '10 years',
        title: 'Purchase orders, delivery notes and invoices kept 10 years',
        text: 'Purchase orders, delivery notes, supplier invoices and the inventory book are kept for 10 years from the end of the financial year (French Commercial Code, art. L123-22). The receipt note carries the order number, the delivery note number and the matched invoice so that it is filed with them.',
        sourceName: DOCUMENT_RETENTION_SOURCE.name,
        sourceUrl: DOCUMENT_RETENTION_SOURCE.url,
      },
      {
        contextLabel: 'VAT, BOFiP',
        title: 'Goods taken for personal use or as gifts are a separate issue',
        text: 'Goods taken out of stock for anything other than the needs of the business (personal use, gift, internal use) are subject to VAT when it was deducted on purchase. The sheet offers “prélèvement non saisi” among the causes of a difference and reminds you to record this issue separately, with its value.',
        sourceName: STOCK_WITHDRAWAL_VAT_SOURCE.name,
        sourceUrl: STOCK_WITHDRAWAL_VAT_SOURCE.url,
      },
      {
        contextLabel: 'Foodstuffs',
        title: 'No sale the day after the use-by date',
        text: 'Offering a product for sale after its use-by date (DLC) is forbidden in France: a €1,500 fine per product. A product past its best-before date (DDM) may still be sold. Both documents track the lot and the use-by or best-before date line by line.',
        sourceName: USE_BY_DATE_SOURCE.name,
        sourceUrl: USE_BY_DATE_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Inventory sheet template: your questions',
    questions: [
      {
        question: 'Is the inventory sheet template really free?',
        answer:
          'Yes. Both files download without sign-up or email address, and you can edit, print and reuse them as much as you want. The only trade-off: a “template by Dibodev” line in the footer, which you may remove.',
      },
      {
        question: 'Is a yearly stock count mandatory in France, and must the stock be valued?',
        answer:
          'Yes for every company that keeps accounts: the French Commercial Code (art. L123-12) requires checking the existence and value of stock by a physical count at least once every twelve months. At year end, stock is valued at cost price, or at market price when lower (BOFiP, French Tax Code art. 38). The sheet provides the unit value excl. VAT at the average purchase cost to put a figure on each difference; the year-end stock value is worked out with your accountant.',
      },
      {
        question: 'Does cycle counting replace the yearly stock count?',
        answer:
          'Not quite. Cycle counting (one area or one class of items counted every week or every month) is accepted when the perpetual inventory is reliable, provided every item has been counted at least once in the year. The ABC method (A items every month, B every quarter, C every half-year) is common practice, not a rule. The sheet counts one area at a time and notes the next area to count.',
      },
      {
        question: 'How does the Excel version work?',
        answer:
          'On the “Inventaire tournant” sheet, you type the book stock, the counted quantity and the unit value excl. VAT. The difference and its value are calculated and turn red, the cause and the correction are picked from lists, and the count result (lines counted, lines with a difference, accuracy rate, differences in absolute value) is displayed. On the “Bon de réception” sheet, the difference, the condition, the accepted amount excl. VAT, the totals and the number of lines with a reservation are calculated the same way. Each sheet prints on one landscape A4 page.',
      },
      {
        question: 'An item is missing or arrives damaged: what goes on the receipt note?',
        answer:
          'On the line, the quantity delivered and the quantity accepted, the condition (missing, surplus or damaged) and “Oui” in the photo column. At the bottom, the written reservation: item, quantity, nature of the problem, photo taken, supplier notified on. The carrier signs the note, and the invoice is only matched once the reservation is settled.',
      },
      {
        question: 'And when the items multiply?',
        answer:
          'An Excel template is enough for a small stock and a few deliveries a week. Beyond that, inventory management software (Odoo Inventory, Zoho Inventory, Monstock, Erplain) keeps a perpetual inventory, lots and barcodes from €14.90 excl. VAT per month, or free with Odoo’s Inventory app alone. If your organisation falls outside their frame (van, lots and use-by dates, serial numbers), the test on the tool page tells you what to choose.',
      },
    ],
  },
  excelLimits: {
    title: 'When Excel is no longer enough?',
    description:
      'When count sheets, receipt notes and book stock get copied from one file to the next, a tool that chains receipts, issues and counts gives you hours back. Describe your warehouses and what you hold to me: I reply within 24 hours, and if off-the-shelf software is enough, I tell you so.',
    button: 'Discuss my project',
    toolPageLinkLabel: 'Compare inventory management software',
  },
}
