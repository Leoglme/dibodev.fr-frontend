<template>
  <div class="flex flex-col gap-8 px-6 py-12 sm:px-8">
    <div>
      <h1 class="text-2xl font-semibold text-gray-100">Indexation Google</h1>
      <p class="mt-1 text-gray-400">
        Liste des articles du blog et statut d’indexation dans Google (via Search Console). Connecte ton compte pour
        afficher le statut.
      </p>
    </div>

    <DibodevAlert v-if="error" :message="error" variant="error" dismissible @hide="error = ''" />

    <div
      v-if="tokenToCopy"
      class="flex max-w-2xl items-start justify-between gap-4 rounded-lg border border-emerald-500/50 bg-emerald-500/10 p-4"
    >
      <div class="min-w-0 flex-1">
        <p class="mb-2 font-medium text-emerald-200">Ajoute ce token à ton fichier .env :</p>
        <code class="block rounded bg-gray-800 px-2 py-1 text-sm break-all text-gray-100"
          >GSC_REFRESH_TOKEN={{ tokenToCopy }}</code
        >
        <p class="mt-2 text-sm text-emerald-200/90">Puis redémarre l’application.</p>
      </div>
      <button
        type="button"
        class="shrink-0 rounded p-1 text-gray-400 hover:text-gray-200"
        aria-label="Fermer"
        @click="tokenToCopy = ''"
      >
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div v-if="!gscConnected && !loading" class="rounded-lg border border-amber-600/50 bg-amber-500/10 p-4">
      <p class="text-sm text-amber-200">
        Connecte Google Search Console pour afficher le statut d’indexation. Configure d’abord
        <code class="rounded bg-gray-800 px-1">GOOGLE_CLIENT_ID</code> et
        <code class="rounded bg-gray-800 px-1">GOOGLE_CLIENT_SECRET</code> dans ton .env, puis clique ci-dessous.
      </p>
      <DibodevButton class="mt-3" :disabled="authUrlLoading" @click="openGscAuth">
        {{ authUrlLoading ? 'Chargement…' : 'Connecter Search Console' }}
      </DibodevButton>
    </div>

    <div v-if="loading" class="flex items-center gap-2 text-gray-400">
      <span class="inline-block h-5 w-5 animate-spin rounded-full border-2 border-gray-500 border-t-[#8472F3]" />
      Chargement des articles…
    </div>

    <div
      v-else-if="articles.length === 0"
      class="rounded-lg border border-gray-600 bg-gray-800 p-8 text-center text-gray-400"
    >
      Aucun article pour le moment. Générez un article depuis le dashboard pour qu’il apparaisse ici.
    </div>

    <div v-else class="overflow-hidden rounded-lg border border-gray-600 bg-gray-800">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-600">
          <thead class="bg-gray-700/50">
            <tr>
              <th
                scope="col"
                class="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-300 uppercase sm:px-6"
              >
                Titre
              </th>
              <th
                scope="col"
                class="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-300 uppercase sm:px-6"
              >
                Statut
              </th>
              <th
                scope="col"
                class="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-300 uppercase sm:px-6"
              >
                URL
              </th>
              <th
                scope="col"
                class="px-4 py-3 text-right text-xs font-medium tracking-wider text-gray-300 uppercase sm:px-6"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-600">
            <tr v-for="article in articles" :key="article.slug" class="hover:bg-gray-750 bg-gray-800">
              <td class="px-4 py-3 text-sm font-medium whitespace-nowrap text-gray-100 sm:px-6">
                {{ article.title }}
              </td>
              <td class="px-4 py-3 text-sm whitespace-nowrap sm:px-6">
                <span v-if="article.indexStatus === null" class="text-gray-500">—</span>
                <span
                  v-else-if="article.indexStatus === 'indexed'"
                  class="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400"
                  >Indexé</span
                >
                <span
                  v-else-if="article.indexStatus === 'not_indexed'"
                  class="rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-medium text-red-400"
                  >Non indexé</span
                >
                <span
                  v-else-if="article.indexStatus === 'excluded'"
                  class="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-400"
                  >Exclu</span
                >
                <span v-else class="rounded-full bg-gray-500/20 px-2 py-0.5 text-xs font-medium text-gray-400"
                  >Inconnu</span
                >
              </td>
              <td
                class="max-w-[280px] truncate px-4 py-3 text-sm text-gray-400 sm:max-w-xs sm:px-6"
                :title="article.url"
              >
                <a :href="article.url" target="_blank" rel="noopener noreferrer" class="text-[#bdb3ff] hover:underline">
                  {{ article.url }}
                </a>
              </td>
              <td class="px-4 py-3 text-right text-sm whitespace-nowrap sm:px-6">
                <DibodevButton size="sm" outlined :to="searchConsoleUrl"> Ouvrir Search Console </DibodevButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <p class="text-sm text-gray-500">
      Le lien « Ouvrir Search Console » ouvre
      <a :href="searchConsoleUrl" target="_blank" rel="noopener noreferrer" class="text-[#bdb3ff] underline"
        >Search Console</a
      >. Utilise l’outil « Inspection d’URL » pour demander une indexation si une page n’est pas indexée (quota limité
      par Google).
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import DibodevAlert from '~/components/feedback/DibodevAlert.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import type { ArticleWithIndexStatus } from '~/server/api/dashboard/articles/indexing-status.get'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Indexation Google — Dashboard',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const SEARCH_CONSOLE_URL = 'https://search.google.com/u/1/search-console'

const articles: Ref<ArticleWithIndexStatus[]> = ref([])
const loading: Ref<boolean> = ref(true)
const error: Ref<string> = ref('')
const gscConnected: Ref<boolean> = ref(false)
const authUrlLoading: Ref<boolean> = ref(false)
const tokenToCopy: Ref<string> = ref('')
const searchConsoleUrl = SEARCH_CONSOLE_URL

/** Délai max côté client pour éviter un chargement infini (backend max ~90s). */
const INDEXING_STATUS_CLIENT_TIMEOUT_MS = 95_000

async function fetchArticles(): Promise<void> {
  loading.value = true
  error.value = ''
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), INDEXING_STATUS_CLIENT_TIMEOUT_MS)
  try {
    const data = await $fetch<{ articles: ArticleWithIndexStatus[]; gscConnected: boolean }>(
      '/api/dashboard/articles/indexing-status',
      { signal: controller.signal },
    )
    articles.value = data.articles ?? []
    gscConnected.value = data.gscConnected ?? false
  } catch (e) {
    const msg =
      e instanceof Error
        ? e.name === 'AbortError'
          ? 'Délai dépassé. L’API a mis trop de temps à répondre.'
          : e.message
        : 'Erreur lors du chargement des articles.'
    error.value = msg
    articles.value = []
  } finally {
    clearTimeout(timeoutId)
    loading.value = false
  }
}

async function openGscAuth(): Promise<void> {
  authUrlLoading.value = true
  error.value = ''
  try {
    const { url } = await $fetch<{ url: string }>('/api/dashboard/gsc/auth-url')
    window.location.href = url
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Impossible d’obtenir l’URL d’autorisation.'
    error.value = msg
  } finally {
    authUrlLoading.value = false
  }
}

async function tryGetRefreshTokenFromCookie(): Promise<void> {
  try {
    const data = await $fetch<{ refreshToken: string }>('/api/dashboard/gsc/refresh-token')
    if (data.refreshToken) {
      tokenToCopy.value = data.refreshToken
    }
  } catch {
    // No cookie or already consumed
  }
}

onMounted(async () => {
  const route = useRoute()
  if (route.query.gsc_connected === '1') {
    await tryGetRefreshTokenFromCookie()
  }
  await fetchArticles()
})
</script>
