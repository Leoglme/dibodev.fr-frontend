<template>
  <section
    v-if="businessProjects.length > 0"
    id="business-software-projects"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex w-screen max-w-screen items-center justify-center bg-gray-900 px-6 py-32 sm:px-8 sm:py-40"
  >
    <div class="grid w-full max-w-7xl gap-10 sm:gap-12">
      <h2 class="text-left text-2xl font-semibold sm:text-[32px]">{{ t('businessSoftwarePage.projects.title') }}</h2>

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <DibodevProjectCard
          v-for="(project, index) in businessProjects"
          :key="project.route"
          :name="project.name"
          :description="project.metaDescription"
          :createdAt="project.date"
          :logo="project.logoUrl"
          :primaryColor="project.primaryColor"
          :secondaryColor="project.secondaryColor"
          :route="project.route"
          :categories="project.categories ?? []"
          data-aos="zoom-in"
          :data-aos-delay="index * 100"
        />
      </div>

      <div class="flex w-full items-center justify-end">
        <DibodevLink :link="businessProjectsCategoryPath">
          <span>{{ t('businessSoftwarePage.projects.seeAll') }}</span>
          <DibodevIcon name="ArrowRight" mode="stroke" :width="20" :height="20" />
        </DibodevLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { CategoryKey } from '~/core/constants/projectEnums'
import { computed } from 'vue'
import DibodevProjectCard from '~/components/cards/DibodevProjectCard.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { categoryToSlug } from '~/core/constants/categorySlugs'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'

const BUSINESS_SOFTWARE_CATEGORY: CategoryKey = 'application-metier'
const SHOWN_PROJECTS_COUNT: number = 6
const FEATURED_CLIENT_PROJECT_SLUGS: string[] = ['izidoor', 'gestion-temps', 'stockpme']

const { t, locale } = useI18n()
const localePath = useLocalePath()
const { data: projectsData } = await useProjectsWithTranslations()

const businessProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] => {
  const categoryProjects: DibodevProject[] = (projectsData.value ?? []).filter((project: DibodevProject): boolean =>
    project.categories.includes(BUSINESS_SOFTWARE_CATEGORY),
  )
  const featuredClientProjects: DibodevProject[] = FEATURED_CLIENT_PROJECT_SLUGS.map(
    (slug: string): DibodevProject | undefined =>
      categoryProjects.find((project: DibodevProject): boolean => project.route.endsWith(`/${slug}`)),
  ).filter((project: DibodevProject | undefined): project is DibodevProject => project !== undefined)
  const otherProjects: DibodevProject[] = categoryProjects.filter(
    (project: DibodevProject): boolean => !featuredClientProjects.includes(project),
  )
  return [...featuredClientProjects, ...otherProjects].slice(0, SHOWN_PROJECTS_COUNT)
})

const businessProjectsCategoryPath: ComputedRef<string> = computed((): string =>
  localePath({
    name: 'projects-category-slug',
    params: { slug: categoryToSlug(locale.value, BUSINESS_SOFTWARE_CATEGORY) },
  }),
)
</script>
