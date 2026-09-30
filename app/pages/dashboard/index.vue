<template>
  <DashboardPage title="Vue d’ensemble" icon="layout-dashboard">
    <template #actions>
      <span v-if="searchEntry" class="text-muted hidden items-center gap-1.5 text-[13px] lg:inline-flex">
        <DashboardIcon name="clock" :size="14" />
        Mis à jour {{ DashboardFormatUtils.formatRelative(searchEntry.loadedAt, now) }}
      </span>
      <DashboardButton
        variant="ghost"
        square
        icon="refresh-cw"
        :loading="isRefreshingOverview"
        aria-label="Actualiser les données"
        data-tip="Actualiser les données"
        @click="refreshAll"
      />
    </template>

    <div class="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
      <div class="min-w-0">
        <p class="dash-label">{{ todayLabel }} · point de la semaine</p>
        <h2
          class="mt-2.5 text-2xl leading-tight font-medium tracking-[-0.015em] text-balance text-gray-100 md:text-[28px]"
        >
          {{ headline }}
        </h2>
        <p v-if="summary" class="mt-1.5 text-[15px] text-gray-200">{{ summary }}</p>
      </div>
      <div class="flex flex-wrap items-center gap-3">
        <span v-if="searchData" class="text-muted inline-flex items-center gap-1.5 text-[13px]">
          <DashboardIcon name="calendar" :size="14" />
          Search Console · {{ rangeLabel }}
        </span>
        <DashboardButton variant="outline" size="sm" :to="localePath('/dashboard/search-performance')">
          Voir les requêtes
        </DashboardButton>
      </div>
    </div>

    <DashboardKpiBand :kpis="kpis" :loading="isSearchLoading" />
    <p v-if="searchError" class="text-[13px] text-(--dash-red)">{{ searchError }}</p>

    <div class="grid items-stretch gap-5 @4xl:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
      <DashboardCard title="À traiter cette semaine" description="Classé par effet sur la visibilité dans Google.">
        <template #actions>
          <span class="text-muted text-sm tabular-nums">{{ todos.length }}</span>
        </template>
        <ul v-if="todos.length > 0" class="mt-3 px-2 pb-2">
          <li
            v-for="(todo, index) in todos"
            :key="todo.key"
            class="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3.5 gap-y-1 rounded-[10px] px-3 py-3.5 transition-colors hover:bg-(--dash-row-hover) @xl:grid-cols-[auto_minmax(0,1fr)_auto]"
            :class="{ 'border-t border-(--dash-line-soft)': index > 0 }"
          >
            <DashboardIcon :name="todo.icon" :size="18" :class="DASHBOARD_TONES[todo.tone].text" />
            <div class="min-w-0">
              <p class="text-[14.5px] font-medium text-gray-100">{{ todo.title }}</p>
              <p class="text-muted mt-0.5 text-[13px] leading-snug">{{ todo.text }}</p>
            </div>
            <NuxtLink
              :to="localePath({ path: todo.actionPath, query: todo.actionQuery })"
              class="text-primary hover:text-primary-dark col-start-2 inline-flex items-center gap-1.5 text-[13.5px] font-medium whitespace-nowrap transition-[gap,color] hover:gap-2 @xl:col-start-3"
            >
              {{ todo.actionLabel }}
              <DashboardIcon name="arrow-right" :size="15" />
            </NuxtLink>
          </li>
        </ul>
        <DashboardEmptyState
          v-else-if="!isFirstOverviewLoad"
          icon="circle-check"
          title="Rien d’urgent cette semaine"
          text="Pas de doublon, pas d’échec, pas de brouillon qui traîne. Bon moment pour écrire un article."
        />
        <div v-else class="flex flex-col gap-3 px-5 pt-3 pb-5">
          <span v-for="index in 4" :key="index" class="dash-skeleton h-12 w-full" />
        </div>
      </DashboardCard>

      <DashboardCard :title="'Contenu'" :description="contentDescription">
        <template #actions>
          <NuxtLink
            :to="localePath('/dashboard/articles')"
            class="text-primary hover:text-primary-dark inline-flex items-center gap-1.5 text-[13.5px] font-medium"
          >
            Tout voir
            <DashboardIcon name="arrow-right" :size="15" />
          </NuxtLink>
        </template>
        <div
          class="mx-4 mt-4 grid grid-cols-3 gap-px overflow-hidden rounded-[10px] border border-gray-300 bg-gray-300 sm:mx-5"
        >
          <NuxtLink
            v-for="cell in pipelineCells"
            :key="cell.tab"
            :to="localePath({ path: '/dashboard/articles', query: { tab: cell.tab } })"
            class="bg-white px-3.5 py-3 transition-colors hover:bg-gray-800"
          >
            <b class="block text-2xl leading-tight font-medium tracking-[-0.02em] text-gray-100 tabular-nums">{{
              cell.count
            }}</b>
            <span class="text-muted mt-1 flex items-center gap-1.5 text-[12.5px]">
              <span class="h-1.5 w-1.5 rounded-full" :class="DASHBOARD_TONES[cell.tone].dot" />
              {{ cell.label }}
            </span>
          </NuxtLink>
        </div>
        <div class="flex flex-col gap-4 px-4 pt-[18px] pb-5 sm:px-5">
          <div v-if="nextScheduled">
            <p class="dash-label">Prochaine publication</p>
            <button
              type="button"
              class="mt-2.5 flex w-full cursor-pointer items-center gap-3 rounded-[10px] border border-(--dash-line-soft) p-2.5 text-left transition-colors hover:border-gray-400 hover:bg-(--dash-toolbar)"
              @click="openArticle(nextScheduled.key)"
            >
              <DashboardArticleCover :src="nextScheduled.coverImageUrl" size="md" />
              <span class="min-w-0">
                <span class="line-clamp-2 text-sm leading-snug font-medium text-gray-100">{{
                  nextScheduled.title
                }}</span>
                <span class="text-muted mt-1 flex items-center gap-1.5 text-[12.5px]">
                  <DashboardIcon name="calendar-clock" :size="13" />
                  {{ DashboardFormatUtils.formatPlannedDate(nextScheduled.dateIso) }}
                </span>
              </span>
            </button>
          </div>
          <div v-if="lastPublished">
            <p class="dash-label">Dernier article publié</p>
            <button
              type="button"
              class="mt-2.5 flex w-full cursor-pointer items-center gap-3 rounded-[10px] border border-(--dash-line-soft) p-2.5 text-left transition-colors hover:border-gray-400 hover:bg-(--dash-toolbar)"
              @click="openArticle(lastPublished.key)"
            >
              <DashboardArticleCover :src="lastPublished.coverImageUrl" size="md" />
              <span class="min-w-0">
                <span class="line-clamp-2 text-sm leading-snug font-medium text-gray-100">{{
                  lastPublished.title
                }}</span>
                <span class="text-muted mt-1 flex flex-wrap items-center gap-2 text-[12.5px]">
                  {{ DashboardFormatUtils.formatShortDate(lastPublished.dateIso) }}
                  <DashboardLangChips
                    :english="lastPublishedTranslation?.hasEn ?? null"
                    :spanish="lastPublishedTranslation?.hasEs ?? null"
                  />
                </span>
              </span>
            </button>
          </div>
          <p v-if="!nextScheduled && !lastPublished && !isArticlesLoading" class="text-muted text-sm">
            Aucun article pour l’instant.
          </p>
        </div>
      </DashboardCard>
    </div>

    <div class="grid gap-5 @3xl:grid-cols-3">
      <DashboardCard title="Indexation" class="flex flex-col">
        <div class="flex flex-1 flex-col gap-3.5 px-4 pt-3 pb-5 sm:px-5">
          <p class="text-[30px] leading-none font-medium tracking-[-0.02em] text-gray-100 tabular-nums">
            {{ indexingCounts.indexed }}
            <small class="text-muted text-base leading-none font-normal tracking-normal"
              >/ {{ indexingCounts.total }} pages indexées</small
            >
          </p>
          <div class="flex h-2.5 gap-0.5 overflow-hidden rounded-full" aria-hidden="true">
            <span
              v-for="segment in indexingSegments"
              :key="segment.label"
              class="h-full"
              :style="{ flexGrow: segment.count, backgroundColor: segment.color }"
            />
          </div>
          <ul class="grid grid-cols-2 gap-x-3.5 gap-y-1.5 text-[13px] text-gray-200">
            <li v-for="segment in indexingSegments" :key="segment.label" class="flex items-center gap-1.5">
              <span class="h-2 w-2 shrink-0 rounded-sm" :style="{ backgroundColor: segment.color }" />
              {{ segment.label }}
              <b class="ml-auto font-medium tabular-nums">{{ segment.count }}</b>
            </li>
          </ul>
          <NuxtLink
            :to="localePath('/dashboard/indexing')"
            class="text-primary hover:text-primary-dark mt-auto inline-flex items-center gap-1.5 pt-1 text-[13.5px] font-medium"
          >
            Ouvrir l’indexation
            <DashboardIcon name="arrow-right" :size="15" />
          </NuxtLink>
        </div>
      </DashboardCard>

      <DashboardCard title="Traductions" class="flex flex-col">
        <template #actions>
          <DashboardStatus
            v-if="translationLists"
            :tone="coverage.missing.length === 0 ? 'green' : 'amber'"
            :label="coverage.missing.length === 0 ? 'Tout est traduit' : `${coverage.missing.length} à traduire`"
          />
        </template>
        <div class="flex flex-1 flex-col gap-3.5 px-4 pt-3 pb-5 sm:px-5">
          <div v-for="lang in translationRows" :key="lang.label">
            <div class="mb-1.5 flex items-center justify-between text-[13px] text-gray-200">
              <span>{{ lang.label }}</span>
              <b class="font-medium text-gray-100 tabular-nums">{{ lang.done }} / {{ coverage.total }}</b>
            </div>
            <div class="h-1.5 overflow-hidden rounded-full bg-gray-600">
              <span class="block h-full rounded-full bg-(--dash-chart-good)" :style="{ width: `${lang.ratio}%` }" />
            </div>
          </div>
          <p class="text-muted text-[13px]">Projets, articles, secteurs et catégories.</p>
          <NuxtLink
            :to="localePath('/dashboard/translations')"
            class="text-primary hover:text-primary-dark mt-auto inline-flex items-center gap-1.5 pt-1 text-[13.5px] font-medium"
          >
            Ouvrir les traductions
            <DashboardIcon name="arrow-right" :size="15" />
          </NuxtLink>
        </div>
      </DashboardCard>

      <DashboardCard title="Audit de l’accueil" class="flex flex-col">
        <template #actions>
          <span class="text-muted text-[13px]">Mobile</span>
        </template>
        <div class="flex flex-1 flex-col gap-3.5 px-4 pt-3 pb-5 sm:px-5">
          <div class="grid grid-cols-4 gap-1">
            <div v-for="ring in homeRings" :key="ring.label" class="flex flex-col items-center gap-1.5 text-center">
              <DashboardScoreRing :score="ring.score" :size="52" :stroke-width="5" />
              <span class="text-muted text-[11.5px] leading-tight">{{ ring.label }}</span>
            </div>
          </div>
          <p class="text-muted text-[13px]">
            {{
              homeSummary
                ? `Analysé ${DashboardFormatUtils.formatRelative(homeSummary.auditedAt, now)}.`
                : 'Pas encore analysé depuis le dashboard.'
            }}
          </p>
          <NuxtLink
            :to="localePath('/dashboard/audit')"
            class="text-primary hover:text-primary-dark mt-auto inline-flex items-center gap-1.5 pt-1 text-[13.5px] font-medium"
          >
            {{ homeSummary ? 'Voir le rapport' : 'Lancer un audit' }}
            <DashboardIcon name="arrow-right" :size="15" />
          </NuxtLink>
        </div>
      </DashboardCard>
    </div>

    <DashboardCard
      title="Requêtes les plus vues"
      description="Sur 28 jours. La position est la moyenne dans Google."
      divided
    >
      <template #actions>
        <NuxtLink
          :to="localePath('/dashboard/search-performance')"
          class="text-primary hover:text-primary-dark inline-flex items-center gap-1.5 text-[13.5px] font-medium"
        >
          <span class="max-sm:hidden">Toutes les requêtes</span>
          <span class="sm:hidden">Tout voir</span>
          <DashboardIcon name="arrow-right" :size="15" />
        </NuxtLink>
      </template>
      <table v-if="topQueries.length > 0" class="dash-table @max-xl:hidden">
        <thead>
          <tr>
            <th>Requête</th>
            <th class="is-right">Impressions</th>
            <th class="is-right">Clics</th>
            <th class="is-right">Position</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="query in topQueries"
            :key="query.key"
            class="is-clickable"
            :class="{ 'is-selected': openedItemKey === query.key }"
            @click="openQuery(query.key)"
          >
            <td class="dash-col-main">
              <span class="block truncate font-medium text-gray-100">{{ query.key }}</span>
            </td>
            <td class="is-right">
              <span class="inline-flex items-center gap-2.5">
                <span class="tabular-nums">{{ DashboardFormatUtils.formatNumber(query.impressions) }}</span>
                <DashboardMeter :value="query.impressions" :max="topQueries[0]?.impressions ?? 1" />
              </span>
            </td>
            <td class="is-right tabular-nums">
              <span :class="query.clicks > 0 ? 'font-medium text-gray-100' : 'text-muted'">{{ query.clicks }}</span>
            </td>
            <td class="is-right"><DashboardPositionBadge :position="query.position" /></td>
          </tr>
        </tbody>
      </table>
      <ul v-if="topQueries.length > 0" class="@xl:hidden">
        <DashboardListRow
          v-for="query in topQueries"
          :key="query.key"
          :is-selected="openedItemKey === query.key"
          @select="openQuery(query.key)"
        >
          <span class="min-w-0 flex-1">
            <span class="block truncate text-sm font-medium text-gray-100">{{ query.key }}</span>
            <span class="text-muted mt-0.5 block text-xs tabular-nums">
              {{ DashboardFormatUtils.formatNumber(query.impressions) }} impr. ·
              {{ DashboardFormatUtils.plural(query.clicks, 'clic') }}
            </span>
          </span>
          <DashboardPositionBadge :position="query.position" />
        </DashboardListRow>
      </ul>
      <div v-else-if="isSearchLoading" class="flex flex-col gap-2 p-5">
        <span v-for="index in 4" :key="index" class="dash-skeleton h-9 w-full" />
      </div>
      <DashboardEmptyState
        v-else
        icon="trending-up"
        title="Pas encore de requête"
        text="Search Console n’a rien renvoyé pour la période."
      />
    </DashboardCard>
  </DashboardPage>
</template>

<script lang="ts" setup>
import type { UseDashboardTranslationsReturn } from '~/composables/useDashboardTranslations'
import type { UseDashboardSearchPerformanceReturn } from '~/composables/useDashboardSearchPerformance'
import type { UseDashboardIndexingReturn } from '~/composables/useDashboardIndexing'
import type { UseDashboardDrawerReturn } from '~/composables/useDashboardDrawer'
import type { UseDashboardAuditReturn } from '~/composables/useDashboardAudit'
import type { UseDashboardArticlesReturn } from '~/composables/useDashboardArticles'
import type {
  DashboardOverviewIndexingSegment,
  DashboardOverviewPipelineCell,
  DashboardOverviewScoreRing,
  DashboardOverviewTranslationRow,
} from '~/core/types/DashboardOverviewPage'
import type { ComputedRef, Ref } from 'vue'
import type { DashboardArticleRow, DashboardKpi, DashboardTodoItem } from '~/core/types/Dashboard'
import type { SearchPerformanceCacheEntry } from '~/composables/useDashboardSearchPerformance'
import type { SearchOpportunities } from '~/core/utils/DashboardSearchUtils'
import type { TranslatableItem } from '~/types/dashboard/translations'
import type { SearchPerformanceEntry, SearchPerformanceResponse } from '~~/server/types/dashboard/searchPerformance'
import type { IndexingStatusRow } from '~~/server/types/indexing'
import type { LighthouseCategoryId, LighthouseSummary } from '~~/server/types/lighthouse'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import DashboardPage from '~/components/dashboard/shell/DashboardPage.vue'
import DashboardArticleCover from '~/components/dashboard/ui/DashboardArticleCover.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardCard from '~/components/dashboard/ui/DashboardCard.vue'
import DashboardEmptyState from '~/components/dashboard/ui/DashboardEmptyState.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardListRow from '~/components/dashboard/ui/DashboardListRow.vue'
import DashboardKpiBand from '~/components/dashboard/ui/DashboardKpiBand.vue'
import DashboardLangChips from '~/components/dashboard/ui/DashboardLangChips.vue'
import DashboardMeter from '~/components/dashboard/ui/DashboardMeter.vue'
import DashboardPositionBadge from '~/components/dashboard/ui/DashboardPositionBadge.vue'
import DashboardScoreRing from '~/components/dashboard/ui/DashboardScoreRing.vue'
import DashboardStatus from '~/components/dashboard/ui/DashboardStatus.vue'
import { DASHBOARD_CHART_COLORS, DASHBOARD_TONES } from '~/core/constants/dashboardTones'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'
import { DashboardIndexingUtils } from '~/core/utils/DashboardIndexingUtils'
import { DashboardSearchUtils } from '~/core/utils/DashboardSearchUtils'
import { useDashboardArticles } from '~/composables/useDashboardArticles'
import { useDashboardAudit } from '~/composables/useDashboardAudit'
import { useDashboardDrawer } from '~/composables/useDashboardDrawer'
import { useDashboardIndexing } from '~/composables/useDashboardIndexing'
import { useDashboardSearchPerformance } from '~/composables/useDashboardSearchPerformance'
import { useDashboardTranslations } from '~/composables/useDashboardTranslations'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Vue d’ensemble · Dibodev Admin',
})

const localePath: ReturnType<typeof useLocalePath> = useLocalePath()

const {
  cache: searchCache,
  loadingPeriods,
  errors: searchErrors,
  loadSearchPerformance,
}: UseDashboardSearchPerformanceReturn = useDashboardSearchPerformance()

const {
  rows: articleRows,
  counts: articleCounts,
  loading: isArticlesLoading,
  loadArticles,
}: UseDashboardArticlesReturn = useDashboardArticles()

const {
  payload: indexingPayload,
  counts: indexingCounts,
  loadIndexing,
}: UseDashboardIndexingReturn = useDashboardIndexing()

const {
  lists: translationLists,
  coverage,
  loadTranslations,
}: UseDashboardTranslationsReturn = useDashboardTranslations()

const { summaries, loadAuditHistory }: UseDashboardAuditReturn = useDashboardAudit()
const { openedItemKey, openDrawer }: UseDashboardDrawerReturn = useDashboardDrawer()

const SITE_HOME_URL: string = 'https://dibodev.fr/'
const TODO_LIMIT: number = 5

const HOME_RING_LABELS: Array<{ id: LighthouseCategoryId; label: string }> = [
  { id: 'performance', label: 'Perf.' },
  { id: 'accessibility', label: 'Access.' },
  { id: 'best-practices', label: 'Pratiques' },
  { id: 'seo', label: 'SEO' },
]

const isRefreshingOverview: Ref<boolean> = ref(false)
const isFirstOverviewLoad: Ref<boolean> = ref(true)
const now: Ref<number> = ref(Date.now())
let clockTimer: ReturnType<typeof setInterval> | null = null

const searchEntry: ComputedRef<SearchPerformanceCacheEntry | null> = computed(
  (): SearchPerformanceCacheEntry | null => searchCache.value['28d'] ?? null,
)

const searchData: ComputedRef<SearchPerformanceResponse | null> = computed((): SearchPerformanceResponse | null =>
  searchEntry.value?.data.gscConnected ? searchEntry.value.data : null,
)

const isSearchLoading: ComputedRef<boolean> = computed((): boolean => loadingPeriods.value.includes('28d'))
const searchError: ComputedRef<string> = computed((): string => searchErrors.value['28d'] ?? '')

const kpis: ComputedRef<DashboardKpi[]> = computed((): DashboardKpi[] =>
  searchData.value ? DashboardSearchUtils.buildKpis(searchData.value) : [],
)

const opportunities: ComputedRef<SearchOpportunities> = computed(
  (): SearchOpportunities => DashboardSearchUtils.buildOpportunities(searchData.value?.queries ?? []),
)

const topQueries: ComputedRef<SearchPerformanceEntry[]> = computed((): SearchPerformanceEntry[] =>
  [...(searchData.value?.queries ?? [])]
    .sort((a: SearchPerformanceEntry, b: SearchPerformanceEntry): number => b.impressions - a.impressions)
    .slice(0, 6),
)

const todayLabel: ComputedRef<string> = computed((): string => {
  const label: string = new Date(now.value).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
  return label.charAt(0).toUpperCase() + label.slice(1)
})

const rangeLabel: ComputedRef<string> = computed((): string => {
  const range: SearchPerformanceResponse['range'] | undefined = searchData.value?.range
  if (!range) return ''
  return `${DashboardFormatUtils.formatShortDate(range.startDate)} → ${DashboardFormatUtils.formatShortDate(range.endDate)}`
})

const todos: ComputedRef<DashboardTodoItem[]> = computed((): DashboardTodoItem[] => {
  const items: DashboardTodoItem[] = []
  const indexingItems: IndexingStatusRow[] = indexingPayload.value?.items ?? []
  const duplicates: IndexingStatusRow[] = indexingItems.filter(
    (row: IndexingStatusRow): boolean => DashboardIndexingUtils.state(row) === 'duplicate',
  )
  if (duplicates.length > 0) {
    const canonical: string | null = duplicates[0] ? DashboardIndexingUtils.chosenCanonical(duplicates[0]) : null
    items.push({
      key: 'duplicates',
      tone: 'red',
      icon: 'copy',
      title: `${DashboardFormatUtils.plural(duplicates.length, 'page regroupée', 'pages regroupées')} en double par Google`,
      text: canonical
        ? `Google a retenu ${canonical} comme page canonique de « ${duplicates[0]?.title ?? ''} ».`
        : duplicates
            .map((row: IndexingStatusRow): string => `« ${row.title} »`)
            .slice(0, 2)
            .join(', '),
      actionLabel: 'Voir les pages',
      actionPath: '/dashboard/indexing',
      actionQuery: { filter: 'duplicate' },
    })
  }
  if (indexingCounts.value.error > 0) {
    items.push({
      key: 'indexing-errors',
      tone: 'red',
      icon: 'circle-alert',
      title: `${DashboardFormatUtils.plural(indexingCounts.value.error, 'page')} en erreur dans Google`,
      text: 'Google n’arrive pas à les indexer. L’inspection Search Console donne l’erreur exacte.',
      actionLabel: 'Inspecter',
      actionPath: '/dashboard/indexing',
      actionQuery: { filter: 'error' },
    })
  }
  if (articleCounts.value.failed > 0) {
    items.push({
      key: 'failed',
      tone: 'red',
      icon: 'triangle-alert',
      title: `${DashboardFormatUtils.plural(articleCounts.value.failed, 'publication')} en échec`,
      text: 'La file de publication n’a pas pu les mettre en ligne. Le message d’erreur est dans l’article.',
      actionLabel: 'Voir',
      actionPath: '/dashboard/articles',
      actionQuery: { tab: 'failed' },
    })
  }
  const notIndexedArticles: IndexingStatusRow[] = indexingItems.filter(
    (row: IndexingStatusRow): boolean => row.type === 'blog' && DashboardIndexingUtils.state(row) === 'not-indexed',
  )
  if (notIndexedArticles.length > 0) {
    items.push({
      key: 'not-indexed',
      tone: 'amber',
      icon: 'scan-search',
      title: `${DashboardFormatUtils.plural(notIndexedArticles.length, 'article connu', 'articles connus')} de Google mais pas indexé${notIndexedArticles.length > 1 ? 's' : ''}`,
      text: `« ${notIndexedArticles[0]?.title ?? ''} »${notIndexedArticles.length > 1 ? ` et ${notIndexedArticles.length - 1} autre${notIndexedArticles.length > 2 ? 's' : ''}` : ''}.`,
      actionLabel: 'Inspecter',
      actionPath: '/dashboard/indexing',
      actionQuery: { filter: 'not-indexed' },
    })
  }
  const almost: SearchPerformanceEntry[] = opportunities.value.almostPageOne
  if (almost.length > 0) {
    items.push({
      key: 'almost',
      tone: 'green',
      icon: 'trending-up',
      title: `${DashboardFormatUtils.plural(almost.length, 'requête')} à portée de la page 1`,
      text: `${almost
        .slice(0, 2)
        .map(
          (entry: SearchPerformanceEntry): string =>
            `« ${entry.key} » en ${DashboardFormatUtils.formatNumber(entry.position, 1)}`,
        )
        .join(', ')} : un article de renfort peut suffire.`,
      actionLabel: 'Voir les requêtes',
      actionPath: '/dashboard/search-performance',
      actionQuery: { focus: 'opportunities' },
    })
  }
  const drafts: DashboardArticleRow[] = articleRows.value.filter(
    (row: DashboardArticleRow): boolean => row.status === 'draft',
  )
  if (drafts.length > 0) {
    const latest: DashboardArticleRow = drafts[0]!
    const score: string = latest.qualityScore !== null ? `, score qualité ${latest.qualityScore}/100` : ''
    items.push({
      key: 'drafts',
      tone: 'violet',
      icon: 'pen-line',
      title: `${DashboardFormatUtils.plural(drafts.length, 'brouillon')} en cours`,
      text: `« ${latest.title} » modifié ${DashboardFormatUtils.formatRelative(latest.dateIso, now.value)}${score}.`,
      actionLabel: 'Reprendre',
      actionPath: '/dashboard/generate-article',
      actionQuery: latest.recordId ? { draft: latest.recordId } : {},
    })
  }
  const missing: TranslatableItem[] = coverage.value.missing
  if (missing.length > 0) {
    items.push({
      key: 'translations',
      tone: 'pink',
      icon: 'languages',
      title: `${DashboardFormatUtils.plural(missing.length, 'contenu')} sans traduction`,
      text: `${missing
        .slice(0, 2)
        .map((item: TranslatableItem): string => `« ${item.name} »`)
        .join(' et ')} attend${missing.length > 1 ? 'ent' : ''} l’anglais ou l’espagnol.`,
      actionLabel: 'Traduire',
      actionPath: '/dashboard/translations',
      actionQuery: {},
    })
  }
  return items.slice(0, TODO_LIMIT)
})

const headline: ComputedRef<string> = computed((): string => {
  if (isFirstOverviewLoad.value && todos.value.length === 0) return 'Le point de la semaine'
  if (todos.value.length === 0) return 'Rien d’urgent cette semaine'
  return `${DashboardFormatUtils.plural(todos.value.length, 'point')} à traiter cette semaine`
})

const summary: ComputedRef<string> = computed((): string => {
  const data: SearchPerformanceResponse | null = searchData.value
  if (!data) return ''
  const impressions: string = DashboardFormatUtils.formatNumber(data.totals.impressions)
  const clicks: string = DashboardFormatUtils.plural(data.totals.clicks, 'clic')
  const delta: number | null = DashboardSearchUtils.hasComparison(data)
    ? (DashboardFormatUtils.percentDelta(data.totals.impressions, data.previousTotals.impressions)?.value ?? null)
    : null
  const trend: string =
    delta === null
      ? ''
      : delta > 0
        ? ` (en hausse de ${delta} %)`
        : delta < 0
          ? ` (en baisse de ${Math.abs(delta)} %)`
          : ' (stables)'
  return `${impressions} impressions${trend} et ${clicks} sur 28 jours.`
})

const contentDescription: ComputedRef<string> = computed(
  (): string => `${DashboardFormatUtils.plural(articleCounts.value.published, 'article')} en ligne, en 3 langues.`,
)

const pipelineCells: ComputedRef<DashboardOverviewPipelineCell[]> = computed((): DashboardOverviewPipelineCell[] => [
  {
    tab: 'draft',
    label: articleCounts.value.draft > 1 ? 'Brouillons' : 'Brouillon',
    count: articleCounts.value.draft,
    tone: 'neutral',
  },
  {
    tab: 'scheduled',
    label: articleCounts.value.scheduled > 1 ? 'Planifiés' : 'Planifié',
    count: articleCounts.value.scheduled,
    tone: 'cyan',
  },
  { tab: 'published', label: 'Publiés', count: articleCounts.value.published, tone: 'green' },
])

const nextScheduled: ComputedRef<DashboardArticleRow | null> = computed((): DashboardArticleRow | null => {
  const scheduled: DashboardArticleRow[] = articleRows.value
    .filter((row: DashboardArticleRow): boolean => row.status === 'scheduled' && row.dateIso !== null)
    .sort((a: DashboardArticleRow, b: DashboardArticleRow): number => (a.dateIso ?? '').localeCompare(b.dateIso ?? ''))
  return scheduled[0] ?? null
})

const lastPublished: ComputedRef<DashboardArticleRow | null> = computed(
  (): DashboardArticleRow | null =>
    articleRows.value.find((row: DashboardArticleRow): boolean => row.status === 'published') ?? null,
)

const lastPublishedTranslation: ComputedRef<TranslatableItem | null> = computed(
  (): TranslatableItem | null =>
    translationLists.value?.articles.find(
      (item: TranslatableItem): boolean => item.slug === lastPublished.value?.slug,
    ) ?? null,
)

const indexingSegments: ComputedRef<DashboardOverviewIndexingSegment[]> = computed(
  (): DashboardOverviewIndexingSegment[] => [
    { label: 'Indexées', count: indexingCounts.value.indexed, color: DASHBOARD_CHART_COLORS.good },
    { label: 'Non indexées', count: indexingCounts.value['not-indexed'], color: DASHBOARD_CHART_COLORS.average },
    {
      label: 'En double',
      count: indexingCounts.value.duplicate + indexingCounts.value.error,
      color: DASHBOARD_CHART_COLORS.poor,
    },
    {
      label: 'Inconnues',
      count: indexingCounts.value.unknown + indexingCounts.value.excluded,
      color: DASHBOARD_CHART_COLORS.empty,
    },
  ],
)

const translationRows: ComputedRef<DashboardOverviewTranslationRow[]> = computed(
  (): DashboardOverviewTranslationRow[] => {
    const total: number = Math.max(1, coverage.value.total)
    return [
      { label: 'Anglais', done: coverage.value.english, ratio: (coverage.value.english / total) * 100 },
      { label: 'Espagnol', done: coverage.value.spanish, ratio: (coverage.value.spanish / total) * 100 },
    ]
  },
)

const homeSummary: ComputedRef<LighthouseSummary | null> = computed(
  (): LighthouseSummary | null => summaries.value[SITE_HOME_URL] ?? null,
)

const homeRings: ComputedRef<DashboardOverviewScoreRing[]> = computed((): DashboardOverviewScoreRing[] =>
  HOME_RING_LABELS.map((category: { id: LighthouseCategoryId; label: string }): DashboardOverviewScoreRing => {
    const score: number | null | undefined = homeSummary.value?.mobile.scores[category.id]
    return { label: category.label, score: typeof score === 'number' ? Math.round(score * 100) : null }
  }),
)

/**
 * Opens the drawer of an article.
 *
 * @param {string} key - Article row key.
 * @returns {void}
 */
function openArticle(key: string): void {
  openDrawer({ kind: 'article', articleKey: key, browseKeys: [key] })
}

/**
 * Opens the drawer of a Search Console query.
 *
 * @param {string} query - The query.
 * @returns {void}
 */
function openQuery(query: string): void {
  openDrawer({ kind: 'query', query, period: '28d' })
}

/**
 * Loads every block of the overview (from the session cache unless forced).
 *
 * @param {boolean} force - Reload from the servers.
 * @returns {Promise<void>}
 */
async function loadOverview(force: boolean): Promise<void> {
  await Promise.allSettled([
    loadSearchPerformance('28d', force),
    loadArticles(force),
    loadIndexing(force),
    loadTranslations(force),
    loadAuditHistory(force),
  ])
  isFirstOverviewLoad.value = false
}

/**
 * Reloads everything from the servers.
 *
 * @returns {Promise<void>}
 */
async function refreshAll(): Promise<void> {
  isRefreshingOverview.value = true
  await loadOverview(true)
  isRefreshingOverview.value = false
}

onMounted((): void => {
  loadOverview(false).catch((): void => undefined)
  clockTimer = setInterval((): void => {
    now.value = Date.now()
  }, 60_000)
})

onBeforeUnmount((): void => {
  if (clockTimer) clearInterval(clockTimer)
})
</script>
