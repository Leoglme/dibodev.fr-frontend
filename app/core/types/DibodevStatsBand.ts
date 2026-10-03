import type { DibodevStatItemProps } from '~/core/types/DibodevStat'

/**
 * Type definitions for the DibodevStatsBand component props.
 * @type {DibodevStatsBandProps}
 * @property {DibodevStatItemProps[]} stats - Key figures, two to four (value shown above its label).
 * @property {string} accentColor - Colour of the short bar above each figure (e.g. the project colour), lightened; grey when empty.
 */
export type DibodevStatsBandProps = {
  stats: DibodevStatItemProps[]
  accentColor: string
}
