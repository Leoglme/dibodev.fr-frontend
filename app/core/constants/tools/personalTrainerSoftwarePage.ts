import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import { PERSONAL_TRAINER_PAGE_CONTENT_EN } from '~/core/constants/tools/personalTrainerSoftware/pageContent.en'
import { PERSONAL_TRAINER_PAGE_CONTENT_ES } from '~/core/constants/tools/personalTrainerSoftware/pageContent.es'
import { PERSONAL_TRAINER_PAGE_CONTENT_FR } from '~/core/constants/tools/personalTrainerSoftware/pageContent.fr'

/** Content of the personal trainer software page in each language (shared values in `personalTrainerSoftware/pageShared.ts`). */
export const PERSONAL_TRAINER_SOFTWARE_PAGES: Record<SupportedLocale, DibodevSoftwareToolPageContent> = {
  fr: PERSONAL_TRAINER_PAGE_CONTENT_FR,
  en: PERSONAL_TRAINER_PAGE_CONTENT_EN,
  es: PERSONAL_TRAINER_PAGE_CONTENT_ES,
}
