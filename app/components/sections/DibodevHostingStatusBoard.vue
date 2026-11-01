<template>
  <div :id="props.anchorId" class="grid scroll-mt-24 gap-5" aria-live="polite" :aria-busy="isLoading">
    <p v-if="hasError" class="text-muted text-[15px] leading-6">{{ props.wording.errorText }}</p>
    <p v-else class="text-muted text-[15px] leading-6">{{ snapshot ? checkedAtText : props.wording.loadingText }}</p>

    <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <li v-for="item in orderedItems" :key="item.key">
        <NuxtLink
          :to="item.to"
          class="group flex h-full flex-col gap-4 rounded-xl border border-gray-300 bg-white p-5 transition-colors hover:border-gray-400"
          @click="trackProviderClick(item.key)"
        >
          <span class="flex items-center justify-between gap-3">
            <span class="text-lg leading-snug font-medium text-gray-100">{{ item.name }}</span>
            <span
              class="h-3 w-3 shrink-0 rounded-full"
              :class="snapshot ? HOSTING_STATUS_STATE_DOT_CLASSES[providerState(item.key)] : 'bg-gray-300'"
              aria-hidden="true"
            />
          </span>
          <span class="text-[15px] leading-6 text-gray-200">{{ stateLabel(item.key) }}</span>
          <span class="text-muted text-sm leading-6">{{ lastIncidentText(item.key) }}</span>
          <span class="text-primary mt-auto inline-flex items-center gap-1.5 text-[15px] font-medium">
            {{ props.wording.cardLinkLabel }}
            <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, WritableComputedRef } from 'vue'
import type {
  DibodevHostingIncident,
  DibodevHostingProviderKey,
  DibodevHostingProviderStatus,
  DibodevHostingStatusSnapshot,
  DibodevHostingStatusState,
} from '~/core/types/DibodevHostingStatus'
import type {
  DibodevHostingStatusBoardItem,
  DibodevHostingStatusBoardProps,
} from '~/core/types/DibodevHostingStatusBoard'
import type { DibodevHostingStatusBoardWording } from '~/core/types/DibodevHostingStatusPage'
import type { UseHostingStatusReturn } from '~/composables/useHostingStatus'
import type { UseTrackingReturn } from '~/composables/useTracking'
import { computed } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useHostingStatusSnapshot } from '~/composables/useHostingStatus'
import { useTracking } from '~/composables/useTracking'
import { HOSTING_STATUS_STATE_DOT_CLASSES } from '~/core/constants/hostingStatus/pageShared'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { HostingStatusUtils } from '~/core/utils/HostingStatusUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

const STATE_DISPLAY_RANKS: Record<DibodevHostingStatusState, number> = {
  incident: 0,
  degraded: 1,
  maintenance: 2,
  unknown: 3,
  operational: 4,
}

const NO_STATUS_PAGE_DISPLAY_RANK: number = 5

/** Grid of the watched providers with their live state, the providers with an incident first. */
const props: DibodevHostingStatusBoardProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    required: true,
  },
  items: {
    type: Array as PropType<DibodevHostingStatusBoardItem[]>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevHostingStatusBoardWording>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const { track }: UseTrackingReturn = useTracking()
const {
  data: snapshot,
  isLoading,
  hasError,
}: UseHostingStatusReturn<DibodevHostingStatusSnapshot> = useHostingStatusSnapshot()

/* COMPUTED */
const orderedItems: ComputedRef<DibodevHostingStatusBoardItem[]> = computed((): DibodevHostingStatusBoardItem[] =>
  [...props.items].sort(
    (first: DibodevHostingStatusBoardItem, second: DibodevHostingStatusBoardItem): number =>
      displayRank(first.key) - displayRank(second.key),
  ),
)

const checkedAtText: ComputedRef<string> = computed((): string =>
  QuizTextUtils.fillTemplate(props.wording.checkedAtText, {
    time: snapshot.value ? HostingStatusUtils.formatTime(snapshot.value.checkedAt, locale.value) : '',
  }),
)

/* METHODS */
/**
 * Reads the status of one provider in the snapshot.
 * @param {DibodevHostingProviderKey} key - The provider.
 * @returns {DibodevHostingProviderStatus | null} Its status, or null before the snapshot arrives.
 */
function providerStatus(key: DibodevHostingProviderKey): DibodevHostingProviderStatus | null {
  return snapshot.value?.providers[key] ?? null
}

/**
 * Reads the state of one provider, `unknown` before the snapshot arrives.
 * @param {DibodevHostingProviderKey} key - The provider.
 * @returns {DibodevHostingProviderStatus['state']} Its state.
 */
function providerState(key: DibodevHostingProviderKey): DibodevHostingProviderStatus['state'] {
  return providerStatus(key)?.state ?? 'unknown'
}

/**
 * Places a provider on the board: incidents first, the providers without a readable status page last.
 * @param {DibodevHostingProviderKey} key - The provider.
 * @returns {number} Its rank, the lowest first.
 */
function displayRank(key: DibodevHostingProviderKey): number {
  if (!HostingStatusUtils.hasReadableStatusPage(key)) {
    return NO_STATUS_PAGE_DISPLAY_RANK
  }
  return STATE_DISPLAY_RANKS[providerState(key)]
}

/**
 * Returns the state label of one provider, the loading text before the snapshot arrives, or that it has no status page.
 * @param {DibodevHostingProviderKey} key - The provider.
 * @returns {string} The label.
 */
function stateLabel(key: DibodevHostingProviderKey): string {
  if (!HostingStatusUtils.hasReadableStatusPage(key)) {
    return props.wording.noStatusPageLabel
  }
  return snapshot.value ? props.wording.stateLabels[providerState(key)] : '…'
}

/**
 * Writes the last incident of a provider with its date, that none was seen, or where to look when it has no status page.
 * @param {DibodevHostingProviderKey} key - The provider.
 * @returns {string} The line shown on the card.
 */
function lastIncidentText(key: DibodevHostingProviderKey): string {
  if (!HostingStatusUtils.hasReadableStatusPage(key)) {
    return props.wording.noStatusPageText
  }
  const status: DibodevHostingProviderStatus | null = providerStatus(key)

  if (!status) {
    return ''
  }
  const incident: DibodevHostingIncident | undefined = status.activeIncidents[0] ?? status.recentIncidents[0]

  if (!incident) {
    return props.wording.noIncidentText
  }
  return QuizTextUtils.fillTemplate(props.wording.lastIncidentText, {
    title: incident.title,
    date: HostingStatusUtils.formatDateTime(incident.startedAt, locale.value),
  })
}

/**
 * Tracks the opening of a provider page from the board.
 * @param {DibodevHostingProviderKey} key - The provider.
 * @returns {void}
 */
function trackProviderClick(key: DibodevHostingProviderKey): void {
  track(TRACKING_EVENTS.hostingStatusProviderClicked, {
    location: props.trackingLocation,
    provider: key,
    state: snapshot.value ? providerState(key) : null,
  })
}
</script>
