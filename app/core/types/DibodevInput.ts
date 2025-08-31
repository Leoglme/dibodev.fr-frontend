/**
 * Type definitions for the dibodev input component props
 * @type {DibodevInputProps}
 * @property {string | null} placeholder - The input placeholder
 * @property {string | number} value - The input value
 * @property {number | null} rows - The input rows
 * @property {string} id - The input id
 * @property {string} type - The input type
 * @property {string | null} rules - The input rules
 * @property {string | null} label - The input label
 * @property {number | null} min - The input min value
 * @property {string | null} step - The input step value
 */
export type DibodevInputProps = {
  placeholder: string | null
  value: string | number
  rows: number | null
  id: string
  type: string
  rules: string | null
  label: string | null
  min: number | null
  step: number | null
}
