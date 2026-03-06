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
 * Option avec href pour le mode "liens" (SEO, crawl).
 * Quand useLinks est true, les options doivent être de ce type.
 */
export type DibodevSelectOptionWithHref = DibodevSelectOption & {
  href: string
}

/**
 * Type definitions for the DibodevSelect component props
 * @type {DibodevSelectProps}
 * @property {DibodevSelectOption[] | DibodevSelectOptionWithHref[]} options - The options for the select input (with href when useLinks)
 * @property {DibodevSelectOption} modelValue - The selected option
 * @property {string} id - The id of the select input
 * @property {string | null} label - The label of the select input
 * @property {boolean} required - Whether the select input is required
 * @property {boolean} useLinks - When true, render options as NuxtLink (same UI, crawlable links)
 */
export type DibodevSelectProps = {
  options: DibodevSelectOption[] | DibodevSelectOptionWithHref[]
  modelValue: DibodevSelectOption
  id: string
  label?: string | null
  required: boolean
  useLinks?: boolean
}
