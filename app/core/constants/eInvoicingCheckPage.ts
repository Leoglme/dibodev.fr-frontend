import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevEInvoicingCheckPageContent } from '~/core/types/DibodevEInvoicingCheckPage'
import { E_INVOICING_CHECK_PAGE_EN } from '~/core/constants/eInvoicingCheck/pageContent.en'
import { E_INVOICING_CHECK_PAGE_ES } from '~/core/constants/eInvoicingCheck/pageContent.es'
import { E_INVOICING_CHECK_PAGE_FR } from '~/core/constants/eInvoicingCheck/pageContent.fr'

/** Content of the e-invoicing software check page by language. */
export const E_INVOICING_CHECK_PAGES: Record<SupportedLocale, DibodevEInvoicingCheckPageContent> = {
  fr: E_INVOICING_CHECK_PAGE_FR,
  en: E_INVOICING_CHECK_PAGE_EN,
  es: E_INVOICING_CHECK_PAGE_ES,
}
