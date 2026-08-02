/**
 * Extract text nodes from Storyblok richtext in order and inject translations back.
 * Used for article content translation (node-by-node, same structure).
 */

import type { StoryblokRichtextNode } from '~~/server/types/dashboard/translations'

/** Embedded block carried by a richtext "blok" node, exposing its translatable label. */
type EmbeddedRichtextBlok = { label?: unknown }

/**
 * Returns the embedded blocks of a richtext "blok" node (Storyblok stores them in attrs.body).
 *
 * @param {StoryblokRichtextNode} node - The richtext node to inspect.
 * @returns {EmbeddedRichtextBlok[]} The embedded blocks, or an empty array when there are none.
 */
function embeddedBloks(node: StoryblokRichtextNode): EmbeddedRichtextBlok[] {
  const body: unknown = node.attrs?.body
  return Array.isArray(body) ? (body as EmbeddedRichtextBlok[]) : []
}

/**
 * Recursively collects all translatable strings (text nodes and embedded blok labels) in document order.
 *
 * @param {StoryblokRichtextNode} node - The richtext document (or node) to walk.
 * @returns {string[]} The translatable strings in document order.
 */
export function extractRichtextTexts(node: StoryblokRichtextNode): string[] {
  const out: string[] = []
  function walk(n: StoryblokRichtextNode): void {
    if (typeof n.text === 'string' && n.text.trim() !== '') {
      out.push(n.text)
    }
    for (const blok of embeddedBloks(n)) {
      if (typeof blok.label === 'string' && blok.label.trim() !== '') {
        out.push(blok.label)
      }
    }
    if (Array.isArray(n.content)) {
      for (const child of n.content) {
        walk(child as StoryblokRichtextNode)
      }
    }
  }
  walk(node)
  return out
}

/**
 * Recursively replaces each translatable string (text node or embedded blok label) in place, consuming translations in order.
 *
 * @param {StoryblokRichtextNode} node - The richtext document (or node) to mutate.
 * @param {string[]} translations - The translated strings, in the order extractRichtextTexts produced them.
 * @returns {{ index: number }} The number of translations consumed.
 */
export function injectRichtextTranslations(node: StoryblokRichtextNode, translations: string[]): { index: number } {
  let index: number = 0
  function walk(n: StoryblokRichtextNode): void {
    if (typeof n.text === 'string' && n.text.trim() !== '') {
      if (index < translations.length) {
        n.text = translations[index]!
        index++
      }
    }
    for (const blok of embeddedBloks(n)) {
      if (typeof blok.label === 'string' && blok.label.trim() !== '') {
        if (index < translations.length) {
          blok.label = translations[index]!
          index++
        }
      }
    }
    if (Array.isArray(n.content)) {
      for (const child of n.content) {
        walk(child as StoryblokRichtextNode)
      }
    }
  }
  walk(node)
  return { index }
}
