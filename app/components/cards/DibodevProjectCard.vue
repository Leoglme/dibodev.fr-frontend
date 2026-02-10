<template>
  <div class="grid gap-2 rounded-2xl border-2 bg-gray-400 p-3" :style="{ borderColor: props.primaryColor }">
    <div class="flex h-50 items-center justify-center rounded-xl" :style="{ backgroundColor: props.secondaryColor }">
      <img
        class="h-48 max-h-[120px] w-full max-w-[200px] rounded-xl object-contain"
        :src="props.logo"
        :alt="`${props.name} logo`"
      />
    </div>

    <div v-if="props.categories?.length" class="flex flex-wrap gap-1 py-1.5">
      <DibodevCategoryBadge
        v-for="category in props.categories"
        :key="category"
        :category="category"
        size="sm"
      />
    </div>
    <h6 class="text-left text-xl font-medium">
      {{ props.name }}
    </h6>

    <span v-if="props.createdAt" class="text-left text-xs font-normal text-gray-200">
      {{ props.createdAt }}
    </span>

    <p class="text-left text-[14px] leading-[22px] font-normal">
      {{ props.description }}
    </p>

    <DibodevButton
      icon="ArrowRight"
      iconPosition="right"
      :backgroundColor="props.primaryColor"
      :to="projectLink"
      class="mt-3 w-full"
    >
      En savoir plus
    </DibodevButton>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { DibodevProjectCardProps } from '~/core/types/DibodevProjectCard'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevCategoryBadge from '~/components/ui/DibodevCategoryBadge.vue'
import { StringUtils } from '~/core/utils/StringUtils'

const props: DibodevProjectCardProps = defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: null,
  },
  logo: {
    type: String,
    required: true,
  },
  primaryColor: {
    type: String,
    default: '#8472F3',
  },
  secondaryColor: {
    type: String,
    default: '#101623',
  },
  route: {
    type: String,
    default: undefined,
  },
  categories: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
})

const localePath = useLocalePath()

/** Canonical project URL with current locale prefix (Storyblok route when provided, otherwise derived from name). */
const projectLink: ComputedRef<string> = computed((): string => {
  const path: string =
    props.route != null && props.route.trim() !== ''
      ? props.route.startsWith('/')
        ? props.route
        : `/${props.route}`
      : `/project/${StringUtils.formatForRoute(props.name)}`
  return localePath(path)
})
</script>
