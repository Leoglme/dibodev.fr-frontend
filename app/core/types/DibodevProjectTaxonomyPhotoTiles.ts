import type { DibodevProjectTaxonomyLink } from '~/core/types/DibodevProjectTaxonomySection'

/**
 * Type definitions for the DibodevProjectTaxonomyPhotoTiles component props.
 * @type {DibodevProjectTaxonomyPhotoTilesProps}
 * @property {DibodevProjectTaxonomyLink[]} links - The listing pages to link to, each with its photo.
 */
export type DibodevProjectTaxonomyPhotoTilesProps = {
  links: DibodevProjectTaxonomyLink[]
}
