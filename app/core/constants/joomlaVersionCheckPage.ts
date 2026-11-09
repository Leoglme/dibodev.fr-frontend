import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevJoomlaVersionCheckPageContent } from '~/core/types/DibodevJoomlaVersionCheckPage'
import { JOOMLA_VERSION_CHECK_PAGE_EN } from '~/core/constants/joomlaVersionCheck/pageContent.en'
import { JOOMLA_VERSION_CHECK_PAGE_ES } from '~/core/constants/joomlaVersionCheck/pageContent.es'
import { JOOMLA_VERSION_CHECK_PAGE_FR } from '~/core/constants/joomlaVersionCheck/pageContent.fr'

export const JOOMLA_VERSION_CHECK_PAGES: Record<SupportedLocale, DibodevJoomlaVersionCheckPageContent> = {
  fr: JOOMLA_VERSION_CHECK_PAGE_FR,
  en: JOOMLA_VERSION_CHECK_PAGE_EN,
  es: JOOMLA_VERSION_CHECK_PAGE_ES,
}
