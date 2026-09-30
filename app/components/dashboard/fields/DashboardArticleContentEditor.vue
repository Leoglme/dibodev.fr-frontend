<template>
  <section class="@container overflow-hidden rounded-xl border border-gray-300 bg-white">
    <div class="flex flex-wrap items-center gap-0.5 border-b border-(--dash-line-soft) bg-(--dash-toolbar) px-2 py-1.5">
      <DashboardSegmented
        :model-value="props.contentView"
        :options="CONTENT_VIEW_OPTIONS"
        screen-reader-label="Affichage"
        class="mr-1.5"
        @update:model-value="selectContentView"
      />
      <template v-if="props.contentView === 'write'">
        <DashboardButton
          v-for="tool in MARKDOWN_TOOLS"
          :key="tool.label"
          variant="ghost"
          size="sm"
          square
          :icon="tool.icon"
          :aria-label="tool.label"
          :data-tip="tool.label"
          @click="insertMarkdown(tool)"
        />
      </template>
      <span class="text-muted ml-auto flex items-center gap-2.5 pr-1.5 text-[12.5px] tabular-nums">
        <span>
          {{ DashboardFormatUtils.plural(wordCount, 'mot')
          }}<span class="@max-[640px]:hidden"> · {{ readingMinutes }} min</span>
        </span>
        <span
          v-if="props.qualityScore !== null"
          class="inline-flex h-6 items-center gap-1.5 rounded-full px-2 font-medium"
          :class="
            props.qualityScore >= 80
              ? 'bg-(--dash-green-tint) text-(--dash-green)'
              : props.qualityScore >= 50
                ? 'bg-(--dash-amber-tint) text-(--dash-amber)'
                : 'bg-(--dash-red-tint) text-(--dash-red)'
          "
          data-tip="Score de qualité donné par l’IA"
        >
          <DashboardIcon name="badge-check" :size="13" />
          {{ props.qualityScore }}/100
        </span>
      </span>
    </div>
    <label for="article-content" class="sr-only">Contenu en Markdown</label>
    <textarea
      v-show="props.contentView === 'write'"
      id="article-content"
      ref="contentInput"
      v-model="contentModel"
      spellcheck="true"
      placeholder="## Introduction&#10;&#10;Écris en Markdown : ## pour les intertitres, **gras**, *italique*, listes avec -."
      class="dash-mono min-h-[460px] w-full resize-y bg-white px-5 py-5 text-sm leading-[1.75] text-gray-100 outline-none placeholder:text-(--dash-faint) md:px-6"
    />
    <div v-if="props.contentView === 'preview'" class="min-h-[460px] px-5 py-6 md:px-7">
      <div v-if="isLoadingPreview" class="flex flex-col gap-3">
        <span v-for="index in 5" :key="index" class="dash-skeleton h-5 w-full" />
      </div>
      <BlogArticleContent v-else-if="props.modelValue.trim()" :content="previewRichtext" />
      <p v-else class="text-muted text-sm">Rien à prévisualiser : écris d’abord le contenu.</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { UseDashboardToastReturn } from '~/composables/useDashboardToast'
import type { ComputedRef, PropType, Ref, WritableComputedRef } from 'vue'
import type { DashboardSegmentOption } from '~/core/types/Dashboard'
import type {
  DashboardArticleContentEditorProps,
  DashboardArticlePreviewResponse,
  DashboardArticlePreviewRichtext,
  DashboardEditorContentView,
  DashboardMarkdownTool,
} from '~/core/types/DashboardArticleContentEditor'
import { computed, nextTick, ref, watch } from 'vue'
import BlogArticleContent from '~/components/blog/BlogArticleContent.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardSegmented from '~/components/dashboard/ui/DashboardSegmented.vue'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'
import { useDashboardToast } from '~/composables/useDashboardToast'

const props: DashboardArticleContentEditorProps = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  contentView: {
    type: String as PropType<DashboardEditorContentView>,
    required: true,
  },
  qualityScore: {
    type: Number as PropType<number | null>,
    default: null,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'update:contentView', value: DashboardEditorContentView): void
}>()

const { showToast }: UseDashboardToastReturn = useDashboardToast()

const CONTENT_VIEW_OPTIONS: DashboardSegmentOption[] = [
  { value: 'write', label: 'Écrire', icon: 'pencil' },
  { value: 'preview', label: 'Aperçu', icon: 'eye' },
]
const MARKDOWN_TOOLS: DashboardMarkdownTool[] = [
  { label: 'Intertitre', icon: 'heading-2', prefix: '\n## ', suffix: '\n', placeholder: 'Intertitre' },
  { label: 'Gras', icon: 'bold', prefix: '**', suffix: '**', placeholder: 'texte' },
  { label: 'Italique', icon: 'italic', prefix: '*', suffix: '*', placeholder: 'texte' },
  { label: 'Liste', icon: 'list', prefix: '\n- ', suffix: '', placeholder: 'élément' },
  { label: 'Citation', icon: 'quote', prefix: '\n> ', suffix: '', placeholder: 'citation' },
  {
    label: 'Lien vers le contact',
    icon: 'link',
    prefix: '[',
    suffix: '](/contact)',
    placeholder: 'Discuter de mon projet',
  },
]

const contentInput: Ref<HTMLTextAreaElement | null> = ref(null)
const isLoadingPreview: Ref<boolean> = ref(false)
const previewRichtext: Ref<DashboardArticlePreviewRichtext> = ref({ type: 'doc', content: [] })

const contentModel: WritableComputedRef<string> = computed({
  get: (): string => props.modelValue,
  set: (value: string): void => emit('update:modelValue', value),
})

const wordCount: ComputedRef<number> = computed((): number => DashboardFormatUtils.countWords(props.modelValue))

const readingMinutes: ComputedRef<number> = computed((): number => Math.max(1, Math.round(wordCount.value / 200)))

/**
 * Switches between the Markdown field and the rendered preview.
 *
 * @param {string} view - The value picked in the segmented control.
 * @returns {void}
 */
function selectContentView(view: string): void {
  emit('update:contentView', view === 'preview' ? 'preview' : 'write')
}

/**
 * Wraps the selection (or a placeholder) with Markdown syntax.
 *
 * @param {DashboardMarkdownTool} tool - The toolbar action.
 * @returns {void}
 */
function insertMarkdown(tool: DashboardMarkdownTool): void {
  const textarea: HTMLTextAreaElement | null = contentInput.value
  if (!textarea) return
  const start: number = textarea.selectionStart
  const end: number = textarea.selectionEnd
  const selected: string = props.modelValue.slice(start, end) || tool.placeholder
  const inserted: string = `${tool.prefix}${selected}${tool.suffix}`
  emit('update:modelValue', `${props.modelValue.slice(0, start)}${inserted}${props.modelValue.slice(end)}`)
  nextTick((): void => {
    textarea.focus()
    const cursor: number = start + tool.prefix.length
    textarea.setSelectionRange(cursor, cursor + selected.length)
  }).catch((): void => undefined)
}

/**
 * Converts the Markdown into the richtext the blog renders, for the preview pane.
 *
 * @returns {Promise<void>}
 */
async function refreshPreview(): Promise<void> {
  isLoadingPreview.value = true
  try {
    const data: DashboardArticlePreviewResponse = await $fetch<DashboardArticlePreviewResponse>(
      '/api/dashboard/articles/preview',
      { method: 'POST', body: { content: props.modelValue } },
    )
    previewRichtext.value = data.contentRichtext
  } catch {
    showToast({ tone: 'red', title: 'Aperçu indisponible', text: 'Le serveur n’a pas converti le contenu.' })
    emit('update:contentView', 'write')
  } finally {
    isLoadingPreview.value = false
  }
}

watch(
  (): DashboardEditorContentView => props.contentView,
  (view: DashboardEditorContentView): void => {
    if (view === 'preview') refreshPreview().catch((): void => undefined)
  },
)
</script>
