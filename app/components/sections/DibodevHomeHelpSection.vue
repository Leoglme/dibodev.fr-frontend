<template>
  <section id="help" class="bg-gray-800 px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div class="mx-auto grid w-full max-w-7xl gap-12 lg:gap-14">
      <DibodevSectionHeading
        :eyebrow="$t('home.help.eyebrow')"
        :title="$t('home.help.title')"
        :intro="$t('home.help.subtitle')"
        align="center"
      />

      <ul class="grid gap-5 sm:grid-cols-2 lg:gap-6">
        <li
          v-for="(block, index) in blocks"
          :key="block.key"
          class="situation-card flex gap-5 rounded-xl border border-gray-300 bg-white p-6 sm:p-7"
          :style="{ '--situation-accent': block.palette.color }"
        >
          <span
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[15px] font-medium"
            :style="{ backgroundColor: block.palette.background, color: block.palette.color }"
            aria-hidden="true"
          >
            {{ formatSituationNumber(index + 1) }}
          </span>
          <div class="grid content-start gap-2">
            <h3 class="text-lg leading-snug font-medium text-gray-100">
              {{ block.title }}
            </h3>
            <p class="text-[15px] leading-6 text-gray-200">
              {{ block.text }}
            </p>
          </div>
        </li>
      </ul>

      <div class="grid justify-items-center gap-5 text-center">
        <p class="max-w-xl text-[17px] leading-7 text-gray-200">
          {{ $t('home.help.ctaIntro') }}
        </p>
        <DibodevButton
          :to="localePath('/contact')"
          size="lg"
          class="w-full sm:w-auto"
          @click="track(TRACKING_EVENTS.ctaProjectDiscussion, { location: 'home_help' })"
        >
          {{ $t('home.help.cta') }}
        </DibodevButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevAccentPalette } from '~/core/types/DibodevAccentPalette'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import { getAccentPalette } from '~/core/constants/accentPalettes'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

type HelpBlock = {
  key: string
  title: string
  text: string
  palette: DibodevAccentPalette
}

const HELP_BLOCK_KEYS: string[] = ['launch', 'tool', 'automate', 'ai']

const localePath = useLocalePath()
const { t } = useI18n()
const { track } = useTracking()

const blocks: ComputedRef<HelpBlock[]> = computed((): HelpBlock[] =>
  HELP_BLOCK_KEYS.map(
    (key: string, index: number): HelpBlock => ({
      key,
      title: t(`home.help.blocks.${key}.title`),
      text: t(`home.help.blocks.${key}.text`),
      palette: getAccentPalette(index),
    }),
  ),
)

/**
 * Formats a situation number on two digits ("01", "02"…).
 * @param {number} situationNumber - The 1-based number.
 * @returns {string} The zero-padded number.
 */
function formatSituationNumber(situationNumber: number): string {
  return situationNumber < 10 ? `0${situationNumber}` : String(situationNumber)
}
</script>

<style scoped>
.situation-card {
  border-left: 4px solid var(--situation-accent);
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.situation-card:hover {
  box-shadow: 0 14px 36px rgba(20, 20, 20, 0.06);
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .situation-card {
    transition: none;
  }

  .situation-card:hover {
    transform: none;
  }
}
</style>
