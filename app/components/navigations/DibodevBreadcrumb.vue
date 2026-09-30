<template>
  <nav :aria-label="$t('breadcrumb.label')">
    <ol
      class="text-muted flex flex-wrap items-center gap-x-2 gap-y-1 text-sm"
      :class="{ 'sm:justify-center': props.align === 'centerFromSmallScreens' }"
    >
      <li
        v-for="(item, index) in props.items"
        :key="`${item.label}-${index}`"
        class="flex min-w-0 items-center gap-x-2"
      >
        <NuxtLink v-if="item.to" :to="item.to" class="transition-colors hover:text-gray-100">
          {{ item.label }}
        </NuxtLink>
        <span v-else aria-current="page" class="max-w-[60vw] truncate text-gray-100 sm:max-w-md">{{ item.label }}</span>
        <DibodevIcon
          v-if="index < props.items.length - 1"
          name="ChevronRight"
          mode="stroke"
          :width="14"
          :height="14"
          aria-hidden="true"
        />
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type {
  DibodevBreadcrumbAlign,
  DibodevBreadcrumbItem,
  DibodevBreadcrumbProps,
} from '~/core/types/DibodevBreadcrumb'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { buildBreadcrumbSchemaJson } from '~/config/breadcrumbSchema'

/**
 * Breadcrumb trail of the inner pages, also published as BreadcrumbList JSON-LD.
 */
const props: DibodevBreadcrumbProps = defineProps({
  items: {
    type: Array as PropType<DibodevBreadcrumbItem[]>,
    required: true,
  },
  align: {
    type: String as PropType<DibodevBreadcrumbAlign>,
    default: 'start',
  },
})

useHead(() => ({
  script: [
    { type: 'application/ld+json', key: 'schema-breadcrumb', innerHTML: buildBreadcrumbSchemaJson(props.items) },
  ],
}))
</script>
