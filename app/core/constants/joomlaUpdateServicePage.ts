import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevUpdateServicePageContent } from '~/core/types/DibodevUpdateServicePage'
import { JOOMLA_UPDATE_SERVICE_PAGE_EN } from '~/core/constants/joomlaUpdateService/pageContent.en'
import { JOOMLA_UPDATE_SERVICE_PAGE_ES } from '~/core/constants/joomlaUpdateService/pageContent.es'
import { JOOMLA_UPDATE_SERVICE_PAGE_FR } from '~/core/constants/joomlaUpdateService/pageContent.fr'

/** Content of the Joomla update service page by locale. */
export const JOOMLA_UPDATE_SERVICE_PAGES: Record<SupportedLocale, DibodevUpdateServicePageContent> = {
  fr: JOOMLA_UPDATE_SERVICE_PAGE_FR,
  en: JOOMLA_UPDATE_SERVICE_PAGE_EN,
  es: JOOMLA_UPDATE_SERVICE_PAGE_ES,
}
