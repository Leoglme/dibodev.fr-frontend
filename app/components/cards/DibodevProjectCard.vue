<template>
  <article
    class="project-card group flex h-full flex-col overflow-hidden rounded-2xl border-2 bg-white"
    :style="{ '--project-color': props.primaryColor }"
  >
    <NuxtLink :to="projectLink" class="flex h-full flex-col" @click="onCardClick">
      <div
        class="relative aspect-video w-full overflow-hidden border-b border-gray-300"
        :class="props.screenshot ? 'bg-gray-800' : ''"
        :style="props.screenshot ? undefined : { backgroundColor: props.secondaryColor }"
      >
        <img
          v-if="props.screenshot"
          :src="props.screenshot.url"
          :srcset="props.screenshot.srcset || undefined"
          :sizes="SCREENSHOT_SIZES"
          :alt="screenshotAlt"
          :width="SCREENSHOT_WIDTH"
          :height="SCREENSHOT_HEIGHT"
          loading="lazy"
          decoding="async"
          class="project-card__screenshot h-full w-full object-contain"
        />
        <img
          v-else
          class="absolute inset-0 m-auto max-h-20 w-auto max-w-[55%] object-contain"
          :src="props.logo"
          :alt="props.name"
          loading="lazy"
          decoding="async"
        />
        <span
          v-if="props.screenshot"
          class="absolute inset-x-0 bottom-0 flex items-end bg-linear-to-t from-white via-white/85 to-white/0 px-4 pt-10 pb-3.5"
          aria-hidden="true"
        >
          <img
            :src="props.logo"
            alt=""
            class="h-7 w-auto max-w-[8rem] object-contain"
            loading="lazy"
            decoding="async"
          />
        </span>
      </div>

      <div class="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div v-if="props.categories?.length" class="flex flex-wrap gap-1.5">
          <DibodevCategoryBadge v-for="category in props.categories" :key="category" :category="category" size="sm" />
        </div>
        <div class="grid gap-1">
          <h3 class="text-[17px] leading-snug font-medium text-gray-100">
            {{ nameParts.shortName }}
          </h3>
          <p class="line-clamp-2 text-[15px] leading-6 text-gray-200">
            {{ nameParts.tagline || props.description }}
          </p>
        </div>
        <div class="mt-auto flex items-center justify-between gap-3 border-t border-gray-300 pt-3">
          <span v-if="formattedDate" class="text-muted text-sm">{{ formattedDate }}</span>
          <span class="project-card__link ml-auto inline-flex items-center gap-1.5 text-[15px] font-medium">
            {{ $t('projects.card.seeProject') }}
            <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
          </span>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { DibodevProjectNameParts } from '~/core/types/DibodevProject'
import type { DibodevProjectCardProps } from '~/core/types/DibodevProjectCard'
import type { DibodevProjectCardScreenshot } from '~/core/types/DibodevProjectCardScreenshot'
import DibodevCategoryBadge from '~/components/ui/DibodevCategoryBadge.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { ProjectUtils } from '~/core/utils/ProjectUtils'
import { StringUtils } from '~/core/utils/StringUtils'
import { formatProjectDate } from '~/core/utils/formatProjectDate'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

const SCREENSHOT_WIDTH: number = 800
const SCREENSHOT_HEIGHT: number = 450
const SCREENSHOT_SIZES: string = '(min-width: 1280px) 340px, (min-width: 640px) 50vw, 100vw'

/**
 * Project card in the project colours: screenshot with the logo in a light strip at its foot (logo panel without screenshot), categories, name, tagline, date and link.
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
  screenshot: {
    type: Object as PropType<DibodevProjectCardScreenshot | null>,
    default: null,
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
const { locale, t } = useI18n()
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

const nameParts: ComputedRef<DibodevProjectNameParts> = computed(
  (): DibodevProjectNameParts => ProjectUtils.splitNameAndTagline(props.name),
)

const screenshotAlt: ComputedRef<string> = computed((): string =>
  t('projects.card.screenshotAlt', { name: nameParts.value.shortName }),
)

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

.project-card:hover,
.project-card:focus-within {
  border-color: var(--project-color);
  box-shadow: 0 16px 40px color-mix(in srgb, var(--project-color) 18%, transparent);
  transform: translateY(-2px);
}

.project-card__screenshot {
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.project-card:hover .project-card__screenshot {
  transform: scale(1.02);
}

.project-card__link {
  color: var(--project-color);
}

@media (prefers-reduced-motion: reduce) {
  .project-card,
  .project-card__screenshot {
    transition: none;
  }

  .project-card:hover,
  .project-card:hover .project-card__screenshot {
    transform: none;
  }
}
</style>
