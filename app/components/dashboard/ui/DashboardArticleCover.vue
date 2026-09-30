<template>
  <span
    class="bg-surface-tint relative block shrink-0 overflow-hidden shadow-[0_0_0_1px_rgba(20,20,20,0.08)]"
    :class="FRAME_CLASSES[props.size]"
  >
    <img
      v-if="props.src && !hasImageFailed"
      :src="imageSrc"
      alt=""
      class="h-full w-full object-cover"
      loading="lazy"
      decoding="async"
      @error="hasImageFailed = true"
    />
    <span v-else class="absolute inset-0 grid place-items-center opacity-50" aria-hidden="true">
      <DibodevLogo :size="props.size === 'lg' ? 56 : 20" />
    </span>
  </span>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { DashboardArticleCoverProps, DashboardArticleCoverSize } from '~/core/types/DashboardArticleCover'
import { computed, ref } from 'vue'
import DibodevLogo from '~/components/branding/DibodevLogo.vue'

const props: DashboardArticleCoverProps = defineProps({
  src: {
    type: String as PropType<string | null>,
    default: null,
  },
  size: {
    type: String as PropType<DashboardArticleCoverSize>,
    default: 'sm',
  },
})

const FRAME_CLASSES: Record<DashboardArticleCoverSize, string> = {
  sm: 'h-10 w-16 rounded-md',
  md: 'h-12 w-[76px] rounded-md',
  lg: 'aspect-[5/2] w-full max-w-full rounded-xl',
}

const hasImageFailed: Ref<boolean> = ref(false)

const imageSrc: ComputedRef<string> = computed((): string => {
  const src: string = props.src ?? ''
  if (!src.includes('a.storyblok.com') || src.includes('/m/')) return src
  return props.size === 'lg'
    ? `${src}/m/1200x480/smart/filters:quality(75)`
    : `${src}/m/160x100/smart/filters:quality(70)`
})
</script>
