import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import { TRAINING_CENTER_PAGE_CONTENT_EN } from '~/core/constants/tools/trainingCenterSoftware/pageContent.en'
import { TRAINING_CENTER_PAGE_CONTENT_ES } from '~/core/constants/tools/trainingCenterSoftware/pageContent.es'
import { TRAINING_CENTER_PAGE_CONTENT_FR } from '~/core/constants/tools/trainingCenterSoftware/pageContent.fr'

/** Content of the training centre software page in each language (shared values in `trainingCenterSoftware/pageShared.ts`). */
export const TRAINING_CENTER_SOFTWARE_PAGES: Record<SupportedLocale, DibodevSoftwareToolPageContent> = {
  fr: TRAINING_CENTER_PAGE_CONTENT_FR,
  en: TRAINING_CENTER_PAGE_CONTENT_EN,
  es: TRAINING_CENTER_PAGE_CONTENT_ES,
}
