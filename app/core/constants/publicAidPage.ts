import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevPublicAidPageContent } from '~/core/types/DibodevPublicAidPage'
import { PUBLIC_AID_PAGE_EN } from '~/core/constants/publicAid/pageContent.en'
import { PUBLIC_AID_PAGE_ES } from '~/core/constants/publicAid/pageContent.es'
import { PUBLIC_AID_PAGE_FR } from '~/core/constants/publicAid/pageContent.fr'

/** Content of the public aid simulator page by language. */
export const PUBLIC_AID_PAGES: Record<SupportedLocale, DibodevPublicAidPageContent> = {
  fr: PUBLIC_AID_PAGE_FR,
  en: PUBLIC_AID_PAGE_EN,
  es: PUBLIC_AID_PAGE_ES,
}
