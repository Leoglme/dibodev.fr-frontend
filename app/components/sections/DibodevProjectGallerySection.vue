<template>
  <section
    v-if="hasMedia"
    id="project-gallery"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex w-screen max-w-screen items-center justify-center px-3 py-24 pt-36 sm:pt-48"
  >
    <div class="grid w-full max-w-5xl gap-12">
      <!-- Section Title -->
      <div class="flex flex-col items-center justify-center gap-4">
        <h2 class="text-center text-3xl font-semibold text-gray-100 sm:text-[40px]">
          {{ $t('project.gallery.title') }}
        </h2>
        <p class="text-center text-base leading-7 font-normal text-gray-200">
          {{ $t('project.gallery.subtitle') }}
        </p>
      </div>

      <!-- Gallery Grid - Images stacked vertically -->
      <div v-if="hasBothMedia" class="flex flex-col items-center gap-16">
        <!-- Media 1 -->
        <div
          class="group hover:shadow-primary/20 relative cursor-pointer overflow-hidden rounded-2xl border-1 border-gray-700 transition-all duration-300 hover:border-gray-600 hover:shadow-2xl"
          :class="[media1IsPortrait ? 'w-full max-w-xs bg-gray-800' : 'w-full max-w-3xl bg-transparent']"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          @click="openModal(props.media1, `${props.projectName} - ${$t('project.gallery.preview')} 1`)"
        >
          <div class="relative w-full overflow-hidden" :style="{ aspectRatio: media1Ratio }">
            <div v-show="!media1Loaded" class="absolute inset-0 animate-pulse bg-gray-700" aria-hidden="true" />
            <img
              :src="props.media1"
              :alt="`${props.projectName} - ${$t('project.gallery.preview')} 1`"
              :class="[
                media1IsPortrait ? 'object-contain' : 'object-cover',
                media1Loaded ? 'opacity-100' : 'opacity-0',
              ]"
              class="absolute inset-0 h-full w-full transition-opacity transition-transform duration-300 duration-500 group-hover:scale-105"
              loading="lazy"
              width="1200"
              height="675"
              @load="onMedia1Load"
            />
          </div>
          <div
            class="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <div class="rounded-full bg-white/20 p-4 backdrop-blur-sm">
              <svg
                class="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Media 2 -->
        <div
          class="group hover:shadow-primary/20 relative cursor-pointer overflow-hidden rounded-2xl border-1 border-gray-700 transition-all duration-300 hover:border-gray-600 hover:shadow-2xl"
          :class="[media2IsPortrait ? 'w-full max-w-xs bg-gray-800' : 'w-full max-w-3xl bg-transparent']"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          @click="openModal(props.media2, `${props.projectName} - ${$t('project.gallery.preview')} 2`)"
        >
          <div class="relative w-full overflow-hidden" :style="{ aspectRatio: media2Ratio }">
            <div v-show="!media2Loaded" class="absolute inset-0 animate-pulse bg-gray-700" aria-hidden="true" />
            <img
              :src="props.media2"
              :alt="`${props.projectName} - ${$t('project.gallery.preview')} 2`"
              :class="[
                media2IsPortrait ? 'object-contain' : 'object-cover',
                media2Loaded ? 'opacity-100' : 'opacity-0',
              ]"
              class="absolute inset-0 h-full w-full transition-opacity transition-transform duration-300 duration-500 group-hover:scale-105"
              loading="lazy"
              width="1200"
              height="675"
              @load="onMedia2Load"
            />
          </div>
          <div
            class="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <div class="rounded-full bg-white/20 p-4 backdrop-blur-sm">
              <svg
                class="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Single Media (Centered) -->
      <div v-else class="flex items-center justify-center">
        <div
          class="group hover:shadow-primary/20 relative cursor-pointer overflow-hidden rounded-2xl border-1 border-gray-700 transition-all duration-300 hover:border-gray-600 hover:shadow-2xl"
          :class="[singleMediaIsPortrait ? 'w-full max-w-xs bg-gray-800' : 'w-full max-w-3xl bg-transparent']"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="800"
          @click="openModal(singleMedia, `${props.projectName} - ${$t('project.gallery.preview')}`)"
        >
          <div class="relative w-full overflow-hidden" :style="{ aspectRatio: singleMediaRatio }">
            <div v-show="!singleMediaLoaded" class="absolute inset-0 animate-pulse bg-gray-700" aria-hidden="true" />
            <img
              :src="singleMedia"
              :alt="`${props.projectName} - ${$t('project.gallery.preview')}`"
              :class="[
                singleMediaIsPortrait ? 'object-contain' : 'object-cover',
                singleMediaLoaded ? 'opacity-100' : 'opacity-0',
              ]"
              class="absolute inset-0 h-full w-full transition-opacity transition-transform duration-300 duration-500 group-hover:scale-105"
              loading="lazy"
              width="1200"
              height="675"
              @load="onSingleMediaLoad"
            />
          </div>
          <div
            class="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <div class="rounded-full bg-white/20 p-4 backdrop-blur-sm">
              <svg
                class="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for enlarged image -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          @click="closeModal"
        >
          <button
            class="absolute top-4 right-4 z-10 cursor-pointer rounded-full bg-white/10 p-3 text-white transition-all duration-300 hover:rotate-90 hover:bg-white/20"
            @click="closeModal"
            :aria-label="$t('project.gallery.close')"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="relative max-h-[90vh] max-w-[90vw]" @click.stop>
            <img
              :src="modalImageSrc"
              :alt="modalImageAlt"
              class="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-2xl object-contain"
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ComputedRef, PropType, Ref } from 'vue'

/* PROPS */
const props = defineProps({
  projectName: {
    type: String as PropType<string>,
    required: true,
  },
  media1: {
    type: String as PropType<string | null | undefined>,
    default: null,
  },
  media2: {
    type: String as PropType<string | null | undefined>,
    default: null,
  },
  primaryColor: {
    type: String as PropType<string>,
    default: '#5661f7',
  },
})

/* REFS */
const media1Ratio: Ref<string> = ref<string>('16 / 9')
const media2Ratio: Ref<string> = ref<string>('16 / 9')
const media1IsPortrait: Ref<boolean> = ref<boolean>(false)
const media2IsPortrait: Ref<boolean> = ref<boolean>(false)
const media1Loaded: Ref<boolean> = ref<boolean>(false)
const media2Loaded: Ref<boolean> = ref<boolean>(false)
const singleMediaLoaded: Ref<boolean> = ref<boolean>(false)
const isModalOpen: Ref<boolean> = ref<boolean>(false)
const modalImageSrc: Ref<string> = ref<string>('')
const modalImageAlt: Ref<string> = ref<string>('')

/* METHODS */
/**
 * Handle media1 image load to calculate its aspect ratio
 * @param event - The load event
 */
const onMedia1Load = (event: Event): void => {
  media1Loaded.value = true
  const img = event.target as HTMLImageElement
  if (img.naturalWidth && img.naturalHeight) {
    const ratio: number = img.naturalWidth / img.naturalHeight
    media1IsPortrait.value = ratio < 1
    media1Ratio.value = `${img.naturalWidth} / ${img.naturalHeight}`
  }
}

/**
 * Handle media2 image load to calculate its aspect ratio
 * @param event - The load event
 */
const onMedia2Load = (event: Event): void => {
  media2Loaded.value = true
  const img = event.target as HTMLImageElement
  if (img.naturalWidth && img.naturalHeight) {
    const ratio: number = img.naturalWidth / img.naturalHeight
    media2IsPortrait.value = ratio < 1
    media2Ratio.value = `${img.naturalWidth} / ${img.naturalHeight}`
  }
}

/**
 * Handle single media image load to calculate its aspect ratio
 * @param event - The load event
 */
const onSingleMediaLoad = (event: Event): void => {
  singleMediaLoaded.value = true
  const img = event.target as HTMLImageElement
  if (img.naturalWidth && img.naturalHeight) {
    const ratio: number = img.naturalWidth / img.naturalHeight
    if (props.media1) {
      media1IsPortrait.value = ratio < 1
      media1Ratio.value = `${img.naturalWidth} / ${img.naturalHeight}`
    } else {
      media2IsPortrait.value = ratio < 1
      media2Ratio.value = `${img.naturalWidth} / ${img.naturalHeight}`
    }
  }
}

/**
 * Open modal with enlarged image
 * @param src - Image source URL
 * @param alt - Image alt text
 */
const openModal = (src: string | null | undefined, alt: string): void => {
  if (src) {
    modalImageSrc.value = src
    modalImageAlt.value = alt
    isModalOpen.value = true
    document.body.style.overflow = 'hidden'
  }
}

/**
 * Close the modal
 */
const closeModal = (): void => {
  isModalOpen.value = false
  document.body.style.overflow = ''
}

/* COMPUTED */
/**
 * Check if at least one media is available
 */
const hasMedia: ComputedRef<boolean> = computed<boolean>(() => {
  return Boolean(props.media1 || props.media2)
})

/**
 * Check if both media are available
 */
const hasBothMedia: ComputedRef<boolean> = computed<boolean>(() => {
  return Boolean(props.media1 && props.media2)
})

/**
 * Get the single media if only one is available
 */
const singleMedia: ComputedRef<string | null | undefined> = computed<string | null | undefined>(() => {
  return props.media1 || props.media2
})

/**
 * Get the aspect ratio for single media
 */
const singleMediaRatio: ComputedRef<string> = computed<string>(() => {
  return props.media1 ? media1Ratio.value : media2Ratio.value
})

/**
 * Check if single media is portrait
 */
const singleMediaIsPortrait: ComputedRef<boolean> = computed<boolean>(() => {
  return props.media1 ? media1IsPortrait.value : media2IsPortrait.value
})
</script>

<style scoped>
.hover\:shadow-primary\/20:hover {
  --tw-shadow-color: v-bind(primaryColor);
  --tw-shadow: var(--tw-shadow-colored);
}

/* Modal transition animations */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active img,
.modal-leave-active img {
  transition: transform 0.3s ease;
}

.modal-enter-from img,
.modal-leave-to img {
  transform: scale(0.9);
}
</style>
