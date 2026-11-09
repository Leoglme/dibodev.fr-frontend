import type { MailLocale } from '~~/server/types/mail/contact'
import type { PhpVulnerabilityPlatformKey } from '~~/server/types/tools/phpVulnerabilityCheck'
import type {
  JoomlaExtensionSeen,
  JoomlaTemplateResult,
  JoomlaVersionCheckResult,
  JoomlaVersionSignalKey,
  JoomlaVersionVerdict,
} from '~~/server/types/tools/joomlaVersionCheck'
import type {
  SiteCheckReport,
  SiteCheckReportLevel,
  SiteCheckReportLink,
  SiteCheckReportMailTexts,
  SiteCheckReportPoint,
  SiteCheckReportSection,
} from '~~/server/types/tools/siteCheckReport'
import type { DibodevJoomlaVersionGuideKey } from '~~/app/core/types/DibodevJoomlaVersionCheck'
import type { DibodevJoomlaVersionCheckerWording } from '~~/app/core/types/DibodevJoomlaVersionCheckPage'
import { JOOMLA_VERSION_CHECK_PAGES } from '~~/app/core/constants/joomlaVersionCheckPage'
import {
  JOOMLA_TEMPLATE_FRAMEWORK_LABELS,
  JOOMLA_VERSION_GUIDE_KEYS,
  JOOMLA_VERSION_GUIDE_SLUGS,
  JOOMLA_VERSION_VERDICTS_WITH_GUIDES,
} from '~~/app/core/constants/joomlaVersionCheck/pageShared'
import { PHP_VULNERABILITY_PLATFORM_LABELS } from '~~/app/core/constants/phpVulnerabilityCheck/pageShared'
import { QuizTextUtils } from '~~/app/core/utils/QuizTextUtils'
import { JOOMLA_CASSIOPEIA_TEMPLATE, JOOMLA_LEGACY_CORE_TEMPLATES } from '~~/server/constants/joomlaVersionCheck'
import { SiteCheckReportTextUtils } from '~~/server/utils/SiteCheckReportTextUtils'

const MAX_PLATFORMS_NAMED: number = 3
const LEVEL_BY_VERDICT: Record<JoomlaVersionVerdict, SiteCheckReportLevel> = {
  joomla6Latest: 'ok',
  joomla6Outdated: 'warning',
  joomla5: 'warning',
  joomla4: 'critical',
  joomla3OrOlder: 'critical',
  versionHidden: 'unknown',
  notJoomla: 'ok',
  unknown: 'unknown',
}

/** The e-mailed report of a Joomla check: template folders and unknown extensions are named on the page only, never in the mail. */
export class JoomlaVersionReportService {
  /**
   * Writes the report with the texts of the tool page: what was read, the steps in order and the guides.
   * @param {JoomlaVersionCheckResult} result - The check, run again by the server.
   * @param {MailLocale} locale - The language of the e-mail.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @returns {SiteCheckReport} The report.
   */
  static build(result: JoomlaVersionCheckResult, locale: MailLocale, texts: SiteCheckReportMailTexts): SiteCheckReport {
    const wording: DibodevJoomlaVersionCheckerWording = JOOMLA_VERSION_CHECK_PAGES[locale].checker
    const values: Record<string, string> = this.buildTemplateValues(result, texts)
    const sections: SiteCheckReportSection[] = []

    if (result.signals.length > 0) {
      sections.push({
        title: wording.detailsTitle,
        points: result.signals.map(
          (signal: JoomlaVersionSignalKey): SiteCheckReportPoint =>
            SiteCheckReportTextUtils.buildFactPoint(QuizTextUtils.fillTemplate(wording.signalTexts[signal], values)),
        ),
      })
    }
    return {
      tool: 'joomlaVersion',
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
   * @param {JoomlaVersionCheckResult} result - The check.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail, for the values never copied.
   * @returns {Record<string, string>} The values.
   */
  private static buildTemplateValues(
    result: JoomlaVersionCheckResult,
    texts: SiteCheckReportMailTexts,
  ): Record<string, string> {
    return {
      host: result.host,
      version: SiteCheckReportTextUtils.filterVersionNumber(result.version),
      major: SiteCheckReportTextUtils.filterCount(result.majorVersion),
      latestVersion: SiteCheckReportTextUtils.filterVersionNumber(result.latestVersion),
      latestVersionOfBranch: SiteCheckReportTextUtils.filterVersionNumber(result.latestVersionOfBranch),
      phpVersion: SiteCheckReportTextUtils.filterVersionNumber(result.phpVersion),
      template: result.template ? this.buildTemplateName(result.template, texts) : '',
      framework: result.template?.framework ? JOOMLA_TEMPLATE_FRAMEWORK_LABELS[result.template.framework] : '',
      extensions: this.buildExtensionNames(result.extensions, texts),
      platform: this.buildPlatformLabel(result),
    }
  }

  /**
   * The name of a template shipped with Joomla, written as Joomla does; any other folder name stays on the page.
   * @param {JoomlaTemplateResult} template - The template read on the page.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @returns {string} The name, or the hidden value of the e-mail.
   */
  private static buildTemplateName(template: JoomlaTemplateResult, texts: SiteCheckReportMailTexts): string {
    const isShippedTemplate: boolean =
      template.name === JOOMLA_CASSIOPEIA_TEMPLATE || JOOMLA_LEGACY_CORE_TEMPLATES.includes(template.name)

    if (!isShippedTemplate) {
      return texts.hiddenValue
    }
    return `${template.name.charAt(0).toUpperCase()}${template.name.slice(1)}`
  }

  /**
   * The extensions we know by name; the others are counted out of the mail, their folder names stay on the page.
   * @param {JoomlaExtensionSeen[]} extensions - The extensions seen on the page.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @returns {string} The names joined, with the hidden value when some are left out.
   */
  private static buildExtensionNames(extensions: JoomlaExtensionSeen[], texts: SiteCheckReportMailTexts): string {
    const namesInMail: string[] = extensions
      .map((extension: JoomlaExtensionSeen): string => SiteCheckReportTextUtils.cleanKnownName(extension.label))
      .filter((name: string): boolean => name !== '')
    const hasUnknownExtension: boolean = namesInMail.length < extensions.length

    if (hasUnknownExtension) {
      namesInMail.push(texts.hiddenValue)
    }
    return namesInMail.join(', ')
  }

  /**
   * The platforms other than Joomla seen on the site, as named on the result card.
   * @param {JoomlaVersionCheckResult} result - The check.
   * @returns {string} The platform names, or an empty text.
   */
  private static buildPlatformLabel(result: JoomlaVersionCheckResult): string {
    return result.platforms
      .filter((platform: PhpVulnerabilityPlatformKey): boolean => platform !== 'php')
      .slice(0, MAX_PLATFORMS_NAMED)
      .map((platform: PhpVulnerabilityPlatformKey): string => PHP_VULNERABILITY_PLATFORM_LABELS[platform])
      .join(', ')
  }

  /**
   * The Joomla 6 guide and the PHP 8.2 guide of the blog, when an update lies ahead.
   * @param {JoomlaVersionCheckResult} result - The check.
   * @param {DibodevJoomlaVersionCheckerWording} wording - The texts of the checker.
   * @param {MailLocale} locale - The language of the e-mail.
   * @returns {SiteCheckReportLink[]} The guides.
   */
  private static buildGuideLinks(
    result: JoomlaVersionCheckResult,
    wording: DibodevJoomlaVersionCheckerWording,
    locale: MailLocale,
  ): SiteCheckReportLink[] {
    if (!JOOMLA_VERSION_VERDICTS_WITH_GUIDES.includes(result.verdict)) {
      return []
    }
    return JOOMLA_VERSION_GUIDE_KEYS.map(
      (key: DibodevJoomlaVersionGuideKey): SiteCheckReportLink => ({
        label: wording.guideLabels[key],
        url: SiteCheckReportTextUtils.buildBlogArticleUrl(JOOMLA_VERSION_GUIDE_SLUGS[key], locale),
      }),
    )
  }
}
