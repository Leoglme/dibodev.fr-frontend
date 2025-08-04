<template>
  <svg
    class="relative"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :style="color"
    :aria-labelledby="name"
  >
    <g :fill="mode === 'fill' ? color : undefined" :stroke="mode === 'stroke' ? color : undefined">
      <component :is="iconComponent" v-if="iconComponent" />
    </g>
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { PropType, ComputedRef } from 'vue'

import ArrowRight from '~/components/icons/ArrowRight.vue'
import ChevronDown from '~/components/icons/ChevronDown.vue'
import ChevronLeft from '~/components/icons/ChevronLeft.vue'
import ChevronRight from '~/components/icons/ChevronRight.vue'
import ChevronUp from '~/components/icons/ChevronUp.vue'
import DoubleChevronsDown from '~/components/icons/DoubleChevronsDown.vue'
import Github from '~/components/icons/Github.vue'
import Linkedin from '~/components/icons/Linkedin.vue'
import Mail from '~/components/icons/Mail.vue'
import Moon from '~/components/icons/Moon.vue'
import type { DibodevIconMode, DibodevIconProps, IconComponent } from '~/core/types/DibodevIcon'
import { iconsList } from '~/core/types/DibodevIcon'

/**
 * Props definition with strict typing.
 * @constant {DibodevIconProps}
 */
const props: DibodevIconProps = defineProps({
  name: {
    type: String as PropType<(typeof iconsList)[number]>,
    required: true,
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    default: 24,
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    default: 24,
  },
  viewBox: {
    type: String as PropType<string>,
    default: '0 0 24 24',
  },
  mode: {
    type: String as PropType<DibodevIconMode>,
    default: 'fill',
  },
  color: {
    type: String as PropType<string>,
    default: 'currentColor',
  },
})

/**
 * Icon dictionary with all the available icons.
 * @constant {Record<string, IconComponent>}
 */
const iconsDictionary: Record<string, IconComponent> = {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  DoubleChevronsDown,
  Github,
  Linkedin,
  Mail,
  Moon,
}

/**
 * Icon component computed with the props name and the icon dictionary.
 * @constant {ComputedRef<IconComponent>}
 */
const iconComponent: ComputedRef<IconComponent | undefined> = computed(() => iconsDictionary[props.name])
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>
