<template>
  <Transition name="dibodev-mobile-contact-bar">
    <div
      v-if="isShown"
      class="fixed inset-x-0 bottom-0 z-40 border-t border-gray-300 bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(17,17,17,0.08)] backdrop-blur lg:hidden"
    >
      <div class="mx-auto flex max-w-xl items-center justify-between gap-3 pr-[4.75rem]">
        <p class="line-clamp-2 min-w-0 flex-1 text-sm leading-5 font-medium text-gray-100">{{ props.text }}</p>
        <NuxtLink
          :to="props.to"
          class="bg-primary hover:bg-primary-dark inline-flex shrink-0 items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm leading-5 font-medium text-white transition-colors"
          @click="trackClick"
        >
          {{ props.buttonLabel }}
          <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
        </NuxtLink>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import type { DibodevMobileContactBarProps } from '~/core/types/DibodevMobileContactBar'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Small screens only: a question and a contact button that stay at the bottom while the visitor reads.
 * The right padding leaves the corner to the assistant bubble loaded in production.
 */
const props: DibodevMobileContactBarProps = defineProps({
  text: {
    type: String as PropType<string>,
    required: true,
  },
  buttonLabel: {
    type: String as PropType<string>,
    required: true,
  },
  to: {
    type: [String, Object] as PropType<RouteLocationRaw>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
  hiddenWhileVisibleId: {
    type: String as PropType<string>,
    default: '',
  },
})

const { track } = useTracking()

let visibilityObserver: IntersectionObserver | null = null

/* REFS */
/** Shown after mount only, so the bar never flashes over the element it steps aside for. */
const isShown: Ref<boolean> = ref(false)

/* METHODS */
/**
 * Tracks the click on the bar button.
 * @returns {void}
 */
function trackClick(): void {
  track(TRACKING_EVENTS.ctaProjectDiscussion, { location: props.trackingLocation })
}

/**
 * Shows the bar whenever the element it steps aside for is off screen.
 * @param {IntersectionObserverEntry[]} entries - The observer entries of that element.
 * @returns {void}
 */
function onTargetVisibilityChange(entries: IntersectionObserverEntry[]): void {
  const entry: IntersectionObserverEntry | undefined = entries[0]

  if (entry) {
    isShown.value = !entry.isIntersecting
  }
}

/* LIFECYCLE */
onMounted((): void => {
  const target: HTMLElement | null = props.hiddenWhileVisibleId
    ? document.getElementById(props.hiddenWhileVisibleId)
    : null

  if (!target || typeof IntersectionObserver === 'undefined') {
    isShown.value = true
    return
  }
  visibilityObserver = new IntersectionObserver(onTargetVisibilityChange, { threshold: 0.1 })
  visibilityObserver.observe(target)
})

onBeforeUnmount((): void => {
  visibilityObserver?.disconnect()
  visibilityObserver = null
})
</script>

<style scoped>
.dibodev-mobile-contact-bar-enter-active,
.dibodev-mobile-contact-bar-leave-active {
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}

.dibodev-mobile-contact-bar-enter-from,
.dibodev-mobile-contact-bar-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
