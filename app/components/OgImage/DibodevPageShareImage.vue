<template>
  <!-- Rendered by Satori at build time (gradients inline); key content stays in the centred 600×600 zone every platform keeps. -->
  <div
    class="relative flex h-full w-full flex-col items-center justify-center bg-[#101623] text-[#f5f4fb]"
    style="
      background-image:
        radial-gradient(circle at 50% 28%, rgba(132, 114, 243, 0.34) 0%, rgba(132, 114, 243, 0) 42%),
        radial-gradient(circle at 100% 0%, rgba(132, 114, 243, 0.22) 0%, rgba(132, 114, 243, 0) 30%),
        radial-gradient(circle at 0% 100%, rgba(34, 211, 238, 0.14) 0%, rgba(34, 211, 238, 0) 35%);
    "
  >
    <div class="absolute top-[112px] left-[56px] flex flex-row items-center gap-[14px]">
      <DibodevLogo :size="44" />
      <span class="text-[30px] font-medium">Dibodev</span>
    </div>

    <div
      class="absolute top-[114px] right-[56px] flex items-center gap-[10px] rounded-full border-2 border-[#bdb3ff59] px-[20px] py-[10px] text-[22px] font-medium text-[#d9d3ff]"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#bdb3ff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path v-for="iconPath in PLACE_ICON_PATHS" :key="iconPath" :d="iconPath" />
      </svg>
      <span>{{ props.place }}</span>
    </div>

    <div
      class="flex h-[244px] w-[244px] items-center justify-center rounded-full"
      style="background-image: linear-gradient(145deg, #bdb3ff 0%, #8472f3 45%, #22d3ee 100%)"
    >
      <img :src="PORTRAIT_SRC" class="h-[232px] w-[232px] rounded-full" />
    </div>

    <p class="mt-[24px] text-[76px] leading-[1.1] font-semibold tracking-[-1px]">{{ PERSON_NAME }}</p>
    <p class="mt-[4px] text-[30px] leading-[1.3] font-medium text-[#bdb3ff]">{{ props.role }}</p>

    <div
      class="mt-[26px] flex items-center gap-[12px] rounded-full border-2 border-[#bdb3ff6b] bg-[#8472f329] px-[28px] py-[12px] text-[28px] font-medium"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#bdb3ff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path v-for="iconPath in PAGE_ICON_PATHS[props.page]" :key="iconPath" :d="iconPath" />
      </svg>
      <span>{{ props.label }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevPageShareImageProps } from '~/core/types/DibodevPageShareImage'
import type { ShareImagePage } from '~/core/types/ShareImagePage'
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import { PERSON_NAME } from '~/config/schema'

const PORTRAIT_SRC: string = '/images/og/leo-guillaume-portrait.jpg'
/** Lucide icons (ISC licence), written as paths only: the renderer draws <path> elements. */
const PAGE_ICON_PATHS: Record<ShareImagePage, string[]> = {
  home: ['m18 16 4-4-4-4', 'm6 8-4 4 4 4', 'm14.5 4-5 16'],
  about: ['M17 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0', 'M20 21a8 8 0 0 0-16 0'],
  contact: ['M7.9 20A9 9 0 1 0 4 16.1L2 22Z'],
  businessSoftware: [
    'm12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z',
    'm22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65',
    'm22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65',
  ],
  projects: [
    'm6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2',
  ],
  blog: [
    'M12 7v14',
    'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z',
  ],
}
const PLACE_ICON_PATHS: string[] = [
  'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z',
  'M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0',
]

const props: DibodevPageShareImageProps = defineProps({
  page: {
    type: String as PropType<ShareImagePage>,
    required: true,
  },
  label: {
    type: String as PropType<string>,
    required: true,
  },
  role: {
    type: String as PropType<string>,
    required: true,
  },
  place: {
    type: String as PropType<string>,
    required: true,
  },
})
</script>
