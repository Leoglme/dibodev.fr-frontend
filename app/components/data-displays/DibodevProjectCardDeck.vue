<template>
  <section
    v-if="slides.length > 0"
    class="relative mx-auto w-full max-w-md pt-[18px] sm:max-w-lg lg:max-w-[34rem]"
    :aria-roledescription="hasSeveralSlides ? $t('photoSlideshow.roleDescription') : undefined"
    :aria-label="props.accessibleName"
    @pointerenter="onPointerEnter"
    @pointerleave="onPointerLeave"
    @focusin="onFocusIn"
    @focusout="onFocusOut"
  >
    <div
      class="absolute inset-[0_4%_9%_22%] rounded-4xl transition-colors duration-600 ease-out motion-reduce:transition-none"
      :style="{ backgroundColor: backdropColor }"
      aria-hidden="true"
    />

    <div
      class="relative h-[452px] sm:h-[470px] lg:h-[460px] xl:h-[500px]"
      :class="hasSeveralSlides ? 'touch-pan-y' : ''"
      @pointerdown="onPointerDown"
      @pointerup="onDeckPointerUp"
      @pointercancel="onPointerCancel"
      @click.capture="onDeckClickCapture"
    >
      <div
        v-for="(slide, index) in renderedSlides"
        :key="slide.id"
        class="project-card-deck__card absolute top-[30px] left-1/2 w-[min(268px,70vw)] sm:top-10 sm:w-80 lg:w-[272px] xl:w-[350px]"
        :data-slot="slotOf(index)"
        :inert="index !== activeIndex || undefined"
      >
        <DibodevProjectCard
          class="shadow-[0_30px_60px_-28px_rgba(20,20,20,0.45)]"
          :name="slide.project.name"
          :description="slide.project.metaDescription"
          :createdAt="slide.project.date"
          :logo="slide.project.logoUrl"
          :screenshot="ProjectUtils.resolveCardScreenshot(slide.project)"
          :primaryColor="slide.project.primaryColor"
          :secondaryColor="slide.project.secondaryColor"
          :route="slide.project.route"
          :categories="slide.project.categories ?? []"
          :trackingSource="props.trackingSource"
        />
      </div>
    </div>

    <DibodevSlideshowMarkers
      v-if="hasSeveralSlides"
      class="relative justify-center"
      :slideNames="slideNames"
      :activeIndex="activeIndex"
      :isAutoplayRunning="isAutoplayRunning"
      @select="goTo($event, 'marker')"
      @progressEnd="goTo(activeIndex + 1)"
    />
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { DibodevPhotoSlideshowNavigation } from '~/core/types/DibodevPhotoSlideshow'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type {
  DibodevProjectCardDeckProps,
  DibodevProjectCardDeckSlide,
  DibodevProjectCardDeckSlot,
} from '~/core/types/DibodevProjectCardDeck'
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import DibodevProjectCard from '~/components/cards/DibodevProjectCard.vue'
import DibodevSlideshowMarkers from '~/components/data-displays/DibodevSlideshowMarkers.vue'
import { useSlideshow } from '~/composables/useSlideshow'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { ColorUtils } from '~/core/utils/ColorUtils'
import { ProjectUtils } from '~/core/utils/ProjectUtils'

/** Real project cards dealt like a hand of cards: the front one is a link, the next ones wait tilted behind; auto-play, swipe and markers, the backdrop takes the colour of the front project. A single project shows as one card, without markers. */
const props: DibodevProjectCardDeckProps = defineProps({
  projects: {
    type: Array as PropType<DibodevProject[]>,
    required: true,
  },
  accessibleName: {
    type: String as PropType<string>,
    required: true,
  },
  trackingSource: {
    type: String as PropType<string>,
    default: 'project_card_deck',
  },
})

/** Cards dealt in the deck. */
const DECK_PROJECT_COUNT: number = 6
/** Cards visible in the fan: the front one and one tilted on each side. */
const FAN_CARD_COUNT: number = 3
/** Same length as the card transition: the card that left is then put back behind the others. */
const LEAVING_CARD_DURATION_MS: number = 450
/** A swipe can be followed by a click on the front card link: it is ignored during this delay. */
const CLICK_AFTER_SWIPE_DELAY_MS: number = 400
/** Backdrop of a project whose colour is grey or near-black. */
const DEFAULT_BACKDROP_COLOR: string = 'var(--color-accent-tint)'

let leavingCardTimeout: ReturnType<typeof setTimeout> | null = null
let lastSwipeTimestamp: number = 0

const slides: ComputedRef<DibodevProjectCardDeckSlide[]> = computed((): DibodevProjectCardDeckSlide[] =>
  props.projects.slice(0, DECK_PROJECT_COUNT).map(
    (project: DibodevProject): DibodevProjectCardDeckSlide => ({
      id: project.route,
      project,
    }),
  ),
)

const { track } = useTracking()
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
  onPointerDown,
  onPointerUp,
  onPointerCancel,
} = useSlideshow((): DibodevProjectCardDeckSlide[] => slides.value, onVisitorNavigation)

const leavingCardIndex: Ref<number | null> = ref<number | null>(null)

const backdropColor: ComputedRef<string> = computed((): string =>
  ColorUtils.getLightTint(activeSlide.value.project.primaryColor, DEFAULT_BACKDROP_COLOR),
)
const slideNames: ComputedRef<string[]> = computed((): string[] =>
  slides.value.map(
    (slide: DibodevProjectCardDeckSlide): string => ProjectUtils.splitNameAndTagline(slide.project.name).shortName,
  ),
)

/**
 * Place of a card in the fan, counted from the front card.
 * @param {number} index - Index of the card.
 * @returns {DibodevProjectCardDeckSlot} The slot of the card.
 */
function slotOf(index: number): DibodevProjectCardDeckSlot {
  if (index === leavingCardIndex.value) return 'leaving'
  const offset: number = (index - activeIndex.value + slides.value.length) % slides.value.length
  if (offset === 0) return 'front'
  if (offset === 1) return 'right'
  if (offset === 2) return 'left'
  return 'hidden'
}

/**
 * Reports a card change made by the visitor, under the deck's tracking source (auto-play is not reported).
 * @param {DibodevPhotoSlideshowNavigation} navigation - The project now in front and how the visitor brought it.
 * @returns {void}
 */
function onVisitorNavigation(navigation: DibodevPhotoSlideshowNavigation): void {
  track(TRACKING_EVENTS.photoSlideshowNavigated, {
    slide: navigation.slideId,
    method: navigation.method,
    location: props.trackingSource,
  })
}

/**
 * Handles the end of a gesture and remembers when it was a swipe, so the click that may follow does not open the card.
 * @param {PointerEvent} event - The pointer up event.
 * @returns {void}
 */
function onDeckPointerUp(event: PointerEvent): void {
  const indexBeforeGesture: number = activeIndex.value
  onPointerUp(event)
  if (activeIndex.value !== indexBeforeGesture) lastSwipeTimestamp = performance.now()
}

/**
 * Cancels the click on the front card link when it only ends a swipe.
 * @param {MouseEvent} event - The click event, caught before the link.
 * @returns {void}
 */
function onDeckClickCapture(event: MouseEvent): void {
  if (performance.now() - lastSwipeTimestamp >= CLICK_AFTER_SWIPE_DELAY_MS) return
  event.preventDefault()
  event.stopPropagation()
}

watch(activeIndex, (currentIndex: number, previousIndex: number): void => {
  const count: number = slides.value.length
  const hasMovedToNextCard: boolean = count > FAN_CARD_COUNT && currentIndex === (previousIndex + 1) % count
  if (leavingCardTimeout) clearTimeout(leavingCardTimeout)
  leavingCardIndex.value = hasMovedToNextCard ? previousIndex : null
  if (!hasMovedToNextCard) return
  leavingCardTimeout = setTimeout((): void => {
    leavingCardIndex.value = null
  }, LEAVING_CARD_DURATION_MS)
})

onBeforeUnmount((): void => {
  if (leavingCardTimeout) clearTimeout(leavingCardTimeout)
})
</script>

<style scoped>
.project-card-deck__card {
  transition:
    transform 0.65s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.45s ease;
  will-change: transform;
}

.project-card-deck__card[data-slot='front'] {
  z-index: 4;
  transform: translateX(-50%);
}

.project-card-deck__card[data-slot='right'] {
  z-index: 3;
  transform: translateX(-32%) translateY(18px) rotate(4deg) scale(0.9);
}

.project-card-deck__card[data-slot='left'] {
  z-index: 2;
  transform: translateX(-68%) translateY(18px) rotate(-4deg) scale(0.9);
}

.project-card-deck__card[data-slot='hidden'] {
  z-index: 1;
  opacity: 0;
  transform: translateX(-50%) translateY(40px) scale(0.86);
}

.project-card-deck__card[data-slot='leaving'] {
  z-index: 5;
  opacity: 0;
  transform: translateX(-130%) translateY(-8px) rotate(-12deg);
}

@media (min-width: 640px) {
  .project-card-deck__card[data-slot='right'] {
    transform: translateX(-20%) translateY(22px) rotate(5deg) scale(0.92);
  }

  .project-card-deck__card[data-slot='left'] {
    transform: translateX(-80%) translateY(22px) rotate(-5deg) scale(0.92);
  }
}

@media (min-width: 1024px) {
  .project-card-deck__card[data-slot='right'] {
    transform: translateX(-24%) translateY(22px) rotate(5deg) scale(0.92);
  }

  .project-card-deck__card[data-slot='left'] {
    transform: translateX(-76%) translateY(22px) rotate(-5deg) scale(0.92);
  }
}

@media (min-width: 1280px) {
  .project-card-deck__card[data-slot='right'] {
    transform: translateX(-18%) translateY(22px) rotate(5deg) scale(0.92);
  }

  .project-card-deck__card[data-slot='left'] {
    transform: translateX(-82%) translateY(22px) rotate(-5deg) scale(0.92);
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card-deck__card {
    transition: none;
  }
}
</style>
