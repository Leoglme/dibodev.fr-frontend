<template>
  <div class="relative flex flex-col gap-3">
    <label :for="props.id" class="text-base font-medium text-gray-100">{{ props.label }}</label>
    <div class="relative">
      <input
        :id="props.id"
        type="text"
        autocomplete="off"
        role="combobox"
        :aria-expanded="areSuggestionsOpen"
        :aria-controls="listId"
        :aria-activedescendant="activeOptionId"
        aria-autocomplete="list"
        :maxlength="props.maxLength"
        :value="props.value"
        :placeholder="props.placeholder"
        class="focus:border-primary placeholder:text-muted relative flex h-12 w-full appearance-none items-center justify-center rounded-lg border border-gray-400 bg-white pl-3 text-gray-100 outline-none placeholder:text-base hover:border-gray-100"
        @input="onInput"
        @keydown.down.prevent="moveActiveOption(1)"
        @keydown.up.prevent="moveActiveOption(-1)"
        @keydown.enter="onEnter"
        @keydown.escape="closeSuggestions"
        @blur="closeSuggestions"
      />
      <ul
        v-if="areSuggestionsOpen"
        :id="listId"
        role="listbox"
        class="absolute top-full left-0 z-30 mt-1 w-max max-w-80 min-w-full overflow-hidden rounded-lg border border-gray-300 bg-white shadow-[0_18px_40px_rgba(20,20,20,0.12)]"
      >
        <li
          v-for="(town, index) in towns"
          :id="optionIdOf(index)"
          :key="town.code"
          role="option"
          :aria-selected="index === activeIndex"
          class="flex cursor-pointer items-start gap-3 px-4 py-3"
          :class="index === activeIndex ? 'bg-surface-tint' : 'hover:bg-surface-tint'"
          @mousedown.prevent
          @click="selectTown(town)"
        >
          <span class="text-primary mt-0.5 shrink-0" aria-hidden="true">
            <DibodevIcon name="MapPin" mode="stroke" :width="16" :height="16" />
          </span>
          <span class="grid min-w-0 gap-0.5">
            <span class="text-[15px] font-medium text-gray-100">{{ town.nom }}</span>
            <span class="text-muted truncate text-sm">{{ describeTown(town) }}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { DibodevGeoApiTown, DibodevTownSearchInputProps } from '~/core/types/DibodevTownSearchInput'
import { computed, onBeforeUnmount, ref } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { GEO_API_COMMUNES_URL } from '~/core/constants/geoApi'

const GEO_API_TOWN_FIELDS: string = 'nom,code,codesPostaux,departement'
const SUGGESTION_LIMIT: number = 5
const SEARCH_MIN_LENGTH: number = 2
const SEARCH_DEBOUNCE_MS: number = 250
const NO_ACTIVE_OPTION: number = -1

/**
 * Town field that suggests the French communes matching what the visitor types (national directory), while any text stays accepted.
 */
const props: DibodevTownSearchInputProps = defineProps({
  id: {
    type: String as PropType<string>,
    required: true,
  },
  label: {
    type: String as PropType<string>,
    required: true,
  },
  value: {
    type: String as PropType<string>,
    default: '',
  },
  placeholder: {
    type: String as PropType<string>,
    default: '',
  },
  maxLength: {
    type: Number as PropType<number>,
    default: 80,
  },
})

const emit: (event: 'update:value', value: string) => void = defineEmits<{
  (event: 'update:value', value: string): void
}>()

let searchTimer: ReturnType<typeof setTimeout> | null = null
let latestSearchId: number = 0

/* REFS */
const towns: Ref<DibodevGeoApiTown[]> = ref([])
const areSuggestionsOpen: Ref<boolean> = ref(false)
const activeIndex: Ref<number> = ref(NO_ACTIVE_OPTION)

/* COMPUTED */
const listId: ComputedRef<string> = computed((): string => `${props.id}-suggestions`)
const activeOptionId: ComputedRef<string | undefined> = computed((): string | undefined =>
  activeIndex.value === NO_ACTIVE_OPTION ? undefined : optionIdOf(activeIndex.value),
)

/* METHODS */
/**
 * Id of a suggestion, read by the field through `aria-activedescendant`.
 * @param {number} index - Position of the suggestion.
 * @returns {string} The id.
 */
function optionIdOf(index: number): string {
  return `${props.id}-suggestion-${index}`
}

/**
 * Second line of a suggestion: its first postcode and its department.
 * @param {DibodevGeoApiTown} town - The suggestion.
 * @returns {string} The postcode and the department, joined.
 */
function describeTown(town: DibodevGeoApiTown): string {
  return [town.codesPostaux?.[0], town.departement?.nom].filter(Boolean).join(' · ')
}

/**
 * Closes the suggestions without forgetting them.
 * @returns {void}
 */
function closeSuggestions(): void {
  areSuggestionsOpen.value = false
  activeIndex.value = NO_ACTIVE_OPTION
}

/**
 * Forgets the suggestions and any search still on its way.
 * @returns {void}
 */
function clearSuggestions(): void {
  if (searchTimer) {
    clearTimeout(searchTimer)
  }
  latestSearchId++
  towns.value = []
  closeSuggestions()
}

/**
 * Asks the national directory for the communes matching the text, and keeps the answer only if nothing was typed since.
 * @param {string} query - The trimmed text.
 * @returns {Promise<void>} Resolves once the suggestions are shown or dropped.
 */
async function searchTowns(query: string): Promise<void> {
  latestSearchId++
  const searchId: number = latestSearchId
  const params: URLSearchParams = new URLSearchParams({
    nom: query,
    fields: GEO_API_TOWN_FIELDS,
    boost: 'population',
    limit: String(SUGGESTION_LIMIT),
  })
  try {
    const foundTowns: DibodevGeoApiTown[] = await $fetch<DibodevGeoApiTown[]>(
      `${GEO_API_COMMUNES_URL}?${params.toString()}`,
    )
    if (searchId !== latestSearchId) {
      return
    }
    towns.value = foundTowns
    activeIndex.value = NO_ACTIVE_OPTION
    areSuggestionsOpen.value = foundTowns.length > 0
  } catch {
    if (searchId === latestSearchId) {
      clearSuggestions()
    }
  }
}

/**
 * Keeps the text typed, then searches it after a pause so one request goes out per word rather than per letter.
 * @param {Event} event - The input event.
 * @returns {void}
 */
function onInput(event: Event): void {
  const text: string = event.target instanceof HTMLInputElement ? event.target.value : ''
  emit('update:value', text)
  const query: string = text.trim()
  if (query.length < SEARCH_MIN_LENGTH) {
    clearSuggestions()
    return
  }
  if (searchTimer) {
    clearTimeout(searchTimer)
  }
  latestSearchId++
  searchTimer = setTimeout((): void => {
    searchTowns(query)
  }, SEARCH_DEBOUNCE_MS)
}

/**
 * Puts the name of the commune picked in the field.
 * @param {DibodevGeoApiTown} town - The commune picked.
 * @returns {void}
 */
function selectTown(town: DibodevGeoApiTown): void {
  emit('update:value', town.nom)
  clearSuggestions()
}

/**
 * Moves the highlighted suggestion with the arrow keys, from the last back to the first.
 * @param {number} step - 1 for down, -1 for up.
 * @returns {void}
 */
function moveActiveOption(step: number): void {
  if (!areSuggestionsOpen.value || towns.value.length === 0) {
    return
  }
  activeIndex.value = (activeIndex.value + step + towns.value.length) % towns.value.length
}

/**
 * Picks the highlighted suggestion with Enter; without one, Enter keeps its usual behaviour.
 * @param {KeyboardEvent} event - The key pressed.
 * @returns {void}
 */
function onEnter(event: KeyboardEvent): void {
  const highlightedTown: DibodevGeoApiTown | undefined = towns.value[activeIndex.value]
  if (!areSuggestionsOpen.value || !highlightedTown) {
    return
  }
  event.preventDefault()
  selectTown(highlightedTown)
}

/* LIFECYCLE */
onBeforeUnmount((): void => {
  if (searchTimer) {
    clearTimeout(searchTimer)
  }
})
</script>
