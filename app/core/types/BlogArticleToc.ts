import type { DibodevArticleHeading } from '~/core/utils/articleHeadings'

/**
 * Type definitions for the BlogArticleToc component props.
 * @type {BlogArticleTocProps}
 * @property {DibodevArticleHeading[]} headings - The level-2 headings of the article, in order.
 */
export type BlogArticleTocProps = {
  headings: DibodevArticleHeading[]
}
