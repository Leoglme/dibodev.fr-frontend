<template>
  <section :id="props.anchorId" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" />

      <ul class="grid gap-5 sm:grid-cols-2" :class="COLUMNS_CLASSES[props.columns]">
        <li
          v-for="guarantee in props.guarantees"
          :key="guarantee.title"
          class="flex gap-4 rounded-lg border border-gray-300 bg-white p-6"
        >
          <span
            class="bg-accent-tint text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            aria-hidden="true"
          >
            <DibodevIcon name="Check" mode="stroke" :width="18" :height="18" />
          </span>
          <div class="grid gap-1.5">
            <h3 class="text-lg leading-snug font-medium text-gray-100">{{ guarantee.title }}</h3>
            <p class="text-[15px] leading-6 text-gray-200">{{ guarantee.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type {
  DibodevGuarantee,
  DibodevGuaranteesColumns,
  DibodevGuaranteesSectionProps,
} from '~/core/types/DibodevGuaranteesSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'

/** Tailwind class of each large-screen column count (full class names so Tailwind keeps them). */
const COLUMNS_CLASSES: Record<DibodevGuaranteesColumns, string> = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
}

/**
 * "What you get" section: concrete guarantees listed with check marks.
 */
const props: DibodevGuaranteesSectionProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    default: 'guarantees',
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
  guarantees: {
    type: Array as PropType<DibodevGuarantee[]>,
    required: true,
  },
  columns: {
    type: Number as PropType<DibodevGuaranteesColumns>,
    default: 3,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'offWhite',
  },
})

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
</script>
