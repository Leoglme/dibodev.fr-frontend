import type { H3Event } from 'h3'
import { createError } from 'h3'
import { sendContactNotificationMail } from '~~/server/services/mail/sendContactNotificationMail'
import { sendContactAcknowledgementMail } from '~~/server/services/mail/sendContactAcknowledgementMail'
import type { ContactFormPayload } from '~~/server/types/mail/contact'
import { EmailCaptureDigestService } from '~~/server/services/EmailCaptureDigestService'
import { resolveMailLocale } from '~~/server/services/mail/contactMailTexts'
import { formatAcquisitionSource } from '~~/server/services/mail/formatLeadSource'
import { PagePathUtils } from '~~/server/utils/PagePathUtils'

/**
 * Handles POST requests for full contact form submission.
 *
 * Validates the payload, records it for the owner's daily recap, sends a notification email to the owner,
 * and an acknowledgement email to the client.
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

  // Strict validation: fullName and email required; message and budget optional (strings)
  if (!body.fullName || !body.email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid payload: fullName and email are required.',
    })
  }
  if (body.message !== undefined && body.message !== null && typeof body.message !== 'string') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid payload: message must be a string.',
    })
  }
  body.message = (body.message ?? '').trim()
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

  body.pagePath = PagePathUtils.normalize(body.pagePath)
  await EmailCaptureDigestService.record({
    kind: 'contactForm',
    email: null,
    site: null,
    alertTopic: null,
    projectType: typeof body.projectType === 'string' && body.projectType !== '' ? body.projectType : null,
    pagePath: body.pagePath,
    landingPagePath: PagePathUtils.normalize(body.source?.landingPage),
    locale: resolveMailLocale(body.locale),
    acquisitionSource: formatAcquisitionSource(body.source) || null,
  })

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
