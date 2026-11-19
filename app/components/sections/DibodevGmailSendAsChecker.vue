<template>
  <div :id="props.anchorId" class="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
    <div class="grid content-start gap-6 rounded-2xl border border-gray-300 bg-white p-6 sm:p-8">
      <form class="grid gap-6" novalidate @submit.prevent="checkAddress">
        <div class="grid gap-2">
          <DibodevInput
            id="gmail-send-as-address"
            type="text"
            autocomplete="off"
            :label="props.wording.addressLabel"
            :placeholder="props.wording.addressPlaceholder"
            :value="addressInput"
            @update:value="onAddressInput"
          />
          <p class="text-muted text-sm leading-6">{{ props.wording.addressHint }}</p>
        </div>
        <button
          type="submit"
          :disabled="!canCheck"
          :aria-busy="isChecking"
          class="bg-primary hover:bg-primary-dark focus-visible:ring-primary inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3 text-[15px] leading-6 font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <DibodevIcon name="Search" mode="stroke" :width="18" :height="18" aria-hidden="true" />
          {{ isChecking ? props.wording.checking : props.wording.submit }}
        </button>
      </form>

      <div v-if="questionBlocks.length > 0" class="grid gap-6 border-t border-gray-300 pt-6">
        <div class="grid gap-1.5">
          <p class="text-base leading-6 font-medium text-gray-100">{{ props.wording.questionsTitle }}</p>
          <p class="text-muted text-sm leading-6">{{ props.wording.questionsIntro }}</p>
        </div>
        <div
          v-for="question in questionBlocks"
          :key="question.key"
          role="group"
          :aria-labelledby="`gmail-send-as-question-${question.key}`"
          class="grid gap-2.5"
        >
          <p :id="`gmail-send-as-question-${question.key}`" class="text-[15px] leading-6 font-medium text-gray-100">
            {{ question.label }}
          </p>
          <p v-if="question.hint" class="text-muted text-sm leading-6">{{ question.hint }}</p>
          <DibodevTogglePillGroup
            :value="question.answer"
            :options="question.options"
            @update:value="(value: unknown): void => onAnswer(question.key, value)"
          />
        </div>
      </div>
    </div>

    <div
      ref="resultCard"
      class="bg-primary-dark relative grid content-start gap-6 overflow-hidden rounded-2xl p-6 text-white sm:p-8 lg:sticky lg:top-28"
    >
      <div
        class="pointer-events-none absolute -top-16 -right-12 h-56 w-56 rounded-full bg-white/10 blur-2xl"
        aria-hidden="true"
      />
      <div class="relative grid gap-5" aria-live="polite" :aria-busy="isChecking">
        <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.resultLabel }}</p>
        <div class="grid gap-2">
          <h2 class="flex items-start gap-2.5 text-2xl leading-tight font-medium tracking-[-0.01em] sm:text-[28px]">
            <DibodevIcon
              v-if="outcome"
              :name="GMAIL_SEND_AS_VERDICT_ICONS[outcome.verdict]"
              mode="stroke"
              :width="26"
              :height="26"
              class="mt-1 shrink-0"
              aria-hidden="true"
            />
            <span>{{ cardTitle }}</span>
          </h2>
          <p class="text-[15px] leading-6 text-white/85">{{ cardText }}</p>
        </div>

        <div v-if="hostingLine" class="grid gap-2 rounded-xl bg-white/10 p-4">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.hostingTitle }}</p>
          <p class="text-[15px] leading-6">{{ hostingLine }}</p>
        </div>

        <ul v-if="checkNotes.length > 0" class="grid gap-2.5">
          <li v-for="note in checkNotes" :key="note" class="flex items-start gap-2.5">
            <DibodevIcon
              name="Info"
              mode="stroke"
              :width="18"
              :height="18"
              class="mt-0.5 shrink-0 text-amber-300"
              aria-hidden="true"
            />
            <span class="text-[15px] leading-6">{{ note }}</span>
          </li>
        </ul>

        <div v-if="stepTexts.length > 0" class="grid gap-2.5 border-t border-white/20 pt-5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.stepsTitle }}</p>
          <ol class="grid gap-2">
            <li
              v-for="(step, stepIndex) in stepTexts"
              :key="step"
              class="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-2 text-[15px] leading-6"
            >
              <span class="font-medium text-white/70">{{ stepIndex + 1 }}.</span>
              <span>{{ step }}</span>
            </li>
          </ol>
        </div>

        <div v-if="hostGuide" class="grid gap-2.5 border-t border-white/20 pt-5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ hostGuideTitle }}</p>
          <NuxtLink
            :to="hostGuide.to"
            class="flex items-start gap-2.5 rounded-lg bg-white/10 px-3.5 py-2.5 text-[15px] leading-6 transition-colors hover:bg-white/20"
            @click="trackGuideClick"
          >
            <DibodevIcon
              name="ArrowRight"
              mode="stroke"
              :width="18"
              :height="18"
              class="mt-0.5 shrink-0"
              aria-hidden="true"
            />
            <span>{{ hostGuide.title }}</span>
          </NuxtLink>
        </div>

        <p v-if="outcome" class="text-sm leading-6 text-white/70">{{ props.wording.disclaimer }}</p>
      </div>

      <div class="relative grid gap-3">
        <p class="text-[15px] leading-6 text-white/85">
          {{ outcome ? props.wording.ctaIntro : props.wording.idleCtaIntro }}
        </p>
        <NuxtLink
          :to="contactRoute"
          class="text-primary-dark flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-[15px] leading-6 font-medium transition-colors hover:bg-gray-800"
          @click="trackContactClick"
        >
          {{ outcome ? props.wording.ctaLabel : props.wording.idleCtaLabel }}
          <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { UseTrackingReturn } from '~/composables/useTracking'
import type { DibodevEmailProviderKey } from '~/core/types/DibodevEmailDeliverabilityCheck'
import type {
  DibodevGmailSendAsAnswers,
  DibodevGmailSendAsCheckResult,
  DibodevGmailSendAsHostGuide,
  DibodevGmailSendAsOutcome,
  DibodevGmailSendAsQuestionKey,
  DibodevGmailSendAsReadingAnswer,
  DibodevGmailSendAsReceivingAnswer,
  DibodevGmailSendAsSendingAnswer,
} from '~/core/types/DibodevGmailSendAsCheck'
import type { DibodevGmailSendAsCheckerWording } from '~/core/types/DibodevGmailSendAsCheckPage'
import type {
  DibodevGmailSendAsAnswerOption,
  DibodevGmailSendAsCheckerProps,
  DibodevGmailSendAsQuestionBlock,
} from '~/core/types/DibodevGmailSendAsChecker'
import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'
import { computed, nextTick, ref, watch } from 'vue'
import DibodevInput from '~/components/core/DibodevInput.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevTogglePillGroup from '~/components/ui/DibodevTogglePillGroup.vue'
import { useTracking } from '~/composables/useTracking'
import {
  GMAIL_SEND_AS_CHECK_API_PATH,
  GMAIL_SEND_AS_CONTACT_TOPIC,
  GMAIL_SEND_AS_VERDICT_ICONS,
  GMAIL_SEND_AS_VERDICTS_WITH_SOLUTIONS,
} from '~/core/constants/gmailSendAsCheck/pageShared'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { GmailSendAsUtils } from '~/core/utils/GmailSendAsUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'
import { ResultRevealUtils } from '~/core/utils/ResultRevealUtils'
import { SiteCheckContactUtils } from '~/core/utils/SiteCheckContactUtils'
import { SiteCheckErrorUtils } from '~/core/utils/SiteCheckErrorUtils'

/** The address never leaves the page: only its domain goes to the API, and the PostHog events carry the hosting and the verdict. */
const props: DibodevGmailSendAsCheckerProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevGmailSendAsCheckerWording>,
    required: true,
  },
  hostGuides: {
    type: Object as PropType<Partial<Record<DibodevEmailProviderKey, DibodevGmailSendAsHostGuide>>>,
    default: (): Partial<Record<DibodevEmailProviderKey, DibodevGmailSendAsHostGuide>> => ({}),
  },
  consumerMailboxGuide: {
    type: Object as PropType<DibodevGmailSendAsHostGuide | null>,
    default: null,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const { track }: UseTrackingReturn = useTracking()

const READING_ANSWERS: DibodevGmailSendAsReadingAnswer[] = ['inGmail', 'elsewhere']
const SENDING_ANSWERS: DibodevGmailSendAsSendingAnswer[] = ['domainAddress', 'gmailAddress', 'unknown']
const RECEIVING_ANSWERS: DibodevGmailSendAsReceivingAnswer[] = ['listed', 'notListed', 'unknown']
const NO_ANSWERS: DibodevGmailSendAsAnswers = { reading: null, sending: null, receiving: null }
let hasTrackedStart: boolean = false

/* REFS */
const addressInput: Ref<string> = ref('')
const isChecking: Ref<boolean> = ref(false)
const result: Ref<DibodevGmailSendAsCheckResult | null> = ref(null)
const errorKind: Ref<DibodevSiteCheckErrorKind | null> = ref(null)
const checkedDomain: Ref<string> = ref('')
const answers: Ref<DibodevGmailSendAsAnswers> = ref({ ...NO_ANSWERS })
const resultCard: Ref<HTMLElement | null> = ref(null)

/* COMPUTED */
const canCheck: ComputedRef<boolean> = computed((): boolean => !isChecking.value && addressInput.value.trim() !== '')

const outcome: ComputedRef<DibodevGmailSendAsOutcome | null> = computed((): DibodevGmailSendAsOutcome | null =>
  result.value ? GmailSendAsUtils.decideOutcome(result.value.hosting, answers.value) : null,
)

const hostName: ComputedRef<string> = computed((): string => {
  if (!result.value) {
    return ''
  }
  if (result.value.mailHost) {
    return result.value.mailHost.name
  }
  return result.value.hosting === 'consumerMailbox'
    ? result.value.domain
    : QuizTextUtils.fillTemplate(props.wording.unknownHostName, { mxHost: result.value.mxHost ?? '' })
})

const templateValues: ComputedRef<Record<string, string>> = computed(
  (): Record<string, string> => ({
    domain: result.value?.domain ?? checkedDomain.value,
    host: hostName.value,
    mxHost: result.value?.mxHost ?? '',
  }),
)

const questionBlocks: ComputedRef<DibodevGmailSendAsQuestionBlock[]> = computed(
  (): DibodevGmailSendAsQuestionBlock[] => {
    if (!result.value || !GmailSendAsUtils.needsAnswers(result.value.hosting)) {
      return []
    }
    const blocks: DibodevGmailSendAsQuestionBlock[] = [
      {
        key: 'reading',
        label: fillTemplate(props.wording.questions.reading.label),
        hint: props.wording.questions.reading.hint,
        options: buildOptions(READING_ANSWERS, props.wording.questions.reading.options),
        answer: answers.value.reading,
      },
    ]

    if (answers.value.reading !== 'inGmail') {
      return blocks
    }
    return [
      ...blocks,
      {
        key: 'sending',
        label: fillTemplate(props.wording.questions.sending.label),
        hint: props.wording.questions.sending.hint,
        options: buildOptions(SENDING_ANSWERS, props.wording.questions.sending.options),
        answer: answers.value.sending,
      },
      {
        key: 'receiving',
        label: fillTemplate(props.wording.questions.receiving.label),
        hint: props.wording.questions.receiving.hint,
        options: buildOptions(RECEIVING_ANSWERS, props.wording.questions.receiving.options),
        answer: answers.value.receiving,
      },
    ]
  },
)

const cardTitle: ComputedRef<string> = computed((): string => {
  if (isChecking.value) {
    return props.wording.loadingTitle
  }
  if (errorKind.value) {
    return props.wording.errorTitles[errorKind.value]
  }
  if (outcome.value) {
    return fillTemplate(props.wording.verdictTitles[outcome.value.verdict])
  }
  return result.value ? fillTemplate(props.wording.pendingTitle) : props.wording.idleTitle
})

const cardText: ComputedRef<string> = computed((): string => {
  if (isChecking.value) {
    return props.wording.loadingText
  }
  if (errorKind.value) {
    return fillTemplate(props.wording.errorTexts[errorKind.value])
  }
  if (outcome.value) {
    return fillTemplate(props.wording.verdictTexts[outcome.value.verdict])
  }
  return result.value ? fillTemplate(props.wording.pendingText) : props.wording.idleText
})

const hostingLine: ComputedRef<string> = computed((): string =>
  result.value && result.value.hosting !== 'invalidDomain'
    ? fillTemplate(props.wording.hostingLines[result.value.hosting])
    : '',
)

const checkNotes: ComputedRef<string[]> = computed((): string[] => {
  const notes: string[] = []

  if (outcome.value?.mustCheckSending) {
    notes.push(props.wording.checkSendingNote)
  }
  if (outcome.value?.mustCheckReceiving) {
    notes.push(props.wording.checkReceivingNote)
  }
  return notes
})

const stepTexts: ComputedRef<string[]> = computed((): string[] =>
  outcome.value ? (props.wording.verdictSteps[outcome.value.verdict] ?? []).map(fillTemplate) : [],
)

const hostGuide: ComputedRef<DibodevGmailSendAsHostGuide | null> = computed((): DibodevGmailSendAsHostGuide | null => {
  if (!result.value || !outcome.value || !GMAIL_SEND_AS_VERDICTS_WITH_SOLUTIONS.includes(outcome.value.verdict)) {
    return null
  }
  if (result.value.hosting === 'consumerMailbox') {
    return props.consumerMailboxGuide
  }
  return result.value.mailHost ? (props.hostGuides[result.value.mailHost.key] ?? null) : null
})

const hostGuideTitle: ComputedRef<string> = computed((): string => fillTemplate(props.wording.hostGuideTitle))

const contactRoute: ComputedRef<string> = computed((): string =>
  localePath({
    path: '/contact',
    query: SiteCheckContactUtils.buildContactQuery(
      GMAIL_SEND_AS_CONTACT_TOPIC,
      result.value && result.value.hosting !== 'invalidDomain' ? result.value.domain : null,
      outcome.value?.verdict ?? null,
    ),
  }),
)

/* METHODS */
/**
 * Fills a text of the checker with the domain checked, the name of its mail host and its mail server.
 * @param {string} template - A text with `{placeholders}`.
 * @returns {string} The text with the values.
 */
function fillTemplate(template: string): string {
  return QuizTextUtils.fillTemplate(template, templateValues.value)
}

/**
 * Builds the pills of a question, in the order of its answers.
 * @param {TAnswer[]} answerKeys - The answers of the question, in display order.
 * @param {Record<TAnswer, string>} labels - Their texts in the page language.
 * @returns {DibodevGmailSendAsAnswerOption[]} The options of the pill group.
 */
function buildOptions<TAnswer extends string>(
  answerKeys: TAnswer[],
  labels: Record<TAnswer, string>,
): DibodevGmailSendAsAnswerOption[] {
  return answerKeys.map(
    (answer: TAnswer): DibodevGmailSendAsAnswerOption => ({ label: fillTemplate(labels[answer]), value: answer }),
  )
}

/**
 * Keeps what the visitor types and tracks the first interaction, once per page view.
 * @param {string | number} value - The field value.
 * @returns {void}
 */
function onAddressInput(value: string | number): void {
  addressInput.value = String(value)
  if (hasTrackedStart) {
    return
  }
  hasTrackedStart = true
  track(TRACKING_EVENTS.gmailSendAsCheckStarted, { location: props.trackingLocation })
}

/**
 * Keeps the answer picked for a question; a value the question does not know clears it.
 * @param {DibodevGmailSendAsQuestionKey} key - The question answered.
 * @param {unknown} value - The value emitted by the pill group.
 * @returns {void}
 */
function onAnswer(key: DibodevGmailSendAsQuestionKey, value: unknown): void {
  if (key === 'reading') {
    answers.value = {
      ...answers.value,
      reading: READING_ANSWERS.find((answer: DibodevGmailSendAsReadingAnswer): boolean => answer === value) ?? null,
    }
    return
  }
  if (key === 'sending') {
    answers.value = {
      ...answers.value,
      sending: SENDING_ANSWERS.find((answer: DibodevGmailSendAsSendingAnswer): boolean => answer === value) ?? null,
    }
    return
  }
  answers.value = {
    ...answers.value,
    receiving: RECEIVING_ANSWERS.find((answer: DibodevGmailSendAsReceivingAnswer): boolean => answer === value) ?? null,
  }
}

/**
 * Brings the result card into view on a phone, where it sits under the form and the questions.
 * @returns {Promise<void>} Resolves once the page has scrolled, or stayed in place.
 */
async function revealResultBelowTheFold(): Promise<void> {
  await nextTick()
  ResultRevealUtils.revealBelowTheFold(resultCard.value)
}

/**
 * Asks the API where the mail of the domain is hosted, then shows the verdict or the questions it depends on.
 * @returns {Promise<void>} Resolves once the hosting or the error is shown.
 */
async function checkAddress(): Promise<void> {
  if (!canCheck.value) {
    return
  }
  checkedDomain.value = GmailSendAsUtils.extractDomain(addressInput.value)
  isChecking.value = true
  errorKind.value = null
  result.value = null
  answers.value = { ...NO_ANSWERS }
  try {
    result.value = await $fetch<DibodevGmailSendAsCheckResult>(GMAIL_SEND_AS_CHECK_API_PATH, {
      query: { domain: checkedDomain.value },
      retry: 0,
    })
    track(TRACKING_EVENTS.gmailSendAsChecked, {
      location: props.trackingLocation,
      outcome: 'result',
      hosting: result.value.hosting,
      mailHost: result.value.mailHost?.key ?? null,
      errorKind: null,
    })
  } catch (error: unknown) {
    const kind: DibodevSiteCheckErrorKind = SiteCheckErrorUtils.kindOf(error)

    errorKind.value = kind
    track(TRACKING_EVENTS.gmailSendAsChecked, {
      location: props.trackingLocation,
      outcome: 'error',
      hosting: null,
      mailHost: null,
      errorKind: kind,
    })
  } finally {
    isChecking.value = false
  }
  if (!result.value || !GmailSendAsUtils.needsAnswers(result.value.hosting)) {
    await revealResultBelowTheFold()
  }
}

/**
 * Tracks the click on the guide of the mail host shown under a verdict.
 * @returns {void}
 */
function trackGuideClick(): void {
  track(TRACKING_EVENTS.gmailSendAsGuideClicked, {
    location: props.trackingLocation,
    mailHost: result.value?.mailHost?.key ?? null,
  })
}

/**
 * Tracks the click on the contact button of the card, before or after a verdict.
 * @returns {void}
 */
function trackContactClick(): void {
  track(TRACKING_EVENTS.ctaProjectDiscussion, {
    location: outcome.value ? props.trackingLocation : `${props.trackingLocation}_idle`,
  })
}

/* WATCHERS */
watch(outcome, (shown: DibodevGmailSendAsOutcome | null, previous: DibodevGmailSendAsOutcome | null): void => {
  if (!shown || !result.value || shown.verdict === previous?.verdict) {
    return
  }
  track(TRACKING_EVENTS.gmailSendAsVerdictShown, {
    location: props.trackingLocation,
    verdict: shown.verdict,
    hosting: result.value.hosting,
    mailHost: result.value.mailHost?.key ?? null,
  })
  if (GmailSendAsUtils.needsAnswers(result.value.hosting)) {
    revealResultBelowTheFold()
  }
})
</script>
