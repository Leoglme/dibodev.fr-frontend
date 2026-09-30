<template>
  <article
    class="project-card group flex h-full flex-col rounded-2xl border-2 bg-white p-3 sm:p-4"
    :style="{ '--project-color': props.primaryColor }"
  >
    <NuxtLink :to="projectLink" class="flex h-full flex-col gap-4" @click="onCardClick">
      <div
        class="flex h-44 items-center justify-center rounded-xl px-8"
        :style="{ backgroundColor: props.secondaryColor }"
      >
        <img
          class="max-h-24 w-auto max-w-[180px] object-contain"
          :src="props.logo"
          :alt="props.name"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div class="flex flex-1 flex-col gap-3 px-1 sm:px-2">
        <div v-if="props.categories?.length" class="flex flex-wrap gap-1.5">
          <DibodevCategoryBadge v-for="category in props.categories" :key="category" :category="category" size="sm" />
        </div>
        <div class="grid gap-1">
          <h3 class="text-lg leading-snug font-medium text-gray-100">
            {{ props.name }}
          </h3>
          <span v-if="formattedDate" class="text-muted text-sm">{{ formattedDate }}</span>
        </div>
        <p class="border-t border-gray-300 pt-3 text-[15px] leading-6 text-gray-200">
          {{ props.description }}
        </p>
      </div>

      <span
        class="project-card__button mt-auto flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[15px] leading-6 font-medium text-white"
      >
        {{ $t('projects.card.seeProject') }}
        <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
      </span>
    </NuxtLink>
  </article>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { DibodevProjectCardProps } from '~/core/types/DibodevProjectCard'
import DibodevCategoryBadge from '~/components/ui/DibodevCategoryBadge.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { StringUtils } from '~/core/utils/StringUtils'
import { formatProjectDate } from '~/core/utils/formatProjectDate'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Project card in the project colours: tinted border, logo panel, categories, name, date, description
 * and a full-width "see project" button. The whole card is one link.
 */
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
    default: '#6f5fe0',
  },
  secondaryColor: {
    type: String,
    default: '#f5f3ff',
  },
  route: {
    type: String,
    default: undefined,
  },
  categories: {
    type: Array as PropType<string[]>,
    default: (): string[] => [],
  },
})

const localePath = useLocalePath()
const { locale } = useI18n()
const { track } = useTracking()

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

/** Project date as "Month YYYY" in the current locale (empty when the project has no date). */
const formattedDate: ComputedRef<string> = computed((): string =>
  props.createdAt ? formatProjectDate(props.createdAt, locale.value as string) : '',
)

/**
 * Track the analytics event before the link navigates to the project detail page.
 * @returns {void}
 */
function onCardClick(): void {
  track(TRACKING_EVENTS.projectCardClicked, { project: props.name, route: props.route ?? null })
}
</script>

<style scoped>
.project-card {
  border-color: color-mix(in srgb, var(--project-color) 45%, white);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.project-card:hover {
  border-color: var(--project-color);
  box-shadow: 0 16px 40px color-mix(in srgb, var(--project-color) 18%, transparent);
  transform: translateY(-2px);
}

.project-card__button {
  background-color: var(--project-color);
  transition: filter 0.15s ease;
}

.project-card:hover .project-card__button {
  filter: brightness(0.92);
}

@media (prefers-reduced-motion: reduce) {
  .project-card,
  .project-card__button {
    transition: none;
  }

  .project-card:hover {
    transform: none;
  }
}
</style>
