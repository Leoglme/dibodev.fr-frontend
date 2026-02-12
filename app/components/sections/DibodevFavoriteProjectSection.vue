<template>
  <section
    id="favorite-projects"
    data-aos="fade-up"
    data-aos-duration="600"
    data-aos-offset="300"
    class="relative z-2 flex h-full min-h-screen w-screen max-w-screen items-center justify-center px-6 py-36 sm:px-8 sm:py-60"
  >
    <div class="grid gap-14 sm:gap-12">
      <div class="flex items-center justify-center gap-4">
        <h2 class="text-center text-2xl font-semibold sm:text-[32px]">
          {{ $t('home.favoriteProjects.title') }}
        </h2>
        <div title="999 bpm">
          <svg
            class="heartbeat h-[24px] w-[26px] sm:h-[30px] sm:w-[34px]"
            width="34"
            height="30"
            viewBox="0 0 34 30"
            fill="none"
          >
            <path
              d="M24.5 0C21.35 0 18.575 1.75 17 4.5C15.425 1.75 12.65 0 9.5 0C4.55 0 0.5 4.5 0.5 10C0.5 19.9167 17 30 17 30C17 30 33.5 20 33.5 10C33.5 4.5 29.45 0 24.5 0Z"
              fill="#F44336"
            />
          </svg>
        </div>
      </div>
      <div class="flex w-full max-w-7xl flex-col-reverse gap-10 sm:grid sm:gap-8">
        <div class="flex w-full items-center justify-end">
          <DibodevLink :link="localePath('/projects')">
            <span>{{ $t('home.favoriteProjects.seeAllProjects') }}</span>
            <DibodevIcon name="ArrowRight" mode="stroke" :width="20" :height="20" />
          </DibodevLink>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <DibodevProjectCard
            v-for="(project, index) in favoriteProjects"
            :key="project.route"
            :name="project.name"
            :description="project.shortDescription"
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
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import DibodevLink from '~/components/core/DibodevLink.vue'

const localePath = useLocalePath()
import DibodevProjectCard from '~/components/cards/DibodevProjectCard.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { StoryblokProjectContent } from '~/services/types/storyblokProject'
import { StoryblokService } from '~/services/storyblokService'
import { mapStoryblokProjectToDibodevProject } from '~/services/storyblokProjectMapper'

const { locale } = useI18n()
const storyblokLanguage: ComputedRef<string | undefined> = useStoryblokProjectLanguage()

const { data: storyblokProjectsData } = await useAsyncData<DibodevProject[]>(
  () => `projects-storyblok-list-${locale.value}`,
  async (): Promise<DibodevProject[]> => {
    try {
      const response = await StoryblokService.getStories<StoryblokProjectContent>(
        { starts_with: 'project/' },
        storyblokLanguage.value,
      )
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
 * Projects from Storyblok filtered by isFavorite.
 */
const favoriteProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] => {
  const all: DibodevProject[] = storyblokProjectsData.value ?? []
  return all.filter((p: DibodevProject) => p.isFavorite)
})
</script>
