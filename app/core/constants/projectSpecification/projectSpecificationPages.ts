import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type {
  DibodevProjectSpecificationProjectType,
  DibodevProjectSpecificationWording,
} from '~/core/types/DibodevProjectSpecification'
import type {
  DibodevProjectSpecificationGeneratorPageContent,
  DibodevProjectSpecificationTemplatePageContent,
} from '~/core/types/DibodevProjectSpecificationPage'
import { PROJECT_SPECIFICATION_GENERATOR_PAGE_EN } from '~/core/constants/projectSpecification/generatorPageContent.en'
import { PROJECT_SPECIFICATION_GENERATOR_PAGE_ES } from '~/core/constants/projectSpecification/generatorPageContent.es'
import { PROJECT_SPECIFICATION_GENERATOR_PAGE_FR } from '~/core/constants/projectSpecification/generatorPageContent.fr'
import { PROJECT_SPECIFICATION_WORDING_EN } from '~/core/constants/projectSpecification/generatorWording.en'
import { PROJECT_SPECIFICATION_WORDING_ES } from '~/core/constants/projectSpecification/generatorWording.es'
import { PROJECT_SPECIFICATION_WORDING_FR } from '~/core/constants/projectSpecification/generatorWording.fr'
import { PROJECT_SPECIFICATION_BUSINESS_SOFTWARE_PAGE_EN } from '~/core/constants/projectSpecification/templates/businessSoftwarePage.en'
import { PROJECT_SPECIFICATION_BUSINESS_SOFTWARE_PAGE_ES } from '~/core/constants/projectSpecification/templates/businessSoftwarePage.es'
import { PROJECT_SPECIFICATION_BUSINESS_SOFTWARE_PAGE_FR } from '~/core/constants/projectSpecification/templates/businessSoftwarePage.fr'
import { PROJECT_SPECIFICATION_MOBILE_APP_PAGE_EN } from '~/core/constants/projectSpecification/templates/mobileAppPage.en'
import { PROJECT_SPECIFICATION_MOBILE_APP_PAGE_ES } from '~/core/constants/projectSpecification/templates/mobileAppPage.es'
import { PROJECT_SPECIFICATION_MOBILE_APP_PAGE_FR } from '~/core/constants/projectSpecification/templates/mobileAppPage.fr'
import { PROJECT_SPECIFICATION_ONLINE_STORE_PAGE_EN } from '~/core/constants/projectSpecification/templates/onlineStorePage.en'
import { PROJECT_SPECIFICATION_ONLINE_STORE_PAGE_ES } from '~/core/constants/projectSpecification/templates/onlineStorePage.es'
import { PROJECT_SPECIFICATION_ONLINE_STORE_PAGE_FR } from '~/core/constants/projectSpecification/templates/onlineStorePage.fr'
import { PROJECT_SPECIFICATION_SHOWCASE_WEBSITE_PAGE_EN } from '~/core/constants/projectSpecification/templates/showcaseWebsitePage.en'
import { PROJECT_SPECIFICATION_SHOWCASE_WEBSITE_PAGE_ES } from '~/core/constants/projectSpecification/templates/showcaseWebsitePage.es'
import { PROJECT_SPECIFICATION_SHOWCASE_WEBSITE_PAGE_FR } from '~/core/constants/projectSpecification/templates/showcaseWebsitePage.fr'

export const PROJECT_SPECIFICATION_WORDINGS: Record<SupportedLocale, DibodevProjectSpecificationWording> = {
  fr: PROJECT_SPECIFICATION_WORDING_FR,
  en: PROJECT_SPECIFICATION_WORDING_EN,
  es: PROJECT_SPECIFICATION_WORDING_ES,
}

export const PROJECT_SPECIFICATION_GENERATOR_PAGES: Record<
  SupportedLocale,
  DibodevProjectSpecificationGeneratorPageContent
> = {
  fr: PROJECT_SPECIFICATION_GENERATOR_PAGE_FR,
  en: PROJECT_SPECIFICATION_GENERATOR_PAGE_EN,
  es: PROJECT_SPECIFICATION_GENERATOR_PAGE_ES,
}

export const PROJECT_SPECIFICATION_TEMPLATE_PAGES: Record<
  DibodevProjectSpecificationProjectType,
  Record<SupportedLocale, DibodevProjectSpecificationTemplatePageContent>
> = {
  showcaseWebsite: {
    fr: PROJECT_SPECIFICATION_SHOWCASE_WEBSITE_PAGE_FR,
    en: PROJECT_SPECIFICATION_SHOWCASE_WEBSITE_PAGE_EN,
    es: PROJECT_SPECIFICATION_SHOWCASE_WEBSITE_PAGE_ES,
  },
  onlineStore: {
    fr: PROJECT_SPECIFICATION_ONLINE_STORE_PAGE_FR,
    en: PROJECT_SPECIFICATION_ONLINE_STORE_PAGE_EN,
    es: PROJECT_SPECIFICATION_ONLINE_STORE_PAGE_ES,
  },
  businessSoftware: {
    fr: PROJECT_SPECIFICATION_BUSINESS_SOFTWARE_PAGE_FR,
    en: PROJECT_SPECIFICATION_BUSINESS_SOFTWARE_PAGE_EN,
    es: PROJECT_SPECIFICATION_BUSINESS_SOFTWARE_PAGE_ES,
  },
  mobileApp: {
    fr: PROJECT_SPECIFICATION_MOBILE_APP_PAGE_FR,
    en: PROJECT_SPECIFICATION_MOBILE_APP_PAGE_EN,
    es: PROJECT_SPECIFICATION_MOBILE_APP_PAGE_ES,
  },
}
