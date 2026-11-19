import type {
  DibodevGmailSendAsAnswers,
  DibodevGmailSendAsHosting,
  DibodevGmailSendAsOutcome,
} from '~/core/types/DibodevGmailSendAsCheck'

/** Decides what the end of Gmail's "Send mail as" and POP fetch changes for an address, from its hosting and three answers. */
export class GmailSendAsUtils {
  /**
   * Keeps what follows the last @ of what the visitor typed, so the mailbox name never leaves the page.
   * @param {string} input - An e-mail address or a domain.
   * @returns {string} The domain part, trimmed and lowercase.
   */
  static extractDomain(input: string): string {
    const trimmed: string = input.trim().toLowerCase()
    const atIndex: number = trimmed.lastIndexOf('@')

    return atIndex === -1 ? trimmed : trimmed.slice(atIndex + 1)
  }

  /**
   * Whether the verdict depends on how the visitor uses Gmail: only an address hosted outside Google can be touched.
   * @param {DibodevGmailSendAsHosting} hosting - Where the mail of the domain is hosted.
   * @returns {boolean} True when the three questions must be asked.
   */
  static needsAnswers(hosting: DibodevGmailSendAsHosting): boolean {
    return hosting === 'thirdParty' || hosting === 'consumerMailbox'
  }

  /**
   * Decides the verdict; an address hosted by Google or absent needs no answer, the others need the questions asked.
   * @param {DibodevGmailSendAsHosting} hosting - Where the mail of the domain is hosted.
   * @param {DibodevGmailSendAsAnswers} answers - The answers given so far.
   * @returns {DibodevGmailSendAsOutcome | null} The verdict, or null while an answer it depends on is missing.
   */
  static decideOutcome(
    hosting: DibodevGmailSendAsHosting,
    answers: DibodevGmailSendAsAnswers,
  ): DibodevGmailSendAsOutcome | null {
    if (hosting !== 'thirdParty' && hosting !== 'consumerMailbox') {
      return { verdict: hosting, mustCheckSending: false, mustCheckReceiving: false }
    }
    if (answers.reading === 'elsewhere') {
      return { verdict: 'notInGmail', mustCheckSending: false, mustCheckReceiving: false }
    }
    if (answers.reading === null || answers.sending === null || answers.receiving === null) {
      return null
    }
    const isSendingAffected: boolean = answers.sending === 'domainAddress'
    const isReceivingAffected: boolean = answers.receiving === 'listed'
    const mustCheckSending: boolean = answers.sending === 'unknown'
    const mustCheckReceiving: boolean = answers.receiving === 'unknown'

    if (isSendingAffected && isReceivingAffected) {
      return { verdict: 'bothAffected', mustCheckSending, mustCheckReceiving }
    }
    if (isSendingAffected) {
      return { verdict: 'sendingAffected', mustCheckSending, mustCheckReceiving }
    }
    if (isReceivingAffected) {
      return { verdict: 'receivingAffected', mustCheckSending, mustCheckReceiving }
    }
    return {
      verdict: mustCheckSending || mustCheckReceiving ? 'toCheck' : 'notAffected',
      mustCheckSending,
      mustCheckReceiving,
    }
  }
}
