<template>
  <section
    class="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-gray-300 bg-gray-300 @3xl:grid-cols-4"
    aria-label="Chiffres clés"
  >
    <template v-if="props.loading && props.kpis.length === 0">
      <div v-for="index in 4" :key="index" class="flex flex-col gap-3 bg-white px-4 pt-4 pb-4 sm:px-5 sm:pt-[18px]">
        <span class="dash-skeleton h-3 w-24" />
        <span class="dash-skeleton h-8 w-28" />
        <span class="dash-skeleton h-5 w-32" />
      </div>
    </template>
    <div
      v-for="kpi in props.kpis"
      v-else
      :key="kpi.key"
      class="flex min-w-0 flex-col bg-white px-4 pt-4 sm:px-5 sm:pt-[18px]"
    >
      <p class="dash-label">{{ kpi.label }}</p>
      <p
        class="mt-2.5 text-[26px] leading-none font-medium tracking-[-0.02em] text-gray-100 tabular-nums sm:mt-3 sm:text-[32px]"
      >
        {{ kpi.value
        }}<small v-if="kpi.unit" class="text-muted ml-0.5 text-lg leading-none font-normal tracking-normal">{{
          kpi.unit
        }}</small>
      </p>
      <div class="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px]">
        <DashboardDeltaBadge :delta="kpi.delta" empty-label="Pas de comparaison" />
        <span class="text-muted max-sm:hidden">{{ kpi.comparisonLabel }}</span>
      </div>
      <div class="-mx-4 mt-3 sm:-mx-5">
        <DashboardSparkline
          v-if="kpi.spark.length > 1"
          :values="kpi.spark"
          :variant="kpi.sparkStyle"
          :color="props.sparkColor"
        />
        <div v-else class="h-11" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DashboardKpi } from '~/core/types/Dashboard'
import type { DashboardKpiBandProps } from '~/core/types/DashboardKpiBand'
import DashboardDeltaBadge from '~/components/dashboard/ui/DashboardDeltaBadge.vue'
import DashboardSparkline from '~/components/dashboard/charts/DashboardSparkline.vue'

const props: DashboardKpiBandProps = defineProps({
  kpis: {
    type: Array as PropType<DashboardKpi[]>,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  sparkColor: {
    type: String,
    default: '#1f9d63',
  },
})
</script>
