<template>
  <section id="recommended-projects" class="bg-gray-800 px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div class="mx-auto grid w-full max-w-7xl gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="$t('project.recommended.eyebrow')" :title="$t('project.recommended.title')">
        <template #action>
          <DibodevLink :link="localePath('projects')">
            <span>{{ $t('project.recommended.seeAllProjects') }}</span>
            <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
          </DibodevLink>
        </template>
      </DibodevSectionHeading>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <DibodevProjectCard
          v-for="recommendedProject in recommendedProjects"
          :key="recommendedProject.route"
          :name="recommendedProject.name"
          :description="recommendedProject.metaDescription"
          :createdAt="recommendedProject.date"
          :logo="recommendedProject.logoUrl"
          :primaryColor="recommendedProject.primaryColor"
          :secondaryColor="recommendedProject.secondaryColor"
          :route="recommendedProject.route"
          :categories="recommendedProject.categories ?? []"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { DibodevRecommendedProjectSectionProps } from '~/core/types/DibodevRecommendedProjectSection'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevProjectCard from '~/components/cards/DibodevProjectCard.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'

/* TYPES */
type ProjectWithScore = {
  project: DibodevProject
  score: number
  date: number
}

/** Number of similar projects displayed. */
const RECOMMENDED_PROJECTS_COUNT: number = 3

/* PROPS */
const props: DibodevRecommendedProjectSectionProps = defineProps({
  currentProject: {
    type: Object as PropType<DibodevProject>,
    required: true,
  },
})

const localePath = useLocalePath()
const { data: storyblokProjectsData } = await useProjectsWithTranslations()

/**
 * Similarity score between two projects (higher = more similar).
 * @param {DibodevProject} projectOne - First project.
 * @param {DibodevProject} projectTwo - Second project.
 * @returns {number} The score.
 */
function calculateSimilarityScore(projectOne: DibodevProject, projectTwo: DibodevProject): number {
  let score: number = 0

  const commonCategories: string[] = projectOne.categories.filter((cat: string) => projectTwo.categories.includes(cat))
  score += commonCategories.length

  const commonStack: string[] = projectOne.stack.filter((tech: string) => projectTwo.stack.includes(tech))
  score += commonStack.length

  const commonTags: string[] = projectOne.tags.filter((tag: string) => projectTwo.tags.includes(tag))
  score += commonTags.length * 0.5

  return score
}

/**
 * Recommended projects (similar to current, from Storyblok).
 */
const recommendedProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] => {
  if (!props.currentProject) return []

  const allProjects: DibodevProject[] = storyblokProjectsData.value ?? []
  const currentName: string = props.currentProject.name

  const projectsWithScores: ProjectWithScore[] = allProjects
    .filter((p: DibodevProject) => p.name !== currentName)
    .map((project: DibodevProject) => ({
      project,
      score: calculateSimilarityScore(props.currentProject, project),
      date: new Date(project.date).getTime(),
    }))
    .sort((a: ProjectWithScore, b: ProjectWithScore) => {
      if (b.score !== a.score) {
        return b.score - a.score
      }
      return b.date - a.date
    })

  return projectsWithScores.slice(0, RECOMMENDED_PROJECTS_COUNT).map((item: ProjectWithScore) => item.project)
})
</script>
