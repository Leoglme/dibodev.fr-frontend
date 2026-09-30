<template>
  <div class="grid gap-6">
    <div class="grid gap-2">
      <h2
        :id="titleId"
        ref="questionTitle"
        tabindex="-1"
        class="text-[22px] leading-tight font-medium tracking-[-0.01em] text-gray-100 outline-none sm:text-[28px]"
      >
        <DibodevHyphenSafeText :text="props.question.title" />
      </h2>
      <p v-if="questionHelpText" class="text-muted text-[15px] leading-6">{{ questionHelpText }}</p>
    </div>

    <div
      :role="isMultipleChoice ? 'group' : 'radiogroup'"
      :aria-labelledby="titleId"
      class="grid"
      :class="{
        'gap-2': props.question.display === 'list',
        'gap-2.5': props.question.display !== 'list',
        'grid-cols-2 sm:grid-cols-4': props.question.display === 'tiles' && props.question.options.length === 4,
        'grid-cols-1 sm:grid-cols-3': props.question.display === 'tiles' && props.question.options.length !== 4,
      }"
    >
      <button
        v-for="option in props.question.options"
        :key="option.id"
        type="button"
        class="group hover:border-primary aria-checked:border-primary aria-checked:bg-surface-tint focus-visible:outline-primary relative cursor-pointer border border-gray-400 bg-white text-left text-gray-100 transition-[border-color,background-color,box-shadow,opacity] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 aria-disabled:hover:border-gray-400 motion-reduce:transition-none"
        :class="{
          'grid min-h-[92px] content-center justify-items-center gap-0.5 rounded-[14px] px-1.5 py-4 text-center aria-checked:shadow-[inset_0_0_0_1px_var(--color-primary)] sm:px-2':
            props.question.display === 'tiles',
          'flex min-h-16 w-full items-center gap-3 rounded-[14px] py-2.5 pr-3 pl-2 aria-checked:shadow-[inset_0_0_0_1px_var(--color-primary)] sm:gap-3.5 sm:pr-3.5 sm:pl-2.5':
            props.question.display === 'cards',
          'flex min-h-[52px] w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] leading-[1.4] sm:px-3.5':
            props.question.display === 'list',
          'max-sm:flex max-sm:min-h-14 max-sm:items-baseline max-sm:justify-center max-sm:gap-2 max-sm:py-3':
            props.question.display === 'tiles' && props.question.options.length !== 4,
        }"
        :role="isMultipleChoice ? 'checkbox' : 'radio'"
        :aria-label="option.unit ? `${option.label} ${option.unit}` : option.label"
        :aria-checked="isOptionSelected(option.id)"
        :aria-disabled="isOptionLocked(option.id) || undefined"
        @click="onOptionClick(option.id)"
      >
        <template v-if="props.question.display === 'tiles'">
          <span
            class="bg-primary absolute -top-2 -right-2 grid h-6 w-6 scale-60 place-items-center rounded-full text-white opacity-0 ring-2 ring-white transition duration-150 group-aria-checked:scale-100 group-aria-checked:opacity-100 motion-reduce:transition-none"
            aria-hidden="true"
          >
            <DibodevIcon name="Check" mode="stroke" :width="14" :height="14" />
          </span>
          <span class="text-xl leading-[1.15] font-medium whitespace-nowrap tabular-nums sm:text-2xl">{{
            option.label
          }}</span>
          <span class="text-muted text-sm">{{ option.unit }}</span>
        </template>

        <template v-else-if="props.question.display === 'cards'">
          <span
            v-if="option.icon"
            class="bg-surface-tint text-primary-dark grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[10px] transition-colors group-aria-checked:bg-white"
            aria-hidden="true"
          >
            <DibodevIcon :name="option.icon" mode="stroke" :width="20" :height="20" />
          </span>
          <span class="min-w-0 flex-1 text-[15px] leading-[1.45]">{{ option.label }}</span>
          <span
            class="group-aria-checked:border-primary group-aria-checked:bg-primary grid shrink-0 place-items-center border-[1.5px] border-gray-400 text-white transition-colors"
            :class="isMultipleChoice ? 'h-5 w-5 rounded-md' : 'h-[22px] w-[22px] rounded-full'"
            aria-hidden="true"
          >
            <DibodevIcon v-if="isOptionSelected(option.id)" name="Check" mode="stroke" :width="13" :height="13" />
          </span>
        </template>

        <template v-else>
          <span
            class="group-aria-checked:border-primary group-aria-checked:bg-primary grid h-5 w-5 shrink-0 place-items-center rounded-md border-[1.5px] border-gray-400 text-white transition-colors"
            aria-hidden="true"
          >
            <DibodevIcon v-if="isOptionSelected(option.id)" name="Check" mode="stroke" :width="13" :height="13" />
          </span>
          <span class="min-w-0 flex-1">{{ option.label }}</span>
        </template>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { DibodevQuizQuestion } from '~/core/types/DibodevQuiz'
import type { DibodevQuizQuestionStepProps } from '~/core/types/DibodevQuizQuestionStep'
import { computed, ref } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevHyphenSafeText from '~/components/ui/DibodevHyphenSafeText.vue'

const props: DibodevQuizQuestionStepProps = defineProps({
  question: {
    type: Object as PropType<DibodevQuizQuestion>,
    required: true,
  },
  selectedOptionIds: {
    type: Array as PropType<string[]>,
    default: (): string[] => [],
  },
})

const emit: {
  (event: 'toggle', optionId: string): void
} = defineEmits<{
  (event: 'toggle', optionId: string): void
}>()

const { t } = useI18n()

/* REFS */
const questionTitle: Ref<HTMLHeadingElement | null> = ref(null)

/* COMPUTED */
const titleId: ComputedRef<string> = computed((): string => `quiz-question-${props.question.id}`)
const isMultipleChoice: ComputedRef<boolean> = computed((): boolean => props.question.selection === 'multiple')
const hasReachedMaximumSelection: ComputedRef<boolean> = computed(
  (): boolean => props.question.maxSelected !== null && props.selectedOptionIds.length >= props.question.maxSelected,
)

const questionHelpText: ComputedRef<string> = computed((): string => {
  const selectionHelpText: string = !isMultipleChoice.value
    ? ''
    : props.question.maxSelected !== null
      ? t('quizTunnel.maxHint', { max: props.question.maxSelected })
      : t('quizTunnel.multipleHint')
  return [props.question.helpText, selectionHelpText].filter((text: string): boolean => text !== '').join(' ')
})

/* METHODS */
/**
 * Tells whether an option is selected.
 * @param {string} optionId - The option.
 * @returns {boolean} True when selected.
 */
function isOptionSelected(optionId: string): boolean {
  return props.selectedOptionIds.includes(optionId)
}

/**
 * Tells whether an option can no longer be ticked because the maximum is reached.
 * @param {string} optionId - The option.
 * @returns {boolean} True when locked.
 */
function isOptionLocked(optionId: string): boolean {
  return hasReachedMaximumSelection.value && !isOptionSelected(optionId)
}

/**
 * Reports a click on an option, unless the maximum of a multiple choice is reached.
 * @param {string} optionId - The option clicked.
 * @returns {void}
 */
function onOptionClick(optionId: string): void {
  if (isOptionLocked(optionId)) return
  emit('toggle', optionId)
}

/**
 * Moves the keyboard and screen reader focus to the question, without scrolling.
 * @returns {void}
 */
function focusTitle(): void {
  questionTitle.value?.focus({ preventScroll: true })
}

defineExpose({ focusTitle })
</script>
