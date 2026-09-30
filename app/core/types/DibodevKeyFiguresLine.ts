import type { DibodevStatItemProps } from '~/core/types/DibodevStat'

/**
 * Type definitions for the DibodevKeyFiguresLine component props.
 * @type {DibodevKeyFiguresLineProps}
 * @property {DibodevStatItemProps[]} figures - Key figures, in reading order (value in bold, then its label).
 */
export type DibodevKeyFiguresLineProps = {
  figures: DibodevStatItemProps[]
}
