<template>
  <Form class="grid gap-6" @submit="onSubmit">
    <div class="grid gap-1.5">
      <h3 ref="formTitle" tabindex="-1" class="text-lg font-medium text-gray-100 outline-none">{{ props.title }}</h3>
      <p class="text-[15px] leading-6 text-gray-200">{{ props.intro }}</p>
    </div>

    <div class="grid gap-x-4 gap-y-9 sm:grid-cols-2">
      <DibodevInput
        id="nom"
        class="sm:col-span-2"
        autocomplete="name"
        :label="t('quizTunnel.form.nameLabel')"
        :value="fullName"
        rules="required"
        @update:value="fullName = $event.toString()"
      />
      <DibodevInput
        id="email"
        type="email"
        autocomplete="email"
        :label="t('quizTunnel.form.emailLabel')"
        :value="email"
        rules="required|email"
        @update:value="email = $event.toString()"
        @blur="sendContactIntent"
      />
      <DibodevInput
        id="telephone"
        type="tel"
        autocomplete="tel"
        :label="t('quizTunnel.form.phoneLabel')"
        :value="phone"
        @update:value="phone = $event.toString()"
        @blur="sendContactIntent"
      />
    </div>

    <DibodevAlert v-if="errorMessage" :message="errorMessage" variant="error" />

    <div class="flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-between">
      <button
        type="button"
        class="text-primary hover:text-primary-dark inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg px-2 text-[15px] font-medium transition-colors"
        @click="emit('cancel')"
      >
        {{ t('quizTunnel.form.cancel') }}
      </button>
      <DibodevButton type="submit" icon="Send" iconPosition="right" class="w-full sm:w-auto" :disabled="isSubmitting">
        {{ isSubmitting ? t('quizTunnel.form.submitting') : t('quizTunnel.form.submit') }}
      </DibodevButton>
    </div>

    <p class="text-muted text-xs leading-5">
      {{ t('quizTunnel.form.privacyNote') }}
      <NuxtLink :to="localePath('/privacy')" class="underline underline-offset-2 transition-colors hover:text-gray-100">
        {{ t('footer.privacy') }}
      </NuxtLink>
    </p>
  </Form>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from 'vue'
import type { ContactFormPayload, ContactIntentPayload } from '~~/server/types/mail/contact'
import type { DibodevQuizLeadFormProps } from '~/core/types/DibodevQuizLeadForm'
import { ref } from 'vue'
import { Form } from 'vee-validate'
import DibodevAlert from '~/components/feedback/DibodevAlert.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevInput from '~/components/core/DibodevInput.vue'
import { PHONE_DISPLAY } from '~/config/contact'
import { useLeadSource } from '~/composables/useLeadSource'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

const EMAIL_REGEX: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TRACKING_LOCATION: string = 'tunnel'

const props: DibodevQuizLeadFormProps = defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },
  intro: {
    type: String as PropType<string>,
    default: '',
  },
  quizId: {
    type: String as PropType<string>,
    required: true,
  },
  verdict: {
    type: String as PropType<string>,
    required: true,
  },
  projectTypeLabel: {
    type: String as PropType<string>,
    required: true,
  },
  leadBudget: {
    type: String as PropType<string>,
    required: true,
  },
  leadMessage: {
    type: String as PropType<string>,
    required: true,
  },
})

const emit: {
  (event: 'cancel'): void
  (event: 'sent'): void
} = defineEmits<{
  (event: 'cancel'): void
  (event: 'sent'): void
}>()

const { t } = useI18n()
const localePath = useLocalePath()
const { track } = useTracking()
const { getLeadSource } = useLeadSource()

let lastSentIntentKey: string | null = null

/* REFS */
const formTitle: Ref<HTMLHeadingElement | null> = ref(null)
const fullName: Ref<string> = ref('')
const email: Ref<string> = ref('')
const phone: Ref<string> = ref('')
const isSubmitting: Ref<boolean> = ref(false)
const errorMessage: Ref<string | null> = ref(null)

/* METHODS */
/**
 * Reads the HTTP status of a failed request, when the error carries one.
 * @param {unknown} error - The error thrown by $fetch.
 * @returns {number | null} The status code, or null (network error, unexpected error).
 */
function statusCodeOf(error: unknown): number | null {
  if (typeof error !== 'object' || error === null || !('statusCode' in error)) return null
  return typeof error.statusCode === 'number' ? error.statusCode : null
}

/**
 * Warns Léo as soon as a valid email or a phone is typed, like the contact page does, once per pair.
 * @returns {Promise<void>} Resolves once the request settles.
 */
async function sendContactIntent(): Promise<void> {
  const currentEmail: string | null = EMAIL_REGEX.test(email.value.trim()) ? email.value.trim() : null
  const currentPhone: string | null = phone.value.trim() || null
  if (!currentEmail && !currentPhone) return
  const intentKey: string = `${currentEmail ?? ''}|${currentPhone ?? ''}`
  if (intentKey === lastSentIntentKey) return
  lastSentIntentKey = intentKey

  const payload: ContactIntentPayload = { email: currentEmail, phone: currentPhone, source: getLeadSource() }
  try {
    await $fetch('/api/mail/contact-intent', { method: 'POST', body: payload })
    track(TRACKING_EVENTS.contactIntentSubmitted, { hasEmail: currentEmail !== null, hasPhone: currentPhone !== null })
  } catch (error: unknown) {
    console.error('sendContactIntent: failed to send the contact intent:', error)
  }
}

/**
 * Sends the lead with the result and the answers (vee-validate only calls it once every rule passes).
 * @returns {Promise<void>} Resolves once the request settles.
 */
async function onSubmit(): Promise<void> {
  errorMessage.value = null
  isSubmitting.value = true
  const payload: ContactFormPayload = {
    projectType: props.projectTypeLabel,
    pagesRange: null,
    budget: props.leadBudget,
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    phone: phone.value.trim() || null,
    message: props.leadMessage,
    source: getLeadSource(),
  }

  try {
    await $fetch('/api/mail/contact', { method: 'POST', body: payload })
    track(TRACKING_EVENTS.tunnelLeadSubmitted, {
      tunnel: props.quizId,
      verdict: props.verdict,
      status: 'success',
      hasPhone: payload.phone !== null,
    })
    track(TRACKING_EVENTS.contactFormSubmitted, {
      status: 'success',
      projectType: payload.projectType,
      budget: payload.budget,
      hasPhone: payload.phone !== null,
      location: TRACKING_LOCATION,
    })
    emit('sent')
  } catch (error: unknown) {
    const errorStatus: number | null = statusCodeOf(error)
    console.error('onSubmit: failed to send the lead:', error)
    track(TRACKING_EVENTS.tunnelLeadSubmitted, {
      tunnel: props.quizId,
      verdict: props.verdict,
      status: 'error',
      hasPhone: payload.phone !== null,
      errorStatus,
    })
    track(TRACKING_EVENTS.contactFormSubmitted, { status: 'error', errorStatus, location: TRACKING_LOCATION })
    errorMessage.value = t('quizTunnel.form.error', { phone: PHONE_DISPLAY })
  } finally {
    isSubmitting.value = false
  }
}

/**
 * Moves the keyboard and screen reader focus to the form title, without scrolling.
 * @returns {void}
 */
function focusTitle(): void {
  formTitle.value?.focus({ preventScroll: true })
}

defineExpose({ focusTitle })
</script>
