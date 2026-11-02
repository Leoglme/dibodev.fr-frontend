<template>
  <section :id="props.anchorId" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" :class="toneClass">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" align="center" />
      <div class="grid justify-items-center gap-6">
        <div
          :id="documentId"
          class="relative w-full max-w-3xl overflow-hidden"
          :class="isExpanded ? 'max-h-none' : 'max-h-[780px]'"
        >
          <DibodevProjectSpecificationSheet :specification="props.specification" headingLevel="section" />
          <div
            v-if="!isExpanded"
            class="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-44 bg-linear-to-b from-white/0 to-white to-80%"
            aria-hidden="true"
          />
        </div>
        <div class="grid justify-items-center gap-3">
          <button
            type="button"
            class="border-primary text-primary hover:bg-surface-tint hover:text-primary-dark focus-visible:ring-primary inline-flex min-h-12 cursor-pointer items-center justify-center rounded-lg border bg-white px-5 py-3 text-[15px] leading-6 font-medium transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            :aria-expanded="isExpanded"
            :aria-controls="documentId"
            @click="isExpanded = !isExpanded"
          >
            {{ isExpanded ? props.collapseLabel : props.expandLabel }}
          </button>
          <NuxtLink
            :to="props.generatorTo"
            class="text-primary hover:text-primary-dark inline-flex w-fit items-center gap-1.5 text-[15px] font-medium decoration-2 underline-offset-4 transition-colors hover:underline"
          >
            {{ props.generatorLinkLabel }}
            <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { DibodevProjectSpecificationDocument } from '~/core/types/DibodevProjectSpecification'
import type { DibodevProjectSpecificationExampleSectionProps } from '~/core/types/DibodevProjectSpecificationExampleSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import { computed, ref } from 'vue'
import DibodevProjectSpecificationSheet from '~/components/project-specification/DibodevProjectSpecificationSheet.vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'

/** The whole example stays in the HTML for search engines and AI assistants, only folded on screen. */
const props: DibodevProjectSpecificationExampleSectionProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    default: 'exemple',
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
  specification: {
    type: Object as PropType<DibodevProjectSpecificationDocument>,
    required: true,
  },
  expandLabel: {
    type: String as PropType<string>,
    required: true,
  },
  collapseLabel: {
    type: String as PropType<string>,
    required: true,
  },
  generatorLinkLabel: {
    type: String as PropType<string>,
    required: true,
  },
  generatorTo: {
    type: String as PropType<string>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'white',
  },
})

const documentId: string = `${props.anchorId}-document`

/* REFS */
const isExpanded: Ref<boolean> = ref(false)

/* COMPUTED */
const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
</script>
