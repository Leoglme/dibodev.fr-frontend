import type {
  DibodevEmailDeliverabilityFindingSeverity,
  DibodevEmailDeliverabilitySourceKey,
  DibodevEmailDeliverabilityVerdict,
  DibodevEmailProviderGuideKey,
  DibodevEmailProviderKey,
  DibodevEmailRecordKind,
  DibodevEmailRecordStatus,
} from '~/core/types/DibodevEmailDeliverabilityCheck'

export const EMAIL_DELIVERABILITY_CHECK_PAGE_UPDATED_AT: string = '2026-11-01'

export const EMAIL_DELIVERABILITY_CHECK_API_PATH: string = '/api/tools/email-deliverability-check'

export const EMAIL_DELIVERABILITY_CHECKER_ANCHOR_ID: string = 'verification'

export const EMAIL_DELIVERABILITY_CHECK_ROUTE_NAME: string = 'tools-email-deliverability-check'

/** `topic` query value that makes the contact form open with the deliverability message. */
export const EMAIL_DELIVERABILITY_CONTACT_TOPIC: string = 'email-deliverability'

export const EMAIL_DELIVERABILITY_VERDICTS: DibodevEmailDeliverabilityVerdict[] = [
  'allGood',
  'dmarcMissing',
  'dmarcNone',
  'dkimNotFound',
  'spfMissing',
  'spfTooPermissive',
  'spfTooManyLookups',
  'multipleSpf',
  'noMailSetup',
  'invalidDomain',
  'consumerMailbox',
]

/** Verdicts that leave nothing to correct: the card shows the verdict steps instead of the corrections. */
export const EMAIL_DELIVERABILITY_VERDICTS_WITHOUT_FIXES: DibodevEmailDeliverabilityVerdict[] = [
  'allGood',
  'noMailSetup',
  'invalidDomain',
  'consumerMailbox',
]

/** Verdicts whose records are not the visitor's to change: the card hides the records, the provider line and the guides. */
export const EMAIL_DELIVERABILITY_VERDICTS_WITHOUT_RECORDS: DibodevEmailDeliverabilityVerdict[] = [
  'invalidDomain',
  'consumerMailbox',
]

export const EMAIL_RECORD_KINDS: DibodevEmailRecordKind[] = ['spf', 'dkim', 'dmarc']

/** Order of the guide links under a result. */
export const EMAIL_PROVIDER_GUIDE_KEYS: DibodevEmailProviderGuideKey[] = ['spf', 'dkim', 'dmarc', 'general']

/** Icon of each record status and of each finding severity in the result card. */
export const EMAIL_RECORD_STATUS_ICONS: Record<DibodevEmailRecordStatus, string> = {
  ok: 'CheckCircle',
  warning: 'AlertCircle',
  missing: 'XCircle',
}

export const EMAIL_FINDING_SEVERITY_ICONS: Record<DibodevEmailDeliverabilityFindingSeverity, string> = {
  blocking: 'XCircle',
  warning: 'AlertCircle',
  info: 'Info',
}

export const EMAIL_DELIVERABILITY_CHECK_RELATED_ARTICLE_SLUGS: string[] = [
  'faille-php-octobre-2026-site-boutique-logiciel-que-faire',
  'site-wordpress-pirate-verifications-a-faire-aujourd-hui',
  'facture-electronique-artisan-ce-qui-change',
]

/** Pages read on 27 October 2026; laposte.net has no official page, dmarcian relays the announcement. */
export const EMAIL_DELIVERABILITY_SOURCES: Record<DibodevEmailDeliverabilitySourceKey, string> = {
  googleSenderGuidelines: 'https://support.google.com/a/answer/81126?hl=fr',
  googleSenderFaq: 'https://support.google.com/a/answer/14229414?hl=fr',
  yahooSenderBestPractices: 'https://senders.yahooinc.com/best-practices/',
  microsoftPostmasterPolicies: 'https://sendersupport.olc.protection.outlook.com/pm/policies',
  microsoftNdr515: 'https://support.microsoft.com/en-us/outlook/fix-ndr-error-550-5-7-515-in-outlook-com',
  appleIcloudSenders: 'https://support.apple.com/en-us/102322',
  orangePostmaster: 'https://postmaster.orange.fr/',
  laposteDmarcian: 'https://dmarcian.com/fr/laposte-email-rules-spf-dkim-dmarc/',
  afnicStudy:
    'https://www.afnic.fr/en/observatory-and-resources/expert-papers/spf-dkim-and-dmarc-whats-the-situation-with-the-fr-tld/',
  rfc7208: 'https://www.rfc-editor.org/rfc/rfc7208',
  rfc6376: 'https://www.rfc-editor.org/rfc/rfc6376',
  rfc8301: 'https://www.rfc-editor.org/rfc/rfc8301',
  rfc7489: 'https://www.rfc-editor.org/rfc/rfc7489',
}

/** The one page to open per provider in the table of the page (mirror of the guides of `server/constants/emailProviders.ts`). */
export const EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS: Record<DibodevEmailProviderKey, string> = {
  google: 'https://knowledge.workspace.google.com/admin/security/set-up-dkim?hl=fr',
  microsoft: 'https://learn.microsoft.com/fr-fr/defender-office-365/email-authentication-dkim-configure',
  ovh: 'https://docs.ovhcloud.com/fr/guides/web-cloud/domains/dns-zone-dkim',
  o2switch: 'https://blog.o2switch.fr/configurer-spf-dkim-dmarc-o2switch/',
  ionos:
    'https://www.ionos.fr/assistance/domaines/configurer-les-serveurs-de-messagerie-et-les-enregistrements-associes/authentification-des-e-mails-avec-dkim/',
  gandi: 'https://docs.gandi.net/fr/gandimail/operations_courantes/activer_outils_antispoofing.html',
  infomaniak: 'https://www.infomaniak.com/fr/support/faq/841/gerer-les-enregistrements-dkim',
  proton: 'https://proton.me/support/anti-spoofing-custom-domain',
  zoho: 'https://www.zoho.com/mail/help/adminconsole/dkim-configuration.html',
  hostinger: 'https://www.hostinger.com/support/8671319-set-up-a-domain-for-hostinger-email-manually/',
  lws: 'https://tutoriels.lws.fr/e-mail/configurer-spf-dkim-dmarc',
  orange: 'https://postmaster.orange.fr/',
  brevo: 'https://help.brevo.com/hc/en-us/articles/12163873383186',
  mailjet: 'https://documentation.mailjet.com/hc/en-us/articles/360049641733',
  mailchimp: 'https://mailchimp.com/help/set-up-email-domain-authentication/',
  sendgrid: 'https://www.twilio.com/docs/sendgrid/ui/account-and-settings/how-to-set-up-domain-authentication',
  amazonSes: 'https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-dkim-easy.html',
}
