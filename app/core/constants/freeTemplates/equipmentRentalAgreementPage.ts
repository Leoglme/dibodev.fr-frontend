import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/equipmentRentalAgreement/pageContent.en'
import { EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/equipmentRentalAgreement/pageContent.es'
import { EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/equipmentRentalAgreement/pageContent.fr'

/** Content of the equipment rental agreement and condition report template page in each language (shared values in `equipmentRentalAgreement/pageShared.ts`). */
export const EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_CONTENT_FR,
  en: EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_CONTENT_EN,
  es: EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_CONTENT_ES,
}
