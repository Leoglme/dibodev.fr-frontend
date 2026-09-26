<template>
  <figure class="relative w-28 sm:w-36 lg:mx-auto lg:w-full lg:max-w-md">
    <div class="bg-primary/30 absolute -inset-8 hidden rounded-full blur-3xl lg:block" aria-hidden="true" />
    <div
      class="border-primary-light/60 relative aspect-square overflow-hidden rounded-full border-2 bg-black lg:aspect-4/5 lg:rounded-3xl lg:border-gray-600"
    >
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
      class="absolute inset-x-4 bottom-4 hidden gap-0.5 rounded-2xl border border-gray-600 bg-gray-900/75 px-5 py-4 backdrop-blur-md lg:grid"
    >
      <span class="text-base font-semibold text-gray-100">{{ props.name }}</span>
      <span v-if="props.caption" class="text-sm text-gray-200">{{ props.caption }}</span>
    </figcaption>
  </figure>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevFramedPortraitProps } from '~/core/types/DibodevFramedPortrait'

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
