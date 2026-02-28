import type { H3Event } from 'h3'
import { createError } from 'h3'
import { sendContactNotificationMail } from '~~/server/services/mail/sendContactNotificationMail'
import { sendContactAcknowledgementMail } from '~~/server/services/mail/sendContactAcknowledgementMail'
import type { ContactFormPayload } from '~~/server/types/mail/contact'

/**
 * Handles POST requests for full contact form submission.
 *
 * Validates the payload, sends a notification email to the owner, and an acknowledgement email to the client.
 *
 * @param {H3Event} event - The H3 event object containing the request.
 * @returns {Promise<{ message: string }>} - A promise resolving to a success message.
 * @throws {Error} - Throws an H3 error if validation fails or email sending encounters an issue.
 */
export default defineEventHandler(async (event: H3Event) => {
  if (event.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed. Please use POST.',
    })
  }

  const body: ContactFormPayload = await readBody(event)

  // Strict validation: fullName, email, message required; budget optional (string)
  if (!body.fullName || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid payload: fullName, email and message are required.',
    })
  }
  if (typeof body.budget !== 'string') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid payload: budget must be a string.',
    })
  }

  // Email validation (basic regex)
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email format.',
    })
  }

  try {
    // Send notification to an owner
    await sendContactNotificationMail(body)
    // Send acknowledgement to a client
    await sendContactAcknowledgementMail(body)
    return { message: 'Contact emails sent successfully.' }
  } catch (error) {
    console.error('contact.post: Error sending contact emails:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send contact email.',
    })
  }
})
