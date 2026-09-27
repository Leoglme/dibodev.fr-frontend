<template>
  <!-- Rendered by Satori at build time (gradients inline); key content stays in the centred 600×600 zone every platform keeps. -->
  <div
    class="relative flex h-full w-full flex-col items-center justify-center bg-[#101623] text-[#f5f4fb]"
    style="
      background-image:
        radial-gradient(circle at 50% 30%, rgba(132, 114, 243, 0.32) 0%, rgba(132, 114, 243, 0) 45%),
        radial-gradient(circle at 0% 100%, rgba(34, 211, 238, 0.14) 0%, rgba(34, 211, 238, 0) 35%);
    "
  >
    <div class="absolute top-[112px] left-[56px] flex flex-row items-center gap-[14px]">
      <DibodevLogo :size="44" />
      <span class="text-[30px] font-medium">Dibodev</span>
    </div>

    <div class="absolute top-[108px] right-[56px] flex items-center gap-[12px] text-[22px] font-medium text-[#d9d3ff]">
      <img :src="PORTRAIT_SRC" class="h-[48px] w-[48px] rounded-full border-2 border-[#8472f3]" />
      <span>{{ PERSON_NAME }}</span>
    </div>

    <div class="flex h-[300px] w-[600px] items-center justify-center">
      <img :src="props.screenshotUrl" class="max-h-[300px] max-w-[600px] rounded-[16px] object-contain" />
    </div>

    <p
      class="mt-[28px] max-w-[900px] text-center leading-[1.1] font-semibold tracking-[-0.5px]"
      :style="{ fontSize: `${titleFontSize}px` }"
    >
      {{ props.name }}
    </p>
    <p
      v-if="props.tagline"
      class="mt-[12px] max-w-[700px] text-center text-[28px] leading-[1.3] font-medium text-[#bdb3ff]"
    >
      {{ props.tagline }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevProjectShareImageProps } from '~/core/types/DibodevProjectShareImage'
import { computed } from 'vue'
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import { PERSON_NAME } from '~/config/schema'

const PORTRAIT_SRC: string = '/images/og/leo-guillaume-portrait.jpg'
const LONG_NAME_LENGTH: number = 22
const MEDIUM_NAME_LENGTH: number = 14

const props: DibodevProjectShareImageProps = defineProps({
  name: {
    type: String as PropType<string>,
    required: true,
  },
  tagline: {
    type: String as PropType<string>,
    default: '',
  },
  screenshotUrl: {
    type: String as PropType<string>,
    required: true,
  },
})

const titleFontSize: ComputedRef<number> = computed((): number => {
  if (props.name.length > LONG_NAME_LENGTH) return 44
  if (props.name.length > MEDIUM_NAME_LENGTH) return 54
  return 66
})
</script>
