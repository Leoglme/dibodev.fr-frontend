import type { MailjetSendParams } from '~~/server/services/mail/mail.config'
import { mailjet, receiverEmailDev, ownerEmail, websiteName } from '~~/server/services/mail/mail.config'

export type MailAddress = {
  Email: string
  Name?: string
}

/**
 * Parameters for sending an email.
 */
export interface SendMailParams {
  toEmail: string
  toName?: string
  subject: string
  htmlContent: string
  textContent?: string
  fromName?: string
  replyTo?: MailAddress
  cc?: MailAddress[]
}

/**
 * Sends an email using Mailjet.
 *
 * Overrides receiver in non-production environments.
 *
 * @param {SendMailParams} params - The parameters for the email.
 * @returns {Promise<void>} - A promise that resolves when the email is sent.
 */
export async function sendMail({
  toEmail,
  toName,
  subject,
  htmlContent,
  textContent,
  fromName,
  replyTo,
  cc,
}: SendMailParams): Promise<void> {
  let receiver: string = toEmail
  let finalCc: MailAddress[] | undefined = cc

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
          Name: fromName ?? websiteName,
        },
        To: [
          {
            Email: receiver,
            Name: toName,
          },
        ],
        Cc: finalCc,
        ReplyTo: replyTo,
        Subject: subject,
        HTMLPart: htmlContent,
        TextPart: textContent,
      },
    ],
  }

  await mailjet.post('send', { version: 'v3.1' }).request(emailData)
}
