import type { DibodevPressArticle } from '~/core/types/DibodevPressArticle'

/**
 * Type definitions for the DibodevPressArticleCard component props
 * @type {DibodevPressArticleCardProps}
 * @property {DibodevPressArticle} pressArticle - Article shown in the card
 * @property {string} trackingLocation - Where the card is shown, sent with the click on the article link
 */
export type DibodevPressArticleCardProps = {
  pressArticle: DibodevPressArticle
  trackingLocation: string
}
