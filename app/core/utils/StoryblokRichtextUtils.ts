import { richTextResolver } from '@storyblok/richtext'

type StoryblokRichtextNode = Parameters<ReturnType<typeof richTextResolver>['render']>[0]

/**
 * Utilities to render Storyblok richtext fields as HTML.
 */
export class StoryblokRichtextUtils {
  /**
   * Tells whether a value is a Storyblok richtext document.
   *
   * @param {unknown} value - The value to test.
   * @returns {boolean} True when the value is an object with a string `type`.
   */
  static isRichtextDocument(value: unknown): value is StoryblokRichtextNode {
    return typeof value === 'object' && value !== null && typeof (value as { type?: unknown }).type === 'string'
  }

  /**
   * Renders a Storyblok richtext field as HTML.
   *
   * @param {unknown} value - A richtext document, or an HTML string returned as is.
   * @returns {string} The trimmed HTML, or an empty string when there is nothing to render.
   */
  static toHtml(value: unknown): string {
    if (typeof value === 'string') return value.trim()
    if (!StoryblokRichtextUtils.isRichtextDocument(value)) return ''
    try {
      const html: unknown = richTextResolver().render(value)
      return typeof html === 'string' ? html.trim() : ''
    } catch {
      return ''
    }
  }
}
