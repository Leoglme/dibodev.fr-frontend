import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevEmailDeliverabilityCheckPageContent } from '~/core/types/DibodevEmailDeliverabilityCheckPage'
import { EMAIL_DELIVERABILITY_CHECK_PAGE_EN } from '~/core/constants/emailDeliverabilityCheck/pageContent.en'
import { EMAIL_DELIVERABILITY_CHECK_PAGE_ES } from '~/core/constants/emailDeliverabilityCheck/pageContent.es'
import { EMAIL_DELIVERABILITY_CHECK_PAGE_FR } from '~/core/constants/emailDeliverabilityCheck/pageContent.fr'

export const EMAIL_DELIVERABILITY_CHECK_PAGES: Record<SupportedLocale, DibodevEmailDeliverabilityCheckPageContent> = {
  fr: EMAIL_DELIVERABILITY_CHECK_PAGE_FR,
  en: EMAIL_DELIVERABILITY_CHECK_PAGE_EN,
  es: EMAIL_DELIVERABILITY_CHECK_PAGE_ES,
}
