<template>
  <div class="flex w-full max-w-7xl items-center justify-center">
    <div
      class="flex w-full flex-col items-stretch gap-4 lg:items-start lg:gap-6 xl:flex-row xl:items-center xl:justify-between"
    >
      <div class="flex min-w-0 flex-col gap-4 lg:flex-row lg:gap-6">
        <div class="dibodev-project-filter-select min-w-0 flex-1">
          <DibodevSelect
            id="sector-select"
            :options="sectorOptionsWithHref"
            :model-value="selectedSectorFromRoute"
            :use-links="true"
          />
        </div>
        <div class="dibodev-project-filter-select min-w-0 flex-1">
          <DibodevSelect
            id="language-select"
            :options="languageOptions"
            :model-value="selectedLanguage"
            @update:model-value="selectedLanguage = $event"
          />
        </div>
        <div class="dibodev-project-filter-select min-w-0 flex-1">
          <DibodevSelect
            id="category-select"
            :options="categoryOptionsWithHref"
            :model-value="selectedCategoryFromRoute"
            :use-links="true"
          />
        </div>
      </div>

      <div class="w-full min-w-0 xl:max-w-md xl:flex-1">
        <DibodevSearchBar
          :title="props.searchTitle"
          :placeholder="props.searchPlaceholder"
          :value="searchTerm"
          @update:value="searchTerm = $event"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import { computed, watch } from 'vue'
import type { PropType } from 'vue'
import DibodevSelect from '~/components/core/DibodevSelect.vue'
import DibodevSearchBar from '~/components/inputs/DibodevSearchBar.vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { DibodevSelectOption } from '~/core/types/DibodevSelect'
import type { DibodevProjectFiltersProps } from '~/core/types/DibodevProjectFilters'
import { useSectorSelect } from '~/composables/useSectorSelect'
import { useCategorySelect } from '~/composables/useCategorySelect'

const props = defineProps({
  allProjects: {
    type: Array as PropType<DibodevProject[]>,
    required: true,
  },
  searchTitle: {
    type: String,
    required: true,
  },
  searchPlaceholder: {
    type: String,
    required: true,
  },
  allLanguagesLabel: {
    type: String,
    required: true,
  },
}) as DibodevProjectFiltersProps

const searchTerm = defineModel<string>('searchTerm', { required: true })
const selectedLanguage = defineModel<DibodevSelectOption>('selectedLanguage', { required: true })

const { locale } = useI18n()
const { sectorOptionsWithHref, selectedSectorFromRoute } = useSectorSelect()
const { categoryOptionsWithHref, selectedCategoryFromRoute } = useCategorySelect()

watch(
  locale,
  () => {
    if (selectedLanguage.value.value === 'all') {
      selectedLanguage.value = {
        label: props.allLanguagesLabel,
        value: 'all',
      }
    }
  },
  { immediate: false },
)

const languageOptions: ComputedRef<DibodevSelectOption[]> = computed((): DibodevSelectOption[] => {
  const all: DibodevProject[] = props.allProjects
  const set = new Set<string>()
  for (const project of all) {
    for (const tech of project.stack) {
      if (tech != null && String(tech).trim() !== '') {
        set.add(String(tech).trim())
      }
    }
  }
  const sorted: string[] = [...set].sort((a: string, b: string) => a.localeCompare(b, 'fr'))
  const options: DibodevSelectOption[] = [{ label: props.allLanguagesLabel, value: 'all' }]
  for (const value of sorted) {
    options.push({ label: value, value })
  }
  return options
})
</script>

<style scoped>
.dibodev-project-filter-select {
  min-width: 0;
}
.dibodev-project-filter-select :deep(*) {
  min-width: 0;
}
@media (min-width: 1024px) {
  .dibodev-project-filter-select {
    min-width: 220px !important;
  }
}
</style>
