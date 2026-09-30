<template>
  <DashboardPage title="Indexation Google" icon="scan-search">
    <template #actions>
      <span v-if="lastCheckedAt" class="text-muted hidden items-center gap-1.5 text-[13px] lg:inline-flex">
        <DashboardIcon name="clock" :size="14" />
        Vérifiée {{ DashboardFormatUtils.formatRelative(lastCheckedAt) }}
      </span>
      <DashboardButton
        v-if="!isIndexingRefreshRunning"
        variant="primary"
        size="sm"
        icon="refresh-cw"
        :disabled="!payload?.gscConnected"
        @click="onStartRefresh"
      >
        <span class="max-sm:hidden">Tout actualiser</span>
      </DashboardButton>
    </template>

    <template #toolbar>
      <DashboardTabs
        v-model="filter"
        :items="filterTabs"
        screen-reader-label="État dans Google"
        class="min-w-0 @max-4xl/page:w-full"
      />
      <DashboardSearchInput
        v-model="search"
        id="indexing-search"
        placeholder="Titre ou URL…"
        class="w-full pb-1 @4xl/page:ml-auto @4xl/page:w-[220px] @4xl/page:pb-0 @6xl/page:w-[260px]"
      />
    </template>

    <div
      v-if="isIndexingRefreshRunning"
      class="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-(--dash-cyan-tint) bg-(--dash-cyan-wash) px-4 py-3.5"
      role="status"
    >
      <DashboardIcon name="refresh-cw" :size="16" class="dash-spin text-(--dash-cyan)" />
      <span class="text-[13.5px] text-gray-200">
        Mise à jour
        <b class="font-medium text-gray-100 tabular-nums"
          >{{ refreshProgress.current }} / {{ refreshProgress.total }}</b
        >
        <span v-if="refreshProgress.path" class="dash-mono text-muted ml-1.5 text-xs">{{ refreshProgress.path }}</span>
      </span>
      <span class="h-1.5 min-w-[120px] flex-1 overflow-hidden rounded-full bg-(--dash-cyan-tint)">
        <span
          class="block h-full rounded-full bg-(--dash-cyan) transition-[width] duration-300"
          :style="{ width: `${refreshProgress.ratio}%` }"
        />
      </span>
      <DashboardButton variant="ghost" size="sm" @click="onCancelRefresh">Annuler</DashboardButton>
    </div>

    <div
      v-if="payload && !payload.gscConnected"
      class="flex gap-3 rounded-xl bg-(--dash-amber-tint) p-4 text-sm text-(--dash-amber)"
      role="alert"
    >
      <DashboardIcon name="triangle-alert" :size="18" class="mt-0.5" />
      <p>
        Search Console n’est pas connecté. Ajoute <code class="dash-mono">GSC_SERVICE_ACCOUNT_JSON</code> dans le
        <code class="dash-mono">.env</code> avec la clé d’un compte de service, puis donne-lui le rôle Propriétaire dans
        Search Console.
      </p>
    </div>
    <p v-if="error" class="flex items-center gap-2 text-sm text-(--dash-red)" role="alert">
      <DashboardIcon name="circle-alert" :size="16" />
      {{ error }}
    </p>

    <DashboardCard>
      <div class="flex flex-wrap items-center gap-2 border-b border-(--dash-line-soft) px-4 py-3 sm:px-5">
        <p class="text-[14.5px] font-medium text-gray-100">
          {{ DashboardFormatUtils.plural(filteredRows.length, 'page') }}
        </p>
        <div class="flex w-full gap-2 sm:ml-auto sm:w-auto">
          <DashboardSelect
            v-model="typeFilter"
            id="indexing-type"
            :options="TYPE_OPTIONS"
            screen-reader-label="Type de page"
            class="flex-1 sm:flex-none"
          />
          <DashboardSelect
            v-model="localeFilter"
            id="indexing-locale"
            :options="LOCALE_OPTIONS"
            screen-reader-label="Langue"
            class="flex-1 sm:flex-none"
          />
        </div>
      </div>

      <div v-if="isLoadingIndexing && !payload" class="flex flex-col gap-2 p-5">
        <span v-for="index in 8" :key="index" class="dash-skeleton h-12 w-full" />
      </div>

      <DashboardEmptyState
        v-else-if="filteredRows.length === 0"
        :icon="filter === 'duplicate' || filter === 'error' ? 'circle-check' : 'scan-search'"
        :title="emptyTitle"
        :text="search ? 'Essaie un autre mot.' : 'Change de filtre pour voir les autres pages.'"
      />

      <template v-else>
        <table class="dash-table @max-xl:hidden">
          <thead>
            <tr>
              <th>Page</th>
              <th class="dash-col-sm">Type</th>
              <th>État dans Google</th>
              <th class="dash-col-md">Exploré le</th>
              <th class="is-right"><span class="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in pagedRows"
              :key="row.url"
              class="is-clickable"
              :class="{ 'is-selected': openedItemKey === row.url }"
              @click="openRow(row.url)"
            >
              <td class="dash-col-main">
                <div class="flex min-w-0 items-center gap-3">
                  <DashboardIconTile
                    :icon="DashboardIndexingUtils.TYPES[row.type].icon"
                    :tone="DashboardIndexingUtils.TYPES[row.type].tone"
                    size="lg"
                  />
                  <div class="min-w-0">
                    <p class="truncate font-medium text-gray-100">{{ row.title }}</p>
                    <p class="dash-mono text-muted mt-0.5 truncate text-xs">
                      {{ DashboardIndexingUtils.path(row.url) }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="dash-col-sm whitespace-nowrap">
                <span class="text-[13px] text-gray-200">{{ DashboardIndexingUtils.TYPES[row.type].label }}</span>
                <span
                  class="dash-mono ml-2 inline-grid h-5 min-w-[26px] place-items-center rounded-[5px] border border-gray-300 px-1 text-[10.5px] font-medium text-gray-200 uppercase"
                >
                  {{ DashboardIndexingUtils.locale(row.url) }}
                </span>
              </td>
              <td>
                <DashboardBadge
                  :tone="stateOf(row).tone"
                  :icon="isRowRefreshing(row) ? 'loader-circle' : stateOf(row).icon"
                  :is-spinning="isRowRefreshing(row)"
                >
                  {{ stateOf(row).label }}
                </DashboardBadge>
                <p
                  v-if="row.checkedAt || canonicalOf(row)"
                  class="text-muted mt-1.5 max-w-[240px] truncate text-[12.5px] @3xl:max-w-[320px] @6xl:max-w-[420px]"
                  :title="DashboardIndexingUtils.reason(row)"
                >
                  {{
                    canonicalOf(row) ? `Canonique retenue : ${canonicalOf(row)}` : DashboardIndexingUtils.reason(row)
                  }}
                </p>
              </td>
              <td class="dash-col-md text-[13px] whitespace-nowrap">
                <span v-if="row.lastCrawlTime" class="text-gray-200">{{
                  DashboardFormatUtils.formatDateTime(row.lastCrawlTime)
                }}</span>
                <span v-else-if="row.checkedAt" class="text-gray-200">Jamais</span>
                <span v-else class="text-(--dash-faint)">—</span>
              </td>
              <td class="is-right" @click.stop>
                <div class="inline-flex items-center gap-1">
                  <DashboardButton
                    variant="ghost"
                    size="sm"
                    square
                    icon="refresh-cw"
                    :loading="refreshingUrls.includes(row.url)"
                    :disabled="!payload?.gscConnected"
                    :aria-label="`Actualiser ${row.title}`"
                    data-tip="Actualiser cette page"
                    class="dash-hover-reveal"
                    @click="onRefreshUrl(row)"
                  />
                  <DashboardButton
                    variant="ghost"
                    size="sm"
                    square
                    icon="chevron-right"
                    :aria-label="`Détail de ${row.title}`"
                    @click="openRow(row.url)"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <ul class="@xl:hidden">
          <DashboardListRow
            v-for="row in pagedRows"
            :key="row.url"
            :is-selected="openedItemKey === row.url"
            @select="openRow(row.url)"
          >
            <DashboardIconTile
              :icon="DashboardIndexingUtils.TYPES[row.type].icon"
              :tone="DashboardIndexingUtils.TYPES[row.type].tone"
              size="lg"
            />
            <span class="min-w-0 flex-1">
              <span class="block truncate text-sm font-medium text-gray-100">{{ row.title }}</span>
              <span class="dash-mono text-muted mt-0.5 block truncate text-xs">{{
                DashboardIndexingUtils.path(row.url)
              }}</span>
              <span class="mt-1.5 block">
                <DashboardBadge
                  :tone="stateOf(row).tone"
                  :icon="isRowRefreshing(row) ? 'loader-circle' : stateOf(row).icon"
                  :is-spinning="isRowRefreshing(row)"
                >
                  {{ stateOf(row).label }}
                </DashboardBadge>
              </span>
            </span>
            <DashboardIcon name="chevron-right" :size="16" class="text-muted" />
          </DashboardListRow>
        </ul>
      </template>

      <template v-if="filteredRows.length > 0" #footer>
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
import type { UseDashboardIndexingReturn } from '~/composables/useDashboardIndexing'
import type { UseDashboardDrawerReturn } from '~/composables/useDashboardDrawer'
import type { DashboardIndexingFilter, DashboardIndexingRefreshProgress } from '~/core/types/DashboardIndexingPage'
import type { ComputedRef, Ref } from 'vue'
import type { DashboardSelectOption, DashboardTabItem } from '~/core/types/Dashboard'
import type { IndexingStateDisplay } from '~/core/utils/DashboardIndexingUtils'
import type { IndexingStatusRow } from '~~/server/types/indexing'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import DashboardPage from '~/components/dashboard/shell/DashboardPage.vue'
import DashboardBadge from '~/components/dashboard/ui/DashboardBadge.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardCard from '~/components/dashboard/ui/DashboardCard.vue'
import DashboardEmptyState from '~/components/dashboard/ui/DashboardEmptyState.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardIconTile from '~/components/dashboard/ui/DashboardIconTile.vue'
import DashboardListRow from '~/components/dashboard/ui/DashboardListRow.vue'
import DashboardSearchInput from '~/components/dashboard/ui/DashboardSearchInput.vue'
import DashboardSelect from '~/components/dashboard/ui/DashboardSelect.vue'
import DashboardTabs from '~/components/dashboard/ui/DashboardTabs.vue'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'
import { DashboardIndexingUtils } from '~/core/utils/DashboardIndexingUtils'
import { useDashboardDrawer } from '~/composables/useDashboardDrawer'
import { useDashboardIndexing } from '~/composables/useDashboardIndexing'
import { useDashboardToast } from '~/composables/useDashboardToast'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Indexation Google · Dibodev Admin',
})

const route: ReturnType<typeof useRoute> = useRoute()
const router: ReturnType<typeof useRouter> = useRouter()

const {
  payload,
  loading: isLoadingIndexing,
  error,
  refreshingUrls,
  counts,
  isIndexingRefreshRunning,
  loadIndexing,
  startRefresh,
  cancelRefresh,
  refreshUrl,
  stopPolling,
}: UseDashboardIndexingReturn = useDashboardIndexing()

const { openedItemKey, openDrawer }: UseDashboardDrawerReturn = useDashboardDrawer()
const { showToast }: UseDashboardToastReturn = useDashboardToast()
const initialFilter: string = typeof route.query.filter === 'string' ? route.query.filter : 'all'

const FILTER_VALUES: DashboardIndexingFilter[] = [
  'all',
  'indexed',
  'not-indexed',
  'duplicate',
  'unknown',
  'excluded',
  'error',
]

const PAGE_SIZE: number = 25

const TYPE_OPTIONS: DashboardSelectOption[] = [
  { value: '', label: 'Tous les types' },
  { value: 'blog', label: 'Articles' },
  { value: 'project', label: 'Projets' },
  { value: 'page', label: 'Pages' },
  { value: 'category', label: 'Catégories' },
  { value: 'sector', label: 'Secteurs' },
]

const LOCALE_OPTIONS: DashboardSelectOption[] = [
  { value: '', label: 'Toutes les langues' },
  { value: 'fr', label: 'Français' },
  { value: 'en', label: 'Anglais' },
  { value: 'es', label: 'Espagnol' },
]

const filter: Ref<string> = ref(
  FILTER_VALUES.includes(initialFilter as DashboardIndexingFilter) ? initialFilter : 'all',
)

const search: Ref<string> = ref('')
const typeFilter: Ref<string> = ref('')
const localeFilter: Ref<string> = ref('')
const page: Ref<number> = ref(1)

const filterTabs: ComputedRef<DashboardTabItem[]> = computed((): DashboardTabItem[] => {
  const tabs: DashboardTabItem[] = [
    { value: 'all', label: 'Toutes', count: counts.value.total },
    { value: 'indexed', label: 'Indexées', count: counts.value.indexed },
    { value: 'not-indexed', label: 'Non indexées', count: counts.value['not-indexed'] },
    { value: 'duplicate', label: 'En double', count: counts.value.duplicate, alert: counts.value.duplicate > 0 },
    { value: 'unknown', label: 'Inconnues', count: counts.value.unknown },
  ]
  if (counts.value.error > 0) tabs.push({ value: 'error', label: 'Erreurs', count: counts.value.error, alert: true })
  if (counts.value.excluded > 0) tabs.push({ value: 'excluded', label: 'Exclues', count: counts.value.excluded })
  return tabs
})

const filteredRows: ComputedRef<IndexingStatusRow[]> = computed((): IndexingStatusRow[] => {
  const needle: string = search.value.trim().toLowerCase()
  return (payload.value?.items ?? [])
    .filter(
      (row: IndexingStatusRow): boolean => filter.value === 'all' || DashboardIndexingUtils.state(row) === filter.value,
    )
    .filter((row: IndexingStatusRow): boolean => !typeFilter.value || row.type === typeFilter.value)
    .filter(
      (row: IndexingStatusRow): boolean =>
        !localeFilter.value || DashboardIndexingUtils.locale(row.url) === localeFilter.value,
    )
    .filter((row: IndexingStatusRow): boolean => !needle || `${row.title} ${row.url}`.toLowerCase().includes(needle))
    .sort((a: IndexingStatusRow, b: IndexingStatusRow): number => {
      const rank: number = DashboardIndexingUtils.priority(a) - DashboardIndexingUtils.priority(b)
      return rank !== 0 ? rank : a.title.localeCompare(b.title, 'fr')
    })
})

const pageCount: ComputedRef<number> = computed((): number =>
  Math.max(1, Math.ceil(filteredRows.value.length / PAGE_SIZE)),
)

const pagedRows: ComputedRef<IndexingStatusRow[]> = computed((): IndexingStatusRow[] =>
  filteredRows.value.slice((page.value - 1) * PAGE_SIZE, page.value * PAGE_SIZE),
)

const countLabel: ComputedRef<string> = computed((): string => {
  const total: number = filteredRows.value.length
  return `${(page.value - 1) * PAGE_SIZE + 1}–${Math.min(total, page.value * PAGE_SIZE)} sur ${DashboardFormatUtils.plural(total, 'page')}`
})

const lastCheckedAt: ComputedRef<string | null> = computed((): string | null => {
  const dates: string[] = (payload.value?.items ?? [])
    .map((row: IndexingStatusRow): string => row.checkedAt ?? '')
    .filter((date: string): boolean => date !== '')
    .sort()
  return dates[dates.length - 1] ?? null
})

const refreshProgress: ComputedRef<DashboardIndexingRefreshProgress> = computed(
  (): DashboardIndexingRefreshProgress => {
    const current: number = payload.value?.refresh.currentIndex ?? 0
    const total: number = payload.value?.refresh.totalCount ?? counts.value.total
    const url: string | undefined = payload.value?.refresh.currentUrl
    return {
      current,
      total,
      ratio: total > 0 ? (current / total) * 100 : 0,
      path: url ? DashboardIndexingUtils.path(url) : '',
    }
  },
)

const emptyTitle: ComputedRef<string> = computed((): string => {
  if (search.value) return 'Aucune page ne correspond'
  if (filter.value === 'duplicate') return 'Aucune page en double'
  if (filter.value === 'error') return 'Aucune page en erreur'
  return 'Aucune page pour ces filtres'
})

/**
 * Label and tone of a page state.
 *
 * @param {IndexingStatusRow} row - The page.
 * @returns {IndexingStateDisplay} The display.
 */
function stateOf(row: IndexingStatusRow): IndexingStateDisplay {
  return DashboardIndexingUtils.STATES[DashboardIndexingUtils.state(row)]
}

/**
 * Whether Search Console is being asked about this page right now (single refresh or full pass).
 *
 * @param {IndexingStatusRow} row - The page.
 * @returns {boolean} True while the page is being refreshed.
 */
function isRowRefreshing(row: IndexingStatusRow): boolean {
  return refreshingUrls.value.includes(row.url) || payload.value?.refresh.currentUrl === row.url
}

/**
 * Canonical chosen by Google, for duplicates.
 *
 * @param {IndexingStatusRow} row - The page.
 * @returns {string | null} The canonical path, or null.
 */
function canonicalOf(row: IndexingStatusRow): string | null {
  return DashboardIndexingUtils.state(row) === 'duplicate' ? DashboardIndexingUtils.chosenCanonical(row) : null
}

/**
 * Opens the drawer of a page; the arrows browse the filtered list.
 *
 * @param {string} url - Page URL.
 * @returns {void}
 */
function openRow(url: string): void {
  openDrawer({ kind: 'indexing', url, browseUrls: filteredRows.value.map((row: IndexingStatusRow): string => row.url) })
}

/**
 * Starts the inspection of every page.
 *
 * @returns {Promise<void>}
 */
async function onStartRefresh(): Promise<void> {
  try {
    await startRefresh()
    showToast({
      tone: 'cyan',
      icon: 'scan-search',
      title: 'Actualisation lancée',
      text: 'Chaque page est inspectée dans Search Console.',
    })
  } catch {
    showToast({ tone: 'red', title: 'Impossible de lancer l’actualisation' })
  }
}

/**
 * Stops the inspection job.
 *
 * @returns {Promise<void>}
 */
async function onCancelRefresh(): Promise<void> {
  try {
    await cancelRefresh()
    showToast({
      tone: 'amber',
      icon: 'circle-x',
      title: 'Actualisation arrêtée',
      text: 'Les pages déjà vérifiées sont gardées.',
    })
  } catch {
    showToast({ tone: 'red', title: 'Impossible d’arrêter l’actualisation' })
  }
}

/**
 * Inspects one page.
 *
 * @param {IndexingStatusRow} row - The page.
 * @returns {Promise<void>}
 */
async function onRefreshUrl(row: IndexingStatusRow): Promise<void> {
  const updated: IndexingStatusRow | null = await refreshUrl(row.url)
  if (updated)
    showToast({
      tone: 'cyan',
      icon: 'scan-search',
      title: 'Statut actualisé',
      text: `${row.title} : ${stateOf(updated).label}.`,
    })
}

watch([filter, search, typeFilter, localeFilter], (): void => {
  page.value = 1
})

watch(filter, (value: string): void => {
  router
    .replace({ query: { ...route.query, filter: value === 'all' ? undefined : value } })
    .catch((): void => undefined)
})

onMounted((): void => {
  loadIndexing().catch((): void => undefined)
})

onBeforeUnmount((): void => {
  stopPolling()
})
</script>
