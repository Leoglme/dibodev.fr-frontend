<template>
  <!-- Rendered by Satori at build time; key content stays in the centred 600×600 zone every platform keeps. -->
  <div class="relative flex h-full w-full flex-col items-center justify-center bg-[#ffffff] text-[#141414]">
    <div class="absolute top-[64px] left-[64px] flex flex-row items-center gap-[14px]">
      <DibodevLogo :size="44" />
      <span class="text-[30px] font-medium">Dibodev</span>
    </div>

    <div
      class="flex h-[128px] w-[128px] flex-row items-center justify-center rounded-full border-[3px] border-[#e6e1ff] bg-[#f5f3ff]"
    >
      <svg
        class="h-[64px] w-[64px]"
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#5b4bd0"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path v-for="iconPath in TOOL_ICON_PATHS[props.icon]" :key="iconPath" :d="iconPath" />
      </svg>
    </div>

    <div class="mt-[30px] flex flex-col items-center">
      <div
        v-for="(lineParts, lineIndex) in titleLineParts"
        :key="lineIndex"
        class="flex flex-row items-center text-[60px] leading-[1.12] font-semibold tracking-[-1.5px]"
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

    <p class="mt-[20px] max-w-[600px] text-center text-[28px] leading-[1.35] text-[#66665f]">{{ props.subtitle }}</p>

    <div
      class="mt-[30px] flex flex-row items-center gap-[12px] rounded-full border-2 border-[#e6e1ff] bg-[#f5f3ff] px-[28px] py-[12px] text-[27px] font-medium text-[#5b4bd0]"
    >
      <svg
        width="28"
        height="28"
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

    <div class="absolute bottom-[52px] flex flex-row items-center gap-[16px] text-[22px] font-medium text-[#66665f]">
      <div class="h-[2px] w-[44px] bg-[#14141433]" />
      <span>dibodev.fr</span>
      <div class="h-[2px] w-[44px] bg-[#14141433]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type {
  DibodevToolShareImageIcon,
  DibodevToolShareImageLineParts,
  DibodevToolShareImageProps,
} from '~/core/types/DibodevToolShareImage'
import { computed } from 'vue'
import DibodevLogo from '~/components/branding/DibodevLogo.vue'

/** Lucide icons (ISC licence), written as paths only: the renderer draws <path> elements. */
const TOOL_ICON_PATHS: Record<DibodevToolShareImageIcon, string[]> = {
  car: [
    'M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2',
    'M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0',
    'M9 17h6',
    'M19 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0',
  ],
  truck: [
    'M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2',
    'M15 18H9',
    'M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14',
    'M19 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0',
    'M9 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0',
  ],
  bike: [
    'M22 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0',
    'M9 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0',
    'M16 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0',
    'M12 17.5V14l-3-3 4-3 2 3h2',
  ],
  wrench: [
    'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
  ],
}

/** Space drawn between the parts of a title line (Satori drops the spaces at the edge of each span). */
const WORD_GAP: string = '16px'

const props: DibodevToolShareImageProps = defineProps({
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
  icon: {
    type: String as PropType<DibodevToolShareImageIcon>,
    default: 'car',
  },
})

/** Spaces around the highlight become margins, only where the title has one ("auto-école ?" but "autoescuela?"). */
const titleLineParts: ComputedRef<DibodevToolShareImageLineParts[]> = computed((): DibodevToolShareImageLineParts[] =>
  props.titleLines.map((line: string): DibodevToolShareImageLineParts => {
    const highlightIndex: number = props.highlight ? line.indexOf(props.highlight) : -1
    if (highlightIndex === -1) return { before: line, highlight: '', after: '', isAfterSpaced: false }
    const rawAfter: string = line.slice(highlightIndex + props.highlight.length)
    return {
      before: line.slice(0, highlightIndex).trim(),
      highlight: props.highlight,
      after: rawAfter.trim(),
      isAfterSpaced: /^\s/.test(rawAfter),
    }
  }),
)
</script>
