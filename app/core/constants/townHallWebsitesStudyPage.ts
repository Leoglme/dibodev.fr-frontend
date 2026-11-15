import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevTownHallWebsitesStudyPageContent } from '~/core/types/DibodevTownHallWebsitesStudyPage'
import { TOWN_HALL_WEBSITES_STUDY_PAGE_CONTENT_EN } from '~/core/constants/townHallWebsitesStudy/pageContent.en'
import { TOWN_HALL_WEBSITES_STUDY_PAGE_CONTENT_ES } from '~/core/constants/townHallWebsitesStudy/pageContent.es'
import { TOWN_HALL_WEBSITES_STUDY_PAGE_CONTENT_FR } from '~/core/constants/townHallWebsitesStudy/pageContent.fr'

/** Content of the town hall websites study page in each language (shared values in `townHallWebsitesStudy/pageShared.ts`). */
export const TOWN_HALL_WEBSITES_STUDY_PAGES: Record<SupportedLocale, DibodevTownHallWebsitesStudyPageContent> = {
  fr: TOWN_HALL_WEBSITES_STUDY_PAGE_CONTENT_FR,
  en: TOWN_HALL_WEBSITES_STUDY_PAGE_CONTENT_EN,
  es: TOWN_HALL_WEBSITES_STUDY_PAGE_CONTENT_ES,
}
