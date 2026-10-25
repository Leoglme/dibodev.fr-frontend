import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevEInvoicingScopePageContent } from '~/core/types/DibodevEInvoicingScopePage'
import { E_INVOICING_SCOPE_PAGE_EN } from '~/core/constants/eInvoicingScope/pageContent.en'
import { E_INVOICING_SCOPE_PAGE_ES } from '~/core/constants/eInvoicingScope/pageContent.es'
import { E_INVOICING_SCOPE_PAGE_FR } from '~/core/constants/eInvoicingScope/pageContent.fr'

export const E_INVOICING_SCOPE_PAGES: Record<SupportedLocale, DibodevEInvoicingScopePageContent> = {
  fr: E_INVOICING_SCOPE_PAGE_FR,
  en: E_INVOICING_SCOPE_PAGE_EN,
  es: E_INVOICING_SCOPE_PAGE_ES,
}
