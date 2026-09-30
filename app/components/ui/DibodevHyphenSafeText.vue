<template>
  <template v-for="(segment, segmentIndex) in segments" :key="segmentIndex">
    <span v-if="segment.isHyphenatedWord" class="whitespace-nowrap">{{ segment.text }}</span>
    <template v-else>{{ segment.text }}</template>
  </template>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevHyphenSafeTextProps, DibodevHyphenSafeTextSegment } from '~/core/types/DibodevHyphenSafeText'
import { computed } from 'vue'

/** A word holding a hyphen between two letters ("auto-école", "peut-il"), punctuation around it included. */
const HYPHENATED_WORD_REGEX: RegExp = /(\S*\p{L}-\p{L}\S*)/u

/** Keeps plain hyphens rather than non-breaking ones (U+2011), so search engines read the same words. */
const props: DibodevHyphenSafeTextProps = defineProps({
  text: {
    type: String as PropType<string>,
    required: true,
  },
})

const segments: ComputedRef<DibodevHyphenSafeTextSegment[]> = computed((): DibodevHyphenSafeTextSegment[] =>
  props.text
    .split(HYPHENATED_WORD_REGEX)
    .filter((piece: string): boolean => piece !== '')
    .map(
      (piece: string): DibodevHyphenSafeTextSegment => ({
        text: piece,
        isHyphenatedWord: HYPHENATED_WORD_REGEX.test(piece),
      }),
    ),
)
</script>
