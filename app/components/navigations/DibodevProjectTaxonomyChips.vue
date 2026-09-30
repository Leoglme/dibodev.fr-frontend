<template>
  <ul class="flex flex-wrap gap-2.5">
    <li v-for="link in visibleLinks" :key="link.key">
      <NuxtLink
        :to="link.to"
        class="hover:border-primary hover:text-primary inline-flex min-h-11 items-center gap-2 rounded-full border border-gray-400 bg-white px-4 text-sm font-medium text-gray-100 transition-colors"
      >
        <span>{{ link.label }}</span>
        <span class="text-muted">{{ link.count }}</span>
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
 * Compact chips linking to category or sector listing pages, with their project counts.
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
