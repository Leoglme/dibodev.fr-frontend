import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevHostingStatusPageContent } from '~/core/types/DibodevHostingStatusPage'
import { HOSTING_STATUS_PAGE_EN } from '~/core/constants/hostingStatus/pageContent.en'
import { HOSTING_STATUS_PAGE_ES } from '~/core/constants/hostingStatus/pageContent.es'
import { HOSTING_STATUS_PAGE_FR } from '~/core/constants/hostingStatus/pageContent.fr'

export const HOSTING_STATUS_PAGES: Record<SupportedLocale, DibodevHostingStatusPageContent> = {
  fr: HOSTING_STATUS_PAGE_FR,
  en: HOSTING_STATUS_PAGE_EN,
  es: HOSTING_STATUS_PAGE_ES,
}
