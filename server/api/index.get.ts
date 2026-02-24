/**
 * GET /api — health/root endpoint.
 * Répond 200 avec { ok: true } (Nginx proxy /api/ → 301 /api, ce handler sert /api).
 */
export default defineEventHandler(() => {
  return { ok: true }
})
