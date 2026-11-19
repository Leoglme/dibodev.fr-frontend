import type {
  GmailSendAsReadingAnswer,
  GmailSendAsReceivingAnswer,
  GmailSendAsSendingAnswer,
} from '~~/server/types/tools/gmailSendAsCheck'

/** The answers the Gmail checker offers for each of its three questions: a report request with any other value is refused. */
export const GMAIL_SEND_AS_READING_ANSWERS: GmailSendAsReadingAnswer[] = ['inGmail', 'elsewhere']

export const GMAIL_SEND_AS_SENDING_ANSWERS: GmailSendAsSendingAnswer[] = ['domainAddress', 'gmailAddress', 'unknown']

export const GMAIL_SEND_AS_RECEIVING_ANSWERS: GmailSendAsReceivingAnswer[] = ['listed', 'notListed', 'unknown']
