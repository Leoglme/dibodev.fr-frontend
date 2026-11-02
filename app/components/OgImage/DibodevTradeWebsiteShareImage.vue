<template>
  <!-- Rendered by Satori at build time; key content stays in the centred 600×600 zone every platform keeps. -->
  <div class="relative flex h-full w-full flex-col items-center justify-center bg-[#ffffff] text-[#141414]">
    <div class="absolute top-[64px] left-[64px] flex flex-row items-center gap-[14px]">
      <DibodevLogo :size="44" />
      <span class="text-[30px] font-medium">Dibodev</span>
    </div>

    <div
      class="flex w-[560px] flex-col overflow-hidden rounded-[18px] border-2 border-[#e6e1ff] bg-[#f5f3ff] shadow-[0_24px_48px_rgba(91,75,208,0.18)]"
    >
      <div class="flex h-[30px] flex-row items-center gap-[8px] px-[16px]">
        <div class="h-[10px] w-[10px] rounded-full bg-[#d6d0fb]" />
        <div class="h-[10px] w-[10px] rounded-full bg-[#d6d0fb]" />
        <div class="h-[10px] w-[10px] rounded-full bg-[#d6d0fb]" />
      </div>
      <img :src="props.templateImageSrc" class="h-[300px] w-[560px] object-cover object-top" />
    </div>

    <div class="mt-[28px] flex flex-col items-center">
      <div
        v-for="(lineParts, lineIndex) in titleLineParts"
        :key="lineIndex"
        class="flex flex-row items-center text-[52px] leading-[1.12] font-semibold tracking-[-1.2px]"
      >
        <span v-if="lineParts.before">{{ lineParts.before }}</span>
        <span
          v-if="lineParts.highlight"
          class="text-[#6f5fe0]"
          :style="{ marginLeft: lineParts.before ? WORD_GAP : '0px' }"
          >{{ lineParts.highlight }}</span
        >
        <span v-if="lineParts.after" :style="{ marginLeft: lineParts.isAfterSpaced ? WORD_GAP : '0px' }">{{
          lineParts.after
        }}</span>
      </div>
    </div>

    <p class="mt-[14px] max-w-[640px] text-center text-[26px] leading-[1.3] text-[#66665f]">{{ props.subtitle }}</p>
    <div class="mt-[18px] flex flex-row items-center">
      <div
        class="flex flex-row items-center gap-[10px] rounded-full border-2 border-[#e6e1ff] bg-[#f5f3ff] px-[22px] py-[8px] text-[24px] font-medium text-[#5b4bd0]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6f5fe0"
          stroke-width="2.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
        <span>{{ props.badge }}</span>
      </div>
    </div>

    <div class="absolute bottom-[44px] flex flex-row items-center gap-[16px] text-[22px] font-medium text-[#66665f]">
      <div class="h-[2px] w-[44px] bg-[#14141433]" />
      <span>dibodev.fr</span>
      <div class="h-[2px] w-[44px] bg-[#14141433]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevToolShareImageLineParts } from '~/core/types/DibodevToolShareImage'
import type { DibodevTradeWebsiteShareImageProps } from '~/core/types/DibodevTradeWebsiteShareImage'
import { computed } from 'vue'
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import { ShareImageTitleUtils } from '~/core/utils/ShareImageTitleUtils'

const WORD_GAP: string = '14px'

/**
 * Share image of a "website for <trade>" page: the capture of the template in a browser frame, the title and the price.
 */
const props: DibodevTradeWebsiteShareImageProps = defineProps({
  titleLines: {
    type: Array as PropType<string[]>,
    required: true,
  },
  highlight: {
    type: String as PropType<string>,
    default: '',
  },
  subtitle: {
    type: String as PropType<string>,
    required: true,
  },
  badge: {
    type: String as PropType<string>,
    required: true,
  },
  templateImageSrc: {
    type: String as PropType<string>,
    required: true,
  },
})

const titleLineParts: ComputedRef<DibodevToolShareImageLineParts[]> = computed((): DibodevToolShareImageLineParts[] =>
  ShareImageTitleUtils.splitLines(props.titleLines, props.highlight),
)
</script>
