<template>
  <div class="grid gap-5">
    <DibodevSiteAtelierStepHeading
      ref="heading"
      :eyebrow="props.wording.request.eyebrow"
      :title="props.tradeWording.requestTitle"
      :intro="props.wording.request.intro"
    />

    <div v-if="props.status === 'sent'" class="bg-surface-tint grid gap-2 rounded-xl p-5" role="status">
      <p class="flex items-center gap-2 text-[15px] font-medium text-gray-100">
        <DibodevIcon
          name="CheckCircle"
          mode="stroke"
          :width="20"
          :height="20"
          class="text-primary shrink-0"
          aria-hidden="true"
        />
        {{ props.wording.request.sentTitle }}
      </p>
      <p class="text-sm leading-6 text-gray-200">{{ sentText }}</p>
      <p v-if="props.wereAttachmentsDropped" class="text-muted text-sm leading-6">
        {{ props.wording.request.attachmentsDroppedNote }}
      </p>
    </div>

    <form v-else novalidate class="grid gap-4" @submit.prevent="emit('submit', email, phone, websiteUrl)">
      <div class="relative flex flex-col gap-3">
        <label :for="EMAIL_ID" class="text-base font-medium text-gray-100">
          {{ props.wording.request.emailLabel }} <span class="ml-1 text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          :id="EMAIL_ID"
          v-model="email"
          type="email"
          autocomplete="email"
          required
          :maxlength="SITE_ATELIER_EMAIL_MAX_LENGTH"
          :placeholder="props.wording.request.emailPlaceholder"
          :class="SITE_ATELIER_TEXT_FIELD_CLASS"
        />
      </div>
      <div class="relative flex flex-col gap-3">
        <label :for="PHONE_ID" class="text-base font-medium text-gray-100">
          {{ props.wording.request.phoneLabel }}
          <span class="text-muted font-normal">{{ props.wording.request.phoneHint }}</span>
        </label>
        <input
          :id="PHONE_ID"
          v-model="phone"
          type="tel"
          autocomplete="tel"
          :maxlength="SITE_ATELIER_PHONE_MAX_LENGTH"
          :placeholder="props.wording.request.phonePlaceholder"
          :class="SITE_ATELIER_TEXT_FIELD_CLASS"
        />
      </div>
      <div class="sr-only" aria-hidden="true">
        <input :id="HONEYPOT_ID" v-model="websiteUrl" name="website" type="text" tabindex="-1" autocomplete="off" />
      </div>
      <DibodevAlert v-if="props.errorMessage" :message="props.errorMessage" variant="error" />
      <DibodevButton
        type="submit"
        class="w-full"
        icon="Send"
        iconPosition="right"
        :disabled="props.status === 'sending'"
      >
        {{ props.status === 'sending' ? props.wording.request.submitting : props.wording.request.submit }}
      </DibodevButton>
      <p class="text-muted text-sm leading-6">
        {{ props.wording.request.privacyNote }}
        <NuxtLink :to="localePath('/privacy')" class="text-primary underline underline-offset-4">
          {{ props.wording.request.privacyLink }}
        </NuxtLink>
      </p>
    </form>

    <div class="bg-surface-tint grid gap-4 rounded-xl p-5">
      <p class="text-[15px] font-medium text-gray-100">{{ props.wording.request.priceTitle }}</p>
      <dl class="grid gap-3 text-sm leading-6">
        <div>
          <dt class="font-medium text-gray-100">{{ props.wording.request.templateOfferPrice }}</dt>
          <dd class="text-gray-200">{{ props.wording.request.templateOfferText }}</dd>
        </div>
        <div>
          <dt class="font-medium text-gray-100">{{ props.wording.request.customOfferPrice }}</dt>
          <dd class="text-gray-200">{{ props.wording.request.customOfferText }}</dd>
        </div>
      </dl>
      <DibodevLink :link="`#${props.pricingAnchorId}`">
        <span>{{ props.wording.request.priceLink }}</span>
        <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
      </DibodevLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type {
  DibodevSiteAtelierRequestStatus,
  DibodevSiteAtelierTradeWording,
  DibodevSiteAtelierWording,
} from '~/core/types/DibodevSiteAtelier'
import type { DibodevSiteAtelierRequestStepProps } from '~/core/types/DibodevSiteAtelierRequestStep'
import { computed, ref } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevAlert from '~/components/feedback/DibodevAlert.vue'
import DibodevSiteAtelierStepHeading from '~/components/site-atelier/DibodevSiteAtelierStepHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import {
  SITE_ATELIER_EMAIL_MAX_LENGTH,
  SITE_ATELIER_PHONE_MAX_LENGTH,
  SITE_ATELIER_TEXT_FIELD_CLASS,
} from '~/core/constants/siteAtelier/siteAtelierShared'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

const EMAIL_ID: string = 'site-atelier-visitor-email'
const PHONE_ID: string = 'site-atelier-visitor-phone'
const HONEYPOT_ID: string = 'site-atelier-website-url'

/**
 * Final screen: the e-mail (and optional phone) where the demo link is sent, then the two prices and a link to them.
 */
const props: DibodevSiteAtelierRequestStepProps = defineProps({
  wording: {
    type: Object as PropType<DibodevSiteAtelierWording>,
    required: true,
  },
  tradeWording: {
    type: Object as PropType<DibodevSiteAtelierTradeWording>,
    required: true,
  },
  status: {
    type: String as PropType<DibodevSiteAtelierRequestStatus>,
    default: 'idle',
  },
  errorMessage: {
    type: String as PropType<string>,
    default: '',
  },
  wereAttachmentsDropped: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  pricingAnchorId: {
    type: String as PropType<string>,
    required: true,
  },
  businessName: {
    type: String as PropType<string>,
    default: '',
  },
})

const emit: (event: 'submit', email: string, phone: string, websiteUrl: string) => void = defineEmits<{
  (event: 'submit', email: string, phone: string, websiteUrl: string): void
}>()

const localePath = useLocalePath()

const heading: Ref<InstanceType<typeof DibodevSiteAtelierStepHeading> | null> = ref(null)
const email: Ref<string> = ref('')
const phone: Ref<string> = ref('')
const websiteUrl: Ref<string> = ref('')

const sentText: ComputedRef<string> = computed((): string =>
  QuizTextUtils.fillTemplate(props.wording.request.sentText, { businessName: props.businessName.trim() }),
)

/**
 * Moves the focus to the step title.
 * @returns {void}
 */
function focusTitle(): void {
  heading.value?.focusTitle()
}

defineExpose({ focusTitle })
</script>
