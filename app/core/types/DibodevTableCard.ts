export const dibodevTableCardFieldLayout = ['row', 'column'] as const

/**
 * Type definition for DibodevTableCardFieldLayout
 */
export type DibodevTableCardFieldLayout = (typeof dibodevTableCardFieldLayout)[number]

/**
 * Type definitions for the Dibodev table card item
 */
export type DibodevTableCardItem = Record<string, unknown>

/**
 * DibodevTableCard field definition
 */
export type DibodevTableCardField = {
  key: string
  label: string
  layout?: DibodevTableCardFieldLayout | null
  formatValue?: (value: unknown) => string
}

/**
 * Type definition for DibodevTableCard props
 */
export type DibodevTableCardProps = {
  fields: DibodevTableCardField[]
  item?: DibodevTableCardItem | null
  load: boolean
}
