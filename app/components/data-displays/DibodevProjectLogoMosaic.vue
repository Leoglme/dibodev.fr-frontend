<template>
  <ul
    v-if="visibleProjects.length > 0"
    class="mx-auto grid w-full max-w-lg grid-cols-3 gap-3 sm:gap-4 lg:mx-0 lg:max-w-none"
    :aria-label="$t('projects.mosaic.label')"
  >
    <li v-for="project in visibleProjects" :key="project.route">
      <NuxtLink
        :to="localePath(project.route)"
        class="project-logo-tile flex aspect-square items-center justify-center rounded-xl border-2 p-4 sm:p-5"
        :style="{ backgroundColor: project.secondaryColor ?? '#f5f3ff', '--project-color': project.primaryColor }"
        :aria-label="$t('projects.mosaic.tileLabel', { name: project.name })"
        @click="onTileClick(project)"
      >
        <img
          :src="project.logoUrl"
          :alt="''"
          loading="lazy"
          decoding="async"
          class="max-h-14 w-auto max-w-[80%] object-contain"
        />
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { DibodevProjectLogoMosaicProps } from '~/core/types/DibodevProjectLogoMosaic'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** Tiles shown in the mosaic (two rows of three). */
const MOSAIC_TILE_COUNT: number = 6

/**
 * Mosaic of project logo tiles in the project colours, each linking to its project page.
 * Used as the visual of the category and sector landing headers.
 */
const props: DibodevProjectLogoMosaicProps = defineProps({
  projects: {
    type: Array as PropType<DibodevProject[]>,
    required: true,
  },
  trackingSource: {
    type: String as PropType<string>,
    default: 'logo_mosaic',
  },
})

const localePath = useLocalePath()
const { track } = useTracking()

const visibleProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] =>
  props.projects.slice(0, MOSAIC_TILE_COUNT),
)

/**
 * Tracks a click on a tile before the link navigates to the project page.
 * @param {DibodevProject} project - The clicked project.
 * @returns {void}
 */
function onTileClick(project: DibodevProject): void {
  track(TRACKING_EVENTS.projectCardClicked, {
    project: project.name,
    route: project.route,
    source: props.trackingSource,
  })
}
</script>

<style scoped>
.project-logo-tile {
  border-color: color-mix(in srgb, var(--project-color) 35%, white);
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.project-logo-tile:hover {
  border-color: var(--project-color);
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .project-logo-tile {
    transition: none;
  }

  .project-logo-tile:hover {
    transform: none;
  }
}
</style>
