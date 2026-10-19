import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import { PLUMBING_HEATING_PAGE_CONTENT_EN } from '~/core/constants/tools/plumbingHeatingSoftware/pageContent.en'
import { PLUMBING_HEATING_PAGE_CONTENT_ES } from '~/core/constants/tools/plumbingHeatingSoftware/pageContent.es'
import { PLUMBING_HEATING_PAGE_CONTENT_FR } from '~/core/constants/tools/plumbingHeatingSoftware/pageContent.fr'

/** Content of the plumbing and heating software page in each language (shared values in `plumbingHeatingSoftware/pageShared.ts`). */
export const PLUMBING_HEATING_SOFTWARE_PAGES: Record<SupportedLocale, DibodevSoftwareToolPageContent> = {
  fr: PLUMBING_HEATING_PAGE_CONTENT_FR,
  en: PLUMBING_HEATING_PAGE_CONTENT_EN,
  es: PLUMBING_HEATING_PAGE_CONTENT_ES,
}
