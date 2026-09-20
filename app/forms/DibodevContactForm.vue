<template>
  <Form v-slot="{ meta }" ref="contactForm" class="flex flex-col gap-10 sm:gap-8" @submit="onSubmit">
    <div class="flex flex-col gap-4">
      <DibodevLabel id="projectType">{{ $t('contact.form.projectTypeLabel') }}</DibodevLabel>

      <DibodevTogglePillGroup v-model:value="projectType" :options="projectTypeOptions" />

      <Field name="type de projet" rules="required" as="input" type="hidden" v-model="projectType" />
      <ErrorMessage name="type de projet" class="text-sm text-red-500" />
    </div>

    <div class="flex flex-col gap-4">
      <DibodevLabel id="pagesRange">{{ $t('contact.form.pagesRangeLabel') }}</DibodevLabel>

      <DibodevTogglePillGroup v-model:value="pagesRange" :options="pagesOptions" />

      <Field name="nombre de pages" rules="required" as="input" type="hidden" v-model="pagesRange" />
      <ErrorMessage name="nombre de pages" class="text-sm text-red-500" />
    </div>

    <div class="flex flex-col gap-4">
      <DibodevLabel id="budgetRange">{{ $t('contact.form.budgetLabel') }}</DibodevLabel>

      <DibodevTogglePillGroup v-model:value="budgetRange" :options="budgetRangeOptions" :deselectable="true" />
    </div>

    <div class="grid grid-cols-1 gap-10 sm:gap-4 lg:grid-cols-2">
      <DibodevInput
        id="nom"
        autocomplete="name"
        :label="$t('contact.form.nameLabel')"
        :placeholder="$t('contact.form.namePlaceholder')"
        :value="fullName"
        rules="required"
        @update:value="fullName = $event.toString()"
      />

      <div class="flex flex-col gap-2">
        <DibodevInput
          id="telephone"
          type="tel"
          autocomplete="tel"
          :label="$t('contact.form.phoneLabel')"
          :placeholder="$t('contact.form.phonePlaceholder')"
          :value="phone"
          @update:value="phone = $event.toString()"
          @blur="onPhoneBlur"
        />
        <p class="text-sm text-gray-200">{{ $t('contact.form.phoneHelper') }}</p>
      </div>
    </div>

    <div>
      <DibodevInput
        id="email"
        autocomplete="email"
        :label="$t('contact.form.emailLabel')"
        :placeholder="$t('contact.form.emailPlaceholder')"
        :value="email"
        rules="required|email"
        @update:value="email = $event.toString()"
        @blur="onEmailBlur"
      />
    </div>

    <div>
      <DibodevInput
        id="message"
        :label="$t('contact.form.messageLabel')"
        :placeholder="$t('contact.form.messagePlaceholder')"
        :rows="6"
        :value="message"
        rules="required"
        @update:value="message = $event.toString()"
      />
    </div>

    <DibodevAlert v-if="errorMessage" :message="errorMessage" variant="error" dismissible @hide="errorMessage = null" />
    <DibodevAlert
      v-if="successMessage"
      :message="successMessage"
      variant="success"
      dismissible
      @hide="successMessage = null"
    />

    <ul
      class="flex flex-col gap-y-4 text-base font-medium text-gray-200 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4"
      role="list"
    >
      <li class="flex w-full items-center gap-2 sm:w-auto">
        <span class="text-primary-light" aria-hidden="true">✓</span>
        <span>{{ $t('contact.reassurance.response24h') }}</span>
      </li>
      <li class="flex w-full items-center gap-2 sm:w-auto">
        <span class="text-primary-light" aria-hidden="true">✓</span>
        <span>{{ $t('contact.reassurance.freeQuote') }}</span>
      </li>
      <li class="flex w-full items-center gap-2 sm:w-auto">
        <span class="text-primary-light" aria-hidden="true">✓</span>
        <span>{{ $t('contact.reassurance.noCommitment') }}</span>
      </li>
    </ul>

    <div class="flex justify-end">
      <DibodevButton type="submit" icon="Send" class="w-full lg:w-auto" :disabled="!meta.valid || isSubmitting">
        {{ isSubmitting ? $t('contact.form.submitting') : $t('contact.form.submit') }}
      </DibodevButton>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import type { FormContext } from 'vee-validate'
import DibodevLabel from '~/components/core/DibodevLabel.vue'
import DibodevInput from '~/components/core/DibodevInput.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevTogglePillGroup from '~/components/ui/DibodevTogglePillGroup.vue'
import DibodevAlert from '~/components/feedback/DibodevAlert.vue'
import type { Option } from '~/components/ui/DibodevTogglePillGroup.vue'
import { debounce } from 'lodash-es'
import type { ContactFormPayload } from '~~/server/types/mail/contact'
import { useTracking } from '~/composables/useTracking'
import { useLeadSource } from '~/composables/useLeadSource'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** Project type, pages range and budget range keys (values sent to API are translated via $t). */
const PROJECT_TYPE_KEYS = ['website', 'mobile', 'other'] as const
const PAGES_RANGE_KEYS = ['1_3', '3_6', '6_10', '10_plus'] as const
const BUDGET_RANGE_KEYS = ['under_1k', '1k_5k', '5k_10k', '10k_plus'] as const
type ProjectTypeKey = (typeof PROJECT_TYPE_KEYS)[number]
type PagesRangeKey = (typeof PAGES_RANGE_KEYS)[number]
type BudgetRangeKey = (typeof BUDGET_RANGE_KEYS)[number]

const { t } = useI18n()
const { track } = useTracking()
const { getLeadSource } = useLeadSource()

/** Options built from i18n (label = translated, value = key for stable binding across locale change). */
const projectTypeOptions: ComputedRef<Option[]> = computed((): Option[] =>
  PROJECT_TYPE_KEYS.map(
    (key: ProjectTypeKey): Option => ({
      label: t(`contact.form.projectType.${key}`),
      value: key,
    }),
  ),
)
const pagesOptions: ComputedRef<Option[]> = computed((): Option[] =>
  PAGES_RANGE_KEYS.map(
    (key: PagesRangeKey): Option => ({
      label: t(`contact.form.pagesRange.${key}`),
      value: key,
    }),
  ),
)
const budgetRangeOptions: ComputedRef<Option[]> = computed((): Option[] =>
  BUDGET_RANGE_KEYS.map(
    (key: BudgetRangeKey): Option => ({
      label: t(`contact.form.budgetRange.${key}`),
      value: key,
    }),
  ),
)

/** REFS */
const projectType: Ref<ProjectTypeKey | null> = ref<ProjectTypeKey>('website')
const pagesRange: Ref<PagesRangeKey | null> = ref<PagesRangeKey | null>(null)
const budgetRange: Ref<BudgetRangeKey | null> = ref<BudgetRangeKey | null>(null)
const fullName: Ref<string> = ref('')
const email: Ref<string> = ref('')
const phone: Ref<string> = ref('')
const message: Ref<string> = ref('')
const isSubmitting: Ref<boolean> = ref(false)
const errorMessage: Ref<string | null> = ref(null)
const successMessage: Ref<string | null> = ref(null)
const lastSentIntentKey: Ref<string | null> = ref(null)
const contactForm: Ref<FormContext | null> = ref(null)

/** METHODS */
/** Validates email format client-side */
function isValidEmail(email: string): boolean {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.trim())
}

/** Map project type key to translated value for API. */
function getProjectTypeDisplay(key: ProjectTypeKey | null): string | null {
  return key ? t(`contact.form.projectType.${key}`) : null
}

/** Map pages range key to translated value for API. */
function getPagesRangeDisplay(key: PagesRangeKey | null): string | null {
  return key ? t(`contact.form.pagesRange.${key}`) : null
}

/** Map budget range key to translated value for API. */
function getBudgetRangeDisplay(key: BudgetRangeKey | null): string {
  return key ? t(`contact.form.budgetRange.${key}`) : ''
}

/** Reset form fields */
function resetFormValues(): void {
  projectType.value = 'website'
  pagesRange.value = null
  budgetRange.value = null
  fullName.value = ''
  email.value = ''
  phone.value = ''
  message.value = ''
  lastSentIntentKey.value = null
  contactForm.value?.resetForm({
    values: {
      'type de projet': 'website',
      'nombre de pages': null,
      nom: '',
      email: '',
      telephone: '',
      message: '',
    },
  })
}

/**
 * Sends a contact intent notification with the contact info filled so far (a valid email and/or a phone), deduplicated on the pair.
 * @returns {Promise<void>} Resolves once the intent request settles.
 */
async function sendContactIntent(): Promise<void> {
  const currentEmail: string | null = isValidEmail(email.value) ? email.value.trim() : null
  const currentPhone: string | null = phone.value.trim() || null

  if (!currentEmail && !currentPhone) {
    return
  }

  const intentKey: string = `${currentEmail ?? ''}|${currentPhone ?? ''}`
  if (intentKey === lastSentIntentKey.value) {
    return
  }

  try {
    const { data, error } = await useFetch<{ message: string }>('/api/mail/contact-intent', {
      method: 'POST',
      body: { email: currentEmail, phone: currentPhone, source: getLeadSource() },
    })

    if (error.value) {
      console.error('sendContactIntent: Failed to send contact intent:', error.value)
      return
    }

    if (data.value) {
      lastSentIntentKey.value = intentKey
      track(TRACKING_EVENTS.contactIntentSubmitted, {
        hasEmail: currentEmail !== null,
        hasPhone: currentPhone !== null,
      })
    }
  } catch (err) {
    console.error('sendContactIntent: Unexpected error:', err)
  }
}

/** Debounced contact intent sender shared by the email and phone blur handlers. */
const debouncedSendContactIntent = debounce(sendContactIntent, 500)

/**
 * Handles email input blur to send a contact intent notification.
 * @returns {Promise<void>} Resolves once the debounced intent is triggered.
 */
async function onEmailBlur(): Promise<void> {
  await debouncedSendContactIntent()
}

/**
 * Handles phone input blur to send a contact intent notification.
 * @returns {Promise<void>} Resolves once the debounced intent is triggered.
 */
async function onPhoneBlur(): Promise<void> {
  await debouncedSendContactIntent()
}

/** Handles form submission */
async function onSubmit(): Promise<void> {
  errorMessage.value = null
  successMessage.value = null
  isSubmitting.value = true

  const payload: ContactFormPayload = {
    projectType: getProjectTypeDisplay(projectType.value),
    pagesRange: getPagesRangeDisplay(pagesRange.value),
    budget: getBudgetRangeDisplay(budgetRange.value),
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    phone: phone.value.trim() || null,
    message: message.value.trim(),
    source: getLeadSource(),
  }

  try {
    const { data, error } = await useFetch<{ message: string }>('/api/mail/contact', {
      method: 'POST',
      body: payload,
    })

    if (error.value) {
      const fallbackMessage: string =
        error.value.status === 400 ? t('contact.form.errorInvalid') : t('contact.form.errorServer')
      const errorResponseMessage: string =
        error.value.statusMessage || error.value.data?.message || error.value.message || fallbackMessage

      console.error('onSubmit: Failed to send contact form:', error.value)
      track(TRACKING_EVENTS.contactFormSubmitted, { status: 'error', errorStatus: error.value.status ?? null })
      errorMessage.value = errorResponseMessage
      isSubmitting.value = false
      return
    }

    if (data.value) {
      track(TRACKING_EVENTS.contactFormSubmitted, {
        status: 'success',
        projectType: payload.projectType,
        pagesRange: payload.pagesRange,
        budget: payload.budget,
        hasPhone: payload.phone !== null,
      })
      successMessage.value = t('contact.form.successMessage')
      resetFormValues()
    }
  } catch (err) {
    console.error('onSubmit: Unexpected error:', err)
    errorMessage.value = t('contact.form.errorUnexpected')
  } finally {
    isSubmitting.value = false
  }
}
</script>
