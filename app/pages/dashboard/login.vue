<template>
  <div class="w-full max-w-md rounded-2xl border-2 border-gray-600 bg-gray-800 p-6 shadow-xl sm:p-8" data-aos="fade-up">
    <div class="mb-8 flex justify-center">
      <DibodevLogo :size="40" :large="true" />
    </div>
    <h1 class="text-center text-xl font-semibold text-gray-100 sm:text-2xl">
      {{ $t('dashboard.login.title') }}
    </h1>
    <Form class="mt-8 flex flex-col gap-6" @submit="onSubmit">
      <DibodevInput
        id="dashboard-password"
        :label="$t('dashboard.login.passwordPlaceholder')"
        type="password"
        :placeholder="$t('dashboard.login.passwordPlaceholder')"
        :value="password"
        rules="required"
        @update:value="password = $event.toString()"
      />
      <DibodevAlert
        v-if="errorMessage"
        :message="errorMessage"
        variant="error"
        dismissible
        @hide="errorMessage = null"
      />
      <DibodevButton type="submit" class="w-full" :disabled="isSubmitting">
        {{ isSubmitting ? '…' : $t('dashboard.login.submit') }}
      </DibodevButton>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { Form } from 'vee-validate'
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import DibodevInput from '~/components/core/DibodevInput.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevAlert from '~/components/feedback/DibodevAlert.vue'

definePageMeta({
  layout: 'login',
})

const localePath = useLocalePath()
const { t } = useI18n()

const password: Ref<string> = ref('')
const errorMessage: Ref<string | null> = ref(null)
const isSubmitting: Ref<boolean> = ref(false)

useHead(() => ({
  title: t('dashboard.login.title'),
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
}))

async function onSubmit(): Promise<void> {
  errorMessage.value = null
  isSubmitting.value = true
  try {
    await $fetch<{ ok: true }>('/api/auth/login', {
      method: 'POST',
      body: { password: password.value },
    })
    await navigateTo(localePath('/dashboard'))
  } catch {
    errorMessage.value = t('dashboard.login.errorInvalid')
  } finally {
    isSubmitting.value = false
  }
}
</script>
