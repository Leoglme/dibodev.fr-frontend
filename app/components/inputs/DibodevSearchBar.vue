<template>
  <div class="grid h-fit w-full max-w-md grid-cols-[1fr_auto] items-center">
    <input
      ref="searchInput"
      type="search"
      @input="emitValue($event)"
      :value="props.value"
      class="focus:border-primary relative flex h-12 w-full items-center justify-center rounded-md rounded-r-none border-2 border-transparent bg-gray-600 pl-3 text-gray-100 outline-none placeholder:text-base placeholder:text-gray-300 hover:border-gray-300 focus:bg-gray-700"
      :placeholder="props.placeholder"
    />
    <div class="flex h-full items-center rounded-r-md bg-gray-700 p-2">
      <DibodevIcon :width="20" :height="20" name="Search" mode="stroke" color="#F5F4FB" style="top: 0" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, defineEmits, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import type { DibodevSearchBarProps } from '~/core/types/DibodevSearchBar'

/**
 * Type definitions for the DibodevSearchBar component props
 * @type {DibodevSearchBarProps}
 * @property {string} title - The title of the search bar for indicating the purpose of the search
 * @property {string} value - The value of the search input
 * @property {string} placeholder - The placeholder text for the search input
 */
const props: DibodevSearchBarProps = defineProps({
  title: {
    type: String,
    default: null,
  },
  value: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Rechercher (Ctrl + E)',
  },
})

/*EMIT*/
const emit: (event: 'update:value', value: string) => void = defineEmits<{
  (event: 'update:value', value: string): void
}>()

/*METHODS*/

/**
 * Emit the value of the search input
 * @param {Event} event - The input event
 * @returns {void}
 */
const emitValue: (event: Event) => void = (event: Event): void => {
  emit('update:value', (event.target as HTMLInputElement).value)
}
/*FOCUS ON CTRL+E*/
const searchInput: Ref<HTMLInputElement | null> = ref(null)

/**
 * Focus on the search input when the user presses Ctrl + E
 * @param {KeyboardEvent} event - The keyboard event
 * @returns {void}
 */
const handleKeyDown: (event: KeyboardEvent) => void = (event: KeyboardEvent): void => {
  if (event.ctrlKey && event.key.toLowerCase() === 'e') {
    event.preventDefault()
    if (searchInput.value) {
      searchInput.value.focus()
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>
