<template>
  <div
    :id="props.anchorId"
    ref="atelierCard"
    class="grid scroll-mt-24 rounded-2xl border border-gray-300 bg-white shadow-[0_32px_80px_-44px_rgba(91,75,208,0.4)] lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]"
  >
    <div
      class="order-2 grid min-w-0 grid-cols-[minmax(0,1fr)] content-start gap-6 border-t border-gray-300 p-5 sm:p-7 lg:order-1 lg:border-t-0 lg:border-r"
    >
      <div class="grid gap-3">
        <div class="flex min-h-11 items-center justify-between gap-4">
          <button
            type="button"
            class="text-primary hover:text-primary-dark hover:bg-surface-tint focus-visible:outline-primary -ml-2 inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-lg px-2 text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            :class="{ invisible: atelier.stepIndex.value === 0 }"
            :disabled="atelier.stepIndex.value === 0"
            @click="onBack"
          >
            <DibodevIcon name="ArrowLeft" mode="stroke" :width="18" :height="18" aria-hidden="true" />
            {{ props.wording.back }}
          </button>
          <span class="text-muted text-sm tabular-nums">{{ stepCountLabel }}</span>
        </div>
        <DibodevRoadProgress
          :completedSteps="completedSteps"
          :totalSteps="SITE_ATELIER_QUESTION_STEP_COUNT"
          travellerIcon="Monitor"
          :label="props.wording.progressLabel"
        />
      </div>

      <div :key="atelier.stepIndex.value" class="site-atelier__step min-w-0">
        <DibodevSiteAtelierBusinessStep
          v-if="atelier.currentStep.value === 'business'"
          ref="stepComponent"
          :wording="props.wording"
          :state="atelier.state"
          @update:business-name="onBusinessNameInput"
          @update:city="onCityInput"
          @update:phone="onPhoneInput"
          @select-google-place="atelier.applyGooglePlace"
        />
        <DibodevSiteAtelierStyleStep
          v-else-if="atelier.currentStep.value === 'style'"
          ref="stepComponent"
          :wording="props.wording"
          :tradeWording="props.tradeWording"
          :templates="props.trade.templates"
          :templateId="atelier.state.templateId"
          @select="atelier.selectTemplate"
        />
        <DibodevSiteAtelierColorStep
          v-else-if="atelier.currentStep.value === 'colors'"
          ref="stepComponent"
          :wording="props.wording"
          :state="atelier.state"
          :templatePalette="atelier.currentTemplate.value.defaultPalette"
          @select-color="atelier.selectColor"
          @use-logo-color="atelier.setUsesLogoColor"
        />
        <DibodevSiteAtelierMediaStep
          v-else-if="atelier.currentStep.value === 'media'"
          ref="stepComponent"
          :wording="props.wording"
          :tradeWording="props.tradeWording"
          :state="atelier.state"
          @set-logo="atelier.setLogo"
          @add-photos="atelier.addPhotos"
          @remove-photo="atelier.removePhoto"
        />
        <DibodevSiteAtelierServicesStep
          v-else-if="atelier.currentStep.value === 'services'"
          ref="stepComponent"
          :wording="props.wording"
          :tradeWording="props.tradeWording"
          :state="atelier.state"
          :hasEmergencyOption="props.trade.hasEmergencyService"
          @toggle-service="atelier.toggleService"
          @set-emergency="onEmergencyChange"
        />
        <DibodevSiteAtelierRequestStep
          v-else
          ref="stepComponent"
          :wording="props.wording"
          :tradeWording="props.tradeWording"
          :status="atelier.requestStatus.value"
          :errorMessage="requestErrorMessage"
          :wereAttachmentsDropped="atelier.wereAttachmentsDropped.value"
          :pricingAnchorId="props.pricingAnchorId"
          :businessName="atelier.state.businessName"
          @submit="atelier.submitDemoRequest"
        />
      </div>

      <p class="sr-only" aria-live="polite">{{ statusAnnouncement }}</p>

      <div v-if="!atelier.isFinalStep.value" class="grid gap-4 border-t border-gray-300 pt-5">
        <p class="text-muted text-sm leading-6">{{ hint }}</p>
        <DibodevButton icon="ArrowRight" iconPosition="right" class="w-full" @click="onNext">
          {{ atelier.isLastQuestionStep.value ? props.wording.seeMyDemo : props.wording.next }}
        </DibodevButton>
      </div>
    </div>

    <div class="order-1 min-w-0 rounded-t-[15px] bg-gray-800 lg:order-2 lg:rounded-tl-none lg:rounded-br-[15px]">
      <div class="p-4 sm:p-6 lg:sticky lg:top-[110px]">
        <DibodevSiteAtelierPreview
          :wording="props.wording"
          :template="atelier.currentTemplate.value"
          :previewMessage="atelier.previewMessage.value"
          :device="atelier.device.value"
          @update:device="atelier.setDevice"
          @open-full-screen="atelier.trackDemoOpened"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { UseSiteAtelierReturn } from '~/composables/useSiteAtelier'
import type {
  DibodevSiteAtelierProps,
  DibodevSiteAtelierStepComponent,
  DibodevSiteAtelierTradeWording,
  DibodevSiteAtelierWording,
} from '~/core/types/DibodevSiteAtelier'
import type { DibodevTradeWebsiteDefinition } from '~/core/types/DibodevTradeWebsite'
import { computed, nextTick, ref } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevRoadProgress from '~/components/data-displays/DibodevRoadProgress.vue'
import DibodevSiteAtelierBusinessStep from '~/components/site-atelier/DibodevSiteAtelierBusinessStep.vue'
import DibodevSiteAtelierColorStep from '~/components/site-atelier/DibodevSiteAtelierColorStep.vue'
import DibodevSiteAtelierMediaStep from '~/components/site-atelier/DibodevSiteAtelierMediaStep.vue'
import DibodevSiteAtelierPreview from '~/components/site-atelier/DibodevSiteAtelierPreview.vue'
import DibodevSiteAtelierRequestStep from '~/components/site-atelier/DibodevSiteAtelierRequestStep.vue'
import DibodevSiteAtelierServicesStep from '~/components/site-atelier/DibodevSiteAtelierServicesStep.vue'
import DibodevSiteAtelierStyleStep from '~/components/site-atelier/DibodevSiteAtelierStyleStep.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { SITE_ATELIER_RATE_LIMITED_STATUS, useSiteAtelier } from '~/composables/useSiteAtelier'
import {
  SITE_ATELIER_QUESTION_STEP_COUNT,
  SITE_ATELIER_SIDE_BY_SIDE_MIN_WIDTH,
} from '~/core/constants/siteAtelier/siteAtelierShared'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

const NAVBAR_HEIGHT: number = 72

/**
 * The site workshop of a trade page: five steps, the live demo beside them (above on small screens), then the demo request.
 */
const props: DibodevSiteAtelierProps = defineProps({
  trade: {
    type: Object as PropType<DibodevTradeWebsiteDefinition>,
    required: true,
  },
  tradeWording: {
    type: Object as PropType<DibodevSiteAtelierTradeWording>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevSiteAtelierWording>,
    required: true,
  },
  tunnelId: {
    type: String as PropType<string>,
    required: true,
  },
  anchorId: {
    type: String as PropType<string>,
    default: 'atelier',
  },
  pricingAnchorId: {
    type: String as PropType<string>,
    default: 'pricing',
  },
})

const atelier: UseSiteAtelierReturn = useSiteAtelier(props.trade, props.tradeWording, props.tunnelId)

/* REFS */
const atelierCard: Ref<HTMLDivElement | null> = ref(null)
const stepComponent: Ref<DibodevSiteAtelierStepComponent | null> = ref(null)
const statusAnnouncement: Ref<string> = ref('')

/* COMPUTED */
const completedSteps: ComputedRef<number> = computed((): number =>
  Math.min(atelier.stepIndex.value, SITE_ATELIER_QUESTION_STEP_COUNT),
)
const stepCountLabel: ComputedRef<string> = computed((): string =>
  atelier.isFinalStep.value
    ? props.wording.finalStepCount
    : QuizTextUtils.fillTemplate(props.wording.stepCount, {
        current: String(atelier.questionStepNumber.value),
        total: String(SITE_ATELIER_QUESTION_STEP_COUNT),
      }),
)
const hint: ComputedRef<string> = computed((): string => {
  if (atelier.isLastQuestionStep.value) {
    return props.wording.hintLastStep
  }
  if (atelier.currentStep.value === 'media') {
    return props.wording.hintMedia
  }
  return props.wording.hintDefault
})
const requestErrorMessage: ComputedRef<string> = computed((): string => {
  if (atelier.requestValidationError.value === 'missingBusinessName') {
    return props.wording.request.missingBusinessName
  }
  if (atelier.requestValidationError.value === 'invalidEmail') {
    return props.wording.request.invalidEmail
  }
  if (atelier.requestStatus.value !== 'error') {
    return ''
  }
  return atelier.requestErrorStatus.value === SITE_ATELIER_RATE_LIMITED_STATUS
    ? props.wording.request.rateLimited
    : props.wording.request.error
})

/* METHODS */
/**
 * Announces the new step, moves the focus to its title, and brings the card back on screen when the preview sits above the steps.
 * @returns {Promise<void>} Resolves once the step is rendered.
 */
async function revealCurrentStep(): Promise<void> {
  await nextTick()
  statusAnnouncement.value = stepCountLabel.value
  stepComponent.value?.focusTitle()
  const card: HTMLDivElement | null = atelierCard.value
  if (!card || window.innerWidth >= SITE_ATELIER_SIDE_BY_SIDE_MIN_WIDTH) {
    return
  }
  if (card.getBoundingClientRect().top < NAVBAR_HEIGHT) {
    const behavior: ScrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    card.scrollIntoView({ behavior, block: 'start' })
  }
}

/**
 * Moves to the next step.
 * @returns {void}
 */
function onNext(): void {
  atelier.goNext()
  revealCurrentStep()
}

/**
 * Moves back one step.
 * @returns {void}
 */
function onBack(): void {
  atelier.goBack()
  revealCurrentStep()
}

/**
 * Keeps the business name typed and notes the first interaction.
 * @param {string} value - The text typed.
 * @returns {void}
 */
function onBusinessNameInput(value: string): void {
  atelier.noteFirstInteraction()
  atelier.state.businessName = value
}

/**
 * Keeps the city typed.
 * @param {string} value - The text typed.
 * @returns {void}
 */
function onCityInput(value: string): void {
  atelier.noteFirstInteraction()
  atelier.state.city = value
}

/**
 * Keeps the phone typed.
 * @param {string} value - The text typed.
 * @returns {void}
 */
function onPhoneInput(value: string): void {
  atelier.noteFirstInteraction()
  atelier.state.phone = value
}

/**
 * Keeps the emergency option.
 * @param {boolean} hasEmergencyService - True when checked.
 * @returns {void}
 */
function onEmergencyChange(hasEmergencyService: boolean): void {
  atelier.noteFirstInteraction()
  atelier.state.hasEmergencyService = hasEmergencyService
}
</script>

<style scoped>
.site-atelier__step {
  animation: site-atelier-step-enter 0.28s ease-out;
}

@keyframes site-atelier-step-enter {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .site-atelier__step {
    animation: none;
  }
}
</style>
