import type { MailLocale } from '~~/server/types/mail/contact'
import type {
  GdprConsentToolFinding,
  GdprConsentToolKey,
  GdprCookieCheckResult,
  GdprCookieCheckVerdict,
  GdprLinkFinding,
  GdprTrackerFinding,
} from '~~/server/types/tools/gdprCookieCheck'
import type {
  SiteCheckReport,
  SiteCheckReportLevel,
  SiteCheckReportPoint,
  SiteCheckReportSection,
} from '~~/server/types/tools/siteCheckReport'
import type { DibodevGdprCookieCheckerWording } from '~~/app/core/types/DibodevGdprCookieCheckPage'
import { GDPR_COOKIE_CHECK_PAGES } from '~~/app/core/constants/gdprCookieCheckPage'
import { GDPR_CONSENT_TOOL_LABELS } from '~~/app/core/constants/gdprCookieCheck/pageShared'
import { QuizTextUtils } from '~~/app/core/utils/QuizTextUtils'
import { SiteCheckReportTextUtils } from '~~/server/utils/SiteCheckReportTextUtils'

const LEVEL_BY_VERDICT: Record<GdprCookieCheckVerdict, SiteCheckReportLevel> = {
  compliantLikely: 'ok',
  needsCheck: 'warning',
  atRisk: 'critical',
  unknown: 'unknown',
}

/** The e-mailed report of a GDPR cookie check: trackers, consent tool and legal links, as on the result card. */
export class GdprCookieReportService {
  /**
   * Writes the report with the texts of the tool page; an unreadable page without any finding keeps the verdict alone.
   * @param {GdprCookieCheckResult} result - The check, run again by the server.
   * @param {MailLocale} locale - The language of the e-mail.
   * @returns {SiteCheckReport} The report.
   */
  static build(result: GdprCookieCheckResult, locale: MailLocale): SiteCheckReport {
    const wording: DibodevGdprCookieCheckerWording = GDPR_COOKIE_CHECK_PAGES[locale].checker
    const hasNothingToShow: boolean =
      !result.isPageReadable && result.trackers.length === 0 && result.consentTool.status !== 'found'
    const sections: SiteCheckReportSection[] = []
    if (!hasNothingToShow) {
      const linkPoints: SiteCheckReportPoint[] = result.links.map(
        (link: GdprLinkFinding): SiteCheckReportPoint => this.buildLinkPoint(link, wording),
      )
      sections.push({ title: wording.trackersTitle, points: this.buildTrackerPoints(result.trackers, wording) })
      sections.push({
        title: wording.consentToolTitle,
        points: [this.buildConsentToolPoint(result.consentTool, wording)],
      })
      sections.push({ title: wording.linksTitle, points: linkPoints })
    }

    return {
      tool: 'gdprCookie',
      host: result.host,
      verdict: result.verdict,
      level: LEVEL_BY_VERDICT[result.verdict],
      title: QuizTextUtils.fillTemplate(wording.verdictTitles[result.verdict], { host: result.host }),
      summary: wording.verdictTexts[result.verdict],
      sections,
      stepsTitle: '',
      steps: [],
      guidesTitle: '',
      guides: [],
    }
  }

  /**
   * The tracker lines, or a single line saying that no known tracker was seen.
   * @param {GdprTrackerFinding[]} trackers - The trackers found.
   * @param {DibodevGdprCookieCheckerWording} wording - The texts of the checker.
   * @returns {SiteCheckReportPoint[]} The lines.
   */
  private static buildTrackerPoints(
    trackers: GdprTrackerFinding[],
    wording: DibodevGdprCookieCheckerWording,
  ): SiteCheckReportPoint[] {
    if (trackers.length === 0) {
      const noTrackerPoint: SiteCheckReportPoint = {
        level: 'ok',
        label: wording.noTracker.label,
        statusLabel: wording.noTracker.badge,
        text: wording.noTracker.seenText,
        advice: null,
      }
      return [noTrackerPoint]
    }
    return trackers.map(
      (tracker: GdprTrackerFinding): SiteCheckReportPoint => ({
        level: tracker.level,
        label: wording.trackerLabels[tracker.key],
        statusLabel: wording.loadingLabels[tracker.loading],
        text: wording.loadingSeenTexts[tracker.loading],
        advice: this.findTrackerAdvice(tracker, wording),
      }),
    )
  }

  /**
   * The advice of a tracker line: how to keep it waiting for consent, or what to change when it does not wait.
   * @param {GdprTrackerFinding} tracker - The tracker found.
   * @param {DibodevGdprCookieCheckerWording} wording - The texts of the checker.
   * @returns {string | null} The advice, or null when there is none.
   */
  private static findTrackerAdvice(
    tracker: GdprTrackerFinding,
    wording: DibodevGdprCookieCheckerWording,
  ): string | null {
    if (tracker.level === 'ok') {
      return SiteCheckReportTextUtils.convertEmptyTextToNull(wording.loadingAdviceTexts[tracker.loading])
    }
    return SiteCheckReportTextUtils.convertEmptyTextToNull(wording.trackerAdviceTexts[tracker.key])
  }

  /**
   * The consent tool line, with the names of the tools found and their automatic blocking when set.
   * @param {GdprConsentToolFinding} consentTool - The consent tool finding.
   * @param {DibodevGdprCookieCheckerWording} wording - The texts of the checker.
   * @returns {SiteCheckReportPoint} The line.
   */
  private static buildConsentToolPoint(
    consentTool: GdprConsentToolFinding,
    wording: DibodevGdprCookieCheckerWording,
  ): SiteCheckReportPoint {
    const toolNames: string = consentTool.tools
      .map((tool: GdprConsentToolKey): string => GDPR_CONSENT_TOOL_LABELS[tool])
      .join(', ')
    const seenText: string = QuizTextUtils.fillTemplate(wording.consentToolSeenTexts[consentTool.status], {
      tools: toolNames,
    })
    const hasAutoBlocking: boolean = consentTool.status === 'found' && consentTool.hasAutoBlocking
    return {
      level: consentTool.level,
      label: wording.consentToolLabel,
      statusLabel: wording.consentToolStatusLabels[consentTool.status],
      text: hasAutoBlocking ? `${seenText} ${wording.consentToolAutoBlockingText}` : seenText,
      advice: SiteCheckReportTextUtils.convertEmptyTextToNull(wording.consentToolAdviceTexts[consentTool.status]),
    }
  }

  /**
   * One footer link line: found, missing, provided by the consent tool, not needed or unreadable.
   * @param {GdprLinkFinding} link - The link finding.
   * @param {DibodevGdprCookieCheckerWording} wording - The texts of the checker.
   * @returns {SiteCheckReportPoint} The line.
   */
  private static buildLinkPoint(link: GdprLinkFinding, wording: DibodevGdprCookieCheckerWording): SiteCheckReportPoint {
    return {
      level: link.level,
      label: wording.linkLabels[link.key],
      statusLabel: wording.linkStatusLabels[link.status],
      text: wording.linkDetailTexts[link.detailKey],
      advice: SiteCheckReportTextUtils.convertEmptyTextToNull(wording.linkAdviceTexts[link.detailKey]),
    }
  }
}
