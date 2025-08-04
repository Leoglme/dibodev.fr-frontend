/**
 * Type definitions for the DibodevSelectOption type
 * @type {DibodevSelectOption}
 * @property {string} label - The label of the option
 * @property {number | string} value - The value of the option
 */
export type DibodevSelectOption = {
  label: string
  value: number | string
}

/**
 * Type definitions for the DibodevSelect component props
 * @type {DibodevSelectProps}
 * @property {DibodevSelectOption[]} options - The options for the select input
 * @property {DibodevSelectOption} modelValue - The selected option
 * @property {string} id - The id of the select input
 * @property {string | null} label - The label of the select input
 * @property {boolean} required - Whether the select input is required
 */
export type DibodevSelectProps = {
  options: DibodevSelectOption[]
  modelValue: DibodevSelectOption
  id: string
  label?: string | null
  required: boolean
}
