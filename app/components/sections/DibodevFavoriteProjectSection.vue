<template>
  <section id="projects" class="scroll-mt-24 bg-gray-800 px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div class="mx-auto grid w-full max-w-7xl gap-12 lg:gap-14">
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

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <DibodevProjectCard
          v-for="(project, projectIndex) in favoriteProjects"
          :key="project.route"
          :class="{ 'sm:max-lg:hidden': projectIndex === tabletHiddenProjectIndex }"
          :name="project.name"
          :description="project.metaDescription"
          :createdAt="project.date"
          :logo="project.logoUrl"
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

/** Number of favourite projects displayed on the home page (one row of three cards on desktops). */
const FAVORITE_PROJECTS_COUNT: number = 3

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
/** Last card of an odd list, hidden on two-column tablets so no card sits alone on its row (-1 when none). */
const tabletHiddenProjectIndex: ComputedRef<number> = computed((): number =>
  favoriteProjects.value.length > 1 && favoriteProjects.value.length % 2 === 1 ? favoriteProjects.value.length - 1 : -1,
)
</script>
