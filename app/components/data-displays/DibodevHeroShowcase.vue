<template>
  <section
    v-if="props.slides.length > 0"
    class="grid gap-4"
    :aria-roledescription="$t('home.hero.showcase.roleDescription')"
    :aria-label="$t('home.hero.showcase.label')"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
    @focusin="isPaused = true"
    @focusout="isPaused = false"
  >
    <div class="bg-surface-tint rounded-2xl p-4 sm:p-6">
      <div
        class="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-[0_18px_40px_rgba(111,95,224,0.14)]"
      >
        <div class="flex items-center gap-1.5 border-b border-gray-300 bg-gray-800 px-4 py-2.5" aria-hidden="true">
          <span class="h-2.5 w-2.5 rounded-full bg-gray-400" />
          <span class="h-2.5 w-2.5 rounded-full bg-gray-400" />
          <span class="h-2.5 w-2.5 rounded-full bg-gray-400" />
          <span class="text-muted ml-3 truncate text-xs">{{ activeSlide.name }}</span>
        </div>
        <div class="relative aspect-[16/9] w-full bg-gray-800">
          <NuxtLink
            v-for="(slide, index) in props.slides"
            :key="slide.route"
            :to="localePath(slide.route)"
            class="absolute inset-0 transition-opacity duration-700 ease-out"
            :class="index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0'"
            :aria-hidden="index !== activeIndex"
            :tabindex="index === activeIndex ? undefined : -1"
            @click="onSlideClick(slide)"
          >
            <img
              :src="slide.imageUrl"
              :srcset="slide.imageSrcset || undefined"
              :sizes="IMAGE_SIZES"
              :alt="`${slide.name} : ${slide.tagline}`"
              :width="IMAGE_WIDTH"
              :height="IMAGE_HEIGHT"
              :loading="index === 0 ? 'eager' : 'lazy'"
              :fetchpriority="index === 0 ? 'high' : undefined"
              decoding="async"
              class="h-full w-full object-contain object-top"
            />
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between gap-4">
      <div class="min-w-0">
        <p class="truncate text-[15px] font-medium text-gray-100">{{ activeSlide.name }}</p>
        <p class="text-muted line-clamp-2 text-sm">{{ activeSlide.tagline }}</p>
      </div>
      <div v-if="props.slides.length > 1" class="flex shrink-0 items-center gap-2">
        <button
          type="button"
          class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-white text-gray-100 transition-colors hover:border-gray-100"
          :aria-label="$t('home.hero.showcase.previous')"
          @click="goTo(activeIndex - 1)"
        >
          <DibodevIcon name="ChevronLeft" mode="stroke" :width="18" :height="18" aria-hidden="true" />
        </button>
        <ol class="flex items-center" :aria-label="$t('home.hero.showcase.label')">
          <li v-for="(slide, index) in props.slides" :key="slide.route">
            <button
              type="button"
              class="group flex h-10 cursor-pointer items-center px-[3px]"
              :aria-label="$t('home.hero.showcase.goTo', { name: slide.name })"
              :aria-current="index === activeIndex ? 'true' : undefined"
              @click="goTo(index)"
            >
              <span
                class="relative block h-2.5 overflow-hidden rounded-full transition-all"
                :class="index === activeIndex ? 'bg-accent-tint w-8' : 'w-2.5 bg-gray-400 group-hover:bg-gray-100'"
              >
                <span
                  v-if="index === activeIndex"
                  :key="`progress-${activeIndex}`"
                  class="bg-primary absolute inset-0 origin-left rounded-full"
                  :class="isAutoplayEnabled ? 'showcase-progress' : ''"
                  :style="progressStyle"
                  aria-hidden="true"
                  @animationend="goTo(activeIndex + 1)"
                />
              </span>
            </button>
          </li>
        </ol>
        <button
          type="button"
          class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-white text-gray-100 transition-colors hover:border-gray-100"
          :aria-label="$t('home.hero.showcase.next')"
          @click="goTo(activeIndex + 1)"
        >
          <DibodevIcon name="ChevronRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import type { ComputedRef, PropType, Ref } from 'vue'
import type { DibodevHeroShowcaseProps, DibodevHeroShowcaseSlide } from '~/core/types/DibodevHeroShowcase'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** Time a slide stays on screen: the active dot fills up over this duration, then the next slide shows. */
const AUTOPLAY_INTERVAL_MS: number = 6000
const IMAGE_WIDTH: number = 1200
const IMAGE_HEIGHT: number = 675
const IMAGE_SIZES: string = '(min-width: 1280px) 560px, (min-width: 1024px) 400px, calc(100vw - 80px)'

/**
 * Browser-framed carousel of real project screenshots, shown in the page headers.
 * The first slide is rendered on the server. Auto-play is driven by the progress bar of the active dot
 * (paused on hover and focus) and is disabled when the visitor prefers reduced motion.
 */
const props: DibodevHeroShowcaseProps = defineProps({
  slides: {
    type: Array as PropType<DibodevHeroShowcaseSlide[]>,
    required: true,
  },
})

const localePath = useLocalePath()
const { track } = useTracking()

/* REFS */
const activeIndex: Ref<number> = ref(0)
const isPaused: Ref<boolean> = ref(false)
const isAutoplayEnabled: Ref<boolean> = ref(false)

/* COMPUTED */
const activeSlide: ComputedRef<DibodevHeroShowcaseSlide> = computed(
  (): DibodevHeroShowcaseSlide => props.slides[activeIndex.value] ?? props.slides[0]!,
)

/** Duration and pause state of the progress animation (none before hydration or without auto-play). */
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
 * Shows a slide, wrapping around at both ends.
 * @param {number} index - Target slide index (may be out of range).
 * @returns {void}
 */
function goTo(index: number): void {
  const count: number = props.slides.length
  if (count === 0) return
  activeIndex.value = ((index % count) + count) % count
}

/**
 * Enables auto-play when there are several slides and the visitor accepts motion (client only).
 * @returns {void}
 */
function refreshAutoplay(): void {
  if (!import.meta.client) return
  const prefersReducedMotion: boolean = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  isAutoplayEnabled.value = !prefersReducedMotion && props.slides.length > 1
}

/**
 * Tracks a click on the framed screenshot before the link navigates to the project page.
 * @param {DibodevHeroShowcaseSlide} slide - The clicked slide.
 * @returns {void}
 */
function onSlideClick(slide: DibodevHeroShowcaseSlide): void {
  track(TRACKING_EVENTS.projectCardClicked, { project: slide.name, route: slide.route, source: 'hero_showcase' })
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
  refreshAutoplay()
})
</script>

<style scoped>
.showcase-progress {
  animation-name: showcase-progress;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

@keyframes showcase-progress {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
</style>
