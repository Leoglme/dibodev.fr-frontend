<template>
  <div
    :id="props.anchorId"
    ref="generatorElement"
    class="grid overflow-clip rounded-2xl border border-gray-300 bg-white shadow-[0_32px_80px_-44px_rgba(91,75,208,0.4)] lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)]"
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
            {{ props.wording.back }}
          </button>
          <span class="text-muted text-sm tabular-nums">{{ counterLabel }}</span>
        </div>
        <div class="flex items-center gap-3">
          <div
            class="bg-accent-tint relative h-2.5 flex-1 rounded-full"
            role="progressbar"
            :aria-label="props.wording.progressLabel"
            aria-valuemin="0"
            :aria-valuemax="QUESTION_STEP_COUNT"
            :aria-valuenow="step - 1"
          >
            <div
              class="bg-primary absolute inset-y-0 left-0 rounded-full transition-[width] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              :style="{ width: progressWidth }"
            />
          </div>
          <span class="text-muted flex shrink-0" aria-hidden="true">
            <DibodevIcon name="Flag" mode="stroke" :width="18" :height="18" />
          </span>
        </div>
      </div>

      <DibodevLegalNoticeQuestions
        v-if="questionStep !== null"
        ref="questions"
        :key="questionStep"
        class="legal-notice-step"
        :step="questionStep"
        :answers="answers"
        :wording="props.wording"
        @update:answers="updateAnswers"
      />

      <div v-else ref="resultElement" tabindex="-1" class="legal-notice-step grid gap-6 outline-none">
        <div class="grid gap-2">
          <p class="text-primary text-xs font-medium tracking-[0.08em] uppercase">{{ result.eyebrow }}</p>
          <h2
            class="text-[22px] leading-tight font-medium tracking-[-0.01em] text-balance text-gray-100 sm:text-[26px]"
          >
            {{ result.title }}
          </h2>
          <p class="text-[15px] leading-6 text-gray-200">{{ result.text }}</p>
        </div>

        <div class="grid gap-3">
          <button
            v-for="kind in DOCUMENT_KINDS"
            :key="kind"
            type="button"
            :class="SECONDARY_BUTTON_CLASS"
            @click="copyDocument(kind)"
          >
            <DibodevIcon
              :name="copiedDocument === kind ? 'Check' : 'Copy'"
              mode="stroke"
              :width="18"
              :height="18"
              aria-hidden="true"
            />
            {{ copyButtonLabel(kind) }}
          </button>
          <p class="sr-only" aria-live="polite">{{ copyAnnouncement }}</p>
          <DibodevButton icon="Download" iconPosition="left" class="w-full" @click="downloadWord">
            {{ result.downloadWord }}
          </DibodevButton>
          <button type="button" :class="SECONDARY_BUTTON_CLASS" @click="printDocuments">
            <DibodevIcon name="Download" mode="stroke" :width="18" :height="18" aria-hidden="true" />
            {{ result.printPdf }}
          </button>
          <p class="text-muted text-sm leading-6">{{ result.pdfHelp }}</p>
        </div>

        <div class="grid gap-2 rounded-xl border border-[#f3d9a6] bg-[#fdf8ee] px-4 py-3.5">
          <p class="flex items-center gap-2 text-[15px] font-medium text-gray-100">
            <DibodevIcon
              name="AlertCircle"
              mode="stroke"
              :width="18"
              :height="18"
              class="text-[#b45309]"
              aria-hidden="true"
            />
            {{ result.reviewTitle }}
          </p>
          <template v-if="missingFieldLabels.length">
            <p class="text-[14px] leading-6 text-gray-200">{{ result.reviewIntro }}</p>
            <ul class="grid list-disc gap-1 pl-5 text-[14px] leading-6 text-gray-200 marker:text-[#b45309]">
              <li v-for="label in missingFieldLabels" :key="label">{{ label }}</li>
            </ul>
          </template>
          <p v-else class="text-[14px] leading-6 text-gray-200">{{ result.reviewEmpty }}</p>
        </div>

        <div class="bg-surface-tint grid gap-3 rounded-xl px-4 py-4">
          <p class="text-[15px] font-medium text-gray-100">{{ result.ctaTitle }}</p>
          <p class="text-[14px] leading-6 text-gray-200">{{ result.ctaText }}</p>
          <DibodevButton
            :to="contactPath"
            icon="ArrowRight"
            iconPosition="right"
            class="w-full"
            @click="trackContactClick"
          >
            {{ result.ctaButton }}
          </DibodevButton>
          <NuxtLink
            :to="gdprCheckPath"
            class="text-primary hover:text-primary-dark inline-flex min-h-11 w-fit items-center gap-1.5 text-[15px] font-medium decoration-2 underline-offset-4 transition-colors hover:underline"
            @click="trackGdprCheckClick"
          >
            {{ result.gdprCheckLabel }}
            <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
          </NuxtLink>
        </div>

        <button
          type="button"
          class="text-primary hover:text-primary-dark hover:bg-surface-tint -ml-2 inline-flex min-h-11 w-fit cursor-pointer items-center gap-1.5 rounded-lg px-2 text-[15px] font-medium transition-colors"
          @click="restart"
        >
          <DibodevIcon name="RotateCcw" mode="stroke" :width="16" :height="16" aria-hidden="true" />
          {{ result.editAnswers }}
        </button>
      </div>

      <div v-if="questionStep !== null" class="grid gap-3 border-t border-gray-300 pt-5">
        <DibodevButton icon="ArrowRight" iconPosition="right" class="w-full" @click="goNext">
          {{ questionStep === QUESTION_STEP_COUNT ? props.wording.seeResult : props.wording.next }}
        </DibodevButton>
        <p class="text-muted text-center text-sm leading-6">{{ props.wording.hint }}</p>
      </div>
    </div>

    <div class="min-w-0 border-t border-gray-300 bg-gray-800 lg:border-t-0">
      <div ref="previewElement" class="grid content-start gap-3.5 p-4 sm:p-6 lg:sticky lg:top-24">
        <div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <p class="flex items-center gap-2 text-sm font-medium text-gray-100">
            <span class="legal-notice-live-dot h-2 w-2 rounded-full bg-[#1f7a4d]" aria-hidden="true" />
            {{ props.wording.preview.liveLabel }}
          </p>
          <p class="text-sm text-gray-200 tabular-nums" aria-live="polite">{{ missingCountLabel }}</p>
        </div>
        <nav :aria-label="props.wording.preview.label" class="flex flex-wrap gap-2">
          <button
            v-for="kind in DOCUMENT_KINDS"
            :key="kind"
            type="button"
            class="hover:border-primary hover:text-primary-dark inline-flex min-h-11 cursor-pointer items-center rounded-full border border-gray-400 bg-white px-3.5 text-sm font-medium text-gray-100 transition-colors"
            @click="scrollPreviewTo(kind)"
          >
            {{ props.wording.preview.documentLinks[kind] }}
          </button>
        </nav>
        <p v-if="props.wording.preview.frenchOnlyNote" class="text-muted text-sm leading-6">
          {{ props.wording.preview.frenchOnlyNote }}
        </p>
        <div
          ref="documentScroller"
          :aria-label="props.wording.preview.label"
          role="region"
          class="grid gap-4 lg:max-h-[calc(100vh-260px)] lg:min-h-[420px] lg:overflow-auto lg:overscroll-contain"
        >
          <DibodevLegalNoticeSheet
            v-for="kind in DOCUMENT_KINDS"
            :key="kind"
            :document="documents[kind]"
            :anchorId="`${props.anchorId}-${kind}`"
          />
        </div>
      </div>
    </div>

    <Transition name="legal-notice-mobile-bar">
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
  DibodevLegalNoticeAnswers,
  DibodevLegalNoticeDocument,
  DibodevLegalNoticeDocumentKind,
  DibodevLegalNoticeDocuments,
  DibodevLegalNoticeFieldId,
  DibodevLegalNoticeQuestionStep,
} from '~/core/types/DibodevLegalNotice'
import type {
  DibodevLegalNoticeGeneratorProps,
  DibodevLegalNoticeGeneratorWording,
  DibodevLegalNoticeMobileBarMode,
  DibodevLegalNoticeQuestionsExposed,
  DibodevLegalNoticeResultWording,
} from '~/core/types/DibodevLegalNoticeGenerator'
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevLegalNoticeQuestions from '~/components/legal-notice/DibodevLegalNoticeQuestions.vue'
import DibodevLegalNoticeSheet from '~/components/legal-notice/DibodevLegalNoticeSheet.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { GDPR_COOKIE_CHECK_ROUTE_NAME, GDPR_COOKIE_CHECK_TEASER } from '~/core/constants/gdprCookieCheck/pageShared'
import { LEGAL_NOTICE_DOCUMENT_LANGUAGE_TAG } from '~/core/constants/legalNotice/pageShared'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { DOCX_MIME_TYPE } from '~/core/utils/ProjectSpecificationDocxUtils'
import { LegalNoticeDocumentUtils } from '~/core/utils/LegalNoticeDocumentUtils'
import { LegalNoticeDocxUtils } from '~/core/utils/LegalNoticeDocxUtils'

const QUESTION_STEP_COUNT: number = 4
const TOTAL_STEP_COUNT: number = 5
const DOCUMENT_KINDS: DibodevLegalNoticeDocumentKind[] = ['legalNotice', 'privacyPolicy']
const PRIVACY_POLICY_STEP: number = 4
const LARGE_SCREEN_QUERY: string = '(min-width: 64rem)'
const PRINTING_CLASS: string = 'is-printing-legal-notice'
const PRINT_ROOT_ID: string = 'legal-notice-print-root'
const SITE_HEADER_SCROLL_OFFSET_PX: number = 96
const DOCUMENT_SCROLL_GAP_PX: number = 16
const PANEL_TOP_VISIBLE_SCREEN_RATIO: number = 0.6
const DOWNLOAD_URL_LIFETIME_MS: number = 1000
const COPIED_FEEDBACK_DURATION_MS: number = 2200
const PREVIEW_CENTER_ROOT_MARGIN: string = '-45% 0px -45% 0px'
const WORD_FILE_NAME: string = 'mentions-legales-et-politique-de-confidentialite.docx'
const SECONDARY_BUTTON_CLASS: string =
  'border-primary text-primary hover:bg-surface-tint hover:text-primary-dark focus-visible:ring-primary inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border bg-white px-5 py-3 text-[15px] leading-6 font-medium transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

/** Everything is computed in the browser: no answer leaves the page, none is sent to PostHog. */
const props: DibodevLegalNoticeGeneratorProps = defineProps({
  wording: {
    type: Object as PropType<DibodevLegalNoticeGeneratorWording>,
    required: true,
  },
  anchorId: {
    type: String as PropType<string>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const localePath = useLocalePath()
const { track } = useTracking()

let hasStarted: boolean = false
let copiedTimer: ReturnType<typeof setTimeout> | null = null
let generatorObserver: IntersectionObserver | null = null
let previewObserver: IntersectionObserver | null = null

/* REFS */
const answers: Ref<DibodevLegalNoticeAnswers> = ref(LegalNoticeDocumentUtils.createDefaultAnswers())
const step: Ref<number> = ref(1)
const dateLabel: Ref<string> = ref('')
const copiedDocument: Ref<DibodevLegalNoticeDocumentKind | null> = ref(null)
const hasCopyFailed: Ref<boolean> = ref(false)
const isGeneratorVisible: Ref<boolean> = ref(false)
const isPreviewVisible: Ref<boolean> = ref(false)
const generatorElement: Ref<HTMLDivElement | null> = ref(null)
const panelElement: Ref<HTMLDivElement | null> = ref(null)
const previewElement: Ref<HTMLDivElement | null> = ref(null)
const documentScroller: Ref<HTMLDivElement | null> = ref(null)
const resultElement: Ref<HTMLDivElement | null> = ref(null)
const questions: Ref<DibodevLegalNoticeQuestionsExposed | null> = ref(null)

/* COMPUTED */
const result: ComputedRef<DibodevLegalNoticeResultWording> = computed(
  (): DibodevLegalNoticeResultWording => props.wording.result,
)

const generated: ComputedRef<DibodevLegalNoticeDocuments> = computed(
  (): DibodevLegalNoticeDocuments => LegalNoticeDocumentUtils.build(answers.value, dateLabel.value),
)

const documents: ComputedRef<Record<DibodevLegalNoticeDocumentKind, DibodevLegalNoticeDocument>> = computed(
  (): Record<DibodevLegalNoticeDocumentKind, DibodevLegalNoticeDocument> => ({
    legalNotice: generated.value.legalNotice,
    privacyPolicy: generated.value.privacyPolicy,
  }),
)

/** The question step shown, or null on the result screen. */
const questionStep: ComputedRef<DibodevLegalNoticeQuestionStep | null> = computed(
  (): DibodevLegalNoticeQuestionStep | null =>
    step.value <= QUESTION_STEP_COUNT ? (step.value as DibodevLegalNoticeQuestionStep) : null,
)

const counterLabel: ComputedRef<string> = computed((): string =>
  questionStep.value === null
    ? props.wording.finishedCounter
    : props.wording.stepCounter.replace('{current}', String(step.value)).replace('{total}', String(TOTAL_STEP_COUNT)),
)

const progressWidth: ComputedRef<string> = computed(
  (): string => `${Math.round(((step.value - 1) / QUESTION_STEP_COUNT) * 100)}%`,
)

const missingFieldLabels: ComputedRef<string[]> = computed((): string[] =>
  generated.value.missingFieldIds.map(
    (fieldId: DibodevLegalNoticeFieldId): string => props.wording.missingFieldLabels[fieldId],
  ),
)

const missingCountLabel: ComputedRef<string> = computed((): string =>
  missingFieldLabels.value.length
    ? formatMissingCount(props.wording.preview.missingCount, props.wording.preview.missingCountOne)
    : props.wording.preview.noneMissing,
)

const copyAnnouncement: ComputedRef<string> = computed((): string => {
  if (hasCopyFailed.value) {
    return result.value.copyFailed
  }
  return copiedDocument.value ? result.value.copied : ''
})

const contactPath: ComputedRef<string> = computed((): string => localePath('/contact'))

const gdprCheckPath: ComputedRef<string> = computed((): string => localePath({ name: GDPR_COOKIE_CHECK_ROUTE_NAME }))

const mobileBarMode: ComputedRef<DibodevLegalNoticeMobileBarMode> = computed((): DibodevLegalNoticeMobileBarMode => {
  if (isPreviewVisible.value) {
    return 'questions'
  }
  return questionStep.value === null ? 'ready' : 'preview'
})

const mobileBarText: ComputedRef<string> = computed((): string => {
  if (mobileBarMode.value === 'questions') {
    return props.wording.mobileBar.readingText
  }
  if (mobileBarMode.value === 'ready') {
    return props.wording.mobileBar.readyText
  }
  return formatMissingCount(props.wording.mobileBar.previewText, props.wording.mobileBar.previewTextOne)
})

const mobileBarButton: ComputedRef<string> = computed((): string => {
  if (mobileBarMode.value === 'questions') {
    return props.wording.mobileBar.readingButton
  }
  return mobileBarMode.value === 'ready' ? props.wording.mobileBar.readyButton : props.wording.mobileBar.previewButton
})

/* METHODS */
/**
 * Counts the fields still to complete, with the singular wording for a single one.
 * @param {string} template - The plural wording, with `{count}`.
 * @param {string} templateOne - The singular wording.
 * @returns {string} The label.
 */
function formatMissingCount(template: string, templateOne: string): string {
  const count: number = missingFieldLabels.value.length
  return count === 1 ? templateOne : template.replace('{count}', String(count))
}

/**
 * Whether the visitor asked the system to limit animations.
 * @returns {boolean} True when smooth scrolling should be skipped.
 */
function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Takes the new answers and sends the first interaction to PostHog, without any answer in it.
 * @param {DibodevLegalNoticeAnswers} nextAnswers - The answers after the change.
 * @returns {void}
 */
function updateAnswers(nextAnswers: DibodevLegalNoticeAnswers): void {
  answers.value = nextAnswers
  if (!hasStarted) {
    hasStarted = true
    track(TRACKING_EVENTS.legalNoticeGeneratorStarted, { location: props.trackingLocation })
  }
}

/**
 * Label of a copy button: « Copié » for two seconds after a copy.
 * @param {DibodevLegalNoticeDocumentKind} kind - The document of the button.
 * @returns {string} The label.
 */
function copyButtonLabel(kind: DibodevLegalNoticeDocumentKind): string {
  if (copiedDocument.value === kind) {
    return result.value.copied
  }
  return kind === 'legalNotice' ? result.value.copyLegalNotice : result.value.copyPrivacyPolicy
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
 * Shows one document of the preview: inside its scrolling box on large screens, in the page on small ones.
 * @param {DibodevLegalNoticeDocumentKind} kind - The document to show.
 * @returns {void}
 */
function scrollPreviewTo(kind: DibodevLegalNoticeDocumentKind): void {
  const sheet: HTMLElement | null = document.getElementById(`${props.anchorId}-${kind}`)
  const scroller: HTMLDivElement | null = documentScroller.value

  if (!sheet || !scroller) {
    return
  }
  if (window.matchMedia(LARGE_SCREEN_QUERY).matches) {
    scroller.scrollTo({
      top: Math.max(0, sheet.offsetTop - scroller.offsetTop - DOCUMENT_SCROLL_GAP_PX),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
    return
  }
  scrollPageTo(sheet)
}

/**
 * Shows a step, brings the questions back into view when their top left the screen, and gives them the focus.
 * @param {number} nextStep - The step to show (5 for the result).
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
  if (window.matchMedia(LARGE_SCREEN_QUERY).matches && nextStep <= QUESTION_STEP_COUNT) {
    scrollPreviewTo(nextStep === PRIVACY_POLICY_STEP ? 'privacyPolicy' : 'legalNotice')
  }
  if (questionStep.value === null) {
    resultElement.value?.focus({ preventScroll: true })
  } else {
    questions.value?.focusHeading()
  }
}

/**
 * Goes to the next step, or to the result after the fourth one.
 * @returns {Promise<void>} Resolves once the step is drawn.
 */
async function goNext(): Promise<void> {
  track(TRACKING_EVENTS.legalNoticeGeneratorStepCompleted, { location: props.trackingLocation, step: step.value })
  if (step.value === QUESTION_STEP_COUNT) {
    track(TRACKING_EVENTS.legalNoticeGeneratorCompleted, {
      location: props.trackingLocation,
      status: answers.value.status,
      hostingProvider: answers.value.hostingProvider,
      hasConsentTool: answers.value.hasConsentTool,
      hasAnalytics: answers.value.analytics !== 'none',
    })
  }
  await showStep(Math.min(step.value + 1, TOTAL_STEP_COUNT))
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
 * Writes text to the clipboard, with the old selection trick when the Clipboard API is refused.
 * @param {string} text - The text to copy.
 * @returns {Promise<boolean>} True when the text was copied.
 */
async function writeToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    const textarea: HTMLTextAreaElement = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    const isCopied: boolean = document.execCommand('copy')
    textarea.remove()
    return isCopied
  }
}

/**
 * Copies one document as plain text and shows « Copié » on its button.
 * @param {DibodevLegalNoticeDocumentKind} kind - The document to copy.
 * @returns {Promise<void>} Resolves once the text is copied.
 */
async function copyDocument(kind: DibodevLegalNoticeDocumentKind): Promise<void> {
  const isCopied: boolean = await writeToClipboard(LegalNoticeDocumentUtils.toPlainText(documents.value[kind]))

  hasCopyFailed.value = !isCopied
  copiedDocument.value = isCopied ? kind : null
  if (copiedTimer) {
    clearTimeout(copiedTimer)
  }
  copiedTimer = setTimeout((): void => {
    copiedDocument.value = null
    hasCopyFailed.value = false
  }, COPIED_FEEDBACK_DURATION_MS)
  if (isCopied) {
    track(TRACKING_EVENTS.legalNoticeGeneratorDownloaded, {
      location: props.trackingLocation,
      format: 'copy',
      document: kind,
    })
  }
}

/**
 * Downloads both documents in one Word file, written in the browser.
 * @returns {void}
 */
function downloadWord(): void {
  const bytes: Uint8Array<ArrayBuffer> = LegalNoticeDocxUtils.create([
    documents.value.legalNotice,
    documents.value.privacyPolicy,
  ])
  const url: string = URL.createObjectURL(new Blob([bytes], { type: DOCX_MIME_TYPE }))
  const link: HTMLAnchorElement = document.createElement('a')
  link.href = url
  link.download = WORD_FILE_NAME
  document.body.appendChild(link)
  link.click()
  link.remove()
  setTimeout((): void => URL.revokeObjectURL(url), DOWNLOAD_URL_LIFETIME_MS)
  track(TRACKING_EVENTS.legalNoticeGeneratorDownloaded, {
    location: props.trackingLocation,
    format: 'docx',
    document: 'both',
  })
}

/**
 * Removes the copy of the documents made for printing, and the class that hides the rest of the page.
 * @returns {void}
 */
function clearPrintCopy(): void {
  document.getElementById(PRINT_ROOT_ID)?.remove()
  document.documentElement.classList.remove(PRINTING_CLASS)
}

/**
 * Opens the print window on a copy of both documents put at the root of the page, the only thing printed.
 * @returns {void}
 */
function printDocuments(): void {
  if (!documentScroller.value) {
    return
  }
  clearPrintCopy()
  const printRoot: HTMLDivElement = document.createElement('div')
  printRoot.id = PRINT_ROOT_ID
  printRoot.lang = LEGAL_NOTICE_DOCUMENT_LANGUAGE_TAG
  printRoot.innerHTML = documentScroller.value.innerHTML
  printRoot.querySelectorAll('[id]').forEach((element: Element): void => element.removeAttribute('id'))
  document.body.appendChild(printRoot)
  document.documentElement.classList.add(PRINTING_CLASS)
  window.addEventListener('afterprint', clearPrintCopy, { once: true })
  track(TRACKING_EVENTS.legalNoticeGeneratorDownloaded, {
    location: props.trackingLocation,
    format: 'pdf',
    document: 'both',
  })
  window.print()
}

/**
 * Tracks the click on the contact button of the result.
 * @returns {void}
 */
function trackContactClick(): void {
  track(TRACKING_EVENTS.ctaProjectDiscussion, { location: `${props.trackingLocation}_result` })
}

/**
 * Tracks the click on the link to the GDPR cookie check, as the other tool teasers do.
 * @returns {void}
 */
function trackGdprCheckClick(): void {
  track(TRACKING_EVENTS.toolTeaserClicked, {
    tool: GDPR_COOKIE_CHECK_TEASER.toolId,
    location: `${props.trackingLocation}_result`,
  })
}

/**
 * Follows the bar fixed at the bottom of small screens: to the documents, or back to the questions.
 * @returns {void}
 */
function followMobileBar(): void {
  scrollPageTo(mobileBarMode.value === 'questions' ? panelElement.value : previewElement.value)
}

/* LIFECYCLE */
onMounted((): void => {
  dateLabel.value = new Intl.DateTimeFormat(LEGAL_NOTICE_DOCUMENT_LANGUAGE_TAG, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date())

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
  if (copiedTimer) {
    clearTimeout(copiedTimer)
  }
  clearPrintCopy()
})
</script>

<style scoped>
.legal-notice-step {
  animation: legal-notice-step-in 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes legal-notice-step-in {
  from {
    opacity: 0.2;
    transform: translateX(14px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

.legal-notice-live-dot {
  animation: legal-notice-live-pulse 2.4s ease-out infinite;
}

@keyframes legal-notice-live-pulse {
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

.legal-notice-mobile-bar-enter-active,
.legal-notice-mobile-bar-leave-active {
  transition:
    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.25s ease;
}

.legal-notice-mobile-bar-enter-from,
.legal-notice-mobile-bar-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

@media (prefers-reduced-motion: reduce) {
  .legal-notice-step,
  .legal-notice-live-dot {
    animation: none;
  }

  .legal-notice-mobile-bar-enter-active,
  .legal-notice-mobile-bar-leave-active {
    transition: none;
  }
}

:global(#legal-notice-print-root) {
  display: none;
}

@media print {
  :global(html.is-printing-legal-notice body > *:not(#legal-notice-print-root)) {
    display: none !important;
  }

  :global(html.is-printing-legal-notice #legal-notice-print-root) {
    display: grid;
    gap: 24px;
  }

  :global(html.is-printing-legal-notice #legal-notice-print-root article + article) {
    break-before: page;
  }
}
</style>
