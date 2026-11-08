import type {
  GdprConsentToolFinding,
  GdprConsentToolKey,
  GdprConsentToolSignature,
  GdprCookieCacheEntry,
  GdprCookieCheckResult,
  GdprCookieCheckVerdict,
  GdprGoogleConsentDefaults,
  GdprLinkDetailKey,
  GdprLinkElement,
  GdprLinkFinding,
  GdprLinkKey,
  GdprLinkStatus,
  GdprScriptElement,
  GdprTrackerConcern,
  GdprTrackerFinding,
  GdprTrackerKey,
  GdprTrackerLoading,
  GdprTrackerSignature,
} from '~~/server/types/tools/gdprCookieCheck'
import type { WebsiteHealthVerdict } from '~~/server/types/tools/websiteHealthCheck'
import { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'
import { WebsiteHealthCheckService } from '~~/server/services/WebsiteHealthCheckService'

const CACHE_TTL_MS: number = 10 * 60 * 1000
const CACHE_MAX_ENTRIES: number = 500
const MIN_LINKS_OF_A_READABLE_PAGE: number = 3

/** Structural signatures only (addresses, loader calls): a page that merely names a service must not match. */
const TRACKER_SIGNATURES: GdprTrackerSignature[] = [
  {
    key: 'googleAnalytics',
    concern: 'consentRequired',
    patterns: [
      /googletagmanager\.com\/gtag\/js\?id=(?:g|gt|ua)-/i,
      /gtag\(\s*['"]config['"]\s*,\s*['"](?:g|ua)-/i,
      /google-analytics\.com\/(?:analytics|ga|urchin)\.js/i,
      /\bga\(\s*['"]create['"]/i,
      /_gaq\.push/i,
    ],
  },
  {
    key: 'googleAds',
    concern: 'consentRequired',
    patterns: [
      /googletagmanager\.com\/gtag\/js\?id=(?:aw|dc)-/i,
      /gtag\(\s*['"]config['"]\s*,\s*['"](?:aw|dc)-/i,
      /googleadservices\.com\/pagead\//i,
      /googleads\.g\.doubleclick\.net/i,
      /pagead2\.googlesyndication\.com/i,
      /securepubads\.g\.doubleclick\.net/i,
    ],
  },
  {
    key: 'googleTagManager',
    concern: 'toCheck',
    patterns: [/googletagmanager\.com\/gtm\.js/i, /['"]gtm\.start['"]/i],
  },
  {
    key: 'metaPixel',
    concern: 'consentRequired',
    patterns: [/connect\.facebook\.net\/[\w-]+\/fbevents\.js/i, /fbq\(\s*['"]init['"]/i, /facebook\.com\/tr\?/i],
  },
  {
    key: 'hotjar',
    concern: 'consentRequired',
    patterns: [/(?:static|script)\.hotjar\.com/i, /_hjsettings/i],
  },
  {
    key: 'microsoftClarity',
    concern: 'consentRequired',
    patterns: [/clarity\.ms\/tag\//i],
  },
  {
    key: 'linkedInInsight',
    concern: 'consentRequired',
    patterns: [/snap\.licdn\.com\/li\.lms-analytics/i, /_linkedin_partner_id/i, /px\.ads\.linkedin\.com/i],
  },
  {
    key: 'tiktokPixel',
    concern: 'consentRequired',
    patterns: [/analytics\.tiktok\.com\/i18n\/pixel/i, /\bttq\.load\(/i],
  },
  {
    key: 'pinterestTag',
    concern: 'consentRequired',
    patterns: [/s\.pinimg\.com\/ct\/core\.js/i, /pintrk\(\s*['"]load['"]/i, /ct\.pinterest\.com\/v3/i],
  },
  {
    key: 'matomo',
    concern: 'toCheck',
    patterns: [/\b(?:matomo|piwik)\.js/i, /_paq\.push/i, /cdn\.matomo\.cloud/i, /_mtm\.push/i],
  },
  {
    key: 'youtube',
    concern: 'consentRequired',
    patterns: [/(?:^|[/.])youtube\.com\/(?:embed|iframe_api|player_api)/i],
  },
  {
    key: 'youtubeNoCookie',
    concern: 'toCheck',
    patterns: [/youtube-nocookie\.com\/embed/i],
  },
  {
    key: 'googleMaps',
    concern: 'toCheck',
    patterns: [
      /google\.[a-z.]+\/maps\/(?:d\/(?:u\/\d+\/)?)?embed/i,
      /maps\.google\.[a-z.]+\/maps/i,
      /maps\.googleapis\.com\/maps\/api\/js/i,
    ],
  },
  {
    key: 'recaptcha',
    concern: 'toCheck',
    patterns: [/(?:google\.com|recaptcha\.net)\/recaptcha\/(?:api|enterprise)\.js/i, /gstatic\.com\/recaptcha\//i],
  },
]

const CONSENT_TOOL_SIGNATURES: GdprConsentToolSignature[] = [
  { key: 'axeptio', patterns: [/static\.axept\.io/i, /axeptiosettings/i] },
  { key: 'didomi', patterns: [/sdk\.privacy-center\.org/i, /didomiconfig/i] },
  {
    key: 'tarteaucitron',
    patterns: [/tarteaucitron(?:\.min)?\.js/i, /tarteaucitron\.io\/load\.js/i, /tarteaucitron\.init\s*\(/i],
  },
  { key: 'cookiebot', patterns: [/consent\.cookiebot\.(?:com|eu)/i] },
  { key: 'cookieyes', patterns: [/cdn-cookieyes\.com/i, /\/plugins\/cookie-law-info\//i] },
  {
    key: 'complianz',
    patterns: [
      /\/plugins\/complianz-gdpr(?:-premium)?\//i,
      /\bcmplz_(?:banner|categories|cookiebanner)/i,
      /var complianz\s*=/i,
    ],
  },
  { key: 'oneTrust', patterns: [/cdn\.cookielaw\.org/i, /otsdkstub\.js/i, /cookiepro\.com/i] },
  { key: 'iubenda', patterns: [/cdn\.iubenda\.com\/cs\//i, /cs\.iubenda\.com/i, /_iub\.csconfiguration/i] },
  { key: 'usercentrics', patterns: [/(?:app|web\.cmp|privacy-proxy)\.usercentrics\.eu/i] },
  { key: 'sirdata', patterns: [/(?:cache|choices)\.consentframework\.com/i] },
  { key: 'appConsent', patterns: [/cdn\.appconsent\.io/i] },
  { key: 'klaro', patterns: [/klaro(?:-no-css)?(?:\.min)?\.js/i, /klaroconfig/i] },
  { key: 'cookieFirst', patterns: [/consent\.cookiefirst\.com/i] },
  { key: 'termly', patterns: [/app\.termly\.io/i] },
  { key: 'borlabs', patterns: [/\/plugins\/borlabs-cookie\//i, /borlabscookieconfig/i] },
  { key: 'realCookieBanner', patterns: [/\/plugins\/real-cookie-banner(?:-pro)?\//i, /realcookiebanner/i] },
  { key: 'commandersAct', patterns: [/trustcommander\.net/i] },
  { key: 'consentManager', patterns: [/(?:cdn|delivery)\.consentmanager\.net/i] },
  { key: 'quantcast', patterns: [/cmp\.quantcast\.com/i, /quantcast\.mgr\.consensu\.org/i] },
  { key: 'cookieScript', patterns: [/cdn\.cookie-script\.com/i] },
  { key: 'gdprCookieCompliance', patterns: [/\/plugins\/gdpr-cookie-compliance\//i, /moove_gdpr/i] },
  { key: 'cookieNotice', patterns: [/\/plugins\/cookie-notice\//i, /\bcnargs\b/i] },
  { key: 'googleConsentMessages', patterns: [/fundingchoicesmessages\.google\.com/i] },
  {
    key: 'cookieConsentLibrary',
    patterns: [/cookieconsent(?:\.umd|\.min)?\.js/i, /cookieconsent\.(?:run|initialise)\s*\(/i],
  },
]

const CONSENT_AUTO_BLOCKING_REGEX: RegExp =
  /data-blockingmode\s*=\s*["']?auto|iubenda\.com\/autoblocking\/|uc-block\.bundle\.js/i

const COMMENT_REGEX: RegExp = /<!--[\s\S]*?-->/g
const SCRIPT_ELEMENT_REGEX: RegExp = /<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi
const INERT_BLOCK_REGEX: RegExp = /<(script|noscript|style|template)\b[^>]*>[\s\S]*?<\/\1\s*>/gi
const FRAME_TAG_REGEX: RegExp = /<(?:iframe|embed|object)\b([^>]*)>/gi
const IMAGE_TAG_REGEX: RegExp = /<img\b([^>]*)>/gi
const PLACEHOLDER_TAG_REGEX: RegExp = /<(?!iframe\b|embed\b|object\b|img\b|a\b|meta\b|link\b)[a-z][\w-]*\b([^>]*)>/gi
const PLACEHOLDER_TRACKERS: GdprTrackerKey[] = ['youtube', 'youtubeNoCookie', 'googleMaps']
const INLINE_EMBED_LOADER_REGEX: RegExp =
  /youtube\.com\/(?:iframe_api|player_api)|maps\.googleapis\.com\/maps\/api\/js/i
const ANCHOR_HREF_REGEX: RegExp = /<a\s[^>]*href\s*=/gi
const LINK_OR_BUTTON_REGEX: RegExp = /<(a|button)\b([^>]*)>([\s\S]{0,400}?)<\/\1\s*>/gi
const BODY_END_REGEX: RegExp = /<\/body\s*>/i
const TYPE_ATTRIBUTE_REGEX: RegExp = /(?:^|\s)type\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+))/i
const SRC_ATTRIBUTE_REGEX: RegExp = /(?:^|\s)src\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+))/i
const HREF_ATTRIBUTE_REGEX: RegExp = /(?:^|\s)href\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+))/i
const DATA_URI_REGEX: RegExp = /^data:[^,]*?(;base64)?,([\s\S]*)$/i

/** Types the browser runs, or runs later without asking: WP Rocket, LiteSpeed, Perfmatters, Hummingbird, Flying Scripts and Cloudflare Rocket Loader delay scripts until a scroll or a click, not until consent. */
const EXECUTABLE_SCRIPT_TYPE_REGEX: RegExp =
  /javascript|ecmascript|jscript|livescript|^module$|rocketlazyloadscript|rocketscript|pmdelayedscript|wphb-delay-type|flying-scripts/i
const DELAYED_SCRIPT_TYPE_REGEX: RegExp =
  /rocketlazyloadscript|rocketscript|pmdelayedscript|wphb-delay-type|flying-scripts|litespeed/i
const DATA_SCRIPT_TYPE_REGEX: RegExp = /json|importmap|speculationrules/i
const CONSENT_HELD_TYPE_REGEX: RegExp = /^text\/plain$|didomi|^text\/template$/i
const CONSENT_ATTRIBUTE_REGEX: RegExp =
  /(?:^|\s)(?:data-[\w-]*(?:consent|cookie|categor|cmplz|usercentrics|didomi|borlabs|vendor|purpose|requires|service)[\w-]*|consent-[\w-]+)(?=[\s=/>]|$)|class\s*=\s*["'][^"']*(?:optanon-category|_iub_cs|cmplz|cookieconsent|cky-)/i
const KLARO_HELD_SCRIPT_ATTRIBUTE_REGEX: RegExp = /(?:^|\s)data-name\s*=/i
const CONSENT_TOOL_CALL_REGEX: RegExp =
  /tarteaucitron\.(?:job|user|services)|_axcb|axeptio|cookiebot\.consent|cookiebotonaccept|cookiebotonconsentready|didomionready|didomieventlisteners|didomi\.getuserstatus|onetrustactivegroups|optanonactivegroups|optanonwrapper|getckyconsent|cookieyes_consent_update|cmplz_|complianz|_iub\.csconfiguration|uc_ui|usercentrics|klaro|__tcfapi\s*\(\s*['"]addeventlistener|borlabscookie|cookieconsent\.(?:acceptedcategory|run|initialise)|consent[_-]?given|has[_-]?consent|cookies?[_-]?accepted/i
const MATOMO_REQUIRE_CONSENT_REGEX: RegExp = /_paq\.push\(\s*\[\s*['"]require(?:cookie)?consent['"]/i
const GOOGLE_CONSENT_DEFAULT_REGEX: RegExp =
  /(?:gtag|datalayer\.push)\(\s*\[?\s*['"]consent['"]\s*,\s*['"]default['"]|googleconsentmode/i
const ANALYTICS_STORAGE_DENIED_REGEX: RegExp = /['"]?analytics_storage['"]?\s*:\s*['"]denied['"]/i
const AD_STORAGE_DENIED_REGEX: RegExp = /['"]?ad_storage['"]?\s*:\s*['"]denied['"]/i
const GOOGLE_ANALYTICS_STORAGE_TRACKERS: GdprTrackerKey[] = ['googleAnalytics', 'googleTagManager']
const GOOGLE_AD_STORAGE_TRACKERS: GdprTrackerKey[] = ['googleAds', 'googleTagManager']

const CHALLENGE_PAGE_REGEX: RegExp =
  /<title>\s*(?:just a moment|attention required|access denied|403 forbidden|un instant)|cf-browser-verification|cf_chl_opt|sucuri_cloudproxy_js|sgcaptcha|captcha-delivery\.com|ddos-guard/i

const PRIVACY_HREF_REGEX: RegExp =
  /confidentialit|privacy|privacidad|datenschutz|donn(?:e|%c3%a9|é)es[-_]personnelles|protection[-_](?:des[-_])?donn|vie[-_]priv|rgpd|gdpr|proteccion[-_]de[-_]datos/i
const PRIVACY_TEXT_REGEX: RegExp =
  /confidentialit|donn[ée]es personnelles|protection des donn[ée]es|vie priv[ée]e|\brgpd\b|\bgdpr\b|privacy|privacidad|protecci[óo]n de datos|datenschutz/i
const COOKIE_SETTINGS_ATTRIBUTE_REGEX: RegExp =
  /tarteaucitron|didomi\.preferences|cookiebot\.(?:renew|show)|axeptio|ot-sdk-show-settings|optanon-show-settings|onetrust|cmplz-manage-consent|cmplz-show-banner|cky-btn-revisit|cky-banner-element|iubenda-cs-preferences-link|uc_ui|showsecondlayer|klaro\.show|borlabs-cookie-preference|cookie-settings|cookie-preferences|manage-cookies|cookies-settings/i
const COOKIE_SETTINGS_TEXT_REGEX: RegExp =
  /g[ée]rer (?:mes |les |vos )?cookies|gestion des cookies|param[èe]tr\w* (?:des |les |vos )?cookies|pr[ée]f[ée]rences (?:de |des |en mati[èe]re de )?cookies|politique (?:de |des |relative aux |d['’]utilisation des )?cookies|cookies? (?:settings|preferences|policy)|manage cookies|configuraci[óo]n de cookies|pol[íi]tica de cookies|gestionar (?:las )?cookies|modifier mes choix|^cookies$/i
const EXTERNAL_POLICY_HREF_REGEX: RegExp =
  /^(?:https?:)?\/\/(?:[\w-]+\.)*(?:google|gstatic|facebook|youtube|twitter|x|linkedin|instagram|tiktok|pinterest|microsoft|apple|cookieyes|cookiebot|axeptio|didomi|tarteaucitron|complianz|onetrust|usercentrics)\.[a-z.]+(?:\/|$)/i
const HTML_TAG_REGEX: RegExp = /<[^>]+>/g
const WHITESPACE_REGEX: RegExp = /\s+/g
const HTML_ENTITY_REGEX: RegExp = /&(?:#(\d+)|#x([\da-f]+)|(\w+));/gi
const MAX_CODE_POINT: number = 0x10ffff
const NAMED_ENTITIES: Record<string, string> = {
  amp: '&',
  nbsp: ' ',
  eacute: 'é',
  egrave: 'è',
  ecirc: 'ê',
  agrave: 'à',
  ccedil: 'ç',
  oacute: 'ó',
  iacute: 'í',
  rsquo: '’',
  apos: '’',
  quot: '"',
}

const TARTEAUCITRON_JOB_REGEX: RegExp =
  /tarteaucitron\.job\s*(?:=\s*tarteaucitron\.job\s*\|\|\s*\[\]\s*\))?\s*\.push\(\s*['"]([\w-]+)['"]/gi
const TARTEAUCITRON_SERVICE_TRACKERS: Record<string, GdprTrackerKey> = {
  gtag: 'googleAnalytics',
  analytics: 'googleAnalytics',
  gajs: 'googleAnalytics',
  multiplegtag: 'googleAnalytics',
  googletagmanager: 'googleTagManager',
  googleads: 'googleAds',
  adsense: 'googleAds',
  facebookpixel: 'metaPixel',
  hotjar: 'hotjar',
  clarity: 'microsoftClarity',
  linkedininsighttag: 'linkedInInsight',
  tiktok: 'tiktokPixel',
  pinterestpixel: 'pinterestTag',
  matomo: 'matomo',
  matomocloud: 'matomo',
  youtube: 'youtube',
  youtubeapi: 'youtube',
  googlemaps: 'googleMaps',
  googlemapssearch: 'googleMaps',
  recaptcha: 'recaptcha',
}

const LOADING_RANK: Record<GdprTrackerLoading, number> = {
  waitingForConsent: 0,
  googleConsentModeDenied: 1,
  loadedOnClick: 2,
  loadedDirectly: 3,
}

const resultCache: Map<string, GdprCookieCacheEntry> = new Map()

/**
 * Reads a public home page without running its JavaScript and lists its trackers, its consent tool and its legal links.
 */
export class GdprCookieCheckService {
  /**
   * Checks a host, from the cache when it was read in the last minutes.
   * @param {string} host - A host name returned by `PhpVulnerabilityCheckService.normalizeHost`.
   * @returns {Promise<GdprCookieCheckResult>} The trackers, the consent tool, the links and the verdict.
   * @throws {H3Error} 400 when the host is not public, 502 when the site cannot be read.
   */
  static async checkHost(host: string): Promise<GdprCookieCheckResult> {
    const now: number = Date.now()
    const cached: GdprCookieCacheEntry | undefined = resultCache.get(host)

    if (cached && cached.expiresAt > now) {
      return cached.result
    }
    await PhpVulnerabilityCheckService.assertPublicHost(host)
    const page: { finalUrl: string; html: string } = await PhpVulnerabilityCheckService.fetchHomePage(host)
    const result: GdprCookieCheckResult = GdprCookieCheckService.analyzeHomePage(
      host,
      page.finalUrl,
      page.html,
      new Date(now),
    )

    if (resultCache.size >= CACHE_MAX_ENTRIES) {
      GdprCookieCheckService.pruneCache(now)
    }
    resultCache.set(host, { result, expiresAt: now + CACHE_TTL_MS })
    return result
  }

  /**
   * Analyses the markup of a home page already read.
   * @param {string} host - The host checked.
   * @param {string} finalUrl - The address finally served.
   * @param {string} html - The start of the home page HTML.
   * @param {Date} checkedAt - When the page was read.
   * @returns {GdprCookieCheckResult} The trackers, the consent tool, the links and the verdict.
   */
  static analyzeHomePage(host: string, finalUrl: string, html: string, checkedAt: Date): GdprCookieCheckResult {
    const withoutComments: string = html.replace(COMMENT_REGEX, ' ')
    const scripts: GdprScriptElement[] = GdprCookieCheckService.readScriptElements(withoutComments)
    const markup: string = withoutComments.replace(INERT_BLOCK_REGEX, ' ')
    const searchText: string = [
      withoutComments,
      ...scripts.map((script: GdprScriptElement): string => script.code),
    ].join('\n')
    const consentTools: GdprConsentToolKey[] = GdprCookieCheckService.findConsentTools(searchText)
    const trackers: GdprTrackerFinding[] = GdprCookieCheckService.findTrackers(scripts, markup, consentTools.length > 0)
    const consentTool: GdprConsentToolFinding = GdprCookieCheckService.buildConsentToolFinding(
      consentTools,
      CONSENT_AUTO_BLOCKING_REGEX.test(searchText),
      trackers,
    )
    const anchorCount: number = (markup.match(ANCHOR_HREF_REGEX) ?? []).length
    const isPageReadable: boolean = !CHALLENGE_PAGE_REGEX.test(html) && anchorCount >= MIN_LINKS_OF_A_READABLE_PAGE
    const links: GdprLinkFinding[] = GdprCookieCheckService.buildLinkFindings(
      withoutComments,
      markup,
      consentTool,
      trackers,
      isPageReadable && BODY_END_REGEX.test(html),
    )

    return {
      host,
      finalUrl,
      verdict: GdprCookieCheckService.decideVerdict(trackers, consentTool, links, isPageReadable),
      trackers,
      consentTool,
      links,
      isPageReadable,
      checkedAt: checkedAt.toISOString(),
    }
  }

  /**
   * Lists the `<script>` elements of the page, with the code of the ones inlined as `data:` addresses decoded.
   * @param {string} html - The page without its comments.
   * @returns {GdprScriptElement[]} The scripts, in page order.
   */
  static readScriptElements(html: string): GdprScriptElement[] {
    const scriptRegex: RegExp = new RegExp(SCRIPT_ELEMENT_REGEX.source, SCRIPT_ELEMENT_REGEX.flags)
    const scripts: GdprScriptElement[] = []
    let match: RegExpExecArray | null = scriptRegex.exec(html)

    while (match) {
      const attributes: string = match[1] ?? ''
      const source: string = GdprCookieCheckService.readAttribute(attributes, SRC_ATTRIBUTE_REGEX)

      scripts.push({
        attributes,
        type: GdprCookieCheckService.readAttribute(attributes, TYPE_ATTRIBUTE_REGEX).trim().toLowerCase(),
        code: `${match[2] ?? ''}\n${GdprCookieCheckService.decodeDataUri(source)}`,
      })
      match = scriptRegex.exec(html)
    }
    return scripts
  }

  /**
   * Finds the trackers of the page and how each one is loaded, in the order of the signatures.
   * @param {GdprScriptElement[]} scripts - The scripts of the page.
   * @param {string} markup - The page without its scripts, styles and `noscript` blocks.
   * @param {boolean} hasConsentTool - Whether a consent tool was found, which may block at load time what the markup shows.
   * @returns {GdprTrackerFinding[]} One finding per tracker seen.
   */
  static findTrackers(scripts: GdprScriptElement[], markup: string, hasConsentTool: boolean): GdprTrackerFinding[] {
    const loadingByKey: Map<GdprTrackerKey, GdprTrackerLoading> = new Map()

    for (const script of scripts) {
      const scriptLoading: GdprTrackerLoading | null = GdprCookieCheckService.scriptLoadingOf(script)

      if (!scriptLoading) {
        continue
      }
      const activeKeys: GdprTrackerKey[] = [
        ...new Set([
          ...GdprCookieCheckService.trackerKeysIn(
            GdprCookieCheckService.readAttribute(script.attributes, SRC_ATTRIBUTE_REGEX),
          ),
          ...GdprCookieCheckService.inlineTrackerKeysIn(script.code),
        ]),
      ]
      const dataAttributeLoading: GdprTrackerLoading = GdprCookieCheckService.dataAttributeLoadingOf(
        script,
        scriptLoading,
      )

      for (const key of activeKeys) {
        const isMatomoWaiting: boolean = key === 'matomo' && MATOMO_REQUIRE_CONSENT_REGEX.test(script.code)

        GdprCookieCheckService.recordLoading(loadingByKey, key, isMatomoWaiting ? 'waitingForConsent' : scriptLoading)
      }
      for (const key of GdprCookieCheckService.trackerKeysIn(script.attributes)) {
        if (!activeKeys.includes(key)) {
          GdprCookieCheckService.recordLoading(loadingByKey, key, dataAttributeLoading)
        }
      }
    }
    const embeddedTags: string[] = [
      ...GdprCookieCheckService.readTagAttributes(markup, FRAME_TAG_REGEX),
      ...GdprCookieCheckService.readTagAttributes(markup, IMAGE_TAG_REGEX),
    ]

    for (const attributes of embeddedTags) {
      const sourceKeys: GdprTrackerKey[] = GdprCookieCheckService.trackerKeysIn(
        GdprCookieCheckService.readAttribute(attributes, SRC_ATTRIBUTE_REGEX),
      )
      const isHeldByConsentTool: boolean = CONSENT_ATTRIBUTE_REGEX.test(attributes)

      for (const key of GdprCookieCheckService.trackerKeysIn(attributes)) {
        const loading: GdprTrackerLoading =
          sourceKeys.includes(key) || !isHeldByConsentTool ? 'loadedDirectly' : 'waitingForConsent'

        GdprCookieCheckService.recordLoading(loadingByKey, key, loading)
      }
    }
    for (const attributes of GdprCookieCheckService.readTagAttributes(markup, PLACEHOLDER_TAG_REGEX)) {
      const loading: GdprTrackerLoading = CONSENT_ATTRIBUTE_REGEX.test(attributes)
        ? 'waitingForConsent'
        : 'loadedOnClick'

      for (const key of GdprCookieCheckService.trackerKeysIn(attributes)) {
        if (PLACEHOLDER_TRACKERS.includes(key)) {
          GdprCookieCheckService.recordLoading(loadingByKey, key, loading)
        }
      }
    }
    for (const key of GdprCookieCheckService.tarteaucitronTrackerKeysIn(scripts)) {
      GdprCookieCheckService.recordLoading(loadingByKey, key, 'waitingForConsent')
    }
    const consentDefaults: GdprGoogleConsentDefaults = GdprCookieCheckService.readGoogleConsentDefaults(scripts)

    return TRACKER_SIGNATURES.filter((signature: GdprTrackerSignature): boolean => loadingByKey.has(signature.key)).map(
      (signature: GdprTrackerSignature): GdprTrackerFinding => {
        const loading: GdprTrackerLoading = GdprCookieCheckService.applyGoogleConsentMode(
          signature.key,
          loadingByKey.get(signature.key) ?? 'loadedDirectly',
          consentDefaults,
        )

        return {
          key: signature.key,
          loading,
          level: GdprCookieCheckService.trackerLevelOf(signature.concern, loading, hasConsentTool),
        }
      },
    )
  }

  /**
   * How the trackers of a script reach the visitor: loaded when the browser runs it, held back by a consent tool, or none for data.
   * @param {GdprScriptElement} script - The script.
   * @returns {GdprTrackerLoading | null} The loading of its trackers, or null for a data script.
   */
  static scriptLoadingOf(script: GdprScriptElement): GdprTrackerLoading | null {
    if (GdprCookieCheckService.isExecutableScript(script)) {
      return CONSENT_TOOL_CALL_REGEX.test(script.code) ? 'waitingForConsent' : 'loadedDirectly'
    }
    if (DATA_SCRIPT_TYPE_REGEX.test(script.type)) {
      return null
    }
    const isHeldByConsentTool: boolean =
      CONSENT_HELD_TYPE_REGEX.test(script.type) || CONSENT_ATTRIBUTE_REGEX.test(script.attributes)

    return isHeldByConsentTool ? 'waitingForConsent' : null
  }

  /**
   * The trackers declared as tarteaucitron services (`tarteaucitron.job.push('gtag')`), loaded by the tool once the visitor agrees.
   * @param {GdprScriptElement[]} scripts - The scripts of the page.
   * @returns {GdprTrackerKey[]} The trackers of the services pushed to `tarteaucitron.job`.
   */
  static tarteaucitronTrackerKeysIn(scripts: GdprScriptElement[]): GdprTrackerKey[] {
    const keys: GdprTrackerKey[] = []

    for (const script of scripts) {
      if (!GdprCookieCheckService.isExecutableScript(script)) {
        continue
      }
      const jobRegex: RegExp = new RegExp(TARTEAUCITRON_JOB_REGEX.source, TARTEAUCITRON_JOB_REGEX.flags)
      let match: RegExpExecArray | null = jobRegex.exec(script.code)

      while (match) {
        const key: GdprTrackerKey | undefined = TARTEAUCITRON_SERVICE_TRACKERS[(match[1] ?? '').toLowerCase()]

        if (key) {
          keys.push(key)
        }
        match = jobRegex.exec(script.code)
      }
    }
    return keys
  }

  /**
   * How a tracker named only in a `data-` attribute of a script reaches the visitor: delayed, held by a consent tool, or lazy loaded.
   * @param {GdprScriptElement} script - The script.
   * @param {GdprTrackerLoading} scriptLoading - How the script itself is loaded.
   * @returns {GdprTrackerLoading} The loading of the trackers named in its attributes.
   */
  static dataAttributeLoadingOf(script: GdprScriptElement, scriptLoading: GdprTrackerLoading): GdprTrackerLoading {
    if (scriptLoading === 'waitingForConsent') {
      return scriptLoading
    }
    if (DELAYED_SCRIPT_TYPE_REGEX.test(script.type)) {
      return 'loadedDirectly'
    }
    const isHeldByConsentTool: boolean =
      CONSENT_ATTRIBUTE_REGEX.test(script.attributes) || KLARO_HELD_SCRIPT_ATTRIBUTE_REGEX.test(script.attributes)

    return isHeldByConsentTool ? 'waitingForConsent' : 'loadedDirectly'
  }

  /**
   * Whether the browser runs a script, now or after a scroll or a click.
   * @param {GdprScriptElement} script - The script.
   * @returns {boolean} True for JavaScript and the delayed types of the speed optimisers.
   */
  static isExecutableScript(script: GdprScriptElement): boolean {
    return script.type === '' || EXECUTABLE_SCRIPT_TYPE_REGEX.test(script.type)
  }

  /**
   * The trackers named in the code of a script, a video or map address counting only next to its loader.
   * @param {string} code - The inline code of the script, or the code decoded from its `data:` address.
   * @returns {GdprTrackerKey[]} The trackers found, possibly none.
   */
  static inlineTrackerKeysIn(code: string): GdprTrackerKey[] {
    const loadsEmbed: boolean = INLINE_EMBED_LOADER_REGEX.test(code)

    return GdprCookieCheckService.trackerKeysIn(code).filter(
      (key: GdprTrackerKey): boolean => loadsEmbed || !PLACEHOLDER_TRACKERS.includes(key),
    )
  }

  /**
   * The trackers whose signature appears in a text (attributes and code of an element).
   * @param {string} text - The text to search.
   * @returns {GdprTrackerKey[]} The trackers found, possibly none.
   */
  static trackerKeysIn(text: string): GdprTrackerKey[] {
    if (!text) {
      return []
    }
    return TRACKER_SIGNATURES.filter((signature: GdprTrackerSignature): boolean =>
      signature.patterns.some((pattern: RegExp): boolean => pattern.test(text)),
    ).map((signature: GdprTrackerSignature): GdprTrackerKey => signature.key)
  }

  /**
   * Keeps, for a tracker seen several times, its least protected way of loading.
   * @param {Map<GdprTrackerKey, GdprTrackerLoading>} loadingByKey - The loadings found so far, updated in place.
   * @param {GdprTrackerKey} key - The tracker.
   * @param {GdprTrackerLoading} loading - How it is loaded at this place of the page.
   * @returns {void}
   */
  static recordLoading(
    loadingByKey: Map<GdprTrackerKey, GdprTrackerLoading>,
    key: GdprTrackerKey,
    loading: GdprTrackerLoading,
  ): void {
    const current: GdprTrackerLoading | undefined = loadingByKey.get(key)

    if (!current || LOADING_RANK[loading] > LOADING_RANK[current]) {
      loadingByKey.set(key, loading)
    }
  }

  /**
   * Reads Google's consent mode defaults (a `gtag('consent', 'default', …)` call, or Axeptio's settings) in the scripts that run.
   * @param {GdprScriptElement[]} scripts - The scripts of the page.
   * @returns {GdprGoogleConsentDefaults} Whether analytics and advertising storage are "denied" until the visitor's choice.
   */
  static readGoogleConsentDefaults(scripts: GdprScriptElement[]): GdprGoogleConsentDefaults {
    const consentScripts: GdprScriptElement[] = scripts.filter(
      (script: GdprScriptElement): boolean =>
        GdprCookieCheckService.isExecutableScript(script) && GOOGLE_CONSENT_DEFAULT_REGEX.test(script.code),
    )

    return {
      isAnalyticsDenied: consentScripts.some((script: GdprScriptElement): boolean =>
        ANALYTICS_STORAGE_DENIED_REGEX.test(script.code),
      ),
      isAdsDenied: consentScripts.some((script: GdprScriptElement): boolean =>
        AD_STORAGE_DENIED_REGEX.test(script.code),
      ),
    }
  }

  /**
   * Turns a Google tag loaded with the page into one under consent mode when its storage is "denied" by default.
   * @param {GdprTrackerKey} key - The tracker.
   * @param {GdprTrackerLoading} loading - How the markup loads it.
   * @param {GdprGoogleConsentDefaults} consentDefaults - Google's consent mode defaults read on the page.
   * @returns {GdprTrackerLoading} The loading to show.
   */
  static applyGoogleConsentMode(
    key: GdprTrackerKey,
    loading: GdprTrackerLoading,
    consentDefaults: GdprGoogleConsentDefaults,
  ): GdprTrackerLoading {
    if (loading !== 'loadedDirectly') {
      return loading
    }
    const isUnderAnalyticsDefault: boolean =
      consentDefaults.isAnalyticsDenied && GOOGLE_ANALYTICS_STORAGE_TRACKERS.includes(key)
    const isUnderAdsDefault: boolean = consentDefaults.isAdsDenied && GOOGLE_AD_STORAGE_TRACKERS.includes(key)

    return isUnderAnalyticsDefault || isUnderAdsDefault ? 'googleConsentModeDenied' : loading
  }

  /**
   * Level of a tracker line: fine when it waits, serious when it needs consent and no consent tool can hold it, to check otherwise.
   * @param {GdprTrackerConcern} concern - What loading it before consent weighs.
   * @param {GdprTrackerLoading} loading - How it is loaded.
   * @param {boolean} hasConsentTool - Whether a consent tool was found.
   * @returns {WebsiteHealthVerdict} The level.
   */
  static trackerLevelOf(
    concern: GdprTrackerConcern,
    loading: GdprTrackerLoading,
    hasConsentTool: boolean,
  ): WebsiteHealthVerdict {
    if (loading === 'waitingForConsent') {
      return 'ok'
    }
    if (loading === 'loadedOnClick' || concern === 'toCheck') {
      return 'warning'
    }
    if (loading === 'googleConsentModeDenied') {
      return 'ok'
    }
    return hasConsentTool ? 'warning' : 'critical'
  }

  /**
   * The consent tools whose script or settings appear on the page.
   * @param {string} searchText - The page without its comments, plus the code decoded from `data:` addresses.
   * @returns {GdprConsentToolKey[]} The tools found, usually one.
   */
  static findConsentTools(searchText: string): GdprConsentToolKey[] {
    return CONSENT_TOOL_SIGNATURES.filter((signature: GdprConsentToolSignature): boolean =>
      signature.patterns.some((pattern: RegExp): boolean => pattern.test(searchText)),
    ).map((signature: GdprConsentToolSignature): GdprConsentToolKey => signature.key)
  }

  /**
   * The consent tool line: found, missing while trackers are there, or not needed on a page without trackers.
   * @param {GdprConsentToolKey[]} tools - The consent tools found.
   * @param {boolean} hasAutoBlocking - Whether a tool is set to block scripts by itself when the page loads.
   * @param {GdprTrackerFinding[]} trackers - The trackers found.
   * @returns {GdprConsentToolFinding} The finding.
   */
  static buildConsentToolFinding(
    tools: GdprConsentToolKey[],
    hasAutoBlocking: boolean,
    trackers: GdprTrackerFinding[],
  ): GdprConsentToolFinding {
    if (tools.length > 0) {
      return { status: 'found', level: 'ok', tools, hasAutoBlocking }
    }
    if (trackers.length === 0) {
      return { status: 'notNeeded', level: 'ok', tools, hasAutoBlocking }
    }
    const hasUnblockedTracker: boolean = trackers.some(
      (tracker: GdprTrackerFinding): boolean => tracker.level === 'critical',
    )

    return { status: 'notFound', level: hasUnblockedTracker ? 'critical' : 'warning', tools, hasAutoBlocking }
  }

  /**
   * The three footer links: legal notice, privacy policy and a way to change one's cookie choices.
   * @param {string} html - The page without its comments.
   * @param {string} markup - The page without its scripts, styles and `noscript` blocks.
   * @param {GdprConsentToolFinding} consentTool - The consent tool line.
   * @param {GdprTrackerFinding[]} trackers - The trackers found.
   * @param {boolean} canReadFooter - False when the page is built by JavaScript or was cut before its end.
   * @returns {GdprLinkFinding[]} One finding per link.
   */
  static buildLinkFindings(
    html: string,
    markup: string,
    consentTool: GdprConsentToolFinding,
    trackers: GdprTrackerFinding[],
    canReadFooter: boolean,
  ): GdprLinkFinding[] {
    const linkElements: GdprLinkElement[] = GdprCookieCheckService.readLinkElements(markup)
    const hasPrivacyLink: boolean = linkElements.some((element: GdprLinkElement): boolean =>
      GdprCookieCheckService.isPrivacyLink(element.attributes, element.text),
    )
    const hasCookieSettingsLink: boolean = linkElements.some((element: GdprLinkElement): boolean =>
      GdprCookieCheckService.isCookieSettingsLink(element.attributes, element.text),
    )
    const missingStatus: GdprLinkStatus = canReadFooter ? 'missing' : 'notReadable'
    let cookieSettingsStatus: GdprLinkStatus = missingStatus

    if (hasCookieSettingsLink) {
      cookieSettingsStatus = 'found'
    } else if (consentTool.status === 'found') {
      cookieSettingsStatus = 'providedByConsentTool'
    } else if (trackers.length === 0) {
      cookieSettingsStatus = 'notNeeded'
    }
    return [
      GdprCookieCheckService.buildLinkFinding(
        'legalNotice',
        WebsiteHealthCheckService.hasLegalNoticeLink(html) ? 'found' : missingStatus,
      ),
      GdprCookieCheckService.buildLinkFinding('privacyPolicy', hasPrivacyLink ? 'found' : missingStatus),
      GdprCookieCheckService.buildLinkFinding('cookieSettings', cookieSettingsStatus),
    ]
  }

  /**
   * Lists the links and buttons of the page, with their attributes and their readable text.
   * @param {string} markup - The page without its scripts, styles and `noscript` blocks.
   * @returns {GdprLinkElement[]} The elements, in page order.
   */
  static readLinkElements(markup: string): GdprLinkElement[] {
    const elementRegex: RegExp = new RegExp(LINK_OR_BUTTON_REGEX.source, LINK_OR_BUTTON_REGEX.flags)
    const elements: GdprLinkElement[] = []
    let match: RegExpExecArray | null = elementRegex.exec(markup)

    while (match) {
      elements.push({ attributes: match[2] ?? '', text: GdprCookieCheckService.readableText(match[3] ?? '') })
      match = elementRegex.exec(markup)
    }
    return elements
  }

  /**
   * Whether a link leads to the site's privacy policy, by its address or its text.
   * @param {string} attributes - The attributes of the element.
   * @param {string} text - Its readable text.
   * @returns {boolean} True for a privacy policy link of the site itself.
   */
  static isPrivacyLink(attributes: string, text: string): boolean {
    const href: string = GdprCookieCheckService.readAttribute(attributes, HREF_ATTRIBUTE_REGEX)

    if (!href || EXTERNAL_POLICY_HREF_REGEX.test(href)) {
      return false
    }
    return PRIVACY_HREF_REGEX.test(href) || PRIVACY_TEXT_REGEX.test(text)
  }

  /**
   * Whether a link or a button lets the visitor change their cookie choices, or leads to the cookie policy.
   * @param {string} attributes - The attributes of the element.
   * @param {string} text - Its readable text.
   * @returns {boolean} True for a cookie settings link or button of the site itself.
   */
  static isCookieSettingsLink(attributes: string, text: string): boolean {
    const href: string = GdprCookieCheckService.readAttribute(attributes, HREF_ATTRIBUTE_REGEX)

    if (href && EXTERNAL_POLICY_HREF_REGEX.test(href)) {
      return false
    }
    return (
      /cookie/i.test(href) || COOKIE_SETTINGS_ATTRIBUTE_REGEX.test(attributes) || COOKIE_SETTINGS_TEXT_REGEX.test(text)
    )
  }

  /**
   * Builds one link line, with its level and the sentence to show.
   * @param {GdprLinkKey} key - The link.
   * @param {GdprLinkStatus} status - What was found.
   * @returns {GdprLinkFinding} The finding.
   */
  static buildLinkFinding(key: GdprLinkKey, status: GdprLinkStatus): GdprLinkFinding {
    const levelByStatus: Record<GdprLinkStatus, WebsiteHealthVerdict> = {
      found: 'ok',
      providedByConsentTool: 'ok',
      notNeeded: 'ok',
      missing: 'warning',
      notReadable: 'unknown',
    }

    return { key, status, level: levelByStatus[status], detailKey: GdprCookieCheckService.linkDetailKeyOf(key, status) }
  }

  /**
   * The sentence shown under a link line.
   * @param {GdprLinkKey} key - The link.
   * @param {GdprLinkStatus} status - What was found.
   * @returns {GdprLinkDetailKey} The key of the sentence.
   */
  static linkDetailKeyOf(key: GdprLinkKey, status: GdprLinkStatus): GdprLinkDetailKey {
    if (status === 'notReadable') {
      return 'linkNotReadable'
    }
    if (key === 'legalNotice') {
      return status === 'found' ? 'legalNoticeFound' : 'legalNoticeMissing'
    }
    if (key === 'privacyPolicy') {
      return status === 'found' ? 'privacyPolicyFound' : 'privacyPolicyMissing'
    }
    const cookieSettingsKeys: Record<Exclude<GdprLinkStatus, 'notReadable'>, GdprLinkDetailKey> = {
      found: 'cookieSettingsFound',
      missing: 'cookieSettingsMissing',
      providedByConsentTool: 'cookieSettingsByConsentTool',
      notNeeded: 'cookieSettingsNotNeeded',
    }

    return cookieSettingsKeys[status]
  }

  /**
   * The overall verdict: at risk, unknown for an unreadable page, nothing risky seen when every line is fine, to check otherwise.
   * @param {GdprTrackerFinding[]} trackers - The tracker lines.
   * @param {GdprConsentToolFinding} consentTool - The consent tool line.
   * @param {GdprLinkFinding[]} links - The link lines.
   * @param {boolean} isPageReadable - False for a bot protection page, an error page or a page built by JavaScript.
   * @returns {GdprCookieCheckVerdict} The verdict.
   */
  static decideVerdict(
    trackers: GdprTrackerFinding[],
    consentTool: GdprConsentToolFinding,
    links: GdprLinkFinding[],
    isPageReadable: boolean,
  ): GdprCookieCheckVerdict {
    const levels: WebsiteHealthVerdict[] = [
      ...trackers.map((tracker: GdprTrackerFinding): WebsiteHealthVerdict => tracker.level),
      consentTool.level,
      ...links.map((link: GdprLinkFinding): WebsiteHealthVerdict => link.level),
    ]

    if (levels.includes('critical')) {
      return 'atRisk'
    }
    if (!isPageReadable) {
      return 'unknown'
    }
    return levels.every((level: WebsiteHealthVerdict): boolean => level === 'ok') ? 'compliantLikely' : 'needsCheck'
  }

  /**
   * Lists the attributes of every tag of one kind (iframes, images).
   * @param {string} markup - The page without its scripts, styles and `noscript` blocks.
   * @param {RegExp} tagRegex - The global regex of the tag, its attributes in the first group.
   * @returns {string[]} The attributes of each tag.
   */
  static readTagAttributes(markup: string, tagRegex: RegExp): string[] {
    const regex: RegExp = new RegExp(tagRegex.source, tagRegex.flags)
    const attributeLists: string[] = []
    let match: RegExpExecArray | null = regex.exec(markup)

    while (match) {
      attributeLists.push(match[1] ?? '')
      match = regex.exec(markup)
    }
    return attributeLists
  }

  /**
   * Reads one attribute value, quoted or not.
   * @param {string} attributes - The attributes of a tag.
   * @param {RegExp} attributeRegex - The regex of the attribute, its value in one of the first three groups.
   * @returns {string} The value, or an empty string when the attribute is absent.
   */
  static readAttribute(attributes: string, attributeRegex: RegExp): string {
    const match: RegExpExecArray | null = attributeRegex.exec(attributes)

    return match ? (match[1] ?? match[2] ?? match[3] ?? '') : ''
  }

  /**
   * Decodes the code of a script inlined as a `data:` address.
   * @param {string} source - The `src` attribute of the script.
   * @returns {string} The code, or an empty string for a regular address.
   */
  static decodeDataUri(source: string): string {
    const match: RegExpExecArray | null = DATA_URI_REGEX.exec(source.trim())

    if (!match) {
      return ''
    }
    const payload: string = match[2] ?? ''

    try {
      return match[1] ? Buffer.from(payload, 'base64').toString('utf8') : decodeURIComponent(payload)
    } catch {
      return ''
    }
  }

  /**
   * The text a visitor reads in a link: tags removed, common entities decoded, spaces collapsed.
   * @param {string} innerHtml - The content of the element.
   * @returns {string} The readable text.
   */
  static readableText(innerHtml: string): string {
    return innerHtml
      .replace(HTML_TAG_REGEX, ' ')
      .replace(HTML_ENTITY_REGEX, (entity: string, decimal?: string, hexadecimal?: string, name?: string): string => {
        if (decimal || hexadecimal) {
          return GdprCookieCheckService.characterOf(decimal ? Number(decimal) : parseInt(hexadecimal ?? '', 16), entity)
        }
        return NAMED_ENTITIES[(name ?? '').toLowerCase()] ?? entity
      })
      .replace(WHITESPACE_REGEX, ' ')
      .trim()
  }

  /**
   * The character of a numeric HTML entity, or the entity itself when the number is not a Unicode character.
   * @param {number} codePoint - The number of the entity.
   * @param {string} entity - The entity as written, kept when the number is invalid.
   * @returns {string} The character, or the entity.
   */
  static characterOf(codePoint: number, entity: string): string {
    return Number.isInteger(codePoint) && codePoint >= 0 && codePoint <= MAX_CODE_POINT
      ? String.fromCodePoint(codePoint)
      : entity
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
