import type { EmailDeliverabilityCheckResult } from '~~/server/types/tools/emailDeliverabilityCheck'
import type { GmailSendAsCheckResult, GmailSendAsHosting } from '~~/server/types/tools/gmailSendAsCheck'
import { EmailDeliverabilityCheckService } from '~~/server/services/EmailDeliverabilityCheckService'

/** An address of these domains is a Gmail address: nothing changes for it in January 2027. */
const GMAIL_ADDRESS_DOMAINS: string[] = ['gmail.com', 'googlemail.com']
/** SPF include of Google Workspace: its presence means Google is already allowed to send for the domain. */
const GOOGLE_SPF_INCLUDE_MARKER: string = '_spf.google.com'

/** Tells where the mail of a domain is hosted, which decides whether the end of Gmail's "Send mail as" can touch its addresses. */
export class GmailSendAsCheckService {
  /**
   * Reads the mail servers of the domain (through the deliverability checker and its cache) and names its host.
   * @param {string} domain - A domain returned by `EmailDeliverabilityCheckService.normalizeDomain`.
   * @returns {Promise<GmailSendAsCheckResult>} The hosting of the mail and the host recognized.
   * @throws {H3Error} 502 when the DNS of the domain cannot be read at all.
   */
  static async checkDomain(domain: string): Promise<GmailSendAsCheckResult> {
    const mail: EmailDeliverabilityCheckResult = await EmailDeliverabilityCheckService.checkDomain(domain)
    const hosting: GmailSendAsHosting = GmailSendAsCheckService.readHosting(mail)

    return {
      domain: mail.domain,
      hosting,
      mailHost:
        hosting === 'thirdParty' && mail.provider?.kind === 'mailbox'
          ? { key: mail.provider.key, name: mail.provider.name }
          : null,
      mxHost: mail.mxExchanges[0] ?? null,
      isGoogleAllowedBySpf: mail.spf.includeTargets.some((target: string): boolean =>
        target.includes(GOOGLE_SPF_INCLUDE_MARKER),
      ),
      checkedAt: mail.checkedAt,
    }
  }

  /**
   * Classifies the hosting, from the most certain case to the most common one.
   * @param {EmailDeliverabilityCheckResult} mail - What the deliverability checker read in the DNS.
   * @returns {GmailSendAsHosting} The hosting of the mail of the domain.
   */
  private static readHosting(mail: EmailDeliverabilityCheckResult): GmailSendAsHosting {
    if (GMAIL_ADDRESS_DOMAINS.includes(mail.domain)) {
      return 'gmailAddress'
    }
    if (mail.verdict === 'invalidDomain') {
      return 'invalidDomain'
    }
    if (mail.verdict === 'consumerMailbox') {
      return 'consumerMailbox'
    }
    if (mail.mxExchanges.length === 0) {
      return 'noMailSetup'
    }
    return mail.provider?.key === 'google' ? 'googleHosted' : 'thirdParty'
  }
}
