import type { H3Event } from 'h3'
import type {
  DeployHeadCommit,
  DeployRun,
  DeployStatusCacheEntry,
  DeployStatusResponse,
} from '~~/server/types/dashboard/deploy'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { GithubService } from '~~/server/services/githubService'

const CACHE_TTL_MS: number = 20_000

// Shared by every device polling the status, to stay under the GitHub rate limit.
let cachedStatus: DeployStatusCacheEntry | null = null

/**
 * GET /api/dashboard/deploy-status
 * Compares the deployed commit with the repository HEAD and returns the latest deploy run.
 */
export default defineEventHandler(async (event: H3Event): Promise<DeployStatusResponse> => {
  requireDashboardAuth(event)
  if (cachedStatus && cachedStatus.expiresAt > Date.now()) return cachedStatus.value

  const config: ReturnType<typeof useRuntimeConfig> = useRuntimeConfig(event)
  const token: string = String(config.githubToken ?? '')
  const repo: string = String(config.githubRepo ?? '')
  const buildCommit: string | null = String(config.buildCommit ?? '').trim() || null
  const status: DeployStatusResponse = {
    configured: Boolean(token && repo),
    buildCommit,
    headCommit: null,
    headMessage: null,
    headDate: null,
    synced: null,
    run: null,
    checkedAt: new Date().toISOString(),
  }
  if (!status.configured) return status

  const [headCommit, latestRun]: [DeployHeadCommit | null, DeployRun | null] = await Promise.all([
    GithubService.getHeadCommit(event, repo),
    GithubService.getLatestWorkflowRun(event, repo),
  ])
  status.headCommit = headCommit?.sha ?? null
  status.headMessage = headCommit?.message ?? null
  status.headDate = headCommit?.date ?? null
  status.run = latestRun
  status.synced = buildCommit && status.headCommit ? buildCommit === status.headCommit : null

  cachedStatus = { value: status, expiresAt: Date.now() + CACHE_TTL_MS }
  return status
})
