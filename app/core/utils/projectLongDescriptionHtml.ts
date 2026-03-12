/**
 * Conversion de longDescription (string ou RichText) en HTML pour affichage.
 * - string : paragraphes (séparés par \n\n), texte échappé
 * - RichText : rendu via @storyblok/richtext (côté client)
 */

import type { DibodevProjectLongDescription } from '~/core/types/DibodevProject'

const HTML_ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

function escapeHtml(str: string): string {
  return str.replace(/[&<>"']/g, (ch: string): string => HTML_ENTITIES[ch] ?? ch)
}

/**
 * Convertit le texte en HTML en transformant **gras** en <strong>.
 * Utilisé pour les descriptions EN/ES (string) où le bold n'est pas géré par le Rich text.
 */
function textToHtmlWithBold(str: string): string {
  if (!str) return ''
  const parts = str.split(/\*\*(.+?)\*\*/g)
  let out = ''
  for (let i = 0; i < parts.length; i++) {
    const segment = parts[i] ?? ''
    if (i % 2 === 1) {
      out += '<strong>' + escapeHtml(segment) + '</strong>'
    } else if (segment.length > 0) {
      out += escapeHtml(segment)
    }
  }
  return out
}

/** Titres de sections (FR) pour la description projet. */
export const PROJECT_DESCRIPTION_SECTION_TITLES: readonly string[] = [
  'Contexte',
  'Problème',
  'Solution',
  'Fonctionnalités principales',
  'Résultats',
] as const

/** Titres FR + EN + ES pour les afficher en <h2> (descriptions traduites dans les JSON). */
const SECTION_TITLES_I18N: readonly string[] = [
  ...PROJECT_DESCRIPTION_SECTION_TITLES,
  'Context',
  'Problem',
  'Solution',
  'Key features',
  'Results',
  'Contexto',
  'Problema',
  'Solución',
  'Funcionalidades principales',
  'Resultados',
]

function normalizeLineEndings(text: string): string {
  return text.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
}

function isListLine(line: string): boolean {
  return /^[-*]\s*/.test(line.trim())
}

function isOrderedListLine(line: string): boolean {
  return /^\d+\.\s+/.test(line.trim())
}

function isBlockquoteLine(line: string): boolean {
  return line.trim().startsWith('> ')
}

function isListBlock(block: string): boolean {
  const lines = block
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
  if (lines.length === 0) return false
  return lines.every((line) => isListLine(line))
}

function isOrderedListBlock(block: string): boolean {
  const lines = block
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
  if (lines.length === 0) return false
  return lines.every((line) => isOrderedListLine(line))
}

function listBlockToHtml(block: string): string {
  const lines = block
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
  const items = lines.map((line) => line.replace(/^[-*]\s*/, '').trim()).filter(Boolean)
  if (items.length === 0) return ''
  return `<ul>${items.map((item) => `<li>${textToHtmlWithBold(item)}</li>`).join('')}</ul>`
}

function orderedListBlockToHtml(block: string): string {
  const lines = block
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
  const items = lines.map((line) => line.replace(/^\d+\.\s*/, '').trim()).filter(Boolean)
  if (items.length === 0) return ''
  return `<ol>${items.map((item) => `<li>${textToHtmlWithBold(item)}</li>`).join('')}</ol>`
}

/**
 * Découpe un bloc en séquences paragraphe(s) + listes (lignes * / -) et renvoie le HTML.
 * Gère les blocs mixtes comme "This leads to:\n* item1\n* item2" (un seul \n avant les puces).
 */
function renderMixedBlock(block: string): string {
  const lines = block.split('\n')
  const out: string[] = []
  let paragraphLines: string[] = []
  let listLines: string[] = []

  function flushParagraph(): void {
    if (paragraphLines.length > 0) {
      const text = paragraphLines.join(' ').trim()
      if (text) out.push(`<p class="mb-4 last:mb-0">${textToHtmlWithBold(text)}</p>`)
      paragraphLines = []
    }
  }
  function flushList(): void {
    if (listLines.length > 0) {
      out.push(listBlockToHtml(listLines.join('\n')))
      listLines = []
    }
  }
  const quoteLines: string[] = []
  function flushBlockquote(): void {
    if (quoteLines.length > 0) {
      const text = quoteLines.map((l) => l.replace(/^>\s*/, '').trim()).join(' ')
      if (text) {
        out.push(`<blockquote>`)
        out.push(`<p class="mb-0">${textToHtmlWithBold(text)}</p>`)
        out.push('</blockquote>')
      }
      quoteLines.length = 0
    }
  }
  const orderedListLines: string[] = []
  function flushOrderedList(): void {
    if (orderedListLines.length > 0) {
      out.push(orderedListBlockToHtml(orderedListLines.join('\n')))
      orderedListLines.length = 0
    }
  }

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) {
      flushParagraph()
      flushList()
      flushBlockquote()
      flushOrderedList()
      continue
    }
    if (isBlockquoteLine(trimmed)) {
      flushParagraph()
      flushList()
      flushOrderedList()
      quoteLines.push(trimmed)
    } else if (isOrderedListLine(trimmed)) {
      flushParagraph()
      flushList()
      flushBlockquote()
      orderedListLines.push(trimmed)
    } else if (isListLine(trimmed)) {
      flushParagraph()
      flushBlockquote()
      flushOrderedList()
      listLines.push(trimmed)
    } else {
      flushList()
      flushBlockquote()
      flushOrderedList()
      paragraphLines.push(trimmed)
    }
  }
  flushParagraph()
  flushList()
  flushBlockquote()
  flushOrderedList()
  return out.join('')
}

/**
 * Convertit une description (string) en HTML.
 * Utilisé pour les traductions EN/ES depuis les JSON : même mise en forme que le FR Storyblok (h2 + listes).
 * - Bloc = titre de section (FR/EN/ES) → <h2>
 * - Bloc 100 % puces (* / -) → <ul><li>...</li></ul>
 * - Bloc "Titre\n* item1" → <h2> + <ul>
 * - Bloc mixte "Intro:\n* item1" → <p> + <ul>
 * - Sinon → <p> (les \n en <br>)
 */
export function stringToDescriptionHtml(text: string, sectionTitles: readonly string[] = SECTION_TITLES_I18N): string {
  const normalized = normalizeLineEndings(text)
  const trimmed = normalized.trim()
  if (trimmed === '') return ''
  const paragraphs = trimmed
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0)
  if (paragraphs.length === 0) return ''

  const out: string[] = []
  for (const p of paragraphs) {
    const firstLine = p.split('\n')[0]?.trim() ?? ''
    const rest = p.includes('\n') ? p.slice(p.indexOf('\n') + 1).trim() : ''

    if (sectionTitles.includes(firstLine)) {
      out.push(`<h2>${textToHtmlWithBold(firstLine)}</h2>`)
      if (rest && isListBlock(rest)) {
        out.push(listBlockToHtml(rest))
      } else if (rest && isOrderedListBlock(rest)) {
        out.push(orderedListBlockToHtml(rest))
      } else if (rest) {
        out.push(renderMixedBlock(rest))
      }
    } else if (isListBlock(p)) {
      out.push(listBlockToHtml(p))
    } else if (isOrderedListBlock(p)) {
      out.push(orderedListBlockToHtml(p))
    } else {
      out.push(renderMixedBlock(p))
    }
  }
  return out.join('')
}

/**
 * Indique si la valeur est un document RichText (objet avec type et content).
 */
export function isRichtextDocument(
  value: DibodevProjectLongDescription,
): value is { type: string; content?: unknown[] } {
  return (
    value != null &&
    typeof value === 'object' &&
    'type' in value &&
    typeof (value as { type: unknown }).type === 'string'
  )
}
