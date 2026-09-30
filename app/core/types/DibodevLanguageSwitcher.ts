import type { DibodevSelectOption } from '~/core/types/DibodevSelect'

/**
 * Type definitions for the DibodevLanguageSwitcher component props.
 * @type {DibodevLanguageSwitcherProps}
 * @property {DibodevSelectOption[]} options - The locales (label + code).
 * @property {string} id - Id of the toggle button.
 */
export type DibodevLanguageSwitcherProps = {
  options: DibodevSelectOption[]
  id: string
}
