<template>
  <DashboardDrawerFrame :title="props.pageLabel" :subtitle="`Page dans Google · ${periodLabel}`" @close="closeDrawer">
    <ul class="flex flex-col gap-2">
      <li v-for="version in versions" :key="version.url" class="flex min-w-0 items-center gap-2.5">
        <span
          class="dash-mono inline-grid h-5 min-w-[26px] shrink-0 place-items-center rounded-[5px] border border-gray-300 px-1 text-[10.5px] font-medium tracking-[0.04em] text-gray-200"
          aria-hidden="true"
        >
          {{ version.locale.toUpperCase() }}
        </span>
        <a
          :href="version.url"
          target="_blank"
          rel="noopener noreferrer"
          class="dash-mono text-primary hover:text-primary-dark min-w-0 truncate text-[12.5px]"
          :aria-label="`Ouvrir la version ${LOCALE_LABELS[version.locale]} de la page`"
        >
          {{ version.path }}
        </a>
        <span v-if="versions.length > 1" class="text-muted ml-auto shrink-0 text-xs tabular-nums">
          {{ versionMeta(version) }}
        </span>
      </li>
    </ul>

    <div v-if="onlineDay" class="flex gap-2.5 rounded-xl bg-gray-800 p-3.5 text-[13.5px] leading-relaxed">
      <DashboardIcon name="calendar" :size="16" class="text-muted mt-0.5 shrink-0" />
      <div class="min-w-0">
        <p class="text-gray-200">
          En ligne depuis le
          <span class="font-medium text-gray-100">{{ DashboardFormatUtils.formatLongDate(onlineDay) }}</span>
          · {{ onlineAgeLabel }}
        </p>
        <p v-if="periodCoverageNote" class="text-muted mt-1">{{ periodCoverageNote }}</p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-gray-300 bg-gray-300">
      <div class="bg-white p-4">
        <p class="dash-label">Impressions</p>
        <p class="mt-2 text-2xl font-medium tracking-[-0.02em] text-gray-100 tabular-nums">
          {{ DashboardFormatUtils.formatNumber(totals.impressions) }}
        </p>
      </div>
      <div class="bg-white p-4">
        <p class="dash-label">Clics</p>
        <p class="mt-2 text-2xl font-medium tracking-[-0.02em] text-gray-100 tabular-nums">{{ totals.clicks }}</p>
      </div>
      <div class="bg-white p-4">
        <p class="dash-label">Taux de clic</p>
        <p class="mt-2 text-2xl font-medium tracking-[-0.02em] text-gray-100 tabular-nums">
          {{ DashboardFormatUtils.formatPercent(totals.ctr, 1)
          }}<small class="text-muted ml-0.5 text-base leading-none font-normal">%</small>
        </p>
      </div>
      <div class="bg-white p-4">
        <p class="dash-label">Position moyenne</p>
        <div class="mt-2"><DashboardPositionBadge :position="totals.position" /></div>
      </div>
    </div>

    <section class="flex flex-col gap-2.5">
      <div class="flex items-baseline justify-between gap-3">
        <p class="dash-label">Requêtes qui affichent cette page</p>
        <span v-if="queries.length > 0" class="text-muted text-xs tabular-nums">
          {{ DashboardFormatUtils.plural(queries.length, 'requête') }}
        </span>
      </div>
      <ul v-if="queries.length > 0" class="overflow-hidden rounded-xl border border-gray-300">
        <li
          v-for="(query, index) in queries"
          :key="query.key"
          :class="{ 'border-t border-(--dash-line-soft)': index > 0 }"
        >
          <button
            type="button"
            class="flex w-full cursor-pointer items-center gap-3 px-3.5 py-2.5 text-left transition-colors hover:bg-(--dash-row-hover)"
            @click="openQuery(query.key)"
          >
            <span class="min-w-0 flex-1">
              <span class="block truncate text-sm font-medium text-gray-100">{{ query.key }}</span>
              <span class="text-muted mt-0.5 block text-xs tabular-nums">{{ queryMeta(query) }}</span>
            </span>
            <DashboardPositionBadge :position="query.position" />
          </button>
        </li>
      </ul>
      <div v-else-if="isLoadingQueries" class="flex flex-col gap-2" aria-busy="true">
        <div v-for="index in 4" :key="index" class="dash-skeleton h-11 w-full rounded-lg" />
      </div>
      <p v-else-if="queriesError" class="flex items-center gap-2 text-sm text-(--dash-red)" role="alert">
        <DashboardIcon name="circle-alert" :size="16" />
        {{ queriesError }}
      </p>
      <p v-else class="text-muted text-[13.5px] leading-relaxed">
        Google n’a rattaché aucune requête identifiable à cette page sur la période : les requêtes rares sont
        anonymisées.
      </p>
    </section>

    <template #footer>
      <DashboardButton variant="outline" icon="square-arrow-out-up-right" :href="searchConsoleUrl">
        Search Console
      </DashboardButton>
      <DashboardButton
        v-if="indexingRow"
        variant="outline"
        square
        icon="scan-search"
        aria-label="Indexation de la page"
        data-tip="Indexation"
        @click="openIndexing"
      />
      <DashboardButton v-if="articleRow" variant="primary" icon="file-text" @click="openArticle">
        Fiche article
      </DashboardButton>
      <DashboardButton v-else variant="primary" icon="external-link" :href="primaryUrl">Ouvrir la page</DashboardButton>
    </template>
  </DashboardDrawerFrame>
</template>

<script lang="ts" setup>
import type { UseDashboardArticlesReturn } from '~/composables/useDashboardArticles'
import type { UseDashboardDrawerReturn } from '~/composables/useDashboardDrawer'
import type { UseDashboardIndexingReturn } from '~/composables/useDashboardIndexing'
import type { UseDashboardSearchPerformanceReturn } from '~/composables/useDashboardSearchPerformance'
import type { ComputedRef, PropType } from 'vue'
import type { DashboardArticleRow } from '~/core/types/Dashboard'
import type { DashboardSearchPageDrawerProps, DashboardSearchPageVersion } from '~/core/types/DashboardSearchPageDrawer'
import type { DashboardToolPage, DashboardToolPageRoute } from '~/core/types/DashboardSearchPerformancePage'
import type { IndexingLocale } from '~/core/utils/DashboardIndexingUtils'
import type {
  SearchPerformanceDateRange,
  SearchPerformanceEntry,
  SearchPerformancePeriod,
} from '~~/server/types/dashboard/searchPerformance'
import type { IndexingStatusRow } from '~~/server/types/indexing'
import { computed, onMounted, watch } from 'vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardPositionBadge from '~/components/dashboard/ui/DashboardPositionBadge.vue'
import DashboardDrawerFrame from '~/components/dashboard/overlays/DashboardDrawerFrame.vue'
import { DASHBOARD_TOOL_PAGES } from '~/core/constants/dashboardToolPages'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'
import { DashboardIndexingUtils } from '~/core/utils/DashboardIndexingUtils'
import { DashboardSearchUtils } from '~/core/utils/DashboardSearchUtils'
import { useDashboardArticles } from '~/composables/useDashboardArticles'
import { useDashboardDrawer } from '~/composables/useDashboardDrawer'
import { useDashboardIndexing } from '~/composables/useDashboardIndexing'
import { useDashboardSearchPerformance } from '~/composables/useDashboardSearchPerformance'

const props: DashboardSearchPageDrawerProps = defineProps({
  rowKey: {
    type: String,
    required: true,
  },
  pageLabel: {
    type: String,
    required: true,
  },
  pageUrls: {
    type: Array as PropType<string[]>,
    required: true,
  },
  period: {
    type: String as PropType<SearchPerformancePeriod>,
    required: true,
  },
})

const {
  cache: performanceCache,
  pageQueriesCache,
  loadingPageQueryKeys,
  pageQueriesErrors,
  buildPageQueriesCacheKey,
  loadSearchPageQueries,
}: UseDashboardSearchPerformanceReturn = useDashboardSearchPerformance()
const { rows: articleRows, loadArticles }: UseDashboardArticlesReturn = useDashboardArticles()
const { payload: indexingPayload, loadIndexing }: UseDashboardIndexingReturn = useDashboardIndexing()
const { openDrawer, closeDrawer }: UseDashboardDrawerReturn = useDashboardDrawer()
const router: ReturnType<typeof useRouter> = useRouter()

const LOCALE_LABELS: Record<IndexingLocale, string> = { fr: 'française', en: 'anglaise', es: 'espagnole' }
const QUERY_DISPLAY_LIMIT: number = 50
const toolPageRoutes: DashboardToolPageRoute[] = DashboardSearchUtils.readToolPageRoutes(router.getRoutes())

const periodLabel: ComputedRef<string> = computed((): string => DashboardSearchUtils.PERIOD_LABELS[props.period])

const versions: ComputedRef<DashboardSearchPageVersion[]> = computed((): DashboardSearchPageVersion[] => {
  const pages: SearchPerformanceEntry[] = performanceCache.value[props.period]?.data.pages ?? []
  return props.pageUrls
    .map(
      (url: string): DashboardSearchPageVersion => ({
        url,
        locale: DashboardIndexingUtils.locale(url),
        path: DashboardIndexingUtils.path(url),
        entry: pages.find((page: SearchPerformanceEntry): boolean => page.key === url) ?? null,
      }),
    )
    .sort(
      (a: DashboardSearchPageVersion, b: DashboardSearchPageVersion): number =>
        DashboardSearchUtils.SITE_LOCALES.indexOf(a.locale) - DashboardSearchUtils.SITE_LOCALES.indexOf(b.locale),
    )
})

const totals: ComputedRef<SearchPerformanceEntry> = computed(
  (): SearchPerformanceEntry =>
    DashboardSearchUtils.mergeEntries(
      props.rowKey,
      versions.value.flatMap((version: DashboardSearchPageVersion): SearchPerformanceEntry[] =>
        version.entry ? [version.entry] : [],
      ),
    ),
)

const primaryUrl: ComputedRef<string> = computed((): string => versions.value[0]?.url ?? props.pageUrls[0] ?? '')

const isLoadingQueries: ComputedRef<boolean> = computed((): boolean =>
  props.pageUrls.some((url: string): boolean =>
    loadingPageQueryKeys.value.includes(buildPageQueriesCacheKey(props.period, url)),
  ),
)

const queriesError: ComputedRef<string> = computed(
  (): string =>
    props.pageUrls
      .map((url: string): string => pageQueriesErrors.value[buildPageQueriesCacheKey(props.period, url)] ?? '')
      .find((message: string): boolean => message !== '') ?? '',
)

const queries: ComputedRef<SearchPerformanceEntry[]> = computed((): SearchPerformanceEntry[] => {
  const entries: SearchPerformanceEntry[] = props.pageUrls.flatMap(
    (url: string): SearchPerformanceEntry[] =>
      pageQueriesCache.value[buildPageQueriesCacheKey(props.period, url)]?.queries ?? [],
  )
  return DashboardSearchUtils.mergeEntriesByKey(entries)
    .sort(
      (a: SearchPerformanceEntry, b: SearchPerformanceEntry): number =>
        b.impressions - a.impressions || b.clicks - a.clicks,
    )
    .slice(0, QUERY_DISPLAY_LIMIT)
})

const articleRow: ComputedRef<DashboardArticleRow | null> = computed((): DashboardArticleRow | null => {
  const slug: string | null = DashboardSearchUtils.extractArticleSlug(primaryUrl.value)

  if (!slug) {
    return null
  }
  return articleRows.value.find((row: DashboardArticleRow): boolean => row.slug === slug) ?? null
})

const toolPage: ComputedRef<DashboardToolPage | null> = computed((): DashboardToolPage | null => {
  const versionPaths: string[] = versions.value.map((version: DashboardSearchPageVersion): string => version.path)
  const toolPageRoute: DashboardToolPageRoute | undefined = toolPageRoutes.find(
    (toolRoute: DashboardToolPageRoute): boolean => versionPaths.includes(toolRoute.path),
  )
  return toolPageRoute ? (DASHBOARD_TOOL_PAGES[toolPageRoute.routeName] ?? null) : null
})

const onlineDay: ComputedRef<string | null> = computed((): string | null => {
  if (articleRow.value?.status === 'published') {
    return DashboardFormatUtils.extractLocalDay(articleRow.value.dateIso)
  }
  return toolPage.value?.onlineSince ?? null
})

const onlineAgeLabel: ComputedRef<string> = computed((): string => {
  const daysOnline: number = onlineDay.value
    ? DashboardFormatUtils.countDaysBetween(onlineDay.value, DashboardFormatUtils.todayIso())
    : 0

  if (daysOnline <= 0) {
    return 'aujourd’hui'
  }
  if (daysOnline === 1) {
    return 'hier'
  }
  return DashboardFormatUtils.plural(daysOnline, 'jour')
})

const periodCoverageNote: ComputedRef<string | null> = computed((): string | null => {
  const range: SearchPerformanceDateRange | undefined = performanceCache.value[props.period]?.data.range

  if (!onlineDay.value || !range) {
    return null
  }
  return DashboardSearchUtils.buildPeriodCoverageNote(onlineDay.value, range)
})

const indexingRow: ComputedRef<IndexingStatusRow | null> = computed((): IndexingStatusRow | null => {
  const versionUrls: string[] = versions.value.map((version: DashboardSearchPageVersion): string => version.url)
  return (
    (indexingPayload.value?.items ?? []).find((item: IndexingStatusRow): boolean => versionUrls.includes(item.url)) ??
    null
  )
})

const searchConsoleUrl: ComputedRef<string> = computed(
  (): string =>
    `https://search.google.com/u/1/search-console/performance/search-analytics?resource_id=sc-domain%3Adibodev.fr&page=!${encodeURIComponent(primaryUrl.value)}`,
)

/**
 * Impressions and clicks of one language version.
 *
 * @param {DashboardSearchPageVersion} version - The version.
 * @returns {string} The figures, or a note when the version had no impression.
 */
function versionMeta(version: DashboardSearchPageVersion): string {
  if (!version.entry) {
    return 'aucune impression'
  }
  return `${DashboardFormatUtils.formatNumber(version.entry.impressions)} impr. · ${DashboardFormatUtils.plural(version.entry.clicks, 'clic')}`
}

/**
 * Secondary line of a query: impressions, clicks and click-through rate.
 *
 * @param {SearchPerformanceEntry} query - The query.
 * @returns {string} The figures.
 */
function queryMeta(query: SearchPerformanceEntry): string {
  return `${DashboardFormatUtils.formatNumber(query.impressions)} impr. · ${DashboardFormatUtils.plural(query.clicks, 'clic')} · ${DashboardFormatUtils.formatPercent(query.ctr, 1)} %`
}

/**
 * Stacks the drawer of a query over this one.
 *
 * @param {string} query - The query.
 * @returns {void}
 */
function openQuery(query: string): void {
  openDrawer({ kind: 'query', query, period: props.period })
}

/**
 * Stacks the article drawer over this one.
 *
 * @returns {void}
 */
function openArticle(): void {
  if (!articleRow.value) {
    return
  }
  openDrawer({ kind: 'article', articleKey: articleRow.value.key, browseKeys: [articleRow.value.key] })
}

/**
 * Stacks the Google indexing drawer over this one.
 *
 * @returns {void}
 */
function openIndexing(): void {
  if (!indexingRow.value) {
    return
  }
  openDrawer({ kind: 'indexing', url: indexingRow.value.url, browseUrls: [indexingRow.value.url] })
}

/**
 * Loads the queries of every language version of the page for the period.
 *
 * @returns {Promise<void>}
 */
async function loadQueries(): Promise<void> {
  await Promise.all(
    props.pageUrls.map(
      (url: string): Promise<SearchPerformanceEntry[] | null> => loadSearchPageQueries(props.period, url),
    ),
  )
}

watch(
  (): string => `${props.period}|${props.pageUrls.join('|')}`,
  (): void => {
    loadQueries().catch((): void => undefined)
  },
  { immediate: true },
)

onMounted((): void => {
  loadArticles().catch((): void => undefined)
  loadIndexing().catch((): void => undefined)
})
</script>
