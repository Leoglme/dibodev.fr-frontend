<template>
  <section class="rounded-xl border border-gray-300 bg-white">
    <button
      type="button"
      class="flex w-full cursor-pointer items-center gap-2.5 px-4 py-3.5 text-left"
      :aria-expanded="props.isExpanded"
      @click="emit('update:isExpanded', !props.isExpanded)"
    >
      <DashboardIcon name="sparkles" :size="17" class="text-primary-dark" />
      <span class="text-[15px] font-medium text-gray-100">Assistant IA</span>
      <DashboardIcon
        name="chevron-down"
        :size="16"
        class="text-muted ml-auto transition-transform duration-200"
        :class="{ '-rotate-90': !props.isExpanded }"
      />
    </button>
    <div v-show="props.isExpanded" class="flex flex-col gap-3.5 px-4 pb-4">
      <DashboardSegmented
        :model-value="props.writingMode"
        :options="WRITING_MODE_OPTIONS"
        screen-reader-label="Mode de rédaction"
        class="self-start"
        @update:model-value="selectWritingMode"
      />
      <template v-if="props.writingMode === 'ai'">
        <label class="flex flex-col gap-1.5" for="ai-idea">
          <span class="text-[13px] font-medium text-gray-200">Idée pour orienter le sujet</span>
          <DashboardTextField
            id="ai-idea"
            v-model="subjectIdeaModel"
            multiline
            :rows="2"
            placeholder="Ex : un article pour les plombiers qui cherchent un site vitrine"
          />
        </label>
        <div
          v-if="suggestedSubject"
          class="border-accent-tint bg-surface-tint flex items-start gap-2.5 rounded-[10px] border p-3 text-[13.5px] leading-snug text-gray-100"
        >
          <DashboardIcon name="sparkles" :size="15" class="text-primary-dark mt-0.5" />
          <span class="min-w-0 flex-1">{{ suggestedSubject }}</span>
          <button
            type="button"
            class="text-primary hover:text-primary-dark shrink-0 cursor-pointer text-[12.5px] font-medium disabled:opacity-60"
            :disabled="isSuggestingSubject"
            @click="requestAnotherSubject"
          >
            Un autre
          </button>
        </div>
        <DashboardButton
          v-else
          variant="outline"
          icon="wand-sparkles"
          :loading="isSuggestingSubject"
          block
          @click="suggestSubject"
        >
          Proposer un sujet
        </DashboardButton>
        <DashboardButton
          variant="primary"
          icon="sparkles"
          block
          :loading="isGeneratingArticle"
          :disabled="!suggestedSubject.trim()"
          @click="generateArticle"
        >
          Générer dans l’éditeur
        </DashboardButton>
      </template>
      <p v-else class="text-muted text-[13px]">
        Tu écris l’article toi-même. Passe en mode « Avec l’IA » pour un premier jet.
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { UseDashboardToastReturn } from '~/composables/useDashboardToast'
import type { PropType, Ref, WritableComputedRef } from 'vue'
import type { DashboardSegmentOption } from '~/core/types/Dashboard'
import type {
  DashboardArticleAssistantCardProps,
  DashboardExistingSubjectsResponse,
} from '~/core/types/DashboardArticleAssistantCard'
import type { ArticleEditorMode, GeneratedArticleForPreview } from '~/types/dashboard'
import type { SuggestSubjectResponse } from '~~/server/types/dashboard/articles'
import { computed, onMounted, ref, watch } from 'vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardSegmented from '~/components/dashboard/ui/DashboardSegmented.vue'
import DashboardTextField from '~/components/dashboard/ui/DashboardTextField.vue'
import { useDashboardToast } from '~/composables/useDashboardToast'

const props: DashboardArticleAssistantCardProps = defineProps({
  isExpanded: {
    type: Boolean,
    required: true,
  },
  writingMode: {
    type: String as PropType<ArticleEditorMode>,
    required: true,
  },
  subjectIdea: {
    type: String,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'update:isExpanded', value: boolean): void
  (e: 'update:writingMode', value: ArticleEditorMode): void
  (e: 'update:subjectIdea', value: string): void
  (e: 'articleGenerated', article: GeneratedArticleForPreview): void
}>()

const { showToast }: UseDashboardToastReturn = useDashboardToast()

const WRITING_MODE_OPTIONS: DashboardSegmentOption[] = [
  { value: 'manual', label: 'Manuelle' },
  { value: 'ai', label: 'Avec l’IA' },
]

let existingSubjects: string[] = []
let rejectedSubjects: string[] = []

const suggestedSubject: Ref<string> = ref('')
const isSuggestingSubject: Ref<boolean> = ref(false)
const isGeneratingArticle: Ref<boolean> = ref(false)

const subjectIdeaModel: WritableComputedRef<string> = computed({
  get: (): string => props.subjectIdea,
  set: (value: string): void => emit('update:subjectIdea', value),
})

/**
 * Switches between writing by hand and writing with the AI.
 *
 * @param {string} writingMode - The value picked in the segmented control.
 * @returns {void}
 */
function selectWritingMode(writingMode: string): void {
  emit('update:writingMode', writingMode === 'ai' ? 'ai' : 'manual')
}

/**
 * Loads the existing blog subjects so the AI does not suggest a duplicate.
 *
 * @returns {Promise<void>}
 */
async function fetchExistingSubjects(): Promise<void> {
  try {
    const data: DashboardExistingSubjectsResponse = await $fetch<DashboardExistingSubjectsResponse>(
      '/api/dashboard/articles/subjects',
    )
    existingSubjects = data.existingSubjects
  } catch {
    existingSubjects = []
  }
}

/**
 * Asks the AI for a subject.
 *
 * @returns {Promise<void>}
 */
async function suggestSubject(): Promise<void> {
  isSuggestingSubject.value = true
  try {
    const data: SuggestSubjectResponse = await $fetch<SuggestSubjectResponse>(
      '/api/dashboard/articles/suggest-subject',
      {
        method: 'POST',
        body: {
          existingSubjects,
          optionalSentence: props.subjectIdea.trim() || undefined,
          rejectedSubjects: rejectedSubjects.length > 0 ? rejectedSubjects : undefined,
        },
      },
    )
    suggestedSubject.value = data.suggestedTopic
  } catch (error: unknown) {
    showToast({ tone: 'red', title: 'Pas de sujet proposé', text: error instanceof Error ? error.message : '' })
  } finally {
    isSuggestingSubject.value = false
  }
}

/**
 * Rejects the current subject and asks for another one.
 *
 * @returns {void}
 */
function requestAnotherSubject(): void {
  if (suggestedSubject.value) rejectedSubjects = [...rejectedSubjects, suggestedSubject.value]
  suggestSubject().catch((): void => undefined)
}

/**
 * Generates a full first draft with the AI and hands it to the editor.
 *
 * @returns {Promise<void>}
 */
async function generateArticle(): Promise<void> {
  if (!suggestedSubject.value) return
  isGeneratingArticle.value = true
  try {
    const article: GeneratedArticleForPreview = await $fetch<GeneratedArticleForPreview>(
      '/api/dashboard/articles/generate',
      {
        method: 'POST',
        body: { suggestedTopic: suggestedSubject.value, existingSubjects },
      },
    )
    emit('articleGenerated', article)
  } catch (error: unknown) {
    showToast({ tone: 'red', title: 'La génération a échoué', text: error instanceof Error ? error.message : '' })
  } finally {
    isGeneratingArticle.value = false
  }
}

watch(
  (): string => props.subjectIdea,
  (): void => {
    rejectedSubjects = []
  },
)

onMounted((): void => {
  fetchExistingSubjects().catch((): void => undefined)
})
</script>
