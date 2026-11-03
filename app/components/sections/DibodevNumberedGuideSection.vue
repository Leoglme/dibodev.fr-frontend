<template>
  <section :id="props.anchorId || undefined" class="px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" align="left" />
      <ol class="grid gap-4 lg:grid-cols-3 lg:gap-5">
        <li
          v-for="(item, index) in props.items"
          :key="item.title"
          class="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 rounded-xl border border-gray-300 p-5 sm:p-6"
          :class="cardClass"
        >
          <span
            class="grid h-10 w-10 place-items-center rounded-full border border-gray-400 bg-gray-800 text-base font-medium text-gray-100 tabular-nums"
            aria-hidden="true"
          >
            {{ index + 1 }}
          </span>
          <div class="grid min-w-0 gap-2">
            <h3 class="text-lg leading-snug font-medium text-gray-100">{{ item.title }}</h3>
            <p class="text-[15px] leading-6 text-gray-200">{{ item.text }}</p>
            <p
              v-if="item.pitfall"
              class="mt-1 grid gap-0.5 border-t border-dashed border-gray-300 pt-2.5 text-sm leading-6 text-gray-200"
            >
              <span class="text-xs font-medium tracking-[0.06em] text-[#b45309] uppercase">{{
                props.pitfallLabel
              }}</span>
              {{ item.pitfall }}
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type {
  DibodevNumberedGuideItem,
  DibodevNumberedGuideSectionProps,
} from '~/core/types/DibodevNumberedGuideSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import { computed } from 'vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import { SECTION_TONE_CARD_CLASSES, SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'

const props: DibodevNumberedGuideSectionProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    default: '',
  },
  eyebrow: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  intro: {
    type: String as PropType<string>,
    default: '',
  },
  pitfallLabel: {
    type: String as PropType<string>,
    default: '',
  },
  items: {
    type: Array as PropType<DibodevNumberedGuideItem[]>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'white',
  },
})

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
const cardClass: ComputedRef<string> = computed((): string => SECTION_TONE_CARD_CLASSES[props.tone])
</script>
