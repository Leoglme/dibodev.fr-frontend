import type {
  DibodevProjectSpecificationDocument,
  DibodevProjectSpecificationPartId,
} from '~/core/types/DibodevProjectSpecification'

/** `section` writes the title and the parts as headings (h3, h4), `none` as paragraphs (the live preview). */
export type DibodevProjectSpecificationSheetHeadingLevel = 'section' | 'none'

/**
 * Props of the rendered specification.
 * @type {DibodevProjectSpecificationSheetProps}
 * @property {DibodevProjectSpecificationDocument} specification - The document to show.
 * @property {DibodevProjectSpecificationSheetHeadingLevel} headingLevel - Whether titles join the page outline.
 * @property {DibodevProjectSpecificationPartId[]} highlightedPartIds - Parts just rewritten, briefly highlighted.
 */
export type DibodevProjectSpecificationSheetProps = {
  specification: DibodevProjectSpecificationDocument
  headingLevel: DibodevProjectSpecificationSheetHeadingLevel
  highlightedPartIds: DibodevProjectSpecificationPartId[]
}
