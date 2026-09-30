<template>
  <DashboardDrawerFrame :title="props.query" :subtitle="`Requête Google · ${periodLabel}`" @close="closeDrawer">
    <template v-if="entry">
      <div class="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-gray-300 bg-gray-300">
        <div class="bg-white p-4">
          <p class="dash-label">Impressions</p>
          <p class="mt-2 text-2xl font-medium tracking-[-0.02em] text-gray-100 tabular-nums">
            {{ DashboardFormatUtils.formatNumber(entry.impressions) }}
          </p>
        </div>
        <div class="bg-white p-4">
          <p class="dash-label">Clics</p>
          <p class="mt-2 text-2xl font-medium tracking-[-0.02em] text-gray-100 tabular-nums">{{ entry.clicks }}</p>
        </div>
        <div class="bg-white p-4">
          <p class="dash-label">Taux de clic</p>
          <p class="mt-2 text-2xl font-medium tracking-[-0.02em] text-gray-100 tabular-nums">
            {{ DashboardFormatUtils.formatPercent(entry.ctr, 1)
            }}<small class="text-muted ml-0.5 text-base leading-none font-normal">%</small>
          </p>
        </div>
        <div class="bg-white p-4">
          <p class="dash-label">Position moyenne</p>
          <div class="mt-2"><DashboardPositionBadge :position="entry.position" /></div>
        </div>
      </div>

      <div class="rounded-xl border border-gray-300 p-4">
        <DashboardStatus :tone="verdict.tone" :label="verdict.label" />
        <p class="mt-2 text-[14px] leading-relaxed text-gray-200">{{ verdict.advice }}</p>
      </div>

      <div v-if="relatedPage" class="flex flex-col gap-1.5">
        <p class="dash-label">Page la plus proche de cette requête</p>
        <p class="dash-mono truncate text-[12.5px] text-gray-200">{{ relatedPage }}</p>
      </div>
    </template>
    <DashboardEmptyState
      v-else
      icon="trending-up"
      title="Requête absente de cette période"
      text="Elle n’a pas eu d’impression sur la période choisie."
    />

    <template #footer>
      <DashboardButton variant="outline" icon="square-arrow-out-up-right" :href="searchConsoleUrl">
        Search Console
      </DashboardButton>
      <DashboardButton
        variant="primary"
        icon="pen-line"
        :to="localePath({ path: DASHBOARD_EDITOR_PATH, query: { new: '1', idea: props.query } })"
      >
        Écrire un article
      </DashboardButton>
    </template>
  </DashboardDrawerFrame>
</template>

<script lang="ts" setup>
import type { UseDashboardSearchPerformanceReturn } from '~/composables/useDashboardSearchPerformance'
import type { UseDashboardDrawerReturn } from '~/composables/useDashboardDrawer'
import type { DashboardQueryVerdict } from '~/core/types/DashboardQueryDrawer'
import type { ComputedRef, PropType } from 'vue'
import type { DashboardQueryDrawerProps } from '~/core/types/DashboardQueryDrawer'
import type { SearchPerformanceEntry, SearchPerformancePeriod } from '~~/server/types/dashboard/searchPerformance'
import { computed } from 'vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardEmptyState from '~/components/dashboard/ui/DashboardEmptyState.vue'
import DashboardPositionBadge from '~/components/dashboard/ui/DashboardPositionBadge.vue'
import DashboardStatus from '~/components/dashboard/ui/DashboardStatus.vue'
import DashboardDrawerFrame from '~/components/dashboard/overlays/DashboardDrawerFrame.vue'
import { DASHBOARD_EDITOR_PATH } from '~/core/constants/dashboardNavigation'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'
import { DashboardSearchUtils } from '~/core/utils/DashboardSearchUtils'
import { useDashboardDrawer } from '~/composables/useDashboardDrawer'
import { useDashboardSearchPerformance } from '~/composables/useDashboardSearchPerformance'

const props: DashboardQueryDrawerProps = defineProps({
  query: {
    type: String,
    required: true,
  },
  period: {
    type: String as PropType<SearchPerformancePeriod>,
    default: '28d',
  },
})

const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const { cache }: UseDashboardSearchPerformanceReturn = useDashboardSearchPerformance()
const { closeDrawer }: UseDashboardDrawerReturn = useDashboardDrawer()

const entry: ComputedRef<SearchPerformanceEntry | null> = computed(
  (): SearchPerformanceEntry | null =>
    cache.value[props.period]?.data.queries.find((item: SearchPerformanceEntry): boolean => item.key === props.query) ??
    null,
)

const periodLabel: ComputedRef<string> = computed((): string => DashboardSearchUtils.PERIOD_LABELS[props.period])

const verdict: ComputedRef<DashboardQueryVerdict> = computed((): DashboardQueryVerdict => {
  const current: SearchPerformanceEntry | null = entry.value
  if (!current) return { tone: 'neutral', label: 'Pas de données', advice: '' }
  if (current.clicks > 0 && current.position <= 10) {
    return {
      tone: 'green',
      label: 'Ce qui marche',
      advice:
        'La requête apporte déjà des clics. Consolide la page (exemples, FAQ) et décline le sujet dans un article voisin.',
    }
  }
  if (current.position <= 10) {
    return {
      tone: 'red',
      label: 'À récupérer',
      advice:
        'En première page mais presque jamais cliquée : le titre et la meta description ne donnent pas envie. Réécris-les autour de cette requête.',
    }
  }
  if (current.position <= 20) {
    return {
      tone: 'amber',
      label: 'Presque en page 1',
      advice:
        'Positions 11 à 20 : un article de renfort bien relié à la page actuelle peut la faire passer en première page.',
    }
  }
  return {
    tone: 'neutral',
    label: 'Trop loin pour l’instant',
    advice:
      'Au-delà de la deuxième page, les impressions ne mènent à rien. Si le sujet compte, écris un article dédié plutôt que de retoucher une page.',
  }
})

const relatedPage: ComputedRef<string | null> = computed((): string | null => {
  const words: string[] = props.query
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .split(/\s+/)
    .filter((word: string): boolean => word.length > 3)
  const pages: SearchPerformanceEntry[] = cache.value[props.period]?.data.pages ?? []
  const match: SearchPerformanceEntry | undefined = pages.find((page: SearchPerformanceEntry): boolean =>
    words.some((word: string): boolean => page.key.toLowerCase().includes(word)),
  )
  if (!match) return null
  try {
    return new URL(match.key).pathname
  } catch {
    return match.key
  }
})

const searchConsoleUrl: ComputedRef<string> = computed(
  (): string =>
    `https://search.google.com/u/1/search-console/performance/search-analytics?resource_id=sc-domain%3Adibodev.fr&query=!${encodeURIComponent(props.query)}`,
)
</script>
