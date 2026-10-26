import type {
  PhpVulnerabilityPlatformKey,
  PhpVulnerabilitySignalKey,
} from '~~/server/types/tools/phpVulnerabilityCheck'
import type {
  WordPressFetchedPage,
  WordPressHackCacheEntry,
  WordPressHackCheckResult,
  WordPressHackSignalKey,
  WordPressHackVerdict,
  WordPressPluginCheck,
  WordPressPluginResult,
  WordPressPluginStatus,
  WordPressProbeOutcome,
} from '~~/server/types/tools/wordpressHackCheck'
import {
  WORDPRESS_KNOWN_BACKDOOR_PLUGIN_SLUGS,
  WORDPRESS_LATEST_CORE_VERSION,
  WORDPRESS_PLUGIN_CHECKS,
} from '~~/server/constants/wordpressPluginChecks'
import { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'

const CACHE_TTL_MS: number = 10 * 60 * 1000
const CACHE_MAX_ENTRIES: number = 500
const PROBE_TIMEOUT_MS: number = 5000
const MAX_PLUGINS_PROBED: number = 5
const MAX_EXTERNAL_DOMAINS: number = 3
const MIN_HIDDEN_EXTERNAL_LINKS: number = 3
const MAX_HIDDEN_BLOCK_LENGTH: number = 6000
const MIN_JAPANESE_CHINESE_KOREAN_CHARACTERS_IN_HEAD: number = 8
const USER_AGENT: string = 'DibodevWordPressCheck/1.0 (+https://dibodev.fr/outils/site-wordpress-pirate-verifier)'

const GENERATOR_META_REGEX: RegExp = /<meta[^>]+content=["']wordpress\s+(\d+\.\d+(?:\.\d+)?)[^"']*["'][^>]*>/i
/** Core assets versioned like WordPress itself: the libraries bundled in wp-includes, jQuery first, carry their own. */
const ASSET_VERSION_REGEX: RegExp =
  /wp-includes[\\/]+(?:css[\\/]+dist[\\/]+block-library[\\/]+(?:style|theme)|css[\\/]+(?:dashicons|admin-bar)|js[\\/]+(?:wp-emoji-release|comment-reply|wp-embed))(?:\.min)?\.(?:css|js)\?ver=(\d+\.\d+(?:\.\d+)?)/i
const FEED_VERSION_REGEX: RegExp = /wordpress\.org\/\?v=(\d+\.\d+(?:\.\d+)?)/i
const STABLE_TAG_REGEX: RegExp = /stable tag:\s*([\d.]+)/i
const README_HEADER_REGEX: RegExp = /===|stable tag/i
const LEADING_DIGIT_REGEX: RegExp = /^\d/
const WWW_PREFIX_REGEX: RegExp = /^www\./
const PLUGIN_PATH_REGEX: RegExp = /\/wp-content\/plugins\/([a-z0-9][a-z0-9_-]{1,60})\//gi
const SCRIPT_SRC_REGEX: RegExp = /<script[^>]+src=["'](?:https?:)?\/\/([^/"'\s:]+)/gi
const INLINE_SCRIPT_REGEX: RegExp = /<script\b(?![^>]*\bsrc\s*=)[^>]*>([\s\S]*?)<\/script>/gi
const HIDDEN_BLOCK_REGEX: RegExp =
  /<(div|span|p|section|ul|ol|font)\b[^>]*\bstyle\s*=\s*["'][^"']*(?:display\s*:\s*none|visibility\s*:\s*hidden|(?:left|top|text-indent)\s*:\s*-\d{3,}px|font-size\s*:\s*0(?:px)?\s*(?:;|["']))[^>]*>/gi
const LINK_HOST_REGEX: RegExp = /<a\s[^>]*href=["']https?:\/\/([^/"'\s:?#]+)/gi
const META_REFRESH_REGEX: RegExp = /<meta[^>]+http-equiv=["']refresh["'][^>]+url=["']?(https?:\/\/[^"'\s;>]+)/i
const LOCATION_CHANGE_REGEX: RegExp = /(?:location(?:\.href)?\s*=(?!=)|location\.(?:replace|assign)\s*\()/i
const VISITOR_TEST_REGEX: RegExp = /document\.referrer|navigator\.userAgent/i
const ABSOLUTE_URL_REGEX: RegExp = /https?:\/\/([a-z0-9.-]+\.[a-z]{2,})/gi
const EVAL_DECODE_REGEX: RegExp = /eval\s*\(\s*(?:atob|unescape|decodeURIComponent|String\.fromCharCode)\s*\(/i
const PHP_IN_UPLOADS_REGEX: RegExp = /wp-content\/uploads\/[^"'\s]*\.php(?:[?"'\s#]|$)/i
const CRITICAL_ERROR_REGEX: RegExp =
  /class=["']wp-die-message["']|critical error on this website|erreur critique sur (?:ce|votre) site/i
const TITLE_REGEX: RegExp = /<title[^>]*>([\s\S]{0,300}?)<\/title>/i
const DESCRIPTION_REGEX: RegExp = /<meta[^>]+name=["']description["'][^>]+content=["']([^"']{0,400})["']/i
const HTML_LANG_REGEX: RegExp = /<html[^>]+lang=["']([a-z]{2})/i
/** Whole words bounded by any letter, accented ones included, so « spécialisée » never reads as « cialis ». */
const SPAM_WORDS_REGEX: RegExp =
  /(?<![\p{L}\p{N}])(?:viagra|cialis|levitra|kamagra|online casino|casino online|casino en ligne|bonus casino|online poker|poker en ligne|slot gacor|judi online|togel|replica watches|payday loan|crypto giveaway)(?![\p{L}\p{N}])/iu
const JAPANESE_CHINESE_KOREAN_CHARACTER_REGEX: RegExp = /[぀-ヿ一-鿿가-힯]/g
const JAPANESE_CHINESE_KOREAN_LANGS: string[] = ['ja', 'zh', 'ko']

const FAMILIAR_DOMAIN_MARKERS: string[] = [
  'google',
  'goo.gl',
  'gstatic.com',
  'doubleclick.net',
  'youtube.com',
  'youtu.be',
  'ytimg.com',
  'facebook.',
  'fb.com',
  'fb.me',
  'fbcdn.net',
  'instagram.com',
  'twitter.com',
  'x.com',
  'linkedin.com',
  'licdn.com',
  'tiktok.com',
  'pinterest.',
  'pinimg.com',
  'snapchat.com',
  'threads.net',
  'wa.me',
  'whatsapp.',
  't.me',
  'cloudflare',
  'jsdelivr.net',
  'unpkg.com',
  'jquery.com',
  'bootstrapcdn.com',
  'fontawesome.com',
  'wp.com',
  'wordpress.com',
  'wordpress.org',
  'w.org',
  'gravatar.com',
  'elementor.com',
  'wpengine.com',
  'kinsta.com',
  'hotjar.com',
  'matomo',
  'plausible.io',
  'posthog.com',
  'hubspot',
  'hs-scripts.com',
  'hsforms.net',
  'mailchimp.com',
  'list-manage.com',
  'brevo.com',
  'sendinblue.com',
  'stripe.com',
  'paypal',
  'crisp.chat',
  'tawk.to',
  'intercom',
  'zdassets.com',
  'axeptio',
  'tarteaucitron',
  'cookiebot.com',
  'onetrust.com',
  'didomi.io',
  'recaptcha.net',
  'hcaptcha.com',
  'typekit.net',
  'adobe.com',
  'calendly.com',
  'cal.com',
  'doctolib.',
  'planity.',
  'vimeo.com',
  'dailymotion.com',
  'spotify.com',
  'deezer.com',
  'soundcloud.com',
  'openstreetmap.org',
  'mapbox.com',
  'leafletjs.com',
  'trustpilot.com',
  'trustindex.io',
  'tripadvisor.',
  'pagesjaunes.',
  'booking.com',
  'airbnb.',
  'leboncoin.',
  'malt.fr',
  'helloasso.',
  'linktr.ee',
  'apple.com',
  'microsoft.com',
  'bing.com',
  'clarity.ms',
  'shopify.com',
  'wix.com',
  'cloudfront.net',
  'amazonaws.com',
  'akamai',
  'ovh.',
  'o2switch.',
  'siteground.',
  'woocommerce.com',
  'wpforms.com',
  'yoast.com',
  'rankmath.com',
  'wordfence.com',
  'litespeed',
  'bunny.net',
  'b-cdn.net',
  'keycdn.com',
  'statcounter.com',
  'creativecommons.org',
  'legifrance.gouv.fr',
  'service-public.fr',
  'gouv.fr',
]

const resultCache: Map<string, WordPressHackCacheEntry> = new Map()

/** Reads a public WordPress site from outside, as a browser would, and says what a visitor can see. */
export class WordPressHackCheckService {
  /**
   * Checks a host, from the cache when it was read in the last minutes.
   * @param {string} host - A host name returned by `PhpVulnerabilityCheckService.normalizeHost`.
   * @returns {Promise<WordPressHackCheckResult>} What is visible from outside.
   * @throws {H3Error} 400 when the host is not public, 502 when the site cannot be read.
   */
  static async checkHost(host: string): Promise<WordPressHackCheckResult> {
    const now: number = Date.now()
    const cached: WordPressHackCacheEntry | undefined = resultCache.get(host)

    if (cached && cached.expiresAt > now) {
      return cached.result
    }
    await PhpVulnerabilityCheckService.assertPublicHost(host)
    const page: WordPressFetchedPage = await PhpVulnerabilityCheckService.fetchHomePage(host)
    const result: WordPressHackCheckResult = await WordPressHackCheckService.buildResult(host, page)

    if (resultCache.size >= CACHE_MAX_ENTRIES) {
      WordPressHackCheckService.pruneCache(now)
    }
    resultCache.set(host, { result, expiresAt: now + CACHE_TTL_MS })
    return result
  }

  /**
   * Builds the result from the home page, then from the public files read when the site is a WordPress.
   * @param {string} host - The host checked.
   * @param {WordPressFetchedPage} page - Final address, headers and start of the HTML of the home page.
   * @returns {Promise<WordPressHackCheckResult>} The verdict and the clues behind it.
   */
  static async buildResult(host: string, page: WordPressFetchedPage): Promise<WordPressHackCheckResult> {
    const platforms: Set<PhpVulnerabilityPlatformKey> = new Set()
    const phpSignals: Set<PhpVulnerabilitySignalKey> = new Set()
    const signals: Set<WordPressHackSignalKey> = new Set()
    const html: string = page.html
    const siteDomain: string = WordPressHackCheckService.readRegistrableDomain(new URL(page.finalUrl).hostname || host)

    PhpVulnerabilityCheckService.detectPlatformsFromHtml(html.toLowerCase(), platforms, phpSignals)
    PhpVulnerabilityCheckService.detectPlatformsFromHeaders(page.headers, platforms)
    if (page.headers.has('cf-ray')) {
      signals.add('cloudflare')
    }
    const isCriticalErrorPage: boolean = CRITICAL_ERROR_REGEX.test(html)

    if (isCriticalErrorPage) {
      platforms.add('wordpress')
      signals.add('criticalError')
    }
    const orderedPlatforms: PhpVulnerabilityPlatformKey[] = PhpVulnerabilityCheckService.orderPlatforms(platforms)
    const checkedAt: string = new Date().toISOString()

    if (!platforms.has('wordpress')) {
      return {
        host,
        finalUrl: page.finalUrl,
        verdict: orderedPlatforms.length > 0 ? 'notWordPress' : 'unknown',
        isWordPress: false,
        coreVersion: null,
        latestCoreVersion: WORDPRESS_LATEST_CORE_VERSION,
        platforms: orderedPlatforms,
        plugins: [],
        pluginsSeen: [],
        externalScriptDomains: [],
        usernamesExposed: 0,
        signals: Array.from(signals),
        checkedAt,
      }
    }
    let coreVersion: string | null = WordPressHackCheckService.readCoreVersionFromHtml(html, signals)
    const pluginsSeen: string[] = WordPressHackCheckService.readPluginsSeen(html)

    if (pluginsSeen.length > 0) {
      signals.add('pluginsSeen')
    }
    if (pluginsSeen.some((slug: string): boolean => WORDPRESS_KNOWN_BACKDOOR_PLUGIN_SLUGS.includes(slug))) {
      signals.add('knownBackdoorPlugin')
    }
    const externalScriptDomains: string[] = WordPressHackCheckService.readExternalScriptDomains(html, siteDomain)

    if (externalScriptDomains.length > 0) {
      signals.add('externalScripts')
    }
    WordPressHackCheckService.detectInjectionSignals(html, siteDomain, signals)

    const [feed, users, pluginResults]: [WordPressProbeOutcome | null, WordPressProbeOutcome, WordPressPluginResult[]] =
      await Promise.all([
        coreVersion
          ? Promise.resolve(null)
          : WordPressHackCheckService.probe(new URL('/feed/', page.finalUrl).toString()),
        WordPressHackCheckService.probe(new URL('/wp-json/wp/v2/users?per_page=10', page.finalUrl).toString()),
        WordPressHackCheckService.readWatchedPlugins(page.finalUrl, pluginsSeen),
      ])
    const feedVersion: string | null = feed?.ok ? (FEED_VERSION_REGEX.exec(feed.body)?.[1] ?? null) : null

    if (!coreVersion && feedVersion) {
      coreVersion = feedVersion
      signals.add('feedVersion')
    }
    const usernamesExposed: number = WordPressHackCheckService.countExposedUsers(users)

    if (usernamesExposed > 0) {
      signals.add('usersExposed')
    }
    const isCoreOutdated: boolean =
      coreVersion !== null && WordPressHackCheckService.compareVersions(coreVersion, WORDPRESS_LATEST_CORE_VERSION) < 0

    if (isCoreOutdated) {
      signals.add('coreOutdated')
    }
    return {
      host,
      finalUrl: page.finalUrl,
      verdict: WordPressHackCheckService.decideVerdict(signals, pluginResults, isCoreOutdated),
      isWordPress: true,
      coreVersion,
      latestCoreVersion: WORDPRESS_LATEST_CORE_VERSION,
      platforms: orderedPlatforms,
      plugins: pluginResults,
      pluginsSeen,
      externalScriptDomains,
      usernamesExposed,
      signals: Array.from(signals),
      checkedAt,
    }
  }

  /**
   * Decides the verdict: an injection sign wins, then a vulnerable extension, then an outdated core.
   * @param {Set<WordPressHackSignalKey>} signals - The signals found.
   * @param {WordPressPluginResult[]} plugins - The watched extensions read on the site.
   * @param {boolean} isCoreOutdated - Whether the core is older than the last release.
   * @returns {WordPressHackVerdict} The verdict.
   */
  static decideVerdict(
    signals: Set<WordPressHackSignalKey>,
    plugins: WordPressPluginResult[],
    isCoreOutdated: boolean,
  ): WordPressHackVerdict {
    const injectionSignals: WordPressHackSignalKey[] = [
      'hiddenLinks',
      'redirectScript',
      'obfuscatedScript',
      'spamKeywords',
      'phpInUploads',
      'knownBackdoorPlugin',
      'criticalError',
    ]

    if (injectionSignals.some((signal: WordPressHackSignalKey): boolean => signals.has(signal))) {
      return 'suspiciousSignals'
    }
    if (plugins.some((plugin: WordPressPluginResult): boolean => plugin.status === 'vulnerable')) {
      return 'vulnerablePlugin'
    }
    if (isCoreOutdated) {
      return 'outdatedCore'
    }
    return 'cleanSurface'
  }

  /**
   * Reads the WordPress version announced by the home page: the generator meta, else the `?ver=` of a core asset.
   * @param {string} html - The home page.
   * @param {Set<WordPressHackSignalKey>} signals - Receives the signal of the clue used.
   * @returns {string | null} The version, or null when the page hides it.
   */
  static readCoreVersionFromHtml(html: string, signals: Set<WordPressHackSignalKey>): string | null {
    const generator: RegExpExecArray | null = GENERATOR_META_REGEX.exec(html)

    if (generator?.[1]) {
      signals.add('generatorMeta')
      return generator[1]
    }
    const asset: RegExpExecArray | null = ASSET_VERSION_REGEX.exec(html)

    if (asset?.[1]) {
      signals.add('assetVersion')
      return asset[1]
    }
    return null
  }

  /**
   * Lists the extension folders referenced by the home page, each once.
   * @param {string} html - The home page.
   * @returns {string[]} The extension slugs, lowercase.
   */
  static readPluginsSeen(html: string): string[] {
    const slugs: Set<string> = new Set()

    for (const match of html.matchAll(PLUGIN_PATH_REGEX)) {
      slugs.add((match[1] ?? '').toLowerCase())
    }
    return Array.from(slugs)
  }

  /**
   * Lists the domains, other than the site and the usual services, from which the home page loads scripts.
   * @param {string} html - The home page.
   * @param {string} siteDomain - The registrable domain of the site.
   * @returns {string[]} At most a few domains, for the visitor to review.
   */
  static readExternalScriptDomains(html: string, siteDomain: string): string[] {
    const domains: Set<string> = new Set()

    for (const match of html.matchAll(SCRIPT_SRC_REGEX)) {
      const domain: string = (match[1] ?? '').toLowerCase()

      if (domain && !WordPressHackCheckService.isFamiliarDomain(domain, siteDomain)) {
        domains.add(domain)
      }
    }
    return Array.from(domains).slice(0, MAX_EXTERNAL_DOMAINS)
  }

  /**
   * Adds the signs of an injection visible in the home page (hidden links, redirection, encoded script, spam, PHP).
   * @param {string} html - The home page.
   * @param {string} siteDomain - The registrable domain of the site.
   * @param {Set<WordPressHackSignalKey>} signals - Receives the signs found.
   * @returns {void}
   */
  static detectInjectionSignals(html: string, siteDomain: string, signals: Set<WordPressHackSignalKey>): void {
    if (WordPressHackCheckService.countHiddenExternalLinks(html, siteDomain) >= MIN_HIDDEN_EXTERNAL_LINKS) {
      signals.add('hiddenLinks')
    }
    if (WordPressHackCheckService.hasRedirectElsewhere(html, siteDomain)) {
      signals.add('redirectScript')
    }
    for (const match of html.matchAll(INLINE_SCRIPT_REGEX)) {
      if (EVAL_DECODE_REGEX.test(match[1] ?? '')) {
        signals.add('obfuscatedScript')
        break
      }
    }
    if (WordPressHackCheckService.hasSpamInHead(html)) {
      signals.add('spamKeywords')
    }
    if (PHP_IN_UPLOADS_REGEX.test(html)) {
      signals.add('phpInUploads')
    }
  }

  /**
   * Counts the links to unknown domains placed inside blocks hidden by their own inline style.
   * @param {string} html - The home page.
   * @param {string} siteDomain - The registrable domain of the site.
   * @returns {number} The number of hidden links that point outside the site and the usual services.
   */
  static countHiddenExternalLinks(html: string, siteDomain: string): number {
    const lowerHtml: string = html.toLowerCase()
    let count: number = 0

    for (const match of html.matchAll(HIDDEN_BLOCK_REGEX)) {
      const tagName: string = (match[1] ?? 'div').toLowerCase()
      const start: number = (match.index ?? 0) + match[0].length
      const closing: number = lowerHtml.indexOf(`</${tagName}>`, start)
      const end: number =
        closing === -1 ? start + MAX_HIDDEN_BLOCK_LENGTH : Math.min(closing, start + MAX_HIDDEN_BLOCK_LENGTH)
      const block: string = html.slice(start, end)

      for (const link of block.matchAll(LINK_HOST_REGEX)) {
        if (!WordPressHackCheckService.isFamiliarDomain((link[1] ?? '').toLowerCase(), siteDomain)) {
          count += 1
        }
      }
    }
    return count
  }

  /**
   * Whether the page sends visitors elsewhere: a meta refresh, or a script that tests the referrer or the device first.
   * @param {string} html - The home page.
   * @param {string} siteDomain - The registrable domain of the site.
   * @returns {boolean} True when such a redirection is found.
   */
  static hasRedirectElsewhere(html: string, siteDomain: string): boolean {
    const refreshTarget: string | undefined = META_REFRESH_REGEX.exec(html)?.[1]

    if (refreshTarget && !WordPressHackCheckService.targetsDomain(refreshTarget, siteDomain)) {
      return true
    }
    for (const match of html.matchAll(INLINE_SCRIPT_REGEX)) {
      const script: string = match[1] ?? ''

      if (!LOCATION_CHANGE_REGEX.test(script) || !VISITOR_TEST_REGEX.test(script)) {
        continue
      }
      const pointsElsewhere: boolean = Array.from(script.matchAll(ABSOLUTE_URL_REGEX)).some(
        (url: RegExpMatchArray): boolean =>
          !WordPressHackCheckService.isFamiliarDomain((url[1] ?? '').toLowerCase(), siteDomain),
      )

      if (pointsElsewhere) {
        return true
      }
    }
    return false
  }

  /**
   * Whether the title or the description carry spam words, or Japanese, Chinese or Korean text on a page in another language.
   * @param {string} html - The home page.
   * @returns {boolean} True when the head looks like a spam injection.
   */
  static hasSpamInHead(html: string): boolean {
    const title: string = TITLE_REGEX.exec(html)?.[1] ?? ''
    const description: string = DESCRIPTION_REGEX.exec(html)?.[1] ?? ''
    const headText: string = `${title} ${description}`
    const lang: string = (HTML_LANG_REGEX.exec(html)?.[1] ?? '').toLowerCase()
    const foreignCharacters: number = (headText.match(JAPANESE_CHINESE_KOREAN_CHARACTER_REGEX) ?? []).length
    const hasForeignScript: boolean =
      foreignCharacters >= MIN_JAPANESE_CHINESE_KOREAN_CHARACTERS_IN_HEAD &&
      !JAPANESE_CHINESE_KOREAN_LANGS.includes(lang)

    return SPAM_WORDS_REGEX.test(headText) || hasForeignScript
  }

  /**
   * Reads the `readme.txt` of the watched extensions: those seen on the home page, and those read every time.
   * @param {string} finalUrl - The address of the home page finally served.
   * @param {string[]} pluginsSeen - The extension slugs referenced by the home page.
   * @returns {Promise<WordPressPluginResult[]>} The watched extensions found on the site, with their status.
   */
  static async readWatchedPlugins(finalUrl: string, pluginsSeen: string[]): Promise<WordPressPluginResult[]> {
    const toProbe: WordPressPluginCheck[] = WORDPRESS_PLUGIN_CHECKS.filter(
      (check: WordPressPluginCheck): boolean => check.isCheckedOnEverySite || pluginsSeen.includes(check.slug),
    ).slice(0, MAX_PLUGINS_PROBED)
    const outcomes: WordPressProbeOutcome[] = await Promise.all(
      toProbe.map(
        (check: WordPressPluginCheck): Promise<WordPressProbeOutcome> =>
          WordPressHackCheckService.probe(new URL(`/wp-content/plugins/${check.slug}/readme.txt`, finalUrl).toString()),
      ),
    )
    const results: WordPressPluginResult[] = []

    toProbe.forEach((check: WordPressPluginCheck, index: number): void => {
      const readme: string | null = WordPressHackCheckService.readmeBody(outcomes[index])

      if (readme === null && !pluginsSeen.includes(check.slug)) {
        return
      }
      const versionFound: string | null = readme === null ? null : (STABLE_TAG_REGEX.exec(readme)?.[1] ?? null)
      const fixedVersion: string = WordPressHackCheckService.pickFixedVersionOfSameLine(
        versionFound,
        check.fixedVersionPerMajorLine,
      )

      results.push({
        slug: check.slug,
        name: check.name,
        versionFound,
        fixedVersion,
        advisoryUrl: check.advisoryUrl,
        advisoryDate: check.advisoryDate,
        status: WordPressHackCheckService.decidePluginStatus(versionFound, fixedVersion),
      })
    })
    return results
  }

  /**
   * Returns the body of an extension readme when the probe found one (a 200 that looks like a WordPress readme).
   * @param {WordPressProbeOutcome | undefined} outcome - The answer of `/wp-content/plugins/<slug>/readme.txt`.
   * @returns {string | null} The readme text, or null when the extension was not found.
   */
  static readmeBody(outcome: WordPressProbeOutcome | undefined): string | null {
    if (!outcome?.ok || !README_HEADER_REGEX.test(outcome.body)) {
      return null
    }
    return outcome.body
  }

  /**
   * Picks the fixed version of the same major line as the version read (free and paid editions differ), else the first.
   * @param {string | null} versionFound - The version read on the site.
   * @param {string[]} fixedVersions - The fixed versions, one per major line.
   * @returns {string} The fixed version to compare with.
   */
  static pickFixedVersionOfSameLine(versionFound: string | null, fixedVersions: string[]): string {
    const major: string | undefined = versionFound?.split('.')[0]
    const sameLine: string | undefined = fixedVersions.find(
      (fixed: string): boolean => major !== undefined && fixed.split('.')[0] === major,
    )

    return sameLine ?? fixedVersions[0] ?? ''
  }

  /**
   * Status of a watched extension from the version read.
   * @param {string | null} versionFound - The stable tag read, when the readme was readable.
   * @param {string} fixedVersion - The version that fixes the last known vulnerability.
   * @returns {WordPressPluginStatus} The status.
   */
  static decidePluginStatus(versionFound: string | null, fixedVersion: string): WordPressPluginStatus {
    if (!versionFound || !LEADING_DIGIT_REGEX.test(versionFound)) {
      return 'unknownVersion'
    }
    return WordPressHackCheckService.compareVersions(versionFound, fixedVersion) < 0 ? 'vulnerable' : 'fixed'
  }

  /**
   * Counts the user names the REST route exposes publicly (a JSON list with a `slug` per user).
   * @param {WordPressProbeOutcome} usersRouteAnswer - The answer of `/wp-json/wp/v2/users`.
   * @returns {number} The number of users listed, 0 when the route is closed or empty.
   */
  static countExposedUsers(usersRouteAnswer: WordPressProbeOutcome): number {
    if (!usersRouteAnswer.ok) {
      return 0
    }
    try {
      const parsed: unknown = JSON.parse(usersRouteAnswer.body)

      if (!Array.isArray(parsed)) {
        return 0
      }
      return parsed.filter((entry: unknown): boolean => typeof entry === 'object' && entry !== null && 'slug' in entry)
        .length
    } catch {
      return 0
    }
  }

  /**
   * Compares two dotted versions number by number (`1.26.9` vs `1.26.13`); a missing number counts as 0.
   * @param {string} left - A version.
   * @param {string} right - Another version.
   * @returns {number} Negative when left is older, 0 when equal, positive when newer.
   */
  static compareVersions(left: string, right: string): number {
    const leftParts: number[] = left.split('.').map((part: string): number => Number.parseInt(part, 10) || 0)
    const rightParts: number[] = right.split('.').map((part: string): number => Number.parseInt(part, 10) || 0)
    const length: number = Math.max(leftParts.length, rightParts.length)

    for (let index: number = 0; index < length; index += 1) {
      const difference: number = (leftParts[index] ?? 0) - (rightParts[index] ?? 0)

      if (difference !== 0) {
        return difference
      }
    }
    return 0
  }

  /**
   * Reads a small public file of the site, without following redirects off the site; never throws.
   * @param {string} url - The address to read.
   * @returns {Promise<WordPressProbeOutcome>} Whether it answered 200, its status and the start of its body.
   */
  static async probe(url: string): Promise<WordPressProbeOutcome> {
    try {
      const response: Response = await fetch(url, {
        method: 'GET',
        redirect: 'manual',
        signal: AbortSignal.timeout(PROBE_TIMEOUT_MS),
        headers: {
          'user-agent': USER_AGENT,
          accept: 'text/plain,text/html,application/rss+xml,application/json;q=0.9,*/*;q=0.5',
        },
      })
      const body: string = await PhpVulnerabilityCheckService.readBodyStart(response)

      return { ok: response.status === 200, status: response.status, body }
    } catch {
      return { ok: false, status: 0, body: '' }
    }
  }

  /**
   * Whether a domain is the site itself or one of the usual services (social networks, maps, payments, CDNs).
   * @param {string} domain - A host name, lowercase.
   * @param {string} siteDomain - The registrable domain of the site.
   * @returns {boolean} True when the domain is not worth flagging.
   */
  static isFamiliarDomain(domain: string, siteDomain: string): boolean {
    if (!domain || domain.endsWith(siteDomain)) {
      return true
    }
    return FAMILIAR_DOMAIN_MARKERS.some((marker: string): boolean => domain.includes(marker))
  }

  /**
   * The last two labels of a host (`monentreprise.fr`), enough to tell the site from the outside world.
   * @param {string} host - A host name.
   * @returns {string} The registrable part, lowercase.
   */
  static readRegistrableDomain(host: string): string {
    return host.toLowerCase().replace(WWW_PREFIX_REGEX, '').split('.').slice(-2).join('.')
  }

  /**
   * Whether an absolute address points to the site itself.
   * @param {string} target - An absolute http(s) address.
   * @param {string} siteDomain - The registrable domain of the site.
   * @returns {boolean} True when the address stays on the site.
   */
  static targetsDomain(target: string, siteDomain: string): boolean {
    try {
      return new URL(target).hostname.toLowerCase().endsWith(siteDomain)
    } catch {
      return true
    }
  }

  /**
   * Drops the expired entries of the result cache, or everything when the cache is still full.
   * @param {number} now - The current time.
   * @returns {void}
   */
  static pruneCache(now: number): void {
    for (const [key, entry] of resultCache) {
      if (entry.expiresAt <= now) {
        resultCache.delete(key)
      }
    }
    if (resultCache.size >= CACHE_MAX_ENTRIES) {
      resultCache.clear()
    }
  }
}
