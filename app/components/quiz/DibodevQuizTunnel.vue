<template>
  <div
    ref="tunnelCard"
    class="quiz-tunnel grid scroll-mt-24 gap-6 rounded-2xl border border-gray-300 bg-white p-4 shadow-[0_32px_80px_-44px_rgba(91,75,208,0.4)] sm:p-8 lg:p-10"
  >
    <div class="grid gap-3">
      <div class="flex min-h-11 items-center justify-between gap-4">
        <button
          type="button"
          class="text-primary hover:text-primary-dark hover:bg-surface-tint focus-visible:outline-primary -ml-2 inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-lg px-2 text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          :class="{ invisible: stepIndex === 0 }"
          :disabled="stepIndex === 0"
          @click="goBack"
        >
          <DibodevIcon name="ArrowLeft" mode="stroke" :width="18" :height="18" aria-hidden="true" />
          {{ backLabel }}
        </button>
        <span class="text-muted text-sm tabular-nums">{{ stepCountLabel }}</span>
      </div>
      <DibodevRoadProgress
        :completedSteps="completedSteps"
        :totalSteps="questionCount"
        :travellerIcon="props.quiz.progressTravellerIcon"
        :label="t('quizTunnel.progressLabel')"
      />
    </div>

    <div :key="stepIndex" :class="{ 'quiz-tunnel__step--entering': shouldAnimateStepEntry }">
      <DibodevQuizQuestionStep
        v-if="currentQuestion"
        ref="questionStep"
        :question="currentQuestion"
        :selectedOptionIds="answers[currentQuestion.id] ?? []"
        @toggle="onOptionToggle"
      />
      <DibodevQuizResultStep
        v-else-if="result"
        ref="resultStep"
        :result="result"
        :conversionView="conversionView"
        :quizId="props.quiz.id"
        :projectTypeLabel="projectTypeLabel"
        :leadMessage="leadMessage"
        @open-form="onLeadFormOpen"
        @close-form="onConversionViewChange('cta')"
        @sent="onConversionViewChange('sent')"
        @restart="restartQuiz"
      />
    </div>

    <p class="sr-only" aria-live="polite">{{ statusAnnouncement }}</p>

    <Transition name="quiz-continue-bar">
      <div
        v-if="isContinueBarVisible"
        class="fixed inset-x-0 bottom-0 z-40 border-t border-gray-300 bg-white/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] shadow-[0_-16px_32px_-24px_rgba(20,20,20,0.35)] backdrop-blur-sm sm:px-8 sm:pt-4 sm:pb-[calc(1rem+env(safe-area-inset-bottom,0px))]"
      >
        <div class="mx-auto w-full max-w-5xl">
          <DibodevButton
            size="lg"
            class="w-full"
            icon="ArrowRight"
            iconPosition="right"
            :disabled="!hasAnsweredCurrentQuestion"
            @click="onMultipleChoiceConfirm"
          >
            {{ t('quizTunnel.continue') }}
          </DibodevButton>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { LocationQuery, LocationQueryValue } from 'vue-router'
import type { DibodevQuizResultRevealTargets } from '~/core/types/DibodevQuizResultStep'
import type {
  DibodevQuizAnswers,
  DibodevQuizConversionView,
  DibodevQuizDefinition,
  DibodevQuizOption,
  DibodevQuizQuestion,
  DibodevQuizResult,
} from '~/core/types/DibodevQuiz'
import type { DibodevQuizHistoryMode, DibodevQuizTunnelProps } from '~/core/types/DibodevQuizTunnel'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevRoadProgress from '~/components/data-displays/DibodevRoadProgress.vue'
import DibodevQuizQuestionStep from '~/components/quiz/DibodevQuizQuestionStep.vue'
import DibodevQuizResultStep from '~/components/quiz/DibodevQuizResultStep.vue'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** The step lives in the address, so the browser Back button walks through the questions. */
const STEP_QUERY_KEY: string = 'step'
const RESULT_STEP_QUERY_VALUE: string = 'result'
const ANSWERS_STORAGE_KEY_PREFIX: string = 'dibodev_quiz_'
const AUTO_ADVANCE_DELAY_MS: number = 260
const NAVBAR_HEIGHT: number = 72
/** Space kept between the result and the navbar above, or the bottom of the screen below. */
const RESULT_REVEAL_MARGIN: number = 24
/** The Continue bar hides once the card has almost left the screen, so it never floats over the rest of the page. */
const CARD_VISIBILITY_ROOT_MARGIN: string = `-${NAVBAR_HEIGHT}px 0px -160px 0px`

const props: DibodevQuizTunnelProps = defineProps({
  quiz: {
    type: Object as PropType<DibodevQuizDefinition>,
    required: true,
  },
})

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const { track } = useTracking()

/** Query changes of a navigation to another page must not move the card being removed. */
const tunnelPagePath: string = route.path
let hasTrackedTunnelStart: boolean = false
let isWaitingForNextQuestion: boolean = false
let autoAdvanceTimer: ReturnType<typeof setTimeout> | null = null
let cardVisibilityObserver: IntersectionObserver | null = null

/* REFS */
const tunnelCard: Ref<HTMLDivElement | null> = ref(null)
const questionStep: Ref<InstanceType<typeof DibodevQuizQuestionStep> | null> = ref(null)
const resultStep: Ref<InstanceType<typeof DibodevQuizResultStep> | null> = ref(null)
const stepIndex: Ref<number> = ref(0)
const answers: Ref<DibodevQuizAnswers> = ref({})
const conversionView: Ref<DibodevQuizConversionView> = ref('cta')
const statusAnnouncement: Ref<string> = ref('')
const shouldAnimateStepEntry: Ref<boolean> = ref(false)
const isCardOnScreen: Ref<boolean> = ref(false)

/* COMPUTED */
const questionCount: ComputedRef<number> = computed((): number => props.quiz.questions.length)
const isResultStep: ComputedRef<boolean> = computed((): boolean => stepIndex.value >= questionCount.value)
const currentQuestion: ComputedRef<DibodevQuizQuestion | null> = computed(
  (): DibodevQuizQuestion | null => props.quiz.questions[stepIndex.value] ?? null,
)
/** The visitor cannot jump past the first question left unanswered. */
const firstUnansweredIndex: ComputedRef<number> = computed((): number => {
  const index: number = props.quiz.questions.findIndex(
    (question: DibodevQuizQuestion): boolean => (answers.value[question.id] ?? []).length === 0,
  )
  return index === -1 ? questionCount.value : index
})
const result: ComputedRef<DibodevQuizResult | null> = computed((): DibodevQuizResult | null =>
  isResultStep.value && firstUnansweredIndex.value === questionCount.value
    ? props.quiz.computeResult(answers.value)
    : null,
)
const hasAnsweredCurrentQuestion: ComputedRef<boolean> = computed(
  (): boolean => currentQuestion.value !== null && (answers.value[currentQuestion.value.id] ?? []).length > 0,
)
/** Only a multiple choice needs a Continue button: single choices move on by themselves. */
const isContinueBarVisible: ComputedRef<boolean> = computed(
  (): boolean => currentQuestion.value?.selection === 'multiple' && isCardOnScreen.value,
)
const completedSteps: ComputedRef<number> = computed((): number => Math.min(stepIndex.value, questionCount.value))
const stepCountLabel: ComputedRef<string> = computed((): string =>
  isResultStep.value
    ? t('quizTunnel.resultCount')
    : t('quizTunnel.questionCount', { current: stepIndex.value + 1, total: questionCount.value }),
)
const backLabel: ComputedRef<string> = computed((): string =>
  isResultStep.value ? t('quizTunnel.editAnswers') : t('quizTunnel.back'),
)
const projectTypeLabel: ComputedRef<string> = computed((): string =>
  t(`contact.form.projectType.${props.quiz.contactProjectType}`),
)
/** The budget has its own field in the contact email, so the message only carries the result and the answers. */
const leadMessage: ComputedRef<string> = computed((): string => {
  if (!result.value) return ''
  const answerLines: string[] = props.quiz.questions.map((question: DibodevQuizQuestion): string =>
    t('quizTunnel.lead.answer', {
      question: question.leadMessageLabel,
      answer: answerLabelsOf(question).join(', '),
    }),
  )
  return [
    t('quizTunnel.lead.intro', { quiz: props.quiz.name }),
    t('quizTunnel.lead.result', { title: result.value.title }),
    '',
    ...answerLines,
  ].join('\n')
})

/* METHODS */
/**
 * Labels of the options selected for a question, with the unit of a number tile ("5 à 10 moniteurs").
 * @param {DibodevQuizQuestion} question - The question.
 * @returns {string[]} The labels, in display order.
 */
function answerLabelsOf(question: DibodevQuizQuestion): string[] {
  const selectedIds: string[] = answers.value[question.id] ?? []
  return question.options
    .filter((option: DibodevQuizOption): boolean => selectedIds.includes(option.id))
    .map((option: DibodevQuizOption): string => (option.unit ? `${option.label} ${option.unit}` : option.label))
}

/**
 * Tells whether the visitor prefers less motion.
 * @returns {boolean} True when animations and smooth scrolling should be skipped.
 */
function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Session storage key of the answers of this test.
 * @returns {string} The key.
 */
function answersStorageKey(): string {
  return `${ANSWERS_STORAGE_KEY_PREFIX}${props.quiz.id}`
}

/**
 * Reads the answers kept during the visit, keeping only options that still exist.
 * @returns {DibodevQuizAnswers} The answers, empty when none are stored or storage is unavailable.
 */
function readStoredAnswers(): DibodevQuizAnswers {
  try {
    const raw: string | null = window.sessionStorage.getItem(answersStorageKey())
    const stored: unknown = raw ? JSON.parse(raw) : null
    if (typeof stored !== 'object' || stored === null) return {}
    const storedAnswers: Map<string, unknown> = new Map(Object.entries(stored))
    return props.quiz.questions.reduce(
      (kept: DibodevQuizAnswers, question: DibodevQuizQuestion): DibodevQuizAnswers => {
        const storedOptionIds: unknown = storedAnswers.get(question.id)
        const optionIds: string[] = Array.isArray(storedOptionIds)
          ? question.options
              .map((option: DibodevQuizOption): string => option.id)
              .filter((optionId: string): boolean => storedOptionIds.includes(optionId))
          : []
        return optionIds.length ? { ...kept, [question.id]: optionIds } : kept
      },
      {},
    )
  } catch {
    return {}
  }
}

/**
 * Keeps the answers for the rest of the visit (reload, Back button, return from another page).
 * @param {DibodevQuizAnswers} value - The answers.
 * @returns {void}
 */
function storeAnswers(value: DibodevQuizAnswers): void {
  try {
    window.sessionStorage.setItem(answersStorageKey(), JSON.stringify(value))
  } catch {
    // Storage may be unavailable (private mode, blocked site data): the test still works for the page view.
  }
}

/**
 * Reads the step of the address, capped at the first unanswered question.
 * @param {LocationQueryValue | LocationQueryValue[] | undefined} value - The `step` query value.
 * @returns {number} The step index (question count for the result).
 */
function stepIndexFromQuery(value: LocationQueryValue | LocationQueryValue[] | undefined): number {
  const rawValue: string = String(Array.isArray(value) ? value[0] : (value ?? ''))
  const requestedIndex: number =
    rawValue === RESULT_STEP_QUERY_VALUE ? questionCount.value : Math.max(Number.parseInt(rawValue, 10) - 1, 0) || 0
  return Math.min(requestedIndex, firstUnansweredIndex.value)
}

/**
 * Query of the address for a step: no parameter on the first question, other parameters (UTM…) kept.
 * @param {number} index - The step index.
 * @returns {LocationQuery} The query.
 */
function queryForStep(index: number): LocationQuery {
  const query: LocationQuery = { ...route.query }
  delete query[STEP_QUERY_KEY]
  if (index === 0) return query
  return { ...query, [STEP_QUERY_KEY]: index >= questionCount.value ? RESULT_STEP_QUERY_VALUE : String(index + 1) }
}

/**
 * Writes a step in the address; the route watcher then displays it.
 * @param {number} index - The step index.
 * @param {DibodevQuizHistoryMode} historyMode - New history entry or replacement of the current one.
 * @returns {Promise<void>} Resolves once the navigation is done.
 */
async function navigateToStep(index: number, historyMode: DibodevQuizHistoryMode): Promise<void> {
  const target: { query: LocationQuery } = { query: queryForStep(index) }
  if (historyMode === 'push') await router.push(target)
  else await router.replace(target)
}

/**
 * Brings the top of the card back on screen when the new step starts above it.
 * @returns {void}
 */
function keepCardInView(): void {
  if (!tunnelCard.value || tunnelCard.value.getBoundingClientRect().top >= NAVBAR_HEIGHT) return
  tunnelCard.value.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
}

/**
 * Scrolls just enough for the contact buttons of the result to be on screen, keeping the result heading visible when both fit.
 * @returns {void}
 */
function revealResultAndContact(): void {
  const { heading, contactBlock }: DibodevQuizResultRevealTargets = resultStep.value?.revealTargets() ?? {
    heading: null,
    contactBlock: null,
  }
  if (!heading || !contactBlock) return
  const currentScroll: number = window.scrollY
  const headingTop: number = heading.getBoundingClientRect().top + currentScroll
  const contactBottom: number = contactBlock.getBoundingClientRect().bottom + currentScroll
  const lowestScrollShowingContact: number = contactBottom - window.innerHeight + RESULT_REVEAL_MARGIN
  const highestScrollShowingHeading: number = headingTop - NAVBAR_HEIGHT - RESULT_REVEAL_MARGIN
  const targetScroll: number =
    lowestScrollShowingContact <= highestScrollShowingHeading
      ? Math.min(Math.max(currentScroll, lowestScrollShowingContact), highestScrollShowingHeading)
      : lowestScrollShowingContact
  if (Math.abs(targetScroll - currentScroll) < 2) return
  window.scrollTo({ top: Math.max(0, targetScroll), behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}

/**
 * Brings the heading that just received the focus back on screen when it sits under the navbar or below the fold.
 * @returns {void}
 */
function keepFocusedElementInView(): void {
  const focusedElement: Element | null = document.activeElement
  if (!(focusedElement instanceof HTMLElement) || !tunnelCard.value?.contains(focusedElement)) return
  const { top, bottom }: DOMRect = focusedElement.getBoundingClientRect()
  if (top >= NAVBAR_HEIGHT && bottom <= window.innerHeight) return
  focusedElement.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'center' })
}

/**
 * Displays a step, announces it to screen readers and moves the focus to its heading.
 * @param {number} index - The step index.
 * @returns {Promise<void>} Resolves once the step is rendered.
 */
async function showStep(index: number): Promise<void> {
  const wasResultStep: boolean = isResultStep.value
  stepIndex.value = index
  shouldAnimateStepEntry.value = true
  if (!isResultStep.value) conversionView.value = 'cta'
  await nextTick()

  if (result.value) {
    statusAnnouncement.value = t('quizTunnel.resultAnnouncement', { title: result.value.title })
    if (!wasResultStep) {
      track(TRACKING_EVENTS.tunnelCompleted, {
        tunnel: props.quiz.id,
        verdict: result.value.verdict,
        answers: { ...answers.value },
      })
    }
    resultStep.value?.focusTitle()
    if (!wasResultStep) {
      requestAnimationFrame((): void => revealResultAndContact())
      return
    }
  } else {
    statusAnnouncement.value = stepCountLabel.value
    questionStep.value?.focusTitle()
  }
  keepCardInView()
}

/**
 * Tracks the answer of the current step, and the start of the test on the first answer.
 * @param {DibodevQuizQuestion} question - The question answered.
 * @returns {void}
 */
function trackStepAnswered(question: DibodevQuizQuestion): void {
  if (!hasTrackedTunnelStart) {
    hasTrackedTunnelStart = true
    track(TRACKING_EVENTS.tunnelStarted, { tunnel: props.quiz.id })
  }
  track(TRACKING_EVENTS.tunnelStepAnswered, {
    tunnel: props.quiz.id,
    step: stepIndex.value + 1,
    question: question.id,
    answers: [...(answers.value[question.id] ?? [])],
  })
}

/**
 * Selects an option: a single choice moves on after a short pause, a multiple choice toggles within its maximum.
 * @param {string} optionId - The option clicked.
 * @returns {void}
 */
function onOptionToggle(optionId: string): void {
  const question: DibodevQuizQuestion | null = currentQuestion.value
  if (!question || isWaitingForNextQuestion) return

  if (question.selection === 'multiple') {
    const selectedIds: string[] = answers.value[question.id] ?? []
    const isAlreadySelected: boolean = selectedIds.includes(optionId)
    const canSelectMore: boolean = question.maxSelected === null || selectedIds.length < question.maxSelected
    if (!isAlreadySelected && !canSelectMore) return
    const nextIds: string[] = isAlreadySelected
      ? selectedIds.filter((selectedId: string): boolean => selectedId !== optionId)
      : [...selectedIds, optionId]
    answers.value = { ...answers.value, [question.id]: nextIds }
    return
  }

  answers.value = { ...answers.value, [question.id]: [optionId] }
  trackStepAnswered(question)
  isWaitingForNextQuestion = true
  autoAdvanceTimer = setTimeout(
    (): void => {
      isWaitingForNextQuestion = false
      navigateToStep(stepIndex.value + 1, 'push')
    },
    prefersReducedMotion() ? 0 : AUTO_ADVANCE_DELAY_MS,
  )
}

/**
 * Confirms a multiple choice and moves on.
 * @returns {void}
 */
function onMultipleChoiceConfirm(): void {
  const question: DibodevQuizQuestion | null = currentQuestion.value
  if (!question || (answers.value[question.id] ?? []).length === 0) return
  trackStepAnswered(question)
  navigateToStep(stepIndex.value + 1, 'push')
}

/**
 * Follows whether the card is on screen, to show the Continue bar only while the visitor is looking at the test.
 * @returns {void}
 */
function observeCardVisibility(): void {
  if (!tunnelCard.value || typeof IntersectionObserver === 'undefined') {
    isCardOnScreen.value = true
    return
  }
  cardVisibilityObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]): void => {
      isCardOnScreen.value = entries.some((entry: IntersectionObserverEntry): boolean => entry.isIntersecting)
    },
    { rootMargin: CARD_VISIBILITY_ROOT_MARGIN },
  )
  cardVisibilityObserver.observe(tunnelCard.value)
}

/**
 * Goes back one step through the browser history when it holds that step, so the browser Back button stays in step.
 * @returns {void}
 */
function goBack(): void {
  if (stepIndex.value === 0) return
  const previousIndex: number = stepIndex.value - 1
  const previousPath: string = router.resolve({ query: queryForStep(previousIndex) }).fullPath
  const historyState: unknown = window.history.state
  const historyBackPath: unknown =
    typeof historyState === 'object' && historyState !== null && 'back' in historyState ? historyState.back : null
  if (historyBackPath === previousPath) router.back()
  else navigateToStep(previousIndex, 'replace')
}

/**
 * Switches between the call to action, the lead form and the confirmation, then focuses the new heading.
 * @param {DibodevQuizConversionView} view - The view to show.
 * @returns {Promise<void>} Resolves once the view is rendered.
 */
async function onConversionViewChange(view: DibodevQuizConversionView): Promise<void> {
  conversionView.value = view
  await nextTick()
  resultStep.value?.focusTitle()
  keepFocusedElementInView()
}

/**
 * Opens the lead form and tracks it.
 * @returns {void}
 */
function onLeadFormOpen(): void {
  if (result.value)
    track(TRACKING_EVENTS.tunnelLeadFormOpened, { tunnel: props.quiz.id, verdict: result.value.verdict })
  onConversionViewChange('form')
}

/**
 * Clears the answers and goes back to the first question.
 * @returns {void}
 */
function restartQuiz(): void {
  answers.value = {}
  conversionView.value = 'cta'
  navigateToStep(0, 'push')
}

/* WATCHERS */
watch(answers, (value: DibodevQuizAnswers): void => storeAnswers(value), { deep: true })

watch(
  (): LocationQueryValue | LocationQueryValue[] | undefined => route.query[STEP_QUERY_KEY],
  (value: LocationQueryValue | LocationQueryValue[] | undefined): void => {
    if (route.path !== tunnelPagePath) return
    const index: number = stepIndexFromQuery(value)
    if (index !== stepIndex.value) showStep(index)
  },
)

/* LIFECYCLE */
onMounted((): void => {
  answers.value = readStoredAnswers()
  const index: number = stepIndexFromQuery(route.query[STEP_QUERY_KEY])
  stepIndex.value = index
  if (
    route.query[STEP_QUERY_KEY] !== undefined &&
    queryForStep(index)[STEP_QUERY_KEY] !== route.query[STEP_QUERY_KEY]
  ) {
    navigateToStep(index, 'replace')
  }
  observeCardVisibility()
})

onBeforeUnmount((): void => {
  if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer)
  cardVisibilityObserver?.disconnect()
})
</script>

<style scoped>
.quiz-continue-bar-enter-active,
.quiz-continue-bar-leave-active {
  transition:
    transform 250ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 250ms ease;
}

.quiz-continue-bar-enter-from,
.quiz-continue-bar-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

@media (prefers-reduced-motion: reduce) {
  .quiz-continue-bar-enter-active,
  .quiz-continue-bar-leave-active {
    transition: none;
  }
}

/* Each step replaces the previous one: the browser must not shift the page to keep a node below in place. */
.quiz-tunnel {
  overflow-anchor: none;
}

.quiz-tunnel__step--entering {
  animation: quiz-step-in 300ms cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes quiz-step-in {
  from {
    opacity: 0.2;
    transform: translateX(14px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .quiz-tunnel__step--entering {
    animation: none;
  }
}
</style>
