<template>
  <div :id="props.anchorId" class="grid scroll-mt-24 items-start gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
    <div class="grid content-start gap-7 rounded-2xl border border-gray-300 bg-white p-6 sm:p-8">
      <div class="simulator-group" @keydown.enter.prevent="selectFirstMatch">
        <div v-if="selectedCommune" class="grid gap-3">
          <p class="simulator-group__legend">{{ props.wording.communeLabel }}</p>
          <div class="flex items-start justify-between gap-3 rounded-lg border border-gray-300 bg-gray-50 px-3 py-3">
            <p class="text-[15px] leading-6 text-gray-100">{{ selectedCommuneLabel }}</p>
            <button
              type="button"
              class="text-primary hover:text-primary-dark -my-2 -mr-1 inline-flex min-h-11 shrink-0 cursor-pointer items-center rounded-md px-2 text-sm font-medium transition-colors"
              @click="clearCommune"
            >
              {{ props.wording.changeCommune }}
            </button>
          </div>
        </div>
        <div v-else class="grid gap-2">
          <DibodevInput
            id="public-aid-commune"
            autocomplete="off"
            :label="props.wording.communeLabel"
            :placeholder="props.wording.communePlaceholder"
            :value="communeQuery"
            @update:value="onCommuneInput"
          />
          <ul v-if="displayedMatches.length > 0" class="grid gap-1">
            <li v-for="commune in displayedMatches" :key="commune.code">
              <button
                type="button"
                class="hover:border-primary focus-visible:border-primary flex min-h-11 w-full cursor-pointer items-baseline justify-between gap-3 rounded-lg border border-gray-300 px-3 py-2 text-left transition-colors focus-visible:outline-none"
                @click="selectCommune(commune)"
              >
                <span class="text-[15px] font-medium text-gray-100">{{ commune.name }}</span>
                <span class="text-muted truncate text-sm">{{ matchDetail(commune) }}</span>
              </button>
            </li>
          </ul>
          <p v-if="isSearchingRemote" class="text-muted text-sm leading-6" aria-live="polite" aria-busy="true">
            {{ props.wording.searchingLabel }}
          </p>
          <p v-else-if="hasRemoteError" class="text-sm leading-6 text-red-500" aria-live="polite">
            {{ props.wording.searchErrorLabel }}
          </p>
          <p v-else-if="hasQueryWithoutMatch" class="text-sm leading-6 text-red-500" aria-live="polite">
            {{ props.wording.noMatch }}
          </p>
          <p class="text-muted text-sm leading-6">{{ props.wording.communeHint }}</p>
        </div>
      </div>

      <fieldset class="simulator-group">
        <legend class="simulator-group__legend">{{ props.wording.projectLabel }}</legend>
        <DibodevTogglePillGroup :value="projectType" :options="projectOptions" @update:value="onProjectChange" />
      </fieldset>

      <div class="grid gap-7 sm:grid-cols-2 sm:gap-5">
        <div class="simulator-group">
          <DibodevInput
            id="public-aid-amount"
            type="number"
            :label="props.wording.amountLabel"
            :min="0"
            :step="100"
            :value="amountText"
            @update:value="onAmountChange"
          />
          <p class="text-muted mt-2 text-sm leading-6">{{ props.wording.amountHint }}</p>
        </div>
        <div class="simulator-group">
          <DibodevInput
            id="public-aid-employees"
            type="number"
            :label="props.wording.employeesLabel"
            :min="0"
            :step="1"
            :value="employeesText"
            @update:value="onEmployeesChange"
          />
          <p class="text-muted mt-2 text-sm leading-6">{{ props.wording.employeesHint }}</p>
        </div>
      </div>

      <fieldset class="simulator-group">
        <legend class="simulator-group__legend">{{ props.wording.turnoverLabel }}</legend>
        <DibodevTogglePillGroup :value="turnoverAnswer" :options="yesNoOptions" @update:value="onTurnoverChange" />
      </fieldset>

      <fieldset class="simulator-group">
        <legend class="simulator-group__legend">{{ props.wording.businessLabel }}</legend>
        <DibodevTogglePillGroup :value="businessAnswer" :options="yesNoOptions" @update:value="onBusinessChange" />
        <p class="text-muted mt-3 text-sm leading-6">{{ props.wording.businessHint }}</p>
      </fieldset>
    </div>

    <div
      class="bg-primary-dark relative grid content-start gap-6 overflow-hidden rounded-2xl p-6 text-white sm:p-8 lg:sticky lg:top-28"
    >
      <div
        class="pointer-events-none absolute -top-16 -right-12 h-56 w-56 rounded-full bg-white/10 blur-2xl"
        aria-hidden="true"
      />
      <div class="relative grid gap-5" aria-live="polite">
        <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.resultLabel }}</p>
        <div class="grid gap-2">
          <h3 class="text-2xl leading-tight font-medium tracking-[-0.01em] sm:text-[28px]">{{ statusTitle }}</h3>
          <p class="text-[15px] leading-6 text-white/85">{{ statusText }}</p>
        </div>

        <dl v-if="showsAmounts" class="grid grid-cols-2 gap-3">
          <div class="rounded-xl bg-white/10 p-4">
            <dt class="text-xs font-medium text-white/85">{{ props.wording.aidLabel }}</dt>
            <dd class="mt-1 text-2xl font-medium sm:text-3xl">{{ formatAmount(result.aidAmount) }}</dd>
          </div>
          <div class="rounded-xl bg-white/10 p-4">
            <dt class="text-xs font-medium text-white/85">{{ props.wording.remainingLabel }}</dt>
            <dd class="mt-1 text-2xl font-medium sm:text-3xl">{{ formatAmount(result.remainingAmount) }}</dd>
          </div>
          <p class="col-span-2 text-sm leading-6 text-white/85">{{ rateLine }}</p>
        </dl>

        <div v-if="reasonTexts.length > 0" class="grid gap-2.5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.reasonsTitle }}</p>
          <ul class="grid gap-2.5">
            <li v-for="reason in reasonTexts" :key="reason" class="flex items-start gap-2.5">
              <DibodevIcon
                name="XCircle"
                mode="stroke"
                :width="18"
                :height="18"
                class="mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <span class="text-[15px] leading-6">{{ reason }}</span>
            </li>
          </ul>
        </div>

        <div v-if="checkTexts.length > 0" class="grid gap-2.5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.checksTitle }}</p>
          <ul class="grid gap-2.5">
            <li v-for="check in checkTexts" :key="check" class="flex items-start gap-2.5">
              <DibodevIcon
                name="AlertCircle"
                mode="stroke"
                :width="18"
                :height="18"
                class="mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <span class="text-[15px] leading-6">{{ check }}</span>
            </li>
          </ul>
        </div>

        <ul v-if="noteTexts.length > 0" class="grid gap-2">
          <li v-for="note in noteTexts" :key="note" class="flex items-start gap-2.5 text-sm leading-6 text-white/85">
            <DibodevIcon name="Info" mode="stroke" :width="16" :height="16" class="mt-1 shrink-0" aria-hidden="true" />
            <span>{{ note }}</span>
          </li>
        </ul>

        <ul v-if="result.status === 'national'" class="grid gap-2.5">
          <li v-for="point in props.wording.nationalPoints" :key="point" class="flex items-start gap-2.5">
            <DibodevIcon
              name="Check"
              mode="stroke"
              :width="18"
              :height="18"
              class="mt-0.5 shrink-0"
              aria-hidden="true"
            />
            <span class="text-[15px] leading-6">{{ point }}</span>
          </li>
        </ul>

        <div v-if="showsSteps" class="grid gap-2.5 border-t border-white/20 pt-5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.stepsTitle }}</p>
          <ol class="grid gap-2">
            <li
              v-for="(step, stepIndex) in props.wording.steps"
              :key="step"
              class="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-2 text-[15px] leading-6"
            >
              <span class="font-medium text-white/70">{{ stepIndex + 1 }}.</span>
              <span>{{ step }}</span>
            </li>
          </ol>
        </div>

        <div v-if="showsContact" class="grid gap-2 border-t border-white/20 pt-5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.contactTitle }}</p>
          <p class="text-[15px] leading-6">{{ result.contact?.label ?? props.wording.contactFallback }}</p>
          <ul v-if="result.contact" class="grid gap-1.5 text-[15px] leading-6">
            <li v-if="result.contact.phone" class="flex items-center gap-2">
              <DibodevIcon name="Phone" mode="stroke" :width="16" :height="16" class="shrink-0" aria-hidden="true" />
              <a :href="`tel:${result.contact.phone.replace(/\s/g, '')}`" class="underline underline-offset-2">{{
                result.contact.phone
              }}</a>
            </li>
            <li v-if="result.contact.email" class="flex items-center gap-2">
              <DibodevIcon name="Mail" mode="stroke" :width="16" :height="16" class="shrink-0" aria-hidden="true" />
              <a :href="`mailto:${result.contact.email}`" class="break-all underline underline-offset-2">{{
                result.contact.email
              }}</a>
            </li>
            <li v-if="result.contact.url" class="flex items-center gap-2">
              <DibodevIcon
                name="ExternalLink"
                mode="stroke"
                :width="16"
                :height="16"
                class="shrink-0"
                aria-hidden="true"
              />
              <a
                :href="result.contact.url"
                target="_blank"
                rel="noopener noreferrer"
                class="truncate underline underline-offset-2"
                >{{ hostOf(result.contact.url) }}</a
              >
            </li>
          </ul>
          <p class="text-sm leading-6 text-white/70">{{ sourceLine }}</p>
        </div>

        <p class="text-sm leading-6 text-white/70">{{ props.wording.disclaimer }}</p>
      </div>

      <NuxtLink
        :to="contactRoute"
        class="text-primary-dark relative flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-[15px] leading-6 font-medium transition-colors hover:bg-gray-800"
      >
        {{ result.status === 'national' ? props.wording.ctaNational : props.wording.cta }}
        <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { Option, PillValue } from '~/components/ui/DibodevTogglePillGroup.vue'
import type {
  DibodevCommune,
  DibodevCommunesDataset,
  DibodevGeoApiCommune,
  DibodevPublicAidDataset,
  DibodevPublicAidProjectType,
  DibodevPublicAidSimulationResult,
} from '~/core/types/DibodevPublicAid'
import type { DibodevPublicAidSimulatorProps } from '~/core/types/DibodevPublicAidSimulator'
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import DibodevInput from '~/components/core/DibodevInput.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevTogglePillGroup from '~/components/ui/DibodevTogglePillGroup.vue'
import { useTracking } from '~/composables/useTracking'
import {
  COMMUNE_SEARCH_LIMIT,
  DEFAULT_EMPLOYEES,
  DEFAULT_PROJECT_AMOUNT_HT,
} from '~/core/constants/publicAid/pageShared'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { PublicAidUtils } from '~/core/utils/PublicAidUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

const PROJECT_TYPES: DibodevPublicAidProjectType[] = ['website', 'onlineSales', 'software']
const YES: string = 'yes'
const NO: string = 'no'
/** The result is tracked once it has stayed the same for this long, so typing an amount sends one event. */
const TRACKING_DELAY_MS: number = 1200
/** Public directory of the French communes, asked when the Brittany table has no match. */
const GEO_API_URL: string = 'https://geo.api.gouv.fr/communes'
const GEO_API_FIELDS: string = 'nom,code,codesPostaux,population,codeDepartement,codeEpci'
/** Typing pause before the directory is asked, so one request goes out per word rather than per letter. */
const REMOTE_SEARCH_DELAY_MS: number = 300
const REMOTE_NAME_MIN_LENGTH: number = 3
const POSTCODE_REGEX: RegExp = /^\d{5}$/
const DIGITS_REGEX: RegExp = /^\d+$/

/**
 * Public aid simulator: a commune, a kind of project and a few answers give the aid of the Pass Commerce et
 * Artisanat, what is left to pay, the points to confirm and who to call, from the rules read for each intercommunalité.
 * A commune outside Brittany is found in the national directory and gets the national answer.
 */
const props: DibodevPublicAidSimulatorProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevPublicAidSimulatorProps['wording']>,
    required: true,
  },
  schemes: {
    type: Object as PropType<DibodevPublicAidDataset>,
    required: true,
  },
  communes: {
    type: Object as PropType<DibodevCommunesDataset>,
    required: true,
  },
  numberLocale: {
    type: String as PropType<string>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const localePath = useLocalePath()
const { track } = useTracking()

/* REFS */
const communeQuery: Ref<string> = ref<string>('')
const selectedCommune: Ref<DibodevCommune | null> = ref<DibodevCommune | null>(null)
const remoteMatches: Ref<DibodevCommune[]> = ref<DibodevCommune[]>([])
const isSearchingRemote: Ref<boolean> = ref<boolean>(false)
const hasRemoteError: Ref<boolean> = ref<boolean>(false)
const hasRemoteSearched: Ref<boolean> = ref<boolean>(false)
const remoteTimer: Ref<ReturnType<typeof setTimeout> | null> = ref<ReturnType<typeof setTimeout> | null>(null)
const projectType: Ref<DibodevPublicAidProjectType> = ref<DibodevPublicAidProjectType>('website')
const amountText: Ref<string> = ref<string>(String(DEFAULT_PROJECT_AMOUNT_HT))
const employeesText: Ref<string> = ref<string>(String(DEFAULT_EMPLOYEES))
const turnoverAnswer: Ref<string> = ref<string>(YES)
const businessAnswer: Ref<string> = ref<string>(YES)
const hasTrackedStart: Ref<boolean> = ref<boolean>(false)
const lastTrackedKey: Ref<string> = ref<string>('')
const trackingTimer: Ref<ReturnType<typeof setTimeout> | null> = ref<ReturnType<typeof setTimeout> | null>(null)

/* COMPUTED */
const projectOptions: ComputedRef<Option[]> = computed((): Option[] =>
  PROJECT_TYPES.map(
    (type: DibodevPublicAidProjectType): Option => ({ label: props.wording.projectOptions[type], value: type }),
  ),
)
const yesNoOptions: ComputedRef<Option[]> = computed((): Option[] => [
  { label: props.wording.yes, value: YES },
  { label: props.wording.no, value: NO },
])

const amountHt: ComputedRef<number> = computed((): number => toPositiveInteger(amountText.value))
const employees: ComputedRef<number> = computed((): number => toPositiveInteger(employeesText.value))

/** Brittany first, from the local table; the national directory only when Brittany has nothing. */
const localMatches: ComputedRef<DibodevCommune[]> = computed((): DibodevCommune[] =>
  PublicAidUtils.searchCommunes(props.communes, communeQuery.value, COMMUNE_SEARCH_LIMIT),
)
const displayedMatches: ComputedRef<DibodevCommune[]> = computed((): DibodevCommune[] =>
  localMatches.value.length > 0 ? localMatches.value : remoteMatches.value,
)
const hasQueryWithoutMatch: ComputedRef<boolean> = computed(
  (): boolean => hasRemoteSearched.value && !isSearchingRemote.value && displayedMatches.value.length === 0,
)

const selectedCommuneLabel: ComputedRef<string> = computed((): string => {
  if (!selectedCommune.value) return ''
  const template: string = PublicAidUtils.isInBrittany(selectedCommune.value)
    ? props.wording.selectedTemplate
    : props.wording.selectedOutsideTemplate
  return QuizTextUtils.fillTemplate(template, {
    commune: selectedCommune.value.name,
    postcode: selectedCommune.value.postcode,
    epci: selectedCommune.value.epciName,
    population: PublicAidUtils.formatPopulation(selectedCommune.value.population, props.numberLocale),
  })
})

const result: ComputedRef<DibodevPublicAidSimulationResult> = computed(
  (): DibodevPublicAidSimulationResult =>
    PublicAidUtils.simulate(props.schemes, {
      commune: selectedCommune.value,
      projectType: projectType.value,
      amountHt: amountHt.value,
      employees: employees.value,
      isTurnoverUnderLimit: turnoverAnswer.value === YES,
      isLocalIndependentBusiness: businessAnswer.value === YES,
    }),
)

/** Values filled into the result templates. */
const templateValues: ComputedRef<Record<string, string>> = computed(
  (): Record<string, string> => ({
    commune: selectedCommune.value?.name ?? '',
    territory: result.value.territoryName,
    rate: String(result.value.ratePercent),
    floor: formatAmount(result.value.floorHt ?? 0),
    ceiling: formatAmount(result.value.ceilingHt),
    maxAid: formatAmount(result.value.maxAid),
    amount: formatAmount(amountHt.value),
    aid: formatAmount(result.value.aidAmount),
    remaining: formatAmount(result.value.remainingAmount),
    source: PublicAidUtils.hostOf(result.value.sourceUrl),
  }),
)

const statusTitle: ComputedRef<string> = computed((): string => props.wording.statusTitles[result.value.status])
const statusText: ComputedRef<string> = computed((): string =>
  QuizTextUtils.fillTemplate(props.wording.statusTexts[result.value.status], templateValues.value),
)
const rateLine: ComputedRef<string> = computed((): string =>
  QuizTextUtils.fillTemplate(props.wording.rateTemplate, templateValues.value),
)
const sourceLine: ComputedRef<string> = computed((): string =>
  QuizTextUtils.fillTemplate(props.wording.sourceTemplate, templateValues.value),
)

const showsAmounts: ComputedRef<boolean> = computed((): boolean =>
  ['eligible', 'check', 'frame'].includes(result.value.status),
)
const showsSteps: ComputedRef<boolean> = computed((): boolean => showsAmounts.value)
const showsContact: ComputedRef<boolean> = computed((): boolean =>
  ['eligible', 'check', 'frame', 'notEligible'].includes(result.value.status),
)

const reasonTexts: ComputedRef<string[]> = computed((): string[] =>
  result.value.reasonKeys.map((key: string): string =>
    QuizTextUtils.fillTemplate(props.wording.reasons[key] ?? key, templateValues.value),
  ),
)
const checkTexts: ComputedRef<string[]> = computed((): string[] =>
  result.value.status === 'notEligible'
    ? []
    : result.value.checkKeys.map((key: string): string =>
        QuizTextUtils.fillTemplate(props.wording.checks[key] ?? key, templateValues.value),
      ),
)
const noteTexts: ComputedRef<string[]> = computed((): string[] =>
  result.value.status === 'notEligible'
    ? []
    : result.value.noteKeys
        .map((key: string): string => props.wording.notes[key] ?? '')
        .filter((note: string): boolean => note !== ''),
)

const contactRoute: ComputedRef<string> = computed((): string => localePath('/contact'))

/* METHODS */
/**
 * Reads a field as a positive integer, 0 when empty or invalid.
 * @param {string} text - The field text.
 * @returns {number} The integer.
 */
function toPositiveInteger(text: string): number {
  const value: number = Number(text)
  return Number.isFinite(value) && value > 0 ? Math.round(value) : 0
}

/**
 * Formats an amount in euros for the page language.
 * @param {number} amount - The amount.
 * @returns {string} The formatted amount.
 */
function formatAmount(amount: number): string {
  return PublicAidUtils.formatAmount(amount, props.numberLocale)
}

/**
 * The host of a URL, shown instead of the full address.
 * @param {string} url - The URL.
 * @returns {string} The host.
 */
function hostOf(url: string): string {
  return PublicAidUtils.hostOf(url)
}

/**
 * Second line of a match: postcode and intercommunalité in Brittany, postcode and "outside Brittany" elsewhere.
 * @param {DibodevCommune} commune - The match.
 * @returns {string} The detail.
 */
function matchDetail(commune: DibodevCommune): string {
  const area: string = PublicAidUtils.isInBrittany(commune)
    ? commune.epciName || commune.department
    : props.wording.outsideBrittanyTag
  return `${commune.postcode} · ${area}`
}

/**
 * Tracks the first interaction with the simulator, once per page view.
 * @returns {void}
 */
function trackSimulatorStart(): void {
  if (hasTrackedStart.value) return
  hasTrackedStart.value = true
  track(TRACKING_EVENTS.publicAidSimulatorStarted, { location: props.trackingLocation })
}

/**
 * Keeps what the visitor types in the commune field.
 * @param {string | number} value - The field value.
 * @returns {void}
 */
function onCommuneInput(value: string | number): void {
  trackSimulatorStart()
  communeQuery.value = String(value)
}

/**
 * Whether a query is worth sending to the national directory: a full postcode, or three letters at least.
 * @param {string} query - The trimmed query.
 * @returns {boolean} True when the directory can answer it.
 */
function isRemoteSearchable(query: string): boolean {
  return DIGITS_REGEX.test(query) ? POSTCODE_REGEX.test(query) : query.length >= REMOTE_NAME_MIN_LENGTH
}

/**
 * Asks the national directory for the communes matching a name or a postcode, and keeps the answer
 * only if the visitor has not typed anything else since.
 * @param {string} query - The trimmed query.
 * @returns {Promise<void>}
 */
async function searchRemoteCommunes(query: string): Promise<void> {
  const params: URLSearchParams = new URLSearchParams({
    fields: GEO_API_FIELDS,
    boost: 'population',
    limit: String(COMMUNE_SEARCH_LIMIT),
  })
  params.set(POSTCODE_REGEX.test(query) ? 'codePostal' : 'nom', query)
  try {
    const rows: DibodevGeoApiCommune[] = await $fetch<DibodevGeoApiCommune[]>(`${GEO_API_URL}?${params.toString()}`)
    if (communeQuery.value.trim() !== query) return
    remoteMatches.value = rows.map(
      (row: DibodevGeoApiCommune): DibodevCommune => PublicAidUtils.fromGeoApi(row, props.communes.epcis),
    )
  } catch {
    if (communeQuery.value.trim() === query) hasRemoteError.value = true
  } finally {
    if (communeQuery.value.trim() === query) {
      isSearchingRemote.value = false
      hasRemoteSearched.value = true
    }
  }
}

/**
 * Selects a commune from the matches and closes the list.
 * @param {DibodevCommune} commune - The commune clicked.
 * @returns {void}
 */
function selectCommune(commune: DibodevCommune): void {
  trackSimulatorStart()
  selectedCommune.value = commune
  communeQuery.value = ''
}

/**
 * Selects the first match when the visitor presses Enter in the search field.
 * @returns {void}
 */
function selectFirstMatch(): void {
  const first: DibodevCommune | undefined = displayedMatches.value[0]
  if (first && !selectedCommune.value) selectCommune(first)
}

/**
 * Clears the selected commune to search another one.
 * @returns {void}
 */
function clearCommune(): void {
  selectedCommune.value = null
}

/**
 * Keeps the selected kind of project when the pill group emits a known one.
 * @param {PillValue | PillValue[] | null | undefined} value - Emitted value.
 * @returns {void}
 */
function onProjectChange(value: PillValue | PillValue[] | null | undefined): void {
  trackSimulatorStart()
  const type: DibodevPublicAidProjectType | undefined = PROJECT_TYPES.find(
    (candidate: DibodevPublicAidProjectType): boolean => candidate === value,
  )
  if (type) projectType.value = type
}

/**
 * Keeps the project amount as typed; the number is read from it.
 * @param {string | number} value - The field value.
 * @returns {void}
 */
function onAmountChange(value: string | number): void {
  trackSimulatorStart()
  amountText.value = String(value)
}

/**
 * Keeps the number of employees as typed; the integer is read from it.
 * @param {string | number} value - The field value.
 * @returns {void}
 */
function onEmployeesChange(value: string | number): void {
  trackSimulatorStart()
  employeesText.value = String(value)
}

/**
 * Keeps the turnover answer when the pill group emits yes or no.
 * @param {PillValue | PillValue[] | null | undefined} value - Emitted value.
 * @returns {void}
 */
function onTurnoverChange(value: PillValue | PillValue[] | null | undefined): void {
  trackSimulatorStart()
  if (value === YES || value === NO) turnoverAnswer.value = value
}

/**
 * Keeps the business answer when the pill group emits yes or no.
 * @param {PillValue | PillValue[] | null | undefined} value - Emitted value.
 * @returns {void}
 */
function onBusinessChange(value: PillValue | PillValue[] | null | undefined): void {
  trackSimulatorStart()
  if (value === YES || value === NO) businessAnswer.value = value
}

/**
 * Tracks the displayed result once it is stable, one event per distinct outcome.
 * @returns {void}
 */
function scheduleResultTracking(): void {
  if (trackingTimer.value) clearTimeout(trackingTimer.value)
  trackingTimer.value = setTimeout((): void => {
    const current: DibodevPublicAidSimulationResult = result.value
    if (current.status === 'incomplete') return
    const key: string = [current.territoryName, projectType.value, current.status, amountHt.value].join('|')
    if (key === lastTrackedKey.value) return
    lastTrackedKey.value = key
    track(TRACKING_EVENTS.publicAidSimulated, {
      location: props.trackingLocation,
      department: selectedCommune.value?.department ?? '',
      territory: current.territoryName,
      projectType: projectType.value,
      status: current.status,
      amountHt: amountHt.value,
      aidAmount: current.aidAmount,
    })
  }, TRACKING_DELAY_MS)
}

/* WATCHERS */
watch(result, (): void => scheduleResultTracking())

/** Each keystroke resets the directory search; it only runs after a pause, and only when Brittany has no match. */
watch(communeQuery, (query: string): void => {
  if (remoteTimer.value) clearTimeout(remoteTimer.value)
  remoteMatches.value = []
  hasRemoteError.value = false
  hasRemoteSearched.value = false
  const trimmed: string = query.trim()
  if (localMatches.value.length > 0 || !isRemoteSearchable(trimmed)) {
    isSearchingRemote.value = false
    return
  }
  isSearchingRemote.value = true
  remoteTimer.value = setTimeout((): void => {
    void searchRemoteCommunes(trimmed)
  }, REMOTE_SEARCH_DELAY_MS)
})

/* LIFECYCLE */
onBeforeUnmount((): void => {
  if (trackingTimer.value) clearTimeout(trackingTimer.value)
  if (remoteTimer.value) clearTimeout(remoteTimer.value)
})
</script>

<style scoped>
.simulator-group {
  border: 0;
  margin: 0;
  padding: 0;
  min-width: 0;
}

.simulator-group__legend {
  margin-bottom: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-gray-100);
}
</style>
