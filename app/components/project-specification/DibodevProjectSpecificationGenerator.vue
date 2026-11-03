<template>
  <div
    :id="props.anchorId"
    ref="generatorElement"
    class="grid overflow-clip rounded-2xl border border-gray-300 bg-white shadow-[0_32px_80px_-44px_rgba(91,75,208,0.4)] lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]"
  >
    <div ref="panelElement" class="grid min-w-0 content-start gap-6 p-5 sm:p-7 lg:border-r lg:border-gray-300">
      <div class="grid gap-3">
        <div class="flex min-h-11 items-center justify-between gap-4">
          <button
            type="button"
            class="text-primary hover:text-primary-dark hover:bg-surface-tint focus-visible:outline-primary -ml-2 inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-lg px-2 text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            :class="{ invisible: step === 1 }"
            :disabled="step === 1"
            @click="goBack"
          >
            <DibodevIcon name="ArrowLeft" mode="stroke" :width="18" :height="18" aria-hidden="true" />
            {{ ui.back }}
          </button>
          <span class="text-muted text-sm tabular-nums">{{ counterLabel }}</span>
        </div>
        <div class="flex items-center gap-3">
          <div
            class="bg-accent-tint relative h-2.5 flex-1 rounded-full after:absolute after:inset-x-[18px] after:top-1/2 after:z-[1] after:h-0.5 after:-translate-y-1/2 after:rounded-sm after:bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.95)_0_9px,transparent_9px_18px)] after:content-['']"
            role="progressbar"
            :aria-label="ui.progressLabel"
            aria-valuemin="0"
            :aria-valuemax="STEP_COUNT"
            :aria-valuenow="step - 1"
          >
            <div
              class="bg-primary absolute inset-y-0 left-0 rounded-full transition-[width] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              :style="{ width: progressPosition }"
            />
            <span
              class="border-primary text-primary-dark absolute top-1/2 z-[2] -ml-4 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border-[1.5px] bg-white shadow-[0_6px_14px_-6px_rgba(91,75,208,0.55)] transition-[left] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              :style="{ left: progressPosition }"
              aria-hidden="true"
            >
              <DibodevIcon name="ClipboardCheck" mode="stroke" :width="16" :height="16" />
            </span>
          </div>
          <span class="text-muted flex shrink-0" aria-hidden="true">
            <DibodevIcon name="Flag" mode="stroke" :width="18" :height="18" />
          </span>
        </div>
      </div>

      <DibodevProjectSpecificationQuestions
        v-if="questionStep !== null"
        ref="questions"
        :key="questionStep"
        class="specification-step"
        :step="questionStep"
        :answers="answers"
        :wording="props.wording"
        :budgetHelpTo="budgetHelpTo"
        @update:answers="updateAnswers"
      />

      <div v-else ref="readyElement" tabindex="-1" class="specification-step grid gap-6 outline-none">
        <div class="grid gap-2">
          <p class="text-primary text-xs font-medium tracking-[0.08em] uppercase">{{ ui.readyEyebrow }}</p>
          <h2
            class="text-[22px] leading-tight font-medium tracking-[-0.01em] text-balance text-gray-100 sm:text-[26px]"
          >
            {{ ui.readyTitle }}
          </h2>
          <p class="text-[15px] leading-6 text-gray-200">{{ ui.readyText }}</p>
        </div>
        <div class="grid gap-3">
          <DibodevButton icon="Download" iconPosition="left" class="w-full" @click="downloadWord">
            {{ ui.downloadWord }}
          </DibodevButton>
          <button
            type="button"
            class="border-primary text-primary hover:bg-surface-tint hover:text-primary-dark focus-visible:ring-primary inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border bg-white px-5 py-3 text-[15px] leading-6 font-medium transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            @click="printDocument"
          >
            <DibodevIcon name="Download" mode="stroke" :width="18" :height="18" aria-hidden="true" />
            {{ ui.downloadPdf }}
          </button>
          <p class="text-muted text-sm leading-6">{{ ui.pdfHelp }}</p>
          <button
            type="button"
            class="text-primary hover:text-primary-dark hover:bg-surface-tint -ml-2 inline-flex min-h-11 w-fit cursor-pointer items-center gap-1.5 rounded-lg px-2 text-[15px] font-medium transition-colors"
            @click="restart"
          >
            <DibodevIcon name="RotateCcw" mode="stroke" :width="16" :height="16" aria-hidden="true" />
            {{ ui.editAnswers }}
          </button>
        </div>
        <DibodevProjectSpecificationQuoteForm
          :wording="ui"
          :specification="specification"
          :projectType="answers.projectType"
          :projectTypeLabel="quoteProjectTypeLabel"
          :budget="answers.budget"
          :budgetLabel="budgetLabel"
          :trackingLocation="props.trackingLocation"
        />
      </div>

      <div v-if="questionStep !== null" class="grid gap-3 border-t border-gray-300 pt-5">
        <DibodevButton icon="ArrowRight" iconPosition="right" class="w-full" @click="goNext">
          {{ questionStep === STEP_COUNT ? ui.seeDocument : ui.next }}
        </DibodevButton>
        <p class="text-muted text-center text-sm leading-6">{{ ui.hint }}</p>
      </div>
    </div>

    <div class="min-w-0 border-t border-gray-300 bg-gray-800 lg:border-t-0">
      <div ref="previewElement" class="grid content-start gap-3.5 p-4 sm:p-6 lg:sticky lg:top-24">
        <div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <p class="flex items-center gap-2 text-sm font-medium text-gray-100">
            <span class="specification-live-dot h-2 w-2 rounded-full bg-[#1f7a4d]" aria-hidden="true" />
            {{ ui.liveLabel }}
          </p>
          <p class="flex items-center gap-2.5 text-sm text-gray-200 tabular-nums" aria-live="polite">
            <span class="relative h-1.5 w-[72px] overflow-hidden rounded-full bg-gray-700" aria-hidden="true">
              <span
                class="absolute inset-y-0 left-0 rounded-full bg-[#1f7a4d] transition-[width] duration-500 motion-reduce:transition-none"
                :style="{ width: filledPercent }"
              />
            </span>
            {{ filledPartsLabel }}
          </p>
        </div>
        <div class="specification-paper-stack relative pb-2.5">
          <div
            ref="documentScroller"
            class="specification-document-scroller relative z-[1] lg:max-h-[calc(100vh-236px)] lg:min-h-[420px] lg:overflow-auto lg:overscroll-contain"
          >
            <DibodevProjectSpecificationSheet
              :specification="specification"
              :highlightedPartIds="highlightedPartIds"
              :aria-label="ui.previewLabel"
            />
          </div>
        </div>
        <p class="text-muted text-sm leading-6">{{ ui.previewNote }}</p>
      </div>
    </div>

    <Transition name="specification-mobile-bar">
      <div
        v-if="isGeneratorVisible"
        class="fixed inset-x-0 bottom-0 z-40 border-t border-gray-300 bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(17,17,17,0.08)] backdrop-blur lg:hidden"
      >
        <div class="mx-auto grid max-w-xl gap-2 pr-[4.75rem]">
          <p class="text-sm leading-5 font-medium text-gray-100">{{ mobileBarText }}</p>
          <button
            type="button"
            class="bg-primary hover:bg-primary-dark inline-flex min-h-11 cursor-pointer items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-sm leading-5 font-medium text-white transition-colors"
            @click="followMobileBar"
          >
            {{ mobileBarButton }}
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type {
  DibodevProjectSpecificationAnswers,
  DibodevProjectSpecificationDocument,
  DibodevProjectSpecificationDocumentOption,
  DibodevProjectSpecificationInterfaceWording,
  DibodevProjectSpecificationPart,
  DibodevProjectSpecificationPartId,
  DibodevProjectSpecificationProjectType,
  DibodevProjectSpecificationStep,
  DibodevProjectSpecificationWording,
} from '~/core/types/DibodevProjectSpecification'
import type {
  DibodevProjectSpecificationGeneratorProps,
  DibodevProjectSpecificationMobileBarMode,
} from '~/core/types/DibodevProjectSpecificationGenerator'
import type { DibodevProjectSpecificationQuestionsExposed } from '~/core/types/DibodevProjectSpecificationQuestions'
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevProjectSpecificationSheet from '~/components/project-specification/DibodevProjectSpecificationSheet.vue'
import DibodevProjectSpecificationQuestions from '~/components/project-specification/DibodevProjectSpecificationQuestions.vue'
import DibodevProjectSpecificationQuoteForm from '~/components/project-specification/DibodevProjectSpecificationQuoteForm.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { PROJECT_SPECIFICATION_PROJECT_TYPES } from '~/core/constants/projectSpecification/pageShared'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { DOCX_MIME_TYPE, ProjectSpecificationDocxUtils } from '~/core/utils/ProjectSpecificationDocxUtils'
import { ProjectSpecificationDocumentUtils } from '~/core/utils/ProjectSpecificationDocumentUtils'

const STEP_COUNT: number = 5
const FINAL_STEP: number = 6
const PART_HIGHLIGHT_DURATION_MS: number = 1900
const LARGE_SCREEN_QUERY: string = '(min-width: 64rem)'
const PRINTING_CLASS: string = 'is-printing-specification'
const PRINT_ROOT_ID: string = 'specification-print-root'
const SITE_HEADER_SCROLL_OFFSET_PX: number = 96
const DOCUMENT_PART_SCROLL_GAP_PX: number = 24
const PANEL_TOP_VISIBLE_SCREEN_RATIO: number = 0.6
const DOWNLOAD_URL_LIFETIME_MS: number = 1000
const PREVIEW_CENTER_ROOT_MARGIN: string = '-45% 0px -45% 0px'
const WEBSITE_PROJECT_TYPES: DibodevProjectSpecificationProjectType[] = ['showcaseWebsite', 'onlineStore']

/** Everything is computed in the browser: nothing leaves the page until the visitor asks for a quote. */
const props: DibodevProjectSpecificationGeneratorProps = defineProps({
  wording: {
    type: Object as PropType<DibodevProjectSpecificationWording>,
    required: true,
  },
  anchorId: {
    type: String as PropType<string>,
    required: true,
  },
  languageTag: {
    type: String as PropType<string>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const localePath = useLocalePath()
const route = useRoute()
const { track } = useTracking()

let previousPartSignatures: Record<string, string> = {}
let highlightTimer: ReturnType<typeof setTimeout> | null = null
let generatorObserver: IntersectionObserver | null = null
let previewObserver: IntersectionObserver | null = null
let hasStarted: boolean = false

/* REFS */
const answers: Ref<DibodevProjectSpecificationAnswers> = ref(
  ProjectSpecificationDocumentUtils.createDefaultAnswers('showcaseWebsite', props.wording),
)
const step: Ref<number> = ref(1)
const dateLabel: Ref<string> = ref('')
const highlightedPartIds: Ref<DibodevProjectSpecificationPartId[]> = ref([])
const isGeneratorVisible: Ref<boolean> = ref(false)
const isPreviewVisible: Ref<boolean> = ref(false)
const generatorElement: Ref<HTMLDivElement | null> = ref(null)
const panelElement: Ref<HTMLDivElement | null> = ref(null)
const previewElement: Ref<HTMLDivElement | null> = ref(null)
const documentScroller: Ref<HTMLDivElement | null> = ref(null)
const readyElement: Ref<HTMLDivElement | null> = ref(null)
const questions: Ref<DibodevProjectSpecificationQuestionsExposed | null> = ref(null)

/* COMPUTED */
const ui: ComputedRef<DibodevProjectSpecificationInterfaceWording> = computed(
  (): DibodevProjectSpecificationInterfaceWording => props.wording.ui,
)

const specification: ComputedRef<DibodevProjectSpecificationDocument> = computed(
  (): DibodevProjectSpecificationDocument =>
    ProjectSpecificationDocumentUtils.build(answers.value, props.wording, dateLabel.value),
)

/** The question step shown, or null on the final screen. */
const questionStep: ComputedRef<DibodevProjectSpecificationStep | null> = computed(
  (): DibodevProjectSpecificationStep | null =>
    step.value <= STEP_COUNT ? (step.value as DibodevProjectSpecificationStep) : null,
)

const counterLabel: ComputedRef<string> = computed((): string =>
  questionStep.value === null
    ? ui.value.finishedCounter
    : ui.value.stepCounter.replace('{current}', String(step.value)).replace('{total}', String(STEP_COUNT)),
)

const progressPosition: ComputedRef<string> = computed(
  (): string => `calc(16px + (100% - 32px) * ${(step.value - 1) / STEP_COUNT})`,
)

const filledPartsLabel: ComputedRef<string> = computed((): string =>
  ui.value.filledParts
    .replace('{count}', String(specification.value.filledPartCount))
    .replace('{total}', String(specification.value.parts.length)),
)

const filledPercent: ComputedRef<string> = computed(
  (): string => `${Math.round((specification.value.filledPartCount / specification.value.parts.length) * 100)}%`,
)

const budgetHelpTo: ComputedRef<string> = computed((): string =>
  localePath(
    WEBSITE_PROJECT_TYPES.includes(answers.value.projectType)
      ? 'website-price-barometer'
      : 'custom-software-price-barometer',
  ),
)

const quoteProjectTypeLabel: ComputedRef<string> = computed((): string =>
  ui.value.quoteProjectType.replace('{type}', props.wording.types[answers.value.projectType].label),
)

const budgetLabel: ComputedRef<string> = computed(
  (): string =>
    props.wording.budgets.find(
      (budget: DibodevProjectSpecificationDocumentOption<string>): boolean => budget.id === answers.value.budget,
    )?.label ?? '',
)

const mobileBarMode: ComputedRef<DibodevProjectSpecificationMobileBarMode> = computed(
  (): DibodevProjectSpecificationMobileBarMode => {
    if (isPreviewVisible.value) {
      return 'questions'
    }
    return questionStep.value === null ? 'ready' : 'preview'
  },
)

const mobileBarText: ComputedRef<string> = computed((): string => {
  if (mobileBarMode.value === 'questions') {
    return ui.value.mobileReadingText
  }
  if (mobileBarMode.value === 'ready') {
    return ui.value.mobileReadyText
  }
  return ui.value.mobilePreviewText
    .replace('{count}', String(specification.value.filledPartCount))
    .replace('{total}', String(specification.value.parts.length))
})

const mobileBarButton: ComputedRef<string> = computed((): string => {
  if (mobileBarMode.value === 'questions') {
    return ui.value.mobileReadingButton
  }
  return mobileBarMode.value === 'ready' ? ui.value.mobileReadyButton : ui.value.mobilePreviewButton
})

/* METHODS */
/**
 * Whether the visitor asked the system to limit animations.
 * @returns {boolean} True when smooth scrolling and highlights should be skipped.
 */
function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Takes the new answers, highlights the parts they rewrite and sends the first interaction to PostHog.
 * @param {DibodevProjectSpecificationAnswers} nextAnswers - The answers after the change.
 * @returns {void}
 */
function updateAnswers(nextAnswers: DibodevProjectSpecificationAnswers): void {
  answers.value = nextAnswers
  if (!hasStarted) {
    hasStarted = true
    track(TRACKING_EVENTS.projectSpecificationStarted, {
      projectType: nextAnswers.projectType,
      location: props.trackingLocation,
    })
  }
  highlightChangedParts()
}

/**
 * Highlights the parts a change rewrote and, on large screens, scrolls the document to the first one.
 * @returns {void}
 */
function highlightChangedParts(): void {
  const signatures: Record<string, string> = partSignaturesOf(specification.value)
  const changedPartIds: DibodevProjectSpecificationPartId[] = specification.value.parts
    .filter((part: DibodevProjectSpecificationPart): boolean => previousPartSignatures[part.id] !== signatures[part.id])
    .map((part: DibodevProjectSpecificationPart): DibodevProjectSpecificationPartId => part.id)
  previousPartSignatures = signatures

  if (!changedPartIds.length || prefersReducedMotion()) {
    return
  }
  highlightedPartIds.value = []
  if (highlightTimer) {
    clearTimeout(highlightTimer)
  }
  nextTick((): void => {
    highlightedPartIds.value = changedPartIds
    highlightTimer = setTimeout((): void => {
      highlightedPartIds.value = []
    }, PART_HIGHLIGHT_DURATION_MS)
    scrollDocumentToPart(changedPartIds[0])
  })
}

/**
 * Text of each part, to tell which ones a change rewrote.
 * @param {DibodevProjectSpecificationDocument} currentSpecification - The current document.
 * @returns {Record<string, string>} One signature per part id.
 */
function partSignaturesOf(currentSpecification: DibodevProjectSpecificationDocument): Record<string, string> {
  return Object.fromEntries(
    currentSpecification.parts.map((part: DibodevProjectSpecificationPart): [string, string] => [
      part.id,
      JSON.stringify([part.isFilled, part.title, part.blocks]),
    ]),
  )
}

/**
 * On large screens, scrolls the document (not the page) to a part.
 * @param {DibodevProjectSpecificationPartId | undefined} partId - The part to show.
 * @returns {void}
 */
function scrollDocumentToPart(partId: DibodevProjectSpecificationPartId | undefined): void {
  const scroller: HTMLDivElement | null = documentScroller.value

  if (!partId || !scroller || !window.matchMedia(LARGE_SCREEN_QUERY).matches) {
    return
  }
  const part: HTMLElement | null = scroller.querySelector(`[data-part="${partId}"]`)

  if (!part) {
    return
  }
  scroller.scrollTo({ top: Math.max(0, part.offsetTop - DOCUMENT_PART_SCROLL_GAP_PX), behavior: 'smooth' })
}

/**
 * Scrolls the page so that an element sits just under the site header.
 * @param {HTMLElement | null} element - The element to show.
 * @returns {void}
 */
function scrollPageTo(element: HTMLElement | null): void {
  if (!element) {
    return
  }
  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - SITE_HEADER_SCROLL_OFFSET_PX,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  })
}

/**
 * Shows a step, brings the questions back into view when their top left the screen, and gives them the focus.
 * @param {number} nextStep - The step to show (6 for the final screen).
 * @returns {Promise<void>} Resolves once the step is drawn.
 */
async function showStep(nextStep: number): Promise<void> {
  step.value = nextStep
  await nextTick()
  const panelTop: number = panelElement.value?.getBoundingClientRect().top ?? 0
  const isPanelTopOutOfView: boolean = panelTop < 0 || panelTop > window.innerHeight * PANEL_TOP_VISIBLE_SCREEN_RATIO

  if (isPanelTopOutOfView) {
    scrollPageTo(panelElement.value)
  }
  if (questionStep.value === null) {
    readyElement.value?.focus({ preventScroll: true })
  } else {
    questions.value?.focusHeading()
  }
}

/**
 * Goes to the next step, or to the final screen after the fifth one.
 * @returns {Promise<void>} Resolves once the step is drawn.
 */
async function goNext(): Promise<void> {
  track(TRACKING_EVENTS.projectSpecificationStepCompleted, {
    step: step.value,
    projectType: answers.value.projectType,
    location: props.trackingLocation,
  })
  if (step.value === STEP_COUNT) {
    track(TRACKING_EVENTS.projectSpecificationCompleted, {
      projectType: answers.value.projectType,
      kind: answers.value.kind,
      budget: answers.value.budget,
      launchDate: answers.value.launchDate,
      goalCount: answers.value.goals.length,
      featureCount: answers.value.features.length,
      location: props.trackingLocation,
    })
  }
  await showStep(Math.min(step.value + 1, FINAL_STEP))
}

/**
 * Goes back one step.
 * @returns {Promise<void>} Resolves once the step is drawn.
 */
async function goBack(): Promise<void> {
  await showStep(Math.max(step.value - 1, 1))
}

/**
 * Goes back to the first step, the answers kept.
 * @returns {Promise<void>} Resolves once the step is drawn.
 */
async function restart(): Promise<void> {
  await showStep(1)
}

/**
 * Downloads the document as a Word file, written in the browser.
 * @returns {void}
 */
function downloadWord(): void {
  const bytes: Uint8Array<ArrayBuffer> = ProjectSpecificationDocxUtils.create(specification.value, props.languageTag)
  const url: string = URL.createObjectURL(new Blob([bytes], { type: DOCX_MIME_TYPE }))
  const link: HTMLAnchorElement = document.createElement('a')
  link.href = url
  link.download = `${specification.value.fileBaseName}.docx`
  document.body.appendChild(link)
  link.click()
  link.remove()
  setTimeout((): void => URL.revokeObjectURL(url), DOWNLOAD_URL_LIFETIME_MS)
  track(TRACKING_EVENTS.projectSpecificationDownloaded, {
    format: 'docx',
    projectType: answers.value.projectType,
    location: props.trackingLocation,
  })
}

/**
 * Removes the copy of the document made for printing, and the class that hides the rest of the page.
 * @returns {void}
 */
function clearPrintCopy(): void {
  document.getElementById(PRINT_ROOT_ID)?.remove()
  document.documentElement.classList.remove(PRINTING_CLASS)
}

/**
 * Opens the print window on a copy of the document put at the root of the page, the only thing printed.
 * @returns {void}
 */
function printDocument(): void {
  if (!documentScroller.value) {
    return
  }
  clearPrintCopy()
  const printRoot: HTMLDivElement = document.createElement('div')
  printRoot.id = PRINT_ROOT_ID
  printRoot.innerHTML = documentScroller.value.innerHTML
  document.body.appendChild(printRoot)
  document.documentElement.classList.add(PRINTING_CLASS)
  window.addEventListener('afterprint', clearPrintCopy, { once: true })
  track(TRACKING_EVENTS.projectSpecificationDownloaded, {
    format: 'pdf',
    projectType: answers.value.projectType,
    location: props.trackingLocation,
  })
  window.print()
}

/**
 * Follows the bar fixed at the bottom of small screens: to the document, or back to the questions.
 * @returns {void}
 */
function followMobileBar(): void {
  scrollPageTo(mobileBarMode.value === 'questions' ? panelElement.value : previewElement.value)
}

/**
 * Reads the project type asked in the address (`?type=onlineStore`), from the links of the template pages.
 * @returns {void}
 */
function applyProjectTypeFromQuery(): void {
  const queryType: unknown = route.query.type
  const projectType: DibodevProjectSpecificationProjectType | undefined = PROJECT_SPECIFICATION_PROJECT_TYPES.find(
    (candidate: DibodevProjectSpecificationProjectType): boolean => candidate === queryType,
  )

  if (projectType) {
    answers.value = ProjectSpecificationDocumentUtils.withProjectType(answers.value, projectType, props.wording)
  }
}

/* LIFECYCLE */
onMounted((): void => {
  dateLabel.value = new Intl.DateTimeFormat(props.languageTag, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date())
  applyProjectTypeFromQuery()
  previousPartSignatures = partSignaturesOf(specification.value)

  if (!('IntersectionObserver' in window)) {
    return
  }
  generatorObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
    isGeneratorVisible.value = entries.some((entry: IntersectionObserverEntry): boolean => entry.isIntersecting)
  })
  previewObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]): void => {
      isPreviewVisible.value = entries.some((entry: IntersectionObserverEntry): boolean => entry.isIntersecting)
    },
    { rootMargin: PREVIEW_CENTER_ROOT_MARGIN },
  )
  if (generatorElement.value) {
    generatorObserver.observe(generatorElement.value)
  }
  if (previewElement.value) {
    previewObserver.observe(previewElement.value)
  }
})

onBeforeUnmount((): void => {
  generatorObserver?.disconnect()
  previewObserver?.disconnect()
  if (highlightTimer) {
    clearTimeout(highlightTimer)
  }
  clearPrintCopy()
})
</script>

<style scoped>
.specification-step {
  animation: specification-step-in 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes specification-step-in {
  from {
    opacity: 0.2;
    transform: translateX(14px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.specification-live-dot {
  animation: specification-live-pulse 2.4s ease-out infinite;
}

@keyframes specification-live-pulse {
  0% {
    box-shadow: 0 0 0 0 rgb(31 122 77 / 0.45);
  }

  70% {
    box-shadow: 0 0 0 7px rgb(31 122 77 / 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgb(31 122 77 / 0);
  }
}

.specification-paper-stack::before,
.specification-paper-stack::after {
  position: absolute;
  height: 20px;
  border: 1px solid rgb(20 20 20 / 0.1);
  border-top: 0;
  border-radius: 0 0 8px 8px;
  background-color: #ffffff;
  content: '';
}

.specification-paper-stack::before {
  right: 10px;
  bottom: 4px;
  left: 10px;
}

.specification-paper-stack::after {
  right: 20px;
  bottom: -1px;
  left: 20px;
}

.specification-mobile-bar-enter-active,
.specification-mobile-bar-leave-active {
  transition:
    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.25s ease;
}

.specification-mobile-bar-enter-from,
.specification-mobile-bar-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

@media (prefers-reduced-motion: reduce) {
  .specification-step,
  .specification-live-dot {
    animation: none;
  }

  .specification-mobile-bar-enter-active,
  .specification-mobile-bar-leave-active {
    transition: none;
  }
}

:global(#specification-print-root) {
  display: none;
}

@media print {
  :global(html.is-printing-specification body > *:not(#specification-print-root)) {
    display: none !important;
  }

  :global(html.is-printing-specification #specification-print-root) {
    display: block;
  }
}
</style>
