import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplateHubPageContent } from '~/core/types/DibodevFreeTemplateHubPage'
import { FREE_TEMPLATES_HUB_CONTENT_EN } from '~/core/constants/freeTemplates/freeTemplatesHub/pageContent.en'
import { FREE_TEMPLATES_HUB_CONTENT_ES } from '~/core/constants/freeTemplates/freeTemplatesHub/pageContent.es'
import { FREE_TEMPLATES_HUB_CONTENT_FR } from '~/core/constants/freeTemplates/freeTemplatesHub/pageContent.fr'

/** Content of the free templates hub in each language (the catalog itself is in `freeTemplateCatalog.ts`). */
export const FREE_TEMPLATES_HUB_PAGES: Record<SupportedLocale, DibodevFreeTemplateHubPageContent> = {
  fr: FREE_TEMPLATES_HUB_CONTENT_FR,
  en: FREE_TEMPLATES_HUB_CONTENT_EN,
  es: FREE_TEMPLATES_HUB_CONTENT_ES,
}
