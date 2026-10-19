import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import { ELECTRICIAN_PAGE_CONTENT_EN } from '~/core/constants/tools/electricianSoftware/pageContent.en'
import { ELECTRICIAN_PAGE_CONTENT_ES } from '~/core/constants/tools/electricianSoftware/pageContent.es'
import { ELECTRICIAN_PAGE_CONTENT_FR } from '~/core/constants/tools/electricianSoftware/pageContent.fr'

/** Content of the electrician software page in each language (shared values in `electricianSoftware/pageShared.ts`). */
export const ELECTRICIAN_SOFTWARE_PAGES: Record<SupportedLocale, DibodevSoftwareToolPageContent> = {
  fr: ELECTRICIAN_PAGE_CONTENT_FR,
  en: ELECTRICIAN_PAGE_CONTENT_EN,
  es: ELECTRICIAN_PAGE_CONTENT_ES,
}
