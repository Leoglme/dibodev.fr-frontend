/**
 * Converts Markdown string to Storyblok Richtext document (ProseMirror-like structure).
 * Supports: paragraphs, headings (##, ###), **bold**, *italic*, and line breaks within paragraphs.
 */

export type RichtextMark = { type: 'bold' } | { type: 'italic' }

export type InlineNode =
  | { type: 'text'; text: string; marks?: RichtextMark[] }
  | { type: 'hard_break' }

export type RichtextNode = {
  type: string
  attrs?: Record<string, unknown>
  content?: InlineNode[] | Array<{ type: string; text?: string; marks?: RichtextMark[] }>
}

export type RichtextDoc = {
  type: 'doc'
  content: RichtextNode[]
}

function textNode(text: string, marks?: RichtextMark[]): InlineNode {
  if (marks?.length) {
    return { type: 'text', text, marks }
  }
  return { type: 'text', text }
}

const hardBreakNode: InlineNode = { type: 'hard_break' }

/**
 * Parse inline markdown (**bold**, *italic*) and return an array of text/hard_break nodes.
 */
function parseInline(line: string): InlineNode[] {
  if (line.length === 0) {
    return []
  }
  const result: InlineNode[] = []
  let i = 0
  let current = ''
  let bold = false
  let italic = false

  function flush(): void {
    if (current.length > 0) {
      const marks: RichtextMark[] = []
      if (bold) marks.push({ type: 'bold' })
      if (italic) marks.push({ type: 'italic' })
      result.push(textNode(current, marks.length ? marks : undefined))
      current = ''
    }
  }

  while (i < line.length) {
    if (line.slice(i, i + 2) === '**') {
      flush()
      bold = !bold
      i += 2
      continue
    }
    if (line[i] === '*' && line.slice(i + 1, i + 2) !== '*') {
      flush()
      italic = !italic
      i += 1
      continue
    }
    current += line[i]
    i += 1
  }
  flush()
  return result
}

function paragraph(nodes: InlineNode[]): RichtextNode {
  return {
    type: 'paragraph',
    content: nodes.length > 0 ? nodes : [textNode('')],
  }
}

function heading(level: number, text: string): RichtextNode {
  const inline = parseInline(text)
  return {
    type: 'heading',
    attrs: { level },
    content: inline.length > 0 ? inline : [textNode('')],
  }
}

/**
 * Parse markdown and return a Storyblok richtext document.
 * Supports #, ##, ###, paragraphs (blank-line separated), **bold**, *italic*, and line breaks.
 */
export function markdownToRichtext(markdown: string): RichtextDoc {
  const content: RichtextNode[] = []
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()

    if (trimmed === '') {
      i++
      continue
    }

    if (trimmed.startsWith('### ')) {
      content.push(heading(3, trimmed.slice(4).trim()))
      i++
      continue
    }

    if (trimmed.startsWith('## ')) {
      content.push(heading(2, trimmed.slice(3).trim()))
      i++
      continue
    }

    if (trimmed.startsWith('# ')) {
      content.push(heading(1, trimmed.slice(2).trim()))
      i++
      continue
    }

    const partLines: string[] = [trimmed]
    i++
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().startsWith('#')) {
      partLines.push(lines[i].trim())
      i++
    }

    const paragraphContent: InlineNode[] = []
    for (let p = 0; p < partLines.length; p++) {
      paragraphContent.push(...parseInline(partLines[p]))
      if (p < partLines.length - 1) {
        paragraphContent.push(hardBreakNode)
      }
    }
    content.push(paragraph(paragraphContent))
  }

  if (content.length === 0) {
    content.push(paragraph([textNode('')]))
  }

  return {
    type: 'doc',
    content,
  }
}
