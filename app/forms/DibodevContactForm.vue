<template>
  <Form v-slot="{ meta }" ref="contactForm" class="flex flex-col gap-10 sm:gap-8" @submit="onSubmit">
    <div class="flex flex-col gap-4">
      <DibodevLabel id="projectType">Comment puis-je vous aider ?</DibodevLabel>

      <DibodevTogglePillGroup v-model:value="projectType" :options="projectTypeOptions" />

      <Field name="type de projet" rules="required" as="input" type="hidden" v-model="projectType" />
      <ErrorMessage name="type de projet" class="text-sm text-red-500" />
    </div>

    <div class="flex flex-col gap-4">
      <DibodevLabel id="pagesRange">Combien de pages souhaitez-vous ?</DibodevLabel>

      <DibodevTogglePillGroup v-model:value="pagesRange" :options="pagesOptions" />

      <Field name="nombre de pages" rules="required" as="input" type="hidden" v-model="pagesRange" />
      <ErrorMessage name="nombre de pages" class="text-sm text-red-500" />
    </div>

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <DibodevInput
        id="budget"
        label="Budget estimé"
        type="number"
        :min="0"
        :step="1"
        placeholder="0"
        :value="budget || undefined"
        rules="required|price_format|min_value:0|max_value:100000"
        @update:value="budget = toNumberLike($event.toString())"
      />
    </div>

    <div class="grid grid-cols-1 gap-10 sm:gap-4 lg:grid-cols-2">
      <DibodevInput
        id="nom"
        label="Nom"
        placeholder="John Doe"
        :value="fullName"
        rules="required"
        @update:value="fullName = $event.toString()"
      />
      <DibodevInput
        id="email"
        label="Email"
        placeholder="email@dibodev.com"
        :value="email"
        rules="required|email"
        @update:value="email = $event.toString()"
        @blur="onEmailBlur"
      />
    </div>

    <div>
      <DibodevInput
        id="message"
        label="Parlez-moi de votre projet"
        placeholder="Votre message..."
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
        {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer mon message' }}
      </DibodevButton>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import type { FormContext } from 'vee-validate'
import DibodevLabel from '~/components/core/DibodevLabel.vue'
import DibodevInput from '~/components/core/DibodevInput.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevTogglePillGroup from '~/components/ui/DibodevTogglePillGroup.vue'
import DibodevAlert from '~/components/feedback/DibodevAlert.vue'
import type { Option } from '~/components/ui/DibodevTogglePillGroup.vue'
import { debounce } from 'lodash-es'
import type { ContactFormPayload, ProjectType, PagesRange } from '~~/server/types/mail/contact'

/** DATAS */
const projectTypeOptions: Option[] = ['Site web', 'Application mobile', 'Autre']
const pagesOptions: Option[] = ['1–3', '3–6', '6–10', '10+']

/** REFS */
const projectType: Ref<ProjectType | null> = ref('Site web')
// const pagesRange: Ref<PagesRange | null> = ref(null)
// const budget: Ref<number | null> = ref(null)
// const fullName: Ref<string> = ref('')
// const email: Ref<string> = ref('')
// const message: Ref<string> = ref('')
const pagesRange: Ref<PagesRange | null> = ref('3–6')
const budget: Ref<number | null> = ref(2000)
const fullName: Ref<string> = ref('leo guillaume')
const email: Ref<string> = ref('toto@gmail.com')
const message: Ref<string> = ref('mon message')
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

/** Reset form fields */
function resetFormValues(): void {
  projectType.value = 'Site web'
  pagesRange.value = null
  budget.value = null
  fullName.value = ''
  email.value = ''
  message.value = ''
  lastSentEmail.value = null
  contactForm.value?.resetForm({
    values: {
      'type de projet': 'Site web',
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
    projectType: projectType.value,
    pagesRange: pagesRange.value,
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
        error.value.status === 400
          ? 'Le formulaire est invalide. Veuillez vérifier vos informations.'
          : 'Erreur serveur. Veuillez réessayer plus tard.'
      const errorResponseMessage: string =
        error.value.statusMessage || error.value.data?.message || error.value.message || fallbackMessage

      console.error('onSubmit: Failed to send contact form:', error.value)
      errorMessage.value = errorResponseMessage
      isSubmitting.value = false
      return
    }

    if (data.value) {
      successMessage.value =
        'Votre message a été envoyé avec succès ! Un accusé de réception vous a été envoyé par email.'
      resetFormValues()
    }
  } catch (err) {
    console.error('onSubmit: Unexpected error:', err)
    errorMessage.value = 'Erreur inattendue. Veuillez réessayer plus tard.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
