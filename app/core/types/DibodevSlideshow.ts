import type { ComputedRef, Ref } from 'vue'
import type { DibodevPhotoSlideshowNavigationMethod } from '~/core/types/DibodevPhotoSlideshow'

export type DibodevSlideshowSlide = {
  id: string
}

/**
 * What `useSlideshow` gives a slideshow component.
 * @type {DibodevSlideshow}
 * @property {Ref<number>} activeIndex - Index of the slide on screen.
 * @property {ComputedRef<T>} activeSlide - The slide on screen.
 * @property {ComputedRef<T[]>} renderedSlides - The slides to put in the DOM (the first one only before mount).
 * @property {ComputedRef<boolean>} hasSeveralSlides - Whether navigation and auto-play make sense.
 * @property {ComputedRef<boolean>} isAutoplayRunning - Whether the active marker should fill up and move on.
 * @property {(index: number, method?: DibodevPhotoSlideshowNavigationMethod | null) => void} goTo - Shows a slide, with how the visitor asked for it.
 */
export type DibodevSlideshow<T extends DibodevSlideshowSlide> = {
  activeIndex: Ref<number>
  activeSlide: ComputedRef<T>
  renderedSlides: ComputedRef<T[]>
  hasSeveralSlides: ComputedRef<boolean>
  isAutoplayRunning: ComputedRef<boolean>
  goTo: (index: number, method?: DibodevPhotoSlideshowNavigationMethod | null) => void
  onPointerEnter: (event: PointerEvent) => void
  onPointerLeave: () => void
  onFocusIn: (event: FocusEvent) => void
  onFocusOut: () => void
  onPictureClick: () => void
  onPointerDown: (event: PointerEvent) => void
  onPointerUp: (event: PointerEvent) => void
  onPointerCancel: () => void
}
