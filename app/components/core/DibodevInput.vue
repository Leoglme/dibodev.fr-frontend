<template>
  <div class="relative flex flex-col gap-4">
    <DibodevLabel v-if="props.label" :id="props.id">
      {{ props.label }}
      <span v-if="rules && rules.includes('required')" class="ml-1 text-red-400"> * </span>
    </DibodevLabel>

    <Field
      :rows="rows"
      :rules="rules"
      :validateOnInput="true"
      v-slot="{ meta, field }"
      :name="props.id"
      :type="typeRef"
      :value="props.value"
      @input="emit('update:value', $event.target.value, $event)"
      @blur="emit('blur')"
      :placeholder="props.placeholder || undefined"
    >
      <textarea
        v-if="rows"
        :rows="rows"
        v-bind="field"
        :id="props.id"
        :value="props.value"
        @blur="emit('blur')"
        class="focus:border-primary relative flex w-full items-center justify-center rounded border-2 bg-gray-600 pt-3 pl-3 text-gray-100 outline-none placeholder:text-base placeholder:text-gray-300 focus:bg-gray-800"
        :placeholder="props.placeholder || undefined"
        :class="{
          'pr-3': typeRef === 'number',
          'border-[#EC364B]': meta.validated && !meta.valid,
          'border-transparent': !meta.validated || meta.valid,
          'hover:border-gray-300': !meta.validated || meta.valid,
        }"
      />
      <input
        v-else
        v-bind="field"
        :type="typeRef"
        :id="props.id"
        :value="props.value"
        :min="props.min ? props.min.toString() : undefined"
        :step="props.step ? props.step.toString() : undefined"
        @blur="emit('blur')"
        class="focus:border-primary relative flex h-12 w-full appearance-none items-center justify-center rounded border-2 bg-gray-600 pl-3 text-gray-100 outline-none placeholder:text-base placeholder:text-gray-300 focus:bg-gray-800"
        :placeholder="props.placeholder || undefined"
        :class="{
          'pr-3': typeRef === 'number',
          'border-[#EC364B]': meta.validated && !meta.valid,
          'border-transparent': !meta.validated || meta.valid,
          'hover:border-gray-300': !meta.validated || meta.valid,
        }"
      />
    </Field>

    <div
      :class="props.label ? 'top-10' : 'top-2'"
      class="absolute right-4 cursor-pointer"
      v-if="type === 'password'"
      @click.prevent="handleTogglePassword"
    >
      <DibodevIcon
        v-if="!togglePassword"
        class="-bottom-1"
        title="Afficher le mot de passe"
        name="Eye"
        mode="stroke"
        color="#908e97"
      />
      <DibodevIcon
        v-if="togglePassword"
        class="-bottom-1"
        title="Masquer le mot de passe"
        name="EyeOff"
        mode="stroke"
        color="#908e97"
      />
    </div>
    <ErrorMessage class="slide-from-left error-message text-sm text-red-500" :name="props.id" />
  </div>
</template>

<script lang="ts" setup>
import DibodevIcon from '@/components/ui/DibodevIcon.vue'
import DibodevLabel from '@/components/core/DibodevLabel.vue'
import { Field, ErrorMessage } from 'vee-validate'
import { ref } from 'vue'
import type { Ref, PropType } from 'vue'
import type { InputTypeHTMLAttribute } from 'vue'
import type { DibodevInputProps } from '~/core/types/DibodevInput'

/* PROPS */
/**
 * Type definitions for the dibodev input component props
 * @type {DibodevInputProps}
 * @property {string | null} placeholder - The input placeholder
 * @property {string | number} value - The input value
 * @property {number | null} rows - The input rows
 * @property {string} id - The input id
 * @property {string} type - The input type
 * @property {string | null} rules - The input rules
 * @property {string | null} label - The input label
 * @property {number | null} min - The input min value
 * @property {number | null} step - The input step value
 */
const props: DibodevInputProps = defineProps({
  placeholder: { type: String, default: null },
  value: { type: [String, Number], default: '' },
  rows: { type: Number, default: null },
  id: { type: String, default: 'field' },
  type: { type: String as PropType<InputTypeHTMLAttribute>, default: 'text' },
  rules: { type: String, default: null },
  label: { type: String, default: null },
  min: { type: Number, default: null },
  step: { type: Number, default: null },
})

/*EMIT*/
const emit: {
  (event: 'update:value', value: string | number, inputEvent: InputEvent): void
  (event: 'blur'): void
} = defineEmits<{
  (event: 'update:value', value: string | number, inputEvent: InputEvent): void
  (event: 'blur'): void
}>()

/*REFS*/
const togglePassword: Ref<boolean> = ref(false)
const typeRef: Ref<InputTypeHTMLAttribute> = ref(props.type)

/*METHODS*/
/**
 * Toggle the password visibility state and update the input type accordingly.
 * @returns {void} This function does not return a value.
 */
const handleTogglePassword: () => void = (): void => {
  togglePassword.value = !togglePassword.value
  typeRef.value = togglePassword.value ? 'text' : 'password'
}
</script>

<style scoped>
:focus-visible {
  outline: none;
}

.slide-from-left {
  animation: slideFromLeft 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes slideFromLeft {
  0% {
    opacity: 0;
    filter: alpha(opacity=0);
    transform: translate3d(-40px, 0, 0);
  }
  100% {
    opacity: 1;
    filter: alpha(opacity=100);
    transform: translate3d(0, 0, 0);
  }
}
</style>
