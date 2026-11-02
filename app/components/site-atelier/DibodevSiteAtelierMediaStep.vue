<template>
  <div class="grid gap-5">
    <DibodevSiteAtelierStepHeading
      ref="heading"
      :title="props.wording.media.title"
      :intro="props.tradeWording.mediaIntro"
    />
    <div class="grid gap-4">
      <div class="grid gap-2">
        <label
          :for="LOGO_INPUT_ID"
          class="hover:border-primary focus-within:border-primary grid cursor-pointer grid-cols-[56px_minmax(0,1fr)] items-center gap-4 rounded-[14px] border border-dashed border-gray-400 bg-white p-3 transition-colors"
        >
          <span
            class="text-muted grid h-14 w-14 place-items-center overflow-hidden rounded-lg bg-gray-800"
            aria-hidden="true"
          >
            <img v-if="props.state.logo" :src="props.state.logo.dataUrl" alt="" class="h-14 w-14 object-contain" />
            <DibodevIcon v-else name="Image" mode="stroke" :width="22" :height="22" />
          </span>
          <span class="grid min-w-0 gap-0.5">
            <span class="font-medium text-gray-100">{{ props.wording.media.logoLabel }}</span>
            <span class="text-muted truncate text-sm leading-5">{{
              props.state.logo?.fileName ?? props.wording.media.logoHint
            }}</span>
          </span>
          <input :id="LOGO_INPUT_ID" type="file" accept="image/*" class="sr-only" @change="onLogoChange" />
        </label>
        <button
          v-if="props.state.logo"
          type="button"
          class="text-primary hover:text-primary-dark inline-flex min-h-11 w-fit cursor-pointer items-center gap-1.5 text-[15px] font-medium transition-colors"
          @click="emit('set-logo', null)"
        >
          <DibodevIcon name="X" mode="stroke" :width="16" :height="16" aria-hidden="true" />
          {{ props.wording.media.removeLogo }}
        </button>
      </div>
      <label
        :for="PHOTOS_INPUT_ID"
        class="hover:border-primary focus-within:border-primary grid cursor-pointer grid-cols-[56px_minmax(0,1fr)] items-center gap-4 rounded-[14px] border border-dashed border-gray-400 bg-white p-3 transition-colors"
      >
        <span class="text-muted grid h-14 w-14 place-items-center rounded-lg bg-gray-800" aria-hidden="true">
          <DibodevIcon name="Camera" mode="stroke" :width="22" :height="22" />
        </span>
        <span class="grid min-w-0 gap-0.5">
          <span class="font-medium text-gray-100">{{ props.wording.media.photosLabel }}</span>
          <span class="text-muted text-sm leading-5">{{ photosHint }}</span>
        </span>
        <input
          :id="PHOTOS_INPUT_ID"
          type="file"
          accept="image/*"
          multiple
          class="sr-only"
          :disabled="props.state.photos.length >= SITE_ATELIER_MAX_PHOTOS"
          @change="onPhotosChange"
        />
      </label>
      <ul v-if="props.state.photos.length > 0" class="grid grid-cols-3 gap-3 pt-2 pr-2 sm:grid-cols-6 sm:gap-2">
        <li v-for="(photo, index) in props.state.photos" :key="`${index}-${photo.fileName}`" class="relative">
          <img :src="photo.dataUrl" alt="" class="aspect-square w-full rounded-md object-cover" />
          <button
            type="button"
            class="absolute -top-4 -right-4 grid h-11 w-11 cursor-pointer place-items-center"
            :aria-label="props.wording.media.removePhoto"
            @click="emit('remove-photo', index)"
          >
            <span
              class="bg-accent-tint text-primary-dark grid h-7 w-7 place-items-center rounded-full transition-colors hover:text-gray-100"
            >
              <DibodevIcon name="X" mode="stroke" :width="14" :height="14" aria-hidden="true" />
            </span>
          </button>
        </li>
      </ul>
      <p v-if="hasRejectedFile" class="text-sm leading-6 text-red-500" role="alert">
        {{ props.wording.media.fileTooLarge }}
      </p>
      <p v-if="isProcessing" class="text-muted text-sm leading-6" role="status">{{ props.wording.media.processing }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type {
  DibodevSiteAtelierPicture,
  DibodevSiteAtelierState,
  DibodevSiteAtelierTradeWording,
  DibodevSiteAtelierWording,
} from '~/core/types/DibodevSiteAtelier'
import type { DibodevSiteAtelierMediaStepProps } from '~/core/types/DibodevSiteAtelierMediaStep'
import { computed, ref } from 'vue'
import DibodevSiteAtelierStepHeading from '~/components/site-atelier/DibodevSiteAtelierStepHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import {
  SITE_ATELIER_IMAGE_MAX_BYTES,
  SITE_ATELIER_IMAGE_MAX_EDGE_PX,
  SITE_ATELIER_MAX_PHOTOS,
} from '~/core/constants/siteAtelier/siteAtelierShared'
import { ImageResizeUtils } from '~/core/utils/ImageResizeUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

const LOGO_INPUT_ID: string = 'site-atelier-logo'
const PHOTOS_INPUT_ID: string = 'site-atelier-photos'

/**
 * Fourth step: the logo and up to six photos, resized in the browser before they reach the frame.
 */
const props: DibodevSiteAtelierMediaStepProps = defineProps({
  wording: {
    type: Object as PropType<DibodevSiteAtelierWording>,
    required: true,
  },
  tradeWording: {
    type: Object as PropType<DibodevSiteAtelierTradeWording>,
    required: true,
  },
  state: {
    type: Object as PropType<DibodevSiteAtelierState>,
    required: true,
  },
})

const emit: {
  (event: 'set-logo', logo: DibodevSiteAtelierPicture | null): void
  (event: 'add-photos', photos: DibodevSiteAtelierPicture[]): void
  (event: 'remove-photo', index: number): void
} = defineEmits<{
  (event: 'set-logo', logo: DibodevSiteAtelierPicture | null): void
  (event: 'add-photos', photos: DibodevSiteAtelierPicture[]): void
  (event: 'remove-photo', index: number): void
}>()

const heading: Ref<InstanceType<typeof DibodevSiteAtelierStepHeading> | null> = ref(null)
const hasRejectedFile: Ref<boolean> = ref(false)
const isProcessing: Ref<boolean> = ref(false)

const photosHint: ComputedRef<string> = computed((): string => {
  const photoCount: number = props.state.photos.length
  if (photoCount === 0) {
    return props.wording.media.photosHint
  }
  if (photoCount === 1) {
    return props.wording.media.photoChosen
  }
  return QuizTextUtils.fillTemplate(props.wording.media.photosChosen, { count: String(photoCount) })
})

/**
 * Resizes the pictures chosen in a file field; the ones that cannot fit the caps are left out and signalled.
 * @param {Event} event - The change event of the field.
 * @param {number} maxCount - How many pictures to keep.
 * @returns {Promise<DibodevSiteAtelierPicture[]>} The resized pictures, in the order chosen.
 */
async function resizeChosenFiles(event: Event, maxCount: number): Promise<DibodevSiteAtelierPicture[]> {
  const input: HTMLInputElement | null = event.target instanceof HTMLInputElement ? event.target : null
  const files: File[] = Array.from(input?.files ?? []).slice(0, maxCount)
  hasRejectedFile.value = false
  isProcessing.value = true
  const pictures: DibodevSiteAtelierPicture[] = []
  for (const file of files) {
    const dataUrl: string | null = await ImageResizeUtils.resizeToDataUrl(
      file,
      SITE_ATELIER_IMAGE_MAX_EDGE_PX,
      SITE_ATELIER_IMAGE_MAX_BYTES,
    )
    if (dataUrl) {
      pictures.push({ dataUrl, fileName: file.name })
    } else {
      hasRejectedFile.value = true
    }
  }
  isProcessing.value = false
  if (input) {
    input.value = ''
  }
  return pictures
}

/**
 * Reads the logo chosen.
 * @param {Event} event - The change event of the logo field.
 * @returns {Promise<void>} Resolves once the logo is handed to the workshop.
 */
async function onLogoChange(event: Event): Promise<void> {
  const [logo]: DibodevSiteAtelierPicture[] = await resizeChosenFiles(event, 1)
  if (logo) {
    emit('set-logo', logo)
  }
}

/**
 * Reads the photos chosen, up to the six allowed in all.
 * @param {Event} event - The change event of the photos field.
 * @returns {Promise<void>} Resolves once the photos are handed to the workshop.
 */
async function onPhotosChange(event: Event): Promise<void> {
  const photos: DibodevSiteAtelierPicture[] = await resizeChosenFiles(
    event,
    SITE_ATELIER_MAX_PHOTOS - props.state.photos.length,
  )
  if (photos.length > 0) {
    emit('add-photos', photos)
  }
}

/**
 * Moves the focus to the step title.
 * @returns {void}
 */
function focusTitle(): void {
  heading.value?.focusTitle()
}

defineExpose({ focusTitle })
</script>
