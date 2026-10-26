import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevColdCallingCheckPageContent } from '~/core/types/DibodevColdCallingCheckPage'
import { COLD_CALLING_CHECK_PAGE_EN } from '~/core/constants/coldCallingCheck/pageContent.en'
import { COLD_CALLING_CHECK_PAGE_ES } from '~/core/constants/coldCallingCheck/pageContent.es'
import { COLD_CALLING_CHECK_PAGE_FR } from '~/core/constants/coldCallingCheck/pageContent.fr'

export const COLD_CALLING_CHECK_PAGES: Record<SupportedLocale, DibodevColdCallingCheckPageContent> = {
  fr: COLD_CALLING_CHECK_PAGE_FR,
  en: COLD_CALLING_CHECK_PAGE_EN,
  es: COLD_CALLING_CHECK_PAGE_ES,
}
