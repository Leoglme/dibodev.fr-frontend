import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevWebAccessibilityScopePageContent } from '~/core/types/DibodevWebAccessibilityScopePage'
import { WEB_ACCESSIBILITY_SCOPE_PAGE_EN } from '~/core/constants/webAccessibilityScope/pageContent.en'
import { WEB_ACCESSIBILITY_SCOPE_PAGE_ES } from '~/core/constants/webAccessibilityScope/pageContent.es'
import { WEB_ACCESSIBILITY_SCOPE_PAGE_FR } from '~/core/constants/webAccessibilityScope/pageContent.fr'

export const WEB_ACCESSIBILITY_SCOPE_PAGES: Record<SupportedLocale, DibodevWebAccessibilityScopePageContent> = {
  fr: WEB_ACCESSIBILITY_SCOPE_PAGE_FR,
  en: WEB_ACCESSIBILITY_SCOPE_PAGE_EN,
  es: WEB_ACCESSIBILITY_SCOPE_PAGE_ES,
}
