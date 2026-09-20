import type { H3Event } from 'h3'
import { createError } from 'h3'
import { sendContactIntentNotificationMail } from '~~/server/services/mail/sendContactIntentNotificationMail'
import type { ContactIntentPayload } from '~~/server/types/mail/contact'

/**
 * Handles POST requests for contact intent (when a user starts the form with an email and/or a phone).
 *
 * Requires at least one of email or phone, validates the email format when present, and notifies the owner.
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

  // At least one of email or phone is required
  if (!body.email && !body.phone) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid payload: email or phone is required.',
    })
  }

  // Email validation (basic regex), only when an email is provided
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (body.email && !emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email format.',
    })
  }

  try {
    await sendContactIntentNotificationMail({
      email: body.email ?? null,
      phone: body.phone ?? null,
      source: body.source ?? null,
    })
    return { message: 'Contact intent notification sent successfully.' }
  } catch (error) {
    console.error('contact-intent.post: Error sending contact intent notification:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send contact intent notification.',
    })
  }
})
