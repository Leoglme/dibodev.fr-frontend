import type {
  AiAppContainerKey,
  AiAppContainerPattern,
  AiBotFetchFinding,
  AiContentFinding,
  AiCrawler,
  AiCrawlerAccess,
  AiCrawlerRole,
  AiDirectiveSource,
  AiDirectivesFinding,
  AiFetchedResponse,
  AiPageReading,
  AiParsedRobotsTxt,
  AiReadabilityCacheEntry,
  AiReadabilityCheckResult,
  AiReadabilityVerdict,
  AiRobotsDecision,
  AiRobotsDirective,
  AiRobotsGroup,
  AiRobotsRule,
  AiRobotsTxtFinding,
  AiRobotsTxtStatus,
  AiStructuredDataReading,
  AiStructuredDataType,
  AiUnderstandingFinding,
} from '~~/server/types/tools/aiReadabilityCheck'
import type { WebsiteHealthVerdict } from '~~/server/types/tools/websiteHealthCheck'
import { createError } from 'h3'
import { AI_CRAWLERS, AI_SEARCH_BOT_USER_AGENT } from '~~/server/constants/aiCrawlers'
import { GdprCookieCheckService } from '~~/server/services/GdprCookieCheckService'
import { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'

const CHECKER_USER_AGENT: string = 'DibodevAiReadabilityCheck/1.0 (+https://dibodev.fr/outils/site-lisible-par-chatgpt)'
const HTML_ACCEPT: string = 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.5'
const TEXT_ACCEPT: string = 'text/plain,*/*;q=0.5'
const HOME_TIMEOUT_MS: number = 8000
const SECONDARY_TIMEOUT_MS: number = 5000
const HOME_MAX_REDIRECTS: number = 5
const SECONDARY_MAX_REDIRECTS: number = 2
const CACHE_TTL_MS: number = 10 * 60 * 1000
const CACHE_MAX_ENTRIES: number = 500
const FAILED_REQUEST_STATUS: number = 0

/** Under this many words, the page says almost nothing without JavaScript. */
const EMPTY_PAGE_MAX_WORDS: number = 50
/** Under this many words, the page is readable but short. */
const THIN_PAGE_MAX_WORDS: number = 150
/** The robot's copy is "very different" when it holds less than this share of the words of the normal reading. */
const DIFFERENT_CONTENT_RATIO: number = 0.3
const REFUSAL_STATUSES: number[] = [401, 403, 429]
const JSON_LD_MAX_DEPTH: number = 6
const JSON_LD_MAX_NODES: number = 500

const COMMENT_REGEX: RegExp = /<!--[\s\S]*?-->/g
const HEAD_BLOCK_REGEX: RegExp = /<head\b[^>]*>[\s\S]*?<\/head\s*>/i
const BODY_START_REGEX: RegExp = /<body\b[^>]*>/i
const INVISIBLE_BLOCK_REGEX: RegExp = /<(script|style|noscript|template|svg|iframe|object)\b[^>]*>[\s\S]*?<\/\1\s*>/gi
const WORD_REGEX: RegExp = /[\p{L}\p{N}]/u
const TITLE_REGEX: RegExp = /<title\b[^>]*>([\s\S]*?)<\/title\s*>/i
const META_TAG_REGEX: RegExp = /<meta\b([^>]*)>/gi
const NAME_ATTRIBUTE_REGEX: RegExp = /(?:^|\s)name\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+))/i
const CONTENT_ATTRIBUTE_REGEX: RegExp = /(?:^|\s)content\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+))/i
const SITEMAP_LINK_REGEX: RegExp = /<link\b[^>]*rel\s*=\s*["']?sitemap/i
const JSON_LD_SCRIPT_REGEX: RegExp =
  /<script\b[^>]*type\s*=\s*["']?application\/ld\+json["']?[^>]*>([\s\S]*?)<\/script\s*>/gi
const CHALLENGE_PAGE_REGEX: RegExp =
  /<title>\s*(?:just a moment|attention required|access denied|403 forbidden|un instant)|cf-browser-verification|cf_chl_opt|challenge-platform|sucuri_cloudproxy_js|sgcaptcha|captcha-delivery\.com|ddos-guard/i
const HTML_DOCUMENT_REGEX: RegExp = /^\s*(?:<!doctype html|<html|<head|<body)/i
const ROBOTS_LINE_REGEX: RegExp = /^([a-z-]+)\s*:\s*(.*)$/i
const PER_ROBOT_DIRECTIVE_REGEX: RegExp = /^([a-z][\w-]*)\s*:\s*(.+)$/i
const VALUED_DIRECTIVE_NAMES: string[] = ['max-snippet', 'max-image-preview', 'max-video-preview', 'unavailable_after']

/** Containers of the JavaScript frameworks, in the order they are looked for. */
const APP_CONTAINER_PATTERNS: AiAppContainerPattern[] = [
  { key: 'next', pattern: /id\s*=\s*["']__next["']/i },
  { key: 'nuxt', pattern: /id\s*=\s*["']__nuxt["']/i },
  { key: 'gatsby', pattern: /id\s*=\s*["']___gatsby["']/i },
  { key: 'angular', pattern: /<app-root\b|\bng-version\s*=/i },
  { key: 'svelte', pattern: /id\s*=\s*["']svelte["']|data-sveltekit/i },
  { key: 'root', pattern: /id\s*=\s*["']root["']/i },
  { key: 'app', pattern: /id\s*=\s*["'](?:q-)?app["']/i },
]

const STRUCTURED_DATA_TYPES: AiStructuredDataType[] = [
  'Organization',
  'LocalBusiness',
  'ProfessionalService',
  'Store',
  'Restaurant',
  'HomeAndConstructionBusiness',
  'Person',
  'WebSite',
  'WebPage',
  'FAQPage',
  'Product',
  'Service',
  'Article',
  'BlogPosting',
  'BreadcrumbList',
  'Event',
]

const resultCache: Map<string, AiReadabilityCacheEntry> = new Map()

/** Reads a public site the way an AI robot does, without running its JavaScript: its robots.txt, its home page with a normal signature and with the signature of an AI search robot, and its llms.txt. Four readings at most. */
export class AiReadabilityCheckService {
  /**
   * Checks a host, from the cache when it was read in the last minutes.
   * @param {string} host - A host name returned by `PhpVulnerabilityCheckService.normalizeHost`.
   * @returns {Promise<AiReadabilityCheckResult>} The findings and the verdict.
   * @throws {H3Error} 400 when the host is not public, 502 when the home page cannot be read.
   */
  static async checkHost(host: string): Promise<AiReadabilityCheckResult> {
    const now: number = Date.now()
    const cached: AiReadabilityCacheEntry | undefined = resultCache.get(host)

    if (cached && cached.expiresAt > now) {
      return cached.result
    }
    await PhpVulnerabilityCheckService.assertPublicHost(host)
    const home: AiFetchedResponse = await AiReadabilityCheckService.fetchHomePage(host)
    const origin: string = new URL(home.url).origin
    const [botHome, robotsTxt, llmsTxt]: [AiFetchedResponse, AiFetchedResponse, AiFetchedResponse] = await Promise.all([
      AiReadabilityCheckService.fetchQuietly(home.url, AI_SEARCH_BOT_USER_AGENT, HTML_ACCEPT),
      AiReadabilityCheckService.fetchQuietly(`${origin}/robots.txt`, CHECKER_USER_AGENT, TEXT_ACCEPT),
      AiReadabilityCheckService.fetchQuietly(`${origin}/llms.txt`, CHECKER_USER_AGENT, TEXT_ACCEPT),
    ])
    const result: AiReadabilityCheckResult = AiReadabilityCheckService.analyze(
      host,
      home,
      botHome,
      robotsTxt,
      llmsTxt,
      new Date(now),
    )

    if (resultCache.size >= CACHE_MAX_ENTRIES) {
      AiReadabilityCheckService.pruneCache(now)
    }
    resultCache.set(host, { result, expiresAt: now + CACHE_TTL_MS })
    return result
  }

  /**
   * Builds the result from the four readings.
   * @param {string} host - The host checked.
   * @param {AiFetchedResponse} home - The home page read with the checker's own signature.
   * @param {AiFetchedResponse} botHome - The same page read with the signature of an AI search robot.
   * @param {AiFetchedResponse} robotsTxt - The robots.txt answer.
   * @param {AiFetchedResponse} llmsTxt - The llms.txt answer.
   * @param {Date} checkedAt - When the site was read.
   * @returns {AiReadabilityCheckResult} The findings and the verdict.
   */
  static analyze(
    host: string,
    home: AiFetchedResponse,
    botHome: AiFetchedResponse,
    robotsTxt: AiFetchedResponse,
    llmsTxt: AiFetchedResponse,
    checkedAt: Date,
  ): AiReadabilityCheckResult {
    const homeReading: AiPageReading = AiReadabilityCheckService.readPage(home.body)
    const isHomeUsable: boolean = AiReadabilityCheckService.isSuccess(home.status) && !homeReading.isChallengePage
    const homePath: string = new URL(home.url).pathname || '/'
    const robotsFinding: AiRobotsTxtFinding = AiReadabilityCheckService.buildRobotsTxtFinding(robotsTxt, homePath)
    const content: AiContentFinding = AiReadabilityCheckService.buildContentFinding(homeReading, isHomeUsable)
    const directives: AiDirectivesFinding = AiReadabilityCheckService.buildDirectivesFinding(home.body, home.headers)
    const botFetch: AiBotFetchFinding = AiReadabilityCheckService.buildBotFetchFinding(
      homeReading,
      isHomeUsable,
      botHome,
    )
    const understanding: AiUnderstandingFinding = AiReadabilityCheckService.buildUnderstandingFinding(
      home.body,
      isHomeUsable,
      robotsFinding.sitemapCount,
      llmsTxt,
    )

    return {
      host,
      finalUrl: home.url,
      verdict: AiReadabilityCheckService.decideVerdict(isHomeUsable, robotsFinding, botFetch, content, directives),
      robotsTxt: robotsFinding,
      botFetch,
      content,
      directives,
      understanding,
      checkedAt: checkedAt.toISOString(),
    }
  }

  /**
   * Splits a robots.txt file into its groups (RFC 9309): consecutive `User-agent` lines share the rules that follow.
   * @param {string} text - The file.
   * @returns {AiParsedRobotsTxt} The groups and the number of `Sitemap` lines.
   */
  static parseRobotsTxt(text: string): AiParsedRobotsTxt {
    const groups: AiRobotsGroup[] = []
    let currentGroup: AiRobotsGroup | null = null
    let hasRulesSinceUserAgent: boolean = false
    let sitemapCount: number = 0

    for (const rawLine of text.split(/\r\n|\r|\n/)) {
      const line: string = (rawLine.split('#')[0] ?? '').trim()
      const match: RegExpExecArray | null = ROBOTS_LINE_REGEX.exec(line)

      if (!match) {
        continue
      }
      const field: string = (match[1] ?? '').toLowerCase()
      const value: string = (match[2] ?? '').trim()

      if (field === 'sitemap') {
        sitemapCount += value ? 1 : 0
        continue
      }
      if (field === 'user-agent') {
        if (!currentGroup || hasRulesSinceUserAgent) {
          currentGroup = { userAgents: [], rules: [] }
          groups.push(currentGroup)
          hasRulesSinceUserAgent = false
        }
        currentGroup.userAgents.push((value.split('/')[0] ?? '').trim().toLowerCase())
        continue
      }
      if ((field === 'allow' || field === 'disallow') && currentGroup) {
        currentGroup.rules.push({ isAllow: field === 'allow', pattern: value })
        hasRulesSinceUserAgent = true
      }
    }
    return { groups, sitemapCount }
  }

  /**
   * Whether a robot may read a path: its own groups first, the `*` groups otherwise; the longest matching rule wins, `Allow` on a tie.
   * @param {AiParsedRobotsTxt} robots - The parsed file.
   * @param {string} token - The robot's name in robots.txt.
   * @param {string} path - The path to read.
   * @returns {AiRobotsDecision} Allowed or not, and which group decided.
   */
  static decideAccess(robots: AiParsedRobotsTxt, token: string, path: string): AiRobotsDecision {
    const lowerToken: string = token.toLowerCase()
    const specificGroups: AiRobotsGroup[] = robots.groups.filter((group: AiRobotsGroup): boolean =>
      group.userAgents.includes(lowerToken),
    )
    const wildcardGroups: AiRobotsGroup[] = robots.groups.filter((group: AiRobotsGroup): boolean =>
      group.userAgents.includes('*'),
    )
    const applyingGroups: AiRobotsGroup[] = specificGroups.length > 0 ? specificGroups : wildcardGroups

    if (applyingGroups.length === 0) {
      return { isAllowed: true, ruleSource: 'none' }
    }
    let bestRule: AiRobotsRule | null = null

    for (const rule of applyingGroups.flatMap((group: AiRobotsGroup): AiRobotsRule[] => group.rules)) {
      if (!rule.pattern || !AiReadabilityCheckService.matchesPath(rule.pattern, path)) {
        continue
      }
      const isLonger: boolean = !bestRule || rule.pattern.length > bestRule.pattern.length
      const isAllowOnTie: boolean = !!bestRule && rule.pattern.length === bestRule.pattern.length && rule.isAllow

      if (isLonger || isAllowOnTie) {
        bestRule = rule
      }
    }
    return {
      isAllowed: !bestRule || bestRule.isAllow,
      ruleSource: specificGroups.length > 0 ? 'specific' : 'wildcard',
    }
  }

  /**
   * Whether a robots.txt path pattern matches a path, from its start; `*` is any run of characters, a final `$` the end.
   * @param {string} pattern - The pattern of an `Allow` or `Disallow` line.
   * @param {string} path - The path read.
   * @returns {boolean} True when the rule applies.
   */
  static matchesPath(pattern: string, path: string): boolean {
    const isAnchoredAtEnd: boolean = pattern.endsWith('$')
    const body: string = isAnchoredAtEnd ? pattern.slice(0, -1) : pattern
    const source: string = body
      .split('*')
      .map((part: string): string => part.replace(/[.+?^${}()|[\]\\]/g, '\\$&'))
      .join('.*')

    return new RegExp(`^${source}${isAnchoredAtEnd ? '$' : ''}`).test(path)
  }

  /**
   * Reads what a robot that does not run JavaScript gets from a page: its visible words, a framework container, a challenge page.
   * @param {string} html - The start of the page.
   * @returns {AiPageReading} The reading.
   */
  static readPage(html: string): AiPageReading {
    const withoutComments: string = html.replace(COMMENT_REGEX, ' ')
    const bodyStart: RegExpExecArray | null = BODY_START_REGEX.exec(withoutComments)
    const bodyHtml: string = bodyStart
      ? withoutComments.slice(bodyStart.index + bodyStart[0].length)
      : withoutComments.replace(HEAD_BLOCK_REGEX, ' ')
    const visibleText: string = GdprCookieCheckService.readableText(bodyHtml.replace(INVISIBLE_BLOCK_REGEX, ' '))
    const wordCount: number = visibleText.split(' ').filter((word: string): boolean => WORD_REGEX.test(word)).length
    const container: AiAppContainerPattern | undefined = APP_CONTAINER_PATTERNS.find(
      (candidate: AiAppContainerPattern): boolean => candidate.pattern.test(withoutComments),
    )

    return {
      wordCount,
      appContainer: container?.key ?? null,
      isChallengePage: CHALLENGE_PAGE_REGEX.test(html),
    }
  }

  /**
   * The robots.txt line and one line per robot of the list.
   * @param {AiFetchedResponse} robotsTxt - The robots.txt answer.
   * @param {string} homePath - The path of the home page finally served.
   * @returns {AiRobotsTxtFinding} The finding.
   */
  static buildRobotsTxtFinding(robotsTxt: AiFetchedResponse, homePath: string): AiRobotsTxtFinding {
    const status: AiRobotsTxtStatus = AiReadabilityCheckService.robotsTxtStatusOf(robotsTxt)

    if (status === 'unreadable' || status === 'notChecked') {
      return { status, level: status === 'unreadable' ? 'warning' : 'unknown', sitemapCount: 0, crawlers: [] }
    }
    const robots: AiParsedRobotsTxt =
      status === 'found' ? AiReadabilityCheckService.parseRobotsTxt(robotsTxt.body) : { groups: [], sitemapCount: 0 }
    const crawlers: AiCrawlerAccess[] = AI_CRAWLERS.map((crawler: AiCrawler): AiCrawlerAccess => {
      const decision: AiRobotsDecision = AiReadabilityCheckService.decideAccess(robots, crawler.token, homePath)

      return {
        key: crawler.key,
        role: crawler.role,
        isAllowed: decision.isAllowed,
        ruleSource: decision.ruleSource,
        level: AiReadabilityCheckService.crawlerLevelOf(crawler.role, decision.isAllowed),
      }
    })

    return { status, level: 'ok', sitemapCount: robots.sitemapCount, crawlers }
  }

  /**
   * What the robots.txt answer is: a file, no file (404 or an HTML page), a server error, or no answer.
   * @param {AiFetchedResponse} robotsTxt - The answer.
   * @returns {AiRobotsTxtStatus} The status.
   */
  static robotsTxtStatusOf(robotsTxt: AiFetchedResponse): AiRobotsTxtStatus {
    if (robotsTxt.status === FAILED_REQUEST_STATUS) {
      return 'notChecked'
    }
    if (robotsTxt.status >= 500) {
      return 'unreadable'
    }
    if (!AiReadabilityCheckService.isSuccess(robotsTxt.status)) {
      return 'missing'
    }
    return AiReadabilityCheckService.isHtmlAnswer(robotsTxt) ? 'missing' : 'found'
  }

  /**
   * Level of a robot line: blocking a search robot removes the site from its answers, a training robot does not.
   * @param {AiCrawlerRole} role - What the robot does.
   * @param {boolean} isAllowed - Whether robots.txt lets it read the home page.
   * @returns {WebsiteHealthVerdict} The level.
   */
  static crawlerLevelOf(role: AiCrawlerRole, isAllowed: boolean): WebsiteHealthVerdict {
    if (isAllowed || role === 'training') {
      return 'ok'
    }
    return role === 'search' ? 'critical' : 'warning'
  }

  /**
   * The line of the text found without JavaScript.
   * @param {AiPageReading} reading - The reading of the home page.
   * @param {boolean} isHomeUsable - False for an error or a challenge page.
   * @returns {AiContentFinding} The finding.
   */
  static buildContentFinding(reading: AiPageReading, isHomeUsable: boolean): AiContentFinding {
    const wordCount: number = reading.wordCount
    const appContainer: AiAppContainerKey | null = reading.appContainer

    if (!isHomeUsable) {
      return { status: 'notReadable', level: 'unknown', wordCount, appContainer }
    }
    if (wordCount < EMPTY_PAGE_MAX_WORDS && appContainer) {
      return { status: 'emptyAppShell', level: 'critical', wordCount, appContainer }
    }
    if (wordCount < THIN_PAGE_MAX_WORDS) {
      return { status: 'thin', level: 'warning', wordCount, appContainer }
    }
    return { status: 'enough', level: 'ok', wordCount, appContainer }
  }

  /**
   * The comparison between the normal reading and the reading signed like an AI search robot.
   * @param {AiPageReading} homeReading - The normal reading.
   * @param {boolean} isHomeUsable - False when the normal reading is an error or a challenge page.
   * @param {AiFetchedResponse} botHome - The reading signed like the robot.
   * @returns {AiBotFetchFinding} The finding.
   */
  static buildBotFetchFinding(
    homeReading: AiPageReading,
    isHomeUsable: boolean,
    botHome: AiFetchedResponse,
  ): AiBotFetchFinding {
    const httpStatus: number | null = botHome.status === FAILED_REQUEST_STATUS ? null : botHome.status

    if (!isHomeUsable) {
      return { status: 'notCompared', level: 'unknown', httpStatus }
    }
    if (botHome.status === FAILED_REQUEST_STATUS) {
      return { status: 'unreachable', level: 'unknown', httpStatus }
    }
    if (REFUSAL_STATUSES.includes(botHome.status) || !AiReadabilityCheckService.isSuccess(botHome.status)) {
      return { status: 'refused', level: 'warning', httpStatus }
    }
    const botReading: AiPageReading = AiReadabilityCheckService.readPage(botHome.body)

    if (botReading.isChallengePage) {
      return { status: 'challenge', level: 'warning', httpStatus }
    }
    const isMuchShorter: boolean =
      homeReading.wordCount >= EMPTY_PAGE_MAX_WORDS &&
      botReading.wordCount < homeReading.wordCount * DIFFERENT_CONTENT_RATIO

    return isMuchShorter
      ? { status: 'different', level: 'warning', httpStatus }
      : { status: 'same', level: 'ok', httpStatus }
  }

  /**
   * The interdictions written in the page (`<meta name="robots">` or a robot's name) and in the `X-Robots-Tag` header.
   * @param {string} html - The start of the home page.
   * @param {Headers} headers - Its response headers.
   * @returns {AiDirectivesFinding} The directives found and where.
   */
  static buildDirectivesFinding(html: string, headers: Headers): AiDirectivesFinding {
    const robotNames: string[] = [
      'robots',
      'bingbot',
      ...AI_CRAWLERS.map((crawler: AiCrawler): string => crawler.token.toLowerCase()),
    ]
    const found: Set<AiRobotsDirective> = new Set()
    const sources: Set<AiDirectiveSource> = new Set()
    const metaRegex: RegExp = new RegExp(META_TAG_REGEX.source, META_TAG_REGEX.flags)
    const markup: string = html.replace(COMMENT_REGEX, ' ')
    let match: RegExpExecArray | null = metaRegex.exec(markup)

    while (match) {
      const attributes: string = match[1] ?? ''
      const name: string = GdprCookieCheckService.readAttribute(attributes, NAME_ATTRIBUTE_REGEX).trim().toLowerCase()

      if (robotNames.includes(name)) {
        const directives: AiRobotsDirective[] = AiReadabilityCheckService.readDirectives(
          GdprCookieCheckService.readAttribute(attributes, CONTENT_ATTRIBUTE_REGEX),
        )

        directives.forEach((directive: AiRobotsDirective): void => {
          found.add(directive)
          sources.add('meta')
        })
      }
      match = metaRegex.exec(markup)
    }
    for (const directive of AiReadabilityCheckService.readHeaderDirectives(
      headers.get('x-robots-tag') ?? '',
      robotNames,
    )) {
      found.add(directive)
      sources.add('header')
    }
    const directives: AiRobotsDirective[] = [...found]
    let level: WebsiteHealthVerdict = 'ok'

    if (directives.includes('noindex')) {
      level = 'critical'
    } else if (directives.length > 0) {
      level = 'warning'
    }
    return { level, directives, sources: [...sources] }
  }

  /**
   * The directives of an `X-Robots-Tag` header, keeping the ones for every robot and the ones named for a robot of the list.
   * @param {string} header - The header value (several values are joined by commas).
   * @param {string[]} robotNames - The robot names that count, lowercase.
   * @returns {AiRobotsDirective[]} The directives found.
   */
  static readHeaderDirectives(header: string, robotNames: string[]): AiRobotsDirective[] {
    const directives: AiRobotsDirective[] = []

    for (const part of header.split(',')) {
      const trimmed: string = part.trim()
      const perRobot: RegExpExecArray | null = PER_ROBOT_DIRECTIVE_REGEX.exec(trimmed)
      const prefix: string = (perRobot?.[1] ?? '').toLowerCase()

      if (perRobot && !VALUED_DIRECTIVE_NAMES.includes(prefix)) {
        if (robotNames.includes(prefix)) {
          directives.push(...AiReadabilityCheckService.readDirectives(perRobot[2] ?? ''))
        }
        continue
      }
      directives.push(...AiReadabilityCheckService.readDirectives(trimmed))
    }
    return directives
  }

  /**
   * The known directives of a robots value (`noindex, nofollow`, `none`, `max-snippet:0`…).
   * @param {string} value - The content of a robots meta tag or one part of the header.
   * @returns {AiRobotsDirective[]} The directives that keep a page out of the answers.
   */
  static readDirectives(value: string): AiRobotsDirective[] {
    const directives: AiRobotsDirective[] = []

    for (const token of value.toLowerCase().split(/[,\s]+/)) {
      const compact: string = token.replace(/\s+/g, '')

      if (compact === 'noindex' || compact === 'none') {
        directives.push('noindex')
      } else if (compact === 'nosnippet' || compact === 'max-snippet:0') {
        directives.push('nosnippet')
      } else if (compact === 'noai' || compact === 'noimageai') {
        directives.push(compact)
      }
    }
    return directives
  }

  /**
   * What helps a robot understand the site: title and description, structured data, a declared sitemap, llms.txt.
   * @param {string} html - The start of the home page.
   * @param {boolean} isHomeUsable - False for an error or a challenge page.
   * @param {number} robotsSitemapCount - The `Sitemap` lines of robots.txt.
   * @param {AiFetchedResponse} llmsTxt - The llms.txt answer.
   * @returns {AiUnderstandingFinding} The finding.
   */
  static buildUnderstandingFinding(
    html: string,
    isHomeUsable: boolean,
    robotsSitemapCount: number,
    llmsTxt: AiFetchedResponse,
  ): AiUnderstandingFinding {
    const markup: string = html.replace(COMMENT_REGEX, ' ')
    const hasTitle: boolean = GdprCookieCheckService.readableText(TITLE_REGEX.exec(markup)?.[1] ?? '') !== ''
    const hasDescription: boolean = AiReadabilityCheckService.hasMetaDescription(markup)
    const structuredData: AiStructuredDataReading = AiReadabilityCheckService.readStructuredDataTypes(markup)
    const hasStructuredData: boolean = structuredData.types.length > 0 || structuredData.hasOther
    const hasDeclaredSitemap: boolean = robotsSitemapCount > 0 || SITEMAP_LINK_REGEX.test(markup)
    const hasLlmsTxt: boolean =
      AiReadabilityCheckService.isSuccess(llmsTxt.status) &&
      !AiReadabilityCheckService.isHtmlAnswer(llmsTxt) &&
      llmsTxt.body.trim() !== ''

    return {
      hasTitle,
      hasDescription,
      titleLevel: AiReadabilityCheckService.pageLevelOf(isHomeUsable, hasTitle && hasDescription),
      structuredDataTypes: structuredData.types,
      hasOtherStructuredData: structuredData.hasOther,
      structuredDataLevel: AiReadabilityCheckService.pageLevelOf(isHomeUsable, hasStructuredData),
      hasDeclaredSitemap,
      sitemapLevel: hasDeclaredSitemap ? 'ok' : 'warning',
      llmsTxtStatus: hasLlmsTxt ? 'found' : 'missing',
      llmsTxtLevel: hasLlmsTxt ? 'ok' : 'unknown',
    }
  }

  /**
   * Level of a point read in the page: unknown when the page could not be read.
   * @param {boolean} isHomeUsable - False for an error or a challenge page.
   * @param {boolean} isPresent - Whether the point is there.
   * @returns {WebsiteHealthVerdict} The level.
   */
  static pageLevelOf(isHomeUsable: boolean, isPresent: boolean): WebsiteHealthVerdict {
    if (!isHomeUsable) {
      return 'unknown'
    }
    return isPresent ? 'ok' : 'warning'
  }

  /**
   * Whether the page has a non-empty `<meta name="description">`.
   * @param {string} markup - The page without its comments.
   * @returns {boolean} True when a description is written.
   */
  static hasMetaDescription(markup: string): boolean {
    const metaRegex: RegExp = new RegExp(META_TAG_REGEX.source, META_TAG_REGEX.flags)
    let match: RegExpExecArray | null = metaRegex.exec(markup)

    while (match) {
      const attributes: string = match[1] ?? ''
      const name: string = GdprCookieCheckService.readAttribute(attributes, NAME_ATTRIBUTE_REGEX).trim().toLowerCase()

      if (name === 'description') {
        return GdprCookieCheckService.readAttribute(attributes, CONTENT_ATTRIBUTE_REGEX).trim() !== ''
      }
      match = metaRegex.exec(markup)
    }
    return false
  }

  /**
   * The schema.org types of the JSON-LD blocks, kept only when they belong to the known list.
   * @param {string} markup - The page without its comments.
   * @returns {AiStructuredDataReading} The known types found, and whether other types exist.
   */
  static readStructuredDataTypes(markup: string): AiStructuredDataReading {
    const scriptRegex: RegExp = new RegExp(JSON_LD_SCRIPT_REGEX.source, JSON_LD_SCRIPT_REGEX.flags)
    const declaredTypes: string[] = []
    let match: RegExpExecArray | null = scriptRegex.exec(markup)

    while (match) {
      try {
        const parsed: unknown = JSON.parse(match[1] ?? '')

        AiReadabilityCheckService.collectJsonLdTypes(parsed, 0, declaredTypes)
      } catch {
        // An invalid block is skipped: a robot cannot read it either.
      }
      match = scriptRegex.exec(markup)
    }
    const types: AiStructuredDataType[] = STRUCTURED_DATA_TYPES.filter((type: AiStructuredDataType): boolean =>
      declaredTypes.includes(type),
    )
    const hasOther: boolean = declaredTypes.some(
      (type: string): boolean => !STRUCTURED_DATA_TYPES.some((known: AiStructuredDataType): boolean => known === type),
    )

    return { types, hasOther }
  }

  /**
   * Walks a JSON-LD value and collects its `@type` values, within a bounded depth and size.
   * @param {unknown} value - The value.
   * @param {number} depth - The current depth.
   * @param {string[]} declaredTypes - The types collected so far, updated in place.
   * @returns {void}
   */
  static collectJsonLdTypes(value: unknown, depth: number, declaredTypes: string[]): void {
    if (depth > JSON_LD_MAX_DEPTH || declaredTypes.length > JSON_LD_MAX_NODES || typeof value !== 'object') {
      return
    }
    if (value === null) {
      return
    }
    if (Array.isArray(value)) {
      value.forEach((item: unknown): void =>
        AiReadabilityCheckService.collectJsonLdTypes(item, depth + 1, declaredTypes),
      )
      return
    }
    for (const [key, child] of Object.entries(value)) {
      if (key === '@type') {
        const typeValues: unknown[] = Array.isArray(child) ? child : [child]

        typeValues.forEach((typeValue: unknown): void => {
          if (typeof typeValue === 'string') {
            declaredTypes.push(typeValue.replace(/^https?:\/\/schema\.org\//i, ''))
          }
        })
        continue
      }
      AiReadabilityCheckService.collectJsonLdTypes(child, depth + 1, declaredTypes)
    }
  }

  /**
   * The overall verdict: unknown when the page could not be read, blocked, empty without JavaScript, partly blocked, or readable.
   * @param {boolean} isHomeUsable - False for an error or a challenge page.
   * @param {AiRobotsTxtFinding} robotsTxt - The robots.txt finding.
   * @param {AiBotFetchFinding} botFetch - The comparison with the robot's reading.
   * @param {AiContentFinding} content - The text found without JavaScript.
   * @param {AiDirectivesFinding} directives - The interdictions in the page.
   * @returns {AiReadabilityVerdict} The verdict.
   */
  static decideVerdict(
    isHomeUsable: boolean,
    robotsTxt: AiRobotsTxtFinding,
    botFetch: AiBotFetchFinding,
    content: AiContentFinding,
    directives: AiDirectivesFinding,
  ): AiReadabilityVerdict {
    if (!isHomeUsable) {
      return 'unknown'
    }
    const searchCrawlers: AiCrawlerAccess[] = robotsTxt.crawlers.filter(
      (crawler: AiCrawlerAccess): boolean => crawler.role === 'search',
    )
    const areAllSearchCrawlersBlocked: boolean =
      searchCrawlers.length > 0 && searchCrawlers.every((crawler: AiCrawlerAccess): boolean => !crawler.isAllowed)

    if (directives.directives.includes('noindex') || areAllSearchCrawlersBlocked) {
      return 'blocked'
    }
    if (content.status === 'emptyAppShell') {
      return 'emptyWithoutJavascript'
    }
    const hasBlockedReader: boolean = robotsTxt.crawlers.some(
      (crawler: AiCrawlerAccess): boolean => !crawler.isAllowed && crawler.role !== 'training',
    )
    const isPartlyBlocked: boolean =
      hasBlockedReader ||
      botFetch.level === 'warning' ||
      directives.directives.length > 0 ||
      robotsTxt.status === 'unreadable'

    return isPartlyBlocked ? 'partlyBlocked' : 'readable'
  }

  /**
   * Reads the home page over HTTPS, then HTTP when HTTPS is not served, following redirects to public hosts only.
   * @param {string} host - The host to read.
   * @returns {Promise<AiFetchedResponse>} The page finally served, whatever its status.
   * @throws {H3Error} 502 when the site cannot be read at all.
   */
  static async fetchHomePage(host: string): Promise<AiFetchedResponse> {
    try {
      return await AiReadabilityCheckService.fetchFollowingRedirects(
        `https://${host}/`,
        CHECKER_USER_AGENT,
        HTML_ACCEPT,
        HOME_TIMEOUT_MS,
        HOME_MAX_REDIRECTS,
      )
    } catch (httpsError: unknown) {
      try {
        return await AiReadabilityCheckService.fetchFollowingRedirects(
          `http://${host}/`,
          CHECKER_USER_AGENT,
          HTML_ACCEPT,
          HOME_TIMEOUT_MS,
          HOME_MAX_REDIRECTS,
        )
      } catch {
        const message: string = httpsError instanceof Error ? httpsError.message : 'unreachable'

        throw createError({ statusCode: 502, statusMessage: `The site could not be read: ${message}` })
      }
    }
  }

  /**
   * Reads an address with a short delay and few redirects; a failure gives a status of 0 instead of an error.
   * @param {string} url - The address.
   * @param {string} userAgent - The signature sent.
   * @param {string} accept - The `Accept` header.
   * @returns {Promise<AiFetchedResponse>} The answer, or an empty one with status 0.
   */
  static async fetchQuietly(url: string, userAgent: string, accept: string): Promise<AiFetchedResponse> {
    try {
      return await AiReadabilityCheckService.fetchFollowingRedirects(
        url,
        userAgent,
        accept,
        SECONDARY_TIMEOUT_MS,
        SECONDARY_MAX_REDIRECTS,
      )
    } catch {
      return { url, status: FAILED_REQUEST_STATUS, headers: new Headers(), body: '' }
    }
  }

  /**
   * Fetches an address and follows its redirects by hand, so every hop is checked against the private ranges.
   * @param {string} startUrl - The first address.
   * @param {string} userAgent - The signature sent.
   * @param {string} accept - The `Accept` header.
   * @param {number} timeoutMs - Time given to each hop.
   * @param {number} maxRedirects - Redirects followed at most.
   * @returns {Promise<AiFetchedResponse>} The answer finally served, with the start of its body.
   * @throws {Error} When a hop is not public, the chain is too long or the request fails.
   */
  static async fetchFollowingRedirects(
    startUrl: string,
    userAgent: string,
    accept: string,
    timeoutMs: number,
    maxRedirects: number,
  ): Promise<AiFetchedResponse> {
    let currentUrl: string = startUrl

    for (let hop: number = 0; hop <= maxRedirects; hop += 1) {
      const response: Response = await fetch(currentUrl, {
        method: 'GET',
        redirect: 'manual',
        signal: AbortSignal.timeout(timeoutMs),
        headers: { 'user-agent': userAgent, accept, 'accept-language': 'fr,en;q=0.8' },
      })
      const location: string | null = response.headers.get('location')

      if (response.status >= 300 && response.status < 400 && location) {
        await response.body?.cancel()
        const nextUrl: URL = new URL(location, currentUrl)

        if (nextUrl.protocol !== 'https:' && nextUrl.protocol !== 'http:') {
          throw new Error('unsupported redirect')
        }
        const nextHost: string | null = PhpVulnerabilityCheckService.normalizeHost(nextUrl.hostname)

        if (!nextHost) {
          throw new Error('redirect to a non-public host')
        }
        await PhpVulnerabilityCheckService.assertPublicHost(nextHost)
        currentUrl = nextUrl.toString()
        continue
      }
      const body: string = await PhpVulnerabilityCheckService.readBodyStart(response)

      return { url: currentUrl, status: response.status, headers: response.headers, body }
    }
    throw new Error('too many redirects')
  }

  /**
   * Whether an HTTP status is a success.
   * @param {number} status - The status.
   * @returns {boolean} True for 2xx.
   */
  static isSuccess(status: number): boolean {
    return status >= 200 && status < 300
  }

  /**
   * Whether a text file answer is in fact an HTML page (a site that answers every address with its home page).
   * @param {AiFetchedResponse} answer - The answer.
   * @returns {boolean} True for HTML.
   */
  static isHtmlAnswer(answer: AiFetchedResponse): boolean {
    return (answer.headers.get('content-type') ?? '').includes('text/html') || HTML_DOCUMENT_REGEX.test(answer.body)
  }

  /**
   * Drops the expired cache entries, then the oldest ones while the cache is still full.
   * @param {number} now - The current time.
   * @returns {void}
   */
  static pruneCache(now: number): void {
    for (const [host, entry] of resultCache) {
      if (entry.expiresAt <= now) {
        resultCache.delete(host)
      }
    }
    while (resultCache.size >= CACHE_MAX_ENTRIES) {
      const oldest: string | undefined = resultCache.keys().next().value

      if (oldest === undefined) {
        return
      }
      resultCache.delete(oldest)
    }
  }
}
