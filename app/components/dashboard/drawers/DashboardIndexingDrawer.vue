<template>
  <DashboardDrawerFrame
    :title="row?.title ?? 'Page introuvable'"
    subtitle="Page dans Google"
    :browse-index="browseIndex"
    :browse-total="props.browseUrls.length"
    @close="closeDrawer"
    @previous="showPreviousOrNextPage(-1)"
    @next="showPreviousOrNextPage(1)"
  >
    <template v-if="row">
      <div class="flex min-w-0 items-center gap-1">
        <a
          :href="row.url"
          target="_blank"
          rel="noopener noreferrer"
          class="dash-mono text-primary hover:text-primary-dark min-w-0 truncate text-[13px]"
        >
          {{ path }}
        </a>
        <DashboardButton variant="ghost" size="sm" square icon="copy" aria-label="Copier l’URL" @click="copyUrl" />
      </div>

      <div class="rounded-xl border border-gray-300 p-4">
        <DashboardBadge
          :tone="display.tone"
          :icon="isRefreshingPage ? 'loader-circle' : display.icon"
          :is-spinning="isRefreshingPage"
        >
          {{ display.label }}
        </DashboardBadge>
        <p class="mt-2 text-[14px] text-gray-200">{{ reason }}</p>
        <div v-if="canonical" class="mt-3 rounded-lg bg-gray-800 p-3">
          <p class="dash-label">Canonique retenue par Google</p>
          <p class="dash-mono mt-1.5 text-[12.5px] break-all text-gray-100">{{ canonical }}</p>
        </div>
      </div>

      <div class="bg-surface-tint flex gap-3 rounded-xl p-4 text-[13.5px] leading-relaxed text-gray-200">
        <DashboardIcon name="info" :size="16" class="text-primary-dark mt-0.5" />
        <p>{{ advice }}</p>
      </div>

      <dl class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3.5 text-sm">
        <dt class="dash-label self-center">Type</dt>
        <dd class="text-right text-gray-200">{{ DashboardIndexingUtils.TYPES[row.type].label }}</dd>
        <dt class="dash-label self-center">Langue</dt>
        <dd class="text-right text-gray-200">{{ LOCALE_LABELS[DashboardIndexingUtils.locale(row.url)] }}</dd>
        <dt class="dash-label self-center">Dernière exploration</dt>
        <dd class="text-right text-gray-200">{{ DashboardFormatUtils.formatDateTime(row.lastCrawlTime) }}</dd>
        <dt class="dash-label self-center">Vérifiée</dt>
        <dd class="text-right text-gray-200">{{ DashboardFormatUtils.formatRelative(row.checkedAt) }}</dd>
        <template v-if="row.verdict">
          <dt class="dash-label self-center">Verdict brut</dt>
          <dd class="dash-mono text-right text-[12.5px] text-gray-200">{{ row.verdict }}</dd>
        </template>
      </dl>
    </template>
    <DashboardEmptyState
      v-else
      icon="scan-search"
      title="Cette page n’est plus dans le sitemap"
      text="Actualise la liste depuis l’écran Indexation."
    />

    <template v-if="row" #footer>
      <DashboardButton variant="outline" icon="square-arrow-out-up-right" :href="searchConsoleUrl">
        Search Console
      </DashboardButton>
      <DashboardButton variant="primary" icon="refresh-cw" :loading="isRefreshingPage" @click="onRefresh">
        Actualiser
      </DashboardButton>
    </template>
  </DashboardDrawerFrame>
</template>

<script lang="ts" setup>
import type { UseDashboardToastReturn } from '~/composables/useDashboardToast'
import type { UseDashboardIndexingReturn } from '~/composables/useDashboardIndexing'
import type { UseDashboardDrawerReturn } from '~/composables/useDashboardDrawer'
import type { ComputedRef, PropType } from 'vue'
import type { DashboardIndexingState } from '~/core/types/Dashboard'
import type { DashboardIndexingDrawerProps } from '~/core/types/DashboardIndexingDrawer'
import type { IndexingLocale, IndexingStateDisplay } from '~/core/utils/DashboardIndexingUtils'
import type { IndexingStatusRow } from '~~/server/types/indexing'
import { computed } from 'vue'
import DashboardBadge from '~/components/dashboard/ui/DashboardBadge.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardEmptyState from '~/components/dashboard/ui/DashboardEmptyState.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardDrawerFrame from '~/components/dashboard/overlays/DashboardDrawerFrame.vue'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'
import { DashboardIndexingUtils } from '~/core/utils/DashboardIndexingUtils'
import { useDashboardDrawer } from '~/composables/useDashboardDrawer'
import { useDashboardIndexing } from '~/composables/useDashboardIndexing'
import { useDashboardToast } from '~/composables/useDashboardToast'

const props: DashboardIndexingDrawerProps = defineProps({
  url: {
    type: String,
    required: true,
  },
  browseUrls: {
    type: Array as PropType<string[]>,
    default: (): string[] => [],
  },
})

const { payload, refreshingUrls, refreshUrl }: UseDashboardIndexingReturn = useDashboardIndexing()
const { replaceDrawer, closeDrawer }: UseDashboardDrawerReturn = useDashboardDrawer()
const { showToast }: UseDashboardToastReturn = useDashboardToast()

const LOCALE_LABELS: Record<IndexingLocale, string> = { fr: 'Français', en: 'Anglais', es: 'Espagnol' }

/** What to do for each state, in one or two sentences. */
const ADVICE: Record<DashboardIndexingState, string> = {
  indexed: 'Rien à faire : la page est dans l’index de Google et peut apparaître dans les résultats.',
  'not-indexed':
    'Google connaît la page mais ne l’a pas retenue. Ajoute des liens internes vers elle, puis demande l’indexation dans Search Console.',
  duplicate:
    'Google la voit comme un doublon d’une autre page. Rends son contenu plus distinct (titre, angle, exemples) et fais-la lier depuis d’autres pages.',
  unknown:
    'Google ne connaît pas encore cette adresse. Le sitemap la lui signalera ; pour aller plus vite, demande l’indexation dans Search Console.',
  excluded: 'Exclue volontairement (redirection ou variante avec sa propre canonique) : c’est normal.',
  error: 'Google n’arrive pas à indexer la page. Ouvre l’inspection dans Search Console pour voir l’erreur exacte.',
}

const row: ComputedRef<IndexingStatusRow | null> = computed(
  (): IndexingStatusRow | null =>
    payload.value?.items.find((item: IndexingStatusRow): boolean => item.url === props.url) ?? null,
)

const state: ComputedRef<DashboardIndexingState> = computed(
  (): DashboardIndexingState => (row.value ? DashboardIndexingUtils.state(row.value) : 'unknown'),
)

const display: ComputedRef<IndexingStateDisplay> = computed(
  (): IndexingStateDisplay => DashboardIndexingUtils.STATES[state.value],
)

const reason: ComputedRef<string> = computed((): string => (row.value ? DashboardIndexingUtils.reason(row.value) : ''))

const canonical: ComputedRef<string | null> = computed((): string | null =>
  row.value ? DashboardIndexingUtils.chosenCanonical(row.value) : null,
)

const advice: ComputedRef<string> = computed((): string => ADVICE[state.value])
const path: ComputedRef<string> = computed((): string => DashboardIndexingUtils.path(props.url))
const isRefreshingPage: ComputedRef<boolean> = computed((): boolean => refreshingUrls.value.includes(props.url))

const searchConsoleUrl: ComputedRef<string> = computed((): string =>
  row.value?.inspectionResultLink
    ? DashboardIndexingUtils.searchConsoleUrl(row.value.inspectionResultLink)
    : `https://search.google.com/u/1/search-console/inspect?resource_id=sc-domain%3Adibodev.fr&id=${encodeURIComponent(props.url)}`,
)

const browseIndex: ComputedRef<number | null> = computed((): number | null => {
  const index: number = props.browseUrls.indexOf(props.url)
  return index >= 0 ? index : null
})

/**
 * Shows the previous or next page of the list.
 *
 * @param {number} direction - -1 for previous, 1 for next.
 * @returns {void}
 */
function showPreviousOrNextPage(direction: number): void {
  if (browseIndex.value === null) return
  const url: string | undefined = props.browseUrls[browseIndex.value + direction]
  if (url) replaceDrawer({ kind: 'indexing', url, browseUrls: props.browseUrls })
}

/**
 * Copies the page URL.
 *
 * @returns {void}
 */
function copyUrl(): void {
  navigator.clipboard
    .writeText(props.url)
    .then((): void => showToast({ tone: 'ink', icon: 'copy-check', title: 'URL copiée', text: props.url }))
    .catch((): void => showToast({ tone: 'red', title: 'Copie impossible', text: props.url }))
}

/**
 * Inspects this page again in Search Console.
 *
 * @returns {Promise<void>}
 */
async function onRefresh(): Promise<void> {
  const updated: IndexingStatusRow | null = await refreshUrl(props.url)
  if (updated) {
    const label: string = DashboardIndexingUtils.STATES[DashboardIndexingUtils.state(updated)].label
    showToast({ tone: 'cyan', icon: 'scan-search', title: 'Statut actualisé', text: `${updated.title} : ${label}.` })
  } else {
    showToast({ tone: 'red', title: 'Actualisation impossible', text: 'Search Console n’a pas répondu.' })
  }
}
</script>
