import type { DibodevStatItemProps } from '~/core/types/DibodevStat'

/**
 * Type definitions for the DibodevStatsBand component props.
 * @type {DibodevStatsBandProps}
 * @property {DibodevStatItemProps[]} stats - Key figures, two to four (value shown above its label).
 */
export type DibodevStatsBandProps = {
  stats: DibodevStatItemProps[]
}
