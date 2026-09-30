<template>
  <section class="px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div
      class="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16"
    >
      <div class="grid content-start gap-6">
        <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.description" />
        <ul class="grid gap-3">
          <li
            v-for="highlight in props.highlights"
            :key="highlight"
            class="flex items-start gap-3 text-[15px] leading-6 text-gray-200"
          >
            <DibodevIcon
              name="Check"
              mode="stroke"
              :width="18"
              :height="18"
              class="text-primary mt-0.5 shrink-0"
              aria-hidden="true"
            />
            {{ highlight }}
          </li>
        </ul>
        <NuxtLink
          :to="props.linkTo"
          class="text-primary hover:text-primary-dark flex w-fit items-center gap-2 text-[15px] font-medium transition-colors"
        >
          {{ props.linkLabel }}
          <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
        </NuxtLink>
      </div>

      <figure
        v-if="props.imageUrl"
        :class="
          props.showBrowserFrame
            ? 'overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-[0_28px_70px_-48px_rgba(20,20,20,0.45)]'
            : ''
        "
      >
        <div
          v-if="props.showBrowserFrame"
          class="flex items-center gap-1.5 border-b border-gray-300 bg-gray-800 px-4 py-3"
          aria-hidden="true"
        >
          <span
            v-for="browserBarDot in BROWSER_BAR_DOTS"
            :key="browserBarDot"
            class="h-2.5 w-2.5 rounded-full bg-gray-400"
          />
          <span class="text-muted ml-3 truncate text-xs">{{ props.browserBarCaption }}</span>
        </div>
        <img
          :src="props.imageUrl"
          :srcset="props.imageSrcset || undefined"
          sizes="(min-width: 1024px) 700px, 100vw"
          :alt="props.imageAlt"
          :width="IMAGE_WIDTH"
          :height="IMAGE_HEIGHT"
          loading="lazy"
          decoding="async"
          class="block h-auto w-full"
        />
      </figure>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevProjectSpotlightSectionProps } from '~/core/types/DibodevProjectSpotlightSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import { computed } from 'vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'

const BROWSER_BAR_DOTS: string[] = ['close', 'minimise', 'maximise']
/** 16:9 ratio of the screenshots, reserved before the image loads. */
const IMAGE_WIDTH: number = 1600
const IMAGE_HEIGHT: number = 900

const props: DibodevProjectSpotlightSectionProps = defineProps({
  eyebrow: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  description: {
    type: String as PropType<string>,
    default: '',
  },
  highlights: {
    type: Array as PropType<string[]>,
    default: (): string[] => [],
  },
  linkLabel: {
    type: String as PropType<string>,
    required: true,
  },
  linkTo: {
    type: String as PropType<string>,
    required: true,
  },
  imageUrl: {
    type: String as PropType<string>,
    default: '',
  },
  imageSrcset: {
    type: String as PropType<string>,
    default: '',
  },
  imageAlt: {
    type: String as PropType<string>,
    default: '',
  },
  browserBarCaption: {
    type: String as PropType<string>,
    default: '',
  },
  /** False for a device mockup, which already draws its own frame. */
  showBrowserFrame: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'tint',
  },
})

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
</script>
