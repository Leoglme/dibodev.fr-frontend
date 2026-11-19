import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import { richtextNodeText } from '~/core/utils/articleHeadings'

type RichtextNode = { type?: string; attrs?: { level?: number } }
type RichtextDocument = { type?: string; content?: RichtextNode[] }

const FAQ_SECTION_HEADING_LEVEL: number = 2
const FAQ_QUESTION_HEADING_LEVEL: number = 3
const MINIMUM_FAQ_QUESTIONS: number = 2
const FAQ_SECTION_TITLE_STARTS: string[] = [
  'questions fréquentes',
  'foire aux questions',
  'faq',
  'frequently asked questions',
  'preguntas frecuentes',
]

/** Reads the questions and answers of the FAQ section of an article, for its FAQPage structured data. */
export class ArticleFaqUtils {
  /**
   * Lists the questions (level-3 headings) of the FAQ section of an article, each with the paragraph that follows it.
   * @param {unknown} content - The Storyblok richtext document of the article.
   * @returns {DibodevFaqQuestion[]} The questions in order, or an empty list when the article has fewer than two.
   */
  static extractQuestions(content: unknown): DibodevFaqQuestion[] {
    const nodes: RichtextNode[] = ArticleFaqUtils.readNodes(content)
    const faqSectionIndex: number = nodes.findIndex(
      (node: RichtextNode): boolean =>
        ArticleFaqUtils.isHeading(node, FAQ_SECTION_HEADING_LEVEL) &&
        ArticleFaqUtils.isFaqSectionTitle(richtextNodeText(node)),
    )

    if (faqSectionIndex === -1) {
      return []
    }
    const questions: DibodevFaqQuestion[] = []

    for (const node of nodes.slice(faqSectionIndex + 1)) {
      if (ArticleFaqUtils.isHeading(node, FAQ_SECTION_HEADING_LEVEL)) {
        break
      }
      if (ArticleFaqUtils.isHeading(node, FAQ_QUESTION_HEADING_LEVEL)) {
        questions.push({ question: richtextNodeText(node).trim(), answer: '' })
        continue
      }
      const lastQuestion: DibodevFaqQuestion | undefined = questions.at(-1)

      if (lastQuestion && lastQuestion.answer === '' && node.type === 'paragraph') {
        lastQuestion.answer = richtextNodeText(node).trim()
      }
    }
    const answeredQuestions: DibodevFaqQuestion[] = questions.filter(
      (faqQuestion: DibodevFaqQuestion): boolean => faqQuestion.question !== '' && faqQuestion.answer !== '',
    )

    return answeredQuestions.length >= MINIMUM_FAQ_QUESTIONS ? answeredQuestions : []
  }

  /**
   * Reads the top-level nodes of a value when it has the shape of a richtext document.
   * @param {unknown} content - The value received from Storyblok.
   * @returns {RichtextNode[]} The nodes, or an empty list.
   */
  private static readNodes(content: unknown): RichtextNode[] {
    if (typeof content !== 'object' || content === null) {
      return []
    }
    const richtextDocument: RichtextDocument = content

    return Array.isArray(richtextDocument.content) ? richtextDocument.content : []
  }

  /**
   * Tells whether a node is a heading of the given level.
   * @param {RichtextNode} node - The richtext node.
   * @param {number} level - The heading level expected.
   * @returns {boolean} True for a heading of that level.
   */
  private static isHeading(node: RichtextNode, level: number): boolean {
    return node.type === 'heading' && node.attrs?.level === level
  }

  /**
   * Tells whether a heading text opens a FAQ section, in French, English or Spanish.
   * @param {string} title - The heading text.
   * @returns {boolean} True when the title starts like a FAQ section.
   */
  private static isFaqSectionTitle(title: string): boolean {
    const normalizedTitle: string = title.trim().toLowerCase()

    return FAQ_SECTION_TITLE_STARTS.some((titleStart: string): boolean => normalizedTitle.startsWith(titleStart))
  }
}
