import type { MailjetSendParams } from '~~/server/services/mail/mail.config'
import { mailjet, receiverEmailDev, ownerEmail, websiteName } from '~~/server/services/mail/mail.config'

/**
 * Parameters for sending an email.
 */
export interface SendMailParams {
  toEmail: string
  toName?: string
  subject: string
  htmlContent: string
  cc?: Array<{ Email: string; Name?: string }>
}

/**
 * Sends an email using Mailjet.
 *
 * Overrides receiver in non-production environments.
 *
 * @param {SendMailParams} params - The parameters for the email.
 * @returns {Promise<void>} - A promise that resolves when the email is sent.
 */
export async function sendMail({ toEmail, toName, subject, htmlContent, cc }: SendMailParams): Promise<void> {
  let receiver: string = toEmail
  let finalCc: Array<{ Email: string; Name?: string }> | undefined = cc

  const env: string = process.env.NODE_ENV || 'development'
  if (env === 'development') {
    receiver = receiverEmailDev
    finalCc = undefined
  }

  if (env !== 'production') {
    htmlContent = `<p>Environment: ${env}</p>${htmlContent}`
  }

  console.info('sendMail:toEmail/toName/receiver', { toEmail, toName, receiver })

  const emailData: MailjetSendParams = {
    Messages: [
      {
        From: {
          Email: ownerEmail,
          Name: websiteName,
        },
        To: [
          {
            Email: receiver,
            Name: toName,
          },
        ],
        Cc: finalCc,
        Subject: subject,
        HTMLPart: htmlContent,
      },
    ],
  }

  await mailjet.post('send', { version: 'v3.1' }).request(emailData)
}
