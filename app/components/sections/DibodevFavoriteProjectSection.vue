<template>
  <section id="projects" class="scroll-mt-24 bg-gray-800 px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading
        :eyebrow="$t('home.projects.eyebrow')"
        :title="$t('home.projects.title')"
        :intro="$t('home.projects.intro')"
      >
        <template #action>
          <DibodevLink :link="localePath('projects')">
            <span>{{ $t('home.projects.seeAllProjects') }}</span>
            <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
          </DibodevLink>
        </template>
      </DibodevSectionHeading>

      <div class="grid gap-5 sm:grid-cols-2 lg:gap-6" :class="gridColumnsClass">
        <DibodevProjectCard
          v-for="(project, projectIndex) in favoriteProjects"
          :key="project.route"
          :class="hiddenCardClass(projectIndex)"
          :name="project.name"
          :description="project.metaDescription"
          :createdAt="project.date"
          :logo="project.logoUrl"
          :screenshot="ProjectUtils.resolveCardScreenshot(project)"
          :primaryColor="project.primaryColor"
          :secondaryColor="project.secondaryColor"
          :route="project.route"
          :categories="project.categories ?? []"
        />
      </div>

      <div class="flex flex-col gap-4 border-t border-gray-300 pt-8 sm:flex-row sm:items-center sm:gap-6">
        <p class="text-muted shrink-0 text-sm font-medium">{{ $t('home.projects.byTypeTitle') }}</p>
        <DibodevProjectTaxonomyChips :links="categoryLinks" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevProjectCard from '~/components/cards/DibodevProjectCard.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevProjectTaxonomyChips from '~/components/navigations/DibodevProjectTaxonomyChips.vue'
import { useProjectTaxonomyLinks } from '~/composables/useProjectTaxonomyLinks'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'
import { ProjectUtils } from '~/core/utils/ProjectUtils'

type GridBreakpoint = {
  columns: number
  hiddenClass: string
}

/** Number of favourite projects displayed on the home page (one row of four cards on large screens). */
const FAVORITE_PROJECTS_COUNT: number = 4
/** Stacked cards on phones: capped so the section stays short. */
const MOBILE_VISIBLE_COUNT: number = 3

/**
 * Columns of the grid per breakpoint, with the class hiding a card in that range only.
 * Cards that would leave an incomplete row are hidden, so no card sits alone on its row.
 */
const GRID_BREAKPOINTS: GridBreakpoint[] = [
  { columns: 2, hiddenClass: 'sm:max-lg:hidden' },
  { columns: 3, hiddenClass: 'lg:max-xl:hidden' },
  { columns: 4, hiddenClass: 'xl:hidden' },
]

const localePath = useLocalePath()
const { data: storyblokProjectsData } = await useProjectsWithTranslations()

const allProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] => storyblokProjectsData.value ?? [])
const { categoryLinks } = useProjectTaxonomyLinks(allProjects)

/**
 * Projects from Storyblok flagged as favourites, most recent first.
 */
const favoriteProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] =>
  allProjects.value.filter((project: DibodevProject): boolean => project.isFavorite).slice(0, FAVORITE_PROJECTS_COUNT),
)

/** Four columns only when there are four cards to fill them, three otherwise. */
const gridColumnsClass: ComputedRef<string> = computed((): string =>
  favoriteProjects.value.length >= FAVORITE_PROJECTS_COUNT ? 'lg:grid-cols-3 xl:grid-cols-4' : 'lg:grid-cols-3',
)

/**
 * Classes hiding a card on the breakpoints where it would start an incomplete row.
 * @param {number} projectIndex - Position of the card in the list.
 * @returns {string[]} The Tailwind classes to apply.
 */
function hiddenCardClass(projectIndex: number): string[] {
  const projectsCount: number = favoriteProjects.value.length
  const classes: string[] = projectIndex >= MOBILE_VISIBLE_COUNT ? ['max-sm:hidden'] : []
  for (const breakpoint of GRID_BREAKPOINTS) {
    const columns: number = gridColumnsCount(breakpoint.columns)
    const fullRowsCount: number = Math.floor(projectsCount / columns) * columns
    const visibleCount: number = fullRowsCount > 0 ? fullRowsCount : projectsCount
    if (projectIndex >= visibleCount) {
      classes.push(breakpoint.hiddenClass)
    }
  }
  return classes
}

/**
 * Real number of columns used for a breakpoint (the four-column layout falls back to three with fewer cards).
 * @param {number} columns - Columns planned for the breakpoint.
 * @returns {number} Columns actually rendered.
 */
function gridColumnsCount(columns: number): number {
  return columns === 4 && favoriteProjects.value.length < FAVORITE_PROJECTS_COUNT ? 3 : columns
}
</script>
