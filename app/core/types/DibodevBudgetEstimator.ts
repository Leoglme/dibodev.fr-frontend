import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'

/** Kind of tool estimated. */
export type DibodevEstimatorProjectKind = 'website' | 'tool' | 'software'

/** Size of the tool: a few screens, a full workflow, or a platform. */
export type DibodevEstimatorProjectSize = 'small' | 'medium' | 'large'

/** Optional add-ons that widen the estimate. */
export type DibodevEstimatorOption = 'dataImport' | 'integrations' | 'mobileApp' | 'ai'

/**
 * Price and duration ranges of one kind × size combination.
 * @type {DibodevEstimatorBaseRange}
 * @property {number} minPrice - Lower price bound in euros.
 * @property {number} maxPrice - Upper price bound in euros.
 * @property {number} minWeeks - Lower duration bound in weeks.
 * @property {number} maxWeeks - Upper duration bound in weeks.
 */
export type DibodevEstimatorBaseRange = {
  minPrice: number
  maxPrice: number
  minWeeks: number
  maxWeeks: number
}

/**
 * Result of an estimate.
 * @type {DibodevEstimatorResult}
 * @property {number} minPrice - Lower price bound in euros, rounded.
 * @property {number} maxPrice - Upper price bound in euros, rounded.
 * @property {number} minWeeks - Lower duration bound in weeks.
 * @property {number} maxWeeks - Upper duration bound in weeks.
 */
export type DibodevEstimatorResult = DibodevEstimatorBaseRange

/**
 * Type definitions for the DibodevBudgetEstimatorSection component props.
 * @type {DibodevBudgetEstimatorSectionProps}
 * @property {string} eyebrow - Small uppercase line above the title (the estimator's own one when empty).
 * @property {string} title - Section title (the estimator's own one when empty).
 * @property {string} intro - Paragraph under the title (the estimator's own one when empty).
 * @property {DibodevSectionTone} tone - Background tone of the section.
 * @property {string} trackingLocation - PostHog `location` property sent with the estimate events.
 */
export type DibodevBudgetEstimatorSectionProps = {
  eyebrow: string
  title: string
  intro: string
  tone: DibodevSectionTone
  trackingLocation: string
}
