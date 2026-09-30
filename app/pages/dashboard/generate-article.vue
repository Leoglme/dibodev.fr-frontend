<template>
  <DashboardPage title="Éditeur d’article" icon="file-text">
    <template #title>
      <nav class="flex min-w-0 items-center gap-1.5 text-[15px]" aria-label="Fil d’Ariane">
        <NuxtLink :to="localePath('/dashboard/articles')" class="text-muted shrink-0 hover:text-gray-100 max-sm:hidden">
          Articles
        </NuxtLink>
        <DashboardIcon name="chevron-right" :size="14" class="shrink-0 text-(--dash-faint) max-sm:hidden" />
        <h1 class="truncate font-medium text-gray-100">{{ title.trim() || 'Nouvel article' }}</h1>
      </nav>
      <DashboardStatus
        v-if="savedStatus"
        :tone="DASHBOARD_ARTICLE_STATUSES[savedStatus].tone"
        :label="DASHBOARD_ARTICLE_STATUSES[savedStatus].label"
        class="max-lg:hidden"
      />
    </template>

    <template #actions>
      <span class="text-muted hidden items-center gap-1.5 text-[13px] xl:inline-flex">
        <DashboardIcon :name="savedAt ? 'check' : 'save'" :size="14" />
        {{ savedAt ? `Enregistré à ${savedAt}` : 'Sauvegarde locale' }}
      </span>
      <DashboardButton
        variant="outline"
        size="sm"
        icon="save"
        :loading="isSavingDraft"
        :disabled="!title.trim()"
        data-tip="Enregistrer · Ctrl S"
        @click="saveDraft(true)"
      >
        <span class="max-sm:hidden">Enregistrer</span>
      </DashboardButton>
      <DashboardButton
        variant="primary"
        size="sm"
        icon="send"
        :loading="isOpeningPublishDrawer"
        :disabled="!canPublish"
        @click="openPublishDrawer"
      >
        <span class="max-sm:hidden">Publier…</span>
      </DashboardButton>
    </template>

    <div
      class="grid items-start gap-6 @4xl:grid-cols-[minmax(0,1fr)_340px] @6xl:grid-cols-[minmax(0,1fr)_380px] @6xl:gap-7"
    >
      <div class="flex min-w-0 flex-col gap-[18px]">
        <DashboardArticleCoverField v-model="coverUrl" :article-title="title" :tags="tags" />

        <div class="flex flex-col gap-1.5">
          <label for="article-title" class="sr-only">Titre de l’article</label>
          <textarea
            id="article-title"
            ref="titleInput"
            v-model="title"
            rows="1"
            placeholder="Titre de l’article"
            class="dash-field-large w-full resize-none overflow-hidden bg-transparent text-2xl leading-tight font-medium tracking-[-0.015em] text-balance text-gray-100 outline-none placeholder:text-(--dash-faint) md:text-[30px]"
            @input="fitTextareaToContent($event.target as HTMLTextAreaElement)"
          />
          <div class="dash-mono text-muted flex min-w-0 items-center gap-0.5 text-[13px]">
            <span class="shrink-0">dibodev.fr/blog/</span>
            <label for="article-slug" class="sr-only">Slug</label>
            <input
              id="article-slug"
              v-model="slug"
              type="text"
              placeholder="genere-depuis-le-titre"
              class="min-w-0 flex-1 rounded bg-transparent px-1 py-0.5 text-gray-200 outline-none placeholder:text-(--dash-faint) focus:bg-gray-800"
            />
          </div>
        </div>

        <div class="flex flex-col gap-1.5">
          <div class="flex items-center justify-between gap-2">
            <label for="article-excerpt" class="text-[13px] font-medium text-gray-200">Extrait</label>
            <DashboardCounter :length="excerpt.length" :min="100" :max="180" />
          </div>
          <DashboardTextField
            id="article-excerpt"
            v-model="excerpt"
            multiline
            :rows="2"
            size="lg"
            placeholder="Une ou deux phrases qui résument l’article."
            class="field-sizing-content min-h-16"
          />
        </div>

        <DashboardArticleContentEditor
          v-model="content"
          v-model:content-view="contentView"
          :quality-score="qualityScore"
        />
      </div>

      <aside class="flex min-w-0 flex-col gap-3.5 @4xl:sticky @4xl:top-0" aria-label="Réglages de l’article">
        <DashboardArticleAssistantCard
          v-model:is-expanded="isAssistantOpen"
          v-model:writing-mode="writingMode"
          v-model:subject-idea="subjectIdea"
          @article-generated="applyGeneratedArticle"
        />
        <DashboardArticleSeoCard
          v-model:meta-title="metaTitle"
          v-model:meta-description="metaDescription"
          :article-title="title"
          :slug="slug"
          :excerpt="excerpt"
        />
        <DashboardArticleQualityCard
          v-model:tags="tags"
          :quality-score="qualityScore"
          :content="content"
          :meta-title="metaTitle"
          :meta-description="metaDescription"
          :cover-url="coverUrl"
        />
      </aside>
    </div>
  </DashboardPage>
</template>

<script lang="ts" setup>
import type { SaveArticleDraftBody } from '~~/server/types/dashboard/articles'
import type { UseDashboardArticlesReturn } from '~/composables/useDashboardArticles'
import type { UseDashboardDrawerReturn } from '~/composables/useDashboardDrawer'
import type { UseDashboardToastReturn } from '~/composables/useDashboardToast'
import type { ComputedRef, Ref, WritableComputedRef } from 'vue'
import type { DashboardEditorContentView } from '~/core/types/DashboardArticleContentEditor'
import type {
  DashboardArticleDraftResponse,
  DashboardArticleEditorBuffer,
} from '~/core/types/DashboardArticleEditorPage'
import type {
  ArticleEditorMode,
  ArticleRecord,
  ArticleRecordStatus,
  GeneratedArticleForPreview,
} from '~/types/dashboard'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import DashboardArticleAssistantCard from '~/components/dashboard/cards/DashboardArticleAssistantCard.vue'
import DashboardArticleQualityCard from '~/components/dashboard/cards/DashboardArticleQualityCard.vue'
import DashboardArticleSeoCard from '~/components/dashboard/cards/DashboardArticleSeoCard.vue'
import DashboardArticleContentEditor from '~/components/dashboard/fields/DashboardArticleContentEditor.vue'
import DashboardArticleCoverField from '~/components/dashboard/fields/DashboardArticleCoverField.vue'
import DashboardPage from '~/components/dashboard/shell/DashboardPage.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardCounter from '~/components/dashboard/ui/DashboardCounter.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardStatus from '~/components/dashboard/ui/DashboardStatus.vue'
import DashboardTextField from '~/components/dashboard/ui/DashboardTextField.vue'
import { DASHBOARD_ARTICLE_STATUSES } from '~/core/constants/articleStatus'
import { useDashboardArticles } from '~/composables/useDashboardArticles'
import { useDashboardDrawer } from '~/composables/useDashboardDrawer'
import { useDashboardToast } from '~/composables/useDashboardToast'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Éditeur d’article · Dibodev Admin',
})

const localePath = useLocalePath()
const route = useRoute()
const { upsertRecord }: UseDashboardArticlesReturn = useDashboardArticles()
const { openDrawer }: UseDashboardDrawerReturn = useDashboardDrawer()
const { showToast }: UseDashboardToastReturn = useDashboardToast()

const STORAGE_KEY: string = 'dibodev-dashboard-article-editor'

const titleInput: Ref<HTMLTextAreaElement | null> = ref(null)

const writingMode: Ref<ArticleEditorMode> = ref('manual')
const currentId: Ref<string | null> = ref(null)
const savedStatus: Ref<ArticleRecordStatus | null> = ref(null)
const savedAt: Ref<string | null> = ref(null)
const title: Ref<string> = ref('')
const slug: Ref<string> = ref('')
const excerpt: Ref<string> = ref('')
const metaTitle: Ref<string> = ref('')
const metaDescription: Ref<string> = ref('')
const tagsInput: Ref<string> = ref('')
const content: Ref<string> = ref('')
const coverUrl: Ref<string | null> = ref(null)
const qualityScore: Ref<number | null> = ref(null)
const contentView: Ref<DashboardEditorContentView> = ref('write')
const subjectIdea: Ref<string> = ref('')

const isAssistantOpen: Ref<boolean> = ref(true)
const isSavingDraft: Ref<boolean> = ref(false)
const isOpeningPublishDrawer: Ref<boolean> = ref(false)

const tags: WritableComputedRef<string[]> = computed({
  get: (): string[] =>
    tagsInput.value
      .split(',')
      .map((tag: string): string => tag.trim())
      .filter((tag: string): boolean => tag.length > 0),
  set: (value: string[]): void => {
    tagsInput.value = value.join(', ')
  },
})

const canPublish: ComputedRef<boolean> = computed(
  (): boolean => title.value.trim().length > 0 && content.value.trim().length > 0,
)

/**
 * Grows a textarea with its content (the title never scrolls).
 *
 * @param {HTMLTextAreaElement | null} element - The textarea.
 * @returns {void}
 */
function fitTextareaToContent(element: HTMLTextAreaElement | null): void {
  if (!element) return
  element.style.height = 'auto'
  element.style.height = `${element.scrollHeight}px`
}

/**
 * Builds the editable fields for the draft upsert (publication options live in the publication drawer).
 *
 * @returns {SaveArticleDraftBody} The payload.
 */
function buildDraftPayload(): SaveArticleDraftBody {
  return {
    id: currentId.value ?? undefined,
    origin: writingMode.value,
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
 * Keeps a local copy of the editor on this device (crash, reload, iOS killing the app).
 *
 * @returns {void}
 */
function saveBuffer(): void {
  const buffer: DashboardArticleEditorBuffer = {
    mode: writingMode.value,
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
    // quota exceeded or storage disabled: the server draft stays the reference
  }
}

/**
 * Restores the local copy when there is one.
 *
 * @returns {boolean} True when a copy was restored.
 */
function loadBuffer(): boolean {
  try {
    const raw: string | null = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    const buffer: Partial<DashboardArticleEditorBuffer> = JSON.parse(raw) as Partial<DashboardArticleEditorBuffer>
    if (typeof buffer.title !== 'string') return false
    writingMode.value = buffer.mode === 'ai' ? 'ai' : 'manual'
    currentId.value = buffer.currentId ?? null
    title.value = buffer.title
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
 * Removes the local copy.
 *
 * @returns {void}
 */
function clearBuffer(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // storage disabled: nothing to clear
  }
}

/**
 * Fills the editor from a stored record.
 *
 * @param {ArticleRecord} record - The record to edit.
 * @returns {void}
 */
function loadRecord(record: ArticleRecord): void {
  currentId.value = record.id
  savedStatus.value = record.status
  writingMode.value = record.origin
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
  isAssistantOpen.value = record.content.trim().length === 0
}

/**
 * Starts a blank article.
 *
 * @returns {void}
 */
function resetEditor(): void {
  writingMode.value = 'manual'
  currentId.value = null
  savedStatus.value = null
  savedAt.value = null
  title.value = ''
  slug.value = ''
  excerpt.value = ''
  metaTitle.value = ''
  metaDescription.value = ''
  tagsInput.value = ''
  content.value = ''
  coverUrl.value = null
  qualityScore.value = null
  subjectIdea.value = ''
  contentView.value = 'write'
  isAssistantOpen.value = true
  clearBuffer()
}

/**
 * Fills every field with the first draft written by the AI.
 *
 * @param {GeneratedArticleForPreview} article - The generated article.
 * @returns {Promise<void>}
 */
async function applyGeneratedArticle(article: GeneratedArticleForPreview): Promise<void> {
  title.value = article.title
  slug.value = article.slug
  excerpt.value = article.excerpt
  metaTitle.value = article.metaTitle
  metaDescription.value = article.metaDescription
  tagsInput.value = article.tags.join(', ')
  content.value = article.content
  qualityScore.value = article.qualityScore ?? null
  contentView.value = 'write'
  await nextTick()
  fitTextareaToContent(titleInput.value)
  showToast({
    tone: 'violet',
    icon: 'sparkles',
    title: 'Premier jet généré',
    text: 'Titre, contenu, meta et tags sont remplis. Relis tout avant de publier.',
  })
}

/**
 * Saves the draft on the server (creates it the first time).
 *
 * @param {boolean} notify - Show a toast when saved.
 * @returns {Promise<string | null>} The record id, or null on failure.
 */
async function saveDraft(notify: boolean): Promise<string | null> {
  if (!title.value.trim()) return null
  isSavingDraft.value = true
  try {
    const data: DashboardArticleDraftResponse = await $fetch<DashboardArticleDraftResponse>(
      '/api/dashboard/articles/drafts',
      {
        method: 'POST',
        body: { ...buildDraftPayload(), status: savedStatus.value === 'scheduled' ? 'scheduled' : 'draft' },
      },
    )
    currentId.value = data.record.id
    slug.value = data.record.slug
    savedStatus.value = data.record.status
    savedAt.value = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    upsertRecord(data.record)
    if (notify) showToast({ tone: 'violet', icon: 'check', title: 'Brouillon enregistré' })
    return data.record.id
  } catch (error: unknown) {
    showToast({ tone: 'red', title: 'L’enregistrement a échoué', text: error instanceof Error ? error.message : '' })
    return null
  } finally {
    isSavingDraft.value = false
  }
}

/**
 * Saves, then opens the publication drawer.
 *
 * @returns {Promise<void>}
 */
async function openPublishDrawer(): Promise<void> {
  isOpeningPublishDrawer.value = true
  const id: string | null = await saveDraft(false)
  isOpeningPublishDrawer.value = false
  if (id) openDrawer({ kind: 'publish', articleId: id })
}

/**
 * Ctrl/Cmd S saves the draft.
 *
 * @param {KeyboardEvent} event - The key event.
 * @returns {void}
 */
function saveDraftOnShortcut(event: KeyboardEvent): void {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') {
    event.preventDefault()
    saveDraft(true).catch((): void => undefined)
  }
}

watch(
  [
    writingMode,
    currentId,
    title,
    slug,
    excerpt,
    metaTitle,
    metaDescription,
    tagsInput,
    content,
    coverUrl,
    qualityScore,
  ],
  (): void => saveBuffer(),
)

watch(title, (): void => {
  nextTick((): void => fitTextareaToContent(titleInput.value)).catch((): void => undefined)
})

onMounted(async (): Promise<void> => {
  window.addEventListener('keydown', saveDraftOnShortcut)
  const draftId: string = typeof route.query.draft === 'string' ? route.query.draft : ''
  if (draftId) {
    try {
      const data: DashboardArticleDraftResponse = await $fetch<DashboardArticleDraftResponse>(
        `/api/dashboard/articles/drafts/${draftId}`,
      )
      loadRecord(data.record)
    } catch {
      showToast({ tone: 'red', title: 'Brouillon introuvable', text: 'Il a peut-être été supprimé.' })
    }
  } else if (route.query.new) {
    // An explicit « new article » starts blank; the flag is stripped so a reload restores the work in progress.
    resetEditor()
    const idea: string = typeof route.query.idea === 'string' ? route.query.idea : ''
    if (idea) {
      writingMode.value = 'ai'
      subjectIdea.value = `Un article qui vise la requête « ${idea} ».`
    }
    window.history.replaceState(window.history.state, '', window.location.pathname)
  } else {
    loadBuffer()
    isAssistantOpen.value = content.value.trim().length === 0
  }
  await nextTick()
  fitTextareaToContent(titleInput.value)
})

onBeforeUnmount((): void => {
  window.removeEventListener('keydown', saveDraftOnShortcut)
})
</script>
