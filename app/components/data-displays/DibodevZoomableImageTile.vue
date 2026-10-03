<template>
  <div
    class="group relative cursor-pointer overflow-hidden rounded-lg border border-gray-300 transition-colors duration-300 hover:border-gray-400"
    :class="frameClass"
  >
    <div class="relative w-full overflow-hidden" :style="{ aspectRatio }">
      <div v-show="!isLoaded" class="absolute inset-0 animate-pulse bg-gray-700" aria-hidden="true" />
      <img
        ref="imageElement"
        :src="props.src"
        :alt="props.alt"
        :class="[isPortrait ? 'object-contain' : 'object-cover', isLoaded ? 'opacity-100' : 'opacity-0']"
        class="absolute inset-0 h-full w-full transition-opacity transition-transform duration-300 duration-500 group-hover:scale-105"
        loading="eager"
        width="1200"
        height="675"
        @load="onImageLoad"
        @error="onImageError"
      />
    </div>
    <div
      class="absolute inset-0 flex items-center justify-center bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      aria-hidden="true"
    >
      <div class="rounded-full bg-white/20 p-4 backdrop-blur-sm">
        <DibodevIcon name="ZoomIn" mode="stroke" :width="32" :height="32" class="text-white" />
      </div>
    </div>
    <span
      class="bg-accent-tint text-primary-dark pointer-events-none absolute top-3 right-3 hidden h-9 w-9 items-center justify-center rounded-full pointer-coarse:flex"
      aria-hidden="true"
    >
      <DibodevIcon name="Expand" mode="stroke" :width="18" :height="18" />
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { DibodevZoomableImageTileProps } from '~/core/types/DibodevZoomableImageTile'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'

/** Ratio of the frame until the image has loaded. */
const DEFAULT_ASPECT_RATIO: string = '16 / 9'
/** An image that never reports its load is shown anyway after this delay. */
const LOAD_FALLBACK_DELAY_MS: number = 3000

/** Gallery image that opens larger when clicked: framed at its own ratio, a magnifier on hover, an "enlarge" badge on touch screens. */
const props: DibodevZoomableImageTileProps = defineProps({
  src: {
    type: String as PropType<string>,
    required: true,
  },
  alt: {
    type: String as PropType<string>,
    required: true,
  },
  isSingleImage: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

let loadFallbackTimeout: ReturnType<typeof setTimeout> | null = null

const imageElement: Ref<HTMLImageElement | null> = ref<HTMLImageElement | null>(null)
const isLoaded: Ref<boolean> = ref<boolean>(false)
const isPortrait: Ref<boolean> = ref<boolean>(false)
const aspectRatio: Ref<string> = ref<string>(DEFAULT_ASPECT_RATIO)

const frameClass: ComputedRef<string> = computed((): string => {
  if (props.isSingleImage) return isPortrait.value ? 'w-full max-w-xs bg-gray-800' : 'w-full max-w-3xl bg-transparent'
  return isPortrait.value ? 'mx-auto w-full max-w-xs bg-gray-800' : 'w-full bg-transparent'
})

/**
 * Shows the loaded image and frames it at its own ratio, in portrait or landscape.
 * @param {HTMLImageElement} image - The loaded image.
 * @returns {void}
 */
function applyLoadedImage(image: HTMLImageElement): void {
  isLoaded.value = true
  if (!image.naturalWidth || !image.naturalHeight) return
  isPortrait.value = image.naturalWidth < image.naturalHeight
  aspectRatio.value = `${image.naturalWidth} / ${image.naturalHeight}`
}

/**
 * Frames the image once it has loaded.
 * @param {Event} event - The load event of the image.
 * @returns {void}
 */
function onImageLoad(event: Event): void {
  applyLoadedImage(event.target as HTMLImageElement)
}

/**
 * Removes the loading placeholder when the image fails to load.
 * @returns {void}
 */
function onImageError(): void {
  isLoaded.value = true
}

onMounted((): void => {
  if (imageElement.value?.complete && imageElement.value.naturalHeight !== 0) applyLoadedImage(imageElement.value)
  loadFallbackTimeout = setTimeout((): void => {
    isLoaded.value = true
  }, LOAD_FALLBACK_DELAY_MS)
})

onBeforeUnmount((): void => {
  if (loadFallbackTimeout) clearTimeout(loadFallbackTimeout)
})
</script>
