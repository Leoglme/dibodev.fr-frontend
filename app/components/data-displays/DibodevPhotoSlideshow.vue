<template>
  <section
    v-if="props.slides.length > 0"
    class="relative mx-auto w-full max-w-md pt-3.5 pr-3.5 pb-8 pl-7 sm:max-w-lg lg:max-w-[34rem] lg:pb-0 xl:pt-5 xl:pr-5 xl:pl-11"
    :aria-roledescription="$t('photoSlideshow.roleDescription')"
    :aria-label="props.accessibleName"
    @pointerenter="onPointerEnter"
    @pointerleave="onPointerLeave"
    @focusin="onFocusIn"
    @focusout="onFocusOut"
  >
    <div class="bg-accent-tint absolute inset-0 bottom-1/6 left-1/4 rounded-4xl lg:bottom-1/8" aria-hidden="true" />

    <div
      class="relative aspect-[12/13] overflow-hidden rounded-3xl rounded-tl-[5.25rem] bg-gray-800 xl:rounded-4xl xl:rounded-tl-[7.5rem]"
    >
      <img
        v-for="(slide, index) in renderedSlides"
        :key="slide.id"
        :src="slide.imageUrl"
        :srcset="slide.imageSrcset"
        :sizes="IMAGE_SIZES"
        :alt="slide.imageAlt"
        :width="IMAGE_WIDTH"
        :height="IMAGE_HEIGHT"
        :loading="index === 0 ? 'eager' : 'lazy'"
        :fetchpriority="index === 0 ? 'high' : 'low'"
        :aria-hidden="index !== activeIndex"
        decoding="async"
        draggable="false"
        class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out motion-reduce:transition-none"
        :class="index === activeIndex ? 'opacity-100' : 'opacity-0'"
      />
      <button
        v-if="hasSeveralSlides"
        type="button"
        class="focus-visible:ring-primary absolute inset-0 cursor-pointer touch-pan-y rounded-[inherit] select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-inset"
        :aria-label="$t('photoSlideshow.next')"
        @click="onPictureClick"
        @pointerdown="onPointerDown"
        @pointerup="onPointerUp"
        @pointercancel="onPointerCancel"
      />
    </div>

    <div
      class="absolute bottom-0 left-0 flex w-64 flex-col gap-0.5 rounded-2xl border border-gray-300 bg-white px-4 pt-3 pb-2 shadow-xl lg:bottom-7 xl:bottom-11 xl:w-72 xl:px-5 xl:pt-4 xl:pb-2.5"
    >
      <p class="text-muted text-xs leading-5 xl:text-sm">{{ props.captionIntro }}</p>
      <div
        :key="activeSlide.id"
        class="slideshow-caption flex flex-col gap-0.5"
        :aria-live="isAutoplayRunning ? 'off' : 'polite'"
      >
        <p class="truncate text-lg leading-6 font-medium text-gray-100 xl:text-xl xl:leading-7">
          {{ activeSlide.title }}
        </p>
        <p class="truncate text-sm leading-5 text-gray-200">{{ activeSlide.subtitle }}</p>
      </div>
      <DibodevSlideshowMarkers
        v-if="hasSeveralSlides"
        class="mt-1 -ml-1"
        :slideNames="slideNames"
        :activeIndex="activeIndex"
        :isAutoplayRunning="isAutoplayRunning"
        @select="goTo($event, 'marker')"
        @progressEnd="goTo(activeIndex + 1)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ComputedRef, PropType } from 'vue'
import type {
  DibodevPhotoSlideshowNavigation,
  DibodevPhotoSlideshowProps,
  DibodevPhotoSlideshowSlide,
} from '~/core/types/DibodevPhotoSlideshow'
import { computed } from 'vue'
import DibodevSlideshowMarkers from '~/components/data-displays/DibodevSlideshowMarkers.vue'
import { useSlideshow } from '~/composables/useSlideshow'

/** Framed photo fading from one slide to the next (auto-play, click or swipe), with a caption card and progress markers over it. */
const props: DibodevPhotoSlideshowProps = defineProps({
  slides: {
    type: Array as PropType<DibodevPhotoSlideshowSlide[]>,
    required: true,
  },
  accessibleName: {
    type: String as PropType<string>,
    required: true,
  },
  captionIntro: {
    type: String as PropType<string>,
    default: '',
  },
})

const emit: (event: 'navigate', navigation: DibodevPhotoSlideshowNavigation) => void = defineEmits<{
  (event: 'navigate', navigation: DibodevPhotoSlideshowNavigation): void
}>()

const IMAGE_WIDTH: number = 960
const IMAGE_HEIGHT: number = 1040
const IMAGE_SIZES: string =
  '(min-width: 1280px) 480px, (min-width: 1024px) 342px, (min-width: 640px) 470px, calc(100vw - 90px)'

const {
  activeIndex,
  activeSlide,
  renderedSlides,
  hasSeveralSlides,
  isAutoplayRunning,
  goTo,
  onPointerEnter,
  onPointerLeave,
  onFocusIn,
  onFocusOut,
  onPictureClick,
  onPointerDown,
  onPointerUp,
  onPointerCancel,
} = useSlideshow(
  (): DibodevPhotoSlideshowSlide[] => props.slides,
  (navigation: DibodevPhotoSlideshowNavigation): void => emit('navigate', navigation),
)

const slideNames: ComputedRef<string[]> = computed((): string[] =>
  props.slides.map((slide: DibodevPhotoSlideshowSlide): string => slide.title),
)
</script>

<style scoped>
.slideshow-caption {
  animation: slideshow-caption-in 0.35s ease-out;
}

@keyframes slideshow-caption-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .slideshow-caption {
    animation: none;
  }
}
</style>
