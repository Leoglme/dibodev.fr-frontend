<template>
  <div class="grid gap-6">
    <div class="grid gap-2">
      <h2
        ref="stepHeading"
        tabindex="-1"
        class="text-[22px] leading-tight font-medium tracking-[-0.01em] text-balance text-gray-100 outline-none sm:text-[26px]"
      >
        {{ stepTitle }}
      </h2>
      <p class="text-muted text-[15px] leading-6">{{ stepHelp }}</p>
    </div>

    <template v-if="props.step === 1">
      <div role="radiogroup" :aria-label="stepTitle" class="grid gap-2.5 min-[30rem]:grid-cols-2 lg:grid-cols-1">
        <button
          v-for="projectType in PROJECT_SPECIFICATION_PROJECT_TYPES"
          :key="projectType"
          type="button"
          role="radio"
          :aria-checked="props.answers.projectType === projectType"
          class="group hover:border-primary aria-checked:border-primary aria-checked:bg-surface-tint focus-visible:outline-primary relative grid cursor-pointer grid-cols-[auto_minmax(0,1fr)] items-start gap-3 rounded-[14px] border border-gray-400 bg-white p-3.5 text-left text-gray-100 transition-[border-color,background-color,box-shadow] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 aria-checked:shadow-[inset_0_0_0_1px_var(--color-primary)] motion-reduce:transition-none min-[30rem]:grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)]"
          @click="chooseProjectType(projectType)"
        >
          <span
            class="grid h-10 w-10 place-items-center rounded-[10px]"
            :class="PROJECT_TYPE_TILE_CLASSES[projectType]"
            aria-hidden="true"
          >
            <DibodevIcon :name="props.wording.types[projectType].icon" mode="stroke" :width="20" :height="20" />
          </span>
          <span class="grid min-w-0 gap-0.5">
            <span class="text-base leading-snug font-medium">{{ props.wording.types[projectType].label }}</span>
            <span class="text-muted text-[13.5px] leading-[1.4]">{{
              props.wording.types[projectType].description
            }}</span>
          </span>
          <DibodevProjectSpecificationCheckBadge />
        </button>
      </div>
      <div class="grid gap-3">
        <p :id="`${idPrefix}-kind`" class="text-base font-medium text-gray-100">{{ props.wording.kindQuestion }}</p>
        <div role="radiogroup" :aria-labelledby="`${idPrefix}-kind`" class="grid grid-cols-2 gap-2">
          <button
            v-for="kind in props.wording.kinds"
            :key="kind.id"
            type="button"
            role="radio"
            :aria-checked="props.answers.kind === kind.id"
            :class="CHOICE_CLASS"
            class="justify-center text-center"
            @click="update({ kind: kind.id })"
          >
            {{ kind.label }}
          </button>
        </div>
      </div>
    </template>

    <template v-else-if="props.step === 2">
      <div class="grid gap-4">
        <div v-for="field in companyFields" :key="field.key" class="grid gap-3">
          <label :for="`${idPrefix}-${field.key}`" class="text-base font-medium text-gray-100">{{ field.label }}</label>
          <input
            :id="`${idPrefix}-${field.key}`"
            type="text"
            :value="props.answers[field.key]"
            :placeholder="field.placeholder"
            :maxlength="field.maxLength"
            :autocomplete="field.autocomplete"
            class="focus:border-primary placeholder:text-muted flex h-12 w-full appearance-none rounded-lg border border-gray-400 bg-white px-3 text-base text-gray-100 transition-colors outline-none hover:border-gray-100 focus:shadow-[0_0_0_3px_rgba(111,95,224,0.15)]"
            @input="updateText(field.key, $event)"
          />
        </div>
      </div>
      <div class="grid gap-3">
        <p :id="`${idPrefix}-size`" class="text-base font-medium text-gray-100">{{ props.wording.sizeQuestion }}</p>
        <div
          role="radiogroup"
          :aria-labelledby="`${idPrefix}-size`"
          class="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-2"
        >
          <button
            v-for="size in props.wording.sizes"
            :key="size.id"
            type="button"
            role="radio"
            :aria-checked="props.answers.companySize === size.id"
            :aria-label="`${size.value} ${size.unit}`"
            :class="TILE_CLASS"
            @click="update({ companySize: size.id })"
          >
            <span class="text-xl leading-[1.15] font-medium whitespace-nowrap tabular-nums">{{ size.value }}</span>
            <span class="text-muted text-[13px]">{{ size.unit }}</span>
            <DibodevProjectSpecificationCheckBadge />
          </button>
        </div>
      </div>
    </template>

    <template v-else-if="props.step === 3">
      <div class="grid gap-3">
        <div role="group" :aria-label="stepTitle" class="flex flex-wrap gap-2">
          <button
            v-for="goal in typeWording.goals"
            :key="goal.id"
            type="button"
            :aria-pressed="props.answers.goals.includes(goal.id)"
            :aria-disabled="isGoalLocked(goal.id)"
            :class="CHIP_CLASS"
            @click="toggleGoal(goal.id)"
          >
            <DibodevIcon
              v-if="props.answers.goals.includes(goal.id)"
              name="Check"
              mode="stroke"
              :width="14"
              :height="14"
              class="shrink-0"
              aria-hidden="true"
            />
            {{ goal.label }}
          </button>
        </div>
        <p class="text-muted text-sm leading-6" aria-live="polite">{{ goalsCountLabel }}</p>
      </div>
      <div class="grid gap-3">
        <p :id="`${idPrefix}-audience`" class="text-base font-medium text-gray-100">
          {{ typeWording.audienceQuestion }}
        </p>
        <div role="radiogroup" :aria-labelledby="`${idPrefix}-audience`" class="grid gap-2">
          <button
            v-for="audience in typeWording.audiences"
            :key="audience.id"
            type="button"
            role="radio"
            :aria-checked="props.answers.audience === audience.id"
            :class="ROW_CLASS"
            @click="update({ audience: audience.id })"
          >
            {{ audience.label }}
            <DibodevProjectSpecificationRadioMark />
          </button>
        </div>
      </div>
    </template>

    <template v-else-if="props.step === 4">
      <div role="group" :aria-label="stepTitle" class="flex flex-wrap gap-2">
        <button
          v-for="feature in typeWording.features"
          :key="feature.id"
          type="button"
          :aria-pressed="props.answers.features.includes(feature.id)"
          :class="CHIP_CLASS"
          @click="toggleFeature(feature.id)"
        >
          <DibodevIcon
            v-if="props.answers.features.includes(feature.id)"
            name="Check"
            mode="stroke"
            :width="14"
            :height="14"
            class="shrink-0"
            aria-hidden="true"
          />
          {{ feature.label }}
        </button>
      </div>
      <div class="grid gap-3">
        <p :id="`${idPrefix}-content`" class="text-base font-medium text-gray-100">{{ typeWording.contentQuestion }}</p>
        <div role="radiogroup" :aria-labelledby="`${idPrefix}-content`" class="grid gap-2">
          <button
            v-for="source in typeWording.contentSources"
            :key="source.id"
            type="button"
            role="radio"
            :aria-checked="props.answers.contentSource === source.id"
            :class="ROW_CLASS"
            @click="update({ contentSource: source.id })"
          >
            {{ source.label }}
            <DibodevProjectSpecificationRadioMark />
          </button>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="grid gap-3">
        <p :id="`${idPrefix}-budget`" class="text-base font-medium text-gray-100">{{ props.wording.budgetQuestion }}</p>
        <div role="radiogroup" :aria-labelledby="`${idPrefix}-budget`" class="grid gap-2">
          <button
            v-for="budget in props.wording.budgets"
            :key="budget.id"
            type="button"
            role="radio"
            :aria-checked="props.answers.budget === budget.id"
            :class="ROW_CLASS"
            @click="update({ budget: budget.id })"
          >
            {{ budget.label }}
            <DibodevProjectSpecificationRadioMark />
          </button>
        </div>
        <NuxtLink
          :to="props.budgetHelpTo"
          class="text-primary hover:text-primary-dark inline-flex w-fit items-center gap-1.5 text-[15px] font-medium decoration-2 underline-offset-4 transition-colors hover:underline"
        >
          {{ props.wording.budgetHelpLinkLabel }}
          <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
        </NuxtLink>
      </div>
      <div class="grid gap-3">
        <p :id="`${idPrefix}-date`" class="text-base font-medium text-gray-100">
          {{ props.wording.launchDateQuestion }}
        </p>
        <div
          role="radiogroup"
          :aria-labelledby="`${idPrefix}-date`"
          class="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-2"
        >
          <button
            v-for="launchDate in props.wording.launchDates"
            :key="launchDate.id"
            type="button"
            role="radio"
            :aria-checked="props.answers.launchDate === launchDate.id"
            :aria-label="launchDate.documentText"
            :class="TILE_CLASS"
            @click="update({ launchDate: launchDate.id })"
          >
            <span class="text-muted text-[13px]">{{ launchDate.unit }}</span>
            <span class="text-lg leading-[1.15] font-medium whitespace-nowrap">{{ launchDate.value }}</span>
            <DibodevProjectSpecificationCheckBadge />
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type {
  DibodevProjectSpecificationAnswers,
  DibodevProjectSpecificationProjectType,
  DibodevProjectSpecificationStep,
  DibodevProjectSpecificationTypeWording,
  DibodevProjectSpecificationWording,
} from '~/core/types/DibodevProjectSpecification'
import type {
  DibodevProjectSpecificationCompanyTextField,
  DibodevProjectSpecificationQuestionsProps,
} from '~/core/types/DibodevProjectSpecificationQuestions'
import { computed, h, ref, useId } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { PROJECT_SPECIFICATION_PROJECT_TYPES } from '~/core/constants/projectSpecification/pageShared'
import {
  PROJECT_SPECIFICATION_MAX_GOALS,
  ProjectSpecificationDocumentUtils,
} from '~/core/utils/ProjectSpecificationDocumentUtils'

const PROJECT_TYPE_TILE_CLASSES: Record<DibodevProjectSpecificationProjectType, string> = {
  showcaseWebsite: 'bg-[#efeaff] text-[#5b4bd0]',
  onlineStore: 'bg-[#e4f8ec] text-[#047857]',
  businessSoftware: 'bg-[#e0f5fa] text-[#0e7490]',
  mobileApp: 'bg-[#fdf1dc] text-[#b45309]',
}

const CHOICE_BASE_CLASS: string =
  'hover:border-primary aria-checked:border-primary aria-checked:bg-surface-tint focus-visible:outline-primary relative flex cursor-pointer items-center rounded-[10px] border border-gray-400 bg-white text-gray-100 transition-[border-color,background-color,box-shadow] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 aria-checked:shadow-[inset_0_0_0_1px_var(--color-primary)] motion-reduce:transition-none'
const CHOICE_CLASS: string = `${CHOICE_BASE_CLASS} min-h-12 px-3.5 py-2.5 text-[15px] font-medium`
const ROW_CLASS: string = `${CHOICE_BASE_CLASS} group min-h-12 justify-between gap-3 px-3.5 py-2.5 text-left text-[15px] leading-snug`
const TILE_CLASS: string = `${CHOICE_BASE_CLASS} group grid min-h-[76px] content-center justify-items-center gap-0.5 rounded-[14px] px-2 py-3 text-center`
const CHIP_CLASS: string =
  'hover:border-primary hover:text-primary-dark aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:hover:text-white focus-visible:outline-primary inline-flex min-h-10 cursor-pointer items-center gap-1.5 rounded-full border border-gray-400 bg-white px-3.5 py-2 text-left text-sm leading-snug font-medium text-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-45 aria-disabled:hover:border-gray-400 aria-disabled:hover:text-gray-100 aria-pressed:text-white'

const DibodevProjectSpecificationCheckBadge = (): ReturnType<typeof h> =>
  h(
    'span',
    {
      class:
        'bg-primary absolute -top-2 -right-2 grid h-6 w-6 scale-60 place-items-center rounded-full text-white opacity-0 ring-2 ring-white transition duration-150 group-aria-checked:scale-100 group-aria-checked:opacity-100 motion-reduce:transition-none',
      'aria-hidden': 'true',
    },
    [h(DibodevIcon, { name: 'Check', mode: 'stroke', width: 14, height: 14 })],
  )

const DibodevProjectSpecificationRadioMark = (): ReturnType<typeof h> =>
  h('span', {
    class:
      'h-[18px] w-[18px] shrink-0 rounded-full border-[1.5px] border-[#14141459] bg-white transition-[border-width,border-color] duration-150 group-aria-checked:border-[5px] group-aria-checked:border-primary',
    'aria-hidden': 'true',
  })

/** Every choice is emitted as soon as it is made, so the document follows each click. */
const props: DibodevProjectSpecificationQuestionsProps = defineProps({
  step: {
    type: Number as PropType<DibodevProjectSpecificationStep>,
    required: true,
  },
  answers: {
    type: Object as PropType<DibodevProjectSpecificationAnswers>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevProjectSpecificationWording>,
    required: true,
  },
  budgetHelpTo: {
    type: String as PropType<string>,
    required: true,
  },
})

const emit: {
  (event: 'update:answers', answers: DibodevProjectSpecificationAnswers): void
} = defineEmits<{
  (event: 'update:answers', answers: DibodevProjectSpecificationAnswers): void
}>()

const idPrefix: string = useId() ?? 'specification'

/* REFS */
const stepHeading: Ref<HTMLHeadingElement | null> = ref(null)

/* COMPUTED */
const typeWording: ComputedRef<DibodevProjectSpecificationTypeWording> = computed(
  (): DibodevProjectSpecificationTypeWording => props.wording.types[props.answers.projectType],
)

const stepTitle: ComputedRef<string> = computed((): string =>
  props.step === 3 ? typeWording.value.goalsQuestion : props.wording.steps[props.step].title,
)

const stepHelp: ComputedRef<string> = computed((): string =>
  props.step === 4 ? typeWording.value.featuresHelp : props.wording.steps[props.step].help,
)

const companyFields: ComputedRef<DibodevProjectSpecificationCompanyTextField[]> = computed(
  (): DibodevProjectSpecificationCompanyTextField[] => [
    {
      key: 'companyName',
      label: props.wording.companyNameLabel,
      placeholder: props.wording.companyNamePlaceholder,
      maxLength: 80,
      autocomplete: 'organization',
    },
    {
      key: 'activity',
      label: props.wording.activityLabel,
      placeholder: props.wording.activityPlaceholder,
      maxLength: 160,
      autocomplete: 'off',
    },
    {
      key: 'city',
      label: props.wording.cityLabel,
      placeholder: props.wording.cityPlaceholder,
      maxLength: 60,
      autocomplete: 'address-level2',
    },
  ],
)

const goalsCountLabel: ComputedRef<string> = computed((): string =>
  props.wording.goalsCount
    .replace('{count}', String(props.answers.goals.length))
    .replace('{max}', String(PROJECT_SPECIFICATION_MAX_GOALS)),
)

/* METHODS */
/**
 * Sends the answers with the given fields changed.
 * @param {Partial<DibodevProjectSpecificationAnswers>} changes - The fields to change.
 * @returns {void}
 */
function update(changes: Partial<DibodevProjectSpecificationAnswers>): void {
  emit('update:answers', { ...props.answers, ...changes })
}

/**
 * Chooses the project type: the options that belong to the previous type start again.
 * @param {DibodevProjectSpecificationProjectType} projectType - The type clicked.
 * @returns {void}
 */
function chooseProjectType(projectType: DibodevProjectSpecificationProjectType): void {
  emit('update:answers', ProjectSpecificationDocumentUtils.withProjectType(props.answers, projectType, props.wording))
}

/**
 * Copies what the visitor types in a company field.
 * @param {DibodevProjectSpecificationCompanyTextField['key']} key - The field.
 * @param {Event} event - The input event.
 * @returns {void}
 */
function updateText(key: DibodevProjectSpecificationCompanyTextField['key'], event: Event): void {
  if (!(event.target instanceof HTMLInputElement)) {
    return
  }
  update({ [key]: event.target.value })
}

/**
 * Whether a goal can no longer be picked because three are already chosen.
 * @param {string} goalId - The goal.
 * @returns {boolean} True when the goal is not chosen and the limit is reached.
 */
function isGoalLocked(goalId: string): boolean {
  return !props.answers.goals.includes(goalId) && props.answers.goals.length >= PROJECT_SPECIFICATION_MAX_GOALS
}

/**
 * Picks or removes a goal, three at most.
 * @param {string} goalId - The goal clicked.
 * @returns {void}
 */
function toggleGoal(goalId: string): void {
  update({
    goals: ProjectSpecificationDocumentUtils.toggleOption(props.answers.goals, goalId, PROJECT_SPECIFICATION_MAX_GOALS),
  })
}

/**
 * Ticks or unticks a feature.
 * @param {string} featureId - The feature clicked.
 * @returns {void}
 */
function toggleFeature(featureId: string): void {
  update({ features: ProjectSpecificationDocumentUtils.toggleOption(props.answers.features, featureId, null) })
}

/**
 * Moves the keyboard and screen reader focus to the question, without scrolling.
 * @returns {void}
 */
function focusHeading(): void {
  stepHeading.value?.focus({ preventScroll: true })
}

defineExpose({ focusHeading })
</script>
