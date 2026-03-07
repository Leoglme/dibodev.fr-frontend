/**
 * Extrait une description texte pour le schéma JSON-LD (SEO).
 * longDescription peut être une string ou un document RichText ; on renvoie du texte brut.
 */

import type { DibodevProject } from '~/core/types/DibodevProject'

/**
 * Extrait le texte brut d'un nœud RichText (récursif).
 */
function extractTextFromRichtextNode(node: { type?: string; text?: string; content?: unknown[] }): string {
  if (node.text != null && typeof node.text === 'string') {
    return node.text
  }
  const parts: string[] = []
  const content: unknown[] = Array.isArray(node.content) ? node.content : []
  for (const child of content) {
    if (child != null && typeof child === 'object' && 'type' in child) {
      const c = child as { type?: string; text?: string; content?: unknown[] }
      parts.push(extractTextFromRichtextNode(c))
    }
  }
  return parts.join(' ')
}

/**
 * Retourne la description à utiliser dans le schema.org (texte brut, pas de HTML).
 */
export function getProjectDescriptionForSchema(project: DibodevProject): string {
  const long: DibodevProject['longDescription'] = project.longDescription
  if (typeof long === 'string' && long.trim() !== '') {
    return long.trim()
  }
  if (long != null && typeof long === 'object' && 'content' in long && Array.isArray(long.content)) {
    const texts: string[] = []
    for (const node of long.content) {
      if (node != null && typeof node === 'object') {
        texts.push(extractTextFromRichtextNode(node as { type?: string; text?: string; content?: unknown[] }))
      }
    }
    const joined: string = texts.join(' ').replace(/\s+/g, ' ').trim()
    if (joined !== '') return joined
  }
  return project.shortDescription
}
