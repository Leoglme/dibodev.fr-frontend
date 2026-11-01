import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/**
 * One row of a reference table: a name, what to know about it, and the page to read.
 * @type {DibodevReferenceTableRow}
 * @property {string} name - The entry (a provider, a product, a rule).
 * @property {string} detail - What the visitor needs to know about it, in one or two sentences.
 * @property {string} linkLabel - Text of the link.
 * @property {string} linkUrl - External page opened by the link.
 */
export type DibodevReferenceTableRow = {
  name: string
  detail: string
  linkLabel: string
  linkUrl: string
}

/**
 * Type definitions for the DibodevReferenceTableSection component props.
 * @type {DibodevReferenceTableSectionProps}
 * @property {string} anchorId - Id of the section, for in-page links.
 * @property {string} eyebrow - Small uppercase line displayed above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Optional paragraph displayed under the title.
 * @property {string} nameColumnLabel - Header of the first column.
 * @property {string} detailColumnLabel - Header of the second column.
 * @property {string} linkColumnLabel - Header of the third column.
 * @property {DibodevReferenceTableRow[]} rows - The rows, in display order.
 * @property {DibodevSectionTone} tone - Background tone of the section.
 */
export type DibodevReferenceTableSectionProps = {
  anchorId: string
  eyebrow: string
  title: string
  intro: string
  nameColumnLabel: string
  detailColumnLabel: string
  linkColumnLabel: string
  rows: DibodevReferenceTableRow[]
  tone: DibodevSectionTone
}
