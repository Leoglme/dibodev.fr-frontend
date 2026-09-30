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

/**
 * Type definitions for the DibodevGuaranteesSection component props.
 * @type {DibodevGuaranteesSectionProps}
 * @property {string} eyebrow - Small uppercase line displayed above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Optional paragraph displayed under the title.
 * @property {DibodevGuarantee[]} guarantees - The guarantees, in display order.
 * @property {DibodevSectionTone} tone - Background tone of the section.
 */
export type DibodevGuaranteesSectionProps = {
  eyebrow: string
  title: string
  intro: string
  guarantees: DibodevGuarantee[]
  tone: DibodevSectionTone
}
