<template>
  <section
    id="help"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex w-screen max-w-screen items-center justify-center bg-gray-800 px-6 py-32 sm:px-8 sm:py-56"
  >
    <div class="grid w-full max-w-7xl gap-16 sm:gap-20">
      <div class="grid justify-start gap-4">
        <h2 class="text-left text-2xl font-semibold sm:text-[32px]">
          {{ $t('home.help.title') }}
        </h2>
        <p class="text-left text-sm leading-7 text-gray-200 sm:text-base">
          {{ $t('home.help.subtitle') }}
        </p>
      </div>

      <div class="grid gap-x-20 gap-y-20 sm:grid-cols-2">
        <div
          v-for="(block, index) in blocks"
          :key="block.title"
          class="grid gap-2 border-l-[3px] pl-4"
          :style="{ borderLeftColor: block.borderColor }"
          data-aos="fade-up"
          :data-aos-delay="index * 80"
        >
          <h3 class="text-left text-base font-medium text-gray-100 sm:text-lg">
            {{ block.title }}
          </h3>
          <p class="text-left text-sm leading-7 text-gray-200">
            {{ block.text }}
          </p>
        </div>
      </div>

      <div
        class="flex flex-col items-center gap-6 pt-14 sm:pt-16"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <p class="text-center text-base text-gray-100">
          {{ $t('home.help.ctaIntro') }}
        </p>
        <DibodevButton :to="localePath('/contact')" icon="Mail" class="w-full sm:max-w-xs">
          {{ $t('home.help.cta') }}
        </DibodevButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'

const localePath = useLocalePath()
const { t } = useI18n()

type HelpBlock = {
  title: string
  text: string
  borderColor: string
}

const BLOCK_BORDER_COLORS: readonly [string, string, string, string] = [
  '#bdb3ff', /* primary-light */
  '#7dd3fc', /* sky */
  '#86efac', /* green */
  '#f9a8d4', /* pink */
]

const blocks: ComputedRef<HelpBlock[]> = computed((): HelpBlock[] => [
  {
    title: t('home.help.blocks.launch.title'),
    text: t('home.help.blocks.launch.text'),
    borderColor: BLOCK_BORDER_COLORS[0],
  },
  {
    title: t('home.help.blocks.tool.title'),
    text: t('home.help.blocks.tool.text'),
    borderColor: BLOCK_BORDER_COLORS[1],
  },
  {
    title: t('home.help.blocks.automate.title'),
    text: t('home.help.blocks.automate.text'),
    borderColor: BLOCK_BORDER_COLORS[2],
  },
  {
    title: t('home.help.blocks.ai.title'),
    text: t('home.help.blocks.ai.text'),
    borderColor: BLOCK_BORDER_COLORS[3],
  },
])
</script>
