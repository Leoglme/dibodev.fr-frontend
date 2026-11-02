<template>
  <div v-if="isConfigured" class="relative flex flex-col gap-3">
    <label :for="INPUT_ID" class="text-base font-medium text-gray-100">
      {{ props.wording.business.googleSearchLabel }}
      <span class="text-muted font-normal">{{ props.wording.business.googleSearchOptional }}</span>
    </label>
    <div class="relative">
      <input
        :id="INPUT_ID"
        v-model="query"
        type="text"
        autocomplete="off"
        role="combobox"
        :aria-expanded="areSuggestionsOpen"
        :aria-controls="LIST_ID"
        :aria-activedescendant="activeOptionId"
        :aria-busy="isSearching"
        aria-autocomplete="list"
        class="focus:border-primary placeholder:text-muted relative flex h-12 w-full appearance-none items-center justify-center rounded-lg border border-gray-400 bg-white pr-3 pl-10 text-gray-100 outline-none placeholder:text-base hover:border-gray-100"
        :placeholder="props.wording.business.googleSearchPlaceholder"
        @input="onQueryInput"
        @keydown.down.prevent="moveActiveOption(1)"
        @keydown.up.prevent="moveActiveOption(-1)"
        @keydown.enter="onEnter"
        @keydown.escape="closeSuggestions"
        @blur="closeSuggestions"
      />
      <span class="text-muted pointer-events-none absolute top-1/2 left-3 -translate-y-1/2" aria-hidden="true">
        <DibodevIcon name="Search" mode="stroke" :width="18" :height="18" />
      </span>
      <ul
        v-if="areSuggestionsOpen"
        :id="LIST_ID"
        role="listbox"
        class="absolute inset-x-0 top-full z-30 mt-1 overflow-hidden rounded-lg border border-gray-300 bg-white shadow-[0_18px_40px_rgba(20,20,20,0.12)]"
      >
        <li
          v-for="(place, index) in places"
          :id="optionIdOf(index)"
          :key="place.placeId"
          role="option"
          :aria-selected="index === activeIndex"
          class="flex cursor-pointer items-start gap-3 px-4 py-3"
          :class="index === activeIndex ? 'bg-surface-tint' : 'hover:bg-surface-tint'"
          @mousedown.prevent
          @click="selectPlace(place)"
        >
          <span class="text-primary mt-0.5 shrink-0" aria-hidden="true">
            <DibodevIcon name="MapPin" mode="stroke" :width="16" :height="16" />
          </span>
          <span class="grid min-w-0 gap-0.5">
            <span class="text-[15px] font-medium text-gray-100">{{ place.name }}</span>
            <span class="text-muted text-sm">{{ describePlace(place) }}</span>
          </span>
        </li>
      </ul>
    </div>
    <p class="text-muted text-sm leading-6" aria-live="polite">{{ hint }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { SiteAtelierGooglePlace, SiteAtelierGooglePlaceResponse } from '~~/server/types/tools/siteAtelier'
import type { DibodevSiteAtelierWording } from '~/core/types/DibodevSiteAtelier'
import type { DibodevSiteAtelierGooglePlaceSearchProps } from '~/core/types/DibodevSiteAtelierGooglePlaceSearch'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import {
  SITE_ATELIER_GOOGLE_PLACE_API_PATH,
  SITE_ATELIER_GOOGLE_SEARCH_DEBOUNCE_MS,
  SITE_ATELIER_GOOGLE_SEARCH_MIN_LENGTH,
} from '~/core/constants/siteAtelier/siteAtelierShared'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

const INPUT_ID: string = 'site-atelier-google-search'
const LIST_ID: string = 'site-atelier-google-suggestions'
const NO_ACTIVE_OPTION: number = -1

/**
 * Search of the visitor's Google Business profile, hidden while the server has no Places key; the profile picked comes with its photos.
 */
const props: DibodevSiteAtelierGooglePlaceSearchProps = defineProps({
  wording: {
    type: Object as PropType<DibodevSiteAtelierWording>,
    required: true,
  },
})

const emit: (event: 'select', place: SiteAtelierGooglePlace) => void = defineEmits<{
  (event: 'select', place: SiteAtelierGooglePlace): void
}>()

let searchTimer: ReturnType<typeof setTimeout> | null = null
let latestSearchId: number = 0

/* REFS */
const isConfigured: Ref<boolean> = ref(false)
const query: Ref<string> = ref('')
const places: Ref<SiteAtelierGooglePlace[]> = ref([])
const areSuggestionsOpen: Ref<boolean> = ref(false)
const activeIndex: Ref<number> = ref(NO_ACTIVE_OPTION)
const isSearching: Ref<boolean> = ref(false)
const hasSearched: Ref<boolean> = ref(false)
const hasFailed: Ref<boolean> = ref(false)

/* COMPUTED */
const hint: ComputedRef<string> = computed((): string => {
  if (hasFailed.value) {
    return props.wording.business.googleSearchError
  }
  if (hasSearched.value && places.value.length === 0) {
    return props.wording.business.googleSearchNoResult
  }
  return props.wording.business.googleSearchHint
})
const activeOptionId: ComputedRef<string | undefined> = computed((): string | undefined =>
  areSuggestionsOpen.value && activeIndex.value !== NO_ACTIVE_OPTION ? optionIdOf(activeIndex.value) : undefined,
)

/* METHODS */
/**
 * Id of a suggestion, read by screen readers through `aria-activedescendant`.
 * @param {number} index - Position of the suggestion.
 * @returns {string} The element id.
 */
function optionIdOf(index: number): string {
  return `${LIST_ID}-${index}`
}

/**
 * One line under a suggestion: city, rating and number of reviews, phone.
 * @param {SiteAtelierGooglePlace} place - The profile.
 * @returns {string} The line.
 */
function describePlace(place: SiteAtelierGooglePlace): string {
  const parts: string[] = []
  if (place.city) {
    parts.push(place.city)
  }
  if (place.rating !== null) {
    parts.push(`${place.rating.toLocaleString()} ★`)
  }
  if (place.reviewCount !== null) {
    parts.push(
      QuizTextUtils.fillTemplate(props.wording.business.googleSearchReviews, { count: String(place.reviewCount) }),
    )
  }
  if (place.phone) {
    parts.push(place.phone)
  }
  return parts.join(' · ')
}

/**
 * Asks the server whether the search is available, without searching anything.
 * @returns {Promise<void>} Resolves once known.
 */
async function probeConfiguration(): Promise<void> {
  try {
    const response: SiteAtelierGooglePlaceResponse = await $fetch<SiteAtelierGooglePlaceResponse>(
      SITE_ATELIER_GOOGLE_PLACE_API_PATH,
    )
    isConfigured.value = response.configured
  } catch {
    isConfigured.value = false
  }
}

/**
 * Searches the profiles matching the text typed.
 * @returns {Promise<void>} Resolves once the suggestions are updated.
 */
async function search(): Promise<void> {
  latestSearchId += 1
  const searchId: number = latestSearchId
  isSearching.value = true
  try {
    const response: SiteAtelierGooglePlaceResponse = await $fetch<SiteAtelierGooglePlaceResponse>(
      SITE_ATELIER_GOOGLE_PLACE_API_PATH,
      { query: { q: query.value.trim() } },
    )
    if (searchId !== latestSearchId) {
      return
    }
    hasFailed.value = false
    hasSearched.value = true
    isConfigured.value = response.configured
    places.value = response.places
    activeIndex.value = NO_ACTIVE_OPTION
    areSuggestionsOpen.value = response.places.length > 0
  } catch {
    if (searchId !== latestSearchId) {
      return
    }
    hasFailed.value = true
    places.value = []
    areSuggestionsOpen.value = false
  } finally {
    if (searchId === latestSearchId) {
      isSearching.value = false
    }
  }
}

/**
 * Searches a moment after the last key, once the text is long enough.
 * @returns {void}
 */
function onQueryInput(): void {
  if (searchTimer) {
    clearTimeout(searchTimer)
  }
  if (query.value.trim().length < SITE_ATELIER_GOOGLE_SEARCH_MIN_LENGTH) {
    places.value = []
    areSuggestionsOpen.value = false
    hasSearched.value = false
    return
  }
  searchTimer = setTimeout((): void => {
    search()
  }, SITE_ATELIER_GOOGLE_SEARCH_DEBOUNCE_MS)
}

/**
 * Moves the highlighted suggestion with the arrow keys.
 * @param {number} offset - 1 to go down, -1 to go up.
 * @returns {void}
 */
function moveActiveOption(offset: number): void {
  if (!areSuggestionsOpen.value || places.value.length === 0) {
    return
  }
  const optionCount: number = places.value.length
  activeIndex.value = (activeIndex.value + offset + optionCount) % optionCount
}

/**
 * Picks the highlighted suggestion with the Enter key, or the first one when none is highlighted.
 * @param {KeyboardEvent} event - The key event.
 * @returns {void}
 */
function onEnter(event: KeyboardEvent): void {
  if (!areSuggestionsOpen.value) {
    return
  }
  event.preventDefault()
  const place: SiteAtelierGooglePlace | undefined = places.value[Math.max(activeIndex.value, 0)]
  if (place) {
    selectPlace(place)
  }
}

/**
 * Reads the photos of a profile, which the search leaves out to stay quick.
 * @param {SiteAtelierGooglePlace} place - The profile picked.
 * @returns {Promise<SiteAtelierGooglePlace>} The profile with its photos, or as it was when they cannot be read.
 */
async function readPlaceDetails(place: SiteAtelierGooglePlace): Promise<SiteAtelierGooglePlace> {
  try {
    const response: SiteAtelierGooglePlaceResponse = await $fetch<SiteAtelierGooglePlaceResponse>(
      SITE_ATELIER_GOOGLE_PLACE_API_PATH,
      { query: { placeId: place.placeId } },
    )
    return response.places[0] ?? place
  } catch {
    return place
  }
}

/**
 * Shows the profile picked in the field and hands it, with its photos, to the step.
 * @param {SiteAtelierGooglePlace} place - The profile picked.
 * @returns {Promise<void>} Resolves once the profile is handed over.
 */
async function selectPlace(place: SiteAtelierGooglePlace): Promise<void> {
  query.value = place.city ? `${place.name} · ${place.city}` : place.name
  closeSuggestions()
  emit('select', place)
  const detailedPlace: SiteAtelierGooglePlace = await readPlaceDetails(place)
  if (detailedPlace.photoUrls.length > 0) {
    emit('select', detailedPlace)
  }
}

/**
 * Hides the suggestions.
 * @returns {void}
 */
function closeSuggestions(): void {
  areSuggestionsOpen.value = false
  activeIndex.value = NO_ACTIVE_OPTION
}

/* LIFECYCLE */
onMounted((): void => {
  probeConfiguration()
})

onBeforeUnmount((): void => {
  if (searchTimer) {
    clearTimeout(searchTimer)
  }
})
</script>
