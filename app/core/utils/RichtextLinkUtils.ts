import type { StoryblokRichTextDocumentNode } from '@storyblok/richtext'
import { MarkTypes } from '@storyblok/richtext'
import { StoryblokLinkUtils } from '~/core/utils/StoryblokLinkUtils'

/**
 * Utilities to rewrite the links of a Storyblok richtext document.
 */
export class RichtextLinkUtils {
  /**
   * Returns a copy of the document where every internal link went through the given mapper.
   *
   * @param {StoryblokRichTextDocumentNode} document - Storyblok richtext document, left untouched.
   * @param {(href: string) => string} mapInternalHref - Gives the final href of an internal path such as "/blog/my-article#faq".
   * @returns {StoryblokRichTextDocumentNode} The rewritten copy.
   */
  static mapInternalLinkHrefs(
    document: StoryblokRichTextDocumentNode,
    mapInternalHref: (href: string) => string,
  ): StoryblokRichTextDocumentNode {
    const mappedNode: StoryblokRichTextDocumentNode = { ...document }
    if (document.content) {
      mappedNode.content = document.content.map(
        (child: StoryblokRichTextDocumentNode): StoryblokRichTextDocumentNode =>
          RichtextLinkUtils.mapInternalLinkHrefs(child, mapInternalHref),
      )
    }
    if (document.marks) {
      mappedNode.marks = document.marks.map(
        (mark: StoryblokRichTextDocumentNode): StoryblokRichTextDocumentNode =>
          RichtextLinkUtils.mapInternalLinkMark(mark, mapInternalHref),
      )
    }
    return mappedNode
  }

  /**
   * Rewrites the href of a link mark when it points to a page of the site.
   *
   * @param {StoryblokRichTextDocumentNode} mark - Any mark of a text node.
   * @param {(href: string) => string} mapInternalHref - Gives the final href of an internal path.
   * @returns {StoryblokRichTextDocumentNode} The mark, rewritten when it is an internal link.
   */
  private static mapInternalLinkMark(
    mark: StoryblokRichTextDocumentNode,
    mapInternalHref: (href: string) => string,
  ): StoryblokRichTextDocumentNode {
    const href: unknown = mark.attrs?.href
    if (mark.type !== MarkTypes.LINK || typeof href !== 'string' || !StoryblokLinkUtils.isInternalPath(href)) {
      return mark
    }
    return { ...mark, attrs: { ...mark.attrs, href: mapInternalHref(href) } }
  }
}
