import MjmlService from '~~/server/services/mail/mjml/MjmlService'
import { sendMail } from '~~/server/services/mail/sendMail'
import { ownerEmail, websiteName } from '~~/server/services/mail/mail.config'
import { registerHandlebarsHelpers } from '~~/server/helpers/HandlebarsHelpers'

/**
 * Sends a contact intent notification email to the owner.
 *
 * Generates HTML content using MJML and sends the email when a user enters a valid email.
 *
 * @param {string} email - The user's email.
 * @returns {Promise<void>} - A promise that resolves when the email is sent.
 */
export async function sendContactIntentNotificationMail(email: string): Promise<void> {
  console.info('sendContactIntentNotificationMail:email', { email })

  registerHandlebarsHelpers()

  const htmlContent: string = await MjmlService.getHtml({
    viewPath: 'contact-intent',
    payload: {
      email,
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
