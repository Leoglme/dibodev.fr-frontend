<template>
  <div :id="props.anchorId" class="grid scroll-mt-24 items-start gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
    <div class="grid content-start gap-7 rounded-2xl border border-gray-300 bg-white p-6 sm:p-8">
      <div class="simulator-group">
        <div v-if="selectedCommune" class="grid gap-3">
          <p class="simulator-group__legend">{{ props.wording.communeLabel }}</p>
          <div class="flex items-start justify-between gap-3 rounded-lg border border-gray-300 bg-gray-50 px-3 py-3">
            <p class="text-[15px] leading-6 text-gray-100">{{ selectedCommuneLabel }}</p>
            <button
              type="button"
              class="text-primary hover:text-primary-dark shrink-0 cursor-pointer text-sm font-medium transition-colors"
              @click="clearCommune"
            >
              {{ props.wording.changeCommune }}
            </button>
          </div>
        </div>
        <p v-else-if="isOutsideBrittany" class="simulator-group__legend">{{ props.wording.communeLabel }}</p>
        <div v-else class="grid gap-2">
          <DibodevInput
            id="public-aid-commune"
            autocomplete="off"
            :label="props.wording.communeLabel"
            :placeholder="props.wording.communePlaceholder"
            :value="communeQuery"
            @update:value="onCommuneInput"
          />
          <ul
            v-if="communeMatches.length > 0"
            class="grid gap-1"
            role="listbox"
            :aria-label="props.wording.communeLabel"
          >
            <li v-for="commune in communeMatches" :key="commune.code" role="option" :aria-selected="false">
              <button
                type="button"
                class="hover:border-primary flex w-full cursor-pointer items-baseline justify-between gap-3 rounded-lg border border-gray-300 px-3 py-2 text-left transition-colors"
                @click="selectCommune(commune)"
              >
                <span class="text-[15px] font-medium text-gray-100">{{ commune.name }}</span>
                <span class="text-muted truncate text-sm">{{ commune.postcode }} · {{ commune.epciName }}</span>
              </button>
            </li>
          </ul>
          <p v-else-if="hasQueryWithoutMatch" class="text-sm leading-6 text-red-500">{{ props.wording.noMatch }}</p>
          <p class="text-muted text-sm leading-6">{{ props.wording.communeHint }}</p>
        </div>
        <label class="mt-3 flex cursor-pointer items-center gap-2.5 text-[15px] leading-6 text-gray-100">
          <input
            v-model="isOutsideBrittany"
            type="checkbox"
            class="accent-primary h-4 w-4 cursor-pointer"
            @change="trackSimulatorStart"
          />
          {{ props.wording.outsideBrittanyLabel }}
        </label>
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
            :value="amountHt"
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
            :value="employees"
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

    <div class="bg-primary-dark relative grid content-start gap-6 overflow-hidden rounded-2xl p-6 text-white sm:p-8">
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

/**
 * Public aid simulator: a commune, a kind of project and a few answers give the aid of the Pass Commerce et
 * Artisanat, what is left to pay, the points to confirm and who to call, from the rules read for each intercommunalité.
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
const isOutsideBrittany: Ref<boolean> = ref<boolean>(false)
const projectType: Ref<DibodevPublicAidProjectType> = ref<DibodevPublicAidProjectType>('website')
const amountHt: Ref<number> = ref<number>(DEFAULT_PROJECT_AMOUNT_HT)
const employees: Ref<number> = ref<number>(DEFAULT_EMPLOYEES)
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

const communeMatches: ComputedRef<DibodevCommune[]> = computed((): DibodevCommune[] =>
  isOutsideBrittany.value
    ? []
    : PublicAidUtils.searchCommunes(props.communes, communeQuery.value, COMMUNE_SEARCH_LIMIT),
)
const hasQueryWithoutMatch: ComputedRef<boolean> = computed(
  (): boolean => !isOutsideBrittany.value && communeQuery.value.trim().length >= 2 && communeMatches.value.length === 0,
)

const selectedCommuneLabel: ComputedRef<string> = computed((): string =>
  selectedCommune.value
    ? QuizTextUtils.fillTemplate(props.wording.selectedTemplate, {
        commune: selectedCommune.value.name,
        postcode: selectedCommune.value.postcode,
        epci: selectedCommune.value.epciName,
        population: PublicAidUtils.formatPopulation(selectedCommune.value.population, props.numberLocale),
      })
    : '',
)

const result: ComputedRef<DibodevPublicAidSimulationResult> = computed(
  (): DibodevPublicAidSimulationResult =>
    PublicAidUtils.simulate(props.schemes, {
      commune: selectedCommune.value,
      isOutsideBrittany: isOutsideBrittany.value,
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
 * Keeps the project amount as a positive number.
 * @param {string | number} value - The field value.
 * @returns {void}
 */
function onAmountChange(value: string | number): void {
  trackSimulatorStart()
  const amount: number = Number(value)
  amountHt.value = Number.isFinite(amount) && amount > 0 ? Math.round(amount) : 0
}

/**
 * Keeps the number of employees as a positive integer.
 * @param {string | number} value - The field value.
 * @returns {void}
 */
function onEmployeesChange(value: string | number): void {
  trackSimulatorStart()
  const count: number = Number(value)
  employees.value = Number.isFinite(count) && count > 0 ? Math.round(count) : 0
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

/* LIFECYCLE */
onBeforeUnmount((): void => {
  if (trackingTimer.value) clearTimeout(trackingTimer.value)
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
