import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTownHallWebsitesStudyActionKey } from '~/core/types/DibodevTownHallWebsitesStudyPage'
import { JOOMLA_UPDATE_SERVICE_ROUTE_NAME } from '~/core/constants/joomlaUpdateService/pageShared'
import {
  JOOMLA_VERSION_CHECK_ROUTE_NAME,
  JOOMLA_VERSION_GUIDE_SLUGS,
} from '~/core/constants/joomlaVersionCheck/pageShared'
import { PHP_UPDATE_SERVICE_ROUTE_NAME } from '~/core/constants/phpUpdateService/pageShared'
import { PHP_VULNERABILITY_CHECK_TEASER } from '~/core/constants/tools/toolTeasers'

/** Last day of the survey, the `dateModified` of the Dataset JSON-LD. */
export const TOWN_HALL_WEBSITES_STUDY_ENDED_AT: string = '2026-11-16'

/** Route name of the study page (`app/pages/town-hall-websites-study.vue`). */
export const TOWN_HALL_WEBSITES_STUDY_ROUTE_NAME: string = 'town-hall-websites-study'

/** Path of the page in each language, used by the Dataset JSON-LD. */
export const TOWN_HALL_WEBSITES_STUDY_PAGE_PATHS: Record<SupportedLocale, string> = {
  fr: '/etude-sites-internet-mairies',
  en: '/en/french-town-hall-websites-study',
  es: '/es/estudio-webs-ayuntamientos-franceses',
}

/** The CSV published next to the page, one row per department, written by build_town_hall_study_page_data.py. */
export const TOWN_HALL_WEBSITES_STUDY_CSV_PATH: string = '/data/etude-sites-internet-mairies-2026-11.csv'

/** Departments shown on the page, those with the most read websites; the CSV holds all 101. */
export const TOWN_HALL_WEBSITES_STUDY_DEPARTMENTS_SHOWN_COUNT: number = 15

/** Steps of the "what to do" section, in display order. */
export const TOWN_HALL_WEBSITES_STUDY_ACTION_KEYS: DibodevTownHallWebsitesStudyActionKey[] = [
  'phpVersionCheck',
  'joomlaVersionCheck',
  'phpUpdate',
  'joomlaUpdate',
]

/** Route opened by each step of the "what to do" section. */
export const TOWN_HALL_WEBSITES_STUDY_ACTION_ROUTE_NAMES: Record<DibodevTownHallWebsitesStudyActionKey, string> = {
  phpVersionCheck: PHP_VULNERABILITY_CHECK_TEASER.routeName,
  joomlaVersionCheck: JOOMLA_VERSION_CHECK_ROUTE_NAME,
  phpUpdate: PHP_UPDATE_SERVICE_ROUTE_NAME,
  joomlaUpdate: JOOMLA_UPDATE_SERVICE_ROUTE_NAME,
}

/** Articles listed at the bottom of the page; the untranslated or unpublished ones are left out automatically. */
export const TOWN_HALL_WEBSITES_STUDY_RELATED_ARTICLE_SLUGS: string[] = [
  JOOMLA_VERSION_GUIDE_SLUGS.php82EndOfLife,
  JOOMLA_VERSION_GUIDE_SLUGS.joomla6Upgrade,
  'hebergeur-arrete-anciennes-versions-php-que-faire',
]

/** Sources read for this study only; the PHP and Joomla support pages come from `JOOMLA_VERSION_SOURCES`. */
export const TOWN_HALL_WEBSITES_STUDY_SOURCES = {
  officialDirectory: 'https://api-lannuaire.service-public.fr/explore/dataset/api-lannuaire-administration/',
  phpEndOfLife: 'https://www.php.net/eol.php',
  wordpressVersionApi: 'https://api.wordpress.org/core/version-check/1.7/',
} as const
