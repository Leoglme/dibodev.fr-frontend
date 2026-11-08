import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevLegalNoticePageContent } from '~/core/types/DibodevLegalNoticePage'
import { LEGAL_NOTICE_GENERATOR_PAGE_EN } from '~/core/constants/legalNotice/pageContent.en'
import { LEGAL_NOTICE_GENERATOR_PAGE_ES } from '~/core/constants/legalNotice/pageContent.es'
import { LEGAL_NOTICE_GENERATOR_PAGE_FR } from '~/core/constants/legalNotice/pageContent.fr'

/** Content of the legal notice generator page in each language (shared values in `legalNotice/pageShared.ts`). */
export const LEGAL_NOTICE_GENERATOR_PAGES: Record<SupportedLocale, DibodevLegalNoticePageContent> = {
  fr: LEGAL_NOTICE_GENERATOR_PAGE_FR,
  en: LEGAL_NOTICE_GENERATOR_PAGE_EN,
  es: LEGAL_NOTICE_GENERATOR_PAGE_ES,
}
