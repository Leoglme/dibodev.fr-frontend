import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import { FIELD_SERVICE_PAGE_CONTENT_EN } from '~/core/constants/tools/fieldServiceSoftware/pageContent.en'
import { FIELD_SERVICE_PAGE_CONTENT_ES } from '~/core/constants/tools/fieldServiceSoftware/pageContent.es'
import { FIELD_SERVICE_PAGE_CONTENT_FR } from '~/core/constants/tools/fieldServiceSoftware/pageContent.fr'

/** Content of the field service software page in each language (shared values in `fieldServiceSoftware/pageShared.ts`). */
export const FIELD_SERVICE_SOFTWARE_PAGES: Record<SupportedLocale, DibodevSoftwareToolPageContent> = {
  fr: FIELD_SERVICE_PAGE_CONTENT_FR,
  en: FIELD_SERVICE_PAGE_CONTENT_EN,
  es: FIELD_SERVICE_PAGE_CONTENT_ES,
}
