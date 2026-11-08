<template>
  <article
    :id="props.anchorId"
    lang="fr"
    class="legal-notice-sheet relative z-[1] rounded-lg border border-gray-300 bg-white px-5 py-6 text-sm leading-[1.6] break-words text-gray-200 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_18px_40px_-24px_rgba(20,20,20,0.28)] sm:px-9 sm:py-8"
  >
    <header class="grid gap-1.5 border-b border-gray-300 pb-4">
      <p class="text-[22px] leading-tight font-medium tracking-[-0.01em] text-gray-100 sm:text-[24px]">
        {{ props.document.title }}
      </p>
      <p v-if="props.document.updatedLabel" class="text-muted text-[13px]">{{ props.document.updatedLabel }}</p>
    </header>

    <section
      v-for="section in props.document.sections"
      :key="section.id"
      class="py-4 [&+&]:border-t [&+&]:border-[#1414140f]"
    >
      <p class="mb-2 text-[15px] leading-snug font-medium text-gray-100">{{ section.title }}</p>
      <div class="grid gap-1.5">
        <template v-for="(block, blockIndex) in section.blocks" :key="`${section.id}-${blockIndex}`">
          <p v-if="block.type === 'paragraph'">
            <span
              v-for="(segment, segmentIndex) in block.segments"
              :key="segmentIndex"
              :class="{ 'legal-notice-sheet__missing': segment.isMissing }"
              >{{ segment.text }}</span
            >
          </p>
          <p v-else-if="block.type === 'fact'">
            <span class="font-medium text-gray-100">{{ block.label }}{{ LABEL_SEPARATOR }}</span>
            <span
              v-for="(segment, segmentIndex) in block.segments"
              :key="segmentIndex"
              :class="{ 'legal-notice-sheet__missing': segment.isMissing }"
              >{{ segment.text }}</span
            >
          </p>
          <ul v-else class="grid list-disc gap-1.5 pl-[18px] marker:text-[#9a9a92]">
            <li v-for="(item, itemIndex) in block.items" :key="itemIndex">
              <span
                v-for="(segment, segmentIndex) in item"
                :key="segmentIndex"
                :class="{ 'legal-notice-sheet__missing': segment.isMissing }"
                >{{ segment.text }}</span
              >
            </li>
          </ul>
        </template>
      </div>
    </section>

    <footer class="text-muted mt-2 border-t border-gray-300 pt-4 text-[12.5px] leading-normal italic">
      {{ props.document.footer }}
    </footer>
  </article>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevLegalNoticeDocument } from '~/core/types/DibodevLegalNotice'
import type { DibodevLegalNoticeSheetProps } from '~/core/types/DibodevLegalNoticeGenerator'
import { NBSP } from '~/core/constants/typography'

const LABEL_SEPARATOR: string = `${NBSP}: `

/** One generated document, always in French; the placeholders to fill are highlighted. */
const props: DibodevLegalNoticeSheetProps = defineProps({
  document: {
    type: Object as PropType<DibodevLegalNoticeDocument>,
    required: true,
  },
  anchorId: {
    type: String as PropType<string>,
    required: true,
  },
})
</script>

<style scoped>
.legal-notice-sheet__missing {
  border-radius: 4px;
  background-color: #fdf1dc;
  padding: 0 4px;
  color: #92400e;
  font-style: italic;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
</style>
