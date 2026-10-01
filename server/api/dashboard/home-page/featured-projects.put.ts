import type { H3Event } from 'h3'
import type { SaveFeaturedProjectsBody, SaveFeaturedProjectsResponse } from '~~/server/types/dashboard/homePage'
import { createError, readBody } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { HomePageContentService } from '~~/server/services/HomePageContentService'

/**
 * PUT /api/dashboard/home-page/featured-projects
 * Replaces the projects of the home page section (order included); a change is committed and deploys the site.
 */
export default defineEventHandler(async (event: H3Event): Promise<SaveFeaturedProjectsResponse> => {
  requireDashboardAuth(event)
  const config: ReturnType<typeof useRuntimeConfig> = useRuntimeConfig(event)
  const githubToken: string = String(config.githubToken ?? '')
  const githubRepo: string = String(config.githubRepo ?? '')

  if (!githubToken || !githubRepo) {
    throw createError({ statusCode: 500, statusMessage: 'REPO_ACCESS_TOKEN and REPO_SLUG must be set.' })
  }

  const body: Partial<SaveFeaturedProjectsBody> | null = await readBody<Partial<SaveFeaturedProjectsBody> | null>(event)
  const projectSlugs: string[] = HomePageContentService.parseFeaturedProjectSlugs(body?.projectSlugs)

  return HomePageContentService.saveFeaturedProjects(githubToken, githubRepo, projectSlugs)
})
