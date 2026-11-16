<template>
  <div :id="props.anchorId" class="grid gap-6">
    <div
      role="tablist"
      :aria-label="props.wording.tabsLabel"
      class="grid gap-2 rounded-2xl border border-gray-300 bg-white p-1.5 sm:grid-cols-2"
    >
      <button
        v-for="tab in tabs"
        :id="tabIdOf(tab.mode)"
        :key="tab.mode"
        ref="tabButtons"
        type="button"
        role="tab"
        :aria-selected="activeMode === tab.mode"
        :aria-controls="panelIdOf(tab.mode)"
        :tabindex="activeMode === tab.mode ? 0 : -1"
        class="focus-visible:ring-primary grid min-h-14 cursor-pointer gap-0.5 rounded-xl px-4 py-2.5 text-left transition-colors focus:outline-none focus-visible:ring-2 sm:text-center"
        :class="activeMode === tab.mode ? 'bg-primary text-white' : 'hover:bg-surface-tint text-gray-100'"
        @click="selectMode(tab.mode)"
        @keydown="onTabKeydown"
      >
        <span class="text-[15px] leading-6 font-medium">{{ tab.label }}</span>
        <span class="text-sm leading-5" :class="activeMode === tab.mode ? 'text-white/85' : 'text-muted'">{{
          tab.hint
        }}</span>
      </button>
    </div>

    <div
      v-show="activeMode === 'export'"
      :id="panelIdOf('export')"
      role="tabpanel"
      :aria-labelledby="tabIdOf('export')"
    >
      <DibodevGoogleUpdateExportPanel
        :wording="props.wording"
        :trackingLocation="props.trackingLocation"
        @started="trackStart('export')"
      />
    </div>

    <div v-show="activeMode === 'quiz'" :id="panelIdOf('quiz')" role="tabpanel" :aria-labelledby="tabIdOf('quiz')">
      <DibodevQuizTunnel :quiz="props.quiz" @completed="onQuizCompleted" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type {
  DibodevGoogleUpdateImpactCheckerProps,
  DibodevGoogleUpdateImpactCheckerWording,
  DibodevGoogleUpdateImpactMode,
  DibodevGoogleUpdateImpactTab,
} from '~/core/types/DibodevGoogleUpdateImpactChecker'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import { computed, onMounted, ref } from 'vue'
import DibodevGoogleUpdateExportPanel from '~/components/google-update/DibodevGoogleUpdateExportPanel.vue'
import DibodevQuizTunnel from '~/components/quiz/DibodevQuizTunnel.vue'
import { useTracking } from '~/composables/useTracking'
import { LATEST_GOOGLE_SEARCH_UPDATE } from '~/core/constants/googleSearchUpdates'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** The two ways in, as tabs: the Search Console export and the 5-question test, both rendered so the first question is in the prerendered page. */
const props: DibodevGoogleUpdateImpactCheckerProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevGoogleUpdateImpactCheckerWording>,
    required: true,
  },
  quiz: {
    type: Object as PropType<DibodevQuizDefinition>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const route = useRoute()
const { track } = useTracking()

const MODES: DibodevGoogleUpdateImpactMode[] = ['export', 'quiz']
let hasTrackedStart: boolean = false

/* REFS */
const tabButtons: Ref<HTMLButtonElement[]> = ref([])
const activeMode: Ref<DibodevGoogleUpdateImpactMode> = ref('export')

/* COMPUTED */
const tabs: ComputedRef<DibodevGoogleUpdateImpactTab[]> = computed((): DibodevGoogleUpdateImpactTab[] => [
  { mode: 'export', label: props.wording.exportTabLabel, hint: props.wording.exportTabHint },
  { mode: 'quiz', label: props.wording.quizTabLabel, hint: props.wording.quizTabHint },
])

/* METHODS */
/**
 * Id of the tab button of a way in.
 * @param {DibodevGoogleUpdateImpactMode} mode - The way in.
 * @returns {string} The id.
 */
function tabIdOf(mode: DibodevGoogleUpdateImpactMode): string {
  return `google-update-tab-${mode}`
}

/**
 * Id of the panel of a way in.
 * @param {DibodevGoogleUpdateImpactMode} mode - The way in.
 * @returns {string} The id.
 */
function panelIdOf(mode: DibodevGoogleUpdateImpactMode): string {
  return `google-update-panel-${mode}`
}

/**
 * Tracks the first action of the visitor, once per page view.
 * @param {DibodevGoogleUpdateImpactMode} mode - The way in used.
 * @returns {void}
 */
function trackStart(mode: DibodevGoogleUpdateImpactMode): void {
  if (hasTrackedStart) {
    return
  }
  hasTrackedStart = true
  track(TRACKING_EVENTS.googleUpdateImpactCheckStarted, { location: props.trackingLocation, mode })
}

/**
 * Shows a way in and tracks the choice.
 * @param {DibodevGoogleUpdateImpactMode} mode - The way in.
 * @returns {void}
 */
function selectMode(mode: DibodevGoogleUpdateImpactMode): void {
  activeMode.value = mode
  trackStart(mode)
}

/**
 * Moves between the two tabs with the arrow keys, Home and End.
 * @param {KeyboardEvent} event - The key pressed on a tab.
 * @returns {void}
 */
function onTabKeydown(event: KeyboardEvent): void {
  const currentIndex: number = MODES.indexOf(activeMode.value)
  let nextIndex: number = currentIndex

  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    nextIndex = (currentIndex + 1) % MODES.length
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    nextIndex = (currentIndex - 1 + MODES.length) % MODES.length
  } else if (event.key === 'Home') {
    nextIndex = 0
  } else if (event.key === 'End') {
    nextIndex = MODES.length - 1
  } else {
    return
  }
  event.preventDefault()
  selectMode(MODES[nextIndex] ?? 'export')
  tabButtons.value[nextIndex]?.focus()
}

/**
 * Tracks the verdict of the test under the event of the tool.
 * @param {string} verdict - The verdict of the test.
 * @returns {void}
 */
function onQuizCompleted(verdict: string): void {
  trackStart('quiz')
  track(TRACKING_EVENTS.googleUpdateImpactChecked, {
    location: props.trackingLocation,
    mode: 'quiz',
    verdict,
    provisionalTrend: null,
    update: LATEST_GOOGLE_SEARCH_UPDATE.id,
    hasPageComparison: false,
    isExample: false,
  })
}

/* LIFECYCLE */
/** A visitor coming back to a step of the test (browser Back, shared link) lands on the test tab. */
onMounted((): void => {
  if (route.query.step !== undefined) {
    activeMode.value = 'quiz'
  }
})
</script>
