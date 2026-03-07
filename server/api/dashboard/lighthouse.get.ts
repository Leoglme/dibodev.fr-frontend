import type { H3Event } from 'h3'
import { getQuery } from 'h3'
import { createError } from 'h3'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import type {
  LighthouseReportResponse,
  LighthouseStrategyReport,
  LighthouseCategoryScore,
  LighthouseAuditItem,
  LighthouseCategoryId,
} from '~~/server/types/lighthouse'

const PAGE_SPEED_BASE: string = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'

const CATEGORY_IDS: LighthouseCategoryId[] = ['performance', 'accessibility', 'best-practices', 'seo']

/** Valeurs attendues par l’API PageSpeed pour le paramètre category. */
const CATEGORY_API_VALUES: string[] = ['PERFORMANCE', 'ACCESSIBILITY', 'BEST_PRACTICES', 'SEO']

type PagespeedAuditRef = { id?: string }

type PagespeedCategory = {
  id?: string
  title?: string
  score?: number | null
  auditRefs?: PagespeedAuditRef[]
}

type PagespeedAudit = {
  id?: string
  title?: string
  description?: string
  score?: number | null
  displayValue?: string
}

type PagespeedScreenshotDetails = {
  type?: string
  data?: string
}

type PagespeedLighthouseResult = {
  requestedUrl?: string
  finalUrl?: string
  fetchTime?: string
  categories?: Record<string, PagespeedCategory>
  audits?: Record<string, PagespeedAudit & { details?: PagespeedScreenshotDetails }>
  runtimeError?: { message?: string } | null
}

type PagespeedApiResponse = {
  lighthouseResult?: PagespeedLighthouseResult
}

/** Normalise le score (0–1, 0–100 ou chaîne) en number 0–1 ou null. */
function parseScore(v: unknown): number | null {
  if (typeof v === 'number' && !Number.isNaN(v) && v >= 0) {
    if (v <= 1) return v
    if (v <= 100) return v / 100
  }
  if (typeof v === 'string') {
    const n: number = parseFloat(v)
    if (!Number.isNaN(n) && n >= 0) return n <= 1 ? n : n <= 100 ? n / 100 : null
  }
  return null
}

/**
 * Vérifie que l’URL analysée appartient au site (même origine que indexingSiteUrl).
 */
function isUrlAllowed(url: string, siteBaseUrl: string): boolean {
  try {
    const parsed = new URL(url)
    const base = new URL(siteBaseUrl)
    return parsed.origin === base.origin
  } catch {
    return false
  }
}

function buildStrategyReport(lh: PagespeedLighthouseResult): LighthouseStrategyReport {
  const runtimeError: string | null = lh.runtimeError?.message ?? null

  const categories: LighthouseCategoryScore[] = CATEGORY_IDS.map(
    (id: LighthouseCategoryId): LighthouseCategoryScore => {
      const cat: PagespeedCategory | undefined = lh.categories?.[id]
      return {
        id,
        title: typeof cat?.title === 'string' ? cat.title : id,
        score: parseScore(cat?.score),
      }
    },
  )

  const auditIdSet: Set<string> = new Set<string>()
  for (const id of CATEGORY_IDS) {
    const cat: PagespeedCategory | undefined = lh.categories?.[id]
    const refs: PagespeedAuditRef[] = Array.isArray(cat?.auditRefs) ? cat.auditRefs : []
    for (const ref of refs) {
      const auditId: string | undefined = ref.id
      if (typeof auditId === 'string' && auditId.length > 0) auditIdSet.add(auditId)
    }
  }
  const auditIds: string[] = Array.from(auditIdSet)

  const auditsMap: Record<string, PagespeedAudit> = (lh.audits as Record<string, PagespeedAudit>) ?? {}
  const audits: LighthouseAuditItem[] = auditIds
    .filter((id: string): boolean => id in auditsMap)
    .map((id: string): LighthouseAuditItem => {
      const a: PagespeedAudit = auditsMap[id]!
      return {
        id,
        title: typeof a.title === 'string' ? a.title : id,
        description: typeof a.description === 'string' ? a.description : undefined,
        score: a.score !== undefined ? parseScore(a.score) : null,
        displayValue: typeof a.displayValue === 'string' ? a.displayValue : undefined,
      }
    })

  const finalScreenshotAudit = lh.audits?.['final-screenshot'] as
    | (PagespeedAudit & { details?: PagespeedScreenshotDetails })
    | undefined
  const screenshotDataUrl: string | null =
    typeof finalScreenshotAudit?.details?.data === 'string' ? finalScreenshotAudit.details.data : null

  return {
    fetchTime: lh.fetchTime ?? new Date().toISOString(),
    categories,
    audits,
    screenshotDataUrl,
    runtimeError,
  }
}

/**
 * GET /api/dashboard/lighthouse?url=...
 * Lance deux analyses PageSpeed (mobile + desktop) avec les 4 catégories et retourne les deux rapports.
 */
export default defineEventHandler(async (event: H3Event): Promise<LighthouseReportResponse> => {
  requireDashboardAuth(event)
  const config = useRuntimeConfig(event)
  const siteBaseUrl: string = String(config.indexingSiteUrl ?? 'https://dibodev.fr').replace(/\/$/, '')
  const query = getQuery(event)
  const rawUrl: string | undefined = typeof query.url === 'string' ? query.url.trim() : undefined

  if (!rawUrl) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing query parameter: url',
    })
  }

  let requestedUrl: string
  try {
    requestedUrl = new URL(rawUrl).href
  } catch {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid URL',
    })
  }

  if (!isUrlAllowed(requestedUrl, siteBaseUrl)) {
    throw createError({
      statusCode: 403,
      statusMessage: 'URL is not allowed (must belong to the site)',
    })
  }

  const apiKey: string = String((config as Record<string, unknown>).psiApiKey ?? '').trim()

  const runStrategy = async (strategy: 'mobile' | 'desktop'): Promise<LighthouseStrategyReport> => {
    const params: string[] = [`url=${encodeURIComponent(requestedUrl)}`, `strategy=${strategy}`]
    for (const cat of CATEGORY_API_VALUES) {
      params.push(`category=${cat}`)
    }
    if (apiKey.length > 0) params.push(`key=${encodeURIComponent(apiKey)}`)
    const fullUrl: string = `${PAGE_SPEED_BASE}?${params.join('&')}`

    const res: Response = await fetch(fullUrl, { headers: { Accept: 'application/json' } })
    if (!res.ok) {
      const text: string = await res.text()
      return {
        fetchTime: new Date().toISOString(),
        categories: CATEGORY_IDS.map((id) => ({ id, title: id, score: null as number | null })),
        audits: [],
        screenshotDataUrl: null,
        runtimeError: `PageSpeed API ${res.status}: ${text.slice(0, 150)}`,
      }
    }

    const data = (await res.json()) as PagespeedApiResponse
    const lh: PagespeedLighthouseResult | undefined = data.lighthouseResult
    if (!lh) {
      return {
        fetchTime: new Date().toISOString(),
        categories: CATEGORY_IDS.map((id) => ({ id, title: id, score: null as number | null })),
        audits: [],
        screenshotDataUrl: null,
        runtimeError: 'PageSpeed API did not return lighthouseResult',
      }
    }
    return buildStrategyReport(lh)
  }

  const [mobile, desktop]: [LighthouseStrategyReport, LighthouseStrategyReport] = await Promise.all([
    runStrategy('mobile'),
    runStrategy('desktop'),
  ])

  const response: LighthouseReportResponse = {
    requestedUrl,
    finalUrl: requestedUrl,
    mobile,
    desktop,
  }

  return response
})
