import type { StoryblokRichtextNode } from '~~/server/types/dashboard/translations'

type RichtextMark = { type?: string }

function hasMark(node: { marks?: RichtextMark[] }, type: string): boolean {
  return Array.isArray(node.marks) && node.marks.some((m) => m && m.type === type)
}

function inlineToText(nodes: StoryblokRichtextNode[] | undefined): string {
  if (!Array.isArray(nodes)) return ''
  let out = ''
  for (const n of nodes) {
    if (n.type === 'text' && typeof n.text === 'string') {
      const bold: boolean = hasMark(n as { marks?: RichtextMark[] }, 'bold')
      const italic: boolean = hasMark(n as { marks?: RichtextMark[] }, 'italic')
      let text: string = n.text
      if (bold && italic) {
        text = `***${text}***`
      } else if (bold) {
        text = `**${text}**`
      } else if (italic) {
        text = `*${text}*`
      }
      out += text
    } else if (n.type === 'hard_break') {
      out += '\n'
    } else if (Array.isArray(n.content) && n.content.length > 0) {
      out += inlineToText(n.content as StoryblokRichtextNode[])
    }
  }
  return out
}

function trimLines(text: string): string {
  return text
    .split('\n')
    .map((l) => l.trimEnd())
    .join('\n')
    .trim()
}

function nodeToBlocks(node: StoryblokRichtextNode, blocks: string[], indent: string = ''): void {
  switch (node.type) {
    case 'paragraph': {
      const text = trimLines(inlineToText(node.content as StoryblokRichtextNode[]))
      if (text) {
        blocks.push(text)
      }
      break
    }
    case 'heading': {
      const title = trimLines(inlineToText(node.content as StoryblokRichtextNode[]))
      if (title) {
        // On garde uniquement le texte du titre (sans #) pour que stringToDescriptionHtml le transforme en <h2>.
        blocks.push(title)
      }
      break
    }
    case 'bullet_list': {
      const items: string[] = []
      const children = Array.isArray(node.content) ? (node.content as StoryblokRichtextNode[]) : []
      for (const child of children) {
        if (child.type === 'list_item') {
          const liParts: string[] = []
          const liChildren = Array.isArray(child.content) ? (child.content as StoryblokRichtextNode[]) : []
          for (const liChild of liChildren) {
            if (liChild.type === 'paragraph' || liChild.type === 'heading') {
              const text = trimLines(inlineToText(liChild.content as StoryblokRichtextNode[]))
              if (text) {
                liParts.push(text)
              }
            } else {
              const tmp: string[] = []
              nodeToBlocks(liChild, tmp, indent)
              if (tmp.length > 0) {
                liParts.push(tmp.join('\n'))
              }
            }
          }
          const liText = liParts.join('\n')
          if (liText) {
            const liLines = liText.split('\n')
            liLines.forEach((line, index) => {
              if (index === 0) {
                items.push(`${indent}* ${line}`)
              } else {
                items.push(`${indent}  ${line}`)
              }
            })
          }
        }
      }
      if (items.length > 0) {
        blocks.push(items.join('\n'))
      }
      break
    }
    case 'ordered_list': {
      const items: string[] = []
      const children = Array.isArray(node.content) ? (node.content as StoryblokRichtextNode[]) : []
      let index = 1
      for (const child of children) {
        if (child.type === 'list_item') {
          const liParts: string[] = []
          const liChildren = Array.isArray(child.content) ? (child.content as StoryblokRichtextNode[]) : []
          for (const liChild of liChildren) {
            if (liChild.type === 'paragraph' || liChild.type === 'heading') {
              const text = trimLines(inlineToText(liChild.content as StoryblokRichtextNode[]))
              if (text) {
                liParts.push(text)
              }
            } else {
              const tmp: string[] = []
              nodeToBlocks(liChild, tmp, indent)
              if (tmp.length > 0) {
                liParts.push(tmp.join('\n'))
              }
            }
          }
          const liText = liParts.join('\n')
          if (liText) {
            const liLines = liText.split('\n')
            liLines.forEach((line, lineIndex) => {
              if (lineIndex === 0) {
                items.push(`${indent}${index}. ${line}`)
              } else {
                items.push(`${indent}   ${line}`)
              }
            })
            index++
          }
        }
      }
      if (items.length > 0) {
        blocks.push(items.join('\n'))
      }
      break
    }
    case 'blockquote': {
      const innerLines: string[] = []
      const children = Array.isArray(node.content) ? (node.content as StoryblokRichtextNode[]) : []
      for (const child of children) {
        const tmp: string[] = []
        nodeToBlocks(child, tmp, indent)
        if (tmp.length > 0) {
          innerLines.push(...tmp.join('\n').split('\n'))
        }
      }
      if (innerLines.length > 0) {
        const quoted = innerLines.map((line) => `${indent}> ${line.trimEnd()}`).join('\n')
        blocks.push(quoted)
      }
      break
    }
    case 'doc': {
      const children = Array.isArray(node.content) ? (node.content as StoryblokRichtextNode[]) : []
      for (const child of children) {
        nodeToBlocks(child, blocks, indent)
      }
      break
    }
    default: {
      // Fallback générique : on tente de rendre le contenu inline.
      if (Array.isArray(node.content) && node.content.length > 0) {
        const text = trimLines(inlineToText(node.content as StoryblokRichtextNode[]))
        if (text) {
          blocks.push(text)
        }
      }
    }
  }
}

/**
 * Convertit un document Richtext Storyblok en texte structuré (markdown-ish).
 * - Paragraphes séparés par deux sauts de ligne
 * - Listes à puces : "* item"
 * - Listes ordonnées : "1. item"
 * - Citations : lignes préfixées par "> "
 * - Titres : simple ligne de texte (stringToDescriptionHtml s'occupe de les transformer en <h2>)
 */
export function richtextToMarkdown(doc: StoryblokRichtextNode | null | undefined): string {
  if (!doc || typeof doc !== 'object') return ''
  const blocks: string[] = []
  nodeToBlocks(doc, blocks)
  return blocks
    .map((b) => b.trimEnd())
    .filter((b) => b.length > 0)
    .join('\n\n')
}
