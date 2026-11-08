<template>
  <div :id="props.anchorId" class="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
    <form
      class="grid content-start gap-6 rounded-2xl border border-gray-300 bg-white p-6 sm:p-8"
      novalidate
      @submit.prevent="checkSite"
    >
      <div class="grid gap-2">
        <DibodevInput
          id="gdpr-cookie-site"
          type="url"
          autocomplete="url"
          :label="props.wording.siteLabel"
          :placeholder="props.wording.sitePlaceholder"
          :value="siteAddress"
          @update:value="onSiteAddressInput"
        />
        <p class="text-muted text-sm leading-6">{{ props.wording.siteHint }}</p>
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

    <div class="bg-primary-dark relative grid content-start gap-6 overflow-hidden rounded-2xl p-6 text-white sm:p-8">
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

        <div v-for="group in rowGroups" :key="group.key" class="grid gap-3 border-t border-white/20 pt-5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ group.title }}</p>
          <ol class="grid gap-2.5">
            <li
              v-for="row in group.rows"
              :key="row.key"
              class="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-2.5 gap-y-1 rounded-xl bg-white/10 p-4"
            >
              <DibodevIcon
                :name="WEBSITE_HEALTH_VERDICT_STYLES[row.level].icon"
                mode="stroke"
                :width="20"
                :height="20"
                class="mt-0.5"
                aria-hidden="true"
              />
              <p class="flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] leading-6">
                <span class="font-medium">{{ row.label }}</span>
                <span
                  class="rounded-full px-2 py-0.5 text-xs font-medium"
                  :class="WEBSITE_HEALTH_VERDICT_STYLES[row.level].badgeClass"
                >
                  {{ row.badgeLabel }}
                </span>
              </p>
              <p class="col-start-2 text-[15px] leading-6 text-white/85">{{ row.seenText }}</p>
              <p class="col-start-2 text-[15px] leading-6 text-white/85">
                <span class="font-medium text-white">{{ props.wording.meaningLabel }}</span> {{ row.meaningText }}
              </p>
              <p v-if="row.adviceText" class="col-start-2 text-[15px] leading-6">
                <span class="font-medium">{{ props.wording.adviceLabel }}</span> {{ row.adviceText }}
              </p>
            </li>
          </ol>
        </div>

        <p v-if="result" class="text-sm leading-6 text-white/70">{{ props.wording.disclaimer }}</p>
      </div>

      <DibodevSiteCheckReportForm
        v-if="result"
        tool="gdprCookie"
        :site="result.host"
        :verdict="result.verdict"
        :trackingLocation="props.trackingLocation"
        class="relative"
      />

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
  DibodevGdprConsentToolFinding,
  DibodevGdprConsentToolKey,
  DibodevGdprCookieCheckResult,
  DibodevGdprLinkFinding,
  DibodevGdprLinkKey,
  DibodevGdprTrackerFinding,
  DibodevGdprTrackerKey,
} from '~/core/types/DibodevGdprCookieCheck'
import type {
  DibodevGdprCookieCheckerProps,
  DibodevGdprCookieCheckRow,
  DibodevGdprCookieCheckRowGroup,
} from '~/core/types/DibodevGdprCookieChecker'
import type { DibodevGdprCookieCheckerWording } from '~/core/types/DibodevGdprCookieCheckPage'
import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'
import { computed, ref } from 'vue'
import DibodevInput from '~/components/core/DibodevInput.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevSiteCheckReportForm from '~/forms/DibodevSiteCheckReportForm.vue'
import { useTracking } from '~/composables/useTracking'
import {
  GDPR_CONSENT_TOOL_LABELS,
  GDPR_COOKIE_CHECK_API_PATH,
  GDPR_COOKIE_CHECK_CONTACT_TOPIC,
} from '~/core/constants/gdprCookieCheck/pageShared'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { WEBSITE_HEALTH_VERDICT_STYLES } from '~/core/constants/websiteHealthCheck/pageShared'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'
import { SiteCheckContactUtils } from '~/core/utils/SiteCheckContactUtils'
import { SiteCheckErrorUtils } from '~/core/utils/SiteCheckErrorUtils'

/** The site address never leaves the page: the PostHog events carry the verdict and the trackers, not the host. */
const props: DibodevGdprCookieCheckerProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevGdprCookieCheckerWording>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const localePath = useLocalePath()
const { track } = useTracking()

let hasTrackedStart: boolean = false

const siteAddress: Ref<string> = ref('')
const isChecking: Ref<boolean> = ref(false)
const result: Ref<DibodevGdprCookieCheckResult | null> = ref(null)
const errorKind: Ref<DibodevSiteCheckErrorKind | null> = ref(null)
const checkedHost: Ref<string> = ref('')

const canCheck: ComputedRef<boolean> = computed((): boolean => !isChecking.value && siteAddress.value.trim() !== '')

const cardTitle: ComputedRef<string> = computed((): string => {
  if (isChecking.value) {
    return props.wording.loadingTitle
  }
  if (errorKind.value) {
    return props.wording.errorTitles[errorKind.value]
  }
  if (result.value) {
    return fillHostTemplate(props.wording.verdictTitles[result.value.verdict])
  }
  return props.wording.idleTitle
})

const cardText: ComputedRef<string> = computed((): string => {
  if (isChecking.value) {
    return props.wording.loadingText
  }
  if (errorKind.value) {
    return fillHostTemplate(props.wording.errorTexts[errorKind.value])
  }
  if (result.value) {
    return props.wording.verdictTexts[result.value.verdict]
  }
  return props.wording.idleText
})

const rowGroups: ComputedRef<DibodevGdprCookieCheckRowGroup[]> = computed((): DibodevGdprCookieCheckRowGroup[] => {
  if (!result.value || hasNothingToShow(result.value)) {
    return []
  }
  return [
    { key: 'trackers', title: props.wording.trackersTitle, rows: trackerRowsOf(result.value.trackers) },
    {
      key: 'consentTool',
      title: props.wording.consentToolTitle,
      rows: [consentToolRowOf(result.value.consentTool)],
    },
    { key: 'links', title: props.wording.linksTitle, rows: result.value.links.map(linkRowOf) },
  ]
})

const contactRoute: ComputedRef<string> = computed((): string =>
  localePath({
    path: '/contact',
    query: SiteCheckContactUtils.buildContactQuery(
      GDPR_COOKIE_CHECK_CONTACT_TOPIC,
      result.value?.host ?? null,
      result.value?.verdict ?? null,
    ),
  }),
)

/**
 * Fills a card text with the host checked.
 * @param {string} template - A text with `{host}`.
 * @returns {string} The text with the host.
 */
function fillHostTemplate(template: string): string {
  return QuizTextUtils.fillTemplate(template, { host: checkedHost.value })
}

/**
 * Whether a result has no line worth showing: an unreadable page without any tracker or consent tool found.
 * @param {DibodevGdprCookieCheckResult} checkResult - The result.
 * @returns {boolean} True when the card shows the verdict alone.
 */
function hasNothingToShow(checkResult: DibodevGdprCookieCheckResult): boolean {
  return !checkResult.isPageReadable && checkResult.trackers.length === 0 && checkResult.consentTool.status !== 'found'
}

/**
 * The tracker lines of the card, or a single line saying that no known tracker was seen.
 * @param {DibodevGdprTrackerFinding[]} trackers - The trackers found.
 * @returns {DibodevGdprCookieCheckRow[]} The lines.
 */
function trackerRowsOf(trackers: DibodevGdprTrackerFinding[]): DibodevGdprCookieCheckRow[] {
  if (trackers.length === 0) {
    return [
      {
        key: 'noTracker',
        level: 'ok',
        label: props.wording.noTracker.label,
        badgeLabel: props.wording.noTracker.badge,
        seenText: props.wording.noTracker.seenText,
        meaningText: props.wording.noTracker.meaningText,
        adviceText: '',
      },
    ]
  }
  return trackers.map(trackerRowOf)
}

/**
 * One tracker line: how it is loaded, what the tracker is, and what to do when it does not wait for consent.
 * @param {DibodevGdprTrackerFinding} tracker - The tracker found.
 * @returns {DibodevGdprCookieCheckRow} The line.
 */
function trackerRowOf(tracker: DibodevGdprTrackerFinding): DibodevGdprCookieCheckRow {
  return {
    key: tracker.key,
    level: tracker.level,
    label: props.wording.trackerLabels[tracker.key],
    badgeLabel: props.wording.loadingLabels[tracker.loading],
    seenText: props.wording.loadingSeenTexts[tracker.loading],
    meaningText: props.wording.trackerMeaningTexts[tracker.key],
    adviceText:
      tracker.level === 'ok'
        ? (props.wording.loadingAdviceTexts[tracker.loading] ?? '')
        : props.wording.trackerAdviceTexts[tracker.key],
  }
}

/**
 * The consent tool line, with the names of the tools found and their automatic blocking when set.
 * @param {DibodevGdprConsentToolFinding} consentTool - The consent tool finding.
 * @returns {DibodevGdprCookieCheckRow} The line.
 */
function consentToolRowOf(consentTool: DibodevGdprConsentToolFinding): DibodevGdprCookieCheckRow {
  const toolNames: string = consentTool.tools
    .map((tool: DibodevGdprConsentToolKey): string => GDPR_CONSENT_TOOL_LABELS[tool])
    .join(', ')
  const seenText: string = QuizTextUtils.fillTemplate(props.wording.consentToolSeenTexts[consentTool.status], {
    tools: toolNames,
  })
  const hasAutoBlocking: boolean = consentTool.status === 'found' && consentTool.hasAutoBlocking

  return {
    key: 'consentTool',
    level: consentTool.level,
    label: props.wording.consentToolLabel,
    badgeLabel: props.wording.consentToolStatusLabels[consentTool.status],
    seenText: hasAutoBlocking ? `${seenText} ${props.wording.consentToolAutoBlockingText}` : seenText,
    meaningText: props.wording.consentToolMeaningTexts[consentTool.status],
    adviceText: props.wording.consentToolAdviceTexts[consentTool.status],
  }
}

/**
 * One footer link line: found, missing, provided by the consent tool, not needed or unreadable.
 * @param {DibodevGdprLinkFinding} link - The link finding.
 * @returns {DibodevGdprCookieCheckRow} The line.
 */
function linkRowOf(link: DibodevGdprLinkFinding): DibodevGdprCookieCheckRow {
  return {
    key: link.key,
    level: link.level,
    label: props.wording.linkLabels[link.key],
    badgeLabel: props.wording.linkStatusLabels[link.status],
    seenText: props.wording.linkDetailTexts[link.detailKey],
    meaningText: props.wording.linkMeaningTexts[link.key],
    adviceText: props.wording.linkAdviceTexts[link.detailKey] ?? '',
  }
}

/**
 * The trackers that reach the visitor without consent (with the page or on a click), for the events.
 * @param {DibodevGdprCookieCheckResult} checkResult - The result.
 * @returns {DibodevGdprTrackerKey[]} Their keys.
 */
function trackersLoadedWithoutConsent(checkResult: DibodevGdprCookieCheckResult): DibodevGdprTrackerKey[] {
  return checkResult.trackers
    .filter(
      (tracker: DibodevGdprTrackerFinding): boolean =>
        tracker.loading === 'loadedDirectly' || tracker.loading === 'loadedOnClick',
    )
    .map((tracker: DibodevGdprTrackerFinding): DibodevGdprTrackerKey => tracker.key)
}

/**
 * Keeps what the visitor types and tracks the first interaction, once per page view.
 * @param {string | number} value - The field value.
 * @returns {void}
 */
function onSiteAddressInput(value: string | number): void {
  siteAddress.value = String(value)
  if (hasTrackedStart) {
    return
  }
  hasTrackedStart = true
  track(TRACKING_EVENTS.gdprCookieCheckStarted, { location: props.trackingLocation })
}

/**
 * Asks the API to read the home page and shows the trackers, the consent tool and the links, or why the site could not be read.
 * @returns {Promise<void>}
 */
async function checkSite(): Promise<void> {
  if (!canCheck.value) {
    return
  }
  isChecking.value = true
  errorKind.value = null
  result.value = null
  checkedHost.value = siteAddress.value.trim()

  try {
    const checkResult: DibodevGdprCookieCheckResult = await $fetch<DibodevGdprCookieCheckResult>(
      GDPR_COOKIE_CHECK_API_PATH,
      { query: { site: checkedHost.value } },
    )
    const loadedWithoutConsent: DibodevGdprTrackerKey[] = trackersLoadedWithoutConsent(checkResult)

    result.value = checkResult
    checkedHost.value = checkResult.host
    track(TRACKING_EVENTS.gdprCookieChecked, {
      location: props.trackingLocation,
      outcome: 'result',
      verdict: checkResult.verdict,
      trackerCount: checkResult.trackers.length,
      loadedWithoutConsentCount: loadedWithoutConsent.length,
      loadedWithoutConsent,
      hasConsentTool: checkResult.consentTool.status === 'found',
      consentTool: checkResult.consentTool.tools[0] ?? null,
      missingLinks: checkResult.links
        .filter((link: DibodevGdprLinkFinding): boolean => link.status === 'missing')
        .map((link: DibodevGdprLinkFinding): DibodevGdprLinkKey => link.key),
      errorKind: null,
    })
  } catch (error: unknown) {
    errorKind.value = SiteCheckErrorUtils.kindOf(error)
    track(TRACKING_EVENTS.gdprCookieChecked, {
      location: props.trackingLocation,
      outcome: 'error',
      verdict: null,
      trackerCount: null,
      loadedWithoutConsentCount: null,
      loadedWithoutConsent: [],
      hasConsentTool: null,
      consentTool: null,
      missingLinks: [],
      errorKind: errorKind.value,
    })
  } finally {
    isChecking.value = false
  }
}

/**
 * Tracks the contact button of the card.
 * @returns {void}
 */
function trackContactClick(): void {
  track(TRACKING_EVENTS.ctaProjectDiscussion, { location: props.trackingLocation })
}
</script>
