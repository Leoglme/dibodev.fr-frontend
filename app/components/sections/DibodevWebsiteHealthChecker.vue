<template>
  <div :id="props.anchorId" class="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
    <form
      class="grid content-start gap-6 rounded-2xl border border-gray-300 bg-white p-6 sm:p-8"
      novalidate
      @submit.prevent="checkSite"
    >
      <div class="grid gap-2">
        <DibodevInput
          id="website-health-site"
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

        <div v-if="checkRows.length > 0" class="grid gap-3 border-t border-white/20 pt-5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.checksTitle }}</p>
          <ol class="grid gap-2.5">
            <li
              v-for="row in checkRows"
              :key="row.check.key"
              class="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-2.5 gap-y-1 rounded-xl bg-white/10 p-4"
            >
              <DibodevIcon
                :name="WEBSITE_HEALTH_VERDICT_STYLES[row.check.verdict].icon"
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
                  :class="WEBSITE_HEALTH_VERDICT_STYLES[row.check.verdict].badgeClass"
                >
                  {{ row.verdictLabel }}
                </span>
              </p>
              <p class="col-start-2 text-[15px] leading-6 text-white/85">{{ row.detailText }}</p>
              <p v-if="row.adviceText" class="col-start-2 text-[15px] leading-6">
                <span class="font-medium">{{ props.wording.adviceLabel }}</span> {{ row.adviceText }}
              </p>
              <NuxtLink
                v-if="row.detailedTool"
                :to="row.detailedTool.to"
                class="col-start-2 inline-flex w-fit items-center gap-1.5 text-sm leading-6 text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
                @click="trackDetailedToolClick(row.detailedTool.key)"
              >
                {{ row.detailedTool.label }}
                <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
              </NuxtLink>
            </li>
          </ol>
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
          {{ result ? props.wording.ctaLabels[result.overall] : props.wording.idleCtaLabel }}
          <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
        </NuxtLink>
        <NuxtLink
          :to="gdprCookieCheckRoute"
          class="text-center text-sm leading-6 text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
          @click="trackGdprCookieCheckClick"
        >
          {{ props.wording.gdprCookieCheckLinkLabel }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'
import type {
  DibodevWebsiteHealthCheckItem,
  DibodevWebsiteHealthCheckKey,
  DibodevWebsiteHealthCheckResult,
  DibodevWebsiteHealthDetailedToolKey,
} from '~/core/types/DibodevWebsiteHealthCheck'
import type {
  DibodevWebsiteHealthCheckerProps,
  DibodevWebsiteHealthCheckRow,
  DibodevWebsiteHealthDetailedToolLink,
} from '~/core/types/DibodevWebsiteHealthChecker'
import { computed, ref } from 'vue'
import DibodevInput from '~/components/core/DibodevInput.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { GDPR_COOKIE_CHECK_ROUTE_NAME, GDPR_COOKIE_CHECK_TEASER } from '~/core/constants/gdprCookieCheck/pageShared'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import {
  WEBSITE_HEALTH_CHECK_API_PATH,
  WEBSITE_HEALTH_DETAILED_TOOL_BY_CHECK,
  WEBSITE_HEALTH_DETAILED_TOOL_ROUTE_NAMES,
  WEBSITE_HEALTH_VERDICT_STYLES,
  WEBSITE_HEALTH_VERDICTS_WITH_ADVICE,
} from '~/core/constants/websiteHealthCheck/pageShared'
import { WEBSITE_REDESIGN_CONTACT_QUERY } from '~/core/constants/websiteRedesignPrompt'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'
import { SiteCheckErrorUtils } from '~/core/utils/SiteCheckErrorUtils'

/** The site address never leaves the page: the PostHog events carry the verdicts, not the host. */
const props: DibodevWebsiteHealthCheckerProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevWebsiteHealthCheckerProps['wording']>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const localePath = useLocalePath()
const { track } = useTracking()

const gdprCookieCheckRoute: string = localePath({ name: GDPR_COOKIE_CHECK_ROUTE_NAME })
let hasTrackedStart: boolean = false

/* REFS */
const siteAddress: Ref<string> = ref('')
const isChecking: Ref<boolean> = ref(false)
const result: Ref<DibodevWebsiteHealthCheckResult | null> = ref(null)
const errorKind: Ref<DibodevSiteCheckErrorKind | null> = ref(null)
const checkedHost: Ref<string> = ref('')

/* COMPUTED */
const canCheck: ComputedRef<boolean> = computed((): boolean => !isChecking.value && siteAddress.value.trim() !== '')

const cardTitle: ComputedRef<string> = computed((): string => {
  if (isChecking.value) {
    return props.wording.loadingTitle
  }
  if (errorKind.value) {
    return props.wording.errorTitles[errorKind.value]
  }
  if (result.value) {
    return fillHostTemplate(props.wording.overallTitles[result.value.overall])
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
    return fillHostTemplate(props.wording.overallTexts[result.value.overall])
  }
  return props.wording.idleText
})

/** The eight checks as listed on the card, with their sentence, their advice and their detailed checker when useful. */
const checkRows: ComputedRef<DibodevWebsiteHealthCheckRow[]> = computed((): DibodevWebsiteHealthCheckRow[] =>
  (result.value?.checks ?? []).map((check: DibodevWebsiteHealthCheckItem): DibodevWebsiteHealthCheckRow => {
    const hasSomethingToDo: boolean = WEBSITE_HEALTH_VERDICTS_WITH_ADVICE.includes(check.verdict)
    const values: Record<string, string> = { host: checkedHost.value, ...check.values }

    return {
      check,
      label: props.wording.checkLabels[check.key],
      verdictLabel: props.wording.verdictLabels[check.verdict],
      detailText: QuizTextUtils.fillTemplate(props.wording.detailTexts[check.detailKey], values),
      adviceText: hasSomethingToDo
        ? QuizTextUtils.fillTemplate(props.wording.adviceTexts[check.detailKey] ?? '', values)
        : '',
      detailedTool: hasSomethingToDo ? detailedToolLinkOf(check.key) : null,
    }
  }),
)

/** The contact page: with the redesign message once a check needs work, plain otherwise. */
const contactRoute: ComputedRef<string> = computed((): string =>
  result.value && result.value.overall !== 'healthy'
    ? localePath({ path: '/contact', query: WEBSITE_REDESIGN_CONTACT_QUERY })
    : localePath('/contact'),
)

/* METHODS */
/**
 * Fills a card text with the host checked.
 * @param {string} template - A text with `{host}`.
 * @returns {string} The text with the host.
 */
function fillHostTemplate(template: string): string {
  return QuizTextUtils.fillTemplate(template, { host: checkedHost.value })
}

/**
 * The link to the detailed checker of a check, when it has one.
 * @param {DibodevWebsiteHealthCheckKey} key - The check.
 * @returns {DibodevWebsiteHealthDetailedToolLink | null} The link, or null for the checks without a detailed tool.
 */
function detailedToolLinkOf(key: DibodevWebsiteHealthCheckKey): DibodevWebsiteHealthDetailedToolLink | null {
  const toolKey: DibodevWebsiteHealthDetailedToolKey | undefined = WEBSITE_HEALTH_DETAILED_TOOL_BY_CHECK[key]

  if (!toolKey) {
    return null
  }
  return {
    key: toolKey,
    label: props.wording.detailedToolLabels[toolKey],
    to: localePath({ name: WEBSITE_HEALTH_DETAILED_TOOL_ROUTE_NAMES[toolKey] }),
  }
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
  track(TRACKING_EVENTS.websiteHealthCheckStarted, { location: props.trackingLocation })
}

/**
 * Asks the API to read the site and shows the eight verdicts, or the reason the site could not be read.
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
    const checkResult: DibodevWebsiteHealthCheckResult = await $fetch<DibodevWebsiteHealthCheckResult>(
      WEBSITE_HEALTH_CHECK_API_PATH,
      { query: { site: checkedHost.value } },
    )
    result.value = checkResult
    checkedHost.value = checkResult.host
    track(TRACKING_EVENTS.websiteHealthChecked, {
      location: props.trackingLocation,
      outcome: 'result',
      overall: checkResult.overall,
      criticalChecks: checksWithVerdict(checkResult, 'critical'),
      warningChecks: checksWithVerdict(checkResult, 'warning'),
      isWordPress: checkResult.isWordPress,
      errorKind: null,
    })
  } catch (error: unknown) {
    errorKind.value = SiteCheckErrorUtils.kindOf(error)
    track(TRACKING_EVENTS.websiteHealthChecked, {
      location: props.trackingLocation,
      outcome: 'error',
      overall: null,
      criticalChecks: [],
      warningChecks: [],
      isWordPress: null,
      errorKind: errorKind.value,
    })
  } finally {
    isChecking.value = false
  }
}

/**
 * The checks of a result at a given level, for the events.
 * @param {DibodevWebsiteHealthCheckResult} checkResult - The result.
 * @param {DibodevWebsiteHealthCheckItem['verdict']} verdict - The level kept.
 * @returns {DibodevWebsiteHealthCheckKey[]} The keys of the checks at that level.
 */
function checksWithVerdict(
  checkResult: DibodevWebsiteHealthCheckResult,
  verdict: DibodevWebsiteHealthCheckItem['verdict'],
): DibodevWebsiteHealthCheckKey[] {
  return checkResult.checks
    .filter((check: DibodevWebsiteHealthCheckItem): boolean => check.verdict === verdict)
    .map((check: DibodevWebsiteHealthCheckItem): DibodevWebsiteHealthCheckKey => check.key)
}

/**
 * Tracks a detailed checker opened from a check of the card.
 * @param {DibodevWebsiteHealthDetailedToolKey} toolKey - The detailed checker opened.
 * @returns {void}
 */
function trackDetailedToolClick(toolKey: DibodevWebsiteHealthDetailedToolKey): void {
  track(TRACKING_EVENTS.toolTeaserClicked, {
    tool: WEBSITE_HEALTH_DETAILED_TOOL_ROUTE_NAMES[toolKey],
    location: props.trackingLocation,
  })
}

/**
 * Tracks the contact button of the card.
 * @returns {void}
 */
function trackContactClick(): void {
  track(TRACKING_EVENTS.ctaProjectDiscussion, { location: props.trackingLocation })
}

/**
 * Tracks the opening of the GDPR cookie check from the result card.
 * @returns {void}
 */
function trackGdprCookieCheckClick(): void {
  track(TRACKING_EVENTS.toolTeaserClicked, {
    tool: GDPR_COOKIE_CHECK_TEASER.toolId,
    location: result.value ? props.trackingLocation : `${props.trackingLocation}_idle`,
  })
}
</script>
