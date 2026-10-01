import type { HomePageContent } from '~~/server/types/dashboard/homePage'
import rawHomePageContent from '~~/content/cms/home-page.json'
import { HomePageContentUtils } from '~/core/utils/HomePageContentUtils'

/** Home page content edited from the dashboard, as committed in the repository when this build was made. */
export const HOME_PAGE_CONTENT: HomePageContent = HomePageContentUtils.normalize(rawHomePageContent)
