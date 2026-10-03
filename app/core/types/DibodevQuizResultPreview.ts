import type { DibodevQuizResultExample } from '~/core/types/DibodevQuizResultExample'

/**
 * Type definitions for the DibodevQuizResultPreview component props.
 * @type {DibodevQuizResultPreviewProps}
 * @property {DibodevQuizResultExample} example - The worked example: first question answered and the result it leads to.
 * @property {string} caption - Line under the visual saying what the example shows.
 */
export type DibodevQuizResultPreviewProps = {
  example: DibodevQuizResultExample
  caption: string
}
