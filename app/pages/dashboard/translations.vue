<template>
  <div class="flex min-w-0 flex-1 flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12">
    <div class="min-w-0">
      <h1 class="text-2xl font-semibold text-gray-100">Traductions</h1>
      <p class="mt-1 text-gray-200">
        Traduire le contenu des projets et des articles du français vers l’anglais (EN) et l’espagnol (ES). Les
        traductions sont poussées sur le dépôt GitHub. Utilisez « Actualiser » pour mettre à jour la liste.
      </p>
    </div>

    <DibodevAlert v-if="error" :message="error" variant="error" dismissible @hide="error = ''" />
    <DibodevAlert
      v-if="successMessage"
      :message="successMessage"
      variant="success"
      dismissible
      @hide="successMessage = ''"
    />

    <div class="flex flex-col gap-4">
      <!-- Search + Actualiser (same line on large screen) -->
      <div class="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div class="w-full min-w-0 flex-1 md:max-w-md">
          <DibodevSearchBar title="Recherche" placeholder="Nom ou slug…" v-model:value="searchText" />
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <span
            v-if="!loading"
            class="rounded-full px-2.5 py-1 text-xs font-medium"
            :class="deploySynced ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'"
          >
            {{ deploySynced ? 'Synchronisé avec le site' : 'En attente de déploiement' }}
          </span>
          <DibodevButton :disabled="loading" @click="fetchList(true)">
            <span
              v-if="loading"
              class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"
            />
            {{ loading ? 'Chargement…' : 'Actualiser' }}
          </DibodevButton>
        </div>
      </div>

      <!-- Tabs full width above table -->
      <nav class="flex w-full min-w-0 rounded-lg border border-gray-600 bg-gray-800 p-1" aria-label="Onglets">
        <button
          type="button"
          class="min-w-0 flex-1 cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-colors"
          :class="
            activeTab === 'projects'
              ? 'bg-primary text-gray-100'
              : 'text-gray-300 hover:bg-gray-700 hover:text-gray-100'
          "
          @click="activeTab = 'projects'"
        >
          Projets
        </button>
        <button
          type="button"
          class="min-w-0 flex-1 cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-colors"
          :class="
            activeTab === 'articles'
              ? 'bg-primary text-gray-100'
              : 'text-gray-300 hover:bg-gray-700 hover:text-gray-100'
          "
          @click="activeTab = 'articles'"
        >
          Articles
        </button>
      </nav>

      <div v-if="loading && currentItems.length === 0" class="flex items-center gap-2 text-gray-300">
        <DibodevSpinner :size="24" />
        Chargement…
      </div>

      <div
        v-else-if="filteredItems.length === 0"
        class="rounded-lg border border-gray-600 bg-gray-800 p-8 text-center text-gray-300"
      >
        {{
          currentItems.length === 0
            ? activeTab === 'projects'
              ? 'Aucun projet.'
              : 'Aucun article.'
            : 'Aucun résultat pour la recherche.'
        }}
      </div>

      <div v-else class="w-full min-w-0">
        <p class="mb-3 text-sm font-medium text-gray-200">
          {{ filteredItems.length === 1 ? '1 résultat' : `${filteredItems.length} résultats` }}
        </p>
        <DibodevTable
          :fields="tableFields"
          :card-fields="cardFields"
          :items="filteredItems"
          :load="false"
          row-key="fullSlug"
          :switch-to-card-at="768"
        >
          <template #card-header="{ item }">
            <span class="text-lg font-semibold text-gray-100">{{ (item as TranslatableItem).name }}</span>
          </template>
          <template #url="{ item }">
            <div class="flex min-w-0 flex-wrap items-center justify-start gap-2 break-words">
              <DibodevCopyButton :value="getItemUrl(item as TranslatableItem)" />
              <DibodevLink :link="getItemUrl(item as TranslatableItem)" external-link class="min-w-0 break-all">
                {{ getItemUrl(item as TranslatableItem) }}
              </DibodevLink>
            </div>
          </template>
          <template #status="{ item }">
            <span
              v-if="(item as TranslatableItem).hasEn && (item as TranslatableItem).hasEs"
              class="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400"
            >
              Traduit ✓
            </span>
            <span v-else class="rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-medium text-red-400">
              Non traduit
            </span>
          </template>
          <template #enLigne="{ item }">
            <span
              v-if="deploySynced && (item as TranslatableItem).hasEn && (item as TranslatableItem).hasEs"
              class="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400"
            >
              Oui
            </span>
            <span v-else class="rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-medium text-red-400"> Non </span>
          </template>
          <template #actions="{ item }">
            <template v-if="(item as TranslatableItem).hasEn && (item as TranslatableItem).hasEs">
              <span class="text-gray-500">—</span>
            </template>
            <div v-else class="flex flex-wrap gap-2">
              <DibodevButton
                size="sm"
                :disabled="isTranslating((item as TranslatableItem).fullSlug)"
                @click="translateItemAllLocales(item as TranslatableItem)"
              >
                <span
                  v-if="isTranslating((item as TranslatableItem).fullSlug)"
                  class="mr-1.5 inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent"
                />
                Traduire EN + ES
              </DibodevButton>
            </div>
          </template>
        </DibodevTable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import DibodevAlert from '~/components/feedback/DibodevAlert.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevCopyButton from '~/components/DibodevCopyButton.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevTable from '~/components/core/DibodevTable.vue'
import DibodevSearchBar from '~/components/inputs/DibodevSearchBar.vue'
import DibodevSpinner from '~/components/ui/DibodevSpinner.vue'
import type { DibodevTableField } from '~/core/types/DibodevTable'
import type { DibodevTableCardField } from '~/core/types/DibodevTableCard'
import type {
  TranslatableItem,
  ListTranslatablesResponse,
  TranslateBody,
  TranslateResponse,
  TranslationTargetLocale,
  TranslatableEntityType,
} from '~/types/dashboard/translations'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Traductions — Dashboard',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const projects: Ref<TranslatableItem[]> = ref([])
const articles: Ref<TranslatableItem[]> = ref([])
const loading: Ref<boolean> = ref(true)
const error: Ref<string> = ref('')
const successMessage: Ref<string> = ref('')
const activeTab: Ref<'projects' | 'articles'> = ref('projects')
const searchText: Ref<string> = ref('')
const translatingKeys: Ref<string[]> = ref([])
const translatingLocale: Ref<TranslationTargetLocale | null> = ref(null)
const deploySynced: Ref<boolean> = ref(false)

const SITE_URL: string = 'https://dibodev.fr'

const tableFields: DibodevTableField[] = [
  { key: 'name', label: 'Nom', cellsClasses: '!whitespace-normal min-w-[180px] max-w-[280px]' },
  {
    key: 'url',
    label: 'Lien',
    cellsClasses: '!whitespace-normal min-w-[300px] max-w-[320px] break-words',
  },
  { key: 'status', label: 'Statut' },
  { key: 'enLigne', label: 'En ligne' },
  { key: 'actions', label: 'Actions', cellsClasses: 'text-right' },
]
const cardFields: DibodevTableCardField[] = [
  { key: 'name', label: 'Nom' },
  { key: 'url', label: 'Lien' },
  { key: 'status', label: 'Statut' },
  { key: 'enLigne', label: 'En ligne' },
  { key: 'actions', label: 'Actions' },
]

function getItemUrl(item: TranslatableItem): string {
  return `${SITE_URL}/${item.fullSlug}`
}

const currentItems: ComputedRef<TranslatableItem[]> = computed((): TranslatableItem[] => {
  return activeTab.value === 'projects' ? projects.value : articles.value
})

const filteredItems: ComputedRef<TranslatableItem[]> = computed((): TranslatableItem[] => {
  const list: TranslatableItem[] = currentItems.value
  const q: string = searchText.value.trim().toLowerCase()
  if (!q) return list
  return list.filter(
    (item: TranslatableItem): boolean =>
      item.name.toLowerCase().includes(q) ||
      item.slug.toLowerCase().includes(q) ||
      item.fullSlug.toLowerCase().includes(q),
  )
})

function isTranslating(fullSlug: string): boolean {
  return translatingKeys.value.includes(fullSlug)
}

async function fetchList(force: boolean = false): Promise<void> {
  if (!force && (projects.value.length > 0 || articles.value.length > 0)) {
    loading.value = false
    return
  }
  loading.value = true
  error.value = ''
  try {
    const data: ListTranslatablesResponse = await $fetch<ListTranslatablesResponse>('/api/dashboard/translations/list')
    projects.value = data.projects ?? []
    articles.value = data.articles ?? []
    deploySynced.value = data.deploySynced ?? false
  } catch (e: unknown) {
    const msg: string = e instanceof Error ? e.message : 'Erreur lors du chargement.'
    error.value = msg
    projects.value = []
    articles.value = []
    deploySynced.value = false
  } finally {
    loading.value = false
  }
}

const TARGET_LOCALES: TranslationTargetLocale[] = ['en', 'es']

async function translateItem(item: TranslatableItem, locale: TranslationTargetLocale): Promise<void> {
  const key: string = item.fullSlug
  translatingKeys.value = [...translatingKeys.value, key]
  translatingLocale.value = locale
  error.value = ''
  successMessage.value = ''
  const entityType: TranslatableEntityType = item.type
  const body: TranslateBody = { entityType, slug: item.fullSlug, targetLocale: locale }
  try {
    const res: TranslateResponse = await $fetch<TranslateResponse>('/api/dashboard/translations/translate', {
      method: 'POST',
      body,
    })
    if (res.ok) {
      successMessage.value = res.message
      await fetchList(true)
    } else {
      error.value = res.message || 'Erreur inconnue'
    }
  } catch (e: unknown) {
    const msg: string = e instanceof Error ? e.message : 'Erreur lors de la traduction.'
    error.value = msg
  } finally {
    translatingKeys.value = translatingKeys.value.filter((k: string): boolean => k !== key)
    translatingLocale.value = null
  }
}

async function translateItemAllLocales(item: TranslatableItem): Promise<void> {
  const key: string = item.fullSlug
  const localesToRun: TranslationTargetLocale[] = TARGET_LOCALES.filter(
    (locale: TranslationTargetLocale): boolean => (locale === 'en' && !item.hasEn) || (locale === 'es' && !item.hasEs),
  )
  if (localesToRun.length === 0) return
  translatingKeys.value = [...translatingKeys.value, key]
  error.value = ''
  successMessage.value = ''
  try {
    const entityType: TranslatableEntityType = item.type
    const body: TranslateBody = { entityType, slug: item.fullSlug, targetLocales: localesToRun }
    const res: TranslateResponse = await $fetch<TranslateResponse>('/api/dashboard/translations/translate', {
      method: 'POST',
      body,
    })
    if (res.ok) {
      successMessage.value = res.message
      await fetchList(true)
    } else {
      error.value = res.message || 'Erreur inconnue'
    }
  } catch (e: unknown) {
    const msg: string = e instanceof Error ? e.message : 'Erreur lors de la traduction.'
    error.value = msg
  } finally {
    translatingKeys.value = translatingKeys.value.filter((k: string): boolean => k !== key)
  }
}

onMounted((): void => {
  fetchList(false)
})
</script>
