<template>
  <DashboardPage title="Requêtes Google" icon="trending-up">
    <template #actions>
      <DashboardButton variant="outline" size="sm" icon="download" :disabled="!data" @click="exportJson">
        <span class="max-sm:hidden">Exporter en JSON</span>
      </DashboardButton>
    </template>

    <template #toolbar>
      <DashboardSegmented v-model="period" :options="PERIOD_OPTIONS" screen-reader-label="Période" />
      <span v-if="data" class="text-muted text-[13px] @max-4xl/page:order-last @max-4xl/page:w-full">{{
        rangeLabel
      }}</span>
      <div class="ml-auto flex items-center gap-2">
        <span class="text-muted inline-flex items-center gap-1.5 text-[13px] @max-4xl/page:hidden">
          <DashboardIcon name="clock" :size="14" />
          Google finalise ses données à J-3
        </span>
        <DashboardButton
          variant="ghost"
          square
          icon="refresh-cw"
          :loading="isLoadingPeriod"
          aria-label="Actualiser"
          data-tip="Actualiser"
          @click="loadPeriodData(true)"
        />
      </div>
    </template>

    <div
      v-if="entry && !entry.data.gscConnected"
      class="flex gap-3 rounded-xl bg-(--dash-amber-tint) p-4 text-sm text-(--dash-amber)"
      role="alert"
    >
      <DashboardIcon name="triangle-alert" :size="18" class="mt-0.5" />
      <p>
        Google Search Console n’est pas connecté. Ajoute <code class="dash-mono">GSC_SERVICE_ACCOUNT_JSON</code> (ou le
        refresh token OAuth) dans le <code class="dash-mono">.env</code>, avec l’accès à la propriété
        <code class="dash-mono">sc-domain:dibodev.fr</code>.
      </p>
    </div>
    <p v-if="error" class="flex items-center gap-2 text-sm text-(--dash-red)" role="alert">
      <DashboardIcon name="circle-alert" :size="16" />
      {{ error }}
    </p>

    <DashboardKpiBand :kpis="kpis" :loading="isLoadingPeriod" />

    <DashboardCard :title="chartTitle" :description="chartDescription">
      <div class="px-3 pt-2 pb-4 sm:px-5">
        <DashboardTrendChart
          v-if="chartPoints.length > 0"
          :points="chartPoints"
          :weekly="isTrendWeekly"
          :markers="markers"
        />
        <div v-else class="dash-skeleton h-[280px] w-full" />
      </div>
    </DashboardCard>

    <section id="opportunites" ref="opportunitiesSection" class="flex scroll-mt-4 flex-col gap-4">
      <div>
        <h2 class="text-[19px] font-medium tracking-[-0.01em] text-gray-100">Opportunités</h2>
        <p class="text-muted mt-1 text-[13.5px]">
          Le site apparaît déjà sur ces requêtes. Chaque colonne dit quoi faire.
        </p>
      </div>
      <div class="grid items-start gap-5 @4xl:grid-cols-3">
        <DashboardCard v-for="group in opportunityGroups" :key="group.key">
          <div class="flex items-center gap-2.5 px-4 pt-4 sm:px-[18px]">
            <span class="h-2 w-2 rounded-full" :class="DASHBOARD_TONES[group.tone].dot" aria-hidden="true" />
            <h3 class="text-[15.5px] font-medium text-gray-100">{{ group.title }}</h3>
            <span class="text-muted ml-auto text-sm tabular-nums">{{ group.items.length }}</span>
          </div>
          <p class="text-muted px-4 pt-2 text-[13px] leading-snug sm:px-[18px]">{{ group.hint }}</p>
          <ul v-if="group.items.length > 0" class="mt-3 px-2 pb-2">
            <li
              v-for="(item, index) in group.items"
              :key="item.key"
              class="flex items-center gap-2.5 rounded-lg transition-colors hover:bg-(--dash-row-hover)"
              :class="{ 'border-t border-(--dash-line-soft)': index > 0 }"
            >
              <button
                type="button"
                class="min-w-0 flex-1 cursor-pointer px-2.5 py-2.5 text-left"
                @click="openQuery(item.key)"
              >
                <span class="block truncate text-sm font-medium text-gray-100">{{ item.key }}</span>
                <span class="text-muted mt-0.5 block text-xs tabular-nums">{{ opportunityMeta(item, group.key) }}</span>
              </button>
              <span
                v-if="group.key === 'working'"
                class="mr-2.5 rounded-md bg-(--dash-green-tint) px-2 py-1 text-[12.5px] font-medium whitespace-nowrap text-(--dash-green) tabular-nums"
              >
                {{ DashboardFormatUtils.plural(item.clicks, 'clic') }}
              </span>
              <DashboardButton
                v-else-if="group.key === 'almost'"
                variant="ghost"
                size="sm"
                square
                icon="pen-line"
                class="mr-1.5"
                :to="localePath({ path: DASHBOARD_EDITOR_PATH, query: { new: '1', idea: item.key } })"
                :aria-label="`Écrire un article sur « ${item.key} »`"
                data-tip="Écrire un article sur cette requête"
              />
            </li>
          </ul>
          <p v-else class="text-muted px-4 pt-3 pb-5 text-[13px] sm:px-[18px]">Rien sur cette période.</p>
        </DashboardCard>
      </div>
    </section>

    <DashboardCard>
      <div class="flex flex-wrap items-center gap-x-3 border-b border-(--dash-line-soft) px-3 sm:px-5">
        <DashboardTabs
          v-model="detailTab"
          :items="detailTabs"
          screen-reader-label="Détail"
          class="min-w-0 @max-3xl:w-full"
        />
        <DashboardSearchInput
          v-model="filter"
          id="search-performance-filter"
          :placeholder="DETAIL_PLACEHOLDERS[detailTab as DashboardSearchDetailTab]"
          class="w-full pb-2.5 @3xl:ml-auto @3xl:w-[240px] @3xl:pb-0"
        />
      </div>

      <table class="dash-table @max-xl:hidden">
        <thead>
          <tr>
            <th
              v-for="column in COLUMNS"
              :key="column.key"
              :class="[column.key === 'key' ? '' : 'is-right', { 'dash-col-sm': column.key === 'ctr' }]"
            >
              <button
                type="button"
                class="inline-flex cursor-pointer items-center gap-1 uppercase hover:text-gray-100"
                :aria-sort="sortKey === column.key ? (sortDirection < 0 ? 'descending' : 'ascending') : 'none'"
                @click="toggleSort(column.key)"
              >
                {{ column.key === 'key' ? DETAIL_LABELS[detailTab as DashboardSearchDetailTab] : column.label }}
                <DashboardIcon
                  v-if="sortKey === column.key"
                  :name="sortDirection < 0 ? 'arrow-down' : 'arrow-up'"
                  :size="12"
                />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="row in pagedRows"
            :key="row.key"
            class="is-clickable"
            :class="{ 'is-selected': openedItemKey === row.key }"
            @click="openRow(row)"
          >
            <td class="dash-col-main">
              <span
                class="block truncate font-medium text-gray-100"
                :class="{ 'dash-mono text-[13px]': detailTab === 'pages' }"
              >
                {{ rowLabel(row) }}
              </span>
            </td>
            <td class="is-right tabular-nums">
              <span :class="row.clicks > 0 ? 'font-medium text-gray-100' : 'text-muted'">{{ row.clicks }}</span>
            </td>
            <td class="is-right">
              <span class="inline-flex items-center gap-2.5">
                <span class="tabular-nums">{{ DashboardFormatUtils.formatNumber(row.impressions) }}</span>
                <DashboardMeter :value="row.impressions" :max="maxImpressions" class="dash-col-sm" />
              </span>
            </td>
            <td class="is-right dash-col-sm whitespace-nowrap tabular-nums">
              {{ DashboardFormatUtils.formatPercent(row.ctr, 1) }} %
            </td>
            <td class="is-right"><DashboardPositionBadge :position="row.position" /></td>
          </tr>
          <tr v-if="pagedRows.length === 0">
            <td colspan="5" class="text-muted py-10 text-center">{{ emptyLabel }}</td>
          </tr>
        </tbody>
      </table>

      <ul class="@xl:hidden">
        <DashboardListRow
          v-for="row in pagedRows"
          :key="row.key"
          :is-selected="openedItemKey === row.key"
          @select="openRow(row)"
        >
          <span class="min-w-0 flex-1">
            <span
              class="block truncate text-sm font-medium text-gray-100"
              :class="{ 'dash-mono text-[13px]': detailTab === 'pages' }"
            >
              {{ rowLabel(row) }}
            </span>
            <span class="text-muted mt-0.5 block text-xs tabular-nums">
              {{ DashboardFormatUtils.formatNumber(row.impressions) }} impr. ·
              {{ DashboardFormatUtils.plural(row.clicks, 'clic') }} ·
              {{ DashboardFormatUtils.formatPercent(row.ctr, 1) }} %
            </span>
          </span>
          <DashboardPositionBadge :position="row.position" />
        </DashboardListRow>
        <li v-if="pagedRows.length === 0" class="text-muted px-4 py-10 text-center text-sm">{{ emptyLabel }}</li>
      </ul>

      <template #footer>
        <span class="tabular-nums">{{ countLabel }}</span>
        <span v-if="pageCount > 1" class="inline-flex items-center gap-1">
          <DashboardButton
            variant="ghost"
            size="sm"
            square
            icon="chevron-left"
            aria-label="Page précédente"
            :disabled="page === 1"
            @click="page -= 1"
          />
          <span class="min-w-[52px] text-center text-xs tabular-nums">{{ page }} / {{ pageCount }}</span>
          <DashboardButton
            variant="ghost"
            size="sm"
            square
            icon="chevron-right"
            aria-label="Page suivante"
            :disabled="page === pageCount"
            @click="page += 1"
          />
        </span>
      </template>
    </DashboardCard>
  </DashboardPage>
</template>

<script lang="ts" setup>
import type { UseDashboardToastReturn } from '~/composables/useDashboardToast'
import type { UseDashboardSearchPerformanceReturn } from '~/composables/useDashboardSearchPerformance'
import type { UseDashboardIndexingReturn } from '~/composables/useDashboardIndexing'
import type { UseDashboardDrawerReturn } from '~/composables/useDashboardDrawer'
import type { UseDashboardArticlesReturn } from '~/composables/useDashboardArticles'
import type {
  DashboardSearchDetailTab,
  DashboardSearchOpportunityGroup,
  DashboardSearchSortKey,
} from '~/core/types/DashboardSearchPerformancePage'
import type { ComputedRef, Ref } from 'vue'
import type { DashboardKpi, DashboardSegmentOption, DashboardTabItem } from '~/core/types/Dashboard'
import type { DashboardChartMarker } from '~/core/types/DashboardTrendChart'
import type { SearchPerformanceCacheEntry } from '~/composables/useDashboardSearchPerformance'
import type { SearchOpportunities } from '~/core/utils/DashboardSearchUtils'
import type {
  SearchPerformanceEntry,
  SearchPerformancePeriod,
  SearchPerformanceResponse,
  SearchPerformanceTrendPoint,
} from '~~/server/types/dashboard/searchPerformance'
import type { IndexingStatusRow } from '~~/server/types/indexing'
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import DashboardPage from '~/components/dashboard/shell/DashboardPage.vue'
import DashboardTrendChart from '~/components/dashboard/charts/DashboardTrendChart.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardCard from '~/components/dashboard/ui/DashboardCard.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardListRow from '~/components/dashboard/ui/DashboardListRow.vue'
import DashboardKpiBand from '~/components/dashboard/ui/DashboardKpiBand.vue'
import DashboardMeter from '~/components/dashboard/ui/DashboardMeter.vue'
import DashboardPositionBadge from '~/components/dashboard/ui/DashboardPositionBadge.vue'
import DashboardSearchInput from '~/components/dashboard/ui/DashboardSearchInput.vue'
import DashboardSegmented from '~/components/dashboard/ui/DashboardSegmented.vue'
import DashboardTabs from '~/components/dashboard/ui/DashboardTabs.vue'
import { DASHBOARD_EDITOR_PATH } from '~/core/constants/dashboardNavigation'
import { DASHBOARD_TONES } from '~/core/constants/dashboardTones'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'
import { DashboardSearchUtils } from '~/core/utils/DashboardSearchUtils'
import { SeoDisplayUtils } from '~/core/utils/SeoDisplayUtils'
import { useDashboardArticles } from '~/composables/useDashboardArticles'
import { useDashboardDrawer } from '~/composables/useDashboardDrawer'
import { useDashboardIndexing } from '~/composables/useDashboardIndexing'
import { useDashboardSearchPerformance } from '~/composables/useDashboardSearchPerformance'
import { useDashboardToast } from '~/composables/useDashboardToast'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Requêtes Google · Dibodev Admin',
})

const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const route: ReturnType<typeof useRoute> = useRoute()

const { cache, loadingPeriods, errors, loadSearchPerformance }: UseDashboardSearchPerformanceReturn =
  useDashboardSearchPerformance()

const { rows: articleRows, loadArticles }: UseDashboardArticlesReturn = useDashboardArticles()
const { payload: indexingPayload, loadIndexing }: UseDashboardIndexingReturn = useDashboardIndexing()
const { openedItemKey, openDrawer }: UseDashboardDrawerReturn = useDashboardDrawer()
const { showToast }: UseDashboardToastReturn = useDashboardToast()

const PERIOD_OPTIONS: DashboardSegmentOption[] = [
  { value: '7d', label: '7 jours' },
  { value: '28d', label: '28 jours' },
  { value: '3m', label: '3 mois' },
  { value: '6m', label: '6 mois' },
]

const COLUMNS: Array<{ key: DashboardSearchSortKey; label: string }> = [
  { key: 'key', label: 'Requête' },
  { key: 'clicks', label: 'Clics' },
  { key: 'impressions', label: 'Impressions' },
  { key: 'ctr', label: 'Taux de clic' },
  { key: 'position', label: 'Position' },
]

const DETAIL_LABELS: Record<DashboardSearchDetailTab, string> = {
  queries: 'Requête',
  pages: 'Page',
  countries: 'Pays',
  devices: 'Appareil',
}

const DETAIL_PLACEHOLDERS: Record<DashboardSearchDetailTab, string> = {
  queries: 'Filtrer les requêtes…',
  pages: 'Filtrer les pages…',
  countries: 'Filtrer les pays…',
  devices: 'Filtrer…',
}

const PAGE_SIZE: number = 12
const WEEKLY_THRESHOLD: number = 60

const period: Ref<string> = ref('28d')
const detailTab: Ref<string> = ref('queries')
const filter: Ref<string> = ref('')
const sortKey: Ref<DashboardSearchSortKey> = ref('impressions')
const sortDirection: Ref<number> = ref(-1)
const page: Ref<number> = ref(1)
const opportunitiesSection: Ref<HTMLElement | null> = ref(null)

const periodKey: ComputedRef<SearchPerformancePeriod> = computed(
  (): SearchPerformancePeriod => period.value as SearchPerformancePeriod,
)

const entry: ComputedRef<SearchPerformanceCacheEntry | null> = computed(
  (): SearchPerformanceCacheEntry | null => cache.value[periodKey.value] ?? null,
)

const data: ComputedRef<SearchPerformanceResponse | null> = computed((): SearchPerformanceResponse | null =>
  entry.value?.data.gscConnected ? entry.value.data : null,
)

const isLoadingPeriod: ComputedRef<boolean> = computed((): boolean => loadingPeriods.value.includes(periodKey.value))
const error: ComputedRef<string> = computed((): string => errors.value[periodKey.value] ?? '')

const kpis: ComputedRef<DashboardKpi[]> = computed((): DashboardKpi[] =>
  data.value ? DashboardSearchUtils.buildKpis(data.value) : [],
)

const isTrendWeekly: ComputedRef<boolean> = computed((): boolean => (data.value?.trend.length ?? 0) > WEEKLY_THRESHOLD)

const chartPoints: ComputedRef<SearchPerformanceTrendPoint[]> = computed((): SearchPerformanceTrendPoint[] => {
  const trend: SearchPerformanceTrendPoint[] = data.value?.trend ?? []
  return isTrendWeekly.value ? DashboardSearchUtils.aggregateWeekly(trend) : trend
})

const chartTitle: ComputedRef<string> = computed((): string =>
  isTrendWeekly.value ? 'Impressions et clics par semaine' : 'Impressions et clics par jour',
)

const chartDescription: ComputedRef<string> = computed((): string =>
  markers.value.length > 0
    ? 'Les repères marquent les publications d’articles.'
    : 'Survole ou touche le graphique pour le détail.',
)

const rangeLabel: ComputedRef<string> = computed((): string => {
  const range: SearchPerformanceResponse['range'] | undefined = data.value?.range
  if (!range) return ''
  return `Du ${DashboardFormatUtils.formatShortDate(range.startDate)} au ${DashboardFormatUtils.formatLongDate(range.endDate)}`
})

const markers: ComputedRef<DashboardChartMarker[]> = computed((): DashboardChartMarker[] => {
  const range: SearchPerformanceResponse['range'] | undefined = data.value?.range
  if (!range) return []
  const byDay: Map<string, string[]> = new Map()
  for (const row of articleRows.value) {
    if (row.status !== 'published' || !row.dateIso) continue
    const day: string = row.dateIso.slice(0, 10)
    if (day < range.startDate || day > range.endDate) continue
    byDay.set(day, [...(byDay.get(day) ?? []), row.title])
  }
  return [...byDay.entries()].map(
    ([date, titles]: [string, string[]]): DashboardChartMarker => ({
      date,
      count: titles.length,
      note:
        titles.length === 1
          ? `Publié : « ${titles[0]} »`
          : `Publiés : ${titles.map((t: string): string => `« ${t} »`).join(', ')}`,
    }),
  )
})

const opportunities: ComputedRef<SearchOpportunities> = computed(
  (): SearchOpportunities => DashboardSearchUtils.buildOpportunities(data.value?.queries ?? []),
)

const opportunityGroups: ComputedRef<DashboardSearchOpportunityGroup[]> = computed(
  (): DashboardSearchOpportunityGroup[] => [
    {
      key: 'recover',
      title: 'À récupérer',
      hint: 'En première page mais presque jamais cliquées : retravaille le titre et la meta description.',
      tone: 'red',
      items: opportunities.value.toRecover,
    },
    {
      key: 'almost',
      title: 'Presque en page 1',
      hint: 'Positions 11 à 20 : un article de renfort peut les faire passer en première page.',
      tone: 'amber',
      items: opportunities.value.almostPageOne,
    },
    {
      key: 'working',
      title: 'Ce qui marche',
      hint: 'Les requêtes qui apportent déjà des clics : à consolider et à décliner.',
      tone: 'green',
      items: opportunities.value.working,
    },
  ],
)

const detailRows: ComputedRef<SearchPerformanceEntry[]> = computed((): SearchPerformanceEntry[] => {
  const source: Record<DashboardSearchDetailTab, SearchPerformanceEntry[]> = {
    queries: data.value?.queries ?? [],
    pages: data.value?.pages ?? [],
    countries: data.value?.countries ?? [],
    devices: data.value?.devices ?? [],
  }
  return source[detailTab.value as DashboardSearchDetailTab]
})

const detailTabs: ComputedRef<DashboardTabItem[]> = computed((): DashboardTabItem[] => [
  { value: 'queries', label: 'Requêtes', count: data.value?.queries.length ?? null },
  { value: 'pages', label: 'Pages', count: data.value?.pages.length ?? null },
  { value: 'countries', label: 'Pays', count: data.value?.countries.length ?? null },
  { value: 'devices', label: 'Appareils', count: data.value?.devices.length ?? null },
])

const filteredRows: ComputedRef<SearchPerformanceEntry[]> = computed((): SearchPerformanceEntry[] => {
  const needle: string = DashboardFormatUtils.toSearchableText(filter.value.trim())
  const rows: SearchPerformanceEntry[] = needle
    ? detailRows.value.filter((row: SearchPerformanceEntry): boolean =>
        DashboardFormatUtils.toSearchableText(rowLabel(row)).includes(needle),
      )
    : detailRows.value
  return [...rows].sort((a: SearchPerformanceEntry, b: SearchPerformanceEntry): number => {
    if (sortKey.value === 'key') return rowLabel(a).localeCompare(rowLabel(b), 'fr') * sortDirection.value
    return (a[sortKey.value] - b[sortKey.value]) * sortDirection.value
  })
})

const pageCount: ComputedRef<number> = computed((): number =>
  Math.max(1, Math.ceil(filteredRows.value.length / PAGE_SIZE)),
)

const pagedRows: ComputedRef<SearchPerformanceEntry[]> = computed((): SearchPerformanceEntry[] =>
  filteredRows.value.slice((page.value - 1) * PAGE_SIZE, page.value * PAGE_SIZE),
)

const maxImpressions: ComputedRef<number> = computed((): number =>
  Math.max(1, ...detailRows.value.map((row: SearchPerformanceEntry): number => row.impressions)),
)

const countLabel: ComputedRef<string> = computed((): string => {
  const total: number = filteredRows.value.length
  if (total === 0) return '0 ligne'
  const start: number = (page.value - 1) * PAGE_SIZE + 1
  const end: number = Math.min(total, page.value * PAGE_SIZE)
  return `${start}–${end} sur ${DashboardFormatUtils.formatNumber(total)}`
})

const emptyLabel: ComputedRef<string> = computed((): string =>
  filter.value
    ? `Aucune ligne ne contient « ${filter.value} ».`
    : isLoadingPeriod.value
      ? 'Chargement…'
      : 'Aucune donnée sur la période.',
)

/**
 * Readable label of a row (path for pages, country and device names).
 *
 * @param {SearchPerformanceEntry} row - The row.
 * @returns {string} The label.
 */
function rowLabel(row: SearchPerformanceEntry): string {
  if (detailTab.value === 'pages') {
    try {
      return new URL(row.key).pathname
    } catch {
      return row.key
    }
  }
  if (detailTab.value === 'countries')
    return `${SeoDisplayUtils.countryFlag(row.key)} ${SeoDisplayUtils.countryName(row.key)}`
  if (detailTab.value === 'devices') return SeoDisplayUtils.deviceLabel(row.key)
  return row.key
}

/**
 * Secondary line of an opportunity.
 *
 * @param {SearchPerformanceEntry} item - The query.
 * @param {DashboardSearchOpportunityGroup['key']} group - Its column.
 * @returns {string} Impressions, position and click-through rate.
 */
function opportunityMeta(item: SearchPerformanceEntry, group: DashboardSearchOpportunityGroup['key']): string {
  const position: string = `pos. ${DashboardFormatUtils.formatNumber(item.position, 1)}`
  if (group === 'working') return position
  const impressions: string = `${DashboardFormatUtils.formatNumber(item.impressions)} impr.`
  if (group === 'almost') return `${impressions} · ${position}`
  return `${impressions} · ${position} · ${DashboardFormatUtils.formatPercent(item.ctr, 1)} %`
}

/**
 * Sorts by a column, toggling the direction on the same column.
 *
 * @param {DashboardSearchSortKey} key - Column to sort by.
 * @returns {void}
 */
function toggleSort(key: DashboardSearchSortKey): void {
  if (sortKey.value === key) sortDirection.value = -sortDirection.value
  else {
    sortKey.value = key
    sortDirection.value = key === 'key' || key === 'position' ? 1 : -1
  }
}

/**
 * Opens the drawer of a query.
 *
 * @param {string} query - The query.
 * @returns {void}
 */
function openQuery(query: string): void {
  openDrawer({ kind: 'query', query, period: periodKey.value })
}

/**
 * Opens a row: query drawer, indexing drawer for a known page, nothing for countries and devices.
 *
 * @param {SearchPerformanceEntry} row - The clicked row.
 * @returns {void}
 */
function openRow(row: SearchPerformanceEntry): void {
  if (detailTab.value === 'queries') {
    openQuery(row.key)
    return
  }
  if (detailTab.value !== 'pages') return
  const known: IndexingStatusRow | undefined = indexingPayload.value?.items.find(
    (item: IndexingStatusRow): boolean => item.url === row.key,
  )
  if (known) openDrawer({ kind: 'indexing', url: known.url, browseUrls: [known.url] })
  else window.open(row.key, '_blank', 'noopener')
}

/**
 * Loads the selected period.
 *
 * @param {boolean} force - Bypass the session cache.
 * @returns {Promise<void>}
 */
async function loadPeriodData(force: boolean): Promise<void> {
  await loadSearchPerformance(periodKey.value, force)
  if (force && !errors.value[periodKey.value]) {
    showToast({ tone: 'green', icon: 'refresh-cw', title: 'Données à jour', text: 'Search Console relu à l’instant.' })
  }
}

/**
 * Downloads the payload of the period as JSON (for the weekly review).
 *
 * @returns {void}
 */
function exportJson(): void {
  if (!data.value) return
  const blob: Blob = new Blob([JSON.stringify(data.value, null, 2)], { type: 'application/json' })
  const url: string = URL.createObjectURL(blob)
  const link: HTMLAnchorElement = document.createElement('a')
  link.href = url
  link.download = `dibodev-gsc-${periodKey.value}-${data.value.range.endDate}.json`
  link.click()
  URL.revokeObjectURL(url)
  showToast({ tone: 'green', icon: 'download', title: 'Export prêt', text: link.download })
}

watch(period, (): void => {
  page.value = 1
  loadPeriodData(false).catch((): void => undefined)
})

watch([detailTab, filter], (): void => {
  page.value = 1
})

onMounted((): void => {
  loadPeriodData(false)
    .then(async (): Promise<void> => {
      if (route.query.focus !== 'opportunities') return
      await nextTick()
      opportunitiesSection.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    .catch((): void => undefined)
  loadArticles().catch((): void => undefined)
  loadIndexing().catch((): void => undefined)
})
</script>
