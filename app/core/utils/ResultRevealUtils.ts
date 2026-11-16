/** Share of the screen height above which a result counts as already in view. */
const RESULT_TOP_VISIBLE_SCREEN_RATIO: number = 0.6

/** Brings a freshly shown result into view when it sits under the fold, as on a phone where it follows the form. */
export class ResultRevealUtils {
  /**
   * Scrolls the page so the element sits just under the fixed header, unless it is already in view.
   * @param {HTMLElement | null} element - The result card or its container.
   * @returns {void}
   */
  static revealBelowTheFold(element: HTMLElement | null): void {
    if (!element) {
      return
    }
    const elementTop: number = element.getBoundingClientRect().top

    if (elementTop < window.innerHeight * RESULT_TOP_VISIBLE_SCREEN_RATIO) {
      return
    }
    const headerOffset: number = Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0
    const prefersReducedMotion: boolean = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({
      top: Math.max(0, window.scrollY + elementTop - headerOffset),
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }
}
