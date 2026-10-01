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
          v-for="(project, projectIndex) in featuredProjects"
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
import type { HomeFeaturedProjectsDevice, HomeFeaturedProjectsGridLayouts } from '~/core/types/HomeFeaturedProjects'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevProjectCard from '~/components/cards/DibodevProjectCard.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevProjectTaxonomyChips from '~/components/navigations/DibodevProjectTaxonomyChips.vue'
import { useProjectTaxonomyLinks } from '~/composables/useProjectTaxonomyLinks'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'
import { HOME_PAGE_CONTENT } from '~/core/constants/homePageContent'
import { HomeFeaturedProjectsUtils } from '~/core/utils/HomeFeaturedProjectsUtils'
import { ProjectUtils } from '~/core/utils/ProjectUtils'

const HIDDEN_CARD_CLASSES: Record<HomeFeaturedProjectsDevice, string> = {
  phone: 'max-sm:hidden',
  tablet: 'sm:max-lg:hidden',
  laptop: 'lg:max-xl:hidden',
  desktop: 'xl:hidden',
}

const localePath = useLocalePath()
const { data: storyblokProjectsData } = await useProjectsWithTranslations()

const allProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] => storyblokProjectsData.value ?? [])
const { categoryLinks } = useProjectTaxonomyLinks(allProjects)

/**
 * Projects chosen and ordered from the dashboard (Storyblok favourites, most recent first, while nothing is saved there).
 */
const featuredProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] =>
  HomeFeaturedProjectsUtils.resolveDisplayedProjects(allProjects.value, HOME_PAGE_CONTENT.featuredProjectSlugs),
)

const gridLayouts: ComputedRef<HomeFeaturedProjectsGridLayouts> = computed(
  (): HomeFeaturedProjectsGridLayouts => HomeFeaturedProjectsUtils.getGridLayouts(featuredProjects.value.length),
)

/** Four columns on large screens only when they show at least as many cards as three columns would. */
const gridColumnsClass: ComputedRef<string> = computed((): string =>
  gridLayouts.value.desktop.columnsCount > gridLayouts.value.laptop.columnsCount
    ? 'lg:grid-cols-3 xl:grid-cols-4'
    : 'lg:grid-cols-3',
)

/**
 * Classes hiding a card on the breakpoints where it would start an incomplete row.
 * @param {number} projectIndex - Position of the card in the list.
 * @returns {string[]} The Tailwind classes to apply.
 */
function hiddenCardClass(projectIndex: number): string[] {
  return (Object.keys(HIDDEN_CARD_CLASSES) as HomeFeaturedProjectsDevice[])
    .filter((device: HomeFeaturedProjectsDevice): boolean => projectIndex >= gridLayouts.value[device].visibleCount)
    .map((device: HomeFeaturedProjectsDevice): string => HIDDEN_CARD_CLASSES[device])
}
</script>
