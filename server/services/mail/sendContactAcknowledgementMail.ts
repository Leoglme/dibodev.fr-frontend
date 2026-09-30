import MjmlService from '~~/server/services/mail/mjml/MjmlService'
import { sendMail } from '~~/server/services/mail/sendMail'
import type {
  ContactAcknowledgementStepTexts,
  ContactAcknowledgementTexts,
  ContactFormPayload,
  ContactMailDetailRow,
  ContactMailNextStep,
  MailLocale,
} from '~~/server/types/mail/contact'
import { websiteName } from '~~/server/services/mail/mail.config'
import { registerHandlebarsHelpers } from '~~/server/helpers/HandlebarsHelpers'
import {
  CONTACT_ACKNOWLEDGEMENT_TEXTS,
  OWNER_PHONE_HREF,
  resolveMailLocale,
} from '~~/server/services/mail/contactMailTexts'
import { EMAIL_SIGNATURE_HTML, EMAIL_SIGNATURE_TEXT } from '~~/server/services/mail/emailSignature'
import { ContactUtils } from '~~/server/utils/ContactUtils'
import { MailDateUtils } from '~~/server/utils/MailDateUtils'

/**
 * Builds the "your request" summary of the acknowledgement e-mail, without the fields left empty.
 *
 * @param {ContactFormPayload} payload - The contact form payload.
 * @param {ContactAcknowledgementTexts} texts - Texts in the e-mail language.
 * @returns {ContactMailDetailRow[]} The summary rows.
 */
function buildRequestRows(payload: ContactFormPayload, texts: ContactAcknowledgementTexts): ContactMailDetailRow[] {
  const rows: ContactMailDetailRow[] = []
  if (payload.projectType?.trim()) {
    rows.push({ label: texts.projectTypeLabel, value: payload.projectType.trim(), href: null })
  }
  if (payload.pagesRange?.trim()) {
    rows.push({ label: texts.pagesRangeLabel, value: payload.pagesRange.trim(), href: null })
  }
  if (payload.budget.trim()) {
    rows.push({ label: texts.budgetLabel, value: payload.budget.trim(), href: null })
  }
  if (payload.phone?.trim()) {
    rows.push({ label: texts.phoneLabel, value: payload.phone.trim(), href: null })
  }
  return rows
}

/**
 * Builds the plain-text version of the acknowledgement e-mail.
 *
 * @param {ContactAcknowledgementTexts} texts - Texts in the e-mail language.
 * @param {string} greetingName - Name used in the greeting.
 * @param {string} replyDeadline - Formatted reply deadline.
 * @param {ContactMailDetailRow[]} requestRows - Summary rows of the request.
 * @param {string} message - Message written by the visitor.
 * @returns {string} The text part.
 */
function buildAcknowledgementText(
  texts: ContactAcknowledgementTexts,
  greetingName: string,
  replyDeadline: string,
  requestRows: ContactMailDetailRow[],
  message: string,
): string {
  const stepLines: string[] = texts.nextSteps.map(
    (step: ContactAcknowledgementStepTexts, index: number): string =>
      `${index + 1}. ${step.title}\n   ${step.description}`,
  )
  const requestLines: string[] = requestRows.map(
    (row: ContactMailDetailRow): string => `${row.label}${texts.labelSeparator}${row.value}`,
  )

  return [
    texts.title(greetingName),
    '',
    `${texts.introStart} ${replyDeadline}${texts.introEnd}`,
    '',
    texts.nextStepsTitle,
    ...stepLines,
    '',
    texts.requestTitle,
    ...requestLines,
    `${texts.messageLabel}${texts.labelSeparator.trimEnd()}`,
    message,
    '',
    `${texts.replyStart} ${texts.ownerPhoneDisplay}${texts.replyEnd}`,
    `${texts.portfolioStart} ${texts.portfolioLabel}${texts.labelSeparator}${texts.portfolioUrl}`,
    '',
    texts.signOff,
    EMAIL_SIGNATURE_TEXT,
    '',
    texts.footerText,
  ].join('\n')
}

/**
 * Sends an acknowledgement email to the client, in the language of the form, with Léo's signature.
 *
 * Generates HTML content using MJML and sends the email to the client's email.
 *
 * @param {ContactFormPayload} payload - The contact form payload.
 * @returns {Promise<void>} - A promise that resolves when the email is sent.
 */
export async function sendContactAcknowledgementMail(payload: ContactFormPayload): Promise<void> {
  console.info('sendContactAcknowledgementMail:payload', { payload })

  registerHandlebarsHelpers()

  const locale: MailLocale = resolveMailLocale(payload.locale)
  const texts: ContactAcknowledgementTexts = CONTACT_ACKNOWLEDGEMENT_TEXTS[locale]
  const replyDeadline: string = MailDateUtils.formatWeekdayDayAndMonth(
    MailDateUtils.getNextBusinessDay(MailDateUtils.nowInParis()),
    locale,
  )
  const greetingName: string = ContactUtils.extractGreetingName(payload.fullName)
  const requestRows: ContactMailDetailRow[] = buildRequestRows(payload, texts)
  const nextSteps: ContactMailNextStep[] = texts.nextSteps.map(
    (step: ContactAcknowledgementStepTexts, index: number): ContactMailNextStep => ({
      number: index + 1,
      title: step.title,
      description: step.description,
    }),
  )

  const htmlContent: string = await MjmlService.getHtml({
    viewPath: 'acknowledgement',
    payload: {
      subject: texts.subject,
      preheader: texts.preheader(replyDeadline),
      headerTitle: websiteName,
      headerMeta: null,
      title: texts.title(greetingName),
      introStart: texts.introStart,
      replyDeadline,
      introEnd: texts.introEnd,
      nextStepsTitle: texts.nextStepsTitle,
      nextSteps,
      requestTitle: texts.requestTitle,
      requestRows,
      message: payload.message,
      replyStart: texts.replyStart,
      ownerPhoneHref: OWNER_PHONE_HREF,
      ownerPhoneDisplay: texts.ownerPhoneDisplay,
      replyEnd: texts.replyEnd,
      portfolioStart: texts.portfolioStart,
      portfolioUrl: texts.portfolioUrl,
      portfolioLabel: texts.portfolioLabel,
      portfolioEnd: texts.portfolioEnd,
      signOff: texts.signOff,
      signature: EMAIL_SIGNATURE_HTML,
      footerText: texts.footerText,
      privacyUrl: texts.privacyUrl,
      privacyLabel: texts.privacyLabel,
    },
    partialsNames: ['head', 'header', 'footer'],
  })

  await sendMail({
    toEmail: payload.email,
    toName: payload.fullName,
    subject: texts.subject,
    htmlContent,
    textContent: buildAcknowledgementText(texts, greetingName, replyDeadline, requestRows, payload.message),
    fromName: texts.fromName,
  })
}
