<template>
  <div
    v-show="text"
    ref="tooltip"
    class="pointer-events-none fixed z-[99] rounded-md bg-gray-100 px-2.5 py-1.5 text-[12.5px] font-medium whitespace-nowrap text-white"
    :style="{ left: `${left}px`, top: `${top}px` }"
    role="tooltip"
  >
    {{ text }}
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue'
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const tooltip: Ref<HTMLDivElement | null> = ref(null)
const text: Ref<string> = ref('')
const left: Ref<number> = ref(0)
const top: Ref<number> = ref(0)
let currentTarget: HTMLElement | null = null
let hasHoverPointer: boolean = false

/**
 * Positions the tooltip to the right of a sidebar item, otherwise above its target (below it near the top edge).
 *
 * @param {HTMLElement} target - Element carrying data-tip.
 * @returns {Promise<void>}
 */
async function positionTooltip(target: HTMLElement): Promise<void> {
  await nextTick()
  const rect: DOMRect = target.getBoundingClientRect()
  const width: number = tooltip.value?.offsetWidth ?? 0
  const height: number = tooltip.value?.offsetHeight ?? 0
  if (target.closest('aside[aria-label="Navigation du back-office"]')) {
    left.value = rect.right + 10
    top.value = rect.top + rect.height / 2 - height / 2
    return
  }
  left.value = Math.max(6, Math.min(window.innerWidth - width - 6, rect.left + rect.width / 2 - width / 2))
  top.value = rect.top - height - 8 < 6 ? rect.bottom + 8 : rect.top - height - 8
}

/**
 * Shows the tooltip of the hovered or focused element.
 *
 * @param {Event} event - mouseover or focusin.
 * @returns {void}
 */
function onEnter(event: Event): void {
  const target: HTMLElement | null = (event.target as HTMLElement | null)?.closest('[data-tip]') ?? null
  if (!target) {
    hideTooltip()
    return
  }
  if (target === currentTarget) return
  currentTarget = target
  text.value = target.dataset.tip ?? ''
  positionTooltip(target).catch((): void => undefined)
}

/**
 * Hides the tooltip.
 *
 * @returns {void}
 */
function hideTooltip(): void {
  currentTarget = null
  text.value = ''
}

onMounted((): void => {
  hasHoverPointer = window.matchMedia('(hover: hover)').matches
  if (!hasHoverPointer) return
  document.addEventListener('mouseover', onEnter)
  document.addEventListener('focusin', onEnter)
  document.addEventListener('focusout', hideTooltip)
  document.addEventListener('scroll', hideTooltip, true)
  document.addEventListener('click', hideTooltip)
})

onBeforeUnmount((): void => {
  if (!hasHoverPointer) return
  document.removeEventListener('mouseover', onEnter)
  document.removeEventListener('focusin', onEnter)
  document.removeEventListener('focusout', hideTooltip)
  document.removeEventListener('scroll', hideTooltip, true)
  document.removeEventListener('click', hideTooltip)
})
</script>
