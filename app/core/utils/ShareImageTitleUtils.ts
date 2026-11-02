import type { DibodevToolShareImageLineParts } from '~/core/types/DibodevToolShareImage'

/** Splits the title lines of a share image around the words drawn in violet. */
export class ShareImageTitleUtils {
  private static readonly LEADING_SPACE_REGEX: RegExp = /^\s/

  /**
   * Cuts each line into the text before the highlight, the highlight and the text after it.
   * @param {string[]} titleLines - The lines of the title.
   * @param {string} highlight - The words drawn in violet, or an empty string.
   * @returns {DibodevToolShareImageLineParts[]} One entry per line; a line without the highlight is all in `before`.
   */
  public static splitLines(titleLines: string[], highlight: string): DibodevToolShareImageLineParts[] {
    return titleLines.map((line: string): DibodevToolShareImageLineParts => {
      const highlightIndex: number = highlight ? line.indexOf(highlight) : -1
      if (highlightIndex === -1) {
        return { before: line, highlight: '', after: '', isAfterSpaced: false }
      }
      const rawAfter: string = line.slice(highlightIndex + highlight.length)
      return {
        before: line.slice(0, highlightIndex).trim(),
        highlight,
        after: rawAfter.trim(),
        isAfterSpaced: ShareImageTitleUtils.LEADING_SPACE_REGEX.test(rawAfter),
      }
    })
  }
}
