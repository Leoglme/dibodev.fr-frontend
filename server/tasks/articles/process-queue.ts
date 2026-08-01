import { ArticleService } from '~~/server/services/ArticleService'

/**
 * Scheduled nitro task: publishes scheduled articles whose time has come (drip queue).
 * Registered in nuxt.config under nitro.scheduledTasks. Also triggerable on demand via
 * POST /api/dashboard/articles/process-queue.
 */
export default defineTask({
  meta: {
    name: 'articles:process-queue',
    description: 'Publie les articles planifiés dont la date est arrivée (drip).',
  },
  async run() {
    const result = await ArticleService.processDueQueue()
    return { result }
  },
})
