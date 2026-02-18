<template>
  <div class="flex flex-col gap-10 px-6 py-12 sm:gap-8 sm:px-8">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 class="text-2xl font-semibold text-gray-100">Générer un article</h1>
        <p class="mt-1 text-gray-400">
          Proposition de sujet (avec liste des sujets déjà traités), puis génération et création dans Storyblok.
        </p>
      </div>
      <DibodevButton
        v-if="step !== 'idle' || suggestedTopic || article"
        type="button"
        outlined
        size="sm"
        @click="resetAll"
      >
        Remettre à zéro
      </DibodevButton>
    </div>

    <DibodevAlert
      v-if="createSuccess"
      :message="createSuccess"
      variant="success"
      dismissible
      class="mt-2"
      @hide="createSuccess = ''"
    />

    <div class="flex flex-col gap-4">
      <DibodevLabel id="optional-sentence"> Idée optionnelle (une phrase pour orienter le sujet) </DibodevLabel>
      <textarea
        id="optional-sentence"
        v-model="optionalSentence"
        rows="3"
        placeholder="Ex: un article pour les plombiers qui cherchent un site vitrine"
        class="w-full rounded border-2 border-transparent bg-gray-600 px-3 py-2 text-gray-100 placeholder:text-base placeholder:text-gray-300 hover:border-gray-300 focus:border-[#8472F3] focus:bg-gray-800 focus:outline-none"
      />
    </div>

    <div v-if="step === 'idle'" class="flex flex-col gap-4">
      <DibodevButton type="button" :disabled="loadingSubject" @click="suggestSubject">
        {{ loadingSubject ? 'Proposition…' : 'Proposer un sujet' }}
      </DibodevButton>
      <DibodevAlert v-if="errorSubject" :message="errorSubject" variant="error" dismissible @hide="errorSubject = ''" />
    </div>

    <div
      v-if="step === 'subject' && suggestedTopic"
      class="flex flex-col gap-4 rounded-lg border border-gray-600 bg-gray-800 p-6"
    >
      <p class="text-sm text-gray-400">Sujet proposé</p>
      <p class="text-lg font-medium text-gray-100">
        {{ suggestedTopic }}
      </p>
      <div class="flex flex-wrap gap-3">
        <DibodevButton type="button" :disabled="loadingArticle" @click="generateArticle">
          {{ loadingArticle ? 'Génération…' : 'OK, générer l’article' }}
        </DibodevButton>
        <DibodevButton type="button" outlined :disabled="loadingSubject" @click="suggestSubject">
          Non, un autre sujet
        </DibodevButton>
      </div>
      <DibodevAlert v-if="errorArticle" :message="errorArticle" variant="error" dismissible @hide="errorArticle = ''" />
    </div>

    <div v-if="step === 'preview' && article" class="flex flex-col gap-6">
      <div class="rounded-lg border border-gray-600 bg-gray-800 p-6">
        <h2 class="text-lg font-semibold text-gray-100">Aperçu</h2>
        <p class="mt-1 text-sm text-gray-400">{{ article.title }} — {{ article.slug }}</p>
        <div
          v-if="article.qualityScore != null"
          class="mt-3 flex items-center gap-2 rounded-lg border border-gray-600 bg-gray-700/50 px-3 py-2"
        >
          <span class="text-sm text-gray-400">Score qualité</span>
          <span
            class="rounded-full px-2.5 py-0.5 text-sm font-medium"
            :class="
              article.qualityScore >= 70
                ? 'bg-emerald-500/20 text-emerald-400'
                : article.qualityScore >= 50
                  ? 'bg-amber-500/20 text-amber-400'
                  : 'bg-red-500/20 text-red-400'
            "
          >
            {{ article.qualityScore }}/100
          </span>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          <DibodevBadge v-for="tag in article.tags" :key="tag" backgroundColor="#35424d" textColor="#f5f4fb" size="sm">
            {{ tag }}
          </DibodevBadge>
        </div>

        <div class="mt-6 rounded-lg border border-gray-600 bg-gray-900 p-4">
          <h3 class="text-sm font-medium text-gray-300">Image de couverture</h3>
          <p class="mt-1 text-xs text-gray-400">
            Suggérer une photo Unsplash ou coller l’URL d’une image (ex. Lummi). Optionnel.
          </p>
          <div v-if="chosenCoverUrl" class="mt-4 flex flex-col gap-3">
            <button
              type="button"
              class="group relative w-full cursor-pointer overflow-hidden rounded-xl border border-gray-600 transition hover:border-gray-500"
              @click="openCoverModal(chosenCoverUrl, 'Couverture choisie')"
            >
              <div class="aspect-video w-full overflow-hidden bg-gray-700">
                <img
                  :src="chosenCoverUrl"
                  alt="Couverture choisie"
                  class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div
                class="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-200 group-hover:bg-black/40 group-hover:opacity-100"
              >
                <span class="rounded-full bg-white/20 p-2 backdrop-blur-sm">
                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </span>
              </div>
            </button>
            <DibodevButton type="button" outlined size="sm" @click="clearCover"> Changer d’image </DibodevButton>
          </div>
          <template v-else>
            <div class="mt-4 flex flex-wrap items-center gap-3">
              <DibodevButton type="button" :disabled="loadingSuggest" outlined @click="suggestCover">
                {{ loadingSuggest ? 'Recherche…' : 'Suggérer une photo (Unsplash)' }}
              </DibodevButton>
              <span class="text-xs text-gray-400">ou</span>
              <div class="flex min-w-0 flex-1 flex-wrap items-center gap-2 sm:flex-nowrap">
                <input
                  v-model="customUrlInput"
                  type="url"
                  placeholder="URL d’une image (ex. Lummi)"
                  class="min-w-0 flex-1 rounded border border-gray-600 bg-gray-700 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-400 focus:border-[#8472F3] focus:outline-none"
                  @keydown.enter.prevent="useCustomUrl"
                />
                <DibodevButton
                  type="button"
                  outlined
                  size="sm"
                  :disabled="!customUrlInput.trim()"
                  @click="useCustomUrl"
                >
                  Utiliser ce lien
                </DibodevButton>
              </div>
            </div>
            <p v-if="suggestCoverError" class="mt-2 text-sm text-amber-500">{{ suggestCoverError }}</p>
            <div v-if="suggestedPhoto" class="mt-4 flex flex-col gap-3">
              <button
                type="button"
                class="group relative w-full cursor-pointer overflow-hidden rounded-xl border border-gray-600 transition hover:border-gray-500"
                @click="openCoverModal(suggestedPhoto.url, 'Suggestion Unsplash')"
              >
                <div class="aspect-video w-full overflow-hidden bg-gray-700">
                  <img
                    :src="suggestedPhoto.url"
                    alt="Suggestion Unsplash"
                    class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div
                  class="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-200 group-hover:bg-black/40 group-hover:opacity-100"
                >
                  <span class="rounded-full bg-white/20 p-2 backdrop-blur-sm">
                    <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </span>
                </div>
              </button>
              <p class="text-xs text-gray-400">{{ suggestedPhoto.attribution }}</p>
              <div class="flex flex-wrap gap-2">
                <DibodevButton type="button" size="sm" @click="useSuggestedPhoto"> Utiliser cette photo </DibodevButton>
                <DibodevButton type="button" outlined size="sm" :disabled="loadingSuggest" @click="suggestCover">
                  Une autre photo
                </DibodevButton>
              </div>
            </div>
          </template>
        </div>

        <div class="mt-6 max-h-[60vh] overflow-y-auto rounded border border-gray-600 bg-gray-900 p-6">
          <BlogArticleContent :content="article.contentRichtext" />
        </div>
        <div class="mt-6 flex flex-wrap gap-3">
          <DibodevButton type="button" :disabled="creating" @click="createInStoryblok">
            {{ creating ? 'Création…' : 'Valider et créer dans Storyblok' }}
          </DibodevButton>
          <DibodevButton type="button" outlined @click="step = 'subject'"> Revenir au sujet </DibodevButton>
        </div>
        <DibodevAlert
          v-if="errorCreate"
          :message="errorCreate"
          variant="error"
          dismissible
          class="mt-4"
          @hide="errorCreate = ''"
        />
      </div>
    </div>

    <!-- Modal image de couverture (comme page projet) -->
    <Teleport to="body">
      <Transition name="cover-modal">
        <div
          v-if="coverModalOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          @click="closeCoverModal"
        >
          <button
            type="button"
            class="absolute top-4 right-4 z-10 cursor-pointer rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label="Fermer"
            @click="closeCoverModal"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="relative max-h-[90vh] max-w-[90vw]" @click.stop>
            <img
              v-if="coverModalSrc"
              :src="coverModalSrc"
              :alt="coverModalAlt"
              class="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-2xl object-contain"
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import type { Ref } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevLabel from '~/components/core/DibodevLabel.vue'
import DibodevAlert from '~/components/feedback/DibodevAlert.vue'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'
import BlogArticleContent from '~/components/blog/BlogArticleContent.vue'
import type { GeneratedArticleForPreview } from '~/types/dashboard'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Générer un article — Dashboard',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const STORAGE_KEY = 'dibodev-dashboard-generate-article'

type Step = 'idle' | 'subject' | 'preview'

type PersistedState = {
  step: Step
  suggestedTopic: string
  article: GeneratedArticleForPreview | null
  chosenCoverUrl: string | null
  suggestedPhoto: { url: string; attribution: string } | null
  optionalSentence: string
  customUrlInput: string
}

const optionalSentence: Ref<string> = ref('')
const existingSubjects: Ref<string[]> = ref([])
const step: Ref<Step> = ref('idle')
const suggestedTopic: Ref<string> = ref('')
const loadingSubject: Ref<boolean> = ref(false)
const errorSubject: Ref<string> = ref('')
const loadingArticle: Ref<boolean> = ref(false)
const errorArticle: Ref<string> = ref('')
const article: Ref<GeneratedArticleForPreview | null> = ref<GeneratedArticleForPreview | null>(null)
const creating: Ref<boolean> = ref(false)
const errorCreate: Ref<string> = ref('')
const createSuccess: Ref<string> = ref('')

const suggestedPhoto: Ref<{ url: string; attribution: string } | null> = ref(null)
const loadingSuggest: Ref<boolean> = ref(false)
const suggestCoverError: Ref<string> = ref('')
const chosenCoverUrl: Ref<string | null> = ref(null)
const customUrlInput: Ref<string> = ref('')

const coverModalOpen: Ref<boolean> = ref(false)
const coverModalSrc: Ref<string> = ref('')
const coverModalAlt: Ref<string> = ref('')

function getPersistedState(): PersistedState {
  return {
    step: step.value,
    suggestedTopic: suggestedTopic.value,
    article: article.value,
    chosenCoverUrl: chosenCoverUrl.value,
    suggestedPhoto: suggestedPhoto.value,
    optionalSentence: optionalSentence.value,
    customUrlInput: customUrlInput.value,
  }
}

function saveToStorage(): void {
  if (typeof window === 'undefined') return
  const state = getPersistedState()
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // quota or disabled
  }
}

function loadFromStorage(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    const state = JSON.parse(raw) as PersistedState
    if (!state || typeof state.step !== 'string') return false
    step.value = state.step as Step
    suggestedTopic.value = typeof state.suggestedTopic === 'string' ? state.suggestedTopic : ''
    article.value = state.article && typeof state.article.title === 'string' ? state.article : null
    chosenCoverUrl.value =
      typeof state.chosenCoverUrl === 'string' && state.chosenCoverUrl ? state.chosenCoverUrl : null
    suggestedPhoto.value =
      state.suggestedPhoto &&
      typeof state.suggestedPhoto.url === 'string' &&
      typeof state.suggestedPhoto.attribution === 'string'
        ? state.suggestedPhoto
        : null
    optionalSentence.value = typeof state.optionalSentence === 'string' ? state.optionalSentence : ''
    customUrlInput.value = typeof state.customUrlInput === 'string' ? state.customUrlInput : ''
    return true
  } catch {
    return false
  }
}

function clearStorage(): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}

function resetAll(): void {
  step.value = 'idle'
  optionalSentence.value = ''
  suggestedTopic.value = ''
  article.value = null
  chosenCoverUrl.value = null
  suggestedPhoto.value = null
  customUrlInput.value = ''
  errorSubject.value = ''
  errorArticle.value = ''
  errorCreate.value = ''
  createSuccess.value = ''
  suggestCoverError.value = ''
  clearStorage()
}

watch(
  () => [
    step.value,
    suggestedTopic.value,
    article.value,
    chosenCoverUrl.value,
    suggestedPhoto.value,
    optionalSentence.value,
    customUrlInput.value,
  ],
  () => saveToStorage(),
  { deep: true },
)

async function fetchSubjects(): Promise<void> {
  try {
    const data = await $fetch<{ existingSubjects: string[] }>('/api/dashboard/articles/subjects')
    existingSubjects.value = data.existingSubjects ?? []
  } catch {
    existingSubjects.value = []
  }
}

async function suggestSubject(): Promise<void> {
  loadingSubject.value = true
  errorSubject.value = ''
  errorArticle.value = ''
  errorCreate.value = ''
  createSuccess.value = ''
  try {
    const data = await $fetch<{ suggestedTopic: string }>('/api/dashboard/articles/suggest-subject', {
      method: 'POST',
      body: {
        existingSubjects: existingSubjects.value,
        optionalSentence: optionalSentence.value.trim() || undefined,
      },
    })
    suggestedTopic.value = data.suggestedTopic
    step.value = 'subject'
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Erreur lors de la proposition du sujet.'
    errorSubject.value = msg
  } finally {
    loadingSubject.value = false
  }
}

async function generateArticle(): Promise<void> {
  if (!suggestedTopic.value) return
  loadingArticle.value = true
  errorArticle.value = ''
  errorCreate.value = ''
  createSuccess.value = ''
  try {
    const data = await $fetch<GeneratedArticleForPreview>('/api/dashboard/articles/generate', {
      method: 'POST',
      body: {
        suggestedTopic: suggestedTopic.value,
        existingSubjects: existingSubjects.value,
      },
    })
    article.value = data
    step.value = 'preview'
    suggestedPhoto.value = null
    chosenCoverUrl.value = null
    customUrlInput.value = ''
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Erreur lors de la génération.'
    errorArticle.value = msg
  } finally {
    loadingArticle.value = false
  }
}

function openCoverModal(src: string, alt: string): void {
  coverModalSrc.value = src
  coverModalAlt.value = alt
  coverModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeCoverModal(): void {
  coverModalOpen.value = false
  document.body.style.overflow = ''
}

function clearCover(): void {
  chosenCoverUrl.value = null
  suggestedPhoto.value = null
  customUrlInput.value = ''
}

function useSuggestedPhoto(): void {
  if (suggestedPhoto.value?.url) {
    chosenCoverUrl.value = suggestedPhoto.value.url
    suggestedPhoto.value = null
  }
}

function useCustomUrl(): void {
  const url = customUrlInput.value.trim()
  if (url) {
    chosenCoverUrl.value = url
    customUrlInput.value = ''
    suggestedPhoto.value = null
  }
}

const COVER_STOP_WORDS = new Set([
  'de',
  'du',
  'des',
  'le',
  'la',
  'les',
  'un',
  'une',
  'pour',
  'en',
  'et',
  'ou',
  'sur',
  'au',
  'aux',
  'que',
  'qui',
  'dans',
  'par',
  'avec',
  'sans',
  'votre',
  'vos',
  'plus',
  'tout',
  'tous',
  'autre',
  'optimisez',
  'attirer',
  'booster',
  'clients',
  'locaux',
  'site',
  'web',
])

function extractSearchWords(text: string): string[] {
  const normalized = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return normalized.split(' ').filter((w) => w.length > 1 && !COVER_STOP_WORDS.has(w) && !/^\d+$/.test(w))
}

/**
 * Construit une requête Unsplash cohérente (métier / thème principal).
 * Priorité : partie avant " : " du titre (ex. "Coach sportif"), puis premiers mots du titre, puis tags.
 */
function buildCoverSearchQuery(title: string, tags: string[]): string {
  const cleanTitle = (title.split(/\s+[—–-]\s+/)[0] ?? title).trim()

  const mainPart = cleanTitle.split(/[\s]*:\s*/)[0]?.trim() ?? cleanTitle
  const mainWords = extractSearchWords(mainPart)
  if (mainWords.length >= 2) return `${mainWords[0]} ${mainWords[1]}`
  if (mainWords.length === 1) return mainWords[0]

  const fullWords = extractSearchWords(cleanTitle)
  if (fullWords.length >= 2) return `${fullWords[0]} ${fullWords[1]}`
  if (fullWords.length === 1) return fullWords[0]

  if (tags.length >= 2) return `${tags[0]} ${tags[1]}`.trim()
  if (tags.length === 1 && tags[0].length <= 25) return tags[0]

  return cleanTitle.slice(0, 30).trim() || 'blog'
}

async function suggestCover(): Promise<void> {
  if (!article.value) return
  loadingSuggest.value = true
  suggestedPhoto.value = null
  suggestCoverError.value = ''
  try {
    const query = buildCoverSearchQuery(article.value.title ?? '', article.value.tags ?? [])
    const data = await $fetch<{ url: string | null; attribution: string | null }>(
      `/api/dashboard/articles/suggest-cover?query=${encodeURIComponent(query)}`,
    )
    if (data.url) {
      suggestedPhoto.value = {
        url: data.url,
        attribution: data.attribution ?? 'Unsplash',
      }
    } else {
      suggestCoverError.value = 'Aucune photo trouvée pour ce sujet.'
    }
  } catch {
    suggestedPhoto.value = null
    suggestCoverError.value = 'Impossible de contacter Unsplash.'
  } finally {
    loadingSuggest.value = false
  }
}

async function createInStoryblok(): Promise<void> {
  if (!article.value) return
  creating.value = true
  errorCreate.value = ''
  createSuccess.value = ''
  try {
    const payload = {
      ...article.value,
      coverImageUrl: chosenCoverUrl.value || undefined,
    }
    const data = await $fetch<{ storyId: number; fullSlug: string; message: string }>(
      '/api/dashboard/articles/create-storyblok',
      {
        method: 'POST',
        body: { article: payload },
      },
    )
    const successMessage = `${data.message} (${data.fullSlug})`
    existingSubjects.value = [...existingSubjects.value, article.value.title]
    resetAll()
    createSuccess.value = successMessage
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Erreur lors de la création Storyblok.'
    errorCreate.value = msg
  } finally {
    creating.value = false
  }
}

onMounted(() => {
  loadFromStorage()
  fetchSubjects()
})
</script>

<style scoped>
.cover-modal-enter-active,
.cover-modal-leave-active {
  transition: opacity 0.3s ease;
}

.cover-modal-enter-from,
.cover-modal-leave-to {
  opacity: 0;
}

.cover-modal-enter-active img,
.cover-modal-leave-active img {
  transition: transform 0.3s ease;
}

.cover-modal-enter-from img,
.cover-modal-leave-to img {
  transform: scale(0.9);
}
</style>
