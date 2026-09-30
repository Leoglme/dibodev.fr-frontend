<template>
  <article class="service-card flex h-full flex-col gap-5 rounded-xl border border-gray-300 bg-white p-6 sm:p-7">
    <div class="flex h-12 w-12 items-center justify-center" :style="{ color: props.accentColor }" aria-hidden="true">
      <slot name="icon" />
    </div>

    <div class="grid gap-2.5">
      <h3 class="text-lg leading-snug font-medium text-gray-100">
        {{ props.title }}
      </h3>
      <p class="text-[15px] leading-6 text-gray-200">
        {{ props.description }}
      </p>
    </div>

    <p v-if="props.price" class="mt-auto border-t border-gray-300 pt-4 text-[15px] font-medium text-gray-100">
      {{ props.price }}
    </p>
    <div v-else-if="$slots.footer" class="mt-auto border-t border-gray-300 pt-4">
      <slot name="footer" />
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevServiceItemProps } from '~/core/types/DibodevServiceItem'

/**
 * Service card: line icon drawn in the card's accent colour, title, description and an optional price line.
 */
const props: DibodevServiceItemProps = defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },
  description: {
    type: String as PropType<string>,
    required: true,
  },
  price: {
    type: String as PropType<string>,
    default: '',
  },
  accentColor: {
    type: String as PropType<string>,
    default: '#5b4bd0',
  },
})
</script>

<style scoped>
.service-card {
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.service-card:hover {
  border-color: rgba(111, 95, 224, 0.45);
  box-shadow: 0 14px 36px rgba(111, 95, 224, 0.1);
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .service-card {
    transition: none;
  }

  .service-card:hover {
    transform: none;
  }
}
</style>
