<template>
  <!-- Rendered by Satori at build time; key content stays in the centred 600×600 zone every platform keeps. -->
  <div class="relative flex h-full w-full flex-col items-center justify-center bg-[#ffffff] text-[#141414]">
    <div class="absolute top-[64px] left-[64px] flex flex-row items-center gap-[14px]">
      <DibodevLogo :size="44" />
      <span class="text-[30px] font-medium">Dibodev</span>
    </div>

    <div class="absolute top-[60px] right-[64px] flex items-center gap-[12px] text-[22px] font-medium text-[#4b4b47]">
      <img :src="PORTRAIT_SRC" class="h-[52px] w-[52px] rounded-full border-2 border-[#e6e1ff]" />
      <span>{{ PERSON_NAME }}</span>
    </div>

    <div
      class="flex h-[330px] w-[680px] items-center justify-center rounded-[24px] border-2 border-[#e6e1ff] bg-[#f5f3ff]"
    >
      <img :src="props.screenshotUrl" class="h-[282px] w-[620px] rounded-[12px] object-contain" />
    </div>

    <div class="mt-[40px] h-[4px] w-[56px] rounded-full bg-[#6f5fe0]" />
    <p
      class="mt-[18px] max-w-[900px] text-center leading-[1.08] font-semibold tracking-[-1px]"
      :style="{ fontSize: `${titleFontSize}px` }"
    >
      {{ props.name }}
    </p>
    <p v-if="props.tagline" class="mt-[10px] max-w-[760px] text-center text-[28px] leading-[1.3] text-[#66665f]">
      {{ props.tagline }}
    </p>

    <div class="absolute bottom-[52px] flex flex-row items-center gap-[16px] text-[22px] font-medium text-[#66665f]">
      <div class="h-[2px] w-[44px] bg-[#14141433]" />
      <span>dibodev.fr</span>
      <div class="h-[2px] w-[44px] bg-[#14141433]" />
    </div>
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
