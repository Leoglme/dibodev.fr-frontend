<template>
  <section
    id="recommended-projects"
    data-aos="fade-up"
    data-aos-duration="600"
    data-aos-offset="300"
    class="relative z-2 flex h-full min-h-screen w-screen max-w-screen items-center justify-center px-6 py-36 pb-60 sm:px-8 sm:py-60 sm:pb-96"
  >
    <div class="grid gap-14 sm:gap-12">
      <h2 class="text-left text-2xl font-semibold sm:text-center sm:text-[32px]">Découvrir un autre projet</h2>
      <div class="flex w-full max-w-7xl flex-col-reverse gap-10 sm:grid sm:gap-8">
        <div class="flex w-full items-center justify-end">
          <DibodevLink link="/projects">
            <span>Voir tous les projets</span>
            <DibodevIcon name="ArrowRight" mode="stroke" :width="20" :height="20" />
          </DibodevLink>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <DibodevProjectCard
            v-for="(recommendedProject, index) in recommendedProjects"
            :key="recommendedProject.name"
            :name="recommendedProject.name"
            :description="recommendedProject.shortDescription"
            :createdAt="recommendedProject.date"
            :logo="recommendedProject.logoUrl"
            :primaryColor="recommendedProject.primaryColor"
            :secondaryColor="recommendedProject.secondaryColor"
            data-aos="zoom-in"
            :data-aos-delay="index * 100"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevProjectCard from '~/components/cards/DibodevProjectCard.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { computed, type PropType } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { StoryblokProjectContent } from '~/services/types/storyblokProject'
import { StoryblokService } from '~/services/storyblokService'
import { mapStoryblokProjectToDibodevProject } from '~/services/storyblokProjectMapper'
import type { DibodevRecommendedProjectSectionProps } from '~/core/types/DibodevRecommendedProjectSection'

/* TYPES */
type ProjectWithScore = {
  project: DibodevProject
  score: number
  date: number
}

/* PROPS */
const props: DibodevRecommendedProjectSectionProps = defineProps({
  currentProject: {
    type: Object as PropType<DibodevProject>,
    required: true,
  },
})

const { data: storyblokProjectsData } = await useAsyncData<DibodevProject[]>(
  'projects-storyblok-list',
  async (): Promise<DibodevProject[]> => {
    try {
      const response = await StoryblokService.getStories<StoryblokProjectContent>({
        starts_with: 'project/',
      })
      const projects: DibodevProject[] = response.stories.map((story) => mapStoryblokProjectToDibodevProject(story))
      return projects.sort((a: DibodevProject, b: DibodevProject): number => {
        const timeA: number = new Date(a.date).getTime() || 0
        const timeB: number = new Date(b.date).getTime() || 0
        return timeB - timeA
      })
    } catch {
      return []
    }
  },
)

/**
 * Similarity score between two projects (higher = more similar).
 */
const calculateSimilarityScore: (projectOne: DibodevProject, projectTwo: DibodevProject) => number = (
  projectOne: DibodevProject,
  projectTwo: DibodevProject,
): number => {
  let score = 0

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

  return projectsWithScores.slice(0, 3).map((item: ProjectWithScore) => item.project)
})
</script>
