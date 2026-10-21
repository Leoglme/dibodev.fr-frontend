import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevPhpUpdateServicePageContent } from '~/core/types/DibodevPhpUpdateServicePage'
import { PHP_UPDATE_SERVICE_PAGE_EN } from '~/core/constants/phpUpdateService/pageContent.en'
import { PHP_UPDATE_SERVICE_PAGE_ES } from '~/core/constants/phpUpdateService/pageContent.es'
import { PHP_UPDATE_SERVICE_PAGE_FR } from '~/core/constants/phpUpdateService/pageContent.fr'

/** Content of the PHP update service page by locale. */
export const PHP_UPDATE_SERVICE_PAGES: Record<SupportedLocale, DibodevPhpUpdateServicePageContent> = {
  fr: PHP_UPDATE_SERVICE_PAGE_FR,
  en: PHP_UPDATE_SERVICE_PAGE_EN,
  es: PHP_UPDATE_SERVICE_PAGE_ES,
}
