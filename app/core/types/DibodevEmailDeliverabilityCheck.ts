/** Mirror of `server/types/tools/emailDeliverabilityCheck.ts` (result of GET /api/tools/email-deliverability-check). */

export type DibodevEmailDeliverabilityVerdict =
  | 'allGood'
  | 'dmarcMissing'
  | 'dmarcNone'
  | 'dkimNotFound'
  | 'spfMissing'
  | 'spfTooPermissive'
  | 'spfTooManyLookups'
  | 'multipleSpf'
  | 'noMailSetup'
  | 'invalidDomain'
  | 'consumerMailbox'

export type DibodevEmailDeliverabilityFindingSeverity = 'blocking' | 'warning' | 'info'

export type DibodevEmailDeliverabilityFindingKey =
  | 'mxMissing'
  | 'spfMissing'
  | 'spfMultiple'
  | 'spfIncludeUnresolved'
  | 'spfTooManyLookups'
  | 'spfPlusAll'
  | 'spfNeutralAll'
  | 'spfNoAll'
  | 'spfSoftFail'
  | 'spfHardFail'
  | 'spfProviderMissing'
  | 'spfPtrMechanism'
  | 'spfSendingServices'
  | 'dkimNotFound'
  | 'dkimKeyRevoked'
  | 'dkimKeyTooShort'
  | 'dkimKeyUnreadable'
  | 'dkimTestMode'
  | 'dmarcMissing'
  | 'dmarcMultiple'
  | 'dmarcMalformed'
  | 'dmarcPolicyNone'
  | 'dmarcPolicyQuarantine'
  | 'dmarcPolicyReject'
  | 'dmarcNoReporting'
  | 'dmarcExternalReportingUnauthorized'
  | 'dmarcPartialPercentage'
  | 'dmarcStrictWithoutAuthentication'

export type DibodevEmailDeliverabilityFinding = {
  key: DibodevEmailDeliverabilityFindingKey
  severity: DibodevEmailDeliverabilityFindingSeverity
  value: string | null
}

export type DibodevEmailProviderKey =
  | 'google'
  | 'microsoft'
  | 'ovh'
  | 'o2switch'
  | 'ionos'
  | 'gandi'
  | 'infomaniak'
  | 'proton'
  | 'zoho'
  | 'hostinger'
  | 'lws'
  | 'orange'
  | 'brevo'
  | 'mailjet'
  | 'mailchimp'
  | 'sendgrid'
  | 'amazonSes'

export type DibodevEmailProviderKind = 'mailbox' | 'sendingService'

export type DibodevEmailProviderGuideKey = 'spf' | 'dkim' | 'dmarc' | 'general'

export type DibodevEmailProviderGuide = {
  key: DibodevEmailProviderGuideKey
  url: string
}

export type DibodevEmailProviderSummary = {
  key: DibodevEmailProviderKey
  name: string
  kind: DibodevEmailProviderKind
  hasGuessableSelectors: boolean
  guides: DibodevEmailProviderGuide[]
}

export type DibodevEmailSpfAllQualifier = '+' | '-' | '~' | '?'

export type DibodevEmailSpfRecordReport = {
  record: string | null
  recordCount: number
  allQualifier: DibodevEmailSpfAllQualifier | null
  lookupCount: number
  includeTargets: string[]
  unresolvedIncludes: string[]
  hasPtrMechanism: boolean
  isValid: boolean
}

export type DibodevEmailDkimRecordReport = {
  selector: string | null
  record: string | null
  selectorsFound: string[]
  selectorsProbed: string[]
  keyType: string | null
  keyBits: number | null
  isRevoked: boolean
  isTestMode: boolean
  isUsable: boolean
}

export type DibodevEmailDmarcPolicy = 'none' | 'quarantine' | 'reject'

export type DibodevEmailDmarcAlignment = 'r' | 's'

export type DibodevEmailDmarcRecordReport = {
  record: string | null
  recordCount: number
  policy: DibodevEmailDmarcPolicy | null
  subdomainPolicy: DibodevEmailDmarcPolicy | null
  percentage: number | null
  reportingDomains: string[]
  dkimAlignment: DibodevEmailDmarcAlignment | null
  spfAlignment: DibodevEmailDmarcAlignment | null
  isValid: boolean
}

export type DibodevEmailDeliverabilityCheckResult = {
  domain: string
  verdict: DibodevEmailDeliverabilityVerdict
  provider: DibodevEmailProviderSummary | null
  sendingServices: DibodevEmailProviderSummary[]
  mxExchanges: string[]
  spf: DibodevEmailSpfRecordReport
  dkim: DibodevEmailDkimRecordReport
  dmarc: DibodevEmailDmarcRecordReport
  findings: DibodevEmailDeliverabilityFinding[]
  checkedAt: string
}

export type DibodevEmailRecordKind = 'spf' | 'dkim' | 'dmarc'

export type DibodevEmailRecordStatus = 'ok' | 'warning' | 'missing'

export type DibodevEmailDeliverabilitySourceKey =
  | 'googleSenderGuidelines'
  | 'googleSenderFaq'
  | 'yahooSenderBestPractices'
  | 'microsoftPostmasterPolicies'
  | 'microsoftNdr515'
  | 'appleIcloudSenders'
  | 'orangePostmaster'
  | 'laposteDmarcian'
  | 'afnicStudy'
  | 'rfc7208'
  | 'rfc6376'
  | 'rfc8301'
  | 'rfc7489'
