<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="props.logo.viewBox"
    :width="props.size"
    :height="props.size"
    aria-hidden="true"
  >
    <path
      v-for="logoPath in props.logo.paths"
      :key="logoPath.path"
      :d="logoPath.path"
      :fill="logoPath.color ?? 'currentColor'"
    />
  </svg>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevBrandGlyphProps, DibodevBrandLogo } from '~/core/types/DibodevBrandGlyph'

/**
 * Brand logo drawn from its paths: each one in its own brand colour, or in the current text colour when it has none.
 */
const props: DibodevBrandGlyphProps = defineProps({
  logo: {
    type: Object as PropType<DibodevBrandLogo>,
    required: true,
  },
  size: {
    type: Number as PropType<number>,
    default: 18,
  },
})
</script>
