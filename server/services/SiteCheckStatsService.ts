import type {
  EmailDeliverabilityCheckResult,
  EmailDeliverabilityFinding,
  EmailDeliverabilityVerdict,
} from '~~/server/types/tools/emailDeliverabilityCheck'
import type { GdprCookieCheckResult, GdprLinkFinding, GdprTrackerFinding } from '~~/server/types/tools/gdprCookieCheck'
import type {
  JoomlaExtensionSeen,
  JoomlaVersionCheckResult,
  JoomlaVersionVerdict,
} from '~~/server/types/tools/joomlaVersionCheck'
import type {
  PhpVulnerabilityCheckResult,
  PhpVulnerabilityPlatformKey,
  PhpVulnerabilityVerdict,
} from '~~/server/types/tools/phpVulnerabilityCheck'
import type { SiteCheckToolKey } from '~~/server/types/tools/siteCheckReport'
import type {
  SiteCheckStatsDetails,
  SiteCheckStatsDetailValue,
  SiteCheckStatsEntry,
  SiteCheckStatsShare,
  SiteCheckStatsShareDefinition,
  SiteCheckStatsSummary,
  SiteCheckStatsToolSummary,
} from '~~/server/types/tools/siteCheckStats'
import type {
  WebsiteHealthCheckItem,
  WebsiteHealthCheckKey,
  WebsiteHealthCheckResult,
  WebsiteHealthVerdict,
} from '~~/server/types/tools/websiteHealthCheck'
import type {
  WordPressHackCheckResult,
  WordPressHackVerdict,
  WordPressPluginResult,
} from '~~/server/types/tools/wordpressHackCheck'
import { SITE_CHECK_TOOL_KEYS } from '~~/server/constants/siteCheckTools'

const STATS_STORAGE_KEY_PREFIX: string = 'site-checks:stats:'
const RETENTION_DAYS: number = 365
const RETENTION_MONTHS: number = 12
const DAY_MS: number = 24 * 60 * 60 * 1000
const DUPLICATE_WINDOW_MS: number = 10 * 60 * 1000
const DAY_ENTRIES_MAX: number = 5000
const READ_BATCH_SIZE: number = 25
const DAY_KEY_REGEX: RegExp = /^\d{4}-\d{2}-\d{2}$/
const SPF_MAX_LOOKUPS: number = 10
const PHP_VERDICTS_WITH_KNOWN_VERSION: PhpVulnerabilityVerdict[] = ['unpatched', 'endOfLife', 'patched']
const PHP_VERDICTS_NOT_FIXED: PhpVulnerabilityVerdict[] = ['unpatched', 'endOfLife']
const WORDPRESS_VERDICTS_AT_RISK: WordPressHackVerdict[] = ['suspiciousSignals', 'vulnerablePlugin', 'closedPlugin']
const JOOMLA_VERDICTS_WITH_KNOWN_BRANCH: JoomlaVersionVerdict[] = [
  'joomla6Latest',
  'joomla6Outdated',
  'joomla5',
  'joomla4',
  'joomla3OrOlder',
]
const JOOMLA_VERDICTS_WITHOUT_SECURITY_FIXES: JoomlaVersionVerdict[] = ['joomla4', 'joomla3OrOlder']
const EMAIL_VERDICTS_WITHOUT_SENDING_DOMAIN: EmailDeliverabilityVerdict[] = [
  'noMailSetup',
  'invalidDomain',
  'consumerMailbox',
]

const SHARE_DEFINITIONS: SiteCheckStatsShareDefinition[] = [
  {
    key: 'gdprGoogleAnalyticsWithoutConsent',
    tool: 'gdprCookie',
    label: 'Sites qui chargent Google Analytics sans attendre l’accord du visiteur',
    isInTotal: (entry: SiteCheckStatsEntry): boolean => entry.verdict !== 'unknown',
    isInShare: (entry: SiteCheckStatsEntry): boolean =>
      SiteCheckStatsService.readDetailList(entry.details.trackersLoadedWithoutConsent).includes('googleAnalytics'),
  },
  {
    key: 'gdprAnyTrackerWithoutConsent',
    tool: 'gdprCookie',
    label: 'Sites qui chargent au moins un traceur sans attendre l’accord du visiteur',
    isInTotal: (entry: SiteCheckStatsEntry): boolean => entry.verdict !== 'unknown',
    isInShare: (entry: SiteCheckStatsEntry): boolean =>
      SiteCheckStatsService.readDetailList(entry.details.trackersLoadedWithoutConsent).length > 0,
  },
  {
    key: 'gdprTrackersWithoutConsentTool',
    tool: 'gdprCookie',
    label: 'Sites avec des traceurs mais sans outil de consentement',
    isInTotal: (entry: SiteCheckStatsEntry): boolean =>
      entry.verdict !== 'unknown' && SiteCheckStatsService.readDetailList(entry.details.trackersFound).length > 0,
    isInShare: (entry: SiteCheckStatsEntry): boolean => entry.details.consentToolStatus !== 'found',
  },
  {
    key: 'gdprLegalNoticeMissing',
    tool: 'gdprCookie',
    label: 'Sites sans lien vers les mentions légales (test RGPD)',
    isInTotal: (entry: SiteCheckStatsEntry): boolean => entry.verdict !== 'unknown',
    isInShare: (entry: SiteCheckStatsEntry): boolean =>
      SiteCheckStatsService.readDetailList(entry.details.missingLinks).includes('legalNotice'),
  },
  {
    key: 'phpNotFixed',
    tool: 'phpVulnerability',
    label: 'Sites en PHP à version connue qui ne sont pas corrigés (faille d’octobre 2026 ou version sans correctifs)',
    isInTotal: (entry: SiteCheckStatsEntry): boolean =>
      PHP_VERDICTS_WITH_KNOWN_VERSION.some((verdict: PhpVulnerabilityVerdict): boolean => verdict === entry.verdict),
    isInShare: (entry: SiteCheckStatsEntry): boolean =>
      PHP_VERDICTS_NOT_FIXED.some((verdict: PhpVulnerabilityVerdict): boolean => verdict === entry.verdict),
  },
  {
    key: 'wordpressAtRisk',
    tool: 'wordpressHack',
    label: 'Sites WordPress avec une extension vulnérable ou fermée, ou des signes de piratage',
    isInTotal: (entry: SiteCheckStatsEntry): boolean => entry.details.isWordPress === true,
    isInShare: (entry: SiteCheckStatsEntry): boolean =>
      WORDPRESS_VERDICTS_AT_RISK.some((verdict: WordPressHackVerdict): boolean => verdict === entry.verdict),
  },
  {
    key: 'wordpressOutdatedCore',
    tool: 'wordpressHack',
    label: 'Sites WordPress dont le cœur n’est pas à jour',
    isInTotal: (entry: SiteCheckStatsEntry): boolean => entry.details.isWordPress === true,
    isInShare: (entry: SiteCheckStatsEntry): boolean => entry.details.isCoreOutdated === true,
  },
  {
    key: 'joomlaWithoutSecurityFixes',
    tool: 'joomlaVersion',
    label: 'Sites Joomla à version connue qui ne reçoivent plus de correctifs de sécurité (Joomla 3 ou 4)',
    isInTotal: (entry: SiteCheckStatsEntry): boolean =>
      JOOMLA_VERDICTS_WITH_KNOWN_BRANCH.some((verdict: JoomlaVersionVerdict): boolean => verdict === entry.verdict),
    isInShare: (entry: SiteCheckStatsEntry): boolean =>
      JOOMLA_VERDICTS_WITHOUT_SECURITY_FIXES.some(
        (verdict: JoomlaVersionVerdict): boolean => verdict === entry.verdict,
      ),
  },
  {
    key: 'joomlaPhpTooOldForJoomla6',
    tool: 'joomlaVersion',
    label: 'Sites Joomla dont la version de PHP affichée ne suffit pas pour Joomla 6 (avant PHP 8.3)',
    isInTotal: (entry: SiteCheckStatsEntry): boolean =>
      entry.details.isJoomla === true && typeof entry.details.isPhpReadyForJoomla6 === 'boolean',
    isInShare: (entry: SiteCheckStatsEntry): boolean => entry.details.isPhpReadyForJoomla6 === false,
  },
  {
    key: 'emailDmarcMissing',
    tool: 'emailDeliverability',
    label: 'Domaines qui envoient des mails sans enregistrement DMARC',
    isInTotal: (entry: SiteCheckStatsEntry): boolean => SiteCheckStatsService.isSendingDomain(entry),
    isInShare: (entry: SiteCheckStatsEntry): boolean => entry.details.dmarc === 'missing',
  },
  {
    key: 'emailSpfMissingOrBroken',
    tool: 'emailDeliverability',
    label: 'Domaines qui envoient des mails sans SPF utilisable',
    isInTotal: (entry: SiteCheckStatsEntry): boolean => SiteCheckStatsService.isSendingDomain(entry),
    isInShare: (entry: SiteCheckStatsEntry): boolean =>
      entry.details.spf === 'missing' || entry.details.spf === 'multiple' || entry.details.spf === 'broken',
  },
  {
    key: 'emailDkimMissing',
    tool: 'emailDeliverability',
    label: 'Domaines qui envoient des mails sans clé DKIM trouvée',
    isInTotal: (entry: SiteCheckStatsEntry): boolean => SiteCheckStatsService.isSendingDomain(entry),
    isInShare: (entry: SiteCheckStatsEntry): boolean => entry.details.dkim === 'missing',
  },
  {
    key: 'healthAtRisk',
    tool: 'websiteHealth',
    label: 'Sites « à risque » à « Tester mon site » (au moins un point critique)',
    isInTotal: (): boolean => true,
    isInShare: (entry: SiteCheckStatsEntry): boolean => entry.verdict === 'atRisk',
  },
  {
    key: 'healthHttpsToFix',
    tool: 'websiteHealth',
    label: 'Sites sans HTTPS ou sans redirection vers HTTPS',
    isInTotal: (): boolean => true,
    isInShare: (entry: SiteCheckStatsEntry): boolean => SiteCheckStatsService.hasFailingCheck(entry, 'https'),
  },
  {
    key: 'healthNotMobileReady',
    tool: 'websiteHealth',
    label: 'Sites qui ne s’adaptent pas au téléphone',
    isInTotal: (): boolean => true,
    isInShare: (entry: SiteCheckStatsEntry): boolean => SiteCheckStatsService.hasFailingCheck(entry, 'mobile'),
  },
  {
    key: 'healthLegalNoticeMissing',
    tool: 'websiteHealth',
    label: 'Sites sans lien vers les mentions légales (Tester mon site)',
    isInTotal: (): boolean => true,
    isInShare: (entry: SiteCheckStatsEntry): boolean => SiteCheckStatsService.hasFailingCheck(entry, 'legalNotice'),
  },
  {
    key: 'healthAging',
    tool: 'websiteHealth',
    label: 'Sites qui montrent des signes d’âge (Flash, vieux jQuery, outil abandonné, copyright ancien)',
    isInTotal: (): boolean => true,
    isInShare: (entry: SiteCheckStatsEntry): boolean => SiteCheckStatsService.hasFailingCheck(entry, 'aging'),
  },
]

let writeChain: Promise<void> = Promise.resolve()
let lastCleanupDay: string = ''

/** Keeps the site, the tool, the verdict and a few facts of every check for twelve months, for statistics only. */
export class SiteCheckStatsService {
  /**
   * Keeps a PHP vulnerability check: PHP branch, main platform and hosting provider.
   * @param {PhpVulnerabilityCheckResult} result - The result sent to the visitor.
   * @returns {Promise<void>} Resolves once kept; a storage failure is logged, never thrown.
   */
  static async recordPhpVulnerabilityCheck(result: PhpVulnerabilityCheckResult): Promise<void> {
    const namedPlatform: PhpVulnerabilityPlatformKey | undefined = result.platforms.find(
      (platform: PhpVulnerabilityPlatformKey): boolean => platform !== 'php',
    )
    await this.record('phpVulnerability', result.host, result.verdict, {
      phpBranch: result.phpBranch,
      platform: namedPlatform ?? result.platforms[0] ?? null,
      hostingProvider: result.hostingProvider,
      isBehindCloudflare: result.isBehindCloudflare,
    })
  }

  /**
   * Keeps a WordPress check: whether it is WordPress, the core freshness, the vulnerable plugins and the warning signs.
   * @param {WordPressHackCheckResult} result - The result sent to the visitor.
   * @returns {Promise<void>} Resolves once kept; a storage failure is logged, never thrown.
   */
  static async recordWordPressHackCheck(result: WordPressHackCheckResult): Promise<void> {
    await this.record('wordpressHack', result.host, result.verdict, {
      isWordPress: result.isWordPress,
      isCoreOutdated: result.signals.includes('coreOutdated'),
      vulnerablePlugins: result.plugins
        .filter((plugin: WordPressPluginResult): boolean => plugin.status === 'vulnerable')
        .map((plugin: WordPressPluginResult): string => plugin.slug),
      closedPluginCount: result.closedPlugins.length,
      injectedContentCount: result.injectedContent.length,
      signals: [...result.signals],
    })
  }

  /**
   * Keeps a Joomla check: the version read, the PHP version, the kind of template and the extensions seen.
   * @param {JoomlaVersionCheckResult} result - The result sent to the visitor.
   * @returns {Promise<void>} Resolves once kept; a storage failure is logged, never thrown.
   */
  static async recordJoomlaVersionCheck(result: JoomlaVersionCheckResult): Promise<void> {
    await this.record('joomlaVersion', result.host, result.verdict, {
      isJoomla: result.isJoomla,
      version: result.version,
      phpVersion: result.phpVersion,
      isPhpReadyForJoomla6: this.readJoomla6PhpReadiness(result),
      templateKind: result.template?.kind ?? null,
      templateFramework: result.template?.framework ?? null,
      extensions: result.extensions.map((extension: JoomlaExtensionSeen): string => extension.element),
    })
  }

  /**
   * Whether the PHP version shown is enough for Joomla 6, as told to the visitor.
   * @param {JoomlaVersionCheckResult} result - The result sent to the visitor.
   * @returns {boolean | null} Null when the PHP version was not shown or no PHP line was given.
   */
  static readJoomla6PhpReadiness(result: JoomlaVersionCheckResult): boolean | null {
    if (result.signals.includes('phpReadyForJoomla6')) {
      return true
    }
    return result.signals.includes('phpTooOldForJoomla6') ? false : null
  }

  /**
   * Keeps an e-mail check: provider, the state of SPF, DKIM and DMARC, and the findings.
   * @param {EmailDeliverabilityCheckResult} result - The result sent to the visitor.
   * @returns {Promise<void>} Resolves once kept; a storage failure is logged, never thrown.
   */
  static async recordEmailDeliverabilityCheck(result: EmailDeliverabilityCheckResult): Promise<void> {
    await this.record('emailDeliverability', result.domain, result.verdict, {
      provider: result.provider?.key ?? null,
      spf: this.readSpfState(result),
      dkim: this.readDkimState(result),
      dmarc: this.readDmarcState(result),
      findings: result.findings.map((finding: EmailDeliverabilityFinding): string => finding.key),
    })
  }

  /**
   * Keeps a check of « Tester mon site »: the points to fix, to watch or unreadable, and the platform.
   * @param {WebsiteHealthCheckResult} result - The result sent to the visitor.
   * @returns {Promise<void>} Resolves once kept; a storage failure is logged, never thrown.
   */
  static async recordWebsiteHealthCheck(result: WebsiteHealthCheckResult): Promise<void> {
    await this.record('websiteHealth', result.host, result.overall, {
      criticalChecks: this.listCheckKeysWithVerdict(result.checks, 'critical'),
      warningChecks: this.listCheckKeysWithVerdict(result.checks, 'warning'),
      unknownChecks: this.listCheckKeysWithVerdict(result.checks, 'unknown'),
      isWordPress: result.isWordPress,
      platform: result.platforms.find((platform: PhpVulnerabilityPlatformKey): boolean => platform !== 'php') ?? null,
    })
  }

  /**
   * Keeps a GDPR cookie check: trackers seen and how they load, the consent tool and the missing links.
   * @param {GdprCookieCheckResult} result - The result sent to the visitor.
   * @returns {Promise<void>} Resolves once kept; a storage failure is logged, never thrown.
   */
  static async recordGdprCookieCheck(result: GdprCookieCheckResult): Promise<void> {
    await this.record('gdprCookie', result.host, result.verdict, {
      trackersFound: result.trackers.map((tracker: GdprTrackerFinding): string => tracker.key),
      trackersLoadedWithoutConsent: result.trackers
        .filter(
          (tracker: GdprTrackerFinding): boolean =>
            tracker.loading === 'loadedDirectly' || tracker.loading === 'loadedOnClick',
        )
        .map((tracker: GdprTrackerFinding): string => tracker.key),
      consentToolStatus: result.consentTool.status,
      consentTool: result.consentTool.tools[0] ?? null,
      missingLinks: result.links
        .filter((link: GdprLinkFinding): boolean => link.status === 'missing')
        .map((link: GdprLinkFinding): string => link.key),
      isPageReadable: result.isPageReadable,
    })
  }

  /**
   * Counts the checks of the last twelve months: per tool, per month, per verdict, and the shares worth quoting.
   * @returns {Promise<SiteCheckStatsSummary>} The figures, without any site name.
   */
  static async buildSummary(): Promise<SiteCheckStatsSummary> {
    const entries: SiteCheckStatsEntry[] = await this.readKeptEntries()
    const latestBySite: Map<string, SiteCheckStatsEntry> = this.findLatestEntryBySite(entries)
    const latestEntries: SiteCheckStatsEntry[] = [...latestBySite.values()]
    const oldestCheckAt: string | null = entries.reduce(
      (oldest: string | null, entry: SiteCheckStatsEntry): string | null =>
        oldest === null || entry.checkedAt < oldest ? entry.checkedAt : oldest,
      null,
    )

    return {
      generatedAt: new Date().toISOString(),
      retentionMonths: RETENTION_MONTHS,
      oldestCheckAt,
      checkCount: entries.length,
      siteCount: new Set(entries.map((entry: SiteCheckStatsEntry): string => entry.host)).size,
      tools: SITE_CHECK_TOOL_KEYS.map(
        (tool: SiteCheckToolKey): SiteCheckStatsToolSummary => this.buildToolSummary(tool, entries, latestEntries),
      ),
      shares: SHARE_DEFINITIONS.map(
        (definition: SiteCheckStatsShareDefinition): SiteCheckStatsShare =>
          this.computeShare(definition, latestEntries),
      ),
    }
  }

  /**
   * Reads a list kept in the details of a check.
   * @param {SiteCheckStatsDetailValue | undefined} value - The detail.
   * @returns {string[]} The list, empty when the detail is not one.
   */
  static readDetailList(value: SiteCheckStatsDetailValue | undefined): string[] {
    return Array.isArray(value) ? value : []
  }

  /**
   * Whether an e-mail check is about a domain that sends mail on its own (not a Gmail address, not a domain without mail).
   * @param {SiteCheckStatsEntry} entry - The latest check of the domain.
   * @returns {boolean} True for a sending domain.
   */
  static isSendingDomain(entry: SiteCheckStatsEntry): boolean {
    return !EMAIL_VERDICTS_WITHOUT_SENDING_DOMAIN.some(
      (verdict: EmailDeliverabilityVerdict): boolean => verdict === entry.verdict,
    )
  }

  /**
   * Whether a point of « Tester mon site » was critical or to watch on the latest check of a site.
   * @param {SiteCheckStatsEntry} entry - The latest check of the site.
   * @param {WebsiteHealthCheckKey} check - The point.
   * @returns {boolean} True when the point needs work.
   */
  static hasFailingCheck(entry: SiteCheckStatsEntry, check: WebsiteHealthCheckKey): boolean {
    return (
      this.readDetailList(entry.details.criticalChecks).includes(check) ||
      this.readDetailList(entry.details.warningChecks).includes(check)
    )
  }

  /**
   * Builds the entry and appends it to the file of its day; a storage failure never reaches the visitor.
   * @param {SiteCheckToolKey} tool - The checker.
   * @param {string} host - The site or domain checked.
   * @param {string} verdict - The verdict sent to the visitor.
   * @param {SiteCheckStatsDetails} details - A few facts of the check.
   * @returns {Promise<void>}
   */
  private static async record(
    tool: SiteCheckToolKey,
    host: string,
    verdict: string,
    details: SiteCheckStatsDetails,
  ): Promise<void> {
    const entry: SiteCheckStatsEntry = { tool, host, verdict, details, checkedAt: new Date().toISOString() }
    try {
      await this.appendEntry(entry)
    } catch (error: unknown) {
      console.error('SiteCheckStatsService:record', { tool, error })
    }
  }

  /**
   * Appends an entry to the file of its day, one write at a time; a site checked again within the cache time counts once.
   * @param {SiteCheckStatsEntry} entry - The check.
   * @returns {Promise<void>}
   */
  private static appendEntry(entry: SiteCheckStatsEntry): Promise<void> {
    const run: Promise<void> = writeChain.then(async (): Promise<void> => {
      const storage: ReturnType<typeof useStorage> = useStorage('data')
      const day: string = entry.checkedAt.slice(0, 10)
      const key: string = `${STATS_STORAGE_KEY_PREFIX}${day}`
      const dayEntries: SiteCheckStatsEntry[] = (await storage.getItem<SiteCheckStatsEntry[]>(key)) ?? []
      const checkedAtMs: number = Date.parse(entry.checkedAt)
      const isRepeat: boolean = dayEntries.some(
        (candidate: SiteCheckStatsEntry): boolean =>
          candidate.tool === entry.tool &&
          candidate.host === entry.host &&
          checkedAtMs - Date.parse(candidate.checkedAt) < DUPLICATE_WINDOW_MS,
      )

      if (!isRepeat && dayEntries.length < DAY_ENTRIES_MAX) {
        await storage.setItem(key, [...dayEntries, entry])
      }
      if (lastCleanupDay !== day) {
        lastCleanupDay = day
        await this.forgetOldDays(storage)
      }
    })

    writeChain = run.then(
      (): void => undefined,
      (): void => undefined,
    )
    return run
  }

  /**
   * Erases the days older than twelve months, as the privacy page says.
   * @param {ReturnType<typeof useStorage>} storage - The data storage of the server.
   * @returns {Promise<void>}
   */
  private static async forgetOldDays(storage: ReturnType<typeof useStorage>): Promise<void> {
    const oldestKeptDay: string = this.findOldestKeptDay()
    const keys: string[] = await storage.getKeys(STATS_STORAGE_KEY_PREFIX)
    for (const key of keys) {
      const day: string = this.readDayFromKey(key)
      if (!DAY_KEY_REGEX.test(day) || day < oldestKeptDay) {
        await storage.removeItem(key)
      }
    }
  }

  /**
   * Reads every check of the last twelve months, oldest day first.
   * @returns {Promise<SiteCheckStatsEntry[]>} The checks.
   */
  private static async readKeptEntries(): Promise<SiteCheckStatsEntry[]> {
    const storage: ReturnType<typeof useStorage> = useStorage('data')
    const oldestKeptDay: string = this.findOldestKeptDay()
    const keys: string[] = (await storage.getKeys(STATS_STORAGE_KEY_PREFIX))
      .filter((key: string): boolean => {
        const day: string = this.readDayFromKey(key)
        return DAY_KEY_REGEX.test(day) && day >= oldestKeptDay
      })
      .sort()
    const entries: SiteCheckStatsEntry[] = []

    for (let index: number = 0; index < keys.length; index += READ_BATCH_SIZE) {
      const batch: (SiteCheckStatsEntry[] | null)[] = await Promise.all(
        keys
          .slice(index, index + READ_BATCH_SIZE)
          .map((key: string): Promise<SiteCheckStatsEntry[] | null> => storage.getItem<SiteCheckStatsEntry[]>(key)),
      )
      for (const dayEntries of batch) {
        entries.push(...(dayEntries ?? []))
      }
    }
    return entries
  }

  /**
   * The first day still kept: twelve months back from today, in UTC like the file names.
   * @returns {string} The day, as `YYYY-MM-DD`.
   */
  private static findOldestKeptDay(): string {
    return new Date(Date.now() - RETENTION_DAYS * DAY_MS).toISOString().slice(0, 10)
  }

  /**
   * The day written at the end of a storage key.
   * @param {string} key - A key of the statistics, as `site-checks:stats:YYYY-MM-DD`.
   * @returns {string} The day.
   */
  private static readDayFromKey(key: string): string {
    return key.slice(key.lastIndexOf(':') + 1)
  }

  /**
   * The latest check of each site, tool by tool.
   * @param {SiteCheckStatsEntry[]} entries - The checks, oldest first.
   * @returns {Map<string, SiteCheckStatsEntry>} The latest check, by tool and site.
   */
  private static findLatestEntryBySite(entries: SiteCheckStatsEntry[]): Map<string, SiteCheckStatsEntry> {
    const latestBySite: Map<string, SiteCheckStatsEntry> = new Map()
    for (const entry of entries) {
      const key: string = `${entry.tool}|${entry.host}`
      const known: SiteCheckStatsEntry | undefined = latestBySite.get(key)
      if (!known || known.checkedAt <= entry.checkedAt) {
        latestBySite.set(key, entry)
      }
    }
    return latestBySite
  }

  /**
   * The figures of one tool: checks per month, sites, and the verdicts of their latest check.
   * @param {SiteCheckToolKey} tool - The checker.
   * @param {SiteCheckStatsEntry[]} entries - Every check kept.
   * @param {SiteCheckStatsEntry[]} latestEntries - The latest check of each site.
   * @returns {SiteCheckStatsToolSummary} The figures.
   */
  private static buildToolSummary(
    tool: SiteCheckToolKey,
    entries: SiteCheckStatsEntry[],
    latestEntries: SiteCheckStatsEntry[],
  ): SiteCheckStatsToolSummary {
    const toolEntries: SiteCheckStatsEntry[] = entries.filter(
      (entry: SiteCheckStatsEntry): boolean => entry.tool === tool,
    )
    const toolLatestEntries: SiteCheckStatsEntry[] = latestEntries.filter(
      (entry: SiteCheckStatsEntry): boolean => entry.tool === tool,
    )
    const checksByMonth: Record<string, number> = {}
    for (const entry of toolEntries) {
      const month: string = entry.checkedAt.slice(0, 7)
      checksByMonth[month] = (checksByMonth[month] ?? 0) + 1
    }
    const verdicts: Record<string, number> = {}
    for (const entry of toolLatestEntries) {
      verdicts[entry.verdict] = (verdicts[entry.verdict] ?? 0) + 1
    }
    return {
      tool,
      checkCount: toolEntries.length,
      siteCount: toolLatestEntries.length,
      verdicts,
      checksByMonth,
    }
  }

  /**
   * One share: how many of the sites counted have the trait, and the percentage.
   * @param {SiteCheckStatsShareDefinition} definition - The rule of the share.
   * @param {SiteCheckStatsEntry[]} latestEntries - The latest check of each site.
   * @returns {SiteCheckStatsShare} The share.
   */
  private static computeShare(
    definition: SiteCheckStatsShareDefinition,
    latestEntries: SiteCheckStatsEntry[],
  ): SiteCheckStatsShare {
    const countedEntries: SiteCheckStatsEntry[] = latestEntries.filter(
      (entry: SiteCheckStatsEntry): boolean => entry.tool === definition.tool && definition.isInTotal(entry),
    )
    const siteCount: number = countedEntries.filter(definition.isInShare).length
    return {
      key: definition.key,
      tool: definition.tool,
      label: definition.label,
      siteCount,
      totalSiteCount: countedEntries.length,
      percent: countedEntries.length === 0 ? null : Math.round((siteCount / countedEntries.length) * 1000) / 10,
    }
  }

  /**
   * The keys of the points of « Tester mon site » at a given level.
   * @param {WebsiteHealthCheckItem[]} checks - The eight points.
   * @param {WebsiteHealthVerdict} verdict - The level kept.
   * @returns {string[]} Their keys.
   */
  private static listCheckKeysWithVerdict(checks: WebsiteHealthCheckItem[], verdict: WebsiteHealthVerdict): string[] {
    return checks
      .filter((check: WebsiteHealthCheckItem): boolean => check.verdict === verdict)
      .map((check: WebsiteHealthCheckItem): string => check.key)
  }

  /**
   * The state of the SPF record, read like the result card does.
   * @param {EmailDeliverabilityCheckResult} result - The e-mail check.
   * @returns {string} `missing`, `multiple`, `broken`, `weak` or `ok`.
   */
  private static readSpfState(result: EmailDeliverabilityCheckResult): string {
    if (result.spf.recordCount === 0) {
      return 'missing'
    }
    if (result.spf.recordCount > 1) {
      return 'multiple'
    }
    if (!result.spf.isValid || result.spf.allQualifier === '+') {
      return 'broken'
    }
    if (
      result.spf.allQualifier === '?' ||
      result.spf.allQualifier === null ||
      result.spf.lookupCount > SPF_MAX_LOOKUPS
    ) {
      return 'weak'
    }
    return 'ok'
  }

  /**
   * The state of the DKIM key found, read like the result card does.
   * @param {EmailDeliverabilityCheckResult} result - The e-mail check.
   * @returns {string} `missing`, `unusable`, `testMode` or `ok`.
   */
  private static readDkimState(result: EmailDeliverabilityCheckResult): string {
    if (result.dkim.selector === null) {
      return 'missing'
    }
    if (!result.dkim.isUsable) {
      return 'unusable'
    }
    return result.dkim.isTestMode ? 'testMode' : 'ok'
  }

  /**
   * The state of the DMARC record: absent, duplicated, malformed, or its policy.
   * @param {EmailDeliverabilityCheckResult} result - The e-mail check.
   * @returns {string} `missing`, `multiple`, `malformed`, `none`, `quarantine` or `reject`.
   */
  private static readDmarcState(result: EmailDeliverabilityCheckResult): string {
    if (result.dmarc.recordCount === 0) {
      return 'missing'
    }
    if (result.dmarc.recordCount > 1) {
      return 'multiple'
    }
    if (!result.dmarc.isValid || result.dmarc.policy === null) {
      return 'malformed'
    }
    return result.dmarc.policy
  }
}
