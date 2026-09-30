import type { DibodevAccentPalette } from '~/core/types/DibodevAccentPalette'

/**
 * Brand accent palettes, in display order. Text colours keep at least a 4.5:1 contrast on white,
 * backgrounds are the pastel tiles of the historical Dibodev site.
 */
export const ACCENT_PALETTES: DibodevAccentPalette[] = [
  { key: 'violet', color: '#5b4bd0', background: '#efeaff' },
  { key: 'cyan', color: '#0e7490', background: '#e0f5fa' },
  { key: 'green', color: '#047857', background: '#e4f8ec' },
  { key: 'pink', color: '#be185d', background: '#fde7f3' },
  { key: 'amber', color: '#b45309', background: '#fdf1dc' },
]

/**
 * Returns the accent palette for a position, cycling through the list.
 * @param {number} index - Zero-based position of the item.
 * @returns {DibodevAccentPalette} The palette to use.
 */
export function getAccentPalette(index: number): DibodevAccentPalette {
  return ACCENT_PALETTES[index % ACCENT_PALETTES.length] as DibodevAccentPalette
}
