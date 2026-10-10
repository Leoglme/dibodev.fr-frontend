import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/**
 * One guarantee (what the client gets) displayed with a check mark.
 * @type {DibodevGuarantee}
 * @property {string} title - Short promise (e.g. "A tool you own").
 * @property {string} description - One sentence making it concrete.
 */
export type DibodevGuarantee = {
  title: string
  description: string
}

/** Number of tiles per row on large screens. */
export type DibodevGuaranteesColumns = 2 | 3 | 4

/**
 * Type definitions for the DibodevGuaranteesSection component props.
 * @type {DibodevGuaranteesSectionProps}
 * @property {string} anchorId - Id of the section, for in-page links (unique when a page shows the section twice).
 * @property {string} eyebrow - Small uppercase line displayed above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Optional paragraph displayed under the title.
 * @property {DibodevGuarantee[]} guarantees - The guarantees, in display order.
 * @property {DibodevGuaranteesColumns} columns - Tiles per row on large screens (2 fills a row with four tiles).
 * @property {DibodevSectionTone} tone - Background tone of the section.
 */
export type DibodevGuaranteesSectionProps = {
  anchorId: string
  eyebrow: string
  title: string
  intro: string
  guarantees: DibodevGuarantee[]
  columns: DibodevGuaranteesColumns
  tone: DibodevSectionTone
}
