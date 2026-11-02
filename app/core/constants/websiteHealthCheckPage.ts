import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevWebsiteHealthCheckPageContent } from '~/core/types/DibodevWebsiteHealthCheckPage'
import { WEBSITE_HEALTH_CHECK_PAGE_EN } from '~/core/constants/websiteHealthCheck/pageContent.en'
import { WEBSITE_HEALTH_CHECK_PAGE_ES } from '~/core/constants/websiteHealthCheck/pageContent.es'
import { WEBSITE_HEALTH_CHECK_PAGE_FR } from '~/core/constants/websiteHealthCheck/pageContent.fr'

/** Content of the website health check page in each language (shared values in `websiteHealthCheck/pageShared.ts`). */
export const WEBSITE_HEALTH_CHECK_PAGES: Record<SupportedLocale, DibodevWebsiteHealthCheckPageContent> = {
  fr: WEBSITE_HEALTH_CHECK_PAGE_FR,
  en: WEBSITE_HEALTH_CHECK_PAGE_EN,
  es: WEBSITE_HEALTH_CHECK_PAGE_ES,
}
