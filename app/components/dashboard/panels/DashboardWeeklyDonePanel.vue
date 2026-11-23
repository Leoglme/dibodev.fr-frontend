<template>
  <div class="flex flex-col gap-5 @2xl/page:gap-6">
    <div>
      <p class="dash-label">
        Point {{ props.openedPoint.id }} · {{ WeeklyPointUtils.formatLongDay(props.openedPoint.date, false) }}
      </p>
      <h2 class="mt-1.5 text-[22px] font-medium tracking-[-0.02em] text-gray-100 @2xl/page:text-2xl">{{ title }}</h2>
    </div>

    <div v-if="doneGroups.length > 0" class="grid grid-cols-1 items-start gap-4 @5xl/page:grid-cols-2">
      <DashboardCard v-for="group in doneGroups" :key="group.kind">
        <div class="flex items-center gap-2.5 px-4 pt-4 pb-2.5 @2xl/page:px-[22px] @2xl/page:pt-[18px]">
          <DashboardIconTile :icon="group.icon" :tone="group.tone" size="md" />
          <h3 class="min-w-0 flex-1 text-[15px] font-medium text-gray-100">{{ group.label }}</h3>
          <span class="rounded-full bg-gray-600 px-[7px] py-px text-[11.5px] font-medium text-gray-200 tabular-nums">
            {{ group.entries.length }}
          </span>
        </div>
        <ul>
          <li
            v-for="(doneEntry, entryIndex) in group.entries"
            :key="entryIndex"
            class="flex items-center gap-3.5 border-t border-(--dash-line-soft) px-4 py-3 @2xl/page:px-[22px]"
          >
            <div class="min-w-0 flex-1">
              <p class="text-sm font-medium text-gray-100">{{ doneEntry.title }}</p>
              <p v-if="doneEntry.detail" class="text-muted mt-px text-[13px]">{{ doneEntry.detail }}</p>
            </div>
            <a
              v-if="doneEntry.webUrl"
              :href="doneEntry.webUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary-dark hover:border-primary grid h-11 w-11 shrink-0 place-items-center rounded-[10px] border border-gray-300 transition-colors duration-150"
              :aria-label="`Ouvrir « ${doneEntry.title} » dans un nouvel onglet`"
              data-tip="Ouvrir la page"
            >
              <DashboardIcon name="arrow-up-right" :size="17" :stroke-width="2" />
            </a>
          </li>
        </ul>
      </DashboardCard>
    </div>
    <DashboardEmptyState
      v-else
      icon="list-checks"
      title="Rien de noté pour ce point"
      text="Les pages, articles, mises à jour et démarches du point apparaîtront ici."
    />
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DashboardWeeklyDonePanelProps } from '~/core/types/DashboardWeeklyDonePanel'
import type { DashboardWeeklyPoint } from '~/core/types/DashboardWeeklyPoint'
import type { DashboardWeeklyDoneGroup } from '~/core/types/DashboardWeeklyPointsPage'
import { computed } from 'vue'
import DashboardCard from '~/components/dashboard/ui/DashboardCard.vue'
import DashboardEmptyState from '~/components/dashboard/ui/DashboardEmptyState.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardIconTile from '~/components/dashboard/ui/DashboardIconTile.vue'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'
import { WeeklyPointUtils } from '~/core/utils/WeeklyPointUtils'

/** What was done during a weekly point, grouped by kind. */
const props: DashboardWeeklyDonePanelProps = defineProps({
  openedPoint: {
    type: Object as PropType<DashboardWeeklyPoint>,
    required: true,
  },
})

const doneGroups: ComputedRef<DashboardWeeklyDoneGroup[]> = computed((): DashboardWeeklyDoneGroup[] =>
  WeeklyPointUtils.groupDoneItems(props.openedPoint.doneItems),
)

const title: ComputedRef<string> = computed(
  (): string =>
    `${DashboardFormatUtils.plural(props.openedPoint.doneItems.length, 'chose faite', 'choses faites')} lors de ce point`,
)
</script>
