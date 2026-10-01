import type { H3Event } from 'h3'
import type { HomePageContentResponse } from '~~/server/types/dashboard/homePage'
import { createError } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { HomePageContentService } from '~~/server/services/HomePageContentService'

/**
 * GET /api/dashboard/home-page
 * Returns the home page content saved on the repository and the one the running build shows.
 */
export default defineEventHandler(async (event: H3Event): Promise<HomePageContentResponse> => {
  requireDashboardAuth(event)
  const config: ReturnType<typeof useRuntimeConfig> = useRuntimeConfig(event)
  const githubToken: string = String(config.githubToken ?? '')
  const githubRepo: string = String(config.githubRepo ?? '')

  if (!githubToken || !githubRepo) {
    throw createError({ statusCode: 500, statusMessage: 'REPO_ACCESS_TOKEN and REPO_SLUG must be set.' })
  }

  return {
    saved: await HomePageContentService.getSavedContent(githubToken, githubRepo),
    deployed: HomePageContentService.getDeployedContent(),
  }
})
