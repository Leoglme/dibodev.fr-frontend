<template>
  <section
    v-if="businessProjects.length > 0"
    id="business-software-projects"
    class="bg-gray-800 px-6 py-20 sm:px-8 lg:py-28"
    data-aos="fade-up"
  >
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading
        :eyebrow="t('businessSoftwarePage.projects.eyebrow')"
        :title="t('businessSoftwarePage.projects.title')"
      >
        <template #action>
          <DibodevLink :link="businessProjectsCategoryPath">
            <span>{{ t('businessSoftwarePage.projects.seeAll') }}</span>
            <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
          </DibodevLink>
        </template>
      </DibodevSectionHeading>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <DibodevProjectCard
          v-for="project in businessProjects"
          :key="project.route"
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
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { CategoryKey } from '~/core/constants/projectEnums'
import { computed } from 'vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevProjectCard from '~/components/cards/DibodevProjectCard.vue'
import { ProjectUtils } from '~/core/utils/ProjectUtils'
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
