<template>
  <div class="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
    <div class="grid content-start gap-6 rounded-2xl border border-gray-300 bg-white p-5 sm:p-8">
      <div class="grid gap-2">
        <label :for="UPDATE_SELECT_ID" class="text-[15px] leading-6 font-medium text-gray-100">{{
          props.wording.updateSelectLabel
        }}</label>
        <select
          :id="UPDATE_SELECT_ID"
          v-model="selectedUpdateId"
          class="focus-visible:ring-primary min-h-12 w-full min-w-0 cursor-pointer rounded-lg border border-gray-300 bg-white px-3 py-2 text-[15px] text-gray-100 focus:outline-none focus-visible:ring-2"
          @change="onUpdateChange"
        >
          <option v-for="option in updateOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>
      <DibodevGoogleUpdateExportDropZone
        :wording="props.wording"
        :isReading="isReading"
        :errorMessage="errorMessage"
        @files-selected="onFilesSelected"
        @example="loadExample"
      />
      <button
        v-if="searchConsoleExport"
        type="button"
        class="text-muted inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 text-sm underline-offset-4 hover:text-gray-100 hover:underline"
        @click="clearExport"
      >
        <DibodevIcon name="RotateCcw" mode="stroke" :width="16" :height="16" aria-hidden="true" />
        {{ props.wording.resetButton }}
      </button>
    </div>

    <div ref="resultContainer">
      <DibodevGoogleUpdateExportResult
        :wording="props.wording"
        :update="selectedUpdate"
        :result="impactResult"
        :pageMovements="pageMovements"
        :hasPageRows="hasPageRows"
        :isExample="isExample"
        :contactRoute="contactRoute"
        @contact-click="trackContactClick"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type {
  DibodevGoogleSearchUpdate,
  DibodevGoogleUpdateImpactResult,
  DibodevGoogleUpdatePageMovements,
  DibodevSearchConsoleExport,
  DibodevSearchConsoleInputFile,
  DibodevSearchConsoleReadResult,
} from '~/core/types/DibodevGoogleUpdateImpact'
import type {
  DibodevGoogleUpdateExportPanelProps,
  DibodevGoogleUpdateImpactCheckerWording,
} from '~/core/types/DibodevGoogleUpdateImpactChecker'
import type { DibodevSelectOption } from '~/core/types/DibodevSelect'
import { computed, nextTick, ref } from 'vue'
import DibodevGoogleUpdateExportDropZone from '~/components/google-update/DibodevGoogleUpdateExportDropZone.vue'
import DibodevGoogleUpdateExportResult from '~/components/google-update/DibodevGoogleUpdateExportResult.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { GOOGLE_SEARCH_UPDATES, LATEST_GOOGLE_SEARCH_UPDATE } from '~/core/constants/googleSearchUpdates'
import { GOOGLE_UPDATE_CONTACT_TOPIC } from '~/core/constants/googleUpdateImpactCheck/pageShared'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { GoogleUpdateImpactUtils } from '~/core/utils/GoogleUpdateImpactUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'
import { ResultRevealUtils } from '~/core/utils/ResultRevealUtils'
import { SearchConsoleExportUtils } from '~/core/utils/SearchConsoleExportUtils'
import { SiteCheckContactUtils } from '~/core/utils/SiteCheckContactUtils'

/** The export way in: the files are read in the browser, the PostHog events carry only verdicts, never a page, a figure or a file name. */
const props: DibodevGoogleUpdateExportPanelProps = defineProps({
  wording: {
    type: Object as PropType<DibodevGoogleUpdateImpactCheckerWording>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const emit: (event: 'started') => void = defineEmits<{
  (event: 'started'): void
}>()

const { locale } = useI18n()
const localePath = useLocalePath()
const { track } = useTracking()

const UPDATE_SELECT_ID: string = 'google-update-compared'
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'

/* REFS */
const selectedUpdateId: Ref<string> = ref(LATEST_GOOGLE_SEARCH_UPDATE.id)
const searchConsoleExport: Ref<DibodevSearchConsoleExport | null> = ref(null)
const isExample: Ref<boolean> = ref(false)
const isReading: Ref<boolean> = ref(false)
const errorMessage: Ref<string> = ref('')
const resultContainer: Ref<HTMLElement | null> = ref(null)

/* COMPUTED */
const selectedUpdate: ComputedRef<DibodevGoogleSearchUpdate> = computed(
  (): DibodevGoogleSearchUpdate =>
    GOOGLE_SEARCH_UPDATES.find((update: DibodevGoogleSearchUpdate): boolean => update.id === selectedUpdateId.value) ??
    LATEST_GOOGLE_SEARCH_UPDATE,
)

const updateOptions: ComputedRef<DibodevSelectOption[]> = computed((): DibodevSelectOption[] =>
  GOOGLE_SEARCH_UPDATES.map(
    (update: DibodevGoogleSearchUpdate): DibodevSelectOption => ({
      value: update.id,
      label: QuizTextUtils.fillTemplate(props.wording.updateOptionTemplate, {
        name: update.name,
        kind: props.wording.updateKindLabels[update.kind],
        startDate: GoogleUpdateImpactUtils.formatDate(update.startDate, pageLocale),
      }),
    }),
  ),
)

const impactResult: ComputedRef<DibodevGoogleUpdateImpactResult | null> = computed(
  (): DibodevGoogleUpdateImpactResult | null =>
    searchConsoleExport.value
      ? GoogleUpdateImpactUtils.evaluate(searchConsoleExport.value.dailyRows, selectedUpdate.value)
      : null,
)

const pageMovements: ComputedRef<DibodevGoogleUpdatePageMovements | null> = computed(
  (): DibodevGoogleUpdatePageMovements | null =>
    searchConsoleExport.value?.hasPageComparison
      ? GoogleUpdateImpactUtils.pageMovements(searchConsoleExport.value.pageRows)
      : null,
)

const hasPageRows: ComputedRef<boolean> = computed((): boolean => (searchConsoleExport.value?.pageRows.length ?? 0) > 0)

/** The contact page, with the verdict carried over so the message arrives already written. */
const contactRoute: ComputedRef<string> = computed((): string =>
  localePath({
    path: '/contact',
    query: SiteCheckContactUtils.buildContactQuery(
      GOOGLE_UPDATE_CONTACT_TOPIC,
      null,
      impactResult.value?.verdict ?? null,
    ),
  }),
)

/* METHODS */
/**
 * Tracks the verdict of the export: the verdict, the update and whether pages were compared, never a figure.
 * @returns {void}
 */
function trackExportChecked(): void {
  if (!impactResult.value) {
    return
  }
  track(TRACKING_EVENTS.googleUpdateImpactChecked, {
    location: props.trackingLocation,
    mode: 'export',
    verdict: impactResult.value.verdict,
    provisionalTrend: impactResult.value.provisionalTrend,
    update: selectedUpdate.value.id,
    hasPageComparison: pageMovements.value !== null,
    isExample: isExample.value,
  })
}

/**
 * Brings the result into view when it sits under the fold, as it does on a phone where it follows the drop zone.
 * @returns {Promise<void>} Resolves once the result is in view.
 */
async function revealResultBelowTheFold(): Promise<void> {
  await nextTick()
  ResultRevealUtils.revealBelowTheFold(resultContainer.value)
}

/**
 * Reads the files given in the browser and shows the verdict, or why they could not be read.
 * @param {File[]} files - The files dropped or chosen.
 * @returns {Promise<void>} Resolves once the files are read.
 */
async function onFilesSelected(files: File[]): Promise<void> {
  emit('started')
  isReading.value = true
  errorMessage.value = ''
  try {
    const inputFiles: DibodevSearchConsoleInputFile[] = await Promise.all(
      files.map(
        async (file: File): Promise<DibodevSearchConsoleInputFile> => ({
          name: file.name,
          bytes: new Uint8Array(await file.arrayBuffer()),
        }),
      ),
    )
    const readResult: DibodevSearchConsoleReadResult = await SearchConsoleExportUtils.read(inputFiles)

    if (!readResult.isRead) {
      errorMessage.value = props.wording.errors[readResult.errorKind]
      track(TRACKING_EVENTS.googleUpdateExportUnreadable, {
        location: props.trackingLocation,
        errorKind: readResult.errorKind,
      })
      return
    }
    searchConsoleExport.value = readResult.searchConsoleExport
    isExample.value = false
    trackExportChecked()
    await revealResultBelowTheFold()
  } catch {
    errorMessage.value = props.wording.errors.zipUnreadable
    track(TRACKING_EVENTS.googleUpdateExportUnreadable, {
      location: props.trackingLocation,
      errorKind: 'zipUnreadable',
    })
  } finally {
    isReading.value = false
  }
}

/**
 * Shows the result of fictitious data, labelled as an example.
 * @returns {void}
 */
function loadExample(): void {
  emit('started')
  errorMessage.value = ''
  searchConsoleExport.value = GoogleUpdateImpactUtils.buildExampleExport(selectedUpdate.value)
  isExample.value = true
  trackExportChecked()
  revealResultBelowTheFold()
}

/**
 * Rebuilds the example for the update chosen, and tracks the new verdict.
 * @returns {void}
 */
function onUpdateChange(): void {
  if (isExample.value) {
    searchConsoleExport.value = GoogleUpdateImpactUtils.buildExampleExport(selectedUpdate.value)
  }
  trackExportChecked()
}

/**
 * Forgets the export read, back to the empty card.
 * @returns {void}
 */
function clearExport(): void {
  searchConsoleExport.value = null
  isExample.value = false
  errorMessage.value = ''
}

/**
 * Tracks the click on the contact button of the result card, before or after a result.
 * @returns {void}
 */
function trackContactClick(): void {
  track(TRACKING_EVENTS.ctaProjectDiscussion, {
    location: impactResult.value ? props.trackingLocation : `${props.trackingLocation}_idle`,
  })
}
</script>
