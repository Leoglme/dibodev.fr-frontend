import type { DibodevProject } from '~/core/types/DibodevProject'

/**
 * Type definitions for the DibodevProjectLogoMosaic component props.
 * @type {DibodevProjectLogoMosaicProps}
 * @property {DibodevProject[]} projects - Projects to show as logo tiles (the first six are used).
 * @property {string} trackingSource - PostHog `source` property sent when a tile is clicked.
 */
export type DibodevProjectLogoMosaicProps = {
  projects: DibodevProject[]
  trackingSource: string
}
