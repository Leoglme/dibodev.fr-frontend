<template>
  <button
    type="button"
    class="shrink-0 cursor-pointer rounded-md border border-gray-100 p-1.5 text-gray-100 transition-colors hover:bg-gray-700"
    :title="title"
    :aria-label="title"
    @click="onClick"
  >
    <Transition name="copy-feedback" mode="out-in">
      <!-- Icône Copy (inline SVG pour éviter toute dépendance) -->
      <svg
        v-if="!copied"
        key="copy"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
        class="block"
        :width="iconSize"
        :height="iconSize"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
      <!-- Icône Check (succès) -->
      <svg
        v-else
        key="check"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
        class="text-primary-light copy-check block"
        :width="iconSize"
        :height="iconSize"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </Transition>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Texte à copier dans le presse-papiers. */
    value: string
    /** Attribut title du bouton. */
    title?: string
    /** Taille de l'icône en pixels. */
    iconSize?: number
  }>(),
  {
    title: 'Copier',
    iconSize: 16,
  },
)

const copied: Ref<boolean> = ref(false)
const resetTimeoutId: Ref<ReturnType<typeof setTimeout> | null> = ref(null)

async function onClick(): Promise<void> {
  if (resetTimeoutId.value !== null) {
    clearTimeout(resetTimeoutId.value)
    resetTimeoutId.value = null
  }
  try {
    await navigator.clipboard.writeText(props.value)
    copied.value = true
    resetTimeoutId.value = setTimeout((): void => {
      copied.value = false
      resetTimeoutId.value = null
    }, 1600)
  } catch {
    copied.value = false
  }
}
</script>

<style scoped>
.copy-check {
  animation: copy-pop 0.35s ease-out;
}

@keyframes copy-pop {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.copy-feedback-enter-active,
.copy-feedback-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

.copy-feedback-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.copy-feedback-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
