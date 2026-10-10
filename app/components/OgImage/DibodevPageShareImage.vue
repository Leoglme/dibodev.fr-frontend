<template>
  <!-- Rendered by Satori at build time; key content stays in the centred 600×600 zone every platform keeps. -->
  <div class="relative flex h-full w-full flex-col items-center justify-center bg-[#ffffff] text-[#141414]">
    <div class="absolute top-[64px] left-[64px] flex flex-row items-center gap-[14px]">
      <DibodevLogo :size="44" />
      <span class="text-[30px] font-medium">Dibodev</span>
    </div>

    <div
      class="absolute top-[64px] right-[64px] flex items-center gap-[10px] rounded-full border-2 border-[#1414141f] bg-[#ffffff] px-[20px] py-[10px] text-[22px] font-medium"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#66665f"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path v-for="iconPath in PLACE_ICON_PATHS" :key="iconPath" :d="iconPath" />
      </svg>
      <span>{{ props.place }}</span>
    </div>

    <div class="flex h-[292px] w-[292px] items-center justify-center rounded-full bg-[#f5f3ff]">
      <div
        class="flex h-[248px] w-[248px] items-center justify-center rounded-full border-[3px] border-[#6f5fe0] bg-[#ffffff]"
      >
        <img :src="PORTRAIT_SRC" class="h-[226px] w-[226px] rounded-full" />
      </div>
    </div>

    <p class="mt-[26px] text-[76px] leading-[1.05] font-semibold tracking-[-2px]">{{ PERSON_NAME }}</p>
    <p class="mt-[8px] text-[30px] leading-[1.3] text-[#66665f]">{{ roleText }}</p>

    <div
      class="mt-[28px] flex items-center gap-[12px] rounded-full border-2 border-[#e6e1ff] bg-[#f5f3ff] px-[28px] py-[12px] text-[27px] font-medium text-[#5b4bd0]"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#6f5fe0"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path v-for="iconPath in PAGE_ICON_PATHS[props.page]" :key="iconPath" :d="iconPath" />
      </svg>
      <span>{{ props.label }}</span>
    </div>

    <div class="absolute bottom-[52px] flex flex-row items-center gap-[16px] text-[22px] font-medium text-[#66665f]">
      <div class="h-[2px] w-[44px] bg-[#14141433]" />
      <span>dibodev.fr</span>
      <div class="h-[2px] w-[44px] bg-[#14141433]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevPageShareImageProps } from '~/core/types/DibodevPageShareImage'
import type { ShareImagePage } from '~/core/types/ShareImagePage'
import { computed } from 'vue'
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import { PERSON_NAME } from '~/config/schema'

const PORTRAIT_SRC: string = '/images/og/leo-guillaume-portrait.jpg'
/** Rubik has no glyph for the non-breaking hyphen the site uses in « full‑stack »: Satori would draw a box. */
const NON_BREAKING_HYPHEN_REGEX: RegExp = /‑/g
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
  freelanceRennes: [
    'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16',
    'M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z',
  ],
  projects: [
    'm6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2',
  ],
  blog: [
    'M12 7v14',
    'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z',
  ],
  tools: ['M21 4h-7', 'M10 4H3', 'M21 12h-9', 'M8 12H3', 'M21 20h-5', 'M12 20H3', 'M14 2v4', 'M8 10v4', 'M16 18v4'],
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

const roleText: ComputedRef<string> = computed((): string => props.role.replace(NON_BREAKING_HYPHEN_REGEX, '-'))
</script>
