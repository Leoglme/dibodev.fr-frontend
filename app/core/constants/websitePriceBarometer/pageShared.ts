import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevPriceRange } from '~/core/types/DibodevPriceBarometer'
import type {
  DibodevWebsitePriceBarometerDataset,
  DibodevWebsitePriceBarometerSourceKind,
} from '~/core/types/DibodevWebsitePriceBarometer'
import rawDataset from '~~/content/data/website-price-barometer-2026.json'

/**
 * The prices recorded on 1 November 2026 on each source's own page, typed; the JSON file is the single source for the
 * page and the downloadable CSV. Check them twice a year, move `checkedAt` and regenerate the CSV with
 * `node content/data/generate-website-price-barometer-csv.mjs`.
 */
export const WEBSITE_PRICE_BAROMETER_DATASET: DibodevWebsitePriceBarometerDataset =
  rawDataset as DibodevWebsitePriceBarometerDataset

/** Path of the page in each language, used by the Dataset JSON-LD. */
export const WEBSITE_PRICE_BAROMETER_PAGE_PATHS: Record<SupportedLocale, string> = {
  fr: '/prix-site-internet',
  en: '/en/website-price-barometer',
  es: '/es/precio-pagina-web',
}

/** The CSV published next to the page, regenerated from the JSON file. */
export const WEBSITE_PRICE_BAROMETER_CSV_PATH: string = '/data/prix-site-internet-2026.csv'

/** Articles linked at the bottom of the page; the untranslated ones are left out of /en and /es automatically. */
export const WEBSITE_PRICE_BAROMETER_RELATED_ARTICLE_SLUGS: string[] = [
  'site-vitrine-ou-outil-metier-sur-mesure-que-choisir',
  'aides-creation-site-internet-logiciel-2026',
  'site-web-artisans-attirer-clients-locaux',
]

/** Freelancers and agencies: the sources whose monthly price is a maintenance, not a subscription that replaces the site. */
export const WEBSITE_PRICE_BAROMETER_PROVIDER_KINDS: DibodevWebsitePriceBarometerSourceKind[] = ['freelance', 'agency']

/** Website builders: their monthly price is the subscription that keeps the site online. */
export const WEBSITE_PRICE_BAROMETER_BUILDER_KINDS: DibodevWebsitePriceBarometerSourceKind[] = ['builder']

/** Dibodev's template website (generated with DevLeadHunter), paid once, domain and hosting included. */
export const DIBODEV_TEMPLATE_WEBSITE_PRICE: DibodevPriceRange = { min: 290, max: 290 }

/** Number of years of the comparison between a builder subscription, a template site and a custom site. */
export const WEBSITE_PRICE_COMPARISON_YEARS: number = 3
