import type { DibodevQuizPriceCard } from '~/core/types/DibodevQuiz'

/** Regular in a test result, compact when a result is shown as an example (smaller type, no footnote). */
export type DibodevQuizPriceCardSize = 'regular' | 'compact'

/**
 * Type definitions for the DibodevQuizPriceCard component props.
 * @type {DibodevQuizPriceCardProps}
 * @property {DibodevQuizPriceCard} priceCard - Price, its details and its footnote.
 * @property {DibodevQuizPriceCardSize} size - Regular in a test result, compact in an example.
 */
export type DibodevQuizPriceCardProps = {
  priceCard: DibodevQuizPriceCard
  size: DibodevQuizPriceCardSize
}
