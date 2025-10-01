<template>
  <component
    v-if="icon"
    :is="icon.source ? 'a' : 'span'"
    :href="icon.source"
    class="inline-flex items-center justify-center transition-transform hover:scale-105"
    :aria-label="icon.title ? `Lien vers le site officiel de ${icon.title}` : undefined"
    :title="icon.title"
    rel="noopener noreferrer"
    target="_blank"
  >
    <span class="dibodev-svg" v-html="icon.svg" :style="`fill: #${icon.hex};`" />
  </component>
</template>

<script setup lang="ts">
import { SimpleIconUtils } from '~/core/utils/SimpleIconUtils'
import type { SimpleIcon } from '~/core/utils/SimpleIconUtils'
import type { DibodevBrandLogoProps } from '~/core/types/DibodevBrandLogo'
import type { PropType } from 'vue'

/* PROPS */
const props: DibodevBrandLogoProps = defineProps({
  name: {
    type: String as PropType<string>,
    required: true,
  },
})

/* DATAS */
const icon: SimpleIcon | null = SimpleIconUtils.getIconBySlug(props.name)
</script>

<style scoped>
/* Style l'<svg> injecté */
.dibodev-svg :deep(svg) {
  height: 40px;
  width: auto;
  display: block;
}
</style>
