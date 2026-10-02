import type { DibodevArticle } from '~/core/types/DibodevArticle'

/**
 * Finds the articles closest to another one from the words of their titles and tags.
 */
export class ArticleSimilarityUtils {
  /** Shorter words are mostly articles and prepositions ("de", "sur", "pour"). */
  private static readonly MINIMUM_WORD_LENGTH: number = 4
  private static readonly DIACRITICS_REGEX: RegExp = /[̀-ͯ]/g
  private static readonly WORD_SEPARATOR_REGEX: RegExp = /[^a-z0-9]+/
  private static readonly PLURAL_ENDING_REGEX: RegExp = /[sx]$/

  /**
   * Picks the articles sharing the rarest words with the current one (a trade name weighs more than "logiciel"), most recent first on a tie.
   * @param {DibodevArticle[]} articles - Every article of the blog.
   * @param {DibodevArticle} currentArticle - The article being read, left out of the result.
   * @param {number} limit - Maximum number of articles returned.
   * @returns {DibodevArticle[]} The closest articles, closest first.
   */
  public static selectRelatedArticles(
    articles: DibodevArticle[],
    currentArticle: DibodevArticle,
    limit: number,
  ): DibodevArticle[] {
    const wordsByArticleSlug: Map<string, Set<string>> = new Map(
      articles.map((article: DibodevArticle): [string, Set<string>] => [article.slug, this.extractWords(article)]),
    )
    const articleCountByWord: Map<string, number> = new Map()
    for (const words of wordsByArticleSlug.values()) {
      for (const word of words) {
        articleCountByWord.set(word, (articleCountByWord.get(word) ?? 0) + 1)
      }
    }

    const currentWords: Set<string> = this.extractWords(currentArticle)
    const getSimilarity = (candidate: DibodevArticle): number =>
      [...(wordsByArticleSlug.get(candidate.slug) ?? [])]
        .filter((word: string): boolean => currentWords.has(word))
        .reduce(
          (similarity: number, word: string): number =>
            similarity + Math.log(articles.length / (articleCountByWord.get(word) ?? articles.length)),
          0,
        )

    return articles
      .filter((candidate: DibodevArticle): boolean => candidate.slug !== currentArticle.slug)
      .map((candidate: DibodevArticle): { article: DibodevArticle; similarity: number } => ({
        article: candidate,
        similarity: getSimilarity(candidate),
      }))
      .sort(
        (
          first: { article: DibodevArticle; similarity: number },
          second: { article: DibodevArticle; similarity: number },
        ): number =>
          second.similarity - first.similarity ||
          new Date(second.article.date).getTime() - new Date(first.article.date).getTime(),
      )
      .slice(0, limit)
      .map((scored: { article: DibodevArticle; similarity: number }): DibodevArticle => scored.article)
  }

  /**
   * Significant words of an article title and tags, without accents, case or plural endings.
   * @param {DibodevArticle} article - The article.
   * @returns {Set<string>} Its words.
   */
  private static extractWords(article: DibodevArticle): Set<string> {
    const text: string = [article.title, ...article.tags].join(' ')
    return new Set(
      text
        .toLowerCase()
        .normalize('NFD')
        .replace(this.DIACRITICS_REGEX, '')
        .split(this.WORD_SEPARATOR_REGEX)
        .filter((word: string): boolean => word.length >= this.MINIMUM_WORD_LENGTH)
        .map((word: string): string => word.replace(this.PLURAL_ENDING_REGEX, '')),
    )
  }
}
