import type { DibodevProjectSpecificationDocument } from '~/core/types/DibodevProjectSpecification'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/**
 * Props of the section that shows a filled specification, folded until the visitor asks for the rest.
 * @type {DibodevProjectSpecificationExampleSectionProps}
 * @property {string} anchorId - Id of the section, for in-page links.
 * @property {string} eyebrow - Small uppercase line above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Paragraph under the title.
 * @property {DibodevProjectSpecificationDocument} specification - The filled document.
 * @property {string} expandLabel - Button that unfolds the document.
 * @property {string} collapseLabel - Button that folds it again.
 * @property {string} generatorLinkLabel - Link towards the generator.
 * @property {string} generatorTo - Localized path of the generator.
 * @property {DibodevSectionTone} tone - Background tone of the section.
 */
export type DibodevProjectSpecificationExampleSectionProps = {
  anchorId: string
  eyebrow: string
  title: string
  intro: string
  specification: DibodevProjectSpecificationDocument
  expandLabel: string
  collapseLabel: string
  generatorLinkLabel: string
  generatorTo: string
  tone: DibodevSectionTone
}
