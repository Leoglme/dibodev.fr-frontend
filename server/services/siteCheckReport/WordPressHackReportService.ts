import type { MailLocale } from '~~/server/types/mail/contact'
import type { PhpVulnerabilityPlatformKey } from '~~/server/types/tools/phpVulnerabilityCheck'
import type {
  SiteCheckReport,
  SiteCheckReportLevel,
  SiteCheckReportLink,
  SiteCheckReportMailTexts,
  SiteCheckReportPoint,
  SiteCheckReportSection,
} from '~~/server/types/tools/siteCheckReport'
import type {
  WordPressClosedPlugin,
  WordPressHackCheckResult,
  WordPressHackVerdict,
  WordPressPluginResult,
  WordPressPluginStatus,
} from '~~/server/types/tools/wordpressHackCheck'
import type { DibodevWordPressHackGuideKey } from '~~/app/core/types/DibodevWordPressHackCheck'
import type { DibodevWordPressHackCheckerWording } from '~~/app/core/types/DibodevWordPressHackCheckPage'
import { PHP_VULNERABILITY_PLATFORM_LABELS } from '~~/app/core/constants/phpVulnerabilityCheck/pageShared'
import { WORDPRESS_HACK_CHECK_PAGES } from '~~/app/core/constants/wordpressHackCheckPage'
import {
  WORDPRESS_HACK_GUIDE_KEYS,
  WORDPRESS_HACK_GUIDE_SLUGS,
  WORDPRESS_HACK_VERDICTS_WITH_GUIDES,
} from '~~/app/core/constants/wordpressHackCheck/pageShared'
import { QuizTextUtils } from '~~/app/core/utils/QuizTextUtils'
import { SiteCheckReportTextUtils } from '~~/server/utils/SiteCheckReportTextUtils'

const MAX_PLATFORMS_NAMED: number = 3
const EXTERNAL_SCRIPT_DOMAIN_PLACEHOLDERS: string[] = ['domains']
const LEVEL_BY_VERDICT: Record<WordPressHackVerdict, SiteCheckReportLevel> = {
  suspiciousSignals: 'critical',
  vulnerablePlugin: 'critical',
  closedPlugin: 'critical',
  outdatedCore: 'warning',
  cleanSurface: 'ok',
  notWordPress: 'ok',
  unknown: 'unknown',
}
const LEVEL_BY_PLUGIN_STATUS: Record<WordPressPluginStatus, SiteCheckReportLevel> = {
  vulnerable: 'critical',
  unknownVersion: 'warning',
  fixed: 'ok',
}

/** The e-mailed report of a WordPress check: pages injected by an attacker are counted, never quoted. */
export class WordPressHackReportService {
  /**
   * Writes the report with the texts of the tool page: watched extensions, injected pages, warning signs, steps, guides.
   * @param {WordPressHackCheckResult} result - The check, run again by the server.
   * @param {MailLocale} locale - The language of the e-mail.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @returns {SiteCheckReport} The report.
   */
  static build(result: WordPressHackCheckResult, locale: MailLocale, texts: SiteCheckReportMailTexts): SiteCheckReport {
    const wording: DibodevWordPressHackCheckerWording = WORDPRESS_HACK_CHECK_PAGES[locale].checker
    const values: Record<string, string> = this.buildTemplateValues(result, texts)
    const sections: SiteCheckReportSection[] = []
    const pluginPoints: SiteCheckReportPoint[] = this.buildPluginPoints(result, wording)
    if (pluginPoints.length > 0) {
      sections.push({ title: wording.pluginsTitle, points: pluginPoints })
    }
    if (result.injectedContent.length > 0) {
      const injectedContentPoint: SiteCheckReportPoint = {
        level: 'critical',
        label: '',
        statusLabel: null,
        text: texts.injectedContentSummary(result.injectedContent.length),
        advice: null,
      }
      sections.push({ title: wording.injectedContentTitle, points: [injectedContentPoint] })
    }
    const signalPoints: SiteCheckReportPoint[] = this.buildSignalPoints(result, wording, values, texts)
    if (signalPoints.length > 0) {
      sections.push({ title: wording.detailsTitle, points: signalPoints })
    }

    return {
      tool: 'wordpressHack',
      host: result.host,
      verdict: result.verdict,
      level: LEVEL_BY_VERDICT[result.verdict],
      title: QuizTextUtils.fillTemplate(wording.verdictTitles[result.verdict], values),
      summary: QuizTextUtils.fillTemplate(wording.verdictTexts[result.verdict], values),
      sections,
      stepsTitle: wording.stepsTitle,
      steps: wording.steps[result.verdict].map((step: string): string => QuizTextUtils.fillTemplate(step, values)),
      guidesTitle: wording.guidesTitle,
      guides: this.buildGuideLinks(result, wording, locale),
    }
  }

  /**
   * The values of the templates, without anything the site could have written itself.
   * @param {WordPressHackCheckResult} result - The check.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail, for the values never copied.
   * @returns {Record<string, string>} The values.
   */
  private static buildTemplateValues(
    result: WordPressHackCheckResult,
    texts: SiteCheckReportMailTexts,
  ): Record<string, string> {
    const highlightedPlugin: WordPressPluginResult | null = this.findHighlightedPlugin(result)
    const firstClosedPlugin: WordPressClosedPlugin | null = result.closedPlugins[0] ?? null
    return {
      host: result.host,
      coreVersion: SiteCheckReportTextUtils.filterVersionNumber(result.coreVersion),
      latestCoreVersion: SiteCheckReportTextUtils.filterVersionNumber(result.latestCoreVersion),
      platform: this.buildPlatformLabel(result),
      plugin: SiteCheckReportTextUtils.cleanKnownName(highlightedPlugin?.name),
      pluginVersion: SiteCheckReportTextUtils.filterVersionNumber(highlightedPlugin?.versionFound),
      fixedVersion: SiteCheckReportTextUtils.filterVersionNumber(highlightedPlugin?.fixedVersion),
      closedPlugin: SiteCheckReportTextUtils.cleanKnownName(firstClosedPlugin?.name),
      closedYear: SiteCheckReportTextUtils.filterCount(firstClosedPlugin?.closedDate.slice(0, 4)),
      domains: texts.hiddenValue,
      users: SiteCheckReportTextUtils.filterCount(result.usernamesExposed),
    }
  }

  /**
   * The extension quoted by the verdict: the first vulnerable one, else the first watched one found.
   * @param {WordPressHackCheckResult} result - The check.
   * @returns {WordPressPluginResult | null} The extension, or null.
   */
  private static findHighlightedPlugin(result: WordPressHackCheckResult): WordPressPluginResult | null {
    const vulnerablePlugin: WordPressPluginResult | undefined = result.plugins.find(
      (plugin: WordPressPluginResult): boolean => plugin.status === 'vulnerable',
    )
    return vulnerablePlugin ?? result.plugins[0] ?? null
  }

  /**
   * The platforms other than WordPress seen on the site, as named on the result card.
   * @param {WordPressHackCheckResult} result - The check.
   * @returns {string} The platform names, or an empty text.
   */
  private static buildPlatformLabel(result: WordPressHackCheckResult): string {
    return result.platforms
      .filter((platform: PhpVulnerabilityPlatformKey): boolean => platform !== 'php')
      .slice(0, MAX_PLATFORMS_NAMED)
      .map((platform: PhpVulnerabilityPlatformKey): string => PHP_VULNERABILITY_PLATFORM_LABELS[platform])
      .join(', ')
  }

  /**
   * The lines of the watched extensions and of the extensions closed by WordPress.org.
   * @param {WordPressHackCheckResult} result - The check.
   * @param {DibodevWordPressHackCheckerWording} wording - The texts of the checker.
   * @returns {SiteCheckReportPoint[]} The lines.
   */
  private static buildPluginPoints(
    result: WordPressHackCheckResult,
    wording: DibodevWordPressHackCheckerWording,
  ): SiteCheckReportPoint[] {
    const points: SiteCheckReportPoint[] = []
    for (const plugin of result.plugins) {
      const pluginText: string = QuizTextUtils.fillTemplate(wording.pluginStatusTexts[plugin.status], {
        plugin: SiteCheckReportTextUtils.cleanKnownName(plugin.name),
        pluginVersion: SiteCheckReportTextUtils.filterVersionNumber(plugin.versionFound),
        fixedVersion: SiteCheckReportTextUtils.filterVersionNumber(plugin.fixedVersion),
      })
      points.push({
        level: LEVEL_BY_PLUGIN_STATUS[plugin.status],
        label: '',
        statusLabel: null,
        text: pluginText,
        advice: null,
      })
    }
    for (const closedPlugin of result.closedPlugins) {
      const closedPluginText: string = QuizTextUtils.fillTemplate(wording.closedPluginText, {
        plugin: SiteCheckReportTextUtils.cleanKnownName(closedPlugin.name),
        closedYear: SiteCheckReportTextUtils.filterCount(closedPlugin.closedDate.slice(0, 4)),
      })
      points.push({ level: 'critical', label: '', statusLabel: null, text: closedPluginText, advice: null })
    }
    return points
  }

  /**
   * The warning signs seen; the scripts loaded from other domains are counted, their names stay on the page.
   * @param {WordPressHackCheckResult} result - The check.
   * @param {DibodevWordPressHackCheckerWording} wording - The texts of the checker.
   * @param {Record<string, string>} values - The values of the templates.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @returns {SiteCheckReportPoint[]} The lines.
   */
  private static buildSignalPoints(
    result: WordPressHackCheckResult,
    wording: DibodevWordPressHackCheckerWording,
    values: Record<string, string>,
    texts: SiteCheckReportMailTexts,
  ): SiteCheckReportPoint[] {
    const points: SiteCheckReportPoint[] = []
    for (const signal of result.signals) {
      const template: string = wording.signalTexts[signal]
      const signalText: string = SiteCheckReportTextUtils.usesPlaceholder(template, EXTERNAL_SCRIPT_DOMAIN_PLACEHOLDERS)
        ? texts.externalScriptsSummary(result.externalScriptDomains.length)
        : QuizTextUtils.fillTemplate(template, values)
      points.push(SiteCheckReportTextUtils.buildFactPoint(signalText))
    }
    if (result.isWordPress && !result.coreVersion) {
      points.push(SiteCheckReportTextUtils.buildFactPoint(wording.coreVersionHiddenLine))
    }
    return points
  }

  /**
   * The three WordPress guides of the blog, when the visitor still has something to do.
   * @param {WordPressHackCheckResult} result - The check.
   * @param {DibodevWordPressHackCheckerWording} wording - The texts of the checker.
   * @param {MailLocale} locale - The language of the e-mail.
   * @returns {SiteCheckReportLink[]} The guides.
   */
  private static buildGuideLinks(
    result: WordPressHackCheckResult,
    wording: DibodevWordPressHackCheckerWording,
    locale: MailLocale,
  ): SiteCheckReportLink[] {
    if (!WORDPRESS_HACK_VERDICTS_WITH_GUIDES.includes(result.verdict)) {
      return []
    }
    return WORDPRESS_HACK_GUIDE_KEYS.map(
      (key: DibodevWordPressHackGuideKey): SiteCheckReportLink => ({
        label: wording.guideLabels[key],
        url: SiteCheckReportTextUtils.buildBlogArticleUrl(WORDPRESS_HACK_GUIDE_SLUGS[key], locale),
      }),
    )
  }
}
