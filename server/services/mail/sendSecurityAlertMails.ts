import MjmlService from '~~/server/services/mail/mjml/MjmlService'
import { sendMail } from '~~/server/services/mail/sendMail'
import type { MailLocale } from '~~/server/types/mail/contact'
import type { HostingProviderStatus } from '~~/server/types/tools/hostingStatus'
import type {
  HostingIncidentMailTexts,
  SecurityAlertBroadcastTexts,
  SecurityAlertConfirmationTexts,
  SecurityAlertMailDetailRow,
  SecurityAlertSubscription,
} from '~~/server/types/tools/securityAlerts'
import { websiteName } from '~~/server/services/mail/mail.config'
import { registerHandlebarsHelpers } from '~~/server/helpers/HandlebarsHelpers'
import { EMAIL_SIGNATURE_HTML, EMAIL_SIGNATURE_TEXT } from '~~/server/services/mail/emailSignature'
import {
  fillMailTemplate,
  HOSTING_INCIDENT_MAIL_TEXTS,
  HOSTING_STATUS_PAGE_PATHS,
  SECURITY_ALERT_CONFIRMATION_TEXTS,
} from '~~/server/services/mail/securityAlertMailTexts'

const SITE_URL: string = 'https://dibodev.fr'
const CONFIRM_API_PATH: string = '/api/tools/security-alerts/confirm'
const UNSUBSCRIBE_API_PATH: string = '/api/tools/security-alerts/unsubscribe'
const PARIS_ZONE: string = 'Europe/Paris'
const CONTACT_PATHS: Record<MailLocale, string> = { fr: '/contact', en: '/en/contact', es: '/es/contact' }
const ALERT_UTM: string = 'utm_source=email&utm_medium=transactional&utm_campaign=security_alert'

/**
 * Builds the unsubscribe link of a subscription.
 * @param {SecurityAlertSubscription} subscription - The subscription.
 * @returns {string} The absolute URL.
 */
function buildUnsubscribeUrl(subscription: SecurityAlertSubscription): string {
  return `${SITE_URL}${UNSUBSCRIBE_API_PATH}?token=${encodeURIComponent(subscription.token)}`
}

/**
 * Formats a time of day in Paris for a mail ("14:05").
 * @param {string} isoDate - The date.
 * @param {MailLocale} locale - The mail language.
 * @returns {string} The time.
 */
function formatParisTime(isoDate: string, locale: MailLocale): string {
  const date: Date = new Date(isoDate)

  if (Number.isNaN(date.getTime())) {
    return ''
  }
  return new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit', timeZone: PARIS_ZONE }).format(date)
}

/**
 * Sends the confirmation mail of a new alert request, with the link that activates it.
 * @param {SecurityAlertSubscription} subscription - The subscription to confirm.
 * @param {string | null} providerName - The provider display name for a hosting topic, null for the security topic.
 * @returns {Promise<void>}
 */
export async function sendSecurityAlertConfirmationMail(
  subscription: SecurityAlertSubscription,
  providerName: string | null,
): Promise<void> {
  registerHandlebarsHelpers()

  const texts: SecurityAlertConfirmationTexts = SECURITY_ALERT_CONFIRMATION_TEXTS[subscription.locale]
  const values: Record<string, string> = { site: subscription.site ?? '', provider: providerName ?? '' }
  const isHosting: boolean = providerName !== null
  let subjectTemplate: string = texts.subjectSecurity
  let introTemplate: string = texts.introSecurity

  if (isHosting) {
    subjectTemplate = texts.subjectHosting
    introTemplate = texts.introHosting
  } else if (subscription.site) {
    subjectTemplate = texts.subjectSecurityWithSite
    introTemplate = texts.introSecurityWithSite
  }
  const subject: string = fillMailTemplate(subjectTemplate, values)
  const title: string = fillMailTemplate(isHosting ? texts.titleHosting : texts.titleSecurity, values)
  const intro: string = fillMailTemplate(introTemplate, values)
  const buttonUrl: string = `${SITE_URL}${CONFIRM_API_PATH}?token=${encodeURIComponent(subscription.token)}`
  const htmlContent: string = await MjmlService.getHtml({
    viewPath: 'alert-confirmation',
    payload: {
      subject,
      preheader: texts.preheader,
      headerTitle: websiteName,
      headerMeta: null,
      title,
      intro,
      buttonUrl,
      buttonLabel: texts.buttonLabel,
      expiryNote: texts.expiryNote,
      ignoreNote: texts.ignoreNote,
      signOff: texts.signOff,
      signature: EMAIL_SIGNATURE_HTML,
      footerText: texts.footerText,
      privacyUrl: texts.privacyUrl,
      privacyLabel: texts.privacyLabel,
    },
    partialsNames: ['head', 'header', 'footer'],
  })
  const textContent: string = [
    title,
    '',
    intro,
    '',
    `${texts.buttonLabel} : ${buttonUrl}`,
    '',
    texts.expiryNote,
    texts.ignoreNote,
    '',
    texts.signOff,
    EMAIL_SIGNATURE_TEXT,
    '',
    texts.footerText,
  ].join('\n')

  await sendMail({ toEmail: subscription.email, subject, htmlContent, textContent, fromName: texts.fromName })
}

/**
 * Sends the mail announcing an incident at the provider a subscriber watches.
 * @param {SecurityAlertSubscription} subscription - The subscriber.
 * @param {HostingProviderStatus} status - The status read.
 * @param {string} providerName - The provider display name.
 * @returns {Promise<void>}
 */
export async function sendHostingIncidentMail(
  subscription: SecurityAlertSubscription,
  status: HostingProviderStatus,
  providerName: string,
): Promise<void> {
  registerHandlebarsHelpers()

  const texts: HostingIncidentMailTexts = HOSTING_INCIDENT_MAIL_TEXTS[subscription.locale]
  const incidentTitle: string = status.activeIncidents[0]?.title ?? ''
  const since: string = formatParisTime(status.stateSince ?? status.checkedAt, subscription.locale)
  const values: Record<string, string> = { provider: providerName, time: since }
  const subject: string = fillMailTemplate(texts.subject, values)
  const providerPageUrl: string = `${SITE_URL}${HOSTING_STATUS_PAGE_PATHS[subscription.locale]}/${status.provider}?${ALERT_UTM}`
  const contactUrl: string = `${SITE_URL}${CONTACT_PATHS[subscription.locale]}?topic=site-down&provider=${status.provider}&${ALERT_UTM}`
  const detailRows: SecurityAlertMailDetailRow[] = []

  if (incidentTitle) {
    detailRows.push({ label: texts.incidentLabel, value: incidentTitle })
  }
  if (since) {
    detailRows.push({ label: texts.sinceLabel, value: since })
  }
  const htmlContent: string = await MjmlService.getHtml({
    viewPath: 'alert-notification',
    payload: {
      subject,
      preheader: fillMailTemplate(texts.preheader, values),
      headerTitle: websiteName,
      headerMeta: null,
      title: fillMailTemplate(texts.title, values),
      intro: fillMailTemplate(texts.intro, values),
      detailRows,
      buttonUrl: providerPageUrl,
      buttonLabel: texts.buttonLabel,
      secondaryUrl: status.statusPageUrl,
      secondaryLabel: texts.statusPageLabel,
      contactIntro: texts.contactIntro,
      contactUrl,
      contactLabel: texts.contactLabel,
      signOff: texts.signOff,
      signature: EMAIL_SIGNATURE_HTML,
      footerText: fillMailTemplate(texts.footerText, values),
      privacyUrl: buildUnsubscribeUrl(subscription),
      privacyLabel: texts.unsubscribeLabel,
    },
    partialsNames: ['head', 'header', 'footer'],
  })
  const textContent: string = [
    fillMailTemplate(texts.title, values),
    '',
    fillMailTemplate(texts.intro, values),
    '',
    ...detailRows.map((row: SecurityAlertMailDetailRow): string => `${row.label} : ${row.value}`),
    '',
    `${texts.buttonLabel} : ${providerPageUrl}`,
    `${texts.statusPageLabel} : ${status.statusPageUrl}`,
    '',
    `${texts.contactIntro} ${texts.contactLabel} : ${contactUrl}`,
    '',
    texts.signOff,
    EMAIL_SIGNATURE_TEXT,
    '',
    fillMailTemplate(texts.footerText, values),
    `${texts.unsubscribeLabel} : ${buildUnsubscribeUrl(subscription)}`,
  ].join('\n')

  await sendMail({ toEmail: subscription.email, subject, htmlContent, textContent, fromName: texts.fromName })
}

/**
 * Sends an alert written in the dashboard (a new vulnerability, for instance) to one subscriber.
 * @param {SecurityAlertSubscription} subscription - The subscriber.
 * @param {SecurityAlertBroadcastTexts} texts - The alert texts in the subscriber's language.
 * @returns {Promise<void>}
 */
export async function sendSecurityBroadcastMail(
  subscription: SecurityAlertSubscription,
  texts: SecurityAlertBroadcastTexts,
): Promise<void> {
  registerHandlebarsHelpers()

  const confirmationTexts: SecurityAlertConfirmationTexts = SECURITY_ALERT_CONFIRMATION_TEXTS[subscription.locale]
  const separator: string = texts.buttonUrl.includes('?') ? '&' : '?'
  let buttonUrl: string = `${texts.buttonUrl}${separator}${ALERT_UTM}`

  if (subscription.site) {
    buttonUrl += `&site=${encodeURIComponent(subscription.site)}`
  }
  const htmlContent: string = await MjmlService.getHtml({
    viewPath: 'alert-notification',
    payload: {
      subject: texts.subject,
      preheader: texts.intro,
      headerTitle: websiteName,
      headerMeta: null,
      title: texts.title,
      intro: texts.intro,
      detailRows: [],
      buttonUrl,
      buttonLabel: texts.buttonLabel,
      secondaryUrl: null,
      secondaryLabel: null,
      contactIntro: null,
      contactUrl: null,
      contactLabel: null,
      signOff: confirmationTexts.signOff,
      signature: EMAIL_SIGNATURE_HTML,
      footerText: confirmationTexts.footerText,
      privacyUrl: buildUnsubscribeUrl(subscription),
      privacyLabel: confirmationTexts.unsubscribeLabel,
    },
    partialsNames: ['head', 'header', 'footer'],
  })
  const textContent: string = [
    texts.title,
    '',
    texts.intro,
    '',
    `${texts.buttonLabel} : ${buttonUrl}`,
    '',
    confirmationTexts.signOff,
    EMAIL_SIGNATURE_TEXT,
    '',
    confirmationTexts.footerText,
    `${confirmationTexts.unsubscribeLabel} : ${buildUnsubscribeUrl(subscription)}`,
  ].join('\n')

  await sendMail({
    toEmail: subscription.email,
    subject: texts.subject,
    htmlContent,
    textContent,
    fromName: confirmationTexts.fromName,
  })
}
