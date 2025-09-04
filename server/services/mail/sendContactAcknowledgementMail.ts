import MjmlService from '~~/server/services/mail/mjml/MjmlService'
import { sendMail } from '~~/server/services/mail/sendMail'
import type { ContactFormPayload } from '~~/server/types/mail/contact'
import { websiteName } from '~~/server/services/mail/mail.config'
import { registerHandlebarsHelpers } from '~~/server/helpers/HandlebarsHelpers'

/**
 * Sends an acknowledgement email to the client.
 *
 * Generates HTML content using MJML and sends the email to the client's email.
 *
 * @param {ContactFormPayload} payload - The contact form payload.
 * @returns {Promise<void>} - A promise that resolves when the email is sent.
 */
export async function sendContactAcknowledgementMail(payload: ContactFormPayload): Promise<void> {
  console.info('sendContactAcknowledgementMail:payload', { payload })

  registerHandlebarsHelpers()

  const htmlContent: string = await MjmlService.getHtml({
    viewPath: 'acknowledgement',
    payload: {
      fullName: payload.fullName,
    },
    partialsNames: ['header', 'footer'],
  })

  const subject: string = `Accusé de réception - ${websiteName}`

  await sendMail({
    toEmail: payload.email,
    toName: payload.fullName,
    subject,
    htmlContent,
  })
}
