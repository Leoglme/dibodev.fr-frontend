import type {
  PhpVulnerabilityPlatformKey,
  PhpVulnerabilitySignalKey,
} from '~~/server/types/tools/phpVulnerabilityCheck'
import type {
  JoomlaExtensionPathFound,
  JoomlaExtensionSeen,
  JoomlaFetchedPage,
  JoomlaPhpVersion,
  JoomlaProbeOutcome,
  JoomlaTemplateFramework,
  JoomlaTemplateResult,
  JoomlaVersionCacheEntry,
  JoomlaVersionCheckResult,
  JoomlaVersionClues,
  JoomlaVersionParts,
  JoomlaVersionSignalKey,
  JoomlaVersionVerdict,
} from '~~/server/types/tools/joomlaVersionCheck'
import {
  JOOMLA_6_MINIMUM_PHP_VERSION,
  JOOMLA_ADMIN_LOGIN_PATH,
  JOOMLA_CASSIOPEIA_TEMPLATE,
  JOOMLA_CORE_EXTENSION_NAMES,
  JOOMLA_EXTENSION_LABELS,
  JOOMLA_IGNORED_TEMPLATE_FOLDERS,
  JOOMLA_LATEST_VERSION,
  JOOMLA_LATEST_VERSION_BY_MAJOR,
  JOOMLA_LEGACY_CORE_TEMPLATES,
  JOOMLA_TEMPLATE_FRAMEWORK_EXTENSION_NAMES,
  JOOMLA_VERSION_FILE_PATHS,
} from '~~/server/constants/joomlaVersionCheck'
import { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'
import { WordPressHackCheckService } from '~~/server/services/WordPressHackCheckService'

const CACHE_TTL_MS: number = 10 * 60 * 1000
const CACHE_MAX_ENTRIES: number = 500
const PROBE_TIMEOUT_MS: number = 5000
const MAX_EXTENSIONS_LISTED: number = 8
const USER_AGENT: string = 'DibodevJoomlaCheck/1.0 (+https://dibodev.fr/outils/version-joomla-verifier-mon-site)'

/** Markers of Joomla missed by the shared platform list: script options (3.7 and later), media of extensions, child templates, Helix Ultimate. */
const JOOMLA_EXTRA_HTML_MARKERS: string[] = [
  'joomla-script-options',
  '/media/com_',
  '/media/mod_',
  '/media/plg_',
  '/media/templates/site/',
  'helix_ultimate_generator_text',
  'joomla! template framework',
]
const JOOMLA_3_ERA_FILE_MARKERS: string[] = ['/media/jui/', '/media/system/js/mootools']
const JOOMLA_4_PLUS_FILE_MARKERS: string[] = ['/media/vendor/', '/media/templates/site/']
const HELIX_ULTIMATE_MARKERS: string[] = [
  '/plugins/system/helixultimate/',
  'helix_ultimate_generator_text',
  'content="helix ultimate',
]
const YOOTHEME_TEMPLATE_PREFIX: string = 'yootheme'
const EXTENDED_SUPPORT_SUFFIX: string = 'elts'

const VERSION_TAG_REGEX: RegExp =
  /<version>\s*(\d{1,2})\.(\d{1,3})(?:\.(\d{1,3}))?(?:-([a-z0-9]{1,12}))?\s*<\/version>/i
const VERSION_FILE_SIGNATURE_REGEX: RegExp = /files_joomla|<metafile\b/i
const MEDIA_TEMPLATE_REGEX: RegExp = /\/media\/templates\/site\/([a-z0-9_-]{1,60})\//g
const TEMPLATE_FOLDER_REGEX: RegExp = /\/templates\/([a-z0-9_-]{1,60})\//g
const COMPONENT_OR_MODULE_REGEX: RegExp = /\/(?:components|modules|media)\/((?:com|mod)_([a-z0-9_]{1,60}))\//g
const PLUGIN_FOLDER_REGEX: RegExp = /\/plugins\/([a-z0-9-]{1,30})\/([a-z0-9_]{1,60})\//g
const PLUGIN_MEDIA_REGEX: RegExp = /\/media\/plg_([a-z0-9-]{1,30})_([a-z0-9_]{1,60})\//g

const resultCache: Map<string, JoomlaVersionCacheEntry> = new Map()

/** Reads a public Joomla site from outside, as a browser would, and says how far it is from Joomla 6. */
export class JoomlaVersionCheckService {
  /**
   * Checks a host, from the cache when it was read in the last minutes.
   * @param {string} host - A host name returned by `PhpVulnerabilityCheckService.normalizeHost`.
   * @returns {Promise<JoomlaVersionCheckResult>} What is visible from outside.
   * @throws {H3Error} 400 when the host is not public, 502 when the site cannot be read.
   */
  static async checkHost(host: string): Promise<JoomlaVersionCheckResult> {
    const now: number = Date.now()
    const cached: JoomlaVersionCacheEntry | undefined = resultCache.get(host)

    if (cached && cached.expiresAt > now) {
      return cached.result
    }
    await PhpVulnerabilityCheckService.assertPublicHost(host)
    const page: JoomlaFetchedPage = await PhpVulnerabilityCheckService.fetchHomePage(host)
    const result: JoomlaVersionCheckResult = await JoomlaVersionCheckService.buildResult(host, page)

    if (resultCache.size >= CACHE_MAX_ENTRIES) {
      JoomlaVersionCheckService.pruneCache(now)
    }
    resultCache.set(host, { result, expiresAt: now + CACHE_TTL_MS })
    return result
  }

  /**
   * Builds the result from the home page, then from the public version files when the site runs Joomla.
   * @param {string} host - The host checked.
   * @param {JoomlaFetchedPage} page - Final address, headers and start of the HTML of the home page.
   * @returns {Promise<JoomlaVersionCheckResult>} The verdict and the clues behind it.
   */
  static async buildResult(host: string, page: JoomlaFetchedPage): Promise<JoomlaVersionCheckResult> {
    const html: string = page.html.toLowerCase()
    const platforms: Set<PhpVulnerabilityPlatformKey> = new Set()
    const phpSignals: Set<PhpVulnerabilitySignalKey> = new Set()

    PhpVulnerabilityCheckService.detectPlatformsFromHtml(html, platforms, phpSignals)
    PhpVulnerabilityCheckService.detectPlatformsFromHeaders(page.headers, platforms)
    if (JOOMLA_EXTRA_HTML_MARKERS.some((marker: string): boolean => html.includes(marker))) {
      platforms.add('joomla')
    }
    const orderedPlatforms: PhpVulnerabilityPlatformKey[] = PhpVulnerabilityCheckService.orderPlatforms(platforms)
    const checkedAt: string = new Date().toISOString()

    if (!platforms.has('joomla')) {
      const hasNamedPlatform: boolean = orderedPlatforms.some(
        (platform: PhpVulnerabilityPlatformKey): boolean => platform !== 'php',
      )

      return {
        host,
        finalUrl: page.finalUrl,
        verdict: hasNamedPlatform ? 'notJoomla' : 'unknown',
        isJoomla: false,
        version: null,
        majorVersion: null,
        isExtendedSupportBuild: false,
        latestVersionOfBranch: null,
        latestVersion: JOOMLA_LATEST_VERSION,
        phpVersion: null,
        template: null,
        extensions: [],
        platforms: orderedPlatforms,
        signals: [],
        checkedAt,
      }
    }
    const versionFileOutcomes: JoomlaProbeOutcome[] = await JoomlaVersionCheckService.readVersionFiles(page.finalUrl)
    const versionParts: JoomlaVersionParts | null = JoomlaVersionCheckService.pickVersion(versionFileOutcomes)
    const phpVersion: JoomlaPhpVersion | null = PhpVulnerabilityCheckService.parsePhpVersion(
      await JoomlaVersionCheckService.readPoweredBy(page, versionFileOutcomes),
    )
    const verdict: JoomlaVersionVerdict = JoomlaVersionCheckService.decideVerdict(versionParts)
    const template: JoomlaTemplateResult | null = JoomlaVersionCheckService.readTemplate(html)
    const extensions: JoomlaExtensionSeen[] = JoomlaVersionCheckService.readExtensions(html)
    const latestVersionOfBranch: string | null = versionParts
      ? (JOOMLA_LATEST_VERSION_BY_MAJOR[versionParts.major] ?? null)
      : null

    return {
      host,
      finalUrl: page.finalUrl,
      verdict,
      isJoomla: true,
      version: versionParts ? JoomlaVersionCheckService.formatVersion(versionParts) : null,
      majorVersion: versionParts?.major ?? null,
      isExtendedSupportBuild: versionParts?.suffix === EXTENDED_SUPPORT_SUFFIX,
      latestVersionOfBranch,
      latestVersion: JOOMLA_LATEST_VERSION,
      phpVersion: JoomlaVersionCheckService.formatPhpVersion(phpVersion),
      template,
      extensions,
      platforms: orderedPlatforms,
      signals: JoomlaVersionCheckService.collectSignals({
        verdict,
        versionParts,
        hasJoomla3Files: JOOMLA_3_ERA_FILE_MARKERS.some((marker: string): boolean => html.includes(marker)),
        hasJoomla4PlusFiles: JOOMLA_4_PLUS_FILE_MARKERS.some((marker: string): boolean => html.includes(marker)),
        latestVersionOfBranch,
        phpVersion,
        template,
        extensions,
      }),
      checkedAt,
    }
  }

  /**
   * The first version found in the answers of the version files, in their order.
   * @param {JoomlaProbeOutcome[]} versionFileOutcomes - The answers of the version files.
   * @returns {JoomlaVersionParts | null} The version, or null when every file is blocked or missing.
   */
  static pickVersion(versionFileOutcomes: JoomlaProbeOutcome[]): JoomlaVersionParts | null {
    for (const outcome of versionFileOutcomes) {
      const parts: JoomlaVersionParts | null = JoomlaVersionCheckService.readVersionTag(outcome)

      if (parts) {
        return parts
      }
    }
    return null
  }

  /**
   * Decides the verdict from the version read in a public file only: old templates load Joomla 3 files on later versions.
   * @param {JoomlaVersionParts | null} versionParts - The version read, or null when the site hides it.
   * @returns {JoomlaVersionVerdict} The verdict of a Joomla site.
   */
  static decideVerdict(versionParts: JoomlaVersionParts | null): JoomlaVersionVerdict {
    if (!versionParts) {
      return 'versionHidden'
    }
    const major: number = versionParts.major

    if (major >= 6) {
      return JoomlaVersionCheckService.compareVersions(versionParts, JOOMLA_LATEST_VERSION) >= 0
        ? 'joomla6Latest'
        : 'joomla6Outdated'
    }
    if (major === 5) {
      return 'joomla5'
    }
    if (major === 4) {
      return 'joomla4'
    }
    return 'joomla3OrOlder'
  }

  /**
   * Lists the lines of the result: where the version comes from, then PHP, template and extensions when an update lies ahead.
   * @param {JoomlaVersionClues} clues - What the check found.
   * @returns {JoomlaVersionSignalKey[]} The signals, in display order.
   */
  static collectSignals(clues: JoomlaVersionClues): JoomlaVersionSignalKey[] {
    const signals: JoomlaVersionSignalKey[] = []
    const { verdict, versionParts }: JoomlaVersionClues = clues

    if (versionParts) {
      signals.push('versionFromCoreFile')
      if (
        clues.latestVersionOfBranch &&
        JoomlaVersionCheckService.compareVersions(versionParts, clues.latestVersionOfBranch) < 0
      ) {
        signals.push('behindLatestOfBranch')
      }
      if (versionParts.suffix === EXTENDED_SUPPORT_SUFFIX) {
        signals.push('extendedSupportBuild')
      }
    } else if (clues.hasJoomla4PlusFiles) {
      signals.push('joomla4PlusFiles')
    } else if (clues.hasJoomla3Files) {
      signals.push('joomla3Files')
    }
    if (verdict === 'joomla6Latest' || verdict === 'joomla6Outdated') {
      return signals
    }
    if (!clues.phpVersion) {
      signals.push('phpHidden')
    } else {
      signals.push(
        JoomlaVersionCheckService.isPhpVersionEnoughForJoomla6(clues.phpVersion)
          ? 'phpReadyForJoomla6'
          : 'phpTooOldForJoomla6',
      )
    }
    if (clues.template) {
      signals.push(JoomlaVersionCheckService.pickTemplateSignal(clues.template, verdict === 'joomla3OrOlder'))
    }
    if (clues.extensions.length > 0) {
      signals.push('extensionsSeen')
    }
    return signals
  }

  /**
   * The template line: shipped with Joomla, built on a known framework, or made for this site.
   * @param {JoomlaTemplateResult} template - The template of the page.
   * @param {boolean} isJoomla3OrOlder - Whether the site is still on Joomla 3 or older.
   * @returns {JoomlaVersionSignalKey} The signal of the template.
   */
  static pickTemplateSignal(template: JoomlaTemplateResult, isJoomla3OrOlder: boolean): JoomlaVersionSignalKey {
    if (template.kind === 'framework') {
      return 'frameworkTemplate'
    }
    if (template.kind === 'core' && isJoomla3OrOlder) {
      return 'joomla3CoreTemplate'
    }
    if (template.kind === 'core') {
      return template.name === JOOMLA_CASSIOPEIA_TEMPLATE ? 'cassiopeiaTemplate' : 'cassiopeiaChildTemplate'
    }
    return isJoomla3OrOlder ? 'joomla3CustomTemplate' : 'customTemplate'
  }

  /**
   * Whether a PHP version is recent enough for Joomla 6.
   * @param {JoomlaPhpVersion} phpVersion - The PHP version served.
   * @returns {boolean} True from PHP 8.3 on.
   */
  static isPhpVersionEnoughForJoomla6(phpVersion: JoomlaPhpVersion): boolean {
    const minimum: JoomlaPhpVersion = JOOMLA_6_MINIMUM_PHP_VERSION

    return phpVersion.major > minimum.major || (phpVersion.major === minimum.major && phpVersion.minor >= minimum.minor)
  }

  /**
   * Reads the core manifest first, then the language files together when the manifest is blocked.
   * @param {string} finalUrl - The address of the home page finally served.
   * @returns {Promise<JoomlaProbeOutcome[]>} The answers, in the order of `JOOMLA_VERSION_FILE_PATHS`.
   */
  static async readVersionFiles(finalUrl: string): Promise<JoomlaProbeOutcome[]> {
    const [manifestPath, ...fallbackPaths]: string[] = JOOMLA_VERSION_FILE_PATHS
    const manifest: JoomlaProbeOutcome = await JoomlaVersionCheckService.probe(new URL(manifestPath ?? '/', finalUrl))

    if (JoomlaVersionCheckService.readVersionTag(manifest)) {
      return [manifest]
    }
    const fallbacks: JoomlaProbeOutcome[] = await Promise.all(
      fallbackPaths.map(
        (path: string): Promise<JoomlaProbeOutcome> => JoomlaVersionCheckService.probe(new URL(path, finalUrl)),
      ),
    )
    return [manifest, ...fallbacks]
  }

  /**
   * Reads the `<version>` of a Joomla XML file (core manifest or language file), ignoring any other page served with a 200.
   * @param {JoomlaProbeOutcome} outcome - The answer of the file.
   * @returns {JoomlaVersionParts | null} The version, or null when the answer is not such a file.
   */
  static readVersionTag(outcome: JoomlaProbeOutcome): JoomlaVersionParts | null {
    if (outcome.status !== 200 || !VERSION_FILE_SIGNATURE_REGEX.test(outcome.body)) {
      return null
    }
    const match: RegExpExecArray | null = VERSION_TAG_REGEX.exec(outcome.body)

    if (!match) {
      return null
    }
    return {
      major: Number(match[1]),
      minor: Number(match[2]),
      patch: match[3] === undefined ? 0 : Number(match[3]),
      suffix: match[4]?.toLowerCase() ?? null,
    }
  }

  /**
   * The `X-Powered-By` of the home page, else of a version file, else of the login page of the administration.
   * @param {JoomlaFetchedPage} page - The home page.
   * @param {JoomlaProbeOutcome[]} versionFileOutcomes - The answers of the version files.
   * @returns {Promise<string>} The header, or an empty text when no answer showed one.
   */
  static async readPoweredBy(page: JoomlaFetchedPage, versionFileOutcomes: JoomlaProbeOutcome[]): Promise<string> {
    const headerNamingPhp: string | undefined = [
      page.headers.get('x-powered-by') ?? '',
      ...versionFileOutcomes.map((outcome: JoomlaProbeOutcome): string => outcome.poweredBy),
    ].find((poweredBy: string): boolean => PhpVulnerabilityCheckService.parsePhpVersion(poweredBy) !== null)

    if (headerNamingPhp) {
      return headerNamingPhp
    }
    const adminLogin: JoomlaProbeOutcome = await JoomlaVersionCheckService.probe(
      new URL(JOOMLA_ADMIN_LOGIN_PATH, page.finalUrl),
    )
    return adminLogin.poweredBy
  }

  /**
   * The template of the page: a child template of Joomla 4 and later first (named `<parent>_<child>`), else the folder the page loads most.
   * @param {string} html - The home page, lowercase.
   * @returns {JoomlaTemplateResult | null} The template, or null when the page loads none.
   */
  static readTemplate(html: string): JoomlaTemplateResult | null {
    const mediaTemplates: string[] = JoomlaVersionCheckService.listFolders(html, MEDIA_TEMPLATE_REGEX)
    const childTemplate: string | undefined = mediaTemplates.find((folder: string): boolean =>
      mediaTemplates.some((parent: string): boolean => folder.startsWith(`${parent}_`)),
    )
    const name: string | undefined =
      childTemplate ?? mediaTemplates[0] ?? JoomlaVersionCheckService.listFolders(html, TEMPLATE_FOLDER_REGEX)[0]

    if (!name) {
      return null
    }
    const framework: JoomlaTemplateFramework | null = JoomlaVersionCheckService.detectFramework(html, name)

    if (framework) {
      return { name, kind: 'framework', framework }
    }
    const isCore: boolean = name.startsWith(JOOMLA_CASSIOPEIA_TEMPLATE) || JOOMLA_LEGACY_CORE_TEMPLATES.includes(name)

    return { name, kind: isCore ? 'core' : 'custom', framework: null }
  }

  /**
   * The template framework of the page, when it is one of those seen running on Joomla 6.
   * @param {string} html - The home page, lowercase.
   * @param {string} templateName - The template folder.
   * @returns {JoomlaTemplateFramework | null} The framework, or null.
   */
  static detectFramework(html: string, templateName: string): JoomlaTemplateFramework | null {
    if (HELIX_ULTIMATE_MARKERS.some((marker: string): boolean => html.includes(marker))) {
      return 'helixUltimate'
    }
    return templateName.startsWith(YOOTHEME_TEMPLATE_PREFIX) ? 'yoothemePro' : null
  }

  /**
   * The folders matched by a pattern, the most loaded first, without the folders that are never a template.
   * @param {string} html - The home page, lowercase.
   * @param {RegExp} pattern - A global pattern whose first group is the folder.
   * @returns {string[]} The folders.
   */
  static listFolders(html: string, pattern: RegExp): string[] {
    const counts: Map<string, number> = new Map()

    for (const match of html.matchAll(pattern)) {
      const folder: string | undefined = match[1]

      if (folder && !JOOMLA_IGNORED_TEMPLATE_FOLDERS.includes(folder)) {
        counts.set(folder, (counts.get(folder) ?? 0) + 1)
      }
    }
    return [...counts.entries()]
      .sort((left: [string, number], right: [string, number]): number => right[1] - left[1])
      .map(([folder]: [string, number]): string => folder)
  }

  /**
   * The extensions that are not part of Joomla, in the order the page loads them, one line per extension.
   * @param {string} html - The home page, lowercase.
   * @returns {JoomlaExtensionSeen[]} At most eight extensions.
   */
  static readExtensions(html: string): JoomlaExtensionSeen[] {
    const found: JoomlaExtensionPathFound[] = []

    for (const match of html.matchAll(COMPONENT_OR_MODULE_REGEX)) {
      const name: string = match[2] ?? ''

      found.push({
        index: match.index ?? 0,
        element: match[1] ?? '',
        name,
        label: JOOMLA_EXTENSION_LABELS[name] ?? null,
      })
    }
    for (const pattern of [PLUGIN_FOLDER_REGEX, PLUGIN_MEDIA_REGEX]) {
      for (const match of html.matchAll(pattern)) {
        const group: string = match[1] ?? ''
        const name: string = match[2] ?? ''

        found.push({
          index: match.index ?? 0,
          element: `plg_${group}_${name}`,
          name,
          label: JOOMLA_EXTENSION_LABELS[name] ?? JOOMLA_EXTENSION_LABELS[group] ?? null,
        })
      }
    }
    const extensions: JoomlaExtensionSeen[] = []
    const seenKeys: Set<string> = new Set()

    found.sort((left: JoomlaExtensionPathFound, right: JoomlaExtensionPathFound): number => left.index - right.index)
    for (const { element, name, label } of found) {
      const key: string = label ?? element
      const isCoreExtension: boolean = JOOMLA_CORE_EXTENSION_NAMES.includes(name)
      const isTemplateFramework: boolean = JOOMLA_TEMPLATE_FRAMEWORK_EXTENSION_NAMES.includes(name)

      if (!name || isCoreExtension || isTemplateFramework || seenKeys.has(key)) {
        continue
      }
      seenKeys.add(key)
      extensions.push({ element, label })
    }
    return extensions.slice(0, MAX_EXTENSIONS_LISTED)
  }

  /**
   * Writes a version as Joomla does (`5.4.10`), without its suffix.
   * @param {JoomlaVersionParts} parts - The version.
   * @returns {string} The version number.
   */
  static formatVersion(parts: JoomlaVersionParts): string {
    return `${parts.major}.${parts.minor}.${parts.patch}`
  }

  /**
   * Writes the PHP version shown by the server (`8.4.27`, or `8.4` when the header names the branch only).
   * @param {JoomlaPhpVersion | null} phpVersion - The version read.
   * @returns {string | null} The version, or null when no header showed it.
   */
  static formatPhpVersion(phpVersion: JoomlaPhpVersion | null): string | null {
    if (!phpVersion) {
      return null
    }
    return phpVersion.patch === null
      ? `${phpVersion.major}.${phpVersion.minor}`
      : `${phpVersion.major}.${phpVersion.minor}.${phpVersion.patch}`
  }

  /**
   * Compares a version read on a site with a release number.
   * @param {JoomlaVersionParts} parts - The version read.
   * @param {string} release - A release number such as `6.2.0`.
   * @returns {number} Negative when the site is older, 0 when equal, positive when newer.
   */
  static compareVersions(parts: JoomlaVersionParts, release: string): number {
    return WordPressHackCheckService.compareVersions(JoomlaVersionCheckService.formatVersion(parts), release)
  }

  /**
   * Reads a small public file of the site, without following redirects off the site; never throws.
   * @param {URL} url - The address to read.
   * @returns {Promise<JoomlaProbeOutcome>} Its status, the start of its body and its PHP header.
   */
  static async probe(url: URL): Promise<JoomlaProbeOutcome> {
    try {
      const response: Response = await fetch(url, {
        method: 'GET',
        redirect: 'manual',
        signal: AbortSignal.timeout(PROBE_TIMEOUT_MS),
        headers: { 'user-agent': USER_AGENT, accept: 'application/xml,text/xml,text/html;q=0.9,*/*;q=0.5' },
      })
      const body: string = await PhpVulnerabilityCheckService.readBodyStart(response)

      return { status: response.status, body, poweredBy: response.headers.get('x-powered-by') ?? '' }
    } catch {
      return { status: 0, body: '', poweredBy: '' }
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
