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

/** Titres de sections affichés en gras dans la description projet. */
export const PROJECT_DESCRIPTION_SECTION_TITLES: readonly string[] = [
  'Contexte',
  'Problème',
  'Solution',
  'Fonctionnalités principales',
  'Résultats',
] as const

/**
 * Convertit une description en texte brut en HTML (paragraphes).
 * Si un paragraphe est exactement un titre de section (Contexte, Problème, etc.), il reçoit la classe font-semibold.
 */
export function stringToDescriptionHtml(
  text: string,
  sectionTitles: readonly string[] = PROJECT_DESCRIPTION_SECTION_TITLES,
): string {
  const trimmed: string = text.trim()
  if (trimmed === '') return ''
  const paragraphs: string[] = trimmed
    .split(/\n\n+/)
    .map((p: string): string => p.trim())
    .filter((p: string): boolean => p.length > 0)
  if (paragraphs.length === 0) return ''
  return paragraphs
    .map((p: string): string => {
      const isSectionTitle: boolean = sectionTitles.includes(p)
      const cls: string = isSectionTitle ? 'mb-4 last:mb-0 font-semibold' : 'mb-4 last:mb-0'
      return `<p class="${cls}">${escapeHtml(p)}</p>`
    })
    .join('')
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
