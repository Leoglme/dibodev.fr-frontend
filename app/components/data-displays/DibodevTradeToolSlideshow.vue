<template>
  <section
    v-if="props.slides.length > 0"
    class="mx-auto w-full max-w-md sm:max-w-lg lg:max-w-[34rem]"
    :aria-roledescription="$t('photoSlideshow.roleDescription')"
    :aria-label="props.accessibleName"
    @pointerenter="onPointerEnter"
    @pointerleave="onPointerLeave"
    @focusin="onFocusIn"
    @focusout="onFocusOut"
  >
    <div class="relative pt-5 pr-9 pl-7 xl:pl-11">
      <div class="relative">
        <div class="bg-accent-tint absolute -top-5 -right-9 -bottom-[8%] left-1/4 rounded-4xl" aria-hidden="true" />

        <div
          class="relative aspect-[12/13] overflow-hidden rounded-3xl rounded-tl-[5.25rem] bg-gray-800 xl:rounded-4xl xl:rounded-tl-[7.5rem]"
        >
          <img
            v-for="(slide, index) in renderedSlides"
            :key="slide.id"
            :src="slide.photoUrl"
            :srcset="slide.photoSrcset"
            :sizes="PHOTO_SIZES"
            :alt="slide.photoAlt"
            :width="PHOTO_WIDTH"
            :height="PHOTO_HEIGHT"
            :loading="index === 0 ? 'eager' : 'lazy'"
            :fetchpriority="index === 0 ? 'high' : 'low'"
            :aria-hidden="index !== activeIndex"
            decoding="async"
            draggable="false"
            class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out motion-reduce:transition-none"
            :class="index === activeIndex ? 'opacity-100' : 'opacity-0'"
          />
          <span
            :key="`trade-${activeSlide.id}`"
            class="slideshow-caption absolute top-4 right-4 inline-flex h-8 items-center gap-2 rounded-full bg-white/95 pr-3 pl-2.5 text-[13px] font-medium text-gray-100 shadow-[0_2px_8px_rgba(20,20,20,0.12)]"
          >
            <span class="bg-primary h-2 w-2 rounded-full" aria-hidden="true" />
            {{ activeSlide.tradeLabel }}
          </span>
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
          class="absolute -right-9 -bottom-7 aspect-[16/10] w-[70%] overflow-hidden rounded-[14px] border border-gray-300 bg-white shadow-[0_24px_48px_-12px_rgba(20,20,20,0.28),0_2px_6px_rgba(20,20,20,0.08)]"
        >
          <div
            v-for="(slide, index) in renderedSlides"
            :key="slide.id"
            :aria-hidden="index !== activeIndex"
            class="absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:transition-none"
            :class="[
              index === activeIndex ? 'opacity-100' : 'opacity-0',
              slide.hasTransparentScreenshot ? 'bg-surface-tint flex items-center justify-center' : '',
            ]"
          >
            <img
              :src="slide.screenshotUrl"
              :alt="slide.screenshotAlt"
              :width="SCREENSHOT_WIDTH"
              :height="slide.hasTransparentScreenshot ? undefined : SCREENSHOT_HEIGHT"
              :loading="index === 0 ? 'eager' : 'lazy'"
              decoding="async"
              draggable="false"
              :class="slide.hasTransparentScreenshot ? 'h-auto w-[92%]' : 'h-full w-full object-cover object-left-top'"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-13 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <p
        :key="`caption-${activeSlide.id}`"
        class="slideshow-caption min-h-[4.125rem] text-[15px] leading-[22px] text-gray-200"
        :aria-live="isAutoplayRunning ? 'off' : 'polite'"
      >
        <strong class="font-medium text-gray-100">{{ activeSlide.need }}</strong
        >{{ activeSlide.needSuffix }}
      </p>
      <ol v-if="hasSeveralSlides" class="-ml-1 flex shrink-0">
        <li v-for="(slide, index) in props.slides" :key="slide.id">
          <button
            type="button"
            class="group focus-visible:ring-primary flex h-6 cursor-pointer items-center rounded-sm px-1 focus:outline-none focus-visible:ring-2"
            :aria-label="$t('photoSlideshow.goTo', { name: slide.tradeLabel })"
            :aria-current="index === activeIndex ? 'true' : undefined"
            @click="goTo(index, 'marker')"
          >
            <span
              class="relative block h-1 overflow-hidden rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none"
              :class="
                index === activeIndex ? 'bg-primary/25 w-7 sm:w-9' : 'w-3 bg-gray-300 group-hover:bg-gray-400 sm:w-4'
              "
            >
              <span
                v-if="index === activeIndex"
                :key="`progress-${activeIndex}`"
                class="bg-primary absolute inset-0 origin-left"
                :class="isAutoplayRunning ? 'slideshow-progress' : ''"
                aria-hidden="true"
                @animationend="goTo(activeIndex + 1)"
              />
            </span>
          </button>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { DibodevPhotoSlideshowNavigation } from '~/core/types/DibodevPhotoSlideshow'
import type { DibodevTradeToolSlide, DibodevTradeToolSlideshowProps } from '~/core/types/DibodevTradeToolSlideshow'
import { useSlideshow } from '~/composables/useSlideshow'

/** Framed photo of a trade with the software built for it floating over its corner, fading from one slide to the next (auto-play, click or swipe), a caption and progress markers under it. */
const props: DibodevTradeToolSlideshowProps = defineProps({
  slides: {
    type: Array as PropType<DibodevTradeToolSlide[]>,
    required: true,
  },
  accessibleName: {
    type: String as PropType<string>,
    required: true,
  },
})

const emit: (event: 'navigate', navigation: DibodevPhotoSlideshowNavigation) => void = defineEmits<{
  (event: 'navigate', navigation: DibodevPhotoSlideshowNavigation): void
}>()

const PHOTO_WIDTH: number = 960
const PHOTO_HEIGHT: number = 1040
const PHOTO_SIZES: string =
  '(min-width: 1280px) 480px, (min-width: 1024px) 342px, (min-width: 640px) 470px, calc(100vw - 110px)'
const SCREENSHOT_WIDTH: number = 1000
const SCREENSHOT_HEIGHT: number = 625

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
  (): DibodevTradeToolSlide[] => props.slides,
  (navigation: DibodevPhotoSlideshowNavigation): void => emit('navigate', navigation),
)
</script>

<style scoped>
/* The duration is the time a slide stays on screen: the next one shows when the active marker is full. */
.slideshow-progress {
  animation: slideshow-progress 3s linear forwards;
  will-change: transform;
}

.slideshow-caption {
  animation: slideshow-caption-in 0.35s ease-out;
}

@keyframes slideshow-progress {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
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
