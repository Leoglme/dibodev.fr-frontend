import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/personalTrainerClientReview/pageContent.en'
import { PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/personalTrainerClientReview/pageContent.es'
import { PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/personalTrainerClientReview/pageContent.fr'

/** Content of the personal trainer client assessment and session log template page in each language (shared values in `personalTrainerClientReview/pageShared.ts`). */
export const PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_CONTENT_FR,
  en: PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_CONTENT_EN,
  es: PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_CONTENT_ES,
}
