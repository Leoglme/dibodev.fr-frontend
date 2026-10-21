type RichtextNode = { type?: string; attrs?: { level?: number } }
type RichtextDocument = { type?: string; content?: RichtextNode[] }

const SECTION_HEADING_LEVEL: number = 2

/** Splits the richtext of an article around its introduction, to place a block between the intro and the first section. */
export class ArticleIntroUtils {
  /**
   * Splits a richtext document before its first level-2 heading.
   * @param {unknown} content - The Storyblok richtext document of the article.
   * @returns {{ intro: unknown; body: unknown } | null} The two documents, or null when the article has no introduction before its first section.
   */
  static splitBeforeFirstSection(content: unknown): { intro: unknown; body: unknown } | null {
    const richtextDocument: RichtextDocument | null = ArticleIntroUtils.asDocument(content)

    if (!richtextDocument || !richtextDocument.content) {
      return null
    }
    const firstSectionIndex: number = richtextDocument.content.findIndex(
      (node: RichtextNode): boolean => node.type === 'heading' && node.attrs?.level === SECTION_HEADING_LEVEL,
    )

    if (firstSectionIndex <= 0) {
      return null
    }
    return {
      intro: { ...richtextDocument, content: richtextDocument.content.slice(0, firstSectionIndex) },
      body: { ...richtextDocument, content: richtextDocument.content.slice(firstSectionIndex) },
    }
  }

  /**
   * Reads a value as a richtext document when it has the expected shape.
   * @param {unknown} content - The value received from Storyblok.
   * @returns {RichtextDocument | null} The document, or null.
   */
  private static asDocument(content: unknown): RichtextDocument | null {
    if (typeof content !== 'object' || content === null) {
      return null
    }
    const richtextDocument: RichtextDocument = content

    return Array.isArray(richtextDocument.content) ? richtextDocument : null
  }
}
