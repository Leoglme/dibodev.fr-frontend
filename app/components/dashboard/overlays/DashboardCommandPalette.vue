<template>
  <Transition name="dash-palette">
    <div
      v-if="isCommandPaletteOpen"
      class="fixed inset-0 z-[85] flex items-start justify-center bg-(--dash-scrim) px-3 pt-[calc(12px+env(safe-area-inset-top,0px))] md:pt-[12vh]"
      @click.self="closeCommandPalette"
    >
      <div
        class="flex max-h-[min(560px,calc(100dvh-24px))] w-full max-w-[620px] flex-col overflow-hidden rounded-2xl bg-white shadow-(--dash-shadow-pop)"
        role="dialog"
        aria-modal="true"
        aria-label="Recherche et actions"
      >
        <div class="flex h-14 shrink-0 items-center gap-2.5 border-b border-(--dash-line-soft) px-4">
          <DashboardIcon name="search" :size="18" class="text-muted" />
          <input
            ref="input"
            v-model="query"
            type="text"
            class="min-w-0 flex-1 bg-transparent text-base text-gray-100 outline-none placeholder:text-(--dash-faint)"
            placeholder="Page, action, article, requête Google…"
            autocomplete="off"
            enterkeyhint="go"
            role="combobox"
            aria-expanded="true"
            aria-controls="dashboard-palette-results"
            :aria-activedescendant="selectedItem ? `palette-${selectedItem.id}` : undefined"
            @keydown="onKeydown"
          />
          <button
            type="button"
            class="dash-mono text-muted h-6 cursor-pointer rounded-[5px] border border-gray-300 bg-gray-800 px-1.5 text-[10.5px]"
            @click="closeCommandPalette"
          >
            Échap
          </button>
        </div>

        <div id="dashboard-palette-results" ref="list" class="min-h-0 flex-1 overflow-y-auto p-2" role="listbox">
          <template v-if="groupedResults.length > 0">
            <div v-for="group in groupedResults" :key="group.name">
              <p class="dash-label px-2.5 pt-2.5 pb-1.5">{{ group.name }}</p>
              <button
                v-for="item in group.items"
                :id="`palette-${item.id}`"
                :key="item.id"
                type="button"
                role="option"
                class="flex min-h-[44px] w-full cursor-pointer items-center gap-3 rounded-lg px-2.5 py-1.5 text-left text-sm text-gray-100"
                :class="selectedItem?.id === item.id ? 'bg-gray-800' : ''"
                :aria-selected="selectedItem?.id === item.id"
                @mousemove="selectById(item.id)"
                @click="runItem(item)"
              >
                <DashboardIconTile :icon="item.icon" :tone="item.tone" size="sm" />
                <span class="min-w-0 flex-1">
                  <span class="block truncate">{{ item.label }}</span>
                  <span v-if="item.description" class="text-muted block truncate text-[12.5px]">{{
                    item.description
                  }}</span>
                </span>
                <DashboardIcon
                  v-if="selectedItem?.id === item.id"
                  name="corner-down-left"
                  :size="14"
                  class="text-muted max-md:hidden"
                />
              </button>
            </div>
          </template>
          <p v-else class="text-muted px-4 py-10 text-center text-sm">Rien ne correspond à « {{ query }} ».</p>
        </div>

        <div
          class="text-muted flex shrink-0 items-center gap-4 border-t border-(--dash-line-soft) bg-gray-800 px-4 py-2.5 text-xs max-md:hidden"
        >
          <span class="inline-flex items-center gap-1.5"><kbd class="dash-mono">↑ ↓</kbd> naviguer</span>
          <span class="inline-flex items-center gap-1.5"><kbd class="dash-mono">Entrée</kbd> ouvrir</span>
          <span class="inline-flex items-center gap-1.5"><kbd class="dash-mono">Ctrl K</kbd> fermer</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import type { UseDashboardToastReturn } from '~/composables/useDashboardToast'
import type { UseDashboardShellReturn } from '~/composables/useDashboardShell'
import type { UseDashboardSearchPerformanceReturn } from '~/composables/useDashboardSearchPerformance'
import type { UseDashboardPwaReturn } from '~/composables/useDashboardPwa'
import type { UseDashboardIndexingReturn } from '~/composables/useDashboardIndexing'
import type { UseDashboardDrawerReturn } from '~/composables/useDashboardDrawer'
import type { UseDashboardArticlesReturn } from '~/composables/useDashboardArticles'
import type { DashboardCommandResultGroup } from '~/core/types/DashboardCommandPalette'
import type { ComputedRef, Ref } from 'vue'
import type { DashboardCommandGroup, DashboardCommandItem, DashboardNavItem } from '~/core/types/Dashboard'
import type { SearchPerformanceCacheEntry } from '~/composables/useDashboardSearchPerformance'
import type { SearchPerformanceEntry } from '~~/server/types/dashboard/searchPerformance'
import type { IndexingStatusRow } from '~~/server/types/indexing'
import { computed, nextTick, ref, watch } from 'vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardIconTile from '~/components/dashboard/ui/DashboardIconTile.vue'
import { DASHBOARD_EDITOR_PATH, DASHBOARD_NAV_ITEMS } from '~/core/constants/dashboardNavigation'
import { DashboardIndexingUtils } from '~/core/utils/DashboardIndexingUtils'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'
import { useDashboardArticles } from '~/composables/useDashboardArticles'
import { useDashboardDrawer } from '~/composables/useDashboardDrawer'
import { useDashboardIndexing } from '~/composables/useDashboardIndexing'
import { useDashboardPwa } from '~/composables/useDashboardPwa'
import { useDashboardSearchPerformance } from '~/composables/useDashboardSearchPerformance'
import { useDashboardShell } from '~/composables/useDashboardShell'
import { useDashboardToast } from '~/composables/useDashboardToast'

const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const { isCommandPaletteOpen, closeCommandPalette, logout }: UseDashboardShellReturn = useDashboardShell()
const { openDrawer }: UseDashboardDrawerReturn = useDashboardDrawer()
const { showToast }: UseDashboardToastReturn = useDashboardToast()
const { rows: articleRows, loadArticles, processQueue }: UseDashboardArticlesReturn = useDashboardArticles()
const { payload: indexingPayload, loadIndexing, startRefresh }: UseDashboardIndexingReturn = useDashboardIndexing()

const { cache: searchCache, loadSearchPerformance }: UseDashboardSearchPerformanceReturn =
  useDashboardSearchPerformance()

const { isInstalledApp, showInstallInstructions }: UseDashboardPwaReturn = useDashboardPwa()

const GROUP_ORDER: DashboardCommandGroup[] = ['Pages', 'Actions', 'Articles', 'Pages du site', 'Requêtes Google']
const MAX_PER_GROUP: number = 6

const input: Ref<HTMLInputElement | null> = ref(null)
const list: Ref<HTMLDivElement | null> = ref(null)
const query: Ref<string> = ref('')
const selectedIndex: Ref<number> = ref(0)

const baseItems: ComputedRef<DashboardCommandItem[]> = computed((): DashboardCommandItem[] => {
  const pages: DashboardCommandItem[] = DASHBOARD_NAV_ITEMS.map(
    (item: DashboardNavItem): DashboardCommandItem => ({
      id: `page-${item.key}`,
      group: 'Pages',
      label: item.label,
      description: '',
      icon: item.icon,
      tone: item.tone,
      keywords: item.path,
      run: (): void => {
        goToDashboardPage(item.path)
      },
    }),
  )
  const actions: DashboardCommandItem[] = [
    {
      id: 'action-new',
      group: 'Actions',
      label: 'Nouvel article',
      description: 'Écrire à la main ou avec l’IA',
      icon: 'plus',
      tone: 'violet',
      keywords: 'rédiger écrire créer',
      run: (): void => {
        goToDashboardPage(DASHBOARD_EDITOR_PATH, { new: '1' })
      },
    },
    {
      id: 'action-refresh-indexing',
      group: 'Actions',
      label: 'Actualiser toute l’indexation',
      description: 'Inspecte chaque page dans Search Console',
      icon: 'refresh-cw',
      tone: 'cyan',
      keywords: 'google search console inspection',
      run: (): void => {
        startRefresh()
          .then((): void => showToast({ tone: 'cyan', icon: 'scan-search', title: 'Actualisation lancée' }))
          .catch((): void => showToast({ tone: 'red', title: 'Impossible de lancer l’actualisation' }))
        goToDashboardPage('/dashboard/indexing')
      },
    },
    {
      id: 'action-queue',
      group: 'Actions',
      label: 'Traiter la file de publication',
      description: 'Publie les articles planifiés dont l’heure est passée',
      icon: 'send',
      tone: 'violet',
      keywords: 'planifié drip',
      run: (): void => {
        processQueue()
          .then((message: string): void =>
            showToast({ tone: 'cyan', icon: 'calendar-clock', title: 'File traitée', text: message }),
          )
          .catch((): void => showToast({ tone: 'red', title: 'Le traitement de la file a échoué' }))
      },
    },
    {
      id: 'action-site',
      group: 'Actions',
      label: 'Voir le site',
      description: 'dibodev.fr dans un nouvel onglet',
      icon: 'external-link',
      tone: 'ink',
      keywords: 'public ouvrir',
      run: (): void => {
        window.open('https://dibodev.fr', '_blank', 'noopener')
      },
    },
    ...(isInstalledApp.value
      ? []
      : [
          {
            id: 'action-install',
            group: 'Actions' as DashboardCommandGroup,
            label: 'Installer sur l’écran d’accueil',
            description: 'Safari : Partager, puis « Sur l’écran d’accueil »',
            icon: 'smartphone' as const,
            tone: 'ink' as const,
            keywords: 'pwa app iphone ipad',
            run: showInstallInstructions,
          },
        ]),
    {
      id: 'action-logout',
      group: 'Actions',
      label: 'Se déconnecter',
      description: '',
      icon: 'log-out',
      tone: 'red',
      keywords: 'déconnexion quitter',
      run: (): void => {
        logout().catch((): void => undefined)
      },
    },
  ]
  const articles: DashboardCommandItem[] = articleRows.value.map(
    (row: (typeof articleRows.value)[number]): DashboardCommandItem => ({
      id: `article-${row.key}`,
      group: 'Articles',
      label: row.title,
      description: `/blog/${row.slug}`,
      icon: 'file-text',
      tone: 'violet',
      keywords: row.slug,
      run: (): void =>
        openDrawer({
          kind: 'article',
          articleKey: row.key,
          browseKeys: articleRows.value.map((r: (typeof articleRows.value)[number]): string => r.key),
        }),
    }),
  )
  // Blog posts are already listed under « Articles »: only the other pages of the site are added here.
  const sitePages: DashboardCommandItem[] = (indexingPayload.value?.items ?? [])
    .filter((row: IndexingStatusRow): boolean => row.type !== 'blog')
    .map(
      (row: IndexingStatusRow): DashboardCommandItem => ({
        id: `site-${row.url}`,
        group: 'Pages du site',
        label: row.title,
        description: `${DashboardIndexingUtils.STATES[DashboardIndexingUtils.state(row)].label} · ${DashboardIndexingUtils.path(row.url)}`,
        icon: 'scan-search',
        tone: 'cyan',
        keywords: row.url,
        run: (): void => openDrawer({ kind: 'indexing', url: row.url, browseUrls: [row.url] }),
      }),
    )
  const cached: SearchPerformanceCacheEntry | undefined = searchCache.value['28d']
  const queries: DashboardCommandItem[] = (cached?.data.queries ?? []).map(
    (entry: SearchPerformanceEntry): DashboardCommandItem => ({
      id: `query-${entry.key}`,
      group: 'Requêtes Google',
      label: entry.key,
      description: `${DashboardFormatUtils.formatNumber(entry.impressions)} impressions · position ${DashboardFormatUtils.formatNumber(entry.position, 1)}`,
      icon: 'trending-up',
      tone: 'green',
      keywords: '',
      run: (): void => openDrawer({ kind: 'query', query: entry.key, period: '28d' }),
    }),
  )
  return [...pages, ...actions, ...articles, ...sitePages, ...queries]
})

const groupedResults: ComputedRef<DashboardCommandResultGroup[]> = computed((): DashboardCommandResultGroup[] => {
  const needle: string = DashboardFormatUtils.toSearchableText(query.value.trim())
  return GROUP_ORDER.flatMap((name: DashboardCommandGroup): DashboardCommandResultGroup[] => {
    const inGroup: DashboardCommandItem[] = baseItems.value.filter(
      (item: DashboardCommandItem): boolean => item.group === name,
    )
    const matching: DashboardCommandItem[] = needle
      ? inGroup.filter((item: DashboardCommandItem): boolean =>
          DashboardFormatUtils.toSearchableText(`${item.label} ${item.description} ${item.keywords}`).includes(needle),
        )
      : name === 'Pages' || name === 'Actions'
        ? inGroup
        : name === 'Articles'
          ? inGroup.slice(0, 3)
          : []
    const items: DashboardCommandItem[] = matching.slice(0, MAX_PER_GROUP)
    return items.length > 0 ? [{ name, items }] : []
  })
})

const flatResults: ComputedRef<DashboardCommandItem[]> = computed((): DashboardCommandItem[] =>
  groupedResults.value.flatMap((group: DashboardCommandResultGroup): DashboardCommandItem[] => group.items),
)

const selectedItem: ComputedRef<DashboardCommandItem | null> = computed(
  (): DashboardCommandItem | null => flatResults.value[selectedIndex.value] ?? null,
)

/**
 * Navigates to a dashboard route and closes the palette.
 *
 * @param {string} path - Unlocalized path.
 * @param {Record<string, string>} routeQuery - Optional query.
 * @returns {Promise<void>}
 */
async function goToDashboardPage(path: string, routeQuery: Record<string, string> = {}): Promise<void> {
  await navigateTo(localePath({ path, query: routeQuery }))
}

/**
 * Runs a result and closes the palette.
 *
 * @param {DashboardCommandItem} item - The chosen result.
 * @returns {void}
 */
function runItem(item: DashboardCommandItem): void {
  closeCommandPalette()
  item.run()
}

/**
 * Selects a result under the mouse.
 *
 * @param {string} id - Result id.
 * @returns {void}
 */
function selectById(id: string): void {
  const index: number = flatResults.value.findIndex((item: DashboardCommandItem): boolean => item.id === id)
  if (index >= 0) selectedIndex.value = index
}

/**
 * Keyboard navigation: arrows move, Enter runs, Escape closes.
 *
 * @param {KeyboardEvent} event - The key event.
 * @returns {void}
 */
function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    selectedIndex.value = Math.min(flatResults.value.length - 1, selectedIndex.value + 1)
    scrollSelectedIntoView()
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    selectedIndex.value = Math.max(0, selectedIndex.value - 1)
    scrollSelectedIntoView()
  } else if (event.key === 'Enter' && selectedItem.value) {
    event.preventDefault()
    runItem(selectedItem.value)
  } else if (event.key === 'Escape') {
    event.preventDefault()
    closeCommandPalette()
  }
}

/**
 * Keeps the selected result visible while navigating with the keyboard.
 *
 * @returns {void}
 */
function scrollSelectedIntoView(): void {
  nextTick((): void => {
    const id: string | undefined = selectedItem.value?.id
    if (!id) return
    document.getElementById(`palette-${id}`)?.scrollIntoView({ block: 'nearest' })
  }).catch((): void => undefined)
}

watch(query, (): void => {
  selectedIndex.value = 0
})

watch(isCommandPaletteOpen, (open: boolean): void => {
  if (!open) return
  query.value = ''
  selectedIndex.value = 0
  nextTick((): void => input.value?.focus()).catch((): void => undefined)
  loadArticles().catch((): void => undefined)
  loadIndexing().catch((): void => undefined)
  loadSearchPerformance('28d').catch((): void => undefined)
})
</script>

<style scoped>
.dash-palette-enter-active,
.dash-palette-leave-active {
  transition: opacity 0.16s ease;
}

.dash-palette-enter-active > div,
.dash-palette-leave-active > div {
  transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.dash-palette-enter-from,
.dash-palette-leave-to {
  opacity: 0;
}

.dash-palette-enter-from > div,
.dash-palette-leave-to > div {
  transform: translateY(8px) scale(0.985);
}
</style>
