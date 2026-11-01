<template>
  <div :id="props.anchorId" class="grid scroll-mt-24 items-start gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
    <form
      class="grid content-start gap-6 rounded-2xl border border-gray-300 bg-white p-6 sm:p-8"
      novalidate
      @submit.prevent="checkDomain"
    >
      <div class="grid gap-2">
        <DibodevInput
          id="email-deliverability-domain"
          type="text"
          autocomplete="off"
          :label="props.wording.domainLabel"
          :placeholder="props.wording.domainPlaceholder"
          :value="domainInput"
          @update:value="onDomainInput"
        />
        <p class="text-muted text-sm leading-6">{{ props.wording.domainHint }}</p>
      </div>
      <button
        type="submit"
        :disabled="!canCheck"
        :aria-busy="isChecking"
        class="bg-primary hover:bg-primary-dark focus-visible:ring-primary inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3 text-[15px] leading-6 font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <DibodevIcon name="Search" mode="stroke" :width="18" :height="18" aria-hidden="true" />
        {{ isChecking ? props.wording.checking : props.wording.submit }}
      </button>
    </form>

    <div
      class="bg-primary-dark relative grid content-start gap-6 overflow-hidden rounded-2xl p-6 text-white sm:p-8 lg:sticky lg:top-28"
    >
      <div
        class="pointer-events-none absolute -top-16 -right-12 h-56 w-56 rounded-full bg-white/10 blur-2xl"
        aria-hidden="true"
      />
      <div class="relative grid gap-5" aria-live="polite" :aria-busy="isChecking">
        <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.resultLabel }}</p>
        <div class="grid gap-2">
          <h2 class="text-2xl leading-tight font-medium tracking-[-0.01em] sm:text-[28px]">{{ cardTitle }}</h2>
          <p class="text-[15px] leading-6 text-white/85">{{ cardText }}</p>
        </div>

        <div v-if="recordLines.length > 0" class="grid gap-3 rounded-xl bg-white/10 p-4">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.recordsTitle }}</p>
          <ul class="grid gap-2.5">
            <li v-for="line in recordLines" :key="line.kind" class="flex items-start gap-2.5">
              <DibodevIcon
                :name="EMAIL_RECORD_STATUS_ICONS[line.status]"
                mode="stroke"
                :width="18"
                :height="18"
                class="mt-0.5 shrink-0"
                :class="RECORD_STATUS_CLASSES[line.status]"
                aria-hidden="true"
              />
              <span class="grid min-w-0 gap-0.5 text-[15px] leading-6">
                <span class="font-medium">{{ line.label }}</span>
                <span
                  class="text-white/85"
                  :class="line.isVerbatimRecord ? 'font-mono text-[13px] leading-5 break-all' : 'text-sm leading-5'"
                >
                  {{ line.text }}
                </span>
              </span>
            </li>
          </ul>
          <p v-if="providerText" class="text-sm leading-5 text-white/85">{{ providerText }}</p>
        </div>

        <div v-if="findingLines.length > 0" class="grid gap-2.5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">
            {{ props.wording.findingsTitle }}
          </p>
          <ul class="grid gap-2.5">
            <li v-for="line in findingLines" :key="line.finding.key" class="flex items-start gap-2.5">
              <DibodevIcon
                :name="EMAIL_FINDING_SEVERITY_ICONS[line.finding.severity]"
                mode="stroke"
                :width="18"
                :height="18"
                class="mt-0.5 shrink-0"
                :class="FINDING_SEVERITY_CLASSES[line.finding.severity]"
                :aria-label="props.wording.severityLabels[line.finding.severity]"
              />
              <span class="text-[15px] leading-6">{{ line.text }}</span>
            </li>
          </ul>
        </div>

        <div v-if="stepTexts.length > 0" class="grid gap-2.5 border-t border-white/20 pt-5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ stepsTitle }}</p>
          <ol class="grid gap-2">
            <li
              v-for="(step, stepIndex) in stepTexts"
              :key="step"
              class="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-2 text-[15px] leading-6"
            >
              <span class="font-medium text-white/70">{{ stepIndex + 1 }}.</span>
              <span>{{ step }}</span>
            </li>
          </ol>
        </div>

        <div v-if="guideLinks.length > 0" class="grid gap-2.5 border-t border-white/20 pt-5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.guidesTitle }}</p>
          <ul class="grid gap-2">
            <li v-for="guide in guideLinks" :key="`${guide.provider}-${guide.key}`">
              <a
                :href="guide.url"
                target="_blank"
                rel="noopener"
                class="flex items-start gap-2.5 rounded-lg bg-white/10 px-3.5 py-2.5 text-[15px] leading-6 transition-colors hover:bg-white/20"
              >
                <DibodevIcon
                  name="ExternalLink"
                  mode="stroke"
                  :width="18"
                  :height="18"
                  class="mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span>{{ guide.label }}</span>
              </a>
            </li>
          </ul>
        </div>

        <p v-if="result" class="text-sm leading-6 text-white/70">{{ props.wording.disclaimer }}</p>
      </div>

      <div class="relative grid gap-3">
        <p class="text-[15px] leading-6 text-white/85">
          {{ result ? props.wording.ctaIntro : props.wording.idleCtaIntro }}
        </p>
        <NuxtLink
          :to="contactRoute"
          class="text-primary-dark flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-[15px] leading-6 font-medium transition-colors hover:bg-gray-800"
          @click="trackContactClick"
        >
          {{ result ? props.wording.ctaLabels[result.verdict] : props.wording.idleCtaLabel }}
          <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type {
  DibodevEmailDeliverabilityCheckResult,
  DibodevEmailDeliverabilityFinding,
  DibodevEmailDeliverabilityFindingKey,
  DibodevEmailDeliverabilityFindingSeverity,
  DibodevEmailProviderGuide,
  DibodevEmailProviderSummary,
  DibodevEmailRecordStatus,
} from '~/core/types/DibodevEmailDeliverabilityCheck'
import type { DibodevEmailDeliverabilityCheckerWording } from '~/core/types/DibodevEmailDeliverabilityCheckPage'
import type {
  DibodevEmailDeliverabilityCheckerProps,
  DibodevEmailFindingLine,
  DibodevEmailProviderGuideLink,
  DibodevEmailRecordLine,
} from '~/core/types/DibodevEmailDeliverabilityChecker'
import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'
import type { UseTrackingReturn } from '~/composables/useTracking'
import { computed, ref } from 'vue'
import DibodevInput from '~/components/core/DibodevInput.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import {
  EMAIL_DELIVERABILITY_CHECK_API_PATH,
  EMAIL_DELIVERABILITY_CONTACT_TOPIC,
  EMAIL_DELIVERABILITY_VERDICTS_WITHOUT_FIXES,
  EMAIL_DELIVERABILITY_VERDICTS_WITHOUT_RECORDS,
  EMAIL_FINDING_SEVERITY_ICONS,
  EMAIL_RECORD_STATUS_ICONS,
} from '~/core/constants/emailDeliverabilityCheck/pageShared'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'
import { SiteCheckContactUtils } from '~/core/utils/SiteCheckContactUtils'

/** The domain never leaves the page through analytics: the PostHog events carry the verdict, the provider and the finding keys. */
const props: DibodevEmailDeliverabilityCheckerProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevEmailDeliverabilityCheckerWording>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const { track }: UseTrackingReturn = useTracking()

/** RFC 7208 §4.6.4: the limit of DNS lookups an SPF evaluation may need. */
const SPF_MAX_LOOKUPS: number = 10
const RECORD_STATUS_CLASSES: Record<DibodevEmailRecordStatus, string> = {
  ok: 'text-emerald-300',
  warning: 'text-amber-300',
  missing: 'text-rose-300',
}
const FINDING_SEVERITY_CLASSES: Record<DibodevEmailDeliverabilityFindingSeverity, string> = {
  blocking: 'text-rose-300',
  warning: 'text-amber-300',
  info: 'text-white/85',
}
let hasTrackedStart: boolean = false

/* REFS */
const domainInput: Ref<string> = ref('')
const isChecking: Ref<boolean> = ref(false)
const result: Ref<DibodevEmailDeliverabilityCheckResult | null> = ref(null)
const errorKind: Ref<DibodevSiteCheckErrorKind | null> = ref(null)
const checkedDomain: Ref<string> = ref('')

/* COMPUTED */
const canCheck: ComputedRef<boolean> = computed((): boolean => !isChecking.value && domainInput.value.trim() !== '')

const spfAllLabel: ComputedRef<string> = computed((): string => {
  const qualifier: string | null = result.value?.spf.allQualifier ?? null

  return qualifier === null ? props.wording.spfNoAllLabel : `${qualifier}all`
})

const templateValues: ComputedRef<Record<string, string>> = computed(
  (): Record<string, string> => ({
    domain: result.value?.domain ?? checkedDomain.value,
    provider: result.value?.provider?.name ?? '',
    services: (result.value?.sendingServices ?? [])
      .map((service: DibodevEmailProviderSummary): string => service.name)
      .join(', '),
    spfRecord: result.value?.spf.record ?? '',
    spfAll: spfAllLabel.value,
    spfLookups: String(result.value?.spf.lookupCount ?? 0),
    spfCount: String(result.value?.spf.recordCount ?? 0),
    dkimSelector: result.value?.dkim.selector ?? '',
    dkimKeyType: result.value?.dkim.keyType ?? '',
    dkimBits: result.value?.dkim.keyBits === null || result.value === null ? '' : String(result.value.dkim.keyBits),
    selectorsProbed: String(result.value?.dkim.selectorsProbed.length ?? 0),
    dmarcRecord: result.value?.dmarc.record ?? '',
    dmarcPolicy: result.value?.dmarc.policy ? `p=${result.value.dmarc.policy}` : '',
    dmarcCount: String(result.value?.dmarc.recordCount ?? 0),
    mxHost: result.value?.mxExchanges[0] ?? '',
  }),
)

const cardTitle: ComputedRef<string> = computed((): string => {
  if (isChecking.value) {
    return props.wording.loadingTitle
  }
  if (errorKind.value) {
    return props.wording.errorTitles[errorKind.value]
  }
  if (result.value) {
    return fillResultTemplate(props.wording.verdictTitles[result.value.verdict])
  }
  return props.wording.idleTitle
})

const cardText: ComputedRef<string> = computed((): string => {
  if (isChecking.value) {
    return props.wording.loadingText
  }
  if (errorKind.value) {
    return fillResultTemplate(props.wording.errorTexts[errorKind.value])
  }
  if (result.value) {
    return fillResultTemplate(props.wording.verdictTexts[result.value.verdict])
  }
  return props.wording.idleText
})

const recordLines: ComputedRef<DibodevEmailRecordLine[]> = computed((): DibodevEmailRecordLine[] => {
  if (!result.value || EMAIL_DELIVERABILITY_VERDICTS_WITHOUT_RECORDS.includes(result.value.verdict)) {
    return []
  }
  return [buildSpfLine(result.value), buildDkimLine(result.value), buildDmarcLine(result.value)]
})

const providerText: ComputedRef<string> = computed((): string => {
  if (!result.value || EMAIL_DELIVERABILITY_VERDICTS_WITHOUT_RECORDS.includes(result.value.verdict)) {
    return ''
  }
  const lines: string[] = []

  if (result.value.provider) {
    lines.push(fillResultTemplate(props.wording.providerLine))
  } else if (result.value.mxExchanges.length > 0) {
    lines.push(fillResultTemplate(props.wording.providerUnknownLine))
  } else {
    lines.push(props.wording.providerNoMxLine)
  }
  if (result.value.sendingServices.length > 0) {
    lines.push(fillResultTemplate(props.wording.sendingServicesLine))
  }
  return lines.join(' ')
})

const findingLines: ComputedRef<DibodevEmailFindingLine[]> = computed((): DibodevEmailFindingLine[] =>
  (result.value?.findings ?? []).map(
    (finding: DibodevEmailDeliverabilityFinding): DibodevEmailFindingLine => ({
      finding,
      text: fillFindingTemplate(props.wording.findingTexts[finding.key], finding),
    }),
  ),
)

const stepTexts: ComputedRef<string[]> = computed((): string[] => {
  if (!result.value) {
    return []
  }
  if (EMAIL_DELIVERABILITY_VERDICTS_WITHOUT_FIXES.includes(result.value.verdict)) {
    return (props.wording.verdictSteps[result.value.verdict] ?? []).map((step: string): string =>
      fillResultTemplate(step),
    )
  }
  const steps: string[] = []

  for (const finding of result.value.findings) {
    const fix: string | undefined = props.wording.fixTexts[finding.key]

    if (fix !== undefined) {
      steps.push(fillFindingTemplate(fix, finding))
    }
  }
  return steps
})

const stepsTitle: ComputedRef<string> = computed((): string =>
  result.value && EMAIL_DELIVERABILITY_VERDICTS_WITHOUT_FIXES.includes(result.value.verdict)
    ? props.wording.nextStepsTitle
    : props.wording.fixesTitle,
)

const guideLinks: ComputedRef<DibodevEmailProviderGuideLink[]> = computed((): DibodevEmailProviderGuideLink[] => {
  if (!result.value || EMAIL_DELIVERABILITY_VERDICTS_WITHOUT_RECORDS.includes(result.value.verdict)) {
    return []
  }
  const providers: DibodevEmailProviderSummary[] = []

  if (result.value.provider) {
    providers.push(result.value.provider)
  }
  providers.push(...result.value.sendingServices)
  return providers.flatMap((provider: DibodevEmailProviderSummary): DibodevEmailProviderGuideLink[] =>
    provider.guides.map(
      (guide: DibodevEmailProviderGuide): DibodevEmailProviderGuideLink => ({
        provider: provider.key,
        key: guide.key,
        label: QuizTextUtils.fillTemplate(props.wording.guideLabels[guide.key], { provider: provider.name }),
        url: guide.url,
      }),
    ),
  )
})

const contactRoute: ComputedRef<string> = computed((): string =>
  localePath({
    path: '/contact',
    query: SiteCheckContactUtils.buildContactQuery(
      EMAIL_DELIVERABILITY_CONTACT_TOPIC,
      result.value?.domain ?? null,
      result.value?.verdict ?? null,
    ),
  }),
)

/* METHODS */
/**
 * Fills a result text with the values of the current check (domain, provider, records, selectors).
 * @param {string} template - A text with `{placeholders}`.
 * @returns {string} The text with the values.
 */
function fillResultTemplate(template: string): string {
  return QuizTextUtils.fillTemplate(template, templateValues.value)
}

/**
 * Fills a finding text with the values of the check and the `{value}` of the finding itself.
 * @param {string} template - A text with `{placeholders}`.
 * @param {DibodevEmailDeliverabilityFinding} finding - The finding whose value fills `{value}`.
 * @returns {string} The text with the values.
 */
function fillFindingTemplate(template: string, finding: DibodevEmailDeliverabilityFinding): string {
  return QuizTextUtils.fillTemplate(template, { ...templateValues.value, value: finding.value ?? '' })
}

/**
 * The SPF line of the records block: a cross when absent, duplicated, broken or `+all`, a warning when weak.
 * @param {DibodevEmailDeliverabilityCheckResult} checked - The result.
 * @returns {DibodevEmailRecordLine} The line.
 */
function buildSpfLine(checked: DibodevEmailDeliverabilityCheckResult): DibodevEmailRecordLine {
  const label: string = props.wording.recordLabels.spf

  if (checked.spf.recordCount === 0) {
    return {
      kind: 'spf',
      status: 'missing',
      label,
      text: props.wording.recordStatusTexts.spfMissing,
      isVerbatimRecord: false,
    }
  }
  if (checked.spf.recordCount > 1) {
    return {
      kind: 'spf',
      status: 'missing',
      label,
      text: fillResultTemplate(props.wording.recordStatusTexts.spfMultiple),
      isVerbatimRecord: false,
    }
  }
  const isBroken: boolean = !checked.spf.isValid || checked.spf.allQualifier === '+'
  const isWeak: boolean =
    checked.spf.allQualifier === '?' || checked.spf.allQualifier === null || checked.spf.lookupCount > SPF_MAX_LOOKUPS
  let status: DibodevEmailRecordStatus = 'ok'

  if (isBroken) {
    status = 'missing'
  } else if (isWeak) {
    status = 'warning'
  }
  return {
    kind: 'spf',
    status,
    label,
    text: fillResultTemplate(props.wording.recordStatusTexts.spfFound),
    isVerbatimRecord: true,
  }
}

/**
 * The DKIM line of the records block: the selector and the key size when a key was found.
 * @param {DibodevEmailDeliverabilityCheckResult} checked - The result.
 * @returns {DibodevEmailRecordLine} The line.
 */
function buildDkimLine(checked: DibodevEmailDeliverabilityCheckResult): DibodevEmailRecordLine {
  const label: string = props.wording.recordLabels.dkim

  if (checked.dkim.selector === null) {
    return {
      kind: 'dkim',
      status: 'missing',
      label,
      text: fillResultTemplate(props.wording.recordStatusTexts.dkimMissing),
      isVerbatimRecord: false,
    }
  }
  const text: string =
    checked.dkim.keyBits === null
      ? props.wording.recordStatusTexts.dkimFoundSizeUnknown
      : props.wording.recordStatusTexts.dkimFound
  let status: DibodevEmailRecordStatus = 'ok'

  if (!checked.dkim.isUsable) {
    status = 'missing'
  } else if (checked.dkim.isTestMode) {
    status = 'warning'
  }
  return { kind: 'dkim', status, label, text: fillResultTemplate(text), isVerbatimRecord: false }
}

/**
 * The DMARC line of the records block: a cross when absent, duplicated or malformed, a warning for `p=none`.
 * @param {DibodevEmailDeliverabilityCheckResult} checked - The result.
 * @returns {DibodevEmailRecordLine} The line.
 */
function buildDmarcLine(checked: DibodevEmailDeliverabilityCheckResult): DibodevEmailRecordLine {
  const label: string = props.wording.recordLabels.dmarc

  if (checked.dmarc.recordCount === 0) {
    return {
      kind: 'dmarc',
      status: 'missing',
      label,
      text: props.wording.recordStatusTexts.dmarcMissing,
      isVerbatimRecord: false,
    }
  }
  if (checked.dmarc.recordCount > 1) {
    return {
      kind: 'dmarc',
      status: 'missing',
      label,
      text: fillResultTemplate(props.wording.recordStatusTexts.dmarcMultiple),
      isVerbatimRecord: false,
    }
  }
  if (!checked.dmarc.isValid) {
    return {
      kind: 'dmarc',
      status: 'missing',
      label,
      text: fillResultTemplate(props.wording.recordStatusTexts.dmarcMalformed),
      isVerbatimRecord: true,
    }
  }
  return {
    kind: 'dmarc',
    status: checked.dmarc.policy === 'none' ? 'warning' : 'ok',
    label,
    text: fillResultTemplate(props.wording.recordStatusTexts.dmarcFound),
    isVerbatimRecord: true,
  }
}

/**
 * Keeps what the visitor types and tracks the first interaction, once per page view.
 * @param {string | number} value - The field value.
 * @returns {void}
 */
function onDomainInput(value: string | number): void {
  domainInput.value = String(value)
  if (hasTrackedStart) {
    return
  }
  hasTrackedStart = true
  track(TRACKING_EVENTS.emailDeliverabilityCheckStarted, { location: props.trackingLocation })
}

/**
 * Reads the HTTP status of a failed `$fetch`, when it has one.
 * @param {unknown} error - The error thrown.
 * @returns {number | null} The status, or null for a network failure.
 */
function readErrorStatus(error: unknown): number | null {
  if (typeof error !== 'object' || error === null) {
    return null
  }
  const failure: { statusCode?: unknown; response?: { status?: unknown } } = error

  if (typeof failure.statusCode === 'number') {
    return failure.statusCode
  }
  if (typeof failure.response?.status === 'number') {
    return failure.response.status
  }
  return null
}

/**
 * Maps the HTTP status of a failed check to the message shown.
 * @param {number | null} status - The HTTP status of the failure.
 * @returns {DibodevSiteCheckErrorKind} The kind of error.
 */
function errorKindForStatus(status: number | null): DibodevSiteCheckErrorKind {
  if (status === 400) {
    return 'invalid'
  }
  if (status === 429) {
    return 'rateLimited'
  }
  if (status === 502) {
    return 'unreachable'
  }
  return 'failed'
}

/**
 * Asks the API to read the DNS of the domain and shows the verdict, or the reason it could not be read.
 * @returns {Promise<void>}
 */
async function checkDomain(): Promise<void> {
  if (!canCheck.value) {
    return
  }
  const domain: string = domainInput.value.trim()
  const atIndex: number = domain.lastIndexOf('@')

  checkedDomain.value = atIndex === -1 ? domain : domain.slice(atIndex + 1)
  isChecking.value = true
  errorKind.value = null
  result.value = null
  try {
    result.value = await $fetch<DibodevEmailDeliverabilityCheckResult>(EMAIL_DELIVERABILITY_CHECK_API_PATH, {
      query: { domain: checkedDomain.value },
      retry: 0,
    })
    track(TRACKING_EVENTS.emailDeliverabilityChecked, {
      location: props.trackingLocation,
      outcome: 'result',
      verdict: result.value.verdict,
      provider: result.value.provider?.key ?? null,
      findings: result.value.findings.map(
        (finding: DibodevEmailDeliverabilityFinding): DibodevEmailDeliverabilityFindingKey => finding.key,
      ),
      errorKind: null,
    })
  } catch (error: unknown) {
    const kind: DibodevSiteCheckErrorKind = errorKindForStatus(readErrorStatus(error))

    errorKind.value = kind
    track(TRACKING_EVENTS.emailDeliverabilityChecked, {
      location: props.trackingLocation,
      outcome: 'error',
      verdict: null,
      provider: null,
      findings: [],
      errorKind: kind,
    })
  } finally {
    isChecking.value = false
  }
}

/**
 * Tracks the click on the contact button of the card, before or after a result.
 * @returns {void}
 */
function trackContactClick(): void {
  track(TRACKING_EVENTS.ctaProjectDiscussion, {
    location: result.value ? props.trackingLocation : `${props.trackingLocation}_idle`,
  })
}
</script>
