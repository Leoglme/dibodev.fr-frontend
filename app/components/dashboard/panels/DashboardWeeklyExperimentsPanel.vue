<template>
  <div class="flex flex-col gap-5 @2xl/page:gap-6">
    <div>
      <p class="dash-label">Tests en cours au point {{ props.openedPoint.id }}</p>
      <h2 class="mt-1.5 text-[22px] font-medium tracking-[-0.02em] text-gray-100 @2xl/page:text-2xl">{{ title }}</h2>
    </div>

    <div
      v-if="props.openedPoint.experiments.length > 0"
      class="grid grid-cols-1 items-start gap-4 @3xl/page:grid-cols-2 @6xl/page:grid-cols-3"
    >
      <DashboardCard v-for="(experiment, experimentIndex) in props.openedPoint.experiments" :key="experimentIndex">
        <div class="flex flex-col gap-3 px-4 py-4 @2xl/page:px-5 @2xl/page:py-[18px]">
          <DashboardBadge tone="amber" icon="clock" class="self-start">{{ experiment.deadlineLabel }}</DashboardBadge>
          <div>
            <h3 class="text-[15.5px] font-medium text-gray-100">{{ experiment.name }}</h3>
            <p class="mt-[3px] text-[13px] text-gray-200">{{ experiment.stopRule }}</p>
          </div>
          <ul v-if="experiment.progress && experiment.progress.length > 0" class="flex flex-col gap-2.5">
            <li
              v-for="(progress, progressIndex) in experiment.progress"
              :key="progressIndex"
              class="flex flex-col gap-1.5"
            >
              <p class="flex gap-3 text-[13px] text-gray-100">
                <span class="min-w-0 flex-1">{{ progress.label }}</span>
                <span class="tabular-nums">
                  <span class="font-medium">{{ DashboardFormatUtils.formatNumber(progress.value) }}</span>
                  <span class="text-muted"> sur {{ DashboardFormatUtils.formatNumber(progress.goal) }}</span>
                </span>
              </p>
              <span class="block h-2 overflow-hidden rounded bg-gray-600" aria-hidden="true">
                <span
                  class="block h-full rounded bg-(--dash-chart-average)"
                  :style="{ width: `${WeeklyPointUtils.buildExperimentProgressPercent(progress)}%` }"
                />
              </span>
            </li>
          </ul>
          <p v-else class="text-muted text-[13px]">Pas encore de relevé.</p>
        </div>
      </DashboardCard>
    </div>
    <DashboardEmptyState
      v-else
      icon="circle-check"
      title="Aucun test en cours"
      text="Les paris lancés lors d’un point apparaîtront ici avec leur échéance et leur règle d’arrêt."
    />
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DashboardWeeklyExperimentsPanelProps } from '~/core/types/DashboardWeeklyExperimentsPanel'
import type { DashboardWeeklyPoint } from '~/core/types/DashboardWeeklyPoint'
import { computed } from 'vue'
import DashboardBadge from '~/components/dashboard/ui/DashboardBadge.vue'
import DashboardCard from '~/components/dashboard/ui/DashboardCard.vue'
import DashboardEmptyState from '~/components/dashboard/ui/DashboardEmptyState.vue'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'
import { WeeklyPointUtils } from '~/core/utils/WeeklyPointUtils'

/** Experiments still running at a weekly point: deadline, stop rule and measured progress. */
const props: DashboardWeeklyExperimentsPanelProps = defineProps({
  openedPoint: {
    type: Object as PropType<DashboardWeeklyPoint>,
    required: true,
  },
})

const title: ComputedRef<string> = computed(
  (): string => `${DashboardFormatUtils.plural(props.openedPoint.experiments.length, 'pari')} à juger`,
)
</script>
