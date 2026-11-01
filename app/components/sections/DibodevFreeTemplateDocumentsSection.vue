<template>
  <section :id="props.anchorId" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-10 lg:gap-12">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" />

      <div class="grid gap-5 md:grid-cols-2 lg:gap-6" :class="documentsGridClass">
        <article
          v-for="(document, index) in props.documents"
          :key="document.title"
          class="grid content-start gap-4 rounded-2xl border border-gray-300 p-6 sm:p-7"
          :class="cardClass"
        >
          <div class="flex items-start gap-4">
            <span
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              :style="{ backgroundColor: getAccentPalette(index).background, color: getAccentPalette(index).color }"
              aria-hidden="true"
            >
              <DibodevIcon name="FileSpreadsheet" mode="stroke" :width="22" :height="22" />
            </span>
            <div class="grid gap-1">
              <h3 class="text-lg leading-snug font-medium text-gray-100">
                <DibodevHyphenSafeText :text="document.title" />
              </h3>
              <p class="text-muted text-sm">{{ document.format }}</p>
            </div>
          </div>
          <ul class="grid gap-2.5">
            <li
              v-for="item in document.items"
              :key="item"
              class="flex items-start gap-3 text-[15px] leading-6 text-gray-200"
            >
              <DibodevIcon
                name="Check"
                mode="stroke"
                :width="16"
                :height="16"
                class="text-primary mt-1 shrink-0"
                aria-hidden="true"
              />
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevFreeTemplateDocumentsSectionProps } from '~/core/types/DibodevFreeTemplateDocumentsSection'
import type { DibodevFreeTemplateDocument } from '~/core/types/DibodevFreeTemplatePage'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import { computed } from 'vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevHyphenSafeText from '~/components/ui/DibodevHyphenSafeText.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { getAccentPalette } from '~/core/constants/accentPalettes'
import { SECTION_TONE_CARD_CLASSES, SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'

/**
 * What a free template contains: one card per document (a PDF page, an Excel sheet) with its fields, columns and formulas.
 */
const props: DibodevFreeTemplateDocumentsSectionProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    default: 'contents',
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
  documents: {
    type: Array as PropType<DibodevFreeTemplateDocument[]>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'offWhite',
  },
})

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
const cardClass: ComputedRef<string> = computed((): string => SECTION_TONE_CARD_CLASSES[props.tone])
/** Three or more documents sit three by three on wide screens, two documents stay side by side. */
const documentsGridClass: ComputedRef<string> = computed((): string =>
  props.documents.length >= 3 ? 'lg:grid-cols-3' : '',
)
</script>
