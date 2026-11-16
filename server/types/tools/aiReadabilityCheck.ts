import type { WebsiteHealthVerdict } from '~~/server/types/tools/websiteHealthCheck'

/** The robots of the list, in the order the result card shows them. */
export type AiCrawlerKey =
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

/** `search`: it feeds the answers with links; `training`: it collects pages to train models; `user`: it visits a page because a person asked. */
export type AiCrawlerRole = 'search' | 'training' | 'user'

export type AiCrawlerOperator = 'OpenAI' | 'Anthropic' | 'Perplexity' | 'Google'

/** One robot, as its publisher documents it; `token` is the name written after `User-agent:` in robots.txt. */
export type AiCrawler = {
  key: AiCrawlerKey
  token: string
  operator: AiCrawlerOperator
  role: AiCrawlerRole
  documentationUrl: string
  mayIgnoreRobotsTxt: boolean
}

export type AiReadabilityVerdict = 'readable' | 'partlyBlocked' | 'blocked' | 'emptyWithoutJavascript' | 'unknown'

/** `missing`: no file (or an HTML page instead of it); `unreadable`: server error; `notChecked`: no answer in time. */
export type AiRobotsTxtStatus = 'found' | 'missing' | 'unreadable' | 'notChecked'

/** `specific`: a group names the robot; `wildcard`: only the `*` group applies; `none`: no rule applies. */
export type AiRobotsRuleSource = 'specific' | 'wildcard' | 'none'

export type AiCrawlerAccess = {
  key: AiCrawlerKey
  role: AiCrawlerRole
  isAllowed: boolean
  ruleSource: AiRobotsRuleSource
  level: WebsiteHealthVerdict
}

export type AiRobotsTxtFinding = {
  status: AiRobotsTxtStatus
  level: WebsiteHealthVerdict
  sitemapCount: number
  crawlers: AiCrawlerAccess[]
}

/** What the home page sends to a request signed like an AI search robot, compared with the normal reading. */
export type AiBotFetchStatus = 'same' | 'refused' | 'challenge' | 'different' | 'unreachable' | 'notCompared'

export type AiBotFetchFinding = {
  status: AiBotFetchStatus
  level: WebsiteHealthVerdict
  httpStatus: number | null
}

export type AiAppContainerKey = 'app' | 'root' | 'next' | 'nuxt' | 'gatsby' | 'angular' | 'svelte'

export type AiContentStatus = 'enough' | 'thin' | 'emptyAppShell' | 'notReadable'

export type AiContentFinding = {
  status: AiContentStatus
  level: WebsiteHealthVerdict
  wordCount: number
  appContainer: AiAppContainerKey | null
}

export type AiRobotsDirective = 'noindex' | 'nosnippet' | 'noai' | 'noimageai'

export type AiDirectiveSource = 'meta' | 'header'

export type AiDirectivesFinding = {
  level: WebsiteHealthVerdict
  directives: AiRobotsDirective[]
  sources: AiDirectiveSource[]
}

/** Only types of this list are kept: a type written by the site is never sent back as it is. */
export type AiStructuredDataType =
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

export type AiLlmsTxtStatus = 'found' | 'missing'

export type AiUnderstandingFinding = {
  hasTitle: boolean
  hasDescription: boolean
  titleLevel: WebsiteHealthVerdict
  structuredDataTypes: AiStructuredDataType[]
  hasOtherStructuredData: boolean
  structuredDataLevel: WebsiteHealthVerdict
  hasDeclaredSitemap: boolean
  sitemapLevel: WebsiteHealthVerdict
  llmsTxtStatus: AiLlmsTxtStatus
  llmsTxtLevel: WebsiteHealthVerdict
}

/** Mirrored in `app/core/types/DibodevAiReadabilityCheck.ts`: keep both in step. Never a text written by the site checked. */
export type AiReadabilityCheckResult = {
  host: string
  finalUrl: string
  verdict: AiReadabilityVerdict
  robotsTxt: AiRobotsTxtFinding
  botFetch: AiBotFetchFinding
  content: AiContentFinding
  directives: AiDirectivesFinding
  understanding: AiUnderstandingFinding
  checkedAt: string
}

export type AiReadabilityCheckQuery = {
  site?: string
}

export type AiReadabilityCacheEntry = {
  result: AiReadabilityCheckResult
  expiresAt: number
}

/** A response read by the checker: status, headers and the start of the body (empty when the request failed). */
export type AiFetchedResponse = {
  url: string
  status: number
  headers: Headers
  body: string
}

/** One `Allow` or `Disallow` line of a robots.txt group. */
export type AiRobotsRule = {
  isAllow: boolean
  pattern: string
}

/** A robots.txt group: the robots it names (lowercase) and its rules. */
export type AiRobotsGroup = {
  userAgents: string[]
  rules: AiRobotsRule[]
}

export type AiParsedRobotsTxt = {
  groups: AiRobotsGroup[]
  sitemapCount: number
}

export type AiRobotsDecision = {
  isAllowed: boolean
  ruleSource: AiRobotsRuleSource
}

export type AiPageReading = {
  wordCount: number
  appContainer: AiAppContainerKey | null
  isChallengePage: boolean
}

export type AiAppContainerPattern = {
  key: AiAppContainerKey
  pattern: RegExp
}

export type AiStructuredDataReading = {
  types: AiStructuredDataType[]
  hasOther: boolean
}
