<template>
  <section
    v-if="hasMedia"
    id="project-gallery"
    data-aos="fade-up"
    data-aos-duration="600"
    class="bg-surface-tint w-full scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28"
  >
    <div class="max-w-site mx-auto grid w-full gap-12">
      <!-- Section Title -->
      <div class="grid gap-3">
        <p class="text-primary text-xs font-medium tracking-[0.08em] uppercase">{{ $t('project.gallery.eyebrow') }}</p>
        <h2 class="text-[28px] leading-[1.15] font-medium tracking-[-0.01em] text-gray-100 sm:text-[36px]">
          {{ $t('project.gallery.title') }}
        </h2>
        <p class="text-[17px] leading-7 text-gray-200">
          {{ $t('project.gallery.subtitle') }}
        </p>
      </div>

      <div v-if="hasBothMedia" class="grid items-start gap-6 lg:grid-cols-2">
        <DibodevZoomableImageTile
          :src="props.media1 ?? ''"
          :alt="`${props.projectName} - ${$t('project.gallery.preview')} 1`"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          @click="openModal(props.media1, `${props.projectName} - ${$t('project.gallery.preview')} 1`)"
        />
        <DibodevZoomableImageTile
          :src="props.media2 ?? ''"
          :alt="`${props.projectName} - ${$t('project.gallery.preview')} 2`"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          @click="openModal(props.media2, `${props.projectName} - ${$t('project.gallery.preview')} 2`)"
        />
      </div>

      <div v-else class="flex items-start justify-start">
        <DibodevZoomableImageTile
          :src="singleMedia ?? ''"
          :alt="`${props.projectName} - ${$t('project.gallery.preview')}`"
          isSingleImage
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="800"
          @click="openModal(singleMedia, `${props.projectName} - ${$t('project.gallery.preview')}`)"
        />
      </div>
    </div>

    <!-- Modal for enlarged image -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
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
              class="h-auto max-h-[90vh] w-auto max-w-[90vw] rounded-lg object-contain"
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
import DibodevZoomableImageTile from '~/components/data-displays/DibodevZoomableImageTile.vue'

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
})

/* REFS */
const isModalOpen: Ref<boolean> = ref<boolean>(false)
const modalImageSrc: Ref<string> = ref<string>('')
const modalImageAlt: Ref<string> = ref<string>('')

/* METHODS */
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
</script>

<style scoped>
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
