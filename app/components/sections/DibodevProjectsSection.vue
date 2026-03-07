<template>
  <section
    id="projects"
    data-aos="fade-up"
    data-aos-duration="600"
    data-aos-offset="300"
    class="relative z-2 flex h-full min-h-screen w-screen max-w-screen flex-col items-center justify-center gap-18 px-6 py-24 sm:px-8 sm:py-36"
  >
    <DibodevProjectFilters
      :all-projects="allProjects"
      :search-title="t('projects.section.searchTitle')"
      :search-placeholder="t('projects.section.searchPlaceholder')"
      :all-languages-label="t('projects.section.allLanguages')"
      v-model:search-term="searchTerm"
      v-model:selected-language="selectedLanguage"
    />

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
        :route="project.route"
        :categories="project.categories ?? []"
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
        <h3 class="text-2xl font-semibold text-gray-100">{{ $t('projects.section.noResultsTitle') }}</h3>
        <p class="text-center text-base text-gray-300">
          {{ $t('projects.section.noResultsDescription') }}
        </p>
      </div>
    </div>

    <DibodevContactCtaSection
      :title="$t('projects.cta.text')"
      :description="$t('projects.cta.description')"
      :ctaText="$t('projects.cta.button')"
    />
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import DibodevProjectCard from '~/components/cards/DibodevProjectCard.vue'
import DibodevProjectFilters from '~/components/sections/DibodevProjectFilters.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { DibodevSelectOption } from '~/core/types/DibodevSelect'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'

const props = withDefaults(
  defineProps<{
    /** Liste préfiltrée (ex. page secteur / catégorie) ; si fournie, utilisée à la place du fetch. */
    initialProjects?: DibodevProject[]
  }>(),
  { initialProjects: undefined },
)

const { t } = useI18n()
const { data: storyblokProjectsData } = await useProjectsWithTranslations()

const searchTerm: Ref<string> = ref<string>('')
const selectedLanguage: Ref<DibodevSelectOption> = ref<DibodevSelectOption>({
  label: t('projects.section.allLanguages'),
  value: 'all',
})

const allProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] => {
  if (props.initialProjects != null && Array.isArray(props.initialProjects)) {
    return props.initialProjects
  }
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
