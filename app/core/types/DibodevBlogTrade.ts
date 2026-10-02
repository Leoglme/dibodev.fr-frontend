/**
 * A trade covered by the blog and the article written for it.
 * @type {DibodevBlogTradeArticle}
 * @property {string} key - Trade key (i18n `blog.trades.items.*`).
 * @property {string} articleSlug - Slug of the article about this trade.
 */
export type DibodevBlogTradeArticle = {
  key: string
  articleSlug: string
}

/**
 * Link to the article of a trade.
 * @type {DibodevBlogTradeLink}
 * @property {string} key - Trade key.
 * @property {string} label - Trade name.
 * @property {string} route - Route of the article.
 */
export type DibodevBlogTradeLink = {
  key: string
  label: string
  route: string
}

/**
 * Type definitions for the BlogTradeArticlesSection component props.
 * @type {BlogTradeArticlesSectionProps}
 * @property {string} eyebrow - Small uppercase line above the title.
 * @property {string} title - The section title.
 * @property {string} intro - Paragraph under the title.
 * @property {DibodevBlogTradeLink[]} links - One link per trade (section hidden when empty).
 * @property {string} missingTradeText - Sentence for the visitors whose trade is not listed.
 * @property {string} missingTradeLinkLabel - Label of the link to the contact page.
 */
export type BlogTradeArticlesSectionProps = {
  eyebrow: string
  title: string
  intro: string
  links: DibodevBlogTradeLink[]
  missingTradeText: string
  missingTradeLinkLabel: string
}
