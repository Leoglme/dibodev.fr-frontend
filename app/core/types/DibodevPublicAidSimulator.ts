import type { DibodevCommunesDataset, DibodevPublicAidDataset } from '~/core/types/DibodevPublicAid'
import type { DibodevPublicAidSimulatorWording } from '~/core/types/DibodevPublicAidPage'

/**
 * Props of the public aid simulator.
 * @property {string} anchorId - Id of the simulator, for in-page links.
 * @property {DibodevPublicAidSimulatorWording} wording - Texts in the page language.
 * @property {DibodevPublicAidDataset} schemes - The rules by intercommunalité.
 * @property {DibodevCommunesDataset} communes - The commune table of Brittany.
 * @property {string} numberLocale - Locale used to format amounts.
 * @property {string} trackingLocation - Page name sent with the tracking events.
 */
export type DibodevPublicAidSimulatorProps = {
  anchorId: string
  wording: DibodevPublicAidSimulatorWording
  schemes: DibodevPublicAidDataset
  communes: DibodevCommunesDataset
  numberLocale: string
  trackingLocation: string
}
