<template>
  <figure class="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
    <div class="relative aspect-[4/5] overflow-hidden rounded-xl border border-gray-300 bg-gray-800">
      <img
        :src="props.src"
        :srcset="props.srcset || undefined"
        :sizes="props.sizes || undefined"
        :alt="props.alt"
        :width="props.width"
        :height="props.height"
        fetchpriority="high"
        decoding="async"
        class="h-full w-full object-cover"
      />
    </div>
    <figcaption
      v-if="props.name"
      class="absolute inset-x-4 bottom-4 grid gap-0.5 rounded-lg border border-gray-300 bg-white/95 px-4 py-3"
    >
      <span class="text-base font-medium text-gray-100">{{ props.name }}</span>
      <span v-if="props.caption" class="text-sm text-gray-200">{{ props.caption }}</span>
    </figcaption>
  </figure>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevFramedPortraitProps } from '~/core/types/DibodevFramedPortrait'

/**
 * Portrait in a light frame with an optional name and caption card.
 */
const props: DibodevFramedPortraitProps = defineProps({
  src: {
    type: String as PropType<string>,
    required: true,
  },
  srcset: {
    type: String as PropType<string>,
    default: '',
  },
  sizes: {
    type: String as PropType<string>,
    default: '',
  },
  alt: {
    type: String as PropType<string>,
    required: true,
  },
  width: {
    type: Number as PropType<number>,
    required: true,
  },
  height: {
    type: Number as PropType<number>,
    required: true,
  },
  name: {
    type: String as PropType<string>,
    default: '',
  },
  caption: {
    type: String as PropType<string>,
    default: '',
  },
})
</script>
