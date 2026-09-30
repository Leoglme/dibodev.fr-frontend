/**
 * A pair of colours used to tint an icon tile, a numbered badge or a card border:
 * a saturated `color` for text and lines (readable on white) and a pastel `background`.
 * @type {DibodevAccentPalette}
 * @property {string} key - Stable identifier of the palette (violet, cyan, green, pink).
 * @property {string} color - Saturated colour for text and strokes.
 * @property {string} background - Pastel surface colour.
 */
export type DibodevAccentPalette = {
  key: 'violet' | 'cyan' | 'green' | 'pink' | 'amber'
  color: string
  background: string
}
