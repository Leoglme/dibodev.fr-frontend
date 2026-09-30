import type { DateTime } from 'luxon'
import MjmlService from '~~/server/services/mail/mjml/MjmlService'
import { sendMail } from '~~/server/services/mail/sendMail'
import { ownerEmail, websiteName } from '~~/server/services/mail/mail.config'
import { registerHandlebarsHelpers } from '~~/server/helpers/HandlebarsHelpers'
import type {
  ContactIntentPayload,
  ContactMailAction,
  ContactMailDetailRow,
  MailLocale,
} from '~~/server/types/mail/contact'
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
 * Sends a contact intent notification email to the owner.
 *
 * Generates HTML content using MJML and sends the email when a user starts filling the contact form.
 *
 * @param {ContactIntentPayload} contact - The user's email and/or phone captured from the form.
 * @returns {Promise<void>} - A promise that resolves when the email is sent.
 */
export async function sendContactIntentNotificationMail(contact: ContactIntentPayload): Promise<void> {
  console.info('sendContactIntentNotificationMail:contact', { contact })

  registerHandlebarsHelpers()

  const locale: MailLocale = resolveMailLocale(contact.locale)
  const receivedAt: DateTime = MailDateUtils.nowInParis()
  const contactTitle: string = contact.email ?? contact.phone ?? ''
  const subject: string = `Intention de contact · ${contactTitle}`
  const actions: ContactMailAction[] = buildOwnerActions(
    contact.email,
    contact.phone,
    'Écrire',
    OWNER_REPLY_SUBJECTS[locale],
  )
  const detailRows: ContactMailDetailRow[] = buildOwnerDetailRows({
    email: contact.email,
    phone: contact.phone,
    source: contact.source,
    locale,
    receivedAt,
  })

  const htmlContent: string = await MjmlService.getHtml({
    viewPath: 'contact-intent',
    payload: {
      subject,
      preheader: 'A commencé à remplir le formulaire de contact, sans l’envoyer pour l’instant.',
      headerTitle: 'Intention de contact',
      headerMeta: MailDateUtils.formatFrenchShortDateAndTime(receivedAt),
      contactTitle,
      actions,
      detailRows,
      footerText: contact.email
        ? `Envoyé par un formulaire de dibodev.fr. Répondre à cet e\u2011mail écrit directement à ${contact.email}.`
        : 'Envoyé par un formulaire de dibodev.fr.',
      privacyUrl: null,
    },
    partialsNames: ['head', 'header', 'footer'],
  })

  const textContent: string = [
    `Intention de contact : ${contactTitle}`,
    'A commencé à remplir le formulaire de contact, sans l’envoyer pour l’instant.',
    '',
    ...formatDetailRowsAsText(detailRows),
  ].join('\n')

  await sendMail({
    toEmail: ownerEmail,
    toName: websiteName,
    subject,
    htmlContent,
    textContent,
    fromName: OWNER_NOTIFICATION_FROM_NAME,
    replyTo: contact.email ? { Email: contact.email } : undefined,
  })
}
