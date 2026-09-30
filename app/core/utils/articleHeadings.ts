/**
 * Table of contents helpers for the blog articles: reads the level-2 headings of a Storyblok richtext
 * document and gives them stable anchor ids.
 */

/**
 * One entry of an article table of contents.
 * @type {DibodevArticleHeading}
 * @property {string} id - Anchor id set on the rendered heading.
 * @property {string} text - Heading text.
 */
export type DibodevArticleHeading = {
  id: string
  text: string
}

type RichtextNode = {
  type?: string
  text?: string
  attrs?: { level?: number }
  content?: RichtextNode[]
}

const TOC_HEADING_LEVEL: number = 2

/**
 * Concatenated text of a richtext node and its descendants.
 * @param {unknown} node - A richtext node.
 * @returns {string} The plain text.
 */
export function richtextNodeText(node: unknown): string {
  if (!node || typeof node !== 'object') return ''
  const richtextNode: RichtextNode = node as RichtextNode
  if (typeof richtextNode.text === 'string') return richtextNode.text
  return (richtextNode.content ?? []).map(richtextNodeText).join('')
}

/**
 * Anchor id derived from a heading text: lowercase ASCII, words joined by hyphens.
 * @param {string} text - The heading text.
 * @returns {string} The id (e.g. "pourquoi-nuxt"), or "section" when the text has no letters or digits.
 */
export function headingIdFromText(text: string): string {
  const slug: string = text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return slug || 'section'
}

/**
 * Level-2 headings of an article richtext document, with unique anchor ids in document order.
 * @param {unknown} content - The Storyblok richtext document.
 * @returns {DibodevArticleHeading[]} The headings, in order.
 */
export function extractArticleHeadings(content: unknown): DibodevArticleHeading[] {
  if (!content || typeof content !== 'object') return []
  const nodes: RichtextNode[] = (content as RichtextNode).content ?? []
  const usedIds: Map<string, number> = new Map<string, number>()
  const headings: DibodevArticleHeading[] = []
  for (const node of nodes) {
    if (node.type !== 'heading' || node.attrs?.level !== TOC_HEADING_LEVEL) continue
    const text: string = richtextNodeText(node).trim()
    if (!text) continue
    const baseId: string = headingIdFromText(text)
    const occurrence: number = (usedIds.get(baseId) ?? 0) + 1
    usedIds.set(baseId, occurrence)
    headings.push({ id: occurrence === 1 ? baseId : `${baseId}-${occurrence}`, text })
  }
  return headings
}
