import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevGmailSendAsCheckPageContent } from '~/core/types/DibodevGmailSendAsCheckPage'
import { GMAIL_SEND_AS_CHECK_PAGE_EN } from '~/core/constants/gmailSendAsCheck/pageContent.en'
import { GMAIL_SEND_AS_CHECK_PAGE_ES } from '~/core/constants/gmailSendAsCheck/pageContent.es'
import { GMAIL_SEND_AS_CHECK_PAGE_FR } from '~/core/constants/gmailSendAsCheck/pageContent.fr'

export const GMAIL_SEND_AS_CHECK_PAGES: Record<SupportedLocale, DibodevGmailSendAsCheckPageContent> = {
  fr: GMAIL_SEND_AS_CHECK_PAGE_FR,
  en: GMAIL_SEND_AS_CHECK_PAGE_EN,
  es: GMAIL_SEND_AS_CHECK_PAGE_ES,
}
