import type {
  DibodevEstimatorBaseRange,
  DibodevEstimatorOption,
  DibodevEstimatorProjectKind,
  DibodevEstimatorProjectSize,
  DibodevEstimatorResult,
} from '~/core/types/DibodevBudgetEstimator'

export const ESTIMATOR_PROJECT_KINDS: DibodevEstimatorProjectKind[] = ['website', 'tool', 'software']
export const ESTIMATOR_PROJECT_SIZES: DibodevEstimatorProjectSize[] = ['small', 'medium', 'large']
export const ESTIMATOR_OPTIONS: DibodevEstimatorOption[] = ['dataImport', 'integrations', 'mobileApp', 'ai']

/**
 * Indicative ranges, consistent with the public price grid (site from 1 500 €, tool from 2 500 €,
 * management software 5 000 to 15 000 €). The quote is what counts; these only help a visitor situate a project.
 */
export const ESTIMATOR_BASE_RANGES: Record<
  DibodevEstimatorProjectKind,
  Record<DibodevEstimatorProjectSize, DibodevEstimatorBaseRange>
> = {
  website: {
    small: { minPrice: 1500, maxPrice: 2500, minWeeks: 2, maxWeeks: 3 },
    medium: { minPrice: 2500, maxPrice: 4000, minWeeks: 3, maxWeeks: 5 },
    large: { minPrice: 4000, maxPrice: 7000, minWeeks: 5, maxWeeks: 8 },
  },
  tool: {
    small: { minPrice: 2500, maxPrice: 4000, minWeeks: 2, maxWeeks: 4 },
    medium: { minPrice: 4000, maxPrice: 7000, minWeeks: 4, maxWeeks: 6 },
    large: { minPrice: 7000, maxPrice: 12000, minWeeks: 6, maxWeeks: 10 },
  },
  software: {
    small: { minPrice: 5000, maxPrice: 8000, minWeeks: 5, maxWeeks: 8 },
    medium: { minPrice: 8000, maxPrice: 15000, minWeeks: 8, maxWeeks: 12 },
    large: { minPrice: 15000, maxPrice: 25000, minWeeks: 12, maxWeeks: 20 },
  },
}

/** Price multiplier and extra weeks added by each option. */
export const ESTIMATOR_OPTION_EFFECTS: Record<DibodevEstimatorOption, { priceFactor: number; extraWeeks: number }> = {
  dataImport: { priceFactor: 0.1, extraWeeks: 1 },
  integrations: { priceFactor: 0.15, extraWeeks: 1 },
  mobileApp: { priceFactor: 0.3, extraWeeks: 2 },
  ai: { priceFactor: 0.2, extraWeeks: 1 },
}

/** Prices are rounded to the nearest 500 € so the estimate reads as a range, not as a quote. */
const PRICE_ROUNDING: number = 500

/**
 * Computes an indicative price and duration range.
 * @param {DibodevEstimatorProjectKind} kind - Kind of tool.
 * @param {DibodevEstimatorProjectSize} size - Size of the tool.
 * @param {DibodevEstimatorOption[]} options - Selected add-ons.
 * @returns {DibodevEstimatorResult} The rounded ranges.
 */
export function estimateBudget(
  kind: DibodevEstimatorProjectKind,
  size: DibodevEstimatorProjectSize,
  options: DibodevEstimatorOption[],
): DibodevEstimatorResult {
  const base: DibodevEstimatorBaseRange = ESTIMATOR_BASE_RANGES[kind][size]
  const priceFactor: number = options.reduce(
    (factor: number, option: DibodevEstimatorOption): number => factor + ESTIMATOR_OPTION_EFFECTS[option].priceFactor,
    1,
  )
  const extraWeeks: number = options.reduce(
    (weeks: number, option: DibodevEstimatorOption): number => weeks + ESTIMATOR_OPTION_EFFECTS[option].extraWeeks,
    0,
  )
  return {
    minPrice: Math.round((base.minPrice * priceFactor) / PRICE_ROUNDING) * PRICE_ROUNDING,
    maxPrice: Math.round((base.maxPrice * priceFactor) / PRICE_ROUNDING) * PRICE_ROUNDING,
    minWeeks: base.minWeeks + extraWeeks,
    maxWeeks: base.maxWeeks + extraWeeks,
  }
}

/** Contact form project type matching each estimator kind. */
export const ESTIMATOR_KIND_TO_CONTACT_TYPE: Record<DibodevEstimatorProjectKind, string> = {
  website: 'website',
  tool: 'automation',
  software: 'software',
}

/**
 * Contact form budget bucket matching an estimate (based on the middle of the range).
 * @param {DibodevEstimatorResult} result - The estimate.
 * @returns {string} The `budgetRange` key of the contact form.
 */
export function toContactBudgetRange(result: DibodevEstimatorResult): string {
  const middle: number = (result.minPrice + result.maxPrice) / 2
  if (middle < 2000) return 'under_2k'
  if (middle < 5000) return '2k_5k'
  if (middle < 15000) return '5k_15k'
  return '15k_plus'
}
