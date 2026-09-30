<template>
  <div class="grid gap-6">
    <div class="grid gap-3">
      <p class="text-primary text-xs font-medium tracking-[0.08em] uppercase">{{ t('quizTunnel.resultEyebrow') }}</p>
      <h2
        ref="resultTitle"
        tabindex="-1"
        class="text-[24px] leading-[1.2] font-medium tracking-[-0.01em] text-gray-100 outline-none sm:text-[30px]"
      >
        <DibodevHyphenSafeText :text="props.result.title" />
      </h2>
      <p class="max-w-3xl text-[15px] leading-7 text-gray-200 sm:text-base">{{ props.result.explanation }}</p>
      <p class="text-muted text-sm leading-6">
        {{ t('quizTunnel.yourAnswers', { recap: props.result.answersSummary }) }}
      </p>
    </div>

    <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10">
      <div class="bg-primary-dark relative grid gap-5 overflow-hidden rounded-2xl p-5 text-white sm:p-6">
        <div
          class="pointer-events-none absolute -top-16 -right-12 h-56 w-56 rounded-full bg-white/10 blur-2xl"
          aria-hidden="true"
        />
        <div class="relative grid gap-1">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">
            {{ props.result.priceCard.eyebrow }}
          </p>
          <p class="text-[32px] leading-tight font-medium tracking-[-0.01em] tabular-nums sm:text-[40px]">
            {{ props.result.priceCard.price }}
          </p>
          <p v-if="props.result.priceCard.priceSuffix" class="text-[15px] text-white/85">
            {{ props.result.priceCard.priceSuffix }}
          </p>
        </div>
        <dl class="relative grid rounded-xl bg-white/10 px-4">
          <div
            v-for="priceDetail in props.result.priceCard.details"
            :key="priceDetail.label"
            class="flex items-baseline justify-between gap-4 border-b border-white/15 py-3 last:border-b-0"
          >
            <dt class="text-[15px] font-medium">{{ priceDetail.label }}</dt>
            <dd class="text-right text-[15px] whitespace-nowrap text-white/90 tabular-nums">{{ priceDetail.value }}</dd>
          </div>
        </dl>
        <p class="relative text-sm leading-6 text-white/85">
          {{ props.result.priceCard.footnote }}
          <a
            v-if="props.result.priceCard.footnoteLink"
            :href="props.result.priceCard.footnoteLink.href"
            class="font-medium whitespace-nowrap text-white underline underline-offset-2 hover:no-underline"
          >
            {{ props.result.priceCard.footnoteLink.label }}
          </a>
        </p>
      </div>

      <div class="grid content-start gap-3 lg:pt-2">
        <p class="text-base font-medium text-gray-100">{{ props.result.adviceTitle }}</p>
        <ul class="grid gap-2.5">
          <li
            v-for="advicePoint in props.result.advicePoints"
            :key="advicePoint"
            class="flex items-start gap-2.5 text-[15px] leading-6 text-gray-200"
          >
            <DibodevIcon
              name="Check"
              mode="stroke"
              :width="18"
              :height="18"
              class="text-primary mt-[3px] shrink-0"
              aria-hidden="true"
            />
            <span>{{ advicePoint }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div ref="contactBlock" class="border-t border-gray-300 pt-6">
      <div v-if="props.conversionView === 'cta'" class="grid gap-4">
        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
          <DibodevButton icon="ArrowRight" iconPosition="right" class="w-full sm:w-auto" @click="emit('open-form')">
            {{ props.result.ctaLabel }}
          </DibodevButton>
          <p class="text-center text-[15px] text-gray-200 sm:text-left">
            {{ t('quizTunnel.callMe') }}
            <a
              :href="`tel:${PHONE_E164}`"
              class="font-medium whitespace-nowrap text-gray-100 tabular-nums underline decoration-gray-400 underline-offset-2 transition-colors hover:decoration-gray-100"
              @click="track(TRACKING_EVENTS.contactPhone, { location: 'tunnel_result' })"
            >
              {{ PHONE_DISPLAY }}
            </a>
          </p>
        </div>
        <ul class="flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-sm text-gray-200 sm:justify-start">
          <li v-for="reassuranceKey in CTA_REASSURANCE_KEYS" :key="reassuranceKey" class="flex items-center gap-1.5">
            <DibodevIcon
              name="Check"
              mode="stroke"
              :width="16"
              :height="16"
              class="text-primary shrink-0"
              aria-hidden="true"
            />
            {{ t(`quizTunnel.${reassuranceKey}`) }}
          </li>
        </ul>
      </div>

      <DibodevQuizLeadForm
        v-else-if="props.conversionView === 'form'"
        ref="leadForm"
        :title="props.result.leadFormTitle"
        :intro="props.result.leadFormIntro"
        :quizId="props.quizId"
        :verdict="props.result.verdict"
        :projectTypeLabel="props.projectTypeLabel"
        :leadBudget="props.result.leadBudget"
        :leadMessage="props.leadMessage"
        @cancel="emit('close-form')"
        @sent="emit('sent')"
      />

      <div v-else class="grid gap-2 rounded-2xl bg-[#e4f8ec] p-5">
        <p
          ref="sentTitle"
          tabindex="-1"
          class="flex items-center gap-2 text-base font-medium text-[#047857] outline-none"
        >
          <DibodevIcon name="CheckCircle" mode="stroke" :width="20" :height="20" aria-hidden="true" />
          {{ t('quizTunnel.sent.title') }}
        </p>
        <p class="text-[15px] leading-6 text-gray-200">{{ t('quizTunnel.sent.text') }}</p>
      </div>
    </div>

    <div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-gray-300 pt-3">
      <button
        type="button"
        class="text-primary hover:text-primary-dark inline-flex min-h-10 cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors"
        @click="emit('restart')"
      >
        <DibodevIcon name="RotateCcw" mode="stroke" :width="16" :height="16" aria-hidden="true" />
        {{ t('quizTunnel.restart') }}
      </button>
      <span class="text-muted text-[13px] leading-5">{{ props.result.disclaimer }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from 'vue'
import type { DibodevQuizConversionView, DibodevQuizResult } from '~/core/types/DibodevQuiz'
import type { DibodevQuizResultRevealTargets, DibodevQuizResultStepProps } from '~/core/types/DibodevQuizResultStep'
import { ref } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevHyphenSafeText from '~/components/ui/DibodevHyphenSafeText.vue'
import DibodevQuizLeadForm from '~/components/quiz/DibodevQuizLeadForm.vue'
import { PHONE_DISPLAY, PHONE_E164 } from '~/config/contact'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

const CTA_REASSURANCE_KEYS: string[] = ['response24h', 'freeFirstCall']

const props: DibodevQuizResultStepProps = defineProps({
  result: {
    type: Object as PropType<DibodevQuizResult>,
    required: true,
  },
  conversionView: {
    type: String as PropType<DibodevQuizConversionView>,
    default: 'cta',
  },
  quizId: {
    type: String as PropType<string>,
    required: true,
  },
  projectTypeLabel: {
    type: String as PropType<string>,
    required: true,
  },
  leadMessage: {
    type: String as PropType<string>,
    required: true,
  },
})

const emit: {
  (event: 'open-form'): void
  (event: 'close-form'): void
  (event: 'sent'): void
  (event: 'restart'): void
} = defineEmits<{
  (event: 'open-form'): void
  (event: 'close-form'): void
  (event: 'sent'): void
  (event: 'restart'): void
}>()

const { t } = useI18n()
const { track } = useTracking()

/* REFS */
const resultTitle: Ref<HTMLHeadingElement | null> = ref(null)
const sentTitle: Ref<HTMLParagraphElement | null> = ref(null)
const leadForm: Ref<InstanceType<typeof DibodevQuizLeadForm> | null> = ref(null)
const contactBlock: Ref<HTMLDivElement | null> = ref(null)

/* METHODS */
/**
 * Moves the keyboard and screen reader focus to the heading of what the visitor must read now, without scrolling.
 * @returns {void}
 */
function focusTitle(): void {
  if (props.conversionView === 'form') leadForm.value?.focusTitle()
  else if (props.conversionView === 'sent') sentTitle.value?.focus({ preventScroll: true })
  else resultTitle.value?.focus({ preventScroll: true })
}

/**
 * Elements the tunnel scrolls to when the result appears: the heading, and the contact buttons with the phone number.
 * @returns {DibodevQuizResultRevealTargets} The two elements, null before the first render.
 */
function revealTargets(): DibodevQuizResultRevealTargets {
  return { heading: resultTitle.value, contactBlock: contactBlock.value }
}

defineExpose({ focusTitle, revealTargets })
</script>
