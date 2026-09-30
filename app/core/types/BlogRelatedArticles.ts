import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/**
 * Type definitions for the BlogRelatedArticles component props.
 * @type {BlogRelatedArticlesProps}
 * @property {string} title - The section title.
 * @property {string} eyebrow - Small uppercase line above the title (defaults to the shared related-articles label).
 * @property {string} intro - Optional paragraph under the title.
 * @property {DibodevArticle[]} articles - The articles to list (section hidden when empty).
 * @property {DibodevSectionTone} tone - Background tone of the section.
 */
export type BlogRelatedArticlesProps = {
  title: string
  eyebrow: string
  intro: string
  articles: DibodevArticle[]
  tone: DibodevSectionTone
}
