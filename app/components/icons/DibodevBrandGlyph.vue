<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="props.size"
    :height="props.size"
    fill="currentColor"
    aria-hidden="true"
  >
    <path :d="props.path" />
  </svg>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevBrandGlyphProps } from '~/core/types/DibodevBrandGlyph'

/**
 * Single-colour brand logo drawn from its path (24 × 24 box), in the current text colour.
 */
const props: DibodevBrandGlyphProps = defineProps({
  path: {
    type: String as PropType<string>,
    required: true,
  },
  size: {
    type: Number as PropType<number>,
    default: 18,
  },
})
</script>
