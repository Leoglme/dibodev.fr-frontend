import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/**
 * How well an option covers a criterion.
 * @type {DibodevComparisonState}
 */
export type DibodevComparisonState = 'yes' | 'partial' | 'no'

/**
 * One cell of the comparison: a coverage state and a short explanation.
 * @type {DibodevComparisonCell}
 * @property {DibodevComparisonState} state - Coverage of the criterion.
 * @property {string} text - Short explanation shown next to the state icon.
 */
export type DibodevComparisonCell = {
  state: DibodevComparisonState
  text: string
}

/**
 * One row of the comparison: a criterion and one cell per option.
 * @type {DibodevComparisonRow}
 * @property {string} label - The criterion.
 * @property {DibodevComparisonCell[]} cells - One cell per column, in column order.
 */
export type DibodevComparisonRow = {
  label: string
  cells: DibodevComparisonCell[]
}

/**
 * Type definitions for the DibodevComparisonTableSection component props.
 * @type {DibodevComparisonTableSectionProps}
 * @property {string} eyebrow - Small uppercase line displayed above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Optional paragraph displayed under the title.
 * @property {string[]} columns - Column labels (the options compared).
 * @property {number} highlightedColumn - Index of the recommended column (emphasised), -1 for none.
 * @property {DibodevComparisonRow[]} rows - The criteria.
 * @property {string} criterionLabel - Header of the criteria column.
 * @property {DibodevSectionTone} tone - Background tone of the section.
 * @property {number} collapsedRowCount - Without a highlighted column, criteria shown on tablets and phones before the "show details" button; 0 shows them all.
 * @property {string} trackingLocation - PostHog `location` property sent when the detailed comparison is opened.
 */
export type DibodevComparisonTableSectionProps = {
  eyebrow: string
  title: string
  intro: string
  columns: string[]
  highlightedColumn: number
  rows: DibodevComparisonRow[]
  criterionLabel: string
  tone: DibodevSectionTone
  collapsedRowCount: number
  trackingLocation: string
}

/**
 * One line of the summary shown first on tablets and phones: a criterion and the recommended option's cell.
 * @type {DibodevComparisonSummaryItem}
 * @property {string} label - The criterion.
 * @property {DibodevComparisonCell} cell - Coverage and explanation of the recommended option.
 */
export type DibodevComparisonSummaryItem = {
  label: string
  cell: DibodevComparisonCell
}
