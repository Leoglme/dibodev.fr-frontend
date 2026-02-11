/**
 * Converts Markdown string to Storyblok Richtext document (ProseMirror-like structure).
 * Supports: paragraphs, headings (##, ###), bold/italic in text nodes are kept as plain text for simplicity.
 */

export type RichtextNode = {
  type: string
  attrs?: Record<string, unknown>
  content?: Array<{ type: string; text?: string }>
}

export type RichtextDoc = {
  type: 'doc'
  content: RichtextNode[]
}

function textNode(text: string): { type: 'text'; text: string } {
  return { type: 'text', text }
}

function paragraph(text: string): RichtextNode {
  return {
    type: 'paragraph',
    content: [textNode(text)],
  }
}

function heading(level: number, text: string): RichtextNode {
  return {
    type: 'heading',
    attrs: { level },
    content: [textNode(text)],
  }
}

/**
 * Parse markdown and return a Storyblok richtext document.
 * Supports #, ##, ### and paragraphs (blank-line separated).
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

    const parts: string[] = [trimmed]
    i++
    while (i < lines.length && lines[i].trim() !== '' && !lines[i].trim().startsWith('#')) {
      parts.push(lines[i].trim())
      i++
    }
    content.push(paragraph(parts.join(' ')))
  }

  if (content.length === 0) {
    content.push(paragraph(''))
  }

  return {
    type: 'doc',
    content,
  }
}
