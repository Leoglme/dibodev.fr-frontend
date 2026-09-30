type RichtextTextNode = {
  type?: string
  text?: string
  marks?: { type?: string }[]
  content?: unknown[]
}

const NARROW_NO_BREAK_SPACE: string = '\u202F'
/** Code keeps its plain spaces: `a ? b : c` must stay copyable. */
const CODE_BLOCK_NODE_TYPE: string = 'code_block'
const CODE_MARK_TYPE: string = 'code'

/** French typography for Storyblok texts: punctuation and units stay attached by a narrow no-break space. */
export class FrenchTypographyUtils {
  /**
   * Replaces the breakable spaces that French punctuation and units need to keep attached.
   * @param {string} text - A French text.
   * @returns {string} The same text with narrow no-break spaces.
   */
  static formatText(text: string): string {
    if (!text) return text
    return (
      text
        .replace(/(\S) ([:;!?»])/g, `$1${NARROW_NO_BREAK_SPACE}$2`)
        // A bold run followed by " : …" splits the space into the next richtext node.
        .replace(/^ ([:;!?»])/, `${NARROW_NO_BREAK_SPACE}$1`)
        .replace(/« /g, `«${NARROW_NO_BREAK_SPACE}`)
        .replace(/(\d) ([%€])/g, `$1${NARROW_NO_BREAK_SPACE}$2`)
    )
  }

  /**
   * Applies formatText to every text node of a Storyblok richtext document, code excepted.
   * @param {T} node - A richtext document or node.
   * @returns {T} A formatted copy, the input is left untouched.
   */
  static formatRichtext<T>(node: T): T {
    if (!node || typeof node !== 'object') return node
    const richtextNode: RichtextTextNode = node as RichtextTextNode
    if (richtextNode.type === CODE_BLOCK_NODE_TYPE) return node
    const isCode: boolean = (richtextNode.marks ?? []).some(
      (mark: { type?: string }): boolean => mark.type === CODE_MARK_TYPE,
    )
    const formatted: RichtextTextNode = { ...richtextNode }
    if (typeof richtextNode.text === 'string' && !isCode) {
      formatted.text = FrenchTypographyUtils.formatText(richtextNode.text)
    }
    if (Array.isArray(richtextNode.content)) {
      formatted.content = richtextNode.content.map((child: unknown): unknown =>
        FrenchTypographyUtils.formatRichtext(child),
      )
    }
    return formatted as T
  }
}
