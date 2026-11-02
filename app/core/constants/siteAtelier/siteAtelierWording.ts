import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSiteAtelierWording } from '~/core/types/DibodevSiteAtelier'
import { SITE_ATELIER_WORDING_EN } from '~/core/constants/siteAtelier/wording.en'
import { SITE_ATELIER_WORDING_ES } from '~/core/constants/siteAtelier/wording.es'
import { SITE_ATELIER_WORDING_FR } from '~/core/constants/siteAtelier/wording.fr'

export const SITE_ATELIER_WORDINGS: Record<SupportedLocale, DibodevSiteAtelierWording> = {
  fr: SITE_ATELIER_WORDING_FR,
  en: SITE_ATELIER_WORDING_EN,
  es: SITE_ATELIER_WORDING_ES,
}
