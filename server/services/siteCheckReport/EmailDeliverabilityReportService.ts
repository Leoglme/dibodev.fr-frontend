import type { MailLocale } from '~~/server/types/mail/contact'
import type {
  EmailDeliverabilityCheckResult,
  EmailDeliverabilityFinding,
  EmailDeliverabilityFindingKey,
  EmailDeliverabilityFindingSeverity,
  EmailDeliverabilityVerdict,
  EmailProviderGuide,
  EmailProviderSummary,
} from '~~/server/types/tools/emailDeliverabilityCheck'
import type {
  SiteCheckEmailRecordState,
  SiteCheckEmailRecordStatus,
  SiteCheckReport,
  SiteCheckReportLevel,
  SiteCheckReportLink,
  SiteCheckReportMailTexts,
  SiteCheckReportPoint,
  SiteCheckReportSection,
} from '~~/server/types/tools/siteCheckReport'
import type { DibodevEmailDeliverabilityFindingKey } from '~~/app/core/types/DibodevEmailDeliverabilityCheck'
import type { DibodevEmailDeliverabilityCheckerWording } from '~~/app/core/types/DibodevEmailDeliverabilityCheckPage'
import { EMAIL_DELIVERABILITY_CHECK_PAGES } from '~~/app/core/constants/emailDeliverabilityCheckPage'
import {
  EMAIL_DELIVERABILITY_VERDICTS_WITHOUT_FIXES,
  EMAIL_DELIVERABILITY_VERDICTS_WITHOUT_RECORDS,
} from '~~/app/core/constants/emailDeliverabilityCheck/pageShared'
import { QuizTextUtils } from '~~/app/core/utils/QuizTextUtils'
import { SiteCheckReportTextUtils } from '~~/server/utils/SiteCheckReportTextUtils'

const SPF_MAX_LOOKUPS: number = 10
const DKIM_SELECTOR_PATTERN: RegExp = /^[a-z0-9._-]{1,63}$/i
const DKIM_KEY_TYPE_PATTERN: RegExp = /^[a-z0-9-]{1,16}$/i
const DOMAIN_OWNER_RECORD_PLACEHOLDERS: string[] = ['spfRecord', 'dmarcRecord', 'mxHost']
const FINDINGS_QUOTING_DOMAIN_OWNER_VALUE: EmailDeliverabilityFindingKey[] = [
  'spfIncludeUnresolved',
  'dmarcMalformed',
  'dmarcExternalReportingUnauthorized',
]
const LEVEL_BY_VERDICT: Record<EmailDeliverabilityVerdict, SiteCheckReportLevel> = {
  allGood: 'ok',
  dmarcMissing: 'warning',
  dmarcNone: 'warning',
  dkimNotFound: 'warning',
  spfTooManyLookups: 'warning',
  spfMissing: 'critical',
  spfTooPermissive: 'critical',
  multipleSpf: 'critical',
  noMailSetup: 'info',
  consumerMailbox: 'info',
  invalidDomain: 'unknown',
}
const LEVEL_BY_RECORD_STATUS: Record<SiteCheckEmailRecordStatus, SiteCheckReportLevel> = {
  ok: 'ok',
  warning: 'warning',
  missing: 'critical',
}
const LEVEL_BY_SEVERITY: Record<EmailDeliverabilityFindingSeverity, SiteCheckReportLevel> = {
  blocking: 'critical',
  warning: 'warning',
  info: 'info',
}

/** The e-mailed report of an e-mail check: the records and host names published by the domain owner stay on the page. */
export class EmailDeliverabilityReportService {
  /**
   * Writes the report with the texts of the tool page: SPF, DKIM and DMARC, findings, fixes and the provider guides.
   * @param {EmailDeliverabilityCheckResult} result - The check, run again by the server.
   * @param {MailLocale} locale - The language of the e-mail.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @returns {SiteCheckReport} The report.
   */
  static build(
    result: EmailDeliverabilityCheckResult,
    locale: MailLocale,
    texts: SiteCheckReportMailTexts,
  ): SiteCheckReport {
    const wording: DibodevEmailDeliverabilityCheckerWording = EMAIL_DELIVERABILITY_CHECK_PAGES[locale].checker
    const values: Record<string, string> = this.buildTemplateValues(result, wording, texts)
    const hasFixes: boolean = !EMAIL_DELIVERABILITY_VERDICTS_WITHOUT_FIXES.includes(result.verdict)
    const sections: SiteCheckReportSection[] = []
    if (!EMAIL_DELIVERABILITY_VERDICTS_WITHOUT_RECORDS.includes(result.verdict)) {
      sections.push({ title: wording.recordsTitle, points: this.buildRecordPoints(result, wording, values, texts) })
    }
    const findingPoints: SiteCheckReportPoint[] = this.buildFindingPoints(result, wording, values, texts)
    if (findingPoints.length > 0) {
      sections.push({ title: wording.findingsTitle, points: findingPoints })
    }

    return {
      tool: 'emailDeliverability',
      host: result.domain,
      verdict: result.verdict,
      level: LEVEL_BY_VERDICT[result.verdict],
      title: QuizTextUtils.fillTemplate(wording.verdictTitles[result.verdict], values),
      summary: QuizTextUtils.fillTemplate(wording.verdictTexts[result.verdict], values),
      sections,
      stepsTitle: hasFixes ? wording.fixesTitle : wording.nextStepsTitle,
      steps: hasFixes
        ? this.buildFixSteps(result, wording, values, texts)
        : this.buildVerdictSteps(result, wording, values),
      guidesTitle: wording.guidesTitle,
      guides: this.buildGuideLinks(result, wording),
    }
  }

  /**
   * The values of the templates: our provider names, counts, policies and selectors, never a record nor a host name.
   * @param {EmailDeliverabilityCheckResult} result - The check.
   * @param {DibodevEmailDeliverabilityCheckerWording} wording - The texts of the checker.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail, for the values never copied.
   * @returns {Record<string, string>} The values.
   */
  private static buildTemplateValues(
    result: EmailDeliverabilityCheckResult,
    wording: DibodevEmailDeliverabilityCheckerWording,
    texts: SiteCheckReportMailTexts,
  ): Record<string, string> {
    const dkimSelector: string = result.dkim.selector ?? ''
    const dkimKeyType: string = result.dkim.keyType ?? ''
    const sendingServiceNames: string[] = result.sendingServices.map((service: EmailProviderSummary): string =>
      SiteCheckReportTextUtils.cleanKnownName(service.name),
    )
    return {
      domain: result.domain,
      provider: SiteCheckReportTextUtils.cleanKnownName(result.provider?.name),
      services: sendingServiceNames.join(', '),
      spfRecord: texts.hiddenValue,
      spfAll: result.spf.allQualifier === null ? wording.spfNoAllLabel : `${result.spf.allQualifier}all`,
      spfLookups: SiteCheckReportTextUtils.filterCount(result.spf.lookupCount),
      spfCount: SiteCheckReportTextUtils.filterCount(result.spf.recordCount),
      dkimSelector: DKIM_SELECTOR_PATTERN.test(dkimSelector) ? dkimSelector : texts.hiddenValue,
      dkimKeyType: DKIM_KEY_TYPE_PATTERN.test(dkimKeyType) ? dkimKeyType : '',
      dkimBits: SiteCheckReportTextUtils.filterCount(result.dkim.keyBits),
      selectorsProbed: SiteCheckReportTextUtils.filterCount(result.dkim.selectorsProbed.length),
      dmarcRecord: texts.hiddenValue,
      dmarcPolicy: result.dmarc.policy ? `p=${result.dmarc.policy}` : '',
      dmarcCount: SiteCheckReportTextUtils.filterCount(result.dmarc.recordCount),
      mxHost: texts.hiddenValue,
    }
  }

  /**
   * The values of a finding's templates, its value hidden when it is a host name or a record of the domain owner.
   * @param {EmailDeliverabilityFinding} finding - The finding.
   * @param {Record<string, string>} values - The values of the templates.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @returns {Record<string, string>} The values, with `value`.
   */
  private static buildFindingValues(
    finding: EmailDeliverabilityFinding,
    values: Record<string, string>,
    texts: SiteCheckReportMailTexts,
  ): Record<string, string> {
    const isDomainOwnerValue: boolean = FINDINGS_QUOTING_DOMAIN_OWNER_VALUE.includes(finding.key)
    const findingValue: string = isDomainOwnerValue
      ? texts.hiddenValue
      : SiteCheckReportTextUtils.cleanKnownName(finding.value)
    return { ...values, value: findingValue }
  }

  /**
   * The SPF, DKIM and DMARC lines, then the provider line, with our status words instead of the records.
   * @param {EmailDeliverabilityCheckResult} result - The check.
   * @param {DibodevEmailDeliverabilityCheckerWording} wording - The texts of the checker.
   * @param {Record<string, string>} values - The values of the templates.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @returns {SiteCheckReportPoint[]} The lines.
   */
  private static buildRecordPoints(
    result: EmailDeliverabilityCheckResult,
    wording: DibodevEmailDeliverabilityCheckerWording,
    values: Record<string, string>,
    texts: SiteCheckReportMailTexts,
  ): SiteCheckReportPoint[] {
    const points: SiteCheckReportPoint[] = [
      this.buildRecordPoint(wording.recordLabels.spf, this.readSpfState(result, wording, values), texts),
      this.buildRecordPoint(wording.recordLabels.dkim, this.readDkimState(result, wording, values), texts),
      this.buildRecordPoint(wording.recordLabels.dmarc, this.readDmarcState(result, wording, values), texts),
    ]
    const providerSentences: string[] = this.buildProviderSentences(result, wording, values)
    if (providerSentences.length > 0) {
      points.push(SiteCheckReportTextUtils.buildFactPoint(providerSentences.join(' ')))
    }
    return points
  }

  /**
   * One record line, with our status word.
   * @param {string} label - The record name (SPF, DKIM, DMARC).
   * @param {SiteCheckEmailRecordState} recordState - Its status and sentence.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @returns {SiteCheckReportPoint} The line.
   */
  private static buildRecordPoint(
    label: string,
    recordState: SiteCheckEmailRecordState,
    texts: SiteCheckReportMailTexts,
  ): SiteCheckReportPoint {
    return {
      level: LEVEL_BY_RECORD_STATUS[recordState.status],
      label,
      statusLabel: texts.recordStatusLabels[recordState.status],
      text: recordState.text,
      advice: null,
    }
  }

  /**
   * The state of the SPF record, read like the result card does, without quoting the record.
   * @param {EmailDeliverabilityCheckResult} result - The check.
   * @param {DibodevEmailDeliverabilityCheckerWording} wording - The texts of the checker.
   * @param {Record<string, string>} values - The values of the templates.
   * @returns {SiteCheckEmailRecordState} The status and the sentence.
   */
  private static readSpfState(
    result: EmailDeliverabilityCheckResult,
    wording: DibodevEmailDeliverabilityCheckerWording,
    values: Record<string, string>,
  ): SiteCheckEmailRecordState {
    if (result.spf.recordCount === 0) {
      return { status: 'missing', text: wording.recordStatusTexts.spfMissing }
    }
    if (result.spf.recordCount > 1) {
      return { status: 'missing', text: QuizTextUtils.fillTemplate(wording.recordStatusTexts.spfMultiple, values) }
    }
    if (!result.spf.isValid || result.spf.allQualifier === '+') {
      return { status: 'missing', text: '' }
    }
    const isWeak: boolean =
      result.spf.allQualifier === '?' || result.spf.allQualifier === null || result.spf.lookupCount > SPF_MAX_LOOKUPS
    return { status: isWeak ? 'warning' : 'ok', text: '' }
  }

  /**
   * The state of the DKIM key: the selector and the key size when a key was found.
   * @param {EmailDeliverabilityCheckResult} result - The check.
   * @param {DibodevEmailDeliverabilityCheckerWording} wording - The texts of the checker.
   * @param {Record<string, string>} values - The values of the templates.
   * @returns {SiteCheckEmailRecordState} The status and the sentence.
   */
  private static readDkimState(
    result: EmailDeliverabilityCheckResult,
    wording: DibodevEmailDeliverabilityCheckerWording,
    values: Record<string, string>,
  ): SiteCheckEmailRecordState {
    if (result.dkim.selector === null) {
      return { status: 'missing', text: QuizTextUtils.fillTemplate(wording.recordStatusTexts.dkimMissing, values) }
    }
    const template: string =
      result.dkim.keyBits === null
        ? wording.recordStatusTexts.dkimFoundSizeUnknown
        : wording.recordStatusTexts.dkimFound
    let status: SiteCheckEmailRecordStatus = 'ok'
    if (!result.dkim.isUsable) {
      status = 'missing'
    } else if (result.dkim.isTestMode) {
      status = 'warning'
    }
    return { status, text: QuizTextUtils.fillTemplate(template, values) }
  }

  /**
   * The state of the DMARC record: absent, duplicated, malformed, or its policy, without quoting the record.
   * @param {EmailDeliverabilityCheckResult} result - The check.
   * @param {DibodevEmailDeliverabilityCheckerWording} wording - The texts of the checker.
   * @param {Record<string, string>} values - The values of the templates.
   * @returns {SiteCheckEmailRecordState} The status and the sentence.
   */
  private static readDmarcState(
    result: EmailDeliverabilityCheckResult,
    wording: DibodevEmailDeliverabilityCheckerWording,
    values: Record<string, string>,
  ): SiteCheckEmailRecordState {
    if (result.dmarc.recordCount === 0) {
      return { status: 'missing', text: wording.recordStatusTexts.dmarcMissing }
    }
    if (result.dmarc.recordCount > 1) {
      return { status: 'missing', text: QuizTextUtils.fillTemplate(wording.recordStatusTexts.dmarcMultiple, values) }
    }
    if (!result.dmarc.isValid) {
      return { status: 'missing', text: '' }
    }
    return { status: result.dmarc.policy === 'none' ? 'warning' : 'ok', text: values.dmarcPolicy ?? '' }
  }

  /**
   * Who receives the mail of the domain and which services send in its name, when the provider is one we know.
   * @param {EmailDeliverabilityCheckResult} result - The check.
   * @param {DibodevEmailDeliverabilityCheckerWording} wording - The texts of the checker.
   * @param {Record<string, string>} values - The values of the templates.
   * @returns {string[]} The sentences, empty when there is nothing to say without quoting a host name.
   */
  private static buildProviderSentences(
    result: EmailDeliverabilityCheckResult,
    wording: DibodevEmailDeliverabilityCheckerWording,
    values: Record<string, string>,
  ): string[] {
    const sentences: string[] = []
    if (result.provider) {
      sentences.push(QuizTextUtils.fillTemplate(wording.providerLine, values))
    } else if (result.mxExchanges.length === 0) {
      sentences.push(wording.providerNoMxLine)
    }
    if (result.sendingServices.length > 0) {
      sentences.push(QuizTextUtils.fillTemplate(wording.sendingServicesLine, values))
    }
    return sentences
  }

  /**
   * Whether the tool page has a sentence for a finding; the server type lists a few keys that are never emitted.
   * @param {EmailDeliverabilityFindingKey} findingKey - The key of the finding.
   * @param {DibodevEmailDeliverabilityCheckerWording} wording - The texts of the checker.
   * @returns {boolean} True when the page can word it.
   */
  private static hasFindingText(
    findingKey: EmailDeliverabilityFindingKey,
    wording: DibodevEmailDeliverabilityCheckerWording,
  ): findingKey is DibodevEmailDeliverabilityFindingKey {
    return Object.hasOwn(wording.findingTexts, findingKey)
  }

  /**
   * The findings as report lines, without the ones whose sentence would quote a record of the domain.
   * @param {EmailDeliverabilityCheckResult} result - The check.
   * @param {DibodevEmailDeliverabilityCheckerWording} wording - The texts of the checker.
   * @param {Record<string, string>} values - The values of the templates.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @returns {SiteCheckReportPoint[]} The lines.
   */
  private static buildFindingPoints(
    result: EmailDeliverabilityCheckResult,
    wording: DibodevEmailDeliverabilityCheckerWording,
    values: Record<string, string>,
    texts: SiteCheckReportMailTexts,
  ): SiteCheckReportPoint[] {
    const points: SiteCheckReportPoint[] = []
    for (const finding of result.findings) {
      const findingKey: EmailDeliverabilityFindingKey = finding.key
      if (!this.hasFindingText(findingKey, wording)) {
        continue
      }
      const template: string = wording.findingTexts[findingKey]
      if (SiteCheckReportTextUtils.usesPlaceholder(template, DOMAIN_OWNER_RECORD_PLACEHOLDERS)) {
        continue
      }
      points.push({
        level: LEVEL_BY_SEVERITY[finding.severity],
        label: '',
        statusLabel: wording.severityLabels[finding.severity],
        text: QuizTextUtils.fillTemplate(template, this.buildFindingValues(finding, values, texts)),
        advice: null,
      })
    }
    return points
  }

  /**
   * The fix of each finding, in the order of the corrections.
   * @param {EmailDeliverabilityCheckResult} result - The check.
   * @param {DibodevEmailDeliverabilityCheckerWording} wording - The texts of the checker.
   * @param {Record<string, string>} values - The values of the templates.
   * @param {SiteCheckReportMailTexts} texts - The texts of the e-mail.
   * @returns {string[]} The steps.
   */
  private static buildFixSteps(
    result: EmailDeliverabilityCheckResult,
    wording: DibodevEmailDeliverabilityCheckerWording,
    values: Record<string, string>,
    texts: SiteCheckReportMailTexts,
  ): string[] {
    const steps: string[] = []
    for (const finding of result.findings) {
      const findingKey: EmailDeliverabilityFindingKey = finding.key
      if (!this.hasFindingText(findingKey, wording)) {
        continue
      }
      const fix: string | undefined = wording.fixTexts[findingKey]
      if (fix !== undefined) {
        steps.push(QuizTextUtils.fillTemplate(fix, this.buildFindingValues(finding, values, texts)))
      }
    }
    return steps
  }

  /**
   * The next steps of a verdict with nothing to fix (no mail on the domain, a consumer mailbox, an unknown domain).
   * @param {EmailDeliverabilityCheckResult} result - The check.
   * @param {DibodevEmailDeliverabilityCheckerWording} wording - The texts of the checker.
   * @param {Record<string, string>} values - The values of the templates.
   * @returns {string[]} The steps.
   */
  private static buildVerdictSteps(
    result: EmailDeliverabilityCheckResult,
    wording: DibodevEmailDeliverabilityCheckerWording,
    values: Record<string, string>,
  ): string[] {
    const verdictSteps: string[] = wording.verdictSteps[result.verdict] ?? []
    return verdictSteps.map((step: string): string => QuizTextUtils.fillTemplate(step, values))
  }

  /**
   * The official guides of the mail provider and of the sending services found.
   * @param {EmailDeliverabilityCheckResult} result - The check.
   * @param {DibodevEmailDeliverabilityCheckerWording} wording - The texts of the checker.
   * @returns {SiteCheckReportLink[]} The guides.
   */
  private static buildGuideLinks(
    result: EmailDeliverabilityCheckResult,
    wording: DibodevEmailDeliverabilityCheckerWording,
  ): SiteCheckReportLink[] {
    if (EMAIL_DELIVERABILITY_VERDICTS_WITHOUT_RECORDS.includes(result.verdict)) {
      return []
    }
    const providers: EmailProviderSummary[] = []
    if (result.provider) {
      providers.push(result.provider)
    }
    providers.push(...result.sendingServices)
    return providers.flatMap((provider: EmailProviderSummary): SiteCheckReportLink[] =>
      provider.guides.map(
        (guide: EmailProviderGuide): SiteCheckReportLink => ({
          label: QuizTextUtils.fillTemplate(wording.guideLabels[guide.key], {
            provider: SiteCheckReportTextUtils.cleanKnownName(provider.name),
          }),
          url: guide.url,
        }),
      ),
    )
  }
}
