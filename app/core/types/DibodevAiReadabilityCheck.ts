import type { DibodevWebsiteHealthVerdict } from '~/core/types/DibodevWebsiteHealthCheck'

/** Mirror of `server/types/tools/aiReadabilityCheck.ts` (result of GET /api/tools/ai-readability-check). */

export type DibodevAiCrawlerKey =
  | 'oaiSearchBot'
  | 'chatGptUser'
  | 'gptBot'
  | 'claudeSearchBot'
  | 'claudeUser'
  | 'claudeBot'
  | 'perplexityBot'
  | 'perplexityUser'
  | 'googlebot'
  | 'googleExtended'

export type DibodevAiCrawlerRole = 'search' | 'training' | 'user'

export type DibodevAiReadabilityVerdict =
  | 'readable'
  | 'partlyBlocked'
  | 'blocked'
  | 'emptyWithoutJavascript'
  | 'unknown'

export type DibodevAiRobotsTxtStatus = 'found' | 'missing' | 'unreadable' | 'notChecked'

export type DibodevAiRobotsRuleSource = 'specific' | 'wildcard' | 'none'

export type DibodevAiCrawlerAccess = {
  key: DibodevAiCrawlerKey
  role: DibodevAiCrawlerRole
  isAllowed: boolean
  ruleSource: DibodevAiRobotsRuleSource
  level: DibodevWebsiteHealthVerdict
}

export type DibodevAiRobotsTxtFinding = {
  status: DibodevAiRobotsTxtStatus
  level: DibodevWebsiteHealthVerdict
  sitemapCount: number
  crawlers: DibodevAiCrawlerAccess[]
}

export type DibodevAiBotFetchStatus = 'same' | 'refused' | 'challenge' | 'different' | 'unreachable' | 'notCompared'

export type DibodevAiBotFetchFinding = {
  status: DibodevAiBotFetchStatus
  level: DibodevWebsiteHealthVerdict
  httpStatus: number | null
}

export type DibodevAiAppContainerKey = 'app' | 'root' | 'next' | 'nuxt' | 'gatsby' | 'angular' | 'svelte'

export type DibodevAiContentStatus = 'enough' | 'thin' | 'emptyAppShell' | 'notReadable'

export type DibodevAiContentFinding = {
  status: DibodevAiContentStatus
  level: DibodevWebsiteHealthVerdict
  wordCount: number
  appContainer: DibodevAiAppContainerKey | null
}

export type DibodevAiRobotsDirective = 'noindex' | 'nosnippet' | 'noai' | 'noimageai'

export type DibodevAiDirectiveSource = 'meta' | 'header'

export type DibodevAiDirectivesFinding = {
  level: DibodevWebsiteHealthVerdict
  directives: DibodevAiRobotsDirective[]
  sources: DibodevAiDirectiveSource[]
}

export type DibodevAiStructuredDataType =
  | 'Organization'
  | 'LocalBusiness'
  | 'ProfessionalService'
  | 'Store'
  | 'Restaurant'
  | 'HomeAndConstructionBusiness'
  | 'Person'
  | 'WebSite'
  | 'WebPage'
  | 'FAQPage'
  | 'Product'
  | 'Service'
  | 'Article'
  | 'BlogPosting'
  | 'BreadcrumbList'
  | 'Event'

export type DibodevAiLlmsTxtStatus = 'found' | 'missing'

export type DibodevAiUnderstandingFinding = {
  hasTitle: boolean
  hasDescription: boolean
  titleLevel: DibodevWebsiteHealthVerdict
  structuredDataTypes: DibodevAiStructuredDataType[]
  hasOtherStructuredData: boolean
  structuredDataLevel: DibodevWebsiteHealthVerdict
  hasDeclaredSitemap: boolean
  sitemapLevel: DibodevWebsiteHealthVerdict
  llmsTxtStatus: DibodevAiLlmsTxtStatus
  llmsTxtLevel: DibodevWebsiteHealthVerdict
}

export type DibodevAiReadabilityCheckResult = {
  host: string
  finalUrl: string
  verdict: DibodevAiReadabilityVerdict
  robotsTxt: DibodevAiRobotsTxtFinding
  botFetch: DibodevAiBotFetchFinding
  content: DibodevAiContentFinding
  directives: DibodevAiDirectivesFinding
  understanding: DibodevAiUnderstandingFinding
  checkedAt: string
}

/** One robot as the page shows it: the name used in robots.txt, its publisher, its role and the documentation read. */
export type DibodevAiCrawlerReference = {
  key: DibodevAiCrawlerKey
  token: string
  operator: string
  role: DibodevAiCrawlerRole
  documentationUrl: string
  mayIgnoreRobotsTxt: boolean
}
