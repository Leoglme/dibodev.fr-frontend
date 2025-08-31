<template>
  <Form v-slot="{ meta }" class="flex flex-col gap-10 sm:gap-8" @submit="onSubmit">
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
        :value="budget"
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

    <div class="flex justify-end">
      <DibodevButton type="submit" icon="Send" class="w-full lg:w-auto" :disabled="!meta.valid">
        Envoyer mon message
      </DibodevButton>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import DibodevLabel from '~/components/core/DibodevLabel.vue'
import DibodevInput from '~/components/core/DibodevInput.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevTogglePillGroup from '~/components/ui/DibodevTogglePillGroup.vue'
import type { Option } from '~/components/ui/DibodevTogglePillGroup.vue'

/** DATAS */
const projectTypeOptions: Option[] = ['Site web', 'Application mobile', 'Autre']
const pagesOptions: Option[] = ['1–3', '3–6', '6–10', '10+']

/** REFS */
const projectType: Ref<string | null> = ref('Site web')
const pagesRange: Ref<string | null> = ref(null)
const budget: Ref<number> = ref(0)
const fullName: Ref<string> = ref('')
const email: Ref<string> = ref('')
const message: Ref<string> = ref('')

/** METHODS */
function toNumberLike(value: string | number): number {
  if (typeof value === 'number') return value
  const normalized: string = value.replace(',', '.')
  const n: number = Number(normalized)
  return Number.isFinite(n) ? n : 0
}

/** Validation + Submit */
const onSubmit: () => void = (): void => {
  // Payload final
  const payload = {
    projectType: projectType.value,
    pagesRange: pagesRange.value,
    budget: Number(budget.value),
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    message: message.value.trim(),
  }

  // emit('submit', payload)
  console.log('Contact form payload:', payload)
  alert('Formulaire valide ✅ — prêt à être envoyé.')
}
</script>
