import MjmlService from '~~/server/services/mail/mjml/MjmlService'
import { sendMail } from '~~/server/services/mail/sendMail'
import { ownerEmail, websiteName } from '~~/server/services/mail/mail.config'
import { registerHandlebarsHelpers } from '~~/server/helpers/HandlebarsHelpers'
import type { ContactIntentPayload } from '~~/server/types/mail/contact'

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

  const htmlContent: string = await MjmlService.getHtml({
    viewPath: 'contact-intent',
    payload: {
      email: contact.email,
      phone: contact.phone,
    },
    partialsNames: ['header', 'footer'],
  })

  const subject: string = `Nouvelle intention de contact sur ${websiteName}`

  await sendMail({
    toEmail: ownerEmail,
    toName: websiteName,
    subject,
    htmlContent,
  })
}
