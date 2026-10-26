<template>
  <div :id="props.anchorId" class="grid scroll-mt-24 items-start gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
    <form
      class="grid content-start gap-6 rounded-2xl border border-gray-300 bg-white p-6 sm:p-8"
      novalidate
      @submit.prevent="checkSite"
    >
      <div class="grid gap-2">
        <DibodevInput
          id="wordpress-hack-site"
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

        <div v-if="result && pluginLines.length > 0" class="grid gap-2 rounded-xl bg-white/10 p-4">
          <p class="text-xs font-medium text-white/85">{{ props.wording.pluginsTitle }}</p>
          <ul class="grid gap-1.5">
            <li v-for="line in pluginLines" :key="line" class="text-[15px] leading-6">{{ line }}</li>
          </ul>
        </div>

        <div v-if="result && detailTexts.length > 0" class="grid gap-2.5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.detailsTitle }}</p>
          <ul class="grid gap-2.5">
            <li v-for="detail in detailTexts" :key="detail" class="flex items-start gap-2.5">
              <DibodevIcon
                name="Info"
                mode="stroke"
                :width="18"
                :height="18"
                class="mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <span class="text-[15px] leading-6">{{ detail }}</span>
            </li>
          </ul>
        </div>

        <div v-if="result && stepTexts.length > 0" class="grid gap-2.5 border-t border-white/20 pt-5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.stepsTitle }}</p>
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
            <li v-for="guide in guideLinks" :key="guide.key">
              <NuxtLink
                :to="guide.to"
                class="flex items-start gap-2.5 rounded-lg bg-white/10 px-3.5 py-2.5 text-[15px] leading-6 transition-colors hover:bg-white/20"
                @click="trackGuideClick(guide.key)"
              >
                <DibodevIcon
                  name="ArrowRight"
                  mode="stroke"
                  :width="18"
                  :height="18"
                  class="mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span>{{ guide.label }}</span>
              </NuxtLink>
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
        <NuxtLink
          :to="serviceRoute"
          class="text-center text-sm leading-6 text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
          @click="trackServiceClick"
        >
          {{ props.wording.serviceLinkLabel }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { DibodevPhpVulnerabilityPlatformKey } from '~/core/types/DibodevPhpVulnerabilityCheck'
import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'
import type {
  DibodevWordPressHackCheckResult,
  DibodevWordPressHackGuideKey,
  DibodevWordPressHackSignalKey,
  DibodevWordPressPluginResult,
} from '~/core/types/DibodevWordPressHackCheck'
import type {
  DibodevWordPressHackCheckerProps,
  DibodevWordPressHackGuideLink,
} from '~/core/types/DibodevWordPressHackChecker'
import type { DibodevWordPressHackCheckerWording } from '~/core/types/DibodevWordPressHackCheckPage'
import type { UseTrackingReturn } from '~/composables/useTracking'
import { computed, ref } from 'vue'
import DibodevInput from '~/components/core/DibodevInput.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { PHP_UPDATE_SERVICE_ROUTE_NAME, PHP_UPDATE_SERVICE_TEASER } from '~/core/constants/phpUpdateService/pageShared'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import {
  WORDPRESS_HACK_CHECK_API_PATH,
  WORDPRESS_HACK_CONTACT_TOPIC,
  WORDPRESS_HACK_GUIDE_KEYS,
  WORDPRESS_HACK_GUIDE_SLUGS,
  WORDPRESS_HACK_VERDICTS_WITH_GUIDES,
} from '~/core/constants/wordpressHackCheck/pageShared'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'
import { SiteCheckContactUtils } from '~/core/utils/SiteCheckContactUtils'

/** The site address never leaves the page: the PostHog events carry the verdict and the extension, not the host. */
const props: DibodevWordPressHackCheckerProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevWordPressHackCheckerWording>,
    required: true,
  },
  platformLabels: {
    type: Object as PropType<Record<DibodevPhpVulnerabilityPlatformKey, string>>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const { track }: UseTrackingReturn = useTracking()

const MAX_PLATFORMS_NAMED: number = 3
const URL_SCHEME_REGEX: RegExp = /^[a-z]+:\/\//i
const serviceRoute: string = localePath({ name: PHP_UPDATE_SERVICE_ROUTE_NAME })
let hasTrackedStart: boolean = false

/* REFS */
const siteAddress: Ref<string> = ref('')
const isChecking: Ref<boolean> = ref(false)
const result: Ref<DibodevWordPressHackCheckResult | null> = ref(null)
const errorKind: Ref<DibodevSiteCheckErrorKind | null> = ref(null)
const checkedHost: Ref<string> = ref('')

/* COMPUTED */
const canCheck: ComputedRef<boolean> = computed((): boolean => !isChecking.value && siteAddress.value.trim() !== '')

const platformLabel: ComputedRef<string> = computed((): string => {
  if (!result.value) {
    return ''
  }
  return result.value.platforms
    .filter((platform: DibodevPhpVulnerabilityPlatformKey): boolean => platform !== 'php')
    .slice(0, MAX_PLATFORMS_NAMED)
    .map((platform: DibodevPhpVulnerabilityPlatformKey): string => props.platformLabels[platform])
    .join(', ')
})

const highlightedPlugin: ComputedRef<DibodevWordPressPluginResult | null> = computed(
  (): DibodevWordPressPluginResult | null => {
    if (!result.value || result.value.plugins.length === 0) {
      return null
    }
    return (
      result.value.plugins.find((plugin: DibodevWordPressPluginResult): boolean => plugin.status === 'vulnerable') ??
      result.value.plugins[0] ??
      null
    )
  },
)

const templateValues: ComputedRef<Record<string, string>> = computed(
  (): Record<string, string> => ({
    host: result.value?.host ?? checkedHost.value,
    coreVersion: result.value?.coreVersion ?? '',
    latestCoreVersion: result.value?.latestCoreVersion ?? '',
    platform: platformLabel.value,
    plugin: highlightedPlugin.value?.name ?? '',
    pluginVersion: highlightedPlugin.value?.versionFound ?? '',
    fixedVersion: highlightedPlugin.value?.fixedVersion ?? '',
    domains: result.value?.externalScriptDomains.join(', ') ?? '',
    users: String(result.value?.usernamesExposed ?? 0),
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

const pluginLines: ComputedRef<string[]> = computed((): string[] =>
  (result.value?.plugins ?? []).map((plugin: DibodevWordPressPluginResult): string =>
    QuizTextUtils.fillTemplate(props.wording.pluginStatusTexts[plugin.status], {
      plugin: plugin.name,
      pluginVersion: plugin.versionFound ?? '',
      fixedVersion: plugin.fixedVersion,
    }),
  ),
)

const detailTexts: ComputedRef<string[]> = computed((): string[] => {
  if (!result.value) {
    return []
  }
  const lines: string[] = result.value.signals.map((signal: DibodevWordPressHackSignalKey): string =>
    fillResultTemplate(props.wording.signalTexts[signal]),
  )

  if (result.value.isWordPress && !result.value.coreVersion) {
    lines.push(props.wording.coreVersionHiddenLine)
  }
  return lines
})

const stepTexts: ComputedRef<string[]> = computed((): string[] =>
  result.value ? props.wording.steps[result.value.verdict].map((step: string): string => fillResultTemplate(step)) : [],
)

const guideLinks: ComputedRef<DibodevWordPressHackGuideLink[]> = computed((): DibodevWordPressHackGuideLink[] => {
  if (!result.value || !WORDPRESS_HACK_VERDICTS_WITH_GUIDES.includes(result.value.verdict)) {
    return []
  }
  return WORDPRESS_HACK_GUIDE_KEYS.map(
    (key: DibodevWordPressHackGuideKey): DibodevWordPressHackGuideLink => ({
      key,
      label: props.wording.guideLabels[key],
      to: localePath(`/blog/${WORDPRESS_HACK_GUIDE_SLUGS[key]}`),
    }),
  )
})

const contactRoute: ComputedRef<string> = computed((): string =>
  localePath({
    path: '/contact',
    query: SiteCheckContactUtils.buildContactQuery(
      WORDPRESS_HACK_CONTACT_TOPIC,
      result.value?.host ?? null,
      result.value?.verdict ?? null,
    ),
  }),
)

/* METHODS */
/**
 * Fills a result text with the values of the current check (host, versions, extension, domains).
 * @param {string} template - A text with `{placeholders}`.
 * @returns {string} The text with the values.
 */
function fillResultTemplate(template: string): string {
  return QuizTextUtils.fillTemplate(template, templateValues.value)
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
  track(TRACKING_EVENTS.wordpressHackCheckStarted, { location: props.trackingLocation })
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
 * Asks the API to read the site and shows the verdict, or the reason it could not be read.
 * @returns {Promise<void>}
 */
async function checkSite(): Promise<void> {
  if (!canCheck.value) {
    return
  }
  const site: string = siteAddress.value.trim()

  checkedHost.value = site.replace(URL_SCHEME_REGEX, '').split('/')[0] ?? site
  isChecking.value = true
  errorKind.value = null
  result.value = null
  try {
    result.value = await $fetch<DibodevWordPressHackCheckResult>(WORDPRESS_HACK_CHECK_API_PATH, {
      query: { site },
      retry: 0,
    })
    track(TRACKING_EVENTS.wordpressHackChecked, {
      location: props.trackingLocation,
      outcome: 'result',
      verdict: result.value.verdict,
      platform: result.value.platforms[0] ?? null,
      vulnerablePlugin: highlightedPlugin.value?.status === 'vulnerable' ? highlightedPlugin.value.slug : null,
      coreVersion: result.value.coreVersion,
      signals: result.value.signals,
      errorKind: null,
    })
  } catch (error: unknown) {
    const kind: DibodevSiteCheckErrorKind = errorKindForStatus(readErrorStatus(error))

    errorKind.value = kind
    track(TRACKING_EVENTS.wordpressHackChecked, {
      location: props.trackingLocation,
      outcome: 'error',
      verdict: null,
      platform: null,
      vulnerablePlugin: null,
      coreVersion: null,
      signals: [],
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

/**
 * Tracks the click on the link to the service page, before or after a result.
 * @returns {void}
 */
function trackServiceClick(): void {
  track(TRACKING_EVENTS.toolTeaserClicked, {
    tool: PHP_UPDATE_SERVICE_TEASER.toolId,
    location: result.value ? props.trackingLocation : `${props.trackingLocation}_idle`,
  })
}

/**
 * Tracks the opening of a guide from the result card.
 * @param {DibodevWordPressHackGuideKey} guide - The subject of the guide opened.
 * @returns {void}
 */
function trackGuideClick(guide: DibodevWordPressHackGuideKey): void {
  if (!result.value) {
    return
  }
  track(TRACKING_EVENTS.wordpressHackGuideClicked, {
    location: props.trackingLocation,
    guide,
    verdict: result.value.verdict,
  })
}
</script>
