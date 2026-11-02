<template>
  <div class="bg-surface-tint grid gap-5 rounded-xl p-5 sm:p-6">
    <template v-if="!isSent">
      <div class="grid gap-2">
        <h3 class="text-lg leading-snug font-medium text-gray-100">{{ props.wording.quoteTitle }}</h3>
        <p class="text-[15px] leading-6 text-gray-200">{{ props.wording.quoteIntro }}</p>
      </div>
      <Form class="grid gap-6" @submit="onSubmit">
        <div class="grid gap-y-9">
          <DibodevInput
            id="specification-quote-name"
            autocomplete="name"
            :label="props.wording.quoteNameLabel"
            :value="fullName"
            rules="required"
            @update:value="fullName = $event.toString()"
          />
          <DibodevInput
            id="specification-quote-email"
            type="email"
            autocomplete="email"
            :label="props.wording.quoteEmailLabel"
            :value="email"
            rules="required|email"
            @update:value="email = $event.toString()"
          />
          <DibodevInput
            id="specification-quote-phone"
            type="tel"
            autocomplete="tel"
            :label="props.wording.quotePhoneLabel"
            :value="phone"
            @update:value="phone = $event.toString()"
          />
        </div>
        <DibodevAlert v-if="errorMessage" :message="errorMessage" variant="error" />
        <DibodevButton type="submit" icon="Send" iconPosition="right" class="w-full" :disabled="isSubmitting">
          {{ isSubmitting ? props.wording.quoteSubmitting : props.wording.quoteSubmit }}
        </DibodevButton>
        <p class="text-muted text-sm leading-6">
          {{ props.wording.quotePrivacyNote }}
          <NuxtLink :to="localePath('/privacy')" class="text-primary underline underline-offset-4">
            {{ t('footer.privacy') }}
          </NuxtLink>
        </p>
      </Form>
    </template>
    <div v-else ref="sentMessage" tabindex="-1" class="grid gap-2 outline-none">
      <p class="flex items-center gap-2 text-base font-medium text-gray-100">
        <DibodevIcon
          name="CheckCircle"
          mode="stroke"
          :width="20"
          :height="20"
          class="shrink-0 text-[#1f7a4d]"
          aria-hidden="true"
        />
        {{ props.wording.quoteSentTitle }}
      </p>
      <p class="text-[15px] leading-6 text-gray-200">{{ props.wording.quoteSentText }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from 'vue'
import type { ContactFormPayload } from '~~/server/types/mail/contact'
import type {
  DibodevProjectSpecificationBudget,
  DibodevProjectSpecificationDocument,
  DibodevProjectSpecificationInterfaceWording,
  DibodevProjectSpecificationProjectType,
} from '~/core/types/DibodevProjectSpecification'
import type { DibodevProjectSpecificationQuoteFormProps } from '~/core/types/DibodevProjectSpecificationQuoteForm'
import { nextTick, ref } from 'vue'
import { Form } from 'vee-validate'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevInput from '~/components/core/DibodevInput.vue'
import DibodevAlert from '~/components/feedback/DibodevAlert.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { PHONE_DISPLAY } from '~/config/contact'
import { useLeadSource } from '~/composables/useLeadSource'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { ProjectSpecificationDocumentUtils } from '~/core/utils/ProjectSpecificationDocumentUtils'
import { SiteCheckErrorUtils } from '~/core/utils/SiteCheckErrorUtils'

/** Sent through the contact form pipeline: Léo gets the notification, the visitor an acknowledgement. */
const props: DibodevProjectSpecificationQuoteFormProps = defineProps({
  wording: {
    type: Object as PropType<DibodevProjectSpecificationInterfaceWording>,
    required: true,
  },
  specification: {
    type: Object as PropType<DibodevProjectSpecificationDocument>,
    required: true,
  },
  projectType: {
    type: String as PropType<DibodevProjectSpecificationProjectType>,
    required: true,
  },
  projectTypeLabel: {
    type: String as PropType<string>,
    required: true,
  },
  budget: {
    type: String as PropType<DibodevProjectSpecificationBudget | null>,
    default: null,
  },
  budgetLabel: {
    type: String as PropType<string>,
    default: '',
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const { track } = useTracking()
const { getLeadSource } = useLeadSource()

/* REFS */
const fullName: Ref<string> = ref('')
const email: Ref<string> = ref('')
const phone: Ref<string> = ref('')
const isSubmitting: Ref<boolean> = ref(false)
const isSent: Ref<boolean> = ref(false)
const errorMessage: Ref<string | null> = ref(null)
const sentMessage: Ref<HTMLDivElement | null> = ref(null)

/* METHODS */
/**
 * Sends the specification and the contact details (vee-validate only calls it once every rule passes).
 * @returns {Promise<void>} Resolves once the request settles.
 */
async function onSubmit(): Promise<void> {
  errorMessage.value = null
  isSubmitting.value = true
  const payload: ContactFormPayload = {
    projectType: props.projectTypeLabel,
    pagesRange: null,
    budget: props.budgetLabel,
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    phone: phone.value.trim() || null,
    message: ProjectSpecificationDocumentUtils.toPlainText(props.specification),
    source: getLeadSource(),
    locale: locale.value,
    pagePath: route.path,
  }

  try {
    await $fetch('/api/mail/contact', { method: 'POST', body: payload })
    track(TRACKING_EVENTS.projectSpecificationQuoteRequested, {
      projectType: props.projectType,
      budget: props.budget,
      status: 'success',
      hasPhone: payload.phone !== null,
    })
    track(TRACKING_EVENTS.contactFormSubmitted, {
      status: 'success',
      projectType: payload.projectType,
      budget: payload.budget,
      hasPhone: payload.phone !== null,
      location: props.trackingLocation,
    })
    isSent.value = true
    await nextTick()
    sentMessage.value?.focus({ preventScroll: true })
  } catch (error: unknown) {
    const errorStatus: number | null = SiteCheckErrorUtils.readStatus(error)
    console.error('onSubmit: failed to send the specification:', error)
    track(TRACKING_EVENTS.projectSpecificationQuoteRequested, {
      projectType: props.projectType,
      budget: props.budget,
      status: 'error',
      hasPhone: payload.phone !== null,
      errorStatus,
    })
    track(TRACKING_EVENTS.contactFormSubmitted, { status: 'error', errorStatus, location: props.trackingLocation })
    errorMessage.value = props.wording.quoteError.replace('{phone}', PHONE_DISPLAY)
  } finally {
    isSubmitting.value = false
  }
}
</script>
