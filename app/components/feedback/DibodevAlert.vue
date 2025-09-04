<template>
  <div v-if="message" :class="alertClasses" role="alert" class="flex items-center rounded-lg border p-4">
    <DibodevIcon v-if="computedIcon" :name="computedIcon" class="mr-3 -mb-1" :class="iconColor" mode="stroke" />

    <span class="flex-1">{{ message }}</span>

    <button
      v-if="dismissible"
      @click="hideAlert"
      class="ml-2 text-current hover:opacity-80"
      aria-label="Fermer l'alerte"
    >
      <DibodevIcon name="X" class="-mb-1" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue'
import type { PropType, ComputedRef } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { iconsList } from '~/core/types/DibodevIcon'
import type { DibodevAlertProps, DibodevAlertVariant } from '~/core/types/DibodevAlert'

/**
 * Type definitions for the DibodevAlert component props
 * @type {DibodevAlertProps}
 * @property {string} message - The message to display in the alert
 * @property {string} icon - The icon to display in the alert
 * @property {boolean} dismissible - Whether the alert can be dismissed
 * @property {string} variant - The variant of the alert
 */
const props: DibodevAlertProps = defineProps({
  message: {
    type: String,
    required: true,
  },
  icon: {
    type: String as PropType<(typeof iconsList)[number]>,
    default: null,
  },
  dismissible: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as PropType<DibodevAlertVariant>,
    default: 'info',
  },
})

/*EMIT*/
const emit: (event: 'hide') => void = defineEmits<{
  (event: 'hide'): void
}>()

/* COMPUTED */
const alertClasses: ComputedRef<string> = computed(() => {
  switch (props.variant) {
    case 'error':
      return 'bg-red-100 border-red-400 text-red-700'
    case 'success':
      return 'bg-green-100 border-green-400 text-green-700'
    case 'warning':
      return 'bg-yellow-100 border-yellow-400 text-yellow-700'
    case 'info':
      return 'bg-blue-100 border-blue-400 text-blue-700'
    default:
      return 'bg-gray-100 border-gray-400 text-gray-700'
  }
})

const iconColor: ComputedRef<string> = computed(() => {
  switch (props.variant) {
    case 'error':
      return 'text-red-600'
    case 'success':
      return 'text-green-600'
    case 'warning':
      return 'text-yellow-600'
    case 'info':
      return 'text-blue-600'
    default:
      return 'text-gray-600'
  }
})

const computedIcon: ComputedRef<string> = computed(() => {
  if (props.icon) return props.icon
  switch (props.variant) {
    case 'error':
      return 'AlertCircle'
    case 'success':
      return 'CheckCircle'
    case 'warning':
      return 'XCircle'
    case 'info':
      return 'Info'
    default:
      return ''
  }
})

/* METHODS */
/**
 * Method to hide the alert
 * @returns {void} This function does not return a value.
 */
const hideAlert: () => void = (): void => {
  emit('hide')
}
</script>
