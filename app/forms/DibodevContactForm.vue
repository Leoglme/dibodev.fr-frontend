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

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <DibodevInput
        id="budget"
        :label="$t('contact.form.budgetLabel')"
        type="number"
        :min="0"
        :step="1"
        :placeholder="$t('contact.form.budgetPlaceholder')"
        :value="budget || undefined"
        rules="required|price_format|min_value:0|max_value:100000"
        @update:value="budget = toNumberLike($event.toString())"
      />
    </div>

    <div class="grid grid-cols-1 gap-10 sm:gap-4 lg:grid-cols-2">
      <DibodevInput
        id="nom"
        :label="$t('contact.form.nameLabel')"
        :placeholder="$t('contact.form.namePlaceholder')"
        :value="fullName"
        rules="required"
        @update:value="fullName = $event.toString()"
      />
      <DibodevInput
        id="email"
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

/** Project type and pages range keys (values sent to API are translated via $t). */
const PROJECT_TYPE_KEYS = ['website', 'mobile', 'other'] as const
const PAGES_RANGE_KEYS = ['1_3', '3_6', '6_10', '10_plus'] as const
type ProjectTypeKey = (typeof PROJECT_TYPE_KEYS)[number]
type PagesRangeKey = (typeof PAGES_RANGE_KEYS)[number]

const { t } = useI18n()

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

/** REFS */
const projectType: Ref<ProjectTypeKey | null> = ref<ProjectTypeKey>('website')
const pagesRange: Ref<PagesRangeKey | null> = ref<PagesRangeKey | null>(null)
const budget: Ref<number | null> = ref(null)
const fullName: Ref<string> = ref('')
const email: Ref<string> = ref('')
const message: Ref<string> = ref('')
const isSubmitting: Ref<boolean> = ref(false)
const errorMessage: Ref<string | null> = ref(null)
const successMessage: Ref<string | null> = ref(null)
const lastSentEmail: Ref<string | null> = ref(null)
const contactForm: Ref<FormContext | null> = ref(null)

/** METHODS */
function toNumberLike(value: string | number): number {
  if (typeof value === 'number') return value
  const normalized: string = value.replace(',', '.')
  const n: number = Number(normalized)
  return Number.isFinite(n) ? n : 0
}

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

/** Reset form fields */
function resetFormValues(): void {
  projectType.value = 'website'
  pagesRange.value = null
  budget.value = null
  fullName.value = ''
  email.value = ''
  message.value = ''
  lastSentEmail.value = null
  contactForm.value?.resetForm({
    values: {
      'type de projet': 'website',
      'nombre de pages': null,
      budget: null,
      nom: '',
      email: '',
      message: '',
    },
  })
}

/** Debounced function to handle email blur */
const debouncedOnEmailBlur = debounce(async () => {
  if (!isValidEmail(email.value) || email.value === lastSentEmail.value) {
    return
  }

  try {
    const { data, error } = await useFetch<{ message: string }>('/api/mail/contact-intent', {
      method: 'POST',
      body: { email: email.value.trim() },
    })

    if (error.value) {
      console.error('onEmailBlur: Failed to send contact intent:', error.value)
      return
    }

    if (data.value) {
      lastSentEmail.value = email.value.trim()
      console.log('Contact intent notification sent:', data.value)
    }
  } catch (err) {
    console.error('onEmailBlur: Unexpected error:', err)
  }
}, 500)

/** Handles email input blur to send contact intent notification */
async function onEmailBlur(): Promise<void> {
  await debouncedOnEmailBlur()
}

/** Handles form submission */
async function onSubmit(): Promise<void> {
  errorMessage.value = null
  successMessage.value = null
  isSubmitting.value = true

  const payload: ContactFormPayload = {
    projectType: getProjectTypeDisplay(projectType.value),
    pagesRange: getPagesRangeDisplay(pagesRange.value),
    budget: budget.value || 0,
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    message: message.value.trim(),
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
      errorMessage.value = errorResponseMessage
      isSubmitting.value = false
      return
    }

    if (data.value) {
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
