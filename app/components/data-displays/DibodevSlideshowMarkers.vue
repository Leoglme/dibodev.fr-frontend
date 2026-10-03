<template>
  <ol class="flex">
    <li v-for="(slideName, index) in props.slideNames" :key="index">
      <button
        type="button"
        class="group focus-visible:ring-primary flex h-6 cursor-pointer items-center rounded-sm px-1 focus:outline-none focus-visible:ring-2"
        :aria-label="$t('photoSlideshow.goTo', { name: slideName })"
        :aria-current="index === props.activeIndex ? 'true' : undefined"
        @click="emit('select', index)"
      >
        <span
          class="relative block h-1 overflow-hidden rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none"
          :class="index === props.activeIndex ? MARKER_CLASSES[props.size].active : MARKER_CLASSES[props.size].waiting"
        >
          <span
            v-if="index === props.activeIndex"
            :key="`progress-${props.activeIndex}`"
            class="bg-primary absolute inset-0 origin-left"
            :class="props.isAutoplayRunning ? 'slideshow-progress' : ''"
            aria-hidden="true"
            @animationend="emit('progressEnd')"
          />
        </span>
      </button>
    </li>
  </ol>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevSlideshowMarkersProps, DibodevSlideshowMarkersSize } from '~/core/types/DibodevSlideshowMarkers'

/** One marker per slide under a slideshow: the active one fills up until the next slide, a click shows its slide. */
const props: DibodevSlideshowMarkersProps = defineProps({
  slideNames: {
    type: Array as PropType<string[]>,
    required: true,
  },
  activeIndex: {
    type: Number as PropType<number>,
    required: true,
  },
  isAutoplayRunning: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
  size: {
    type: String as PropType<DibodevSlideshowMarkersSize>,
    default: 'regular',
  },
})

const emit: {
  (event: 'select', index: number): void
  (event: 'progressEnd'): void
} = defineEmits<{
  (event: 'select', index: number): void
  (event: 'progressEnd'): void
}>()

const MARKER_CLASSES: Record<DibodevSlideshowMarkersSize, { active: string; waiting: string }> = {
  regular: {
    active: 'bg-primary/25 w-9',
    waiting: 'w-4 bg-gray-300 group-hover:bg-gray-400',
  },
  compact: {
    active: 'bg-primary/25 w-7 sm:w-9',
    waiting: 'w-3 bg-gray-300 group-hover:bg-gray-400 sm:w-4',
  },
}
</script>

<style scoped>
/* The duration is the time a slide stays on screen: the next one shows when the active marker is full. */
.slideshow-progress {
  animation: slideshow-progress 3s linear forwards;
  will-change: transform;
}

@keyframes slideshow-progress {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
</style>
