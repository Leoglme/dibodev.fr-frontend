import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { DRIVING_SCHOOL_CONTRACT_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/drivingSchoolContract/pageContent.en'
import { DRIVING_SCHOOL_CONTRACT_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/drivingSchoolContract/pageContent.es'
import { DRIVING_SCHOOL_CONTRACT_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/drivingSchoolContract/pageContent.fr'

/** Content of the driving school training contract and student record template page in each language (shared values in `drivingSchoolContract/pageShared.ts`). */
export const DRIVING_SCHOOL_CONTRACT_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: DRIVING_SCHOOL_CONTRACT_TEMPLATE_CONTENT_FR,
  en: DRIVING_SCHOOL_CONTRACT_TEMPLATE_CONTENT_EN,
  es: DRIVING_SCHOOL_CONTRACT_TEMPLATE_CONTENT_ES,
}
