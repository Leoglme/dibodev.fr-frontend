import type { MailLocale } from '~~/server/types/mail/contact'
import type { GmailSendAsAnswers, GmailSendAsCheckResult } from '~~/server/types/tools/gmailSendAsCheck'
import type {
  SiteCheckReport,
  SiteCheckReportLevel,
  SiteCheckReportLink,
  SiteCheckReportMailTexts,
  SiteCheckReportPoint,
  SiteCheckReportSection,
} from '~~/server/types/tools/siteCheckReport'
import type {
  DibodevGmailSendAsHostGuideArticle,
  DibodevGmailSendAsOutcome,
  DibodevGmailSendAsVerdict,
} from '~~/app/core/types/DibodevGmailSendAsCheck'
import type { DibodevGmailSendAsCheckerWording } from '~~/app/core/types/DibodevGmailSendAsCheckPage'
import { createError } from 'h3'
import { GMAIL_SEND_AS_CHECK_PAGES } from '~~/app/core/constants/gmailSendAsCheckPage'
import {
  GMAIL_SEND_AS_CONSUMER_MAILBOX_GUIDE_SLUG,
  GMAIL_SEND_AS_HOST_GUIDE_ARTICLES,
  GMAIL_SEND_AS_VERDICTS_WITH_SOLUTIONS,
} from '~~/app/core/constants/gmailSendAsCheck/pageShared'
import { GmailSendAsUtils } from '~~/app/core/utils/GmailSendAsUtils'
import { QuizTextUtils } from '~~/app/core/utils/QuizTextUtils'
import { SiteCheckReportTextUtils } from '~~/server/utils/SiteCheckReportTextUtils'

const NO_ANSWERS: GmailSendAsAnswers = { reading: null, sending: null, receiving: null }
const LEVEL_BY_VERDICT: Record<DibodevGmailSendAsVerdict, SiteCheckReportLevel> = {
  bothAffected: 'critical',
  sendingAffected: 'warning',
  receivingAffected: 'warning',
  notAffected: 'ok',
  toCheck: 'info',
  notInGmail: 'ok',
  googleHosted: 'ok',
  gmailAddress: 'ok',
  noMailSetup: 'info',
  invalidDomain: 'unknown',
}

/** The e-mailed report of a Gmail "Send mail as" check: the mail server name published by the domain owner stays on the page. */
export class GmailSendAsReportService {
  /**
   * Writes the report with the texts of the tool page: the verdict the answers lead to, where the mail is hosted, the steps and the guide of the host.
   * @param {GmailSendAsCheckResult} result - The check, run again by the server.
   * @param {GmailSendAsAnswers | null} answers - What the visitor answered to the three questions, or null when nothing was sent.
   * @param {MailLocale} locale - The language of the e-mail.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @returns {SiteCheckReport} The report.
   * @throws {H3Error} 400 when the verdict depends on an answer that was not given.
   */
  static build(
    result: GmailSendAsCheckResult,
    answers: GmailSendAsAnswers | null,
    locale: MailLocale,
    texts: SiteCheckReportMailTexts,
  ): SiteCheckReport {
    const outcome: DibodevGmailSendAsOutcome | null = GmailSendAsUtils.decideOutcome(
      result.hosting,
      answers ?? NO_ANSWERS,
    )
    if (!outcome) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid payload: an answer the verdict depends on is missing.',
      })
    }
    const wording: DibodevGmailSendAsCheckerWording = GMAIL_SEND_AS_CHECK_PAGES[locale].checker
    const values: Record<string, string> = this.buildTemplateValues(result, texts)

    return {
      tool: 'gmailSendAs',
      host: result.domain,
      verdict: outcome.verdict,
      level: LEVEL_BY_VERDICT[outcome.verdict],
      title: QuizTextUtils.fillTemplate(wording.verdictTitles[outcome.verdict], values),
      summary: QuizTextUtils.fillTemplate(wording.verdictTexts[outcome.verdict], values),
      sections: this.buildHostingSections(result, outcome, wording, values),
      stepsTitle: wording.stepsTitle,
      steps: (wording.verdictSteps[outcome.verdict] ?? []).map((step: string): string =>
        QuizTextUtils.fillTemplate(step, values),
      ),
      guidesTitle: QuizTextUtils.fillTemplate(wording.hostGuideTitle, values),
      guides: this.buildHostGuideLinks(result, outcome, locale, texts),
    }
  }

  /**
   * The values of the templates: the domain checked and our own name of its mail host, never the server name it publishes.
   * @param {GmailSendAsCheckResult} result - The check.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail, for the values never copied.
   * @returns {Record<string, string>} The values.
   */
  private static buildTemplateValues(
    result: GmailSendAsCheckResult,
    texts: SiteCheckReportMailTexts,
  ): Record<string, string> {
    return {
      domain: result.domain,
      host: this.buildMailHostName(result, texts),
      mxHost: texts.hiddenValue,
    }
  }

  /**
   * The mail host as the result card names it: our catalog name, the domain of a consumer mailbox, or the words for a host we do not know.
   * @param {GmailSendAsCheckResult} result - The check.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @returns {string} The name.
   */
  private static buildMailHostName(result: GmailSendAsCheckResult, texts: SiteCheckReportMailTexts): string {
    if (result.mailHost) {
      return SiteCheckReportTextUtils.cleanKnownName(result.mailHost.name)
    }
    return result.hosting === 'consumerMailbox' ? result.domain : texts.unrecognizedMailHostName
  }

  /**
   * Where the mail of the domain is hosted, then what the visitor still has to look at in Gmail when an answer was "I don't know".
   * @param {GmailSendAsCheckResult} result - The check.
   * @param {DibodevGmailSendAsOutcome} outcome - The verdict.
   * @param {DibodevGmailSendAsCheckerWording} wording - The texts of the checker.
   * @param {Record<string, string>} values - The values of the templates.
   * @returns {SiteCheckReportSection[]} The section, or none for a domain that does not exist.
   */
  private static buildHostingSections(
    result: GmailSendAsCheckResult,
    outcome: DibodevGmailSendAsOutcome,
    wording: DibodevGmailSendAsCheckerWording,
    values: Record<string, string>,
  ): SiteCheckReportSection[] {
    const points: SiteCheckReportPoint[] = []

    if (result.hosting !== 'invalidDomain') {
      points.push(
        SiteCheckReportTextUtils.buildFactPoint(
          QuizTextUtils.fillTemplate(wording.hostingLines[result.hosting], values),
        ),
      )
    }
    if (outcome.mustCheckSending) {
      points.push(this.buildCheckNotePoint(wording.checkSendingNote))
    }
    if (outcome.mustCheckReceiving) {
      points.push(this.buildCheckNotePoint(wording.checkReceivingNote))
    }
    return points.length > 0 ? [{ title: wording.hostingTitle, points }] : []
  }

  /**
   * A line of the Gmail settings the visitor still has to read, shown as a warning.
   * @param {string} note - The sentence of the result card.
   * @returns {SiteCheckReportPoint} The point.
   */
  private static buildCheckNotePoint(note: string): SiteCheckReportPoint {
    return { level: 'warning', label: '', statusLabel: null, text: note, advice: null }
  }

  /**
   * The blog guide of the mail host, when the verdict leaves something to do and the host has one.
   * @param {GmailSendAsCheckResult} result - The check.
   * @param {DibodevGmailSendAsOutcome} outcome - The verdict.
   * @param {MailLocale} locale - The language of the e-mail.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @returns {SiteCheckReportLink[]} The guide, or no link.
   */
  private static buildHostGuideLinks(
    result: GmailSendAsCheckResult,
    outcome: DibodevGmailSendAsOutcome,
    locale: MailLocale,
    texts: SiteCheckReportMailTexts,
  ): SiteCheckReportLink[] {
    if (!GMAIL_SEND_AS_VERDICTS_WITH_SOLUTIONS.includes(outcome.verdict)) {
      return []
    }
    const guideSlug: string | null = this.findHostGuideSlug(result)

    if (!guideSlug) {
      return []
    }
    return [{ label: texts.mailHostGuideLabel, url: SiteCheckReportTextUtils.buildBlogArticleUrl(guideSlug, locale) }]
  }

  /**
   * The slug of the guide written for the mail host: one for the internet provider mailboxes, one per host we cover.
   * @param {GmailSendAsCheckResult} result - The check.
   * @returns {string | null} The slug, or null when the host has no guide.
   */
  private static findHostGuideSlug(result: GmailSendAsCheckResult): string | null {
    if (result.hosting === 'consumerMailbox') {
      return GMAIL_SEND_AS_CONSUMER_MAILBOX_GUIDE_SLUG
    }
    const guideArticle: DibodevGmailSendAsHostGuideArticle | undefined = GMAIL_SEND_AS_HOST_GUIDE_ARTICLES.find(
      (article: DibodevGmailSendAsHostGuideArticle): boolean => article.mailHost === result.mailHost?.key,
    )

    return guideArticle?.slug ?? null
  }
}
