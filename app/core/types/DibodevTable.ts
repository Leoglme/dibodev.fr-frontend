import type { DibodevTableCardField } from '~/core/types/DibodevTableCard'

/**
 * Type definitions for the Dibodev table component item
 */
export type DibodevTableItem = Record<string, unknown>

/**
 * Table field definition
 */
export type DibodevTableField = {
  key: string
  label: string
  cellsClasses?: string
  formatValue?: (value: unknown) => string
  setTdStyle?: (item: DibodevTableItem) => string | undefined
}

/**
 * Type definitions for the Dibodev table component props
 */
export type DibodevTableProps = {
  fields: DibodevTableField[]
  cardFields?: DibodevTableCardField[] | null
  items: DibodevTableItem[]
  load: boolean
  clickable?: boolean
  /** Breakpoint (px) below which table switches to card layout. null = never. */
  switchToCardAt?: number | null
  /** Key to use as row key (e.g. 'id', 'url'). Default 'id'. */
  rowKey?: string
}
