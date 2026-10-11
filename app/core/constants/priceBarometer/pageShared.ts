import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevPriceBarometerDataset, DibodevPriceRange } from '~/core/types/DibodevPriceBarometer'
import rawDataset from '~~/content/data/price-barometer-2026.json'

// Public prices recorded on 11 October 2026 on each provider's own page (see `content/data/price-barometer-2026.json`):
// check them twice a year, move `checkedAt`, and regenerate the CSV with `node scripts/generate-price-barometer-csv.mjs`.

/** The recorded prices, typed; the JSON file is the single source for the page and the downloadable CSV. */
export const PRICE_BAROMETER_DATASET: DibodevPriceBarometerDataset = rawDataset as DibodevPriceBarometerDataset

/** Path of the page in each language, used by the Dataset JSON-LD. */
export const PRICE_BAROMETER_PAGE_PATHS: Record<SupportedLocale, string> = {
  fr: '/prix-logiciel-sur-mesure',
  en: '/en/custom-software-price-barometer',
  es: '/es/precio-software-a-medida',
}

/** The CSV published next to the page, regenerated from the JSON file. */
export const PRICE_BAROMETER_CSV_PATH: string = '/data/prix-logiciel-sur-mesure-2026.csv'

/** Articles linked at the bottom of the page; the untranslated ones are left out of /en and /es automatically. */
export const PRICE_BAROMETER_RELATED_ARTICLE_SLUGS: string[] = [
  'developpement-logiciel-b2b-sur-mesure-prix',
  'application-metier-sur-mesure-guide-tpe-pme',
  'logiciel-metier-saas-etagere-ou-sur-mesure',
]

/** Monthly price of the trade software compared on the four tool pages (9 € for Epsylon up to 249 € for Klaxo), checked on 29 and 30 September 2026. */
export const TRADE_SUBSCRIPTION_MONTHLY_RANGE: DibodevPriceRange = { min: 9, max: 249 }

/** Dibodev's monthly maintenance, as published on the home page. */
export const DIBODEV_MAINTENANCE_MONTHLY_RANGE: DibodevPriceRange = { min: 100, max: 300 }

/** Yearly maintenance announced by the agencies of the dataset, as a share of the initial price (10 to 25 %, most often 15 to 25). */
export const AGENCY_MAINTENANCE_PERCENT_RANGE: DibodevPriceRange = { min: 15, max: 25 }

export const COMPARISON_YEARS: number = 5
