import type { DateTime } from 'luxon'
import MjmlService from '~~/server/services/mail/mjml/MjmlService'
import { sendMail } from '~~/server/services/mail/sendMail'
import type {
  ContactFormPayload,
  ContactMailAction,
  ContactMailDetailRow,
  MailLocale,
} from '~~/server/types/mail/contact'
import { ownerEmail, websiteName } from '~~/server/services/mail/mail.config'
import { registerHandlebarsHelpers } from '~~/server/helpers/HandlebarsHelpers'
import {
  OWNER_NOTIFICATION_FROM_NAME,
  OWNER_REPLY_SUBJECTS,
  resolveMailLocale,
} from '~~/server/services/mail/contactMailTexts'
import {
  buildOwnerActions,
  buildOwnerDetailRows,
  formatDetailRowsAsText,
} from '~~/server/services/mail/contactNotificationContent'
import { MailDateUtils } from '~~/server/utils/MailDateUtils'

/**
 * Sends a contact notification email to the site owner.
 *
 * Shows who wrote, the need and the budget first, with buttons to answer; replying to the e-mail writes to the visitor.
 *
 * @param {ContactFormPayload} payload - The contact form payload.
 * @returns {Promise<void>} - A promise that resolves when the email is sent.
 */
export async function sendContactNotificationMail(payload: ContactFormPayload): Promise<void> {
  console.info('sendContactNotificationMail:payload', { payload })

  registerHandlebarsHelpers()

  const locale: MailLocale = resolveMailLocale(payload.locale)
  const receivedAt: DateTime = MailDateUtils.nowInParis()
  const replyDeadline: string = MailDateUtils.formatWeekdayDayAndMonth(
    MailDateUtils.getNextBusinessDay(receivedAt),
    'fr',
  )
  const projectType: string | null = payload.projectType?.trim() || null
  const pagesRange: string | null = payload.pagesRange?.trim() ? `${payload.pagesRange.trim()} pages` : null
  const budget: string | null = payload.budget.trim() || null
  const qualification: string = [projectType, pagesRange, budget].filter(Boolean).join(' · ')
  const subject: string = ['Nouvelle demande', payload.fullName, projectType, budget].filter(Boolean).join(' · ')
  const actions: ContactMailAction[] = buildOwnerActions(
    payload.email,
    payload.phone,
    'Répondre',
    OWNER_REPLY_SUBJECTS[locale],
  )
  const detailRows: ContactMailDetailRow[] = buildOwnerDetailRows({
    email: payload.email,
    phone: payload.phone,
    source: payload.source,
    locale,
    receivedAt,
  })

  const htmlContent: string = await MjmlService.getHtml({
    viewPath: 'contact',
    payload: {
      subject,
      preheader: payload.message ? payload.message.replace(/\s+/g, ' ').slice(0, 120) : qualification,
      headerTitle: 'Nouvelle demande',
      headerMeta: MailDateUtils.formatFrenchShortDateAndTime(receivedAt),
      replyDeadline,
      fullName: payload.fullName,
      qualification,
      actions,
      message: payload.message,
      detailRows,
      footerText: `Envoyé par un formulaire de dibodev.fr. Répondre à cet e\u2011mail écrit directement à ${payload.fullName}.`,
      privacyUrl: null,
    },
    partialsNames: ['head', 'header', 'footer'],
  })

  const textContent: string = [
    `Nouvelle demande de ${payload.fullName}`,
    qualification,
    `À répondre au plus tard ${replyDeadline}`,
    '',
    ...(payload.message ? ['Message\u00a0:', payload.message, ''] : []),
    ...formatDetailRowsAsText(detailRows),
  ].join('\n')

  await sendMail({
    toEmail: ownerEmail,
    toName: websiteName,
    subject,
    htmlContent,
    textContent,
    fromName: OWNER_NOTIFICATION_FROM_NAME,
    replyTo: { Email: payload.email, Name: payload.fullName },
  })
}
