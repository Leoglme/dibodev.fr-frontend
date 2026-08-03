import type { SearchPerformanceEntry, SearchPerformanceTotals } from '~~/server/types/dashboard/searchPerformance'

const GSC_SEARCH_ANALYTICS_BASE = 'https://searchconsole.googleapis.com/webmasters/v3/sites'
const REQUEST_TIMEOUT_MS = 15_000

/** A raw Search Analytics row as returned by the Search Console API. */
export type GscSearchAnalyticsRow = {
  keys?: string[]
  clicks?: number
  impressions?: number
  ctr?: number
  position?: number
}

/** Parameters of a single Search Analytics query. */
export type GscSearchAnalyticsQuery = {
  startDate: string
  endDate: string
  dimensions?: string[]
  rowLimit?: number
}

/**
 * Runs one Search Analytics query against the Search Console API for the given site property.
 *
 * @param {string} siteProperty - The GSC site, e.g. "sc-domain:dibodev.fr".
 * @param {string} accessToken - A valid OAuth access token (webmasters.readonly scope).
 * @param {string} quotaProjectId - GCP project id for the quota header, or empty to skip it.
 * @param {GscSearchAnalyticsQuery} query - The date range, dimensions and row limit.
 * @returns {Promise<GscSearchAnalyticsRow[]>} The rows returned by the API (empty when none).
 * @throws {Error} When the API responds with a non-OK status.
 */
export async function querySearchAnalytics(
  siteProperty: string,
  accessToken: string,
  quotaProjectId: string,
  query: GscSearchAnalyticsQuery,
): Promise<GscSearchAnalyticsRow[]> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
  try {
    const headers: Record<string, string> = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    }
    if (quotaProjectId) headers['x-goog-user-project'] = quotaProjectId
    const url = `${GSC_SEARCH_ANALYTICS_BASE}/${encodeURIComponent(siteProperty)}/searchAnalytics/query`
    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ dataState: 'final', ...query }),
      signal: controller.signal,
    })
    if (!res.ok) {
      const err = await res.text()
      throw new Error(`GSC searchAnalytics ${res.status}: ${err.slice(0, 300)}`)
    }
    const data = (await res.json()) as { rows?: GscSearchAnalyticsRow[] }
    return data.rows ?? []
  } finally {
    clearTimeout(timeoutId)
  }
}

/**
 * Normalizes a raw dimension row into an entry keyed by its first dimension value.
 *
 * @param {GscSearchAnalyticsRow} row - The raw API row.
 * @returns {SearchPerformanceEntry} The normalized entry.
 */
export function toSearchEntry(row: GscSearchAnalyticsRow): SearchPerformanceEntry {
  return {
    key: row.keys?.[0] ?? '',
    clicks: row.clicks ?? 0,
    impressions: row.impressions ?? 0,
    ctr: row.ctr ?? 0,
    position: row.position ?? 0,
  }
}

/**
 * Extracts period totals from a dimensionless Search Analytics response (a single aggregate row).
 *
 * @param {GscSearchAnalyticsRow[]} rows - The rows of a query with no dimensions.
 * @returns {SearchPerformanceTotals} The aggregate totals, all zero when there is no data.
 */
export function toSearchTotals(rows: GscSearchAnalyticsRow[]): SearchPerformanceTotals {
  const row = rows[0]
  return {
    clicks: row?.clicks ?? 0,
    impressions: row?.impressions ?? 0,
    ctr: row?.ctr ?? 0,
    position: row?.position ?? 0,
  }
}
