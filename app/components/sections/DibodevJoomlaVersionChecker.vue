<template>
  <div :id="props.anchorId" class="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
    <form
      class="grid content-start gap-6 rounded-2xl border border-gray-300 bg-white p-6 sm:p-8"
      novalidate
      @submit.prevent="checkSite"
    >
      <div class="grid gap-2">
        <DibodevInput
          id="joomla-version-site"
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
              <span class="text-[15px] leading-6 break-words">{{ detail }}</span>
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

      <DibodevSiteCheckReportForm
        v-if="result"
        tool="joomlaVersion"
        :site="result.host"
        :verdict="result.verdict"
        :trackingLocation="props.trackingLocation"
        class="relative"
      />

      <DibodevAlertSubscriptionForm
        topic="security"
        :site="result?.host ?? null"
        :trackingLocation="props.trackingLocation"
        tone="dark"
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
        <NuxtLink
          :to="serviceRoute"
          class="text-center text-sm leading-6 text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
          @click="trackServiceClick"
        >
          {{ props.wording.serviceLinkLabel }}
        </NuxtLink>
        <NuxtLink
          :to="healthCheckRoute"
          class="text-center text-sm leading-6 text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
          @click="trackHealthCheckClick"
        >
          {{ props.wording.healthCheckLinkLabel }}
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
  DibodevJoomlaExtensionSeen,
  DibodevJoomlaTemplateResult,
  DibodevJoomlaVersionCheckResult,
  DibodevJoomlaVersionGuideKey,
  DibodevJoomlaVersionSignalKey,
} from '~/core/types/DibodevJoomlaVersionCheck'
import type {
  DibodevJoomlaVersionCheckerProps,
  DibodevJoomlaVersionGuideLink,
} from '~/core/types/DibodevJoomlaVersionChecker'
import type { DibodevJoomlaVersionCheckerWording } from '~/core/types/DibodevJoomlaVersionCheckPage'
import type { UseTrackingReturn } from '~/composables/useTracking'
import { computed, ref } from 'vue'
import DibodevInput from '~/components/core/DibodevInput.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevAlertSubscriptionForm from '~/forms/DibodevAlertSubscriptionForm.vue'
import DibodevSiteCheckReportForm from '~/forms/DibodevSiteCheckReportForm.vue'
import { useTracking } from '~/composables/useTracking'
import {
  JOOMLA_TEMPLATE_FRAMEWORK_LABELS,
  JOOMLA_VERSION_CHECK_API_PATH,
  JOOMLA_VERSION_CONTACT_TOPIC,
  JOOMLA_VERSION_GUIDE_KEYS,
  JOOMLA_VERSION_GUIDE_SLUGS,
  JOOMLA_VERSION_VERDICTS_WITH_GUIDES,
} from '~/core/constants/joomlaVersionCheck/pageShared'
import {
  JOOMLA_UPDATE_CONTACT_PRESELECTION,
  JOOMLA_UPDATE_SERVICE_ROUTE_NAME,
  JOOMLA_UPDATE_SERVICE_TEASER,
} from '~/core/constants/joomlaUpdateService/pageShared'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import {
  WEBSITE_HEALTH_CHECK_ROUTE_NAME,
  WEBSITE_HEALTH_CHECK_TEASER,
} from '~/core/constants/websiteHealthCheck/pageShared'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'
import { SiteCheckContactUtils } from '~/core/utils/SiteCheckContactUtils'
import { SiteCheckErrorUtils } from '~/core/utils/SiteCheckErrorUtils'

/** The PostHog events carry the verdict and the versions, never the site address. */
const props: DibodevJoomlaVersionCheckerProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevJoomlaVersionCheckerWording>,
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
const SINGLE_WORD_NAME_REGEX: RegExp = /^[a-z][a-z0-9]*$/
const serviceRoute: string = localePath({ name: JOOMLA_UPDATE_SERVICE_ROUTE_NAME })
const healthCheckRoute: string = localePath({ name: WEBSITE_HEALTH_CHECK_ROUTE_NAME })
let hasTrackedStart: boolean = false

const siteAddress: Ref<string> = ref('')
const isChecking: Ref<boolean> = ref(false)
const result: Ref<DibodevJoomlaVersionCheckResult | null> = ref(null)
const errorKind: Ref<DibodevSiteCheckErrorKind | null> = ref(null)
const checkedHost: Ref<string> = ref('')

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

const templateValues: ComputedRef<Record<string, string>> = computed(
  (): Record<string, string> => ({
    host: result.value?.host ?? checkedHost.value,
    version: result.value?.version ?? '',
    major: String(result.value?.majorVersion ?? ''),
    latestVersion: result.value?.latestVersion ?? '',
    latestVersionOfBranch: result.value?.latestVersionOfBranch ?? '',
    phpVersion: result.value?.phpVersion ?? '',
    template: result.value?.template ? readTemplateName(result.value.template) : '',
    framework: result.value?.template?.framework
      ? JOOMLA_TEMPLATE_FRAMEWORK_LABELS[result.value.template.framework]
      : '',
    extensions: (result.value?.extensions ?? [])
      .map((extension: DibodevJoomlaExtensionSeen): string => extension.label ?? extension.element)
      .join(', '),
    platform: platformLabel.value,
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

const detailTexts: ComputedRef<string[]> = computed((): string[] =>
  (result.value?.signals ?? []).map((signal: DibodevJoomlaVersionSignalKey): string =>
    fillResultTemplate(props.wording.signalTexts[signal]),
  ),
)

const stepTexts: ComputedRef<string[]> = computed((): string[] =>
  result.value ? props.wording.steps[result.value.verdict].map((step: string): string => fillResultTemplate(step)) : [],
)

const guideLinks: ComputedRef<DibodevJoomlaVersionGuideLink[]> = computed((): DibodevJoomlaVersionGuideLink[] => {
  if (!result.value || !JOOMLA_VERSION_VERDICTS_WITH_GUIDES.includes(result.value.verdict)) {
    return []
  }
  return JOOMLA_VERSION_GUIDE_KEYS.map(
    (key: DibodevJoomlaVersionGuideKey): DibodevJoomlaVersionGuideLink => ({
      key,
      label: props.wording.guideLabels[key],
      to: localePath(`/blog/${JOOMLA_VERSION_GUIDE_SLUGS[key]}`),
    }),
  )
})

const contactRoute: ComputedRef<string> = computed((): string =>
  localePath({
    path: '/contact',
    query: {
      ...SiteCheckContactUtils.buildContactQuery(
        JOOMLA_VERSION_CONTACT_TOPIC,
        result.value?.host ?? null,
        result.value?.verdict ?? null,
      ),
      ...JOOMLA_UPDATE_CONTACT_PRESELECTION,
    },
  }),
)

/**
 * Fills a result text with the values of the current check (host, versions, template, extensions).
 * @param {string} template - A text with `{placeholders}`.
 * @returns {string} The text with the values.
 */
function fillResultTemplate(template: string): string {
  return QuizTextUtils.fillTemplate(template, templateValues.value)
}

/**
 * Names the template as Joomla shows it: a shipped template with a capital (Cassiopeia, Protostar), any other by its folder.
 * @param {DibodevJoomlaTemplateResult} template - The template read on the page.
 * @returns {string} The name shown in the result.
 */
function readTemplateName(template: DibodevJoomlaTemplateResult): string {
  if (template.kind !== 'core' || !SINGLE_WORD_NAME_REGEX.test(template.name)) {
    return template.name
  }
  return `${template.name.charAt(0).toUpperCase()}${template.name.slice(1)}`
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
  track(TRACKING_EVENTS.joomlaVersionCheckStarted, { location: props.trackingLocation })
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
    result.value = await $fetch<DibodevJoomlaVersionCheckResult>(JOOMLA_VERSION_CHECK_API_PATH, {
      query: { site },
      retry: 0,
    })
    track(TRACKING_EVENTS.joomlaVersionChecked, {
      location: props.trackingLocation,
      outcome: 'result',
      verdict: result.value.verdict,
      version: result.value.version,
      phpVersion: result.value.phpVersion,
      templateKind: result.value.template?.kind ?? null,
      signals: result.value.signals,
      errorKind: null,
    })
  } catch (error: unknown) {
    const kind: DibodevSiteCheckErrorKind = SiteCheckErrorUtils.kindOf(error)

    errorKind.value = kind
    track(TRACKING_EVENTS.joomlaVersionChecked, {
      location: props.trackingLocation,
      outcome: 'error',
      verdict: null,
      version: null,
      phpVersion: null,
      templateKind: null,
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
 * Tracks the click on the link to the Joomla service page, before or after a result.
 * @returns {void}
 */
function trackServiceClick(): void {
  track(TRACKING_EVENTS.toolTeaserClicked, {
    tool: JOOMLA_UPDATE_SERVICE_TEASER.toolId,
    location: result.value ? props.trackingLocation : `${props.trackingLocation}_idle`,
  })
}

/**
 * Tracks the opening of the eight-point site check from the result card.
 * @returns {void}
 */
function trackHealthCheckClick(): void {
  track(TRACKING_EVENTS.toolTeaserClicked, {
    tool: WEBSITE_HEALTH_CHECK_TEASER.toolId,
    location: result.value ? props.trackingLocation : `${props.trackingLocation}_idle`,
  })
}

/**
 * Tracks the opening of a guide from the result card.
 * @param {DibodevJoomlaVersionGuideKey} guide - The subject of the guide opened.
 * @returns {void}
 */
function trackGuideClick(guide: DibodevJoomlaVersionGuideKey): void {
  if (!result.value) {
    return
  }
  track(TRACKING_EVENTS.joomlaVersionGuideClicked, {
    location: props.trackingLocation,
    guide,
    verdict: result.value.verdict,
  })
}
</script>
