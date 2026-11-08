import type { MailLocale } from '~~/server/types/mail/contact'
import type {
  SiteCheckReport,
  SiteCheckReportLevel,
  SiteCheckReportLink,
  SiteCheckReportMailTexts,
  SiteCheckReportPoint,
  SiteCheckToolKey,
} from '~~/server/types/tools/siteCheckReport'
import type {
  WebsiteHealthCheckItem,
  WebsiteHealthCheckResult,
  WebsiteHealthOverallVerdict,
} from '~~/server/types/tools/websiteHealthCheck'
import type { DibodevWebsiteHealthDetailedToolKey } from '~~/app/core/types/DibodevWebsiteHealthCheck'
import type { DibodevWebsiteHealthCheckerWording } from '~~/app/core/types/DibodevWebsiteHealthCheckPage'
import { WEBSITE_HEALTH_CHECK_PAGES } from '~~/app/core/constants/websiteHealthCheckPage'
import {
  WEBSITE_HEALTH_DETAILED_TOOL_BY_CHECK,
  WEBSITE_HEALTH_VERDICTS_WITH_ADVICE,
} from '~~/app/core/constants/websiteHealthCheck/pageShared'
import { QuizTextUtils } from '~~/app/core/utils/QuizTextUtils'
import { SiteCheckReportTextUtils } from '~~/server/utils/SiteCheckReportTextUtils'

const GENERATOR_TAG_VALUE_KEY: string = 'generator'
const LEVEL_BY_OVERALL_VERDICT: Record<WebsiteHealthOverallVerdict, SiteCheckReportLevel> = {
  healthy: 'ok',
  needsAttention: 'warning',
  atRisk: 'critical',
}
const TOOL_BY_DETAILED_TOOL: Record<DibodevWebsiteHealthDetailedToolKey, SiteCheckToolKey> = {
  php: 'phpVulnerability',
  wordpress: 'wordpressHack',
  email: 'emailDeliverability',
}

/** The e-mailed report of « Tester mon site »: the eight points, their advice and the detailed checkers worth opening. */
export class WebsiteHealthReportService {
  /**
   * Writes the report with the texts of the tool page.
   * @param {WebsiteHealthCheckResult} result - The check, run again by the server.
   * @param {MailLocale} locale - The language of the e-mail.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @returns {SiteCheckReport} The report.
   */
  static build(result: WebsiteHealthCheckResult, locale: MailLocale, texts: SiteCheckReportMailTexts): SiteCheckReport {
    const wording: DibodevWebsiteHealthCheckerWording = WEBSITE_HEALTH_CHECK_PAGES[locale].checker
    const hostValues: Record<string, string> = { host: result.host }
    const checkPoints: SiteCheckReportPoint[] = result.checks.map(
      (check: WebsiteHealthCheckItem): SiteCheckReportPoint => this.buildCheckPoint(check, result.host, wording, texts),
    )

    return {
      tool: 'websiteHealth',
      host: result.host,
      verdict: result.overall,
      level: LEVEL_BY_OVERALL_VERDICT[result.overall],
      title: QuizTextUtils.fillTemplate(wording.overallTitles[result.overall], hostValues),
      summary: QuizTextUtils.fillTemplate(wording.overallTexts[result.overall], hostValues),
      sections: [{ title: wording.checksTitle, points: checkPoints }],
      stepsTitle: '',
      steps: [],
      guidesTitle: texts.detailedToolsTitle,
      guides: this.buildDetailedToolLinks(result, wording, locale),
    }
  }

  /**
   * One of the eight points: its verdict word, the sentence of the card and, when something is left to do, the advice.
   * @param {WebsiteHealthCheckItem} check - The point.
   * @param {string} host - The site checked.
   * @param {DibodevWebsiteHealthCheckerWording} wording - The texts of the checker.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @returns {SiteCheckReportPoint} The line.
   */
  private static buildCheckPoint(
    check: WebsiteHealthCheckItem,
    host: string,
    wording: DibodevWebsiteHealthCheckerWording,
    texts: SiteCheckReportMailTexts,
  ): SiteCheckReportPoint {
    const values: Record<string, string> = this.buildCheckValues(check, host, texts)
    const hasSomethingToDo: boolean = WEBSITE_HEALTH_VERDICTS_WITH_ADVICE.includes(check.verdict)
    const advice: string | null = hasSomethingToDo
      ? SiteCheckReportTextUtils.convertEmptyTextToNull(
          QuizTextUtils.fillTemplate(wording.adviceTexts[check.detailKey] ?? '', values),
        )
      : null
    return {
      level: check.verdict,
      label: wording.checkLabels[check.key],
      statusLabel: wording.verdictLabels[check.verdict],
      text: QuizTextUtils.fillTemplate(wording.detailTexts[check.detailKey], values),
      advice,
    }
  }

  /**
   * The values quoted by a point, with the host, and the generator tag written by the site replaced by a neutral text.
   * @param {WebsiteHealthCheckItem} check - The point.
   * @param {string} host - The site checked.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail, for the values never copied.
   * @returns {Record<string, string>} The values.
   */
  private static buildCheckValues(
    check: WebsiteHealthCheckItem,
    host: string,
    texts: SiteCheckReportMailTexts,
  ): Record<string, string> {
    const values: Record<string, string> = { host, ...check.values }
    if (values[GENERATOR_TAG_VALUE_KEY]) {
      values[GENERATOR_TAG_VALUE_KEY] = texts.hiddenValue
    }
    return values
  }

  /**
   * The detailed checkers of the points that need work (PHP, WordPress, e-mails), each linked once.
   * @param {WebsiteHealthCheckResult} result - The check.
   * @param {DibodevWebsiteHealthCheckerWording} wording - The texts of the checker.
   * @param {MailLocale} locale - The language of the e-mail.
   * @returns {SiteCheckReportLink[]} The links.
   */
  private static buildDetailedToolLinks(
    result: WebsiteHealthCheckResult,
    wording: DibodevWebsiteHealthCheckerWording,
    locale: MailLocale,
  ): SiteCheckReportLink[] {
    const detailedToolKeys: DibodevWebsiteHealthDetailedToolKey[] = []
    for (const check of result.checks) {
      const detailedToolKey: DibodevWebsiteHealthDetailedToolKey | undefined =
        WEBSITE_HEALTH_DETAILED_TOOL_BY_CHECK[check.key]
      const needsWork: boolean = WEBSITE_HEALTH_VERDICTS_WITH_ADVICE.includes(check.verdict)
      if (detailedToolKey && needsWork && !detailedToolKeys.includes(detailedToolKey)) {
        detailedToolKeys.push(detailedToolKey)
      }
    }
    return detailedToolKeys.map(
      (detailedToolKey: DibodevWebsiteHealthDetailedToolKey): SiteCheckReportLink => ({
        label: wording.detailedToolLabels[detailedToolKey],
        url: SiteCheckReportTextUtils.buildToolPageUrl(TOOL_BY_DETAILED_TOOL[detailedToolKey], locale),
      }),
    )
  }
}
