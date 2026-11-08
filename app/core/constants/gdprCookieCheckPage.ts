import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevGdprCookieCheckPageContent } from '~/core/types/DibodevGdprCookieCheckPage'
import { GDPR_COOKIE_CHECK_PAGE_EN } from '~/core/constants/gdprCookieCheck/pageContent.en'
import { GDPR_COOKIE_CHECK_PAGE_ES } from '~/core/constants/gdprCookieCheck/pageContent.es'
import { GDPR_COOKIE_CHECK_PAGE_FR } from '~/core/constants/gdprCookieCheck/pageContent.fr'

/** Content of the GDPR cookie check page in each language (shared values in `gdprCookieCheck/pageShared.ts`). */
export const GDPR_COOKIE_CHECK_PAGES: Record<SupportedLocale, DibodevGdprCookieCheckPageContent> = {
  fr: GDPR_COOKIE_CHECK_PAGE_FR,
  en: GDPR_COOKIE_CHECK_PAGE_EN,
  es: GDPR_COOKIE_CHECK_PAGE_ES,
}
