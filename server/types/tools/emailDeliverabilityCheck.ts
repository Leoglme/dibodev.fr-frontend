export type EmailDeliverabilityVerdict =
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

export type EmailDeliverabilityFindingSeverity = 'blocking' | 'warning' | 'info'

/** Emitted in the order of the corrections: the mail server, then SPF, DKIM and DMARC. */
export type EmailDeliverabilityFindingKey =
  | 'mxFound'
  | 'mxMissing'
  | 'spfFound'
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
  | 'dkimFound'
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

/** `value` is the fact behind the finding (a qualifier, a count, a selector, a domain), never a person. */
export type EmailDeliverabilityFinding = {
  key: EmailDeliverabilityFindingKey
  severity: EmailDeliverabilityFindingSeverity
  value: string | null
}

export type EmailProviderKey =
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

/** A mailbox provider receives the mail of the domain (MX); a sending service only sends in its name (SPF include). */
export type EmailProviderKind = 'mailbox' | 'sendingService'

export type EmailProviderGuideKey = 'spf' | 'dkim' | 'dmarc' | 'general'

export type EmailProviderGuide = {
  key: EmailProviderGuideKey
  url: string
}

/** How a provider is recognized (lowercase MX endings, SPF include fragments) and the DKIM selectors it documents. */
export type EmailProviderDefinition = {
  key: EmailProviderKey
  name: string
  kind: EmailProviderKind
  mxSuffixes: string[]
  spfIncludeMarkers: string[]
  dkimSelectors: string[]
  hasGuessableSelectors: boolean
  guides: EmailProviderGuide[]
}

/** The part of a provider definition returned to the visitor. */
export type EmailProviderSummary = {
  key: EmailProviderKey
  name: string
  kind: EmailProviderKind
  hasGuessableSelectors: boolean
  guides: EmailProviderGuide[]
}

export type EmailSpfAllQualifier = '+' | '-' | '~' | '?'

export type EmailSpfRecordReport = {
  record: string | null
  recordCount: number
  allQualifier: EmailSpfAllQualifier | null
  lookupCount: number
  includeTargets: string[]
  unresolvedIncludes: string[]
  hasPtrMechanism: boolean
  isValid: boolean
}

export type EmailDkimRecordReport = {
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

export type EmailDmarcPolicy = 'none' | 'quarantine' | 'reject'

export type EmailDmarcAlignment = 'r' | 's'

export type EmailDmarcRecordReport = {
  record: string | null
  recordCount: number
  policy: EmailDmarcPolicy | null
  subdomainPolicy: EmailDmarcPolicy | null
  percentage: number | null
  reportingDomains: string[]
  dkimAlignment: EmailDmarcAlignment | null
  spfAlignment: EmailDmarcAlignment | null
  isValid: boolean
}

export type EmailDeliverabilityCheckResult = {
  domain: string
  verdict: EmailDeliverabilityVerdict
  provider: EmailProviderSummary | null
  sendingServices: EmailProviderSummary[]
  mxExchanges: string[]
  spf: EmailSpfRecordReport
  dkim: EmailDkimRecordReport
  dmarc: EmailDmarcRecordReport
  findings: EmailDeliverabilityFinding[]
  checkedAt: string
}

export type EmailDeliverabilityCheckQuery = {
  domain?: string
}

export type EmailDeliverabilityCacheEntry = {
  result: EmailDeliverabilityCheckResult
  expiresAt: number
}

export type DnsAnswerStatus = 'found' | 'notFound' | 'noData' | 'failed'

/** Each TXT record with its strings joined, as the RFCs read them. */
export type DnsTxtAnswer = {
  status: DnsAnswerStatus
  records: string[]
}

export type DnsMxAnswer = {
  status: DnsAnswerStatus
  exchanges: string[]
}

/** What the SPF walk of a domain accumulates while it follows the includes. */
export type EmailSpfWalkState = {
  lookupCount: number
  includeTargets: string[]
  unresolvedIncludes: string[]
  hasPtrMechanism: boolean
  queriesDone: number
}

export type EmailDkimProbeOutcome = {
  selector: string
  record: string | null
}
