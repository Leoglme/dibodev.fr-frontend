import MjmlService from '~~/server/services/mail/mjml/MjmlService'
import { sendMail } from '~~/server/services/mail/sendMail'
import type { ContactFormPayload } from '~~/server/types/mail/contact'
import { ownerEmail, websiteName } from '~~/server/services/mail/mail.config'
import { registerHandlebarsHelpers } from '~~/server/helpers/HandlebarsHelpers'

/**
 * Sends a contact notification email to the site owner.
 *
 * Generates HTML content using MJML and sends the email.
 *
 * @param {ContactFormPayload} payload - The contact form payload.
 * @returns {Promise<void>} - A promise that resolves when the email is sent.
 */
export async function sendContactNotificationMail(payload: ContactFormPayload): Promise<void> {
  console.info('sendContactNotificationMail:payload', { payload })

  registerHandlebarsHelpers()

  const htmlContent: string = await MjmlService.getHtml({
    viewPath: 'contact',
    payload: {
      ...payload,
      projectType: payload.projectType ?? 'Non spécifié',
      pagesRange: payload.pagesRange ?? 'Non spécifié',
    },
    partialsNames: ['header', 'footer'],
  })

  const subject: string = `Nouveau contact de ${payload.fullName}`

  await sendMail({
    toEmail: ownerEmail,
    toName: websiteName,
    subject,
    htmlContent,
  })
}
