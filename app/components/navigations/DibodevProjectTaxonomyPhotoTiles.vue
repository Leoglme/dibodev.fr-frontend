<template>
  <ul class="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5">
    <li
      v-for="(link, index) in props.links"
      :key="link.key"
      :class="
        isAloneOnLastPhoneRow(index)
          ? 'col-span-2 aspect-[2/1] sm:col-span-1 sm:aspect-[4/3] lg:aspect-[16/10]'
          : 'aspect-square sm:aspect-[4/3] lg:aspect-[16/10]'
      "
    >
      <NuxtLink :to="link.to" class="group relative block h-full overflow-hidden rounded-2xl bg-gray-700">
        <img
          v-if="link.photo"
          :src="link.photo.url"
          :srcset="link.photo.srcset"
          :sizes="isAloneOnLastPhoneRow(index) ? FULL_WIDTH_PHOTO_SIZES : PHOTO_SIZES"
          alt=""
          loading="lazy"
          decoding="async"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span class="absolute inset-0 bg-linear-to-t from-black/80 via-black/15 to-transparent" aria-hidden="true" />
        <span
          class="absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-100"
          aria-hidden="true"
        >
          <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" />
        </span>
        <span class="absolute inset-x-3.5 bottom-3 grid gap-0.5 text-white lg:inset-x-5 lg:bottom-4.5">
          <span class="text-base leading-tight font-medium lg:text-xl">{{ link.label }}</span>
          <span class="text-[13px] text-white/80 lg:text-sm">{{ $t('projects.hub.projectCount', link.count) }}</span>
        </span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { DibodevProjectTaxonomyLink } from '~/core/types/DibodevProjectTaxonomySection'
import type { DibodevProjectTaxonomyPhotoTilesProps } from '~/core/types/DibodevProjectTaxonomyPhotoTiles'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'

/** Two tiles per row on phones, three from tablets up. */
const PHOTO_SIZES: string = '(min-width: 640px) 33vw, 50vw'
/** The tile left alone on the last phone row takes the full width. */
const FULL_WIDTH_PHOTO_SIZES: string = '(min-width: 640px) 33vw, 100vw'

/** Photo tiles linking to listing pages: the photo of each listing, its name and its project count over a dark gradient. */
const props: DibodevProjectTaxonomyPhotoTilesProps = defineProps({
  links: {
    type: Array as PropType<DibodevProjectTaxonomyLink[]>,
    required: true,
  },
})

/**
 * Tells whether a tile is the last one and alone on its row on phones (two tiles per row), so it spans the full width.
 * @param {number} index - Position of the tile.
 * @returns {boolean} True for the last tile of an odd count.
 */
function isAloneOnLastPhoneRow(index: number): boolean {
  return index === props.links.length - 1 && props.links.length % 2 === 1
}
</script>
