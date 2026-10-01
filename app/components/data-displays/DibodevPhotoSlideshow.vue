<template>
  <section
    v-if="props.slides.length > 0"
    class="relative mx-auto w-full max-w-md pt-3.5 pr-3.5 pb-8 pl-7 sm:max-w-lg lg:max-w-[34rem] lg:pb-0 xl:pt-5 xl:pr-5 xl:pl-11"
    :aria-roledescription="$t('photoSlideshow.roleDescription')"
    :aria-label="props.accessibleName"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
    @focusin="isPaused = true"
    @focusout="isPaused = false"
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
        @click="onPhotoClick"
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
      <ol v-if="hasSeveralSlides" class="mt-1 flex">
        <li v-for="(slide, index) in props.slides" :key="slide.id">
          <button
            type="button"
            class="group focus-visible:ring-primary flex h-6 cursor-pointer items-center rounded-sm pr-1.5 focus:outline-none focus-visible:ring-2"
            :aria-label="$t('photoSlideshow.goTo', { name: slide.title })"
            :aria-current="index === activeIndex ? 'true' : undefined"
            @click="goTo(index, 'marker')"
          >
            <span
              class="relative block h-1 w-5 overflow-hidden rounded-full bg-gray-300 transition-colors group-hover:bg-gray-400"
            >
              <span v-if="index < activeIndex" class="bg-primary absolute inset-0" aria-hidden="true" />
              <span
                v-else-if="index === activeIndex"
                :key="`progress-${activeIndex}`"
                class="bg-primary absolute inset-0 origin-left"
                :class="isAutoplayEnabled ? 'slideshow-progress' : ''"
                :style="progressStyle"
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
import { computed, onMounted, ref, watch } from 'vue'
import type { ComputedRef, PropType, Ref } from 'vue'
import type {
  DibodevPhotoSlideshowNavigation,
  DibodevPhotoSlideshowNavigationMethod,
  DibodevPhotoSlideshowProps,
  DibodevPhotoSlideshowSlide,
} from '~/core/types/DibodevPhotoSlideshow'

type SwipeStartPoint = { x: number; y: number }

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

/** Time a slide stays on screen before the next one shows (the active marker fills up over this duration). */
const AUTOPLAY_INTERVAL_MS: number = 4000
const SWIPE_MIN_DISTANCE_PX: number = 40
/** A swipe is followed by a click on some browsers: it is ignored during this delay. */
const CLICK_AFTER_SWIPE_DELAY_MS: number = 400
const IMAGE_WIDTH: number = 960
const IMAGE_HEIGHT: number = 1040
const IMAGE_SIZES: string =
  '(min-width: 1280px) 480px, (min-width: 1024px) 342px, (min-width: 640px) 470px, calc(100vw - 90px)'

let swipeStartPoint: SwipeStartPoint | null = null
let lastSwipeTimestamp: number = 0

/* REFS */
const activeIndex: Ref<number> = ref(0)
const isPaused: Ref<boolean> = ref(false)
const isAutoplayEnabled: Ref<boolean> = ref(false)
const hasMounted: Ref<boolean> = ref(false)

/* COMPUTED */
const hasSeveralSlides: ComputedRef<boolean> = computed((): boolean => props.slides.length > 1)

const activeSlide: ComputedRef<DibodevPhotoSlideshowSlide> = computed(
  (): DibodevPhotoSlideshowSlide => props.slides[activeIndex.value] ?? props.slides[0]!,
)

/** Only the first photo is rendered on the server, so the other ones never delay it. */
const renderedSlides: ComputedRef<DibodevPhotoSlideshowSlide[]> = computed((): DibodevPhotoSlideshowSlide[] =>
  hasMounted.value ? props.slides : props.slides.slice(0, 1),
)

const isAutoplayRunning: ComputedRef<boolean> = computed((): boolean => isAutoplayEnabled.value && !isPaused.value)

const progressStyle: ComputedRef<Record<string, string> | undefined> = computed(
  (): Record<string, string> | undefined =>
    isAutoplayEnabled.value
      ? {
          animationDuration: `${AUTOPLAY_INTERVAL_MS}ms`,
          animationPlayState: isPaused.value ? 'paused' : 'running',
        }
      : undefined,
)

/* METHODS */
/**
 * Shows a slide, wrapping around at both ends, and reports the change when the visitor made it.
 * @param {number} index - Target slide index (may be out of range).
 * @param {DibodevPhotoSlideshowNavigationMethod | null} [method=null] - How the visitor asked for it, or null for auto-play.
 * @returns {void}
 */
function goTo(index: number, method: DibodevPhotoSlideshowNavigationMethod | null = null): void {
  const count: number = props.slides.length
  if (count === 0) return
  activeIndex.value = ((index % count) + count) % count
  if (method) emit('navigate', { slideId: activeSlide.value.id, method })
}

/**
 * Enables auto-play when there are several slides and the visitor accepts motion (client only).
 * @returns {void}
 */
function refreshAutoplay(): void {
  if (!import.meta.client) return
  const prefersReducedMotion: boolean = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  isAutoplayEnabled.value = !prefersReducedMotion && hasSeveralSlides.value
}

/**
 * Shows the next slide on a click on the photo, unless the click only ends a swipe.
 * @returns {void}
 */
function onPhotoClick(): void {
  if (performance.now() - lastSwipeTimestamp < CLICK_AFTER_SWIPE_DELAY_MS) return
  goTo(activeIndex.value + 1, 'photo')
}

/**
 * Remembers where a pointer gesture starts on the photo.
 * @param {PointerEvent} event - The pointer down event.
 * @returns {void}
 */
function onPointerDown(event: PointerEvent): void {
  swipeStartPoint = { x: event.clientX, y: event.clientY }
}

/**
 * Shows the next or previous slide when the gesture that ends is a horizontal swipe.
 * @param {PointerEvent} event - The pointer up event.
 * @returns {void}
 */
function onPointerUp(event: PointerEvent): void {
  const startPoint: SwipeStartPoint | null = swipeStartPoint
  swipeStartPoint = null
  if (!startPoint) return
  const horizontalDistance: number = event.clientX - startPoint.x
  const verticalDistance: number = event.clientY - startPoint.y
  const isHorizontalSwipe: boolean =
    Math.abs(horizontalDistance) >= SWIPE_MIN_DISTANCE_PX && Math.abs(horizontalDistance) > Math.abs(verticalDistance)
  if (!isHorizontalSwipe) return
  lastSwipeTimestamp = performance.now()
  goTo(activeIndex.value + (horizontalDistance < 0 ? 1 : -1), 'swipe')
}

/**
 * Forgets the gesture in progress when the browser takes it over (vertical scroll).
 * @returns {void}
 */
function onPointerCancel(): void {
  swipeStartPoint = null
}

/* WATCHERS */
watch(
  (): number => props.slides.length,
  (): void => {
    activeIndex.value = 0
    refreshAutoplay()
  },
)

/* LIFECYCLE */
onMounted((): void => {
  hasMounted.value = true
  refreshAutoplay()
})
</script>

<style scoped>
.slideshow-progress {
  animation-name: slideshow-progress;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
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
