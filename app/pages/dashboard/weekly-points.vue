<template>
  <DashboardPage title="Points hebdo" icon="calendar" is-full-bleed>
    <template #actions>
      <DashboardButton
        variant="ghost"
        square
        icon="refresh-cw"
        :loading="isLoadingWeeklyPoints"
        aria-label="Actualiser les points hebdo"
        data-tip="Actualiser"
        @click="reloadWeeklyPoints"
      />
    </template>

    <div v-if="openedPoint" class="flex flex-1 flex-col md:min-h-0">
      <DashboardPointTimeline
        :entries="timelineEntries"
        :opened-point-id="openedPoint.id"
        :compared-point-id="comparedPoint?.id ?? null"
        :is-awaiting-compared-point="isAwaitingComparedPoint"
        @select="onSelectPoint"
      />
      <div class="flex shrink-0 border-b border-(--dash-line-soft) px-4 md:px-6">
        <DashboardTabs
          :model-value="activeTab"
          :items="tabItems"
          screen-reader-label="Parties du point"
          @update:model-value="onSelectTab"
        />
      </div>
      <div
        class="flex-1 px-4 pt-6 pb-10 md:min-h-0 md:overflow-y-auto md:px-6 md:pt-8 md:pb-11"
        role="tabpanel"
        :aria-label="activeTabLabel"
      >
        <div :key="activeTab" class="dash-rise">
          <DashboardWeeklySummaryPanel
            v-if="activeTab === 'resume'"
            :sorted-points="sortedPoints"
            :opened-point="openedPoint"
            :compared-point="comparedPoint"
            :channel-comparisons="channelComparisons"
          />
          <DashboardWeeklyChannelsPanel
            v-else-if="activeTab === 'canaux'"
            :opened-point="openedPoint"
            :compared-point="comparedPoint"
            :channel-comparisons="channelComparisons"
          />
          <DashboardWeeklyDonePanel v-else-if="activeTab === 'fait'" :opened-point="openedPoint" />
          <DashboardWeeklyExperimentsPanel v-else-if="activeTab === 'tests'" :opened-point="openedPoint" />
          <DashboardWeeklyReportPanel
            v-else
            :opened-point="openedPoint"
            :compared-point="comparedPoint"
            :channel-comparisons="channelComparisons"
            @copy="copyReportText"
          />
        </div>
      </div>
    </div>

    <div v-else class="flex-1 px-4 pt-5 pb-8 md:min-h-0 md:overflow-y-auto md:px-6 md:pt-6">
      <div v-if="weeklyPointsError" class="flex flex-col items-center gap-2 px-6 py-12 text-center" role="alert">
        <span class="mb-1 grid h-11 w-11 place-items-center rounded-full bg-(--dash-red-tint) text-(--dash-red)">
          <DashboardIcon name="circle-alert" :size="20" />
        </span>
        <p class="text-[15px] font-medium text-gray-100">{{ weeklyPointsError }}</p>
        <p class="text-muted max-w-sm text-sm">Le serveur n’a pas répondu. Les points eux-mêmes ne sont pas perdus.</p>
        <DashboardButton variant="outline" icon="rotate-cw" class="mt-3 max-md:h-11" @click="reloadWeeklyPoints">
          Réessayer
        </DashboardButton>
      </div>
      <div
        v-else-if="isLoadingWeeklyPoints || !weeklyPointsFile"
        class="flex flex-col gap-5 md:gap-6"
        aria-busy="true"
        aria-label="Chargement des points hebdo"
      >
        <div class="flex gap-2 overflow-hidden">
          <span v-for="index in 8" :key="index" class="dash-skeleton h-14 min-w-[70px] flex-1" />
        </div>
        <span class="dash-skeleton h-9 w-full max-w-[560px]" />
        <div class="grid grid-cols-2 gap-2.5 @2xl/page:gap-4 @4xl/page:grid-cols-4">
          <span v-for="index in 4" :key="index" class="dash-skeleton h-[150px]" />
        </div>
        <div class="grid gap-4 @5xl/page:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <span class="dash-skeleton h-[280px]" />
          <span class="dash-skeleton h-[280px]" />
        </div>
      </div>
      <DashboardEmptyState
        v-else
        icon="calendar"
        title="Aucun point hebdo pour l’instant"
        text="Le premier point apparaîtra ici dès qu’il sera enregistré."
      />
    </div>
  </DashboardPage>
</template>

<script lang="ts" setup>
import type { ComputedRef, Ref } from 'vue'
import type { UseDashboardToastReturn } from '~/composables/useDashboardToast'
import type { UseDashboardWeeklyPointsReturn } from '~/composables/useDashboardWeeklyPoints'
import type { DashboardTabItem } from '~/core/types/Dashboard'
import type { DashboardWeeklyPoint } from '~/core/types/DashboardWeeklyPoint'
import type {
  DashboardPointTimelineEntry,
  DashboardWeeklyChannelComparison,
  DashboardWeeklySelection,
  DashboardWeeklyTabKey,
} from '~/core/types/DashboardWeeklyPointsPage'
import { computed, onMounted, ref } from 'vue'
import DashboardWeeklyChannelsPanel from '~/components/dashboard/panels/DashboardWeeklyChannelsPanel.vue'
import DashboardWeeklyDonePanel from '~/components/dashboard/panels/DashboardWeeklyDonePanel.vue'
import DashboardWeeklyExperimentsPanel from '~/components/dashboard/panels/DashboardWeeklyExperimentsPanel.vue'
import DashboardWeeklyReportPanel from '~/components/dashboard/panels/DashboardWeeklyReportPanel.vue'
import DashboardWeeklySummaryPanel from '~/components/dashboard/panels/DashboardWeeklySummaryPanel.vue'
import DashboardPage from '~/components/dashboard/shell/DashboardPage.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardEmptyState from '~/components/dashboard/ui/DashboardEmptyState.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardPointTimeline from '~/components/dashboard/ui/DashboardPointTimeline.vue'
import DashboardTabs from '~/components/dashboard/ui/DashboardTabs.vue'
import { useDashboardToast } from '~/composables/useDashboardToast'
import { useDashboardWeeklyPoints } from '~/composables/useDashboardWeeklyPoints'
import { DASHBOARD_WEEKLY_DEFAULT_TAB, DASHBOARD_WEEKLY_TABS } from '~/core/constants/dashboardWeeklyPoints'
import { WeeklyPointUtils } from '~/core/utils/WeeklyPointUtils'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Points hebdo · Dibodev Admin',
})

const route: ReturnType<typeof useRoute> = useRoute()
const router: ReturnType<typeof useRouter> = useRouter()

const { weeklyPointsFile, isLoadingWeeklyPoints, weeklyPointsError, loadWeeklyPoints }: UseDashboardWeeklyPointsReturn =
  useDashboardWeeklyPoints()
const { showToast }: UseDashboardToastReturn = useDashboardToast()

const isAwaitingComparedPoint: Ref<boolean> = ref(false)

const sortedPoints: ComputedRef<DashboardWeeklyPoint[]> = computed((): DashboardWeeklyPoint[] =>
  WeeklyPointUtils.sortPoints(weeklyPointsFile.value?.points ?? []),
)

const selection: ComputedRef<DashboardWeeklySelection> = computed(
  (): DashboardWeeklySelection =>
    WeeklyPointUtils.resolveSelection(
      sortedPoints.value,
      readQueryText(route.query.point),
      readQueryText(route.query.vs),
    ),
)

const openedPoint: ComputedRef<DashboardWeeklyPoint | null> = computed(
  (): DashboardWeeklyPoint | null => selection.value.openedPoint,
)

const comparedPoint: ComputedRef<DashboardWeeklyPoint | null> = computed(
  (): DashboardWeeklyPoint | null => selection.value.comparedPoint,
)

const activeTab: ComputedRef<DashboardWeeklyTabKey> = computed((): DashboardWeeklyTabKey => {
  const requestedTab: string = readQueryText(route.query.tab)
  return (
    DASHBOARD_WEEKLY_TABS.find((tab: (typeof DASHBOARD_WEEKLY_TABS)[number]): boolean => tab.value === requestedTab)
      ?.value ?? DASHBOARD_WEEKLY_DEFAULT_TAB
  )
})

const tabItems: ComputedRef<DashboardTabItem[]> = computed((): DashboardTabItem[] =>
  DASHBOARD_WEEKLY_TABS.map((tab: (typeof DASHBOARD_WEEKLY_TABS)[number]): DashboardTabItem => {
    if (tab.value === 'fait') {
      return { ...tab, count: openedPoint.value?.doneItems.length ?? 0 }
    }
    if (tab.value === 'tests') {
      return { ...tab, count: openedPoint.value?.experiments.length ?? 0 }
    }
    return tab
  }),
)

const activeTabLabel: ComputedRef<string> = computed(
  (): string => tabItems.value.find((tab: DashboardTabItem): boolean => tab.value === activeTab.value)?.label ?? '',
)

const timelineEntries: ComputedRef<DashboardPointTimelineEntry[]> = computed((): DashboardPointTimelineEntry[] =>
  WeeklyPointUtils.buildTimelineEntries(sortedPoints.value),
)

const channelComparisons: ComputedRef<DashboardWeeklyChannelComparison[]> = computed(
  (): DashboardWeeklyChannelComparison[] =>
    openedPoint.value ? WeeklyPointUtils.buildChannelComparisons(openedPoint.value, comparedPoint.value) : [],
)

/**
 * Reads one parameter of the address as text.
 *
 * @param {unknown} queryValue - Raw value of the parameter (text, list or nothing).
 * @returns {string} The text, empty when the parameter is absent or repeated.
 */
function readQueryText(queryValue: unknown): string {
  return typeof queryValue === 'string' ? queryValue : ''
}

/**
 * Writes the opened point, the compared point and the tab in the address, as a new history entry.
 *
 * @param {string} pointId - Id of the opened point.
 * @param {string | null} comparedPointId - Id of the compared point, null when there is none.
 * @param {DashboardWeeklyTabKey} tab - The tab shown.
 * @returns {void}
 */
function showInAddress(pointId: string, comparedPointId: string | null, tab: DashboardWeeklyTabKey): void {
  router
    .push({
      query: {
        point: pointId,
        ...(comparedPointId ? { vs: comparedPointId } : {}),
        ...(tab === DASHBOARD_WEEKLY_DEFAULT_TAB ? {} : { tab }),
      },
    })
    .catch((): void => undefined)
}

/**
 * Handles a click in the timeline: the first click opens a point, the next one on another point picks the comparison.
 *
 * @param {string} pointId - Id of the clicked point.
 * @returns {void}
 */
function onSelectPoint(pointId: string): void {
  if (!openedPoint.value) {
    return
  }
  if (pointId === openedPoint.value.id) {
    isAwaitingComparedPoint.value = !isAwaitingComparedPoint.value && sortedPoints.value.length > 1
    return
  }
  if (isAwaitingComparedPoint.value) {
    isAwaitingComparedPoint.value = false
    showInAddress(openedPoint.value.id, pointId, activeTab.value)
    return
  }
  const defaultSelection: DashboardWeeklySelection = WeeklyPointUtils.resolveSelection(sortedPoints.value, pointId, '')

  isAwaitingComparedPoint.value = true
  showInAddress(pointId, defaultSelection.comparedPoint?.id ?? null, activeTab.value)
}

/**
 * Shows another tab of the opened point.
 *
 * @param {string} tabValue - Value of the clicked tab.
 * @returns {void}
 */
function onSelectTab(tabValue: string): void {
  const selectedTab: DashboardWeeklyTabKey | undefined = DASHBOARD_WEEKLY_TABS.find(
    (tab: (typeof DASHBOARD_WEEKLY_TABS)[number]): boolean => tab.value === tabValue,
  )?.value

  if (!selectedTab || !openedPoint.value) {
    return
  }
  showInAddress(openedPoint.value.id, comparedPoint.value?.id ?? null, selectedTab)
}

/**
 * Copies the report of the opened point as plain text.
 *
 * @returns {void}
 */
function copyReportText(): void {
  if (!openedPoint.value) {
    return
  }
  const pointId: string = openedPoint.value.id

  navigator.clipboard
    .writeText(WeeklyPointUtils.buildReportText(openedPoint.value, comparedPoint.value))
    .then((): void =>
      showToast({
        tone: 'ink',
        icon: 'copy-check',
        title: 'Compte rendu copié',
        text: `Le texte du point ${pointId} est prêt à coller.`,
      }),
    )
    .catch((): void =>
      showToast({ tone: 'red', title: 'Copie impossible', text: 'Le navigateur a refusé l’accès au presse-papiers.' }),
    )
}

/**
 * Reads the weekly points again, bypassing the session cache.
 *
 * @returns {Promise<void>}
 */
async function reloadWeeklyPoints(): Promise<void> {
  await loadWeeklyPoints(true)

  if (weeklyPointsError.value && weeklyPointsFile.value) {
    showToast({ tone: 'red', title: weeklyPointsError.value, text: 'Les points affichés sont ceux déjà chargés.' })
  }
}

onMounted((): void => {
  loadWeeklyPoints().catch((): void => undefined)
})
</script>
