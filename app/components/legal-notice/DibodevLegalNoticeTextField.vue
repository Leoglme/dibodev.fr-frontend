<template>
  <div class="grid gap-2">
    <label :for="props.inputId" class="text-[15px] font-medium text-gray-100">{{ props.label }}</label>
    <input
      :id="props.inputId"
      :type="props.inputType"
      :value="props.value"
      :placeholder="props.placeholder"
      :maxlength="props.maxLength"
      :autocomplete="props.autocomplete"
      :aria-describedby="props.help ? `${props.inputId}-help` : undefined"
      class="focus:border-primary placeholder:text-muted flex h-12 w-full min-w-0 appearance-none rounded-lg border border-gray-400 bg-white px-3 text-base text-gray-100 transition-colors outline-none hover:border-gray-100 focus:shadow-[0_0_0_3px_rgba(111,95,224,0.15)]"
      @input="emitValue"
    />
    <p v-if="props.help" :id="`${props.inputId}-help`" class="text-muted text-[13.5px] leading-5">{{ props.help }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type {
  DibodevLegalNoticeTextFieldInputType,
  DibodevLegalNoticeTextFieldProps,
} from '~/core/types/DibodevLegalNoticeGenerator'

/** A labelled text input of the generator, with an optional help line read by screen readers. */
const props: DibodevLegalNoticeTextFieldProps = defineProps({
  inputId: {
    type: String as PropType<string>,
    required: true,
  },
  label: {
    type: String as PropType<string>,
    required: true,
  },
  value: {
    type: String as PropType<string>,
    required: true,
  },
  placeholder: {
    type: String as PropType<string>,
    default: '',
  },
  help: {
    type: String as PropType<string>,
    default: '',
  },
  inputType: {
    type: String as PropType<DibodevLegalNoticeTextFieldInputType>,
    default: 'text',
  },
  autocomplete: {
    type: String as PropType<string>,
    default: 'off',
  },
  maxLength: {
    type: Number as PropType<number>,
    default: 160,
  },
})

const emit: {
  (event: 'update:value', value: string): void
} = defineEmits<{
  (event: 'update:value', value: string): void
}>()

/**
 * Sends what the visitor types.
 * @param {Event} event - The input event.
 * @returns {void}
 */
function emitValue(event: Event): void {
  if (event.target instanceof HTMLInputElement) {
    emit('update:value', event.target.value)
  }
}
</script>
