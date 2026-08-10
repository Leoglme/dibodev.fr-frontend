<template>
  <div class="flex min-w-0 flex-1 flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12">
    <div class="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div class="min-w-0">
        <h1 class="text-2xl font-semibold text-gray-100">Requêtes Google</h1>
        <p class="mt-1 text-gray-200">
          Ce que les gens tapent pour te trouver, ce qui marche et ce qui reste à convertir. Données Search Console.
        </p>
      </div>
      <div class="flex w-full flex-col gap-2 sm:flex-row sm:items-center lg:w-auto">
        <div class="flex w-full rounded-lg border border-gray-600 bg-gray-800 p-1 sm:w-auto">
          <button
            v-for="option in PERIOD_OPTIONS"
            :key="option.value"
            type="button"
            class="flex-1 cursor-pointer rounded-md px-3 py-2 text-center text-sm font-medium transition-colors sm:flex-none sm:py-1.5"
            :class="period === option.value ? 'bg-primary text-white' : 'text-gray-300 hover:text-gray-100'"
            @click="period = option.value"
          >
            {{ option.label }}
          </button>
        </div>
        <DibodevButton class="w-full sm:w-auto" :disabled="loading" @click="load(true)">
          <span
            v-if="loading"
            class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
          />
          {{ loading ? 'Chargement…' : 'Actualiser' }}
        </DibodevButton>
        <DibodevButton class="w-full sm:w-auto" outlined :disabled="!data || !data.gscConnected" @click="exportJson">
          Exporter JSON
        </DibodevButton>
      </div>
    </div>

    <DibodevAlert v-if="error" :message="error" variant="error" dismissible @hide="error = ''" />

    <div
      v-if="data && !data.gscConnected"
      class="rounded-lg border border-amber-600/50 bg-amber-500/10 p-4 text-sm text-amber-200"
    >
      Google Search Console n'est pas connecté. Ajoute
      <code class="rounded bg-gray-800 px-1">GSC_SERVICE_ACCOUNT_JSON</code> (ou le refresh token OAuth) dans le
      <code class="rounded bg-gray-800 px-1">.env</code>, avec l'accès à la propriété
      <code class="rounded bg-gray-800 px-1">sc-domain:dibodev.fr</code>.
    </div>

    <div v-if="loading && !data" class="flex items-center gap-2 text-gray-300">
      <DibodevSpinner :size="24" />
      Chargement des performances…
    </div>

    <template v-if="data && data.gscConnected">
      <p class="-mt-4 text-xs text-gray-400">
        Du {{ formatRangeDate(data.range.startDate) }} au {{ formatRangeDate(data.range.endDate) }} · Google finalise
        ses données avec ~3 jours de décalage.
      </p>

      <!-- KPIs -->
      <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <SeoStatCard label="Clics" :value="clicksValue" :delta="clicksDelta" delta-suffix="%" />
        <SeoStatCard label="Impressions" :value="impressionsValue" :delta="impressionsDelta" delta-suffix="%" />
        <SeoStatCard label="CTR moyen" :value="ctrValue" :delta="ctrDelta" delta-suffix=" pts" />
        <SeoStatCard
          label="Position moyenne"
          :value="positionValue"
          :delta="positionDelta"
          delta-suffix=" pts"
          :positive-is-good="false"
        />
      </div>

      <!-- Trend -->
      <section class="rounded-2xl border border-gray-600 bg-gray-800 p-4 sm:p-6">
        <h2 class="mb-4 text-lg font-semibold text-gray-100">Évolution des clics &amp; impressions</h2>
        <SeoTrendChart :points="data.trend" />
      </section>

      <!-- Opportunities -->
      <section class="flex flex-col gap-4">
        <div>
          <h2 class="text-lg font-semibold text-gray-100">🎯 Opportunités — quoi faire pour plus de clics</h2>
          <p class="mt-1 text-sm text-gray-300">
            Le site apparaît déjà sur ces requêtes. À gauche = à récupérer d'urgence ; au milieu = à pousser en page 1 ;
            à droite = ce qui marche déjà.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <SeoOpportunityCard
            v-for="group in opportunityGroups"
            :key="group.key"
            :title="group.title"
            :title-class="group.titleClass"
            :accent-bar-class="group.accentBarClass"
            :hint="group.hint"
            :items="group.items"
          />
        </div>

        <div v-if="data.queries.length > 0" class="rounded-2xl border border-gray-600 bg-gray-800 p-4 sm:p-6">
          <h3 class="mb-1 text-sm font-semibold text-gray-100">Tes plus grosses requêtes</h3>
          <p class="mb-4 text-xs text-gray-300">
            Classées par volume d'impressions. La longueur de barre = les impressions ; sa couleur = le CTR (rouge =
            beaucoup vu, peu cliqué → à récupérer).
          </p>
          <SeoQueryBars :entries="data.queries" />
        </div>
      </section>

      <!-- Queries + pages side by side, each scrollable -->
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section class="min-w-0 rounded-2xl border border-gray-600 bg-gray-800 p-4 sm:p-6">
          <h2 class="mb-4 text-lg font-semibold text-gray-100">Toutes les requêtes</h2>
          <SeoEntryTable :entries="data.queries" key-label="Requête" :limit="200" searchable cap-height />
        </section>
        <section class="min-w-0 rounded-2xl border border-gray-600 bg-gray-800 p-4 sm:p-6">
          <h2 class="mb-4 text-lg font-semibold text-gray-100">Pages les plus vues</h2>
          <SeoEntryTable :entries="data.pages" key-label="Page" key-kind="url" :limit="100" cap-height />
        </section>
      </div>

      <!-- Countries + devices -->
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section class="min-w-0 rounded-2xl border border-gray-600 bg-gray-800 p-4 sm:p-6">
          <h2 class="mb-4 text-lg font-semibold text-gray-100">Pays</h2>
          <SeoEntryTable :entries="data.countries" key-label="Pays" key-kind="country" :limit="15" />
        </section>
        <section class="min-w-0 rounded-2xl border border-gray-600 bg-gray-800 p-4 sm:p-6">
          <h2 class="mb-4 text-lg font-semibold text-gray-100">Appareils</h2>
          <SeoEntryTable :entries="data.devices" key-label="Appareil" key-kind="device" :limit="10" />
        </section>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import DibodevAlert from '~/components/feedback/DibodevAlert.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevSpinner from '~/components/ui/DibodevSpinner.vue'
import SeoStatCard from '~/components/dashboard/SeoStatCard.vue'
import SeoTrendChart from '~/components/dashboard/SeoTrendChart.vue'
import SeoOpportunityCard from '~/components/dashboard/SeoOpportunityCard.vue'
import SeoQueryBars from '~/components/dashboard/SeoQueryBars.vue'
import SeoEntryTable from '~/components/dashboard/SeoEntryTable.vue'
import { SeoDisplayUtils } from '~/core/utils/SeoDisplayUtils'
import type {
  SearchPerformanceEntry,
  SearchPerformancePeriod,
  SearchPerformanceResponse,
} from '~~/server/types/dashboard/searchPerformance'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Requêtes Google — Dashboard',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

type PeriodOption = { value: SearchPerformancePeriod; label: string }
type OpportunityGroup = {
  key: string
  title: string
  titleClass: string
  accentBarClass: string
  hint: string
  items: SearchPerformanceEntry[]
}

const PERIOD_OPTIONS: PeriodOption[] = [
  { value: '7d', label: '7 jours' },
  { value: '28d', label: '28 jours' },
  { value: '3m', label: '3 mois' },
  { value: '6m', label: '6 mois' },
]

const MIN_IMPRESSIONS_TO_OPTIMIZE: number = 10
const LOW_CTR: number = 0.02
const OPTIMIZE_MAX_POSITION: number = 20
const ALMOST_PAGE_ONE_MIN_POSITION: number = 10
const ALMOST_PAGE_ONE_MAX_POSITION: number = 20
const ALMOST_PAGE_ONE_MIN_IMPRESSIONS: number = 5
const OPPORTUNITY_LIMIT: number = 8

const period: Ref<SearchPerformancePeriod> = ref('28d')
const data: Ref<SearchPerformanceResponse | null> = ref(null)
const loading: Ref<boolean> = ref(true)
const error: Ref<string> = ref('')

/** True when the previous period holds enough data to compare against. */
const hasComparison: ComputedRef<boolean> = computed((): boolean => (data.value?.previousTotals.impressions ?? 0) > 0)

const clicksValue: ComputedRef<string> = computed((): string =>
  SeoDisplayUtils.formatInteger(data.value?.totals.clicks ?? 0),
)
const impressionsValue: ComputedRef<string> = computed((): string =>
  SeoDisplayUtils.formatInteger(data.value?.totals.impressions ?? 0),
)
const ctrValue: ComputedRef<string> = computed(
  (): string => `${((data.value?.totals.ctr ?? 0) * 100).toLocaleString('fr-FR', { maximumFractionDigits: 1 })} %`,
)
const positionValue: ComputedRef<string> = computed((): string =>
  (data.value?.totals.position ?? 0).toLocaleString('fr-FR', { maximumFractionDigits: 1 }),
)

const clicksDelta: ComputedRef<number | null> = computed((): number | null =>
  hasComparison.value ? percentChange(data.value!.totals.clicks, data.value!.previousTotals.clicks) : null,
)
const impressionsDelta: ComputedRef<number | null> = computed((): number | null =>
  hasComparison.value ? percentChange(data.value!.totals.impressions, data.value!.previousTotals.impressions) : null,
)
const ctrDelta: ComputedRef<number | null> = computed((): number | null =>
  hasComparison.value ? (data.value!.totals.ctr - data.value!.previousTotals.ctr) * 100 : null,
)
const positionDelta: ComputedRef<number | null> = computed((): number | null =>
  hasComparison.value ? data.value!.totals.position - data.value!.previousTotals.position : null,
)

/** The three opportunity buckets derived from the period's queries. */
const opportunityGroups: ComputedRef<OpportunityGroup[]> = computed((): OpportunityGroup[] => {
  const queries: SearchPerformanceEntry[] = data.value?.queries ?? []
  const byImpressions = (a: SearchPerformanceEntry, b: SearchPerformanceEntry): number => b.impressions - a.impressions
  const toOptimize: SearchPerformanceEntry[] = queries
    .filter(
      (entry: SearchPerformanceEntry): boolean =>
        entry.impressions >= MIN_IMPRESSIONS_TO_OPTIMIZE &&
        entry.position <= OPTIMIZE_MAX_POSITION &&
        entry.ctr < LOW_CTR,
    )
    .sort(byImpressions)
    .slice(0, OPPORTUNITY_LIMIT)
  const almostPageOne: SearchPerformanceEntry[] = queries
    .filter(
      (entry: SearchPerformanceEntry): boolean =>
        entry.position > ALMOST_PAGE_ONE_MIN_POSITION &&
        entry.position <= ALMOST_PAGE_ONE_MAX_POSITION &&
        entry.impressions >= ALMOST_PAGE_ONE_MIN_IMPRESSIONS,
    )
    .sort(byImpressions)
    .slice(0, OPPORTUNITY_LIMIT)
  const working: SearchPerformanceEntry[] = queries
    .filter((entry: SearchPerformanceEntry): boolean => entry.clicks > 0)
    .sort((a: SearchPerformanceEntry, b: SearchPerformanceEntry): number => b.clicks - a.clicks)
    .slice(0, OPPORTUNITY_LIMIT)
  return [
    {
      key: 'optimize',
      title: 'À récupérer en priorité',
      titleClass: 'text-red-300',
      accentBarClass: 'bg-red-500',
      hint: "Beaucoup d'impressions, presque pas de clics : retravaille le title/meta, ou vise le top 3.",
      items: toOptimize,
    },
    {
      key: 'almost',
      title: 'Presque en page 1',
      titleClass: 'text-amber-300',
      accentBarClass: 'bg-amber-500',
      hint: 'Position 11-20 : un article ou un renfort de contenu peut la faire basculer en page 1.',
      items: almostPageOne,
    },
    {
      key: 'working',
      title: 'Ce qui marche',
      titleClass: 'text-emerald-300',
      accentBarClass: 'bg-emerald-500',
      hint: 'Tes requêtes qui rapportent déjà des clics — à consolider et à décliner.',
      items: working,
    },
  ]
})

/**
 * Percentage change from a previous value, or null when there is nothing to compare to.
 *
 * @param {number} current - The current value.
 * @param {number} previous - The previous value.
 * @returns {number | null} The percentage change, or null when previous is zero.
 */
function percentChange(current: number, previous: number): number | null {
  if (previous <= 0) return null
  return ((current - previous) / previous) * 100
}

/**
 * Formats an ISO date as a short French day/month label.
 *
 * @param {string} isoDate - The YYYY-MM-DD date.
 * @returns {string} The formatted label.
 */
function formatRangeDate(isoDate: string): string {
  try {
    return new Date(isoDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch {
    return isoDate
  }
}

/**
 * Loads the search-performance payload for the current period, using a per-period client cache.
 *
 * @param {boolean} force - Bypass the cache and re-fetch from the API.
 * @returns {Promise<void>} Resolves when loading finishes.
 */
async function load(force: boolean = false): Promise<void> {
  const cacheKey: string = `dashboard-search-performance-${period.value}`
  const cached: Ref<SearchPerformanceResponse | null> = useState<SearchPerformanceResponse | null>(cacheKey)
  if (!force && cached.value) {
    data.value = cached.value
    loading.value = false
    return
  }
  loading.value = true
  error.value = ''
  try {
    const response: SearchPerformanceResponse = await $fetch<SearchPerformanceResponse>(
      '/api/dashboard/search-performance',
      { query: { period: period.value } },
    )
    data.value = response
    cached.value = response
  } catch (e: unknown) {
    error.value = e instanceof Error ? e.message : 'Erreur lors du chargement des performances.'
  } finally {
    loading.value = false
  }
}

/**
 * Downloads the current period's Search Console payload as a JSON file, for the weekly review.
 *
 * @returns {void}
 */
function exportJson(): void {
  if (!data.value) return
  const blob: Blob = new Blob([JSON.stringify(data.value, null, 2)], { type: 'application/json' })
  const url: string = URL.createObjectURL(blob)
  const link: HTMLAnchorElement = document.createElement('a')
  link.href = url
  link.download = `dibodev-gsc-${period.value}-${data.value.range.endDate}.json`
  link.click()
  URL.revokeObjectURL(url)
}

watch(period, (): void => {
  load(false)
})

onMounted((): void => {
  load(false)
})
</script>
