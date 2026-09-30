<template>
  <ul class="flex flex-wrap gap-2.5">
    <li v-for="link in visibleLinks" :key="link.key">
      <NuxtLink
        :to="link.to"
        class="group hover:border-primary hover:text-primary focus-visible:border-primary inline-flex h-11 items-center gap-2.5 rounded-full border border-gray-400 bg-white pr-1.5 pl-4 text-sm font-medium text-gray-100 transition-[color,border-color,box-shadow] hover:shadow-[0_6px_18px_rgba(111,95,224,0.12)]"
      >
        <span>{{ link.label }}</span>
        <span
          class="group-hover:bg-accent-tint group-hover:text-primary flex h-7 min-w-7 items-center justify-center rounded-full bg-gray-800 px-2 text-xs font-medium text-gray-200 transition-colors"
        >
          {{ link.count }}
        </span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { DibodevProjectTaxonomyLink } from '~/core/types/DibodevProjectTaxonomySection'
import type { DibodevProjectTaxonomyChipsProps } from '~/core/types/DibodevProjectTaxonomyChips'

/**
 * Compact chips linking to category or sector listing pages, each with its project count in a counter.
 */
const props: DibodevProjectTaxonomyChipsProps = defineProps({
  links: {
    type: Array as PropType<DibodevProjectTaxonomyLink[]>,
    required: true,
  },
  hideEmpty: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
})

const visibleLinks: ComputedRef<DibodevProjectTaxonomyLink[]> = computed((): DibodevProjectTaxonomyLink[] =>
  props.hideEmpty ? props.links.filter((link: DibodevProjectTaxonomyLink): boolean => link.count > 0) : props.links,
)
</script>
