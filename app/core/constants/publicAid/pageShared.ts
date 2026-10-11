import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevCommunesDataset, DibodevPublicAidDataset } from '~/core/types/DibodevPublicAid'
import rawCommunes from '~~/content/data/communes-bretagne.json'
import rawSchemes from '~~/content/data/public-aid-schemes-2026.json'

// Rules read on 11 October 2026 on the pages of the Région Bretagne and of the intercommunalités (see the JSON file
// and the research note of the skill): check them twice a year and move `checkedAt`.

/** The Pass Commerce et Artisanat rules by intercommunalité, typed; the JSON file is the single source. */
export const PUBLIC_AID_DATASET: DibodevPublicAidDataset = rawSchemes as unknown as DibodevPublicAidDataset

/** Every commune of Brittany with its intercommunalité and population (geo.api.gouv.fr, 11 October 2026). */
export const BRITTANY_COMMUNES: DibodevCommunesDataset = rawCommunes as unknown as DibodevCommunesDataset

export const PUBLIC_AID_PAGE_UPDATED_AT: string = PUBLIC_AID_DATASET.checkedAt

/** Path of the page in each language, used by the JSON-LD. */
export const PUBLIC_AID_PAGE_PATHS: Record<SupportedLocale, string> = {
  fr: '/outils/aides-site-internet-logiciel',
  en: '/en/tools/public-aid-website-software',
  es: '/es/herramientas/ayudas-web-software',
}

export const PUBLIC_AID_SIMULATOR_ANCHOR_ID: string = 'simulateur'

export const ILLE_ET_VILAINE_DEPARTMENT: string = '35'

/** Articles linked at the bottom of the page; the untranslated or unpublished ones are left out automatically. */
export const PUBLIC_AID_RELATED_ARTICLE_SLUGS: string[] = [
  'pass-commerce-artisanat-rennes-site-internet',
  'aides-creation-site-internet-logiciel-2026',
  'developpement-logiciel-b2b-sur-mesure-prix',
]

/** Maximum number of communes listed under the search field. */
export const COMMUNE_SEARCH_LIMIT: number = 8

/** Default answers of the simulator: a 8 000 € project of a two-person business. */
export const DEFAULT_PROJECT_AMOUNT_HT: number = 8000
export const DEFAULT_EMPLOYEES: number = 2
