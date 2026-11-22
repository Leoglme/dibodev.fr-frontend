<template>
  <div
    :id="props.anchorId"
    class="grid items-start gap-6 text-left lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-8"
  >
    <div class="grid content-start gap-5 rounded-2xl border border-gray-300 bg-white p-4 sm:p-6">
      <div class="grid grid-cols-2 gap-2" role="group" :aria-label="props.wording.modeGroupLabel">
        <button
          v-for="mode in VAT_CALCULATOR_MODES"
          :key="mode"
          type="button"
          class="vat-choice-button"
          :aria-pressed="selectedMode === mode"
          @click="selectedMode = mode"
        >
          {{ props.wording.modeLabels[mode] }}
        </button>
      </div>

      <div v-if="selectedMode === 'single'" class="grid gap-5 border-t border-gray-300 pt-5">
        <div class="grid gap-1.5">
          <p id="vat-direction-label" class="text-[15px] font-medium text-gray-100">
            {{ props.wording.directionLabel }}
          </p>
          <div class="grid grid-cols-2 gap-2" role="group" aria-labelledby="vat-direction-label">
            <button
              v-for="direction in VAT_DIRECTIONS"
              :key="direction"
              type="button"
              class="vat-choice-button"
              :aria-pressed="selectedDirection === direction"
              @click="selectedDirection = direction"
            >
              {{ props.wording.directionLabels[direction] }}
            </button>
          </div>
        </div>

        <div class="grid gap-1.5">
          <label for="vat-amount" class="text-[15px] font-medium text-gray-100">{{
            props.wording.amountLabels[selectedDirection]
          }}</label>
          <input
            id="vat-amount"
            v-model="amountText"
            type="text"
            inputmode="decimal"
            autocomplete="off"
            :placeholder="props.wording.amountPlaceholder"
            class="vat-field"
            aria-describedby="vat-amount-hint"
          />
          <p id="vat-amount-hint" class="text-muted text-sm leading-6">{{ props.wording.amountHint }}</p>
        </div>

        <div class="grid gap-1.5">
          <p id="vat-rate-label" class="text-[15px] font-medium text-gray-100">{{ props.wording.rateLabel }}</p>
          <div class="flex flex-wrap gap-2" role="group" aria-labelledby="vat-rate-label">
            <button
              v-for="standardRatePercent in STANDARD_VAT_RATE_PERCENTS"
              :key="standardRatePercent"
              type="button"
              class="vat-choice-button"
              :aria-pressed="!isCustomRateSelected && selectedStandardRatePercent === standardRatePercent"
              @click="selectStandardRate(standardRatePercent)"
            >
              {{ formatRate(standardRatePercent) }}
            </button>
            <button
              type="button"
              class="vat-choice-button"
              :aria-pressed="isCustomRateSelected"
              @click="isCustomRateSelected = true"
            >
              {{ props.wording.customRateButton }}
            </button>
          </div>
          <div v-if="isCustomRateSelected" class="mt-2 grid gap-1.5">
            <label for="vat-custom-rate" class="text-[15px] font-medium text-gray-100">{{
              props.wording.customRateLabel
            }}</label>
            <input
              id="vat-custom-rate"
              v-model="customRateText"
              type="text"
              inputmode="decimal"
              autocomplete="off"
              class="vat-field"
              aria-describedby="vat-custom-rate-hint"
            />
            <p id="vat-custom-rate-hint" class="text-muted text-sm leading-6">{{ props.wording.customRateHint }}</p>
          </div>
        </div>
      </div>

      <div v-else class="grid gap-4 border-t border-gray-300 pt-5">
        <ul class="grid gap-3">
          <li
            v-for="(lineEntry, lineIndex) in quoteLineEntries"
            :key="lineEntry.lineId"
            class="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)_minmax(0,1.1fr)] gap-2 rounded-xl border border-gray-300 p-3 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] sm:gap-3"
          >
            <div class="col-span-full flex items-end gap-2">
              <div class="grid min-w-0 flex-1 gap-1">
                <label :for="fieldId(lineEntry.lineId, 'name')" class="text-muted text-xs">
                  <span class="sr-only">{{ lineNumberLabel(lineIndex) }}, </span>{{ props.wording.lineNameLabel }}
                </label>
                <input
                  :id="fieldId(lineEntry.lineId, 'name')"
                  v-model="lineEntry.label"
                  type="text"
                  autocomplete="off"
                  :placeholder="props.wording.lineNamePlaceholder"
                  class="vat-field"
                />
              </div>
              <button
                type="button"
                class="vat-icon-button"
                :disabled="quoteLineEntries.length === 1"
                :aria-label="removeLineLabel(lineIndex)"
                @click="removeLine(lineEntry.lineId)"
              >
                <DibodevIcon name="X" mode="stroke" :width="18" :height="18" aria-hidden="true" />
              </button>
            </div>
            <div class="grid content-start gap-1">
              <label :for="fieldId(lineEntry.lineId, 'quantity')" class="text-muted text-xs">
                <span class="sr-only">{{ lineNumberLabel(lineIndex) }}, </span>{{ props.wording.quantityLabel }}
              </label>
              <input
                :id="fieldId(lineEntry.lineId, 'quantity')"
                v-model="lineEntry.quantityText"
                type="text"
                inputmode="decimal"
                autocomplete="off"
                class="vat-field"
              />
            </div>
            <div class="grid content-start gap-1">
              <label :for="fieldId(lineEntry.lineId, 'unit-price')" class="text-muted text-xs">
                <span class="sr-only">{{ lineNumberLabel(lineIndex) }}, </span>{{ props.wording.unitPriceLabel }}
              </label>
              <input
                :id="fieldId(lineEntry.lineId, 'unit-price')"
                v-model="lineEntry.unitPriceText"
                type="text"
                inputmode="decimal"
                autocomplete="off"
                :placeholder="props.wording.amountPlaceholder"
                class="vat-field"
              />
            </div>
            <div class="grid content-start gap-1">
              <label :for="fieldId(lineEntry.lineId, 'rate')" class="text-muted text-xs">
                <span class="sr-only">{{ lineNumberLabel(lineIndex) }}, </span>{{ props.wording.lineRateLabel }}
              </label>
              <select :id="fieldId(lineEntry.lineId, 'rate')" v-model.number="lineEntry.ratePercent" class="vat-field">
                <option
                  v-for="standardRatePercent in STANDARD_VAT_RATE_PERCENTS"
                  :key="standardRatePercent"
                  :value="standardRatePercent"
                >
                  {{ formatRate(standardRatePercent) }}
                </option>
              </select>
            </div>
            <p
              class="col-span-full flex items-baseline justify-between gap-3 text-[15px] leading-5 text-gray-100 sm:col-span-1 sm:grid sm:content-start sm:justify-items-end sm:gap-1"
            >
              <span class="text-muted text-xs">{{ props.wording.lineTotalLabel }}</span>
              <span class="font-medium tabular-nums sm:flex sm:min-h-11 sm:items-center">{{
                formatAmount(lineAmountExcludingTax(lineIndex))
              }}</span>
            </p>
          </li>
        </ul>

        <p class="text-muted text-sm leading-6">{{ props.wording.roundingNote }}</p>
      </div>

      <div class="flex flex-wrap gap-2">
        <button
          v-if="selectedMode === 'lines'"
          type="button"
          class="vat-secondary-button"
          :disabled="quoteLineEntries.length >= MAXIMUM_QUOTE_LINE_COUNT"
          @click="addLine"
        >
          <span aria-hidden="true">+</span>
          {{ props.wording.addLineButton }}
        </button>
        <button type="button" class="vat-secondary-button" @click="clearAll">
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
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ resultLabel }}</p>
          <p
            class="text-4xl font-medium tracking-[-0.01em] break-words tabular-nums sm:text-5xl lg:text-4xl xl:text-5xl"
          >
            {{ formatAmount(headlineAmount) }}
          </p>
          <p v-if="hasResult" class="text-[15px] leading-6 text-white/85">{{ vatLine }}</p>
        </div>

        <p v-if="!hasResult" class="text-[15px] leading-6 text-white/85">
          {{ props.wording.emptyResultTexts[selectedMode] }}
        </p>

        <dl v-else class="grid gap-2">
          <div
            v-for="resultRow in resultRows"
            :key="resultRow.rowKey"
            class="flex items-baseline justify-between gap-3 rounded-xl bg-white/10 px-4 py-3"
          >
            <dt class="text-sm leading-5 text-white/85" :class="{ 'font-medium text-white': resultRow.isTotal }">
              {{ resultRow.label }}
            </dt>
            <dd class="text-lg font-medium whitespace-nowrap tabular-nums" :class="{ 'sm:text-xl': resultRow.isTotal }">
              {{ formatAmount(resultRow.amount) }}
            </dd>
          </div>
        </dl>

        <div v-if="hasResult && formulaText" class="grid gap-1.5 border-t border-white/20 pt-5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.formulaLabel }}</p>
          <p class="text-lg leading-7 font-medium tabular-nums">{{ formulaText }}</p>
        </div>

        <div class="grid gap-2">
          <button
            type="button"
            class="text-primary-dark flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-[15px] leading-6 font-medium transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="!hasResult"
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
  DibodevVatAmounts,
  DibodevVatCalculatorMode,
  DibodevVatCopyStatus,
  DibodevVatDirection,
  DibodevVatQuoteLineEntry,
  DibodevVatQuoteResult,
  DibodevVatRateBreakdown,
  DibodevVatResultRow,
  DibodevVatSummaryFormat,
} from '~/core/types/DibodevVat'
import type { DibodevVatCalculatorProps } from '~/core/types/DibodevVatCalculator'
import type { DibodevVatCalculatorWording } from '~/core/types/DibodevVatCalculatorPage'
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import {
  DEFAULT_VAT_RATE_PERCENT,
  INITIAL_QUOTE_LINE_COUNT,
  MAXIMUM_QUOTE_LINE_COUNT,
  STANDARD_VAT_RATE_PERCENTS,
  VAT_CALCULATOR_MODES,
  VAT_DIRECTIONS,
} from '~/core/constants/vatCalculator/pageShared'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'
import { VatUtils } from '~/core/utils/VatUtils'

const CALCULATION_TRACKING_DELAY_MS: number = 1500

/** Converts one amount between price without and with VAT, or adds up quote lines at several rates, with the VAT split by rate. */
const props: DibodevVatCalculatorProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevVatCalculatorWording>,
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

const selectedMode: Ref<DibodevVatCalculatorMode> = ref('single')
const selectedDirection: Ref<DibodevVatDirection> = ref('fromExcludingTax')
const amountText: Ref<string> = ref('')
const selectedStandardRatePercent: Ref<number> = ref(DEFAULT_VAT_RATE_PERCENT)
const isCustomRateSelected: Ref<boolean> = ref(false)
const customRateText: Ref<string> = ref('')
const nextQuoteLineId: Ref<number> = ref(1)
const quoteLineEntries: Ref<DibodevVatQuoteLineEntry[]> = ref(createInitialQuoteLines())
const copyStatus: Ref<DibodevVatCopyStatus> = ref('idle')
const hasTrackedStart: Ref<boolean> = ref(false)
const hasTrackedCalculation: Ref<boolean> = ref(false)
const calculationTrackingTimer: Ref<ReturnType<typeof setTimeout> | null> = ref(null)

const appliedRatePercent: ComputedRef<number> = computed((): number =>
  isCustomRateSelected.value ? VatUtils.parseRatePercent(customRateText.value) : selectedStandardRatePercent.value,
)

const singleAmounts: ComputedRef<DibodevVatAmounts> = computed(
  (): DibodevVatAmounts =>
    VatUtils.computeAmounts(VatUtils.parseAmount(amountText.value), appliedRatePercent.value, selectedDirection.value),
)

const quote: ComputedRef<DibodevVatQuoteResult> = computed(
  (): DibodevVatQuoteResult => VatUtils.computeQuote(quoteLineEntries.value),
)

const hasResult: ComputedRef<boolean> = computed((): boolean =>
  selectedMode.value === 'single' ? singleAmounts.value.amountIncludingTax > 0 : quote.value.filledLineCount > 0,
)

const resultLabel: ComputedRef<string> = computed((): string =>
  selectedMode.value === 'single'
    ? props.wording.singleResultLabels[selectedDirection.value]
    : props.wording.quoteResultLabel,
)

const headlineAmount: ComputedRef<number> = computed((): number => {
  if (selectedMode.value === 'lines') {
    return quote.value.totalIncludingTax
  }
  return selectedDirection.value === 'fromExcludingTax'
    ? singleAmounts.value.amountIncludingTax
    : singleAmounts.value.amountExcludingTax
})

const vatLine: ComputedRef<string> = computed((): string =>
  selectedMode.value === 'single'
    ? QuizTextUtils.fillTemplate(props.wording.singleVatLineTemplate, {
        rate: formatRate(singleAmounts.value.ratePercent),
        amount: formatAmount(singleAmounts.value.vatAmount),
      })
    : QuizTextUtils.fillTemplate(props.wording.quoteVatLineTemplate, { amount: formatAmount(quote.value.totalVat) }),
)

const resultRows: ComputedRef<DibodevVatResultRow[]> = computed((): DibodevVatResultRow[] =>
  selectedMode.value === 'single' ? buildSingleResultRows() : buildQuoteResultRows(),
)

const formulaText: ComputedRef<string | null> = computed((): string | null =>
  selectedMode.value === 'single'
    ? VatUtils.buildFormulaText(
        singleAmounts.value,
        selectedDirection.value,
        props.wording.formulaTemplates,
        props.numberLocale,
      )
    : null,
)

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
 * Builds one empty quote line at the default rate, with the next free id.
 * @returns {DibodevVatQuoteLineEntry} The empty line.
 */
function createEmptyQuoteLine(): DibodevVatQuoteLineEntry {
  const lineId: number = nextQuoteLineId.value

  nextQuoteLineId.value += 1
  return { lineId, label: '', quantityText: '1', unitPriceText: '', ratePercent: DEFAULT_VAT_RATE_PERCENT }
}

/**
 * Builds the empty lines shown when the quote mode opens.
 * @returns {DibodevVatQuoteLineEntry[]} The empty lines.
 */
function createInitialQuoteLines(): DibodevVatQuoteLineEntry[] {
  return Array.from({ length: INITIAL_QUOTE_LINE_COUNT }, (): DibodevVatQuoteLineEntry => createEmptyQuoteLine())
}

/**
 * Builds the id of a quote line field from its line and its kind ("vat-line-2-quantity").
 * @param {number} lineId - The id of the line.
 * @param {string} fieldName - "name", "quantity", "unit-price" or "rate".
 * @returns {string} The id.
 */
function fieldId(lineId: number, fieldName: string): string {
  return `vat-line-${lineId}-${fieldName}`
}

/**
 * Names a quote line by its position ("Ligne 2").
 * @param {number} lineIndex - Position of the line, the first being 0.
 * @returns {string} The name.
 */
function lineNumberLabel(lineIndex: number): string {
  return QuizTextUtils.fillTemplate(props.wording.lineNumberTemplate, { number: String(lineIndex + 1) })
}

/**
 * Writes the accessible name of the button that removes a quote line.
 * @param {number} lineIndex - Position of the line, the first being 0.
 * @returns {string} The name.
 */
function removeLineLabel(lineIndex: number): string {
  return QuizTextUtils.fillTemplate(props.wording.removeLineTemplate, { number: String(lineIndex + 1) })
}

/**
 * Reads the computed amount without VAT of a quote line.
 * @param {number} lineIndex - Position of the line, the first being 0.
 * @returns {number} The amount, 0 while the line is not filled.
 */
function lineAmountExcludingTax(lineIndex: number): number {
  return quote.value.lines[lineIndex]?.amountExcludingTax ?? 0
}

/**
 * Writes an amount in euros in the page language.
 * @param {number} amount - The amount.
 * @returns {string} The amount.
 */
function formatAmount(amount: number): string {
  return VatUtils.formatAmount(amount, props.numberLocale)
}

/**
 * Writes a rate with its percent sign in the page language.
 * @param {number} ratePercent - The VAT rate in percent.
 * @returns {string} The rate.
 */
function formatRate(ratePercent: number): string {
  return VatUtils.formatRate(ratePercent, props.wording.rateTemplate, props.numberLocale)
}

/**
 * Lists the three amounts of a single conversion for the result panel.
 * @returns {DibodevVatResultRow[]} Price without VAT, VAT, price with VAT.
 */
function buildSingleResultRows(): DibodevVatResultRow[] {
  return [
    {
      rowKey: 'excluding-tax',
      label: props.wording.amountExcludingTaxLabel,
      amount: singleAmounts.value.amountExcludingTax,
      isTotal: false,
    },
    {
      rowKey: 'vat',
      label: QuizTextUtils.fillTemplate(props.wording.vatAmountTemplate, {
        rate: formatRate(singleAmounts.value.ratePercent),
      }),
      amount: singleAmounts.value.vatAmount,
      isTotal: false,
    },
    {
      rowKey: 'including-tax',
      label: props.wording.amountIncludingTaxLabel,
      amount: singleAmounts.value.amountIncludingTax,
      isTotal: true,
    },
  ]
}

/**
 * Lists the totals of the quote for the result panel: total without VAT, VAT of each rate, total VAT when several rates, total with VAT.
 * @returns {DibodevVatResultRow[]} The rows, in the order of a quote footer.
 */
function buildQuoteResultRows(): DibodevVatResultRow[] {
  const rateRows: DibodevVatResultRow[] = quote.value.rateBreakdowns.map(
    (rateBreakdown: DibodevVatRateBreakdown): DibodevVatResultRow => ({
      rowKey: `vat-${rateBreakdown.ratePercent}`,
      label: QuizTextUtils.fillTemplate(props.wording.vatOnBaseTemplate, {
        rate: formatRate(rateBreakdown.ratePercent),
        base: formatAmount(rateBreakdown.baseExcludingTax),
      }),
      amount: rateBreakdown.vatAmount,
      isTotal: false,
    }),
  )
  const totalVatRows: DibodevVatResultRow[] =
    rateRows.length > 1
      ? [{ rowKey: 'total-vat', label: props.wording.totalVatLabel, amount: quote.value.totalVat, isTotal: false }]
      : []

  return [
    {
      rowKey: 'total-excluding-tax',
      label: props.wording.totalExcludingTaxLabel,
      amount: quote.value.totalExcludingTax,
      isTotal: false,
    },
    ...rateRows,
    ...totalVatRows,
    {
      rowKey: 'total-including-tax',
      label: props.wording.totalIncludingTaxLabel,
      amount: quote.value.totalIncludingTax,
      isTotal: true,
    },
  ]
}

/**
 * Selects one of the four standard rates and leaves the custom rate.
 * @param {number} ratePercent - The standard rate in percent.
 * @returns {void}
 */
function selectStandardRate(ratePercent: number): void {
  selectedStandardRatePercent.value = ratePercent
  isCustomRateSelected.value = false
}

/**
 * Adds an empty line at the end of the quote, up to the maximum.
 * @returns {void}
 */
function addLine(): void {
  if (quoteLineEntries.value.length >= MAXIMUM_QUOTE_LINE_COUNT) {
    return
  }
  quoteLineEntries.value.push(createEmptyQuoteLine())
}

/**
 * Removes a line of the quote, the last remaining line being kept.
 * @param {number} lineId - The id of the line.
 * @returns {void}
 */
function removeLine(lineId: number): void {
  if (quoteLineEntries.value.length === 1) {
    return
  }
  quoteLineEntries.value = quoteLineEntries.value.filter(
    (lineEntry: DibodevVatQuoteLineEntry): boolean => lineEntry.lineId !== lineId,
  )
}

/**
 * Empties the fields of the mode shown and puts its rate back to the default.
 * @returns {void}
 */
function clearAll(): void {
  if (selectedMode.value === 'lines') {
    quoteLineEntries.value = createInitialQuoteLines()
    return
  }
  amountText.value = ''
  customRateText.value = ''
  selectStandardRate(DEFAULT_VAT_RATE_PERCENT)
}

/**
 * Copies the plain-text summary of the result to the clipboard and says whether it worked.
 * @returns {Promise<void>}
 */
async function copySummary(): Promise<void> {
  const summaryFormat: DibodevVatSummaryFormat = {
    numberLocale: props.numberLocale,
    rateTemplate: props.wording.rateTemplate,
    wording: props.wording.summary,
  }
  const isQuote: boolean = selectedMode.value === 'lines'
  const summaryText: string = VatUtils.buildSummaryText(
    isQuote ? props.wording.summary.quoteTitle : props.wording.summary.singleTitle,
    isQuote ? VatUtils.buildQuoteLineTexts(quoteLineEntries.value, quote.value, summaryFormat) : [],
    resultRows.value,
    formulaText.value,
    summaryFormat,
  )

  try {
    await navigator.clipboard.writeText(summaryText)
    copyStatus.value = 'copied'
  } catch {
    copyStatus.value = 'failed'
  }
}

/**
 * Tracks the first action in the calculator, once per page view.
 * @returns {void}
 */
function trackCalculatorStart(): void {
  if (hasTrackedStart.value) {
    return
  }
  hasTrackedStart.value = true
  track(TRACKING_EVENTS.vatCalculatorStarted, { location: props.trackingLocation })
}

/**
 * Tracks the first result once it has stayed unchanged for a moment, so an amount being typed sends nothing.
 * @returns {void}
 */
function scheduleCalculationTracking(): void {
  if (hasTrackedCalculation.value) {
    return
  }
  if (calculationTrackingTimer.value) {
    clearTimeout(calculationTrackingTimer.value)
  }
  if (!hasResult.value) {
    return
  }
  calculationTrackingTimer.value = setTimeout((): void => {
    hasTrackedCalculation.value = true
    track(TRACKING_EVENTS.vatCalculated, {
      location: props.trackingLocation,
      mode: selectedMode.value,
      direction: selectedMode.value === 'single' ? selectedDirection.value : 'fromExcludingTax',
    })
  }, CALCULATION_TRACKING_DELAY_MS)
}

watch(
  [
    selectedMode,
    selectedDirection,
    amountText,
    selectedStandardRatePercent,
    isCustomRateSelected,
    customRateText,
    quoteLineEntries,
  ],
  (): void => {
    trackCalculatorStart()
    copyStatus.value = 'idle'
  },
  { deep: true },
)

watch([selectedMode, singleAmounts, quote], (): void => scheduleCalculationTracking())

onBeforeUnmount((): void => {
  if (calculationTrackingTimer.value) {
    clearTimeout(calculationTrackingTimer.value)
  }
})
</script>

<style scoped>
.vat-field {
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

.vat-field:hover {
  border-color: var(--color-gray-100);
}

.vat-field:focus-visible {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent);
}

.vat-choice-button {
  min-height: 2.75rem;
  cursor: pointer;
  border: 1px solid var(--color-gray-400);
  border-radius: 0.5rem;
  background-color: white;
  padding: 0.375rem 0.875rem;
  font-size: 15px;
  line-height: 1.25rem;
  font-weight: 500;
  color: var(--color-gray-100);
  font-variant-numeric: tabular-nums;
  transition:
    border-color 0.15s,
    background-color 0.15s,
    color 0.15s;
}

.vat-choice-button:hover {
  border-color: var(--color-gray-100);
}

.vat-choice-button[aria-pressed='true'] {
  border-color: var(--color-gray-100);
  background-color: var(--color-gray-100);
  color: white;
}

.vat-secondary-button {
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

.vat-icon-button {
  display: inline-flex;
  height: 2.75rem;
  width: 2.75rem;
  flex-shrink: 0;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-gray-400);
  border-radius: 0.5rem;
  color: var(--color-gray-100);
  transition: border-color 0.15s;
}

.vat-secondary-button:hover,
.vat-icon-button:hover {
  border-color: var(--color-gray-100);
}

.vat-secondary-button:disabled,
.vat-icon-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.vat-choice-button:focus-visible,
.vat-secondary-button:focus-visible,
.vat-icon-button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
</style>
