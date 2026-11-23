import type { H3Event } from 'h3'
import type { DashboardWeeklyPointsFile } from '~~/app/core/types/DashboardWeeklyPoint'
import weeklyPointsFile from '~~/content/data/weekly-points.json'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'

/**
 * GET /api/dashboard/weekly-points
 * Returns content/data/weekly-points.json, bundled with the server only: the weekly reviews never reach the public JavaScript.
 */
export default defineEventHandler((event: H3Event): DashboardWeeklyPointsFile => {
  requireDashboardAuth(event)

  return weeklyPointsFile as DashboardWeeklyPointsFile
})
