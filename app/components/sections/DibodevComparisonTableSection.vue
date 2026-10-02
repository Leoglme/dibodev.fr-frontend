<template>
  <section id="comparison" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" align="center" />

      <div class="hidden overflow-hidden rounded-2xl border border-gray-300 bg-white lg:block">
        <table class="w-full table-fixed border-collapse text-left">
          <thead>
            <tr class="border-b border-gray-300">
              <th scope="col" class="text-muted w-[22%] px-6 py-5 text-xs font-medium tracking-[0.08em] uppercase">
                {{ props.criterionLabel }}
              </th>
              <th
                v-for="(column, columnIndex) in props.columns"
                :key="column"
                scope="col"
                class="px-6 py-5 text-base font-medium text-gray-100"
                :class="columnIndex === props.highlightedColumn ? 'bg-surface-tint' : ''"
              >
                {{ column }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in props.rows" :key="row.label" class="border-b border-gray-300 last:border-b-0">
              <th scope="row" class="px-6 py-5 align-top text-[15px] font-medium text-gray-100">{{ row.label }}</th>
              <td
                v-for="(cell, cellIndex) in row.cells"
                :key="`${row.label}-${cellIndex}`"
                class="px-6 py-5 align-top"
                :class="cellIndex === props.highlightedColumn ? 'bg-surface-tint' : ''"
              >
                <div class="flex items-start gap-3">
                  <span
                    class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                    :class="STATE_CLASSES[cell.state]"
                    aria-hidden="true"
                  >
                    <DibodevIcon :name="STATE_ICONS[cell.state]" mode="stroke" :width="16" :height="16" />
                  </span>
                  <span class="text-sm leading-6 text-gray-200">
                    <span class="sr-only">{{ stateLabels[cell.state] }} : </span>{{ cell.text }}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="grid gap-4 lg:hidden">
        <div v-if="hasSummary" class="bg-surface-tint rounded-2xl border border-gray-300 p-5 sm:p-6">
          <p class="text-base font-medium text-gray-100">{{ props.columns[props.highlightedColumn] }}</p>
          <ul class="mt-5 grid gap-4 md:grid-cols-2 md:gap-x-8">
            <li v-for="item in summaryItems" :key="`summary-${item.label}`" class="flex items-start gap-3">
              <span
                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                :class="STATE_CLASSES[item.cell.state]"
                aria-hidden="true"
              >
                <DibodevIcon :name="STATE_ICONS[item.cell.state]" mode="stroke" :width="16" :height="16" />
              </span>
              <span class="grid gap-0.5">
                <span class="text-[15px] leading-6 font-medium text-gray-100">{{ item.label }}</span>
                <span class="text-sm leading-6 text-gray-200">
                  <span class="sr-only">{{ stateLabels[item.cell.state] }} : </span>{{ item.cell.text }}
                </span>
              </span>
            </li>
          </ul>
        </div>

        <DibodevButton
          v-if="hasSummary || hasCollapsedRows"
          outlined
          class="w-full"
          :class="{ 'order-last': hasCollapsedRows }"
          :icon="isDetailsOpen ? 'ChevronUp' : 'ChevronDown'"
          iconPosition="right"
          :aria-expanded="isDetailsOpen"
          aria-controls="comparison-details"
          @click="toggleDetails"
        >
          {{ isDetailsOpen ? t('comparison.hideDetails') : t('comparison.showDetails') }}
        </DibodevButton>

        <ul v-show="isDetailsOpen || !hasSummary" id="comparison-details" class="grid gap-4 md:grid-cols-2">
          <li
            v-for="(row, rowIndex) in props.rows"
            v-show="isRowShownOnSmallScreens(rowIndex)"
            :key="row.label"
            class="grid content-start gap-4 rounded-xl border border-gray-300 bg-white p-5"
          >
            <h3 class="text-base font-medium text-gray-100">{{ row.label }}</h3>
            <ul class="grid gap-2">
              <li
                v-for="(cell, cellIndex) in row.cells"
                :key="`${row.label}-card-${cellIndex}`"
                class="flex items-start gap-3 rounded-lg p-3"
                :class="cellIndex === props.highlightedColumn ? 'bg-surface-tint' : ''"
              >
                <span
                  class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                  :class="STATE_CLASSES[cell.state]"
                  aria-hidden="true"
                >
                  <DibodevIcon :name="STATE_ICONS[cell.state]" mode="stroke" :width="16" :height="16" />
                </span>
                <span class="grid gap-0.5">
                  <span
                    class="text-xs font-medium tracking-[0.08em] uppercase"
                    :class="cellIndex === props.highlightedColumn ? 'text-gray-100' : 'text-muted'"
                  >
                    {{ props.columns[cellIndex] }}
                  </span>
                  <span class="text-sm leading-6 text-gray-200">
                    <span class="sr-only">{{ stateLabels[cell.state] }} : </span>{{ cell.text }}
                  </span>
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <slot name="footer" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ComputedRef, PropType, Ref } from 'vue'
import type {
  DibodevComparisonCell,
  DibodevComparisonRow,
  DibodevComparisonState,
  DibodevComparisonSummaryItem,
  DibodevComparisonTableSectionProps,
} from '~/core/types/DibodevComparisonTableSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** Icon of each coverage state. */
const STATE_ICONS: Record<DibodevComparisonState, string> = {
  yes: 'Check',
  partial: 'Info',
  no: 'XCircle',
}

/** Colours of each coverage state (green, amber, grey), readable on white. */
const STATE_CLASSES: Record<DibodevComparisonState, string> = {
  yes: 'bg-[#e4f8ec] text-[#047857]',
  partial: 'bg-[#fdf1dc] text-[#b45309]',
  no: 'bg-gray-600 text-gray-200',
}

/**
 * Side-by-side comparison of options (off-the-shelf software, agency, custom-built with Dibodev),
 * criterion by criterion: a table on wide screens; on tablets and phones, the recommended option first,
 * with the full comparison one tap away.
 */
const props: DibodevComparisonTableSectionProps = defineProps({
  eyebrow: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  intro: {
    type: String as PropType<string>,
    default: '',
  },
  columns: {
    type: Array as PropType<string[]>,
    required: true,
  },
  highlightedColumn: {
    type: Number as PropType<number>,
    default: -1,
  },
  rows: {
    type: Array as PropType<DibodevComparisonRow[]>,
    required: true,
  },
  criterionLabel: {
    type: String as PropType<string>,
    default: '',
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'white',
  },
  collapsedRowCount: {
    type: Number as PropType<number>,
    default: 0,
  },
  trackingLocation: {
    type: String as PropType<string>,
    default: 'comparison',
  },
})

const { t } = useI18n()
const { track } = useTracking()

const isDetailsOpen: Ref<boolean> = ref<boolean>(false)

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])

/** Screen-reader label of each state, read before the explanation. */
const stateLabels: ComputedRef<Record<DibodevComparisonState, string>> = computed(
  (): Record<DibodevComparisonState, string> => ({
    yes: t('comparison.states.yes'),
    partial: t('comparison.states.partial'),
    no: t('comparison.states.no'),
  }),
)

/** Recommended option, criterion by criterion: the short list shown first on tablets and phones. */
const summaryItems: ComputedRef<DibodevComparisonSummaryItem[]> = computed((): DibodevComparisonSummaryItem[] =>
  props.rows.flatMap((row: DibodevComparisonRow): DibodevComparisonSummaryItem[] => {
    const cell: DibodevComparisonCell | undefined = row.cells[props.highlightedColumn]
    return cell ? [{ label: row.label, cell }] : []
  }),
)
/** Without a recommended option there is nothing to summarise: the full comparison is shown directly. */
const hasSummary: ComputedRef<boolean> = computed((): boolean => summaryItems.value.length > 0)
/** Without a summary, a long comparison can show its first criteria only, the rest one tap away. */
const hasCollapsedRows: ComputedRef<boolean> = computed(
  (): boolean => !hasSummary.value && props.collapsedRowCount > 0 && props.rows.length > props.collapsedRowCount,
)

/**
 * Tells whether a criterion card is shown on tablets and phones.
 * @param {number} rowIndex - Position of the criterion.
 * @returns {boolean} True when shown.
 */
function isRowShownOnSmallScreens(rowIndex: number): boolean {
  return !hasCollapsedRows.value || isDetailsOpen.value || rowIndex < props.collapsedRowCount
}

/**
 * Opens or closes the detailed comparison on tablets and phones, and tracks each opening.
 * @returns {void}
 */
function toggleDetails(): void {
  isDetailsOpen.value = !isDetailsOpen.value
  if (isDetailsOpen.value) track(TRACKING_EVENTS.comparisonDetailsOpened, { location: props.trackingLocation })
}
</script>
