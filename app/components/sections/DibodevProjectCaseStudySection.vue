<template>
  <section
    id="project-case-study"
    class="w-full scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28"
    :class="toneClass"
    data-aos="fade-up"
  >
    <div class="mx-auto grid w-full max-w-7xl gap-10 lg:gap-12">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" />

      <DibodevStatsBand v-if="props.stats.length > 0" :stats="props.stats" />

      <ol class="grid gap-5 lg:grid-cols-3">
        <li
          v-for="(column, columnIndex) in props.columns"
          :key="column.stage"
          class="relative flex flex-col gap-5 rounded-2xl border border-gray-300 p-6 sm:p-7"
          :class="cardToneClass"
        >
          <div class="flex items-center gap-3">
            <span
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              :style="{
                color: PROJECT_CASE_STUDY_STAGE_ACCENTS[column.stage].color,
                backgroundColor: PROJECT_CASE_STUDY_STAGE_ACCENTS[column.stage].background,
              }"
              aria-hidden="true"
            >
              <DibodevIcon
                :name="PROJECT_CASE_STUDY_STAGE_ICONS[column.stage]"
                mode="stroke"
                :width="20"
                :height="20"
              />
            </span>
            <h3 class="text-lg leading-snug font-medium text-gray-100">{{ column.title }}</h3>
          </div>

          <ul class="grid gap-3">
            <li v-for="item in column.items" :key="item" class="flex gap-3 text-[15px] leading-6 text-gray-200">
              <DibodevIcon
                v-if="column.stage === 'after'"
                name="Check"
                mode="stroke"
                :width="18"
                :height="18"
                :color="PROJECT_CASE_STUDY_STAGE_ACCENTS[column.stage].color"
                class="mt-[3px] shrink-0"
                aria-hidden="true"
              />
              <span
                v-else
                class="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full"
                :style="{ backgroundColor: PROJECT_CASE_STUDY_STAGE_ACCENTS[column.stage].color }"
                aria-hidden="true"
              />
              <span>{{ item }}</span>
            </li>
          </ul>

          <span
            v-if="columnIndex < props.columns.length - 1"
            class="text-muted absolute top-1/2 -right-7 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-300 bg-white lg:flex"
            aria-hidden="true"
          >
            <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" />
          </span>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { DibodevProjectCaseStudyColumn } from '~/core/types/DibodevProjectCaseStudy'
import type { DibodevProjectCaseStudySectionProps } from '~/core/types/DibodevProjectCaseStudySection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevStatsBand from '~/components/data-displays/DibodevStatsBand.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { SECTION_TONE_CARD_CLASSES, SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'
import { PROJECT_CASE_STUDY_STAGE_ACCENTS, PROJECT_CASE_STUDY_STAGE_ICONS } from '~/core/constants/projectCaseStudies'

const props: DibodevProjectCaseStudySectionProps = defineProps({
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
  stats: {
    type: Array as PropType<DibodevStatItemProps[]>,
    default: (): DibodevStatItemProps[] => [],
  },
  columns: {
    type: Array as PropType<DibodevProjectCaseStudyColumn[]>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'offWhite',
  },
})

/* COMPUTED */
const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
const cardToneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CARD_CLASSES[props.tone])
</script>
