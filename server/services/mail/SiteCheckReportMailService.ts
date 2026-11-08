import type { DateTime } from 'luxon'
import type { ContactMailAction, ContactMailDetailRow } from '~~/server/types/mail/contact'
import type {
  SiteCheckMailContent,
  SiteCheckReport,
  SiteCheckReportLevel,
  SiteCheckReportLevelColors,
  SiteCheckReportMailPoint,
  SiteCheckReportMailSection,
  SiteCheckReportMailStep,
  SiteCheckReportMailTexts,
  SiteCheckReportPoint,
  SiteCheckReportRequest,
  SiteCheckReportSection,
} from '~~/server/types/tools/siteCheckReport'
import { NBSP } from '~~/app/core/constants/typography'
import { registerHandlebarsHelpers } from '~~/server/helpers/HandlebarsHelpers'
import {
  buildOwnerActions,
  buildOwnerDetailRows,
  formatDetailRowsAsText,
} from '~~/server/services/mail/contactNotificationContent'
import { EMAIL_SIGNATURE_HTML, EMAIL_SIGNATURE_TEXT } from '~~/server/services/mail/emailSignature'
import { ownerEmail, websiteName } from '~~/server/services/mail/mail.config'
import MjmlService from '~~/server/services/mail/mjml/MjmlService'
import { sendMail } from '~~/server/services/mail/sendMail'
import {
  SITE_CHECK_LEAD_FROM_NAME,
  SITE_CHECK_REPORT_MAIL_TEXTS,
  SITE_CHECK_VERDICT_LABELS_FR,
} from '~~/server/services/mail/siteCheckReportMailTexts'
import { MailDateUtils } from '~~/server/utils/MailDateUtils'
import { SiteCheckReportTextUtils } from '~~/server/utils/SiteCheckReportTextUtils'

const TEST_SUBJECT_PREFIX: string = process.env.NODE_ENV === 'production' ? '' : '[TEST] '
const OWNER_REPLY_ACTION_LABEL: string = 'Écrire'
const OWNER_HEADER_TITLE: string = 'Contact outil'
const OWNER_CONSENT_SENTENCE: string = 'Le visiteur accepte d’être recontacté au sujet de ce site.'
const OWNER_FOOTER_TEXT: string =
  'Envoyé par les outils gratuits de dibodev.fr, avec l’accord du visiteur. Répondre à cet e\u2011mail écrit directement au visiteur.'
const LEVEL_COLORS: Record<SiteCheckReportLevel, SiteCheckReportLevelColors> = {
  ok: { accent: '#1f9d55', badgeBackground: '#e7f6ee', badgeText: '#17663a' },
  warning: { accent: '#d97706', badgeBackground: '#fdf3e3', badgeText: '#8a4b06' },
  critical: { accent: '#dc2626', badgeBackground: '#fdecec', badgeText: '#a11d1d' },
  unknown: { accent: '#9a9a93', badgeBackground: '#f0f0ed', badgeText: '#55554f' },
  info: { accent: '#6f5fe0', badgeBackground: '#f0edff', badgeText: '#4a3dc0' },
}

/** The two e-mails of a requested report: the result for the visitor, and the owner's notice when contact is accepted. */
export class SiteCheckReportMailService {
  /**
   * Writes the e-mail that carries the result of the check, in the visitor's language.
   * @param {SiteCheckReportRequest} request - The checked request.
   * @param {SiteCheckReport} report - The report built from the check.
   * @returns {Promise<SiteCheckMailContent>} The subject, the HTML and text parts and the sender name.
   */
  static async buildReportMail(
    request: SiteCheckReportRequest,
    report: SiteCheckReport,
  ): Promise<SiteCheckMailContent> {
    registerHandlebarsHelpers()

    const texts: SiteCheckReportMailTexts = SITE_CHECK_REPORT_MAIL_TEXTS[request.locale]
    const toolName: string = texts.toolNames[report.tool]
    const subject: string = `${TEST_SUBJECT_PREFIX}${texts.subject(toolName, report.host)}`
    const testAgainUrl: string = SiteCheckReportTextUtils.buildToolPageUrl(report.tool, request.locale)
    const footerText: string = request.contactConsent ? texts.footerTextWithContactConsent : texts.footerText
    const steps: SiteCheckReportMailStep[] = report.steps.map(
      (step: string, index: number): SiteCheckReportMailStep => ({ number: index + 1, text: step }),
    )

    const htmlContent: string = await MjmlService.getHtml({
      viewPath: 'site-check-report',
      payload: {
        subject,
        preheader: texts.preheader(toolName, report.host),
        headerTitle: websiteName,
        headerMeta: null,
        eyebrow: texts.eyebrow(toolName),
        title: report.title,
        summary: report.summary,
        sections: this.buildMailSections(report.sections),
        adviceLabel: texts.adviceLabel,
        hasSteps: steps.length > 0,
        stepsTitle: report.stepsTitle,
        steps,
        hasGuides: report.guides.length > 0,
        guidesTitle: report.guidesTitle,
        guides: report.guides,
        testAgainIntro: texts.testAgainIntro,
        testAgainLabel: texts.testAgainLabel,
        testAgainUrl,
        helpIntro: texts.helpIntro,
        signOff: texts.signOff,
        signature: EMAIL_SIGNATURE_HTML,
        footerText,
        privacyUrl: texts.privacyUrl,
        privacyLabel: texts.privacyLabel,
      },
      partialsNames: ['head', 'header', 'footer'],
    })

    return {
      subject,
      htmlContent,
      textContent: this.buildReportText(report, texts, testAgainUrl, footerText),
      fromName: texts.fromName,
    }
  }

  /**
   * Sends the visitor the result of the check, written by the server from the real check.
   * @param {SiteCheckReportRequest} request - The checked request.
   * @param {SiteCheckReport} report - The report built from the check.
   * @returns {Promise<void>} Resolves once Mailjet accepted the e-mail.
   */
  static async sendReportMail(request: SiteCheckReportRequest, report: SiteCheckReport): Promise<void> {
    const mail: SiteCheckMailContent = await this.buildReportMail(request, report)
    await sendMail({
      toEmail: request.email,
      subject: mail.subject,
      htmlContent: mail.htmlContent,
      textContent: mail.textContent,
      fromName: mail.fromName,
    })
  }

  /**
   * Writes the owner's notice of a visitor who agreed to be contacted about the site checked, with the result sent.
   * @param {SiteCheckReportRequest} request - The checked request, with the contact consent.
   * @param {SiteCheckReport} report - The report sent to the visitor.
   * @returns {Promise<SiteCheckMailContent>} The subject, the HTML and text parts and the sender name.
   */
  static async buildLeadMail(request: SiteCheckReportRequest, report: SiteCheckReport): Promise<SiteCheckMailContent> {
    registerHandlebarsHelpers()

    const toolName: string = SITE_CHECK_REPORT_MAIL_TEXTS.fr.toolNames[report.tool]
    const verdictLabel: string = SITE_CHECK_VERDICT_LABELS_FR[report.tool][report.verdict] ?? report.verdict
    const receivedAt: DateTime = MailDateUtils.fromIsoInParis(request.receivedAt)
    const subject: string = `${TEST_SUBJECT_PREFIX}${OWNER_HEADER_TITLE} · ${toolName} · ${report.host} · ${verdictLabel}`
    const qualification: string = `${toolName} · ${verdictLabel}`
    const actions: ContactMailAction[] = buildOwnerActions(
      request.email,
      null,
      OWNER_REPLY_ACTION_LABEL,
      SITE_CHECK_REPORT_MAIL_TEXTS[request.locale].replySubject(report.host),
    )
    const contactRows: ContactMailDetailRow[] = buildOwnerDetailRows({
      email: request.email,
      phone: null,
      source: null,
      pagePath: request.pagePath,
      locale: request.locale,
      receivedAt,
    })
    const pointRows: ContactMailDetailRow[] = this.buildPointRows(report)
    const toolUrl: string = SiteCheckReportTextUtils.buildToolPageUrl(report.tool, 'fr')

    const htmlContent: string = await MjmlService.getHtml({
      viewPath: 'site-check-lead',
      payload: {
        subject,
        preheader: `${qualification}. ${OWNER_CONSENT_SENTENCE}`,
        headerTitle: OWNER_HEADER_TITLE,
        headerMeta: MailDateUtils.formatFrenchShortDateAndTime(receivedAt),
        chipText: 'A accepté d’être recontacté au sujet de ce site',
        host: report.host,
        qualification,
        actions,
        contactRows,
        reportTitle: report.title,
        reportSummary: report.summary,
        pointRows,
        toolUrl,
        footerText: OWNER_FOOTER_TEXT,
        privacyUrl: null,
      },
      partialsNames: ['head', 'header', 'footer'],
    })

    const textContent: string = [
      `${OWNER_HEADER_TITLE}${NBSP}: ${report.host}`,
      qualification,
      OWNER_CONSENT_SENTENCE,
      '',
      'Le visiteur',
      ...formatDetailRowsAsText(contactRows),
      '',
      'Le résultat envoyé',
      report.title,
      report.summary,
      ...formatDetailRowsAsText(pointRows),
      '',
      `Outil${NBSP}: ${toolUrl}`,
    ].join('\n')

    return { subject, htmlContent, textContent, fromName: SITE_CHECK_LEAD_FROM_NAME }
  }

  /**
   * Tells the owner at once that a visitor agreed to be contacted about the site checked; replying writes to the visitor.
   * @param {SiteCheckReportRequest} request - The checked request, with the contact consent.
   * @param {SiteCheckReport} report - The report sent to the visitor.
   * @returns {Promise<void>} Resolves once Mailjet accepted the e-mail.
   */
  static async sendLeadMail(request: SiteCheckReportRequest, report: SiteCheckReport): Promise<void> {
    const mail: SiteCheckMailContent = await this.buildLeadMail(request, report)
    await sendMail({
      toEmail: ownerEmail,
      toName: websiteName,
      subject: mail.subject,
      htmlContent: mail.htmlContent,
      textContent: mail.textContent,
      fromName: mail.fromName,
      replyTo: { Email: request.email },
    })
  }

  /**
   * The sections of the report with the colours of each point, as the template reads them.
   * @param {SiteCheckReportSection[]} sections - The sections of the report.
   * @returns {SiteCheckReportMailSection[]} The sections for the template.
   */
  private static buildMailSections(sections: SiteCheckReportSection[]): SiteCheckReportMailSection[] {
    return sections.map(
      (section: SiteCheckReportSection): SiteCheckReportMailSection => ({
        title: section.title,
        points: section.points.map(
          (point: SiteCheckReportPoint): SiteCheckReportMailPoint => ({
            ...point,
            accentColor: LEVEL_COLORS[point.level].accent,
            badgeBackground: LEVEL_COLORS[point.level].badgeBackground,
            badgeColor: LEVEL_COLORS[point.level].badgeText,
          }),
        ),
      }),
    )
  }

  /**
   * The heading of a point in the text part: its label and status word, or the status word alone.
   * @param {SiteCheckReportPoint} point - The point.
   * @returns {string} The heading, empty for a plain fact.
   */
  private static buildPointHeading(point: SiteCheckReportPoint): string {
    if (!point.label) {
      return point.statusLabel ?? ''
    }
    if (!point.statusLabel) {
      return point.label
    }
    return `${point.label} (${point.statusLabel})`
  }

  /**
   * One point of the report as a plain-text line, with its advice on the next line.
   * @param {SiteCheckReportPoint} point - The point.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @returns {string} The line.
   */
  private static buildPointText(point: SiteCheckReportPoint, texts: SiteCheckReportMailTexts): string {
    const heading: string = this.buildPointHeading(point)
    let sentence: string = point.text
    if (heading && point.text) {
      sentence = `${heading}${texts.labelSeparator}${point.text}`
    } else if (heading) {
      sentence = heading
    }
    if (!point.advice) {
      return `- ${sentence}`
    }
    return `- ${sentence}\n  ${texts.adviceLabel} ${point.advice}`
  }

  /**
   * The plain-text part of the visitor's e-mail, for the mail clients that do not show HTML.
   * @param {SiteCheckReport} report - The report.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @param {string} testAgainUrl - The address of the tool page.
   * @param {string} footerText - The footer line.
   * @returns {string} The text.
   */
  private static buildReportText(
    report: SiteCheckReport,
    texts: SiteCheckReportMailTexts,
    testAgainUrl: string,
    footerText: string,
  ): string {
    const lines: string[] = [texts.eyebrow(texts.toolNames[report.tool]), report.title, '', report.summary]
    for (const section of report.sections) {
      lines.push('', section.title)
      for (const point of section.points) {
        lines.push(this.buildPointText(point, texts))
      }
    }
    if (report.steps.length > 0) {
      lines.push('', report.stepsTitle)
      report.steps.forEach((step: string, index: number): void => {
        lines.push(`${index + 1}. ${step}`)
      })
    }
    if (report.guides.length > 0) {
      lines.push('', report.guidesTitle)
      for (const guide of report.guides) {
        lines.push(`${guide.label}${texts.labelSeparator}${guide.url}`)
      }
    }
    lines.push(
      '',
      texts.testAgainIntro,
      `${texts.testAgainLabel}${texts.labelSeparator}${testAgainUrl}`,
      '',
      texts.helpIntro,
      '',
      texts.signOff,
      EMAIL_SIGNATURE_TEXT,
      '',
      footerText,
    )
    return lines.join('\n')
  }

  /**
   * The points of the report as rows of the owner's notice: the label (or the section) and what was seen.
   * @param {SiteCheckReport} report - The report.
   * @returns {ContactMailDetailRow[]} The rows.
   */
  private static buildPointRows(report: SiteCheckReport): ContactMailDetailRow[] {
    const rows: ContactMailDetailRow[] = []
    for (const section of report.sections) {
      for (const point of section.points) {
        let value: string = point.text
        if (point.statusLabel && point.text) {
          value = `${point.statusLabel} · ${point.text}`
        } else if (point.statusLabel) {
          value = point.statusLabel
        }
        rows.push({ label: point.label || section.title, value, href: null })
      }
    }
    return rows
  }
}
