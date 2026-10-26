import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevWordPressHackCheckPageContent } from '~/core/types/DibodevWordPressHackCheckPage'
import { WORDPRESS_HACK_CHECK_PAGE_EN } from '~/core/constants/wordpressHackCheck/pageContent.en'
import { WORDPRESS_HACK_CHECK_PAGE_ES } from '~/core/constants/wordpressHackCheck/pageContent.es'
import { WORDPRESS_HACK_CHECK_PAGE_FR } from '~/core/constants/wordpressHackCheck/pageContent.fr'

export const WORDPRESS_HACK_CHECK_PAGES: Record<SupportedLocale, DibodevWordPressHackCheckPageContent> = {
  fr: WORDPRESS_HACK_CHECK_PAGE_FR,
  en: WORDPRESS_HACK_CHECK_PAGE_EN,
  es: WORDPRESS_HACK_CHECK_PAGE_ES,
}
