<template>
  <div
    :id="props.anchorId"
    class="bg-primary-dark relative grid content-start gap-6 overflow-hidden rounded-2xl p-6 text-white sm:p-8"
  >
    <div
      class="pointer-events-none absolute -top-16 -right-12 h-56 w-56 rounded-full bg-white/10 blur-2xl"
      aria-hidden="true"
    />
    <div class="relative grid gap-5" aria-live="polite" :aria-busy="isLoading">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">
          {{ hasReadableStatusPage ? props.wording.resultLabel : props.wording.noStatusPageResultLabel }}
        </p>
        <span
          v-if="status && hasReadableStatusPage"
          class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white"
        >
          <span
            class="h-2.5 w-2.5 rounded-full"
            :class="HOSTING_STATUS_STATE_DOT_CLASSES[status.state]"
            aria-hidden="true"
          />
          {{ props.wording.stateLabels[status.state] }}
        </span>
      </div>
      <div class="grid gap-2">
        <h2 class="text-2xl leading-tight font-medium tracking-[-0.01em] sm:text-[28px]">{{ cardTitle }}</h2>
        <p class="text-[15px] leading-6 text-white/85">{{ cardText }}</p>
        <p v-if="status && hasReadableStatusPage" class="text-sm leading-6 text-white/70">{{ checkedAtText }}</p>
        <p v-if="status && status.isStale" class="text-sm leading-6 text-amber-200">{{ staleText }}</p>
      </div>

      <div v-if="status && status.activeIncidents.length > 0" class="grid gap-2.5 rounded-xl bg-white/10 p-4">
        <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">
          {{ props.wording.activeIncidentsTitle }}
        </p>
        <ul class="grid gap-3">
          <li v-for="incident in status.activeIncidents" :key="incident.id" class="grid gap-1">
            <span class="text-[15px] leading-6 font-medium">{{ incident.title }}</span>
            <span class="text-sm leading-6 text-white/70">
              {{ incidentLine(incident) }}
            </span>
            <a
              v-if="incident.url"
              :href="incident.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm leading-6 text-white underline-offset-4 hover:underline"
            >
              {{ props.wording.incidentLinkLabel }}
            </a>
          </li>
        </ul>
      </div>

      <div v-if="status && hasReadableStatusPage" class="grid gap-2.5 border-t border-white/20 pt-5">
        <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">
          {{ props.wording.recentIncidentsTitle }}
        </p>
        <ul v-if="recentIncidents.length > 0" class="grid gap-2">
          <li
            v-for="incident in recentIncidents"
            :key="incident.id"
            class="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-2.5 text-[15px] leading-6"
          >
            <span
              class="mt-2 h-2 w-2 rounded-full"
              :class="incident.isResolved ? 'bg-white/40' : 'bg-amber-400'"
              aria-hidden="true"
            />
            <span>
              <span class="font-medium">{{ incident.title }}</span>
              <span class="block text-sm text-white/70">{{ incidentLine(incident) }}</span>
            </span>
          </li>
        </ul>
        <p v-else class="text-[15px] leading-6 text-white/85">{{ props.wording.noRecentIncidentsText }}</p>
      </div>

      <slot name="alert" :state="status?.state ?? null" />

      <div class="grid gap-3 border-t border-white/20 pt-5 sm:flex sm:items-center sm:justify-between">
        <p class="text-sm leading-6 text-white/70">
          {{ sourceText }}
          <a
            :href="statusPageUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white underline-offset-4 hover:underline"
          >
            {{ statusPageLinkLabel }}
          </a>
        </p>
        <button
          v-if="hasReadableStatusPage"
          type="button"
          :disabled="isLoading"
          class="inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm leading-6 font-medium text-white transition-colors hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
          @click="refreshStatus"
        >
          <DibodevIcon name="Activity" mode="stroke" :width="16" :height="16" aria-hidden="true" />
          {{ isLoading ? props.wording.refreshingLabel : props.wording.refreshLabel }}
        </button>
      </div>
    </div>

    <div class="relative grid gap-3">
      <p class="text-[15px] leading-6 text-white/85">{{ ctaIntro }}</p>
      <NuxtLink
        :to="contactRoute"
        class="text-primary-dark flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-[15px] leading-6 font-medium transition-colors hover:bg-gray-800"
        @click="trackContactClick"
      >
        {{ props.wording.ctaLabel }}
        <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref, WritableComputedRef } from 'vue'
import type {
  DibodevHostingIncident,
  DibodevHostingProviderKey,
  DibodevHostingProviderStatus,
  DibodevHostingProviderStatusSource,
} from '~/core/types/DibodevHostingStatus'
import type { DibodevHostingStatusCardProps } from '~/core/types/DibodevHostingStatusCard'
import type { DibodevHostingStatusCardWording } from '~/core/types/DibodevHostingStatusPage'
import type { UseHostingStatusReturn } from '~/composables/useHostingStatus'
import type { UseTrackingReturn } from '~/composables/useTracking'
import { computed, onMounted, ref, watch } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useHostingProviderStatus } from '~/composables/useHostingStatus'
import { useTracking } from '~/composables/useTracking'
import {
  HOSTING_PROVIDER_STATUS_SOURCES,
  HOSTING_STATUS_STATE_DOT_CLASSES,
} from '~/core/constants/hostingStatus/pageShared'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { HostingStatusContactUtils } from '~/core/utils/HostingStatusContactUtils'
import { HostingStatusUtils } from '~/core/utils/HostingStatusUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

const MAX_RECENT_INCIDENTS_SHOWN: number = 5

/** Live status of one provider, read in the browser; the slot `alert` receives the e-mail alert field. */
const props: DibodevHostingStatusCardProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    required: true,
  },
  provider: {
    type: String as PropType<DibodevHostingProviderKey>,
    required: true,
  },
  providerName: {
    type: String as PropType<string>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevHostingStatusCardWording>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const { track }: UseTrackingReturn = useTracking()
const {
  data: status,
  isLoading,
  hasError,
  refresh,
}: UseHostingStatusReturn<DibodevHostingProviderStatus> = useHostingProviderStatus(props.provider)
const providerStatusSource: DibodevHostingProviderStatusSource = HOSTING_PROVIDER_STATUS_SOURCES[props.provider]
const hasReadableStatusPage: boolean = HostingStatusUtils.hasReadableStatusPage(props.provider)
let hasTrackedLoad: boolean = false

/* REFS */
const now: Ref<number> = ref(0)

/* COMPUTED */
const templateValues: ComputedRef<Record<string, string>> = computed((): Record<string, string> => {
  const current: DibodevHostingProviderStatus | null = status.value

  return {
    provider: props.providerName,
    time: current ? HostingStatusUtils.formatTime(current.checkedAt, locale.value) : '',
    since:
      current?.stateSince && now.value > 0
        ? HostingStatusUtils.formatElapsed(current.stateSince, locale.value, now.value)
        : '',
    count: String(current?.activeIncidents.length ?? 0),
  }
})

const cardTitle: ComputedRef<string> = computed((): string => {
  if (!hasReadableStatusPage) {
    return fillTemplate(props.wording.noStatusPageTitle)
  }
  if (hasError.value) {
    return fillTemplate(props.wording.errorTitle)
  }
  if (!status.value) {
    return fillTemplate(props.wording.loadingTitle)
  }
  return fillTemplate(props.wording.stateTitles[status.value.state])
})

const cardText: ComputedRef<string> = computed((): string => {
  if (!hasReadableStatusPage) {
    return fillTemplate(props.wording.noStatusPageText)
  }
  if (hasError.value) {
    return fillTemplate(props.wording.errorText)
  }
  if (!status.value) {
    return fillTemplate(props.wording.loadingText)
  }
  return fillTemplate(props.wording.stateTexts[status.value.state])
})

const checkedAtText: ComputedRef<string> = computed((): string => fillTemplate(props.wording.checkedAtText))

const staleText: ComputedRef<string> = computed((): string => fillTemplate(props.wording.staleText))

const sourceText: ComputedRef<string> = computed((): string =>
  fillTemplate(props.wording.sourceTexts[status.value?.sourceKind ?? providerStatusSource.sourceKind]),
)

const statusPageUrl: ComputedRef<string> = computed(
  (): string => status.value?.statusPageUrl ?? providerStatusSource.statusPageUrl,
)

const statusPageLinkLabel: ComputedRef<string> = computed((): string =>
  hasReadableStatusPage ? props.wording.statusPageLinkLabel : props.wording.noStatusPageLinkLabel,
)

const recentIncidents: ComputedRef<DibodevHostingIncident[]> = computed((): DibodevHostingIncident[] =>
  (status.value?.recentIncidents ?? []).slice(0, MAX_RECENT_INCIDENTS_SHOWN),
)

const ctaIntro: ComputedRef<string> = computed((): string =>
  fillTemplate(props.wording.ctaIntros[status.value?.state ?? 'unknown']),
)

const contactRoute: ComputedRef<string> = computed((): string =>
  localePath({
    path: '/contact',
    query: HostingStatusContactUtils.buildContactQuery(props.provider, status.value?.state ?? null),
  }),
)

/* METHODS */
/**
 * Fills a text of the card with the provider name, the check time and the elapsed time.
 * @param {string} template - A text with `{placeholders}`.
 * @returns {string} The text with the values.
 */
function fillTemplate(template: string): string {
  return QuizTextUtils.fillTemplate(template, templateValues.value)
}

/**
 * Writes the dates of an incident: when it started, and when it ended or that it is still open.
 * @param {DibodevHostingIncident} incident - The incident.
 * @returns {string} The line shown under its title.
 */
function incidentLine(incident: DibodevHostingIncident): string {
  const startedAt: string = HostingStatusUtils.formatDateTime(incident.startedAt, locale.value)

  if (incident.impact === 'maintenance' && !incident.isResolved) {
    return `${startedAt} · ${props.wording.maintenanceLabel}`
  }
  if (!incident.isResolved) {
    return `${startedAt} · ${props.wording.ongoingLabel}`
  }
  const resolvedAt: string = incident.resolvedAt ? HostingStatusUtils.formatTime(incident.resolvedAt, locale.value) : ''

  return resolvedAt
    ? `${startedAt} · ${props.wording.resolvedLabel} ${resolvedAt}`
    : `${startedAt} · ${props.wording.resolvedLabel}`
}

/**
 * Reads the status again on demand and tracks the request.
 * @returns {Promise<void>}
 */
async function refreshStatus(): Promise<void> {
  track(TRACKING_EVENTS.hostingStatusRefreshed, { location: props.trackingLocation, provider: props.provider })
  await refresh()
  now.value = Date.now()
}

/**
 * Tracks the click on the contact button of the card.
 * @returns {void}
 */
function trackContactClick(): void {
  track(TRACKING_EVENTS.ctaProjectDiscussion, { location: props.trackingLocation })
}

/* WATCHERS */
watch(status, (current: DibodevHostingProviderStatus | null): void => {
  if (!current || hasTrackedLoad) {
    return
  }
  hasTrackedLoad = true
  now.value = Date.now()
  track(TRACKING_EVENTS.hostingStatusLoaded, {
    location: props.trackingLocation,
    provider: props.provider,
    state: current.state,
  })
})

/* LIFECYCLE */
onMounted((): void => {
  now.value = Date.now()
})
</script>
