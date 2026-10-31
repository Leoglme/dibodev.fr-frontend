import type { DateTime } from 'luxon'
import type { ContactMailDetailRow } from '~~/server/types/mail/contact'
import type {
  EmailCapture,
  EmailCaptureAlertState,
  EmailCaptureAlertTotals,
  EmailCaptureContactKind,
  EmailCaptureDigestContent,
  EmailCaptureDigestEntry,
  EmailCaptureDigestMailEntry,
  EmailCaptureKind,
  EmailCaptureKindLabels,
} from '~~/server/types/mail/emailCaptureDigest'
import MjmlService from '~~/server/services/mail/mjml/MjmlService'
import { sendMail } from '~~/server/services/mail/sendMail'
import { ownerEmail, websiteName } from '~~/server/services/mail/mail.config'
import { registerHandlebarsHelpers } from '~~/server/helpers/HandlebarsHelpers'
import { CONTACT_LOCALE_NAMES, OWNER_NOTIFICATION_FROM_NAME } from '~~/server/services/mail/contactMailTexts'
import { EMAIL_LABEL, formatDetailRowsAsText } from '~~/server/services/mail/contactNotificationContent'
import { SecurityAlertService } from '~~/server/services/SecurityAlertService'
import { MailDateUtils } from '~~/server/utils/MailDateUtils'
import { PagePathUtils } from '~~/server/utils/PagePathUtils'

const KIND_COUNT_LABELS: Record<EmailCaptureKind, EmailCaptureKindLabels> = {
  alert: { one: 'demande d’alerte', many: 'demandes d’alerte' },
  contactIntent: {
    one: 'formulaire de contact commencé sans être envoyé',
    many: 'formulaires de contact commencés sans être envoyés',
  },
  contactForm: { one: 'demande de contact envoyée', many: 'demandes de contact envoyées' },
}

const ALERT_STATE_LABELS: Record<EmailCaptureAlertState, string> = {
  confirmed: 'Confirmée',
  pending: 'En attente du clic de confirmation',
  unsubscribed: 'Désinscrite',
  erased: 'Effacée',
}

const CONTACT_NOTIFICATION_SUBJECTS: Record<EmailCaptureContactKind, string> = {
  contactIntent: 'Intention de contact',
  contactForm: 'Nouvelle demande',
}

/**
 * Names what the visitor asked for, as the heading of an entry.
 * @param {EmailCaptureDigestEntry} entry - The entry.
 * @returns {string} The label ("Alerte panne o2switch", "Demande de contact envoyée").
 */
function describeEntry(entry: EmailCaptureDigestEntry): string {
  const capture: EmailCapture = entry.capture

  if (capture.kind === 'contactIntent') {
    return 'Formulaire de contact commencé, pas envoyé'
  }
  if (capture.kind === 'contactForm') {
    return 'Demande de contact envoyée'
  }
  if (capture.alertTopic?.startsWith('hosting:')) {
    return `Alerte panne ${SecurityAlertService.findHostingProviderName(capture.alertTopic) ?? capture.alertTopic}`
  }
  return 'Alerte faille PHP / WordPress'
}

/**
 * Builds the details of an entry, without the empty ones; a contact form points to its notification mail.
 * @param {EmailCaptureDigestEntry} entry - The entry.
 * @returns {ContactMailDetailRow[]} The rows.
 */
function buildEntryRows(entry: EmailCaptureDigestEntry): ContactMailDetailRow[] {
  const capture: EmailCapture = entry.capture
  const rows: ContactMailDetailRow[] = []

  if (capture.email) {
    rows.push({ label: EMAIL_LABEL, value: capture.email, href: `mailto:${capture.email}` })
  }
  if (capture.kind !== 'alert') {
    const capturedAt: DateTime = MailDateUtils.fromIsoInParis(capture.capturedAt)

    rows.push({
      label: 'Coordonnées',
      value: `Dans le mail « ${CONTACT_NOTIFICATION_SUBJECTS[capture.kind]} » de ${MailDateUtils.formatFrenchTime(capturedAt)}`,
      href: null,
    })
  }
  if (capture.site) {
    rows.push({ label: 'Site indiqué', value: capture.site, href: `https://${capture.site}` })
  }
  if (entry.alertState) {
    rows.push({ label: 'État', value: ALERT_STATE_LABELS[entry.alertState], href: null })
  }
  if (capture.projectType) {
    rows.push({ label: 'Projet', value: capture.projectType, href: null })
  }
  if (capture.pagePath) {
    rows.push({ label: 'Page', value: capture.pagePath, href: PagePathUtils.buildSiteUrl(capture.pagePath) })
  }
  if (capture.landingPagePath && capture.landingPagePath !== capture.pagePath) {
    rows.push({
      label: 'Page d’entrée',
      value: capture.landingPagePath,
      href: PagePathUtils.buildSiteUrl(capture.landingPagePath),
    })
  }
  if (capture.acquisitionSource) {
    rows.push({ label: 'Source', value: capture.acquisitionSource, href: null })
  }
  rows.push({ label: 'Langue', value: CONTACT_LOCALE_NAMES[capture.locale], href: null })
  return rows
}

/**
 * Sums up the entries per form ("2 demandes d’alerte et 1 demande de contact envoyée").
 * @param {EmailCaptureDigestEntry[]} entries - The entries shown.
 * @returns {string} The summary.
 */
function summarizeKinds(entries: EmailCaptureDigestEntry[]): string {
  const kinds: EmailCaptureKind[] = ['alert', 'contactIntent', 'contactForm']
  const parts: string[] = []

  for (const kind of kinds) {
    const count: number = entries.filter(
      (entry: EmailCaptureDigestEntry): boolean => entry.capture.kind === kind,
    ).length

    if (count === 1) {
      parts.push(`1 ${KIND_COUNT_LABELS[kind].one}`)
    }
    if (count > 1) {
      parts.push(`${count} ${KIND_COUNT_LABELS[kind].many}`)
    }
  }
  if (parts.length <= 1) {
    return parts[0] ?? ''
  }
  return `${parts.slice(0, -1).join(', ')} et ${parts[parts.length - 1]}`
}

/**
 * Writes the line on the older entries left out of the recap.
 * @param {number} hiddenCount - How many entries the recap does not show.
 * @param {number} shownCount - How many entries the recap shows.
 * @returns {string | null} The line, or null when every entry is shown.
 */
function describeHiddenEntries(hiddenCount: number, shownCount: number): string | null {
  if (hiddenCount === 0) {
    return null
  }
  if (hiddenCount === 1) {
    return `Et 1 plus ancienne, non affichée : le récap montre les ${shownCount} dernières.`
  }
  return `Et ${hiddenCount} plus anciennes, non affichées : le récap montre les ${shownCount} dernières.`
}

/**
 * Writes the line on the alert subscriptions active today.
 * @param {EmailCaptureAlertTotals} totals - The counts.
 * @returns {string} The line.
 */
function describeAlertTotals(totals: EmailCaptureAlertTotals): string {
  return `Abonnés confirmés aux alertes : ${totals.confirmedSecurity} pour les failles, ${totals.confirmedHosting} pour les pannes d’hébergeur. En attente de confirmation : ${totals.pending}.`
}

/**
 * Sends the owner the recap of the forms filled on the site since the previous recap.
 * @param {EmailCaptureDigestContent} content - The entries, oldest first, the period and the alert counts.
 * @returns {Promise<void>} Resolves once the e-mail is handed to Mailjet.
 */
export async function sendEmailCaptureDigestMail(content: EmailCaptureDigestContent): Promise<void> {
  registerHandlebarsHelpers()

  const periodStart: DateTime = MailDateUtils.fromIsoInParis(content.periodStart)
  const periodEnd: DateTime = MailDateUtils.fromIsoInParis(content.periodEnd)
  const total: number = content.entries.length + content.hiddenCount
  const countLabel: string = total === 1 ? '1 adresse laissée' : `${total} adresses laissées`
  const subject: string = `Récap du jour · ${countLabel} sur dibodev.fr`
  const intro: string = `Depuis le ${MailDateUtils.formatFrenchShortDateAndTime(periodStart)} : ${summarizeKinds(content.entries)}.`
  const hiddenText: string | null = describeHiddenEntries(content.hiddenCount, content.entries.length)
  const alertTotalsText: string = describeAlertTotals(content.alertTotals)
  const entries: EmailCaptureDigestMailEntry[] = content.entries.map(
    (entry: EmailCaptureDigestEntry): EmailCaptureDigestMailEntry => ({
      heading: `${describeEntry(entry)} · ${MailDateUtils.formatFrenchShortDateAndTime(
        MailDateUtils.fromIsoInParis(entry.capture.capturedAt),
      )}`,
      rows: buildEntryRows(entry),
    }),
  )

  const htmlContent: string = await MjmlService.getHtml({
    viewPath: 'email-capture-digest',
    payload: {
      subject,
      preheader: intro,
      headerTitle: 'Récap du jour',
      headerMeta: MailDateUtils.formatFrenchShortDateAndTime(periodEnd),
      title: `${countLabel} sur le site`,
      intro,
      entries,
      hiddenText,
      alertTotalsText,
      footerText:
        'Envoyé chaque matin à 8 h, seulement quand quelqu’un a laissé son adresse dans un formulaire de dibodev.fr. Les adresses des formulaires de contact restent dans leurs mails de notification ; le journal du récap s’efface au bout de 7 jours.',
      privacyUrl: null,
    },
    partialsNames: ['head', 'header', 'footer'],
  })

  const textLines: string[] = [`${countLabel} sur le site`, intro]

  for (const entry of entries) {
    textLines.push('', entry.heading, ...formatDetailRowsAsText(entry.rows))
  }
  if (hiddenText) {
    textLines.push('', hiddenText)
  }
  textLines.push('', alertTotalsText)

  await sendMail({
    toEmail: ownerEmail,
    toName: websiteName,
    subject,
    htmlContent,
    textContent: textLines.join('\n'),
    fromName: OWNER_NOTIFICATION_FROM_NAME,
  })
}
