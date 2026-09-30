import type { DibodevProjectTaxonomyLink } from '~/core/types/DibodevProjectTaxonomySection'

/**
 * Type definitions for the DibodevProjectTaxonomyChips component props.
 * @type {DibodevProjectTaxonomyChipsProps}
 * @property {DibodevProjectTaxonomyLink[]} links - The listing pages to link to.
 * @property {boolean} hideEmpty - Whether listings without projects are left out.
 */
export type DibodevProjectTaxonomyChipsProps = {
  links: DibodevProjectTaxonomyLink[]
  hideEmpty: boolean
}
