<template>
  <div
    :id="props.anchorId"
    class="grid items-start gap-6 text-left lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-8"
  >
    <div class="grid content-start gap-5 rounded-2xl border border-gray-300 bg-white p-4 sm:p-6">
      <div
        class="text-muted hidden grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,1fr)_5.5rem_5.5rem] gap-3 text-xs font-medium tracking-[0.08em] uppercase sm:grid"
        aria-hidden="true"
      >
        <span>{{ props.wording.dayColumnLabel }}</span>
        <span>{{ props.wording.arrivalLabel }}</span>
        <span>{{ props.wording.departureLabel }}</span>
        <span>{{ props.wording.breakLabel }}</span>
        <span class="text-right">{{ props.wording.dayTotalLabel }}</span>
      </div>

      <ul class="grid gap-3 sm:gap-2">
        <li
          v-for="(entry, dayIndex) in entries"
          :key="entry.dayKey"
          class="grid grid-cols-3 gap-2 rounded-xl border border-gray-300 p-3 sm:grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,1fr)_5.5rem_5.5rem] sm:items-center sm:gap-3 sm:border-0 sm:p-0"
        >
          <p class="col-span-2 self-center text-[15px] font-medium text-gray-100 sm:col-span-1">
            {{ props.wording.dayLabels[entry.dayKey] }}
          </p>
          <div class="grid gap-1">
            <label :for="fieldId(entry.dayKey, 'arrival')" class="text-muted text-xs sm:sr-only">
              <span class="sr-only">{{ props.wording.dayLabels[entry.dayKey] }}, </span>{{ props.wording.arrivalLabel }}
            </label>
            <input
              :id="fieldId(entry.dayKey, 'arrival')"
              v-model="entry.arrivalTime"
              type="time"
              step="60"
              class="work-hours-field"
            />
          </div>
          <div class="grid gap-1">
            <label :for="fieldId(entry.dayKey, 'departure')" class="text-muted text-xs sm:sr-only">
              <span class="sr-only">{{ props.wording.dayLabels[entry.dayKey] }}, </span
              >{{ props.wording.departureLabel }}
            </label>
            <input
              :id="fieldId(entry.dayKey, 'departure')"
              v-model="entry.departureTime"
              type="time"
              step="60"
              class="work-hours-field"
            />
          </div>
          <div class="grid gap-1">
            <label :for="fieldId(entry.dayKey, 'break')" class="text-muted text-xs sm:sr-only">
              <span class="sr-only">{{ props.wording.dayLabels[entry.dayKey] }}, </span>{{ props.wording.breakLabel }}
            </label>
            <input
              :id="fieldId(entry.dayKey, 'break')"
              v-model="entry.breakMinutesText"
              type="text"
              inputmode="numeric"
              autocomplete="off"
              placeholder="0"
              class="work-hours-field"
            />
          </div>
          <p
            class="col-start-3 row-start-1 self-center text-right text-[15px] leading-5 text-gray-100 sm:col-start-auto sm:row-start-auto"
          >
            <span class="font-medium tabular-nums">{{ formatDuration(dayResult(entry, dayIndex).workedMinutes) }}</span>
            <span v-if="dayResult(entry, dayIndex).crossesMidnight" class="text-muted block text-xs">{{
              props.wording.nextDayTag
            }}</span>
            <span v-if="dayResult(entry, dayIndex).isBreakLongerThanShift" class="block text-xs text-red-500">{{
              props.wording.breakTooLongTag
            }}</span>
          </p>
        </li>
      </ul>

      <div class="grid gap-4 border-t border-gray-300 pt-5 sm:grid-cols-2">
        <div class="grid content-start gap-1.5">
          <label for="work-hours-reference" class="text-[15px] font-medium text-gray-100">{{
            props.wording.referenceLabel
          }}</label>
          <input
            id="work-hours-reference"
            v-model="referenceHoursText"
            type="text"
            inputmode="decimal"
            autocomplete="off"
            class="work-hours-field"
            aria-describedby="work-hours-reference-hint"
          />
          <p id="work-hours-reference-hint" class="text-muted text-sm leading-6">{{ props.wording.referenceHint }}</p>
        </div>
        <div class="grid content-start gap-1.5">
          <label for="work-hours-rate" class="text-[15px] font-medium text-gray-100">{{
            props.wording.hourlyRateLabel
          }}</label>
          <input
            id="work-hours-rate"
            v-model="hourlyRateText"
            type="text"
            inputmode="decimal"
            autocomplete="off"
            class="work-hours-field"
            aria-describedby="work-hours-rate-hint"
          />
          <p id="work-hours-rate-hint" class="text-muted text-sm leading-6">{{ props.wording.hourlyRateHint }}</p>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <button type="button" class="work-hours-secondary-button" @click="copyMondayToWorkingDays">
          <DibodevIcon name="Copy" mode="stroke" :width="16" :height="16" aria-hidden="true" />
          {{ props.wording.copyMondayButton }}
        </button>
        <button type="button" class="work-hours-secondary-button" @click="clearAll">
          <DibodevIcon name="RotateCcw" mode="stroke" :width="16" :height="16" aria-hidden="true" />
          {{ props.wording.clearButton }}
        </button>
      </div>
    </div>

    <div
      class="bg-primary-dark relative grid content-start gap-5 overflow-hidden rounded-2xl p-6 text-white sm:p-8 lg:sticky lg:top-28"
    >
      <div
        class="pointer-events-none absolute -top-16 -right-12 h-56 w-56 rounded-full bg-white/10 blur-2xl"
        aria-hidden="true"
      />
      <div class="relative grid gap-5">
        <div class="grid gap-1" aria-live="polite">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.resultLabel }}</p>
          <p class="text-4xl font-medium tracking-[-0.01em] tabular-nums sm:text-5xl">
            {{ formatDuration(week.totalMinutes) }}
          </p>
          <p class="text-[15px] leading-6 text-white/85">{{ decimalLine }}</p>
        </div>

        <p v-if="week.totalMinutes === 0" class="text-[15px] leading-6 text-white/85">
          {{ props.wording.emptyResultText }}
        </p>

        <dl v-else class="grid grid-cols-2 gap-3">
          <div class="rounded-xl bg-white/10 p-4">
            <dt class="text-xs font-medium text-white/85">{{ props.wording.regularLabel }}</dt>
            <dd class="mt-1 text-xl font-medium tabular-nums sm:text-2xl">{{ formatDuration(week.regularMinutes) }}</dd>
          </div>
          <div class="rounded-xl bg-white/10 p-4">
            <dt class="text-xs font-medium text-white/85">{{ beyondReferenceLabel }}</dt>
            <dd class="mt-1 text-xl font-medium tabular-nums sm:text-2xl">
              {{ formatDuration(week.beyondReferenceMinutes) }}
            </dd>
          </div>
          <div class="rounded-xl bg-white/10 p-4">
            <dt class="text-xs font-medium text-white/85">{{ props.wording.firstTierLabel }}</dt>
            <dd class="mt-1 text-lg font-medium tabular-nums">{{ formatDuration(week.firstTierMinutes) }}</dd>
          </div>
          <div class="rounded-xl bg-white/10 p-4">
            <dt class="text-xs font-medium text-white/85">{{ props.wording.nextTierLabel }}</dt>
            <dd class="mt-1 text-lg font-medium tabular-nums">{{ formatDuration(week.nextTierMinutes) }}</dd>
          </div>
        </dl>

        <div v-if="pay" class="grid gap-2 border-t border-white/20 pt-5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.payTitle }}</p>
          <dl class="grid gap-1.5 text-[15px] leading-6">
            <div class="flex items-baseline justify-between gap-3">
              <dt class="text-white/85">{{ props.wording.payRegularLabel }}</dt>
              <dd class="tabular-nums">{{ formatAmount(pay.regularAmount) }}</dd>
            </div>
            <div class="flex items-baseline justify-between gap-3">
              <dt class="text-white/85">{{ props.wording.payFirstTierLabel }}</dt>
              <dd class="tabular-nums">{{ formatAmount(pay.firstTierAmount) }}</dd>
            </div>
            <div class="flex items-baseline justify-between gap-3">
              <dt class="text-white/85">{{ props.wording.payNextTierLabel }}</dt>
              <dd class="tabular-nums">{{ formatAmount(pay.nextTierAmount) }}</dd>
            </div>
            <div class="flex items-baseline justify-between gap-3 border-t border-white/20 pt-1.5 font-medium">
              <dt>{{ props.wording.payTotalLabel }}</dt>
              <dd class="tabular-nums">{{ formatAmount(pay.totalAmount) }}</dd>
            </div>
          </dl>
          <p class="text-sm leading-6 text-white/70">{{ props.wording.payNote }}</p>
        </div>
        <p v-else-if="hasRateWithOtherReference" class="text-sm leading-6 text-white/85">
          {{ props.wording.payUnavailableNote }}
        </p>

        <div v-if="alertTexts.length > 0" class="grid gap-2.5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.alertsTitle }}</p>
          <ul class="grid gap-2">
            <li v-for="alertText in alertTexts" :key="alertText" class="flex items-start gap-2.5">
              <DibodevIcon
                name="AlertCircle"
                mode="stroke"
                :width="18"
                :height="18"
                class="mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <span class="text-[15px] leading-6">{{ alertText }}</span>
            </li>
          </ul>
        </div>

        <div class="grid gap-2">
          <button
            type="button"
            class="text-primary-dark flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-[15px] leading-6 font-medium transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="week.totalMinutes === 0"
            @click="copySummary"
          >
            <DibodevIcon name="Copy" mode="stroke" :width="18" :height="18" aria-hidden="true" />
            {{ props.wording.copySummaryButton }}
          </button>
          <p class="min-h-6 text-center text-sm leading-6 text-white/85" role="status">{{ copyStatusText }}</p>
        </div>

        <p class="text-sm leading-6 text-white/70">{{ props.wording.privacyNote }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type {
  DibodevWorkHoursCopyStatus,
  DibodevWorkHoursDayEntry,
  DibodevWorkHoursDayKey,
  DibodevWorkHoursDayResult,
  DibodevWorkHoursPay,
  DibodevWorkHoursWeekResult,
} from '~/core/types/DibodevWorkHours'
import type { DibodevWorkHoursCalculatorProps } from '~/core/types/DibodevWorkHoursCalculator'
import type { DibodevWorkHoursCalculatorWording } from '~/core/types/DibodevWorkHoursCalculatorPage'
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import {
  DEFAULT_REFERENCE_WEEKLY_HOURS,
  MONDAY_COPY_TARGET_DAY_KEYS,
  WORK_HOURS_DAY_KEYS,
} from '~/core/constants/workHoursCalculator/pageShared'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'
import { WorkHoursUtils } from '~/core/utils/WorkHoursUtils'

const CALCULATION_TRACKING_DELAY_MS: number = 1500

/** Week grid of arrival, departure and break times, with the weekly total, the hours beyond the reference and their pay. */
const props: DibodevWorkHoursCalculatorProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevWorkHoursCalculatorWording>,
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

const { track } = useTracking()

const entries: Ref<DibodevWorkHoursDayEntry[]> = ref(createEmptyEntries())
const referenceHoursText: Ref<string> = ref(String(DEFAULT_REFERENCE_WEEKLY_HOURS))
const hourlyRateText: Ref<string> = ref('')
const copyStatus: Ref<DibodevWorkHoursCopyStatus> = ref('idle')
const hasTrackedStart: Ref<boolean> = ref(false)
const hasTrackedCalculation: Ref<boolean> = ref(false)
const calculationTrackingTimer: Ref<ReturnType<typeof setTimeout> | null> = ref(null)

const week: ComputedRef<DibodevWorkHoursWeekResult> = computed(
  (): DibodevWorkHoursWeekResult =>
    WorkHoursUtils.computeWeek(entries.value, WorkHoursUtils.parsePositiveNumber(referenceHoursText.value)),
)

const hourlyRate: ComputedRef<number> = computed((): number => WorkHoursUtils.parsePositiveNumber(hourlyRateText.value))

const pay: ComputedRef<DibodevWorkHoursPay | null> = computed((): DibodevWorkHoursPay | null =>
  hourlyRate.value > 0 && week.value.totalMinutes > 0 && WorkHoursUtils.isLegalReference(week.value)
    ? WorkHoursUtils.computePay(week.value, hourlyRate.value)
    : null,
)

const hasRateWithOtherReference: ComputedRef<boolean> = computed(
  (): boolean => hourlyRate.value > 0 && !WorkHoursUtils.isLegalReference(week.value),
)

const decimalLine: ComputedRef<string> = computed((): string =>
  QuizTextUtils.fillTemplate(props.wording.decimalTemplate, {
    decimal: WorkHoursUtils.formatDecimalHours(week.value.totalMinutes, props.numberLocale),
  }),
)

const beyondReferenceLabel: ComputedRef<string> = computed((): string =>
  QuizTextUtils.fillTemplate(props.wording.beyondReferenceTemplate, {
    reference: formatDuration(week.value.referenceMinutes),
  }),
)

const alertTexts: ComputedRef<string[]> = computed((): string[] => {
  const texts: string[] = []
  const longDayLabels: string[] = dayLabelsWhere((day: DibodevWorkHoursDayResult): boolean => day.exceedsDailyMaximum)
  const shortBreakDayLabels: string[] = dayLabelsWhere((day: DibodevWorkHoursDayResult): boolean => day.hasShortBreak)

  if (longDayLabels.length > 0) {
    texts.push(
      QuizTextUtils.fillTemplate(props.wording.dailyMaximumAlertTemplate, {
        days: QuizTextUtils.joinWithConjunction(longDayLabels, props.wording.listConjunction),
      }),
    )
  }
  if (shortBreakDayLabels.length > 0) {
    texts.push(
      QuizTextUtils.fillTemplate(props.wording.shortBreakAlertTemplate, {
        days: QuizTextUtils.joinWithConjunction(shortBreakDayLabels, props.wording.listConjunction),
      }),
    )
  }
  if (week.value.exceedsWeeklyMaximum) {
    texts.push(props.wording.weeklyMaximumAlert)
  }
  return texts
})

const copyStatusText: ComputedRef<string> = computed((): string => {
  if (copyStatus.value === 'copied') {
    return props.wording.copiedStatus
  }
  if (copyStatus.value === 'failed') {
    return props.wording.copyFailedStatus
  }
  return ''
})

/**
 * Builds the seven empty days of the week, Monday first.
 * @returns {DibodevWorkHoursDayEntry[]} The empty entries.
 */
function createEmptyEntries(): DibodevWorkHoursDayEntry[] {
  return WORK_HOURS_DAY_KEYS.map(
    (dayKey: DibodevWorkHoursDayKey): DibodevWorkHoursDayEntry => ({
      dayKey,
      arrivalTime: '',
      departureTime: '',
      breakMinutesText: '',
    }),
  )
}

/**
 * Builds the id of a field from its day and its kind ("work-hours-monday-arrival").
 * @param {DibodevWorkHoursDayKey} dayKey - The day of the row.
 * @param {string} fieldName - "arrival", "departure" or "break".
 * @returns {string} The id.
 */
function fieldId(dayKey: DibodevWorkHoursDayKey, fieldName: string): string {
  return `work-hours-${dayKey}-${fieldName}`
}

/**
 * Reads the computed result of a row.
 * @param {DibodevWorkHoursDayEntry} entry - The times of the row.
 * @param {number} dayIndex - Position of the day, Monday being 0.
 * @returns {DibodevWorkHoursDayResult} The worked time and checks of the day.
 */
function dayResult(entry: DibodevWorkHoursDayEntry, dayIndex: number): DibodevWorkHoursDayResult {
  return week.value.days[dayIndex] ?? WorkHoursUtils.computeDay(entry)
}

/**
 * Lists the names of the days that match a check of the week.
 * @param {(day: DibodevWorkHoursDayResult) => boolean} isMatching - The check.
 * @returns {string[]} The day names, Monday first.
 */
function dayLabelsWhere(isMatching: (day: DibodevWorkHoursDayResult) => boolean): string[] {
  return week.value.days
    .filter(isMatching)
    .map((day: DibodevWorkHoursDayResult): string => props.wording.dayLabels[day.dayKey])
}

/**
 * Writes minutes as hours and minutes in the page language.
 * @param {number} minutes - The duration.
 * @returns {string} The duration ("7 h 30").
 */
function formatDuration(minutes: number): string {
  return WorkHoursUtils.formatDuration(minutes, props.wording.durationTemplate)
}

/**
 * Writes an amount in euros in the page language.
 * @param {number} amount - The amount.
 * @returns {string} The amount.
 */
function formatAmount(amount: number): string {
  return WorkHoursUtils.formatAmount(amount, props.numberLocale)
}

/**
 * Copies Monday's arrival, departure and break to Tuesday through Friday.
 * @returns {void}
 */
function copyMondayToWorkingDays(): void {
  const monday: DibodevWorkHoursDayEntry | undefined = entries.value[0]

  if (!monday) {
    return
  }
  entries.value = entries.value.map(
    (entry: DibodevWorkHoursDayEntry): DibodevWorkHoursDayEntry =>
      MONDAY_COPY_TARGET_DAY_KEYS.includes(entry.dayKey)
        ? {
            dayKey: entry.dayKey,
            arrivalTime: monday.arrivalTime,
            departureTime: monday.departureTime,
            breakMinutesText: monday.breakMinutesText,
          }
        : entry,
  )
}

/**
 * Empties every day and puts the reference and the rate back to their defaults.
 * @returns {void}
 */
function clearAll(): void {
  entries.value = createEmptyEntries()
  referenceHoursText.value = String(DEFAULT_REFERENCE_WEEKLY_HOURS)
  hourlyRateText.value = ''
}

/**
 * Copies the plain-text summary of the week to the clipboard and says whether it worked.
 * @returns {Promise<void>}
 */
async function copySummary(): Promise<void> {
  const summaryText: string = WorkHoursUtils.buildSummaryText(entries.value, week.value, pay.value, {
    dayLabels: props.wording.dayLabels,
    durationTemplate: props.wording.durationTemplate,
    numberLocale: props.numberLocale,
    wording: props.wording.summary,
  })

  try {
    await navigator.clipboard.writeText(summaryText)
    copyStatus.value = 'copied'
  } catch {
    copyStatus.value = 'failed'
  }
}

/**
 * Tracks the first entry in the calculator, once per page view.
 * @returns {void}
 */
function trackCalculatorStart(): void {
  if (hasTrackedStart.value) {
    return
  }
  hasTrackedStart.value = true
  track(TRACKING_EVENTS.workHoursCalculatorStarted, { location: props.trackingLocation })
}

/**
 * Tracks the first non-zero total once it has stayed unchanged for a moment, so a time being typed sends nothing.
 * @returns {void}
 */
function scheduleCalculationTracking(): void {
  if (hasTrackedCalculation.value) {
    return
  }
  if (calculationTrackingTimer.value) {
    clearTimeout(calculationTrackingTimer.value)
  }
  if (week.value.totalMinutes === 0) {
    return
  }
  calculationTrackingTimer.value = setTimeout((): void => {
    hasTrackedCalculation.value = true
    track(TRACKING_EVENTS.workHoursCalculated, {
      location: props.trackingLocation,
      workedDayCount: week.value.workedDayCount,
      exceedsReference: week.value.exceedsReference,
    })
  }, CALCULATION_TRACKING_DELAY_MS)
}

watch(
  [entries, referenceHoursText, hourlyRateText],
  (): void => {
    trackCalculatorStart()
    copyStatus.value = 'idle'
  },
  { deep: true },
)

watch(week, (): void => scheduleCalculationTracking())

onBeforeUnmount((): void => {
  if (calculationTrackingTimer.value) {
    clearTimeout(calculationTrackingTimer.value)
  }
})
</script>

<style scoped>
.work-hours-field {
  min-height: 2.75rem;
  width: 100%;
  min-width: 0;
  border: 1px solid var(--color-gray-400);
  border-radius: 0.5rem;
  background-color: white;
  padding: 0 0.625rem;
  font-size: 15px;
  color: var(--color-gray-100);
  outline: none;
  font-variant-numeric: tabular-nums;
}

.work-hours-field[type='time']::-webkit-calendar-picker-indicator {
  display: none;
}

.work-hours-field:hover {
  border-color: var(--color-gray-100);
}

.work-hours-field:focus-visible {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent);
}

.work-hours-secondary-button {
  display: inline-flex;
  min-height: 2.75rem;
  cursor: pointer;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--color-gray-400);
  border-radius: 0.5rem;
  padding: 0 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-gray-100);
  transition: border-color 0.15s;
}

.work-hours-secondary-button:hover {
  border-color: var(--color-gray-100);
}

.work-hours-secondary-button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
</style>
