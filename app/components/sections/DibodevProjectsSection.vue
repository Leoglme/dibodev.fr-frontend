<template>
  <section id="projects" class="w-full scroll-mt-24 bg-gray-800 px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-10">
      <DibodevSectionHeading :eyebrow="t('projects.section.eyebrow')" :title="t('projects.section.title')" />

      <DibodevProjectFilters
        v-if="hasEnoughProjectsForFilters"
        :all-projects="allProjects"
        :search-title="t('projects.section.searchTitle')"
        :search-placeholder="t('projects.section.searchPlaceholder')"
        :all-languages-label="t('projects.section.allLanguages')"
        v-model:search-term="searchTerm"
        v-model:selected-language="selectedLanguage"
      />

      <div v-if="projects.length > 0" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <DibodevProjectCard
          v-for="project in projects"
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

      <div
        v-else
        class="flex w-full flex-col items-center justify-center gap-6 rounded-lg border border-gray-300 bg-white px-6 py-20"
      >
        <div class="rounded-full bg-gray-800 p-5">
          <DibodevIcon name="Search" mode="stroke" :width="32" :height="32" class="text-muted" aria-hidden="true" />
        </div>
        <div class="flex flex-col items-center gap-2">
          <h3 class="text-2xl font-medium text-gray-100">{{ $t('projects.section.noResultsTitle') }}</h3>
          <p class="max-w-md text-center text-[15px] leading-6 text-gray-200">
            {{ $t('projects.section.noResultsDescription') }}
          </p>
        </div>
      </div>

      <slot name="footer" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { Ref, ComputedRef, PropType } from 'vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { DibodevProjectsSectionProps } from '~/core/types/DibodevProjectsSection'
import type { DibodevSelectOption } from '~/core/types/DibodevSelect'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevProjectCard from '~/components/cards/DibodevProjectCard.vue'
import { ProjectUtils } from '~/core/utils/ProjectUtils'
import DibodevProjectFilters from '~/components/sections/DibodevProjectFilters.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { getProjectDescriptionForSchema } from '~/core/utils/projectDescriptionForSchema'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'
import { ProjectOrderUtils } from '~/core/utils/ProjectOrderUtils'

/**
 * Filterable project grid (search + technology filter), optionally fed with a pre-filtered list.
 */
const props: DibodevProjectsSectionProps = defineProps({
  initialProjects: {
    type: Array as PropType<DibodevProject[] | null>,
    default: null,
  },
})

const { t } = useI18n()
const { data: storyblokProjectsData } = await useProjectsWithTranslations()

const searchTerm: Ref<string> = ref<string>('')
const selectedLanguage: Ref<DibodevSelectOption> = ref<DibodevSelectOption>({
  label: t('projects.section.allLanguages'),
  value: 'all',
})

/** Projects of the listing: the ones chosen for the home page first, then the most recent ones. */
const allProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] =>
  ProjectOrderUtils.homePageSelectionFirst(props.initialProjects ?? storyblokProjectsData.value ?? []),
)

/** Filters are only useful from this number of projects. */
const MIN_PROJECTS_FOR_FILTERS: number = 3
const hasEnoughProjectsForFilters: ComputedRef<boolean> = computed(
  (): boolean => allProjects.value.length >= MIN_PROJECTS_FOR_FILTERS,
)

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
    const longDescText: (p: DibodevProject) => string = getProjectDescriptionForSchema
    filtered = filtered.filter((project: DibodevProject): boolean => {
      return (
        project.name.toLowerCase().includes(searchLower) ||
        project.shortDescription.toLowerCase().includes(searchLower) ||
        longDescText(project).toLowerCase().includes(searchLower) ||
        project.tags.some((tag: string): boolean => tag.toLowerCase().includes(searchLower)) ||
        project.stack.some((tech: string): boolean => tech.toLowerCase().includes(searchLower))
      )
    })
  }

  return filtered
})
</script>
