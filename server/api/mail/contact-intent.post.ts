import type { H3Event } from 'h3'
import { createError } from 'h3'
import { sendContactIntentNotificationMail } from '~~/server/services/mail/sendContactIntentNotificationMail'

/**
 * Payload for contact intent notification.
 */
type ContactIntentPayload = {
  email: string
}

/**
 * Handles POST requests for contact intent (when user enters a valid email).
 *
 * Validates the email and sends a notification email to the owner.
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

  const body: ContactIntentPayload = await readBody(event)

  // Strict validation: email is required
  if (!body.email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid payload: email is required.',
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
    await sendContactIntentNotificationMail(body.email)
    return { message: 'Contact intent notification sent successfully.' }
  } catch (error) {
    console.error('contact-intent.post: Error sending contact intent notification:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send contact intent notification.',
    })
  }
})
