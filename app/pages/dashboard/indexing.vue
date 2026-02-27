<template>
  <div class="flex min-w-0 flex-1 flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12">
    <div class="min-w-0">
      <h1 class="text-2xl font-semibold text-gray-100">Indexation Google</h1>
      <p class="mt-1 text-gray-200">
        Liste des pages du site (accueil, contact, blog, projets) et statut d’indexation dans Google (Search
        Console). Les données sont lues depuis le cache ; utilise « Actualiser » pour mettre à jour.
      </p>
    </div>

    <DibodevAlert v-if="error" :message="error" variant="error" dismissible @hide="error = ''" />

    <div class="flex w-full flex-col gap-4">
      <div class="flex w-full flex-col gap-4 md:flex-row md:flex-wrap md:items-end md:justify-between">
        <div class="flex flex-col w-full flex-wrap items-end gap-3 sm:flex-row sm:gap-4 md:min-w-0 md:flex-1">
          <div class="min-w-0 w-full [&>*]:!min-w-0 md:max-w-[180px]">
            <DibodevSelect
              id="filter-verdict"
              label="Verdict"
              :options="verdictOptions"
              :model-value="selectedVerdict"
              @update:model-value="selectedVerdict = $event"
            />
          </div>
          <div class="min-w-0 w-full [&>*]:!min-w-0 md:max-w-[180px]">
            <DibodevSelect
              id="filter-type"
              label="Type"
              :options="typeOptions"
              :model-value="selectedType"
              @update:model-value="selectedType = $event"
            />
          </div>
        </div>
        <div class="w-full min-w-0 flex-1 md:max-w-md">
          <DibodevSearchBar
            title="Recherche"
            placeholder="Titre ou URL…"
            v-model:value="searchText"
          />
        </div>
      </div>
      <div class="flex w-full justify-end sm:justify-start">
        <DibodevButton
          :disabled="loading || refreshStatus === 'running'"
          @click="startRefresh"
        >
          <span v-if="refreshStatus === 'running'" class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          {{ refreshStatus === 'running' ? 'Mise à jour…' : 'Actualiser' }}
        </DibodevButton>
      </div>
    </div>

    <div v-if="loading && items.length === 0" class="flex items-center gap-2 text-gray-300">
      <DibodevSpinner :size="24" />
      Chargement…
    </div>

    <div
      v-else-if="filteredItems.length === 0"
      class="rounded-lg border border-gray-600 bg-gray-800 p-8 text-center text-gray-300"
    >
      {{ items.length === 0 ? 'Aucune page pour le moment.' : 'Aucun résultat pour les filtres choisis.' }}
    </div>

    <div v-else class="min-w-0 w-full sm:max-w-[calc(100vw-310px)]">
      <DibodevTable
        :fields="indexingTableFields"
        :card-fields="indexingCardFields"
        :items="filteredItems"
        :load="false"
        :row-key="'url'"
        :switch-to-card-at="768"
      >
        <template #card-header="{ item }">
          <span class="text-lg font-semibold text-gray-100">{{ (item as IndexingItem).title }}</span>
        </template>
        <template #coverageState="{ item }">
          <template v-if="(item as IndexingItem).coverageState">
            {{ (item as IndexingItem).coverageState }}
            <span
              v-if="(item as IndexingItem).googleCanonical && (item as IndexingItem).coverageState?.toLowerCase().includes('redirection')"
              class="block mt-1 text-xs text-gray-500"
            >
              Redirige vers {{ (item as IndexingItem).googleCanonical }}
            </span>
          </template>
          <span v-else class="text-gray-500">—</span>
        </template>
        <template #verdict="{ item }">
          <span
            v-if="(item as IndexingItem).verdict === 'PASS'"
            class="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400"
            >PASS</span
          >
          <span
            v-else-if="(item as IndexingItem).verdict === 'FAIL'"
            class="rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-medium text-red-400"
            >FAIL</span
          >
          <span
            v-else-if="(item as IndexingItem).verdict === 'NEUTRAL'"
            class="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-400"
            >NEUTRAL</span
          >
          <span v-else class="text-gray-500">—</span>
        </template>
        <template #lastCrawlTime="{ item }">
          <span class="text-gray-200">{{ formatLastCrawl((item as IndexingItem).lastCrawlTime) }}</span>
        </template>
        <template #url="{ item }">
          <div class="flex min-w-0 flex-wrap items-center justify-start gap-2 break-words sm:justify-end">
            <DibodevLink
              :link="(item as IndexingItem).url"
              external-link
              class="min-w-0 break-all"
            >
              {{ (item as IndexingItem).url }}
            </DibodevLink>
            <DibodevButton size="xs" outlined class="shrink-0" @click="copyUrl((item as IndexingItem).url)">
              Copier
            </DibodevButton>
          </div>
        </template>
        <template #signal="{ item }">
          <span class="rounded px-2 py-0.5 text-xs font-medium" :class="getSignalBadgeClass(item as IndexingItem)">
            {{ getSignalLabel(item as IndexingItem) }}
          </span>
        </template>
        <template #actions="{ item }">
          <div class="flex w-full flex-col gap-2">
            <DibodevButton
              v-if="gscConnected"
              class="w-full"
              size="sm"
              :disabled="refreshingUrl === (item as IndexingItem).url"
              @click="refreshUrl((item as IndexingItem).url)"
            >
              <span v-if="refreshingUrl === (item as IndexingItem).url" class="mr-1.5 inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
              {{ refreshingUrl === (item as IndexingItem).url ? 'Actualisation…' : 'Actualiser' }}
            </DibodevButton>
            <DibodevButton
              v-if="(item as IndexingItem).inspectionResultLink"
              class="w-full"
              size="sm"
              outlined
              :to="gscConsoleUrl((item as IndexingItem).inspectionResultLink!)"
            >
              Search Console
            </DibodevButton>
            <span v-if="!gscConnected && !(item as IndexingItem).inspectionResultLink" class="text-sm text-gray-400">GSC non connecté</span>
          </div>
        </template>
      </DibodevTable>
    </div>

    <div v-if="!gscConnected && !loading" class="rounded-lg border border-amber-600/50 bg-amber-500/10 p-4">
      <p class="text-sm text-amber-200">
        Configure Google Search Console pour afficher le statut. Ajoute <code class="rounded bg-gray-800 px-1">GSC_SERVICE_ACCOUNT_JSON</code> dans ton fichier <code class="rounded bg-gray-800 px-1">.env</code> avec la clé JSON d'un Service Account, puis ajoute l'email du SA comme <strong>Owner</strong> dans Search Console.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Ref } from 'vue'
import DibodevAlert from '~/components/feedback/DibodevAlert.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevTable from '~/components/core/DibodevTable.vue'
import DibodevSearchBar from '~/components/inputs/DibodevSearchBar.vue'
import DibodevSelect from '~/components/core/DibodevSelect.vue'
import DibodevSpinner from '~/components/ui/DibodevSpinner.vue'
import type { DibodevSelectOption } from '~/core/types/DibodevSelect'
import type { DibodevTableField } from '~/core/types/DibodevTable'
import type { DibodevTableCardField } from '~/core/types/DibodevTableCard'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Indexation Google — Dashboard',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

export type IndexingItem = {
  url: string
  title: string
  type: string
  verdict?: string
  coverageState?: string
  lastCrawlTime?: string
  inspectionResultLink?: string
  googleCanonical?: string
  checkedAt?: string
}

type IndexingApiResponse = {
  items: IndexingItem[]
  refresh: { status: 'idle' | 'running'; startedAt?: string; finishedAt?: string }
  gscConnected: boolean
}

const CACHE_KEY = 'dashboard-indexing-cache'
const POLL_INTERVAL_MS = 3000

const items: Ref<IndexingItem[]> = ref([])
const loading: Ref<boolean> = ref(true)
const error: Ref<string> = ref('')
const gscConnected: Ref<boolean> = ref(false)
const refreshStatus: Ref<'idle' | 'running'> = ref('idle')
const searchText: Ref<string> = ref('')
const refreshingUrl: Ref<string | null> = ref(null)

const verdictOptions: DibodevSelectOption[] = [
  { label: 'Tous les verdicts', value: '' },
  { label: 'PASS', value: 'PASS' },
  { label: 'NEUTRAL', value: 'NEUTRAL' },
  { label: 'FAIL', value: 'FAIL' },
]
const typeOptions: DibodevSelectOption[] = [
  { label: 'Tous les types', value: '' },
  { label: 'Page', value: 'page' },
  { label: 'Blog', value: 'blog' },
  { label: 'Projet', value: 'project' },
]
const selectedVerdict = ref<DibodevSelectOption>(verdictOptions[0]!)
const selectedType = ref<DibodevSelectOption>(typeOptions[0]!)

const indexingTableFields: DibodevTableField[] = [
  { key: 'url', label: 'URL', cellsClasses: '!whitespace-normal min-w-[300px] max-w-[320px] break-words' },
  { key: 'coverageState', label: 'Statut' },
  { key: 'verdict', label: 'Verdict' },
  { key: 'signal', label: 'Signal' },
  { key: 'lastCrawlTime', label: 'Dernière exploration' },
  { key: 'actions', label: 'Actions', cellsClasses: 'text-right' },
]
const indexingCardFields: DibodevTableCardField[] = [
  { key: 'url', label: 'URL' },
  { key: 'coverageState', label: 'Statut' },
  { key: 'verdict', label: 'Verdict' },
  { key: 'signal', label: 'Signal' },
  { key: 'lastCrawlTime', label: 'Dernière exploration' },
  { key: 'actions', label: 'Actions' },
]

/** Normalise l’URL GSC pour utiliser le chemin u/1 (ex. https://search.google.com/u/1/search-console). */
function gscConsoleUrl(link: string): string {
  if (!link) return 'https://search.google.com/u/1/search-console'
  if (link.includes('search.google.com/u/1/')) return link
  return link.replace(/search\.google\.com\/(?!u\/1)/, 'search.google.com/u/1/')
}

const filteredItems = computed(() => {
  let list = items.value
  const v = selectedVerdict.value?.value
  if (v) list = list.filter((row) => row.verdict === v)
  const t = selectedType.value?.value
  if (t) list = list.filter((row) => row.type === t)
  const q = searchText.value.trim().toLowerCase()
  if (q) {
    list = list.filter(
      (row) =>
        row.title.toLowerCase().includes(q) ||
        row.url.toLowerCase().includes(q),
    )
  }
  return list
})

function formatLastCrawl(iso?: string): string {
  if (!iso) return '—'
  try {
    const d = new Date(iso)
    return d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  } catch {
    return iso
  }
}

const ONE_DAY_MS = 24 * 60 * 60 * 1000

function getSignalLabel(item: IndexingItem): string {
  if (item.verdict === 'PASS') return 'Indexée'
  if (item.coverageState === 'Explorée, actuellement non indexée') return 'Crawl OK, indexation pas encore faite'
  if (item.coverageState === 'Google ne reconnaît pas cette URL') return 'Non découverte (pas crawlé)'
  if (
    item.verdict !== 'PASS' &&
    item.lastCrawlTime &&
    Date.now() - new Date(item.lastCrawlTime).getTime() < ONE_DAY_MS
  ) {
    return 'Crawl récent — en attente d\'indexation'
  }
  return item.coverageState?.trim() || 'À vérifier'
}

function getSignalBadgeClass(item: IndexingItem): string {
  const label = getSignalLabel(item)
  if (label === 'Indexée') return 'bg-emerald-500/20 text-emerald-300'
  if (label === 'Crawl OK, indexation pas encore faite') return 'bg-amber-500/30 text-amber-200'
  if (label === 'Non découverte (pas crawlé)') return 'bg-red-500/20 text-red-300'
  if (label === 'Crawl récent — en attente d\'indexation') return 'bg-blue-500/30 text-blue-200'
  return 'bg-purple-500/20 text-purple-200'
}

async function fetchFromApi(force = false): Promise<void> {
  const cache = useState<IndexingApiResponse | null>(CACHE_KEY)
  if (!force && cache.value) {
    items.value = cache.value.items ?? []
    gscConnected.value = cache.value.gscConnected ?? false
    refreshStatus.value = cache.value.refresh?.status ?? 'idle'
    loading.value = false
    return
  }
  loading.value = true
  error.value = ''
  try {
    const data = await $fetch<IndexingApiResponse>('/api/indexing-status')
    items.value = data.items ?? []
    gscConnected.value = data.gscConnected ?? false
    refreshStatus.value = data.refresh?.status ?? 'idle'
    cache.value = data
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Erreur lors du chargement.'
    error.value = msg
    items.value = []
  } finally {
    loading.value = false
  }
}


let pollIntervalId: ReturnType<typeof setInterval> | null = null

async function startRefresh(): Promise<void> {
  try {
    await $fetch('/api/indexing-status/refresh', { method: 'POST' })
    refreshStatus.value = 'running'
    if (pollIntervalId) clearInterval(pollIntervalId)
    pollIntervalId = setInterval(async () => {
      const data = await $fetch<IndexingApiResponse>('/api/indexing-status')
      refreshStatus.value = data.refresh?.status ?? 'idle'
      items.value = data.items ?? []
      useState(CACHE_KEY).value = data
      if (data.refresh?.status !== 'running') {
        if (pollIntervalId) clearInterval(pollIntervalId)
        pollIntervalId = null
      }
    }, POLL_INTERVAL_MS)
    setTimeout(() => {
      if (pollIntervalId) {
        clearInterval(pollIntervalId)
        pollIntervalId = null
      }
      refreshStatus.value = 'idle'
    }, 600_000)
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Erreur lors de l’actualisation.'
  }
}

async function copyUrl(url: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(url)
  } catch {
    error.value = 'Copie impossible'
  }
}

async function refreshUrl(url: string): Promise<void> {
  refreshingUrl.value = url
  error.value = ''
  try {
    const data = await $fetch<{ ok: boolean; item: IndexingItem }>('/api/indexing-status/refresh-url', {
      method: 'POST',
      body: { url },
    })
    const idx = items.value.findIndex((r) => r.url === url)
    if (idx !== -1 && data.item) items.value[idx] = data.item
    const cache = useState<IndexingApiResponse | null>(CACHE_KEY)
    if (cache.value) cache.value = { ...cache.value, items: [...items.value] }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Erreur lors de l\'actualisation de l\'URL.'
  } finally {
    refreshingUrl.value = null
  }
}

onMounted(async () => {
  const cache = useState<IndexingApiResponse | null>(CACHE_KEY)
  if (cache.value) {
    items.value = cache.value.items ?? []
    gscConnected.value = cache.value.gscConnected ?? false
    refreshStatus.value = cache.value.refresh?.status ?? 'idle'
    loading.value = false
    return
  }
  await fetchFromApi(false)
})
</script>
