<template>
  <section
    id="projects"
    data-aos="fade-up"
    data-aos-duration="600"
    data-aos-offset="300"
    class="relative z-2 flex h-full min-h-screen w-screen max-w-screen flex-col items-center justify-center gap-18 px-6 py-24 sm:px-8 sm:py-36"
  >
    <div class="flex w-full max-w-7xl items-center justify-center">
      <div class="flex w-full max-w-4xl flex-col-reverse items-center justify-center gap-6 md:flex-row">
        <div class="flex w-full items-center justify-center gap-6">
          <DibodevSelect id="language-select" :options="languages" v-model:modelValue="selectedLanguage" />
          <DibodevSelect id="category-select" :options="categories" v-model:modelValue="selectedCategory" />
        </div>

        <DibodevSearchBar
          title="Rechercher un projet"
          placeholder="Rechercher un projet... (Ctrl + E)"
          v-model:value="searchTerm"
        />
      </div>
    </div>

    <div v-if="projects.length > 0" class="grid w-full max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

    <div v-else class="flex w-full max-w-7xl flex-col items-center justify-center gap-6 py-24">
      <div class="rounded-full bg-gray-800 p-6">
        <svg class="h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div class="flex flex-col items-center gap-2">
        <h3 class="text-2xl font-semibold text-gray-100">Aucun projet trouvé</h3>
        <p class="text-center text-base text-gray-300">
          Aucun projet ne correspond à vos critères de recherche. Essayez de modifier vos filtres.
        </p>
      </div>
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

/* DATAS */
const languages: DibodevSelectOption[] = [
  { label: 'Tous les langages', value: 'all' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Python', value: 'python' },
  { label: 'Ruby', value: 'ruby' },
  { label: 'Java', value: 'java' },
  { label: 'C#', value: 'c#' },
  { label: 'PHP', value: 'php' },
  { label: 'Go', value: 'go' },
  { label: 'Rust', value: 'rust' },
  { label: 'Swift', value: 'swift' },
  { label: 'Kotlin', value: 'kotlin' },
]

const categories: DibodevSelectOption[] = [
  { label: 'Toutes les catégories', value: 'all' },
  { label: 'Site web', value: 'site web' },
  { label: 'Application mobile', value: 'application mobile' },
  { label: 'Application métier', value: 'application métier' },
  { label: 'Logiciel', value: 'logiciel' },
  { label: 'IA', value: 'ia' },
  { label: 'Gaming', value: 'gaming' },
  { label: 'Jeu', value: 'jeu' },
]

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

/* REFS */
const searchTerm: Ref<string> = ref<string>('')
const selectedLanguage: Ref<DibodevSelectOption> = ref<DibodevSelectOption>({
  label: 'Tous les langages',
  value: 'all',
})
const selectedCategory: Ref<DibodevSelectOption> = ref<DibodevSelectOption>({
  label: 'Toutes les catégories',
  value: 'all',
})

/**
 * All projects from Storyblok (single source of truth).
 */
const allProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] => {
  return storyblokProjectsData.value ?? []
})

/* METHODS */
/**
 * Normalize a technology name for comparison (removes dots, dashes, and spaces)
 * @param tech - The technology name to normalize
 * @returns {string} The normalized technology name
 */
const normalizeTech = (tech: string): string => {
  return tech.toLowerCase().replace(/[.\-\s]/g, '')
}

/**
 * Check if a technology matches the selected language filter
 * @param tech - The technology to check
 * @param filter - The filter value
 * @returns {boolean} True if the technology matches the filter
 */
const matchesLanguageFilter = (tech: string, filter: string): boolean => {
  const normalizedTech: string = normalizeTech(tech)
  const normalizedFilter: string = normalizeTech(filter)

  // Exact match for common cases where one is substring of another
  const exactMatches: Record<string, string[]> = {
    java: ['java'],
    javascript: ['javascript', 'js'],
    typescript: ['typescript', 'ts'],
    python: ['python', 'py'],
    rust: ['rust', 'rs'],
    go: ['go', 'golang'],
    php: ['php'],
    ruby: ['ruby', 'rb'],
    swift: ['swift'],
    kotlin: ['kotlin', 'kt'],
    'c#': ['c#', 'csharp'],
  }

  // Check if we have an exact match mapping
  if (exactMatches[normalizedFilter]) {
    return exactMatches[normalizedFilter].includes(normalizedTech)
  }

  // For other cases, use exact equality or the tech starts with the filter
  return normalizedTech === normalizedFilter || normalizedTech.startsWith(normalizedFilter)
}

/**
 * Filtered and searched projects based on user input.
 */
const projects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] => {
  let filtered: DibodevProject[] = allProjects.value

  // Filter by language
  if (selectedLanguage.value.value !== 'all') {
    const languageFilter: string = selectedLanguage.value.value.toString()
    filtered = filtered.filter((project: DibodevProject): boolean => {
      return project.stack.some((tech: string): boolean => matchesLanguageFilter(tech, languageFilter))
    })
  }

  // Filter by category
  if (selectedCategory.value.value !== 'all') {
    filtered = filtered.filter((project: DibodevProject): boolean => {
      return project.categories.some(
        (cat: string): boolean => cat.toLowerCase() === selectedCategory.value.value.toLowerCase(),
      )
    })
  }

  // Filter by search term
  if (searchTerm.value.trim() !== '') {
    const searchLower: string = searchTerm.value.toLowerCase().trim()
    filtered = filtered.filter((project: DibodevProject): boolean => {
      return (
        project.name.toLowerCase().includes(searchLower) ||
        project.shortDescription.toLowerCase().includes(searchLower) ||
        project.longDescription.toLowerCase().includes(searchLower) ||
        project.tags.some((tag: string): boolean => tag.toLowerCase().includes(searchLower)) ||
        project.stack.some((tech: string): boolean => tech.toLowerCase().includes(searchLower))
      )
    })
  }

  return filtered
})
</script>
