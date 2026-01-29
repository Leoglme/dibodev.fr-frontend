<template>
  <section
    id="projects"
    data-aos="fade-up"
    data-aos-duration="600"
    data-aos-offset="300"
    class="relative z-2 grid h-full min-h-screen w-screen max-w-screen items-center justify-center gap-18 px-6 py-24 sm:px-8 sm:py-36"
  >
    <div class="flex w-full items-center justify-center">
      <div class="flex w-full max-w-4xl flex-col-reverse items-center justify-center gap-6 md:flex-row">
        <div class="flex w-full items-center justify-center gap-6">
          <DibodevSelect id="language-select" :options="languages" v-model="selectedLanguage" />
          <DibodevSelect id="category-select" :options="categories" v-model="selectedCategory" />
        </div>

        <DibodevSearchBar
          title="Rechercher un projet"
          placeholder="Rechercher un projet... (Ctrl + E)"
          v-model:value="searchTerm"
        />
      </div>
    </div>

    <div class="grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <DibodevProjectCard
        v-for="(project, index) in projects"
        :key="project.route"
        :name="project.name"
        :description="project.shortDescription"
        :createdAt="project.date"
        :logo="project.logoUrl"
        :primaryColor="project.primaryColor"
        :secondaryColor="project.secondaryColor"
        data-aos="zoom-in"
        :data-aos-delay="index * 100"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import DibodevProjectCard from '~/components/cards/DibodevProjectCard.vue'
import DibodevSearchBar from '~/components/inputs/DibodevSearchBar.vue'
import DibodevSelect from '~/components/core/DibodevSelect.vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { DibodevSelectOption } from '~/core/types/DibodevSelect'
import type { StoryblokProjectContent } from '~/services/types/storyblokProject'
import { StoryblokService } from '~/services/storyblokService'
import { mapStoryblokProjectToDibodevProject } from '~/services/storyblokProjectMapper'
import localProjectsJson from '~/assets/data/projects.json'

/* DATAS */
const languages: DibodevSelectOption[] = [
  { label: 'Typescript', value: 'typescript' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Python', value: 'python' },
  { label: 'Ruby', value: 'ruby' },
  { label: 'Java', value: 'java' },
  { label: 'C#', value: 'csharp' },
  { label: 'PHP', value: 'php' },
  { label: 'Go', value: 'go' },
  { label: 'Swift', value: 'swift' },
  { label: 'Kotlin', value: 'kotlin' },
]

const categories: DibodevSelectOption[] = [
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Desktop', value: 'desktop' },
  { label: 'API', value: 'api' },
  { label: 'Library', value: 'library' },
  { label: 'Tool', value: 'tool' },
]

const localProjects: DibodevProject[] = localProjectsJson as DibodevProject[]

const { data: storyblokProjectsData } = await useAsyncData<DibodevProject[]>(
  'projects-storyblok-list',
  async (): Promise<DibodevProject[]> => {
    try {
      const response = await StoryblokService.getStories<StoryblokProjectContent>({
        starts_with: 'project/',
      })
      return response.stories.map((story) => mapStoryblokProjectToDibodevProject(story))
    } catch {
      return []
    }
  },
)

/**
 * Merged list: local projects (JSON) then Storyblok projects.
 */
const projects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] => {
  const fromStoryblok: DibodevProject[] = storyblokProjectsData.value ?? []
  return [...localProjects, ...fromStoryblok]
})

/* REFS */
const searchTerm: Ref<string> = ref('')
const selectedLanguage: Ref<DibodevSelectOption> = ref({ label: 'Typescript', value: 'typescript' })
const selectedCategory: Ref<DibodevSelectOption> = ref({ label: 'Web', value: 'web' })
</script>
