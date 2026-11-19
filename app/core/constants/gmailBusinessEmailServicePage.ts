import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevUpdateServicePageContent } from '~/core/types/DibodevUpdateServicePage'
import { GMAIL_BUSINESS_EMAIL_SERVICE_PAGE_EN } from '~/core/constants/gmailBusinessEmailService/pageContent.en'
import { GMAIL_BUSINESS_EMAIL_SERVICE_PAGE_ES } from '~/core/constants/gmailBusinessEmailService/pageContent.es'
import { GMAIL_BUSINESS_EMAIL_SERVICE_PAGE_FR } from '~/core/constants/gmailBusinessEmailService/pageContent.fr'

export const GMAIL_BUSINESS_EMAIL_SERVICE_PAGES: Record<SupportedLocale, DibodevUpdateServicePageContent> = {
  fr: GMAIL_BUSINESS_EMAIL_SERVICE_PAGE_FR,
  en: GMAIL_BUSINESS_EMAIL_SERVICE_PAGE_EN,
  es: GMAIL_BUSINESS_EMAIL_SERVICE_PAGE_ES,
}
