import { computed, onMounted, ref, watch } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import type {
  DibodevPhotoSlideshowNavigation,
  DibodevPhotoSlideshowNavigationMethod,
} from '~/core/types/DibodevPhotoSlideshow'
import type { DibodevSlideshow, DibodevSlideshowSlide } from '~/core/types/DibodevSlideshow'

type SwipeStartPoint = { x: number; y: number }

const SWIPE_MIN_DISTANCE_PX: number = 40
/** A swipe is followed by a click on some browsers: it is ignored during this delay. */
const CLICK_AFTER_SWIPE_DELAY_MS: number = 400

/**
 * Mechanics shared by the slideshows: active slide, auto-play paused under the mouse or the keyboard focus, click and swipe navigation.
 * @param {() => T[]} getSlides - The slides, read again whenever they change.
 * @param {(navigation: DibodevPhotoSlideshowNavigation) => void} onNavigate - Called when the visitor changes the slide by hand.
 * @returns {DibodevSlideshow<T>} The state and the handlers to bind in the template.
 */
export function useSlideshow<T extends DibodevSlideshowSlide>(
  getSlides: () => T[],
  onNavigate: (navigation: DibodevPhotoSlideshowNavigation) => void,
): DibodevSlideshow<T> {
  let swipeStartPoint: SwipeStartPoint | null = null
  let lastSwipeTimestamp: number = 0

  const activeIndex: Ref<number> = ref(0)
  const isHoveredWithMouse: Ref<boolean> = ref(false)
  const hasKeyboardFocus: Ref<boolean> = ref(false)
  const isAutoplayEnabled: Ref<boolean> = ref(false)
  const hasMounted: Ref<boolean> = ref(false)

  const hasSeveralSlides: ComputedRef<boolean> = computed((): boolean => getSlides().length > 1)

  const activeSlide: ComputedRef<T> = computed((): T => getSlides()[activeIndex.value] ?? getSlides()[0]!)

  /** Only the first slide is rendered on the server, so the other images never delay it. */
  const renderedSlides: ComputedRef<T[]> = computed((): T[] =>
    hasMounted.value ? getSlides() : getSlides().slice(0, 1),
  )

  const isAutoplayRunning: ComputedRef<boolean> = computed(
    (): boolean => isAutoplayEnabled.value && !isHoveredWithMouse.value && !hasKeyboardFocus.value,
  )

  /**
   * Shows a slide, wrapping around at both ends, and reports the change when the visitor made it.
   * @param {number} index - Target slide index (may be out of range).
   * @param {DibodevPhotoSlideshowNavigationMethod | null} [method=null] - How the visitor asked for it, or null for auto-play.
   * @returns {void}
   */
  function goTo(index: number, method: DibodevPhotoSlideshowNavigationMethod | null = null): void {
    const count: number = getSlides().length
    if (count === 0) return
    activeIndex.value = ((index % count) + count) % count
    if (method) onNavigate({ slideId: activeSlide.value.id, method })
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
   * Pauses auto-play under a mouse pointer only: a finger never leaves the slideshow the way a mouse does.
   * @param {PointerEvent} event - The pointer enter event.
   * @returns {void}
   */
  function onPointerEnter(event: PointerEvent): void {
    if (event.pointerType === 'mouse') isHoveredWithMouse.value = true
  }

  /**
   * Resumes auto-play when the mouse leaves.
   * @returns {void}
   */
  function onPointerLeave(): void {
    isHoveredWithMouse.value = false
  }

  /**
   * Pauses auto-play when the focus comes from the keyboard, not from a click or a tap.
   * @param {FocusEvent} event - The focus in event.
   * @returns {void}
   */
  function onFocusIn(event: FocusEvent): void {
    hasKeyboardFocus.value = event.target instanceof HTMLElement && event.target.matches(':focus-visible')
  }

  /**
   * Resumes auto-play when the focus leaves.
   * @returns {void}
   */
  function onFocusOut(): void {
    hasKeyboardFocus.value = false
  }

  /**
   * Shows the next slide on a click on the picture, unless the click only ends a swipe.
   * @returns {void}
   */
  function onPictureClick(): void {
    if (performance.now() - lastSwipeTimestamp < CLICK_AFTER_SWIPE_DELAY_MS) return
    goTo(activeIndex.value + 1, 'photo')
  }

  /**
   * Remembers where a pointer gesture starts on the picture.
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

  watch(
    (): number => getSlides().length,
    (): void => {
      activeIndex.value = 0
      refreshAutoplay()
    },
  )

  onMounted((): void => {
    hasMounted.value = true
    refreshAutoplay()
  })

  return {
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
  }
}
