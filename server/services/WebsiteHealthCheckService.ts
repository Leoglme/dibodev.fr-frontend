import type {
  EmailDeliverabilityCheckResult,
  EmailDeliverabilityVerdict,
} from '~~/server/types/tools/emailDeliverabilityCheck'
import type { PhpVulnerabilityCheckResult, PhpVulnerabilityVerdict } from '~~/server/types/tools/phpVulnerabilityCheck'
import type {
  WebsiteHealthCacheEntry,
  WebsiteHealthCheckItem,
  WebsiteHealthCheckResult,
  WebsiteHealthDetailKey,
  WebsiteHealthOverallVerdict,
  WebsiteHealthVerdict,
  WebsiteHomePageFacts,
  WebsiteHttpProbeOutcome,
} from '~~/server/types/tools/websiteHealthCheck'
import type { WordPressHackCheckResult, WordPressHackVerdict } from '~~/server/types/tools/wordpressHackCheck'
import { EmailDeliverabilityCheckService } from '~~/server/services/EmailDeliverabilityCheckService'
import { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'
import { WordPressHackCheckService } from '~~/server/services/WordPressHackCheckService'

const CACHE_TTL_MS: number = 10 * 60 * 1000
const CACHE_MAX_ENTRIES: number = 500
const HTTP_PROBE_TIMEOUT_MS: number = 5000
const USER_AGENT: string = 'DibodevSiteCheck/1.0 (+https://dibodev.fr/outils/tester-mon-site)'
const WWW_PREFIX_REGEX: RegExp = /^www\./

/** Google shows about 60 characters of a title and 160 of a description; shorter ones rarely say enough. */
const TITLE_MIN_LENGTH: number = 15
const TITLE_MAX_LENGTH: number = 70
const DESCRIPTION_MIN_LENGTH: number = 50
const DESCRIPTION_MAX_LENGTH: number = 170
/** A copyright year older than this one is a sign of a site nobody touches. */
const COPYRIGHT_MIN_RECENT_YEAR: number = 2024
const COPYRIGHT_OLDEST_PLAUSIBLE_YEAR: number = 1995
/** jQuery 3 was released in June 2016; the 1.x and 2.x branches have unfixed security advisories. */
const JQUERY_MIN_MAJOR: number = 3
const WORDPRESS_PLATFORMS: string[] = ['wordpress', 'woocommerce']

const VIEWPORT_META_REGEX: RegExp = /<meta[^>]+name=["']viewport["'][^>]*>/i
const TITLE_REGEX: RegExp = /<title[^>]*>([\s\S]{0,500}?)<\/title>/i
const DESCRIPTION_META_REGEX: RegExp =
  /<meta(?=[^>]*name=["']description["'])[^>]*content=["']([^"']{0,1000})["'][^>]*>|<meta(?=[^>]*content=["']([^"']{0,1000})["'])[^>]*name=["']description["'][^>]*>/i
const HTML_TAG_REGEX: RegExp = /<[^>]+>/g
const HTML_ENTITY_REGEX: RegExp = /&(?:amp|nbsp|#160|#8217|rsquo|quot|#39|lt|gt);/g
const WHITESPACE_REGEX: RegExp = /\s+/g
const ANCHOR_REGEX: RegExp = /<a\s[^>]*href=["']([^"']*)["'][^>]*>([\s\S]{0,200}?)<\/a>/gi
const LEGAL_NOTICE_HREF_REGEX: RegExp =
  /mentions?[-_]?l(?:e|%c3%a9|é)gales?|\/legal(?:[-_]?notice)?s?(?:[/?#.]|$)|aviso[-_]legal|impressum|\/mentions(?:[/?#.]|$)/i
const LEGAL_NOTICE_TEXT_REGEX: RegExp = /mentions\s+l[ée]gales|legal\s+notice|aviso\s+legal|impressum/i
const COPYRIGHT_REGEX: RegExp = /(?:©|&copy;|&#169;|copyright)\s*(?:(\d{4})\s*[-–—]\s*)?(\d{4})/gi
const JQUERY_FILE_REGEX: RegExp = /jquery[-.](\d+)\.(\d+)(?:\.(\d+))?(?:\.min|\.slim|\.slim\.min)?\.js/i
const JQUERY_CDN_PATH_REGEX: RegExp = /\/jquery\/(\d+)\.(\d+)(?:\.(\d+))?\//i
const FLASH_REGEX: RegExp = /\.swf(?:[?"'\s#]|$)|application\/x-shockwave-flash|swfobject/i
const GENERATOR_META_REGEX: RegExp =
  /<meta(?=[^>]*name=["']generator["'])[^>]*content=["']([^"']{0,120})["'][^>]*>|<meta(?=[^>]*content=["']([^"']{0,120})["'])[^>]*name=["']generator["'][^>]*>/i
/** Generator tags of tools no longer maintained, or of CMS branches without security fixes for years. */
const OLD_GENERATOR_REGEXES: RegExp[] = [
  /microsoft\s+frontpage/i,
  /adobe\s+golive/i,
  /adobe\s+dreamweaver/i,
  /macromedia/i,
  /microsoft\s+word/i,
  /netobjects\s+fusion/i,
  /iweb/i,
  /joomla!?\s*[123]\./i,
  /drupal\s+[567](?:\.|\s|$)/i,
  /wordpress\s+[2345]\./i,
  /typo3\s+(?:cms\s+)?[4-8]\./i,
  /spip\s+[123]\./i,
  /prestashop\s+1\.[0-6]/i,
]
const VERDICT_SEVERITY: Record<WebsiteHealthVerdict, number> = { ok: 0, unknown: 0, warning: 1, critical: 2 }

const resultCache: Map<string, WebsiteHealthCacheEntry> = new Map()

/**
 * Reads a public site from outside and answers eight questions a business owner asks about it: HTTPS, PHP, WordPress,
 * e-mail authentication, phone display, title and description, legal notice link and signs of a site that has aged.
 * The home page is read once for the markup checks; the PHP, WordPress and e-mail verdicts come from the existing
 * checkers, which keep their own short caches.
 */
export class WebsiteHealthCheckService {
  /**
   * Checks a host, from the cache when it was read in the last minutes.
   * @param {string} host - A host name returned by `PhpVulnerabilityCheckService.normalizeHost`.
   * @returns {Promise<WebsiteHealthCheckResult>} The eight verdicts and the overall one.
   * @throws {H3Error} 400 when the host is not public, 502 when the site cannot be read.
   */
  static async checkHost(host: string): Promise<WebsiteHealthCheckResult> {
    const now: number = Date.now()
    const cached: WebsiteHealthCacheEntry | undefined = resultCache.get(host)

    if (cached && cached.expiresAt > now) {
      return cached.result
    }
    await PhpVulnerabilityCheckService.assertPublicHost(host)
    const page: { finalUrl: string; html: string } = await PhpVulnerabilityCheckService.fetchHomePage(host)
    const facts: WebsiteHomePageFacts = WebsiteHealthCheckService.readHomePageFacts(page.html)
    const [phpResult, httpOutcome, emailResult] = await Promise.all([
      WebsiteHealthCheckService.readPhpVerdict(host),
      WebsiteHealthCheckService.probePlainHttp(host),
      WebsiteHealthCheckService.readEmailVerdict(host),
    ])
    const platforms: PhpVulnerabilityCheckResult['platforms'] = phpResult?.platforms ?? []
    const isWordPress: boolean = platforms.some((platform: string): boolean => WORDPRESS_PLATFORMS.includes(platform))
    const wordpressResult: WordPressHackCheckResult | null = isWordPress
      ? await WebsiteHealthCheckService.readWordPressVerdict(host)
      : null
    const checks: WebsiteHealthCheckItem[] = [
      WebsiteHealthCheckService.buildHttpsCheck(page.finalUrl, httpOutcome),
      WebsiteHealthCheckService.buildPhpCheck(phpResult),
      WebsiteHealthCheckService.buildWordPressCheck(isWordPress, wordpressResult),
      WebsiteHealthCheckService.buildEmailCheck(emailResult),
      WebsiteHealthCheckService.buildMobileCheck(facts),
      WebsiteHealthCheckService.buildSeoTagsCheck(facts),
      WebsiteHealthCheckService.buildLegalNoticeCheck(facts),
      WebsiteHealthCheckService.buildAgingCheck(facts),
    ]
    const result: WebsiteHealthCheckResult = {
      host,
      finalUrl: page.finalUrl,
      overall: WebsiteHealthCheckService.overallVerdictOf(checks),
      checks,
      platforms,
      isWordPress,
      phpVerdict: phpResult?.verdict ?? null,
      wordpressVerdict: wordpressResult?.verdict ?? null,
      emailVerdict: emailResult?.verdict ?? null,
      checkedAt: new Date(now).toISOString(),
    }

    if (resultCache.size >= CACHE_MAX_ENTRIES) {
      WebsiteHealthCheckService.pruneCache(now)
    }
    resultCache.set(host, { result, expiresAt: now + CACHE_TTL_MS })
    return result
  }

  /**
   * Runs the PHP vulnerability checker; a failure there (site unreadable on its second read) leaves the verdict unknown.
   * @param {string} host - The host checked.
   * @returns {Promise<PhpVulnerabilityCheckResult | null>} The PHP result, or null when it could not be read.
   */
  static async readPhpVerdict(host: string): Promise<PhpVulnerabilityCheckResult | null> {
    try {
      return await PhpVulnerabilityCheckService.checkHost(host)
    } catch {
      return null
    }
  }

  /**
   * Runs the WordPress hack checker on a site already identified as WordPress.
   * @param {string} host - The host checked.
   * @returns {Promise<WordPressHackCheckResult | null>} The WordPress result, or null when it could not be read.
   */
  static async readWordPressVerdict(host: string): Promise<WordPressHackCheckResult | null> {
    try {
      return await WordPressHackCheckService.checkHost(host)
    } catch {
      return null
    }
  }

  /**
   * Runs the e-mail deliverability checker on the domain of the site (without "www.").
   * @param {string} host - The host checked.
   * @returns {Promise<EmailDeliverabilityCheckResult | null>} The e-mail result, or null when the DNS could not be read.
   */
  static async readEmailVerdict(host: string): Promise<EmailDeliverabilityCheckResult | null> {
    const domain: string | null = EmailDeliverabilityCheckService.normalizeDomain(host.replace(WWW_PREFIX_REGEX, ''))

    if (!domain) {
      return null
    }
    try {
      return await EmailDeliverabilityCheckService.checkDomain(domain)
    } catch {
      return null
    }
  }

  /**
   * Asks the plain HTTP address what it does: redirect to HTTPS, serve a page in clear, or not answer at all.
   * @param {string} host - The host checked.
   * @returns {Promise<WebsiteHttpProbeOutcome>} What port 80 answered (never throws).
   */
  static async probePlainHttp(host: string): Promise<WebsiteHttpProbeOutcome> {
    try {
      const response: Response = await fetch(`http://${host}/`, {
        method: 'GET',
        redirect: 'manual',
        signal: AbortSignal.timeout(HTTP_PROBE_TIMEOUT_MS),
        headers: { 'user-agent': USER_AGENT, accept: 'text/html,*/*;q=0.5' },
      })
      const location: string | null = response.headers.get('location')
      await response.body?.cancel()

      if (response.status >= 300 && response.status < 400 && location) {
        return new URL(location, `http://${host}/`).protocol === 'https:' ? 'redirectsToHttps' : 'servesPage'
      }
      return response.status < 500 ? 'servesPage' : 'noAnswer'
    } catch {
      return 'noAnswer'
    }
  }

  /**
   * Reads what the home page markup says for the mobile, tags, legal notice and aging checks.
   * @param {string} html - The start of the home page HTML.
   * @returns {WebsiteHomePageFacts} The facts found.
   */
  static readHomePageFacts(html: string): WebsiteHomePageFacts {
    const titleMatch: RegExpExecArray | null = TITLE_REGEX.exec(html)
    const descriptionMatch: RegExpExecArray | null = DESCRIPTION_META_REGEX.exec(html)
    const description: string | null = descriptionMatch ? (descriptionMatch[1] ?? descriptionMatch[2] ?? '') : null
    const generatorMatch: RegExpExecArray | null = GENERATOR_META_REGEX.exec(html)
    const generator: string = generatorMatch ? (generatorMatch[1] ?? generatorMatch[2] ?? '') : ''
    const jqueryMatch: RegExpExecArray | null = JQUERY_FILE_REGEX.exec(html) ?? JQUERY_CDN_PATH_REGEX.exec(html)
    const jqueryMajor: number = jqueryMatch ? Number(jqueryMatch[1]) : JQUERY_MIN_MAJOR

    return {
      hasViewport: VIEWPORT_META_REGEX.test(html),
      titleLength: titleMatch ? WebsiteHealthCheckService.cleanText(titleMatch[1] ?? '').length : null,
      descriptionLength: description === null ? null : WebsiteHealthCheckService.cleanText(description).length,
      hasLegalNoticeLink: WebsiteHealthCheckService.hasLegalNoticeLink(html),
      latestCopyrightYear: WebsiteHealthCheckService.latestCopyrightYear(html),
      oldJqueryVersion:
        jqueryMatch && jqueryMajor < JQUERY_MIN_MAJOR
          ? [jqueryMatch[1], jqueryMatch[2], jqueryMatch[3]].filter(Boolean).join('.')
          : null,
      hasFlash: FLASH_REGEX.test(html),
      oldGenerator: OLD_GENERATOR_REGEXES.some((regex: RegExp): boolean => regex.test(generator))
        ? WebsiteHealthCheckService.cleanText(generator)
        : null,
    }
  }

  /**
   * Whether an anchor of the page points to a legal notice page, by its address or its text.
   * @param {string} html - The start of the home page HTML.
   * @returns {boolean} True when a legal notice link was found.
   */
  static hasLegalNoticeLink(html: string): boolean {
    const anchorRegex: RegExp = new RegExp(ANCHOR_REGEX.source, ANCHOR_REGEX.flags)
    let match: RegExpExecArray | null = anchorRegex.exec(html)

    while (match) {
      const href: string = match[1] ?? ''
      const text: string = WebsiteHealthCheckService.cleanText(match[2] ?? '')

      if (LEGAL_NOTICE_HREF_REGEX.test(href) || LEGAL_NOTICE_TEXT_REGEX.test(text)) {
        return true
      }
      match = anchorRegex.exec(html)
    }
    return false
  }

  /**
   * The most recent year written next to a copyright sign, the one a maintained footer keeps current.
   * @param {string} html - The start of the home page HTML.
   * @returns {number | null} The year, or null when no plausible copyright year was found.
   */
  static latestCopyrightYear(html: string): number | null {
    const copyrightRegex: RegExp = new RegExp(COPYRIGHT_REGEX.source, COPYRIGHT_REGEX.flags)
    const currentYear: number = new Date().getFullYear()
    let latest: number | null = null
    let match: RegExpExecArray | null = copyrightRegex.exec(html)

    while (match) {
      const year: number = Number(match[2])

      if (year >= COPYRIGHT_OLDEST_PLAUSIBLE_YEAR && year <= currentYear + 1 && (latest === null || year > latest)) {
        latest = year
      }
      match = copyrightRegex.exec(html)
    }
    return latest
  }

  /**
   * Strips tags and the common entities of a title or a description, and collapses its spaces.
   * @param {string} text - Raw HTML text.
   * @returns {string} The readable text.
   */
  static cleanText(text: string): string {
    return text.replace(HTML_TAG_REGEX, ' ').replace(HTML_ENTITY_REGEX, ' ').replace(WHITESPACE_REGEX, ' ').trim()
  }

  /**
   * HTTPS: served, and reached from the plain HTTP address.
   * @param {string} finalUrl - The address of the home page finally served.
   * @param {WebsiteHttpProbeOutcome} httpOutcome - What port 80 answered.
   * @returns {WebsiteHealthCheckItem} The check.
   */
  static buildHttpsCheck(finalUrl: string, httpOutcome: WebsiteHttpProbeOutcome): WebsiteHealthCheckItem {
    if (!finalUrl.startsWith('https://')) {
      return WebsiteHealthCheckService.buildCheckItem('https', 'critical', 'httpOnly')
    }
    if (httpOutcome === 'redirectsToHttps') {
      return WebsiteHealthCheckService.buildCheckItem('https', 'ok', 'httpsRedirects')
    }
    if (httpOutcome === 'noAnswer') {
      return WebsiteHealthCheckService.buildCheckItem('https', 'ok', 'httpsNoHttpAnswer')
    }
    return WebsiteHealthCheckService.buildCheckItem('https', 'warning', 'httpsNoRedirect')
  }

  /**
   * PHP: the verdict of the October 2026 vulnerability checker, translated into the four levels.
   * @param {PhpVulnerabilityCheckResult | null} phpResult - The PHP result, or null when it could not be read.
   * @returns {WebsiteHealthCheckItem} The check.
   */
  static buildPhpCheck(phpResult: PhpVulnerabilityCheckResult | null): WebsiteHealthCheckItem {
    const values: Record<string, string> = {
      phpVersion: phpResult?.phpVersion ?? phpResult?.phpBranch ?? '',
      fixedVersion: phpResult?.fixedVersion ?? '',
    }
    const byVerdict: Record<PhpVulnerabilityVerdict, [WebsiteHealthVerdict, WebsiteHealthDetailKey]> = {
      unpatched: ['critical', 'phpUnpatched'],
      endOfLife: ['critical', 'phpEndOfLife'],
      patched: ['ok', 'phpPatched'],
      phpHidden: ['warning', 'phpHidden'],
      notPhp: ['ok', 'phpNotPhp'],
      unknown: ['unknown', 'phpUnknown'],
    }
    const unknownOutcome: [WebsiteHealthVerdict, WebsiteHealthDetailKey] = ['unknown', 'phpUnknown']
    const [verdict, detailKey] = phpResult ? byVerdict[phpResult.verdict] : unknownOutcome

    return WebsiteHealthCheckService.buildCheckItem('php', verdict, detailKey, values)
  }

  /**
   * WordPress: the verdict of the hack checker when the site is a WordPress, "not a WordPress" otherwise.
   * @param {boolean} isWordPress - Whether WordPress or WooCommerce markers were seen on the home page.
   * @param {WordPressHackCheckResult | null} wordpressResult - The WordPress result, or null when it could not be read.
   * @returns {WebsiteHealthCheckItem} The check.
   */
  static buildWordPressCheck(
    isWordPress: boolean,
    wordpressResult: WordPressHackCheckResult | null,
  ): WebsiteHealthCheckItem {
    if (!isWordPress) {
      return WebsiteHealthCheckService.buildCheckItem('wordpress', 'ok', 'wordpressNotWordPress')
    }
    if (!wordpressResult) {
      return WebsiteHealthCheckService.buildCheckItem('wordpress', 'unknown', 'wordpressUnknown')
    }
    const values: Record<string, string> = {
      coreVersion: wordpressResult.coreVersion ?? '',
      latestCoreVersion: wordpressResult.latestCoreVersion,
      plugin: wordpressResult.plugins[0]?.name ?? wordpressResult.closedPlugins[0]?.name ?? '',
    }
    const byVerdict: Record<WordPressHackVerdict, [WebsiteHealthVerdict, WebsiteHealthDetailKey]> = {
      suspiciousSignals: ['critical', 'wordpressSuspicious'],
      vulnerablePlugin: ['critical', 'wordpressVulnerablePlugin'],
      closedPlugin: ['critical', 'wordpressClosedPlugin'],
      outdatedCore: ['warning', 'wordpressOutdatedCore'],
      cleanSurface: ['ok', 'wordpressClean'],
      notWordPress: ['ok', 'wordpressNotWordPress'],
      unknown: ['unknown', 'wordpressUnknown'],
    }
    const [verdict, detailKey] = byVerdict[wordpressResult.verdict]

    return WebsiteHealthCheckService.buildCheckItem('wordpress', verdict, detailKey, values)
  }

  /**
   * E-mails: the verdict of the SPF, DKIM and DMARC checker on the domain of the site.
   * @param {EmailDeliverabilityCheckResult | null} emailResult - The e-mail result, or null when the DNS could not be read.
   * @returns {WebsiteHealthCheckItem} The check.
   */
  static buildEmailCheck(emailResult: EmailDeliverabilityCheckResult | null): WebsiteHealthCheckItem {
    if (!emailResult) {
      return WebsiteHealthCheckService.buildCheckItem('email', 'unknown', 'emailUnknown')
    }
    const values: Record<string, string> = {
      domain: emailResult.domain,
      provider: emailResult.provider?.name ?? '',
    }
    const byVerdict: Record<EmailDeliverabilityVerdict, [WebsiteHealthVerdict, WebsiteHealthDetailKey]> = {
      allGood: ['ok', 'emailAllGood'],
      dmarcMissing: ['warning', 'emailDmarcMissing'],
      dmarcNone: ['warning', 'emailDmarcNone'],
      dkimNotFound: ['warning', 'emailDkimNotFound'],
      spfMissing: ['critical', 'emailSpfMissing'],
      spfTooPermissive: ['critical', 'emailSpfTooPermissive'],
      spfTooManyLookups: ['warning', 'emailSpfTooManyLookups'],
      multipleSpf: ['critical', 'emailMultipleSpf'],
      noMailSetup: ['ok', 'emailNoMailSetup'],
      invalidDomain: ['unknown', 'emailUnknown'],
      consumerMailbox: ['unknown', 'emailUnknown'],
    }
    const [verdict, detailKey] = byVerdict[emailResult.verdict]

    return WebsiteHealthCheckService.buildCheckItem('email', verdict, detailKey, values)
  }

  /**
   * Phone display: the viewport tag, without which a phone shows the desktop page shrunk.
   * @param {WebsiteHomePageFacts} facts - What the home page markup says.
   * @returns {WebsiteHealthCheckItem} The check.
   */
  static buildMobileCheck(facts: WebsiteHomePageFacts): WebsiteHealthCheckItem {
    return facts.hasViewport
      ? WebsiteHealthCheckService.buildCheckItem('mobile', 'ok', 'viewportPresent')
      : WebsiteHealthCheckService.buildCheckItem('mobile', 'critical', 'viewportMissing')
  }

  /**
   * Title and description of the home page: present, and of a length Google shows whole.
   * @param {WebsiteHomePageFacts} facts - What the home page markup says.
   * @returns {WebsiteHealthCheckItem} The check, on the most serious problem found.
   */
  static buildSeoTagsCheck(facts: WebsiteHomePageFacts): WebsiteHealthCheckItem {
    const values: Record<string, string> = {
      titleLength: String(facts.titleLength ?? 0),
      descriptionLength: String(facts.descriptionLength ?? 0),
    }

    if (facts.titleLength === null || facts.titleLength === 0) {
      return WebsiteHealthCheckService.buildCheckItem('seoTags', 'critical', 'titleMissing', values)
    }
    if (facts.descriptionLength === null || facts.descriptionLength === 0) {
      return WebsiteHealthCheckService.buildCheckItem('seoTags', 'warning', 'descriptionMissing', values)
    }
    if (facts.titleLength > TITLE_MAX_LENGTH) {
      return WebsiteHealthCheckService.buildCheckItem('seoTags', 'warning', 'titleTooLong', values)
    }
    if (facts.titleLength < TITLE_MIN_LENGTH) {
      return WebsiteHealthCheckService.buildCheckItem('seoTags', 'warning', 'titleTooShort', values)
    }
    if (facts.descriptionLength > DESCRIPTION_MAX_LENGTH) {
      return WebsiteHealthCheckService.buildCheckItem('seoTags', 'warning', 'descriptionTooLong', values)
    }
    if (facts.descriptionLength < DESCRIPTION_MIN_LENGTH) {
      return WebsiteHealthCheckService.buildCheckItem('seoTags', 'warning', 'descriptionTooShort', values)
    }
    return WebsiteHealthCheckService.buildCheckItem('seoTags', 'ok', 'seoTagsGood', values)
  }

  /**
   * Legal notice: a link to it on the home page, as the French law on confidence in the digital economy requires.
   * @param {WebsiteHomePageFacts} facts - What the home page markup says.
   * @returns {WebsiteHealthCheckItem} The check.
   */
  static buildLegalNoticeCheck(facts: WebsiteHomePageFacts): WebsiteHealthCheckItem {
    return facts.hasLegalNoticeLink
      ? WebsiteHealthCheckService.buildCheckItem('legalNotice', 'ok', 'legalNoticeLinkFound')
      : WebsiteHealthCheckService.buildCheckItem('legalNotice', 'warning', 'legalNoticeLinkMissing')
  }

  /**
   * Signs of a site that has aged: Flash, a generator nobody maintains, jQuery 1 or 2, an old copyright year.
   * @param {WebsiteHomePageFacts} facts - What the home page markup says.
   * @returns {WebsiteHealthCheckItem} The check, on the most telling sign found.
   */
  static buildAgingCheck(facts: WebsiteHomePageFacts): WebsiteHealthCheckItem {
    const values: Record<string, string> = {
      year: facts.latestCopyrightYear === null ? '' : String(facts.latestCopyrightYear),
      jqueryVersion: facts.oldJqueryVersion ?? '',
      generator: facts.oldGenerator ?? '',
    }

    if (facts.hasFlash) {
      return WebsiteHealthCheckService.buildCheckItem('aging', 'critical', 'agingFlash', values)
    }
    if (facts.oldGenerator) {
      return WebsiteHealthCheckService.buildCheckItem('aging', 'warning', 'agingOldGenerator', values)
    }
    if (facts.oldJqueryVersion) {
      return WebsiteHealthCheckService.buildCheckItem('aging', 'warning', 'agingOldJquery', values)
    }
    if (facts.latestCopyrightYear !== null && facts.latestCopyrightYear < COPYRIGHT_MIN_RECENT_YEAR) {
      return WebsiteHealthCheckService.buildCheckItem('aging', 'warning', 'agingOldCopyright', values)
    }
    return WebsiteHealthCheckService.buildCheckItem('aging', 'ok', 'agingNone', values)
  }

  /**
   * The overall verdict: at risk on any critical check, attention needed on any warning, healthy otherwise.
   * @param {WebsiteHealthCheckItem[]} checks - The eight checks.
   * @returns {WebsiteHealthOverallVerdict} The overall verdict.
   */
  static overallVerdictOf(checks: WebsiteHealthCheckItem[]): WebsiteHealthOverallVerdict {
    const worst: number = Math.max(
      ...checks.map((check: WebsiteHealthCheckItem): number => VERDICT_SEVERITY[check.verdict]),
    )

    if (worst === VERDICT_SEVERITY.critical) {
      return 'atRisk'
    }
    return worst === VERDICT_SEVERITY.warning ? 'needsAttention' : 'healthy'
  }

  /**
   * Builds one check.
   * @param {WebsiteHealthCheckItem['key']} key - The check.
   * @param {WebsiteHealthVerdict} verdict - Its level.
   * @param {WebsiteHealthDetailKey} detailKey - The sentence to show.
   * @param {Record<string, string>} values - The figures the sentence quotes.
   * @returns {WebsiteHealthCheckItem} The check.
   */
  static buildCheckItem(
    key: WebsiteHealthCheckItem['key'],
    verdict: WebsiteHealthVerdict,
    detailKey: WebsiteHealthDetailKey,
    values: Record<string, string> = {},
  ): WebsiteHealthCheckItem {
    return { key, verdict, detailKey, values }
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
