<template>
  <div class="flex min-h-full flex-col">
    <!-- Sticky action bar -->
    <header
      class="sticky top-[70px] z-30 flex flex-wrap items-center justify-between gap-3 border-b border-gray-700 bg-gray-900/85 px-4 py-3 backdrop-blur sm:px-6 md:top-0"
    >
      <div class="flex items-center gap-3">
        <NuxtLink
          :to="localePath('/dashboard/articles')"
          class="inline-flex items-center gap-1.5 text-sm text-gray-300 transition-colors hover:text-gray-100"
        >
          <DibodevIcon name="ChevronLeft" class="h-4 w-4" mode="stroke" />
          Brouillons &amp; file
        </NuxtLink>
        <DibodevBadge
          v-if="currentStatusBadge"
          :backgroundColor="currentStatusBadge.backgroundColor"
          :textColor="currentStatusBadge.textColor"
          size="sm"
        >
          {{ currentStatusBadge.label }}
        </DibodevBadge>
      </div>
      <div class="flex items-center gap-2">
        <DibodevButton v-if="hasContent" type="button" outlined size="sm" @click="resetAll"
          >Nouvel article</DibodevButton
        >
        <DibodevButton type="button" outlined size="sm" :disabled="saving || !title.trim()" @click="saveDraft">
          {{ saving ? 'Enregistrement…' : 'Enregistrer' }}
        </DibodevButton>
        <DibodevButton type="button" size="sm" :disabled="publishing || !canPublish" @click="goToPublish">
          {{ publishing ? 'Ouverture…' : 'Publier' }}
        </DibodevButton>
      </div>
    </header>

    <div v-if="successMessage || errorMessage" class="px-4 pt-4 sm:px-6">
      <DibodevAlert
        v-if="successMessage"
        :message="successMessage"
        variant="success"
        dismissible
        @hide="successMessage = ''"
      />
      <DibodevAlert v-if="errorMessage" :message="errorMessage" variant="error" dismissible @hide="errorMessage = ''" />
    </div>

    <!-- Two-pane editor : config left, article sticky right -->
    <div class="grid flex-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[360px_minmax(0,1fr)]">
      <!-- Config column (left) -->
      <aside class="flex flex-col gap-4 lg:order-1">
        <!-- Cover image -->
        <section class="overflow-hidden rounded-xl border border-gray-600 bg-gray-800">
          <button
            type="button"
            class="flex w-full cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-gray-100"
            :aria-expanded="coverOpen"
            @click="coverOpen = !coverOpen"
          >
            <span class="flex items-center gap-2">
              Image de couverture
              <span v-if="coverUrl" class="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            </span>
            <DibodevIcon
              name="ChevronRight"
              class="h-4 w-4 text-gray-300 transition-transform"
              :class="{ 'rotate-90': coverOpen }"
              mode="stroke"
            />
          </button>
          <div v-show="coverOpen" class="border-t border-gray-700 px-4 py-4">
            <div v-if="coverUrl" class="flex flex-col gap-3">
              <button
                type="button"
                class="group relative w-full cursor-pointer overflow-hidden rounded-lg border border-gray-600 transition hover:border-gray-500"
                aria-label="Agrandir la couverture"
                @click="openCoverModal(coverUrl, 'Couverture choisie')"
              >
                <div class="aspect-video w-full overflow-hidden bg-gray-700">
                  <img
                    :src="coverUrl"
                    alt="Couverture choisie"
                    class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              </button>
              <DibodevButton type="button" outlined size="sm" class="w-full" @click="clearCover">
                Changer d’image
              </DibodevButton>
            </div>
            <template v-else>
              <DibodevButton
                type="button"
                outlined
                size="sm"
                class="w-full"
                :disabled="loadingSuggest || !title.trim()"
                @click="suggestCover"
              >
                {{ loadingSuggest ? 'Recherche…' : 'Suggérer une photo (Unsplash)' }}
              </DibodevButton>
              <div class="mt-3 flex items-center gap-2">
                <input
                  v-model="customUrlInput"
                  type="url"
                  placeholder="ou colle une URL d’image"
                  class="min-w-0 flex-1 rounded-lg border border-gray-600 bg-gray-900/50 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-500 focus:border-[#8472F3] focus:outline-none"
                  @keydown.enter.prevent="useCustomUrl"
                />
                <DibodevButton
                  type="button"
                  outlined
                  size="sm"
                  :disabled="!customUrlInput.trim()"
                  @click="useCustomUrl"
                >
                  OK
                </DibodevButton>
              </div>
              <p v-if="suggestCoverError" class="mt-2 text-xs text-amber-500">{{ suggestCoverError }}</p>
              <div v-if="suggestedPhoto" class="mt-3 flex flex-col gap-2">
                <button
                  type="button"
                  class="group relative w-full cursor-pointer overflow-hidden rounded-lg border border-gray-600 transition hover:border-gray-500"
                  aria-label="Agrandir la suggestion"
                  @click="openCoverModal(suggestedPhoto.url, 'Suggestion Unsplash')"
                >
                  <div class="aspect-video w-full overflow-hidden bg-gray-700">
                    <img
                      :src="suggestedPhoto.url"
                      alt="Suggestion Unsplash"
                      class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                </button>
                <p class="text-xs text-gray-300">{{ suggestedPhoto.attribution }}</p>
                <div class="flex gap-2">
                  <DibodevButton type="button" size="sm" class="flex-1" @click="useSuggestedPhoto"
                    >Utiliser</DibodevButton
                  >
                  <DibodevButton type="button" outlined size="sm" :disabled="loadingSuggest" @click="suggestCover">
                    Une autre
                  </DibodevButton>
                </div>
              </div>
            </template>
          </div>
        </section>

        <!-- SEO & metadata -->
        <section class="overflow-hidden rounded-xl border border-gray-600 bg-gray-800">
          <button
            type="button"
            class="flex w-full cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-gray-100"
            :aria-expanded="seoOpen"
            @click="seoOpen = !seoOpen"
          >
            SEO &amp; métadonnées
            <DibodevIcon
              name="ChevronRight"
              class="h-4 w-4 text-gray-300 transition-transform"
              :class="{ 'rotate-90': seoOpen }"
              mode="stroke"
            />
          </button>
          <div v-show="seoOpen" class="flex flex-col gap-4 border-t border-gray-700 px-4 py-4">
            <div class="flex flex-col gap-1.5">
              <label for="field-slug" class="text-sm font-medium text-gray-200">Slug</label>
              <input
                id="field-slug"
                v-model="slug"
                type="text"
                placeholder="genere-depuis-le-titre-si-vide"
                :class="INPUT_CLASS"
              />
            </div>
            <div class="flex flex-col gap-1.5">
              <label for="field-excerpt" class="text-sm font-medium text-gray-200">Extrait (100-180 car.)</label>
              <textarea
                id="field-excerpt"
                v-model="excerpt"
                rows="3"
                placeholder="1 à 2 phrases qui résument l’article."
                :class="TEXTAREA_CLASS"
              />
            </div>
            <div class="flex flex-col gap-1.5">
              <div class="flex items-center justify-between">
                <label for="field-meta-title" class="text-sm font-medium text-gray-200">Meta title</label>
                <span
                  class="text-xs tabular-nums"
                  :class="metaTitle.length >= 55 && metaTitle.length <= 65 ? 'text-emerald-400' : 'text-gray-400'"
                  >{{ metaTitle.length }}/65</span
                >
              </div>
              <input
                id="field-meta-title"
                v-model="metaTitle"
                type="text"
                placeholder="55-65 caractères"
                :class="INPUT_CLASS"
              />
            </div>
            <div class="flex flex-col gap-1.5">
              <div class="flex items-center justify-between">
                <label for="field-meta-description" class="text-sm font-medium text-gray-200">Meta description</label>
                <span
                  class="text-xs tabular-nums"
                  :class="
                    metaDescription.length >= 140 && metaDescription.length <= 160
                      ? 'text-emerald-400'
                      : 'text-gray-400'
                  "
                  >{{ metaDescription.length }}/160</span
                >
              </div>
              <textarea
                id="field-meta-description"
                v-model="metaDescription"
                rows="3"
                placeholder="140-160 caractères, orientée clic."
                :class="TEXTAREA_CLASS"
              />
            </div>
            <div class="flex flex-col gap-1.5">
              <label for="field-tags" class="text-sm font-medium text-gray-200">Tags (séparés par des virgules)</label>
              <input
                id="field-tags"
                v-model="tagsInput"
                type="text"
                placeholder="gestion de chantiers, devis BTP"
                :class="INPUT_CLASS"
              />
              <div v-if="tags.length > 0" class="mt-1 flex flex-wrap gap-1.5">
                <DibodevBadge v-for="tag in tags" :key="tag" backgroundColor="#35424d" textColor="#f5f4fb" size="sm">
                  {{ tag }}
                </DibodevBadge>
              </div>
            </div>
          </div>
        </section>
      </aside>

      <!-- Article column (right, sticky) -->
      <div class="flex min-w-0 flex-col gap-5 lg:sticky lg:top-[86px] lg:order-2 lg:self-start">
        <!-- Mode -->
        <div class="flex flex-wrap items-center gap-3">
          <div class="inline-flex rounded-lg border border-gray-600 bg-gray-800 p-1">
            <button
              v-for="option in MODE_OPTIONS"
              :key="option.value"
              type="button"
              class="cursor-pointer rounded-md px-4 py-1.5 text-sm font-medium transition-colors"
              :class="mode === option.value ? 'bg-primary text-white' : 'text-gray-300 hover:text-gray-100'"
              :aria-pressed="mode === option.value"
              @click="mode = option.value"
            >
              {{ option.label }}
            </button>
          </div>
          <p class="text-xs text-gray-400">
            {{ mode === 'ai' ? 'L’IA rédige un premier jet, tu édites tout ensuite.' : 'Tu écris l’article toi-même.' }}
          </p>
        </div>

        <!-- AI assistant -->
        <div v-if="mode === 'ai'" class="flex flex-col gap-3 rounded-xl border border-gray-600 bg-gray-800 p-4">
          <label for="optional-sentence" class="text-sm font-medium text-gray-200">
            Idée optionnelle (oriente le sujet)
          </label>
          <textarea
            id="optional-sentence"
            v-model="optionalSentence"
            rows="2"
            placeholder="Ex : un article pour les plombiers qui cherchent un site vitrine"
            :class="TEXTAREA_CLASS"
          />
          <div class="flex flex-wrap items-center gap-3">
            <DibodevButton type="button" outlined size="sm" :disabled="loadingSubject" @click="suggestSubject">
              {{ loadingSubject ? 'Proposition…' : 'Proposer un sujet' }}
            </DibodevButton>
            <template v-if="suggestedTopic">
              <span class="min-w-0 flex-1 truncate text-sm text-gray-100">{{ suggestedTopic }}</span>
              <button
                type="button"
                class="cursor-pointer text-xs text-gray-300 underline-offset-2 hover:text-gray-100 hover:underline"
                :disabled="loadingSubject"
                @click="onRequestAnotherSubject"
              >
                un autre
              </button>
            </template>
          </div>
          <DibodevButton type="button" :disabled="loadingArticle || !canGenerate" @click="generateArticle">
            {{ loadingArticle ? 'Génération…' : 'Générer dans l’éditeur' }}
          </DibodevButton>
        </div>

        <!-- Title -->
        <div class="rounded-xl border border-gray-600 bg-gray-800 px-5 py-4">
          <input
            id="field-title"
            v-model="title"
            type="text"
            placeholder="Titre de l’article"
            aria-label="Titre de l’article"
            class="w-full bg-transparent text-2xl font-semibold text-gray-100 placeholder:text-gray-500 focus:outline-none"
          />
          <p class="mt-1 truncate text-xs text-gray-400">/{{ slug || 'slug-genere-depuis-le-titre' }}</p>
        </div>

        <!-- Content editor -->
        <div class="flex min-h-[480px] flex-col overflow-hidden rounded-xl border border-gray-600 bg-gray-800">
          <div class="flex items-center justify-between gap-3 border-b border-gray-700 px-4 py-2.5">
            <div class="inline-flex rounded-lg bg-gray-900 p-1">
              <button
                type="button"
                class="cursor-pointer rounded-md px-3 py-1 text-xs font-medium transition-colors"
                :class="contentView === 'write' ? 'bg-gray-700 text-gray-100' : 'text-gray-300 hover:text-gray-100'"
                :aria-pressed="contentView === 'write'"
                @click="setContentView('write')"
              >
                Écrire
              </button>
              <button
                type="button"
                class="cursor-pointer rounded-md px-3 py-1 text-xs font-medium transition-colors"
                :class="contentView === 'preview' ? 'bg-gray-700 text-gray-100' : 'text-gray-300 hover:text-gray-100'"
                :aria-pressed="contentView === 'preview'"
                :disabled="loadingPreview"
                @click="setContentView('preview')"
              >
                {{ loadingPreview ? 'Aperçu…' : 'Aperçu' }}
              </button>
            </div>
            <div class="flex items-center gap-3 text-xs text-gray-400">
              <span v-if="qualityScore != null" class="rounded-full px-2 py-0.5 font-medium" :class="qualityScoreClass">
                Score {{ qualityScore }}/100
              </span>
              <span class="tabular-nums">{{ contentWordCount }} mots</span>
            </div>
          </div>
          <div class="flex-1 p-4">
            <textarea
              v-show="contentView === 'write'"
              id="field-content"
              v-model="content"
              placeholder="## Introduction&#10;&#10;Écris ton article en Markdown : ## pour les titres, **gras**, *italique*, listes."
              class="h-full min-h-[400px] w-full resize-none bg-transparent font-mono text-sm leading-relaxed text-gray-100 placeholder:text-gray-500 focus:outline-none"
            />
            <div v-show="contentView === 'preview'" class="h-full min-h-[400px] overflow-y-auto">
              <BlogArticleContent v-if="content.trim()" :content="previewRichtext" />
              <p v-else class="text-sm text-gray-400">Rien à prévisualiser — écris d’abord du contenu.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cover lightbox -->
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

<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevAlert from '~/components/feedback/DibodevAlert.vue'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import BlogArticleContent from '~/components/blog/BlogArticleContent.vue'
import { ARTICLE_STATUS_BADGES } from '~/core/constants/articleStatus'
import type {
  ArticleEditorMode,
  ArticleRecord,
  ArticleRecordStatus,
  ArticleStatusBadge,
  GeneratedArticleForPreview,
} from '~/types/dashboard'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Éditeur d’article — Dashboard',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

type ContentView = 'write' | 'preview'
type PreviewRichtext = { type: string; content?: unknown[] }
type EditorBuffer = {
  mode: ArticleEditorMode
  currentId: string | null
  title: string
  slug: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  tagsInput: string
  content: string
  coverUrl: string | null
  qualityScore: number | null
}

const localePath = useLocalePath()
const route = useRoute()

const STORAGE_KEY = 'dibodev-dashboard-article-editor'
const INPUT_CLASS =
  'h-11 w-full rounded-lg border border-gray-600 bg-gray-900/50 px-3 text-sm text-gray-100 placeholder:text-gray-500 focus:border-[#8472F3] focus:bg-gray-900 focus:outline-none'
const TEXTAREA_CLASS =
  'w-full rounded-lg border border-gray-600 bg-gray-900/50 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-500 focus:border-[#8472F3] focus:bg-gray-900 focus:outline-none'

const MODE_OPTIONS: Array<{ label: string; value: ArticleEditorMode }> = [
  { label: 'Manuel', value: 'manual' },
  { label: 'Assisté par IA', value: 'ai' },
]

const mode: Ref<ArticleEditorMode> = ref('manual')
const currentId: Ref<string | null> = ref(null)
const savedStatus: Ref<ArticleRecordStatus | null> = ref(null)

const title: Ref<string> = ref('')
const slug: Ref<string> = ref('')
const excerpt: Ref<string> = ref('')
const metaTitle: Ref<string> = ref('')
const metaDescription: Ref<string> = ref('')
const tagsInput: Ref<string> = ref('')
const content: Ref<string> = ref('')
const coverUrl: Ref<string | null> = ref(null)
const qualityScore: Ref<number | null> = ref(null)

const optionalSentence: Ref<string> = ref('')
const existingSubjects: Ref<string[]> = ref([])
const rejectedSubjects: Ref<string[]> = ref([])
const suggestedTopic: Ref<string> = ref('')

const loadingSubject: Ref<boolean> = ref(false)
const loadingArticle: Ref<boolean> = ref(false)
const saving: Ref<boolean> = ref(false)
const publishing: Ref<boolean> = ref(false)
const loadingPreview: Ref<boolean> = ref(false)

const contentView: Ref<ContentView> = ref('write')
const previewRichtext: Ref<PreviewRichtext> = ref({ type: 'doc', content: [] })
const seoOpen: Ref<boolean> = ref(true)
const coverOpen: Ref<boolean> = ref(false)

const suggestedPhoto: Ref<{ url: string; attribution: string } | null> = ref(null)
const loadingSuggest: Ref<boolean> = ref(false)
const suggestCoverError: Ref<string> = ref('')
const customUrlInput: Ref<string> = ref('')

const coverModalOpen: Ref<boolean> = ref(false)
const coverModalSrc: Ref<string> = ref('')
const coverModalAlt: Ref<string> = ref('')

const successMessage: Ref<string> = ref('')
const errorMessage: Ref<string> = ref('')

const tags: ComputedRef<string[]> = computed((): string[] =>
  tagsInput.value
    .split(',')
    .map((t: string): string => t.trim())
    .filter((t: string): boolean => t.length > 0),
)

const hasContent: ComputedRef<boolean> = computed(
  (): boolean => title.value.trim().length > 0 || content.value.trim().length > 0 || currentId.value != null,
)

const canGenerate: ComputedRef<boolean> = computed((): boolean => suggestedTopic.value.trim().length > 0)

const canPublish: ComputedRef<boolean> = computed(
  (): boolean => title.value.trim().length > 0 && slug.value.trim().length > 0 && content.value.trim().length > 0,
)

const contentWordCount: ComputedRef<number> = computed((): number => {
  const trimmed = content.value.trim()
  return trimmed ? trimmed.split(/\s+/).length : 0
})

const currentStatusBadge: ComputedRef<ArticleStatusBadge | null> = computed((): ArticleStatusBadge | null =>
  savedStatus.value ? ARTICLE_STATUS_BADGES[savedStatus.value] : null,
)

const qualityScoreClass: ComputedRef<string> = computed((): string => {
  const score = qualityScore.value ?? 0
  if (score >= 70) return 'bg-emerald-500/20 text-emerald-400'
  if (score >= 50) return 'bg-amber-500/20 text-amber-400'
  return 'bg-red-500/20 text-red-400'
})

/**
 * Builds the draft payload (content + SEO + cover) from the current editor state.
 * Publication options (date, translation, rebuild) are set on the publish page.
 *
 * @returns The editable fields for the draft upsert.
 */
function buildPayload(): Record<string, unknown> {
  return {
    id: currentId.value ?? undefined,
    origin: mode.value,
    title: title.value.trim(),
    slug: slug.value.trim(),
    excerpt: excerpt.value.trim(),
    metaTitle: metaTitle.value.trim(),
    metaDescription: metaDescription.value.trim(),
    tags: tags.value,
    content: content.value,
    coverImageUrl: coverUrl.value ?? undefined,
    qualityScore: qualityScore.value ?? undefined,
  }
}

/**
 * Serializes the editor state to localStorage for crash recovery.
 *
 * @returns Nothing.
 */
function saveBuffer(): void {
  if (typeof window === 'undefined') return
  const buffer: EditorBuffer = {
    mode: mode.value,
    currentId: currentId.value,
    title: title.value,
    slug: slug.value,
    excerpt: excerpt.value,
    metaTitle: metaTitle.value,
    metaDescription: metaDescription.value,
    tagsInput: tagsInput.value,
    content: content.value,
    coverUrl: coverUrl.value,
    qualityScore: qualityScore.value,
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(buffer))
  } catch {
    // quota or disabled — ignore
  }
}

/**
 * Restores the editor state from localStorage when present.
 *
 * @returns True when a buffer was loaded.
 */
function loadBuffer(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    const buffer = JSON.parse(raw) as Partial<EditorBuffer>
    if (typeof buffer.title !== 'string') return false
    mode.value = buffer.mode === 'ai' ? 'ai' : 'manual'
    currentId.value = buffer.currentId ?? null
    title.value = buffer.title ?? ''
    slug.value = buffer.slug ?? ''
    excerpt.value = buffer.excerpt ?? ''
    metaTitle.value = buffer.metaTitle ?? ''
    metaDescription.value = buffer.metaDescription ?? ''
    tagsInput.value = buffer.tagsInput ?? ''
    content.value = buffer.content ?? ''
    coverUrl.value = buffer.coverUrl ?? null
    qualityScore.value = typeof buffer.qualityScore === 'number' ? buffer.qualityScore : null
    return true
  } catch {
    return false
  }
}

/**
 * Clears the localStorage buffer.
 *
 * @returns Nothing.
 */
function clearBuffer(): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}

/**
 * Fills the editor fields from a stored article record (edit flow).
 *
 * @param record - The record to load.
 * @returns Nothing.
 */
function loadRecord(record: ArticleRecord): void {
  currentId.value = record.id
  savedStatus.value = record.status
  mode.value = record.origin
  title.value = record.title
  slug.value = record.slug
  excerpt.value = record.excerpt
  metaTitle.value = record.metaTitle
  metaDescription.value = record.metaDescription
  tagsInput.value = record.tags.join(', ')
  content.value = record.content
  coverUrl.value = record.coverImageUrl ?? null
  qualityScore.value = record.qualityScore ?? null
  contentView.value = 'write'
}

/**
 * Resets the editor to a blank new article.
 *
 * @returns Nothing.
 */
function resetAll(): void {
  mode.value = 'manual'
  currentId.value = null
  savedStatus.value = null
  title.value = ''
  slug.value = ''
  excerpt.value = ''
  metaTitle.value = ''
  metaDescription.value = ''
  tagsInput.value = ''
  content.value = ''
  coverUrl.value = null
  qualityScore.value = null
  optionalSentence.value = ''
  suggestedTopic.value = ''
  rejectedSubjects.value = []
  suggestedPhoto.value = null
  customUrlInput.value = ''
  contentView.value = 'write'
  seoOpen.value = true
  coverOpen.value = false
  successMessage.value = ''
  errorMessage.value = ''
  suggestCoverError.value = ''
  clearBuffer()
}

/**
 * Loads existing blog subjects to avoid duplicate AI suggestions.
 *
 * @returns Nothing.
 */
async function fetchSubjects(): Promise<void> {
  try {
    const data = await $fetch<{ existingSubjects: string[] }>('/api/dashboard/articles/subjects')
    existingSubjects.value = data.existingSubjects ?? []
  } catch {
    existingSubjects.value = []
  }
}

/**
 * Asks the AI for a subject suggestion.
 *
 * @returns Nothing.
 */
async function suggestSubject(): Promise<void> {
  loadingSubject.value = true
  errorMessage.value = ''
  try {
    const data = await $fetch<{ suggestedTopic: string }>('/api/dashboard/articles/suggest-subject', {
      method: 'POST',
      body: {
        existingSubjects: existingSubjects.value,
        optionalSentence: optionalSentence.value.trim() || undefined,
        rejectedSubjects: rejectedSubjects.value.length > 0 ? rejectedSubjects.value : undefined,
      },
    })
    suggestedTopic.value = data.suggestedTopic
  } catch (e) {
    errorMessage.value = e instanceof Error ? e.message : 'Erreur lors de la proposition du sujet.'
  } finally {
    loadingSubject.value = false
  }
}

/**
 * Rejects the current subject and asks for another one.
 *
 * @returns Nothing.
 */
function onRequestAnotherSubject(): void {
  if (suggestedTopic.value) {
    rejectedSubjects.value = [...rejectedSubjects.value, suggestedTopic.value]
  }
  suggestSubject()
}

/**
 * Generates a full article with the AI and fills the editor fields.
 *
 * @returns Nothing.
 */
async function generateArticle(): Promise<void> {
  if (!suggestedTopic.value) return
  loadingArticle.value = true
  errorMessage.value = ''
  try {
    const data = await $fetch<GeneratedArticleForPreview>('/api/dashboard/articles/generate', {
      method: 'POST',
      body: { suggestedTopic: suggestedTopic.value, existingSubjects: existingSubjects.value },
    })
    title.value = data.title
    slug.value = data.slug
    excerpt.value = data.excerpt
    metaTitle.value = data.metaTitle
    metaDescription.value = data.metaDescription
    tagsInput.value = data.tags.join(', ')
    content.value = data.content
    qualityScore.value = data.qualityScore ?? null
    previewRichtext.value = data.contentRichtext
    contentView.value = 'write'
    successMessage.value = 'Article généré — tu peux tout éditer avant de publier.'
  } catch (e) {
    errorMessage.value = e instanceof Error ? e.message : 'Erreur lors de la génération.'
  } finally {
    loadingArticle.value = false
  }
}

/**
 * Switches the content pane, refreshing the richtext preview from the markdown when shown.
 *
 * @param view - The pane to display (write or preview).
 * @returns Nothing.
 */
async function setContentView(view: ContentView): Promise<void> {
  if (view === 'write') {
    contentView.value = 'write'
    return
  }
  loadingPreview.value = true
  errorMessage.value = ''
  try {
    const data = await $fetch<{ contentRichtext: PreviewRichtext }>('/api/dashboard/articles/preview', {
      method: 'POST',
      body: { content: content.value },
    })
    previewRichtext.value = data.contentRichtext
    contentView.value = 'preview'
  } catch (e) {
    errorMessage.value = e instanceof Error ? e.message : 'Erreur lors de l’aperçu.'
  } finally {
    loadingPreview.value = false
  }
}

/**
 * Saves the current editor state as a draft (creates or updates the record).
 *
 * @returns The saved record id, or null on failure.
 */
async function saveDraft(): Promise<string | null> {
  saving.value = true
  errorMessage.value = ''
  try {
    const data = await $fetch<{ record: ArticleRecord }>('/api/dashboard/articles/drafts', {
      method: 'POST',
      body: { ...buildPayload(), status: 'draft' },
    })
    currentId.value = data.record.id
    slug.value = data.record.slug
    savedStatus.value = data.record.status
    successMessage.value = 'Brouillon enregistré.'
    return data.record.id
  } catch (e) {
    errorMessage.value = e instanceof Error ? e.message : 'Erreur lors de l’enregistrement.'
    return null
  } finally {
    saving.value = false
  }
}

/**
 * Saves the draft, then opens the dedicated publication page to set date, translation and rebuild.
 *
 * @returns Nothing.
 */
async function goToPublish(): Promise<void> {
  publishing.value = true
  errorMessage.value = ''
  try {
    const savedId = await saveDraft()
    if (!savedId) return
    await navigateTo(localePath({ path: '/dashboard/publish-article', query: { draft: savedId } }))
  } finally {
    publishing.value = false
  }
}

/**
 * Maps French artisan métiers to English Unsplash search terms: Unsplash is English-biased,
 * so a raw French keyword returns irrelevant photos while the mapped term stays on-topic.
 */
const METIER_TO_UNSPLASH_EN: Record<string, string> = {
  paysagiste: 'landscape gardener',
  jardinier: 'gardener',
  plombier: 'plumber',
  electricien: 'electrician',
  menuisier: 'carpenter workshop',
  charpentier: 'carpenter',
  couvreur: 'roofer',
  macon: 'bricklayer construction',
  carreleur: 'tiler',
  peintre: 'painter decorator',
  platrier: 'plasterer',
  chauffagiste: 'heating engineer',
  serrurier: 'locksmith',
  boulanger: 'bakery',
  boulangerie: 'bakery',
  patissier: 'pastry chef',
  fleuriste: 'florist',
  coiffeur: 'hair salon',
  garagiste: 'car mechanic',
  mecanicien: 'car mechanic',
  restaurateur: 'restaurant kitchen',
  restaurant: 'restaurant kitchen',
  traiteur: 'catering food',
  artisan: 'craftsman workshop',
  batiment: 'construction site',
  btp: 'construction site',
  coach: 'personal trainer',
}

/**
 * Strips accents and lowercases a word so it can be matched against the métier map.
 *
 * @param {string} word - The raw word.
 * @returns {string} The accent-free, lowercase word.
 */
function normalizeMetierWord(word: string): string {
  return word
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9]/g, '')
}

/**
 * Builds a coherent Unsplash search query from the article tags and title, preferring a mapped métier term.
 *
 * @returns {string} A short search query.
 */
function buildCoverSearchQuery(): string {
  const words = [...tags.value, title.value]
    .join(' ')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .map(normalizeMetierWord)
    .filter((w: string): boolean => w.length > 2)

  for (const word of words) {
    const singular = word.replace(/s$/, '')
    const mapped = METIER_TO_UNSPLASH_EN[word] ?? METIER_TO_UNSPLASH_EN[singular]
    if (mapped) return mapped
  }

  const firstTag = tags.value[0]?.trim()
  if (firstTag) return firstTag
  if (words.length >= 2) return `${words[0]} ${words[1]}`
  if (words.length === 1) return words[0]!
  return 'small business'
}

/**
 * Asks the server for a matching Unsplash cover photo.
 *
 * @returns Nothing.
 */
async function suggestCover(): Promise<void> {
  loadingSuggest.value = true
  suggestedPhoto.value = null
  suggestCoverError.value = ''
  try {
    const query = buildCoverSearchQuery()
    const data = await $fetch<{ url: string | null; attribution: string | null }>(
      `/api/dashboard/articles/suggest-cover?query=${encodeURIComponent(query)}`,
    )
    if (data.url) {
      suggestedPhoto.value = { url: data.url, attribution: data.attribution ?? 'Unsplash' }
    } else {
      suggestCoverError.value = 'Aucune photo trouvée pour ce sujet.'
    }
  } catch {
    suggestCoverError.value = 'Impossible de contacter Unsplash.'
  } finally {
    loadingSuggest.value = false
  }
}

/**
 * Selects the suggested Unsplash photo as the cover.
 *
 * @returns Nothing.
 */
function useSuggestedPhoto(): void {
  if (suggestedPhoto.value?.url) {
    coverUrl.value = suggestedPhoto.value.url
    suggestedPhoto.value = null
  }
}

/**
 * Uses the pasted custom URL as the cover image.
 *
 * @returns Nothing.
 */
function useCustomUrl(): void {
  const url = customUrlInput.value.trim()
  if (url) {
    coverUrl.value = url
    customUrlInput.value = ''
    suggestedPhoto.value = null
  }
}

/**
 * Clears the chosen cover image.
 *
 * @returns Nothing.
 */
function clearCover(): void {
  coverUrl.value = null
  suggestedPhoto.value = null
  customUrlInput.value = ''
}

/**
 * Opens the cover image lightbox.
 *
 * @param src - The image source URL.
 * @param alt - The image alt text.
 * @returns Nothing.
 */
function openCoverModal(src: string, alt: string): void {
  coverModalSrc.value = src
  coverModalAlt.value = alt
  coverModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

/**
 * Closes the cover image lightbox.
 *
 * @returns Nothing.
 */
function closeCoverModal(): void {
  coverModalOpen.value = false
  document.body.style.overflow = ''
}

watch(
  [mode, currentId, title, slug, excerpt, metaTitle, metaDescription, tagsInput, content, coverUrl, qualityScore],
  (): void => saveBuffer(),
)

watch(optionalSentence, (): void => {
  rejectedSubjects.value = []
})

onMounted(async (): Promise<void> => {
  fetchSubjects()
  const draftId = typeof route.query.draft === 'string' ? route.query.draft : ''
  if (draftId) {
    try {
      const data = await $fetch<{ record: ArticleRecord }>(`/api/dashboard/articles/drafts/${draftId}`)
      loadRecord(data.record)
      return
    } catch {
      errorMessage.value = 'Brouillon introuvable.'
    }
  }
  // An explicit "new article" navigation (?new) starts blank; strip the flag afterwards so a
  // later reload restores the in-progress buffer instead of wiping the work again.
  if (route.query.new) {
    resetAll()
    if (typeof window !== 'undefined') {
      window.history.replaceState(window.history.state, '', window.location.pathname)
    }
    return
  }
  loadBuffer()
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
