import type { SiteCheckToolKey } from '~~/server/types/tools/siteCheckReport'

/** The checkers kept in the statistics: the ones with an e-mail report, plus the ones without (AI readability). */
export type SiteCheckStatsToolKey = SiteCheckToolKey | 'aiReadability'

export type SiteCheckStatsDetailValue = string | number | boolean | null | string[]

/** Never a person, never the content of the page. */
export type SiteCheckStatsDetails = Record<string, SiteCheckStatsDetailValue>

/** Erased twelve months after the check. */
export type SiteCheckStatsEntry = {
  tool: SiteCheckStatsToolKey
  host: string
  verdict: string
  details: SiteCheckStatsDetails
  checkedAt: string
}

/** `verdicts` counts the latest check of each site. */
export type SiteCheckStatsToolSummary = {
  tool: SiteCheckStatsToolKey
  checkCount: number
  siteCount: number
  verdicts: Record<string, number>
  checksByMonth: Record<string, number>
}

/** Computed on the latest check of each site; never a list of sites. */
export type SiteCheckStatsShare = {
  key: string
  tool: SiteCheckStatsToolKey
  label: string
  siteCount: number
  totalSiteCount: number
  percent: number | null
}

export type SiteCheckStatsShareDefinition = {
  key: string
  tool: SiteCheckStatsToolKey
  label: string
  isInTotal: (entry: SiteCheckStatsEntry) => boolean
  isInShare: (entry: SiteCheckStatsEntry) => boolean
}

export type SiteCheckStatsSummary = {
  generatedAt: string
  retentionMonths: number
  oldestCheckAt: string | null
  checkCount: number
  siteCount: number
  tools: SiteCheckStatsToolSummary[]
  shares: SiteCheckStatsShare[]
}
