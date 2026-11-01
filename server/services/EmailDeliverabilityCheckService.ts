import type { KeyObject } from 'node:crypto'
import type { MxRecord } from 'node:dns'
import type {
  DnsAnswerStatus,
  DnsMxAnswer,
  DnsTxtAnswer,
  EmailDeliverabilityCacheEntry,
  EmailDeliverabilityCheckResult,
  EmailDeliverabilityFinding,
  EmailDeliverabilityFindingKey,
  EmailDeliverabilityFindingSeverity,
  EmailDeliverabilityVerdict,
  EmailDkimProbeOutcome,
  EmailDkimRecordReport,
  EmailDmarcAlignment,
  EmailDmarcPolicy,
  EmailDmarcRecordReport,
  EmailProviderDefinition,
  EmailProviderSummary,
  EmailSpfAllQualifier,
  EmailSpfRecordReport,
  EmailSpfWalkState,
} from '~~/server/types/tools/emailDeliverabilityCheck'
import { createError } from 'h3'
import { createPublicKey } from 'node:crypto'
import { Resolver } from 'node:dns/promises'
import { COMMON_DKIM_SELECTORS, CONSUMER_MAILBOX_DOMAINS, EMAIL_PROVIDERS } from '~~/server/constants/emailProviders'
import { PhpVulnerabilityCheckService } from '~~/server/services/PhpVulnerabilityCheckService'

const CACHE_TTL_MS: number = 10 * 60 * 1000
const CACHE_MAX_ENTRIES: number = 500
const DNS_TIMEOUT_MS: number = 2000
const DNS_TRIES: number = 2
const MAX_INPUT_LENGTH: number = 320
/** RFC 7208 §4.6.4: at most ten terms that need a DNS lookup, nested includes counted. */
const SPF_MAX_LOOKUPS: number = 10
const SPF_MAX_INCLUDE_DEPTH: number = 5
const SPF_MAX_QUERIES: number = 30
/** RFC 8301 §3.2 and Gmail: a DKIM key shorter than 1 024 bits is not a valid signature. */
const DKIM_MIN_KEY_BITS: number = 1024
const DKIM_ED25519_KEY_BITS: number = 256
const MAX_DKIM_SELECTORS_PROBED: number = 24
const MAX_EXTERNAL_REPORTING_DOMAINS_CHECKED: number = 2
const DMARC_FULL_PERCENTAGE: number = 100

const WWW_PREFIX_REGEX: RegExp = /^www\./
const SPF_VERSION_REGEX: RegExp = /^v=spf1(?:\s|$)/i
const DMARC_VERSION_REGEX: RegExp = /^v=dmarc1\s*(?:;|$)/i
const DKIM_PUBLIC_KEY_TAG_REGEX: RegExp = /(?:^|;)\s*p=/i
const SPF_QUALIFIER_REGEX: RegExp = /^[+\-~?]/
const SPF_TERM_NAME_REGEX: RegExp = /^([a-z0-9]+)(?:([:=/])(.*))?$/
const WHITESPACE_REGEX: RegExp = /\s+/g
const MAILTO_PREFIX_REGEX: RegExp = /^mailto:/i
const DMARC_POLICIES: EmailDmarcPolicy[] = ['none', 'quarantine', 'reject']
const DMARC_ALIGNMENTS: EmailDmarcAlignment[] = ['r', 's']
const SPF_ALL_QUALIFIERS: EmailSpfAllQualifier[] = ['+', '-', '~', '?']
const SPF_LOOKUP_MECHANISMS: string[] = ['a', 'mx', 'ptr', 'exists']

const resolver: Resolver = new Resolver({ timeout: DNS_TIMEOUT_MS, tries: DNS_TRIES })
const resultCache: Map<string, EmailDeliverabilityCacheEntry> = new Map()

/** Reads the SPF, DKIM, DMARC and MX records of a domain and judges the authentication of its mail. */
export class EmailDeliverabilityCheckService {
  /**
   * Turns what the visitor typed (a domain, an e-mail address, an address with scheme or path) into a bare domain.
   * @param {string} input - The visitor's text.
   * @returns {string | null} The lowercase domain without `www.`, or null when it is not a usable public name.
   */
  public static normalizeDomain(input: string): string | null {
    const trimmed: string = input.trim().toLowerCase()

    if (!trimmed || trimmed.length > MAX_INPUT_LENGTH) {
      return null
    }
    const atIndex: number = trimmed.lastIndexOf('@')
    const candidate: string = atIndex === -1 ? trimmed : trimmed.slice(atIndex + 1)
    const host: string | null = PhpVulnerabilityCheckService.normalizeHost(candidate)

    if (!host) {
      return null
    }
    const domain: string = host.replace(WWW_PREFIX_REGEX, '')

    return domain.includes('.') ? domain : null
  }

  /**
   * Checks a domain, from the cache when it was read in the last minutes.
   * @param {string} domain - A domain returned by `normalizeDomain`.
   * @returns {Promise<EmailDeliverabilityCheckResult>} The verdict, the records read and the findings behind it.
   * @throws {H3Error} 502 when the DNS of the domain cannot be read at all.
   */
  public static async checkDomain(domain: string): Promise<EmailDeliverabilityCheckResult> {
    const now: number = Date.now()
    const cached: EmailDeliverabilityCacheEntry | undefined = resultCache.get(domain)

    if (cached && cached.expiresAt > now) {
      return cached.result
    }
    const result: EmailDeliverabilityCheckResult = await EmailDeliverabilityCheckService.buildResult(domain)

    if (resultCache.size >= CACHE_MAX_ENTRIES) {
      EmailDeliverabilityCheckService.pruneCache(now)
    }
    resultCache.set(domain, { result, expiresAt: now + CACHE_TTL_MS })
    return result
  }

  /**
   * Reads the records of the domain, the SPF includes, the DKIM selectors of the providers found, and judges them.
   * @param {string} domain - The domain checked.
   * @returns {Promise<EmailDeliverabilityCheckResult>} The verdict, the records read and the findings behind it.
   * @throws {H3Error} 502 when every DNS query failed (resolver unreachable or server failure).
   */
  private static async buildResult(domain: string): Promise<EmailDeliverabilityCheckResult> {
    const [rootTxt, mx, dmarcTxt]: [DnsTxtAnswer, DnsMxAnswer, DnsTxtAnswer] = await Promise.all([
      EmailDeliverabilityCheckService.readTxt(domain),
      EmailDeliverabilityCheckService.readMx(domain),
      EmailDeliverabilityCheckService.readTxt(`_dmarc.${domain}`),
    ])

    if (rootTxt.status === 'failed' && mx.status === 'failed' && dmarcTxt.status === 'failed') {
      throw createError({ statusCode: 502, statusMessage: 'The DNS of this domain could not be read. Try again.' })
    }
    const doesDomainExist: boolean = !(rootTxt.status === 'notFound' && mx.status === 'notFound')
    const spfRecords: string[] = rootTxt.records
      .map((record: string): string => record.trim())
      .filter((record: string): boolean => SPF_VERSION_REGEX.test(record))
    const spf: EmailSpfRecordReport = await EmailDeliverabilityCheckService.buildSpfReport(domain, spfRecords)
    const provider: EmailProviderDefinition | null = EmailDeliverabilityCheckService.detectMailboxProvider(
      mx.exchanges,
      spf.includeTargets,
    )
    const sendingServices: EmailProviderDefinition[] = EmailDeliverabilityCheckService.detectSendingServices(
      spf.includeTargets,
      provider,
    )
    const dmarc: EmailDmarcRecordReport = EmailDeliverabilityCheckService.buildDmarcReport(dmarcTxt)
    const [dkim, unauthorizedReportingDomains]: [EmailDkimRecordReport, string[]] = await Promise.all([
      EmailDeliverabilityCheckService.probeDkim(domain, provider, sendingServices),
      EmailDeliverabilityCheckService.findUnauthorizedExternalReporting(domain, dmarc.reportingDomains),
    ])
    const verdict: EmailDeliverabilityVerdict = EmailDeliverabilityCheckService.decideVerdict(
      domain,
      doesDomainExist,
      mx.exchanges,
      spf,
      dkim,
      dmarc,
      provider,
    )
    const findings: EmailDeliverabilityFinding[] =
      verdict === 'invalidDomain' || verdict === 'consumerMailbox'
        ? []
        : EmailDeliverabilityCheckService.buildFindings(
            mx.exchanges,
            spf,
            dkim,
            dmarc,
            provider,
            sendingServices,
            unauthorizedReportingDomains,
          )

    return {
      domain,
      verdict,
      provider: provider ? EmailDeliverabilityCheckService.summarizeProvider(provider) : null,
      sendingServices: sendingServices.map(EmailDeliverabilityCheckService.summarizeProvider),
      mxExchanges: mx.exchanges,
      spf,
      dkim,
      dmarc,
      findings,
      checkedAt: new Date().toISOString(),
    }
  }

  /**
   * Decides the verdict in the order of the corrections: missing domain, free webmail, no mail at all, then SPF, DKIM and DMARC.
   * @param {string} domain - The domain checked.
   * @param {boolean} doesDomainExist - Whether the domain answered anything at all.
   * @param {string[]} mxExchanges - The MX hosts.
   * @param {EmailSpfRecordReport} spf - The SPF report.
   * @param {EmailDkimRecordReport} dkim - The DKIM report.
   * @param {EmailDmarcRecordReport} dmarc - The DMARC report.
   * @param {EmailProviderDefinition | null} provider - The mailbox provider detected.
   * @returns {EmailDeliverabilityVerdict} The verdict.
   */
  private static decideVerdict(
    domain: string,
    doesDomainExist: boolean,
    mxExchanges: string[],
    spf: EmailSpfRecordReport,
    dkim: EmailDkimRecordReport,
    dmarc: EmailDmarcRecordReport,
    provider: EmailProviderDefinition | null,
  ): EmailDeliverabilityVerdict {
    if (!doesDomainExist) {
      return 'invalidDomain'
    }
    if (CONSUMER_MAILBOX_DOMAINS.includes(domain)) {
      return 'consumerMailbox'
    }
    if (mxExchanges.length === 0 && spf.recordCount === 0) {
      return 'noMailSetup'
    }
    if (spf.recordCount > 1) {
      return 'multipleSpf'
    }
    if (!spf.isValid) {
      return 'spfMissing'
    }
    if (spf.allQualifier === null || spf.allQualifier === '+' || spf.allQualifier === '?') {
      return 'spfTooPermissive'
    }
    if (spf.lookupCount > SPF_MAX_LOOKUPS) {
      return 'spfTooManyLookups'
    }
    if (EmailDeliverabilityCheckService.isDkimBlocking(dkim, provider)) {
      return 'dkimNotFound'
    }
    if (!dmarc.isValid) {
      return 'dmarcMissing'
    }
    if (!dkim.isUsable) {
      return 'dkimNotFound'
    }
    if (dmarc.policy === 'none') {
      return 'dmarcNone'
    }
    return 'allGood'
  }

  /**
   * Whether DKIM is surely broken: a revoked or short key, or no key under the selectors the provider documents.
   * @param {EmailDkimRecordReport} dkim - The DKIM report.
   * @param {EmailProviderDefinition | null} provider - The mailbox provider detected.
   * @returns {boolean} True when the verdict must name DKIM.
   */
  private static isDkimBlocking(dkim: EmailDkimRecordReport, provider: EmailProviderDefinition | null): boolean {
    if (dkim.isRevoked || (dkim.keyBits !== null && dkim.keyBits < DKIM_MIN_KEY_BITS)) {
      return true
    }
    return dkim.selector === null && provider !== null && provider.hasGuessableSelectors
  }

  /**
   * Reads the single SPF record and walks its includes to count the lookups and list the services allowed.
   * @param {string} domain - The domain checked.
   * @param {string[]} spfRecords - The TXT records of the domain that start with `v=spf1`.
   * @returns {Promise<EmailSpfRecordReport>} The SPF report; empty when none or several records were found.
   */
  private static async buildSpfReport(domain: string, spfRecords: string[]): Promise<EmailSpfRecordReport> {
    const record: string | undefined = spfRecords[0]

    if (spfRecords.length !== 1 || record === undefined) {
      return {
        record: null,
        recordCount: spfRecords.length,
        allQualifier: null,
        lookupCount: 0,
        includeTargets: [],
        unresolvedIncludes: [],
        hasPtrMechanism: false,
        isValid: false,
      }
    }
    const state: EmailSpfWalkState = {
      lookupCount: 0,
      includeTargets: [],
      unresolvedIncludes: [],
      hasPtrMechanism: false,
      queriesDone: 0,
    }
    const allQualifier: EmailSpfAllQualifier | null = await EmailDeliverabilityCheckService.walkSpfRecord(
      record,
      0,
      state,
      new Set([domain]),
    )

    return {
      record,
      recordCount: 1,
      allQualifier,
      lookupCount: state.lookupCount,
      includeTargets: Array.from(new Set(state.includeTargets)),
      unresolvedIncludes: Array.from(new Set(state.unresolvedIncludes)),
      hasPtrMechanism: state.hasPtrMechanism,
      isValid: state.unresolvedIncludes.length === 0,
    }
  }

  /**
   * Walks one SPF record: counts its lookups, follows its includes and redirect, returns its `all` qualifier.
   * @param {string} record - An SPF record.
   * @param {number} depth - Depth of the record in the include chain, 0 for the domain itself.
   * @param {EmailSpfWalkState} state - Receives the lookups, the targets and the errors found.
   * @param {Set<string>} visited - Domains already walked, to stop on a loop.
   * @returns {Promise<EmailSpfAllQualifier | null>} The `all` qualifier, or the redirect target's when there is none.
   */
  private static async walkSpfRecord(
    record: string,
    depth: number,
    state: EmailSpfWalkState,
    visited: Set<string>,
  ): Promise<EmailSpfAllQualifier | null> {
    const terms: string[] = record.trim().split(WHITESPACE_REGEX).slice(1)
    const includeTargets: string[] = []
    let allQualifier: EmailSpfAllQualifier | null = null
    let redirectTarget: string | null = null

    for (const term of terms) {
      const qualifier: EmailSpfAllQualifier = EmailDeliverabilityCheckService.readSpfQualifier(term)
      const body: string = term.replace(SPF_QUALIFIER_REGEX, '').toLowerCase()
      const parts: RegExpExecArray | null = SPF_TERM_NAME_REGEX.exec(body)
      const name: string = parts?.[1] ?? ''
      const separator: string = parts?.[2] ?? ''
      const argument: string = parts?.[3] ?? ''

      if (name === 'all') {
        allQualifier = qualifier
        break
      }
      if (name === 'include' && separator === ':' && argument) {
        state.lookupCount += 1
        includeTargets.push(argument)
      } else if (name === 'redirect' && separator === '=' && argument) {
        state.lookupCount += 1
        redirectTarget = argument
      } else if (SPF_LOOKUP_MECHANISMS.includes(name)) {
        state.lookupCount += 1
        if (name === 'ptr') {
          state.hasPtrMechanism = true
        }
      }
    }
    const targets: string[] =
      allQualifier === null && redirectTarget ? [...includeTargets, redirectTarget] : includeTargets

    state.includeTargets.push(...targets)
    const nestedQualifiers: Array<EmailSpfAllQualifier | null> = await Promise.all(
      targets.map(
        (target: string): Promise<EmailSpfAllQualifier | null> =>
          EmailDeliverabilityCheckService.walkSpfTarget(target, depth + 1, state, visited),
      ),
    )

    if (allQualifier !== null || redirectTarget === null) {
      return allQualifier
    }
    return nestedQualifiers[nestedQualifiers.length - 1] ?? null
  }

  /**
   * Reads the SPF record of an include or redirect target and walks it, within the depth and query budgets.
   * @param {string} target - The domain named by `include:` or `redirect=`.
   * @param {number} depth - Depth of the target in the include chain.
   * @param {EmailSpfWalkState} state - Receives the lookups, the targets and the errors found.
   * @param {Set<string>} visited - Domains already walked.
   * @returns {Promise<EmailSpfAllQualifier | null>} The `all` qualifier of the target, null when unknown.
   */
  private static async walkSpfTarget(
    target: string,
    depth: number,
    state: EmailSpfWalkState,
    visited: Set<string>,
  ): Promise<EmailSpfAllQualifier | null> {
    if (depth > SPF_MAX_INCLUDE_DEPTH || state.queriesDone >= SPF_MAX_QUERIES || visited.has(target)) {
      return null
    }
    visited.add(target)
    state.queriesDone += 1
    const answer: DnsTxtAnswer = await EmailDeliverabilityCheckService.readTxt(target)

    if (answer.status === 'failed') {
      return null
    }
    const records: string[] = answer.records
      .map((record: string): string => record.trim())
      .filter((record: string): boolean => SPF_VERSION_REGEX.test(record))
    const record: string | undefined = records[0]

    if (records.length !== 1 || record === undefined) {
      state.unresolvedIncludes.push(target)
      return null
    }
    return EmailDeliverabilityCheckService.walkSpfRecord(record, depth, state, visited)
  }

  /**
   * Qualifier of an SPF term (`+` when none is written).
   * @param {string} term - A term of the record.
   * @returns {EmailSpfAllQualifier} The qualifier.
   */
  private static readSpfQualifier(term: string): EmailSpfAllQualifier {
    const first: string = term.charAt(0)

    return SPF_ALL_QUALIFIERS.find((qualifier: EmailSpfAllQualifier): boolean => qualifier === first) ?? '+'
  }

  /**
   * The mailbox provider, from the MX hosts, or o2switch from its SPF include (its MX is in the client's own domain).
   * @param {string[]} mxExchanges - The MX hosts.
   * @param {string[]} includeTargets - The SPF include and redirect targets, nested ones included.
   * @returns {EmailProviderDefinition | null} The provider, or null when none is recognized.
   */
  private static detectMailboxProvider(
    mxExchanges: string[],
    includeTargets: string[],
  ): EmailProviderDefinition | null {
    const exchanges: string[] = mxExchanges.map((exchange: string): string => exchange.toLowerCase())
    const fromMx: EmailProviderDefinition | undefined = EMAIL_PROVIDERS.find(
      (candidate: EmailProviderDefinition): boolean =>
        candidate.kind === 'mailbox' &&
        candidate.mxSuffixes.some((suffix: string): boolean =>
          exchanges.some((exchange: string): boolean => exchange.endsWith(suffix)),
        ),
    )

    if (fromMx) {
      return fromMx
    }
    return (
      EMAIL_PROVIDERS.find(
        (candidate: EmailProviderDefinition): boolean =>
          candidate.key === 'o2switch' && EmailDeliverabilityCheckService.isAllowedBySpf(candidate, includeTargets),
      ) ?? null
    )
  }

  /**
   * The services the SPF record allows to send, the mailbox provider excepted.
   * @param {string[]} includeTargets - The SPF include and redirect targets, nested ones included.
   * @param {EmailProviderDefinition | null} provider - The mailbox provider detected.
   * @returns {EmailProviderDefinition[]} The services, in catalog order.
   */
  private static detectSendingServices(
    includeTargets: string[],
    provider: EmailProviderDefinition | null,
  ): EmailProviderDefinition[] {
    return EMAIL_PROVIDERS.filter(
      (candidate: EmailProviderDefinition): boolean =>
        candidate.key !== provider?.key && EmailDeliverabilityCheckService.isAllowedBySpf(candidate, includeTargets),
    )
  }

  /**
   * Whether one of the SPF targets names the provider.
   * @param {EmailProviderDefinition} provider - A provider.
   * @param {string[]} includeTargets - The SPF include and redirect targets, lowercase.
   * @returns {boolean} True when a target contains one of the provider's markers.
   */
  private static isAllowedBySpf(provider: EmailProviderDefinition, includeTargets: string[]): boolean {
    return provider.spfIncludeMarkers.some((marker: string): boolean =>
      includeTargets.some((target: string): boolean => target.includes(marker)),
    )
  }

  /**
   * Probes the DKIM selectors of the providers found, then the usual ones, all at once, and reads the first usable key.
   * @param {string} domain - The domain checked.
   * @param {EmailProviderDefinition | null} provider - The mailbox provider detected.
   * @param {EmailProviderDefinition[]} sendingServices - The sending services allowed by the SPF record.
   * @returns {Promise<EmailDkimRecordReport>} The DKIM report.
   */
  private static async probeDkim(
    domain: string,
    provider: EmailProviderDefinition | null,
    sendingServices: EmailProviderDefinition[],
  ): Promise<EmailDkimRecordReport> {
    const selectors: string[] = Array.from(
      new Set([
        ...(provider?.dkimSelectors ?? []),
        ...sendingServices.flatMap((service: EmailProviderDefinition): string[] => service.dkimSelectors),
        ...COMMON_DKIM_SELECTORS,
      ]),
    ).slice(0, MAX_DKIM_SELECTORS_PROBED)
    const outcomes: EmailDkimProbeOutcome[] = await Promise.all(
      selectors.map(async (selector: string): Promise<EmailDkimProbeOutcome> => {
        const answer: DnsTxtAnswer = await EmailDeliverabilityCheckService.readTxt(`${selector}._domainkey.${domain}`)

        return { selector, record: EmailDeliverabilityCheckService.pickDkimRecord(answer.records) }
      }),
    )
    const found: EmailDkimProbeOutcome[] = outcomes.filter(
      (outcome: EmailDkimProbeOutcome): boolean => outcome.record !== null,
    )
    const reports: EmailDkimRecordReport[] = found.map(
      (outcome: EmailDkimProbeOutcome): EmailDkimRecordReport =>
        EmailDeliverabilityCheckService.readDkimRecord(outcome.selector, outcome.record ?? ''),
    )
    const best: EmailDkimRecordReport | undefined =
      reports.find((report: EmailDkimRecordReport): boolean => report.isUsable) ?? reports[0]

    return {
      selector: best?.selector ?? null,
      record: best?.record ?? null,
      selectorsFound: found.map((outcome: EmailDkimProbeOutcome): string => outcome.selector),
      selectorsProbed: selectors,
      keyType: best?.keyType ?? null,
      keyBits: best?.keyBits ?? null,
      isRevoked: best?.isRevoked ?? false,
      isTestMode: best?.isTestMode ?? false,
      isUsable: best?.isUsable ?? false,
    }
  }

  /**
   * The TXT record of a selector that carries a DKIM key (a `p=` tag), when there is one.
   * @param {string[]} records - The TXT records read under `<selector>._domainkey`.
   * @returns {string | null} The record, or null.
   */
  private static pickDkimRecord(records: string[]): string | null {
    return (
      records
        .map((record: string): string => record.trim())
        .find((record: string): boolean => DKIM_PUBLIC_KEY_TAG_REGEX.test(record)) ?? null
    )
  }

  /**
   * Reads a DKIM key record: key type, size, revocation (`p=` empty) and test mode (`t=y`), per RFC 6376 §3.6.1.
   * @param {string} selector - The selector the record was read under.
   * @param {string} record - The record.
   * @returns {EmailDkimRecordReport} The report of this key alone (probe lists are filled by the caller).
   */
  private static readDkimRecord(selector: string, record: string): EmailDkimRecordReport {
    const tags: Map<string, string> = EmailDeliverabilityCheckService.parseTagList(record)
    const publicKey: string = (tags.get('p') ?? '').replace(WHITESPACE_REGEX, '')
    const keyType: string = (tags.get('k') ?? 'rsa').toLowerCase()
    const isRevoked: boolean = publicKey === ''
    const isTestMode: boolean = (tags.get('t') ?? '')
      .toLowerCase()
      .split(':')
      .some((flag: string): boolean => flag.trim() === 'y')
    const keyBits: number | null = isRevoked ? null : EmailDeliverabilityCheckService.readKeyBits(publicKey, keyType)

    return {
      selector,
      record,
      selectorsFound: [selector],
      selectorsProbed: [selector],
      keyType,
      keyBits,
      isRevoked,
      isTestMode,
      isUsable: !isRevoked && (keyBits === null || keyBits >= DKIM_MIN_KEY_BITS),
    }
  }

  /**
   * Size of a DKIM public key: the RSA modulus length read from the DER key, 256 for an Ed25519 key.
   * @param {string} publicKey - The base64 `p=` value without whitespace.
   * @param {string} keyType - The `k=` value (`rsa` by default).
   * @returns {number | null} The size in bits, or null when the key cannot be decoded.
   */
  private static readKeyBits(publicKey: string, keyType: string): number | null {
    if (keyType === 'ed25519') {
      return DKIM_ED25519_KEY_BITS
    }
    try {
      const key: KeyObject = createPublicKey({ key: Buffer.from(publicKey, 'base64'), format: 'der', type: 'spki' })

      return key.asymmetricKeyDetails?.modulusLength ?? null
    } catch {
      return null
    }
  }

  /**
   * Reads the single DMARC record of `_dmarc.<domain>`, per RFC 7489 §6.3: `v=DMARC1` first, a valid `p` after it.
   * @param {DnsTxtAnswer} answer - The TXT records read under `_dmarc.<domain>`.
   * @returns {EmailDmarcRecordReport} The DMARC report; invalid when none, several or a malformed record was found.
   */
  private static buildDmarcReport(answer: DnsTxtAnswer): EmailDmarcRecordReport {
    const records: string[] = answer.records
      .map((record: string): string => record.trim())
      .filter((record: string): boolean => DMARC_VERSION_REGEX.test(record))
    const record: string | undefined = records[0]
    const report: EmailDmarcRecordReport = {
      record: records.length === 1 ? (record ?? null) : null,
      recordCount: records.length,
      policy: null,
      subdomainPolicy: null,
      percentage: null,
      reportingDomains: [],
      dkimAlignment: null,
      spfAlignment: null,
      isValid: false,
    }

    if (records.length !== 1 || record === undefined) {
      return report
    }
    const tags: Map<string, string> = EmailDeliverabilityCheckService.parseTagList(record)
    const policy: EmailDmarcPolicy | null = EmailDeliverabilityCheckService.readDmarcPolicy(tags.get('p'))

    if (policy === null) {
      return report
    }
    const percentageTag: string | undefined = tags.get('pct')
    const percentage: number = percentageTag === undefined ? Number.NaN : Number.parseInt(percentageTag, 10)

    return {
      ...report,
      policy,
      subdomainPolicy: EmailDeliverabilityCheckService.readDmarcPolicy(tags.get('sp')),
      percentage: Number.isNaN(percentage) ? null : Math.min(Math.max(percentage, 0), DMARC_FULL_PERCENTAGE),
      reportingDomains: EmailDeliverabilityCheckService.readReportingDomains(tags.get('rua') ?? ''),
      dkimAlignment: EmailDeliverabilityCheckService.readDmarcAlignment(tags.get('adkim')),
      spfAlignment: EmailDeliverabilityCheckService.readDmarcAlignment(tags.get('aspf')),
      isValid: true,
    }
  }

  /**
   * A DMARC policy value, when it is one of the three the RFC allows.
   * @param {string | undefined} value - The `p=` or `sp=` value.
   * @returns {EmailDmarcPolicy | null} The policy, or null when absent or unknown (`p=rejet` is unknown).
   */
  private static readDmarcPolicy(value: string | undefined): EmailDmarcPolicy | null {
    const lower: string = (value ?? '').trim().toLowerCase()

    return DMARC_POLICIES.find((policy: EmailDmarcPolicy): boolean => policy === lower) ?? null
  }

  /**
   * A DMARC alignment mode (`r` relaxed, `s` strict).
   * @param {string | undefined} value - The `adkim=` or `aspf=` value.
   * @returns {EmailDmarcAlignment | null} The mode, or null when absent or unknown.
   */
  private static readDmarcAlignment(value: string | undefined): EmailDmarcAlignment | null {
    const lower: string = (value ?? '').trim().toLowerCase()

    return DMARC_ALIGNMENTS.find((alignment: EmailDmarcAlignment): boolean => alignment === lower) ?? null
  }

  /**
   * Domains of the `rua=` addresses, without their mailbox names.
   * @param {string} reportingUris - The `rua=` value (`mailto:` addresses separated by commas).
   * @returns {string[]} The domains, lowercase, each once.
   */
  private static readReportingDomains(reportingUris: string): string[] {
    const domains: Set<string> = new Set()

    for (const uri of reportingUris.split(',')) {
      const address: string = uri.trim().replace(MAILTO_PREFIX_REGEX, '').split('!')[0] ?? ''
      const atIndex: number = address.lastIndexOf('@')

      if (atIndex !== -1 && atIndex < address.length - 1) {
        domains.add(address.slice(atIndex + 1).toLowerCase())
      }
    }
    return Array.from(domains)
  }

  /**
   * External reporting domains without the `<domain>._report._dmarc.<reporting domain>` authorization (RFC 7489 §7.1).
   * @param {string} domain - The domain checked.
   * @param {string[]} reportingDomains - The domains of the `rua=` addresses.
   * @returns {Promise<string[]>} The reporting domains that refuse, among the first ones checked.
   */
  private static async findUnauthorizedExternalReporting(
    domain: string,
    reportingDomains: string[],
  ): Promise<string[]> {
    const organizational: string = EmailDeliverabilityCheckService.readOrganizationalDomain(domain)
    const external: string[] = reportingDomains
      .filter(
        (reporting: string): boolean =>
          EmailDeliverabilityCheckService.readOrganizationalDomain(reporting) !== organizational,
      )
      .slice(0, MAX_EXTERNAL_REPORTING_DOMAINS_CHECKED)
    const answers: DnsTxtAnswer[] = await Promise.all(
      external.map(
        (reporting: string): Promise<DnsTxtAnswer> =>
          EmailDeliverabilityCheckService.readTxt(`${domain}._report._dmarc.${reporting}`),
      ),
    )

    return external.filter((_reporting: string, index: number): boolean => {
      const answer: DnsTxtAnswer | undefined = answers[index]

      return (
        answer !== undefined &&
        answer.status !== 'failed' &&
        !answer.records.some((record: string): boolean => DMARC_VERSION_REGEX.test(record.trim()))
      )
    })
  }

  /**
   * Lists what was found, in the order of the corrections: the mail server, SPF, DKIM, then DMARC.
   * @param {string[]} mxExchanges - The MX hosts.
   * @param {EmailSpfRecordReport} spf - The SPF report.
   * @param {EmailDkimRecordReport} dkim - The DKIM report.
   * @param {EmailDmarcRecordReport} dmarc - The DMARC report.
   * @param {EmailProviderDefinition | null} provider - The mailbox provider detected.
   * @param {EmailProviderDefinition[]} sendingServices - The sending services allowed by the SPF record.
   * @param {string[]} unauthorizedReportingDomains - External reporting domains that refuse the domain's reports.
   * @returns {EmailDeliverabilityFinding[]} The findings.
   */
  private static buildFindings(
    mxExchanges: string[],
    spf: EmailSpfRecordReport,
    dkim: EmailDkimRecordReport,
    dmarc: EmailDmarcRecordReport,
    provider: EmailProviderDefinition | null,
    sendingServices: EmailProviderDefinition[],
    unauthorizedReportingDomains: string[],
  ): EmailDeliverabilityFinding[] {
    const findings: EmailDeliverabilityFinding[] = []
    const addFinding: (
      key: EmailDeliverabilityFindingKey,
      severity: EmailDeliverabilityFindingSeverity,
      value?: string | null,
    ) => void = (
      key: EmailDeliverabilityFindingKey,
      severity: EmailDeliverabilityFindingSeverity,
      value: string | null = null,
    ): void => {
      findings.push({ key, severity, value })
    }
    const isProviderMissingFromSpf: boolean =
      provider !== null &&
      provider.spfIncludeMarkers.length > 0 &&
      !EmailDeliverabilityCheckService.isAllowedBySpf(provider, spf.includeTargets)

    if (mxExchanges.length === 0) {
      addFinding('mxMissing', 'warning')
    }
    if (spf.recordCount === 0) {
      addFinding('spfMissing', 'blocking')
    } else if (spf.recordCount > 1) {
      addFinding('spfMultiple', 'blocking', String(spf.recordCount))
    } else {
      if (spf.unresolvedIncludes.length > 0) {
        addFinding('spfIncludeUnresolved', 'blocking', spf.unresolvedIncludes.join(', '))
      }
      if (spf.lookupCount > SPF_MAX_LOOKUPS) {
        addFinding('spfTooManyLookups', 'blocking', String(spf.lookupCount))
      }
      if (spf.allQualifier === '+') {
        addFinding('spfPlusAll', 'blocking', '+all')
      } else if (spf.allQualifier === '?') {
        addFinding('spfNeutralAll', 'warning', '?all')
      } else if (spf.allQualifier === null) {
        addFinding('spfNoAll', 'warning')
      } else if (spf.allQualifier === '~') {
        addFinding('spfSoftFail', 'info', '~all')
      } else {
        addFinding('spfHardFail', 'info', '-all')
      }
      if (isProviderMissingFromSpf && provider) {
        addFinding('spfProviderMissing', 'warning', provider.name)
      }
      if (spf.hasPtrMechanism) {
        addFinding('spfPtrMechanism', 'info')
      }
      if (sendingServices.length > 0) {
        addFinding(
          'spfSendingServices',
          'info',
          sendingServices.map((service: EmailProviderDefinition): string => service.name).join(', '),
        )
      }
    }
    if (dkim.selector === null) {
      addFinding(
        'dkimNotFound',
        provider?.hasGuessableSelectors ? 'blocking' : 'warning',
        String(dkim.selectorsProbed.length),
      )
    } else {
      if (dkim.isRevoked) {
        addFinding('dkimKeyRevoked', 'blocking', dkim.selector)
      } else if (dkim.keyBits === null) {
        addFinding('dkimKeyUnreadable', 'warning', dkim.selector)
      } else if (dkim.keyBits < DKIM_MIN_KEY_BITS) {
        addFinding('dkimKeyTooShort', 'blocking', String(dkim.keyBits))
      }
      if (dkim.isTestMode) {
        addFinding('dkimTestMode', 'warning', dkim.selector)
      }
    }
    if (dmarc.recordCount === 0) {
      addFinding('dmarcMissing', 'blocking')
    } else if (dmarc.recordCount > 1) {
      addFinding('dmarcMultiple', 'blocking', String(dmarc.recordCount))
    } else if (!dmarc.isValid) {
      addFinding('dmarcMalformed', 'blocking', dmarc.record)
    } else {
      if (dmarc.policy === 'none') {
        addFinding('dmarcPolicyNone', 'warning', 'p=none')
      } else if (dmarc.policy === 'quarantine') {
        addFinding('dmarcPolicyQuarantine', 'info', 'p=quarantine')
      } else {
        addFinding('dmarcPolicyReject', 'info', 'p=reject')
      }
      if (dmarc.reportingDomains.length === 0) {
        addFinding('dmarcNoReporting', 'warning')
      }
      if (unauthorizedReportingDomains.length > 0) {
        addFinding('dmarcExternalReportingUnauthorized', 'warning', unauthorizedReportingDomains.join(', '))
      }
      if (dmarc.percentage !== null && dmarc.percentage < DMARC_FULL_PERCENTAGE) {
        addFinding('dmarcPartialPercentage', 'info', `pct=${dmarc.percentage}`)
      }
      if (dmarc.policy !== 'none' && !dkim.isUsable && (spf.recordCount !== 1 || isProviderMissingFromSpf)) {
        addFinding('dmarcStrictWithoutAuthentication', 'warning', `p=${dmarc.policy}`)
      }
    }
    return findings
  }

  /**
   * Splits a DKIM or DMARC record into its `tag=value` pairs (RFC 6376 §3.2), keys lowercase, first occurrence kept.
   * @param {string} record - The record.
   * @returns {Map<string, string>} The tags in record order.
   */
  private static parseTagList(record: string): Map<string, string> {
    const tags: Map<string, string> = new Map()

    for (const pair of record.split(';')) {
      const equalIndex: number = pair.indexOf('=')

      if (equalIndex === -1) {
        continue
      }
      const key: string = pair.slice(0, equalIndex).trim().toLowerCase()
      const value: string = pair.slice(equalIndex + 1).trim()

      if (key && !tags.has(key)) {
        tags.set(key, value)
      }
    }
    return tags
  }

  /**
   * The last two labels of a domain (`monentreprise.fr`), close enough to the organizational domain of RFC 7489.
   * @param {string} domain - A domain.
   * @returns {string} The last two labels, lowercase.
   */
  private static readOrganizationalDomain(domain: string): string {
    return domain.toLowerCase().split('.').slice(-2).join('.')
  }

  /**
   * Reads the TXT records of a name, each record's strings joined as receivers read them; never throws.
   * @param {string} name - A DNS name.
   * @returns {Promise<DnsTxtAnswer>} The records, or why there are none.
   */
  private static async readTxt(name: string): Promise<DnsTxtAnswer> {
    try {
      const chunks: string[][] = await resolver.resolveTxt(name)

      return { status: 'found', records: chunks.map((parts: string[]): string => parts.join('')) }
    } catch (error: unknown) {
      return { status: EmailDeliverabilityCheckService.readDnsFailure(error), records: [] }
    }
  }

  /**
   * Reads the MX hosts of a domain by priority, a "null MX" (`.`) counting as none; never throws.
   * @param {string} domain - A domain.
   * @returns {Promise<DnsMxAnswer>} The hosts, or why there are none.
   */
  private static async readMx(domain: string): Promise<DnsMxAnswer> {
    try {
      const records: MxRecord[] = await resolver.resolveMx(domain)
      const exchanges: string[] = records
        .sort((left: MxRecord, right: MxRecord): number => left.priority - right.priority)
        .map((record: MxRecord): string => record.exchange.toLowerCase())
        .filter((exchange: string): boolean => exchange !== '' && exchange !== '.')

      return { status: 'found', exchanges }
    } catch (error: unknown) {
      return { status: EmailDeliverabilityCheckService.readDnsFailure(error), exchanges: [] }
    }
  }

  /**
   * Classifies a DNS error: the name does not exist, exists without this record type, or the query failed.
   * @param {unknown} error - The error thrown by the resolver.
   * @returns {DnsAnswerStatus} `notFound`, `noData` or `failed`.
   */
  private static readDnsFailure(error: unknown): DnsAnswerStatus {
    if (typeof error !== 'object' || error === null) {
      return 'failed'
    }
    const failure: { code?: unknown } = error
    const code: string = typeof failure.code === 'string' ? failure.code : ''

    if (code === 'ENOTFOUND') {
      return 'notFound'
    }
    if (code === 'ENODATA') {
      return 'noData'
    }
    return 'failed'
  }

  /**
   * The part of a provider definition the visitor needs: name, kind, selector certainty and guides.
   * @param {EmailProviderDefinition} provider - A provider.
   * @returns {EmailProviderSummary} Its summary.
   */
  private static summarizeProvider(provider: EmailProviderDefinition): EmailProviderSummary {
    return {
      key: provider.key,
      name: provider.name,
      kind: provider.kind,
      hasGuessableSelectors: provider.hasGuessableSelectors,
      guides: provider.guides,
    }
  }

  /**
   * Drops the expired entries of the result cache, or everything when the cache is still full.
   * @param {number} now - The current time.
   * @returns {void}
   */
  private static pruneCache(now: number): void {
    for (const [key, entry] of resultCache) {
      if (entry.expiresAt <= now) {
        resultCache.delete(key)
      }
    }
    if (resultCache.size >= CACHE_MAX_ENTRIES) {
      resultCache.clear()
    }
  }
}
