/**
 * Extract text nodes from Storyblok richtext in order and inject translations back.
 * Used for article content translation (node-by-node, same structure).
 */

import type { StoryblokRichtextNode } from '~~/server/types/dashboard/translations'

/**
 * Recursively collect all .text values in document order.
 */
export function extractRichtextTexts(node: StoryblokRichtextNode): string[] {
  const out: string[] = []
  function walk(n: StoryblokRichtextNode): void {
    if (typeof n.text === 'string' && n.text.trim() !== '') {
      out.push(n.text)
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
 * Recursively replace each .text with the corresponding value from translations array.
 * Modifies node in place; translations are consumed in order.
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
    if (Array.isArray(n.content)) {
      for (const child of n.content) {
        walk(child as StoryblokRichtextNode)
      }
    }
  }
  walk(node)
  return { index }
}
