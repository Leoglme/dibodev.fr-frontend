import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { BOILER_SERVICE_CERTIFICATE_TEMPLATE_CONTENT_EN } from '~/core/constants/freeTemplates/boilerServiceCertificate/pageContent.en'
import { BOILER_SERVICE_CERTIFICATE_TEMPLATE_CONTENT_ES } from '~/core/constants/freeTemplates/boilerServiceCertificate/pageContent.es'
import { BOILER_SERVICE_CERTIFICATE_TEMPLATE_CONTENT_FR } from '~/core/constants/freeTemplates/boilerServiceCertificate/pageContent.fr'

/** Content of the boiler service certificate and visit log template page in each language (shared values in `boilerServiceCertificate/pageShared.ts`). */
export const BOILER_SERVICE_CERTIFICATE_TEMPLATE_PAGES: Record<SupportedLocale, DibodevFreeTemplatePageContent> = {
  fr: BOILER_SERVICE_CERTIFICATE_TEMPLATE_CONTENT_FR,
  en: BOILER_SERVICE_CERTIFICATE_TEMPLATE_CONTENT_EN,
  es: BOILER_SERVICE_CERTIFICATE_TEMPLATE_CONTENT_ES,
}
